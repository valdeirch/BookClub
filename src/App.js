import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./store";

// Styles
import "./App.css";

// Pages
import BookDetails from "./pages/BookDetails";
import BooksList from "./pages/BooksList";
import Home from "./pages/Home";

// Components
import NavBar from "./components/NavBar";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/details/:id">
              <BookDetails />
            </Route>
            <Route path="/list/:category/:subject">
              <BooksList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
