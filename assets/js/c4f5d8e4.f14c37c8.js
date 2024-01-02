"use strict";(self.webpackChunkportaldoc=self.webpackChunkportaldoc||[]).push([[195,137],{3261:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(512),n=a(7294),r=a(6550),o=(a(4318),a(9960)),i=a(2263),c=a(6040),l=a(2503);const d={featureCard:"featureCard_QAQr",featureLink:"featureLink_pdvy",featureSection:"featureSection_UexJ",featureIcon:"featureIcon_GA8l",featureHeader:"featureHeader_Epcy",featureDescription:"featureDescription_sP1D",features:"features_t9lD",featureBoxContainer:"featureBoxContainer_gRJP"};var u=a(5893);const h=[{title:"Picking Tool",description:(0,u.jsxs)(u.Fragment,{children:["This tool simplifies wave analysis, offering a user-friendly interface for accurate wave identification.",(0,u.jsx)("br",{}),"Click to access the detailed documentation."]})}];function m(e){let{title:t,description:a}=e;return(0,u.jsx)(o.Z,{to:"/docs/intro",className:(0,s.Z)("about__card",d.featureCard),children:(0,u.jsxs)("div",{className:(0,s.Z)("about__section",d.featureSection),children:[(0,u.jsx)(l.Z,{as:"h3",className:d.featureHeader,children:t}),(0,u.jsx)("p",{className:d.featureDescription,children:a})]})})}function f(){return(0,u.jsx)("section",{className:d.features,children:(0,u.jsx)("div",{className:(0,s.Z)("container",d.featureBoxContainer),children:(0,u.jsx)("div",{className:"row",children:h.map(((e,t)=>(0,u.jsx)(m,{...e},t)))})})})}const p={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function g(){const{siteConfig:e}=(0,i.Z)();return(0,u.jsx)("header",{className:(0,s.Z)("hero hero--primary",p.heroBanner),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(l.Z,{as:"h1",className:"hero__title",children:e.title}),(0,u.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,u.jsx)("div",{className:p.buttons,children:(0,u.jsx)("p",{children:"It is the central repository for all essential information related to our company. Here, we bring together a comprehensive collection of documents and resources, offering quick and seamless access to the insights you need. Dive into a well-organized repository that reflects our commitment to clarity, accessibility, and excellence in documentation."})})]})})}function x(){const e=(0,r.k6)();(0,n.useEffect)((()=>{localStorage.getItem("isLoggedIn")||e.push("/documentation/login")}),[e]);const{siteConfig:t}=(0,i.Z)();return(0,u.jsxs)(c.Z,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />",children:[(0,u.jsx)(g,{}),(0,u.jsx)("main",{children:(0,u.jsx)(f,{})})]})}},4318:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(7294);const n="navbar_s_rm",r="logo_aGjV",o="loginContainer_jyGX",i="loginForm_uJa8",c="inputField_o_rY",l="submitButton_FioS",d="errorMessage_i1dJ",u="titleContainer_zwFl",h="title_atvC",m="subtitle_IWrY";var f=a(5893);const p=()=>{const[e,t]=(0,s.useState)(""),[a,p]=(0,s.useState)(""),[g,x]=(0,s.useState)("");return(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("nav",{className:n,children:(0,f.jsx)("img",{src:"/documentation/img/BoreholeLogo.png",alt:"Borehole Logo",className:r})}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("h1",{className:h,children:"Documentation Access"}),(0,f.jsx)("p",{className:m,children:"Please log in to view the documentations"})]}),(0,f.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e.toLowerCase()==="borehole seismic".toLowerCase()&&"Borehole_admin"===a?(localStorage.setItem("isLoggedIn","true"),window.location.href="/documentation"):x("Invalid credentials, please try again.")},className:i,children:[(0,f.jsx)("input",{type:"text",placeholder:"Username",value:e,onChange:e=>t(e.target.value),className:c}),(0,f.jsx)("input",{type:"password",placeholder:"Password",value:a,onChange:e=>p(e.target.value),className:c}),(0,f.jsx)("button",{type:"submit",className:l,children:"Login"}),g&&(0,f.jsx)("p",{className:d,children:g})]})]})}}}]);