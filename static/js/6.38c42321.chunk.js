(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[6],{234:function(e,t,r){e.exports={formControl:"FormsControls_formControl__hgh4O",error:"FormsControls_error__gJcEb",errorForm:"FormsControls_errorForm__3dLBR"}},235:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){return e?void 0:"Required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},236:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return m}));var n=r(245),a=r(0),o=r.n(a),c=r(234),l=r.n(c),u=function(e){e.input;var t=e.meta,r=Object(n.a)(e,["input","meta"]),a=t.touched&&t.error;return o.a.createElement("div",{className:l.a.formControl+" "+(a?l.a.error:"")},r.children,o.a.createElement("div",null,o.a.createElement("span",null,a&&t.error)))},i=function(e){var t=e.input;return o.a.createElement(u,e,o.a.createElement("textarea",t))},m=function(e){var t=e.input,r=Object(n.a)(e,["input"]);return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,r)))}},302:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(17),c=r(6),l=r(114),u=r(115),i=r(236),m=r(29),s=r(235),d=r(234),f=r.n(d),p=Object(u.a)({form:"login"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(l.a,{name:"email",placeholder:"Login",component:i.a,validate:[s.b]})),a.a.createElement("div",null,a.a.createElement(l.a,{name:"password",type:"password",placeholder:"password",component:i.a,validate:[s.b]})),a.a.createElement("div",null,a.a.createElement(l.a,{name:"rememberMe",type:"checkbox",component:"input"}),"remember me"),e.error?a.a.createElement("div",{className:f.a.errorForm},e.error):"",a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.default=Object(o.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{login:m.c})((function(e){return e.isAuth?a.a.createElement(c.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(p,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=6.38c42321.chunk.js.map