(this.webpackJsonpinfinitedarkness=this.webpackJsonpinfinitedarkness||[]).push([[9],{99:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r(0),c=r.n(a),l=r(102),u=r(6),o=r(26),i=function(e){return 0!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"Press Next to start the wizard"),c.a.createElement("p",null,"This wizard will ask you a series of questions which will progressively build your character from birth to current state, you can press toggle to view your character at any point"),c.a.createElement(l.a,{variant:"outlined",key:"wizard_step0_next",onClick:function(){return e.callback(1,e.character)}},"Next"))},s=r(10),b=r(98),p=r(97),m=function(e){var t=e.values,r=e.value,l=e.onChange,u=Object(a.useState)(!1),o=Object(n.a)(u,2),i=o[0],s=o[1],m=Object(a.useState)(""),f=Object(n.a)(m,2),O=f[0],h=f[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{title:O,value:r,onChange:function(e){return l(e.target.value)},onFocus:function(){return s(!0)},onKeyUp:function(e){return function(e){switch(h(e.key),e.key.toUpperCase()){case"ENTER":case"ESCAPE":return void s(!1);default:return void s(!0)}}(e)}}),i&&c.a.createElement(p.a,{style:{position:"absolute",background:"white",zIndex:999}},t.map((function(e){return function(e,t){var r=e.toLowerCase(),n=t.toLowerCase();return r===n||(!(!r.startsWith(n)&&!n.startsWith(r))||(!(!r.endsWith(n)&&!n.endsWith(r))||!(!r.match(n)&&!n.match(r))))}(e,r)?c.a.createElement(p.a,{style:{background:"white",cursor:"pointer",margin:"6px",padding:"4px"},onClick:function(){l(e),s(!1)}},e):null}))))};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.children,r=e.style;return c.a.createElement("label",{style:O({display:"inline-block",minWidth:"140px"},r)},t)};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=function(e){var t=Object(a.useState)(e.n),r=Object(n.a)(t,2),u=r[0],o=r[1],i=Object(a.useState)(0),s=Object(n.a)(i,2),b=s[0],p=s[1];return c.a.createElement("div",null,c.a.createElement(h,null,e.title),": ",c.a.createElement(h,null,u),b<3?c.a.createElement(l.a,{variant:"contained",size:"small",onClick:function(){return function(){var t=e.rollDice();o(t),p(b+1),e.callback(t)}()}},"Reroll"):null,b," / 3")},j=function(e){return e.condition?c.a.createElement(c.a.Fragment,null,e.children):null},v=function(e){var t=Object(a.useState)(""),r=Object(n.a)(t,2),o=r[0],i=r[1],p=Object(a.useState)(""),f=Object(n.a)(p,2),O=f[0],h=f[1],v=Object(a.useState)(""),k=Object(n.a)(v,2),g=k[0],E=k[1],w=Object(a.useState)(1),P=Object(n.a)(w,2),C=P[0],S=P[1],D=Object(a.useState)(-1),N=Object(n.a)(D,2),x=N[0],_=N[1],z=Object(a.useState)(-1),A=Object(n.a)(z,2),W=A[0],M=A[1],F=Object(a.useState)(-1),B=Object(n.a)(F,2),I=B[0],J=B[1],L=Object(a.useState)(-1),R=Object(n.a)(L,2),T=R[0],q=R[1],G=Object(a.useState)(-1),U=Object(n.a)(G,2),K=U[0],V=U[1],H=Object(a.useState)(-1),Q=Object(n.a)(H,2),X=Q[0],Y=Q[1],Z=Object(a.useState)(10),$=Object(n.a)(Z,2),ee=$[0],te=$[1];if(1!==e.currentNumber)return null;var re="merlion"===o.toLowerCase()?["linon","caion","vekon"]:["male","female"],ne=function(){switch(ee){case 10:return function(){return Math.floor(10*Math.random())+1};case 8:return function(){return Math.floor(8*Math.random())+2};default:return function(){return Math.floor(6*Math.random())+3}}};return c.a.createElement("div",null,c.a.createElement(j,{condition:1===C},c.a.createElement("h3",null,"Lets get some basic information"),c.a.createElement("div",null,c.a.createElement("b",null,"What is your character's name?")," ",c.a.createElement(b.a,{onChange:function(e){return E(e.target.value)},value:g},g)),c.a.createElement("div",null,c.a.createElement("b",null,"What is your character's species?")," ",c.a.createElement(m,{value:o,onChange:function(e){return i(e)},values:["human","merlion","shambra"]})," "),c.a.createElement("div",null,c.a.createElement("b",null,"What is your character's gender?")," ",c.a.createElement(m,{values:re,value:O,onChange:function(e){return h(e)}}))),c.a.createElement(j,{condition:2===C},c.a.createElement("h3",null,"Basic stats"),c.a.createElement(l.a,{variant:"contained",size:"small",onClick:function(){return te(10)}},"1d10 ",10===ee?"(x)":null),c.a.createElement(l.a,{variant:"contained",size:"small",onClick:function(){return te(8)}},"1d8+1 ",8===ee?"(x)":null),c.a.createElement(l.a,{variant:"contained",size:"small",onClick:function(){return te(6)}},"1d6+2 ",6===ee?"(x)":null),c.a.createElement(d,{title:"Strength",rollDice:ne(),n:X,callback:function(e){return Y(e)}}),c.a.createElement(d,{title:"Agility",rollDice:ne(),n:x,callback:function(e){return _(e)}}),c.a.createElement(d,{title:"Endurance",rollDice:ne(),n:W,callback:function(e){return M(e)}}),c.a.createElement(d,{title:"Perception",rollDice:ne(),n:I,callback:function(e){return J(e)}}),c.a.createElement(d,{title:"Intelligence",rollDice:ne(),n:K,callback:function(e){return q(e)}}),c.a.createElement(d,{title:"Willpower",rollDice:ne(),n:T,callback:function(e){return V(e)}})),c.a.createElement(l.a,{variant:"outlined",onClick:function(){return S(C+1)}},"Next"),c.a.createElement("hr",null),c.a.createElement(l.a,{variant:"outlined",key:"wizard_step1_next",onClick:function(){return e.callback(2,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character,{strength:X,agility:x,endurance:W,willpower:T,perception:I,intelligence:K,name:g,species:o,gender:O})))}},"Next"))},k=function e(t){var r=t.tree,u=t.dispatchCallback,o=t.parentCallback,i=t.hideButton,s=Object(a.useState)(!1),b=Object(n.a)(s,2),p=b[0],m=b[1],f=Object(a.useState)(!1),O=Object(n.a)(f,2),h=O[0],y=O[1];return p||!1!==i?c.a.createElement(c.a.Fragment,null,i&&r.key+"->",r.value.map((function(t){return c.a.createElement(e,{hideButton:h,parentCallback:function(){return y(!0)},tree:t,dispatchCallback:u})}))):c.a.createElement(l.a,{variant:"outlined",onClick:function(){u(r.dispatch),m(!0),o()}},r.key)},g=r(28),E=[{key:"Coalition of sol",dispatch:{action:"background",value:0,name:"Coalition of sol"},value:[{key:"Earth",dispatch:{action:"background",value:0,name:", Earth"},value:[{key:"Euroasia",value:[],dispatch:{action:"background",value:0,name:", Euroasia"}},{key:"North America",value:[],dispatch:{action:"background",value:0,name:", North America"}},{key:"South America",value:[],dispatch:{action:"background",value:0,name:", North America"}},{key:"Africa",value:[],dispatch:{action:"background",value:0,name:", Africa"}},{key:"Greenland",value:[],dispatch:{action:"background",value:0,name:", Greenland"}},{key:"Australia",value:[],dispatch:{action:"background",value:0,name:", Australia"}},{key:"Antarctica",value:[],dispatch:{action:"background",value:0,name:"Antarctica"}}]},{key:"Mars",value:[],dispatch:{action:"background",value:0,name:", Mars"}},{key:"Ceres",value:[],dispatch:{action:"background",value:0,name:", Ceres"}},{key:"Jupiter moon colony",value:[],dispatch:{action:"background",value:0,name:", Jupiter moons"}},{key:"Saturn moon coloy",value:[],dispatch:{action:"background",value:0,name:", Saturn moons"}},{key:"Outer planets station or spaceborn",value:[],dispatch:{action:"background",value:0,name:", Voidborn"}}]},{key:"Centauri Imperium",value:[],dispatch:{action:"background",value:0,name:"Centauri Imperium"}},{key:"Fronteer World",value:[],dispatch:{action:"background",value:0,name:"Fronteer world"}}],w=function(e){var t=e.character,r=e.currentNumber,u=e.callback,o=Object(a.useReducer)(g.a,t),i=Object(n.a)(o,2),s=i[0],b=i[1];if(2!==r)return c.a.createElement(c.a.Fragment,null);var p={key:"Background",value:E,dispatch:{action:"background",value:0,name:""}};return c.a.createElement("div",null,c.a.createElement("h3",null,"where was your character born or hatched?"),c.a.createElement(k,{hideButton:!1,parentCallback:function(){},tree:p,dispatchCallback:function(e){return b(e)}}),c.a.createElement("hr",null),c.a.createElement(l.a,{variant:"outlined",key:"wizard_step2_next",onClick:function(){return u(3,s)}},"Next"))};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var C=function(e){return 3!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"what kind of family did your character have?"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(l.a,{key:"wizard_step3_next",onClick:function(){return e.callback(4,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character,{age:4})))}},"Next"))},S=r(3),D=r(22);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x=function(e){var t=Object(a.useState)([]),r=Object(n.a)(t,2),o=r[0],i=r[1];return 4!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"what is your characters strengths and weaknesses"),Object(D.a)().map((function(e){return c.a.createElement(l.a,{onClick:function(){return i([].concat(Object(S.a)(o),[e]))}},e.name)})),c.a.createElement("br",null),o.map((function(e){return c.a.createElement("p",null,e.name)})),c.a.createElement("br",null),c.a.createElement(l.a,{key:"wizard_step4_next",onClick:function(){return e.callback(5,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character,{traits:o})))}},"Next"))};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var z=function(e){return 5!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"what kind of personality does your character have?"),c.a.createElement(l.a,{key:"wizard_step5_next",onClick:function(){return e.callback(6,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character)))}},"Next"))};function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var W=function(e){return 6!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"what interests and hobbies does your character have?"),c.a.createElement(l.a,{key:"wizard_step6_next",onClick:function(){return e.callback(7,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character)))}},"Next"))};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var F=function(e){return 7!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"what education does your character have?"),c.a.createElement(l.a,{key:"wizard_step7_next",onClick:function(){return e.callback(8,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character)))}},"Next"))};function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var I=function(e){return 8!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"how does your character make a living?"),c.a.createElement(l.a,{key:"wizard_step8_next",onClick:function(){return e.callback(9,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character)))}},"Next"))};function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var L=function(e){return 9!==e.currentNumber?null:c.a.createElement("div",null,c.a.createElement("h3",null,"repeat step 8 until finished"),c.a.createElement(l.a,{key:"wizard_step9_next",onClick:function(){return e.callback(10,new u.a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(r,!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.character)))}},"Next"))},R=r(23);t.default=function(){var e=Object(a.useState)(0),t=Object(n.a)(e,2),r=t[0],s=t[1],b=Object(a.useState)(new u.a({name:"",species:"",gender:"",age:1,strength:1,agility:1,endurance:1,intelligence:1,perception:1,willpower:1,skills:Object(R.a)()})),p=Object(n.a)(b,2),m=p[0],f=p[1],O=Object(a.useState)(!1),h=Object(n.a)(O,2),y=h[0],d=h[1],j=function(e,t){s(e),f(t),d(!1)};return c.a.createElement("div",null,c.a.createElement("h2",null,"Character Creator Wizard"),c.a.createElement("p",null,"Answering these questions will produce a template of a character with a set of abilities and matching backstory that makes some kind of sense.",c.a.createElement("br",null),"But you are expected to modify and correct it."),c.a.createElement("hr",null),c.a.createElement(i,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(v,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(w,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(C,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(x,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(z,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(W,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(F,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(I,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement(L,{character:m,currentNumber:r,callback:function(e,t){return j(e,t)}}),c.a.createElement("hr",null),c.a.createElement(l.a,{key:"toggle_sheet",onClick:function(){return d(!y)}},"Toggle character sheet"),!0===y?c.a.createElement(o.a,{initialCharacter:m,characterCallback:function(e){return f(e)}}):null)}}}]);
//# sourceMappingURL=9.0ab53ec9.chunk.js.map