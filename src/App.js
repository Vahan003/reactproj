import React, { Component } from "react";
import "./styles/App.scss";
import "./styles/forms.scss";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
      </React.Fragment>
    );
  }
}
export default App;
