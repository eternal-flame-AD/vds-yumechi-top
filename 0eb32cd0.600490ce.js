(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"i",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r);const a=({children:e,color:t})=>o.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},o.a.createElement("i",{className:"fas fa-clock"})," ",e),c=({children:e,color:t})=>o.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},o.a.createElement("i",{className:"fas fa-calendar-day"})," ",e),i=({children:e,color:t})=>o.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},o.a.createElement("i",{className:"fas fa-vials"})," Already done by mentors."),l=({children:e,unit:t})=>{const n={um:"\u03bcM",ul:"\u03bcL",ml:"mL",degc:"\xb0C"};let r=t.split("/");return r=r.map((e=>{let t=e;for(let r in n)e.toLowerCase()==r.toLowerCase()&&(t=n[r]);return t})),o.a.createElement("span",null,e," ",r.join("/"))},s=({children:e,text:t})=>o.a.createElement("span",null,o.a.createElement("p",{style:{textAlign:"center",fontStyle:"italic",fontWeight:"bold"}},t),e),d=({children:e,text:t})=>o.a.createElement("span",null,o.a.createElement("div",{style:{textAlign:"center",marginRight:"5em",marginLeft:"5em"}},e),o.a.createElement("p",{style:{textAlign:"center",fontStyle:"italic"}},t)),u=({id:e})=>o.a.createElement("img",{src:`http://zinc.docking.org/substances/ZINC0000${e}.png`,height:200,width:200,style:{border:"2px solid"}}),p=({smiles:e})=>o.a.createElement("img",{src:"http://zinc.docking.org/apps/mol/draw.png?smiles="+encodeURIComponent(e),height:200,width:200,style:{border:"2px solid"}});class m extends r.Component{constructor(e){super(e),this.state={elID:"molEdit-"+1e5*Math.random()/1}}componentDidMount(){document.loadChemicalView(this.props.mol||"",this.state.elID)}render(){return o.a.createElement("div",{id:this.state.elID,className:"molEdit",style:{border:"2px solid grey",height:"900px",width:"800px",display:"block"}})}}class f extends r.Component{constructor(e){super(e),this.state={elID:"actICM-"+1e5*Math.random()/1}}componentDidMount(){const e=document.createElement("script");e.innerHTML="\n      function onLoadActiveIcm() {\n            document.loadICMNow(decodeURI("+encodeURI(this.state.elID)+"));\n      }\n      ",document.getElementById(this.state.elID).appendChild(e)}render(){return o.a.createElement("div",{id:this.state.elID,"data-file":this.props.mol||"",className:"actICM",style:{border:"2px solid grey",height:"900px",width:"800px",display:"block"}})}}},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(98)),c=n(100),i={id:"molsoft-test",title:"MolSoft Editors test page"},l={unversionedId:"style-guides/molsoft-test",id:"style-guides/molsoft-test",isDocsHomePage:!1,title:"MolSoft Editors test page",source:"@site/docs/style-guides/molsoft.md",slug:"/style-guides/molsoft-test",permalink:"/docs/style-guides/molsoft-test",editUrl:"https://github.com/eternal-flame-AD/vds-yumechi-top/edit/master/docs/style-guides/molsoft.md",version:"current"},s=[],d={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.e,{mdxType:"MolSoftEditor"}),Object(a.b)(c.a,{mol:"1xbb.icb",mdxType:"ActICM"}))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);