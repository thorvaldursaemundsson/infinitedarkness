(this.webpackJsonpinfinitedarkness=this.webpackJsonpinfinitedarkness||[]).push([[5],{62:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(19),r=n(18);function a(t,e){return!e||"object"!==Object(i.a)(e)&&"function"!==typeof e?Object(r.a)(t):e}},63:function(t,e,n){"use strict";function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return i}))},65:function(t,e,n){"use strict";function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n.d(e,"a",(function(){return r}))},75:function(t,e,n){"use strict";n.r(e);var i=n(3),r=n(7),a=n(0),o=n.n(a),s=n(10),c=n(9),l=n(8),h=n(62),u=n(63),d=n(65);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}var f=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(u.a)(e).call(this,t))).mount=void 0,n.hexagonAngle=0,n.sideLength=25,n.hexHeight=0,n.hexRadius=0,n.hexRectangleHeight=0,n.hexRectangleWidth=0,n.state={outputData:":)",currentIcons:t.initialIcons,isVisible:!1,currentEdit:void 0},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){this.props.initialIcons.length!==this.state.currentIcons.length&&this.setState({currentIcons:this.props.initialIcons})}},{key:"showHexmat",value:function(){return!1===this.state.isVisible?null:o.a.createElement(v,{initialIcons:this.state.currentIcons,boardHeight:this.props.boardHeight,boardWidth:this.props.boardWidth})}},{key:"showEditor",value:function(){var t=this;return!1!==this.state.isVisible?null:o.a.createElement(o.a.Fragment,null,o.a.createElement("h5",null,"Character editor"),o.a.createElement("ul",null,this.state.currentIcons.map((function(e){return o.a.createElement("li",{onClick:function(){return t.setState({currentEdit:e})}},e.symbol)}))),void 0!==this.state.currentEdit?o.a.createElement(b,{onChange:function(e){return t.editIcon(e)},icon:this.state.currentEdit}):null)}},{key:"editIcon",value:function(t){var e=this.state.currentIcons;for(var n in e){var i=e[n];i.id===t.id&&(i.sequence=t.sequence,i.speed=t.speed,i.symbol=t.symbol)}this.setState({currentIcons:e,currentEdit:void 0})}},{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){t.setState({isVisible:!t.state.isVisible}),t.forceUpdate()}},"show"),this.showHexmat(),this.showEditor())}}]),e}(o.a.Component),p={width:"60px"},b=function(t){var e=t.icon,n=t.onChange,i=Object(a.useState)(e.symbol),c=Object(r.a)(i,2),l=c[0],h=c[1],u=Object(a.useState)(e.speed),d=Object(r.a)(u,2),f=d[0],b=d[1],v=Object(a.useState)(e.sequence),x=Object(r.a)(v,2),m=x[0],y=x[1];return o.a.createElement(o.a.Fragment,null,"Symbol: ",o.a.createElement("input",{type:"text",style:p,value:l,onChange:function(t){return h(t.target.value)}}),o.a.createElement("br",null),"Speed: ",o.a.createElement("input",{type:"text",style:p,value:f,onChange:function(t){return b(parseInt(t.target.value))}}),o.a.createElement("br",null),"Sequence: ",o.a.createElement("input",{type:"text",style:p,value:m,onChange:function(t){return y(parseInt(t.target.value))}}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return n(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{symbol:l,speed:f,sequence:m}))}},"Save"))},v=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(u.a)(e).call(this,t))).mount=void 0,n.hexagonAngle=0,n.sideLength=25,n.hexHeight=0,n.hexRadius=0,n.hexRectangleHeight=0,n.hexRectangleWidth=0,n.state={outputData:":)",currentIcons:t.initialIcons},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.initializeBoard();var e=this.mount;if(null!==e&&void 0!==e){var n,i=!1,r=0,a=0,o=0,s=0;e.addEventListener("mousemove",(function(e){var r=t.mount;if(null!==r&&void 0!==r){var a=r.getBoundingClientRect(),c=e.clientX-a.left,l=e.clientY-a.top;o=Math.floor(l/(t.hexHeight+t.sideLength));var h=(s=Math.floor((c-o%2*t.hexRadius)/t.hexRectangleWidth))*t.hexRectangleWidth+o%2*t.hexRadius,u=o*(t.hexHeight+t.sideLength),d=r.getContext("2d");if(null===d)return;if(d.clearRect(0,0,2*t.props.boardWidth*t.sideLength,2*t.props.boardHeight*t.sideLength),d.fillStyle="#000000",d.strokeStyle="#666666",d.lineWidth=1,t.drawBoard(d,t.props.boardWidth,t.props.boardHeight),o>=0&&o<t.props.boardWidth&&s>=0&&s<t.props.boardHeight&&void 0!==d&&(d.strokeStyle="#FF0000",d.lineWidth=3,t.drawHexagon(d,h,u,!1),d.strokeStyle="#666666",d.lineWidth=1),void 0!==n&&void 0!==d)for(var g=0;g<t.props.boardWidth;++g)for(var f=0;f<t.props.boardHeight;++f)t.distanceBetweenPositions(g,f,n.startX,n.startY)<=n.speed&&(d.fillStyle="#9999FF",t.drawHexagon(d,g*t.hexRectangleWidth+f%2*t.hexRadius,f*(t.sideLength+t.hexHeight),!0));t.drawIconsOnBoard(d),i=!0}})),e.addEventListener("mousedown",(function(o){if(i=!1,null!==e&&void 0!==e){var s=e.getBoundingClientRect(),c=o.clientX-s.left,l=o.clientY-s.top;a=Math.floor(l/(t.hexHeight+t.sideLength)),r=Math.floor((c-a%2*t.hexRadius)/t.hexRectangleWidth),n=t.findIconAtHex(r,a)}})),e.addEventListener("mouseup",(function(){if(void 0!==n&&!0===i){var e=t.state.currentIcons;for(var r in e){var a=e[r];if(a.id===n.id){a.startY=o,a.startX=s;break}}t.setState({currentIcons:e}),t.initializeBoard()}n=void 0,i=!1})),e.addEventListener("mouseleave",(function(){n=void 0}))}}},{key:"distanceBetweenPositions",value:function(t,e,n,i){return Math.abs(t-n)+Math.abs(e-i)}},{key:"getIconPosition",value:function(t){return{x:2*this.hexRadius*(t.startX+.25)+t.startY%2*this.hexRectangleWidth/2,y:.75*this.hexRectangleHeight*(t.startY+0)+this.hexRectangleHeight/2}}},{key:"componentDidUpdate",value:function(){this.props.initialIcons.length!==this.state.currentIcons.length&&this.setState({currentIcons:this.props.initialIcons});var t=this.mount;null!==t&&void 0!==t&&(null!==t.getContext("2d")&&this.initializeBoard())}},{key:"initializeBoard",value:function(){this.setVariables();var t=this.mount;if(null!==t&&void 0!==t){var e=t.getContext("2d");if(null!==e)return e.clearRect(0,0,2*this.props.boardWidth*this.sideLength,2*this.props.boardHeight*this.sideLength),e.fillStyle="#000000",e.strokeStyle="#666666",e.lineWidth=1,this.drawIconsOnBoard(e),this.drawBoard(e,this.props.boardWidth,this.props.boardHeight),e}}},{key:"findIconAtHex",value:function(t,e){for(var n in this.state.currentIcons){var i=this.state.currentIcons[n],r=i.startX,a=i.startY;if(t===r&&e===a)return i}}},{key:"setVariables",value:function(){this.hexagonAngle=.523598776,this.hexHeight=Math.sin(this.hexagonAngle)*this.sideLength,this.hexRadius=Math.cos(this.hexagonAngle)*this.sideLength,this.hexRectangleHeight=this.sideLength+2*this.hexHeight,this.hexRectangleWidth=2*this.hexRadius}},{key:"drawIconsOnBoard",value:function(t){for(var e in this.state.currentIcons){var n=this.state.currentIcons[e],i=this.getIconPosition(n),r=i.x,a=i.y;t.font="11px arial",t.fillStyle="black",t.fillText("".concat(n.symbol),r,a)}}},{key:"drawBoard",value:function(t,e,n){for(var i=0;i<e;++i)for(var r=0;r<n;++r)this.drawHexagon(t,i*this.hexRectangleWidth+r%2*this.hexRadius,r*(this.sideLength+this.hexHeight),!1)}},{key:"drawHexagon",value:function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";t.beginPath(),t.moveTo(e+this.hexRadius,n),t.lineTo(e+this.hexRectangleWidth,n+this.hexHeight),t.lineTo(e+this.hexRectangleWidth,n+this.hexHeight+this.sideLength),t.lineTo(e+this.hexRadius,n+this.hexRectangleHeight),t.lineTo(e,n+this.sideLength+this.hexHeight),t.lineTo(e,n+this.hexHeight),t.closePath(),""!==r&&(t.fillStyle="#CCCCCC",t.fillText(r,e+this.hexRadius/2,n+1.5*this.hexRadius)),i&&t.fill(),t.stroke()}},{key:"render",value:function(){var t=this;return o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("div",{style:{background:"white",width:"650px",height:"600px",overflow:"scroll"}},o.a.createElement("canvas",{height:this.props.boardHeight*this.sideLength*1.5,width:this.props.boardWidth*this.sideLength*1.8,onContextMenu:function(t){return t.preventDefault()},ref:function(e){return t.mount=e}}))),o.a.createElement("td",null,o.a.createElement("ul",null,this.state.currentIcons.sort((function(t,e){return e.sequence-t.sequence})).map((function(t){return o.a.createElement("li",null,t.symbol,": ",t.sequence)})))))))}}]),e}(o.a.Component),x={width:"60px"},m="qwertyuiopasdfghjklzxcvbnm",y=function(){for(var t="",e=0;e<10;e++)t+=m[Math.floor(Math.random()*m.length)];return t};e.default=function(){var t=Object(a.useState)(18),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(a.useState)(15),l=Object(r.a)(c,2),h=l[0],u=l[1],d=Object(a.useState)(""),g=Object(r.a)(d,2),p=g[0],b=g[1],v=Object(a.useState)([]),m=Object(r.a)(v,2),O=m[0],E=m[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",title:"width",style:x,value:n,onChange:function(t){return s(parseInt(t.target.value))}}),o.a.createElement("input",{type:"text",title:"height",style:x,value:h,onChange:function(t){return u(parseInt(t.target.value))}})," |",o.a.createElement("input",{type:"text",title:"add icon",style:x,value:p,onChange:function(t){return b(t.target.value)}}),o.a.createElement("button",{onClick:function(){return E([].concat(Object(i.a)(O),[{symbol:p,startX:O.length,startY:0,sequence:0,speed:0,id:y()}])),b(""),void console.log({icons:O})}},"Add"),o.a.createElement("br",null),o.a.createElement(f,{initialIcons:O,boardHeight:h,boardWidth:n}))}}}]);
//# sourceMappingURL=5.0dc47339.chunk.js.map