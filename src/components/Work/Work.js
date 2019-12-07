import React, { PureComponent } from "react";
import Api from "../../api/Api";
import AppContext from "../../Context/context";
import WorkUser from "./WorkUser";
import WorkSpace from "./WorkSpace/WorkSpace"
import "../../styles/workspace.scss"
class Work extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      email: "",
      workuser: false
    };
  }
  componentWillMount() {
    const ID_OF_LOGGINED = JSON.parse(localStorage.ID_OF_LOGGINED);
    this.context.getUserId(ID_OF_LOGGINED.userId);
    Api.getForm(data => {
      if (data!== undefined){
      this.setState({
        username: data.username,
        lastname: data.lastname,
        email: data.email
      });
      setTimeout(() => {
        this.setState({
          workuser: true
        });
      }, 800);
    }
    }, `https://it-blog-posts.herokuapp.com/api/people/${ID_OF_LOGGINED.userId}`);
  }
  static contextType = AppContext;
  render() {
    return (
      <div >
        {!this.state.workuser && (
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
        )}
        <div className ="home">
        {this.state.workuser && <WorkUser />}
        {this.state.workuser && <WorkSpace />}
        </div>
      </div>
    );
  }
}

export default Work;
