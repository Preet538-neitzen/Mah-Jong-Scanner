(this.webpackJsonpreact_qrcode=this.webpackJsonpreact_qrcode||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n.n(r),i=n(9),s=n.n(i),j=(n(73),n(74),n(21)),l=n(11),o=n(125),d=n(129),h=n(130),b=n(40),x=n.n(b),O=n(43);var u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(o.a,{style:{margin:30},variant:"h2",children:"React QR Code kkk"}),Object(c.jsxs)(d.a,{container:!0,spacing:6,children:[Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(j.b,{to:"/qr_generator",children:Object(c.jsx)(h.a,{variant:"contained",size:"large",color:"primary",children:Object(c.jsx)(x.a,{style:{padding:10},path:O.a,title:"QR Generator",size:10,color:"white"})})})}),Object(c.jsx)(d.a,{item:!0,xs:6,children:Object(c.jsx)(j.b,{to:"/qr_scanner",children:Object(c.jsx)(h.a,{variant:"contained",size:"large",color:"primary",children:Object(c.jsx)(x.a,{style:{padding:10},path:O.b,title:"QR Scanner",size:10,color:"white"})})})})]})]})},g=n(16),p=n(131),m=n(135),v=n(133),y=n(132),f=n(134),S=n(54),w=n.n(S);var R=function(){var e=Object(r.useState)("lintangwisesa"),t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)(p.a,{style:{marginRight:10},color:"primary",children:Object(c.jsx)(y.a,{})})}),Object(c.jsx)("span",{children:"QR Generator"}),Object(c.jsx)("div",{style:{marginTop:30},children:Object(c.jsx)(m.a,{onChange:function(e){a(e.target.value)},style:{width:320},value:n,label:"QR content",size:"large",variant:"outlined",color:"primary"})}),Object(c.jsx)("div",{children:n?Object(c.jsx)(w.a,{id:"myqr",value:n,size:320,includeMargin:!0}):Object(c.jsx)("p",{children:"No QR code preview"})}),Object(c.jsx)("div",{children:n?Object(c.jsxs)(d.a,{container:!0,children:[Object(c.jsx)(d.a,{item:!0,xs:10,children:Object(c.jsx)(v.a,{style:{fontSize:18,width:250,height:100},rowsMax:4,defaultValue:n,value:n})}),Object(c.jsx)(d.a,{item:!0,xs:2,children:Object(c.jsx)(p.a,{onClick:function(){var e=document.getElementById("myqr").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download="myqr.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},style:{marginLeft:10},color:"primary",children:Object(c.jsx)(f.a,{})})})]}):""})]})},C=n(55),k=n.n(C),q=n(35);var z=function(){var e=Object(q.useSpeechSynthesis)().speak,t=a.a.useState(""),n=Object(g.a)(t,2),i=(n[0],n[1]),s=Object(r.useState)("No result"),l=Object(g.a)(s,2),o=l[0],d=l[1];return console.log(o),Object(c.jsxs)("div",{children:[Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)(p.a,{style:{marginRight:10},color:"primary",children:Object(c.jsx)(y.a,{})})}),Object(c.jsx)("span",{children:"QR Scanner"}),Object(c.jsx)("center",{children:Object(c.jsx)("div",{style:{marginTop:30},children:Object(c.jsx)(k.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){e&&d(e)},style:{height:240,width:320}})})}),Object(c.jsx)(v.a,{style:{fontSize:18,width:320,height:100,marginTop:100},rowsMax:4,defaultValue:o,value:o,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("div",{className:"group",children:Object(c.jsx)("button",{onClick:function(){return e({text:o})},children:"Speech"})})]})};var Q=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{className:"App-header",children:Object(c.jsx)(j.a,{basename:"/Mah-Jong-Scanner/",children:Object(c.jsx)("div",{children:Object(c.jsxs)(l.Switch,{children:[Object(c.jsx)(l.Route,{exact:!0,path:"/",children:Object(c.jsx)(u,{})}),Object(c.jsx)(l.Route,{path:"/qr_generator",children:Object(c.jsx)(R,{})}),Object(c.jsx)(l.Route,{path:"/qr_scanner",children:Object(c.jsx)(z,{})})]})})})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},_=n(57),N=n.n(_);s.a.render(Object(c.jsx)(N.a,{basename:"/Mah-Jong-Scanner",children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Q,{})})}),document.getElementById("root")),M()}},[[99,1,2]]]);
//# sourceMappingURL=main.f4d2be39.chunk.js.map