(self.webpackChunk=self.webpackChunk||[]).push([[178],{751:e=>{e.exports=[{title:"Problem Solving and Programming",number:"CSE1001",university:"VIT University"},{title:"Problem Solving and Object Oriented Programming",number:"CSE1002",university:"VIT University"},{title:"Digital Logic and Design",number:"CSE1003",university:"VIT University"},{title:"Database Management Systems",number:"CSE2004",university:"VIT University"},{title:"Network and Communication",number:"CSE1004",university:"VIT University"},{title:"Computer Architecture and Organization",number:"CSE2001",university:"VIT University"},{title:"Theory of Computation and Compiler Design",number:"CSE2002",university:"VIT University"},{title:"Data Structures and Algorithms",number:"CSE2003",university:"VIT University"},{title:"Software Engineering",number:"CSE3001",university:"VIT University"},{title:"Internet and Web Programming",number:"CSE3002",university:"VIT University"},{title:"Java Programming",number:"CSE1007",university:"VIT University"},{title:"Operating Systems",number:"CSE2005",university:"VIT University"},{title:"Social and Information Networks",number:"CSE3021",university:"VIT University"},{title:"Large Scale Data Processing",number:"CSE3025",university:"VIT University"},{title:"Data Visualization",number:"CSE3020",university:"VIT University"},{title:"Web Mining",number:"CSE3024",university:"VIT University"},{title:"Parallel and Distributed Computing",number:"CSE4001",university:"VIT University"},{title:"Natural Language Processing",number:"CSE4022",university:"VIT University"},{title:"IoT Fundamentals",number:"ECE3501",university:"VIT University"},{title:"IoT Domain Analyst",number:"ECE3502",university:"VIT University"},{title:"Introduction to Machine Learning",number:"MOC2105",university:"VIT University"},{title:"Virtualization",number:"CSE4011",university:"VIT University"},{title:"Blockchain and Cryptocurrency Technologies",number:"CSE1006",university:"VIT University"},{title:"Capstone Project",number:"CSE1904",university:"VIT University"}]},178:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var i=n(43),r=n(475),s=n(551),a=n(579);const c=e=>{let{data:t}=e;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((e=>(0,a.jsx)(c,{data:e},e.school)))]})};o.defaultProps={data:[]};const l=o;var u=n(446),d=n.n(u),h=n(574);const m=e=>{let{data:{name:t,position:n,url:i,startDate:r,endDate:s,summary:c,highlights:o}}=e;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:i,children:t})," - ",n]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",d()(r).format("MMMM YYYY")," -"," ",s?d()(s).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,a.jsx)(h.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,a.jsx)("ul",{className:"points",children:o.map((e=>(0,a.jsx)("li",{children:e},e)))}):null]})},y=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,a.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};y.defaultProps={data:[]};const g=y,f=e=>{let{handleClick:t,active:n,label:i}=e;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:()=>t(i),children:i})},p=e=>{let{data:t,categories:n}=e;const{category:i,competency:r,title:s}=t,c={background:n.filter((e=>i.includes(e.name))).map((e=>e.color))[0]},o={...c,width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")};return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:c,children:(0,a.jsx)("span",{children:s})}),(0,a.jsx)("div",{className:"skillbar-bar",style:o}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};p.defaultProps={categories:[]};const v=p,b=e=>{let{skills:t,categories:n}=e;const r=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[s,c]=(0,i.useState)(r),o=e=>{const t=Object.keys(s).reduce(((t,n)=>({...t,[n]:e===n&&!s[n]})),{});t.All=!Object.keys(s).some((e=>t[e])),c(t)};return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"Overview of my skills."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:Object.keys(s).map((e=>(0,a.jsx)(f,{label:e,active:s,handleClick:o},e)))}),(0,a.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(s).reduce(((e,t)=>s[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,a.jsx)(v,{categories:n,data:e},e.title)))})()})]})};b.defaultProps={skills:[],categories:[]};const S=b,x=e=>{let{data:t,last:n}=e;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("a",{href:t.link,children:[(0,a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};x.defaultProps={last:!1};const j=x,$=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,a.jsx)(j,{data:t,last:n===e.length-1},t.title))),D=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Selected Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:$(t)})]})};D.defaultProps={data:[]};const M=D,C=()=>(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(r.N_,{to:"/contact",children:(0,a.jsx)("h3",{children:"References are available upon request"})})})]});var k=n(751),E=n.n(k);const w=[{school:"Vellore Institute of Technology",degree:"B.Tech Computer Science and Engineering",link:"https://chennai.vit.ac.in/",year:2023},{school:"SBOA School and Junior College",degree:"Grade I - Grade XII",link:"https://sboajc.org/",year:"2008 - 2019"}],N=[{name:"Infiquity Auto Technologies Pvt Ltd",position:"Software Engineer",url:"https://www.infiquity.com/",startDate:"2023-12-05",summary:"Infiquity is an established IT services company which is powered by a team of seasoned professionals and driven by its proven track record in providing consultants with experience in some of the most advanced technologies.",highlights:["Engineered the backend infrastructure for an Electric Vehicle Charger Management System (EV-CMS) using Node.js, Express, MongoDB, PostgreSQL, and SQLite3, ensuring robust and scalable solutions.","Authored and optimized server-side code for multiple TCP servers, effectively integrating IoT devices such as Chargers, Telematics, and TestBench systems, and enabling seamless data storage across various database platforms","Spearheaded research and development efforts for the implementation of the OCPP 1.6J (Open Charge Point Protocol), leading to the successful deployment of server-side solutions for managing EV chargers.","Implemented and optimized Jenkins pipelines across multiple projects to automate the Continuous Integration/Continuous Deployment (CI/CD) process, significantly improving deployment efficiency from GitHub repositories.","Led the creation and configuration of Google Cloud Platform (GCP) instances, enabling the deployment of CI/CD pipelines and backend services within a microservices architecture, thereby ensuring flexibility, scalability, and efficient resource management."]},{name:"KONE Elevator",position:"Software Engineering Intern",url:"https://www.kone.in/",startDate:"2022-05-01",endDate:"2022-07-01",summary:"At KONE, our mission is to improve the flow of urban life. We understand People Flow in and between buildings, making people\u2019s journeys safe, convenient and reliable. In 2020, KONE had annual sales of EUR 9.9 billion, and at the end of the year over 60,000 employees.",highlights:["Interned at KONE Elevator during Summer 2022, gaining practical experience with AWS.","Optimized code by tweaking multiple Python programs within AWS Lambda, improving efficiency.","Efficiently hosted websites and pages using EC2 and ECS, streamlining deployment with AWS CDK.","Built a website from scratch using Bootstrap v4.0."]}],T=[{title:"Javascript",competency:5,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"Google Cloud Platform",competency:4,category:["Web Development","Tools"]},{title:"MongoDB",competency:4,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:5,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:5,category:["Web Development","Javascript"]},{title:"Kubernetes",competency:3,category:["Tools","Data Engineering"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:4,category:["Languages","Python","ML Engineering"]},{title:"C++",competency:4,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Pandas",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:3,category:["Data Engineering","ML Engineering","Python"]}].map((e=>({...e,category:e.category.sort()}))),I=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],O=[...new Set(T.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:I[t]}))),L={Education:()=>(0,a.jsx)(l,{data:w}),Experience:()=>(0,a.jsx)(g,{data:N}),Skills:()=>(0,a.jsx)(S,{skills:T,categories:O}),Courses:()=>(0,a.jsx)(M,{data:E()}),References:()=>(0,a.jsx)(C,{})},P=()=>(0,a.jsx)(s.A,{title:"Resume",description:"Ajitesh Saranath's Resume.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{children:(0,a.jsx)(r.N_,{to:"resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:Object.keys(L).map((e=>(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(L).map((e=>{let[t,n]=e;return(0,a.jsx)(n,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,l),s=n-r<0,a=t.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:h,h:a,m:s,s:r,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=f;var x="$isDayjsObject",j=function(e){return e instanceof C||!(!e||!e[x])},$=function e(t,n,i){var r;if(!t)return b;if("string"==typeof t){var s=t.toLowerCase();S[s]&&(r=s),n&&(S[s]=n,r=s);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var c=t.name;S[c]=t,r=c}return!i&&r&&(b=r),r||!i&&b},D=function(e,t){if(j(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},M=v;M.l=$,M.i=j,M.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(y);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return M},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return D(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<D(e)},p.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,i=!!M.u(t)||t,u=M.p(e),m=function(e,t){var r=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(c)},y=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,f=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return i?m(1,0):m(31,11);case l:return i?m(1,f):m(0,f+1);case o:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return m(i?p-S:p+(6-S),f);case c:case h:return y(v+"Hours",0);case a:return y(v+"Minutes",1);case s:return y(v+"Seconds",2);case r:return y(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,o=M.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[s]=u+"Minutes",n[r]=u+"Seconds",n[i]=u+"Milliseconds",n)[o],y=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var g=this.clone().set(h,1);g.$d[m](y),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](y);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[M.p(e)]()},p.add=function(i,u){var h,m=this;i=Number(i);var y=M.p(u),g=function(e){var t=D(m);return M.w(t.date(t.date()+Math.round(e*i)),m)};if(y===l)return this.set(l,this.$M+i);if(y===d)return this.set(d,this.$y+i);if(y===c)return g(1);if(y===o)return g(7);var f=(h={},h[s]=t,h[a]=n,h[r]=e,h)[y]||1,p=this.$d.getTime()+i*f;return M.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},h=function(e){return M.s(s%12||12,e,"0")},y=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(g,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return c+1;case"MM":return M.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return y(s,a,!0);case"A":return y(s,a,!1);case"m":return String(a);case"mm":return M.s(a,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,h,m){var y,g=this,f=M.p(h),p=D(i),v=(p.utcOffset()-this.utcOffset())*t,b=this-p,S=function(){return M.m(g,p)};switch(f){case d:y=S()/12;break;case l:y=S();break;case u:y=S()/3;break;case o:y=(b-v)/6048e5;break;case c:y=(b-v)/864e5;break;case a:y=b/n;break;case s:y=b/t;break;case r:y=b/e;break;default:y=b}return m?y:M.a(y)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return S[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},p.clone=function(){return M.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),k=C.prototype;return D.prototype=k,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,C,D),e.$i=!0),D},D.locale=$,D.isDayjs=j,D.unix=function(e){return D(1e3*e)},D.en=S[b],D.Ls=S,D.p={},D}()}}]);
//# sourceMappingURL=178.1e11c530.chunk.js.map