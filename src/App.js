import React from "react";
import ReactDOM from "react-dom";
import Results from "./Results";
import { Router, Link } from "@reach/router";
import Details from "./Details";

class App extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">Adopt-a Mia!</Link>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </header>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
