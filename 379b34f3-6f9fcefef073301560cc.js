"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[505],{88466:function(e,t,i){i.d(t,{o:function(){return F}});var s=i(15785),l=(i(33792),i(15007)),n=i(95223),a=i(4539),r=i(54129),o=i(82026),c=i(44264),u=i(3987),d=i(75900),m=i.n(d),g=i(82357),h=i(22222),p=i(18870),v=i(73181);const f="688px",y="All Products",b="keywords",w=e=>e.replace(/[\u00A0-\u9999<>\&]/g,(e=>"&#"+e.charCodeAt(0)+";")).replace(/&#60;mark&#62;/g,"<mark>").replace(/&#60;em&#62;/g,"<em>").replace(/&#60;\/mark&#62;/g,"</mark>").replace(/&#60;\/em&#62;/g,"</em>"),x=(e,t)=>{const i=new URLSearchParams(window.location.search);i.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+i)},Z=()=>{window.history.replaceState({},"",""+window.location.pathname)},S=async(e,t,i,s,l,n,a,r)=>{let o;if(n.length)o=n;else{const t=await e.listIndices(),s=Object.values(t.items).map((e=>{let{name:t}=e;return t})),n=l.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return i?i+"-"+t:t})).filter((e=>s.includes(e)));a(n),o=n}s=s.includes("all")?o:s.filter((e=>o.includes(e)));const c=[];return s.forEach((e=>{c.push({indexName:e,query:t,params:{facets:[b],attributesToRetrieve:["objectID","url","product"],hitsPerPage:Math.ceil(100/s.length),filters:r.map((e=>b+':"'+e+'"')).join(" AND ")}})})),await e.multipleQueries(c)},z=(e,t)=>{e.forEach((e=>{let{objectID:i,url:s,path:l,_highlightResult:n}=e,a="";a=l||(s.includes("https://developer.adobe.com")?s.replace("https://developer.adobe.com",""):s),(0,c.Bm)(a)||t.find((e=>e.url===a))||t.push({objectID:i,url:a,_highlightResult:n})}))};var k={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},A={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},N={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},E={name:"1jwcxx3",styles:"font-style:italic"},P={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},q={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},I={name:"13udsys",styles:"height:100%"},j={name:"oragi2",styles:"white-space:nowrap;text-overflow:ellipsis"},_={name:"i2ekfq",styles:"margin-top:var(--spectrum-global-dimension-size-200);margin-bottom:var(--spectrum-global-dimension-size-100)"},H={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},L={name:"3tj9xb",styles:"width:100%;height:100%;display:grid;place-items:start center"},M={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},O={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},R={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},B={name:"1ef11wo",styles:"font-style:italic;margin:var(--spectrum-global-dimension-size-50) 0"},T={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},C={name:"11qpleq",styles:"min-width:auto;width:100%"},D={name:"1d3w5wq",styles:"width:100%"};const F=e=>{let{algolia:t,indexAll:i,indexPrefix:d,showSearch:F,setShowSearch:Q,searchButtonId:V,isIFramed:W}=e;const{0:J,1:K}=(0,l.useState)(!1),{0:U,1:X}=(0,l.useState)(""),{0:G,1:Y}=(0,l.useState)(""),{0:$,1:ee}=(0,l.useState)(["all"]),{0:te,1:ie}=(0,l.useState)([y]),{0:se,1:le}=(0,l.useState)([]),{0:ne,1:ae}=(0,l.useState)([]),{0:re,1:oe}=(0,l.useState)(!1),{0:ce,1:ue}=(0,l.useState)(!1),{0:de,1:me}=(0,l.useState)(!1),ge=(0,l.useRef)(null),he=(0,l.useRef)(null),pe=(0,l.useRef)(null),ve=(0,l.useRef)(null),{0:fe,1:ye}=(0,l.useState)([]),{0:be,1:we}=(0,l.useState)([]),{0:xe,1:Ze}=(0,l.useState)([]),{0:Se,1:ze}=(0,l.useState)([]),{0:ke,1:Ae}=(0,l.useState)(!1),{0:Ne,1:Ee}=(0,l.useState)(!1),{0:Pe,1:qe}=(0,l.useState)(0),Ie=async()=>{if(U.length){var e,s;let l;if(Ae(!1),x(c.AQ.query,U),x(c.AQ.keywords,ne),x(c.AQ.index,$),W){const e=JSON.stringify({query:U,keywords:ne,index:$}),t=(()=>{const e=document.referrer;return(e.indexOf("localhost")>=0||e.indexOf("developer-stage.adobe")>=0||e.indexOf("hlx.page")>=0||e.indexOf("hlx.live")>=0||e.indexOf("developer.adobe")>=0)&&e})();t&&parent.postMessage(e,t)}oe(!0),U!==G?(K(!0),l=await S(t,U,d,["all"],i,se,le,ne)):l=await S(t,U,d,$,i,se,le,ne);const n=te.filter((e=>e!==y))[0],a=[y],r=[],o=[];null!==(e=l)&&void 0!==e&&null!==(s=e.results)&&void 0!==s&&s.length&&l.results.forEach((e=>{let{hits:t,facets:i}=e;if(void 0!==i){if(t.length>0){const e=t[0].product;e&&(a.includes(e)||(e!==n?a.push(e):a.splice(1,0,n)))}return z(t,r),((e,t)=>{e[b]&&Object.keys(e[b]).forEach((i=>{const s=t.find((e=>Object.keys(e)[0]===i));var l,n;s?s[i]+=null===(l=e[b])||void 0===l?void 0:l[i]:t.push({[i]:null===(n=e[b])||void 0===n?void 0:n[i]})}))})(i,o),!0}})),U!==G?(Ze(a),Y(U),n&&a.includes(n)?(ee((0,u.getIndexesFromProduct)(n)),Ee(!0)):(we(r),ze(o),K(!1))):(we(r),ze(o),K(!1))}};return(0,l.useEffect)((async()=>{W&&window.addEventListener("message",(e=>{const t=JSON.parse(e.data);if(t.localPathName){let e=t.localPathName;if("/"!==e){e.startsWith("/")||(e="/"+e),e.endsWith("/")||(e+="/");const t=i.find((t=>t.productIndices.some((t=>e.startsWith(t.indexPathPrefix)))));null!=t&&t.productName&&ie([t.productName].concat((0,s.Z)(te)))}const l=JSON.stringify({received:t.localPathName});parent.postMessage(l,"*")}}));const e=await t.listIndices(),l=Object.values(e.items).map((e=>{let{name:t}=e;return t})),n=i.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return d?d+"-"+t:t})).filter((e=>l.includes(e)));le(n)}),[]),(0,l.useEffect)((()=>{if(F){const e=new URL(window.location).searchParams,t=e.get(c.AQ.query),i=e.get(c.AQ.keywords),s=e.get(c.AQ.index);s&&ee(s.split(",")),i&&ae(i.split(",")),null!=t&&t.length&&(X(t),me(!0),Ee(!0)),null!=pe&&pe.current&&pe.current.focus()}else Z()}),[F]),(0,l.useEffect)((()=>{Ne&&(Ee(!1),Ie())}),[Ne]),(0,l.useEffect)((()=>{null!=ve&&ve.current&&(ve.current.scrollTop=0)}),[be]),(0,l.useEffect)((()=>{const e=e=>{let{target:t}=e;Ae(!1),ge.current&&!ge.current.contains(t)&&t.id!==V&&Q(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[Ae,re,Q,ge]),(0,l.useEffect)((()=>{const e=e=>{let{key:t}=e;if("Escape"===t){Q(!1),Z();const e=document.getElementById("aio-Search-close");e&&e.focus()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[Q]),(0,l.useEffect)((()=>{const e=setTimeout((()=>l()),500),l=async()=>{if(U.length&&!be.length){var e;me(!0);const l=await(async(e,t,i,l,n,a,r)=>{const o=[];let c;if(a.length)c=a;else{const t=await e.listIndices(),s=Object.values(t.items).map((e=>{let{name:t}=e;return t})),l=n.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return i?i+"-"+t:t})).filter((e=>s.includes(e)));r(l),c=l}if(l[0]===y)l=c;else{const e=l.filter((e=>e!==y)),t=(0,u.getIndexesFromProduct)(e[0]);l=[].concat((0,s.Z)(t),(0,s.Z)(c.filter((t=>!e.includes(t))))).filter((e=>c.includes(e)))}return l.forEach((e=>{o.push({indexName:e,query:t,params:{hitsPerPage:Math.ceil(50/l.length),attributesToRetrieve:["objectID","url","title","description"]}})})),await e.multipleQueries(o)})(t,U,d,te,i,se,le);if(qe(Pe+1),console.log("Total search queries counted is:",Pe),null!=l&&null!==(e=l.results)&&void 0!==e&&e.length){const e=[];l.results.forEach((t=>{let{hits:i}=t;z(i,e)})),ye(e),be.length||oe(!1)}else ye([]);Ae(!0)}else me(!1),Ae(!1)};return()=>clearTimeout(e)}),[U]),W&&(0,l.useEffect)((()=>{if(he&&fe.length>0){const e=he.current.querySelectorAll("a");e.length>0&&e.forEach((e=>{e.target="_top"}))}if(ve&&be.length>0){const e=ve.current.querySelectorAll("a");e.length>0&&e.forEach((e=>{e.target="_top"}))}}),[fe,be]),(0,n.tZ)(l.default.Fragment,null,(0,n.tZ)("div",{ref:ge,css:(0,n.iv)("position:fixed;top:",W?"0":"var(--spectrum-global-dimension-size-800)",";left:0;right:0;",re&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",c.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,n.tZ)("div",{css:(0,n.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",f,";@media screen and (max-width: ",c.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,n.tZ)("form",{css:D,className:"spectrum-Search",onSubmit:async e=>{e.preventDefault(),ae([]),me(!0),Ee(!0)}},(0,n.tZ)("div",{className:m()("spectrum-Textfield",{"is-focused":ce}),css:C},(0,n.tZ)(h.Magnify,{className:"spectrum-Textfield-icon"}),(0,n.tZ)("input",{ref:pe,value:U,onFocus:()=>{ue(!0)},onBlur:()=>{ue(!1)},onKeyDown:e=>{let{key:t}=e;null!=he&&he.current&&("ArrowDown"===t?he.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&he.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:async e=>{const t=e.target.value;X(t)},"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),de&&(0,n.tZ)(g.K,{css:(0,n.iv)("position:absolute;margin-right:var(--spectrum-global-dimension-size-100);margin-bottom:var(--spectrum-global-dimension-size-40);@media screen and (max-width: ",c.q9,"){margin-right:0;}&:focus{border:2px solid #007aff!important;border-radius:15%!important;}",""),tabIndex:"0",isQuiet:!0,"aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:()=>{X(""),we([]),oe(!1),Z(),pe.current.focus()}},(0,n.tZ)(h.Close,null))),(0,n.tZ)(o.J,{isOpen:ke,css:(0,n.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",f,";@media screen and (max-width: ",c.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},fe.length>0?(0,n.tZ)(r.v2,{ref:he,onKeyDown:e=>{let{key:t}=e;if(null!=he&&he.current&&he.current.contains(document.activeElement))if("ArrowDown"===t){const e=document.activeElement.nextElementSibling;e?e.focus():he.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){const e=document.activeElement.previousElementSibling;e?e.focus():he.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},fe.map((e=>{var t;const i=""+location.origin+e.url,s=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",l=Object.entries(e._highlightResult).filter((e=>e[1].matchedWords.length>0));let a="";var o,c,u,d,m,g,h,p,v,f,y,b,x,Z;l.length>1?(l.sort(((e,t)=>e[1].value.length>t[1].value.length?-1:1)),a=(null===(o=l[0])||void 0===o||null===(c=o[1])||void 0===c||null===(u=c.value)||void 0===u?void 0:u.length)>(null===(d=l[1])||void 0===d||null===(m=d[1])||void 0===m||null===(g=m.value)||void 0===g?void 0:g.length)?null===(h=l[0])||void 0===h||null===(p=h[1])||void 0===p?void 0:p.value:null===(v=l[1])||void 0===v||null===(f=v[1])||void 0===f?void 0:f.value):a=null!==(y=l[0])&&void 0!==y&&null!==(b=y[1])&&void 0!==b&&b.value?null===(x=l[0])||void 0===x||null===(Z=x[1])||void 0===Z?void 0:Z.value:"";return a=a.substring(0,250),(0,n.tZ)(r.ck,{key:e.objectID,href:i},(0,n.tZ)("div",{css:T},(0,n.tZ)("strong",{dangerouslySetInnerHTML:{__html:w(s)}}),(0,n.tZ)("div",{css:B},i),(0,n.tZ)("div",{dangerouslySetInnerHTML:{__html:w(a)}})))}))):(0,n.tZ)("div",{css:R},(0,n.tZ)("div",{css:O},(0,n.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:M},"No Results Found"),(0,n.tZ)("em",null,"Try another search term"))))),J&&(0,n.tZ)("div",{css:L},(0,n.tZ)(v._,{size:"L"})),re&&!J&&(0,n.tZ)("div",{css:(0,n.iv)("display:flex;max-width:",c.Av,";margin:auto;height:100%;@media screen and (max-width: ",c.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,n.tZ)("div",{css:(0,n.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);width:",c.dP,";","")},(0,n.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:H},"Filter by Products"),(0,n.tZ)("div",{css:(0,n.iv)("display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:30%;width:",c.dP,";@media screen and (max-width: ",c.q9,"){margin-bottom:0;}","")},xe.map(((e,t)=>(0,n.tZ)(p.X,{key:t,isSelected:e===y?$.includes("all"):$.some((t=>(0,u.getIndexesFromProduct)(e).includes(t))),value:e,onChange:t=>{ee(t?"All Products"===e?["all"]:[].concat((0,s.Z)($.filter((e=>"all"!==e))),(0,s.Z)((0,u.getIndexesFromProduct)(e))):"All Products"===e?$.filter((e=>"all"!==e)):$.filter((t=>!(0,u.getIndexesFromProduct)(e).includes(t)))),ae([]),Ee(!0)}},(0,n.tZ)("span",null,e))))),(0,n.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:_},"Filter by Keywords"),(0,n.tZ)("div",{css:(0,n.iv)("margin-bottom:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:50%;width:",c.dP,";@media screen and (max-width: ",c.q9,"){margin-bottom:0;}","")},Se.length>0?Se.map(((e,t)=>{const i=Object.keys(e)[0];return(0,n.tZ)(p.X,{key:t,isSelected:ne.includes(i),value:i,onChange:e=>{ae(e?e=>[].concat((0,s.Z)(e),[i]):ne.filter((e=>e!==i))),Ee(!0)}},(0,n.tZ)("span",{css:j},i))})):(0,n.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,n.tZ)("div",{css:I},be.length>0?(0,n.tZ)("div",{ref:ve,css:(0,n.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",c.q9,"){height:auto;overflow:inherit;}","")},be.map((e=>{var t;const i=""+location.origin+e.url,s=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",l=Object.entries(e._highlightResult).filter((e=>e[1].matchedWords.length>0));let r="";var o,c,u,d,m,g,h,p,v,f,y,b,x,Z;l.length>1?(l.sort(((e,t)=>e[1].value.length>t[1].value.length?-1:1)),r=(null===(o=l[0])||void 0===o||null===(c=o[1])||void 0===c||null===(u=c.value)||void 0===u?void 0:u.length)>(null===(d=l[1])||void 0===d||null===(m=d[1])||void 0===m||null===(g=m.value)||void 0===g?void 0:g.length)?null===(h=l[0])||void 0===h||null===(p=h[1])||void 0===p?void 0:p.value:null===(v=l[1])||void 0===v||null===(f=v[1])||void 0===f?void 0:f.value):r=null!==(y=l[0])&&void 0!==y&&null!==(b=y[1])&&void 0!==b&&b.value?null===(x=l[0])||void 0===x||null===(Z=x[1])||void 0===Z?void 0:Z.value:"";return r=r.substring(0,250),(0,n.tZ)("div",{css:q},(0,n.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:P},(0,n.tZ)(a.P,{to:i},(0,n.tZ)("span",{dangerouslySetInnerHTML:{__html:w(s)}}))),(0,n.tZ)("div",{css:E},(0,n.tZ)(a.P,{variant:"secondary",to:i},i)),(0,n.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:N,dangerouslySetInnerHTML:{__html:w(r)}}))}))):(0,n.tZ)("div",{css:(0,n.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",c.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:A},(0,n.tZ)("g",null,(0,n.tZ)("g",null,(0,n.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,n.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,n.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,n.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,n.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,n.tZ)("strong",null,U)),(0,n.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:k},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!re&&(0,n.tZ)("div",{css:(0,n.iv)("position:fixed;z-index:1;top:",W?"var(--spectrum-global-dimension-size-800)":"calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800))",";bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;","")}))}}}]);
//# sourceMappingURL=379b34f3-6f9fcefef073301560cc.js.map