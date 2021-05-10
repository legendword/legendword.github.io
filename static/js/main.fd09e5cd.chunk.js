(this.webpackJsonpsource=this.webpackJsonpsource||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),s=a.n(o),l=(a(27),a(4)),c=a(5),i=a(7),m=a(6),u=a(8),d=a(10);function p(e){return r.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},e.href)}var h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{style:{marginTop:"20px"}},"Legendword"),r.a.createElement("div",null),r.a.createElement("br",null),r.a.createElement("h5",null,"Introduction"),r.a.createElement("p",{style:g},"Hello there! I have been doing web programming as a hobby for about five years and worked on numerous projects of my own."),r.a.createElement("p",{style:g},"As a way of contributing to the community and learning from others, I started to make some, if not all, of my projects open source. You can always have a look at them and perhaps submit an issue/pull request. This Github Pages site is created solely for the purpose of listing and introducing my repositories to you."),r.a.createElement("p",{style:g},"You can find some general information on my repositories here. For some of them, you might even find a story or the thought process behind the project."),r.a.createElement("p",{style:g},"Keep in mind that this GitHub Pages site is not always up to date. Refer to my GitHub repositories for more detail and most recent information."),r.a.createElement("hr",null),r.a.createElement("h5",null,"Links"),r.a.createElement("div",{className:"container"},r.a.createElement("dl",{className:"row"},b.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("dt",{className:"col-sm-3"},e.name),r.a.createElement("dd",{className:"col-sm-9"},r.a.createElement(p,{href:e.href})))})))))}}]),t}(n.Component),g={textIndent:"30px"},b=[{name:"GitHub",href:"https://github.com/legendword"},{name:"Website",href:"https://legendword.com"}],f=h,E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("dl",{className:"row repo-props"},y.filter((function(t){return!(null==e.props.data[t])})).map((function(t,a){return"Status"===t?r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("dt",{className:"col-sm-3"},w[t]?w[t]:t),r.a.createElement("dd",{className:"col-sm-9 status"},e.props.data[t].split(", ").map((function(e,t){return r.a.createElement("span",{className:"text-".concat(v[e]),key:t},e)})))):r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("dt",{className:"col-sm-3"},w[t]?w[t]:t),r.a.createElement("dd",{className:"col-sm-9"},e.props.data[t]))})))}}]),t}(n.Component),y=["StartDate","Version","EndDate","Status"],w={StartDate:"Date of First Commit",EndDate:"Date of Final Commit",Status:"Project Status"},v={Contemporary:"primary",Stable:"success",Deprecated:"warning",Outdated:"warning","Dev Beta":"secondary","Public Beta":"info","Open Beta":"info"},O=E,j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.d,null,this.props.data.map((function(e,t){return r.a.createElement(d.b,{path:e.routerPath?e.routerPath:"/".concat(e.name),key:t},r.a.createElement("h3",{style:{marginTop:"20px"}},e.name),r.a.createElement("p",null,r.a.createElement(p,{href:e.url})),r.a.createElement("p",null,e.desc),r.a.createElement(O,{data:e.data}))})),r.a.createElement(d.b,{path:"/intro"},r.a.createElement(f,null)),r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(d.a,{to:"/intro"})))}}]),t}(n.Component),S=a(12),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"Repositories"),r.a.createElement("div",{className:"list-group"},this.props.data.map((function(e,t){return r.a.createElement(S.b,{to:e.routerPath?e.routerPath:"/".concat(e.name),className:"list-group-item list-group-item-action",activeClassName:"active",key:t},e.name)}))))}}]),t}(n.Component),N=(a(33),a(34),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{marginTop:"30px"}},"Legendword Open Source"),r.a.createElement("p",{className:"lead"},"A comprehensive list of my open source projects."),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(S.b,{to:"/intro",className:"list-group-item list-group-item-action",activeClassName:"active"},"Introduction"),r.a.createElement("hr",null),r.a.createElement(k,{data:C})),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(j,{data:C}))))))}}]),t}(r.a.Component)),C=[{name:"blog",url:"https://github.com/legendword/blog",desc:"Open-source, elegant blogging system made with Quasar. Features all core functionalities of publishing blog posts, browsing posts, and interacting with authors.",data:{StartDate:"Feb. 24, 2021",Version:"0.2.1",Status:"Contemporary, Open Beta"}},{name:"games",url:"https://github.com/legendword/games",desc:"Legendword Games, multiplayer card games created with Quasar and SocketIO.",data:{StartDate:"Mar. 31, 2021",Version:"1.1.1",Status:"Contemporary, Open Beta"}},{name:"arcade",url:"https://github.com/legendword/arcade",desc:"Legendword Arcade is an online mini-game platform written with React. I intended to collect several popular mini-games in one place for easy access to all of them. When finished, this platform will be capable of adding others as friends and competing online.",data:{StartDate:"Nov. 23, 2019",Version:"0.2.1",Status:"Contemporary"}},{name:"legendword.github.io",url:"https://github.com/legendword/legendword.github.io",desc:"Source code for this GitHub pages site.",data:{StartDate:"Sep. 15, 2019",Version:"1.0.210510",Status:"Contemporary, Stable"}},{name:"snake-game",url:"https://github.com/legendword/snake-game",desc:"Singleplayer snake game.",data:{StartDate:"Oct. 29, 2019",Version:"1.0.191110",Status:"Contemporary, Stable"}},{name:"Better-Google-Translate",url:"https://github.com/legendword/Better-Google-Translate",desc:"A Tampermonkey script to enhance the Google Translate web experience.",data:{StartDate:"Nov. 27, 2019",Version:"0.3",Status:"Contemporary, Open Beta"}},{name:"LVocab",url:"https://github.com/legendword/LVocab",desc:"An online vocabulary learning tool that helps with memorizing new words as a language learner.",data:{StartDate:"Jan. 24, 2019",Version:"0.1.01",Status:"Open Beta"}}],D=N;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.fd09e5cd.chunk.js.map