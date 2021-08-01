(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(17),r=n.n(c),o=n(7),i=n(3),u=n(0),s=function(e){var t=e.srchStr,n=e.handleSrchStrChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("p",{children:["filter shown with ",Object(u.jsx)("input",{value:t,onChange:n})]})})},l=function(e){var t=e.handleSubmit,n=e.newName,a=e.newNumber,c=e.handleNameInputChange,r=e.handleNumberInputChange;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:n,onChange:c})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:a,onChange:r})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var t=e.name,n=e.number,a=e.deleteButtonHandler;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("p",{children:[" ",t," ",n," ",Object(u.jsx)("button",{onClick:a,children:"delete"})," "]})})},h=function(e){var t=e.persons,n=e.getDeleteButtonHandler,a=t.map((function(e){return Object(u.jsx)(d,{name:e.name,number:e.number,deleteButtonHandler:n(e.name,e.id)},e.id)}));return Object(u.jsx)(u.Fragment,{children:a})},f=(n(23),function(e){var t=e.positive,n=e.message,a="";return a=t?"positive":"negative",Object(u.jsx)("div",{className:a,children:n})}),j=n(5),m=n.n(j),b="/api/persons",p=function(){return m.a.get(b).then((function(e){return e.data})).catch((function(e){throw new Error("Getting all contacts failed.")}))},g={getAll:p,createNew:function(e){var t={method:"post",url:b,data:e,headers:{"Content-Type":"application/json"}};return m()(t).then((function(e){return e.data})).catch((function(e){throw new Error("Creating new contact failed.")}))},deleteContact:function(e){var t={method:"delete",url:"".concat(b,"/").concat(e),headers:{"Content-Type":"application/json"}};return m()(t).then((function(e){if(204!==e.status)throw new Error("Delete request failed.")}))},nameAlreadyExists:function(e){return p().then((function(t){return t.some((function(t){return 0===t.name.toLowerCase().localeCompare(e.toLowerCase())}))})).catch((function(e){throw new Error}))},updateExisting:function(e){var t={method:"put",url:"".concat(b,"/").concat(e.id),data:e,headers:{"Content-Type":"application/json"}};return m()(t).then((function(e){return e.data})).catch((function(e){throw new Error("Update failed.")}))}},v=2e3,O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),d=Object(i.a)(r,2),j=d[0],m=d[1],b=Object(a.useState)(""),p=Object(i.a)(b,2),O=p[0],w=p[1],x=Object(a.useState)(""),C=Object(i.a)(x,2),y=C[0],S=C[1],E=Object(a.useState)(null),N=Object(i.a)(E,2),T=N[0],k=N[1];Object(a.useEffect)((function(){g.getAll().then((function(e){c(e)})).catch((function(e){console.log(e.message)}))}),[]);var D;D=y.length?n.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})):n;var L=null;return null!==T&&(L=Object(u.jsx)(f,{positive:T.positive,message:T.message})),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(s,{srchStr:y,handleSrchStrChange:function(e){S(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsx)(l,{handleSubmit:function(e){e.preventDefault(),g.nameAlreadyExists(j).then((function(e){var t={name:j,number:O,id:n.length+200};if(e){if(window.confirm("".concat(j," already exists in the phonebook. Do you want to update the number?"))){var a=n.find((function(e){return 0===e.name.toLowerCase().localeCompare(j.toLowerCase())}));t.id=a.id,g.updateExisting(t).then((function(e){var t=Object(o.a)(n);t=t.filter((function(t){return t.id!==e.id})),c(t.concat(e)),m(""),w(""),k({positive:!0,message:"Updated successfully."}),setTimeout((function(){k(null)}),v)})).catch((function(e){var t={positive:!1,message:e.message};k(t),setTimeout((function(){k(null)}),v)}))}}else g.createNew(t).then((function(e){c(n.concat(e)),m(""),w(""),k({positive:!0,message:"New entry saved successfully!"}),setTimeout((function(){k(null)}),v)})).catch((function(e){console.log(e.message),m(""),w("")}))})).catch((function(e){k({positive:!1,message:"Something went wrong. Try later."}),setTimeout((function(){k(null)}),v)}))},newName:j,newNumber:O,handleNameInputChange:function(e){m(e.target.value)},handleNumberInputChange:function(e){w(e.target.value)}}),L,Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(h,{persons:D,getDeleteButtonHandler:function(e,t){return function(){window.confirm("Delete ".concat(e,"?"))&&g.deleteContact(t).then((function(e){var a=Object(o.a)(n);a=a.filter((function(e){return e.id!==t})),c(a),k({positive:!1,message:"Entry deleted successfully!"}),setTimeout((function(){k(null)}),v)})).catch((function(e){console.log(e.message);var a=Object(o.a)(n);a=a.filter((function(e){return e.id!==t})),c(a),k({positive:!1,message:"Entry already deleted or does not exist."}),setTimeout((function(){k(null)}),v)}))}}})]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.28b9c063.chunk.js.map