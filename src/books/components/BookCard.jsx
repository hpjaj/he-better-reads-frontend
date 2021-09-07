import React from "react"
import { randomBackgroundColor } from "../../helpers/colorsHelper"
import { fullName } from "../../helpers/usersHelper"

const BookCard = ({ book, styles }) => {
  const { author } = book
  const cardHeight = styles.cardHeight || "h-48"
  const cardWidth = styles.cardWidth
  const cardPadding = styles.cardPadding || "p-2"
  const cardTitle = styles.cardTitle || "text-lg mb-3"
  const cardAuthor = styles.cardAuthor || "text-xs"

  return (
    <div className="wrapper">
      <div
        className={`relative ${cardHeight} ${cardWidth} ${cardPadding} rounded-sm text-center flex justify-center flex-col ${randomBackgroundColor()}`}
      >
        <h1 className={`relative ${cardTitle}`}>{book.title}</h1>
        <div className={`uppercase ${cardAuthor}`}>{fullName(author)}</div>
      </div>
      <div className="mt-1 flex text-xs">
        <div className="pl-3">{book.reviews_count}</div>
      </div>
    </div>
  )
}

BookCard.defaultProps = {
  styles: {},
}

export default BookCard
