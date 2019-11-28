import React, { Component } from 'react';
import Api from '../api/Api'

class Home extends Component {
     constructor(props){
         super(props)
         this.state ={
            user: [],
            post: []
        
         }
     }
    componentDidMount(){
       Api.getUser((user)=>{
            this.setState({
                user: user
            })
        })
        Api.getPost((post)=>{
            this.setState({
                post: post
            })
        })

    }
    render() { 
        return ( <div className="home">
           <div className="user">
               {
                this.state.user.map((e)=>(
                 <div key={e.id} className="nameUser">
                   <img src = {e.avatar}/>
                <div className="textUser">{e.name}</div>
                </div>
                   ))
               }
           </div>
           <div className="post">
           {
                this.state.post.map((e)=>(
                 <div key={e.id} className="card">
                    <div className="cardHead">
                    <div>{e.title}</div>
                    <div>{e.author}</div>
                    </div>
                    <div className="descrip">{e.description}</div>
                </div>
                   ))
               }
           </div>
        </div> );
    }
}
 
export default Home;