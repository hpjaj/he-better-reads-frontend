import React, { useState, useEffect } from "react"
import baseAPI from "../../helpers/baseAPI"
import { useHistory } from "react-router-dom"
import Form from "../../reviews/components/Form"
import BookCard from "../components/BookCard"

const BookReviewPage = (props) => {
  const history = useHistory()
  const { uuid, slug } = props.match.params
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    baseAPI
      .get(`/api/books/${uuid}`)
      .then((response) => {
        setBook(response.data)
        setLoading(true)
      })
      .catch((error) => console.log(error))
  }, [uuid])

  const handleSubmit = (event, formData) => {
    event.preventDefault()

    if (formData.rating.length === 0) {
      setErrors(["You must choose an overall rating"])
    } else {
      appendReviewables(formData)

      baseAPI
        .post(`/api/reviews/book/${uuid}`, formData)
        .then(() => {
          history.push(`/books/${uuid}/${slug}`)
        })
        .catch((resp) => {
          setErrors(resp.response.data.errors)
        })
    }
  }

  const appendReviewables = (formData) => {
    formData.reviewable_type = "Book"
    formData.reviewable_id = uuid
  }

  const displayErrors = () => {
    return (
      <div className="mt-5">
        {errors.map((error, index) => {
          return (
            <div className="text-red-500" key={index}>
              {error}
            </div>
          )
        })}
      </div>
    )
  }

  if (!loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-2xl mb-10">Create Review</h1>
      <div className="flex mb-10 flex-col md:flex-row">
        <div className="mx-auto md:mx-0">
          <BookCard book={book} styles={{ cardWidth: "w-32" }} />
        </div>
        <div className="md:ml-10 md:flex-grow">
          <Form handleSubmit={handleSubmit} />
          {errors && displayErrors()}
        </div>
      </div>
    </div>
  )
}

export default BookReviewPage
