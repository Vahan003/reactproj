import React, { PureComponent } from 'react';
import About from './About';
import Home from './Home'
import Login from './Login';
import Regis from './Regis';
import Work from './Work';

class Navigation extends PureComponent {
    constructor(props){
        super(props);
        this.state ={
            bar: "ABOUT",
            loggined: false
        }
    }
    onWork= ()=>{
        this.setState({
            bar: "",
            loggined:true});
    }
    onLogout=()=>{
        this.setState({
            bar: "LOGIN",
            loggined:false 
        });
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
     {!this.state.loggined?  <button className="tab" onClick={this.onLogin}>Log in</button>: null }
     {!this.state.loggined? <button className="tab" onClick={this.onRegis}>Registration</button>: null}
     {this.state.loggined? <button className="tab" onClick={this.onWork}>Workspace</button>: null}
     {this.state.loggined? <button className="tab" onClick={this.onLogout}>Logout</button>: null}
            </div>
            {this.state.bar === "ABOUT"? <About/>: null}
            {this.state.bar === "HOME"? <Home/>: null}
            {this.state.bar === "LOGIN"? <Login onWork={this.onWork}/>: null}
            {this.state.bar === "REGIS"? <Regis onLogin={this.onLogin}/>: null}
            {this.state.loggined? <Work/>:null}
        </div>  );
    }
}
 
export default Navigation;