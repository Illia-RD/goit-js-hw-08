function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function w(t){return c=t,f=setTimeout(O,e),l?y(t):a}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function O(){var t=p();if(j(t))return S(t);f=setTimeout(O,function(t){var n=e-(t-u);return s?v(n,i-(t-c)):n}(t))}function S(t){return f=void 0,g&&o?y(t):(o=r=void 0,a)}function T(){var t=p(),n=j(t);if(o=arguments,r=this,u=t,n){if(void 0===f)return w(u);if(s)return f=setTimeout(O,e),y(u)}return void 0===f&&(f=setTimeout(O,e)),a}return e=b(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:S(p())},T}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const y=document.querySelector(".feedback-form"),w={};y.addEventListener("submit",(function(t){t.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),t.currentTarget.reset()})),y.addEventListener("input",t(e)((function(t){w[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),window.addEventListener("load",(function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));for(const e in t)y[e].value=t[e],w[e]=t[e]}));
//# sourceMappingURL=03-feedback.c546a171.js.map
