import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import BooksPage from "../books/containers/BooksPage"
import BookPage from "../books/containers/BookPage"
import BookReviewPage from "../books/containers/BookReviewPage"
import LogInPage from "../sessions/containers/LogInPage"
import NavBar from "./components/NavBar"
import UserContext from "../context/user"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <UserContext.Provider value={currentUser}>
      <Router>
        <NavBar setCurrentUser={setCurrentUser} />
        <div className="container mx-auto px-4 py-8">
          <Switch>
            <Route path="/" exact component={LogInPage} />
            <Route path="/login" exact component={LogInPage} />
            <ProtectedRoute
              setCurrentUser={setCurrentUser}
              path="/books"
              exact
              component={BooksPage}
            />
            <ProtectedRoute
              setCurrentUser={setCurrentUser}
              path="/books/:uuid/:slug"
              exact
              component={BookPage}
            />
            <ProtectedRoute
              setCurrentUser={setCurrentUser}
              path="/books/:uuid/:slug/review"
              exact
              component={BookReviewPage}
            />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App
