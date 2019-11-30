import React, { Component } from 'react';

class Regis extends Component {
    render() { 
        return (
            <div className="imgBack">
    <div className="container">
    <div className="inpSection">
    <input className="inp" type="text" name="nickName" />
    <input className="inp" type="text" name="lastName" />
    <input className="inp" type="text" name="email-my" />
    <input className="inp" type="password" name="pass" />
    </div>
    <div className="butSection">
     <button className ="button" onClick = {""}>Submit</button>
     </div>
     </div>
        </div>  );
    }
}
 
export default Regis;