import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BooksPage from "../books/containers/BooksPage"
import BookReviewPage from "../books/containers/BookReviewPage"

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/books" exact component={BooksPage} />
        </Switch>
      </div>
    </Router>
            <Route
              setCurrentUser={setCurrentUser}
              path="/books/:uuid/:slug/review"
              exact
              component={BookReviewPage}
            />
  )
}

export default App
