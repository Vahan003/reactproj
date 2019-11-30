import React, { PureComponent } from 'react';
import Api from '../api/Api'
class Login extends PureComponent {
   constructor(props){
       super(props);
       this.state={
        password: "" ,  
        email: "",
        style : {border : "1px solid white"},
        poster:{
            password: "" ,  
            email: "",  
        }
       }
     }
   getEmail=(e)=>{
       this.setState ({
           email: e.target.value,
           style : {border : "1px solid white"} 
        })
        this.state.poster.email = e.target.value;
    }
      
   getPass=(e)=>{
       this.setState ({
           password: e.target.value,
           style : {border : "1px solid white"} 
        })
        this.state.poster.password = e.target.value;
   }
   
   onLogin=()=>{
     Api.postLogin((data)=>{
         if(data !== undefined){
         console.log("Logined",data);
         }
         else{ 
        this.setState({
            email: "",
            password: "",
            style : {border : "1.5px solid red"}}) ;
         console.log("NOT LOGINED!");
         }
     },this.state.poster)
    }
    render() { 
        return (
        <div className="imgBack">
        <div className="container">
        <div className="inpSection">
        <input className="inp" style={this.state.style} type ="text" onChange={this.getEmail}  placeholder={"Email"}/>
        <input className="inp" style={this.state.style} type ="password"  onChange={this.getPass}  placeholder={"Password"}/>
        </div>
        <div className="butSection">
        <button className ="button" onClick={this.onLogin} onEnter={this.onLogin}>Submit</button>
        </div>
        </div>
        </div>  
        );
    }
}
 
export default Login;