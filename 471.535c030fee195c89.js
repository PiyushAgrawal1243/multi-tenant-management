(self.webpackChunkmulti_tenant_management=self.webpackChunkmulti_tenant_management||[]).push([[471,529],{9751:(j,E,n)=>{n.d(E,{y:()=>H});var u=n(930),s=n(727),_=n(8822),p=n(9635),y=n(2416),x=n(576),T=n(2806);let H=(()=>{class w{constructor(D){D&&(this._subscribe=D)}lift(D){const U=new w;return U.source=this,U.operator=D,U}subscribe(D,U,J){const B=function g(w){return w&&w instanceof u.Lv||function v(w){return w&&(0,x.m)(w.next)&&(0,x.m)(w.error)&&(0,x.m)(w.complete)}(w)&&(0,s.Nn)(w)}(D)?D:new u.Hp(D,U,J);return(0,T.x)(()=>{const{operator:N,source:Z}=this;B.add(N?N.call(B,Z):Z?this._subscribe(B):this._trySubscribe(B))}),B}_trySubscribe(D){try{return this._subscribe(D)}catch(U){D.error(U)}}forEach(D,U){return new(U=C(U))((J,B)=>{const N=new u.Hp({next:Z=>{try{D(Z)}catch(te){B(te),N.unsubscribe()}},error:B,complete:J});this.subscribe(N)})}_subscribe(D){var U;return null===(U=this.source)||void 0===U?void 0:U.subscribe(D)}[_.L](){return this}pipe(...D){return(0,p.U)(D)(this)}toPromise(D){return new(D=C(D))((U,J)=>{let B;this.subscribe(N=>B=N,N=>J(N),()=>U(B))})}}return w.create=W=>new w(W),w})();function C(w){var W;return null!==(W=w??y.v.Promise)&&void 0!==W?W:Promise}},930:(j,E,n)=>{n.d(E,{Hp:()=>J,Lv:()=>w});var u=n(576),s=n(727),_=n(2416),p=n(7849),y=n(5032);const x=C("C",void 0,void 0);function C(b,h,M){return{kind:b,value:h,error:M}}var v=n(3410),g=n(2806);class w extends s.w0{constructor(h){super(),this.isStopped=!1,h?(this.destination=h,(0,s.Nn)(h)&&h.add(this)):this.destination=te}static create(h,M,z){return new J(h,M,z)}next(h){this.isStopped?Z(function H(b){return C("N",b,void 0)}(h),this):this._next(h)}error(h){this.isStopped?Z(function T(b){return C("E",void 0,b)}(h),this):(this.isStopped=!0,this._error(h))}complete(){this.isStopped?Z(x,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(h){this.destination.next(h)}_error(h){try{this.destination.error(h)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const W=Function.prototype.bind;function D(b,h){return W.call(b,h)}class U{constructor(h){this.partialObserver=h}next(h){const{partialObserver:M}=this;if(M.next)try{M.next(h)}catch(z){B(z)}}error(h){const{partialObserver:M}=this;if(M.error)try{M.error(h)}catch(z){B(z)}else B(h)}complete(){const{partialObserver:h}=this;if(h.complete)try{h.complete()}catch(M){B(M)}}}class J extends w{constructor(h,M,z){let P;if(super(),(0,u.m)(h)||!h)P={next:h??void 0,error:M??void 0,complete:z??void 0};else{let O;this&&_.v.useDeprecatedNextContext?(O=Object.create(h),O.unsubscribe=()=>this.unsubscribe(),P={next:h.next&&D(h.next,O),error:h.error&&D(h.error,O),complete:h.complete&&D(h.complete,O)}):P=h}this.destination=new U(P)}}function B(b){_.v.useDeprecatedSynchronousErrorHandling?(0,g.O)(b):(0,p.h)(b)}function Z(b,h){const{onStoppedNotification:M}=_.v;M&&v.z.setTimeout(()=>M(b,h))}const te={closed:!0,next:y.Z,error:function N(b){throw b},complete:y.Z}},727:(j,E,n)=>{n.d(E,{Lc:()=>x,w0:()=>y,Nn:()=>T});var u=n(576);const _=(0,n(3888).d)(C=>function(g){C(this),this.message=g?`${g.length} errors occurred during unsubscription:\n${g.map((w,W)=>`${W+1}) ${w.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=g});var p=n(8737);class y{constructor(v){this.initialTeardown=v,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let v;if(!this.closed){this.closed=!0;const{_parentage:g}=this;if(g)if(this._parentage=null,Array.isArray(g))for(const D of g)D.remove(this);else g.remove(this);const{initialTeardown:w}=this;if((0,u.m)(w))try{w()}catch(D){v=D instanceof _?D.errors:[D]}const{_finalizers:W}=this;if(W){this._finalizers=null;for(const D of W)try{H(D)}catch(U){v=v??[],U instanceof _?v=[...v,...U.errors]:v.push(U)}}if(v)throw new _(v)}}add(v){var g;if(v&&v!==this)if(this.closed)H(v);else{if(v instanceof y){if(v.closed||v._hasParent(this))return;v._addParent(this)}(this._finalizers=null!==(g=this._finalizers)&&void 0!==g?g:[]).push(v)}}_hasParent(v){const{_parentage:g}=this;return g===v||Array.isArray(g)&&g.includes(v)}_addParent(v){const{_parentage:g}=this;this._parentage=Array.isArray(g)?(g.push(v),g):g?[g,v]:v}_removeParent(v){const{_parentage:g}=this;g===v?this._parentage=null:Array.isArray(g)&&(0,p.P)(g,v)}remove(v){const{_finalizers:g}=this;g&&(0,p.P)(g,v),v instanceof y&&v._removeParent(this)}}y.EMPTY=(()=>{const C=new y;return C.closed=!0,C})();const x=y.EMPTY;function T(C){return C instanceof y||C&&"closed"in C&&(0,u.m)(C.remove)&&(0,u.m)(C.add)&&(0,u.m)(C.unsubscribe)}function H(C){(0,u.m)(C)?C():C.unsubscribe()}},2416:(j,E,n)=>{n.d(E,{v:()=>u});const u={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},2076:(j,E,n)=>{n.d(E,{D:()=>z});var u=n(8421),s=n(9672),_=n(4482),p=n(5403);function y(P,O=0){return(0,_.e)((I,k)=>{I.subscribe((0,p.x)(k,ee=>(0,s.f)(k,P,()=>k.next(ee),O),()=>(0,s.f)(k,P,()=>k.complete(),O),ee=>(0,s.f)(k,P,()=>k.error(ee),O)))})}function x(P,O=0){return(0,_.e)((I,k)=>{k.add(P.schedule(()=>I.subscribe(k),O))})}var C=n(9751),g=n(2202),w=n(576);function D(P,O){if(!P)throw new Error("Iterable cannot be null");return new C.y(I=>{(0,s.f)(I,O,()=>{const k=P[Symbol.asyncIterator]();(0,s.f)(I,O,()=>{k.next().then(ee=>{ee.done?I.complete():I.next(ee.value)})},0,!0)})})}var U=n(3670),J=n(8239),B=n(1144),N=n(6495),Z=n(2206),te=n(4532),b=n(3260);function z(P,O){return O?function M(P,O){if(null!=P){if((0,U.c)(P))return function T(P,O){return(0,u.Xf)(P).pipe(x(O),y(O))}(P,O);if((0,B.z)(P))return function v(P,O){return new C.y(I=>{let k=0;return O.schedule(function(){k===P.length?I.complete():(I.next(P[k++]),I.closed||this.schedule())})})}(P,O);if((0,J.t)(P))return function H(P,O){return(0,u.Xf)(P).pipe(x(O),y(O))}(P,O);if((0,Z.D)(P))return D(P,O);if((0,N.T)(P))return function W(P,O){return new C.y(I=>{let k;return(0,s.f)(I,O,()=>{k=P[g.h](),(0,s.f)(I,O,()=>{let ee,ae;try{({value:ee,done:ae}=k.next())}catch(ue){return void I.error(ue)}ae?I.complete():I.next(ee)},0,!0)}),()=>(0,w.m)(k?.return)&&k.return()})}(P,O);if((0,b.L)(P))return function h(P,O){return D((0,b.Q)(P),O)}(P,O)}throw(0,te.z)(P)}(P,O):(0,u.Xf)(P)}},8421:(j,E,n)=>{n.d(E,{Xf:()=>W});var u=n(655),s=n(1144),_=n(8239),p=n(9751),y=n(3670),x=n(2206),T=n(4532),H=n(6495),C=n(3260),v=n(576),g=n(7849),w=n(8822);function W(b){if(b instanceof p.y)return b;if(null!=b){if((0,y.c)(b))return function D(b){return new p.y(h=>{const M=b[w.L]();if((0,v.m)(M.subscribe))return M.subscribe(h);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(b);if((0,s.z)(b))return function U(b){return new p.y(h=>{for(let M=0;M<b.length&&!h.closed;M++)h.next(b[M]);h.complete()})}(b);if((0,_.t)(b))return function J(b){return new p.y(h=>{b.then(M=>{h.closed||(h.next(M),h.complete())},M=>h.error(M)).then(null,g.h)})}(b);if((0,x.D)(b))return N(b);if((0,H.T)(b))return function B(b){return new p.y(h=>{for(const M of b)if(h.next(M),h.closed)return;h.complete()})}(b);if((0,C.L)(b))return function Z(b){return N((0,C.Q)(b))}(b)}throw(0,T.z)(b)}function N(b){return new p.y(h=>{(function te(b,h){var M,z,P,O;return(0,u.mG)(this,void 0,void 0,function*(){try{for(M=(0,u.KL)(b);!(z=yield M.next()).done;)if(h.next(z.value),h.closed)return}catch(I){P={error:I}}finally{try{z&&!z.done&&(O=M.return)&&(yield O.call(M))}finally{if(P)throw P.error}}h.complete()})})(b,h).catch(M=>h.error(M))})}},9646:(j,E,n)=>{n.d(E,{of:()=>_});var u=n(3269),s=n(2076);function _(...p){const y=(0,u.yG)(p);return(0,s.D)(p,y)}},5403:(j,E,n)=>{n.d(E,{x:()=>s});var u=n(930);function s(p,y,x,T,H){return new _(p,y,x,T,H)}class _ extends u.Lv{constructor(y,x,T,H,C,v){super(y),this.onFinalize=C,this.shouldUnsubscribe=v,this._next=x?function(g){try{x(g)}catch(w){y.error(w)}}:super._next,this._error=H?function(g){try{H(g)}catch(w){y.error(w)}finally{this.unsubscribe()}}:super._error,this._complete=T?function(){try{T()}catch(g){y.error(g)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var y;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:x}=this;super.unsubscribe(),!x&&(null===(y=this.onFinalize)||void 0===y||y.call(this))}}}},4351:(j,E,n)=>{n.d(E,{b:()=>_});var u=n(5577),s=n(576);function _(p,y){return(0,s.m)(y)?(0,u.z)(p,y,1):(0,u.z)(p,1)}},9300:(j,E,n)=>{n.d(E,{h:()=>_});var u=n(4482),s=n(5403);function _(p,y){return(0,u.e)((x,T)=>{let H=0;x.subscribe((0,s.x)(T,C=>p.call(y,C,H++)&&T.next(C)))})}},4004:(j,E,n)=>{n.d(E,{U:()=>_});var u=n(4482),s=n(5403);function _(p,y){return(0,u.e)((x,T)=>{let H=0;x.subscribe((0,s.x)(T,C=>{T.next(p.call(y,C,H++))}))})}},5577:(j,E,n)=>{n.d(E,{z:()=>H});var u=n(4004),s=n(8421),_=n(4482),p=n(9672),y=n(5403),T=n(576);function H(C,v,g=1/0){return(0,T.m)(v)?H((w,W)=>(0,u.U)((D,U)=>v(w,D,W,U))((0,s.Xf)(C(w,W))),g):("number"==typeof v&&(g=v),(0,_.e)((w,W)=>function x(C,v,g,w,W,D,U,J){const B=[];let N=0,Z=0,te=!1;const b=()=>{te&&!B.length&&!N&&v.complete()},h=z=>N<w?M(z):B.push(z),M=z=>{D&&v.next(z),N++;let P=!1;(0,s.Xf)(g(z,Z++)).subscribe((0,y.x)(v,O=>{W?.(O),D?h(O):v.next(O)},()=>{P=!0},void 0,()=>{if(P)try{for(N--;B.length&&N<w;){const O=B.shift();U?(0,p.f)(v,U,()=>M(O)):M(O)}b()}catch(O){v.error(O)}}))};return C.subscribe((0,y.x)(v,h,()=>{te=!0,b()})),()=>{J?.()}}(w,W,C,g)))}},3410:(j,E,n)=>{n.d(E,{z:()=>u});const u={setTimeout(s,_,...p){const{delegate:y}=u;return y?.setTimeout?y.setTimeout(s,_,...p):setTimeout(s,_,...p)},clearTimeout(s){const{delegate:_}=u;return(_?.clearTimeout||clearTimeout)(s)},delegate:void 0}},2202:(j,E,n)=>{n.d(E,{h:()=>s});const s=function u(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(j,E,n)=>{n.d(E,{L:()=>u});const u="function"==typeof Symbol&&Symbol.observable||"@@observable"},3269:(j,E,n)=>{n.d(E,{_6:()=>x,jO:()=>p,yG:()=>y});var u=n(576),s=n(3532);function _(T){return T[T.length-1]}function p(T){return(0,u.m)(_(T))?T.pop():void 0}function y(T){return(0,s.K)(_(T))?T.pop():void 0}function x(T,H){return"number"==typeof _(T)?T.pop():H}},8737:(j,E,n)=>{function u(s,_){if(s){const p=s.indexOf(_);0<=p&&s.splice(p,1)}}n.d(E,{P:()=>u})},3888:(j,E,n)=>{function u(s){const p=s(y=>{Error.call(y),y.stack=(new Error).stack});return p.prototype=Object.create(Error.prototype),p.prototype.constructor=p,p}n.d(E,{d:()=>u})},2806:(j,E,n)=>{n.d(E,{O:()=>p,x:()=>_});var u=n(2416);let s=null;function _(y){if(u.v.useDeprecatedSynchronousErrorHandling){const x=!s;if(x&&(s={errorThrown:!1,error:null}),y(),x){const{errorThrown:T,error:H}=s;if(s=null,T)throw H}}else y()}function p(y){u.v.useDeprecatedSynchronousErrorHandling&&s&&(s.errorThrown=!0,s.error=y)}},9672:(j,E,n)=>{function u(s,_,p,y=0,x=!1){const T=_.schedule(function(){p(),x?s.add(this.schedule(null,y)):this.unsubscribe()},y);if(s.add(T),!x)return T}n.d(E,{f:()=>u})},4671:(j,E,n)=>{function u(s){return s}n.d(E,{y:()=>u})},1144:(j,E,n)=>{n.d(E,{z:()=>u});const u=s=>s&&"number"==typeof s.length&&"function"!=typeof s},2206:(j,E,n)=>{n.d(E,{D:()=>s});var u=n(576);function s(_){return Symbol.asyncIterator&&(0,u.m)(_?.[Symbol.asyncIterator])}},576:(j,E,n)=>{function u(s){return"function"==typeof s}n.d(E,{m:()=>u})},3670:(j,E,n)=>{n.d(E,{c:()=>_});var u=n(8822),s=n(576);function _(p){return(0,s.m)(p[u.L])}},6495:(j,E,n)=>{n.d(E,{T:()=>_});var u=n(2202),s=n(576);function _(p){return(0,s.m)(p?.[u.h])}},8239:(j,E,n)=>{n.d(E,{t:()=>s});var u=n(576);function s(_){return(0,u.m)(_?.then)}},3260:(j,E,n)=>{n.d(E,{L:()=>p,Q:()=>_});var u=n(655),s=n(576);function _(y){return(0,u.FC)(this,arguments,function*(){const T=y.getReader();try{for(;;){const{value:H,done:C}=yield(0,u.qq)(T.read());if(C)return yield(0,u.qq)(void 0);yield yield(0,u.qq)(H)}}finally{T.releaseLock()}})}function p(y){return(0,s.m)(y?.getReader)}},3532:(j,E,n)=>{n.d(E,{K:()=>s});var u=n(576);function s(_){return _&&(0,u.m)(_.schedule)}},4482:(j,E,n)=>{n.d(E,{A:()=>s,e:()=>_});var u=n(576);function s(p){return(0,u.m)(p?.lift)}function _(p){return y=>{if(s(y))return y.lift(function(x){try{return p(x,this)}catch(T){this.error(T)}});throw new TypeError("Unable to lift unknown Observable type")}}},5032:(j,E,n)=>{function u(){}n.d(E,{Z:()=>u})},9635:(j,E,n)=>{n.d(E,{U:()=>_,z:()=>s});var u=n(4671);function s(...p){return _(p)}function _(p){return 0===p.length?u.y:1===p.length?p[0]:function(x){return p.reduce((T,H)=>H(T),x)}}},7849:(j,E,n)=>{n.d(E,{h:()=>_});var u=n(2416),s=n(3410);function _(p){s.z.setTimeout(()=>{const{onUnhandledError:y}=u.v;if(!y)throw p;y(p)})}},4532:(j,E,n)=>{function u(s){return new TypeError(`You provided ${null!==s&&"object"==typeof s?"an invalid object":`'${s}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}n.d(E,{z:()=>u})},655:(j,E,n)=>{function w(r,i,a,c){return new(a||(a=Promise))(function(f,S){function K(X){try{A(c.next(X))}catch(Y){S(Y)}}function ne(X){try{A(c.throw(X))}catch(Y){S(Y)}}function A(X){X.done?f(X.value):function m(f){return f instanceof a?f:new a(function(S){S(f)})}(X.value).then(K,ne)}A((c=c.apply(r,i||[])).next())})}function b(r){return this instanceof b?(this.v=r,this):new b(r)}function h(r,i,a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m,c=a.apply(r,i||[]),f=[];return m={},S("next"),S("throw"),S("return"),m[Symbol.asyncIterator]=function(){return this},m;function S($){c[$]&&(m[$]=function(se){return new Promise(function(ce,ie){f.push([$,se,ce,ie])>1||K($,se)})})}function K($,se){try{!function ne($){$.value instanceof b?Promise.resolve($.value.v).then(A,X):Y(f[0][2],$)}(c[$](se))}catch(ce){Y(f[0][3],ce)}}function A($){K("next",$)}function X($){K("throw",$)}function Y($,se){$(se),f.shift(),f.length&&K(f[0][0],f[0][1])}}function z(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,i=r[Symbol.asyncIterator];return i?i.call(r):(r=function J(r){var i="function"==typeof Symbol&&Symbol.iterator,a=i&&r[i],c=0;if(a)return a.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&c>=r.length&&(r=void 0),{value:r&&r[c++],done:!r}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}(r),a={},c("next"),c("throw"),c("return"),a[Symbol.asyncIterator]=function(){return this},a);function c(f){a[f]=r[f]&&function(S){return new Promise(function(K,ne){!function m(f,S,K,ne){Promise.resolve(ne).then(function(A){f({value:A,done:K})},S)}(K,ne,(S=r[f](S)).done,S.value)})}}}n.d(E,{FC:()=>h,KL:()=>z,mG:()=>w,qq:()=>b})},529:(j,E,n)=>{n.r(E),n.d(E,{HTTP_INTERCEPTORS:()=>a,HttpBackend:()=>C,HttpClient:()=>r,HttpClientJsonpModule:()=>we,HttpClientModule:()=>Te,HttpClientXsrfModule:()=>be,HttpContext:()=>te,HttpContextToken:()=>Z,HttpErrorResponse:()=>ue,HttpEventType:()=>I,HttpHandler:()=>H,HttpHeaderResponse:()=>ee,HttpHeaders:()=>v,HttpParams:()=>N,HttpRequest:()=>O,HttpResponse:()=>ae,HttpResponseBase:()=>k,HttpUrlEncodingCodec:()=>w,HttpXhrBackend:()=>ie,HttpXsrfTokenExtractor:()=>me,JsonpClientBackend:()=>Y,JsonpInterceptor:()=>$,XhrFactory:()=>De,\u0275HttpInterceptingHandler:()=>ve});var u=n(8811),s=n(5480),_=n(9646),p=n(9751),y=n(4351),x=n(9300),T=n(4004);class H{}class C{}class v{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const d=e.indexOf(":");if(d>0){const l=e.slice(0,d),R=l.toLowerCase(),F=e.slice(d+1).trim();this.maybeSetNormalizedName(l,R),this.headers.has(R)?this.headers.get(R).push(F):this.headers.set(R,[F])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let d=t[e];const l=e.toLowerCase();"string"==typeof d&&(d=[d]),d.length>0&&(this.headers.set(l,d),this.maybeSetNormalizedName(e,l))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new v;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let d=t.value;if("string"==typeof d&&(d=[d]),0===d.length)return;this.maybeSetNormalizedName(t.name,e);const l=("a"===t.op?this.headers.get(e):void 0)||[];l.push(...d),this.headers.set(e,l);break;case"d":const R=t.value;if(R){let F=this.headers.get(e);if(!F)return;F=F.filter(V=>-1===R.indexOf(V)),0===F.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,F)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class w{encodeKey(t){return J(t)}encodeValue(t){return J(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const D=/%(\d[a-f0-9])/gi,U={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function J(o){return encodeURIComponent(o).replace(D,(t,e)=>U[e]??t)}function B(o){return`${o}`}class N{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new w,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function W(o,t){const e=new Map;return o.length>0&&o.replace(/^\?/,"").split("&").forEach(l=>{const R=l.indexOf("="),[F,V]=-1==R?[t.decodeKey(l),""]:[t.decodeKey(l.slice(0,R)),t.decodeValue(l.slice(R+1))],L=e.get(F)||[];L.push(V),e.set(F,L)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const d=t.fromObject[e],l=Array.isArray(d)?d.map(B):[B(d)];this.map.set(e,l)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(d=>{const l=t[d];Array.isArray(l)?l.forEach(R=>{e.push({param:d,value:R,op:"a"})}):e.push({param:d,value:l,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(d=>e+"="+this.encoder.encodeValue(d)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new N({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(B(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let d=this.map.get(t.param)||[];const l=d.indexOf(B(t.value));-1!==l&&d.splice(l,1),d.length>0?this.map.set(t.param,d):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Z{constructor(t){this.defaultValue=t}}class te{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function h(o){return typeof ArrayBuffer<"u"&&o instanceof ArrayBuffer}function M(o){return typeof Blob<"u"&&o instanceof Blob}function z(o){return typeof FormData<"u"&&o instanceof FormData}class O{constructor(t,e,d,l){let R;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function b(o){switch(o){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||l?(this.body=void 0!==d?d:null,R=l):R=d,R&&(this.reportProgress=!!R.reportProgress,this.withCredentials=!!R.withCredentials,R.responseType&&(this.responseType=R.responseType),R.headers&&(this.headers=R.headers),R.context&&(this.context=R.context),R.params&&(this.params=R.params)),this.headers||(this.headers=new v),this.context||(this.context=new te),this.params){const F=this.params.toString();if(0===F.length)this.urlWithParams=e;else{const V=e.indexOf("?");this.urlWithParams=e+(-1===V?"?":V<e.length-1?"&":"")+F}}else this.params=new N,this.urlWithParams=e}serializeBody(){return null===this.body?null:h(this.body)||M(this.body)||z(this.body)||function P(o){return typeof URLSearchParams<"u"&&o instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof N?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||z(this.body)?null:M(this.body)?this.body.type||null:h(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof N?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,d=t.url||this.url,l=t.responseType||this.responseType,R=void 0!==t.body?t.body:this.body,F=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,V=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let L=t.headers||this.headers,q=t.params||this.params;const he=t.context??this.context;return void 0!==t.setHeaders&&(L=Object.keys(t.setHeaders).reduce((fe,oe)=>fe.set(oe,t.setHeaders[oe]),L)),t.setParams&&(q=Object.keys(t.setParams).reduce((fe,oe)=>fe.set(oe,t.setParams[oe]),q)),new O(e,d,R,{params:q,headers:L,context:he,reportProgress:V,responseType:l,withCredentials:F})}}var I=(()=>((I=I||{})[I.Sent=0]="Sent",I[I.UploadProgress=1]="UploadProgress",I[I.ResponseHeader=2]="ResponseHeader",I[I.DownloadProgress=3]="DownloadProgress",I[I.Response=4]="Response",I[I.User=5]="User",I))();class k{constructor(t,e=200,d="OK"){this.headers=t.headers||new v,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||d,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class ee extends k{constructor(t={}){super(t),this.type=I.ResponseHeader}clone(t={}){return new ee({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class ae extends k{constructor(t={}){super(t),this.type=I.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new ae({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class ue extends k{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function ye(o,t){return{body:t,headers:o.headers,context:o.context,observe:o.observe,params:o.params,reportProgress:o.reportProgress,responseType:o.responseType,withCredentials:o.withCredentials}}let r=(()=>{class o{constructor(e){this.handler=e}request(e,d,l={}){let R;if(e instanceof O)R=e;else{let L,q;L=l.headers instanceof v?l.headers:new v(l.headers),l.params&&(q=l.params instanceof N?l.params:new N({fromObject:l.params})),R=new O(e,d,void 0!==l.body?l.body:null,{headers:L,context:l.context,params:q,reportProgress:l.reportProgress,responseType:l.responseType||"json",withCredentials:l.withCredentials})}const F=(0,_.of)(R).pipe((0,y.b)(L=>this.handler.handle(L)));if(e instanceof O||"events"===l.observe)return F;const V=F.pipe((0,x.h)(L=>L instanceof ae));switch(l.observe||"body"){case"body":switch(R.responseType){case"arraybuffer":return V.pipe((0,T.U)(L=>{if(null!==L.body&&!(L.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return L.body}));case"blob":return V.pipe((0,T.U)(L=>{if(null!==L.body&&!(L.body instanceof Blob))throw new Error("Response is not a Blob.");return L.body}));case"text":return V.pipe((0,T.U)(L=>{if(null!==L.body&&"string"!=typeof L.body)throw new Error("Response is not a string.");return L.body}));default:return V.pipe((0,T.U)(L=>L.body))}case"response":return V;default:throw new Error(`Unreachable: unhandled observe type ${l.observe}}`)}}delete(e,d={}){return this.request("DELETE",e,d)}get(e,d={}){return this.request("GET",e,d)}head(e,d={}){return this.request("HEAD",e,d)}jsonp(e,d){return this.request("JSONP",e,{params:(new N).append(d,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,d={}){return this.request("OPTIONS",e,d)}patch(e,d,l={}){return this.request("PATCH",e,ye(l,d))}post(e,d,l={}){return this.request("POST",e,ye(l,d))}put(e,d,l={}){return this.request("PUT",e,ye(l,d))}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(H))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();class i{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const a=new s.InjectionToken("HTTP_INTERCEPTORS");let f,c=(()=>{class o{intercept(e,d){return d.handle(e)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),m=0;class X{}let Y=(()=>{class o{constructor(e,d){this.callbackMap=e,this.document=d,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+m++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new p.y(d=>{const l=this.nextCallback(),R=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${l}$1`),F=this.document.createElement("script");F.src=R;let V=null,L=!1;this.callbackMap[l]=oe=>{delete this.callbackMap[l],V=oe,L=!0};const q=()=>{F.parentNode&&F.parentNode.removeChild(F),delete this.callbackMap[l]};return F.addEventListener("load",oe=>{this.resolvedPromise.then(()=>{q(),L?(d.next(new ae({body:V,status:200,statusText:"OK",url:R})),d.complete()):d.error(new ue({url:R,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),F.addEventListener("error",oe=>{q(),d.error(new ue({error:oe,status:0,statusText:"JSONP Error",url:R}))}),this.document.body.appendChild(F),d.next({type:I.Sent}),()=>{L||this.removeListeners(F),q()}})}removeListeners(e){f||(f=this.document.implementation.createHTMLDocument()),f.adoptNode(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(X),s.\u0275\u0275inject(u.DOCUMENT))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),$=(()=>{class o{constructor(e){this.jsonp=e}intercept(e,d){return"JSONP"===e.method?this.jsonp.handle(e):d.handle(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(Y))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();const se=/^\)\]\}',?\n/;let ie=(()=>{class o{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new p.y(d=>{const l=this.xhrFactory.build();if(l.open(e.method,e.urlWithParams),e.withCredentials&&(l.withCredentials=!0),e.headers.forEach((G,Q)=>l.setRequestHeader(G,Q.join(","))),e.headers.has("Accept")||l.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const G=e.detectContentTypeHeader();null!==G&&l.setRequestHeader("Content-Type",G)}if(e.responseType){const G=e.responseType.toLowerCase();l.responseType="json"!==G?G:"text"}const R=e.serializeBody();let F=null;const V=()=>{if(null!==F)return F;const G=l.statusText||"OK",Q=new v(l.getAllResponseHeaders()),pe=function ce(o){return"responseURL"in o&&o.responseURL?o.responseURL:/^X-Request-URL:/m.test(o.getAllResponseHeaders())?o.getResponseHeader("X-Request-URL"):null}(l)||e.url;return F=new ee({headers:Q,status:l.status,statusText:G,url:pe}),F},L=()=>{let{headers:G,status:Q,statusText:pe,url:Oe}=V(),re=null;204!==Q&&(re=typeof l.response>"u"?l.responseText:l.response),0===Q&&(Q=re?200:0);let Ee=Q>=200&&Q<300;if("json"===e.responseType&&"string"==typeof re){const Me=re;re=re.replace(se,"");try{re=""!==re?JSON.parse(re):null}catch(Ce){re=Me,Ee&&(Ee=!1,re={error:Ce,text:re})}}Ee?(d.next(new ae({body:re,headers:G,status:Q,statusText:pe,url:Oe||void 0})),d.complete()):d.error(new ue({error:re,headers:G,status:Q,statusText:pe,url:Oe||void 0}))},q=G=>{const{url:Q}=V(),pe=new ue({error:G,status:l.status||0,statusText:l.statusText||"Unknown Error",url:Q||void 0});d.error(pe)};let he=!1;const fe=G=>{he||(d.next(V()),he=!0);let Q={type:I.DownloadProgress,loaded:G.loaded};G.lengthComputable&&(Q.total=G.total),"text"===e.responseType&&!!l.responseText&&(Q.partialText=l.responseText),d.next(Q)},oe=G=>{let Q={type:I.UploadProgress,loaded:G.loaded};G.lengthComputable&&(Q.total=G.total),d.next(Q)};return l.addEventListener("load",L),l.addEventListener("error",q),l.addEventListener("timeout",q),l.addEventListener("abort",q),e.reportProgress&&(l.addEventListener("progress",fe),null!==R&&l.upload&&l.upload.addEventListener("progress",oe)),l.send(R),d.next({type:I.Sent}),()=>{l.removeEventListener("error",q),l.removeEventListener("abort",q),l.removeEventListener("load",L),l.removeEventListener("timeout",q),e.reportProgress&&(l.removeEventListener("progress",fe),null!==R&&l.upload&&l.upload.removeEventListener("progress",oe)),l.readyState!==l.DONE&&l.abort()}})}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(u.XhrFactory))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();const le=new s.InjectionToken("XSRF_COOKIE_NAME"),de=new s.InjectionToken("XSRF_HEADER_NAME");class me{}let ge=(()=>{class o{constructor(e,d,l){this.doc=e,this.platform=d,this.cookieName=l,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,u.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(u.DOCUMENT),s.\u0275\u0275inject(s.PLATFORM_ID),s.\u0275\u0275inject(le))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),_e=(()=>{class o{constructor(e,d){this.tokenService=e,this.headerName=d}intercept(e,d){const l=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||l.startsWith("http://")||l.startsWith("https://"))return d.handle(e);const R=this.tokenService.getToken();return null!==R&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,R)})),d.handle(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(me),s.\u0275\u0275inject(de))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),ve=(()=>{class o{constructor(e,d){this.backend=e,this.injector=d,this.chain=null}handle(e){if(null===this.chain){const d=this.injector.get(a,[]);this.chain=d.reduceRight((l,R)=>new i(l,R),this.backend)}return this.chain.handle(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(C),s.\u0275\u0275inject(s.Injector))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();function Pe(){return"object"==typeof window?window:{}}let be=(()=>{class o{static disable(){return{ngModule:o,providers:[{provide:_e,useClass:c}]}}static withOptions(e={}){return{ngModule:o,providers:[e.cookieName?{provide:le,useValue:e.cookieName}:[],e.headerName?{provide:de,useValue:e.headerName}:[]]}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({providers:[_e,{provide:a,useExisting:_e,multi:!0},{provide:me,useClass:ge},{provide:le,useValue:"XSRF-TOKEN"},{provide:de,useValue:"X-XSRF-TOKEN"}]}),o})(),Te=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({providers:[r,{provide:H,useClass:ve},ie,{provide:C,useExisting:ie}],imports:[be.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),o})(),we=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({providers:[Y,{provide:X,useFactory:Pe},{provide:a,useClass:$,multi:!0}]}),o})();const De=u.XhrFactory}}]);