import{a as s}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();s.defaults.headers.common["x-api-key"]="live_SpY3U6UyCgy2bjzR7DbU0oLAhvNCZywFRPbwHdfvxbdcdP5NnP0R6vdYHdS1yx2N";async function a(){const t="https://api.thecatapi.com/v1/breeds";return await s.get(t).then(r=>{if(!r.data)throw new Error;return r.data})}async function l(t){const r="https://api.thecatapi.com/v1/images",i="search?breed_ids";return await s.get(`${r}/${i}=${t}`).then(n=>{if(!n.data)throw new Error;return n.data})}a().then(t=>console.log(t)).catch(t=>console.log(t));l("aege").then(t=>console.log(t)).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers.js.map
