(this.webpackJsonphowdoiknowyou=this.webpackJsonphowdoiknowyou||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=n(5),i=n(1),u=n(14),l=n(15),h=(n(26),n(3)),d=n(4),E=n(7),p=n(6),m=Object({NODE_ENV:"production",PUBLIC_URL:"/MikeVedsted/HowDoIKnowYou",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FACES_KEY,f=function(){return function(e){var t;e({type:"REQUEST_USERS_PENDING"}),(t="https://uifaces.co/api?limit=30",fetch(t,{method:"GET",headers:{"X-API-KEY":m,Accept:"application/json","Cache-Control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return e.map((function(e,t){return e.id=t+1,e}))}))).then((function(t){return e({type:"REQUEST_USERS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_USERS_FAILED",payload:t})}))}},S=function(e){var t=e.name,n=e.email,a=e.position,o=e.photo;e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{className:"br4 h4 dib",alt:"profile",src:o}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a),r.a.createElement("p",null,n)))},g=function(e){var t=e.users;return r.a.createElement("div",{className:"pt7"},t.map((function(e,n){return r.a.createElement(S,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email,position:t[n].position,photo:t[n].photo})})))},v=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search here",onChange:t}))},b=function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Oooops. Sorry about that!"):this.props.children}}]),n}(a.Component),y=(n(27),function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestUsers()}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.searchField,a=e.onSearchChange,o=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o?r.a.createElement("h1",{className:"tc"},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("header",{className:"fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l"},r.a.createElement("nav",{className:"f6 fw6"},r.a.createElement("h1",{className:"f1"},"Find your colleague!"),r.a.createElement(v,{searchChange:a}))),r.a.createElement(b,null,r.a.createElement(g,{users:c})))}}]),n}(a.Component)),C=Object(s.b)((function(e){return{searchField:e.searchUsers.searchField,users:e.requestUsers.users,isPending:e.requestUsers.isPending,error:e.requestUsers.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestUsers:function(){return e(f())}}}))(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O={searchField:""},_={isPending:!1,users:[],error:""},U=(n(28),Object(u.createLogger)()),w=Object(i.c)({searchUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_USERS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_USERS_SUCCESS":return Object.assign({},e,{users:t.payload,isPending:!1});case"REQUEST_USERS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),j=Object(i.d)(w,Object(i.a)(l.a,U));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:j},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f99e7ff5.chunk.js.map