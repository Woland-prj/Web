package main

import (
	_ "github.com/go-sql-driver/mysql" // Импортируем для возможности подключения к MySQL
    "github.com/jmoiron/sqlx"
	"log"
	"net/http"
)

const port = ":3000"

func main() {
	mux := http.NewServeMux()

	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	mux.HandleFunc("/home", index)
	mux.HandleFunc("/post", post)

	log.Println("Start server at port " + port)
	err := http.ListenAndServe(port, mux)
	if err != nil {
		log.Fatal(err)
	}
}

func openDB() (*sql.DB, error) {
	//return sql.Open("mysql", "что-то сложное")
}