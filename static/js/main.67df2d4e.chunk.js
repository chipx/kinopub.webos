(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[6],{112:function(e,t,n){"use strict";var r=n(52),i=n(54),c=n(0),a=n(518),o=n(142);t.a=function(e){var t,n=Object(c.useMemo)((function(){return new o.c}),[]),s=Object(a.a)([n,e],(function(t){return n[e].apply(n,Object(i.a)(t))}));return Object.assign({},s,(t={},Object(r.a)(t,e,s.mutate),Object(r.a)(t,"".concat(e,"Async"),s.mutateAsync),t))}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r,i=n(6),c=n(32),a=n(20),o=n(48),s=n.n(o),u=n(21),l=(n(505),n(1)),f=["name","className"],v={notifications_active:Object(l.jsx)(l.Fragment,{children:"\ue7f7"}),new_releases:Object(l.jsx)(l.Fragment,{children:"\ue031"}),library_music:Object(l.jsx)(l.Fragment,{children:"\ue030"}),live_tv:Object(l.jsx)(l.Fragment,{children:"\ue639"}),play_arrow:Object(l.jsx)(l.Fragment,{children:"\ue037"}),play_circle_outline:Object(l.jsx)(l.Fragment,{children:"\ue039"}),sports_soccer:Object(l.jsx)(l.Fragment,{children:"\uea2f"})},h=u.b.i.attrs((function(e){var t=e.name,n=e.className,r=Object(c.a)(e,f);return Object(i.a)(Object(i.a)({},r),{},{className:s()("material-icons",n),children:v[t]||t})}))(r||(r=Object(a.a)([""])))},142:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(43),i=n(44),c=n(86),a=n(85),o=n(24),s=n(6),u=n(13),l=n.n(u),f=n(23),v=n(27),h=n.n(v);var d,p,b=function(e){return JSON.stringify(e,(function(e,t){if(null!==t&&""!==t)return t}))},m=function(e){return encodeURIComponent((t=e)!==Object(t)?e:b(e));var t},k=function(e){return Object.keys(e||{}).filter((function(t){return""!==(null===e||void 0===e?void 0:e[t])&&null!==(null===e||void 0===e?void 0:e[t])&&void 0!==(null===e||void 0===e?void 0:e[t])})).map((function(t){return h()(null===e||void 0===e?void 0:e[t])?function(e,t){return t.map((function(t,n){return"".concat(m("".concat(e,"[").concat(n,"]")),"=").concat(m(t))})).join("&")}(t,null===e||void 0===e?void 0:e[t]):"".concat(t,"=").concat(m(null===e||void 0===e?void 0:e[t]))})).join("&")},j=function(){function e(t){Object(r.a)(this,e),this.baseUrl=void 0,this.baseUrl=t}return Object(i.a)(e,[{key:"request",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n,r,i){var c,a,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=this.getAccessToken(),a={Accept:"application/json","Content-Type":"application/json"},c&&(a.Authorization="Bearer ".concat(c)),e.prev=3,e.next=6,fetch("".concat(this.baseUrl).concat(n,"?").concat(k(r)),{method:t,headers:a,body:b(i)});case 6:return 401===(o=e.sent).status&&this.clearTokens(),e.next=10,o.json();case 10:return s=e.sent,e.abrupt("return",s);case 14:return e.prev=14,e.t0=e.catch(3),e.abrupt("return",{error:e.t0.toString()});case 17:case"end":return e.stop()}}),e,this,[[3,14]])})));return function(t,n,r,i){return e.apply(this,arguments)}}()},{key:"get",value:function(e,t){return this.request("GET",e,t)}},{key:"post",value:function(e,t,n){return this.request("POST",e,n,t)}},{key:"getAccessToken",value:function(){throw new Error("not implemented")}},{key:"getRefreshToken",value:function(){throw new Error("not implemented")}},{key:"saveTokens",value:function(e){e.access_token,e.refresh_token,e.expires_in;throw new Error("not implemented")}},{key:"clearTokens",value:function(){throw new Error("not implemented")}}]),e}();!function(e){e[e.True=1]="True",e[e.False=0]="False"}(d||(d={})),function(e){e[e.NoWatched=-1]="NoWatched",e[e.Watching=0]="Watching",e[e.Watched=1]="Watched"}(p||(p={}));var y=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_BASE_URL||"https://api.service-kp.com",O=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_ID||"xbmc",g=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KINOPUB_API_BASE_URL:"https://api.service-kp.com",REACT_APP_KINOPUB_API_CLIENT_ID:"xbmc",REACT_APP_KINOPUB_API_CLIENT_SECRET:"cgg3gtifu46urtfp2zp1nqtba0k2ezxh"}).KINOPUB_API_CLIENT_SECRET||"cgg3gtifu46urtfp2zp1nqtba0k2ezxh",_=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.call(this,"xbmc","cgg3gtifu46urtfp2zp1nqtba0k2ezxh","https://api.service-kp.com")}return Object(i.a)(n,[{key:"isLogged",value:function(){return o.a.getItem("is_logged")}},{key:"getAccessToken",value:function(){return o.a.getItem("access_token")}},{key:"getRefreshToken",value:function(){return o.a.getItem("refresh_token")}},{key:"saveTokens",value:function(e){var t=e.access_token,n=e.refresh_token,r=e.expires_in;o.a.setItem("is_logged",!0,2592e3),o.a.setItem("access_token",t,r),o.a.setItem("refresh_token",n,2592e3)}},{key:"clearTokens",value:function(){["is_logged","access_token","refresh_token"].forEach(o.a.removeItem)}}]),n}(function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return Object(r.a)(this,n),(e=t.call(this,a)).clientId=void 0,e.clientSecret=void 0,e.accessTokenCheckIntervaId=void 0,e.clientId=i,e.clientSecret=c,e}return Object(i.a)(n,[{key:"clearTimers",value:function(){clearInterval(this.accessTokenCheckIntervaId),this.accessTokenCheckIntervaId=null}},{key:"processTokensReponse",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.clearTokens();case 2:e.t0=t.error,e.next="authorization_pending"===e.t0?5:void 0===e.t0?6:12;break;case 5:return e.abrupt("break",14);case 6:return this.clearTimers(),e.next=9,this.saveTokens(t);case 9:return this.deviceNotify(n),null===r||void 0===r||r(),e.abrupt("return");case 12:throw this.clearTimers(),t.error;case 14:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"requestTokens",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_token",client_id:this.clientId,client_secret:this.clientSecret,code:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshTokens",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/token",null,{grant_type:"refresh_token",client_id:this.clientId,client_secret:this.clientSecret,refresh_token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestDeviceCode",value:function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/oauth2/device",null,{grant_type:"device_code",client_id:this.clientId,client_secret:this.clientSecret});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deviceAuthorization",value:function(){var e=Object(f.a)(l.a.mark((function e(t,n){var r,i,c,a,o,s,u,v=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=this.getRefreshToken())){e.next=9;break}return e.next=4,this.refreshTokens(r);case 4:return i=e.sent,e.next=7,this.processTokensReponse(i,t);case 7:e.next=19;break;case 9:return e.next=11,this.requestDeviceCode();case 11:return c=e.sent,a=c.interval,o=c.code,s=c.user_code,u=c.verification_uri,null===n||void 0===n||n(s,u),e.next=19,new Promise((function(e,n){v.clearTimers(),v.accessTokenCheckIntervaId=setInterval(Object(f.a)(l.a.mark((function r(){var i;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.requestTokens(o);case 2:return i=r.sent,r.prev=3,r.next=6,v.processTokensReponse(i,t,e);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(3),n(r.t0);case 11:case"end":return r.stop()}}),r,null,[[3,8]])}))),1e3*(a||10))}));case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deactivate",value:function(){this.deviceUnlink(),this.clearTokens(),this.clearTimers()}},{key:"user",value:function(){return this.get("/v1/user")}},{key:"serverLocations",value:function(){return this.get("/v1/references/server-location")}},{key:"streamingTypes",value:function(){return this.get("/v1/references/streaming-type")}},{key:"voiceoverTypes",value:function(){return this.get("/v1/references/voiceover-type")}},{key:"voiceoverAuthors",value:function(){return this.get("/v1/references/voiceover-author")}},{key:"videoQualities",value:function(){return this.get("/v1/references/video-quality")}},{key:"devices",value:function(){return this.get("/v1/device")}},{key:"deviceInfo",value:function(){return this.get("/v1/device/info")}},{key:"deviceInfoById",value:function(e){return this.get("/v1/device/".concat(e))}},{key:"deviceUnlink",value:function(){return this.post("/v1/device/unlink")}},{key:"deviceRemoveById",value:function(e){return this.post("/v1/device/".concat(e,"/remove"))}},{key:"deviceNotify",value:function(e){return this.post("/v1/device/notify",e)}},{key:"deviceSettings",value:function(e){return this.get("/v1/device/".concat(e,"/settings"))}},{key:"saveDeviceSettings",value:function(e,t){return this.post("/v1/device/".concat(e,"/settings"),t)}},{key:"types",value:function(){return this.get("/v1/types")}},{key:"genders",value:function(){return this.get("/v1/genres")}},{key:"countries",value:function(){return this.get("/v1/countries")}},{key:"items",value:function(e,t,n){return this.get("/v1/items",Object(s.a)(Object(s.a)({},e),{},{page:t,perpage:n}))}},{key:"itemsSearch",value:function(e,t,n){return this.get("/v1/items/search",Object(s.a)(Object(s.a)({},e),{},{page:t,perpage:n}))}},{key:"itemSmiliar",value:function(e){return this.get("/v1/items/similar",{id:e})}},{key:"itemMedia",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.True;return this.get("/v1/items/".concat(e),{nolinks:t})}},{key:"itemMediaLinks",value:function(e){return this.get("/v1/items/media-links",{mid:e})}},{key:"itemMediaFileLink",value:function(e,t){return this.get("/v1/items/media-video-link",{file:e,type:t})}},{key:"itemVote",value:function(e,t){return this.get("/v1/items/vote",{id:e,like:t})}},{key:"itemTrailer",value:function(e,t){return this.get("/v1/items/trailer",{id:e,sid:t})}},{key:"itemsFresh",value:function(e,t,n){return this.get("/v1/items/fresh",{type:e,page:t,perpage:n})}},{key:"itemsHot",value:function(e,t,n){return this.get("/v1/items/hot",{type:e,page:t,perpage:n})}},{key:"itemsPopular",value:function(e,t,n){return this.get("/v1/items/popular",{type:e,page:t,perpage:n})}},{key:"channels",value:function(){return this.get("/v1/tv")}},{key:"bookmarks",value:function(){return this.get("/v1/bookmarks")}},{key:"bookmarkItems",value:function(e,t,n){return this.get("/v1/bookmarks/".concat(e),{page:t,perpage:n})}},{key:"itemBookmarks",value:function(e){return this.get("/v1/bookmarks/get-item-folders",{item:e})}},{key:"bookmarkCreate",value:function(e){return this.post("/v1/bookmarks/create",{title:e})}},{key:"bookmarkRemove",value:function(e){return this.post("/v1/bookmarks/remove-folder",{folder:e})}},{key:"bookmarkAddItem",value:function(e,t){return this.post("/v1/bookmarks/add",{item:e,folder:t})}},{key:"bookmarkRemoveItem",value:function(e,t){return this.post("/v1/bookmarks/remove-item",{item:e,folder:t})}},{key:"bookmarkToggleItem",value:function(e,t){return this.post("/v1/bookmarks/toggle-item",{item:e,folder:t})}},{key:"watchingItem",value:function(e,t,n){return this.get("/v1/watching",{id:e,video:t,season:n})}},{key:"watchingMovies",value:function(){return this.get("/v1/watching/movies")}},{key:"watchingSerials",value:function(e){return this.get("/v1/watching/serials",{subscribed:e})}},{key:"watchingMarkTime",value:function(e,t,n,r){return this.get("/v1/watching/marktime",{id:e,time:t,video:n,season:r})}},{key:"watchingToggle",value:function(e,t,n){return this.get("/v1/watching/toggle",{id:e,video:t,season:n})}},{key:"watchingToggleWatchlist",value:function(e){return this.get("/v1/watching/togglewatchlist",{id:e})}},{key:"collections",value:function(e,t,n,r){return this.get("/v1/collections",{title:e,sort:t,page:n,perpage:r})}},{key:"collectionItems",value:function(e){return this.get("/v1/collections/view",{id:e})}},{key:"history",value:function(e,t){return this.get("/v1/history",{page:e,perpage:t})}},{key:"historyClearMedia",value:function(e){return this.post("/v1/history/clear-for-media",null,{id:e})}},{key:"historyClearSeason",value:function(e){return this.post("/v1/history/clear-for-season",null,{id:e})}},{key:"historyClearItem",value:function(e){return this.post("/v1/history/clear-for-item",null,{id:e})}}]),n}(j))},146:function(e,t,n){"use strict";var r=n(0),i=n(155);t.a=function(e){Object(r.useEffect)((function(){return Object(i.c)(e)}),[e])}},155:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return h}));var r,i,c=n(54),a=n(13),o=n.n(a),s=n(226),u=n(23);function l(e){return e.keyCode===r.Back||"Backspace"===e.key}function f(e){return e.keyCode===r.Play}function v(e){return"ArrowUp"===e.code}function h(e){return i||(i=[],window.addEventListener("keydown",function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l(t)){e.next=21;break}n=Object(s.a)(i),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=13;break}return c=r.value,e.next=8,c();case 8:if(!1!==e.sent){e.next=11;break}return e.abrupt("break",13);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),n.e(e.t0);case 18:return e.prev=18,n.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(t){return e.apply(this,arguments)}}())),i=[e].concat(Object(c.a)(i)),function(){i=i.filter((function(t){return t!==e}))}}!function(e){e[e.Play=415]="Play",e[e.Back=461]="Back"}(r||(r={}))},163:function(e,t,n){"use strict";var r=n(47),i=n(0),c=n(24);t.a=function(e){var t=Object(i.useState)(c.a.getItem(e)),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(i.useCallback)((function(t,n){c.a.setItem(e,t,n)}),[e]);return Object(i.useEffect)((function(){var t=function(){o(c.a.getItem(e))},n=c.a.subscribe(t);return t(),n}),[e]),[a,s]}},169:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=169},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(6),i=n(204),c=n.n(i),a=n(1),o=function(e){return Object(a.jsx)(c.a,Object(r.a)(Object(r.a)({},e),{},{centered:!0}))}},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r,i,c=n(6),a=n(32),o=n(20),s=n(0),u=n(517),l=n(162),f=n.n(l),v=n(21),h=n(121),d=n(1),p=["href","state","children","icon","iconOnly","onClick"],b=Object(v.b)(f.a)(r||(r=Object(o.a)(["\n  color: inherit;\n  text-decoration: none;\n"]))),m=v.b.div(i||(i=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n\n  "," {\n    margin-right: ",";\n  }\n"])),h.a,(function(e){return!e.iconOnly&&"0.5rem"})),k=function(e){var t=e.href,n=e.state,r=e.children,i=e.icon,o=e.iconOnly,l=e.onClick,f=Object(a.a)(e,p),v=Object(u.e)(),k=Object(s.useCallback)((function(){v.push(t,n),null===l||void 0===l||l()}),[t,n,l,v]);return Object(d.jsx)(b,Object(c.a)(Object(c.a)({},f),{},{onClick:k,children:Object(d.jsxs)(m,{iconOnly:o,children:[i&&Object(d.jsx)(h.a,{name:i}),!o&&r]})}))}},24:function(e,t,n){"use strict";var r=n(54),i=n(43),c=n(44),a=n(52),o=n(6);function s(e,t,n,r){var i=JSON.parse(window.localStorage.getItem(e)||"{}")||{};window.localStorage.setItem(e,JSON.stringify(Object(o.a)(Object(o.a)({},i),{},Object(a.a)({},t,"undefined"!==typeof n?{value:n,expire:r?Date.now()+1e3*r:void 0}:void 0))))}var u=function(){function e(t){var n=this;Object(i.a)(this,e),this.prefix=void 0,this.listeners=void 0,this.subscribe=function(e){return n.listeners=[].concat(Object(r.a)(n.listeners),[e]),function(){n.listeners=n.listeners.filter((function(t){return t!==e}))}},this.getItem=function(e){return function(e,t){var n=(JSON.parse(window.localStorage.getItem(e)||"{}")||{})[t]||{},r=n.value,i=n.expire;return i&&Date.now()>i?null:r}(n.prefix,e)},this.setItem=function(e,t,r){var i=s(n.prefix,e,t,r);return n.emit(),i},this.removeItem=function(e){!function(e,t){s(e,t)}(n.prefix,e),n.emit()},this.prefix=t,this.listeners=[]}return Object(c.a)(e,[{key:"emit",value:function(){var e=this;requestAnimationFrame((function(){e.listeners.forEach((function(e){return e()}))}))}}]),e}();t.a=new u("kinopub")},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(517),i={Index:"/",Home:"/home",Search:"/search",Watching:"/watching",Category:"/category/:categoryId",Channels:"/channels",Channel:"/channels/:channelId",Bookmarks:"/bookmarks",Bookmark:"/bookmarks/:bookmarkId",Collections:"/collections",Collection:"/collections/:collectionId",History:"/history",Item:"/item/:itemId",Video:"/video/:videoId",Trailer:"/trailer/:trailerId",Pair:"/pair",Speed:"/speed",Settings:"/settings"};function c(e,t,n){var i=n?"?".concat(new URLSearchParams(n)):"";return Object(r.d)(e,t)+i}},505:function(e,t,n){},514:function(e){e.exports=JSON.parse('{"name":"kinopub.webos","version":"1.0.9","description":"Kinopub WebOS","author":"Alexandr Dascal <alexandr.dascal@gmail.com>","repository":"https://github.com/adascal/kinopub.webos","main":"src/index.tsx","license":"MIT","scripts":{"start":"craco start","build":"craco build","package":"node ./scripts/package.js","test":"craco test","lint":"concurrently \\"yarn run eslint\\"","lint:fix":"concurrently \\"yarn run eslint:fix\\"","eslint":"eslint \'src/**/*.ts\' \'src/**/*.tsx\'","eslint:fix":"yarn run eslint --fix","postinstall":"husky install"},"dependencies":{"@babel/runtime":"7.14.6","@enact/core":"4.0.3","@enact/i18n":"4.0.3","@enact/moonstone":"4.0.1","@enact/spotlight":"4.0.3","@enact/ui":"4.0.3","@enact/webos":"4.0.3","hls.js":"1.0.7","ilib":"npm:ilib-webos@14.8.0-webos1","lodash":"4.17.21","react":"17.0.2","react-dom":"17.0.2","react-lazyload":"3.2.0","react-query":"3.18.1","react-router-dom":"5.2.0","styled-components":"5.3.0","use-debounce":"7.0.0"},"devDependencies":{"@babel/core":"7.14.6","@babel/preset-env":"7.14.7","@babel/preset-react":"7.14.5","@babel/preset-typescript":"7.14.5","@craco/craco":"6.1.2","@enact/dev-utils":"4.1.1","@types/hls.js":"1.0.0","@types/lodash":"4.14.170","@types/react":"17.0.11","@types/react-dom":"17.0.8","@types/react-lazyload":"3.1.0","@types/react-router-dom":"5.1.7","@types/styled-components":"5.1.10","@typescript-eslint/eslint-plugin":"4.28.1","@typescript-eslint/parser":"4.28.1","@webosose/ares-cli":"2.2.0","babel-eslint":"10.1.0","concurrently":"6.2.0","dotenv-load":"2.0.0","eslint":"7.29.0","eslint-config-prettier":"8.3.0","eslint-plugin-prettier":"3.4.0","http-proxy-middleware":"2.0.0","husky":"6.0.0","import-sort-style-vmv":"2.0.2","lint-staged":"11.0.0","prettier":"2.3.2","prettier-eslint":"12.0.0","prettier-plugin-import-sort":"0.0.7","react-scripts":"4.0.3","react-uid":"2.3.1","typescript":"4.3.4"}}')},515:function(e,t,n){},516:function(e,t,n){"use strict";n.r(t);var r=n(221);window.addEventListener("error",(function(e){var t=e.error&&e.error.stack||null;t&&t.length>512&&(t=e.error.stack.substring(0,512));var n={message:e.message,url:e.filename,line:e.lineno,column:e.colno,stack:t};Object(r.error)("app.onerror",n,"")}));var i,c,a,o,s,u=n(38),l=n(6),f=n(0),v=n.n(f),h=n(519),d=n(151),p=n(517),b=n(222),m=n.n(b),k=n(32),j=n(100),y=n(219),O=n(1),g=function(e){var t=e.children;return Object(O.jsx)(O.Fragment,{children:t})},_=n(20),x=n(21),I=n(102),T=n.n(I),w=n(220),P=n(5),C=x.b.nav(i||(i=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n"]))),S=x.b.ul(c||(c=Object(_.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),E=x.b.li(a||(a=Object(_.a)(["\n  color: ",";\n"])),(function(e){return e.active&&"var(--main-color)"})),A=[[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",icon:"home",href:P.a.Home},{name:"\u041f\u043e\u0438\u0441\u043a",icon:"search",href:P.a.Search},{name:"\u042f \u0441\u043c\u043e\u0442\u0440\u044e",icon:"notifications_active",href:P.a.Watching},{name:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438",icon:"bookmark",href:P.a.Bookmarks},{name:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438",icon:"list",href:P.a.Collections}],[{name:"\u0424\u0438\u043b\u044c\u043c\u044b",icon:"movie",href:Object(P.b)(P.a.Category,{categoryId:"movie"})},{name:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b",icon:"tv",href:Object(P.b)(P.a.Category,{categoryId:"serial"})},{name:"\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b",icon:"library_music",href:Object(P.b)(P.a.Category,{categoryId:"concert"})},{name:"\u0414\u043e\u043a\u0443\u0444\u0438\u043b\u044c\u043c\u044b",icon:"archive",href:Object(P.b)(P.a.Category,{categoryId:"documovie"})},{name:"\u0414\u043e\u043a\u0443\u0441\u0435\u0440\u0438\u0430\u043b\u044b",icon:"description",href:Object(P.b)(P.a.Category,{categoryId:"docuserial"})},{name:"\u0422\u0412 \u0428\u043e\u0443",icon:"live_tv",href:Object(P.b)(P.a.Category,{categoryId:"tvshow"})},{name:"\u0421\u043f\u043e\u0440\u0442",icon:"sports_soccer",href:Object(P.b)(P.a.Channels)}],[{name:"\u0421\u043f\u0438\u0434\u0442\u0435\u0441\u0442",icon:"speed",href:P.a.Speed},{name:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",icon:"settings",href:P.a.Settings}]],N=function(e){var t=Object(p.f)();return Object(O.jsx)(C,Object(l.a)(Object(l.a)({},e),{},{children:T()(A,(function(e,n){return Object(O.jsx)(S,{children:T()(e,(function(e){return Object(O.jsx)(E,{active:t.pathname===e.href,children:Object(O.jsx)(w.a,{href:e.href,icon:e.icon,children:e.name})},e.href)}))},n)}))}))},R=["children"],z=x.b.div(o||(o=Object(_.a)(["\n  display: flex;\n  height: 100%;\n"]))),B=x.b.div(s||(s=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 1rem 0;\n"]))),U=function(e){var t=e.children,n=Object(k.a)(e,R);return Object(O.jsxs)(z,Object(l.a)(Object(l.a)({},n),{},{children:[Object(O.jsx)(N,{}),Object(O.jsx)(B,{children:t})]}))},L=["component","layout"],D=function(e){var t=e.component,n=e.layout,r=Object(k.a)(e,L),i=Object(f.useMemo)((function(){return"fill"===n?g:U}),[n]),c=Object(f.useMemo)((function(){return function(e){return Object(O.jsx)(j.Panel,{children:Object(O.jsx)(i,{children:Object(O.jsx)(f.Suspense,{fallback:Object(O.jsx)(y.a,{}),children:Object(f.createElement)(t,e)})})})}}),[t,i]);return Object(O.jsx)(p.b,Object(l.a)(Object(l.a)({},r),{},{render:c}))},K=n(146),F=n(13),W=n.n(F),q=n(23),H=n(47),M=n(112),J=n(66),V=n(227),G=n(514),Q=G.description,X="".concat(G.name," ").concat(G.version);var Y=function(){var e=Object(f.useState)(""),t=Object(H.a)(e,2),n=t[0],r=t[1],i=Object(f.useState)(""),c=Object(H.a)(i,2),a=c[0],o=c[1];return Object(f.useEffect)((function(){var e=Object(J.detect)();o(navigator.platform),r("".concat(e.platformName," (").concat(X,")")),Object(V.deviceinfo)((function(t){o("".concat(t.modelName).concat(t.version?" (".concat(t.version,")"):"")),r("".concat(e.platformName," ").concat(t.sdkVersion||e[e.platformName]," (").concat(X,")"))}))}),[]),Object(f.useMemo)((function(){return{software:n,hardware:a,title:Q}}),[n,a])},Z=n(163);var $,ee=function(){var e=Object(p.e)(),t=Y(),n=Object(M.a)("deviceAuthorization").deviceAuthorizationAsync,r=Object(M.a)("deviceNotify").deviceNotify,i=Object(Z.a)("is_logged"),c=Object(H.a)(i,1)[0],a=Object(f.useCallback)((function(t,n){e.replace(P.a.Pair,{userCode:t,verificationUri:n})}),[e]);Object(f.useEffect)((function(){var r=setTimeout(Object(q.a)(W.a.mark((function r(){return W.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n([t,a]);case 2:e.replace(P.a.Home);case 3:case"end":return r.stop()}}),r)}))),500);return function(){clearTimeout(r)}}),[c,t,e,a,n]),Object(f.useEffect)((function(){var e=setTimeout((function(){r([t])}),2e3);return function(){clearTimeout(e)}}),[t,r])},te=["children"],ne=Object(x.b)(j.Panels)($||($=Object(_.a)(["\n  article {\n    padding: 0;\n  }\n"]))),re=function(e){var t=e.children,n=Object(k.a)(e,te),r=Object(p.e)();return Object(K.a)(r.goBack),ee(),Object(O.jsx)(ne,Object(l.a)(Object(l.a)({noCloseButton:!0},n),{},{children:Object(O.jsx)(p.c,{children:t})}))},ie=(n(515),v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(17)]).then(n.bind(null,730))}))),ce=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(22)]).then(n.bind(null,726))})),ae=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(10),n.e(18)]).then(n.bind(null,731))})),oe=v.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(24)]).then(n.bind(null,732))})),se=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(23)]).then(n.bind(null,727))})),ue=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,733))})),le=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(19)]).then(n.bind(null,725))})),fe=v.a.lazy((function(){return n.e(28).then(n.bind(null,734))})),ve=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(20)]).then(n.bind(null,735))})),he=v.a.lazy((function(){return n.e(29).then(n.bind(null,723))})),de=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(12)]).then(n.bind(null,724))})),pe=v.a.lazy((function(){return n.e(30).then(n.bind(null,736))})),be=v.a.lazy((function(){return n.e(31).then(n.bind(null,737))})),me=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(14)]).then(n.bind(null,728))})),ke=v.a.lazy((function(){return Promise.all([n.e(2),n.e(5),n.e(11),n.e(26)]).then(n.bind(null,738))})),je=v.a.lazy((function(){return Promise.all([n.e(16),n.e(27)]).then(n.bind(null,739))})),ye=v.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(25)]).then(n.bind(null,740))})),Oe=v.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,741))})),ge=v.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(21)]).then(n.bind(null,742))})),_e=new h.a({defaultOptions:{queries:{staleTime:3e5}}}),xe=m()((function(e){return Object(O.jsx)(p.a,{children:Object(O.jsx)(d.a,{client:_e,children:Object(O.jsxs)(re,Object(l.a)(Object(l.a)({},e),{},{children:[Object(O.jsx)(D,{path:P.a.Index,component:he,layout:"fill",exact:!0}),Object(O.jsx)(D,{path:P.a.Home,component:ve}),Object(O.jsx)(D,{path:P.a.Search,component:me}),Object(O.jsx)(D,{path:P.a.Category,component:ae}),Object(O.jsx)(D,{path:P.a.Watching,component:ge}),Object(O.jsx)(D,{path:P.a.Bookmark,component:ie}),Object(O.jsx)(D,{path:P.a.Bookmarks,component:ce}),Object(O.jsx)(D,{path:P.a.Collection,component:ue}),Object(O.jsx)(D,{path:P.a.Collections,component:le}),Object(O.jsx)(D,{path:P.a.Channel,component:oe,layout:"fill"}),Object(O.jsx)(D,{path:P.a.Channels,component:se}),Object(O.jsx)(D,{path:P.a.History,component:fe}),Object(O.jsx)(D,{path:P.a.Item,component:de,layout:"fill"}),Object(O.jsx)(D,{path:P.a.Video,component:Oe,layout:"fill"}),Object(O.jsx)(D,{path:P.a.Trailer,component:ye,layout:"fill"}),Object(O.jsx)(D,{path:P.a.Pair,component:be,layout:"fill"}),Object(O.jsx)(D,{path:P.a.Speed,component:je}),Object(O.jsx)(D,{path:P.a.Settings,component:ke}),Object(O.jsx)(D,{component:pe})]}))})})})),Ie=Object(O.jsx)(xe,{});"undefined"!==typeof window&&Object(u.render)(Ie,document.getElementById("root"));t.default=Ie}},[[516,7,8]]]);
//# sourceMappingURL=main.67df2d4e.chunk.js.map