(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(43)},37:function(e,n,t){},39:function(e,n,t){},41:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(18),c=t.n(r),i=t(8),s=t(7),l=(t(37),t(2)),u=t(3),d=t(5),p=t(4),f=t(6),h=(t(39),function(e){return o.a.createElement("div",{className:"Person",onClick:e.clicked},o.a.createElement("h1",null,e.name),o.a.createElement("p",null,"Age: ",e.age))}),m=(t(41),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(o)))).state={name:"",age:""},t.nameChangedHandler=function(e){t.setState({name:e.target.value})},t.ageChangedHandler=function(e){t.setState({age:e.target.value})},t}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"AddPerson"},o.a.createElement("input",{type:"text",placeholder:"Name",onChange:this.nameChangedHandler,value:this.state.name}),o.a.createElement("input",{type:"text",placeholder:"Age",onChange:this.ageChangedHandler,value:this.state.age}),o.a.createElement("button",{onClick:function(){return e.props.personAdded(e.state.name,e.state.age)}},"Add Person"))}}]),n}(a.Component)),g=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m,{personAdded:this.props.onAddedPerson}),this.props.prs.map(function(n){return o.a.createElement(h,{key:n.id,name:n.name,age:n.age,clicked:function(){return e.props.onRemovedPerson(n.id)}})}))}}]),n}(a.Component),v=Object(s.b)(function(e){return{prs:e.persons}},function(e){return{onAddedPerson:function(n,t){return e({type:"ADD_PERSON",personData:{name:n,age:t}})},onRemovedPerson:function(n){return e({type:"REMOVE_PERSON",personId:n})}}})(g),w=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("ol",null,o.a.createElement("li",null,"Turn this app into one which does NOT use local state (in components) but instead uses Redux")),o.a.createElement(v,null))}}]),n}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var b=t(13),j={persons:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_PERSON":var t={id:Math.random(),name:n.personData.name,age:n.personData.age};return Object(b.a)({},e,{persons:e.persons.concat(t)});case"REMOVE_PERSON":return Object(b.a)({},e,{persons:e.persons.filter(function(e){return e.id!==n.personId})})}return e},y=Object(i.b)(k);c.a.render(o.a.createElement(s.a,{store:y},o.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/max-react5",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/max-react5","/service-worker.js");E?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):O(e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.2a1fc69a.chunk.js.map