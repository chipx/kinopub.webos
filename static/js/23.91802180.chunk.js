(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[23],{520:function(e,n,t){"use strict";t.d(n,"b",(function(){return w})),t.d(n,"a",(function(){return x}));var c=t(6),r=t(32),u=t(20),i=t(0),o=t(529),a=t.n(o),l=t(21),b=t(47),s=t(38),j=function(e,n,t){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},r=n.onEnterViewport,u=n.onLeaveViewport,o=Object(i.useState)(),a=Object(b.a)(o,2),l=a[1],j=Object(i.useRef)(null),d=Object(i.useRef)(!1),O=Object(i.useRef)(!1),f=Object(i.useRef)(0),v=Object(i.useRef)(0),h=Object(i.useCallback)((function(){if(e.current&&j.current){var n=Object(s.findDOMNode)(e.current);n&&j.current.observe(n)}}),[e,j]),p=Object(i.useCallback)((function(){if(e.current&&j.current){var n=Object(s.findDOMNode)(e.current);n&&(j.current.unobserve(n),j.current.disconnect(),j.current=null)}}),[e,j]),x=Object(i.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,i=n.intersectionRatio,o="undefined"!==typeof t?t:i>0;if(!O.current&&o)return O.current=!0,null===r||void 0===r||r(),f.current+=1,d.current=o,void l(o);O.current&&!o&&(O.current=!1,null===u||void 0===u||u(),c.disconnectOnLeave&&j.current&&j.current.disconnect(),v.current+=1,d.current=o,l(o))}),[j,c.disconnectOnLeave,r,u]),w=Object(i.useCallback)((function(){j.current||(j.current=new IntersectionObserver(x,t))}),[j,t,x]);return Object(i.useEffect)((function(){return w(),h(),function(){p()}}),[w,h,p]),{inViewport:d.current,enterCount:f.current,leaveCount:v.current}},d=t(729);var O,f=function(e){var n=Object(d.a)();return Object(i.useMemo)((function(){return"".concat(e,"-").concat(n)}),[e,n])},v=t(1),h=["children","onScrollToEnd"],p=l.b.div(O||(O=Object(u.a)(["\n  height: 5rem;\n"]))),x=Object(i.createContext)({}),w=function(e){var n=e.children,t=e.onScrollToEnd,u=Object(r.a)(e,h),o=Object(i.useRef)(null),l=f("scrollable"),b=Object(i.useMemo)((function(){return{id:l}}),[l]);return j(o,{onEnterViewport:t}),Object(v.jsxs)(a.a,Object(c.a)(Object(c.a)({id:l,direction:"vertical",verticalScrollbar:"hidden",horizontalScrollbar:"hidden"},u),{},{children:[Object(v.jsx)(x.Provider,{value:b,children:n}),Object(v.jsx)(p,{ref:o})]}))}},522:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var c=t(6),r=t(0),u=t(530),i=t.n(u),o=t(520),a=t(1),l=function(e){var n=Object(r.useContext)(o.a).id;return Object(a.jsx)(i.a,Object(c.a)({once:!0,offset:100,scrollContainer:n&&"#".concat(n)},e))};var b=l},523:function(e,n,t){"use strict";var c=t(54),r=t(0),u=t(550),i=t(142);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,o=Object(r.useMemo)((function(){return new i.c}),[]),a=Object(u.a)([e].concat(Object(c.a)(n)),(function(){return o[e].apply(o,Object(c.a)(n))}),t);return a}},550:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var c=t(555),r=t(2),u=t(524);function i(e,n,t){var i=Object(r.l)(e,n,t);return Object(u.a)(i,c.a)}},727:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var c,r,u=t(0),i=t(54),o=t(102),a=t.n(o),l=t(20),b=t(517),s=t(528),j=t.n(s),d=t(21),O=t(522),f=t(5),v=t(1),h=Object(d.b)(O.a)(c||(c=Object(l.a)(["\n  display: inline-flex;\n  position: relative;\n  height: 10rem !important;\n  width: 20%;\n"]))),p=Object(d.b)(j.a)(r||(r=Object(l.a)(["\n  width: 100%;\n"]))),x=function(e){var n=e.channel,t=Object(b.e)(),c=Object(u.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&t.push(Object(f.b)(f.a.Channel,{channelId:n.id}),{channel:n})}),[n,t]);return Object(v.jsx)(h,{height:"10rem",children:Object(v.jsx)(p,{source:null===n||void 0===n?void 0:n.logos.s,caption:null===n||void 0===n?void 0:n.title,onClick:c})})},w=t(520),g=function(e){var n=e.channels,t=e.loading;return Object(v.jsxs)(w.b,{children:[a()(n,(function(e){return Object(v.jsx)(x,{channel:e},e.id)})),t&&a()(Object(i.a)(new Array(20)),(function(e,n){return Object(v.jsx)(x,{},n)}))]})},C=t(523),k=function(){var e=Object(C.a)("channels"),n=e.data,t=e.isLoading;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(g,{channels:null===n||void 0===n?void 0:n.channels,loading:t})})}}}]);
//# sourceMappingURL=23.91802180.chunk.js.map