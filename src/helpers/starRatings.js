import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons"
import {
  faStar as faSolidStar,
  faStarHalfAlt as faHalfStar,
} from "@fortawesome/free-solid-svg-icons"
import _ from "lodash"

export const starRating = ({
  rating,
  possibleStars = 5,
  styles = "text-yellow-400",
}) => {
  if (!rating) {
    return null
  }

  let numOfHalfStars
  const splitStars = rating.toString().split(".")

  if (splitStars[1] === "5") {
    numOfHalfStars = 1
  } else {
    numOfHalfStars = 0
  }

  const numOfFullStars = parseInt(splitStars[0])
  const numOfEmptyStars = possibleStars - numOfFullStars - numOfHalfStars

  const full = _.times(numOfFullStars, () => 1)
  const half = _.times(numOfHalfStars, () => 0.5)
  const empty = _.times(numOfEmptyStars, () => 0)

  return full
    .concat(half)
    .concat(empty)
    .map((star, index) => {
      switch (star) {
        case 1:
          return (
            <FontAwesomeIcon
              key={index}
              icon={faSolidStar}
              className={styles}
            />
          )
        case 0.5:
          return (
            <FontAwesomeIcon key={index} icon={faHalfStar} className={styles} />
          )
        default:
          return (
            <FontAwesomeIcon
              key={index}
              icon={faEmptyStar}
              className={styles}
            />
          )
      }
    })
}
