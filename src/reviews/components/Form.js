import React, { useState } from "react"
import { useHistory } from "react-router"
import Button from "../../shared/components/Button"

const Form = ({ handleSubmit }) => {
  const history = useHistory()
  const [formData, setFormData] = useState({ rating: "", description: "" })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const path = document.location.pathname.split("/review")[0]
  const inputClasses = "mt-3 border-1 border-gray-300 rounded-md p-2"

  return (
    <form className="flex flex-col">
      <label className="flex flex-col mb-10 text-md font-bold">
        Overall rating
        <input
          type="number"
          className={inputClasses}
          value={formData.rating}
          onChange={handleChange}
          name="rating"
          min={1}
          max={5}
        />
      </label>

      <label className="flex flex-col mb-10 text-md font-bold">
        Add a written review
        <textarea
          className={inputClasses}
          value={formData.description}
          onChange={handleChange}
          name="description"
          rows={5}
          placeholder="Optional"
        />
      </label>
      <div className="flex flex-col-reverse md:flex-row justify-end">
        <Button
          onClick={() => history.push(path)}
          wrapperClasses="bg-gray-300 hover:bg-gray-200"
          content="Cancel"
        />
        <Button
          type="submit"
          onClick={(event) => handleSubmit(event, formData)}
          wrapperClasses="bg-yellow-300 hover:bg-yellow-400 mb-5 md:mb-0 md:ml-5"
          content="Submit review"
        />
      </div>
    </form>
  )
}

export default Form
