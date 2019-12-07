import React, { useState, useEffect, useContext } from "react";
import Api from "../../../api/Api";
import PostUser from "./PostUser";
const WorkSpace = props => {
  const ID_OF_LOGGINED = JSON.parse(localStorage.ID_OF_LOGGINED);
  const [state, setState] = useState({
    posts: [],
    showPosts: true,
    modal: false,
    style: { border: "1px solid white" },
    poster: {
      description: "",
      author: "",
      title: "",
      personId: `${ID_OF_LOGGINED.userId}`
    }
  });
  function getPosts() {
    Api.getForm(data => {
      if (data !== undefined)
        setState({
          ...state,
          posts: data
        });
    }, `https://it-blog-posts.herokuapp.com/api/people/${ID_OF_LOGGINED.userId}/posts?access_token=${ID_OF_LOGGINED.id}`);
  }
  useEffect(() => {
    getPosts();
  }, []);

  //-----------------------------------------------------------------
  const getInput = (e, inpName) => {
    setState({
      ...state,
      poster: {
        ...state.poster,
        [`${inpName}`]: e.target.value
      }
    });
  };
  const onModal = () => {
    setState({
      ...state,
      modal: !state.modal,
      poster: {
        ...state.poster,
        description: "",
        author: "",
        title: ""
      }
    });
  };
  const onPosts = () => {
    Api.postForm(
      data => {
        getPosts();
        if (data !== undefined) {
          
          setState({
            ...state,
            style: { border: "1.5px solid white" },
            poster: {
              ...state.poster,
              description: "",
              author: "",
              title: ""
            }
          });
        }
        else{
          setState({
            ...state,
            style: { border: "1.5px solid red" }
          })
        }
        
      },
      state.poster,
      `https://it-blog-posts.herokuapp.com/api/posts?access_token=${ID_OF_LOGGINED.id}`
    );
  };

  return (
    <div className="post">
      <button className="butmodal" onClick={onModal}>
        Create new post
      </button>
      {state.modal && (
        <div className="modalBack">
          <div className="modal">
            <div className="cardHead">
              <input
                className="inpmodal"
                style={state.style}
                onChange={e => getInput(e, "title")}
                placeholder={"title"}
              />
              <input
                className="inpmodal"
                style={state.style}
                onChange={e => getInput(e, "author")}
                placeholder={"author"}
              />
            </div>
            <div className="desc">
              <input
                className="inpmodal"
                style={state.style}
                size="35"
                onChange={e => getInput(e, "description")}
                placeholder={"description"}
              />
              <div className="butsec">
                <button className="butmodal" onClick={onPosts}>
                  Post
                </button>
                <button className="butmodal" onClick={onModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {state.showPosts &&
        state.posts.map(e => <PostUser key={e.id} e={e} getPosts={getPosts} />)}
    </div>
  );
};

export default WorkSpace;
