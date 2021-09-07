import React, { useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import Button from "../../shared/components/Button"
import { setToken } from "../../helpers/authHelpers"

const LogInPage = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)
  const inputClasses =
    "mt-3 border-1 border-gray-300 rounded-md p-2 w-full md:w-80"

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event, formData) => {
    event.preventDefault()

    if (formData.email.length === 0) {
      setError(["You must include an email address"])
    } else if (formData.password.length === 0) {
      setError(["You must include a password"])
    } else {
      axios
        .post("/api/sessions", formData)
        .then((resp) => {
          setToken(resp.data.token)
          history.push("/books")
        })
        .catch((resp) => {
          if (resp.response.status === 404) {
            setError("Did not find a user with that email address")
          } else {
            setError(resp.response.data.error)
          }
        })
    }
  }

  return (
    <div>
      <h1 className="text-2xl mb-5 text-center">Log In</h1>
      <form className="flex flex-col text-center">
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
        {error && <div className="mt-5 text-red-500">{error}</div>}
        <div className="mt-10">
          <Button
            type="submit"
            onClick={(event) => handleSubmit(event, formData)}
            wrapperClasses="bg-yellow-300 hover:bg-yellow-400"
            content="Log In"
          />
        </div>
      </form>
    </div>
  )
}

export default LogInPage
