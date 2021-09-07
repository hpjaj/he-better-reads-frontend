import React from "react"
import { format } from "date-fns"
import { fullName } from "../../helpers/usersHelper"
import { starRating } from "../../helpers/starRatings"

const Review = ({ review }) => {
  const { user } = review

  return (
    <div className="mb-6">
      <div className="text-sm">{fullName(user)}</div>
      <div className="text-sm">{starRating({ rating: review.rating })}</div>
      <div className="mb-3 text-xs">
        Reviewed on {format(new Date(review.created_at), "MMMM d, yyyy")}
      </div>
      <div className="text-sm">{review.description}</div>
    </div>
  )
}

export default Review
