import{r as c,e as f,b as d}from"./runtime.FCCJB71a.js";import{l as u}from"./input.RGHUdfdt.js";function m(o,t,n){var l=()=>{e=!0,clearTimeout(r),r=setTimeout(s,100),n(window.scrollY)};addEventListener("scroll",l,{passive:!0});var e=!1,r,s=()=>{e=!1},i=!0;c(()=>{var a=t();i?i=!1:!e&&a!=null&&(e=!0,clearTimeout(r),scrollTo(window.scrollX,a),r=setTimeout(s,100))}),f(l),d(()=>{removeEventListener("scroll",l)})}function _(o,t){u(window,["resize"],()=>t(window[o]))}export{_ as a,m as b};
