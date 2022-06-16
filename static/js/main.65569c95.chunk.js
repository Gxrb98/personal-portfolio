(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(14),r=c.n(s),i=c(6),j=(c(20),c(8)),a=c(0),l=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useRef)(0);return Object(n.useEffect)((function(){var e=function(){document.body.getBoundingClientRect().y>r.current?(r.current=document.body.getBoundingClientRect().y,s(!0)):(r.current=document.body.getBoundingClientRect().y,s(!1))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("header",{children:Object(a.jsxs)("ul",{className:"".concat(c&&"nav"),children:[Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/",className:"link",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/contact",className:"sendMessage",children:"Send a Message"})})]})})})},o=(c(22),c(5)),b=c(7),d=function(){return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h2",{children:"Dev/Engineer"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"I code web applications with React, and I love what I do"})]}),Object(a.jsxs)("div",{className:"logos",children:[Object(a.jsx)(o.a,{icon:b.f,style:{color:"#3c3096dc"}}),Object(a.jsx)(o.a,{icon:b.c,style:{color:"#3c3096dc"}}),Object(a.jsx)(o.a,{icon:b.a,style:{color:"#3c3096dc"}}),Object(a.jsx)(o.a,{icon:b.d,style:{color:"#3c3096dc"}})]})]})})},x=(c(28),c(13)),h=function(){return Object(a.jsxs)("div",{className:"about",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h3",{id:"about-me",children:"Hi, I am Gabriel"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"I love coding... web coding mostly, but when I'm not coding I'm excercising or playing videogames. I have more than 2 years experience as web developer with react hooks, using third party API integrations, styling components, react-router-dom."}),Object(a.jsx)("p",{children:"I'm currently living in Ciudad Guayana, Venezuela, but willing to relocate"}),Object(a.jsx)("br",{})]}),Object(a.jsx)(o.a,{icon:x.b,style:{fontSize:"3.5rem",color:"white"}}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Tecnologies I work with:"}),Object(a.jsx)("br",{}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"React / Nextjs"}),Object(a.jsx)("li",{children:"HTML5 / CC3"}),Object(a.jsx)("li",{children:"Javascript / Typescript"}),Object(a.jsx)("li",{children:"Git"}),Object(a.jsx)("li",{children:"TailwindCSS"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(o.a,{icon:x.a,style:{fontSize:"3.5rem",color:"white"}}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Languages I know:"}),Object(a.jsx)("br",{}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Spanish (My native Languge)"}),Object(a.jsx)("li",{children:"English"}),Object(a.jsx)("li",{children:"Portuguesse (Read only)"})]})]})},O=c.p+"static/media/quoteGenerator.aa10cb1c.png";c(29);var u=function(){return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"projects",children:[Object(a.jsx)("h1",{children:"My recent work"}),Object(a.jsx)("p",{id:"my-work",children:"Here are a few projects I've worked on"})]}),Object(a.jsxs)("div",{className:"projects",children:[Object(a.jsx)("h2",{children:"Anime quotes Generator"}),Object(a.jsx)("a",{href:"https://gxrb98.github.io/animequotesgenerator/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("img",{src:O,alt:"Quote Generator",className:"img"})}),Object(a.jsx)("p",{children:"It uses an API to generate a new phrase every time you hit the button"})]})]})})},m=(c(30),function(){return Object(a.jsxs)("ul",{id:"footer",children:[Object(a.jsx)("a",{href:"https://github.com/Gxrb98",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("li",{children:Object(a.jsx)(o.a,{icon:b.b,style:{color:"black",fontSize:"4rem"}})})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/garb98/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("li",{children:Object(a.jsx)(o.a,{icon:b.e,style:{color:"#0072b1",fontSize:"4rem"}})})})]})});var g=function(){return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsx)(d,{}),Object(a.jsx)(h,{}),Object(a.jsx)(u,{}),Object(a.jsx)(m,{})]})},p=(c(31),c(15)),f=function(){return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"Thanks for taking the time to reach out"})}),Object(a.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),p.a.sendForm("contact_service","contact_form",e.target,"FeauU2-plERrxk0An").then((function(){console.log("SUCCESS!")}),(function(e){console.log("FAILED...",e)})),e.target.reset()},children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:"textbox",name:"name",type:"text"}),Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{className:"textbox",name:"email",type:"email"}),Object(a.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(a.jsx)("input",{className:"textbox",name:"subject",type:"text"}),Object(a.jsx)("label",{htmlFor:"message",children:"Message"}),Object(a.jsx)("textarea",{className:"textarea",name:"message"}),Object(a.jsx)("input",{type:"submit",id:"btn-submit",value:"Submit"})]})]})})};var y=function(){return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsx)(f,{}),Object(a.jsx)(m,{})]})},v=c(2);var w=function(){return Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{exact:!0,path:"/",element:Object(a.jsx)(g,{})}),Object(a.jsx)(v.a,{exact:!0,path:"/contact",element:Object(a.jsx)(y,{})})]})};r.a.render(Object(a.jsx)(j.a,{basename:"/personal-portfolio",children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.65569c95.chunk.js.map