(self.webpackChunkmulti_tenant_management=self.webpackChunkmulti_tenant_management||[]).push([[529],{4351:($,w,f)=>{f.d(w,{b:()=>N});var g=f(5577),a=f(576);function N(T,O){return(0,a.m)(O)?(0,g.z)(T,O,1):(0,g.z)(T,1)}},9300:($,w,f)=>{f.d(w,{h:()=>N});var g=f(4482),a=f(5403);function N(T,O){return(0,g.e)((A,C)=>{let _=0;A.subscribe((0,a.x)(C,P=>T.call(O,P,_++)&&C.next(P)))})}},529:($,w,f)=>{f.r(w),f.d(w,{HTTP_INTERCEPTORS:()=>S,HttpBackend:()=>P,HttpClient:()=>ee,HttpClientJsonpModule:()=>Oe,HttpClientModule:()=>we,HttpClientXsrfModule:()=>oe,HttpContext:()=>Y,HttpContextToken:()=>ce,HttpErrorResponse:()=>D,HttpEventType:()=>d,HttpHandler:()=>_,HttpHeaderResponse:()=>j,HttpHeaders:()=>E,HttpParams:()=>v,HttpRequest:()=>H,HttpResponse:()=>M,HttpResponseBase:()=>I,HttpUrlEncodingCodec:()=>V,HttpXhrBackend:()=>B,HttpXsrfTokenExtractor:()=>X,JsonpClientBackend:()=>F,JsonpInterceptor:()=>ne,XhrFactory:()=>Pe,\u0275HttpInterceptingHandler:()=>re});var g=f(8811),a=f(5480),N=f(9646),T=f(9751),O=f(4351),A=f(9300),C=f(4004);class _{}class P{}class E{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),o=n.toLowerCase(),l=e.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof E?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new E;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof E?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const o=t.value;if(o){let l=this.headers.get(e);if(!l)return;l=l.filter(h=>-1===o.indexOf(h)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class V{encodeKey(t){return G(t)}encodeValue(t){return G(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const le=/%(\d[a-f0-9])/gi,de={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function G(s){return encodeURIComponent(s).replace(le,(t,e)=>de[e]??t)}function k(s){return`${s}`}class v{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new V,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ae(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[l,h]=-1==o?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,o)),t.decodeValue(n.slice(o+1))],i=e.get(l)||[];i.push(h),e.set(l,i)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],n=Array.isArray(r)?r.map(k):[k(r)];this.map.set(e,n)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new v({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(k(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(k(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class ce{constructor(t){this.defaultValue=t}}class Y{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function Q(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function Z(s){return typeof Blob<"u"&&s instanceof Blob}function q(s){return typeof FormData<"u"&&s instanceof FormData}class H{constructor(t,e,r,n){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function he(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new E),this.context||(this.context=new Y),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const h=e.indexOf("?");this.urlWithParams=e+(-1===h?"?":h<e.length-1?"&":"")+l}}else this.params=new v,this.urlWithParams=e}serializeBody(){return null===this.body?null:Q(this.body)||Z(this.body)||q(this.body)||function ue(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof v?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||q(this.body)?null:Z(this.body)?this.body.type||null:Q(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,n=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,l=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,h=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let i=t.headers||this.headers,p=t.params||this.params;const R=t.context??this.context;return void 0!==t.setHeaders&&(i=Object.keys(t.setHeaders).reduce((b,m)=>b.set(m,t.setHeaders[m]),i)),t.setParams&&(p=Object.keys(t.setParams).reduce((b,m)=>b.set(m,t.setParams[m]),p)),new H(e,r,o,{params:p,headers:i,context:R,reportProgress:h,responseType:n,withCredentials:l})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class I{constructor(t,e=200,r="OK"){this.headers=t.headers||new E,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class j extends I{constructor(t={}){super(t),this.type=d.ResponseHeader}clone(t={}){return new j({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class M extends I{constructor(t={}){super(t),this.type=d.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new M({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class D extends I{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function L(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let ee=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let o;if(e instanceof H)o=e;else{let i,p;i=n.headers instanceof E?n.headers:new E(n.headers),n.params&&(p=n.params instanceof v?n.params:new v({fromObject:n.params})),o=new H(e,r,void 0!==n.body?n.body:null,{headers:i,context:n.context,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const l=(0,N.of)(o).pipe((0,O.b)(i=>this.handler.handle(i)));if(e instanceof H||"events"===n.observe)return l;const h=l.pipe((0,A.h)(i=>i instanceof M));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe((0,C.U)(i=>{if(null!==i.body&&!(i.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return i.body}));case"blob":return h.pipe((0,C.U)(i=>{if(null!==i.body&&!(i.body instanceof Blob))throw new Error("Response is not a Blob.");return i.body}));case"text":return h.pipe((0,C.U)(i=>{if(null!==i.body&&"string"!=typeof i.body)throw new Error("Response is not a string.");return i.body}));default:return h.pipe((0,C.U)(i=>i.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new v).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,L(n,r))}post(e,r,n={}){return this.request("POST",e,L(n,r))}put(e,r,n={}){return this.request("PUT",e,L(n,r))}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(_))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class te{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const S=new a.InjectionToken("HTTP_INTERCEPTORS");let U,pe=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),fe=0;class se{}let F=(()=>{class s{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+fe++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new T.y(r=>{const n=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),l=this.document.createElement("script");l.src=o;let h=null,i=!1;this.callbackMap[n]=m=>{delete this.callbackMap[n],h=m,i=!0};const p=()=>{l.parentNode&&l.parentNode.removeChild(l),delete this.callbackMap[n]};return l.addEventListener("load",m=>{this.resolvedPromise.then(()=>{p(),i?(r.next(new M({body:h,status:200,statusText:"OK",url:o})),r.complete()):r.error(new D({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),l.addEventListener("error",m=>{p(),r.error(new D({error:m,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(l),r.next({type:d.Sent}),()=>{i||this.removeListeners(l),p()}})}removeListeners(e){U||(U=this.document.implementation.createHTMLDocument()),U.adoptNode(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(se),a.\u0275\u0275inject(g.DOCUMENT))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ne=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,r){return"JSONP"===e.method?this.jsonp.handle(e):r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(F))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const ve=/^\)\]\}',?\n/;let B=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new T.y(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((c,u)=>n.setRequestHeader(c,u.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const c=e.detectContentTypeHeader();null!==c&&n.setRequestHeader("Content-Type",c)}if(e.responseType){const c=e.responseType.toLowerCase();n.responseType="json"!==c?c:"text"}const o=e.serializeBody();let l=null;const h=()=>{if(null!==l)return l;const c=n.statusText||"OK",u=new E(n.getAllResponseHeaders()),x=function be(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return l=new j({headers:u,status:n.status,statusText:c,url:x}),l},i=()=>{let{headers:c,status:u,statusText:x,url:ie}=h(),y=null;204!==u&&(y=typeof n.response>"u"?n.responseText:n.response),0===u&&(u=y?200:0);let W=u>=200&&u<300;if("json"===e.responseType&&"string"==typeof y){const He=y;y=y.replace(ve,"");try{y=""!==y?JSON.parse(y):null}catch(Me){y=He,W&&(W=!1,y={error:Me,text:y})}}W?(r.next(new M({body:y,headers:c,status:u,statusText:x,url:ie||void 0})),r.complete()):r.error(new D({error:y,headers:c,status:u,statusText:x,url:ie||void 0}))},p=c=>{const{url:u}=h(),x=new D({error:c,status:n.status||0,statusText:n.statusText||"Unknown Error",url:u||void 0});r.error(x)};let R=!1;const b=c=>{R||(r.next(h()),R=!0);let u={type:d.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(u.total=c.total),"text"===e.responseType&&!!n.responseText&&(u.partialText=n.responseText),r.next(u)},m=c=>{let u={type:d.UploadProgress,loaded:c.loaded};c.lengthComputable&&(u.total=c.total),r.next(u)};return n.addEventListener("load",i),n.addEventListener("error",p),n.addEventListener("timeout",p),n.addEventListener("abort",p),e.reportProgress&&(n.addEventListener("progress",b),null!==o&&n.upload&&n.upload.addEventListener("progress",m)),n.send(o),r.next({type:d.Sent}),()=>{n.removeEventListener("error",p),n.removeEventListener("abort",p),n.removeEventListener("load",i),n.removeEventListener("timeout",p),e.reportProgress&&(n.removeEventListener("progress",b),null!==o&&n.upload&&n.upload.removeEventListener("progress",m)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(g.XhrFactory))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const J=new a.InjectionToken("XSRF_COOKIE_NAME"),z=new a.InjectionToken("XSRF_HEADER_NAME");class X{}let Te=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,g.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(g.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(J))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),K=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(X),a.\u0275\u0275inject(z))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),re=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(S,[]);this.chain=r.reduceRight((n,o)=>new te(n,o),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(a.\u0275\u0275inject(P),a.\u0275\u0275inject(a.Injector))},s.\u0275prov=a.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function Ce(){return"object"==typeof window?window:{}}let oe=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:K,useClass:pe}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:J,useValue:e.cookieName}:[],e.headerName?{provide:z,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=a.\u0275\u0275defineInjector({providers:[K,{provide:S,useExisting:K,multi:!0},{provide:X,useClass:Te},{provide:J,useValue:"XSRF-TOKEN"},{provide:z,useValue:"X-XSRF-TOKEN"}]}),s})(),we=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=a.\u0275\u0275defineInjector({providers:[ee,{provide:_,useClass:re},B,{provide:P,useExisting:B}],imports:[oe.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),s})(),Oe=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=a.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=a.\u0275\u0275defineInjector({providers:[F,{provide:se,useFactory:Ce},{provide:S,useClass:ne,multi:!0}]}),s})();const Pe=g.XhrFactory}}]);