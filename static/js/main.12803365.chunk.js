(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),c=n.n(l),o=(n(80),n(57)),u=n.n(o),i=n(22),s=n(4);var m=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement("hr",null))},E=n(2);var d=function(e){return r.a.createElement("div",null,"// show some text",r.a.createElement("button",{onClick:function(){}},"X"))};var v=function(e){var t=e.data.map((function(t){return r.a.createElement(d,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){}},"All"),r.a.createElement("button",{onClick:function(){}},"High"),r.a.createElement("button",{onClick:function(){}},"Middle"),r.a.createElement("button",{onClick:function(){}},"Low"))},p=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var h=function(){var e=Object(a.useState)(p),t=Object(E.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)("all"),o=Object(E.a)(c,2),u=o[0],i=o[1],s=function(e,t){return"all"===t?e:void 0}(n,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(v,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(void 0)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},f=n(58),b=n.n(f),g=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,l=e.error,c=e.totalUsers,o=b.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:n,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:a},"add"),r.a.createElement("span",null,c))},_=function(e){e.users,e.addUserCallback;var t=Object(a.useState)(""),n=Object(E.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(""),u=Object(E.a)(o,2),i=u[0];u[1];return r.a.createElement(g,{name:l,setNameCallback:function(e){c("")},addUser:function(){alert("Hello  !")},error:i,totalUsers:0})};var k=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(_,{users:n,addUserCallback:function(e){l([])}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=n(7),O=n(38),j=n.n(O),N=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(C.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(j.a.error," ").concat(u||""),m="".concat(j.a.errorInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},x=n(39),S=n.n(x),y=n(40),w=n.n(y),H=function(e){var t=e.red,n=e.className,a=Object(C.a)(e,["red","className"]),l="".concat(t?w.a.red:w.a.default," ").concat(n);return r.a.createElement("button",Object.assign({className:l},a))},T=n(41),W=n.n(T),A=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),a=Object(C.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),l="".concat(W.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){},className:l},a)),n&&r.a.createElement("span",{className:W.a.spanClassName},n))};var I=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],l=t[1],c=n?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},u=Object(a.useState)(!1),i=Object(E.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:S.a.column},r.a.createElement(N,{value:n,onChangeText:l,onEnter:o,error:c}),r.a.createElement(N,{className:S.a.blue}),r.a.createElement(H,null,"default"),r.a.createElement(H,{red:!0,onClick:o},"delete "),r.a.createElement(H,{disabled:!0},"disabled"),r.a.createElement(A,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(A,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var R=function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(I,null))};var M=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},B=n(59),L=n.n(B),D=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(C.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),u=Object(E.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,v=m.onDoubleClick,p=m.className,h=Object(C.a)(m,["children","onDoubleClick","className"]),f="".concat(L.a.span," ").concat(p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(N,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),n&&n()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),v&&v(e)},className:f},h),d||c.value))};function F(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function P(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}F("test",{x:"A",y:1});P("test",{x:"",y:0});var G=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(D,{value:n,onChangeText:l,spanProps:{children:n?void 0:"\u270e enter text..."}})),r.a.createElement(H,{onClick:function(){F("editable-span-value",n)}},"save"),r.a.createElement(H,{onClick:function(){var e=P("editable-span-value","");l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=n(42),U=n.n(J),K=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,l=Object(C.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return r.a.createElement("option",{className:U.a.option,key:e+"-"+t,value:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},l,{className:U.a.select}),c)},X=n(43),q=n.n(X),Q=function(e){e.type;var t=e.name,n=e.options,a=e.value,l=e.onChange,c=e.onChangeOption,o=Object(C.a)(e,["type","name","options","value","onChange","onChangeOption"]),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},i=n?n.map((function(e,n){return r.a.createElement("label",{key:t+"-"+n,className:q.a.label},r.a.createElement("input",Object.assign({className:q.a.radio,type:"radio",name:t,value:e,checked:e===a,onChange:u},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},Y=["x","y","z"];var z=function(){var e=Object(a.useState)(Y[1]),t=Object(E.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(K,{options:Y,value:n,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(Q,{name:"radio",options:Y,value:n,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Z=n(70),$=function(e,t){switch(t.type){case"sort":var n=Object(Z.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.age}));default:return e}},V=function(e){return{type:"sort",payload:e}},ee=n(29),te=n.n(ee),ne=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ae=function(){var e=Object(a.useState)(ne),t=Object(E.a)(e,2),n=t[0],l=t[1],c=n.map((function(e){return r.a.createElement("div",{key:e._id,className:te.a.item},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:te.a.block},"homeworks 8"),r.a.createElement("div",{className:te.a.block},c),r.a.createElement("div",{className:te.a.block},r.a.createElement("div",null,r.a.createElement(H,{onClick:function(){return l($(ne,V("up")))}},"sort up")),r.a.createElement("div",null,r.a.createElement(H,{onClick:function(){return l($(ne,V("down")))}},"sort down")),r.a.createElement("div",null,r.a.createElement(H,{onClick:function(){return l($(ne,{type:"check",age:18}))}},"check 18"))))};var re=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(),o=Object(E.a)(c,2),u=o[0],i=o[1],s=Object(a.useState)(!1),m=Object(E.a)(s,2),d=m[0],v=m[1],p=function(){clearInterval(n)},h="Press on start",f="";return u&&(h="".concat(u.getHours()<10?"0"+u.getHours():u.getHours(),"\n         : ").concat(u.getMinutes()<10?"0"+u.getMinutes():u.getMinutes()," \n         : ").concat(u.getSeconds()<10?"0"+u.getSeconds():u.getSeconds()),f="".concat(u.getFullYear()," / ").concat(u.getMonth()+1<10?"0"+u.getMonth()+1:u.getMonth()+1," / \n           ").concat(u.getDate()<10?"0"+u.getDate():u.getDate())),r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)}},h),d&&r.a.createElement("div",null,f),r.a.createElement(H,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(H,{onClick:p},"stop"))};var le=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(re,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ce=n(20),oe=n(60),ue=n.n(oe),ie=n(25),se={loading:!1},me=function(e){return{type:"LOADING",loading:e}};var Ee=function(){var e=Object(ce.c)((function(e){return e.loading})),t=Object(ce.b)(),n=e.loading;return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",n?r.a.createElement("div",null,r.a.createElement("img",{src:ue.a})):r.a.createElement("div",null,r.a.createElement(H,{onClick:function(){t(me(!0)),setTimeout((function(){return t(me(!1))}),3e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=n(61),ve=n.n(de),pe=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,l=e.value1,c=Object(C.a)(e,["type","onChange","onChangeRange","className","value1"]),o="".concat(ve.a.range," ").concat(a||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:o,value:l},c)))},he=n(115),fe=n(116),be=function(e){var t=e.onChangeRange,n=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{sx:{width:200}},r.a.createElement(fe.a,{value:n,onChange:function(e,n){t&&t(n)},valueLabelDisplay:"auto"})))},ge=n(66),_e=n.n(ge);var ke=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(100),o=Object(E.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,n),r.a.createElement(pe,{onChangeRange:function(e){l(e)},value1:n})),r.a.createElement("div",{className:_e.a.DoubleRangeContainer},r.a.createElement("div",null,n),r.a.createElement(be,{value:[n,u],onChangeRange:function(e){Array.isArray(e)&&l(e[0]),Array.isArray(e)&&i(e[1])}}),r.a.createElement("div",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ce=function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(z,null),r.a.createElement(ae,null),r.a.createElement(le,null),r.a.createElement(Ee,null),r.a.createElement(ke,null))},Oe=n(37),je=n.n(Oe),Ne={theme:"some"};var xe=function(){var e=Object(ce.c)((function(e){return e.theme})).theme,t=Object(ce.b)();return r.a.createElement("div",{className:je.a[e]},r.a.createElement("hr",null),r.a.createElement("div",{className:je.a[e+"-text"]},"homeworks 12"),r.a.createElement(Q,{className:je.a[e+"-text"],name:"radio",options:["some","dark","red","blue"],value:e,onChangeOption:function(e){t(function(e){return{type:"CHANGE_THEME",theme:e}}(e))}}),r.a.createElement("hr",null))},Se=n(67),ye=n.n(Se).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),we=function(e){return ye.post("auth/test",{success:e})};var He=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!0),o=Object(E.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",null,"homeworks 13",r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){we(u).then((function(e){console.log(e.data),l(e.data.errorText)})).catch((function(e){console.log(Object(ie.a)({},e)),console.log(e.response?e.response.data.errorText:"Some error occurred"),l(e.response?e.response.data.errorText:"Some error occurred")}))}},"request")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:u,onChange:function(e){i(e.currentTarget.checked)}}),"success"),n)};var Te=function(){return r.a.createElement("div",null,r.a.createElement(xe,null),r.a.createElement(He,null))},We="/pre-junior",Ae="/junior",Ie="/junior-plus";var Re=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:We})}}),r.a.createElement(s.b,{path:We,render:function(){return r.a.createElement(R,null)}}),r.a.createElement(s.b,{path:Ae,render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(s.b,{path:Ie,render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(s.b,{render:function(){return r.a.createElement(M,null)}})))},Me=n(21),Be=n.n(Me);var Le=function(){return r.a.createElement("div",{className:Be.a.navbarBlock},r.a.createElement("nav",null,r.a.createElement("div",{className:Be.a.item},r.a.createElement(i.b,{to:We,activeClassName:Be.a.activeLink},"PreJunior")),r.a.createElement("div",{className:Be.a.item},r.a.createElement(i.b,{to:Ae,activeClassName:Be.a.activeLink},"Junior")),r.a.createElement("div",{className:Be.a.item},r.a.createElement(i.b,{to:Ie,activeClassName:Be.a.activeLink},"Junior+"))))},De=n(69),Fe=n.n(De);var Pe=function(){return r.a.createElement("div",{className:Fe.a.mainBlock},r.a.createElement(i.a,null,r.a.createElement(Le,null),r.a.createElement(Re,null)))};var Ge=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(46),Ue=Object(Je.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(ie.a)({},e,{loading:t.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return Object(ie.a)({},e,{theme:t.theme});default:return e}}}),Ke=Object(Je.b)(Ue),Xe=Ke;window.store=Ke,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce.a,{store:Xe},r.a.createElement(Ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,n){e.exports={navbarBlock:"Header_navbarBlock__1Eq8L",item:"Header_item__2uo2t",activeLink:"Header_activeLink__263bW"}},29:function(e,t,n){e.exports={item:"HW8_item__1_bpL",block:"HW8_block__i-AYH"}},37:function(e,t,n){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",some:"HW12_some__2eRaq","some-text":"HW12_some-text__1-Wyv",blue:"HW12_blue__3Q2SK","blue-text":"HW12_blue-text__1X9Mu"}},38:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},39:function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},40:function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},41:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},42:function(e,t,n){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},43:function(e,t,n){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},57:function(e,t,n){e.exports={App:"App_App__1Sc4o"}},58:function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},59:function(e,t,n){e.exports={span:"SuperEditableSpan_span__TqnG3"}},60:function(e,t,n){e.exports=n.p+"static/media/loader.e275bf6b.gif"},61:function(e,t,n){e.exports={range:"SuperRange_range__2K0wQ"}},66:function(e,t,n){e.exports={DoubleRangeContainer:"HW11_DoubleRangeContainer__1PWTc"}},69:function(e,t,n){e.exports={mainBlock:"HW5_mainBlock__22hXm"}},75:function(e,t,n){e.exports=n(104)},80:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.12803365.chunk.js.map