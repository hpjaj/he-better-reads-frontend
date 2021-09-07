import React, { useState, useEffect } from "react"
import { Redirect, Route } from "react-router-dom"
import baseAPI from "../../helpers/baseAPI"

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    baseAPI
      .get("/api/sessions")
      .then(() => {
        setIsAuthenticated(true)
        setLoading(false)
      })
      .catch(() => {
        setIsAuthenticated(false)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return null
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default ProtectedRoute
