(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),i=(t(0),t(88)),a={id:"convenient-scripts",title:"GOLD Convenient Scripts"},c={unversionedId:"lab-notes/virtual/gold/convenient-scripts",id:"lab-notes/virtual/gold/convenient-scripts",isDocsHomePage:!1,title:"GOLD Convenient Scripts",description:"Append filename to gold soln files",source:"@site/docs/lab-notes/virtual/gold/convenient-scripts.md",slug:"/lab-notes/virtual/gold/convenient-scripts",permalink:"/docs/lab-notes/virtual/gold/convenient-scripts",editUrl:"https://github.com/eternal-flame-AD/vds-yumechi-top/edit/master/docs/lab-notes/virtual/gold/convenient-scripts.md",version:"current",sidebar:"someSidebar",previous:{title:"Lab Notes Index",permalink:"/docs/lab-notes/"},next:{title:"Conformer Generation",permalink:"/docs/lab-notes/virtual/gold/conformer-generation"}},l=[{value:"Append filename to gold soln files",id:"append-filename-to-gold-soln-files",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"append-filename-to-gold-soln-files"},"Append filename to gold soln files"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\n\necho "File      Score     S(PLP)   S(hbond)     S(cho)   S(metal)  DE(clash)   DE(tors)     intcor     time                               File name                Ligand name"\nfor var in "$@"; do\n    fn=${var%.lst}\n    fn=${fn##*/}\n    while read p; do\n         if [[ $p == *"gold_soln"* ]]; then\n            echo "${fn}     ${p}"\n        fi\n    done < $var\ndone\n')))}p.isMDXComponent=!0},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);