import React, { useState } from "react"
import axios from "axios"
import Button from "../../shared/components/Button"
import { setToken } from "../../helpers/authHelpers"

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })
  const [errors, setErrors] = useState(null)
  const inputClasses =
    "mt-3 border-1 border-gray-300 rounded-md p-2 w-full md:w-80"

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event, formData) => {
    event.preventDefault()

    axios
      .post("/api/users", formData)
      .then((resp) => {
        setToken(resp.data.token)
        window.location = "/books"
      })
      .catch((resp) => {
        setErrors(resp.response.data.errors)
      })
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

  return (
    <div>
      <h1 className="text-2xl mb-5 text-center">Sign Up</h1>
      <form className="flex flex-col text-center">
        <label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="first name"
          />
        </label>
        <label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="last name"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="email"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={inputClasses}
            placeholder="password"
          />
        </label>
        <label>
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className={inputClasses}
            placeholder="password confirmation"
          />
        </label>
        {errors && displayErrors()}
        <div className="mt-10">
          <Button
            type="submit"
            onClick={(event) => handleSubmit(event, formData)}
            wrapperClasses="bg-yellow-300 hover:bg-yellow-400"
            content="Sign Up!"
          />
        </div>
      </form>
    </div>
  )
}

export default SignUpPage
