(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={label:"AddContactInput_label__1eGZp"}},function(t,e,n){t.exports={inputForm:"AddContact_inputForm__1xSaj",btn:"AddContact_btn__1Z7kZ"}},function(t,e,n){t.exports={item:"ContactItem_item___Mk0T",button:"ContactItem_button__LDcZd"}},,function(t,e,n){t.exports={container:"App_container__1Vndz"}},,function(t,e,n){t.exports={list:"ContactList_list__2fng8"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(19),n(14)),i=n(2),l=n(3),u=n(5),d=n(4),h=n(11),b=n.n(h),j=n(12),m=n(7),p=n.n(m),f=n(0);function v(t){var e=t.type,n=t.name,a=t.value,c=t.hahdleChange,r=t.title,o=t.pattern;return Object(f.jsxs)("label",{className:p.a.label,children:[n,Object(f.jsx)("input",{className:p.a.input,type:e,name:n.toLowerCase(),value:a,onChange:c,title:r,pattern:o,required:!0})]})}var O=n(8),C=n.n(O),x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hahdleChange=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.handleAddContact(t.state),t.resetState()},t.resetState=function(){return t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:C.a.inputForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)(v,{type:"text",name:"Name",value:this.state.name,hahdleChange:this.hahdleChange,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}),Object(f.jsx)(v,{type:"tel",name:"Number",value:this.state.number,hahdleChange:this.hahdleChange,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"}),Object(f.jsx)("button",{type:"submit",className:C.a.btn,children:"Add contact"})]})}}]),n}(a.Component),g=n(9),_=n.n(g);function y(t){var e=t.contact,n=t.delet;return Object(f.jsxs)("li",{className:_.a.item,children:[Object(f.jsxs)("p",{children:[e.name,":"]}),Object(f.jsx)("p",{children:e.number}),Object(f.jsx)("button",{className:_.a.button,onClick:function(){return n(e.id)},children:"delete"})]})}var S=n(13),A=n.n(S);function k(t){var e=t.contacts,n=t.delet;return Object(f.jsx)("ul",{className:A.a.list,children:e.map((function(t){return Object(f.jsx)(y,{contact:t,delet:n},t.id)}))})}var N=n(23);function w(t){var e=t.value,n=t.onChange;return Object(f.jsx)(v,{type:"text",name:"Find contacts by name",value:e,hahdleChange:n,title:"",pattern:""})}var F=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,c={id:Object(N.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.contacts;return Object(f.jsxs)("div",{className:b.a.container,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{handleAddContact:this.handleAddContact}),Object(f.jsx)("h2",{children:"Contacts"}),t.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(k,{contacts:this.visibleContacts(),delet:this.deleteContact})]}):Object(f.jsx)("h4",{children:"Your phonebook is empty"})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.92c42451.chunk.js.map