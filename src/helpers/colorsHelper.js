import _ from "lodash"

export const backgroundColors = [
  "bg-red-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-indigo-400",
  "bg-purple-400",
  "bg-pink-400",
]

export const randomBackgroundColor = () => _.sample(backgroundColors)
