(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),r=a.n(l),s=a(4),c=a(3),i=a(7),u=a(8),h=a(10),m=a(9),d=a(6),p=a(11),g={width:"100%"};var b=function(e){var t;return e.description&&(t=o.a.createElement("span",{className:"absolute bottom-0 left-0 bg-black inline-block w-full text-white opacity-0 p-4 text-right"},e.description)),o.a.createElement("div",{className:"inline-block text-center w-full mb-4"},o.a.createElement("div",{className:"photoWrp relative"},o.a.createElement(s.b,{to:"/stock-photo/photo/".concat(e.id)},o.a.createElement("img",{className:"photo",style:g,id:e.id,src:e.src})),t),o.a.createElement("a",{className:"inline-block bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold mr-1 mt-3 py-2 px-4 rounded text-center",href:e.userLink,download:!0,target:"_blank"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0430"),o.a.createElement("a",{className:"inline-block bg-green-500 hover:bg-green-700 text-white text-sm font-bold ml-5 mt-3 py-2 px-4 rounded text-center",href:e.download,download:!0,target:"_blank"},"\u0416\u043c\u0438 \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0447\u0430\u0442\u044c"))},f="56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780",E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={photoArr:null,searchValue:null},a.search=a.search.bind(Object(d.a)(a)),a.changeValue=a.changeValue.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"changeValue",value:function(e){this.setState({searchValue:e.target.value}),this.search()}},{key:"search",value:function(){var e=this;fetch("https://api.unsplash.com/search/photos?query="+this.state.searchValue+"&client_id="+f,{method:"GET"}).then((function(e){return e.json()})).then((function(t){var a=[];t.results.forEach((function(e){var t={};t.id=e.id,t.url=e.urls.small,t.download=e.links.download,t.description=e.description,a.push(t)})),e.setState({photoArr:a})}))}},{key:"componentDidMount",value:function(){var e=this;console.log(),this.props.searchValue?(this.setState({searchValue:this.props.searchValue}),this.search()):fetch("https://api.unsplash.com/photos/random?count=20&client_id="+f,{method:"GET"}).then((function(e){return e.json()})).then((function(t){var a=[];t.forEach((function(e){var t={};t.id=e.id,t.url=e.urls.small,t.download=e.links.download,t.description=e.description,t.userLink=e.user.links.html,a.push(t)})),e.setState({photoArr:a})}))}},{key:"render",value:function(){return null!=this.state.photoArr?o.a.createElement("div",{className:"w-full px-3"},o.a.createElement("input",{className:"shadow appearance-none border rounded w-1/2 h-12 py-2 px-3 mb-4 my-auto text-gray-700 text-2xl leading-tight focus:outline-none focus:shadow-outline",onChange:this.changeValue}),o.a.createElement("div",{className:"gallery"},this.state.photoArr.map((function(e){return o.a.createElement(b,{key:e.id,id:e.id,src:e.url,download:e.download,userLink:e.userLink,description:e.description})})))):o.a.createElement("div",{className:"gallery"},"nothing")}}]),t}(o.a.Component);var v=function(e){var t;return console.log(e.location),t=e.location.state?o.a.createElement(E,{searchValue:e.location.state}):o.a.createElement(E,null),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"p-4 text-6xl"},o.a.createElement("h1",{className:"inline-block w-3/4"},"Stock image")),t)},k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={imageObj:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.split("/");t=t[t.length-1],fetch("https://api.unsplash.com/photos/".concat(t,"?client_id=").concat("56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({imageObj:t})}))}},{key:"render",value:function(){return null!=this.state.imageObj?o.a.createElement("div",{className:"photoPage flex"},o.a.createElement("div",{className:"photoPage__group-left w-1/3"},o.a.createElement("img",{className:"w-full h-auto",src:this.state.imageObj.urls.regular})),o.a.createElement("div",{className:"photoPage__group-right w-2/3 ml-4"},o.a.createElement("img",{className:"rounded-full",src:this.state.imageObj.user.profile_image.medium}),o.a.createElement("h2",null,this.state.imageObj.user.name),o.a.createElement("div",{className:"photoPage__group-right__tags"},o.a.createElement("h2",null,"Tags:"),this.state.imageObj.tags.map((function(e){return o.a.createElement(s.b,{to:{pathname:"/stock-photo",state:{searchValue:"cats"}}},o.a.createElement("p",{className:"inline-block bg-gray-400 m-2 px-2 py-1 rounded-lg"},e.title))}))),o.a.createElement("div",{className:"photoPage__group-right__numbers border-solid border border-gray-600 rounded-lg"},o.a.createElement("span",null,"Downloads:",this.state.imageObj.downloads),o.a.createElement("span",null,"Views:",this.state.imageObj.views)),o.a.createElement("div",{className:"photoPage__group-right__description border-solid border border-gray-600 rounded-lg"},o.a.createElement("p",null,this.state.imageObj.description),o.a.createElement("p",null,this.state.imageObj.alt_description)))):o.a.createElement("div",null,"test")}}]),t}(o.a.Component),w=(a(32),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(c.a,{exact:!0,path:"/stock-photo/",component:v}),o.a.createElement(c.a,{path:"/stock-photo/photo",component:k}))));r.a.render(w,document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8b74faad.chunk.js.map