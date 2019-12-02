import React, { PureComponent } from "react";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Regis from "./Regis";
import Work from "./Work";
import AppContext from "../Context/context";
class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bar: "ABOUT",
      loggined: false,
      userId: ""
    };
  }
  componentWillMount() {
    if (localStorage.ID_OF_LOGGINED !== undefined) {
      this.setState({
        bar: "",
        loggined: true
      });
    }
  }
  onWork = () => {
    this.setState({
      bar: "",
      loggined: true
    });
  };
  onLogout = () => {
    this.setState({
      bar: "LOGIN",
      loggined: false
    });
    localStorage.removeItem("ID_OF_LOGGINED");
  };
  onAbout = () => {
    this.setState({ bar: "ABOUT" });
  };
  onLogin = () => {
    this.setState({ bar: "LOGIN" });
  };
  onRegis = () => {
    this.setState({ bar: "REGIS" });
  };
  onHome = () => {
    this.setState({ bar: "HOME" });
  };
  getUserId = idValue => {
    this.setState({ userId: idValue });
  };
  render() {
    return (
      <AppContext.Provider
        value={{getUserId: this.getUserId }}
      >
        <div className="navigation">
          <div className="tabs">
            <button className="tab" onClick={this.onAbout}>
              About
            </button>
            <button className="tab" onClick={this.onHome}>
              Home
            </button>
            {!this.state.loggined ? (
              <button className="tab" onClick={this.onLogin}>
                Log in
              </button>
            ) : null}
            {!this.state.loggined ? (
              <button className="tab" onClick={this.onRegis}>
                Registration
              </button>
            ) : null}
            {this.state.loggined ? (
              <button className="tab" onClick={this.onWork}>
                Workspace
              </button>
            ) : null}
            {this.state.loggined ? (
              <button className="tab" onDoubleClick={this.onLogout}>
                Logout
              </button>
            ) : null}
          </div>
          {this.state.bar === "ABOUT" ? <About /> : null}
          {this.state.bar === "HOME" ? <Home /> : null}
          {this.state.bar === "LOGIN" ? <Login onWork={this.onWork} /> : null}
          {this.state.bar === "REGIS" ? <Regis onLogin={this.onLogin} /> : null}
          {this.state.bar === "" && this.state.loggined ? <Work /> : null}
        </div>
      </AppContext.Provider>
    );
  }
}

export default Navigation;
