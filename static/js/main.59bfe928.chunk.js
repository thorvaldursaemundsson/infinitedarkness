(this.webpackJsonpinfinitedarkness=this.webpackJsonpinfinitedarkness||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"d":"combat","a":"agility","b":"death, murder, mayhem","c":0}')},function(e){e.exports=JSON.parse('{"d":"pilot","a":"perception","b":"driving car, boat, airplane, spaceship, horse","c":0}')},function(e){e.exports=JSON.parse('{"d":"spells","a":"intelligence","b":"magic missile basically","c":0}')},function(e){e.exports=JSON.parse('{"d":"investigation","a":"intelligence","b":"finding out the butler did it","c":0}')},function(e){e.exports=JSON.parse('{"d":"intimidation","a":"willpower","b":"making people feel small and you big","c":0}')},function(e){e.exports=JSON.parse('{"d":"larceny","a":"agility","b":"stealing, breaking in","c":0}')},function(e){e.exports=JSON.parse('{"d":"stealth","a":"agility","b":"hiding, moving silently","c":0}')},function(e){e.exports=JSON.parse('{"d":"survival","a":"intelligence","b":"not dying of exposure","c":0}')},function(e){e.exports=JSON.parse('{"d":"science","a":"intelligence","b":"knowing what actually happened to Epstein","c":0}')},function(e){e.exports=JSON.parse('{"d":"survival","a":"intelligence","b":"saying \'I\'m in\' after you hack into a system in only 10 seconds","c":0}')},function(e){e.exports=JSON.parse('{"d":"medicine","a":"intelligence","b":"giving people insulin, knowing insulin is not crack","c":0}')},function(e){e.exports=JSON.parse('{"d":"surgery","a":"agility","b":"literally carving out someone\'s heart WITHOUT them dying and then giving them a new one","c":0}')},function(e){e.exports=JSON.parse('{"d":"empathy","a":"perception","b":"understanding how people feel, and exploiting those feelings","c":0}')},function(e){e.exports=JSON.parse('{"d":"subtrefuge","a":"intelligence","b":"going on the internet and telling lies","c":0}')},function(e){e.exports=JSON.parse('{"d":"athletics","a":"endurance","b":"running, swimming, climbing","c":0}')},function(e){e.exports=JSON.parse('{"d":"acrobatics","a":"agility","b":"jumping around, dodging","c":0}')},function(e){e.exports=JSON.parse('{"d":"search","a":"perception","b":"finding hidden stuff","c":0}')},function(e){e.exports=JSON.parse('{"d":"slight of hand","a":"agility","b":"stealing things directly out of people\'s pockets, also performing card tricks","c":0}')},function(e){e.exports=JSON.parse('{"d":"persuation","a":"intelligence","b":"making people see your point of view","c":0}')},,,,,,,,,,,,function(e,t,n){e.exports=n(57)},,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),l=n.n(r),c=(n(51),n(10)),o=n(9),s=n(73),u=n(72),g=function(e){var t=e.children;return i.a.createElement("label",{style:{display:"inline-block",minWidth:"140px"}},t)},p=function(){return e=1,t=10,Math.round(Math.random()*(t-e)+e);var e,t},m=function(e){var t=e.label,n=e.value,r=e.onChange,l=e.max,o=e.min,m=e.modifier,d=e.enableDice,h=e.children,b=Object(a.useState)([0,0]),v=Object(c.a)(b,2),f=v[0],w=v[1],y=Object(a.useState)(!1),k=Object(c.a)(y,2),E=k[0],O=k[1],x=void 0!==l?l:10,S=void 0!==o?o:1,C=void 0!==m?n+m:n;return d=void 0!==d&&d,i.a.createElement(s.a,null,i.a.createElement(g,null,t,":")," ",i.a.createElement(g,null,n," ",void 0!==m?" | ".concat(m," | ").concat(C):null),i.a.createElement(u.a,{onClick:function(){return r(x<=n?n:n+1)}},"+"),i.a.createElement(u.a,{onClick:function(){return r(S>=n?n:n-1)}},"-"),d?i.a.createElement(u.a,{onClick:function(){return w([p(),p()])}},"&"):null,0!==f[0]?"(".concat(C,") + d10(").concat(f[0],") + d10(").concat(f[1],") = ").concat(C+f[0]+f[1]):null,void 0!==h?!0===E?i.a.createElement(s.a,null,i.a.createElement(u.a,{onClick:function(){return O(!1)}},"X"),h," "):i.a.createElement(u.a,{onClick:function(){return O(!0)}},"?"):null)},d=n(71),h=n(43),b=n(13),v=n(16),f=n(17),w=n(18),y=n(19),k=n(20),E=n(21),O=n(22),x=n(23),S=n(24),C=n(25),j=n(26),J=n(27),N=n(28),M=n(29),P=n(30),D=n(31),A=n(32),B=n(33),V=n(34),I=function(){return[{name:v.d,attribute:v.a,level:v.c,description:v.b},{name:f.d,attribute:f.a,level:f.c,description:f.b},{name:w.d,attribute:w.a,level:w.c,description:w.b},{name:y.d,attribute:y.a,level:y.c,description:y.b},{name:V.d,attribute:V.a,level:V.c,description:V.b},{name:k.d,attribute:k.a,level:k.c,description:k.b},{name:E.d,attribute:E.a,level:E.c,description:E.b},{name:O.d,attribute:O.a,level:O.c,description:O.b},{name:x.d,attribute:x.a,level:x.c,description:x.b},{name:S.d,attribute:S.a,level:S.c,description:S.b},{name:C.d,attribute:C.a,level:C.c,description:C.b},{name:j.d,attribute:j.a,level:j.c,description:j.b},{name:J.d,attribute:J.a,level:J.c,description:J.b},{name:N.d,attribute:N.a,level:N.c,description:N.b},{name:M.d,attribute:M.a,level:M.c,description:M.b},{name:P.d,attribute:P.a,level:P.c,description:P.b},{name:D.d,attribute:D.a,level:D.c,description:D.b},{name:A.d,attribute:A.a,level:A.c,description:A.b},{name:B.d,attribute:B.a,level:B.c,description:B.b}].sort((function(e,t){return e.attribute<t.attribute?-1:1}))},H=function(e){for(var t=0,n=0;n<=e;n++)t+=n;return t},U=function(){function e(t){Object(h.a)(this,e),this.age=void 0,this.strength=void 0,this.agility=void 0,this.endurance=void 0,this.perception=void 0,this.willpower=void 0,this.intelligence=void 0,this.skills=void 0,this.techniques=void 0,this.strength=t&&t.strength||5,this.agility=t&&t.agility||5,this.endurance=t&&t.endurance||5,this.perception=t&&t.perception||5,this.willpower=t&&t.willpower||5,this.intelligence=t&&t.intelligence||5,this.skills=t&&t.skills||I(),this.techniques=[],this.age=t&&t.age||18}return Object(b.a)(e,[{key:"getCalculatedPointsUsed",value:function(){return 4*H(this.strength)+4*H(this.agility)+4*H(this.endurance)+4*H(this.perception)+4*H(this.willpower)+4*H(this.intelligence)+this.skills.map((function(e){return H(e.level)})).reduce((function(e,t){return e+t}),0)}},{key:"getStartingPointsAvailable",value:function(){var e=200;return e+=20*Math.min(this.age,18),this.age>18&&(e+=15*Math.min(this.age-18,8)),this.age>26&&(e+=10*Math.min(this.age-26,14)),this.age>40&&(e+=5*Math.min(this.age-40,30)),e}},{key:"getMaximumPointsAvailable",value:function(){return 2*this.getStartingPointsAvailable()}},{key:"getExperienceMultiplier",value:function(){return this.age<16?3:this.age<20?2.5:this.age<24?2:this.age<28?1.75:this.age<32?1.5:this.age<36?1.25:1}},{key:"getHitpoints",value:function(){return this.strength+2*this.endurance}},{key:"getMana",value:function(){return this.endurance+2*this.willpower}},{key:"getDamageBonusSmall",value:function(){return Math.floor(this.strength/4)}},{key:"getDamageBonusMedium",value:function(){return Math.floor(this.strength/3)}},{key:"getDamageBonusLarge",value:function(){return Math.floor(this.strength/2)}}]),e}();function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){var t=Object(a.useReducer)(L,e.initialCharacter),n=Object(c.a)(t,2),r=n[0],l=n[1];return i.a.createElement(s.a,{style:{textAlign:"left"}},i.a.createElement(u.a,{onClick:function(){return e.characterCallback(r)}},"exit"),i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{item:!0,xs:12,sm:6},"Character points used ",r.getCalculatedPointsUsed()," / ",r.getStartingPointsAvailable()," (",r.getMaximumPointsAvailable(),")",i.a.createElement(m,{label:"strength",value:r.strength,onChange:function(e){return l({action:"strength",value:e})}},"Raw muscle strength"),i.a.createElement(m,{label:"agility",value:r.agility,onChange:function(e){return l({action:"agility",value:e})}},"Steady hands, reflexes"),i.a.createElement(m,{label:"endurance",value:r.endurance,onChange:function(e){return l({action:"endurance",value:e})}},"Ability to last long"),i.a.createElement(m,{label:"perception",value:r.perception,onChange:function(e){return l({action:"perception",value:e})}},"eyesight, hearing, and how much you smell"),i.a.createElement(m,{label:"willpower",value:r.willpower,onChange:function(e){return l({action:"willpower",value:e})}},'ability to say "no" when it\'s sooo good'),i.a.createElement(m,{label:"intelligence",value:r.intelligence,onChange:function(e){return l({action:"intelligence",value:e})}},"big brainy boy")),i.a.createElement(d.a,{item:!0,xs:12,sm:6},i.a.createElement(m,{label:"age",max:80,min:15,value:r.age,onChange:function(e){return l({action:"age",value:e})}},"Your age determines your starting, maximum experience, as well as experience multiplier"),i.a.createElement(s.a,null,"Experience multiplier: ",r.getExperienceMultiplier()),i.a.createElement(s.a,null,"Hit points: ",r.getHitpoints()),i.a.createElement(s.a,null,"mana: ",r.getMana()),i.a.createElement(s.a,null,"damage bonus small: ",r.getDamageBonusSmall()),i.a.createElement(s.a,null,"damage bonus medium: ",r.getDamageBonusMedium()),i.a.createElement(s.a,null,"damage bonus large: ",r.getDamageBonusLarge())),i.a.createElement(d.a,{item:!0,xs:12,sm:6},r.skills.map((function(e){var t=0;switch(e.attribute){case"strength":t=r.strength;break;case"agility":t=r.agility;break;case"endurance":t=r.endurance;break;case"perception":t=r.perception;break;case"willpower":t=r.willpower;break;case"intelligence":t=r.intelligence}return i.a.createElement(m,{enableDice:!0,modifier:t,max:30,min:0,label:e.name+" "+e.attribute.substring(0,3).toUpperCase(),value:e.level,onChange:function(t){return l({action:"skill",name:e.name,value:t})}},e.description)})))))},L=function(e,t){switch(t.action){case"strength":return new U(X({},e,{strength:t.value}));case"agility":return new U(X({},e,{agility:t.value}));case"endurance":return new U(X({},e,{endurance:t.value}));case"willpower":return new U(X({},e,{willpower:t.value}));case"perception":return new U(X({},e,{perception:t.value}));case"intelligence":return new U(X({},e,{intelligence:t.value}));case"age":return new U(X({},e,{age:t.value}));case"skill":var n=new U(X({},e));return n.skills[e.skills.findIndex((function(e){return e.name===t.name}))].level=t.value,n}return e},R=(n(56),n(74)),T=function(e){var t=e.shouldView,n=e.children;return t?i.a.createElement("div",null,n):null},Y=function(e){return i.a.createElement("div",null,e.options.map((function(t){return i.a.createElement(u.a,{onClick:function(){return e.callback(t)}},t)})))},$=function(){var e=Object(a.useState)("main"),t=Object(c.a)(e,2),n=t[0],r=t[1],l=new U;return i.a.createElement("div",{className:"App"},i.a.createElement(T,{shouldView:"main"===n},i.a.createElement(R.a,null,"Infinite Darkness"),i.a.createElement(Y,{callback:function(e){return r(e)},options:["character","player manual","game master","world & lore"]})),i.a.createElement(T,{shouldView:"character"===n},i.a.createElement(q,{characterCallback:function(e){l=e,r("main")},initialCharacter:l})),i.a.createElement(T,{shouldView:"player manual"===n},"player manual, work in progress...",i.a.createElement(u.a,{onClick:function(){return r("main")}},"X")),i.a.createElement(T,{shouldView:"game master"===n},"game master, work in progress...",i.a.createElement(u.a,{onClick:function(){return r("main")}},"X")),i.a.createElement(T,{shouldView:"world & lore"===n},"world & lore, work in progress...",i.a.createElement(u.a,{onClick:function(){return r("main")}},"X")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[46,1,2]]]);
//# sourceMappingURL=main.59bfe928.chunk.js.map