(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),i=(t(2),t(1));var s=function(e){var a=e.squares,t=e.id,n=e.handleClick,r=e.butnDisable;return l.a.createElement("button",{disabled:r[t],onClick:function(){return n(t)},className:"square"},a[t])};var u=function(){var e=Object(n.useState)(Array(9).fill(null)),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),u=Object(i.a)(c,2),o=u[0],b=u[1],d=Object(n.useState)(Array(9).fill(!1)),m=Object(i.a)(d,2),f=m[0],E=m[1],k=Object(n.useState)("Good Luck"),v=Object(i.a)(k,2),h=v[0],p=v[1];function C(e){var a=t.map((function(a,t){return e===t?(b(!o),D):a})),n=f.map((function(a,t){return e===t||a}));r(a),E(n);var l=function(e){for(var a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<a.length;t++){var n=Object(i.a)(a[t],3),l=n[0],r=n[1],c=n[2];if(e[l]&&e[l]===e[r]&&e[l]===e[c])return e[l]}e.includes(null)||p("Draw !");return null}(a);l&&(p("  ".concat(l,"     WON ")),E(Array(9).fill(!0)))}var D=o?"X":"O";return l.a.createElement("div",{className:"tic-tac-toe-Desktop tic-tac-toe-Mob"},l.a.createElement("div",{className:"notify"},h),l.a.createElement("div",{className:"status"},"next player is   ",D),l.a.createElement("div",{className:"board-row"},l.a.createElement(s,{squares:t,id:0,handleClick:C,butnDisable:f}),l.a.createElement(s,{squares:t,id:1,handleClick:C,butnDisable:f}),l.a.createElement(s,{squares:t,id:2,handleClick:C,butnDisable:f})),l.a.createElement("div",{className:"board-row"},l.a.createElement(s,{squares:t,id:3,handleClick:C,butnDisable:f}),l.a.createElement(s,{squares:t,id:4,handleClick:C,butnDisable:f}),l.a.createElement(s,{squares:t,id:5,handleClick:C,butnDisable:f})),l.a.createElement("div",{className:"board-row"},l.a.createElement(s,{squares:t,id:6,handleClick:C,butnDisable:f}),l.a.createElement(s,{squares:t,id:7,handleClick:C,butnDisable:f}),l.a.createElement(s,{squares:t,id:8,handleClick:C,butnDisable:f})),l.a.createElement("button",{className:"playagain",onClick:function(){r(Array(9).fill(null)),b(!0),E(Array(9).fill(!1)),p("Good Luck")}},"play again"))};c.a.render(l.a.createElement(u,null),document.getElementById("root"))},2:function(e,a,t){},5:function(e,a,t){e.exports=t(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.20a8c0f4.chunk.js.map