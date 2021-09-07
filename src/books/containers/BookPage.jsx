import React, { useState, useEffect } from "react"
import baseAPI from "../../helpers/baseAPI"
import BookCard from "../components/BookCard"
import Review from "../../reviews/components/Review"
import Button from "../../shared/components/Button"

const BookPage = (props) => {
  const { uuid, slug } = props.match.params
  const [loadingBook, setLoadingBook] = useState(false)
  const [loadingReviews, setLoadingReviews] = useState(false)
  const [book, setBook] = useState(null)
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    baseAPI
      .get(`/api/books/${uuid}`)
      .then((response) => {
        setBook(response.data)
        setLoadingBook(true)
      })
      .catch((error) => console.log(error))
  }, [uuid])

  useEffect(() => {
    baseAPI
      .get(`/api/reviews/book/${uuid}`)
      .then((response) => {
        setReviews(response.data)
        setLoadingReviews(true)
      })
      .catch((error) => console.log(error))
  }, [uuid])

  const bookStyles = {
    cardHeight: "h-96 mx-auto md:mx-0",
    cardWidth: "w-64",
    cardPadding: "p-4",
    cardTitle: "mb-10 text-2xl",
    cardAuthor: "text-lg",
  }

  const listOfReviews = () => {
    return reviews.map((review) => <Review key={review.id} review={review} />)
  }

  if (!loadingBook) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="">
          <BookCard book={book} styles={bookStyles} />
        </div>
        <div className="md:col-start-2 md:col-end-10 lg:col-start-2 lg:col-end-4 xl:col-start-2 xl:col-end-5">
          {book.description}
        </div>
      </div>
      <div>
        <div className="my-10">
          <Button
            path={`/books/${uuid}/${slug}/review`}
            wrapperClasses="bg-yellow-300 hover:bg-yellow-400"
            content="Write a customer review"
          />
        </div>
        {loadingReviews && listOfReviews()}
      </div>
    </div>
  )
}

export default BookPage
