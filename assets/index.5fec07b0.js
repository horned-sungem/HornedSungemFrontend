var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(n)for(var o of n(r))a.call(r,o)&&l(e,o,r[o]);return e},o=(e,l)=>{var r={};for(var o in e)t.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))l.indexOf(o)<0&&a.call(e,o)&&(r[o]=e[o]);return r};import{r as s,B as m,T as c,A as i,a as u,H as d,u as p,I as E,b as g,R as h,c as f,F as b,d as w,e as y,S as v,f as C,L as k,g as x,h as L,i as S,N as j,j as O,k as _,l as M,m as N,n as F,o as R,p as T,U as z,G as P,M as A,q as U,s as H,t as V,v as q,w as I}from"./vendor.c4d8d4d0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const s=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){n(self[t].moduleMap[o]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("assets/");const Z=s.createContext(null),B=({children:e,suffix:t,prefix:n})=>s.createElement(m,{round:!0,align:"center",direction:"column",pad:"xsmall",alignSelf:"start"},n&&s.createElement(c,{color:"brand",size:"small"},n),s.createElement(c,{weight:"bold",color:"brand",size:"large"},e),t&&s.createElement(c,{color:"brand",size:"small"},t)),$=({children:e})=>s.createElement(B,{suffix:"CP"},e),D=({children:e})=>s.createElement(B,{suffix:"Semester"},e),J=({module:e})=>s.createElement(m,{direction:"row",justify:"center",gap:"small",height:{min:"auto"},wrap:!0},s.createElement(D,null,e.cycle),s.createElement($,null,e.cp)),G=({module:e})=>s.createElement(m,null,s.createElement(i,{multiple:!0},s.createElement(Y,{label:"Lerninhalt",content:e.content}),s.createElement(Y,{label:"Qualifikationsziele / Lernergebnisse",content:e.results}),s.createElement(Y,{label:"Voraussetzungen für die Teilnahme",content:e.requirements}),s.createElement(Y,{label:"Prüfungsform",content:e.exam_form}))),Y=({label:e,content:t})=>s.createElement(u,{label:e},s.createElement(m,{style:{whiteSpace:"pre-wrap"}},t?s.createElement("p",null,t):s.createElement(m,{style:{color:"#555"}},s.createElement("i",null,"this value is not set.")))),Q=({module:e})=>s.createElement(m,{direction:"row",border:"between",gap:"small",height:{min:"auto"},justify:"center"},s.createElement(B,{prefix:"Arbeitsaufwand",suffix:"Stunden"},e.workload),s.createElement(B,{prefix:"Selbststudium",suffix:"Stunden"},e.self_study),s.createElement(B,{prefix:"Moduldauer",suffix:"Semester"},e.duration),s.createElement(B,{prefix:"Sprache"},e.language)),W=({module:e})=>s.createElement(s.Fragment,null,null!==e?s.createElement(m,{direction:"column",border:"between",gap:"small",pad:"small",basis:"1/2",height:{min:"auto"}},s.createElement(J,{module:e}),s.createElement(Q,{module:e}),s.createElement(G,{module:e})):s.createElement(s.Fragment,null)),K=e=>s.createElement(m,{flex:!0},s.createElement(d,{background:"brand",pad:"small"},s.createElement("h3",{style:{margin:"1rem 0"}},e.chosenModule.name," - ",e.chosenModule.id)),s.createElement(W,{module:e.chosenModule})),X=({children:e,module:t})=>s.createElement(m,{pad:"small",round:"small",background:"#F2F2F2",direction:"row",gap:"none",justify:"between"},s.createElement(m,{width:"medium",justify:"center"},s.createElement(c,{color:"brand",weight:"bold"},t.name)),s.createElement(m,null,e)),ee=s.createContext(null);const te=e=>{let t=p();const{votes:n}=s.useContext(ee),a=n.map((e=>e[0].id));return s.createElement(m,{width:"full",overflow:"auto"},s.createElement(E,{items:Object.values(e.modules),step:10},((n,l)=>s.createElement(m,{key:l,flex:!1,onMouseOver:()=>e.setChosenModule(n),height:"xsmall",className:"list__item"+(a.includes(n.id)?" list__item--voted":""),justify:"center",border:"bottom",onClick:()=>t.push("/module/"+n.id.replace("/","_"))},s.createElement(X,{module:n},s.createElement(J,{module:n}))))))},ne=({setModuleFilter:e})=>{const[t,n]=s.useState(null),[a,l]=s.useState(null),[r,o]=s.useState(""),[c,i]=s.useState("");return s.useEffect((()=>{const n=[e=>!t||e.cp>=parseInt(t),e=>!a||e.cp<=parseInt(a),e=>e.name.toLowerCase().includes(r.toLowerCase()),e=>e.id.toLowerCase().includes(c.toLowerCase())],l=e=>!n.map((t=>t(e))).includes(!1);e((()=>l))}),[t,a,r,c]),s.createElement(m,{height:{min:"auto"}},s.createElement(m,{direction:"row",align:"center",gap:"small"},"CP from ",s.createElement(g,{onChange:e=>n(e.target.value)})," to ",s.createElement(g,{onChange:e=>l(e.target.value)})),s.createElement(m,{direction:"row",align:"center",gap:"small"},"Name ",s.createElement(g,{onChange:e=>o(e.target.value)}),"Nr. ",s.createElement(g,{onChange:e=>i(e.target.value)})))},ae=()=>{const[e,t]=s.useState(null),n=s.useContext(Z),[a,l]=s.useState((()=>()=>!0)),r=s.useContext(h);return s.useEffect((()=>{console.log(r)})),s.createElement(m,{direction:"row",border:"between",gap:"small",margin:"small",fill:"horizontal"},s.createElement(m,{flex:!0},s.createElement(ne,{setModuleFilter:l}),s.createElement(te,{modules:n.filter(a),setChosenModule:t})),e&&["medium","large"].includes(r)&&s.createElement(K,{chosenModule:e}))},le=()=>s.createElement("svg",{width:"180",height:"180",viewBox:"0 0 180 180",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{d:"M60 60H120V120L60 60Z",fill:"#FF0048"}),s.createElement("path",{d:"M180 120L120 120L120 60L180 120Z",fill:"#642CA9"}),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M120 60H60V30L120 0L120 24.0078C119.901 24.0026 119.801 24 119.7 24C116.552 24 114 26.552 114 29.7C114 32.848 116.552 35.4 119.7 35.4C119.801 35.4 119.901 35.3974 120 35.3922L120 60Z",fill:"#642CA9"}),s.createElement("path",{d:"M120 120L180 120L180 180L120 120Z",fill:"#FF0048"}),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M60 30L0 60L60 60V30Z",fill:"#333333"}),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M120 35.3922V60L180 0L120 3.8147e-06V24.0078C123.009 24.1638 125.4 26.6526 125.4 29.7C125.4 32.7474 123.009 35.2362 120 35.3922Z",fill:"#FF0048"}));const re=e=>{var{variant:t,outline:n}=e,a=o(e,["variant","outline"]);return s.createElement("button",r({type:"button",className:["button",`button--${t}`,n?"button--outline":null].join(" ")},a),a.children)};const oe={url:"https://sungem.herokuapp.com/"};Object.freeze(oe);const se=({setError:e,setLayerOpen:t})=>{const[n,a]=s.useState(!1),[,l]=f(["user"]),[r,o]=s.useState(!1);return s.createElement(b,{onChange:()=>{a(!1)},onSubmit:n=>{o(!0),fetch(oe.url+"api/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.value.username,password:n.value.password})}).then((e=>e.json())).then((r=>{"token"in r?(l("user",{username:n.value.username,token:r.token},{maxAge:604800,secure:!0}),t(!1)):(e(!0),a(!0),setTimeout((()=>e(!1)),350)),o(!1)}))}},s.createElement(w,{name:"username",required:!0},s.createElement(g,{id:"name-input-field",name:"username",placeholder:"Username"})),s.createElement(w,{name:"password",error:n&&"Wrong username or password",required:!0},s.createElement(g,{type:"password",id:"pw-input-field",name:"password",placeholder:"Password"})),s.createElement(m,{direction:"row",gap:"medium",justify:"center"},s.createElement(y,{type:"submit",primary:!0,label:s.createElement(m,{direction:"row",gap:"small"},"Login ",r&&s.createElement(v,{color:"#fff"}))})))},me=({setLayerOpen:e})=>{const[t,n]=s.useState(!1);return s.createElement(m,{width:"medium",gap:"small",animation:t?{type:"jiggle",duration:200}:{type:"pulse",duration:-1},className:"login-modal"},s.createElement(m,{background:"brand",pad:{horizontal:"medium",top:"medium"}},s.createElement(C,{background:"brand"},"Login")),s.createElement(m,{pad:"medium"},s.createElement(se,{setError:n,setLayerOpen:e})))},ce=()=>{const[e,t]=s.useState(!1),[n]=f(["user"]);return s.createElement("div",{className:"page-index"},s.createElement("div",{className:"content"},s.createElement(le,null),s.createElement("h1",{className:"text--center"},"Sungem"),s.createElement("p",{className:"text--center text--no-margin"},"Hello wir sind 3 (maybe bald mehr) keks die so Modulstuff haben. Den Text darf wer anders schreiben.",s.createElement("br",null),"Hier beschreiben wir so was wir gemacht haben, was es bringt und wieso man sich nen Account machen sollte.",s.createElement("br",null),"By the way, das Logo ist temporär und das hab ich mir vom Materials Google Design stibitzt.",s.createElement("br",null),"Und eventuell par links zu den pages auf der Sidebar."),s.createElement(k,{to:"user"in n&&"/recommender/"},s.createElement(re,{variant:"primary",onClick:()=>t(!0)},"Empfohlene Module ansehen")),s.createElement(k,{to:"/modules/"},s.createElement(re,{variant:"primary",outline:!0},"Module durchsuchen ")),s.createElement(m,{background:"light-1"},e&&s.createElement(x,{onEsc:()=>t(!1),onClickOutside:()=>t(!1),position:"center",modal:!0,className:"login-modal-parent"},s.createElement(me,{setLayerOpen:t})))))};const ie=({module:e})=>{const t=p();return s.createElement(m,{direction:"column",background:"light-3",round:!0,align:"center",gap:"xsmall",height:{min:"5em"},width:"medium",justify:"center",pad:"small",onClick:()=>t.push("/module/"+e.id.replace("/","_")),style:{minHeight:"auto"}},s.createElement(m,null,s.createElement("div",{style:{textAlign:"center"}},e.name)),s.createElement(J,{module:e}))},ue=({module_id:e})=>{const[t]=f(["user"]),[n,a]=s.useState(null),{votes:l,setVotes:r}=s.useContext(ee),o=e.replace("_","/");s.useEffect((()=>{if(null!==n)return;const e=l.filter((e=>e[0].id==o));e.length>0?a(e[0][1]):a(0)}),[t,e,l]);return s.createElement(s.Fragment,null,null!=t&&null!=n&&s.createElement(L,{min:-5,max:5,value:n,onChange:e=>{(e=>{if(null!==e&&(0!==e||0!==l.length)&&"user"in t)setTimeout((()=>{fetch(oe.url+"api/vote/",{method:"POST",credentials:"include",headers:new Headers({Authorization:"Token "+t.user.token,"Content-Type":"application/json"}),body:JSON.stringify({score:e,module:o})}).then((e=>e.json())).then((t=>{r((n=>0!=e?[...n.filter((e=>e[0].id!==o)),[t,parseInt(e)]]:n.filter((e=>e[0].id!==o))))}))}),500)})(e.target.value),a(e.target.value)}}))},de=({module_id:e})=>{const[t,n]=s.useState([]),a=s.useContext(Z),[l]=f(["user"]);return s.useEffect((()=>{n([]),fetch(oe.url+"api/similar/"+e+"/").then((e=>e.json())).then((e=>n(e)))}),[e]),s.createElement(s.Fragment,null,a.length>0&&s.createElement(m,{direction:"column",border:"between",gap:"small"},null!=l.user&&s.createElement(ue,{module_id:e}),s.createElement(m,{gap:"small",style:{marginTop:"0.5rem"}},t.filter((t=>a[t].id.replace("/","_")!==e)).map(((e,t)=>s.createElement(ie,{key:t,module:a[e]})))))," ")},pe=()=>{let{module_id:e}=S();const[t,n]=s.useState(null);return s.useEffect((()=>{fetch(oe.url+"api/module/"+e+"/").then((e=>e.json())).then((e=>n(e)))}),[e]),s.createElement(m,{direction:"column",basis:"full"},s.createElement(d,{background:"brand",pad:"small"},null!==t?s.createElement("h3",{style:{margin:"1rem 0"}},t.name," - ",t.id):s.createElement("h3",{style:{margin:"1rem 0"}},"Loading")),s.createElement(m,{direction:"row",border:"between",gap:"small",basis:"full"},s.createElement(W,{module:t}),s.createElement(de,{module_id:e})))};const Ee=e=>{var{to:t,children:n}=e,a=o(e,["to","children"]);return s.createElement(j,r({exact:!0,to:t,className:"navbar__item",activeClassName:"navbar__item--active"},a),n)},ge=({setLayerOpen:e})=>{const[t,n]=s.useState(!1),[,a]=f(["user"]),[l,r]=s.useState({}),[o,c]=s.useState(!1);return s.createElement(b,{onChange:e=>{n(!1),r(e)},onSubmit:t=>{l.password1===l.password2&&(c(!0),fetch(oe.url+"api/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.value.username_reg,password:t.value.password1})}).then((e=>e.json())).then((n=>{"token"in n?(a("user",{username:t.value.username,token:n.token},{maxAge:604800,secure:!0}),e(!1)):console.log("This shouldn't happen")})).catch((()=>{n(!0)})).then((()=>c(!1))))}},s.createElement(w,{name:"username_reg",error:t&&"Username already exisits",required:!0},s.createElement(g,{id:"name-input-field-reg",name:"username_reg",placeholder:"Username"})),s.createElement(w,{name:"password1",required:!0},s.createElement(g,{type:"password",id:"pw-input-field-reg-1",name:"password1",placeholder:"Password"})),s.createElement(w,{name:"password2",error:l.password1!=l.password2&&"Passwords do not match",required:!0},s.createElement(g,{type:"password",id:"pw-input-field-reg-2",name:"password2",placeholder:"Repeat password"})),s.createElement(m,{direction:"row",gap:"medium",justify:"center"},s.createElement(y,{type:"submit",primary:!0,label:s.createElement(m,{direction:"row",gap:"small"},"Register ",o&&s.createElement(v,{color:"#fff"}))})))},he=({setLayerOpen:e})=>s.createElement(m,{width:"medium",gap:"small",className:"login-modal"},s.createElement(m,{background:"brand",pad:{horizontal:"medium",top:"medium"}},s.createElement(C,{background:"brand"},"Register")),s.createElement(m,{pad:"medium"},s.createElement(ge,{setLayerOpen:e}))),fe=({setLayerOpen:e})=>s.createElement(m,{direction:"column",gap:"small"},s.createElement(me,{setLayerOpen:e}),s.createElement(he,{setLayerOpen:e})),be=()=>{const[e,t]=s.useState(!1);return s.createElement(m,null,s.createElement(y,{className:"navbar__item",activeClassName:"navbar__item--active",onClick:()=>{t(!0)}},s.createElement(O,null)),s.createElement(m,{background:"light-1"}," ",e&&s.createElement(x,{onEsc:()=>t(!1),onClickOutside:()=>t(!1),position:"center",modal:!0,className:"login-modal-parent"},s.createElement(fe,{setLayerOpen:t}))))},we=({setLayerOpen:e})=>{const[,,t]=f(["user"]);return s.createElement(m,{width:"medium",gap:"small",className:"login-modal"},s.createElement(m,{background:"brand",pad:{horizontal:"medium",top:"medium"}},s.createElement(C,{background:"brand"},"Logout?")),s.createElement(m,{pad:"medium"},s.createElement(m,{direction:"row",gap:"medium",justify:"center"},s.createElement(y,{type:"submit",primary:!0,label:"Confirm",onClick:()=>{t("user"),e(!1)}}),s.createElement(y,{type:"button",label:"Cancel",onClick:()=>e(!1)}))))},ye=()=>{const[e,t]=s.useState(!1);return s.createElement(m,null,s.createElement(y,{className:"navbar__item",activeClassName:"navbar__item--active",onClick:()=>{t(!0)}},s.createElement(_,null)),s.createElement(m,{background:"light-1"},e&&s.createElement(x,{onEsc:()=>t(!1),onClickOutside:()=>t(!1),position:"center",modal:!0,className:"login-modal-parent"},s.createElement(we,{setLayerOpen:t}))))},ve=()=>{const[e]=f(["user"]);return s.createElement(M,{className:"navbar",background:"accent-1",footer:"user"in e?s.createElement(ye,null):s.createElement(be,null)},s.createElement(N,{gap:"small"},s.createElement(Ee,{to:"/"},s.createElement(F,null)),s.createElement(Ee,{to:"/modules/"},s.createElement(R,null)),"user"in e&&s.createElement(s.Fragment,null,s.createElement(Ee,{to:"/recommender/"},s.createElement(T,null)),s.createElement(Ee,{to:"/user/"},s.createElement(z,null)))))},Ce=()=>{const[e]=f(["user"]),[t,n]=s.useState([]);return s.useEffect((()=>{"user"in e&&fetch(oe.url+"api/recommend/",{credentials:"include",headers:new Headers({Authorization:"Token "+e.user.token,"Content-Type":"application/json"})}).then((e=>e.json())).then(n)}),[e]),s.createElement(s.Fragment,null,"user"in e?s.createElement(m,{direction:"column",basis:"full"},s.createElement(m,{background:"brand",pad:"small"},s.createElement(C,null,"Recommended modules for ",s.createElement("i",null,e.user.username))),s.createElement(m,{direction:"row"},s.createElement(m,{width:"large"},s.createElement(P,{gap:"small",columns:"small"},t.map(((e,t)=>s.createElement(ie,{module:e,key:t}))))),s.createElement(m,null,"Hier so Details later"))):s.createElement(m,{justify:"center",width:"full",align:"center"},"You need to log in to access this resource."))},ke=()=>{const[e]=f(["user"]),{votes:t}=s.useContext(ee);return s.createElement(s.Fragment,null,"user"in e?s.createElement(m,{direction:"column",basis:"full"},s.createElement(m,{background:"brand",pad:"small"},s.createElement(C,null,"Recommended modules for ",s.createElement("i",null,e.user.username))),s.createElement(m,{width:"full",gap:"small",direction:"column"},t.map((e=>s.createElement(m,{key:e[0].id,direction:"row"},s.createElement(m,{width:"large"},e[0].name),s.createElement(m,{width:"medium"},s.createElement(ue,{module_id:e[0].id}))))))):s.createElement(m,{justify:"center",width:"full",align:"center"},"You need to log in to access this resource."))};function xe(){const[e,t]=s.useState([]),[n]=f(["user"]),[a,l]=s.useState([]),r=s.useMemo((()=>({votes:a,setVotes:l})),[a,l]);return s.useEffect((()=>{fetch(oe.url+"api/modules/").then((e=>e.json())).then((e=>t(e)))}),[]),s.useEffect((()=>{"user"in n?fetch(oe.url+"api/votes/",{credentials:"include",headers:new Headers({Authorization:"Token "+n.user.token,"Content-Type":"application/json"})}).then((e=>e.json())).then(l):l([])}),[n]),s.createElement(A,null,s.createElement(Z.Provider,{value:e},s.createElement(ee.Provider,{value:r},s.createElement(m,{direction:"row",basis:"full"},s.createElement(U,{basename:""},s.createElement(ve,null),s.createElement(H,null,s.createElement(V,{component:ae,path:"/modules/"}),s.createElement(V,{component:pe,path:"/module/:module_id"}),s.createElement(V,{component:Ce,path:"/recommender/"}),s.createElement(V,{component:ke,path:"/user/"}),s.createElement(V,{component:ce,path:"/"})))))))}var Le={name:"horned-sungem",rounding:8,spacing:16,defaultMode:"light",global:{colors:{brand:{dark:"#642ca9",light:"#642ca9"},"accent-1":{dark:"#ff0048",light:"#ff0048"},control:"brand","active-background":"background-contrast","active-text":"text-strong","selected-background":"brand","selected-text":"text-strong","status-critical":"#ff0000","status-warning":"#f56600","status-ok":"#009934","status-unknown":"#CCCCCC","status-disabled":"#CCCCCC","graph-0":"brand","graph-1":"status-warning",focus:"brand"},focus:{shadow:{size:"1px"}}},font:{family:"Lato"},accordion:{heading:{level:"3",margin:"0.5rem 0"},hover:{heading:{color:"brand"}}}};q.render(s.createElement(s.StrictMode,null,s.createElement(I,{full:!0,theme:Le},s.createElement(xe,null))),document.getElementById("root"));
