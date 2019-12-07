import React, { useState, useEffect } from "react";
import Api from "../../api/Api";
import CardUser from './CardUsers'
const WorkUser = () => {
  const [state, setState] = useState({ user: []});
    useEffect(() => {
    Api.getForm(data => {
      setState({
        user: data
      });
    }, "https://it-blog-posts.herokuapp.com/api/people/");
  }, []);
 
 
 
  return (
       <div className="user">
      {state.user.map(e => (
        <CardUser key ={e.id} e = {e}/>
      ))}
    </div>
  );
};

export default WorkUser;
