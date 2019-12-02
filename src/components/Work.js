import React, { PureComponent } from "react";
import Api from "../api/Api";
import AppContext from "../Context/context";
class Work extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      email: ""
    };
  }
  componentDidMount() {
    const ID_OF_LOGGINED = JSON.parse(localStorage.ID_OF_LOGGINED);
    this.context.getUserId(ID_OF_LOGGINED.userId);
    console.log(ID_OF_LOGGINED);
    Api.getForm(data => {
      this.setState({
        username: data.username,
        lastname: data.lastname,
        email: data.email
      });
    }, `https://it-blog-posts.herokuapp.com/api/people/${ID_OF_LOGGINED.userId}`);
  }
  static contextType = AppContext;
  render() {
    return (
      <div className="imgBack">
        <div className="titleText">
          <div>{this.state.username}</div>
          Wellcome!
        </div>
        <div className="userdata">
          <div>{this.state.email}</div>
          <div>{this.state.lastname}</div>
        </div>
      </div>
    );
  }
}

export default Work;
