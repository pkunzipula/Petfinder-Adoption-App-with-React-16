import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt-a Mia!</h1>
        <Pet name="Sawyer" animal="Dog" breed="Awesee" />
        <Pet name="Dexipoo" animal="Cat" breed="Origin Unknown" />
        <Pet name="Jaque Blaque" animal="Dog" breed="Weiner Pincher" />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
