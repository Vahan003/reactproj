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

   getInput=(e,inpName)=>{

    this.setState ({
        [`${inpName}`] : e.target.value,
        style : {border : "1px solid white"} 
    })
    this.state.poster[`${inpName}`] = e.target.value;
   }
   
   onLogin=()=>{
     Api.postForm((data)=>{
         if(data !== undefined){
            this.setState({
                style : {border : "1.5px solid green"}}) ;
          setTimeout(() => {this.props.onWork()}, 500)
         }
         else{ 
        this.setState({
            style : {border : "1.5px solid red"}}) ;
         console.log("NOT LOGINED!");
         }
     },this.state.poster, 'https://it-blog-posts.herokuapp.com/api/people/login')
    }
    render() { 
        return (
        <div className="imgBack">
             <div className="titleText" style ={{color: "rgb(226, 138, 86)",fontSize:"40px"}}>
             Login
            </div>
        <div className="container">
        <div className="inpSection">
        <input className="inp" style={this.state.style} type ="text" onChange={(e)=>{this.getInput(e,"email")}}  placeholder={"Email"}/>
        <input className="inp" style={this.state.style} type ="password"  onChange={(e)=>{this.getInput(e,"password")}}  placeholder={"Password"}/>
        </div>
        <div className="butSection">
        <button className ="button" onClick={this.onLogin} >Submit</button>
        </div>
        </div>
        </div>  
        );
    }
}
 
export default Login;