(this.webpackJsonpazotochat=this.webpackJsonpazotochat||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),c=a.n(o),i=(a(21),a(9)),l=a.n(i),u=a(12),s=a(7),m=(a(23),a(5)),p=a.n(m),d=(a(24),a(28),a(31),a(14)),h=a(15);p.a.initializeApp({apiKey:"AIzaSyASrNKgBo4RPhy8cca-2GLtYtYeZ6u33fA",authDomain:"react-chat-app-6692a.firebaseapp.com",databaseURL:"https://react-chat-app-6692a.firebaseio.com",projectId:"react-chat-app-6692a",storageBucket:"react-chat-app-6692a.appspot.com",messagingSenderId:"92318263915",appId:"1:92318263915:web:3a92382bee9fad42a3df2e",measurementId:"G-Y6W9BQG5LV"});var f=p.a.auth(),g=p.a.firestore();p.a.analytics();function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new p.a.auth.GoogleAuthProvider;f.signInWithPopup(e)}},"Sign in with Google"),r.a.createElement("p",null,"No Community Guidlines Its Open Do You Are Chatting With Numerous Strangers Chat Group :) No rules And Ban"))}function E(){return f.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return f.signOut()}},"Sign Out")}function v(){var e=Object(n.useRef)(),t=g.collection("messages"),a=t.orderBy("createdAt").limit(25),o=Object(h.a)(a,{idField:"id"}),c=Object(s.a)(o,1)[0],i=Object(n.useState)(""),m=Object(s.a)(i,2),d=m[0],b=m[1],E=function(){var a=Object(u.a)(l.a.mark((function a(n){var r,o,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=f.currentUser,o=r.uid,c=r.photoURL,a.next=4,t.add({text:d,createdAt:p.a.firestore.FieldValue.serverTimestamp(),uid:o,photoURL:c});case 4:b(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,c&&c.map((function(e){return r.a.createElement(w,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},placeholder:"Say something nice Azoto Chat Is Public"}),r.a.createElement("button",{type:"submit",disabled:!d},"Send")))}function w(e){var t=e.message,a=t.text,n=t.uid,o=t.photoURL,c=n===f.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(c)},r.a.createElement("img",{src:o||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,a)))}var y=function(){var e=Object(d.a)(f),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Azoto Chat"),r.a.createElement(E,null)),r.a.createElement("section",null,t?r.a.createElement(v,null):r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b3714f90.chunk.js.map