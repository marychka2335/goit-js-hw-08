!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(O,t),s?y(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?y(e):(i=r=void 0,u)}function T(){var e=p(),n=h(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var S=document.querySelector(".feedback-form"),h=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]'),w=getEmptyFeedBackInfo,T="feedback-form-state";S.addEventListener("input",e(t)((function(e){w["".concat(e.target.name)]=e.target.value,localStorage.setItem(T,JSON.stringify(w))}),500)),S.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.value||""===O.value)return alert("Please fill an empty field");console.log({email:h.value,message:O.value});localStorage.removeItem(T)}));try{var x=JSON.parse(localStorage.getItem(T));x&&(h.value=x.email?x.email:"",O.value=x.message?x.message:"")}catch(e){console.log(e.message)}}();
//# sourceMappingURL=03-feedback.2c4edbe4.js.map
