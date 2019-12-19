import React, { PureComponent } from 'react';
import Api from '../api/Api'
class Regis extends PureComponent {
    constructor(props){
        super(props);
        this.state={
         lastname: "",
         username: "",
         password: "" ,  
         email: "",
         style : {border : "1px solid white"},
         success :"",
         poster:{
             lastname: "",
             username: "",
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
    
    onRegis=()=>{
      Api.postForm((data)=>{
          if(data !== undefined){
          this.setState({
            success: "Successfully!",
            style : {border : "1.5px solid green"}});
            setTimeout(() => {this.props.onLogin()}, 1000);
          }
          else{ 
         this.setState({
             style : {border : "1.5px solid red"}});
          }
      },this.state.poster,'https://it-blog-posts.herokuapp.com/api/people')
     }
     render() { 
         return (
         <div className="imgBack">
             <div className="titleText">
             Register
            </div>
         <div className="container">
         {this.state.success === "Successfully!"? <div style ={{color: "green", textAlign : "center",fontSize:"14px"}}>{this.state.success}</div>: null}
         <div className="inpSection">
         <input className="inp" style={this.state.style} type ="text" onChange={(e)=>{this.getInput(e,"username")}}  placeholder={"Nickname"}/>
         <input className="inp" style={this.state.style} type ="text"  onChange={(e)=>{this.getInput(e,"lastname")}}  placeholder={"Lastname"}/>
         <input className="inp" style={this.state.style} type ="text" onChange={(e)=>{this.getInput(e,"email")}}  placeholder={"Email"}/>
         <input className="inp" style={this.state.style} type ="password"  onChange={(e)=>{this.getInput(e,"password")}}  placeholder={"Password"}/>
         </div>
         <div className="butSection">
         <button className ="button" onClick={this.onRegis}>Submit</button>
         </div>
         </div>
         </div>  
         );
     }
    
}
    
export default Regis;