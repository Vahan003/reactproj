(this.webpackJsonpreactproj=this.webpackJsonpreactproj||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(8),c=a.n(o),i=(a(14),a(1)),r=a(2),l=a(4),u=a(3),m=a(5),p=(a(15),a(16),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"about"},s.a.createElement("div",{className:"imgBack"},s.a.createElement("div",{className:"titleText"},"Hello")))}}]),t}(n.Component)),d=function(e){return fetch("https://5d9b4390686ed000144d1ed9.mockapi.io/js/base3",{method:"GET"}).then((function(t){return t.json().then((function(t){return e(t)}))})).catch((function(e){console.log("Error",e)}))},h=function(e){return fetch("https://5d9b4390686ed000144d1ed9.mockapi.io/js/base2",{method:"GET"}).then((function(t){return t.json().then((function(t){return e(t)}))})).catch((function(e){console.log("Error",e)}))},b=function(e,t,a){fetch(a,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){if(200===e.status)return e.json()})).then((function(t){return e(t)}))},g=function(e,t){fetch(t).then((function(e){if(200===e.status)return e.json()})).then((function(t){return e(t)}))},f=new function e(){Object(i.a)(this,e),this.getUser=h,this.getPost=d,this.postForm=b,this.getForm=g},E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={user:[],post:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.getUser((function(t){e.setState({user:t})})),f.getPost((function(t){e.setState({post:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"user"},this.state.user.map((function(e){return s.a.createElement("div",{key:e.id,className:"nameUser"},s.a.createElement("img",{src:e.avatar}),s.a.createElement("div",{className:"textUser"},e.name))}))),s.a.createElement("div",{className:"post"},this.state.post.map((function(e){return s.a.createElement("div",{key:e.id,className:"card"},s.a.createElement("div",{className:"cardHead"},s.a.createElement("div",null,e.title),s.a.createElement("div",null,e.author)),s.a.createElement("div",{className:"descrip"},e.description))}))))}}]),t}(n.Component),v=a(6),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getInput=function(e,t){var n;a.setState((n={},Object(v.a)(n,"".concat(t),e.target.value),Object(v.a)(n,"style",{border:"1px solid white"}),n)),a.state.poster["".concat(t)]=e.target.value},a.onLogin=function(){f.postForm((function(e){void 0!==e?(a.setState({style:{border:"1.5px solid green"}}),localStorage.setItem("ID_OF_LOGGINED",JSON.stringify({id:e.id,userId:e.userId})),setTimeout((function(){a.props.onWork()}),500)):(a.setState({style:{border:"1.5px solid red"}}),console.log("NOT LOGINED!"))}),a.state.poster,"https://it-blog-posts.herokuapp.com/api/people/login")},a.state={password:"",email:"",style:{border:"1px solid white"},poster:{password:"",email:""}},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"imgBack"},s.a.createElement("div",{className:"titleText",style:{color:"rgb(226, 138, 86)",fontSize:"40px"}},"Login"),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"inpSection"},s.a.createElement("input",{className:"inp",style:this.state.style,type:"text",onChange:function(t){e.getInput(t,"email")},placeholder:"Email"}),s.a.createElement("input",{className:"inp",style:this.state.style,type:"password",onChange:function(t){e.getInput(t,"password")},placeholder:"Password"})),s.a.createElement("div",{className:"butSection"},s.a.createElement("button",{className:"button",onClick:this.onLogin},"Submit"))))}}]),t}(n.PureComponent),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getInput=function(e,t){var n;a.setState((n={},Object(v.a)(n,"".concat(t),e.target.value),Object(v.a)(n,"style",{border:"1px solid white"}),n)),a.state.poster["".concat(t)]=e.target.value},a.onRegis=function(){f.postForm((function(e){void 0!==e?(a.setState({success:"Successfully!",style:{border:"1.5px solid green"}}),setTimeout((function(){a.props.onLogin()}),1e3)):a.setState({style:{border:"1.5px solid red"}})}),a.state.poster,"https://it-blog-posts.herokuapp.com/api/people")},a.state={lastname:"",username:"",password:"",email:"",style:{border:"1px solid white"},success:"",poster:{lastname:"",username:"",password:"",email:""}},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"imgBack"},s.a.createElement("div",{className:"titleText",style:{color:"rgb(226, 138, 86)",fontSize:"40px"}},"Register"),s.a.createElement("div",{className:"container"},"Successfully!"===this.state.success?s.a.createElement("div",{style:{color:"green",textAlign:"center",fontSize:"14px"}},this.state.success):null,s.a.createElement("div",{className:"inpSection"},s.a.createElement("input",{className:"inp",style:this.state.style,type:"text",onChange:function(t){e.getInput(t,"username")},placeholder:"Nickname"}),s.a.createElement("input",{className:"inp",style:this.state.style,type:"text",onChange:function(t){e.getInput(t,"lastname")},placeholder:"Lastname"}),s.a.createElement("input",{className:"inp",style:this.state.style,type:"text",onChange:function(t){e.getInput(t,"email")},placeholder:"Email"}),s.a.createElement("input",{className:"inp",style:this.state.style,type:"password",onChange:function(t){e.getInput(t,"password")},placeholder:"Password"})),s.a.createElement("div",{className:"butSection"},s.a.createElement("button",{className:"button",onClick:this.onRegis},"Submit"))))}}]),t}(n.PureComponent),y=s.a.createContext(),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:"",lastname:"",email:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.ID_OF_LOGGINED);this.context.getUserId(t.userId),console.log(t),f.getForm((function(t){e.setState({username:t.username,lastname:t.lastname,email:t.email})}),"https://it-blog-posts.herokuapp.com/api/people/".concat(t.userId))}},{key:"render",value:function(){return s.a.createElement("div",{className:"imgBack"},s.a.createElement("div",{className:"titleText"},s.a.createElement("div",null,this.state.username),"Wellcome!"),s.a.createElement("div",{className:"userdata"},s.a.createElement("div",null,this.state.email),s.a.createElement("div",null,this.state.lastname)))}}]),t}(n.PureComponent);j.contextType=y;var k=j,S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onWork=function(){a.setState({bar:"",loggined:!0})},a.onLogout=function(){a.setState({bar:"LOGIN",loggined:!1}),localStorage.removeItem("ID_OF_LOGGINED")},a.onAbout=function(){a.setState({bar:"ABOUT"})},a.onLogin=function(){a.setState({bar:"LOGIN"})},a.onRegis=function(){a.setState({bar:"REGIS"})},a.onHome=function(){a.setState({bar:"HOME"})},a.getUserId=function(e){a.setState({userId:e})},a.state={bar:"ABOUT",loggined:!1,userId:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){void 0!==localStorage.ID_OF_LOGGINED&&this.setState({bar:"",loggined:!0})}},{key:"render",value:function(){return s.a.createElement(y.Provider,{value:{getUserId:this.getUserId}},s.a.createElement("div",{className:"navigation"},s.a.createElement("div",{className:"tabs"},s.a.createElement("button",{className:"tab",onClick:this.onAbout},"About"),s.a.createElement("button",{className:"tab",onClick:this.onHome},"Home"),this.state.loggined?null:s.a.createElement("button",{className:"tab",onClick:this.onLogin},"Log in"),this.state.loggined?null:s.a.createElement("button",{className:"tab",onClick:this.onRegis},"Registration"),this.state.loggined?s.a.createElement("button",{className:"tab",onClick:this.onWork},"Workspace"):null,this.state.loggined?s.a.createElement("button",{className:"tab",onDoubleClick:this.onLogout},"Logout"):null),"ABOUT"===this.state.bar?s.a.createElement(p,null):null,"HOME"===this.state.bar?s.a.createElement(E,null):null,"LOGIN"===this.state.bar?s.a.createElement(O,{onWork:this.onWork}):null,"REGIS"===this.state.bar?s.a.createElement(N,{onLogin:this.onLogin}):null,""===this.state.bar&&this.state.loggined?s.a.createElement(k,null):null))}}]),t}(n.PureComponent),I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(S,null))}}]),t}(n.Component);c.a.render(s.a.createElement(I,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0d7380f4.chunk.js.map