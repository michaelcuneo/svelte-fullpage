function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,o){if(t){const r=c(t,e,n,o);return t[0](r)}}function c(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function u(t){return null==t?"":t}const d="undefined"!=typeof window;let f=d?()=>window.performance.now():()=>Date.now(),p=d?t=>requestAnimationFrame(t):t;const h=new Set;function m(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&p(m)}function g(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const k=new Set;let E,S=0;function D(t,e,n,o,r,i,l,s=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*i(t);a+=100*t+`%{${l(o,1-o)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,f=t.ownerDocument;k.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${r}ms 1 both`,S+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),S-=r,S||p(()=>{S||(k.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),k.clear())}))}function A(t){E=t}const F=[],I=[],j=[],B=[],T=Promise.resolve();let M=!1;function N(t){j.push(t)}let O=!1;const R=new Set;function P(){if(!O){O=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];A(e),Y(e.$$)}for(F.length=0;I.length;)I.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];R.has(e)||(R.add(e),e())}j.length=0}while(F.length);for(;B.length;)B.pop()();M=!1,O=!1,R.clear()}}function Y(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let q;function z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const L=new Set;let W;function U(t,e){t&&t.i&&(L.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),W.c.push(()=>{L.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const H={duration:0};function J(n,o,l,s){let c=o(n,l),a=s?0:1,u=null,d=null,g=null;function v(){g&&C(n,g)}function $(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(o){const{delay:i=0,duration:l=300,easing:s=e,tick:y=t,css:b}=c||H,w={start:f()+i,b:o};o||(w.group=W,W.r+=1),u?d=w:(b&&(v(),g=D(n,a,o,l,i,s,b)),o&&y(0,1),u=$(w,l),N(()=>z(n,o,"start")),function(t){let e;0===h.size&&p(m),new Promise(n=>{h.add(e={c:t,f:n})})}(t=>{if(d&&t>d.start&&(u=$(d,l),d=null,z(n,u.b,"start"),b&&(v(),g=D(n,a,u.b,u.duration,0,s,c.css))),u)if(t>=u.end)y(a=u.b,1-a),z(n,u.b,"end"),d||(u.b?v():--u.group.r||r(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*s(e/u.duration),y(a,1-a)}return!(!u&&!d)}))}return{run(t){i(c)?(q||(q=Promise.resolve(),q.then(()=>{q=null})),q).then(()=>{c=c(),y(t)}):y(t)},end(){v(),u=d=null}}}function K(t,e){-1===t.$$.dirty[0]&&(F.push(t),M||(M=!0,T.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,l,s,c,a,u,d=[-1]){const f=E;A(e);const p=l.props||{},h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:d};let m=!1;if(h.ctx=s?s(e,p,(t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),m&&K(e,t)),n}):[],h.update(),m=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach($)}else h.fragment&&h.fragment.c();l.intro&&U(e.$$.fragment),function(t,e,o){const{fragment:l,on_mount:s,on_destroy:c,after_update:a}=t.$$;l&&l.m(e,o),N(()=>{const e=s.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(N)}(e,l.target,l.anchor),P()}A(f)}class V{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function X(t,e,n){const o=t.slice();return o[26]=e[n],o[28]=n,o}function Z(t){let e,n,o,r,i;function l(...e){return t[21](t[28],...e)}return{c(){e=y("li"),n=y("button"),r=w(),_(n,"class",o="svelte-fp-indicator-list-item-btn "+(t[0]===t[28]?"svelte-fp-active":"")+" svelte-1lli8rw"),_(e,"class","svelte-fp-indicator-list-item svelte-1lli8rw")},m(t,o,s){v(t,e,o),g(e,n),g(e,r),s&&i(),i=x(n,"click",l)},p(e,r){t=e,1&r&&o!==(o="svelte-fp-indicator-list-item-btn "+(t[0]===t[28]?"svelte-fp-active":"")+" svelte-1lli8rw")&&_(n,"class",o)},d(t){t&&$(e),i()}}}function tt(t){let e,n,o,i,l,d,f,p;const h=t[19].default,m=s(h,t,t[18],null);let b=t[1],k=[];for(let e=0;e<b.length;e+=1)k[e]=Z(X(t,b,e));return{c(){e=y("div"),n=y("div"),m&&m.c(),o=w(),i=y("div"),l=y("ul");for(let t=0;t<k.length;t+=1)k[t].c();_(l,"class","svelte-fp-indicator-list svelte-1lli8rw"),_(i,"class","svelte-fp-indicator svelte-1lli8rw"),_(n,"class","svelte-fp-container svelte-1lli8rw"),_(e,"class",d=u(t[3])+" svelte-1lli8rw"),_(e,"draggable",t[2])},m(s,c,a){v(s,e,c),g(e,n),m&&m.m(n,null),g(n,o),g(n,i),g(i,l);for(let t=0;t<k.length;t+=1)k[t].m(l,null);f=!0,a&&r(p),p=[x(window,"keydown",t[20]),x(e,"wheel",t[22]),x(e,"touchmove",t[23]),x(e,"dragstart",t[24]),x(e,"dragend",t[25])]},p(t,[n]){if(m&&m.p&&262144&n&&m.p(c(h,t,t[18],null),a(h,t[18],n,null)),3&n){let e;for(b=t[1],e=0;e<b.length;e+=1){const o=X(t,b,e);k[e]?k[e].p(o,n):(k[e]=Z(o),k[e].c(),k[e].m(l,null))}for(;e<k.length;e+=1)k[e].d(1);k.length=b.length}(!f||4&n)&&_(e,"draggable",t[2])},i(t){f||(U(m,t),f=!0)},o(t){G(m,t),f=!1},d(t){t&&$(e),m&&m.d(t),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),r(p)}}}function et(t,e,n){let o,{class:r=""}=e,{activeSection:i=0}=e,{sections:l=[]}=e,{animationDuration:s=750}=e,{arrows:c=!1}=e,{drag:a=!1}=e,u=`${r} svelte-fp-wrapper`,d=0,f=!0;const p=t=>{let e=t.deltaY,n=(new Date).getTime();s<n-d&&(d=n,e<0?h():e>0&&m())},h=async()=>{i>0&&n(0,i--,i)},m=async()=>{i<l.length-1&&n(0,i++,i)},g=t=>{if(c)switch(t.key){case"ArrowDown":m();break;case"ArrowUp":h()}},v=t=>(o=t.screenY,!1),$=t=>{t.preventDefault();const e=t.screenY;console.log(`Start:${o}, End:${e}, vertical difference:${o-e}`),o-e>0?m():o-e<0&&h()},y=t=>{t.preventDefault(),console.log(t)};let{$$slots:b={},$$scope:w}=e;return t.$set=t=>{"class"in t&&n(9,r=t.class),"activeSection"in t&&n(0,i=t.activeSection),"sections"in t&&n(1,l=t.sections),"animationDuration"in t&&n(10,s=t.animationDuration),"arrows"in t&&n(11,c=t.arrows),"drag"in t&&n(2,a=t.drag),"$$scope"in t&&n(18,w=t.$$scope)},[i,l,a,u,p,g,v,$,y,r,s,c,o,d,f,()=>{f=!f},h,m,w,b,t=>g(t),t=>n(0,i=t),t=>p(t),t=>y(t),t=>v(t),t=>$(t)]}class nt extends V{constructor(t){var e;super(),document.getElementById("svelte-1lli8rw-style")||((e=y("style")).id="svelte-1lli8rw-style",e.textContent=".svelte-fp-wrapper.svelte-1lli8rw{height:100vh;overflow:hidden;left:0;right:0;top:0;bottom:0}.svelte-fp-container.svelte-1lli8rw{height:inherit;width:inherit;position:relative}.svelte-fp-indicator.svelte-1lli8rw{height:inherit;width:5rem;overflow:hidden;position:absolute;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list.svelte-1lli8rw{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-1lli8rw{margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-1lli8rw{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-1lli8rw{background-color:#767676}@media only screen and (max-width: 600px){.svelte-fp-indicator.svelte-1lli8rw{display:none}}",g(document.head,e)),Q(this,t,et,tt,l,{class:9,activeSection:0,sections:1,animationDuration:10,arrows:11,drag:2})}}function ot(t){const e=t-1;return e*e*e+1}function rt(t,{delay:e=0,duration:n=400,easing:o=ot}){const r=getComputedStyle(t),i=+r.opacity,l=parseFloat(r.height),s=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),a=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*i};`+`height: ${t*l}px;`+`padding-top: ${t*s}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*a}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*d}px;`+`border-bottom-width: ${t*f}px;`}}function it(e){let n,o,r,i;const l=e[7].default,d=s(l,e,e[6],null),f=d||{c:t,m:t,d:t};return{c(){n=y("section"),f&&f.c(),_(n,"class",o=u(e[3])+" svelte-3ygkbx")},m(t,e){v(t,n,e),f&&f.m(n,null),i=!0},p(t,e){d&&d.p&&64&e&&d.p(c(l,t,t[6],null),a(l,t[6],e,null)),(!i||8&e&&o!==(o=u(t[3])+" svelte-3ygkbx"))&&_(n,"class",o)},i(t){i||(U(f,t),N(()=>{r||(r=J(n,rt,e[2],!0)),r.run(1)}),i=!0)},o(t){G(f,t),r||(r=J(n,rt,e[2],!1)),r.run(0),i=!1},d(t){t&&$(n),f&&f.d(t),t&&r&&r.end()}}}function lt(t){let e,n,o=t[0]===t[1]&&it(t);return{c(){o&&o.c(),e=b("")},m(t,r){o&&o.m(t,r),v(t,e,r),n=!0},p(t,[n]){t[0]===t[1]?o?(o.p(t,n),U(o,1)):(o=it(t),o.c(),U(o,1),o.m(e.parentNode,e)):o&&(W={r:0,c:[],p:W},G(o,1,1,()=>{o=null}),W.r||r(W.c),W=W.p)},i(t){n||(U(o),n=!0)},o(t){G(o),n=!1},d(t){o&&o.d(t),t&&$(e)}}}function st(t,e,n){let{class:o=""}=e,{sectionId:r}=e,{activeSection:i}=e,{center:l=!1}=e,{transition:s={duration:750}}=e;r=parseInt(r);let c=`${o} svelte-fp-section`;l&&(c=`${c} svelte-fp-flexbox-center`);let{$$slots:a={},$$scope:u}=e;return t.$set=t=>{"class"in t&&n(4,o=t.class),"sectionId"in t&&n(0,r=t.sectionId),"activeSection"in t&&n(1,i=t.activeSection),"center"in t&&n(5,l=t.center),"transition"in t&&n(2,s=t.transition),"$$scope"in t&&n(6,u=t.$$scope)},[r,i,s,c,o,l,u,a]}class ct extends V{constructor(t){var e;super(),document.getElementById("svelte-3ygkbx-style")||((e=y("style")).id="svelte-3ygkbx-style",e.textContent="section.svelte-3ygkbx{height:inherit;position:relative}slot.svelte-3ygkbx{position:absolute}.svelte-fp-flexbox-center.svelte-3ygkbx{display:flex;justify-content:center;align-items:center}",g(document.head,e)),Q(this,t,st,lt,l,{class:4,sectionId:0,activeSection:1,center:5,transition:2})}}export{nt as Fullpage,ct as FullpageSection};
