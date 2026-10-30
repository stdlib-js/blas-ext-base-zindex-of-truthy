"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=n(function(g,f){
var O=require('@stdlib/strided-base-reinterpret-complex128/dist');function h(e,r,i,p){var u,t,a;if(e<=0)return-1;for(u=O(r,0),t=p*2,i*=2,a=0;a<e;a++){if(u[t]||u[t+1])return a;t+=i}return-1}f.exports=h
});var q=n(function(k,o){
var z=require('@stdlib/strided-base-stride2offset/dist'),T=v();function j(e,r,i){return T(e,r,i,z(e,i))}o.exports=j
});var d=n(function(A,y){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),l=v();m(x,"ndarray",l);y.exports=x
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),E=d(),s,c=_(R(__dirname,"./native.js"));w(c)?s=E:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
