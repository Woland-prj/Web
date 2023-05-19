package main

import (
	"database/sql"
	"encoding/json"
	"html/template"
	"io"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
)

type indexData struct {
	Featured []*postsData
	Recent   []*postsData
}

type postsData struct {
	PostId     string `db:"post_id"`
	Title      string `db:"title"`
	Subtitle   string `db:"subtitle"`
	ImgModifer string `db:"image_modifer"`
	MainImg    string `db:"image_url"`
	Author     string `db:"author"`
	AuthorImg  string `db:"author_url"`
	PubDate    string `db:"pub_date"`
	PostURL    string
}

type postData struct {
	Title    string `db:"title"`
	Subtitle string `db:"subtitle"`
	MainImg  string `db:"image_url"`
	Text     string `db:"content"`
}

type postRequest struct {
	Title     string `json:"title"`
	Subtitle  string `json:"description"`
	Author    string `json:"author_name"`
	AuthorImg string `json:"author_avatar"`
	PubDate   string `json:"publish_date"`
	PostImg   string `json:"post_image"`
	CardImg   string `json:"card_image"`
	Text      string `json:"text"`
}

func featuredPosts(client *sqlx.DB) ([]*postsData, error) {
	const query = `
		SELECT
			post_id,
			title,
			subtitle,
			image_modifer,
			image_url,
			author,
			author_url,
			pub_date
		FROM 
			post
		WHERE featured = 1
	`

	var posts []*postsData

	err := client.Select(&posts, query)
	if err != nil {
		return nil, err
	}

	for _, post := range posts {
		post.PostURL = "/post/" + post.PostId
	}

	log.Println("futured posts removed successfully")

	return posts, nil
}

func recentPosts(client *sqlx.DB) ([]*postsData, error) {
	const query = `
		SELECT
			post_id,
			title,
			subtitle,
			image_url,
			author,
			author_url,
			pub_date
		FROM 
			post
		WHERE featured = 0
	`

	var posts []*postsData

	err := client.Select(&posts, query)
	if err != nil {
		return nil, err
	}

	for _, post := range posts {
		post.PostURL = "/post/" + post.PostId
	}

	log.Println("recent posts removed successfully")

	return posts, nil
}

func index(client *sqlx.DB) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		ts, err := template.ParseFiles("pages/index.html")

		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err.Error())
			return
		}

		featured, err := featuredPosts(client)

		if err != nil {
			log.Fatal(err)
			return
		}

		recent, err := recentPosts(client)

		if err != nil {
			log.Fatal(err)
			return
		}

		data := indexData{
			Featured: featured,
			Recent:   recent,
		}

		err = ts.Execute(w, data)
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err.Error())
			return
		}

		log.Println("Request completed successfully")
	}
}

func post(client *sqlx.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		postIdStr := mux.Vars(r)["postId"]

		postId, err := strconv.Atoi(postIdStr)
		if err != nil {
			http.Error(w, "Invalid post id", http.StatusForbidden)
			log.Println(err)
			return
		}

		post, err := postByID(client, postId)
		if err != nil {
			if err == sql.ErrNoRows {
				http.Error(w, "Post not found", http.StatusNotFound)
				log.Println(err)
				return
			}

			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err)
			return
		}

		ts, err := template.ParseFiles("pages/post.html")
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err)
			return
		}

		err = ts.Execute(w, post)
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err)
			return
		}

		log.Println("Request completed successfully")
	}
}

func postByID(client *sqlx.DB, postId int) (postData, error) {
	const query = `
		SELECT
			title,
			subtitle,
			image_url,
			content
		FROM
			post
		WHERE
			post_id = ?
	`
	// В SQL-запросе добавились параметры, как в шаблоне. ? означает параметр, который мы передаем в запрос ниже

	var post postData

	// Обязательно нужно передать в параметрах orderID
	err := client.Get(&post, query, postId)
	if err != nil {
		return postData{}, err
	}

	return post, nil
}

func admin(w http.ResponseWriter, r *http.Request) {
	ts, err := template.ParseFiles("pages/admin.html")

	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println(err.Error())
		return
	}

	err = ts.Execute(w, nil)

	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		log.Println(err.Error())
		return
	}

	log.Println("Request completed successfully")
}

func createPost(client *sqlx.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		reqData, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err.Error())
			return
		}

		var req postRequest

		err = json.Unmarshal(reqData, &req) // Отдали reqData и req на парсинг библиотеке json
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err.Error(), "lolololo")
			return
		}

		log.Println(req)
	}
}
