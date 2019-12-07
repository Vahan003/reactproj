import React, { useState, useEffect } from "react";
import Api from "../../../api/Api";
const PostUser = props => {
    const ID_OF_LOGGINED = JSON.parse(localStorage.ID_OF_LOGGINED);
  const [state, setState] = useState({
    update: false,
    style: { border: "1px solid white" },
    poster: {
      title: props.e.title,
      author: props.e.author,
      description: props.e.description,
      personId: `${ID_OF_LOGGINED.userId}`
    }
  });
 
  //-----------------------------------------------
  const onPuts = id => {
    
    Api.putForm(
      data => {
        if (data !== undefined) {
          setTimeout(()=>{setState({
            ...state,
            style: { border: "1.5px solid white" },
            update: false
          });},700 )
          props.getPosts();
        }
        else{
          setState({
            ...state,
            style: { border: "1.5px solid red" }
          })
        }

      },
      state.poster,
      `https://it-blog-posts.herokuapp.com/api/posts/${id}?access_token=${ID_OF_LOGGINED.id}`
    );
  };
  const onDelete = id => {
    setTimeout(()=>{setState({
        ...state,
        update: false
      });},700)
    Api.deleteForm(data => {
      if (data !== undefined) {
        props.getPosts();
      }
    }, `https://it-blog-posts.herokuapp.com/api/posts/${id}?access_token=${ID_OF_LOGGINED.id}/`);
  };
  const getInput = (e, inpName) => {
    setState({
      ...state,
      poster: {
        ...state.poster,
        [`${inpName}`]: e.target.value
      }
    });
  };
  const onMousePost = e => {
    setState({
      ...state,
      update: true
    });
  };
  const onCancel =()=>{
    setState({
        ...state,
        update: false
      });
  }
 
  return (
    <div>
      {!state.update ? (
        <div key={props.e.id} onClick={onMousePost} className="card" disabled>
          <div className="cardHead">
            <div>{props.e.title}</div>
            <div>{props.e.author}</div>
          </div>
          <div className="descrip">{props.e.description}</div>
        </div>
      ) : (
        <div className="modal">
          <div className="cardHead">
            <input
              className="inpmodal"
              style={state.style}
              onChange={e => getInput(e, "title")}
              value={state.poster.title}
            />
            <input
              className="inpmodal"
              style={state.style}
              onChange={e => getInput(e, "author")}
              value={state.poster.author}
            />
          </div>
          <div className="desc">
          <input
            className="inpmodal"
            style={state.style}
            size="35"
            onChange={e => getInput(e, "description")}
            value={state.poster.description}
          />
          <div className ="butsec">
          <button className="butmodal" onClick={() => onPuts(props.e.id)}>
            Update
          </button>
          <button className="butmodal" onClick={() => onDelete(props.e.id)}>
            Delete
          </button>
          <button className="butmodal" onClick={() => onCancel()}>
            Cancel
          </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostUser;
