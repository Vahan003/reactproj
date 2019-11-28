import React, { Component } from 'react';
import Api from '../api/Api'
class Login extends Component {
   constructor(props){
       super(props);
       this.state={
        password: "" ,  
        email: ""
       }
   }
   inpStyle = "";
   getEmail=(e)=>{
       this.state.email =  e.target.value;
    }
      
   getPass=(e)=>{
    this.state.password = e.target.value;
   }
   
   onLogin=()=>{
     Api.postLogin((data)=>{
         if(data !== undefined){
         console.log("Logined",data);
         }
         else{
       this.inpStyle = "1px solid red";
       console.log("NOT LOGINED!")
         }
     },this.state)
   }
    render() { 
        return (<div className="container">
            <input className="inp" style= {{border:`${this.inpStyle}`}} type ="text" onChange={this.getEmail}/>
            <input className="inp" style= {{border:`${this.inpStyle}`}} type ="password" onChange={this.getPass}/>
            <button className ="button" onClick={this.onLogin}>Submit</button>
        </div>  );
    }
}
 
export default Login;