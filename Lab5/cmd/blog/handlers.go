package main

import (
	"html/template"
	"log"
	"net/http"
)

type indexData struct {
	Featured []featuredPostData
	Recent   []recentPostData
}

type featuredPostData struct {
	Title        string
	Subtitle     string
	ImgModifer   string
	Author       string
	AuthorImg    string
	PubDate      string
	Metka        string
	MetkaModifer string
}

type recentPostData struct {
	Title     string
	Subtitle  string
	MainImg   string
	Author    string
	AuthorImg string
	PubDate   string
}

func featuredPosts() []featuredPostData {
	return []featuredPostData{
		{
			Title:        "The Road Ahead",
			Subtitle:     "The road ahead might be paved - it might not be.",
			ImgModifer:   "article-feature article-feature_left",
			Author:       "Mat Vogels",
			AuthorImg:    "/static/images/Mat_Vogels_avatar.jpg",
			PubDate:      "September 25, 2015",
			Metka:        "",
			MetkaModifer: "article-feature_metka article-feature_metka_off content__text_font_oxygen",
		},
		{
			Title:        "From Top Down",
			Subtitle:     "Once a year, go someplace you’ve never been before.",
			ImgModifer:   "article-feature article-feature_right",
			Author:       "William Wong",
			AuthorImg:    "/static/images/William_Wong_avatar.jpg",
			PubDate:      "September 25, 2015",
			Metka:        "adventure",
			MetkaModifer: "article-feature_metka article-feature_metka_on content__text_font_oxygen",
		},
	}
}

func recentPosts() []recentPostData {
	return []recentPostData{
		{
			Title:     "Still Standing Tall",
			Subtitle:  "Life begins at the end of your comfort zone.",
			MainImg:   "/static/images/still_standing_tall_image.jpg",
			Author:    "William Wong",
			AuthorImg: "/static/images/William_Wong_avatar.jpg",
			PubDate:   "9/25/2015",
		},
		{
			Title:     "Sunny Side Up",
			Subtitle:  "No place is ever as bad as they tell you it’s going to be.",
			MainImg:   "/static/images/sunny_side_up_image.png",
			Author:    "Mat Vogels",
			AuthorImg: "/static/images/Mat_Vogels_avatar.jpg",
			PubDate:   "9/25/2015",
		},
		{
			Title:     "Water Falls",
			Subtitle:  "We travel not to escape life, but for life not to escape us.",
			MainImg:   "/static/images/water_falls_image.png",
			Author:    "Mat Vogels",
			AuthorImg: "/static/images/Mat_Vogels_avatar.jpg",
			PubDate:   "9/25/2015",
		},
		{
			Title:     "Through the Mist",
			Subtitle:  "Travel makes you see what a tiny place you occupy in the world.",
			MainImg:   "/static/images/through_the_mist_image.png",
			Author:    "William Wong",
			AuthorImg: "/static/images/William_Wong_avatar.jpg",
			PubDate:   "9/25/2015",
		},
		{
			Title:     "Awaken Early",
			Subtitle:  "Not all those who wander are lost.",
			MainImg:   "/static/images/awaken_early_image.png",
			Author:    "Mat Vogels",
			AuthorImg: "/static/images/Mat_Vogels_avatar.jpg",
			PubDate:   "9/25/2015",
		},
		{
			Title:     "Try it Always",
			Subtitle:  "The world is a book, and those who do not travel read only one page.",
			MainImg:   "/static/images/try_it_always_image.jpg",
			Author:    "Mat Vogels",
			AuthorImg: "/static/images/Mat_Vogels_avatar.jpg",
			PubDate:   "9/25/2015",
		},
	}
}

func index(w http.ResponseWriter, r *http.Request) {
	ts, err := template.ParseFiles("pages/index.html", "static/styles/home.css")
	if err != nil {
		http.Error(w, "Internal Server Error", 500)
		log.Println(err.Error())
		return
	}

	data := indexData{
		Featured: featuredPosts(),
		Recent:   recentPosts(),
	}

	err = ts.Execute(w, data)
	if err != nil {
		http.Error(w, "Internal Server Error", 500)
		log.Println(err.Error())
		return
	}
}
