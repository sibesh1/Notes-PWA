(this.webpackJsonpfullstack=this.webpackJsonpfullstack||[]).push([[0],{31:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),o=n.n(r),a=n(7),s=n.n(a),i=(n(31),n(5)),u=n(4),j=n.n(u);var l=function(t){var e=Object(r.useState)(""),n=Object(i.a)(e,2),o=n[0],a=n[1];return Object(c.jsx)("div",{className:"Form",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={content:o,date:new Date,important:Math.random()<.5};j.a.post("api/notes",n).then((function(e){t.setNotes(t.notes.concat(e.data)),a("")}))},children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("strong",{children:"Add New Note"}),Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Add New Note",value:o,onChange:function(t){return a(t.target.value)}})]}),Object(c.jsx)("input",{type:"submit",value:"Add",className:"inputSubmit"})]})})},b=n(12);var d=function(t){var e=t.note,n=t.idx,a=t.url,s=t.notes,u=t.setNotes,l=Object(r.useState)(e.important),d=Object(i.a)(l,2),h=d[0],f=d[1];return Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsxs)("h4",{children:[n+1,". ",e.content]}),Object(c.jsxs)("p",{children:["Date Added: ",e.date.substr(11,8),",",e.date.substr(0,10)]}),Object(c.jsx)("button",{value:h,onClick:function(){return function(){var t=s.find((function(t){return t.id===e.id})),n=Object(b.a)(Object(b.a)({},t),{},{important:!e.important});j.a.put("".concat(a,"/").concat(e.id),n).then((function(t){u(s.map((function(n){return n.id===e.id?t.data:n}))),f(!h)})).catch((function(t){return console.log(t)}))}()},children:h?"Important":"Not Important"}),Object(c.jsx)("button",{onClick:function(){return function(t){if(window.confirm("Are you sure?")){var e=s.find((function(e){return e.id===t}));j.a.delete("".concat(a,"/").concat(t),e).then((function(e){u(s.filter((function(e){return e.id!==t})))})).catch((function(t){return console.log(t)}))}}(e.id)},children:"Delete"})]})},h=n(21),f=n.n(h),O=n(23),m=n.n(O),x=n(24),p=n.n(x);var v=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("strong",{children:"Phonebook By Sibesh Behera"}),Object(c.jsx)("a",{href:"https://github.com/sibesh1",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(f.a,{className:"icons"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/sibeshbehera/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(m.a,{className:"icons"})}),Object(c.jsx)("a",{href:"https://www.facebook.com/sibesh.behera/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.a,{className:"icons"})})]})};var N=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],a=Object(r.useState)(!0),s=Object(i.a)(a,2),u=s[0],b=s[1],h="api/notes";return Object(r.useEffect)((function(){j.a.get(h).then((function(t){o(t.data)}))}),[]),Object(c.jsxs)("div",{className:"Parent",children:[Object(c.jsx)(l,{setNotes:o,notes:n}),Object(c.jsx)("button",{onClick:function(){return b(!u)},className:"showImpButton",children:u?"Show Important Notes Only":"Show All Notes"}),Object(c.jsx)("div",{className:"Note",children:u?n.map((function(t,e){return Object(c.jsx)(d,{note:t,idx:e,url:h,notes:n,setNotes:o},t.id)})):n.filter((function(t){return t.important})).map((function(t,e){return Object(c.jsx)(d,{note:t,idx:e,url:h,notes:n,setNotes:o},t.id)}))}),Object(c.jsx)(v,{})]})};var g=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(N,{})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),w()}},[[55,1,2]]]);
//# sourceMappingURL=main.16e73f2b.chunk.js.map