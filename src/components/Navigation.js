import React, { PureComponent } from 'react';
import About from './About';
import Home from './Home'
import Login from './Login';
import Regis from './Regis';

class Navigation extends PureComponent {
    constructor(props){
        super(props);
        this.state ={
            bar: ""
        }
    }
    onAbout= () =>{
        this.setState({bar:"ABOUT"});
    }
    onLogin= () =>{
        this.setState({bar:"LOGIN"});
    }
    onRegis= () =>{
        this.setState({bar:"REGIS"});
    }
    onHome= () =>{
        this.setState({bar:"HOME"});
    }
    render() { 
        return (<div className="navigation">
            <div className="tabs">
            <button className="tab" onClick={this.onAbout}>About</button>
            <button className="tab" onClick={this.onHome}>Home</button>
            <button className="tab" onClick={this.onLogin}>Log in</button>
            <button className="tab" onClick={this.onRegis}>Registration</button>
            </div>
            {this.state.bar === "ABOUT"? <About/>: null}
            {this.state.bar === "HOME"? <Home/>: null}
            {this.state.bar === "LOGIN"? <Login/>: null}
            {this.state.bar === "REGIS"? <Regis/>: null}
            
        </div>  );
    }
}
 
export default Navigation;