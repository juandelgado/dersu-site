(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{52782:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/routes/[[...slug]]",function(){return t(95163)}])},39326:function(e,n,t){"use strict";t.d(n,{$:function(){return o}});var r=t(21900),i=t(56829),o=function(){return(0,i.useContext)(r.Z).t}},95163:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return ea},default:function(){return ec}});var r,i,o=t(69713),a=t(10961),c=t(29567),s=t(98381),l=t(59591),u=t(79205),d=t(87157),p=t(33143),h=t(28146),g=t(96003),f={body:'\n  <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M1 17L9 9L1 0.999999" stroke="currentColor" stroke-width="1.5"/>\n  </svg>\n    ',height:18,width:11},m=t(52806),v=t(46825),w=t(82477),y=t(56829),b=t(26092),Z=t(83153),k=(0,m.k)(function(e){return{button:function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:32;return{backgroundColor:n?(0,b.zn)(e,n):"none",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",border:e.h.border(1,e.colors.grey.xs),color:e.colors.grey.black,height:e.toRem(r),width:e.toRem(r),":hover":{backgroundColor:(0,b.zn)(e,null!=t?t:"primary.skyBlue"),borderColor:(0,b.zn)(e,null!=t?t:"primary.skyBlue")},":disabled":{cursor:"not-allowed",color:e.colors.grey.xs}}}}}),x=function(e){var n=e.children,t=e.bgColor,r=e.hvColor,i=e.size,a=(0,h._)(e,["children","bgColor","hvColor","size"]);return(0,o.tZ)(Z.Z,(0,p._)((0,d._)({css:k.button(t,r,i)},a),{children:n}))},C=t(28981),B=(0,m.k)(function(e){return{container:{display:"grid",gap:e.spacing(2),gridAutoFlow:"column",justifyContent:"center",marginTop:e.spacing(11)},button:{"&[aria-current=true]":{borderColor:e.colors.grey.black}}}}),_=function(e){var n,t,r=(0,g._)((0,y.useState)(1),2),i=r[0],a=r[1],c=(0,g._)((0,y.useState)(null!==(t=null===(n=e.pagination)||void 0===n?void 0:n.total)&&void 0!==t?t:0),1)[0],s=(0,w.Z)({boundaryCount:0,siblingCount:1,defaultPage:1,count:Math.ceil(c/e.limit),onChange:function(n,t){var r,o,c=i<t?null===(r=e.pagination)||void 0===r?void 0:r.nextCursor:null===(o=e.pagination)||void 0===o?void 0:o.prevCursor;c&&(e.onChange(c,Math.abs(t-i)),a(t))}}).items;return(0,o.tZ)("nav",{css:B.container,children:s.map(function(e){var n=e.page,t=e.type,r=(0,h._)(e,["page","type"]);return["page","next","previous"].includes(t)?(0,o.tZ)(x,(0,p._)((0,d._)({css:B.button},r),{size:52,title:t,children:"page"===t?(0,o.tZ)(C.Z.Span,{text:"B3",children:n}):(0,o.tZ)(v.JO,{icon:f,rotate:"previous"===t?90:0})}),"".concat(t,"-").concat(n)):null})})},X=t(4949),R=t(72850),W=function(){var e=[];return{subscribe:function(n){var t=e.push(n);return function(){e.splice(t-1,1)}},dispatch:function(n){requestAnimationFrame(function(){e.forEach(function(e){return e(n)})})}}},L=function(e){var n,t,r=null!=e?e:{},i=r.initialMode,o=void 0!==i&&i,a=r.animated,c=void 0!==a&&a,s=(0,g._)((0,y.useState)(o),2),l=s[0],u=s[1],d=(0,g._)((0,y.useState)(o),2),p=d[0],h=d[1],f=(0,y.useMemo)(function(){return W()},[]),m=(0,y.useRef)([]),v=(0,y.useRef)(function(){return Promise.resolve(!0)}),w=(0,y.useRef)(null),b=(0,y.useCallback)(function(){return u(!l)},[l]),Z=(0,y.useCallback)((n=(0,X._)(function(e){return(0,R.Jh)(this,function(n){return w.current=e,h(!0),u(!0),[2,new Promise(function(e){f.subscribe(function(n){e(n)})})]})}),function(e){return n.apply(this,arguments)}),[f]),k=(0,y.useCallback)((0,X._)(function(){return(0,R.Jh)(this,function(e){switch(e.label){case 0:return[4,v.current()];case 1:return e.sent()&&(u(!1),h(c),f.dispatch(void 0)),[2]}})}),[f,c]),x=(0,y.useCallback)((t=(0,X._)(function(e){return(0,R.Jh)(this,function(n){switch(n.label){case 0:return[4,v.current()];case 1:return n.sent()&&(u(!1),h(c),f.dispatch(e)),[2]}})}),function(e){return t.apply(this,arguments)}),[f,c]),C=(0,y.useCallback)(function(){h(!1)},[]),B=(0,y.useCallback)(function(e){var n=m.current.push(e);return function(){m.current.splice(n-1,1)}},[]);return(0,y.useEffect)(function(){m.current.forEach(function(e){return e({isOpen:l})})},[l]),(0,y.useMemo)(function(){return{isOpen:l,open:Z,cancel:k,close:x,toggle:b,subscribe:B,remove:C,get canClose(){return v.current},set canClose(callback){v.current=callback},render:function(e){var n,t;return p&&null!==(t=null!=e?e:null===(n=w.current)||void 0===n?void 0:n.call(w,this))&&void 0!==t?t:null}}},[k,x,p,Z,B,b,l,C])},F=t(39326),E=t(19490),N=t.n(E),Q=t(85599),S=t.n(Q),D=t(76440),M=t(93695),H=function(e){var n=(0,D.useRouter)(),t=n.push,r=n.asPath,i=M.Z.parseUrl(r),o=i.url,c=i.query,s=(0,g._)((0,y.useState)((0,d._)({},e.initialQuery,c)),2),l=s[0],u=s[1],h=(0,y.useCallback)(function(e,n){u(function(t){return(0,p._)((0,d._)({},t),(0,a._)({},e,n))})},[]),f=M.Z.stringifyUrl({url:o,query:S()(l,function(n,t){var r;return null===(r=e.excludeFromUrl)||void 0===r?void 0:r.includes(t)})}),m=(0,y.useCallback)(function(e){u(N()({},l,e))},[l]);return(0,y.useEffect)(function(){f!==r&&t(f)},[f,t,r]),{query:l,setQuery:u,setField:h,mergeQuery:m}},A=t(9109),P=t(89298),T=t(75431),j=function(e){var n=new URLSearchParams;return Object.keys(e).forEach(function(t){var r=e[t];void 0!==r&&(Array.isArray(r)?r.forEach(function(e){return n.append(t,e)}):n.append(t,r))}),n},I=t(2974).ZP.extend({prefixUrl:"https://production-api.dersu.com"}).extend({prefixUrl:"".concat("https://production-api.dersu.com","/public/route")}),O=(r=(0,X._)(function(e){return(0,R.Jh)(this,function(n){return[2,I.get("total",{searchParams:j(e)}).json()]})}),function(e){return r.apply(this,arguments)}),z=(i=(0,X._)(function(e){return(0,R.Jh)(this,function(n){return[2,I.get("",{searchParams:j(e)}).json()]})}),function(e){return i.apply(this,arguments)});(0,T.gc)(O,[P.Q.route,P.Q.total]);var q=(0,T.gc)(z,[P.Q.route]),J=t(24940),U=t.n(J),G={body:'\n  <path d="M0 5H16.5M16.5 5L12.5 1M16.5 5L12.5 9" stroke="currentColor" stroke-width="1.5"/>\n  ',height:10,width:18},$=(0,T.Zl)([P.Q.route,P.Q.place,P.Q.group]),V=(0,T.Zl)([P.Q.route,P.Q.place,P.Q.activityType,P.Q.group]),Y=(0,m.k)(function(e){return{title:{marginBottom:e.spacing(7)},container:{display:"grid",gap:e.spacing(8),gridTemplateColumns:"repeat(auto-fill, minmax(".concat(e.toRem(300),", 1fr))")},placeNameWrapper:{marginBottom:e.spacing(3)},placeName:{display:"inline-flex",alignItems:"center",svg:{marginLeft:e.spacing(2)}},activities:{display:"grid",gridAutoFlow:"row",gap:e.spacing(2)}}}),K=function(){var e,n=V({select:function(e){return e.data.groups}});return(0,o.BX)("div",{children:[(0,o.tZ)(C.Z,{text:"H5",weight:500,css:Y.title,children:"Todas las rutas por comunidad y actividad"}),(0,o.tZ)("div",{css:Y.container,children:null===(e=n.data)||void 0===e?void 0:e.map(function(e){return(0,o.BX)("div",{children:[(0,o.BX)("div",{css:Y.placeNameWrapper,children:[(0,o.BX)(C.Z.Span,{text:"B3",color:"grey.offBlack",children:["Todas las rutas en"," "]}),(0,o.BX)(C.Z.Link,{href:"".concat("/routes/".concat(e.place.slug)),css:Y.placeName,text:"B3",color:"secondary.blueLink",children:[e.place.name," ",(0,o.tZ)(v.JO,{icon:G,height:8})]})]}),(0,o.tZ)("div",{css:Y.activities,children:e.activities.map(function(n){return(0,o.BX)(C.Z.Link,{href:{pathname:"/routes/".concat(e.place.slug),query:{activityTypes:n.id}},text:"B3",color:"secondary.blueLink",children:["Rutas en ",e.place.name," de ",n.name]},n.id)})})]},e.place.id)})})]})},ee=(0,m.k)(function(e){return{title:{marginBottom:e.spacing(7)},container:{display:"grid",gap:e.spacing(8),gridAutoFlow:"row",gridTemplateColumns:"repeat(auto-fill, minmax(".concat(e.toRem(300),", 1fr))")},places:{display:"grid",gridAutoFlow:"row",gap:e.spacing(2)}}}),en=function(){var e,n=$({select:function(e){return e.data.groups}});return(0,o.BX)("div",{children:[(0,o.tZ)(C.Z,{text:"H5",weight:500,css:ee.title,children:"Rutas por Provincia"}),(0,o.tZ)("div",{css:ee.container,children:null===(e=n.data)||void 0===e?void 0:e.map(function(e){return(0,o.BX)("div",{style:{flexGrow:1},children:[(0,o.tZ)(C.Z,{text:"B3",children:e.place.name}),(0,o.tZ)("div",{css:ee.places,children:e.places.map(function(e){return(0,o.tZ)(C.Z.Link,{href:"".concat("/routes/".concat(e.slug)),text:"B3",color:"secondary.blueLink",children:e.name},e.id)})})]},e.place.id)})})]})},et=t(66105),er=t(43166),ei=(0,m.k)(function(e){return{container:{minHeight:"100vh",backgroundColor:e.colors.grey.white},wrapper:(0,a._)({padding:e.spacing(0,9.5),width:"100%",marginBottom:e.spacing(18)},e.breakpoints.down("sm"),{padding:e.spacing(0,4)}),contentTop:{display:"flex",justifyContent:"space-between",alignItems:"end",marginBottom:e.spacing(3.5)},routes:(0,a._)({display:"grid",gridAutoFlow:"row",gap:e.spacing(4),gridTemplateColumns:"100%"},e.breakpoints.down("sm"),{justifyContent:"center"}),index:(0,a._)({padding:e.spacing(20,9.5,0),display:"grid",gridAutoFlow:"row",gap:e.spacing(16)},e.breakpoints.down("sm"),{padding:e.spacing(15,4,0)}),footer:{backgroundColor:e.colors.grey.offWhite}}}),eo=function(){var e,n,t,r=(0,F.$)(),i=(0,D.useRouter)(),a=H({initialQuery:{placeSlug:null===(e=i.query.slug)||void 0===e?void 0:e.join("/"),limit:9},excludeFromUrl:["limit","cursor","offset","placeSlug"]}),d=L({animated:!0}),p=q(a.query,{select:function(e){return e.data},placeholderData:er.Wk});return"es"!==i.locale?(0,o.tZ)(A.Z,{title:r.headerMenu.routes,children:(0,o.tZ)(l.Z,{children:(0,o.BX)(u.Z,{children:[r.routeFallback.workingOn," ",(0,o.tZ)(U(),{href:"/routes",locale:"es",scroll:!1,children:r.routeFallback.spanishVersion})," ",r.routeFallback.available]})})}):(0,o.BX)("div",{css:ei.container,children:[d.render(),(0,o.tZ)(s.Z,{headerContentClassName:"md:bg-white"}),(0,o.BX)("div",{css:ei.wrapper,children:[(0,o.tZ)("div",{css:ei.routes,children:null===(n=p.data)||void 0===n?void 0:n.routes.map(function(e){return(0,o.tZ)(et.h,{route:e},e.id)})}),(0,o.tZ)(_,{pagination:null===(t=p.data)||void 0===t?void 0:t.pagination,limit:9,onChange:function(e,n){return a.mergeQuery({cursor:e,offset:n})}})]}),(0,o.BX)("div",{css:ei.index,children:[(0,o.tZ)(K,{}),(0,o.tZ)(en,{})]}),(0,o.tZ)("div",{css:ei.footer,children:(0,o.tZ)(c.Z,{hasDivider:!1})})]})},ea=!0,ec=function(){return(0,o.tZ)(eo,{})}},66105:function(e,n,t){"use strict";t.d(n,{h:function(){return X}});var r=t(10961),i=t(69713),o=t(87157),a=t(33143),c=t(96003),s=t(75767),l=t(75073),u=t.n(l),d=t(56829),p=function(e,n){return"number"==typeof n?n:e.breakpoints.values[n]},h=function(){return{width:window.innerWidth,height:window.innerHeight}},g=function(){var e=(0,s.u)(),n=(0,c._)((0,d.useState)({width:0,height:0}),2),t=n[0],r=n[1];(0,d.useEffect)(function(){r(h());var e=function(){r(h())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]);var i=(0,d.useCallback)(function(n){return t.width>=p(e,n)},[t.width,e]),l=(0,d.useCallback)(function(n){return t.width<=p(e,n)},[t.width,e]),g=(0,d.useCallback)(function(n,r){return u()(t.width,p(e,n),p(e,r))},[t.width,e]);return(0,a._)((0,o._)({},t),{up:i,down:l,btw:g})},f=function(e){var n=g(),t=!0;return(e.min&&e.max?t=n.btw(e.min,e.max):e.min?t=n.up(e.min):e.max&&(t=n.down(e.max)),t)?(0,i.tZ)(i.HY,{children:e.children}):null},m=t(16389),v=t(28981),w=t(6017),y=t(27437),b=t(50479),Z=t(52806),k=t(83568),x=t(24940),C=t.n(x),B=t(76440),_=(0,Z.k)(function(e){var n;return{container:(0,r._)({border:e.h.border(1,e.colors.grey.xs),borderRadius:10,display:"flex",cursor:"pointer",width:"100%",minHeight:e.toRem(213),":hover":(0,r._)({backgroundColor:e.colors.grey.xxs},b.y.routeCard.get("level"),{backgroundColor:e.colors.grey.white})},e.breakpoints.down("sm"),{flexDirection:"column"}),image:(n={borderRadius:10,objectFit:"cover",margin:e.spacing(2)},(0,r._)(n,e.breakpoints.up("sm"),{maxWidth:e.toRem(244)}),(0,r._)(n,e.breakpoints.down("sm"),{height:e.toRem(200)}),n),details:(0,r._)({flexGrow:1,padding:e.spacing(6,6,5),display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"start",width:"50%"},e.breakpoints.down("sm"),{width:"100%",padding:e.spacing(2)}),nameWrapper:(0,r._)({maxWidth:e.toRem(350),width:"100%",margin:e.spacing(0,2,2,0)},e.breakpoints.down("sm"),{marginBottom:e.spacing(3)}),name:(0,r._)({marginBottom:e.spacing(1),width:"100%",overflow:"hidden",overflowWrap:"break-word",textOverflow:"ellipsis","&":{lineHeight:1.2}},e.breakpoints.down("sm"),{marginBottom:e.spacing(3)}),addressWrapper:{display:"grid",gridAutoFlow:"column",gap:e.spacing(2.5),width:"max-content",maxWidth:"100%",alignItems:"center"},addressWrapperDivider:{width:2,backgroundColor:e.colors.grey.xs,height:"100%"},routeData:{display:"grid",gridAutoFlow:"column",gap:e.spacing(7.5)},routeDataName:{marginBottom:e.spacing(1)},levelsContainer:{display:"grid",gap:e.spacing(2),marginBottom:"auto",gridTemplateColumns:"repeat(auto-fit, ".concat(e.toRem(54),")"),maxWidth:"100%"},nameLevels:(0,r._)({display:"flex",justifyContent:"space-between",width:"100%",flexWrap:"wrap",marginBottom:e.spacing(4)},e.breakpoints.down("sm"),{flexDirection:"column"})}}),X=function(e){var n,t,r=(0,B.useRouter)().locale,o=(0,s.u)(),a=(0,w.i)(),c=(0,y.AC)({select:function(e){return(0,k.Hr)(e.data.skills.flatMap(function(e){var n;return null!==(n=e.skills)&&void 0!==n?n:[]}).flatMap(function(e){var n;return null!==(n=e.levels)&&void 0!==n?n:[]}),function(e){return e.id})}}),l=null!==(n=e.route.levels)&&void 0!==n?n:e.route.levelIds.map(function(e){var n;return null===(n=c.data)||void 0===n?void 0:n[e]}),u="".concat((e.route.distanceInMeters/1e3).toLocaleString(r)," km"),d="".concat(e.route.elevationGainInMeters.toLocaleString(r)," m");return(0,i.tZ)(C(),{href:a("route",{slug:null!==(t=e.route.slug)&&void 0!==t?t:e.route.id}),passHref:!0,scroll:!1,children:(0,i.BX)("div",{css:_.container,children:[(0,i.tZ)("img",{css:_.image,src:e.route.thumbnail,alt:e.route.name}),(0,i.BX)("div",{css:_.details,children:[(0,i.BX)("div",{css:_.nameLevels,children:[(0,i.BX)("div",{css:_.nameWrapper,children:[(0,i.tZ)(v.Z,{text:"H5",weight:500,css:_.name,title:e.route.name,children:e.route.name}),(0,i.tZ)(f,{min:"sm",children:(0,i.BX)("div",{css:_.addressWrapper,children:[(0,i.tZ)(v.Z,{text:"B2",color:"grey.l",family:"sans",children:e.route.address}),(0,i.tZ)("span",{css:_.addressWrapperDivider}),(0,i.tZ)(v.Z,{text:"B2",color:"secondary.blueLink",family:"sans",nowrap:!0,children:"Como Ilegar"})]})}),(0,i.tZ)(f,{max:"sm",children:(0,i.BX)("div",{css:_.addressWrapper,children:[(0,i.tZ)(v.Z,{text:"B2",color:"grey.offBlack",family:"sans",children:e.route.address}),(0,i.tZ)("span",{css:_.addressWrapperDivider}),(0,i.tZ)(v.Z,{text:"B2",color:"grey.offBlack",family:"sans",nowrap:!0,children:u}),(0,i.tZ)("span",{css:_.addressWrapperDivider}),(0,i.BX)(v.Z,{text:"B2",color:"grey.offBlack",family:"sans",nowrap:!0,children:["+ ",d]})]})})]}),(0,i.tZ)("div",{style:{width:o.toRem(62*l.length-7)},css:_.levelsContainer,children:l.map(function(e){return(0,i.tZ)(m.E,{level:e,className:b.y.routeCard.set("level")},e.id)})})]}),(0,i.tZ)(f,{min:"sm",children:(0,i.BX)("div",{css:_.routeData,children:[(0,i.BX)("div",{children:[(0,i.tZ)(v.Z,{text:"B1",color:"grey.l",transform:"uppercase",family:"sans",css:_.routeDataName,children:"distancia"}),(0,i.tZ)(v.Z,{text:"H5",weight:500,children:u})]}),(0,i.BX)("div",{children:[(0,i.tZ)(v.Z,{text:"B1",color:"grey.l",transform:"uppercase",family:"sans",css:_.routeDataName,children:"desnivel positivo"}),(0,i.tZ)(v.Z,{text:"H5",weight:500,children:d})]})]})})]})]})})}}},function(e){e.O(0,[974,593,977,381,519,774,888,179],function(){return e(e.s=52782)}),_N_E=e.O()}]);