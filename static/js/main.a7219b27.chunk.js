(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=n(1),l=n(2),i=n(4),u=n(3),p=n(5),h={display:"inline-block",margin:"0 0 1em",width:"100%"},m=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("img",{className:"photo",style:h,src:this.props.src})}}]),e}(r.a.Component),f={columnCount:4},d=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={photoArr:null},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.unsplash.com/photos/random?count=10&client_id=56889379e12b179fea9f6dc3d84f38d73a11ae82478f8355e1950a9045575780",{method:"GET"}).then((function(t){return t.json()})).then((function(e){var n=[];e.forEach((function(t){n.push([t.id,t.urls.small]),console.log(t)})),t.setState({photoArr:n})}))}},{key:"render",value:function(){return null!=this.state.photoArr?r.a.createElement("div",{className:"gallery",style:f},this.state.photoArr.map((function(t){return r.a.createElement(m,{key:t[0],src:t[1]})}))):r.a.createElement("div",{className:"gallery"},"nothing")}}]),e}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};o.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.a7219b27.chunk.js.map