(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),c=a(11),i=a(3),s=a(5),u=a(6),m=a(8),h=a(7),p=a(9),d={display:"inline-block",margin:"0 0 1em",width:"100%"},f={textAlign:"center",display:"block",marginBottom:"20px",fontSize:"26px"},g={width:"100%"};var b=function(e){return o.a.createElement("div",{style:d},o.a.createElement("img",{className:"photo",style:g,id:e.id,src:e.src}),o.a.createElement("a",{style:f,href:e.download,download:!0,target:"_blank"},"\u0416\u043c\u0438 \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0447\u0430\u0442\u044c"))},E={columnCount:4},v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={photoArr:null,searchValue:"123"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.unsplash.com/photos/random?count=20&client_id=56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780",{method:"GET"}).then((function(e){return e.json()})).then((function(t){var a=[];t.forEach((function(e){a.push([e.id,e.urls.small,e.links.download])})),e.setState({photoArr:a}),console.log(t)}))}},{key:"render",value:function(){return null!=this.state.photoArr?o.a.createElement("div",{className:"gallery",style:E},this.state.photoArr.map((function(e){return o.a.createElement(b,{key:e[0],id:e[0],src:e[1],download:e[2]})}))):o.a.createElement("div",{className:"gallery"},"nothing")}}]),t}(o.a.Component);var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null))},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={imageObj:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.split("/");t=t[t.length-1],fetch("https://api.unsplash.com/photos/".concat(t,"?client_id=").concat("56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({imageObj:t})}))}},{key:"render",value:function(){return null!=this.state.imageObj?(console.log(this.state),o.a.createElement("div",{className:"photoPage"},o.a.createElement("div",{className:"photoPage__group-left"},o.a.createElement("img",{src:this.state.imageObj.urls.regular})),o.a.createElement("div",{className:"photoPage__group-right"},o.a.createElement("img",{src:this.state.imageObj.user.profile_image.medium}),o.a.createElement("h2",null,this.state.imageObj.user.name),o.a.createElement("p",null,this.state.imageObj.description),o.a.createElement("button",{className:"photoPage__group-right__download-button"},"download")))):o.a.createElement("div",null,"test")}}]),t}(o.a.Component),y=o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{exact:!0,path:"/stock-photo/",component:j}),o.a.createElement(i.a,{path:"/stock-photo/photo",component:O})));r.a.render(y,document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.67cb2298.chunk.js.map