(this["webpackJsonpfetch-api"]=this["webpackJsonpfetch-api"]||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(10),r=a.n(s),c=(a(26),a(5)),o=a(6),i=a(8),u=a(7),m=a(9),d=(a(27),a(28),a(29),a(20)),h=a(17),p=a(15),f=a(16),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.userDetails,t=e.show,a=e.firstName,n=e.lastName,s=e.phone,r=e.address,c=e.email,o=e.profileImage,i=r.state,u=r.city,m=r.country,E=r.streetAddress;return console.log(this.props.userDetails),t?l.a.createElement(d.a,{show:t},l.a.createElement(h.a,null,l.a.createElement("div",{className:"profileImage"},l.a.createElement("img",{src:o,alt:"profileImage",className:"rounded-circle"}))),l.a.createElement(p.a,null,l.a.createElement("div",{className:"basicInfo"},l.a.createElement("h3",null,"Basic Info"),l.a.createElement("ul",{className:"userList"},l.a.createElement("li",null,"Name : ",a," ",n),l.a.createElement("li",null,"Contact  : ",s),l.a.createElement("li",null,"Email : ",c))),l.a.createElement("div",{className:"addressInfo"},l.a.createElement("h3",null,"Address Info"),l.a.createElement("ul",{className:"userList"},l.a.createElement("li",null,"Address  : ",E),l.a.createElement("li",null,"City     : ",u),l.a.createElement("li",null,"State    : ",i),l.a.createElement("li",null,"Country  : ",m)))),l.a.createElement(f.a,null,l.a.createElement("button",{onClick:this.props.closeModal.bind(this,this.props.userDetails.id)},"Close"))):null}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.userDetails;return l.a.createElement("div",{className:"pt-3"},l.a.createElement("div",{className:"card cardUser",onClick:this.props.showModal.bind(this,e.id)},l.a.createElement("div",{className:"container p-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("img",{src:e.profileImage,alt:"profileImage.jpg",className:"rounded-circle img-fluid"})),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-title"}," Name : ",e.firstName," ",e.lastName),l.a.createElement("div",{className:"card-text"}," Email: ",e.email)))))),l.a.createElement(E,{userDetails:e,showModal:this.props.showModal,modalState:e.show,closeModal:this.props.closeModal}))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},this.props.contacts.users.map((function(t){return l.a.createElement(b,{key:t.id,userDetails:t,showModal:e.props.modalState,modalState:t.show,closeModal:e.props.closeModal})})))}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"peopleHeader"},l.a.createElement("h1",null,"People")))}}]),t}(l.a.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={users:[]},a.showModal=function(e){a.setState({users:a.state.users.map((function(t){return t.id===e&&(t.show=!0),t}))})},a.closeModal=function(e){a.setState({users:a.state.users.map((function(t){return t.id===e&&(t.show=!1),t}))})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mock-io.herokuapp.com/users").then((function(e){return e.json()})).then((function(t){t.map((function(e){return e.show=!1,e})),e.setState({users:t})})).catch(console.log)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(v,{contacts:this.state,modalState:this.showModal,closeModal:this.closeModal}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.346e31f1.chunk.js.map