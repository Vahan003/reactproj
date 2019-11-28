import React, { Component } from 'react';

class Regis extends Component {
    render() { 
        return (<div className="container">
    <input className="inp" type="text" name="nickName" />
    <input className="inp" type="text" name="lastName" />
    <input className="inp" type="text" name="email" />
    <input className="inp" type="password" name="pass" />
     <button className ="button" onClick = {""}>Submit</button>
        </div>  );
    }
}
 
export default Regis;