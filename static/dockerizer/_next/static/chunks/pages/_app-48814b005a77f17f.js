(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{82010:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(67294);let a=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,o=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:i},m=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),u=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:c=u,defaultTheme:m=n?"system":"light",attribute:d="data-theme",value:$,children:g,nonce:b})=>{let[w,S]=(0,r.useState)(()=>f(i,m)),[p,T]=(0,r.useState)(()=>f(i)),E=$?Object.values($):c,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let s=$?$[r]:r,o=t?y():null,i=document.documentElement;if("class"===d?(i.classList.remove(...E),s&&i.classList.add(s)):s?i.setAttribute(d,s):i.removeAttribute(d),l){let e=a.includes(m)?m:null,t=a.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),k=(0,r.useCallback)(e=>{S(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),_=(0,r.useCallback)(t=>{T(v(t)),"system"===w&&n&&!e&&C("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&k(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),(0,r.useEffect)(()=>{C(null!=e?e:w)},[e,w]);let x=(0,r.useMemo)(()=>({theme:w,setTheme:k,forcedTheme:e,resolvedTheme:"system"===w?p:w,themes:n?[...c,"system"]:c,systemTheme:n?p:void 0}),[w,k,e,p,n,c]);return r.createElement(o.Provider,{value:x},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:i,themes:c,defaultTheme:m,attribute:d,value:$,children:g,attrs:E,nonce:b}),g)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:u})=>{let d="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?a.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let s=c?c[e]:e,l=t?e+"|| ''":`'${s}'`,i="";return o&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||s?`c.add(${l})`:"null":s&&(i+=`d[s](n,${l})`),i},v=e?`!function(){${h}${y(e)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${d?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:v}})},()=>!0),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(43900)}])},43900:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(85893);n(69166);var a=n(82010);function s(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(a.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:(0,r.jsx)(t,{...n})})}},69166:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(12937)}),_N_E=e.O()}]);