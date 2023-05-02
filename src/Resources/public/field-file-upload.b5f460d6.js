(()=>{"use strict";function t(t,e){e?(t.classList.remove("d-block"),t.classList.add("d-none")):(t.classList.remove("d-none"),t.classList.add("d-block"))}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,l=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw l}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,l=void 0,l=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,n||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(o,"string"),"symbol"===e(l)?l:String(l)),r)}var o,l}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e){a(t,e),e.add(t)}function a(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function c(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,f(t,e,"get"))}function s(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function u(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,f(t,e,"set"),n),n}function f(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var h=function(t){document.querySelectorAll('.ea-fileupload input[type="file"]').forEach((function(t){new g(t)}))};window.addEventListener("DOMContentLoaded",h),document.addEventListener("ea.collection.item-added",h);var d=new WeakMap,y=new WeakSet,p=new WeakSet,v=new WeakSet,b=new WeakSet,m=new WeakSet,w=new WeakSet,g=o((function t(e){var n,i,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,w),l(this,m),l(this,b),l(this,v),l(this,p),l(this,y),r={writable:!0,value:void 0},a(n=this,i=d),i.set(n,r),this.field=e,u(this,d,this.field.closest(".ea-fileupload")),this.field.addEventListener("change",s(this,y,S).bind(this));var o=s(this,m,M).call(this);o&&o.addEventListener("click",s(this,p,E).bind(this))}));function S(){var t=this;if(0!==this.field.files.length){var e,i=1===this.field.files.length?this.field.files[0].name:this.field.files.length+" "+this.field.getAttribute("data-files-label"),r=0,o=n(this.field.files);try{for(o.s();!(e=o.n()).done;){r+=e.value.size}}catch(t){o.e(t)}finally{o.f()}s(this,b,T).call(this).innerHTML=i,s(this,m,M).call(this).style.display="block",s(this,w,L).call(this).childNodes.forEach((function(e){e.nodeType===Node.TEXT_NODE&&s(t,w,L).call(t).removeChild(e)})),s(this,w,L).call(this).prepend(s(this,v,k).call(this,r))}}function E(){var e=this,n=c(this,d).querySelector("input[type=checkbox].form-check-input"),i=c(this,d).querySelector(".fileupload-list");n&&(n.checked=!0,n.click()),this.field.value="",s(this,b,T).call(this).innerHTML="",t(s(this,m,M).call(this),!0),s(this,w,L).call(this).childNodes.forEach((function(t){t.nodeType===Node.TEXT_NODE&&s(e,w,L).call(e).removeChild(t)})),null!==i&&t(i,!0)}function k(t){var e=Math.trunc(Math.floor(Math.log(t)/Math.log(1024)));return Math.trunc(t/Math.pow(1024,e))+["B","K","M","G","T","P","E","Z","Y"][e]}function T(){return c(this,d).querySelector(".custom-file-label")}function M(){return c(this,d).querySelector(".ea-fileupload-delete-btn")}function L(){return c(this,d).querySelector(".input-group-text")}})();