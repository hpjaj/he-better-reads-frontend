import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BookCard from "../components/BookCard"
import baseAPI from "../../helpers/baseAPI"

const BooksPage = () => {
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])

  useEffect(() => {
    baseAPI
      .get("/api/books")
      .then((response) => {
        setBooks(response.data)
        setLoading(true)
      })
      .catch((error) => console.log("BooksPage error:", error))
  }, [books.length])

  const bookCards = () => {
    return books.map((book) => {
      return (
        <Link to={`/books/${book.uuid}/${book.slug}`} key={book.uuid}>
          <BookCard book={book} />
        </Link>
      )
    })
  }

  if (!loading) {
    return <div>Loading...</div>
  }

  if (loading && books.length === 0) {
    return <div>No books to see</div>
  }

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-6 lg:grid-cols-8 xl:gap-x-8 2xl:grid-cols-10">
      {bookCards()}
    </div>
  )
}

export default BooksPage
