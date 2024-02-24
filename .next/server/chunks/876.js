"use strict";exports.id=876,exports.ids=[876],exports.modules={9224:(t,e,s)=>{s.d(e,{Z:()=>a});var i=s(3729),r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.322.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),a=(t,e)=>{let s=(0,i.forwardRef)(({color:s="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:h="",children:c,...l},d)=>(0,i.createElement)("svg",{ref:d,...r,width:a,height:a,stroke:s,strokeWidth:u?24*Number(o)/Number(a):o,className:["lucide",`lucide-${n(t)}`,h].join(" "),...l},[...e.map(([t,e])=>(0,i.createElement)(t,e)),...Array.isArray(c)?c:[c]]));return s.displayName=`${t}`,s}},9388:(t,e,s)=>{s.d(e,{Z:()=>i});/**
 * @license lucide-react v0.322.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(9224).Z)("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]])},9629:(t,e,s)=>{s.d(e,{Z:()=>i});/**
 * @license lucide-react v0.322.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(9224).Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},8120:(t,e,s)=>{s.d(e,{Z:()=>i});/**
 * @license lucide-react v0.322.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(9224).Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},8822:(t,e,s)=>{s.d(e,{Z:()=>i});/**
 * @license lucide-react v0.322.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(9224).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},8441:(t,e,s)=>{s.d(e,{j:()=>n});var i=s(57),r=s(8651),n=new class extends i.l{#t;#e;#s;constructor(){super(),this.#s=t=>{if(!r.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},1466:(t,e,s)=>{s.d(e,{V:()=>i});var i=function(){let t=[],e=0,s=t=>{t()},i=t=>{t()},r=t=>setTimeout(t,0),n=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{i(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{i=t},setScheduler:t=>{r=t}}}()},5658:(t,e,s)=>{s.d(e,{N:()=>n});var i=s(57),r=s(8651),n=new class extends i.l{#i;#e;#s;constructor(){super(),this.#i=!0,this.#s=t=>{if(!r.sk&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#i!==t&&(this.#i=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#i}}},8328:(t,e,s)=>{s.d(e,{S:()=>y});var i=s(8651),r=s(1466),n=s(256),a=class{#r;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#r=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.sk?1/0:3e5))}clearGcTimeout(){this.#r&&(clearTimeout(this.#r),this.#r=void 0)}},o=class extends a{#n;#a;#o;#u;#h;#c;#l;#d;constructor(t){super(),this.#d=!1,this.#l=t.defaultOptions,this.#f(t.options),this.#c=[],this.#o=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#n=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#n,this.scheduleGc()}get meta(){return this.options.meta}#f(t){this.options={...this.#l,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#c.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){let s=(0,i.oE)(this.state.data,t,this.options);return this.#p({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#p({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u;return this.#h?.cancel(t),e?e.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#n)}isActive(){return this.#c.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.#c.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,i.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.#c.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}onOnline(){let t=this.#c.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}addObserver(t){this.#c.includes(t)||(this.#c.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#c.includes(t)&&(this.#c=this.#c.filter(e=>e!==t),this.#c.length||(this.#h&&(this.#d?this.#h.cancel({revert:!0}):this.#h.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#c.length}invalidate(){this.state.isInvalidated||this.#p({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#h?.continueRetry(),this.#u}if(t&&this.#f(t),!this.options.queryFn){let t=this.#c.find(t=>t.options.queryFn);t&&this.#f(t.options)}let s=new AbortController,i={queryKey:this.queryKey,meta:this.meta},r=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#d=!0,s.signal)})};r(i);let a={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.#d=!1,this.options.persister)?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};r(a),this.options.behavior?.onFetch(a,this),this.#a=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#p({type:"fetch",meta:a.fetchOptions?.meta});let o=t=>{(0,n.DV)(t)&&t.silent||this.#p({type:"error",error:t}),(0,n.DV)(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#h=(0,n.Mz)({fn:a.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){o(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:o,onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode}),this.#u=this.#h.promise,this.#u}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:(0,n.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,n.DV)(s)&&s.revert&&this.#a)return{...this.#a,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),r.V.batch(()=>{this.#c.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}},u=s(57),h=class extends u.l{constructor(t={}){super(),this.config=t,this.#y=new Map}#y;build(t,e,s){let r=e.queryKey,n=e.queryHash??(0,i.Rm)(r,e),a=this.get(n);return a||(a=new o({cache:this,queryKey:r,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(r)}),this.add(a)),a}add(t){this.#y.has(t.queryHash)||(this.#y.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#y.get(t.queryHash);e&&(t.destroy(),e===t&&this.#y.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){r.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#y.get(t)}getAll(){return[...this.#y.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,i._x)(t,e)):e}notify(t){r.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){r.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){r.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},c=class extends a{#c;#l;#m;#h;constructor(t){super(),this.mutationId=t.mutationId,this.#l=t.defaultOptions,this.#m=t.mutationCache,this.#c=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#l,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#c.includes(t)||(this.#c.push(t),this.clearGcTimeout(),this.#m.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#c=this.#c.filter(e=>e!==t),this.scheduleGc(),this.#m.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#c.length||("pending"===this.state.status?this.scheduleGc():this.#m.remove(this))}continue(){return this.#h?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#p({type:"pending",variables:t}),await this.#m.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#p({type:"pending",context:e,variables:t})}let s=await (this.#h=(0,n.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#h.promise);return await this.#m.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#m.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#p({type:"success",data:s}),s}catch(e){try{throw await this.#m.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#m.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#p({type:"error",error:e})}}}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,n.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),r.V.batch(()=>{this.#c.forEach(e=>{e.onMutationUpdate(t)}),this.#m.notify({mutation:this,type:"updated",action:t})})}},l=class extends u.l{constructor(t={}){super(),this.config=t,this.#v=[],this.#b=0}#v;#b;#g;build(t,e,s){let i=new c({mutationCache:this,mutationId:++this.#b,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#v.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#v=this.#v.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){r.V.batch(()=>{this.#v.forEach(t=>{this.remove(t)})})}getAll(){return this.#v}find(t){let e={exact:!0,...t};return this.#v.find(t=>(0,i.X7)(e,t))}findAll(t={}){return this.#v.filter(e=>(0,i.X7)(t,e))}notify(t){r.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#g=(this.#g??Promise.resolve()).then(()=>{let t=this.#v.filter(t=>t.state.isPaused);return r.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(i.ZT)),Promise.resolve()))}).then(()=>{this.#g=void 0}),this.#g}},d=s(8441),f=s(5658);function p(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}var y=class{#w;#m;#l;#C;#O;#q;#S;#F;constructor(t={}){this.#w=t.queryCache||new h,this.#m=t.mutationCache||new l,this.#l=t.defaultOptions||{},this.#C=new Map,this.#O=new Map,this.#q=0}mount(){this.#q++,1===this.#q&&(this.#S=d.j.subscribe(()=>{d.j.isFocused()&&(this.resumePausedMutations(),this.#w.onFocus())}),this.#F=f.N.subscribe(()=>{f.N.isOnline()&&(this.resumePausedMutations(),this.#w.onOnline())}))}unmount(){this.#q--,0===this.#q&&(this.#S?.(),this.#S=void 0,this.#F?.(),this.#F=void 0)}isFetching(t){return this.#w.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#m.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#w.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return void 0!==e?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let r=this.defaultQueryOptions({queryKey:t}),n=this.#w.get(r.queryHash),a=n?.state.data,o=(0,i.SE)(e,a);if(void 0!==o)return this.#w.build(this,r).setData(o,{...s,manual:!0})}setQueriesData(t,e,s){return r.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#w.get(e.queryHash)?.state}removeQueries(t){let e=this.#w;r.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#w,i={type:"active",...t};return r.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(r.V.batch(()=>this.#w.findAll(t).map(t=>t.cancel(s)))).then(i.ZT).catch(i.ZT)}invalidateQueries(t={},e={}){return r.V.batch(()=>{if(this.#w.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(r.V.batch(()=>this.#w.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(i.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(i.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#w.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let r=async()=>{let s;let r=t.options,n=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},c=t.options.queryFn||(()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`))),l=async(e,s,r)=>{if(u)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:s,direction:r?"backward":"forward",meta:t.options.meta};h(n);let a=await c(n),{maxPages:o}=t.options,l=r?i.Ht:i.VX;return{pages:l(e.pages,a,o),pageParams:l(e.pageParams,s,o)}};if(n&&a.length){let t="backward"===n,e={pages:a,pageParams:o},i=(t?function(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}:p)(r,e);s=await l(e,i,t)}else{s=await l({pages:[],pageParams:[]},o[0]??r.initialPageParam);let t=e??a.length;for(let e=1;e<t;e++){let t=p(r,s);s=await l(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=r}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return this.#m.resumePausedMutations()}getQueryCache(){return this.#w}getMutationCache(){return this.#m}getDefaultOptions(){return this.#l}setDefaultOptions(t){this.#l=t}setQueryDefaults(t,e){this.#C.set((0,i.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#C.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#O.set((0,i.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#O.values()],s={};return e.forEach(e=>{(0,i.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#l.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,i.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),void 0===e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#l.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#w.clear(),this.#m.clear()}}},256:(t,e,s)=>{s.d(e,{DV:()=>h,Kw:()=>o,Mz:()=>c});var i=s(8441),r=s(5658),n=s(8651);function a(t){return Math.min(1e3*2**t,3e4)}function o(t){return(t??"online")!=="online"||r.N.isOnline()}var u=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof u}function c(t){let e,s,h,c=!1,l=0,d=!1,f=new Promise((t,e)=>{s=t,h=e}),p=()=>!i.j.isFocused()||"always"!==t.networkMode&&!r.N.isOnline(),y=i=>{d||(d=!0,t.onSuccess?.(i),e?.(),s(i))},m=s=>{d||(d=!0,t.onError?.(s),e?.(),h(s))},v=()=>new Promise(s=>{e=t=>{let e=d||!p();return e&&s(t),e},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),b=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(d)return;let s=t.retry??(n.sk?0:3),i=t.retryDelay??a,r="function"==typeof i?i(l,e):i,o=!0===s||"number"==typeof s&&l<s||"function"==typeof s&&s(l,e);if(c||!o){m(e);return}l++,t.onFail?.(l,e),(0,n._v)(r).then(()=>{if(p())return v()}).then(()=>{c?m(e):b()})})}};return o(t.networkMode)?b():v().then(b),{promise:f,cancel:e=>{d||(m(new u(e)),t.abort?.())},continue:()=>e?.()?f:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},57:(t,e,s)=>{s.d(e,{l:()=>i});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},8651:(t,e,s)=>{s.d(e,{Ht:()=>w,Kp:()=>o,PN:()=>a,Rm:()=>c,SE:()=>n,VS:()=>f,VX:()=>g,X7:()=>h,Ym:()=>l,ZT:()=>r,_v:()=>v,_x:()=>u,oE:()=>b,sk:()=>i,to:()=>d});var i=!0;function r(){}function n(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){let{type:s="all",exact:i,fetchStatus:r,predicate:n,queryKey:a,stale:o}=t;if(a){if(i){if(e.queryHash!==c(a,e.options))return!1}else if(!d(e.queryKey,a))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(void 0===r||r===e.state.fetchStatus)&&(!n||!!n(e))}function h(t,e){let{exact:s,status:i,predicate:r,mutationKey:n}=t;if(n){if(!e.options.mutationKey)return!1;if(s){if(l(e.options.mutationKey)!==l(n))return!1}else if(!d(e.options.mutationKey,n))return!1}return(!i||e.state.status===i)&&(!r||!!r(e))}function c(t,e){return(e?.queryKeyHashFn||l)(t)}function l(t){return JSON.stringify(t,(t,e)=>y(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(s=>!d(t[s],e[s]))}function f(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function p(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function y(t){if(!m(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!(m(s)&&s.hasOwnProperty("isPrototypeOf"))}function m(t){return"[object Object]"===Object.prototype.toString.call(t)}function v(t){return new Promise(e=>{setTimeout(e,t)})}function b(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?function t(e,s){if(e===s)return e;let i=p(e)&&p(s);if(i||y(e)&&y(s)){let r=i?e:Object.keys(e),n=r.length,a=i?s:Object.keys(s),o=a.length,u=i?[]:{},h=0;for(let n=0;n<o;n++){let o=i?n:a[n];!i&&void 0===e[o]&&void 0===s[o]&&r.includes(o)?(u[o]=void 0,h++):(u[o]=t(e[o],s[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return n===o&&h===n?e:u}return s}(t,e):e}function g(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function w(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}},6274:(t,e,s)=>{s.d(e,{NL:()=>a,aH:()=>o});var i=s(3729),r=s(5344),n=i.createContext(void 0),a=t=>{let e=i.useContext(n);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},o=({client:t,children:e})=>(i.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,r.jsx)(n.Provider,{value:t,children:e}))}};