(this["webpackJsonpcowin-app"]=this["webpackJsonpcowin-app"]||[]).push([[0],{32:function(e,t,n){},55:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(24),s=n.n(r),i=(n(32),n(6)),o=n.n(i),l=n(9),u=n(2),d=n(10),j=n.n(d),b=n(7),f=n.n(b),m=n(5),p=n(11),h=n(27),v=n(0);function O(e){var t=e.columns,n=e.data,a=Object(c.useState)(""),r=Object(u.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(c.useState)(""),f=Object(u.a)(b,2),O=f[0],x=f[1],g=Object(c.useState)(""),_=Object(u.a)(g,2),S=_[0],N=_[1],w=Object(p.useTable)({columns:t,data:n,initialState:{sortBy:[{id:"pincode",desc:!1}]}},p.useFilters,p.useSortBy),y=w.getTableProps,k=w.getTableBodyProps,Y=w.headerGroups,D=w.rows,C=w.prepareRow,A=w.setFilter;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"input-group row",children:[Object(v.jsx)("div",{className:"form-group col-sm",children:Object(v.jsx)("input",{className:"form-control",value:s,onChange:function(e){var t=e.target.value||"";A("name",t),i(t)},placeholder:"Search Hospital Name"})}),Object(v.jsx)("div",{className:"form-group col-sm",children:Object(v.jsx)("input",{className:"form-control",value:S,onChange:function(e){var t=e.target.value||"";A("address",t),N(t)},placeholder:"Search Address"})}),Object(v.jsx)("div",{className:"form-group col-sm",children:Object(v.jsx)("input",{className:"form-control",value:d,onChange:function(e){var t=e.target.value||"";A("block_name",t),j(t)},placeholder:"Search Block Name"})}),Object(v.jsx)("div",{className:"form-group col-sm",children:Object(v.jsx)("input",{className:"form-control",value:O,onChange:function(e){var t=e.target.value||"";A("pincode",t),x(t)},placeholder:"Search Pincode"})})]}),Object(v.jsxs)(h.a,Object(m.a)(Object(m.a)({className:"styled-table",striped:!0,bordered:!0,hover:!0,responsive:!0},y()),{},{children:[Object(v.jsx)("thead",{children:Y.map((function(e){return Object(v.jsx)("tr",Object(m.a)(Object(m.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(v.jsx)("th",Object(m.a)(Object(m.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:e.isSorted?e.isSortedDesc?"sort-desc":"sort-asc":"",children:e.render("Header")}))}))}))}))}),Object(v.jsx)("tbody",Object(m.a)(Object(m.a)({},k()),{},{children:D.map((function(e,t){return C(e),Object(v.jsx)("tr",Object(m.a)(Object(m.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(v.jsx)("td",Object(m.a)(Object(m.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})}n(55);var x=function(e){var t=e.values,n=e.col,c=e.dose;return Object(v.jsx)(v.Fragment,{children:t.map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[e[n]," ",c]})},t)}))})},g=function(e){var t=e.values,n=e.col,c=e.dose;return Object(v.jsx)(v.Fragment,{children:t.map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[e[n]," (","D1:"," ",e.available_capacity_dose1,", ","D2:"," ",e.available_capacity_dose2,")  ",c]})},t)}))})},_=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};var S=function(e,t){return"All"===t?e:(t=parseInt(t),e.map((function(e){return e.sessions.filter((function(e){return e.min_age_limit===t})).length>0?e:void 0})).filter((function(e){return void 0!==e})))},N=function(e,t){return"All"===t?e:e.map((function(e){return e.sessions.filter((function(e){return e.vaccine===t&&e.available_capacity>0})).length>0?e:void 0})).filter((function(e){return void 0!==e}))},w=function(e,t){return"All"===t?e:e.filter((function(e){return e.fee_type===t}))},y=function(e,t){return"Both"===t?e:e.map((function(e){var n=e.sessions.filter((function(e){return e.available_capacity>0&&("1"===t?e.available_capacity_dose1>0:e.available_capacity_dose2>0)}));return n.length>0?(e.sessions=n,e):void 0})).filter((function(e){return void 0!==e}))},k=function(e){return e.map((function(e){return e.sessions.filter((function(e){return e.available_capacity>0})).length>0?e:void 0})).filter((function(e){return void 0!==e}))},Y=[{vaccine_name:"COVISHIELD"},{vaccine_name:"COVAXIN"},{vaccine_name:"Sputnik V"}],D=[{fee_type:"Free"},{fee_type:"Paid"}],C=[{min_age_limit:18},{min_age_limit:45}],A=[{dose:1},{dose:2}],I=n(8);var P=function(){var e=function(){var e=Object(c.useState)(_()),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a(_())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=(e.height,e.width),n=Object(c.useState)(!1),r=Object(u.a)(n,2),s=r[0],i=r[1],d=Object(c.useState)([]),b=Object(u.a)(d,2),m=b[0],p=b[1],h=Object(c.useState)([]),P=Object(u.a)(h,2),M=P[0],B=P[1],H=Object(c.useState)([]),F=Object(u.a)(H,2),T=F[0],V=F[1],E=Object(c.useState)([]),L=Object(u.a)(E,2),R=L[0],z=L[1],G=Object(c.useState)(Y),J=Object(u.a)(G,2),W=J[0],q=(J[1],Object(c.useState)("")),X=Object(u.a)(q,2),K=X[0],Q=X[1],U=Object(c.useState)(""),Z=Object(u.a)(U,2),$=Z[0],ee=Z[1],te=Object(c.useState)(""),ne=Object(u.a)(te,2),ce=ne[0],ae=ne[1],re=Object(c.useState)(""),se=Object(u.a)(re,2),ie=se[0],oe=se[1],le=Object(c.useState)("All"),ue=Object(u.a)(le,2),de=ue[0],je=ue[1],be=Object(c.useState)("All"),fe=Object(u.a)(be,2),me=fe[0],pe=fe[1],he=Object(c.useState)("All"),ve=Object(u.a)(he,2),Oe=ve[0],xe=ve[1],ge=Object(c.useState)("Both"),_e=Object(u.a)(ge,2),Se=_e[0],Ne=_e[1],we=Object(c.useState)(!1),ye=Object(u.a)(we,2),ke=ye[0],Ye=ye[1],De=a.a.createRef(),Ce="http://maps.google.com/?q=",Ae=function(){Ye(!1),B([]),Q(f()().format("DD-MM-YYYY"))};Object(c.useEffect)((function(){Q(f()().format("DD-MM-YYYY")),Object(I.trackPromise)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()("https://cdn-api.co-vin.in/api/v2/admin/location/states");case 2:t=e.sent,V(t.data.states);case 4:case"end":return e.stop()}}),e)})))())}),[]);var Ie=Object(c.useMemo)((function(){return[{Header:"Hospital",columns:[{Header:"Name",accessor:"name",Cell:function(e){return Object(v.jsxs)("a",{href:Ce+e.value+", "+ce+", "+$,target:"_blank",rel:"noopener noreferrer",children:[" ",e.value," "]})}},{Header:"Address",accessor:"address",Cell:function(e){return Object(v.jsxs)("a",{href:Ce+e.value+", "+ce+", "+$,target:"_blank",rel:"noopener noreferrer",children:[" ",e.value," "]})}},{Header:"Block",accessor:"block_name"},{Header:"Pincode",accessor:"pincode",Cell:function(e){return Object(v.jsxs)("a",{href:Ce+e.value+", "+ce+", "+$,target:"_blank",rel:"noopener noreferrer",children:[" ",e.value," "]})}}]},{Header:"Details",columns:[{Header:"Date",accessor:function(e){var t=[];return e.sessions.map((function(e){return e.available_capacity>0&&t.push(e),null})),t},Cell:function(e){var t=e.cell.value;return Object(v.jsx)(x,{values:t,col:"date"})}},{Header:"Available Doses",accessor:function(e){var t=[];return e.sessions.map((function(e){return e.available_capacity>0&&t.push(e),null})),t},Cell:function(e){var t=e.cell.value;return Object(v.jsx)(g,{values:t,col:"available_capacity"})}}]}]}),[ce,$]),Pe=function(e,t){var n=e;switch(t){case"age":"All"!==Oe&&(n=S(e,Oe));break;case"fee":"All"!==me&&(n=w(e,me));break;case"vaccine":"All"!==de&&(n=N(e,de));break;case"dose":"Both"!==Se&&(n=y(e,Se));break;default:console.log("Invalid choice")}return n},Me=function(e,t){switch(t){case"vaccine":e=Pe(e,"age"),e=Pe(e,"fee"),e=Pe(e,"dose");break;case"fee":e=Pe(e,"age"),e=Pe(e,"vaccine"),e=Pe(e,"dose");break;case"age":e=Pe(e,"fee"),e=Pe(e,"vaccine"),e=Pe(e,"dose");break;case"dose":e=Pe(e,"fee"),e=Pe(e,"vaccine"),e=Pe(e,"age");break;default:console.log("Invalid Option")}return e},Be=function(e,n){t<760&&i(!0),ee(n),p([]),z([]),Ae(),Object(I.trackPromise)(Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j()("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+e);case 2:n=t.sent,z(n.data.districts);case 4:case"end":return t.stop()}}),t)})))())},He=function(e,t){s&&De.current.scrollIntoView({behavior:"smooth"});var n="";Ae();var c=K,a=ie;e&&(ae(e.target.options[e.target.selectedIndex].text),n=e.target.value,oe("Select"===(a=n)?"":a)),t&&Q(c=t),Object(I.trackPromise)(Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Select"===a){e.next=7;break}return e.next=3,j()("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="+a+"&date="+c);case 3:t=e.sent,n=k(t.data.centers),p(n),n.length>0?(Ye(!1),n=Pe(n,"vaccine"),n=Pe(n,"fee"),n=Pe(n,"age"),n=Pe(n,"dose"),B(n)):Ye(!0);case 7:case"end":return e.stop()}}),e)})))())},Fe=function(e){var t="";if("next"===e)t=f()(K,"DD-MM-YYYY").add(6,"d");else{var n=f()(K,"DD-MM-YYYY").subtract(6,"d"),c=f()();t=n.isBefore(c)?c:n}var a=t.format("DD-MM-YYYY");He("",a)};return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"jumbotron",children:Object(v.jsx)("h1",{children:"COWIN Availability Tracker"})}),Object(v.jsx)("form",{className:"form-inline",children:Object(v.jsxs)("div",{className:"input-group row",children:[Object(v.jsxs)("div",{className:"form-group col-sm",children:[Object(v.jsx)("label",{children:"State:"}),Object(v.jsxs)("select",{className:"form-control",id:"state",name:"state",onChange:function(e){return Be(e.target.value,e.target.options[e.target.selectedIndex].text)},children:[Object(v.jsx)("option",{children:"Select"}),T.map((function(e,t){return Object(v.jsx)("option",{value:e.state_id,children:e.state_name},t)}))]})]}),Object(v.jsxs)("div",{className:"form-group col-sm",children:[Object(v.jsx)("label",{children:"District:"}),Object(v.jsxs)("select",{className:"form-control",id:"dist",onChange:function(e){return He(e)},children:[Object(v.jsx)("option",{children:"Select"}),R.map((function(e,t){return Object(v.jsx)("option",{value:e.district_id,children:e.district_name},t)}))]})]}),Object(v.jsxs)("div",{className:"form-group col-sm",children:[Object(v.jsx)("label",{children:"Vaccine:"}),Object(v.jsxs)("select",{className:"form-control",id:"vaccine",onChange:function(e){return function(e){s&&De.current.scrollIntoView({behavior:"smooth"}),je(e);var t=m;t=Me(t,"vaccine"),B(N(t,e))}(e.target.value)},children:[Object(v.jsx)("option",{children:"All"}),W.map((function(e,t){return Object(v.jsx)("option",{value:e.vaccine_name,children:e.vaccine_name},t)}))]})]}),Object(v.jsxs)("div",{className:"form-group col-sm",children:[Object(v.jsx)("label",{children:"Fees:"}),Object(v.jsxs)("select",{className:"form-control",id:"sel1",onChange:function(e){return function(e){s&&De.current.scrollIntoView({behavior:"smooth"}),pe(e);var t=m;t=Me(t,"fee"),B(w(t,e))}(e.target.value)},children:[Object(v.jsx)("option",{children:"All"}),D.map((function(e,t){return Object(v.jsx)("option",{value:e.fee_type,children:e.fee_type},t)}))]})]}),Object(v.jsxs)("div",{className:"form-group col-sm pb-2",children:[Object(v.jsx)("label",{children:"Age:"}),Object(v.jsxs)("select",{className:"form-control",id:"age",onChange:function(e){return function(e){s&&De.current.scrollIntoView({behavior:"smooth"}),xe(e);var t=m;t=Me(t,"age"),B(S(t,e))}(e.target.value)},children:[Object(v.jsx)("option",{children:"All"}),C.map((function(e,t){return Object(v.jsx)("option",{value:e.min_age_limit,children:e.min_age_limit},t)}))]})]}),Object(v.jsxs)("div",{className:"form-group col-sm pb-2",children:[Object(v.jsx)("label",{children:"Dose:"}),Object(v.jsxs)("select",{className:"form-control",id:"dose",onChange:function(e){return function(e){s&&De.current.scrollIntoView({behavior:"smooth"}),Ne(e);var t=m;t=Me(t,"dose"),B(y(t,e))}(e.target.value)},children:[Object(v.jsx)("option",{children:"Both"}),A.map((function(e,t){return Object(v.jsx)("option",{value:e.dose,children:e.dose},t)}))]})]}),Object(v.jsxs)("div",{className:"btn-group-vertical col-sm",children:[Object(v.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm mb-1",disabled:!ie,onClick:function(e){return Fe("next")},children:[K," ",">>"]}),Object(v.jsxs)("button",{type:"button",className:"btn btn-primary btn-sm mb-2",disabled:!ie,onClick:function(e){return Fe("prev")},children:[f()(K,"DD-MM-YYYY").add(6,"d").format("DD-MM-YYYY")," ","<<"]})]})]})}),Object(v.jsx)("div",{id:"mainTable",ref:De,children:Object(v.jsx)(O,{columns:Ie,data:M})}),Object(v.jsx)("br",{}),ke&&Object(v.jsxs)("p",{className:"error",children:[" ","No Vaccination center is available for booking."," "]})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},B=n(26),H=n.n(B);function F(e){return Object(I.usePromiseTracker)().promiseInProgress&&Object(v.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(v.jsx)(H.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"})})}n(79);s.a.render(Object(v.jsxs)(a.a.StrictMode,{children:[Object(v.jsx)(P,{}),Object(v.jsx)(F,{})]}),document.getElementById("root")),M()}},[[80,1,2]]]);
//# sourceMappingURL=main.4be032a7.chunk.js.map