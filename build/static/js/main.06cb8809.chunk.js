(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{54:function(e,t,o){e.exports=o(77)},59:function(e,t,o){},60:function(e,t,o){},61:function(e,t,o){},77:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(13),c=o.n(r),l=(o(59),o(26)),i=(o(60),o(103)),d=o(106),s=o(105),u=o(99),m=(o(61),o(33)),p=o.n(m),f=p.a.initializeApp({apiKey:"AIzaSyBg8JxOjiudd6AJ9txUeDe9XOlGKu9C8Bc",authDomain:"todo-list-app-7929a.firebaseapp.com",databaseURL:"https://todo-list-app-7929a.firebaseio.com",projectId:"todo-list-app-7929a",storageBucket:"todo-list-app-7929a.appspot.com",messagingSenderId:"23894226236",appId:"1:23894226236:web:49613e6d9388228bc35a39",measurementId:"G-JQ0JE18YQD"}).firestore(),b=o(96),E=o(104),h=o(100),g=o(101),v=o(102),y=o(107),j=o(48),w=o.n(j),O=o(47),k=o.n(O),C=Object(b.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var S=function(e){var t=C(),o=Object(a.useState)(!1),r=Object(l.a)(o,2),c=r[0],i=r[1],d=Object(a.useState)(),s=Object(l.a)(d,2),m=s[0],p=s[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{style:{color:"#3f51b5"},open:c,onClose:function(e){return i(!1)}},n.a.createElement("div",{className:t.paper},n.a.createElement("h1",null,"Edit Todo"),n.a.createElement("input",{placeholder:e.todo.todo,value:m,onChange:function(e){return p(e.target.value)}}),n.a.createElement(u.a,{onClick:function(){f.collection("todos").doc(e.todo.id).set({todo:m},{merge:!0}),i(!1)},disabled:!m},"Update Todo"))),n.a.createElement(h.a,null,n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement(y.a,{primary:e.todo.todo,secondary:"Not Done"}))),n.a.createElement(k.a,{style:{color:"#3f51b5"},onClick:function(e){return i(!0)}}),n.a.createElement(w.a,{style:{color:"#3f51b5"},onClick:function(t){return f.collection("todos").doc(e.todo.id).delete()}})))};var B=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),o=t[0],r=t[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),b=m[0],E=m[1];return Object(a.useEffect)((function(){f.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement("h1",{style:{color:"#3f51b5"}},"Todo List"),n.a.createElement("form",null,n.a.createElement(i.a,null,n.a.createElement(d.a,null,"Write Todo Here:"),n.a.createElement(s.a,{value:b,onChange:function(e){return E(e.target.value)}})),n.a.createElement(u.a,{disabled:!b,type:"submit",onClick:function(e){e.preventDefault(),f.collection("todos").add({todo:b,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),E("")},variant:"contained",color:"primary"},"Add ToDo")),n.a.createElement("ul",{style:{color:"#3f51b5"}},o.map((function(e){return n.a.createElement(S,{todo:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.06cb8809.chunk.js.map