import React, {Component} from 'react';


class About extends Component{
    render() {
        return (
            <div className="about">
            <div className="imgBack">

            <div className="titleText">
                Hello
                <div className = "titleIn">
                    Welcome to my new project, the project includes the Registration, Entry, Workspace pages.
                    To enter the Workspace page you need to register.
                </div>

                <div className="butSection">
                <button className="button" onClick={this.props.onRegis}>Register</button>
                </div>
                </div>

        </div>
        </div>
        );
    }
}
 
export default About;