(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,n){"use strict";n.d(t,"h",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return b})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"j",(function(){return s})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);const l=({children:e,color:t})=>r.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r.a.createElement("i",{className:"fas fa-clock"})," ",e),c=({children:e,color:t})=>r.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r.a.createElement("i",{className:"fas fa-calendar-day"})," ",e),i=({children:e,color:t})=>r.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r.a.createElement("i",{className:"fas fa-vials"})," Already done by mentors."),b=({children:e,unit:t})=>{const n={um:"\u03bcM",ul:"\u03bcL",ml:"mL",degc:"\xb0C"};let a=t.split("/");return a=a.map((e=>{let t=e;for(let a in n)e.toLowerCase()==a.toLowerCase()&&(t=n[a]);return t})),r.a.createElement("span",null,e," ",a.join("/"))},o=({children:e,text:t})=>r.a.createElement("span",null,r.a.createElement("p",{style:{textAlign:"center",fontStyle:"italic",fontWeight:"bold"}},t),e),d=({children:e,text:t})=>r.a.createElement("span",null,r.a.createElement("div",{style:{textAlign:"center",marginRight:"5em",marginLeft:"5em"}},e),r.a.createElement("p",{style:{textAlign:"center",fontStyle:"italic"}},t)),s=({id:e})=>r.a.createElement("img",{src:`http://zinc.docking.org/substances/ZINC0000${e}.png`,height:200,width:200,style:{border:"2px solid"}}),p=({smiles:e})=>r.a.createElement("img",{src:"http://zinc.docking.org/apps/mol/draw.png?smiles="+encodeURIComponent(e),height:200,width:200,style:{border:"2px solid"}});class u extends a.Component{constructor(e){super(e),this.state={elID:"molEdit-"+1e5*Math.random()/1}}componentDidMount(){document.loadChemicalView(this.props.mol||"",this.state.elID)}render(){return r.a.createElement("div",{id:this.state.elID,className:"molEdit",style:{border:"2px solid grey",height:"900px",width:"800px",display:"block"}})}}class m extends a.Component{constructor(e){super(e),this.state={elID:"actICM-"+1e5*Math.random()/1}}componentDidMount(){const e=document.createElement("script");e.innerHTML="\n      function onLoadActiveIcm() {\n            document.loadICMNow(decodeURI("+encodeURI(this.state.elID)+"));\n      }\n      ",document.getElementById(this.state.elID).appendChild(e)}render(){return r.a.createElement("div",{id:this.state.elID,"data-file":this.props.mol||"",className:"actICM",style:{border:"2px solid grey",height:"900px",width:"800px",display:"block"}})}}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),l=(n(0),n(98)),c=n(100),i={id:"20209-7-vs-chbre-vina",title:"Fall20-W7 Target Virtual Screening - Chembridge Economy (VINA)",tags:["Virtual Screening","VINA"]},b={unversionedId:"research-pages/20209-7-vs-chbre-vina",id:"research-pages/20209-7-vs-chbre-vina",isDocsHomePage:!1,title:"Fall20-W7 Target Virtual Screening - Chembridge Economy (VINA)",description:"Objective",source:"@site/docs/research-pages/20209-week7-vs-chbre-vina.md",slug:"/research-pages/20209-7-vs-chbre-vina",permalink:"/docs/research-pages/20209-7-vs-chbre-vina",editUrl:"https://github.com/eternal-flame-AD/vds-yumechi-top/edit/master/docs/research-pages/20209-week7-vs-chbre-vina.md",version:"current",sidebar:"someSidebar",previous:{title:"Fall20-W6 Spectrophores (TM)",permalink:"/docs/research-pages/20209-6-obspectrophore"},next:{title:"Fall20-W8 IPIPE PCR",permalink:"/docs/research-pages/20209-8-vs-ipipe-pcr"}},o=[{value:"Objective",id:"objective",children:[]},{value:"Methods",id:"methods",children:[{value:"Preparation",id:"preparation",children:[]},{value:"Library docking",id:"library-docking",children:[]}]},{value:"Discussion",id:"discussion",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"objective"},"Objective"),Object(l.b)("p",null,"This is another run using the same dataset as the GOLD screening on the repacked model of FtFBA in week 6."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"preparation"},"Preparation"),Object(l.b)("p",null,"Same as last week, skipped."),Object(l.b)("h3",{id:"library-docking"},"Library docking"),Object(l.b)("p",null,"The dock was performed on ",Object(l.b)("inlineCode",{parentName:"p"},"AutoDock Vina 1.1.2")," with ",Object(l.b)("inlineCode",{parentName:"p"},"MGLTools-1.5.6")),Object(l.b)("h4",{id:"preparing-receptor-and-ligands"},"Preparing Receptor and Ligands"),Object(l.b)("p",null,"The receptor was converted into ",Object(l.b)("inlineCode",{parentName:"p"},"PDBQT"),"format with the following script:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'\n# docked_prot.pdb is the repacked model input with substrate in place.\n\necho "centroid resn FBP; save receptor.pdb, polymer;"|pymol -c -p docked_prot.pdb\n\n$AutoDockTools/Utilities24/prepare_receptor4.py -A checkhydrogens -r receptor.pdb\n')),Object(l.b)("p",null,"The ligand in library and control was converted in ",Object(l.b)("inlineCode",{parentName:"p"},"PDBQT")," format at run time using ",Object(l.b)("inlineCode",{parentName:"p"},"prepare_ligand4.py")," (see Running section for details)."),Object(l.b)("h4",{id:"running"},"Running"),Object(l.b)("p",null,"The dock was done on TACC Stampede2 supercomputer. "),Object(l.b)("p",null,"Sample job worker script:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\n\n[ $(cat job.sdf | grep "\\$\\$\\$\\$" | wc -l) -eq $(find output -name "*.pdbqt" | wc -l) ] && echo "skipping $PWD" && exit 0\n\nulimit -u 16384\n\nmkdir input || true\nmkdir output || true\n\nfind input -name "*.mol2" >/dev/null || obabel job.sdf -p7.4 -m -Oinput/job.mol2\n\nfind input/ -type f -name "*.mol2" | xargs -Iligandfn \\\nbash -c \'[ -f "ligandfn.pdbqt" ] || $ADT_SCRIPT_DIR/prepare_ligand4.py -l ligandfn -o ligandfn.pdbqt\'\n\nfind input/ -type f -name "*.pdbqt" | xargs -P10 -Iligandfn \\\nbash -c \'ligName=$(obabel $(echo ligandfn  | sed "s/\\.pdbqt//") -otxt | sed "s/\\s/-/g"); [ -f "output/$ligName.pdbqt" ] || vina --config vina.conf --ligand "ligandfn" --out "output/$ligName.pdbqt" --log "output/$ligName.log";\'\n')),Object(l.b)("p",null,"Score collecting script (VINA ",Object(l.b)("inlineCode",{parentName:"p"},".log")," file to ",Object(l.b)("inlineCode",{parentName:"p"},".csv"),"):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-awk"}),'#!/usr/bin/awk -f\n\nBEGIN {\n        print "filename,mode,affinity,rmst_lb,rmsd_ub"\n}\nBEGINFILE {\n        tablebegun = 0\n}\n/\\|/ {\n        tablebegun = 1;\n}\n/[0-9]/ {\n        if(tablebegun) {\n                gsub("\\\\s+", ",");\n                print FILENAME $0;\n        }\n}\n')),Object(l.b)("h4",{id:"results"},"Results"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Ligand"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Image"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"affinity"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"MW (dal)"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"HBD"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"HBA1"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"LogP"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC136131952"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"136131952",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-9.2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"319.317"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"18"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.7052")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC96138593"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"96138593",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-9.2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"377.782"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"22"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.4702")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC68844447"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"68844447",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-9.1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"335.317"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"18"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.0406")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC55936"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"55936",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-9.1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"341.325"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"21"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.3557")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC91306034"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"91306034",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-9"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"351.382"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"18"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3.5091")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC67975840"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"67975840",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-8.9"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"343.312"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"18"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.8867")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC188440"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"188440",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-8.8"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"217.181"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.21058")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC4344201"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"4344201",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-8.8"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"196.127"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"12"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-0.9555")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC218226505"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"218226505",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-8.8"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"363.392"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.4695")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ZINC77407880"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)(c.j,{id:"77407880",mdxType:"ZincImg"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-8.8"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"383.401"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"27"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.4523")))),Object(l.b)(c.b,{text:["Fig 1.a. PyMOL picture for top 1 ligand in control group (ZINC136131952).","Amino acids within 5 angstroms were shown in sticks.","Polar contact(s) shown as yellow dashes.","Ligand shown in green sticks.","Residue names labeled on CA atoms."].join(" "),mdxType:"BottomCaption"},Object(l.b)("img",{src:"/img/20209-7-vs-chbre-vina-ZINC136131952-ray.png"})),Object(l.b)(c.b,{text:["Fig. 2. ROC curve of number of positive controls picked vs. all molecule tested.","GOLD results from week 6 indicated in grey.;","VINA results in this dock indicated in blue.;","Random indicated in orange. "].join(" "),mdxType:"BottomCaption"},Object(l.b)("img",{src:"/img/20209-7-vs-chbre-vina-vs-gold-roc.jpg"})),Object(l.b)("h2",{id:"discussion"},"Discussion"),Object(l.b)("p",null,"It was observed that "),Object(l.b)("p",null,"(1) In terms of classification ability between positive controls and decoys, VINA in this run does provide a better result compared to GOLD last week."),Object(l.b)("p",null,"(2) Between the top 10 candidates there are a couple of molecules that have very similar configurations (such as ZINC68844447 and ZINC91306034 and ZINC218226505),\nwhich is an indication that VINA does produce similar results for similar configurations."),Object(l.b)("p",null,"(3) While the pose produced by VINA for the top 1 candidate does make sense, but a lack of polar contacts or other significant binding motifs indicates that\nthis is not a very optimal pose in terms of binding mode to the receptor."),Object(l.b)("p",null,"In terms of limitations, it should be acknowledged that"),Object(l.b)("p",null,"(1) This dock does not have a very proper evaluation on result precision, although there are traces that indicate precision that are discussed above."),Object(l.b)("p",null,"(2) A better performance based on an ROC curve does not necessarily mean better performance in virtual screening, in which case we mostly only care about positives in top10%. Thus, higher selectivity that only shows up laster would not be\nvery useful in virtual screening applications."),Object(l.b)("p",null,"(3) This dock also uses rigid receptor configuration. This can be indeed a problem since the model was theoretical thus there can be a bigger deviation between the model of the receptor\ncompared to the actually natural conformation."),Object(l.b)("p",null,"Thus, the results from this dock may have higher selectivity compared to the GOLD dock last week, thus I would\nagree that the results from VINA to be used if the budget for purchasing more compounds was limiting."),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"The results from this dock may be used to move on to actual lab screening.\nHowever it may be worth considering to find ways to optimize either the model or docking configuration for potentially better results. (See last-week's GOLD discussions for more info.)"))}s.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(c,".").concat(u)]||s[u]||p[u]||l;return n?r.a.createElement(m,i(i({ref:t},o),{},{components:n})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);