function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var r=s.default(e,t,"get");return i.default(e,r)};var s=d(o("fExtF")),i=d(o("iaRLo"));function d(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){u.default(e,t),t.set(e,r)};var l,u=(l=o("7K24o"))&&l.__esModule?l:{default:l};var f=new WeakMap,p=new WeakMap;const h=new class{getCatBreeds(){const t=`${e(a)(this,f)}/breeds`;return fetch(t,{headers:{"x-api-key":e(a)(this,p)}}).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}getCatInfo(t){const r=`${e(a)(this,f)}/images/search?breed_ids=${t}`;return fetch(r,{headers:{"x-api-key":e(a)(this,p)}}).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}constructor(){e(c)(this,f,{writable:!0,value:"https://api.thecatapi.com/v1"}),e(c)(this,p,{writable:!0,value:"live_FvLmPFtXnijmlZ0r6e39oF7qg20pr4OXj0Nmd0OfwGUlDuQ7hlwT2VbLF7RRksIu"})}},v={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info"),catImage:document.querySelector(".cat-img-js")};function m(){v.error.classList.add("is-hidden"),v.catInfo.classList.add("is-hidden"),v.loader.classList.remove("is-hidden")}function g(){v.error.classList.add("is-hidden"),v.catInfo.classList.remove("is-hidden"),v.loader.classList.add("is-hidden")}function w(){v.loader.classList.add("is-hidden"),v.error.classList.remove("is-hidden")}v.error.classList.add("is-hidden"),h.getCatBreeds().then((e=>{m();const t=e.map((({id:e,name:t})=>`<option value="${e}">${t}</option>`)).join("");v.select.insertAdjacentHTML("beforeend",t),g()})).catch((()=>w())),v.select.addEventListener("change",(function(e){m();const t=e.currentTarget.value;h.getCatInfo(t).then((e=>{const{url:t}=e[0],{name:r,description:n,temperament:o}=e[0].breeds[0],a=`<img src="${t}" class="cat-img-js" alt="${r}" />\n        <div class="cat-div-js">\n        <h2 class="cat-head-js">${r}</h2>\n        <p class="cat-text-js">${n}</p>\n        <p class="cat-text-js"><span>Temperament: </span>${o}</p>\n        </div>`;v.catInfo.innerHTML=a,g()})).catch((()=>w()))}));
//# sourceMappingURL=index.887db1c5.js.map
