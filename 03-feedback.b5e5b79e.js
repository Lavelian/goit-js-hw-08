var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var o,r,i,a,f,u,c=0,l=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),l?b(e):a}function w(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-c>=i}function j(){var e=g();if(w(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return m?d(n,i-(e-c)):n}(e))}function h(e){return f=void 0,y&&o?b(e):(o=r=void 0,a)}function O(){var e=g(),n=w(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(m)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,i=(m="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:h(g())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const y={},b=document.querySelector(".feedback-form"),S=document.querySelector(".input-form"),w=document.querySelector(".textarea-form");var j;b.addEventListener("input",t((function(e){e.target.classList.contains("input-form")?y.name=e.target.value:y.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),console.log(y.name),console.log(y.message),localStorage.clear(),b.reset()})),window.addEventListener("load",(j=function(){const e=localStorage.getItem("feedback-form-state");return JSON.parse(e)}(),console.log(localStorage),void(localStorage.getItem("feedback-form-state")&&(S.value=j.name||"",w.value=j.message||""))));
//# sourceMappingURL=03-feedback.b5e5b79e.js.map
