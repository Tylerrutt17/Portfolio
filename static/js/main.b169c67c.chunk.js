(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"a":"Tyler","c":"","b":"Rutt","f":"Web Developer | iOS Developer | Full Stack Developer","j":[{"id":0,"image":"fa-github","url":"https://github.com/tylerrutt17","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/tyler.rutt.9","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/tyler_rutt/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/tyler-rutt-56347072/","style":"socialicons"},{"id":4,"image":"fa-twitter","url":"https://twitter.com/tylerrutt17/","style":"socialicons"}],"e":"About Me","q":true,"k":"https://www.instagram.com/","m":"tyler_rutt","l":"/?__a=1","d":"I\'m a Computer Engineer / Full Stack Developer from Atlanta GA who is passionate about the tech world. Completed and graduated from Digital Crafts Full Stack Program (4 Months).","n":"Recent Projects","g":"https://api.github.com/users/","i":"tylerrutt17","h":"/repos?sort=updated&direction=desc","o":4,"r":true,"p":false}')},14:function(e,a,t){e.exports=t.p+"static/media/tyler_rutt_resume.9e7d200f.pdf"},36:function(e,a,t){e.exports=t(67)},41:function(e,a,t){},45:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(31),i=t.n(l),c=(t(41),t(11)),s=t(8),o=(t(42),t(43),t(45),t(1)),m=t(35),u=t(3),d=t(16),p=t.n(d),g=function(){var e=Object(r.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],l=a[1],i=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",l(a)):"leave"===e.event?(a[e.icon.id]="socialicons",l(a)):void 0};return n.a.createElement("div",null,n.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},n.a.createElement("div",{id:"stars"}),n.a.createElement("div",{className:"container container-fluid text-center "},n.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),n.a.createElement(p.a,{className:"lead"}," ",o.f),n.a.createElement("br",null),n.a.createElement("h3",null,"CONTACT ME"),n.a.createElement(p.a,{className:"lead"},"Tylerrutt17@gmail.com"),n.a.createElement(p.a,{className:"lead"},"678-879-2627"),n.a.createElement("div",{className:"p-5"},o.j.map((function(e){return n.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},n.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return i({icon:e,event:"enter"})},onMouseOut:function(){return i({icon:e,event:"leave"})}}))}))),n.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},b=t(10),f=t.n(b),h=t(14),E=t.n(h),v=function(){var e=Object(r.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(r.useState)(o.q),c=Object(u.a)(i,2),s=c[0],m=c[1],d=Object(r.useState)(E.a),p=Object(u.a)(d,1)[0];Object(r.useEffect)((function(){s&&g()}),[s]);var g=function(e){f.a.get(o.k+o.m+o.l).then((function(e){return l(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return n.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},n.a.createElement("div",{className:"container container-fluid p-5"},n.a.createElement("div",{className:"row"},s&&n.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},n.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),n.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},n.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),n.a.createElement("p",{className:"lead text-center"},o.d),p&&n.a.createElement("p",{className:"lead text-center"},n.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))),n.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},n.a.createElement("h1",{className:"display-4 mb-5 text-center"},"Skills"),n.a.createElement("p",{className:"lead text-center"},"JavaScript, Python, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, jQuery, AWS, Bootstrap, React JS, Swift, and Debugging.")))))},N=function(e){var a=e.value,t=Object(r.useState)([]),l=Object(u.a)(t,2),i=l[0],c=l[1],s=Object(r.useCallback)((function(e){f.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(r.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in i)o.push(d),m+=i[d];return n.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return n.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(i[e]/m*1e3)/10," %")})))},y=function(e){var a=e.value,t=Object(r.useState)("0 mints"),l=Object(u.a)(t,2),i=l[0],c=l[1],s=Object(r.useCallback)((function(e){var t=new Date(a.pushed_at),r=(new Date).getTime()-t.getTime(),n=Math.trunc(r/1e3/60/60);if(n<24)return c("".concat(n.toString()," hours ago"));var l=t.getDate(),i=t.getMonth(),s=t.getFullYear();return c("on ".concat(l," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(s))}),[a.pushed_at]);Object(r.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},o," "),n.a.createElement("p",{className:"card-text"},m," "),n.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},n.a.createElement("i",{className:"fab fa-github"})," Clone Project"),n.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},n.a.createElement("i",{className:"fab fa-github"})," Repo"),n.a.createElement("hr",null),n.a.createElement(N,{value:g}),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",{className:"text-dark card-link mr-4"},n.a.createElement("i",{className:"fab fa-github"})," Stars"," ",n.a.createElement("span",{className:"badge badge-dark"},p)),n.a.createElement("small",{className:"text-muted"},"Updated ",i)))))},j=function(){var e=Object(r.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],i=Object(r.useCallback)((function(e){f.a.get(o.g+o.i+o.h).then((function(e){return l(e.data.slice(0,o.o))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(r.useEffect)((function(){i()}),[i]),n.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&n.a.createElement("div",{className:"container container-fluid p-5"},n.a.createElement("h1",{className:"display-4 pb-5"},o.n),n.a.createElement("div",{className:"row"},t.map((function(e){return n.a.createElement(y,{key:e.id,id:e.id,value:e})})))))},k=function(){var e=Object(r.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return n.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},n.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/tylerrutt17","aria-label":"My GitHub"},"Tyler Rutt"))},w=function(e){var a=Object(r.useState)(!0),t=Object(u.a)(a,2),l=t[0],i=t[1];return Object(r.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==l&&i(e)}))}),[l]),n.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(l?"bg-transparent":"bg-gradient"," ")},n.a.createElement("a",{className:"navbar-brand",href:"/Portfolio/#home"},"<".concat(o.a," />")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},n.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.p&&n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link lead",to:"/Portfolio/blog"},"Blog")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link lead",href:"/Portfolio/#projects"},"Projects")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link lead",href:E.a,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("b",null,"Resume"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link lead",href:"/Portfolio/#aboutme"},n.a.createElement("b",null,"About"))))))},q=t(34),O=function e(a){var t=this,l=a.title,i=a.image,c=a.description;Object(q.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(n.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(n.a.createElement(r.Fragment,{key:t.list.length},n.a.createElement("h1",{className:""},e),n.a.createElement("hr",null))),t},this.getBlog=function(){return n.a.createElement("div",{className:"container-lg"},t.list)},this.title=l,this.image=i,this.description=c},x=[],S=new O({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),P=new O({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");x.push(P),x.push(S);var _=x,M=function(e){return n.a.createElement("div",{className:"container-lg mt-5 bg-blue"},n.a.createElement("h1",{className:"text-center"},"Blogs"),_.map((function(e,a){return n.a.createElement(C,{key:a,title:e.title,description:e.description,index:a})})))},C=function(e){var a=e.index,t=e.title,r=(e.image,e.description);return n.a.createElement("div",{className:"m-5"},n.a.createElement("div",{className:""},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4 col-lg-12"}),n.a.createElement("div",{className:"col-8 col-lg-12"},n.a.createElement("div",{className:""},n.a.createElement("h1",{className:""},t),n.a.createElement("p",{className:"lead"},r),n.a.createElement(c.b,{to:"".concat("/Portfolio","blog/").concat(a)},"Read more..."," ")))),n.a.createElement("hr",null)))},D=function(e){var a=e.match.params.id,t=_[a];return n.a.createElement("div",{className:"container-lg mt-5"},t&&n.a.createElement("div",null,n.a.createElement("h1",{className:"display-2 text-center"},t.title),n.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&n.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},A=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(g,null),n.a.createElement(v,null),n.a.createElement(j,null))},L=function(){return n.a.createElement(c.a,{basename:"/Portfolio/"},o.r&&n.a.createElement(w,null),n.a.createElement(s.a,{path:"/",exact:!0,component:A}),o.p&&n.a.createElement(s.a,{path:"/blog",exact:!0,component:M}),o.p&&n.a.createElement(s.a,{path:"/blog/:id",component:D}),n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.b169c67c.chunk.js.map