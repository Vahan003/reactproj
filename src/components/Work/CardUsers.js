import React, { useState} from "react";

const CardUser = (props) => {
    const [state, setState] = useState({email: false });
    const onMouseName = e => {
        setState({
          ...state,
          email: !state.email
        });
      };
  return (
    <div key={props.e.id} className="nameUser">
    <div className="nickname" onClick={onMouseName}>
      {props.e.username}
    </div>

    {state.email ? (
      <div key={props.e.id} className="email" style={state.style}>
        {props.e.email}
      </div>
    ) : (
      <div key={props.e.id} className="textUser">{props.e.lastname}</div>
    )}
  </div>
  );
};

export default CardUser;
