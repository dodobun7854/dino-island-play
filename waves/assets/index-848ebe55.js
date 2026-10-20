(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qp="152",Xr=0,$p=1,Yp=2,ed=1,Yg=100,Kg=204,Zg=205,Jg=3,Qg=0,Kp=300,e0=301,Wo=1e3,Io=1001,bh=1002,Sh=1003,t0=1004,i0=1005,su=1006,n0=1007,ru=1008,s0=1009,r0=1015,Zp=1023,o0=2200,a0=2201,l0=2202,Xo=2300,jr=2301,ic=2302,Dr=2400,Fr=2401,wl=2402,ou=2500,c0=2501,h0=0,Jp=1,wh=2,u0=3e3,nc=3001,d0=0,sc="",Dt="srgb",au="srgb-linear",Qp="display-p3",rc=7680,f0=519,Ah=35044;let ea=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}};const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let td=1234567;const zo=Math.PI/180,jo=180/Math.PI;function zi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ot(r,e,t){return Math.max(e,Math.min(t,r))}function lu(r,e){return(r%e+e)%e}function p0(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function m0(r,e,t){return r!==e?(t-r)/(e-r):0}function Oo(r,e,t){return(1-t)*r+t*e}function g0(r,e,t,i){return Oo(r,e,1-Math.exp(-t*i))}function y0(r,e=1){return e-Math.abs(lu(r,e*2)-e)}function x0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function v0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function M0(r,e){return r+Math.random()*(e-r)}function b0(r){return r*(.5-Math.random())}function S0(r){r!==void 0&&(td=r);let e=td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w0(r){return r*zo}function A0(r){return r*jo}function T0(r){return(r&r-1)===0&&r!==0}function em(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function E0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function R0(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const tm={DEG2RAD:zo,RAD2DEG:jo,generateUUID:zi,clamp:Ot,euclideanModulo:lu,mapLinear:p0,inverseLerp:m0,lerp:Oo,damp:g0,pingpong:y0,smoothstep:x0,smootherstep:_0,randInt:v0,randFloat:M0,randFloatSpread:b0,seededRandom:S0,degToRad:w0,radToDeg:A0,isPowerOfTwo:T0,ceilPowerOfTwo:em,floorPowerOfTwo:E0,setQuaternionFromProperEuler:R0,normalize:nt,denormalize:Cn};let qe=class im{constructor(e=0,t=0){im.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},os=class nm{constructor(){nm.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],y=n[0],g=n[3],p=n[6],_=n[1],x=n[4],M=n[7],v=n[2],b=n[5],A=n[8];return s[0]=o*y+a*_+l*v,s[3]=o*g+a*x+l*b,s[6]=o*p+a*M+l*A,s[1]=c*y+h*_+u*v,s[4]=c*g+h*x+u*b,s[7]=c*p+h*M+u*A,s[2]=d*y+f*_+m*v,s[5]=d*g+f*x+m*b,s[8]=d*p+f*M+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=u*y,e[1]=(n*c-h*i)*y,e[2]=(a*i-n*o)*y,e[3]=d*y,e[4]=(h*t-n*l)*y,e[5]=(n*s-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const oc=new os;function C0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Th(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const id={};function ac(r){r in id||(id[r]=!0,console.warn(r))}function kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const P0=new os().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),I0=new os().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function L0(r){return r.convertSRGBToLinear().applyMatrix3(I0)}function D0(r){return r.applyMatrix3(P0).convertLinearToSRGB()}const F0={[au]:r=>r,[Dt]:r=>r.convertSRGBToLinear(),[Qp]:L0},U0={[au]:r=>r,[Dt]:r=>r.convertLinearToSRGB(),[Qp]:D0},Ei={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return au},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=F0[e],n=U0[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let $s,N0=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=Th("canvas")),$s.width=e.width,$s.height=e.height;const i=$s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Th("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=kr(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kr(t[i]/255)*255):t[i]=kr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},B0=class{constructor(e=null){this.isSource=!0,this.uuid=zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(cc(n[o].image)):s.push(cc(n[o]))}else s=cc(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function cc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?N0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z0=0,Dn=class ml extends ea{constructor(e=ml.DEFAULT_IMAGE,t=ml.DEFAULT_MAPPING,i=Io,n=Io,s=su,o=ru,a=Zp,l=s0,c=ml.DEFAULT_ANISOTROPY,h=sc){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=zi(),this.name="",this.source=new B0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new os,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ac("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===nc?Dt:sc),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Io:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Io:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ac("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?nc:u0}set encoding(e){ac("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===nc?Dt:sc}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Kp;Dn.DEFAULT_ANISOTROPY=1;let di=class sm{constructor(e=0,t=0,i=0,n=1){sm.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,v=(p+1)/2,b=(h+d)/4,A=(u+y)/4,E=(m+g)/4;return x>M&&x>v?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=b/i,s=A/i):M>v?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=b/n,s=E/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=A/s,n=E/s),this.set(i,n,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],f=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const v=Math.sqrt(x),b=Math.atan2(v,p*_);g=Math.sin(g*b)/v,a=Math.sin(a*b)/v}const M=a*_;if(l=l*g+d*M,c=c*g+f*M,h=h*g+m*M,u=u*g+y*M,g===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class rm{constructor(e=0,t=0,i=0){rm.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,h=l*i+a*t-s*n,u=l*n+s*i-o*t,d=-s*t-o*i-a*n;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const hc=new F,nd=new Oi;let kt=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)hn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),oa.subVectors(this.max,lo),Ks.subVectors(e.a,lo),Zs.subVectors(e.b,lo),Js.subVectors(e.c,lo),zn.subVectors(Zs,Ks),On.subVectors(Js,Zs),fs.subVectors(Ks,Js);let t=[0,-zn.z,zn.y,0,-On.z,On.y,0,-fs.z,fs.y,zn.z,0,-zn.x,On.z,0,-On.x,fs.z,0,-fs.x,-zn.y,zn.x,0,-On.y,On.x,0,-fs.y,fs.x,0];return!uc(t,Ks,Zs,Js,oa)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Ks,Zs,Js,oa))?!1:(aa.crossVectors(zn,On),t=[aa.x,aa.y,aa.z],uc(t,Ks,Zs,Js,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const cn=[new F,new F,new F,new F,new F,new F,new F,new F],hn=new F,Ys=new kt,Ks=new F,Zs=new F,Js=new F,zn=new F,On=new F,fs=new F,lo=new F,oa=new F,aa=new F,ps=new F;function uc(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){ps.fromArray(r,s);const a=n.x*Math.abs(ps.x)+n.y*Math.abs(ps.y)+n.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),h=i.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const O0=new kt,co=new F,dc=new F;let on=class{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):O0.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(co,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(dc)),this.expandByPoint(co.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const un=new F,fc=new F,la=new F,kn=new F,pc=new F,ca=new F,mc=new F;let cu=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){fc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(fc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=kn.dot(this.direction),l=-kn.dot(la),c=kn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(fc).addScaledVector(la,d),f}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),n=un.dot(un)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,n,s){pc.subVectors(t,e),ca.subVectors(i,e),mc.crossVectors(pc,ca);let o=this.direction.dot(mc),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(kn,ca));if(l<0)return null;const c=a*this.direction.dot(pc.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(mc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class Eh{constructor(){Eh.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,o,a,l,c,h,u,d,f,m,y,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eh().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Qs.setFromMatrixColumn(e,0).length(),s=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d+y*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,y=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-y*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,V0)}lookAt(e,t,i){const n=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Vn.crossVectors(i,ai),Vn.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Vn.crossVectors(i,ai)),Vn.normalize(),ha.crossVectors(ai,Vn),n[0]=Vn.x,n[4]=ha.x,n[8]=ai.x,n[1]=Vn.y,n[5]=ha.y,n[9]=ai.y,n[2]=Vn.z,n[6]=ha.z,n[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],_=i[3],x=i[7],M=i[11],v=i[15],b=n[0],A=n[4],E=n[8],S=n[12],w=n[1],D=n[5],I=n[9],C=n[13],U=n[2],N=n[6],G=n[10],H=n[14],V=n[3],$=n[7],Y=n[11],he=n[15];return s[0]=o*b+a*w+l*U+c*V,s[4]=o*A+a*D+l*N+c*$,s[8]=o*E+a*I+l*G+c*Y,s[12]=o*S+a*C+l*H+c*he,s[1]=h*b+u*w+d*U+f*V,s[5]=h*A+u*D+d*N+f*$,s[9]=h*E+u*I+d*G+f*Y,s[13]=h*S+u*C+d*H+f*he,s[2]=m*b+y*w+g*U+p*V,s[6]=m*A+y*D+g*N+p*$,s[10]=m*E+y*I+g*G+p*Y,s[14]=m*S+y*C+g*H+p*he,s[3]=_*b+x*w+M*U+v*V,s[7]=_*A+x*D+M*N+v*$,s[11]=_*E+x*I+M*G+v*Y,s[15]=_*S+x*C+M*H+v*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],y=e[7],g=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+y*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+g*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],y=e[13],g=e[14],p=e[15],_=u*g*c-y*d*c+y*l*f-a*g*f-u*l*p+a*d*p,x=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,M=h*y*c-m*u*c+m*a*f-o*y*f-h*a*p+o*u*p,v=m*u*l-h*y*l-m*a*d+o*y*d+h*a*g-o*u*g,b=t*_+i*x+n*M+s*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(y*d*s-u*g*s-y*n*f+i*g*f+u*n*p-i*d*p)*A,e[2]=(a*g*s-y*l*s+y*n*c-i*g*c-a*n*p+i*l*p)*A,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*A,e[4]=x*A,e[5]=(h*g*s-m*d*s+m*n*f-t*g*f-h*n*p+t*d*p)*A,e[6]=(m*l*s-o*g*s-m*n*c+t*g*c+o*n*p-t*l*p)*A,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*A,e[8]=M*A,e[9]=(m*u*s-h*y*s-m*i*f+t*y*f+h*i*p-t*u*p)*A,e[10]=(o*y*s-m*a*s+m*i*c-t*y*c-o*i*p+t*a*p)*A,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*A,e[12]=v*A,e[13]=(h*y*n-m*u*n+m*i*d-t*y*d-h*i*g+t*u*g)*A,e[14]=(m*a*n-o*y*n-m*i*l+t*y*l+o*i*g-t*a*g)*A,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,y=o*h,g=o*u,p=a*u,_=l*c,x=l*h,M=l*u,v=i.x,b=i.y,A=i.z;return n[0]=(1-(y+p))*v,n[1]=(f+M)*v,n[2]=(m-x)*v,n[3]=0,n[4]=(f-M)*b,n[5]=(1-(d+p))*b,n[6]=(g+_)*b,n[7]=0,n[8]=(m+x)*A,n[9]=(g-_)*A,n[10]=(1-(d+y))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Qs.set(n[0],n[1],n[2]).length();const o=Qs.set(n[4],n[5],n[6]).length(),a=Qs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ri.copy(this);const c=1/s,h=1/o,u=1/a;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=u,Ri.elements[9]*=u,Ri.elements[10]*=u,t.setFromRotationMatrix(Ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(o-s),u=(t+e)*l,d=(i+n)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const Qs=new F,Ri=new Pe,k0=new F(0,0,0),V0=new F(1,1,1),Vn=new F,ha=new F,ai=new F,sd=new Pe,rd=new Oi;let om=class am{constructor(e=0,t=0,i=0,n=am.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};om.DEFAULT_ORDER="XYZ";let H0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},G0=0;const od=new F,er=new Oi,dn=new Pe,ua=new F,ho=new F,W0=new F,X0=new Oi,ad=new F(1,0,0),ld=new F(0,1,0),cd=new F(0,0,1),j0={type:"added"},hd={type:"removed"};let Ft=class gl extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gl.DEFAULT_UP.clone();const e=new F,t=new om,i=new Oi,n=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Pe},normalMatrix:{value:new os}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=gl.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(ho,ua,this.up):dn.lookAt(ua,ho,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),er.setFromRotationMatrix(dn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(j0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,X0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}};Ft.DEFAULT_UP=new F(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new F,fn=new F,gc=new F,pn=new F,tr=new F,ir=new F,ud=new F,yc=new F,xc=new F,_c=new F;let da=!1,Ji=class Rs{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ci.subVectors(e,t),n.cross(Ci);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ci.subVectors(n,t),fn.subVectors(i,t),gc.subVectors(e,t);const o=Ci.dot(Ci),a=Ci.dot(fn),l=Ci.dot(gc),c=fn.dot(fn),h=fn.dot(gc),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,n,s,o,a,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,i,n,s,o,a,l)}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,pn),l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l}static isFrontFacing(e,t,i,n){return Ci.subVectors(i,t),fn.subVectors(e,t),Ci.cross(fn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ci.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rs.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rs.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),Rs.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return Rs.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Rs.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rs.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;tr.subVectors(n,i),ir.subVectors(s,i),yc.subVectors(e,i);const l=tr.dot(yc),c=ir.dot(yc);if(l<=0&&c<=0)return t.copy(i);xc.subVectors(e,n);const h=tr.dot(xc),u=ir.dot(xc);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(tr,o);_c.subVectors(e,s);const f=tr.dot(_c),m=ir.dot(_c);if(m>=0&&f<=m)return t.copy(s);const y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ir,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ud.subVectors(s,n),a=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(ud,a);const p=1/(g+y+d);return o=y*p,a=d*p,t.copy(i).addScaledVector(tr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},q0=0,Bs=class extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=ed,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kg,this.blendDst=Zg,this.blendEquation=Yg,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jg,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rc,this.stencilZFail=rc,this.stencilZPass=rc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ed&&(i.blending=this.blending),this.side!==Xr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function vc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let _t=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ei.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ei.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ei.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ei.workingColorSpace){if(e=lu(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=vc(o,s,e+1/3),this.g=vc(o,s,e),this.b=vc(o,s,e-1/3)}return Ei.toWorkingColorSpace(this,n),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=lm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=lc(e.r),this.g=lc(e.g),this.b=lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ei.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Ot(Gt.r*255,0,255))*65536+Math.round(Ot(Gt.g*255,0,255))*256+Math.round(Ot(Gt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ei.workingColorSpace){Ei.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,n=Gt.g,s=Gt.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ei.workingColorSpace){return Ei.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Dt){Ei.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,n=Gt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),Pi.h+=e,Pi.s+=t,Pi.l+=i,this.setHSL(Pi.h,Pi.s,Pi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(fa);const i=Oo(Pi.h,fa.h,t),n=Oo(Pi.s,fa.s,t),s=Oo(Pi.l,fa.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gt=new _t;_t.NAMES=lm;let Fs=class extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const yt=new F,pa=new qe;let Qt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ah,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ah&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},$0=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Y0=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},wt=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},K0=0;const yi=new Pe,Mc=new Ft,nr=new F,li=new kt,uo=new kt,Pt=new F;let pi=class cm extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C0(e)?Y0:$0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new os().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(li.min,uo.min),li.expandByPoint(Pt),Pt.addVectors(li.max,uo.max),li.expandByPoint(Pt)):(li.expandByPoint(uo.min),li.expandByPoint(uo.max))}li.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),Pt.add(nr)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new F,h[w]=new F;const u=new F,d=new F,f=new F,m=new qe,y=new qe,g=new qe,p=new F,_=new F;function x(w,D,I){u.fromArray(n,w*3),d.fromArray(n,D*3),f.fromArray(n,I*3),m.fromArray(o,w*2),y.fromArray(o,D*2),g.fromArray(o,I*2),d.sub(u),f.sub(u),y.sub(m),g.sub(m);const C=1/(y.x*g.y-g.x*y.y);isFinite(C)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-y.y).multiplyScalar(C),_.copy(f).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(C),c[w].add(p),c[D].add(p),c[I].add(p),h[w].add(_),h[D].add(_),h[I].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,D=M.length;w<D;++w){const I=M[w],C=I.start,U=I.count;for(let N=C,G=C+U;N<G;N+=3)x(i[N+0],i[N+1],i[N+2])}const v=new F,b=new F,A=new F,E=new F;function S(w){A.fromArray(s,w*3),E.copy(A);const D=c[w];v.copy(D),v.sub(A.multiplyScalar(A.dot(D))).normalize(),b.crossVectors(E,D);const C=b.dot(h[w])<0?-1:1;l[w*4]=v.x,l[w*4+1]=v.y,l[w*4+2]=v.z,l[w*4+3]=C}for(let w=0,D=M.length;w<D;++w){const I=M[w],C=I.start,U=I.count;for(let N=C,G=C+U;N<G;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cm,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const dd=new Pe,Gi=new cu,ma=new on,fd=new F,sr=new F,rr=new F,or=new F,bc=new F,ga=new F,ya=new qe,xa=new qe,_a=new qe,pd=new F,md=new F,gd=new F,va=new F,Ma=new F;let Yi=class extends Ft{constructor(e=new pi,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(bc.fromBufferAttribute(u,e),o?ga.addScaledVector(bc,h):ga.addScaledVector(bc.sub(t),h))}t.add(ga)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(ma.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ma,fd)===null||Gi.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(dd.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(dd),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=o.getX(x),b=o.getX(x+1),A=o.getX(x+2);i=ba(this,g,e,Gi,l,c,h,v,b,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=o.getX(y),_=o.getX(y+1),x=o.getX(y+2);i=ba(this,s,e,Gi,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=x,b=x+1,A=x+2;i=ba(this,g,e,Gi,l,c,h,v,b,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=y,_=y+1,x=y+2;i=ba(this,s,e,Gi,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}};function Z0(r,e,t,i,n,s,o,a){let l;if(e.side===$p?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Xr,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:r}}function ba(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,sr),r.getVertexPosition(l,rr),r.getVertexPosition(c,or);const h=Z0(r,e,t,i,sr,rr,or,va);if(h){n&&(ya.fromBufferAttribute(n,a),xa.fromBufferAttribute(n,l),_a.fromBufferAttribute(n,c),h.uv=Ji.getInterpolation(va,sr,rr,or,ya,xa,_a,new qe)),s&&(ya.fromBufferAttribute(s,a),xa.fromBufferAttribute(s,l),_a.fromBufferAttribute(s,c),h.uv1=Ji.getInterpolation(va,sr,rr,or,ya,xa,_a,new qe),h.uv2=h.uv1),o&&(pd.fromBufferAttribute(o,a),md.fromBufferAttribute(o,l),gd.fromBufferAttribute(o,c),h.normal=Ji.getInterpolation(va,sr,rr,or,pd,md,gd,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};Ji.getNormal(sr,rr,or,u.normal),h.face=u}return h}let hu=class hm extends pi{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function m(y,g,p,_,x,M,v,b,A,E,S){const w=M/A,D=v/E,I=M/2,C=v/2,U=b/2,N=A+1,G=E+1;let H=0,V=0;const $=new F;for(let Y=0;Y<G;Y++){const he=Y*D-C;for(let ie=0;ie<N;ie++){const W=ie*w-I;$[y]=W*_,$[g]=he*x,$[p]=U,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[p]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(ie/A),u.push(1-Y/E),H+=1}}for(let Y=0;Y<E;Y++)for(let he=0;he<A;he++){const ie=d+he+N*Y,W=d+he+N*(Y+1),J=d+(he+1)+N*(Y+1),se=d+(he+1)+N*Y;l.push(ie,W,se),l.push(W,J,se),V+=6}a.addGroup(f,V,S),f+=V,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},um=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},uu=class extends um{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},J0=class extends Dn{constructor(e,t,i,n,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:e0,super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};const Sc=new F,Q0=new F,ey=new os;let Jn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Sc.subVectors(i,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ey.getNormalMatrix(e),n=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ms=new on,Sa=new F;let ty=class{constructor(e=new Jn,t=new Jn,i=new Jn,n=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],y=i[11],g=i[12],p=i[13],_=i[14],x=i[15];return t[0].setComponents(a-n,u-l,y-d,x-g).normalize(),t[1].setComponents(a+n,u+l,y+d,x+g).normalize(),t[2].setComponents(a+s,u+c,y+f,x+p).normalize(),t[3].setComponents(a-s,u-c,y-f,x-p).normalize(),t[4].setComponents(a-o,u-h,y-m,x-_).normalize(),t[5].setComponents(a+o,u+h,y+m,x+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Sa.x=n.normal.x>0?e.max.x:e.min.x,Sa.y=n.normal.y>0?e.max.y:e.min.y,Sa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yd=class dm extends pi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){const _=p*d-o;for(let x=0;x<c;x++){const M=x*u-s;m.push(M,-_,0),y.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const x=_+c*p,M=_+c*(p+1),v=_+1+c*(p+1),b=_+1+c*p;f.push(x,M,b),f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new wt(m,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dm(e.width,e.height,e.widthSegments,e.heightSegments)}},fm=class extends um{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zs=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};class iy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ah,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new F;class du{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xd=new F,_d=new di,vd=new di,ny=new F,Md=new Pe,ar=new F;class sy extends Yi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)ar.fromBufferAttribute(t,i),this.applyBoneTransform(i,ar),this.boundingBox.expandByPoint(ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)ar.fromBufferAttribute(t,i),this.applyBoneTransform(i,ar),this.boundingSphere.expandByPoint(ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new di,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;_d.fromBufferAttribute(n.attributes.skinIndex,e),vd.fromBufferAttribute(n.attributes.skinWeight,e),xd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=vd.getComponent(s);if(o!==0){const a=_d.getComponent(s);Md.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ny.copy(xd).applyMatrix4(Md),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class pm extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ry extends Dn{constructor(e=null,t=1,i=1,n,s,o,a,l,c=Sh,h=Sh,u,d){super(null,o,a,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new Pe,oy=new Pe;class fu{constructor(e=[],t=[]){this.uuid=zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:oy;bd.multiplyMatrices(a,t[s]),bd.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new fu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=em(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ry(t,e,e,Zp,r0);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pm),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}let Sd=class extends Qt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};const lr=new Pe,wd=new Pe,wa=[],Ad=new kt,ay=new Pe,fo=new Yi,po=new on;let mm=class extends Yi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ay)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lr),Ad.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(Ad)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lr),po.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,lr),wd.multiplyMatrices(i,lr),fo.matrixWorld=wd,fo.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){const l=wa[o];l.instanceId=s,l.object=this,t.push(l)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class gm extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Td=new F,Ed=new F,Rd=new Pe,wc=new cu,Aa=new on;class pu extends Ft{constructor(e=new pi,t=new gm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Td.fromBufferAttribute(t,n-1),Ed.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Td.distanceTo(Ed);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(n),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;Rd.copy(n).invert(),wc.copy(e.ray).applyMatrix4(Rd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,u=new F,d=new F,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=p,M=_-1;x<M;x+=f){const v=m.getX(x),b=m.getX(x+1);if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,b),wc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let x=p,M=_-1;x<M;x+=f){if(c.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),wc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Cd=new F,Pd=new F;class ly extends pu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Cd.fromBufferAttribute(t,n),Pd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Cd.distanceTo(Pd);e.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cy extends pu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let ym=class extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Id=new Pe,Rh=new cu,Ta=new on,Ea=new F;let hy=class extends Ft{constructor(e=new pi,t=new ym){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(n),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;Id.copy(n).invert(),Rh.copy(e.ray).applyMatrix4(Id);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,y=f;m<y;m++){const g=c.getX(m);Ea.fromBufferAttribute(u,g),Ld(Ea,g,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,y=f;m<y;m++)Ea.fromBufferAttribute(u,m),Ld(Ea,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ld(r,e,t,i,n,s,o){const a=Rh.distanceSqToPoint(r);if(a<t){const l=new F;Rh.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class xm extends Dn{constructor(e,t,i,n,s,o,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}let _m=class vm extends pi{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const y=[],g=i/2;let p=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function _(){const M=new F,v=new F;let b=0;const A=(t-e)/i;for(let E=0;E<=s;E++){const S=[],w=E/s,D=w*(t-e)+e;for(let I=0;I<=n;I++){const C=I/n,U=C*l+a,N=Math.sin(U),G=Math.cos(U);v.x=D*N,v.y=-w*i+g,v.z=D*G,u.push(v.x,v.y,v.z),M.set(N,A,G).normalize(),d.push(M.x,M.y,M.z),f.push(C,1-w),S.push(m++)}y.push(S)}for(let E=0;E<n;E++)for(let S=0;S<s;S++){const w=y[S][E],D=y[S+1][E],I=y[S+1][E+1],C=y[S][E+1];h.push(w,D,C),h.push(D,I,C),b+=6}c.addGroup(p,b,0),p+=b}function x(M){const v=m,b=new qe,A=new F;let E=0;const S=M===!0?e:t,w=M===!0?1:-1;for(let I=1;I<=n;I++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;const D=m;for(let I=0;I<=n;I++){const U=I/n*l+a,N=Math.cos(U),G=Math.sin(U);A.x=S*G,A.y=g*w,A.z=S*N,u.push(A.x,A.y,A.z),d.push(0,w,0),b.x=N*.5+.5,b.y=G*.5*w+.5,f.push(b.x,b.y),m++}for(let I=0;I<n;I++){const C=v+I,U=D+I;M===!0?h.push(U,U+1,C):h.push(U+1,U,C),E+=3}c.addGroup(p,E,M===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},uy=class Mm extends _m{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};class mu extends pi{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new F,M=new F,v=new F;for(let b=0;b<t.length;b+=3)f(t[b+0],x),f(t[b+1],M),f(t[b+2],v),l(x,M,v,_)}function l(_,x,M,v){const b=v+1,A=[];for(let E=0;E<=b;E++){A[E]=[];const S=_.clone().lerp(M,E/b),w=x.clone().lerp(M,E/b),D=b-E;for(let I=0;I<=D;I++)I===0&&E===b?A[E][I]=S:A[E][I]=S.clone().lerp(w,I/D)}for(let E=0;E<b;E++)for(let S=0;S<2*(b-E)-1;S++){const w=Math.floor(S/2);S%2===0?(d(A[E][w+1]),d(A[E+1][w]),d(A[E][w])):(d(A[E][w+1]),d(A[E+1][w+1]),d(A[E+1][w]))}}function c(_){const x=new F;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(_),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function h(){const _=new F;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const M=g(_)/2/Math.PI+.5,v=p(_)/Math.PI+.5;o.push(M,1-v)}m(),u()}function u(){for(let _=0;_<o.length;_+=6){const x=o[_+0],M=o[_+2],v=o[_+4],b=Math.max(x,M,v),A=Math.min(x,M,v);b>.9&&A<.1&&(x<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),v<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,x){const M=_*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function m(){const _=new F,x=new F,M=new F,v=new F,b=new qe,A=new qe,E=new qe;for(let S=0,w=0;S<s.length;S+=9,w+=6){_.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),b.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),E.set(o[w+4],o[w+5]),v.copy(_).add(x).add(M).divideScalar(3);const D=g(v);y(b,w+0,_,D),y(A,w+2,x,D),y(E,w+4,M,D)}}function y(_,x,M,v){v<0&&_.x===1&&(o[x]=_.x-1),M.x===0&&M.z===0&&(o[x]=v/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.vertices,e.indices,e.radius,e.details)}}class gu extends mu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gu(e.radius,e.detail)}}let Gs=class extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d0,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};class qs extends Gs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Hn(r,e,t){return bm(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ra(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function dy(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Dd(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function Sm(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}let ta=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let o;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break t}o=t.length;break i}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}o=i,i=0;break i}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fy=class extends ta{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dr,endingEnd:Dr}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fr:s=e,a=2*t-i;break;case wl:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fr:o=e,l=2*i-t;break;case wl:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*y+.5*m,M=f*g-f*y;for(let v=0;v!==a;++v)s[v]=p*o[h+v]+_*o[c+v]+x*o[l+v]+M*o[u+v];return s}},wm=class extends ta{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},py=class extends ta{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new py(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Hn(i,s,o),this.values=Hn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&bm(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Hn(this.times),t=Hn(this.values),i=this.getValueSize(),n=this.getInterpolation()===ic,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const y=t[u+m];if(y!==t[d+m]||y!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Hn(e,0,o),this.values=Hn(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=Hn(this.times,0),t=Hn(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=jr;let Jr=class extends an{};Jr.prototype.ValueTypeName="bool";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Xo;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;let Am=class extends an{};Am.prototype.ValueTypeName="color";let qo=class extends an{};qo.prototype.ValueTypeName="number";let my=class extends ta{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Oi.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ws=class extends an{InterpolantFactoryMethodLinear(e){return new my(this.times,this.values,this.getValueSize(),e)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.DefaultInterpolation=jr;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;let Qr=class extends an{};Qr.prototype.ValueTypeName="string";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Xo;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;let $o=class extends an{};$o.prototype.ValueTypeName="vector";let Ch=class{constructor(e,t=-1,i,n=ou){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=zi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(yy(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(an.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=dy(l);l=Dd(l,1,h),c=Dd(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new qo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,y){if(f.length!==0){const g=[],p=[];Sm(f,g,p,m),g.length!==0&&y.push(new u(d,g,p))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let y=0;y<d[m].morphTargets.length;y++)f[d[m].morphTargets[y]]=-1;for(const y in f){const g=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const x=d[m];g.push(x.time),p.push(x.morphTarget===y?1:0)}n.push(new qo(".morphTargetInfluence["+y+"]",g,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i($o,f+".position",d,"pos",n),i(Ws,f+".quaternion",d,"rot",n),i($o,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function gy(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qo;case"vector":case"vector2":case"vector3":case"vector4":return $o;case"color":return Am;case"quaternion":return Ws;case"bool":case"boolean":return Jr;case"string":return Qr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function yy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gy(r.type);if(r.times===void 0){const t=[],i=[];Sm(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const qr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xy{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const _y=new xy;class ia{constructor(e){this.manager=e!==void 0?e:_y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const mn={};class vy extends Error{constructor(e,t){super(e),this.response=t}}class Tm extends ia{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:i,onError:n});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=mn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let y=0;const g=new ReadableStream({start(p){_();function _(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{y+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:f});for(let b=0,A=h.length;b<A;b++){const E=h[b];E.onProgress&&E.onProgress(v)}p.enqueue(M),_()}})}}});return new Response(g)}else throw new vy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{qr.add(e,c);const h=mn[e];delete mn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=mn[e];if(h===void 0)throw this.manager.itemError(e),c;delete mn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class My extends ia{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Th("img");function l(){h(),qr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class by extends ia{constructor(e){super(e)}load(e,t,i,n){const s=new Dn,o=new My(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}let yu=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};const Ac=new Pe,Fd=new F,Ud=new F;let xu=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ty,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new di(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fd),Ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ud),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};class Sy extends xu{constructor(){super(new uu(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=jo*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wy extends yu{constructor(e,t,i=0,n=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Sy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nd=new Pe,mo=new F,Tc=new F;let Ay=class extends xu{constructor(){super(new uu(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new di(2,1,1,1),new di(0,1,1,1),new di(3,1,1,1),new di(1,1,1,1),new di(3,0,1,1),new di(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),Tc.copy(i.position),Tc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Tc),i.updateMatrixWorld(),n.makeTranslation(-mo.x,-mo.y,-mo.z),Nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd)}},Ty=class extends yu{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ay}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ey=class extends xu{constructor(){super(new fm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Em=class extends yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Ey}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class Ph{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ry extends ia{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){qr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let Cy=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,o;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,o=n;s!==o;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){Oi.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const o=this._workIndex*s;Oi.multiplyQuaternionsFlat(e,o,e,t,e,i),Oi.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,s){const o=1-n;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*n}}};const _u="\\[\\]\\.:\\/",Py=new RegExp("["+_u+"]","g"),vu="[^"+_u+"]",Iy="[^"+_u.replace("\\.","")+"]",Ly=/((?:WC+[\/:])*)/.source.replace("WC",vu),Dy=/(WCOD+)?/.source.replace("WCOD",Iy),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu),Ny=new RegExp("^"+Ly+Dy+Fy+Uy+"$"),By=["material","materials","bones","map"];let zy=class{constructor(e,t,i){const n=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ot=class Lr{constructor(e,t,i){this.path=t,this.parsedPath=i||Lr.parseTrackName(t),this.node=Lr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Lr.Composite(e,t,i):new Lr(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Py,"")}static parseTrackName(e){const t=Ny.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);By.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Lr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=zy;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];let Oy=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Dr,endingEnd:Dr};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=a0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,o=s/n,a=n/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case c0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case ou:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const o=i===l0;if(e===0)return s===-1?n:o&&(s&1)===1?t-n:n;if(i===o0){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Fr,n.endingEnd=Fr):(e?n.endingStart=this.zeroSlopeAtStart?Fr:Dr:n.endingStart=wl,t?n.endingEnd=this.zeroSlopeAtEnd?Fr:Dr:n.endingEnd=wl)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}};const ky=new Float32Array(1);let Vy=class extends ea{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const y=t&&t._propertyBindings[u].binding.parsedPath;m=new Cy(ot.create(i,f,y),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new wm(new Float32Array(2),new Float32Array(2),1,ky),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let o=typeof e=="string"?Ch.findByName(n,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=ou),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Oy(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?Ch.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};const Bd=new F,Ca=new F;let Pn=class{constructor(e=new F,t=new F){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Bd.subVectors(e,this.start),Ca.subVectors(this.end,this.start);const i=Ca.dot(Ca);let s=Ca.dot(Bd)/i;return t&&(s=Ot(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);function Hy(r){const e=[],t=[],i=(w,D=.8)=>new Gs({color:w,roughness:D}),n=[i("#345e4c"),i("#557b52"),i("#8d9c64")],s=i("#776049");i("#7b8e8a");const o=i("#e4d4ac"),a=i("#366c68"),l=i("#b66a47"),c=i("#344c52"),h=new hu(1,1,1),u=i("#a1533d");function d(w,D,I,C,U,N,G,H=!1){const V=new Yi(h,G);return V.position.set(w,D+U/2,I),V.scale.set(C,U,N),V.castShadow=V.receiveShadow=!0,r.add(V),H&&(e.push({x:w,z:I,w:C,h:U,d:N}),t.push(V)),V}const f=new yd(110,110,45,45);f.rotateX(-Math.PI/2);const m=[];for(let w=0;w<f.attributes.position.count;w++){const D=f.attributes.position.getX(w),I=f.attributes.position.getZ(w),C=(Math.sin(D*.31)*Math.cos(I*.37)+1)/2,U=new _t("#405f51").lerp(new _t("#87966d"),C*.65);m.push(U.r,U.g,U.b)}f.setAttribute("color",new wt(m,3));const y=new Yi(f,new Gs({vertexColors:!0,roughness:1}));y.receiveShadow=!0,r.add(y),d(0,.02,0,9,.04,88,i("#b4a485"));for(let w=-42;w<43;w+=3)d(-4.8,.04,w,.35,.13,2.7,o),d(4.8,.04,w,.35,.13,2.7,o);for(let w=-39;w<40;w+=7)d(0,.07,w,.18,.01,2,o);d(24,0,-20,15,4.7,11,a,!0),d(24,4.7,-20,16,.28,12,o);for(let w of[-1,1])for(let D=0;D<4;D++)for(let I=0;I<12;I++){const C=d(16.7+I*1.32,6.5-D*.45,-20+w*(.65+D*1.45),1.28,.18,1.58,D%2?l:u);C.rotation.x=w*.3}for(const w of[19,23,27,30])d(w,1.45,-14.4,2.2,1.8,.12,c),d(w,1.65,-14.31,1.8,1.4,.05,i("#99b9b8",.3)),d(w,2.27,-14.25,.1,.14,.1,o);for(let w=-24;w<-15;w+=2)d(16.4,2,w,.13,1.65,1.25,i("#8fafab",.3));d(24,4.9,-14.1,9,.8,.2,o);const g=document.createElement("canvas");g.width=512,g.height=64;const p=g.getContext("2d");p.fillStyle="#e4d4ac",p.fillRect(0,0,512,64),p.fillStyle="#264f4d",p.textAlign="center",p.font="bold 34px sans-serif",p.fillText("ISLAND RANGER / 03",256,45);const _=new Yi(new yd(8.7,1),new Fs({map:new xm(g)}));_.position.set(24,5.4,-13.95),r.add(_);const x=new _m(.6,.95,1,7),M=new gu(1,0);let v=18361;const b=()=>(v=Math.imul(v,1664525)+1013904223>>>0)/4294967296;for(let w=0;w<65;w++){const D=(b()-.5)*94,I=(b()-.5)*94;if(Math.abs(D)<8||D>14&&D<34&&I>-28&&I<-12||Math.hypot(D,I-22)<6)continue;const C=5+b()*5,U=new Yi(x,s);U.position.set(D,C*.36,I),U.scale.y=C*.72,U.castShadow=!0,r.add(U),e.push({x:D,z:I,w:1.4,h:C*.7,d:1.4}),t.push(U);for(let N=0;N<3;N++){const G=new Yi(M,n[(w+N)%3]);G.position.set(D+Math.sin(N*2.4)*1.4,C*.7+N*.8,I+Math.cos(N*2.4)*1.4),G.scale.set(2.5,1.4,2.5),G.castShadow=!0,r.add(G)}}for(const[w,D]of[[-26,8],[28,-4],[-28,-20],[26,20],[-25,25],[32,6]]){d(w,0,D,3.2,1.4,2.1,c,!0),d(w,1.4,D,3.35,.15,2.25,o);for(const I of[-1,1])d(w+I,.1,D,.13,1.4,2.14,l)}const A=new uy(.5,.8,4),E=new mm(A,n[1],280),S=new Ft;for(let w=0;w<280;w++){const D=(b()-.5)*90,I=(b()-.5)*90;S.position.set(Math.abs(D)<6?D+10:D,.25,I),S.scale.set(1+b(),.5+b(),1+b()),S.rotation.y=b()*6.28,S.updateMatrix(),E.setMatrixAt(w,S.matrix)}r.add(E);for(const w of[-44,44]){d(w,0,0,.4,2.5,90,c,!0);for(let D=-42;D<44;D+=6)d(w,0,D,.75,3,.75,o)}for(const w of[-44,44]){d(0,0,w,90,2.5,.4,c,!0);for(let D=-42;D<44;D+=6)d(D,0,w,.75,3,.75,o)}return{blockers:e,walls:t}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,Al=180/Math.PI;function eo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function jt(r,e,t){return Math.max(e,Math.min(t,r))}function Gy(r,e){return(r%e+e)%e}function Ec(r,e,t){return(1-t)*r+t*e}function Wy(r){return r*yl}function Xy(r){return r*Al}function zd(r){return(r&r-1)===0&&r!==0}function jy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ts(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function st(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ni{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],f=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const v=Math.sqrt(x),b=Math.atan2(v,p*_);g=Math.sin(g*b)/v,a=Math.sin(a*b)/v}const M=a*_;if(l=l*g+d*M,c=c*g+f*M,h=h*g+m*M,u=u*g+y*M,g===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,h=l*i+a*t-s*n,u=l*n+s*i-o*t,d=-s*t-o*i-a*n;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new L,Od=new ni;class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,o,a,l,c,h,u,d,f,m,y,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d+y*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,y=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-y*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qy,e,$y)}lookAt(e,t,i){const n=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Gn.crossVectors(i,ci),Gn.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Gn.crossVectors(i,ci)),Gn.normalize(),Pa.crossVectors(ci,Gn),n[0]=Gn.x,n[4]=Pa.x,n[8]=ci.x,n[1]=Gn.y,n[5]=Pa.y,n[9]=ci.y,n[2]=Gn.z,n[6]=Pa.z,n[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],_=i[3],x=i[7],M=i[11],v=i[15],b=n[0],A=n[4],E=n[8],S=n[12],w=n[1],D=n[5],I=n[9],C=n[13],U=n[2],N=n[6],G=n[10],H=n[14],V=n[3],$=n[7],Y=n[11],he=n[15];return s[0]=o*b+a*w+l*U+c*V,s[4]=o*A+a*D+l*N+c*$,s[8]=o*E+a*I+l*G+c*Y,s[12]=o*S+a*C+l*H+c*he,s[1]=h*b+u*w+d*U+f*V,s[5]=h*A+u*D+d*N+f*$,s[9]=h*E+u*I+d*G+f*Y,s[13]=h*S+u*C+d*H+f*he,s[2]=m*b+y*w+g*U+p*V,s[6]=m*A+y*D+g*N+p*$,s[10]=m*E+y*I+g*G+p*Y,s[14]=m*S+y*C+g*H+p*he,s[3]=_*b+x*w+M*U+v*V,s[7]=_*A+x*D+M*N+v*$,s[11]=_*E+x*I+M*G+v*Y,s[15]=_*S+x*C+M*H+v*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],y=e[7],g=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+y*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+g*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],y=e[13],g=e[14],p=e[15],_=u*g*c-y*d*c+y*l*f-a*g*f-u*l*p+a*d*p,x=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,M=h*y*c-m*u*c+m*a*f-o*y*f-h*a*p+o*u*p,v=m*u*l-h*y*l-m*a*d+o*y*d+h*a*g-o*u*g,b=t*_+i*x+n*M+s*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(y*d*s-u*g*s-y*n*f+i*g*f+u*n*p-i*d*p)*A,e[2]=(a*g*s-y*l*s+y*n*c-i*g*c-a*n*p+i*l*p)*A,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*A,e[4]=x*A,e[5]=(h*g*s-m*d*s+m*n*f-t*g*f-h*n*p+t*d*p)*A,e[6]=(m*l*s-o*g*s-m*n*c+t*g*c+o*n*p-t*l*p)*A,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*A,e[8]=M*A,e[9]=(m*u*s-h*y*s-m*i*f+t*y*f+h*i*p-t*u*p)*A,e[10]=(o*y*s-m*a*s+m*i*c-t*y*c-o*i*p+t*a*p)*A,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*A,e[12]=v*A,e[13]=(h*y*n-m*u*n+m*i*d-t*y*d-h*i*g+t*u*g)*A,e[14]=(m*a*n-o*y*n-m*i*l+t*y*l+o*i*g-t*a*g)*A,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,y=o*h,g=o*u,p=a*u,_=l*c,x=l*h,M=l*u,v=i.x,b=i.y,A=i.z;return n[0]=(1-(y+p))*v,n[1]=(f+M)*v,n[2]=(m-x)*v,n[3]=0,n[4]=(f-M)*b,n[5]=(1-(d+p))*b,n[6]=(g+_)*b,n[7]=0,n[8]=(m+x)*A,n[9]=(g-_)*A,n[10]=(1-(d+y))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=cr.set(n[0],n[1],n[2]).length();const o=cr.set(n[4],n[5],n[6]).length(),a=cr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ii.copy(this);const c=1/s,h=1/o,u=1/a;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=u,Ii.elements[9]*=u,Ii.elements[10]*=u,t.setFromRotationMatrix(Ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(o-s),u=(t+e)*l,d=(i+n)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cr=new L,Ii=new et,qy=new L(0,0,0),$y=new L(1,1,1),Gn=new L,Pa=new L,ci=new L;class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const kd=new et,Vd=new ni;class nn{constructor(e=0,t=0,i=0,n=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],y=n[0],g=n[3],p=n[6],_=n[1],x=n[4],M=n[7],v=n[2],b=n[5],A=n[8];return s[0]=o*y+a*_+l*v,s[3]=o*g+a*x+l*b,s[6]=o*p+a*M+l*A,s[1]=c*y+h*_+u*v,s[4]=c*g+h*x+u*b,s[7]=c*p+h*M+u*A,s[2]=d*y+f*_+m*v,s[5]=d*g+f*x+m*b,s[8]=d*p+f*M+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=u*y,e[1]=(n*c-h*i)*y,e[2]=(a*i-n*o)*y,e[3]=d*y,e[4]=(h*t-n*l)*y,e[5]=(n*s-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new Ve;let Yy=0;const Hd=new L,hr=new ni,gn=new et,Ia=new L,go=new L,Ky=new L,Zy=new ni,Gd=new L(1,0,0),Wd=new L(0,1,0),Xd=new L(0,0,1),Jy={type:"added"},jd={type:"removed"};class vt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new L,t=new nn,i=new ni,n=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new et},normalMatrix:{value:new Ve}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(go,Ia,this.up):gn.lookAt(Ia,go,this.up),this.quaternion.setFromRotationMatrix(gn),n&&(gn.extractRotation(n.matrixWorld),hr.setFromRotationMatrix(gn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,Ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,Zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Rm=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class ii extends Rm{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yl*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qy="152",ex=0,qd=1,tx=2,Cm=1,bu=2,Sn=3,ki=0,si=1,Ki=2,ns=0,Vr=1,Ih=2,$d=3,Yd=4,Pm=5,Ls=100,ix=101,nx=102,Kd=103,Zd=104,sx=200,Im=201,rx=202,ox=203,Lm=204,Su=205,ax=206,lx=207,cx=208,hx=209,ux=210,dx=0,fx=1,px=2,Lh=3,mx=4,gx=5,yx=6,xx=7,kl=0,_x=1,vx=2,In=0,Mx=1,bx=2,Sx=3,Dm=4,wx=5,Fm=300,$r=301,Yr=302,Dh=303,Fh=304,Vl=306,Uh=1e3,Ni=1001,Nh=1002,bt=1003,Jd=1004,Pc=1005,bi=1006,Ax=1007,Yo=1008,Xs=1009,Tx=1010,Ex=1011,Um=1012,Rx=1013,Us=1014,Ns=1015,Ko=1016,Cx=1017,Px=1018,Os=1020,Ix=1021,Si=1023,Lx=1024,Dx=1025,ks=1026,js=1027,Fx=1028,Ux=1029,Nx=1030,Bx=1031,zx=1033,Ic=33776,Lc=33777,Dc=33778,Fc=33779,Qd=35840,ef=35841,tf=35842,nf=35843,Ox=36196,sf=37492,rf=37496,of=37808,af=37809,lf=37810,cf=37811,hf=37812,uf=37813,df=37814,ff=37815,pf=37816,mf=37817,gf=37818,yf=37819,xf=37820,_f=37821,Uc=36492,kx=36283,vf=36284,Mf=36285,bf=36286,Mi=2200,Vx=2201,Hx=2202,Tl=2300,El=2301,Nc=2302,Ur=2400,Nr=2401,Rl=2402,wu=2500,Gx=2501,Nm=3e3,Vs=3001,Wx=3200,Xx=3201,Hl=0,jx=1,Hs="",Le="srgb",sn="srgb-linear",Bm="display-p3",Bc=7680,qx=519,Sf=35044,Kr="300 es",Bh=1035;function Hr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const $x=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Yx=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Kx(r){return r.convertSRGBToLinear().applyMatrix3(Yx)}function Zx(r){return r.applyMatrix3($x).convertLinearToSRGB()}const Jx={[sn]:r=>r,[Le]:r=>r.convertSRGBToLinear(),[Bm]:Kx},Qx={[sn]:r=>r,[Le]:r=>r.convertLinearToSRGB(),[Bm]:Zx},Li={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return sn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Jx[e],n=Qx[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},La={h:0,s:0,l:0};function Oc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Li.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Li.workingColorSpace){return this.r=e,this.g=t,this.b=i,Li.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Li.workingColorSpace){if(e=Gy(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Oc(o,s,e+1/3),this.g=Oc(o,s,e),this.b=Oc(o,s,e-1/3)}return Li.toWorkingColorSpace(this,n),this}setStyle(e,t=Le){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){const i=zm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return Li.fromWorkingColorSpace(Xt.copy(this),e),Math.round(jt(Xt.r*255,0,255))*65536+Math.round(jt(Xt.g*255,0,255))*256+Math.round(jt(Xt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Li.workingColorSpace){Li.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,n=Xt.g,s=Xt.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Li.workingColorSpace){return Li.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Le){Li.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,n=Xt.b;return e!==Le?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),Di.h+=e,Di.s+=t,Di.l+=i,this.setHSL(Di.h,Di.s,Di.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(La);const i=Ec(Di.h,La.h,t),n=Ec(Di.s,La.s,t),s=Ec(Di.l,La.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Fe;Fe.NAMES=zm;class Au extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e=0,t=0,i=0,n=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,v=(p+1)/2,b=(h+d)/4,A=(u+y)/4,E=(m+g)/4;return x>M&&x>v?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=b/i,s=A/i):M>v?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=b/n,s=E/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=A/s,n=E/s),this.set(i,n,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ls{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)xn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Da.subVectors(this.max,yo),dr.subVectors(e.a,yo),fr.subVectors(e.b,yo),pr.subVectors(e.c,yo),Wn.subVectors(fr,dr),Xn.subVectors(pr,fr),gs.subVectors(dr,pr);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-gs.z,gs.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,gs.z,0,-gs.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-gs.y,gs.x,0];return!kc(t,dr,fr,pr,Da)||(t=[1,0,0,0,1,0,0,0,1],!kc(t,dr,fr,pr,Da))?!1:(Fa.crossVectors(Wn,Xn),t=[Fa.x,Fa.y,Fa.z],kc(t,dr,fr,pr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new L,new L,new L,new L,new L,new L,new L,new L],xn=new L,ur=new ls,dr=new L,fr=new L,pr=new L,Wn=new L,Xn=new L,gs=new L,yo=new L,Da=new L,Fa=new L,ys=new L;function kc(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){ys.fromArray(r,s);const a=n.x*Math.abs(ys.x)+n.y*Math.abs(ys.y)+n.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const e_=new ls,xo=new L,Vc=new L;class to{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):e_.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const t=xo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(xo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Vc)),this.expandByPoint(xo.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hc=new L,t_=new L,i_=new Ve;class Cs{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Hc.subVectors(i,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||i_.getNormalMatrix(e),n=this.coplanarPoint(Hc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new to,Ua=new L;class Tu{constructor(e=new Cs,t=new Cs,i=new Cs,n=new Cs,s=new Cs,o=new Cs){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],m=i[10],y=i[11],g=i[12],p=i[13],_=i[14],x=i[15];return t[0].setComponents(a-n,u-l,y-d,x-g).normalize(),t[1].setComponents(a+n,u+l,y+d,x+g).normalize(),t[2].setComponents(a+s,u+c,y+f,x+p).normalize(),t[3].setComponents(a-s,u-c,y-f,x-p).normalize(),t[4].setComponents(a-o,u-h,y-m,x-_).normalize(),t[5].setComponents(a+o,u+h,y+m,x+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ua.x=n.normal.x>0?e.max.x:e.min.x,Ua.y=n.normal.y>0?e.max.y:e.min.y,Ua.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Gc=new et,wf=new L,Af=new L;class Om{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(wf),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class km extends Rm{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n_ extends Om{constructor(){super(new km(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s_ extends Au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new n_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class r_ extends vt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const _s=new L,Tf=new ni,o_=new L,vs=new L;class Ef extends r_{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_s,Tf,o_),vs.set(0,0,1).applyQuaternion(Tf);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(_s.x,i),t.positionY.linearRampToValueAtTime(_s.y,i),t.positionZ.linearRampToValueAtTime(_s.z,i),t.orientationX.linearRampToValueAtTime(vs.x,i),t.orientationY.linearRampToValueAtTime(vs.y,i),t.orientationZ.linearRampToValueAtTime(vs.z,i)}else t.setPosition(_s.x,_s.y,_s.z),t.setOrientation(vs.x,vs.y,vs.z)}}function Vm(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function a_(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}const Rn=l_();function l_(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:o,offsetTable:a}}function hi(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=jt(r,-65504,65504),Rn.floatView[0]=r;const e=Rn.uint32View[0],t=e>>23&511;return Rn.baseTable[t]+((e&8388607)>>Rn.shiftTable[t])}function Na(r){const e=r>>10;return Rn.uint32View[0]=Rn.mantissaTable[Rn.offsetTable[e]+(r&1023)]+Rn.exponentTable[e],Rn.floatView[0]}const xt=new L,Ba=new Ce;class Ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Hm extends Ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gm extends Ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wc extends Ai{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Na(this.array[e*this.itemSize]);return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=hi(t),this}getY(e){let t=Na(this.array[e*this.itemSize+1]);return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=hi(t),this}getZ(e){let t=Na(this.array[e*this.itemSize+2]);return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=hi(t),this}getW(e){let t=Na(this.array[e*this.itemSize+3]);return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=hi(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=hi(t),this.array[e+1]=hi(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.array[e+0]=hi(t),this.array[e+1]=hi(i),this.array[e+2]=hi(n),this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=hi(t),this.array[e+1]=hi(i),this.array[e+2]=hi(n),this.array[e+3]=hi(s),this}}class Xe extends Ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}function Wm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Rf={};function ko(r){r in Rf||(Rf[r]=!0,console.warn(r))}let c_=0;const xi=new et,Xc=new vt,mr=new L,ui=new ls,_o=new ls,It=new L;class mi extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?Gm:Hm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(ui.min,_o.min),ui.expandByPoint(It),It.addVectors(ui.max,_o.max),ui.expandByPoint(It)):(ui.expandByPoint(_o.min),ui.expandByPoint(_o.max))}ui.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),It.add(mr)),n=Math.max(n,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new L,h[w]=new L;const u=new L,d=new L,f=new L,m=new Ce,y=new Ce,g=new Ce,p=new L,_=new L;function x(w,D,I){u.fromArray(n,w*3),d.fromArray(n,D*3),f.fromArray(n,I*3),m.fromArray(o,w*2),y.fromArray(o,D*2),g.fromArray(o,I*2),d.sub(u),f.sub(u),y.sub(m),g.sub(m);const C=1/(y.x*g.y-g.x*y.y);isFinite(C)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-y.y).multiplyScalar(C),_.copy(f).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(C),c[w].add(p),c[D].add(p),c[I].add(p),h[w].add(_),h[D].add(_),h[I].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,D=M.length;w<D;++w){const I=M[w],C=I.start,U=I.count;for(let N=C,G=C+U;N<G;N+=3)x(i[N+0],i[N+1],i[N+2])}const v=new L,b=new L,A=new L,E=new L;function S(w){A.fromArray(s,w*3),E.copy(A);const D=c[w];v.copy(D),v.sub(A.multiplyScalar(A.dot(D))).normalize(),b.crossVectors(E,D);const C=b.dot(h[w])<0?-1:1;l[w*4]=v.x,l[w*4+1]=v.y,l[w*4+2]=v.z,l[w*4+3]=C}for(let w=0,D=M.length;w<D;++w){const I=M[w],C=I.start,U=I.count;for(let N=C,G=C+U;N<G;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ai(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends mi{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function m(y,g,p,_,x,M,v,b,A,E,S){const w=M/A,D=v/E,I=M/2,C=v/2,U=b/2,N=A+1,G=E+1;let H=0,V=0;const $=new L;for(let Y=0;Y<G;Y++){const he=Y*D-C;for(let ie=0;ie<N;ie++){const W=ie*w-I;$[y]=W*_,$[g]=he*x,$[p]=U,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[p]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(ie/A),u.push(1-Y/E),H+=1}}for(let Y=0;Y<E;Y++)for(let he=0;he<A;he++){const ie=d+he+N*Y,W=d+he+N*(Y+1),J=d+(he+1)+N*(Y+1),se=d+(he+1)+N*Y;l.push(ie,W,se),l.push(W,J,se),V+=6}a.addGroup(f,V,S),f+=V,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gl extends mi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],y=[],g=[];for(let p=0;p<h;p++){const _=p*d-o;for(let x=0;x<c;x++){const M=x*u-s;m.push(M,-_,0),y.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const x=_+c*p,M=_+c*(p+1),v=_+1+c*(p+1),b=_+1+c*p;f.push(x,M,b),f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}let h_=0,cs=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Vr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lm,this.blendDst=Su,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bc,this.stencilZFail=Bc,this.stencilZPass=Bc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};function Zr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Kt(r){const e={};for(let t=0;t<r.length;t++){const i=Zr(r[t]);for(const n in i)e[n]=i[n]}return e}function u_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xm(r){return r.getRenderTarget()===null?r.outputColorSpace:sn}const d_={clone:Zr,merge:Kt},f_=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,p_=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Vi extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f_,this.fragmentShader=p_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const _n=new L,jc=new L,za=new L,jn=new L,qc=new L,Oa=new L,$c=new L;class Eu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){jc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(jc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(za),a=jn.dot(this.direction),l=-jn.dot(za),c=jn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(jc).addScaledVector(za,d),f}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),n=_n.dot(_n)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,n,s){qc.subVectors(t,e),Oa.subVectors(i,e),$c.crossVectors(qc,Oa);let o=this.direction.dot($c),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(Oa.crossVectors(jn,Oa));if(l<0)return null;const c=a*this.direction.dot(qc.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot($c);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const Fi=new L,vn=new L,Yc=new L,Mn=new L,gr=new L,yr=new L,Cf=new L,Kc=new L,Zc=new L,Jc=new L;let ka=!1;class Ui{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Fi.subVectors(e,t),n.cross(Fi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Fi.subVectors(n,t),vn.subVectors(i,t),Yc.subVectors(e,t);const o=Fi.dot(Fi),a=Fi.dot(vn),l=Fi.dot(Yc),c=vn.dot(vn),h=vn.dot(Yc),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(e,t,i,n,s,o,a,l){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(e,t,i,n,s,o,a,l)}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Mn),l.setScalar(0),l.addScaledVector(s,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l}static isFrontFacing(e,t,i,n){return Fi.subVectors(i,t),vn.subVectors(e,t),Fi.cross(vn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Fi.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),Ui.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return Ui.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;gr.subVectors(n,i),yr.subVectors(s,i),Kc.subVectors(e,i);const l=gr.dot(Kc),c=yr.dot(Kc);if(l<=0&&c<=0)return t.copy(i);Zc.subVectors(e,n);const h=gr.dot(Zc),u=yr.dot(Zc);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(gr,o);Jc.subVectors(e,s);const f=gr.dot(Jc),m=yr.dot(Jc);if(m>=0&&f<=m)return t.copy(s);const y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(yr,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Cf.subVectors(s,n),a=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Cf,a);const p=1/(g+y+d);return o=y*p,a=d*p,t.copy(i).addScaledVector(gr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Br extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pf=new et,Wi=new Eu,Va=new to,If=new L,xr=new L,_r=new L,vr=new L,Qc=new L,Ha=new L,Ga=new Ce,Wa=new Ce,Xa=new Ce,Lf=new L,Df=new L,Ff=new L,ja=new L,qa=new L;class lt extends vt{constructor(e=new mi,t=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Qc.fromBufferAttribute(u,e),o?Ha.addScaledVector(Qc,h):Ha.addScaledVector(Qc.sub(t),h))}t.add(Ha)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(Va.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Va,If)===null||Wi.origin.distanceToSquared(If)>(e.far-e.near)**2))&&(Pf.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Pf),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,s=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=o.getX(x),b=o.getX(x+1),A=o.getX(x+2);i=$a(this,g,e,Wi,l,c,h,v,b,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=o.getX(y),_=o.getX(y+1),x=o.getX(y+2);i=$a(this,s,e,Wi,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let f=0,m=u.length;f<m;f++){const y=u[f],g=s[y.materialIndex],p=Math.max(y.start,d.start),_=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let x=p,M=_;x<M;x+=3){const v=x,b=x+1,A=x+2;i=$a(this,g,e,Wi,l,c,h,v,b,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const f=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let y=f,g=m;y<g;y+=3){const p=y,_=y+1,x=y+2;i=$a(this,s,e,Wi,l,c,h,p,_,x),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function m_(r,e,t,i,n,s,o,a){let l;if(e.side===si?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===ki,a),l===null)return null;qa.copy(a),qa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:r}}function $a(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,xr),r.getVertexPosition(l,_r),r.getVertexPosition(c,vr);const h=m_(r,e,t,i,xr,_r,vr,ja);if(h){n&&(Ga.fromBufferAttribute(n,a),Wa.fromBufferAttribute(n,l),Xa.fromBufferAttribute(n,c),h.uv=Ui.getInterpolation(ja,xr,_r,vr,Ga,Wa,Xa,new Ce)),s&&(Ga.fromBufferAttribute(s,a),Wa.fromBufferAttribute(s,l),Xa.fromBufferAttribute(s,c),h.uv1=Ui.getInterpolation(ja,xr,_r,vr,Ga,Wa,Xa,new Ce),h.uv2=h.uv1),o&&(Lf.fromBufferAttribute(o,a),Df.fromBufferAttribute(o,l),Ff.fromBufferAttribute(o,c),h.normal=Ui.getInterpolation(ja,xr,_r,vr,Lf,Df,Ff,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Ui.getNormal(xr,_r,vr,u.normal),h.face=u}return h}const g_=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,y_=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,x_=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,__=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,v_=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,M_=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,b_=`
vec3 transformed = vec3( position );
`,S_=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,w_=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,A_=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			 return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,T_=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,E_=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,R_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,C_=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,P_=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,I_=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,L_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,D_=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,F_=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,U_=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,N_=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,B_=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,z_=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,O_=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,k_=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,V_=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,H_=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,G_=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,W_=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,X_=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,j_=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,q_=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,$_=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,Y_=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,K_=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Z_=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,J_=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Q_=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,ev=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,tv=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,iv=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,nv=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,sv=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,rv=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,ov=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,av=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,lv=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,cv=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,hv=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif
`,uv=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,dv=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,fv=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,pv=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,mv=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,gv=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,yv=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,xv=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,_v=`
#ifdef USE_MAP

	diffuseColor *= texture2D( map, vMapUv );

#endif
`,vv=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Mv=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,bv=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Sv=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,wv=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Av=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,Tv=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,Ev=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,Rv=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,Cv=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#ifdef USE_NORMALMAP_TANGENTSPACE

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,Pv=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Iv=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Lv=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Dv=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Fv=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,Uv=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Nv=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,Bv=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,zv=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Ov=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,kv=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,Vv=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Hv=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Gv=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Wv=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Xv=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,jv=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,qv=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,$v=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Yv=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,Kv=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,Zv=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Jv=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );

		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );

		y = dy * ( y + 0.5 );

		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

		mat4 bone = mat4( v1, v2, v3, v4 );

		return bone;

	}

#endif
`,Qv=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,eM=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,tM=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,iM=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,nM=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,sM=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,rM=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );

#endif
`,oM=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,aM=`
#ifdef USE_UV

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,lM=`
#ifdef USE_UV

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,cM=`
#ifdef USE_UV

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,hM=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,uM=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,dM=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,fM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,pM=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,mM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,gM=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,yM=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,xM=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,_M=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,vM=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,MM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,bM=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,SM=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,wM=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,AM=`
#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,TM=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,EM=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,RM=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,CM=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,PM=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,IM=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,LM=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,DM=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,FM=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,UM=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,NM=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,BM=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,zM=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,OM=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,kM=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,VM=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,HM=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,GM=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,WM=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Ie={alphamap_fragment:g_,alphamap_pars_fragment:y_,alphatest_fragment:x_,alphatest_pars_fragment:__,aomap_fragment:v_,aomap_pars_fragment:M_,begin_vertex:b_,beginnormal_vertex:S_,bsdfs:w_,iridescence_fragment:A_,bumpmap_pars_fragment:T_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:R_,clipping_planes_pars_vertex:C_,clipping_planes_vertex:P_,color_fragment:I_,color_pars_fragment:L_,color_pars_vertex:D_,color_vertex:F_,common:U_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:B_,displacementmap_pars_vertex:z_,displacementmap_vertex:O_,emissivemap_fragment:k_,emissivemap_pars_fragment:V_,encodings_fragment:H_,encodings_pars_fragment:G_,envmap_fragment:W_,envmap_common_pars_fragment:X_,envmap_pars_fragment:j_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:rv,envmap_vertex:$_,fog_vertex:Y_,fog_pars_vertex:K_,fog_fragment:Z_,fog_pars_fragment:J_,gradientmap_pars_fragment:Q_,lightmap_fragment:ev,lightmap_pars_fragment:tv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:nv,lights_pars_begin:sv,lights_toon_fragment:ov,lights_toon_pars_fragment:av,lights_phong_fragment:lv,lights_phong_pars_fragment:cv,lights_physical_fragment:hv,lights_physical_pars_fragment:uv,lights_fragment_begin:dv,lights_fragment_maps:fv,lights_fragment_end:pv,logdepthbuf_fragment:mv,logdepthbuf_pars_fragment:gv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:xv,map_fragment:_v,map_pars_fragment:vv,map_particle_fragment:Mv,map_particle_pars_fragment:bv,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:wv,morphcolor_vertex:Av,morphnormal_vertex:Tv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Pv,normal_pars_fragment:Iv,normal_pars_vertex:Lv,normal_vertex:Dv,normalmap_pars_fragment:Fv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:zv,output_fragment:Ov,packing:kv,premultiplied_alpha_fragment:Vv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:jv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:$v,shadowmap_vertex:Yv,shadowmask_pars_fragment:Kv,skinbase_vertex:Zv,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:eM,specularmap_fragment:tM,specularmap_pars_fragment:iM,tonemapping_fragment:nM,tonemapping_pars_fragment:sM,transmission_fragment:rM,transmission_pars_fragment:oM,uv_pars_fragment:aM,uv_pars_vertex:lM,uv_vertex:cM,worldpos_vertex:hM,background_vert:uM,background_frag:dM,backgroundCube_vert:fM,backgroundCube_frag:pM,cube_vert:mM,cube_frag:gM,depth_vert:yM,depth_frag:xM,distanceRGBA_vert:_M,distanceRGBA_frag:vM,equirect_vert:MM,equirect_frag:bM,linedashed_vert:SM,linedashed_frag:wM,meshbasic_vert:AM,meshbasic_frag:TM,meshlambert_vert:EM,meshlambert_frag:RM,meshmatcap_vert:CM,meshmatcap_frag:PM,meshnormal_vert:IM,meshnormal_frag:LM,meshphong_vert:DM,meshphong_frag:FM,meshphysical_vert:UM,meshphysical_frag:NM,meshtoon_vert:BM,meshtoon_frag:zM,points_vert:OM,points_frag:kM,shadow_vert:VM,shadow_frag:HM,sprite_vert:GM,sprite_frag:WM},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},qi={basic:{uniforms:Kt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Kt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Kt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Kt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Kt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Kt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Kt([re.points,re.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Kt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Kt([re.common,re.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Kt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Kt([re.sprite,re.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Kt([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Kt([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};qi.physical={uniforms:Kt([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Ya={r:0,b:0,g:0};function XM(r,e,t,i,n,s,o){const a=new Fe(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(g,p){let _=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?y(a,l):x&&x.isColor&&(y(x,1),_=!0),r.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vl)?(h===void 0&&(h=new lt(new Qi(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Zr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Le,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new Gl(2,2),new Vi({name:"BackgroundMaterial",uniforms:Zr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Le,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,p){g.getRGB(Ya,Xm(r)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:m}}function jM(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,h=!1;function u(U,N,G,H,V){let $=!1;if(o){const Y=y(H,G,N);c!==Y&&(c=Y,f(c.object)),$=p(U,H,G,V),$&&_(U,H,G,V)}else{const Y=N.wireframe===!0;(c.geometry!==H.id||c.program!==G.id||c.wireframe!==Y)&&(c.geometry=H.id,c.program=G.id,c.wireframe=Y,$=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,E(U,N,G,H),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(U){return i.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function m(U){return i.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,N,G){const H=G.wireframe===!0;let V=a[U.id];V===void 0&&(V={},a[U.id]=V);let $=V[N.id];$===void 0&&($={},V[N.id]=$);let Y=$[H];return Y===void 0&&(Y=g(d()),$[H]=Y),Y}function g(U){const N=[],G=[],H=[];for(let V=0;V<n;V++)N[V]=0,G[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:H,object:U,attributes:{},index:null}}function p(U,N,G,H){const V=c.attributes,$=N.attributes;let Y=0;const he=G.getAttributes();for(const ie in he)if(he[ie].location>=0){const J=V[ie];let se=$[ie];if(se===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;Y++}return c.attributesNum!==Y||c.index!==H}function _(U,N,G,H){const V={},$=N.attributes;let Y=0;const he=G.getAttributes();for(const ie in he)if(he[ie].location>=0){let J=$[ie];J===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),V[ie]=se,Y++}c.attributes=V,c.attributesNum=Y,c.index=H}function x(){const U=c.newAttributes;for(let N=0,G=U.length;N<G;N++)U[N]=0}function M(U){v(U,0)}function v(U,N){const G=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;G[U]=1,H[U]===0&&(r.enableVertexAttribArray(U),H[U]=1),V[U]!==N&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,N),V[U]=N)}function b(){const U=c.newAttributes,N=c.enabledAttributes;for(let G=0,H=N.length;G<H;G++)N[G]!==U[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function A(U,N,G,H,V,$){i.isWebGL2===!0&&(G===r.INT||G===r.UNSIGNED_INT)?r.vertexAttribIPointer(U,N,G,V,$):r.vertexAttribPointer(U,N,G,H,V,$)}function E(U,N,G,H){if(i.isWebGL2===!1&&(U.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=H.attributes,$=G.getAttributes(),Y=N.defaultAttributeValues;for(const he in $){const ie=$[he];if(ie.location>=0){let W=V[he];if(W===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(W=U.instanceColor)),W!==void 0){const J=W.normalized,se=W.itemSize,ae=t.get(W);if(ae===void 0)continue;const z=ae.buffer,De=ae.type,Te=ae.bytesPerElement;if(W.isInterleavedBufferAttribute){const oe=W.data,we=oe.stride,$e=W.offset;if(oe.isInstancedInterleavedBuffer){for(let ye=0;ye<ie.locationSize;ye++)v(ie.location+ye,oe.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<ie.locationSize;ye++)M(ie.location+ye);r.bindBuffer(r.ARRAY_BUFFER,z);for(let ye=0;ye<ie.locationSize;ye++)A(ie.location+ye,se/ie.locationSize,De,J,we*Te,($e+se/ie.locationSize*ye)*Te)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<ie.locationSize;oe++)v(ie.location+oe,W.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<ie.locationSize;oe++)M(ie.location+oe);r.bindBuffer(r.ARRAY_BUFFER,z);for(let oe=0;oe<ie.locationSize;oe++)A(ie.location+oe,se/ie.locationSize,De,J,se*Te,se/ie.locationSize*oe*Te)}}else if(Y!==void 0){const J=Y[he];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ie.location,J);break;case 3:r.vertexAttrib3fv(ie.location,J);break;case 4:r.vertexAttrib4fv(ie.location,J);break;default:r.vertexAttrib1fv(ie.location,J)}}}}b()}function S(){I();for(const U in a){const N=a[U];for(const G in N){const H=N[G];for(const V in H)m(H[V].object),delete H[V];delete N[G]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;const N=a[U.id];for(const G in N){const H=N[G];for(const V in H)m(H[V].object),delete H[V];delete N[G]}delete a[U.id]}function D(U){for(const N in a){const G=a[N];if(G[U.id]===void 0)continue;const H=G[U.id];for(const V in H)m(H[V].object),delete H[V];delete G[U.id]}}function I(){C(),h=!0,c!==l&&(c=l,f(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:I,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function qM(r,e,t,i){const n=i.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function $M(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||e.has("OES_texture_float"),v=x&&M,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:y,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:b}}function YM(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new Cs,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{const _=s?0:i,x=_*4;let M=p.clippingState||null;l.value=M,M=h(m,d,x,f);for(let v=0;v!==x;++v)M[v]=t[v];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const y=u!==null?u.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const p=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,M=f;x!==y;++x,M+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}let Mr;class jm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Cl("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Hr(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hr(t[i]/255)*255):t[i]=Hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class qm{constructor(e=null){this.isSource=!0,this.uuid=eo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(eh(n[o].image)):s.push(eh(n[o]))}else s=eh(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KM=0;class ri extends as{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=Ni,n=Ni,s=bi,o=Yo,a=Si,l=Xs,c=ri.DEFAULT_ANISOTROPY,h=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=eo(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vs?Le:Hs),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uh:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uh:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?Vs:Nm}set encoding(e){ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vs?Le:Hs}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=Fm;ri.DEFAULT_ANISOTROPY=1;class Fn extends as{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(ko("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vs?Le:Hs),this.texture=new ri(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}const br=-90,Sr=1;class ZM extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new ii(br,Sr,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new ii(br,Sr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new ii(br,Sr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ii(br,Sr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ii(br,Sr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ii(br,Sr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=In,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Ru extends ri{constructor(e,t,i,n,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JM extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(ko("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vs?Le:Hs),this.texture=new Ru(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Qi(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:ns});s.uniforms.tEquirect.value=t;const o=new lt(n,s),a=t.minFilter;return t.minFilter===Yo&&(t.minFilter=bi),new ZM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}function QM(r){let e=new WeakMap;function t(o,a){return a===Dh?o.mapping=$r:a===Fh&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dh||a===Fh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new JM(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const zr=4,Uf=[.125,.215,.35,.446,.526,.582],Ds=20,th=new km,Nf=new Fe;let ih=null;const Ps=(1+Math.sqrt(5))/2,wr=1/Ps,Bf=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ps,wr),new L(0,Ps,-wr),new L(wr,0,Ps),new L(-wr,0,Ps),new L(Ps,wr,0),new L(-Ps,wr,0)];class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ih=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ih),e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ko,format:Si,colorSpace:sn,depthBuffer:!1},n=zf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(s)),this._blurMaterial=tb(s,e,t)}return n}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,th)}_sceneToCubeUV(e,t,i,n){const a=new ii(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Nf),h.toneMapping=In,h.autoClear=!1;const f=new Br({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),m=new lt(new Qi,f);let y=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,y=!0):(f.color.copy(Nf),y=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ka(n,_*x,p>2?x:0,x,x),h.setRenderTarget(n),y&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===$r||e.mapping===Yr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ka(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,th)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Bf[(n-1)%Bf.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),y=s/m,g=isFinite(s)?1+Math.floor(h*y):Ds;g>Ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);const p=[];let _=0;for(let A=0;A<Ds;++A){const E=A/y,S=Math.exp(-E*E/2);p.push(S),A===0?_+=S:A<g&&(_+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const M=this._sizeLods[n],v=3*M*(n>x-zr?n-x+zr:0),b=4*(this._cubeSize-M);Ka(t,v,b,3*M,2*M),l.setRenderTarget(t),l.render(u,th)}}function eb(r){const e=[],t=[],i=[];let n=r;const s=r-zr+1+Uf.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-zr?l=Uf[o-r+zr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,y=3,g=2,p=1,_=new Float32Array(y*m*f),x=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,E=b>2?0:-1,S=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];_.set(S,y*m*b),x.set(d,g*m*b);const w=[b,b,b,b,b,b];M.set(w,p*m*b)}const v=new mi;v.setAttribute("position",new Ai(_,y)),v.setAttribute("uv",new Ai(x,g)),v.setAttribute("faceIndex",new Ai(M,p)),e.push(v),n>zr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zf(r,e,t){const i=new Fn(r,e,t);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function tb(r,e,t){const i=new Float32Array(Ds),n=new L(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Of(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function kf(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ib(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dh||l===Fh,h=l===$r||l===Yr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new zh(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new zh(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nb(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function sb(r,e,t,i){const n={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const y=f[m];for(let g=0,p=y.length;g<p;g++)e.update(y[g],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let y=0;if(f!==null){const _=f.array;y=f.version;for(let x=0,M=_.length;x<M;x+=3){const v=_[x+0],b=_[x+1],A=_[x+2];d.push(v,b,b,A,A,v)}}else{const _=m.array;y=m.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const v=x+0,b=x+1,A=x+2;d.push(v,b,b,A,A,v)}}const g=new(Wm(d)?Gm:Hm)(d,1);g.version=y;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rb(r,e,t,i){const n=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let y,g;if(n)y=r,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,f,a,d*l,m),t.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function ob(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class $m extends ri{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function ab(r,e){return r[0]-e[0]}function lb(r,e){return Math.abs(e[1])-Math.abs(r[1])}function cb(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=m!==void 0?m.length:0;let g=s.get(h);if(g===void 0||g.count!==y){let N=function(){C.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var f=N;g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),v===!0&&(S=3);let w=h.attributes.position.count*S,D=1;w>e.maxTextureSize&&(D=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const I=new Float32Array(w*D*4*y),C=new $m(I,w,D,y);C.type=Ns,C.needsUpdate=!0;const U=S*4;for(let G=0;G<y;G++){const H=b[G],V=A[G],$=E[G],Y=w*D*4*G;for(let he=0;he<H.count;he++){const ie=he*U;x===!0&&(o.fromBufferAttribute(H,he),I[Y+ie+0]=o.x,I[Y+ie+1]=o.y,I[Y+ie+2]=o.z,I[Y+ie+3]=0),M===!0&&(o.fromBufferAttribute(V,he),I[Y+ie+4]=o.x,I[Y+ie+5]=o.y,I[Y+ie+6]=o.z,I[Y+ie+7]=0),v===!0&&(o.fromBufferAttribute($,he),I[Y+ie+8]=o.x,I[Y+ie+9]=o.y,I[Y+ie+10]=o.z,I[Y+ie+11]=$.itemSize===4?o.w:1)}}g={count:y,texture:C,size:new Ce(w,D)},s.set(h,g),h.addEventListener("dispose",N)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let y=i[h.id];if(y===void 0||y.length!==m){y=[];for(let M=0;M<m;M++)y[M]=[M,0];i[h.id]=y}for(let M=0;M<m;M++){const v=y[M];v[0]=M,v[1]=d[M]}y.sort(lb);for(let M=0;M<8;M++)M<m&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ab);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const v=a[M],b=v[0],A=v[1];b!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+M)!==g[b]&&h.setAttribute("morphTarget"+M,g[b]),p&&h.getAttribute("morphNormal"+M)!==p[b]&&h.setAttribute("morphNormal"+M,p[b]),n[M]=A,_+=A):(g&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),n[M]=0)}const x=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function hb(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ub extends ri{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ym=new ri,Km=new $m,Zm=new ub,Jm=new Ru,Vf=[],Hf=[],Gf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function io(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Vf[n];if(s===void 0&&(s=new Float32Array(n),Vf[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Wl(r,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function gb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,i))return;Xf.set(i),r.uniformMatrix2fv(this.addr,!1,Xf),Tt(t,i)}}function yb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,i))return;Wf.set(i),r.uniformMatrix3fv(this.addr,!1,Wf),Tt(t,i)}}function xb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,i))return;Gf.set(i),r.uniformMatrix4fv(this.addr,!1,Gf),Tt(t,i)}}function _b(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function Mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function Sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function Ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function Tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function Eb(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Ym,n)}function Rb(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Zm,n)}function Cb(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Jm,n)}function Pb(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Km,n)}function Ib(r){switch(r){case 5126:return db;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return yb;case 35676:return xb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return Mb;case 35669:case 35673:return bb;case 5125:return Sb;case 36294:return wb;case 36295:return Ab;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Lb(r,e){r.uniform1fv(this.addr,e)}function Db(r,e){const t=io(e,this.size,2);r.uniform2fv(this.addr,t)}function Fb(r,e){const t=io(e,this.size,3);r.uniform3fv(this.addr,t)}function Ub(r,e){const t=io(e,this.size,4);r.uniform4fv(this.addr,t)}function Nb(r,e){const t=io(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bb(r,e){const t=io(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zb(r,e){const t=io(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ob(r,e){r.uniform1iv(this.addr,e)}function kb(r,e){r.uniform2iv(this.addr,e)}function Vb(r,e){r.uniform3iv(this.addr,e)}function Hb(r,e){r.uniform4iv(this.addr,e)}function Gb(r,e){r.uniform1uiv(this.addr,e)}function Wb(r,e){r.uniform2uiv(this.addr,e)}function Xb(r,e){r.uniform3uiv(this.addr,e)}function jb(r,e){r.uniform4uiv(this.addr,e)}function qb(r,e,t){const i=this.cache,n=e.length,s=Wl(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Ym,s[o])}function $b(r,e,t){const i=this.cache,n=e.length,s=Wl(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Zm,s[o])}function Yb(r,e,t){const i=this.cache,n=e.length,s=Wl(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Jm,s[o])}function Kb(r,e,t){const i=this.cache,n=e.length,s=Wl(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Km,s[o])}function Zb(r){switch(r){case 5126:return Lb;case 35664:return Db;case 35665:return Fb;case 35666:return Ub;case 35674:return Nb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return Ob;case 35667:case 35671:return kb;case 35668:case 35672:return Vb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Wb;case 36295:return Xb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Kb}}class Jb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ib(t.type)}}class Qb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Zb(t.type)}}class eS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function jf(r,e){r.seq.push(e),r.map[e.id]=e}function tS(r,e,t){const i=r.name,n=i.length;for(nh.lastIndex=0;;){const s=nh.exec(i),o=nh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){jf(t,c===void 0?new Jb(a,r,e):new Qb(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new eS(a),jf(t,u)),t=u}}}class xl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);tS(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function qf(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let iS=0;function nS(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function sS(r){switch(r){case sn:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function $f(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+nS(r.getShaderSource(e),o)}else return n}function rS(r,e){const t=sS(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function oS(r,e){let t;switch(e){case Mx:t="Linear";break;case bx:t="Reinhard";break;case Sx:t="OptimizedCineon";break;case Dm:t="ACESFilmic";break;case wx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aS(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lo).join(`
`)}function lS(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cS(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Lo(r){return r!==""}function Yf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(r){return r.replace(hS,uS)}function uS(r,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Oh(t)}const dS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(r){return r.replace(dS,fS)}function fS(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Jf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function mS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $r:case Yr:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function yS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case _x:e="ENVMAP_BLENDING_MIX";break;case vx:e="ENVMAP_BLENDING_ADD";break}return e}function xS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _S(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pS(t),c=mS(t),h=gS(t),u=yS(t),d=xS(t),f=t.isWebGL2?"":aS(t),m=lS(s),y=n.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[m].filter(Lo).join(`
`),g.length>0&&(g+=`
`),p=[f,m].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(g=[Jf(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[f,Jf(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ie.tonemapping_pars_fragment:"",t.toneMapping!==In?oS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,rS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Oh(o),o=Yf(o,t),o=Kf(o,t),a=Oh(a),a=Yf(a,t),a=Kf(a,t),o=Zf(o),a=Zf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Kr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+g+o,M=_+p+a,v=qf(n,n.VERTEX_SHADER,x),b=qf(n,n.FRAGMENT_SHADER,M);if(n.attachShader(y,v),n.attachShader(y,b),t.index0AttributeName!==void 0?n.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y),r.debug.checkShaderErrors){const S=n.getProgramInfoLog(y).trim(),w=n.getShaderInfoLog(v).trim(),D=n.getShaderInfoLog(b).trim();let I=!0,C=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,v,b);else{const U=$f(n,v,"vertex"),N=$f(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+U+`
`+N)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||D==="")&&(C=!1);C&&(this.diagnostics={runnable:I,programLog:S,vertexShader:{log:w,prefix:g},fragmentShader:{log:D,prefix:p}})}n.deleteShader(v),n.deleteShader(b);let A;this.getUniforms=function(){return A===void 0&&(A=new xl(n,y)),A};let E;return this.getAttributes=function(){return E===void 0&&(E=cS(n,y)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=iS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=b,this}let vS=0;class MS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bS(e),t.set(e,i)),i}}class bS{constructor(e){this.id=vS++,this.code=e,this.usedTimes=0}}function SS(r,e,t,i,n,s,o){const a=new Mu,l=new MS,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===1?"uv1":S===2?"uv2":S===3?"uv3":"uv"}function g(S,w,D,I,C){const U=I.fog,N=C.geometry,G=S.isMeshStandardMaterial?I.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),V=H&&H.mapping===Vl?H.image.height:null,$=m[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=Y!==void 0?Y.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let W,J,se,ae;if($){const tt=qi[$];W=tt.vertexShader,J=tt.fragmentShader}else W=S.vertexShader,J=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);const z=r.getRenderTarget(),De=C.isInstancedMesh===!0,Te=!!S.map,oe=!!S.matcap,we=!!H,$e=!!S.aoMap,ye=!!S.lightMap,ze=!!S.bumpMap,Et=!!S.normalMap,Ut=!!S.displacementMap,Rt=!!S.emissiveMap,Mt=!!S.metalnessMap,Ye=!!S.roughnessMap,ct=S.clearcoat>0,ei=S.iridescence>0,P=S.sheen>0,T=S.transmission>0,X=ct&&!!S.clearcoatMap,te=ct&&!!S.clearcoatNormalMap,ne=ct&&!!S.clearcoatRoughnessMap,le=ei&&!!S.iridescenceMap,Ae=ei&&!!S.iridescenceThicknessMap,de=P&&!!S.sheenColorMap,K=P&&!!S.sheenRoughnessMap,pe=!!S.specularMap,_e=!!S.specularColorMap,Me=!!S.specularIntensityMap,ue=T&&!!S.transmissionMap,me=T&&!!S.thicknessMap,He=!!S.gradientMap,Ze=!!S.alphaMap,ft=S.alphaTest>0,B=!!S.extensions,j=!!N.attributes.uv1,ee=!!N.attributes.uv2,ce=!!N.attributes.uv3;return{isWebGL2:h,shaderID:$,shaderName:S.type,vertexShader:W,fragmentShader:J,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:De,instancingColor:De&&C.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:z===null?r.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:sn,map:Te,matcap:oe,envMap:we,envMapMode:we&&H.mapping,envMapCubeUVHeight:V,aoMap:$e,lightMap:ye,bumpMap:ze,normalMap:Et,displacementMap:d&&Ut,emissiveMap:Rt,normalMapObjectSpace:Et&&S.normalMapType===jx,normalMapTangentSpace:Et&&S.normalMapType===Hl,metalnessMap:Mt,roughnessMap:Ye,clearcoat:ct,clearcoatMap:X,clearcoatNormalMap:te,clearcoatRoughnessMap:ne,iridescence:ei,iridescenceMap:le,iridescenceThicknessMap:Ae,sheen:P,sheenColorMap:de,sheenRoughnessMap:K,specularMap:pe,specularColorMap:_e,specularIntensityMap:Me,transmission:T,transmissionMap:ue,thicknessMap:me,gradientMap:He,opaque:S.transparent===!1&&S.blending===Vr,alphaMap:Ze,alphaTest:ft,combine:S.combine,mapUv:Te&&y(S.map.channel),aoMapUv:$e&&y(S.aoMap.channel),lightMapUv:ye&&y(S.lightMap.channel),bumpMapUv:ze&&y(S.bumpMap.channel),normalMapUv:Et&&y(S.normalMap.channel),displacementMapUv:Ut&&y(S.displacementMap.channel),emissiveMapUv:Rt&&y(S.emissiveMap.channel),metalnessMapUv:Mt&&y(S.metalnessMap.channel),roughnessMapUv:Ye&&y(S.roughnessMap.channel),clearcoatMapUv:X&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:K&&y(S.sheenRoughnessMap.channel),specularMapUv:pe&&y(S.specularMap.channel),specularColorMapUv:_e&&y(S.specularColorMap.channel),specularIntensityMapUv:Me&&y(S.specularIntensityMap.channel),transmissionMapUv:ue&&y(S.transmissionMap.channel),thicknessMapUv:me&&y(S.thicknessMap.channel),alphaMapUv:Ze&&y(S.alphaMap.channel),vertexTangents:Et&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:ee,vertexUv3s:ce,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Te||Ze),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:In,useLegacyLights:r.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ki,flipSided:S.side===si,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:B&&S.extensions.derivatives===!0,extensionFragDepth:B&&S.extensions.fragDepth===!0,extensionDrawBuffers:B&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)w.push(D),w.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(_(w,S),x(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const w=m[S.type];let D;if(w){const I=qi[w];D=d_.clone(I.uniforms)}else D=S.uniforms;return D}function v(S,w){let D;for(let I=0,C=c.length;I<C;I++){const U=c[I];if(U.cacheKey===w){D=U,++D.usedTimes;break}}return D===void 0&&(D=new _S(r,w,S,s),c.push(D)),D}function b(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:E}}function wS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function AS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ep(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,f,m,y,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=y,p.group=g),e++,p}function a(u,d,f,m,y,g){const p=o(u,d,f,m,y,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,m,y,g){const p=o(u,d,f,m,y,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||AS),i.length>1&&i.sort(d||Qf),n.length>1&&n.sort(d||Qf)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function TS(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new ep,r.set(i,[o])):n>=s.length?(o=new ep,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ES(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function RS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let CS=0;function PS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function IS(r,e){const t=new ES,i=RS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new L);const s=new L,o=new et,a=new et;function l(h,u){let d=0,f=0,m=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let y=0,g=0,p=0,_=0,x=0,M=0,v=0,b=0,A=0,E=0;h.sort(PS);const S=u===!0?Math.PI:1;for(let D=0,I=h.length;D<I;D++){const C=h[D],U=C.color,N=C.intensity,G=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=U.r*N*S,f+=U.g*N*S,m+=U.b*N*S;else if(C.isLightProbe)for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],N);else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){const $=C.shadow,Y=i.get(C);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.directionalShadow[y]=Y,n.directionalShadowMap[y]=H,n.directionalShadowMatrix[y]=C.shadow.matrix,M++}n.directional[y]=V,y++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(N*S),V.distance=G,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[p]=V;const $=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,$.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[p]=$.matrix,C.castShadow){const Y=i.get(C);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.spotShadow[p]=Y,n.spotShadowMap[p]=H,b++}p++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(U).multiplyScalar(N),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=V,_++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*S),V.distance=C.distance,V.decay=C.decay,C.castShadow){const $=C.shadow,Y=i.get(C);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(N*S),V.groundColor.copy(C.groundColor).multiplyScalar(N*S),n.hemi[x]=V,x++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const w=n.hash;(w.directionalLength!==y||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==_||w.hemiLength!==x||w.numDirectionalShadows!==M||w.numPointShadows!==v||w.numSpotShadows!==b||w.numSpotMaps!==A)&&(n.directional.length=y,n.spot.length=p,n.rectArea.length=_,n.point.length=g,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,w.directionalLength=y,w.pointLength=g,w.spotLength=p,w.rectAreaLength=_,w.hemiLength=x,w.numDirectionalShadows=M,w.numPointShadows=v,w.numSpotShadows=b,w.numSpotMaps=A,n.version=CS++)}function c(h,u){let d=0,f=0,m=0,y=0,g=0;const p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const M=h[_];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(M.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const v=n.rectArea[y];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:n}}function tp(r,e){const t=new IS(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function LS(r,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new tp(r,e),t.set(s,[l])):o>=a.length?(l=new tp(r,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class DS extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const US=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,NS=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function BS(r,e,t){let i=new Tu;const n=new Ce,s=new Ce,o=new at,a=new DS({depthPacking:Xx}),l=new FS,c={},h=t.maxTextureSize,u={[ki]:si,[si]:ki,[Ki]:Ki},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:US,fragmentShader:NS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new mi;m.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new lt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let p=this.type;this.render=function(v,b,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const E=r.getRenderTarget(),S=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ns),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==Sn&&this.type===Sn,C=p===Sn&&this.type!==Sn;for(let U=0,N=v.length;U<N;U++){const G=v[U],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const V=H.getFrameExtents();if(n.multiply(V),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/V.x),n.x=s.x*V.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/V.y),n.y=s.y*V.y,H.mapSize.y=s.y)),H.map===null||I===!0||C===!0){const Y=this.type!==Sn?{minFilter:bt,magFilter:bt}:{};H.map!==null&&H.map.dispose(),H.map=new Fn(n.x,n.y,Y),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const $=H.getViewportCount();for(let Y=0;Y<$;Y++){const he=H.getViewport(Y);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),D.viewport(o),H.updateMatrices(G,Y),i=H.getFrustum(),M(b,A,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===Sn&&_(H,A),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(E,S,w)};function _(v,b){const A=e.update(y);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Fn(n.x,n.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(b,null,A,d,y,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(b,null,A,f,y,null)}function x(v,b,A,E){let S=null;const w=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)S=w;else if(S=A.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=S.uuid,I=b.uuid;let C=c[D];C===void 0&&(C={},c[D]=C);let U=C[I];U===void 0&&(U=S.clone(),C[I]=U),S=U}if(S.visible=b.visible,S.wireframe=b.wireframe,E===Sn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=r.properties.get(S);D.light=A}return S}function M(v,b,A,E,S){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===Sn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const I=e.update(v),C=v.material;if(Array.isArray(C)){const U=I.groups;for(let N=0,G=U.length;N<G;N++){const H=U[N],V=C[H.materialIndex];if(V&&V.visible){const $=x(v,V,E,S);r.renderBufferDirect(A,null,I,$,v,H)}}}else if(C.visible){const U=x(v,C,E,S);r.renderBufferDirect(A,null,I,U,v,null)}}const D=v.children;for(let I=0,C=D.length;I<C;I++)M(D[I],b,A,E,S)}}function zS(r,e,t){const i=t.isWebGL2;function n(){let B=!1;const j=new at;let ee=null;const ce=new at(0,0,0,0);return{setMask:function(fe){ee!==fe&&!B&&(r.colorMask(fe,fe,fe,fe),ee=fe)},setLocked:function(fe){B=fe},setClear:function(fe,tt,it,Vt,Bn){Bn===!0&&(fe*=Vt,tt*=Vt,it*=Vt),j.set(fe,tt,it,Vt),ce.equals(j)===!1&&(r.clearColor(fe,tt,it,Vt),ce.copy(j))},reset:function(){B=!1,ee=null,ce.set(-1,0,0,0)}}}function s(){let B=!1,j=null,ee=null,ce=null;return{setTest:function(fe){fe?z(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(fe){j!==fe&&!B&&(r.depthMask(fe),j=fe)},setFunc:function(fe){if(ee!==fe){switch(fe){case dx:r.depthFunc(r.NEVER);break;case fx:r.depthFunc(r.ALWAYS);break;case px:r.depthFunc(r.LESS);break;case Lh:r.depthFunc(r.LEQUAL);break;case mx:r.depthFunc(r.EQUAL);break;case gx:r.depthFunc(r.GEQUAL);break;case yx:r.depthFunc(r.GREATER);break;case xx:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=fe}},setLocked:function(fe){B=fe},setClear:function(fe){ce!==fe&&(r.clearDepth(fe),ce=fe)},reset:function(){B=!1,j=null,ee=null,ce=null}}}function o(){let B=!1,j=null,ee=null,ce=null,fe=null,tt=null,it=null,Vt=null,Bn=null;return{setTest:function(pt){B||(pt?z(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(pt){j!==pt&&!B&&(r.stencilMask(pt),j=pt)},setFunc:function(pt,gi,Hi){(ee!==pt||ce!==gi||fe!==Hi)&&(r.stencilFunc(pt,gi,Hi),ee=pt,ce=gi,fe=Hi)},setOp:function(pt,gi,Hi){(tt!==pt||it!==gi||Vt!==Hi)&&(r.stencilOp(pt,gi,Hi),tt=pt,it=gi,Vt=Hi)},setLocked:function(pt){B=pt},setClear:function(pt){Bn!==pt&&(r.clearStencil(pt),Bn=pt)},reset:function(){B=!1,j=null,ee=null,ce=null,fe=null,tt=null,it=null,Vt=null,Bn=null}}}const a=new n,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,y=[],g=null,p=!1,_=null,x=null,M=null,v=null,b=null,A=null,E=null,S=!1,w=null,D=null,I=null,C=null,U=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,H=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=H>=2);let $=null,Y={};const he=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),W=new at().fromArray(he),J=new at().fromArray(ie);function se(B,j,ee,ce){const fe=new Uint8Array(4),tt=r.createTexture();r.bindTexture(B,tt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<ee;it++)i&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(j,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(j+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return tt}const ae={};ae[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),z(r.DEPTH_TEST),l.setFunc(Lh),Ut(!1),Rt(qd),z(r.CULL_FACE),ze(ns);function z(B){d[B]!==!0&&(r.enable(B),d[B]=!0)}function De(B){d[B]!==!1&&(r.disable(B),d[B]=!1)}function Te(B,j){return f[B]!==j?(r.bindFramebuffer(B,j),f[B]=j,i&&(B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=j),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=j)),!0):!1}function oe(B,j){let ee=y,ce=!1;if(B)if(ee=m.get(j),ee===void 0&&(ee=[],m.set(j,ee)),B.isWebGLMultipleRenderTargets){const fe=B.texture;if(ee.length!==fe.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,it=fe.length;tt<it;tt++)ee[tt]=r.COLOR_ATTACHMENT0+tt;ee.length=fe.length,ce=!0}}else ee[0]!==r.COLOR_ATTACHMENT0&&(ee[0]=r.COLOR_ATTACHMENT0,ce=!0);else ee[0]!==r.BACK&&(ee[0]=r.BACK,ce=!0);ce&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function we(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const $e={[Ls]:r.FUNC_ADD,[ix]:r.FUNC_SUBTRACT,[nx]:r.FUNC_REVERSE_SUBTRACT};if(i)$e[Kd]=r.MIN,$e[Zd]=r.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&($e[Kd]=B.MIN_EXT,$e[Zd]=B.MAX_EXT)}const ye={[sx]:r.ZERO,[Im]:r.ONE,[rx]:r.SRC_COLOR,[Lm]:r.SRC_ALPHA,[ux]:r.SRC_ALPHA_SATURATE,[cx]:r.DST_COLOR,[ax]:r.DST_ALPHA,[ox]:r.ONE_MINUS_SRC_COLOR,[Su]:r.ONE_MINUS_SRC_ALPHA,[hx]:r.ONE_MINUS_DST_COLOR,[lx]:r.ONE_MINUS_DST_ALPHA};function ze(B,j,ee,ce,fe,tt,it,Vt){if(B===ns){p===!0&&(De(r.BLEND),p=!1);return}if(p===!1&&(z(r.BLEND),p=!0),B!==Pm){if(B!==_||Vt!==S){if((x!==Ls||b!==Ls)&&(r.blendEquation(r.FUNC_ADD),x=Ls,b=Ls),Vt)switch(B){case Vr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ih:r.blendFunc(r.ONE,r.ONE);break;case $d:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ih:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $d:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,v=null,A=null,E=null,_=B,S=Vt}return}fe=fe||j,tt=tt||ee,it=it||ce,(j!==x||fe!==b)&&(r.blendEquationSeparate($e[j],$e[fe]),x=j,b=fe),(ee!==M||ce!==v||tt!==A||it!==E)&&(r.blendFuncSeparate(ye[ee],ye[ce],ye[tt],ye[it]),M=ee,v=ce,A=tt,E=it),_=B,S=!1}function Et(B,j){B.side===Ki?De(r.CULL_FACE):z(r.CULL_FACE);let ee=B.side===si;j&&(ee=!ee),Ut(ee),B.blending===Vr&&B.transparent===!1?ze(ns):ze(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const ce=B.stencilWrite;c.setTest(ce),ce&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ye(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?z(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(B){w!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),w=B)}function Rt(B){B!==ex?(z(r.CULL_FACE),B!==D&&(B===qd?r.cullFace(r.BACK):B===tx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),D=B}function Mt(B){B!==I&&(G&&r.lineWidth(B),I=B)}function Ye(B,j,ee){B?(z(r.POLYGON_OFFSET_FILL),(C!==j||U!==ee)&&(r.polygonOffset(j,ee),C=j,U=ee)):De(r.POLYGON_OFFSET_FILL)}function ct(B){B?z(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function ei(B){B===void 0&&(B=r.TEXTURE0+N-1),$!==B&&(r.activeTexture(B),$=B)}function P(B,j,ee){ee===void 0&&($===null?ee=r.TEXTURE0+N-1:ee=$);let ce=Y[ee];ce===void 0&&(ce={type:void 0,texture:void 0},Y[ee]=ce),(ce.type!==B||ce.texture!==j)&&($!==ee&&(r.activeTexture(ee),$=ee),r.bindTexture(B,j||ae[B]),ce.type=B,ce.texture=j)}function T(){const B=Y[$];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(B){W.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),W.copy(B))}function me(B){J.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function He(B,j){let ee=u.get(j);ee===void 0&&(ee=new WeakMap,u.set(j,ee));let ce=ee.get(B);ce===void 0&&(ce=r.getUniformBlockIndex(j,B.name),ee.set(B,ce))}function Ze(B,j){const ce=u.get(j).get(B);h.get(j)!==ce&&(r.uniformBlockBinding(j,ce,B.__bindingPointIndex),h.set(j,ce))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},$=null,Y={},f={},m=new WeakMap,y=[],g=null,p=!1,_=null,x=null,M=null,v=null,b=null,A=null,E=null,S=!1,w=null,D=null,I=null,C=null,U=null,W.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:z,disable:De,bindFramebuffer:Te,drawBuffers:oe,useProgram:we,setBlending:ze,setMaterial:Et,setFlipSided:Ut,setCullFace:Rt,setLineWidth:Mt,setPolygonOffset:Ye,setScissorTest:ct,activeTexture:ei,bindTexture:P,unbindTexture:T,compressedTexImage2D:X,compressedTexImage3D:te,texImage2D:_e,texImage3D:Me,updateUBOMapping:He,uniformBlockBinding:Ze,texStorage2D:K,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:le,compressedTexSubImage2D:Ae,compressedTexSubImage3D:de,scissor:ue,viewport:me,reset:ft}}function OS(r,e,t,i,n,s,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let y;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return p?new OffscreenCanvas(P,T):Cl("canvas")}function x(P,T,X,te){let ne=1;if((P.width>te||P.height>te)&&(ne=te/Math.max(P.width,P.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const le=T?jy:Math.floor,Ae=le(ne*P.width),de=le(ne*P.height);y===void 0&&(y=_(Ae,de));const K=X?_(Ae,de):y;return K.width=Ae,K.height=de,K.getContext("2d").drawImage(P,0,0,Ae,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ae+"x"+de+")."),K}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return zd(P.width)&&zd(P.height)}function v(P){return a?!1:P.wrapS!==Ni||P.wrapT!==Ni||P.minFilter!==bt&&P.minFilter!==bi}function b(P,T){return P.generateMipmaps&&T&&P.minFilter!==bt&&P.minFilter!==bi}function A(P){r.generateMipmap(P)}function E(P,T,X,te,ne=!1){if(a===!1)return T;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=T;return T===r.RED&&(X===r.FLOAT&&(le=r.R32F),X===r.HALF_FLOAT&&(le=r.R16F),X===r.UNSIGNED_BYTE&&(le=r.R8)),T===r.RG&&(X===r.FLOAT&&(le=r.RG32F),X===r.HALF_FLOAT&&(le=r.RG16F),X===r.UNSIGNED_BYTE&&(le=r.RG8)),T===r.RGBA&&(X===r.FLOAT&&(le=r.RGBA32F),X===r.HALF_FLOAT&&(le=r.RGBA16F),X===r.UNSIGNED_BYTE&&(le=te===Le&&ne===!1?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)),(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function S(P,T,X){return b(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==bt&&P.minFilter!==bi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function w(P){return P===bt||P===Jd||P===Pc?r.NEAREST:r.LINEAR}function D(P){const T=P.target;T.removeEventListener("dispose",D),C(T),T.isVideoTexture&&m.delete(T)}function I(P){const T=P.target;T.removeEventListener("dispose",I),N(T)}function C(P){const T=i.get(P);if(T.__webglInit===void 0)return;const X=P.source,te=g.get(X);if(te){const ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&U(P),Object.keys(te).length===0&&g.delete(X)}i.remove(P)}function U(P){const T=i.get(P);r.deleteTexture(T.__webglTexture);const X=P.source,te=g.get(X);delete te[T.__cacheKey],o.memory.textures--}function N(P){const T=P.texture,X=i.get(P),te=i.get(T);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ne=0,le=T.length;ne<le;ne++){const Ae=i.get(T[ne]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(T[ne])}i.remove(T),i.remove(P)}let G=0;function H(){G=0}function V(){const P=G;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),G+=1,P}function $(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Y(P,T){const X=i.get(P);if(P.isVideoTexture&&ct(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(X,P,T);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function he(P,T){const X=i.get(P);if(P.version>0&&X.__version!==P.version){De(X,P,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function ie(P,T){const X=i.get(P);if(P.version>0&&X.__version!==P.version){De(X,P,T);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function W(P,T){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Te(X,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}const J={[Uh]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[Nh]:r.MIRRORED_REPEAT},se={[bt]:r.NEAREST,[Jd]:r.NEAREST_MIPMAP_NEAREST,[Pc]:r.NEAREST_MIPMAP_LINEAR,[bi]:r.LINEAR,[Ax]:r.LINEAR_MIPMAP_NEAREST,[Yo]:r.LINEAR_MIPMAP_LINEAR};function ae(P,T,X){if(X?(r.texParameteri(P,r.TEXTURE_WRAP_S,J[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,J[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,J[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,se[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,se[T.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==Ni||T.wrapT!==Ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,w(T.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==bt&&T.minFilter!==bi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===bt||T.minFilter!==Pc&&T.minFilter!==Yo||T.type===Ns&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Ko&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(r.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function z(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",D));const te=T.source;let ne=g.get(te);ne===void 0&&(ne={},g.set(te,ne));const le=$(T);if(le!==P.__cacheKey){ne[le]===void 0&&(ne[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[le].usedTimes++;const Ae=ne[P.__cacheKey];Ae!==void 0&&(ne[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&U(T)),P.__cacheKey=le,P.__webglTexture=ne[le].texture}return X}function De(P,T,X){let te=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=r.TEXTURE_3D);const ne=z(P,T),le=T.source;t.bindTexture(te,P.__webglTexture,r.TEXTURE0+X);const Ae=i.get(le);if(le.version!==Ae.__version||ne===!0){t.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const de=v(T)&&M(T.image)===!1;let K=x(T.image,de,!1,h);K=ei(T,K);const pe=M(K)||a,_e=s.convert(T.format,T.colorSpace);let Me=s.convert(T.type),ue=E(T.internalFormat,_e,Me,T.colorSpace);ae(te,T,pe);let me;const He=T.mipmaps,Ze=a&&T.isVideoTexture!==!0,ft=Ae.__version===void 0||ne===!0,B=S(T,K,pe);if(T.isDepthTexture)ue=r.DEPTH_COMPONENT,a?T.type===Ns?ue=r.DEPTH_COMPONENT32F:T.type===Us?ue=r.DEPTH_COMPONENT24:T.type===Os?ue=r.DEPTH24_STENCIL8:ue=r.DEPTH_COMPONENT16:T.type===Ns&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ks&&ue===r.DEPTH_COMPONENT&&T.type!==Um&&T.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Us,Me=s.convert(T.type)),T.format===js&&ue===r.DEPTH_COMPONENT&&(ue=r.DEPTH_STENCIL,T.type!==Os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Os,Me=s.convert(T.type))),ft&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,ue,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,ue,K.width,K.height,0,_e,Me,null));else if(T.isDataTexture)if(He.length>0&&pe){Ze&&ft&&t.texStorage2D(r.TEXTURE_2D,B,ue,He[0].width,He[0].height);for(let j=0,ee=He.length;j<ee;j++)me=He[j],Ze?t.texSubImage2D(r.TEXTURE_2D,j,0,0,me.width,me.height,_e,Me,me.data):t.texImage2D(r.TEXTURE_2D,j,ue,me.width,me.height,0,_e,Me,me.data);T.generateMipmaps=!1}else Ze?(ft&&t.texStorage2D(r.TEXTURE_2D,B,ue,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,_e,Me,K.data)):t.texImage2D(r.TEXTURE_2D,0,ue,K.width,K.height,0,_e,Me,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,B,ue,He[0].width,He[0].height,K.depth);for(let j=0,ee=He.length;j<ee;j++)me=He[j],T.format!==Si?_e!==null?Ze?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,K.depth,_e,me.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,ue,me.width,me.height,K.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,K.depth,_e,Me,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,ue,me.width,me.height,K.depth,0,_e,Me,me.data)}else{Ze&&ft&&t.texStorage2D(r.TEXTURE_2D,B,ue,He[0].width,He[0].height);for(let j=0,ee=He.length;j<ee;j++)me=He[j],T.format!==Si?_e!==null?Ze?t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(r.TEXTURE_2D,j,ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(r.TEXTURE_2D,j,0,0,me.width,me.height,_e,Me,me.data):t.texImage2D(r.TEXTURE_2D,j,ue,me.width,me.height,0,_e,Me,me.data)}else if(T.isDataArrayTexture)Ze?(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,B,ue,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,_e,Me,K.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,K.width,K.height,K.depth,0,_e,Me,K.data);else if(T.isData3DTexture)Ze?(ft&&t.texStorage3D(r.TEXTURE_3D,B,ue,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,_e,Me,K.data)):t.texImage3D(r.TEXTURE_3D,0,ue,K.width,K.height,K.depth,0,_e,Me,K.data);else if(T.isFramebufferTexture){if(ft)if(Ze)t.texStorage2D(r.TEXTURE_2D,B,ue,K.width,K.height);else{let j=K.width,ee=K.height;for(let ce=0;ce<B;ce++)t.texImage2D(r.TEXTURE_2D,ce,ue,j,ee,0,_e,Me,null),j>>=1,ee>>=1}}else if(He.length>0&&pe){Ze&&ft&&t.texStorage2D(r.TEXTURE_2D,B,ue,He[0].width,He[0].height);for(let j=0,ee=He.length;j<ee;j++)me=He[j],Ze?t.texSubImage2D(r.TEXTURE_2D,j,0,0,_e,Me,me):t.texImage2D(r.TEXTURE_2D,j,ue,_e,Me,me);T.generateMipmaps=!1}else Ze?(ft&&t.texStorage2D(r.TEXTURE_2D,B,ue,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,Me,K)):t.texImage2D(r.TEXTURE_2D,0,ue,_e,Me,K);b(T,pe)&&A(te),Ae.__version=le.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Te(P,T,X){if(T.image.length!==6)return;const te=z(P,T),ne=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);const le=i.get(ne);if(ne.version!==le.__version||te===!0){t.activeTexture(r.TEXTURE0+X),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Ae=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,K=[];for(let j=0;j<6;j++)!Ae&&!de?K[j]=x(T.image[j],!1,!0,c):K[j]=de?T.image[j].image:T.image[j],K[j]=ei(T,K[j]);const pe=K[0],_e=M(pe)||a,Me=s.convert(T.format,T.colorSpace),ue=s.convert(T.type),me=E(T.internalFormat,Me,ue,T.colorSpace),He=a&&T.isVideoTexture!==!0,Ze=le.__version===void 0||te===!0;let ft=S(T,pe,_e);ae(r.TEXTURE_CUBE_MAP,T,_e);let B;if(Ae){He&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,me,pe.width,pe.height);for(let j=0;j<6;j++){B=K[j].mipmaps;for(let ee=0;ee<B.length;ee++){const ce=B[ee];T.format!==Si?Me!==null?He?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,0,0,ce.width,ce.height,Me,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,0,0,ce.width,ce.height,Me,ue,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,me,ce.width,ce.height,0,Me,ue,ce.data)}}}else{B=T.mipmaps,He&&Ze&&(B.length>0&&ft++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,me,K[0].width,K[0].height));for(let j=0;j<6;j++)if(de){He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,K[j].width,K[j].height,Me,ue,K[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,me,K[j].width,K[j].height,0,Me,ue,K[j].data);for(let ee=0;ee<B.length;ee++){const fe=B[ee].image[j].image;He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,0,0,fe.width,fe.height,Me,ue,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,me,fe.width,fe.height,0,Me,ue,fe.data)}}else{He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me,ue,K[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,me,Me,ue,K[j]);for(let ee=0;ee<B.length;ee++){const ce=B[ee];He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,0,0,Me,ue,ce.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,me,Me,ue,ce.image[j])}}}b(T,_e)&&A(r.TEXTURE_CUBE_MAP),le.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function oe(P,T,X,te,ne){const le=s.convert(X.format,X.colorSpace),Ae=s.convert(X.type),de=E(X.internalFormat,le,Ae,X.colorSpace);i.get(T).__hasExternalTextures||(ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,de,T.width,T.height,T.depth,0,le,Ae,null):t.texImage2D(ne,0,de,T.width,T.height,0,le,Ae,null)),t.bindFramebuffer(r.FRAMEBUFFER,P),Ye(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0,Mt(T)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(P,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let te=r.DEPTH_COMPONENT16;if(X||Ye(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ns?te=r.DEPTH_COMPONENT32F:ne.type===Us&&(te=r.DEPTH_COMPONENT24));const le=Mt(T);Ye(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,te,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,le,te,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const te=Mt(T);X&&Ye(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):Ye(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<te.length;ne++){const le=te[ne],Ae=s.convert(le.format,le.colorSpace),de=s.convert(le.type),K=E(le.internalFormat,Ae,de,le.colorSpace),pe=Mt(T);X&&Ye(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,K,T.width,T.height):Ye(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,ne=Mt(T);if(T.depthTexture.format===ks)Ye(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===js)Ye(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(P){const T=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");$e(T.__webglFramebuffer,P)}else if(X){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=r.createRenderbuffer(),we(T.__webglDepthbuffer[te],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),we(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(P,T,X){const te=i.get(P);T!==void 0&&oe(te.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),X!==void 0&&ye(P)}function Et(P){const T=P.texture,X=i.get(P),te=i.get(T);P.addEventListener("dispose",I),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=T.version,o.memory.textures++);const ne=P.isWebGLCubeRenderTarget===!0,le=P.isWebGLMultipleRenderTargets===!0,Ae=M(P)||a;if(ne){X.__webglFramebuffer=[];for(let de=0;de<6;de++)X.__webglFramebuffer[de]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),le)if(n.drawBuffers){const de=P.texture;for(let K=0,pe=de.length;K<pe;K++){const _e=i.get(de[K]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ye(P)===!1){const de=le?T:[T];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let K=0;K<de.length;K++){const pe=de[K];X.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[K]);const _e=s.convert(pe.format,pe.colorSpace),Me=s.convert(pe.type),ue=E(pe.internalFormat,_e,Me,pe.colorSpace,P.isXRRenderTarget===!0),me=Mt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,me,ue,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,X.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),we(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),ae(r.TEXTURE_CUBE_MAP,T,Ae);for(let de=0;de<6;de++)oe(X.__webglFramebuffer[de],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de);b(T,Ae)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const de=P.texture;for(let K=0,pe=de.length;K<pe;K++){const _e=de[K],Me=i.get(_e);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ae(r.TEXTURE_2D,_e,Ae),oe(X.__webglFramebuffer,P,_e,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D),b(_e,Ae)&&A(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,te.__webglTexture),ae(de,T,Ae),oe(X.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,de),b(T,Ae)&&A(de),t.unbindTexture()}P.depthBuffer&&ye(P)}function Ut(P){const T=M(P)||a,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,ne=X.length;te<ne;te++){const le=X[te];if(b(le,T)){const Ae=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=i.get(le).__webglTexture;t.bindTexture(Ae,de),A(Ae),t.unbindTexture()}}}function Rt(P){if(a&&P.samples>0&&Ye(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,te=P.height;let ne=r.COLOR_BUFFER_BIT;const le=[],Ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=i.get(P),K=P.isWebGLMultipleRenderTargets===!0;if(K)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){le.push(r.COLOR_ATTACHMENT0+pe),P.depthBuffer&&le.push(Ae);const _e=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(_e===!1&&(P.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),K&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[pe]),_e===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ae]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ae])),K){const Me=i.get(T[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,X,te,0,0,X,te,ne,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const _e=i.get(T[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Mt(P){return Math.min(u,P.samples)}function Ye(P){const T=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ct(P){const T=o.render.frame;m.get(P)!==T&&(m.set(P,T),P.update())}function ei(P,T){const X=P.colorSpace,te=P.format,ne=P.type;return P.isCompressedTexture===!0||P.format===Bh||X!==sn&&X!==Hs&&(X===Le?a===!1?e.has("EXT_sRGB")===!0&&te===Si?(P.format=Bh,P.minFilter=bi,P.generateMipmaps=!1):T=jm.sRGBToLinear(T):(te!==Si||ne!==Xs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=he,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=ze,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ye}function kS(r,e,t){const i=t.isWebGL2;function n(s,o=Hs){let a;if(s===Xs)return r.UNSIGNED_BYTE;if(s===Cx)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Px)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tx)return r.BYTE;if(s===Ex)return r.SHORT;if(s===Um)return r.UNSIGNED_SHORT;if(s===Rx)return r.INT;if(s===Us)return r.UNSIGNED_INT;if(s===Ns)return r.FLOAT;if(s===Ko)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ix)return r.ALPHA;if(s===Si)return r.RGBA;if(s===Lx)return r.LUMINANCE;if(s===Dx)return r.LUMINANCE_ALPHA;if(s===ks)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===Bh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Fx)return r.RED;if(s===Ux)return r.RED_INTEGER;if(s===Nx)return r.RG;if(s===Bx)return r.RG_INTEGER;if(s===zx)return r.RGBA_INTEGER;if(s===Ic||s===Lc||s===Dc||s===Fc)if(o===Le)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qd||s===ef||s===tf||s===nf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ef)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ox)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sf||s===rf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sf)return o===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===of||s===af||s===lf||s===cf||s===hf||s===uf||s===df||s===ff||s===pf||s===mf||s===gf||s===yf||s===xf||s===_f)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===of)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===af)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===df)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ff)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xf)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_f)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Uc)return o===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===kx||s===vf||s===Mf||s===bf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===vf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Os?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class VS extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Do extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HS={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qm extends ri{constructor(e,t,i,n,s,o,a,l,c,h){if(h=h!==void 0?h:ks,h!==ks&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ks&&(i=Us),i===void 0&&h===js&&(i=Os),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class GS extends as{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const y=t.getContextAttributes();let g=null,p=null;const _=[],x=[],M=new Set,v=new Map,b=new ii;b.layers.enable(1),b.viewport=new at;const A=new ii;A.layers.enable(2),A.viewport=new at;const E=[b,A],S=new VS;S.layers.enable(1),S.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=_[W];return J===void 0&&(J=new sh,_[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=_[W];return J===void 0&&(J=new sh,_[W]=J),J.getGripSpace()},this.getHand=function(W){let J=_[W];return J===void 0&&(J=new sh,_[W]=J),J.getHandSpace()};function I(W){const J=x.indexOf(W.inputSource);if(J===-1)return;const se=_[J];se!==void 0&&(se.update(W.inputSource,W.frame,c||o),se.dispatchEvent({type:W.type,data:W.inputSource}))}function C(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",C),n.removeEventListener("inputsourceschange",U);for(let W=0;W<_.length;W++){const J=x[W];J!==null&&(x[W]=null,_[W].disconnect(J))}w=null,D=null,e.setRenderTarget(g),f=null,d=null,u=null,n=null,p=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",C),n.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:n.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:f}),p=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Si,type:Xs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let J=null,se=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=y.stencil?js:ks,se=y.stencil?Os:Us);const z={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(z),n.updateRenderState({layers:[d]}),p=new Fn(d.textureWidth,d.textureHeight,{format:Si,type:Xs,depthTexture:new Qm(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),ie.setContext(n),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(W){for(let J=0;J<W.removed.length;J++){const se=W.removed[J],ae=x.indexOf(se);ae>=0&&(x[ae]=null,_[ae].disconnect(se))}for(let J=0;J<W.added.length;J++){const se=W.added[J];let ae=x.indexOf(se);if(ae===-1){for(let De=0;De<_.length;De++)if(De>=x.length){x.push(se),ae=De;break}else if(x[De]===null){x[De]=se,ae=De;break}if(ae===-1)break}const z=_[ae];z&&z.connect(se)}}const N=new L,G=new L;function H(W,J,se){N.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const ae=N.distanceTo(G),z=J.projectionMatrix.elements,De=se.projectionMatrix.elements,Te=z[14]/(z[10]-1),oe=z[14]/(z[10]+1),we=(z[9]+1)/z[5],$e=(z[9]-1)/z[5],ye=(z[8]-1)/z[0],ze=(De[8]+1)/De[0],Et=Te*ye,Ut=Te*ze,Rt=ae/(-ye+ze),Mt=Rt*-ye;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Mt),W.translateZ(Rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ye=Te+Rt,ct=oe+Rt,ei=Et-Mt,P=Ut+(ae-Mt),T=we*oe/ct*Ye,X=$e*oe/ct*Ye;W.projectionMatrix.makePerspective(ei,P,T,X,Ye,ct),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function V(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;S.near=A.near=b.near=W.near,S.far=A.far=b.far=W.far,(w!==S.near||D!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,D=S.far);const J=W.parent,se=S.cameras;V(S,J);for(let ae=0;ae<se.length;ae++)V(se[ae],J);se.length===2?H(S,b,A):S.projectionMatrix.copy(b.projectionMatrix),$(W,S,J)};function $(W,J,se){se===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(se.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const ae=W.children;for(let z=0,De=ae.length;z<De;z++)ae[z].updateMatrixWorld(!0);W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Al*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.getPlanes=function(){return M};let Y=null;function he(W,J){if(h=J.getViewerPose(c||o),m=J,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ae=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let z=0;z<se.length;z++){const De=se[z];let Te=null;if(f!==null)Te=f.getViewport(De);else{const we=u.getViewSubImage(d,De);Te=we.viewport,z===0&&(e.setRenderTargetTextures(p,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let oe=E[z];oe===void 0&&(oe=new ii,oe.layers.enable(z),oe.viewport=new at,E[z]=oe),oe.matrix.fromArray(De.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(De.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Te.x,Te.y,Te.width,Te.height),z===0&&(S.matrix.copy(oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(oe)}}for(let se=0;se<_.length;se++){const ae=x[se],z=_[se];ae!==null&&z!==void 0&&z.update(ae,J,c||o)}if(Y&&Y(W,J),J.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let se=null;for(const ae of M)J.detectedPlanes.has(ae)||(se===null&&(se=[]),se.push(ae));if(se!==null)for(const ae of se)M.delete(ae),v.delete(ae),i.dispatchEvent({type:"planeremoved",data:ae});for(const ae of J.detectedPlanes)if(!M.has(ae))M.add(ae),v.set(ae,J.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ae});else{const z=v.get(ae);ae.lastChangedTime>z&&(v.set(ae,ae.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ae}))}}m=null}const ie=new Vm;ie.setAnimationLoop(he),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}}function WS(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Xm(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,_,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===si&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===si&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===si&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function XS(r,e,t,i){let n={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const M=x.program;i.uniformBlockBinding(_,M)}function c(_,x){let M=n[_.id];M===void 0&&(m(_),M=h(_),n[_.id]=M,_.addEventListener("dispose",g));const v=x.program;i.updateUBOMapping(_,v);const b=e.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function h(_){const x=u();_.__bindingPointIndex=x;const M=r.createBuffer(),v=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,v,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=n[_.id],M=_.uniforms,v=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,A=M.length;b<A;b++){const E=M[b];if(f(E,b,v)===!0){const S=E.__offset,w=Array.isArray(E.value)?E.value:[E.value];let D=0;for(let I=0;I<w.length;I++){const C=w[I],U=y(C);typeof C=="number"?(E.__data[0]=C,r.bufferSubData(r.UNIFORM_BUFFER,S+D,E.__data)):C.isMatrix3?(E.__data[0]=C.elements[0],E.__data[1]=C.elements[1],E.__data[2]=C.elements[2],E.__data[3]=C.elements[0],E.__data[4]=C.elements[3],E.__data[5]=C.elements[4],E.__data[6]=C.elements[5],E.__data[7]=C.elements[0],E.__data[8]=C.elements[6],E.__data[9]=C.elements[7],E.__data[10]=C.elements[8],E.__data[11]=C.elements[0]):(C.toArray(E.__data,D),D+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,E.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,x,M){const v=_.value;if(M[x]===void 0){if(typeof v=="number")M[x]=v;else{const b=Array.isArray(v)?v:[v],A=[];for(let E=0;E<b.length;E++)A.push(b[E].clone());M[x]=A}return!0}else if(typeof v=="number"){if(M[x]!==v)return M[x]=v,!0}else{const b=Array.isArray(M[x])?M[x]:[M[x]],A=Array.isArray(v)?v:[v];for(let E=0;E<b.length;E++){const S=b[E];if(S.equals(A[E])===!1)return S.copy(A[E]),!0}}return!1}function m(_){const x=_.uniforms;let M=0;const v=16;let b=0;for(let A=0,E=x.length;A<E;A++){const S=x[A],w={boundary:0,storage:0},D=Array.isArray(S.value)?S.value:[S.value];for(let I=0,C=D.length;I<C;I++){const U=D[I],N=y(U);w.boundary+=N.boundary,w.storage+=N.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,A>0){b=M%v;const I=v-b;b!==0&&I-w.boundary<0&&(M+=v-b,S.__offset=M)}M+=w.storage}return b=M%v,b>0&&(M+=v-b),_.__size=M,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(const _ in n)r.deleteBuffer(n[_]);o=[],n={},s={}}return{bind:l,update:c,dispose:p}}function jS(){const r=Cl("canvas");return r.style.display="block",r}class eg{constructor(e={}){const{canvas:t=jS(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=null,m=null;const y=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this.useLegacyLights=!0,this.toneMapping=In,this.toneMappingExposure=1;const p=this;let _=!1,x=0,M=0,v=null,b=-1,A=null;const E=new at,S=new at;let w=null,D=t.width,I=t.height,C=1,U=null,N=null;const G=new at(0,0,D,I),H=new at(0,0,D,I);let V=!1;const $=new Tu;let Y=!1,he=!1,ie=null;const W=new et,J=new L,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return v===null?C:1}let z=i;function De(R,k){for(let q=0;q<R.length;q++){const O=R[q],Z=t.getContext(O,k);if(Z!==null)return Z}return null}try{const R={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qy}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),z===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),z=De(k,R),z===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Te,oe,we,$e,ye,ze,Et,Ut,Rt,Mt,Ye,ct,ei,P,T,X,te,ne,le,Ae,de,K,pe,_e;function Me(){Te=new nb(z),oe=new $M(z,Te,e),Te.init(oe),K=new kS(z,Te,oe),we=new zS(z,Te,oe),$e=new ob(z),ye=new wS,ze=new OS(z,Te,we,ye,oe,K,$e),Et=new QM(p),Ut=new ib(p),Rt=new a_(z,oe),pe=new jM(z,Te,Rt,oe),Mt=new sb(z,Rt,$e,pe),Ye=new hb(z,Mt,Rt,$e),le=new cb(z,oe,ze),X=new YM(ye),ct=new SS(p,Et,Ut,Te,oe,pe,X),ei=new WS(p,ye),P=new TS,T=new LS(Te,oe),ne=new XM(p,Et,Ut,we,Ye,d,l),te=new BS(p,Ye,oe),_e=new XS(z,$e,oe,we),Ae=new qM(z,Te,$e,oe),de=new rb(z,Te,$e,oe),$e.programs=ct.programs,p.capabilities=oe,p.extensions=Te,p.properties=ye,p.renderLists=P,p.shadowMap=te,p.state=we,p.info=$e}Me();const ue=new GS(p,z);this.xr=ue,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(R){R!==void 0&&(C=R,this.setSize(D,I,!1))},this.getSize=function(R){return R.set(D,I)},this.setSize=function(R,k,q=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,I=k,t.width=Math.floor(R*C),t.height=Math.floor(k*C),q===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(D*C,I*C).floor()},this.setDrawingBufferSize=function(R,k,q){D=R,I=k,C=q,t.width=Math.floor(R*q),t.height=Math.floor(k*q),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,k,q,O){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,k,q,O),we.viewport(E.copy(G).multiplyScalar(C).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,k,q,O){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,k,q,O),we.scissor(S.copy(H).multiplyScalar(C).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(R){we.setScissorTest(V=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(R=!0,k=!0,q=!0){let O=0;R&&(O|=z.COLOR_BUFFER_BIT),k&&(O|=z.DEPTH_BUFFER_BIT),q&&(O|=z.STENCIL_BUFFER_BIT),z.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),P.dispose(),T.dispose(),ye.dispose(),Et.dispose(),Ut.dispose(),Ye.dispose(),pe.dispose(),_e.dispose(),ct.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fe),ue.removeEventListener("sessionend",tt),ie&&(ie.dispose(),ie=null),it.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const R=$e.autoReset,k=te.enabled,q=te.autoUpdate,O=te.needsUpdate,Z=te.type;Me(),$e.autoReset=R,te.enabled=k,te.autoUpdate=q,te.needsUpdate=O,te.type=Z}function Ze(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ft(R){const k=R.target;k.removeEventListener("dispose",ft),B(k)}function B(R){j(R),ye.remove(R)}function j(R){const k=ye.get(R).programs;k!==void 0&&(k.forEach(function(q){ct.releaseProgram(q)}),R.isShaderMaterial&&ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,q,O,Z,ve){k===null&&(k=se);const be=Z.isMesh&&Z.matrixWorld.determinant()<0,Ee=Xg(R,k,q,O,Z);we.setMaterial(O,be);let Ue=q.index,Ne=1;O.wireframe===!0&&(Ue=Mt.getWireframeAttribute(q),Ne=2);const Be=q.drawRange,Oe=q.attributes.position;let Je=Be.start*Ne,qt=(Be.start+Be.count)*Ne;ve!==null&&(Je=Math.max(Je,ve.start*Ne),qt=Math.min(qt,(ve.start+ve.count)*Ne)),Ue!==null?(Je=Math.max(Je,0),qt=Math.min(qt,Ue.count)):Oe!=null&&(Je=Math.max(Je,0),qt=Math.min(qt,Oe.count));const Ti=qt-Je;if(Ti<0||Ti===1/0)return;pe.setup(Z,O,Ee,q,Ue);let hs,gt=Ae;if(Ue!==null&&(hs=Rt.get(Ue),gt=de,gt.setIndex(hs)),Z.isMesh)O.wireframe===!0?(we.setLineWidth(O.wireframeLinewidth*ae()),gt.setMode(z.LINES)):gt.setMode(z.TRIANGLES);else if(Z.isLine){let Ge=O.linewidth;Ge===void 0&&(Ge=1),we.setLineWidth(Ge*ae()),Z.isLineSegments?gt.setMode(z.LINES):Z.isLineLoop?gt.setMode(z.LINE_LOOP):gt.setMode(z.LINE_STRIP)}else Z.isPoints?gt.setMode(z.POINTS):Z.isSprite&&gt.setMode(z.TRIANGLES);if(Z.isInstancedMesh)gt.renderInstances(Je,Ti,Z.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Jl=Math.min(q.instanceCount,Ge);gt.renderInstances(Je,Ti,Jl)}else gt.render(Je,Ti)},this.compile=function(R,k){function q(O,Z,ve){O.transparent===!0&&O.side===Ki&&O.forceSinglePass===!1?(O.side=si,O.needsUpdate=!0,ra(O,Z,ve),O.side=ki,O.needsUpdate=!0,ra(O,Z,ve),O.side=Ki):ra(O,Z,ve)}m=T.get(R),m.init(),g.push(m),R.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(p.useLegacyLights),R.traverse(function(O){const Z=O.material;if(Z)if(Array.isArray(Z))for(let ve=0;ve<Z.length;ve++){const be=Z[ve];q(be,R,O)}else q(Z,R,O)}),g.pop(),m=null};let ee=null;function ce(R){ee&&ee(R)}function fe(){it.stop()}function tt(){it.start()}const it=new Vm;it.setAnimationLoop(ce),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(R){ee=R,ue.setAnimationLoop(R),R===null?it.stop():it.start()},ue.addEventListener("sessionstart",fe),ue.addEventListener("sessionend",tt),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,k,v),m=T.get(R,g.length),m.init(),g.push(m),W.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(W),he=this.localClippingEnabled,Y=X.init(this.clippingPlanes,he),f=P.get(R,y.length),f.init(),y.push(f),Vt(R,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(U,N),Y===!0&&X.beginShadows();const q=m.state.shadowsArray;if(te.render(q,R,k),Y===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,R),m.setupLights(p.useLegacyLights),k.isArrayCamera){const O=k.cameras;for(let Z=0,ve=O.length;Z<ve;Z++){const be=O[Z];Bn(f,R,be,be.viewport)}}else Bn(f,R,k);v!==null&&(ze.updateMultisampleRenderTarget(v),ze.updateRenderTargetMipmap(v)),R.isScene===!0&&R.onAfterRender(p,R,k),pe.resetDefaultState(),b=-1,A=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,y.pop(),y.length>0?f=y[y.length-1]:f=null};function Vt(R,k,q,O){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){O&&J.setFromMatrixPosition(R.matrixWorld).applyMatrix4(W);const be=Ye.update(R),Ee=R.material;Ee.visible&&f.push(R,be,Ee,q,J.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==$e.render.frame&&(R.skeleton.update(),R.skeleton.frame=$e.render.frame);const be=Ye.update(R),Ee=R.material;if(O&&(be.boundingSphere===null&&be.computeBoundingSphere(),J.copy(be.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(W)),Array.isArray(Ee)){const Ue=be.groups;for(let Ne=0,Be=Ue.length;Ne<Be;Ne++){const Oe=Ue[Ne],Je=Ee[Oe.materialIndex];Je&&Je.visible&&f.push(R,be,Je,q,J.z,Oe)}}else Ee.visible&&f.push(R,be,Ee,q,J.z,null)}}const ve=R.children;for(let be=0,Ee=ve.length;be<Ee;be++)Vt(ve[be],k,q,O)}function Bn(R,k,q,O){const Z=R.opaque,ve=R.transmissive,be=R.transparent;m.setupLightsView(q),Y===!0&&X.setGlobalState(p.clippingPlanes,q),ve.length>0&&pt(Z,ve,k,q),O&&we.viewport(E.copy(O)),Z.length>0&&gi(Z,k,q),ve.length>0&&gi(ve,k,q),be.length>0&&gi(be,k,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function pt(R,k,q,O){if(ie===null){const Ee=oe.isWebGL2;ie=new Fn(1024,1024,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Ko:Xs,minFilter:Yo,samples:Ee&&a===!0?4:0})}const Z=p.getRenderTarget();p.setRenderTarget(ie),p.clear();const ve=p.toneMapping;p.toneMapping=In,gi(R,q,O),ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie);let be=!1;for(let Ee=0,Ue=k.length;Ee<Ue;Ee++){const Ne=k[Ee],Be=Ne.object,Oe=Ne.geometry,Je=Ne.material,qt=Ne.group;if(Je.side===Ki&&Be.layers.test(O.layers)){const Ti=Je.side;Je.side=si,Je.needsUpdate=!0,Hi(Be,q,O,Oe,Je,qt),Je.side=Ti,Je.needsUpdate=!0,be=!0}}be===!0&&(ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie)),p.setRenderTarget(Z),p.toneMapping=ve}function gi(R,k,q){const O=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,ve=R.length;Z<ve;Z++){const be=R[Z],Ee=be.object,Ue=be.geometry,Ne=O===null?be.material:O,Be=be.group;Ee.layers.test(q.layers)&&Hi(Ee,k,q,Ue,Ne,Be)}}function Hi(R,k,q,O,Z,ve){R.onBeforeRender(p,k,q,O,Z,ve),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(p,k,q,O,R,ve),Z.transparent===!0&&Z.side===Ki&&Z.forceSinglePass===!1?(Z.side=si,Z.needsUpdate=!0,p.renderBufferDirect(q,k,O,Z,R,ve),Z.side=ki,Z.needsUpdate=!0,p.renderBufferDirect(q,k,O,Z,R,ve),Z.side=Ki):p.renderBufferDirect(q,k,O,Z,R,ve),R.onAfterRender(p,k,q,O,Z,ve)}function ra(R,k,q){k.isScene!==!0&&(k=se);const O=ye.get(R),Z=m.state.lights,ve=m.state.shadowsArray,be=Z.state.version,Ee=ct.getParameters(R,Z.state,ve,k,q),Ue=ct.getProgramCacheKey(Ee);let Ne=O.programs;O.environment=R.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(R.isMeshStandardMaterial?Ut:Et).get(R.envMap||O.environment),Ne===void 0&&(R.addEventListener("dispose",ft),Ne=new Map,O.programs=Ne);let Be=Ne.get(Ue);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===be)return Zu(R,Ee),Be}else Ee.uniforms=ct.getUniforms(R),R.onBuild(q,Ee,p),R.onBeforeCompile(Ee,p),Be=ct.acquireProgram(Ee,Ue),Ne.set(Ue,Be),O.uniforms=Ee.uniforms;const Oe=O.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Oe.clippingPlanes=X.uniform),Zu(R,Ee),O.needsLights=qg(R),O.lightsStateVersion=be,O.needsLights&&(Oe.ambientLightColor.value=Z.state.ambient,Oe.lightProbe.value=Z.state.probe,Oe.directionalLights.value=Z.state.directional,Oe.directionalLightShadows.value=Z.state.directionalShadow,Oe.spotLights.value=Z.state.spot,Oe.spotLightShadows.value=Z.state.spotShadow,Oe.rectAreaLights.value=Z.state.rectArea,Oe.ltc_1.value=Z.state.rectAreaLTC1,Oe.ltc_2.value=Z.state.rectAreaLTC2,Oe.pointLights.value=Z.state.point,Oe.pointLightShadows.value=Z.state.pointShadow,Oe.hemisphereLights.value=Z.state.hemi,Oe.directionalShadowMap.value=Z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Oe.spotShadowMap.value=Z.state.spotShadowMap,Oe.spotLightMatrix.value=Z.state.spotLightMatrix,Oe.spotLightMap.value=Z.state.spotLightMap,Oe.pointShadowMap.value=Z.state.pointShadowMap,Oe.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Je=Be.getUniforms(),qt=xl.seqWithValue(Je.seq,Oe);return O.currentProgram=Be,O.uniformsList=qt,Be}function Zu(R,k){const q=ye.get(R);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Xg(R,k,q,O,Z){k.isScene!==!0&&(k=se),ze.resetTextureUnits();const ve=k.fog,be=O.isMeshStandardMaterial?k.environment:null,Ee=v===null?p.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:sn,Ue=(O.isMeshStandardMaterial?Ut:Et).get(O.envMap||be),Ne=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!O.normalMap&&!!q.attributes.tangent,Oe=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,qt=!!q.morphAttributes.color,Ti=O.toneMapped?p.toneMapping:In,hs=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=hs!==void 0?hs.length:0,Ge=ye.get(O),Jl=m.state.lights;if(Y===!0&&(he===!0||R!==A)){const oi=R===A&&O.id===b;X.setState(O,R,oi)}let Ct=!1;O.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Jl.state.version||Ge.outputColorSpace!==Ee||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ue||O.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==X.numPlanes||Ge.numIntersection!==X.numIntersection)||Ge.vertexAlphas!==Ne||Ge.vertexTangents!==Be||Ge.morphTargets!==Oe||Ge.morphNormals!==Je||Ge.morphColors!==qt||Ge.toneMapping!==Ti||oe.isWebGL2===!0&&Ge.morphTargetsCount!==gt)&&(Ct=!0):(Ct=!0,Ge.__version=O.version);let us=Ge.currentProgram;Ct===!0&&(us=ra(O,k,Z));let Ju=!1,ao=!1,Ql=!1;const $t=us.getUniforms(),ds=Ge.uniforms;if(we.useProgram(us.program)&&(Ju=!0,ao=!0,Ql=!0),O.id!==b&&(b=O.id,ao=!0),Ju||A!==R){if($t.setValue(z,"projectionMatrix",R.projectionMatrix),oe.logarithmicDepthBuffer&&$t.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),A!==R&&(A=R,ao=!0,Ql=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const oi=$t.map.cameraPosition;oi!==void 0&&oi.setValue(z,J.setFromMatrixPosition(R.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$t.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Z.isSkinnedMesh)&&$t.setValue(z,"viewMatrix",R.matrixWorldInverse)}if(Z.isSkinnedMesh){$t.setOptional(z,Z,"bindMatrix"),$t.setOptional(z,Z,"bindMatrixInverse");const oi=Z.skeleton;oi&&(oe.floatVertexTextures?(oi.boneTexture===null&&oi.computeBoneTexture(),$t.setValue(z,"boneTexture",oi.boneTexture,ze),$t.setValue(z,"boneTextureSize",oi.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ec=q.morphAttributes;if((ec.position!==void 0||ec.normal!==void 0||ec.color!==void 0&&oe.isWebGL2===!0)&&le.update(Z,q,us),(ao||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,$t.setValue(z,"receiveShadow",Z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ds.envMap.value=Ue,ds.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ao&&($t.setValue(z,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&jg(ds,Ql),ve&&O.fog===!0&&ei.refreshFogUniforms(ds,ve),ei.refreshMaterialUniforms(ds,O,C,I,ie),xl.upload(z,Ge.uniformsList,ds,ze)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(xl.upload(z,Ge.uniformsList,ds,ze),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$t.setValue(z,"center",Z.center),$t.setValue(z,"modelViewMatrix",Z.modelViewMatrix),$t.setValue(z,"normalMatrix",Z.normalMatrix),$t.setValue(z,"modelMatrix",Z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const oi=O.uniformsGroups;for(let tc=0,$g=oi.length;tc<$g;tc++)if(oe.isWebGL2){const Qu=oi[tc];_e.update(Qu,us),_e.bind(Qu,us)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return us}function jg(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function qg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(R,k,q){ye.get(R.texture).__webglTexture=k,ye.get(R.depthTexture).__webglTexture=q;const O=ye.get(R);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const q=ye.get(R);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,q=0){v=R,x=k,M=q;let O=!0,Z=null,ve=!1,be=!1;if(R){const Ue=ye.get(R);Ue.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(z.FRAMEBUFFER,null),O=!1):Ue.__webglFramebuffer===void 0?ze.setupRenderTarget(R):Ue.__hasExternalTextures&&ze.rebindTextures(R,ye.get(R.texture).__webglTexture,ye.get(R.depthTexture).__webglTexture);const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(be=!0);const Be=ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Z=Be[k],ve=!0):oe.isWebGL2&&R.samples>0&&ze.useMultisampledRTT(R)===!1?Z=ye.get(R).__webglMultisampledFramebuffer:Z=Be,E.copy(R.viewport),S.copy(R.scissor),w=R.scissorTest}else E.copy(G).multiplyScalar(C).floor(),S.copy(H).multiplyScalar(C).floor(),w=V;if(we.bindFramebuffer(z.FRAMEBUFFER,Z)&&oe.drawBuffers&&O&&we.drawBuffers(R,Z),we.viewport(E),we.scissor(S),we.setScissorTest(w),ve){const Ue=ye.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,q)}else if(be){const Ue=ye.get(R.texture),Ne=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,Ne)}b=-1},this.readRenderTargetPixels=function(R,k,q,O,Z,ve,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){we.bindFramebuffer(z.FRAMEBUFFER,Ee);try{const Ue=R.texture,Ne=Ue.format,Be=Ue.type;if(Ne!==Si&&K.convert(Ne)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Be===Ko&&(Te.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Be!==Xs&&K.convert(Be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Ns&&(oe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-O&&q>=0&&q<=R.height-Z&&z.readPixels(k,q,O,Z,K.convert(Ne),K.convert(Be),ve)}finally{const Ue=v!==null?ye.get(v).__webglFramebuffer:null;we.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(R,k,q=0){const O=Math.pow(2,-q),Z=Math.floor(k.image.width*O),ve=Math.floor(k.image.height*O);ze.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,R.x,R.y,Z,ve),we.unbindTexture()},this.copyTextureToTexture=function(R,k,q,O=0){const Z=k.image.width,ve=k.image.height,be=K.convert(q.format),Ee=K.convert(q.type);ze.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,R.x,R.y,Z,ve,be,Ee,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,be,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,O,R.x,R.y,be,Ee,k.image),O===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(R,k,q,O,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=R.max.x-R.min.x+1,be=R.max.y-R.min.y+1,Ee=R.max.z-R.min.z+1,Ue=K.convert(O.format),Ne=K.convert(O.type);let Be;if(O.isData3DTexture)ze.setTexture3D(O,0),Be=z.TEXTURE_3D;else if(O.isDataArrayTexture)ze.setTexture2DArray(O,0),Be=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Oe=z.getParameter(z.UNPACK_ROW_LENGTH),Je=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qt=z.getParameter(z.UNPACK_SKIP_PIXELS),Ti=z.getParameter(z.UNPACK_SKIP_ROWS),hs=z.getParameter(z.UNPACK_SKIP_IMAGES),gt=q.isCompressedTexture?q.mipmaps[0]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,gt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(Be,Z,k.x,k.y,k.z,ve,be,Ee,Ue,Ne,gt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Be,Z,k.x,k.y,k.z,ve,be,Ee,Ue,gt.data)):z.texSubImage3D(Be,Z,k.x,k.y,k.z,ve,be,Ee,Ue,Ne,gt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Oe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Je),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ti),z.pixelStorei(z.UNPACK_SKIP_IMAGES,hs),Z===0&&O.generateMipmaps&&z.generateMipmap(Be),we.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){x=0,M=0,v=null,we.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?Vs:Nm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vs?Le:sn}}class Xl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ip(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ip();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ip(){return(typeof performance>"u"?Date:performance).now()}let Za;class qS{static getContext(){return Za===void 0&&(Za=new(window.AudioContext||window.webkitAudioContext)),Za}static setContext(e){Za=e}}const Ms=new L,np=new ni,$S=new L,bs=new L;class YS extends vt{constructor(){super(),this.type="AudioListener",this.context=qS.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Xl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ms,np,$S),bs.set(0,0,-1).applyQuaternion(np),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ms.x,n),t.positionY.linearRampToValueAtTime(Ms.y,n),t.positionZ.linearRampToValueAtTime(Ms.z,n),t.forwardX.linearRampToValueAtTime(bs.x,n),t.forwardY.linearRampToValueAtTime(bs.y,n),t.forwardZ.linearRampToValueAtTime(bs.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(Ms.x,Ms.y,Ms.z),t.setOrientation(bs.x,bs.y,bs.z,i.x,i.y,i.z)}}class tg extends Au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class KS{constructor(){this.target=new EventTarget,this.events=new Map,this.callbacks=new Map}add(e,t){this.callbacks.set(e,t),this.events.set(e,new FE(e)),this.target.addEventListener(e,t,!1)}dispatch(e,t=null){const i=this.events.get(e);i&&(i.data=t,this.target.dispatchEvent(i))}remove(e){const t=this.callbacks.get(e);this.target.removeEventListener(e,t,!1),this.callbacks.delete(e),this.events.delete(e)}dispose(){for(const[e]of this.events)this.remove(e);this.callbacks.clear(),this.events.clear()}}const Nt=new Ji,Ja=new F;class ZS{constructor(e){let t=e.geometry;t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,i=new Float32Array(e.count/3);for(let s=0;s<e.count;s+=3){let o=1;t&&(o=t.getX(s)+t.getX(s+1)+t.getX(s+2)),Nt.a.fromBufferAttribute(e,s),Nt.b.fromBufferAttribute(e,s+1),Nt.c.fromBufferAttribute(e,s+2),o*=Nt.getArea(),i[s/3]=o}this.distribution=new Float32Array(e.count/3);let n=0;for(let s=0;s<i.length;s++)n+=i[s],this.distribution[s]=n;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,i){const n=this.distribution[this.distribution.length-1],s=this.binarySearch(this.randomFunction()*n);return this.sampleFace(s,e,t,i)}binarySearch(e){const t=this.distribution;let i=0,n=t.length-1,s=-1;for(;i<=n;){const o=Math.ceil((i+n)/2);if(o===0||t[o-1]<=e&&t[o]>e){s=o;break}else e<t[o]?n=o-1:i=o+1}return s}sampleFace(e,t,i,n){let s=this.randomFunction(),o=this.randomFunction();return s+o>1&&(s=1-s,o=1-o),Nt.a.fromBufferAttribute(this.positionAttribute,e*3),Nt.b.fromBufferAttribute(this.positionAttribute,e*3+1),Nt.c.fromBufferAttribute(this.positionAttribute,e*3+2),t.set(0,0,0).addScaledVector(Nt.a,s).addScaledVector(Nt.b,o).addScaledVector(Nt.c,1-(s+o)),i!==void 0&&Nt.getNormal(i),n!==void 0&&this.colorAttribute!==void 0&&(Nt.a.fromBufferAttribute(this.colorAttribute,e*3),Nt.b.fromBufferAttribute(this.colorAttribute,e*3+1),Nt.c.fromBufferAttribute(this.colorAttribute,e*3+2),Ja.set(0,0,0).addScaledVector(Nt.a,s).addScaledVector(Nt.b,o).addScaledVector(Nt.c,1-(s+o)),n.r=Ja.x,n.g=Ja.y,n.b=Ja.z),this}}class JS extends cs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pu extends mi{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){const _=[],x=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let v=0;v<=t;v++){const b=v/t;u.x=-e*Math.cos(n+b*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(n+b*s)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(b+M,1-x),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){const x=h[p][_+1],M=h[p][_],v=h[p+1][_],b=h[p+1][_+1];(p!==0||o>0)&&f.push(x,M,b),(p!==i-1||l<Math.PI)&&f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sp extends Ai{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ar=new et,rp=new et,Qa=[],op=new ls,QS=new et,vo=new lt,Mo=new to;class ew extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sp(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,QS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ls),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),op.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(op)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new to),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),Mo.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(i),e.ray.intersectsSphere(Mo)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Ar),rp.multiplyMatrices(i,Ar),vo.matrixWorld=rp,vo.raycast(e,Qa);for(let o=0,a=Qa.length;o<a;o++){const l=Qa[o];l.instanceId=s,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}const ap=new et,bo=new L,rh=new L;class tw extends Om{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),bo.setFromMatrixPosition(e.matrixWorld),i.position.copy(bo),rh.copy(i.position),rh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rh),i.updateMatrixWorld(),n.makeTranslation(-bo.x,-bo.y,-bo.z),ap.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap)}}class ig extends Au{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new tw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const Iu=(r,e)=>(Math.random()*(e-r+1)|0)+r,Jt=(r,e)=>Math.random()*(e-r)+r,iw=(r,e,t)=>r+t*(e-r),ng=1/60,Qe=Object.freeze({m075:Math.PI*.75,m2:Math.PI*2,d2:Math.PI/2,d3:Math.PI/3,d4:Math.PI/4,d6:Math.PI/6});var nw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

uniform sampler2D noise;

float fBmTex (vec3 point, int octaves)
{
  float value = 0.0;
  float amplitude = 0.5;

  for (int o = 0; o < octaves; o++)
  {
    vec3 p = fract(point);

    /**
     * Use the green channel when sampling this texture due
     * to the extra bit of precision provided for green in
     * DXT-compressed and uncompressed RGB 565 formats.
     */
    float t1 = texture(noise, p.yx).g;
    float t2 = texture(noise, p.yz).g;

    float v = (t1 + t2) * 0.5;
    value += amplitude * v;

    amplitude *= 0.5;
    point *= 2.0;

    /**
     * Alternatively, "snoise.glsl" can also be used
     * in this loop to generate noise at runtime:
     *
     * value += amplitude * snoise(point);
     * amplitude *= 0.5;
     * point *= 2.0;
     */
  }

  return value;
}`,sw=`float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
fragColor.rgb = mix(fragColor.rgb, fogColor, fogFactor);`,rw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#ifdef USE_FOG
  vec4 fragColor = gl_FragColor;
  #ifndef saturate
  #define saturate(a) clamp(a, 0.0, 1.0)
#endif

const int FBM_OCTAVES = 8;
const float heightFactor = 0.08;

vec3 sampleCoord = vWorldPosition * 0.00025 + vec3(
  fogTime * 0.025, 0.0, fogTime * 0.025
);

float noiseSample = fBmTex(sampleCoord + fBmTex(
    sampleCoord, FBM_OCTAVES
  ), FBM_OCTAVES
) * 0.5 + 0.5;

float fogDepth = distance(vWorldPosition, cameraPosition);
vec3 fogDirection = normalize(vWorldPosition - cameraPosition);

fogDepth *= mix(noiseSample, 1.0, saturate((fogDepth - 5000.0) / 5000.0));
fogDepth *= fogDepth;

float fogFactor = saturate(heightFactor * exp(-cameraPosition.y * fogDensity) * (
  1.0 - exp(-fogDepth * fogDirection.y * fogDensity)
) / fogDirection.y);

fragColor.rgb = mix(fragColor.rgb, fogColor, fogFactor);
  gl_FragColor = fragColor;
#endif`,ow=`#ifdef USE_FOG
  vWorldPosition = worldPosition.xyz;
#endif`,aw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#ifdef USE_FOG
  in vec3 vWorldPosition;
uniform float fogTime;
uniform vec3 fogColor;

#ifdef FOG_EXP2
  uniform float fogDensity;
#else
  uniform float fogNear;
  uniform float fogFar;
#endif

  #ifdef FOG_EXP2
    #ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

uniform sampler2D noise;

float fBmTex (vec3 point, int octaves)
{
  float value = 0.0;
  float amplitude = 0.5;

  for (int o = 0; o < octaves; o++)
  {
    vec3 p = fract(point);

    /**
     * Use the green channel when sampling this texture due
     * to the extra bit of precision provided for green in
     * DXT-compressed and uncompressed RGB 565 formats.
     */
    float t1 = texture(noise, p.yx).g;
    float t2 = texture(noise, p.yz).g;

    float v = (t1 + t2) * 0.5;
    value += amplitude * v;

    amplitude *= 0.5;
    point *= 2.0;

    /**
     * Alternatively, "snoise.glsl" can also be used
     * in this loop to generate noise at runtime:
     *
     * value += amplitude * snoise(point);
     * amplitude *= 0.5;
     * point *= 2.0;
     */
  }

  return value;
}
  #endif
#endif`,lw=`#ifdef USE_FOG
  out vec3 vWorldPosition;
#endif`,cw=`in vec3 vWorldPosition;
uniform float fogTime;
uniform vec3 fogColor;

#ifdef FOG_EXP2
  uniform float fogDensity;
#else
  uniform float fogNear;
  uniform float fogFar;
#endif`,hw=`#ifndef saturate
  #define saturate(a) clamp(a, 0.0, 1.0)
#endif

const int FBM_OCTAVES = 8;
const float heightFactor = 0.08;

vec3 sampleCoord = vWorldPosition * 0.00025 + vec3(
  fogTime * 0.025, 0.0, fogTime * 0.025
);

float noiseSample = fBmTex(sampleCoord + fBmTex(
    sampleCoord, FBM_OCTAVES
  ), FBM_OCTAVES
) * 0.5 + 0.5;

float fogDepth = distance(vWorldPosition, cameraPosition);
vec3 fogDirection = normalize(vWorldPosition - cameraPosition);

fogDepth *= mix(noiseSample, 1.0, saturate((fogDepth - 5000.0) / 5000.0));
fogDepth *= fogDepth;

float fogFactor = saturate(heightFactor * exp(-cameraPosition.y * fogDensity) * (
  1.0 - exp(-fogDepth * fogDirection.y * fogDensity)
) / fogDirection.y);

fragColor.rgb = mix(fragColor.rgb, fogColor, fogFactor);`,uw=`vec2 position = floor(groundUV * 100.0);

vec3 pattern = vec3(0.8 + 0.2 * mod(
  floor(position.x) + floor(position.y), 2.0
));

outgoingLight = outgoingLight * pattern;
#include <output_fragment>`,dw="groundUV = uv;",fw="in vec2 groundUV;",pw="out vec2 groundUV;",mw=`out vec2 vUv;

void main (void) {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vUv = uv;
}`,gw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#define PI 3.141592653589793
#define INTERACTIONS 5
#define PI2 PI * 2.0

uniform vec3  backgroundColor;
uniform vec3  spikesColor;
uniform float deltaTime;

#ifdef USE_FOG
  in vec3 vWorldPosition;
uniform float fogTime;
uniform vec3 fogColor;

#ifdef FOG_EXP2
  uniform float fogDensity;
#else
  uniform float fogNear;
  uniform float fogFar;
#endif

  #ifdef VOLUMETRIC_FOG
    #ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

uniform sampler2D noise;

float fBmTex (vec3 point, int octaves)
{
  float value = 0.0;
  float amplitude = 0.5;

  for (int o = 0; o < octaves; o++)
  {
    vec3 p = fract(point);

    /**
     * Use the green channel when sampling this texture due
     * to the extra bit of precision provided for green in
     * DXT-compressed and uncompressed RGB 565 formats.
     */
    float t1 = texture(noise, p.yx).g;
    float t2 = texture(noise, p.yz).g;

    float v = (t1 + t2) * 0.5;
    value += amplitude * v;

    amplitude *= 0.5;
    point *= 2.0;

    /**
     * Alternatively, "snoise.glsl" can also be used
     * in this loop to generate noise at runtime:
     *
     * value += amplitude * snoise(point);
     * amplitude *= 0.5;
     * point *= 2.0;
     */
  }

  return value;
}
  #else
    in float vFogDepth;
  #endif
#endif

out vec4 fragColor;
in  vec2 vUv;

void main (void)
{
  float ammount = 1.0;
  const float inten = 0.005;
  float time = deltaTime + 23.0;

  vec2 point = mod(vUv * PI2, PI2) - 250.0;
  vec2 p = vec2(point);

  for (int i = 0; i < INTERACTIONS; i++)
  {
    float t = time * (1.0 - 3.5 / float(i + 1));

    p = point + vec2(
      cos(t - p.x) + sin(t + p.y),
      sin(t - p.y) + cos(t + p.x)
    );

    ammount += 1.0 / length(vec2(
      point.x / (sin(p.x + t) / inten),
      point.y / (cos(p.y + t) / inten)
    ));
  }

  ammount /= float(INTERACTIONS);
  ammount = 1.17 - pow(ammount, 1.4);

  float source = length(abs(vUv - vec2(0.5)));
  float alphaFactor = smoothstep(0.0, 1.0, source) * 2.0;

  vec3 color = vec3(pow(abs(ammount), 8.0)) * spikesColor;
  color = clamp(color + backgroundColor, 0.0, 1.0);
  fragColor = vec4(color, mix(0.0, 1.0, alphaFactor));

  #ifdef USE_FOG
    #ifdef VOLUMETRIC_FOG
      #ifndef saturate
  #define saturate(a) clamp(a, 0.0, 1.0)
#endif

const int FBM_OCTAVES = 8;
const float heightFactor = 0.08;

vec3 sampleCoord = vWorldPosition * 0.00025 + vec3(
  fogTime * 0.025, 0.0, fogTime * 0.025
);

float noiseSample = fBmTex(sampleCoord + fBmTex(
    sampleCoord, FBM_OCTAVES
  ), FBM_OCTAVES
) * 0.5 + 0.5;

float fogDepth = distance(vWorldPosition, cameraPosition);
vec3 fogDirection = normalize(vWorldPosition - cameraPosition);

fogDepth *= mix(noiseSample, 1.0, saturate((fogDepth - 5000.0) / 5000.0));
fogDepth *= fogDepth;

float fogFactor = saturate(heightFactor * exp(-cameraPosition.y * fogDensity) * (
  1.0 - exp(-fogDepth * fogDirection.y * fogDensity)
) / fogDirection.y);

fragColor.rgb = mix(fragColor.rgb, fogColor, fogFactor);
    #else
      float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
fragColor.rgb = mix(fragColor.rgb, fogColor, fogFactor);
    #endif
  #endif
}`,yw=`#ifdef USE_FOG
  out vec3 vWorldPosition;
#endif

#ifdef USE_FOG
  out float vFogDepth;
#endif

out vec2 vUv;

void main (void) {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * worldPosition;

  gl_Position = projectionMatrix * mvPosition;

  #ifdef USE_FOG
    vWorldPosition = worldPosition.xyz;
    vFogDepth = -mvPosition.z;
  #endif

  vUv = uv;
}`,xw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#ifndef rand
  #include <common>
#endif

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#ifndef perspectiveDepthToViewZ
  #include <packing>
#endif

float softAlpha (
  in sampler2D depth,
  in vec2 screenSize,
  in float dropSize,

  in float position,
  in float near,
  in float far
) {
  float depthBuffer = texture(depth, gl_FragCoord.xy / screenSize.xy).x;
  float sceneDepth = perspectiveDepthToViewZ(depthBuffer, near, far);
  float depthColor = (position - sceneDepth) / (dropSize * 0.25);

  float alpha = clamp(depthColor, 0.0, 1.0);
  alpha = smoothstep(0.0, 1.0, alpha);
  

  return alpha;
}

uniform sampler2D diffuse[5];
uniform sampler2D depth;

uniform vec2  screenSize;
uniform float dropSize;

uniform vec3  color;
uniform bool  soft;

uniform float near;
uniform float far;

out vec4 fragColor;

in vec2  vAngle;
in float vAlpha;
in float vPos;
in vec2  vUv;

void main (void) {
  mat2 rotation = mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x);
  vec2 coords = (gl_PointCoord - 0.5) * rotation + 0.5;

  int i = int(rand(vUv) * mod(dropSize, floor(dropSize)));

  float alpha = !soft ? 1.0 : softAlpha(
    depth, screenSize, dropSize, vPos, near, far
  );

  
  
  fragColor = texture(diffuse[0], coords);

       if (i == 1) fragColor = texture(diffuse[1], coords);
  else if (i == 2) fragColor = texture(diffuse[2], coords);
  else if (i == 3) fragColor = texture(diffuse[3], coords);
  else if (i == 4) fragColor = texture(diffuse[4], coords);

  fragColor.a = alpha * vAlpha;
  fragColor.rgb *= color;
}`,_w=`attribute float angle;
attribute float alpha;

uniform float dropSize;
uniform float ratio;

out vec2  vAngle;
out float vAlpha;
out float vPos;
out vec2  vUv;

void main (void) {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = dropSize * ratio / gl_Position.w;

  vAngle = vec2(cos(angle), sin(angle));
  vPos = mvPosition.z;
  vAlpha = alpha;
  vUv = uv;
}`,vw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#ifndef perspectiveDepthToViewZ
  #include <packing>
#endif

float softAlpha (
  in sampler2D depth,
  in vec2 screenSize,
  in float dropSize,

  in float position,
  in float near,
  in float far
) {
  float depthBuffer = texture(depth, gl_FragCoord.xy / screenSize.xy).x;
  float sceneDepth = perspectiveDepthToViewZ(depthBuffer, near, far);
  float depthColor = (position - sceneDepth) / (dropSize * 0.25);

  float alpha = clamp(depthColor, 0.0, 1.0);
  alpha = smoothstep(0.0, 1.0, alpha);
  

  return alpha;
}`,Mw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#define PI 3.141592653589793
#define HALF_PI PI / 2.0

uniform float traces;
uniform vec3  color;
uniform float time;

out vec4 fragColor;
in  vec2 vUv;

void main (void)
{
  float y = vUv.y;
  float width = traces * 7.5;

  float loops = time / HALF_PI;
  float alpha = mod(y + fract(loops), 1.0 / width);

  alpha = sin(alpha * width * PI) - 0.25;
  alpha = clamp(alpha * 0.25, 0.0, 1.0) * y;

  fragColor = vec4(color, alpha);
}`,bw=`uniform sampler2D smoke;
uniform sampler2D fire;

out vec4 fragColor;

in vec2  vAngle;
in float vAlpha;
in float vBlend;

void main (void) {
  vec2 coords = (gl_PointCoord - 0.5) * mat2(
    vAngle.x, vAngle.y, -vAngle.y, vAngle.x
  ) + 0.5;

  if (vBlend > 0.0) {
    fragColor = texture(smoke, coords);
    fragColor.rgb *= fragColor.a * vAlpha;
    fragColor.a *= vAlpha * vBlend;
  }

  else {
    fragColor = texture(fire, coords);
  }
}`,Sw=`attribute float smokeAngle;
attribute float smokeAlpha;
attribute float smokeSize;

attribute float fireAngle;
attribute float fireSize;
attribute float blend;

uniform float ratio;

out vec2  vAngle;
out float vAlpha;
out float vBlend;

void main (void) {
  float angle = fireAngle;
  float size = fireSize;

  if (blend > 0.0) {
    angle = smokeAngle;
    size = smokeSize;
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  gl_PointSize = size * ratio / gl_Position.w;
  vAngle = vec2(cos(angle), sin(angle));

  vAlpha = smokeAlpha;
  vBlend = blend;
}`,ww=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float mod289 (float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289 (vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 mod289 (vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289 (vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float permute (float x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec2 permute (vec2 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec3 permute (vec3 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 permute (vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}
#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float taylorInvSqrt (float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 taylorInvSqrt (vec2 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 taylorInvSqrt (vec3 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 taylorInvSqrt (vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise (vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;

  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);

  vec4 p = permute(
    permute(
      permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0)
      ) +
      i.y + vec4(0.0, i1.y, i2.y, 1.0)
    ) +
    i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;

  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;

  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(
    vec4(
      dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)
    )
  );

  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(
    0.5 - vec4(
      dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)
    ), 0.0
  );

  m *= m;

  return 105.0 * dot(
    m * m, vec4(
      dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)
    )
  );
}`,Aw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float fade (float t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

vec2 fade (vec2 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

vec3 fade (vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

vec4 fade (vec4 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}`,Tw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float hash11 (float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash11v (float p) {
  p = fract(p * 0.011);
  p *= p + 7.5;
  p *= p + p;
  return fract(p);
}

float hash12 (vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float hash12v (vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.13);
  p3 += dot(p3, p3.yzx + 3.333);
  return fract((p3.x + p3.y) * p3.z);
}

float hash13 (vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

vec2 hash2 (vec3 p2) {
	p2 = fract(p2 * vec3(0.1031, 0.1030, 0.0973));
  p2 += dot(p2, p2.yzx + 33.33);

  return fract(
    (p2.xx + p2.yz) * p2.zy
  );
}

vec2 hash21 (float p) {
  return hash2(vec3(p));
}

vec2 hash22 (vec2 p) {
  return hash2(vec3(p.xyx));
}

vec2 hash23 (vec3 p) {
  return hash2(p);
}

vec3 hash3 (vec3 p3) {
	p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);

  return fract(
    (p3.xxy + p3.yxx) * p3.zyx
  );
}

vec3 hash31 (float p) {
  return hash3(vec3(p));
}

vec3 hash32 (vec2 p) {
  return hash3(vec3(p.xyx));
}

vec3 hash33 (vec3 p) {
  return hash3(p);
}

vec4 hash4 (vec4 p4) {
  p4 = fract(p4 * vec4(0.1031, 0.1030, 0.0973, 0.1099));
  p4 += dot(p4, p4.wzxy + 33.33);

  return fract(
    (p4.xxyz + p4.yzzw) * p4.zywx
  );
}

vec4 hash41 (float p) {
  return hash4(vec4(p));
}

vec4 hash42 (vec2 p) {
  return hash4(vec4(p.xyxy));
}

vec4 hash43 (vec3 p) {
  return hash4(vec4(p.xyzx));
}

vec4 hash43 (vec4 p) {
  return hash4(p);
}`,Ew=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float mod289 (float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289 (vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 mod289 (vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289 (vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}`,Rw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float mod289 (float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289 (vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 mod289 (vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289 (vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float permute (float x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec2 permute (vec2 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec3 permute (vec3 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 permute (vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}`,Cw=`#ifndef saturate
  #define saturate(a) clamp(a, 0.0, 1.0)
#endif`,Pw=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;

#else
  precision highp float;
#endif

float taylorInvSqrt (float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 taylorInvSqrt (vec2 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 taylorInvSqrt (vec3 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 taylorInvSqrt (vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}`;function lp(r,e){if(e===h0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===wh||e===Jp){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===wh)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Iw extends ia{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nw(t)}),this.register(function(t){return new Gw(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new Ow(t)}),this.register(function(t){return new kw(t)}),this.register(function(t){return new Vw(t)}),this.register(function(t){return new Uw(t)}),this.register(function(t){return new Hw(t)}),this.register(function(t){return new Bw(t)}),this.register(function(t){return new Dw(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new qw(t)})}load(e,t,i,n){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ph.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Tm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sg){try{o[We.KHR_BINARY_GLTF]=new $w(e)}catch(u){n&&n(u);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new a1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:o[u]=new Fw;break;case We.KHR_DRACO_MESH_COMPRESSION:o[u]=new Yw(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[u]=new Kw;break;case We.KHR_MESH_QUANTIZATION:o[u]=new Zw;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function Lw(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Dw{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new _t(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Em(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ty(h),c.distance=u;break;case"spot":c=new wy(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Fw{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Fs}extendParams(e,t,i){const n=[];e.color=new _t(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(n)}}class Uw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Nw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(s)}}class Bw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class zw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new _t(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=n.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Dt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Ow{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class kw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _t(a[0],a[1],a[2]),Promise.all(s)}}class Vw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qs}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Hw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qs}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new _t(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Dt)),Promise.all(s)}}class Gw{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Ww{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Xw{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jw{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class qw{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const y=new Pe,g=new F,p=new Oi,_=new F(1,1,1),x=new mm(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),x.setMatrixAt(M,y.compose(g,p,_));for(const M in l)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);Ft.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const sg="glTF",So=12,cp={JSON:1313821514,BIN:5130562};class $w{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,So),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-So,s=new DataView(e,So);let o=0;for(;o<n;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===cp.JSON){const c=new Uint8Array(e,So+o,a);this.content=i.decode(c)}else if(l===cp.BIN){const c=So+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=kh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=kh[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Gr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],y=l[f];y!==void 0&&(m.normalized=y)}u(d)},a,c)})})}}class Kw{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Zw{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class rg extends ta{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,y=m-c,g=-2*f+3*d,p=f-d,_=1-g,x=p-d+u;for(let M=0;M!==a;M++){const v=o[y+M+a],b=o[y+M+l]*h,A=o[m+M+a],E=o[m+M]*h;s[M]=_*v+x*b+g*A+p*E}return s}}const Jw=new Oi;class Qw extends rg{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return Jw.fromArray(s).normalize().toArray(s),s}}const vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hp={9728:Sh,9729:su,9984:t0,9985:n0,9986:i0,9987:ru},up={33071:Io,33648:bh,10497:Wo},oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},e1={CUBICSPLINE:void 0,LINEAR:jr,STEP:Xo},ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Gs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xr})),r.DefaultMaterial}function wo(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Qn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function i1(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function n1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function s1(r){const e=r.extensions&&r.extensions[We.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+dp(e.attributes):t=r.indices+":"+dp(r.attributes)+":"+r.mode,t}function dp(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Vh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function r1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const o1=new Pe;class a1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Lw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new by(this.options.manager):this.textureLoader=new Ry(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};wo(s,a,n),Qn(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,o){i.load(Ph.resolveURL(t.uri,n.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const o=oh[n.type],a=Gr[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new Qt(c,o,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=oh[n.type],c=Gr[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let y,g;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let x=t.cache.get(_);x||(y=new c(a,p*f,n.count*f/h),x=new iy(y,f/h),t.cache.add(_,x)),g=new du(x,l,d%f/h,m)}else a===null?y=new c(n.count*l):y=new c(a,d,n.count*l),g=new Qt(y,l,m);if(n.sparse!==void 0){const p=oh.SCALAR,_=Gr[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,v=new _(o[1],x,n.sparse.count*p),b=new c(o[2],M,n.sparse.count*l);a!==null&&(g=new Qt(g.array.slice(),g.itemSize,g.normalized));for(let A=0,E=v.length;A<E;A++){const S=v[A];if(g.setX(S,b[A*l]),l>=2&&g.setY(S,b[A*l+1]),l>=3&&g.setZ(S,b[A*l+2]),l>=4&&g.setW(S,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const n=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=hp[d.magFilter]||su,h.minFilter=hp[d.minFilter]||ru,h.wrapS=up[d.wrapS]||Wo,h.wrapT=up[d.wrapT]||Wo,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=n.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(y){const g=new Dn(y);g.needsUpdate=!0,d(g)}),t.load(Ph.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||r1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ym,Bs.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new gm,Bs.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||s||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Gs}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const u=n[We.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new _t(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Yp);const h=s.alphaMode||ah.OPAQUE;if(h===ah.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ah.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Fs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new qe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&o!==Fs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Fs&&(a.emissive=new _t().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Fs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Qn(u,s),t.associations.set(u,{materials:e}),s.extensions&&wo(n,u,s),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");let i=t;for(let n=1;this.nodeNamesUsed[i];++n)i=t+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=s1(c),u=n[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=fp(new pi,c,t),n[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?t1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const y=h[f],g=o[f];let p;const _=c[f];if(g.mode===vi.TRIANGLES||g.mode===vi.TRIANGLE_STRIP||g.mode===vi.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new sy(y,_):new Yi(y,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===vi.TRIANGLE_STRIP?p.geometry=lp(p.geometry,Jp):g.mode===vi.TRIANGLE_FAN&&(p.geometry=lp(p.geometry,wh));else if(g.mode===vi.LINES)p=new ly(y,_);else if(g.mode===vi.LINE_STRIP)p=new pu(y,_);else if(g.mode===vi.LINE_LOOP)p=new cy(y,_);else if(g.mode===vi.POINTS)p=new hy(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&n1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Qn(p,s),g.extensions&&wo(n,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new zs;t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new uu(tm.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new fm(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Qn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Pe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fu(a,l)})}loadAnimation(e){const i=this.json.animations[e],n=i.name?i.name:"animation_"+e,s=[],o=[],a=[],l=[],c=[];for(let h=0,u=i.channels.length;h<u;h++){const d=i.channels[h],f=i.samplers[d.sampler],m=d.target,y=m.node,g=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;m.node!==void 0&&(s.push(this.getDependency("node",y)),o.push(this.getDependency("accessor",g)),a.push(this.getDependency("accessor",p)),l.push(f),c.push(m))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],m=h[3],y=h[4],g=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],M=d[p],v=f[p],b=m[p],A=y[p];if(x===void 0)continue;x.updateMatrix();let E;switch(qn[A.path]){case qn.weights:E=qo;break;case qn.rotation:E=Ws;break;case qn.position:case qn.scale:default:E=$o;break}const S=x.name?x.name:x.uuid,w=b.interpolation!==void 0?e1[b.interpolation]:jr,D=[];qn[A.path]===qn.weights?x.traverse(function(C){C.morphTargetInfluences&&D.push(C.name?C.name:C.uuid)}):D.push(S);let I=v.array;if(v.normalized){const C=Vh(I.constructor),U=new Float32Array(I.length);for(let N=0,G=I.length;N<G;N++)U[N]=I[N]*C;I=U}for(let C=0,U=D.length;C<U;C++){const N=new E(D[C]+"."+qn[A.path],M.array,I,w);b.interpolation==="CUBICSPLINE"&&(N.createInterpolant=function(H){const V=this instanceof Ws?Qw:rg;return new V(this.times,this.values,this.getValueSize()/3,H)},N.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(N)}}return new Ch(n,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,o1)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?n.createUniqueName(s.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new pm:c.length>1?h=new zs:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Qn(h,s),s.extensions&&wo(i,h,s),s.matrix!==void 0){const u=new Pe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new zs;i.name&&(s.name=n.createUniqueName(i.name)),Qn(s,i),i.extensions&&wo(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof Bs||d instanceof Dn)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}}function l1(r,e,t){const i=e.attributes,n=new kt;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const h=Vh(Gr[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const y=Vh(Gr[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}r.boundingBox=n;const o=new on;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=o}function fp(r,e,t){const i=e.attributes,n=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in i){const a=kh[o]||o.toLowerCase();a in r.attributes||n.push(s(i[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});n.push(o)}return Qn(r,e),l1(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?i1(r,e.targets,t):r})}const c1=Object.assign({"../shaders/fBm.glsl":nw,"../shaders/fog/exp2.frag":sw,"../shaders/fog/main.frag":rw,"../shaders/fog/main.vert":ow,"../shaders/fog/pars.frag":aw,"../shaders/fog/pars.vert":lw,"../shaders/fog/uniforms.frag":cw,"../shaders/fog/volumetric.frag":hw,"../shaders/ground/main.frag":uw,"../shaders/ground/main.vert":dw,"../shaders/ground/pars.frag":fw,"../shaders/ground/pars.vert":pw,"../shaders/main.vert":mw,"../shaders/portal/main.frag":gw,"../shaders/portal/main.vert":yw,"../shaders/rain/main.frag":xw,"../shaders/rain/main.vert":_w,"../shaders/rain/soft.glsl":vw,"../shaders/shot/bullet.frag":Mw,"../shaders/shot/fire.frag":bw,"../shaders/shot/fire.vert":Sw,"../shaders/snoise.glsl":ww,"../shaders/utils/fade.glsl":Aw,"../shaders/utils/hash.glsl":Tw,"../shaders/utils/mod289.glsl":Ew,"../shaders/utils/permute.glsl":Rw,"../shaders/utils/saturate.glsl":Cw,"../shaders/utils/taylorInvSqrt.glsl":Pw}),h1="./assets/",u1=new Iw;function d1(r,e){const t=r.animations.find(a=>a.name.toLowerCase().includes("idle")),i=new Vy(r.scene);t&&(i.clipAction(t).play(),i.setTime(.01)),r.scene.updateMatrixWorld(!0),r.scene.traverse(a=>{a.isSkinnedMesh&&(a.skeleton.update(),a.computeBoundingBox(),a.computeBoundingSphere())});const n=new kt().setFromObject(r.scene),s=e/Math.max(.01,n.max.y-n.min.y);i.stopAllAction(),i.uncacheRoot(r.scene);const o=new zs;return r.scene.scale.multiplyScalar(s),r.scene.position.y=-n.min.y*s,o.add(r.scene),r.scene=o,r}function f1(r,e){const t=r.animations,i=s=>t.find(o=>o.name.toLowerCase().includes(s))||t[0],n={};if(e)Object.assign(n,{idle:"idle",walk:"walk",run:"run",scream:"idle",hit:"jump",falling:"death",crawling:"walk",softAttack:"attack",hardAttack:"attack",crawlAttack:"attack",death:"death",crawlDeath:"death",headshot:"death"});else{for(const s of["pistol","rifle"])for(const o of["Idle","Run","Forward","Backward","Left","Right","ForwardLeft","ForwardRight","BackwardLeft","BackwardRight","Aim","Reload","FrontHit","LeftHit","RightHit"])n[s+o]=o.includes("Hit")?"hitreact":o==="Run"?"run_gun":/Forward|Backward|Left|Right/.test(o)?"walk_gun":"idle_gun";n.death="death",n.idle="idle"}return r.animations=Object.entries(n).map(([s,o])=>{const a=i(o).clone();return a.name=s,a}),r}function p1(){const r=new zs,e=new zs;r.add(e);const t=new Gs({color:"#2b3c40",roughness:.45}),i=new Gs({color:"#dcb676"});for(const[n,s,o,a,l,c,h]of[[0,0,.12,.13,.12,.4,t],[0,-.12,-.02,.1,.22,.13,i],[0,.09,.04,.05,.04,.2,i]]){const u=new Yi(new hu(a,l,c),h);u.position.set(n,s,o),e.add(u)}return{scene:r,scenes:[r],animations:[],cameras:[],asset:{version:"2.0"},parser:null,userData:{}}}var je;(r=>{(t=>{t.Complete="Loading::Complete",t.Progress="Loading::Progress",t.Start="Loading::Start"})(r.Loading||(r.Loading={}));class e{async loadGLTF(i){if(!["player.glb","enemy.glb"].includes(i))return p1();const n=d1(await u1.loadAsync(h1+"models/"+i),i==="enemy.glb"?2.05:1.8),s=n.scene.getObjectByName("Pistol");if(s){const o=new zs;o.name="DinoWeaponMount",o.position.copy(s.position),o.quaternion.copy(s.quaternion),o.scale.copy(s.scale),s.parent?.add(o),s.visible=!1}return f1(n,i==="enemy.glb")}async loadTexture(i){const n=document.createElement("canvas");n.width=n.height=64;const s=n.getContext("2d"),o=s.createRadialGradient(32,32,0,32,32,31);o.addColorStop(0,i.includes("fire")?"#ffebae":"#ffffffff"),o.addColorStop(.3,"#ffffffaa"),o.addColorStop(1,"#ffffff00"),s.fillStyle=o,s.fillRect(0,0,64,64);const a=new xm(n);return a.colorSpace=Dt,a}async loadAudio(i){const n=/weapons\/(1911|AK47)/.test(i),s=i.includes("enemy"),o=n?.2:s?.5:.15,a=new AudioBuffer({length:Math.floor(22050*o),sampleRate:22050,numberOfChannels:1}),l=a.getChannelData(0);for(let c=0;c<l.length;c++){const h=c/22050,u=Math.pow(1-c/l.length,2);l[c]=(n?(Math.random()-.5)*.3:Math.sin(h*(s?78:600)*Math.PI*2)*.08)*u}return a}async loadShader(i){const n=c1["../shaders/"+i];if(typeof n!="string")throw Error("Missing shader "+i);return n}async loadCubeTexture(){return new J0}}r.Loader=new e})(je||(je={}));var fi;(r=>{r.UP=new L(0,1,0),r.RIGHT=new L(1,0,0),r.FORWARD=new L(0,0,1),r.BACKWARD=new L(0,0,-1),r.LEFT=new L(-1,0,0),r.DOWN=new L(0,-1,0),r.random=()=>new L(Jt(-1,1),Jt(-1,1),Jt(-1,1))})(fi||(fi={}));class m1{constructor(){this.update=this.updateScreen.bind(this),this.callbacks=[],this.ratio=16/9,this.height=0,this.width=0,typeof window<"u"&&(this.root=document.documentElement.style,this.root.setProperty("--ratio",`${this.ratio}`),window.addEventListener("resize",this.update,!1),this.updateScreen())}updateScreen(){this.width=window.innerWidth,this.height=window.innerHeight,this.width/this.height<this.ratio?this.height=this.width/this.ratio:this.width=this.height*this.ratio,this.root.setProperty("--height",`${this.height}px`),this.root.setProperty("--width",`${this.width}px`);for(let e=this.callbacks.length;e--;)this.callbacks[e](this.width,this.height)}addResizeCallback(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}removeResizeCallback(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){window.removeEventListener("resize",this.update,!1),this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}const Hh=new m1;class g1{constructor(){this.paused=!0,this.lastTime=0,this.callbacks=[],this.onUpdate=this.update.bind(this)}add(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}update(e){this.raf=requestAnimationFrame(this.onUpdate);const t=e-(this.lastTime||0);for(let i=this.callbacks.length;i--;)this.callbacks[i](t,e);this.lastTime=e}remove(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){cancelAnimationFrame(this.raf),this.callbacks.length=0}set pause(e){this.paused!==e&&((this.paused=e)?cancelAnimationFrame(this.raf):this.raf=requestAnimationFrame(this.onUpdate))}}const Zt=new g1,y1={maxEnemies:10,rifleSpawn:3,enemy:{immune:!1,lose:!0,walk:500,run:250},damage:{enemy:{strong:10,soft:5},pistol:{head:90,body:25,leg:10},rifle:{head:100,body:50,leg:20}}},x1={maxEnemies:25,rifleSpawn:5,enemy:{immune:!1,lose:!1,walk:1e3,run:500},damage:{enemy:{strong:25,soft:10},pistol:{head:75,body:10,leg:5},rifle:{head:80,body:20,leg:10}}},_1={maxEnemies:50,rifleSpawn:8,enemy:{immune:!0,lose:!1,walk:-1,run:1e4},damage:{enemy:{strong:50,soft:25},pistol:{head:50,body:5,leg:1},rifle:{head:75,body:10,leg:5}}},v1={easy:y1,normal:x1,hard:_1},M1=[0,1.8,22],b1=[.65,1.8,-.9],S1=[1,1,1],w1="player.glb",A1=90,T1={death:"player/death.mp3",hit:"player/hit.mp3"},E1={Idle:[0,0,0,0],Run:[8.75,1,0,0],Left:[3.5,1,-1,1],Right:[4.5,1,1,-1],Backward:[3,-1,0,0],BackwardLeft:[2,-1,-.5,.5],BackwardRight:[2,-1,.5,-.5],ForwardRight:[4,1,.5,-.5],ForwardLeft:[4,1,-.5,.5],Forward:[5,1,0,0]},$n={position:M1,collider:b1,scale:S1,model:w1,mass:A1,sounds:T1,animations:E1},R1=[0,0,0],C1=[.02,-.05,.1],P1=[1,1,1],I1=.025,L1=[.001,.001],D1=[0,-.003],F1=12632256,U1="1911.glb",N1="1911",B1=.9,z1=-1,O1=-1,k1={bullet:"weapons/shell.mp3",shoot:"weapons/1911.mp3"},V1={position:[.05,.1,.4],lifeTime:500,speed:253,scale:.4},H1={position:[0,.05],particles:[3,5],intensity:.5,velocity:.25,scale:.035},ht={rotation:R1,position:C1,scale:P1,emissiveIntensity:I1,spread:L1,recoil:D1,emissive:F1,model:U1,textures:N1,headshot:B1,magazine:z1,ammo:O1,sounds:k1,bullet:V1,fire:H1},G1={idle:[0,1.6,.075],aim:[-.05,1.525,.25]},W1={idle:[-.8,1.65,-4.5],aim:[-.4,1.6,-1.8],run:[-.9,1.6,-5]},Tr={fps:G1,tps:W1},X1="environment/rain.mp3",j1=[0,4,0],q1=.216,$1=[75,75,75],Y1="level.glb",K1="cloud.png",Z1=.01,J1="fog.png",Q1="sky",eA=8,tA=220,iA=[-.025,.225,-.275,-.025],nA=["environment/lightning0.mp3","environment/lightning1.mp3","environment/lightning2.mp3","environment/lightning3.mp3","environment/lightning4.mp3"],sA=["rain/drop0.png","rain/drop1.png","rain/drop2.png","rain/drop3.png","rain/drop4.png"],rA=[],oA=[[-45,-45],[45,-45],[45,45],[-45,45]],aA=[],Bt={ambient:X1,position:j1,sidewalkHeight:q1,scale:$1,model:Y1,cloud:K1,fogDensity:Z1,fog:J1,skybox:Q1,height:eA,depth:tA,portalsOffset:iA,lighting:nA,rain:sA,portals:rA,bounds:oA,sidewalk:aA},lA=[.65,1.8,-.9],cA=[0,1.8,0],hA=[1,1,1],uA="enemy.glb",dA=75,fA={hardAttack:"enemy/hardAttack.mp3",softAttack:"enemy/softAttack.mp3",scream:"enemy/scream.mp3",death:"enemy/death.mp3",hit:"enemy/hit.mp3"},pA={Idle:[0,0,0,0],Walking:[.5,1,0,0],Running:[3.5,1,0,0],Falling:[.75,1,0,0],Crawling:[.5,1,0,0]},Yn={collider:lA,position:cA,scale:hA,model:uA,mass:dA,sounds:fA,animations:pA},mA=[0,0,0],gA=[0,.15,-.2],yA=[1,1,1],xA=[0,0,0],_A=[.02,-.05,.1],vA=[1,1,1],MA=[.0025,.0025],bA=[0,-.003],SA="AK47.glb",wA="AK47",AA=.8,TA=150,EA=30,RA=0,CA={reload:"weapons/reload.mp3",bullet:"weapons/case.mp3",empty:"weapons/empty.mp3",shoot:"weapons/AK47.mp3",pick:"weapons/pick.mp3"},PA={position:[.05,.1,.4],lifeTime:200,speed:670,scale:.6},IA={position:[0,.05],particles:[5,8],intensity:.5,velocity:11.2,scale:.035},rt={rotation:mA,spinePosition:gA,worldScale:yA,spineRotation:xA,position:_A,scale:vA,spread:MA,recoil:bA,model:SA,textures:wA,headshot:AA,maxStock:TA,magazine:EA,ammo:RA,sounds:CA,bullet:PA,fire:IA},wn=r=>{Object.freeze(r);const e=Object.getOwnPropertyNames(r);for(const t in e){const i=r[e[t]];i&&(typeof i=="object"||typeof i=="function")&&!Object.isFrozen(i)&&wn(i)}return r};var Gh;(r=>{const e=()=>r.offscreen?`${window.location.pathname.slice(0,window.location.pathname.lastIndexOf("/"))}/assets`:"/assets",t=o=>Object.assign({},...Object.keys(o).map(a=>({[a]:{speed:o[a][0],direction:{z0:o[a][1],x0:o[a][2],x1:o[a][3]}}}))),i=$n.animations,n=Yn.animations;r.APP=navigator.userAgent.toLowerCase().includes("electron");const s=o=>o<0?1/0:o;r.offscreen=!1,r.worker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,r.basePath=(o=!1)=>r.APP?r.offscreen||!r.worker?o?"./":"./assets":"./":o?"":e(),r.RandomCoords=wn({playerDistance:5,boundOffset:.5,ammount:50}),r.Gameplay=wn(v1.normal),r.Level=wn({position:new L(...Bt.position),sidewalkHeight:Bt.sidewalkHeight,portalsOffset:Bt.portalsOffset,scale:new L(...Bt.scale),fogDensity:Bt.fogDensity,lighting:Bt.lighting,sidewalk:Bt.sidewalk,ambient:Bt.ambient,portals:Bt.portals,skybox:Bt.skybox,bounds:Bt.bounds,height:Bt.height,depth:Bt.depth,model:Bt.model,cloud:Bt.cloud,rain:Bt.rain,fog:Bt.fog}),r.Camera=wn({fps:{idle:new L(...Tr.fps.idle),run:new L(...Tr.fps.idle),aim:new L(...Tr.fps.aim)},tps:{idle:new L(...Tr.tps.idle),run:new L(...Tr.tps.run),aim:new L(...Tr.tps.aim)}}),r.Player=wn({position:new L(...$n.position),collider:new L(...$n.collider),scale:new L(...$n.scale),moves:t(i),animations:$n.animations,sounds:$n.sounds,model:$n.model,mass:$n.mass}),r.Enemy=wn({position:new L(...Yn.position),collider:new L(...Yn.collider),scale:new L(...Yn.scale),moves:t(n),animations:Yn.animations,sounds:Yn.sounds,model:Yn.model,mass:Yn.mass}),r.Pistol=wn({emissiveIntensity:ht.emissiveIntensity,position:new L(...ht.position),rotation:new nn(...ht.rotation),spread:new Ce(...ht.spread),recoil:new Ce(...ht.recoil),scale:new L(...ht.scale),magazine:s(ht.magazine),ammo:s(ht.ammo),headshot:ht.headshot,textures:ht.textures,emissive:ht.emissive,sounds:ht.sounds,model:ht.model,bullet:{position:new L(...ht.bullet.position),lifeTime:ht.bullet.lifeTime,speed:ht.bullet.speed,scale:ht.bullet.scale},fire:{position:new Ce(...ht.fire.position),particles:ht.fire.particles,intensity:ht.fire.intensity,velocity:ht.fire.velocity,scale:ht.fire.scale}}),r.Rifle=wn({spinePosition:new L(...rt.spinePosition),spineRotation:new nn(...rt.spineRotation),worldScale:new L(...rt.worldScale),position:new L(...rt.position),rotation:new nn(...rt.rotation),spread:new Ce(...rt.spread),recoil:new Ce(...rt.recoil),scale:new L(...rt.scale),magazine:s(rt.magazine),ammo:s(rt.ammo),headshot:rt.headshot,textures:rt.textures,maxStock:rt.maxStock,sounds:rt.sounds,model:rt.model,bullet:{position:new L(...rt.bullet.position),lifeTime:rt.bullet.lifeTime,speed:rt.bullet.speed,scale:rt.bullet.scale},fire:{position:new Ce(...rt.fire.position),particles:rt.fire.particles,intensity:rt.fire.intensity,velocity:rt.fire.velocity,scale:rt.fire.scale}})})(Gh||(Gh={}));const xe=Gh;var og={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Lu={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},LA=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Pl={CSS:{},springs:{}};function en(r,e,t){return Math.min(Math.max(r,e),t)}function Vo(r,e){return r.indexOf(e)>-1}function lh(r,e){return r.apply(null,e)}var ge={arr:function(r){return Array.isArray(r)},obj:function(r){return Vo(Object.prototype.toString.call(r),"Object")},pth:function(r){return ge.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||ge.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return ge.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return ge.hex(r)||ge.rgb(r)||ge.hsl(r)},key:function(r){return!og.hasOwnProperty(r)&&!Lu.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function ag(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function lg(r,e){var t=ag(r),i=en(ge.und(t[0])?1:t[0],.1,100),n=en(ge.und(t[1])?100:t[1],.1,100),s=en(ge.und(t[2])?10:t[2],.1,100),o=en(ge.und(t[3])?0:t[3],.1,100),a=Math.sqrt(n/i),l=s/(2*Math.sqrt(n*i)),c=l<1?a*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*a+-o)/c:-o+a;function d(m){var y=e?e*m/1e3:m;return l<1?y=Math.exp(-y*l*a)*(h*Math.cos(c*y)+u*Math.sin(c*y)):y=(h+u*y)*Math.exp(-y*a),m===0||m===1?m:1-y}function f(){var m=Pl.springs[r];if(m)return m;for(var y=1/6,g=0,p=0;;)if(g+=y,d(g)===1){if(p++,p>=16)break}else p=0;var _=g*y*1e3;return Pl.springs[r]=_,_}return e?d:f}function DA(r){return r===void 0&&(r=10),function(e){return Math.ceil(en(e,1e-6,1)*r)*(1/r)}}var FA=function(){var r=11,e=1/(r-1);function t(h,u){return 1-3*u+3*h}function i(h,u){return 3*u-6*h}function n(h){return 3*h}function s(h,u,d){return((t(u,d)*h+i(u,d))*h+n(u))*h}function o(h,u,d){return 3*t(u,d)*h*h+2*i(u,d)*h+n(u)}function a(h,u,d,f,m){var y,g,p=0;do g=u+(d-u)/2,y=s(g,f,m)-h,y>0?d=g:u=g;while(Math.abs(y)>1e-7&&++p<10);return g}function l(h,u,d,f){for(var m=0;m<4;++m){var y=o(u,d,f);if(y===0)return u;var g=s(u,d,f)-h;u-=g/y}return u}function c(h,u,d,f){if(!(0<=h&&h<=1&&0<=d&&d<=1))return;var m=new Float32Array(r);if(h!==u||d!==f)for(var y=0;y<r;++y)m[y]=s(y*e,h,d);function g(p){for(var _=0,x=1,M=r-1;x!==M&&m[x]<=p;++x)_+=e;--x;var v=(p-m[x])/(m[x+1]-m[x]),b=_+v*e,A=o(b,h,d);return A>=.001?l(p,b,h,d):A===0?b:a(p,_,_+e,h,d)}return function(p){return h===u&&d===f||p===0||p===1?p:s(g(p),u,f)}}return c}(),cg=function(){var r={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var n,s=4;i<((n=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((n*3-2)/22-i,2)}},Elastic:function(i,n){i===void 0&&(i=1),n===void 0&&(n=.5);var s=en(i,1,10),o=en(n,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,n){e[i]=function(){return function(s){return Math.pow(s,n+2)}}}),Object.keys(e).forEach(function(i){var n=e[i];r["easeIn"+i]=n,r["easeOut"+i]=function(s,o){return function(a){return 1-n(s,o)(1-a)}},r["easeInOut"+i]=function(s,o){return function(a){return a<.5?n(s,o)(a*2)/2:1-n(s,o)(a*-2+2)/2}},r["easeOutIn"+i]=function(s,o){return function(a){return a<.5?(1-n(s,o)(1-a*2))/2:(n(s,o)(a*2-1)+1)/2}}}),r}();function Du(r,e){if(ge.fnc(r))return r;var t=r.split("(")[0],i=cg[t],n=ag(r);switch(t){case"spring":return lg(r,e);case"cubicBezier":return lh(FA,n);case"steps":return lh(DA,n);default:return lh(i,n)}}function hg(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function jl(r,e){for(var t=r.length,i=arguments.length>=2?arguments[1]:void 0,n=[],s=0;s<t;s++)if(s in r){var o=r[s];e.call(i,o,s,r)&&n.push(o)}return n}function ql(r){return r.reduce(function(e,t){return e.concat(ge.arr(t)?ql(t):t)},[])}function pp(r){return ge.arr(r)?r:(ge.str(r)&&(r=hg(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Fu(r,e){return r.some(function(t){return t===e})}function Uu(r){var e={};for(var t in r)e[t]=r[t];return e}function Wh(r,e){var t=Uu(r);for(var i in r)t[i]=e.hasOwnProperty(i)?e[i]:r[i];return t}function $l(r,e){var t=Uu(r);for(var i in e)t[i]=ge.und(r[i])?e[i]:r[i];return t}function UA(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function NA(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(a,l,c,h){return l+l+c+c+h+h}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(i[1],16),s=parseInt(i[2],16),o=parseInt(i[3],16);return"rgba("+n+","+s+","+o+",1)"}function BA(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,n=parseInt(e[3],10)/100,s=e[4]||1;function o(d,f,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?d+(f-d)*6*m:m<1/2?f:m<2/3?d+(f-d)*(2/3-m)*6:d}var a,l,c;if(i==0)a=l=c=n;else{var h=n<.5?n*(1+i):n+i-n*i,u=2*n-h;a=o(u,h,t+1/3),l=o(u,h,t),c=o(u,h,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function zA(r){if(ge.rgb(r))return UA(r);if(ge.hex(r))return NA(r);if(ge.hsl(r))return BA(r)}function Ln(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function OA(r){if(Vo(r,"translate")||r==="perspective")return"px";if(Vo(r,"rotate")||Vo(r,"skew"))return"deg"}function Xh(r,e){return ge.fnc(r)?r(e.target,e.id,e.total):r}function tn(r,e){return r.getAttribute(e)}function Nu(r,e,t){var i=Ln(e);if(Fu([t,"deg","rad","turn"],i))return e;var n=Pl.CSS[e+t];if(!ge.und(n))return n;var s=100,o=document.createElement(r.tagName),a=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return Pl.CSS[e+t]=c,c}function ug(r,e,t){if(e in r.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=r.style[e]||getComputedStyle(r).getPropertyValue(i)||"0";return t?Nu(r,n,t):n}}function Bu(r,e){if(ge.dom(r)&&!ge.inp(r)&&(!ge.nil(tn(r,e))||ge.svg(r)&&r[e]))return"attribute";if(ge.dom(r)&&Fu(LA,e))return"transform";if(ge.dom(r)&&e!=="transform"&&ug(r,e))return"css";if(r[e]!=null)return"object"}function dg(r){if(ge.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,n;n=t.exec(e);)i.set(n[1],n[2]);return i}}function kA(r,e,t,i){var n=Vo(e,"scale")?1:0+OA(e),s=dg(r).get(e)||n;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),i?Nu(r,s,i):s}function zu(r,e,t,i){switch(Bu(r,e)){case"transform":return kA(r,e,i,t);case"css":return ug(r,e,t);case"attribute":return tn(r,e);default:return r[e]||0}}function Ou(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var i=Ln(r)||0,n=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return n+s+i;case"-":return n-s+i;case"*":return n*s+i}}function fg(r,e){if(ge.col(r))return zA(r);if(/\s/g.test(r))return r;var t=Ln(r),i=t?r.substr(0,r.length-t.length):r;return e?i+e:i}function ku(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function VA(r){return Math.PI*2*tn(r,"r")}function HA(r){return tn(r,"width")*2+tn(r,"height")*2}function GA(r){return ku({x:tn(r,"x1"),y:tn(r,"y1")},{x:tn(r,"x2"),y:tn(r,"y2")})}function pg(r){for(var e=r.points,t=0,i,n=0;n<e.numberOfItems;n++){var s=e.getItem(n);n>0&&(t+=ku(i,s)),i=s}return t}function WA(r){var e=r.points;return pg(r)+ku(e.getItem(e.numberOfItems-1),e.getItem(0))}function mg(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return VA(r);case"rect":return HA(r);case"line":return GA(r);case"polyline":return pg(r);case"polygon":return WA(r)}}function XA(r){var e=mg(r);return r.setAttribute("stroke-dasharray",e),e}function jA(r){for(var e=r.parentNode;ge.svg(e)&&ge.svg(e.parentNode);)e=e.parentNode;return e}function gg(r,e){var t=e||{},i=t.el||jA(r),n=i.getBoundingClientRect(),s=tn(i,"viewBox"),o=n.width,a=n.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function qA(r,e){var t=ge.str(r)?hg(r)[0]:r,i=e||100;return function(n){return{property:n,el:t,svg:gg(t),totalLength:mg(t)*(i/100)}}}function $A(r,e,t){function i(h){h===void 0&&(h=0);var u=e+h>=1?e+h:0;return r.el.getPointAtLength(u)}var n=gg(r.el,r.svg),s=i(),o=i(-1),a=i(1),l=t?1:n.w/n.vW,c=t?1:n.h/n.vH;switch(r.property){case"x":return(s.x-n.x)*l;case"y":return(s.y-n.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function mp(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=fg(ge.pth(r)?r.totalLength:r,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:ge.str(r)||e?i.split(t):[]}}function Vu(r){var e=r?ql(ge.arr(r)?r.map(pp):pp(r)):[];return jl(e,function(t,i,n){return n.indexOf(t)===i})}function yg(r){var e=Vu(r);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:dg(t)}}})}function YA(r,e){var t=Uu(e);if(/^spring/.test(t.easing)&&(t.duration=lg(t.easing)),ge.arr(r)){var i=r.length,n=i===2&&!ge.obj(r[0]);n?r={value:r}:ge.fnc(e.duration)||(t.duration=e.duration/i)}var s=ge.arr(r)?r:[r];return s.map(function(o,a){var l=ge.obj(o)&&!ge.pth(o)?o:{value:o};return ge.und(l.delay)&&(l.delay=a?0:e.delay),ge.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return $l(o,t)})}function KA(r){for(var e=jl(ql(r.map(function(s){return Object.keys(s)})),function(s){return ge.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},i=function(s){var o=e[s];t[o]=r.map(function(a){var l={};for(var c in a)ge.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},n=0;n<e.length;n++)i(n);return t}function ZA(r,e){var t=[],i=e.keyframes;i&&(e=$l(KA(i),e));for(var n in e)ge.key(n)&&t.push({name:n,tweens:YA(e[n],r)});return t}function JA(r,e){var t={};for(var i in r){var n=Xh(r[i],e);ge.arr(n)&&(n=n.map(function(s){return Xh(s,e)}),n.length===1&&(n=n[0])),t[i]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function QA(r,e){var t;return r.tweens.map(function(i){var n=JA(i,e),s=n.value,o=ge.arr(s)?s[1]:s,a=Ln(o),l=zu(e.target,r.name,a,e),c=t?t.to.original:l,h=ge.arr(s)?s[0]:c,u=Ln(h)||Ln(l),d=a||u;return ge.und(o)&&(o=c),n.from=mp(h,d),n.to=mp(Ou(o,h),d),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=Du(n.easing,n.duration),n.isPath=ge.pth(s),n.isPathTargetInsideSVG=n.isPath&&ge.svg(e.target),n.isColor=ge.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var xg={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,i,n){if(i.list.set(e,t),e===i.last||n){var s="";i.list.forEach(function(o,a){s+=a+"("+o+") "}),r.style.transform=s}}};function _g(r,e){var t=yg(r);t.forEach(function(i){for(var n in e){var s=Xh(e[n],i),o=i.target,a=Ln(s),l=zu(o,n,a,i),c=a||Ln(l),h=Ou(fg(s,c),l),u=Bu(o,n);xg[u](o,n,h,i.transforms,!0)}})}function eT(r,e){var t=Bu(r.target,e.name);if(t){var i=QA(e,r),n=i[i.length-1];return{type:t,property:e.name,animatable:r,tweens:i,duration:n.end,delay:i[0].delay,endDelay:n.endDelay}}}function tT(r,e){return jl(ql(r.map(function(t){return e.map(function(i){return eT(t,i)})})),function(t){return!ge.und(t)})}function vg(r,e){var t=r.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,r.map(function(s){return i(s)+s.duration})):e.duration,n.delay=t?Math.min.apply(Math,r.map(function(s){return i(s)+s.delay})):e.delay,n.endDelay=t?n.duration-Math.max.apply(Math,r.map(function(s){return i(s)+s.duration-s.endDelay})):e.endDelay,n}var gp=0;function iT(r){var e=Wh(og,r),t=Wh(Lu,r),i=ZA(t,r),n=yg(r.targets),s=tT(n,i),o=vg(s,t),a=gp;return gp++,$l(e,{id:a,children:[],animatables:n,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Bi=[],Mg=function(){var r;function e(){!r&&(!yp()||!Se.suspendWhenDocumentHidden)&&Bi.length>0&&(r=requestAnimationFrame(t))}function t(n){for(var s=Bi.length,o=0;o<s;){var a=Bi[o];a.paused?(Bi.splice(o,1),s--):(a.tick(n),o++)}r=o>0?requestAnimationFrame(t):void 0}function i(){Se.suspendWhenDocumentHidden&&(yp()?r=cancelAnimationFrame(r):(Bi.forEach(function(n){return n._onDocumentVisibility()}),Mg()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function yp(){return!!document&&document.hidden}function Se(r){r===void 0&&(r={});var e=0,t=0,i=0,n,s=0,o=null;function a(_){var x=window.Promise&&new Promise(function(M){return o=M});return _.finished=x,x}var l=iT(r);a(l);function c(){var _=l.direction;_!=="alternate"&&(l.direction=_!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,n.forEach(function(x){return x.reversed=l.reversed})}function h(_){return l.reversed?l.duration-_:_}function u(){e=0,t=h(l.currentTime)*(1/Se.speed)}function d(_,x){x&&x.seek(_-x.timelineOffset)}function f(_){if(l.reversePlayback)for(var M=s;M--;)d(_,n[M]);else for(var x=0;x<s;x++)d(_,n[x])}function m(_){for(var x=0,M=l.animations,v=M.length;x<v;){var b=M[x],A=b.animatable,E=b.tweens,S=E.length-1,w=E[S];S&&(w=jl(E,function(ae){return _<ae.end})[0]||w);for(var D=en(_-w.start-w.delay,0,w.duration)/w.duration,I=isNaN(D)?1:w.easing(D),C=w.to.strings,U=w.round,N=[],G=w.to.numbers.length,H=void 0,V=0;V<G;V++){var $=void 0,Y=w.to.numbers[V],he=w.from.numbers[V]||0;w.isPath?$=$A(w.value,I*Y,w.isPathTargetInsideSVG):$=he+I*(Y-he),U&&(w.isColor&&V>2||($=Math.round($*U)/U)),N.push($)}var ie=C.length;if(!ie)H=N[0];else{H=C[0];for(var W=0;W<ie;W++){C[W];var J=C[W+1],se=N[W];isNaN(se)||(J?H+=se+J:H+=se+" ")}}xg[b.type](A.target,b.property,H,A.transforms),b.currentValue=H,x++}}function y(_){l[_]&&!l.passThrough&&l[_](l)}function g(){l.remaining&&l.remaining!==!0&&l.remaining--}function p(_){var x=l.duration,M=l.delay,v=x-l.endDelay,b=h(_);l.progress=en(b/x*100,0,100),l.reversePlayback=b<l.currentTime,n&&f(b),!l.began&&l.currentTime>0&&(l.began=!0,y("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,y("loopBegin")),b<=M&&l.currentTime!==0&&m(0),(b>=v&&l.currentTime!==x||!x)&&m(x),b>M&&b<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,y("changeBegin")),y("change"),m(b)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,y("changeComplete")),l.currentTime=en(b,0,x),l.began&&y("update"),_>=x&&(t=0,g(),l.remaining?(e=i,y("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,y("loopComplete"),y("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var _=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=_==="reverse",l.remaining=l.loop,n=l.children,s=n.length;for(var x=s;x--;)l.children[x].reset();(l.reversed&&l.loop!==!0||_==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(_,x){return _g(_,x),l},l.tick=function(_){i=_,e||(e=i),p((i+(t-e))*Se.speed)},l.seek=function(_){p(h(_))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Bi.push(l),u(),Mg())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(_){var x=Vu(_);bg(x,l)},l.reset(),l.autoplay&&l.play(),l}function xp(r,e){for(var t=e.length;t--;)Fu(r,e[t].animatable.target)&&e.splice(t,1)}function bg(r,e){var t=e.animations,i=e.children;xp(r,t);for(var n=i.length;n--;){var s=i[n],o=s.animations;xp(r,o),!o.length&&!s.children.length&&i.splice(n,1)}!t.length&&!i.length&&e.pause()}function nT(r){for(var e=Vu(r),t=Bi.length;t--;){var i=Bi[t];bg(e,i)}}function sT(r,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?Du(e.easing):null,n=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",h=ge.arr(r),u=parseFloat(h?r[0]:r),d=h?parseFloat(r[1]):0,f=Ln(h?r[1]:r)||0,m=e.start||0+(h?u:0),y=[],g=0;return function(p,_,x){if(a&&(o=0),l&&(o=(x-1)/2),c&&(o=x-1),!y.length){for(var M=0;M<x;M++){if(!n)y.push(Math.abs(o-M));else{var v=l?(n[0]-1)/2:o%n[0],b=l?(n[1]-1)/2:Math.floor(o/n[0]),A=M%n[0],E=Math.floor(M/n[0]),S=v-A,w=b-E,D=Math.sqrt(S*S+w*w);s==="x"&&(D=-S),s==="y"&&(D=-w),y.push(D)}g=Math.max.apply(Math,y)}i&&(y=y.map(function(C){return i(C/g)*g})),t==="reverse"&&(y=y.map(function(C){return s?C<0?C*-1:-C:Math.abs(g-C)}))}var I=h?(d-u)/g:u;return m+I*(Math.round(y[_]*100)/100)+f}}function rT(r){r===void 0&&(r={});var e=Se(r);return e.duration=0,e.add=function(t,i){var n=Bi.indexOf(e),s=e.children;n>-1&&Bi.splice(n,1);function o(d){d.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=$l(t,Wh(Lu,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=ge.und(i)?c:Ou(i,c),o(e),e.seek(l.timelineOffset);var h=Se(l);o(h),s.push(h);var u=vg(s,r);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Se.version="3.2.1";Se.speed=1;Se.suspendWhenDocumentHidden=!0;Se.running=Bi;Se.remove=nT;Se.get=zu;Se.set=_g;Se.convertPx=Nu;Se.path=qA;Se.setDashoffset=XA;Se.stagger=sT;Se.timeline=rT;Se.easing=Du;Se.penner=cg;Se.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};class Il{constructor(){this.fps=!1,this.runTimeout=0,this.shakeDuration=0,this.rightShoulder=!0,this.position=new L,this.shakePower=.025,this.clock=new Xl,this.shakeAttenuation=1,this.onRunning=this.run.bind(this),this.fpRifleAim=new L(-.1541,1.524,.5);const e=Hh.size.ratio;this.camera=new ii(45,e,+this.fps*.215+.1),this.camera.far=xe.Level.depth,this.setCamera(),this.updateState()}setCamera(){const e=this.getPosition(),t=+!this.fps*2.5+22.5;this.camera.rotation.set(0,Math.PI,0),this.camera.setFocalLength(t),this.camera.position.copy(e)}updateState(){const{aspect:e,near:t,far:i,fov:n}=this.camera;Il.state={matrix:this.camera.matrixWorld,aspect:e,near:t,far:i,fov:n}}getPosition(e=!1,t=!1,i=!1){if(this.fps&&t&&i)return this.fpRifleAim;const{idle:n,run:s,aim:o}=xe.Camera[this.fps?"fps":"tps"];return this.position.copy(e?s:t?o:n),this.position.x-=+(!this.fps&&this.rightShoulder&&t&&i)*.125,this.position.x*=+(!this.fps&&!this.rightShoulder)*-2+1,this.position}changeView(e,t,i){this.fps=!this.fps,this.updateNearPlane(t,i);const{x:n,y:s,z:o}=this.getPosition(e,t,i);Se({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:n,y:s,z:o})}updateNearPlane(e,t,i){const s=+(this.camera.near===.5)*-300+400,o=e?.03:this.fps?t?.5:.315:.1;this.fps&&i&&t&&(this.camera.position.z=.2),this.camera.near!==o&&this.setNearPlane(o,s)}setNearPlane(e,t){Se({complete:()=>this.camera.updateProjectionMatrix(),update:()=>this.camera.updateProjectionMatrix(),targets:this.camera,easing:"linear",duration:t,near:e})}changeShoulder(e,t){if(this.fps)return;let{x:i}=this.camera.position;this.rightShoulder=!this.rightShoulder,e&&t&&(i=xe.Camera.tps.aim.x,i-=+this.rightShoulder*.125,i*=+this.rightShoulder*-2+1),Se({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:-i})}aimAnimation(e,t,i=400){const{x:n,y:s,z:o}=this.getPosition(!1,e,t);e&&Zt.remove(this.onRunning),e&&Se({targets:this.camera.rotation,easing:"linear",duration:250,y:Math.PI}),Se({targets:this.camera.position,easing:"easeInOutQuad",delay:+e*100,duration:i,x:n,y:s,z:o})}headAnimation(e,t){const{x:i,y:n,z:s}=this.camera.position,{x:o,y:a,z:l}=this.camera.rotation,c={x:0,y:0,z:0},h={x:0,y:0,z:0};switch(e){case"Front":c.y=.2,h.x=-.2;break;case"Left":c.x=-.5,c.y=.5,h.x=.5,h.y=-1;break;case"Right":c.x=.36,c.y=-.2,h.x=.5,h.y=.55;break}Se({targets:this.camera.position,direction:"alternate",easing:"easeOutSine",duration:t,x:i+c.x,y:n+c.y,z:s+c.z}),Se({targets:this.camera.rotation,direction:"alternate",easing:"easeOutSine",duration:t,x:o+h.x,y:a+h.y,z:l+h.z})}shakeAnimation(e){if(this.shakeDuration=Math.max(e,0),this.shakeDuration){const t=this.clock.getDelta(),i=fi.random().multiplyScalar(this.shakePower);setTimeout(()=>this.shakeAnimation(this.shakeDuration),t),this.shakeDuration-=t*this.shakeAttenuation,this.camera.position.add(i)}else this.camera.position.copy(this.getPosition())}runAnimation(e){if(e&&this.runTimeout)return;this.runTimeout=e?setTimeout(()=>Zt.add(this.onRunning),500):this.dispose();const t=this.getPosition(e),{x:i,y:n,z:s}=t;this.runDelta=0,!this.camera.position.equals(t)&&Se({targets:this.camera.position,easing:"easeOutQuad",duration:300,x:i,y:n,z:s})}run(){this.runDelta+=.25;const e=+this.fps+1,t=Math.sin(this.runDelta),i=Math.cos(this.runDelta/2);this.camera.position.y+=t*e/100,this.camera.rotation.y-=i*e/500}deathAnimation(e){const{x:t,z:i}=xe.Camera.tps.idle;Se({targets:this.camera.position,easing:"easeInOutQuad",duration:500,z:i-1,y:.75,delay:e,x:t})}setTo(e){e.add(this.camera)}resize(){this.camera.updateProjectionMatrix()}dispose(){return clearTimeout(this.runTimeout),Zt.remove(this.onRunning),0}static get config(){return Il.state}get object(){return this.camera}get isFPS(){return this.fps}}const Re=new Il,zt=Re.object,ch=new Pe;class Yl{constructor(e){e=e||{},this.vertices={near:[new F,new F,new F,new F],far:[new F,new F,new F,new F]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return ch.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(n){n.applyMatrix4(ch)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(n){n.applyMatrix4(ch);const s=Math.abs(n.z);i?n.z*=Math.min(t/s,1):n.multiplyScalar(Math.min(t/s,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new Yl);t.length=e.length;for(let i=0;i<e.length;i++){const n=t[i];if(i===0)for(let s=0;s<4;s++)n.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)n.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;s++)n.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)n.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const _p=new Pe,hh=new Yl,bn=new F,Ao=new kt,uh=[],dh=[],fh=new Pe,vp=new Pe,oT=new F(0,1,0);class aT{constructor(e){e=e||{},this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new F(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||1,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Yl,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new Em(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const n=this.lights[t].shadow.camera,s=this.frustums[t],o=s.vertices.near,a=s.vertices.far,l=a[0];let c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),f=s.vertices.far[0].z/(d-u.near),m=.25*Math.pow(f,2)*(d-u.near);h+=m}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":n(this.cascades,e.near,t,this.breaks);break;case"practical":s(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(o,a,l,c){for(let h=1;h<o;h++)c.push((a+(l-a)*h/o)/l);c.push(1)}function n(o,a,l,c){for(let h=1;h<o;h++)c.push(a*(l/a)**(h/o)/l);c.push(1)}function s(o,a,l,c,h){uh.length=0,dh.length=0,n(o,a,l,dh),i(o,a,l,uh);for(let u=1;u<o;u++)h.push(tm.lerp(uh[u-1],dh[u-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;fh.lookAt(new F,this.lightDirection,oT),vp.copy(fh).invert();for(let i=0;i<t.length;i++){const n=this.lights[i],s=n.shadow.camera,o=(s.right-s.left)/this.shadowMapSize,a=(s.top-s.bottom)/this.shadowMapSize;_p.multiplyMatrices(vp,e.matrixWorld),t[i].toSpace(_p,hh);const l=hh.vertices.near,c=hh.vertices.far;Ao.makeEmpty();for(let h=0;h<4;h++)Ao.expandByPoint(l[h]),Ao.expandByPoint(c[h]);Ao.getCenter(bn),bn.z=Ao.max.z+this.lightMargin,bn.x=Math.floor(bn.x/o)*o,bn.y=Math.floor(bn.y/a)*a,bn.applyMatrix4(fh),n.position.copy(bn),n.target.position.copy(bn),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,n=this.shaders;e.onBeforeCompile=function(s){const o=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),s.uniforms.CSM_cascades={value:t},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:o},n.set(e,s)},n.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){const s=i.uniforms;this.getExtendedBreaks(s.CSM_cascades.value),s.cameraNear.value=this.camera.near,s.shadowFar.value=e}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new qe);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],n=this.breaks[t-1]||0;e[t].x=n,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}class Sg extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Hu extends mi{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,h=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}var St=(r=>(r[r.BLACK=0]="BLACK",r[r.PORTAL=2236962]="PORTAL",r[r.BLUE=2980095]="BLUE",r[r.FOG=4737096]="FOG",r[r.RAIN=4934475]="RAIN",r[r.RED=9045767]="RED",r[r.MOON=11065767]="MOON",r[r.FIRE=16496449]="FIRE",r[r.WHITE=16777215]="WHITE",r))(St||{});const jh=[{bullet:!0,bulletPath:!1,bulletHoles:!1,fog:!0,volumetricFog:!1,raining:!0,raindrops:!1,softParticles:!1,clouds:0,dynamicClouds:!1,lighting:!1,physicalLights:!1},{bullet:!0,bulletPath:!1,bulletHoles:!0,fog:!1,volumetricFog:!1,raining:!0,raindrops:!0,softParticles:!1,clouds:300,dynamicClouds:!0,lighting:!0,physicalLights:!1},{bullet:!0,bulletPath:!0,bulletHoles:!0,fog:!0,volumetricFog:!0,raining:!0,raindrops:!0,softParticles:!0,clouds:1,dynamicClouds:!1,lighting:!0,physicalLights:!0}],wg=0,Ag=jh[wg],{length:lT}=Object.keys(Ag),ph=lT;var cT=(r=>(r[r.LOW=ph+0]="LOW",r[r.MEDIUM=ph+1]="MEDIUM",r[r.HIGH=ph+2]="HIGH",r))(cT||{});const qh=class Fo{constructor(){this.openDBConnection(this.getEnviromentSettings.bind(this))}updateVisualsStore(e,t=!0,i=Ag){const n=e.transaction("Visuals","readwrite"),s=n.objectStore("Visuals");for(const o in i){const a=o;Fo.visuals.set(a,i[a]),s[t?"add":"put"](i[a],a).onerror=this.onQueryError.bind(this)}n.oncomplete=this.onTransactionComplete.bind(this,e,!1)}getEnviromentSettings(e,t=!1){const i=e.transaction("Visuals","readonly"),n=i.objectStore("Visuals");n.openCursor().onsuccess=s=>{const o=s.target.result;if(!o)return t?null:this.updateVisualsStore(e);const a=o.key;Fo.visuals.set(a,o.value),o.continue(),t=!0},i.oncomplete=this.onTransactionComplete.bind(this,e,!0)}updateVisualValues(e){this.openDBConnection(t=>this.updateVisualsStore(t,!1,e))}onTransactionComplete(e,t){t&&Q.dispatch("Game::SettingsInit"),e.close()}onUpgradeNeeded(e){e.target.result.createObjectStore("Visuals")}openDBConnection(e){const t=indexedDB.open("YAZH");t.onerror=this.onRequestError.bind(this),t.onupgradeneeded=this.onUpgradeNeeded.bind(this),t.onsuccess=i=>{const n=i.target.result;e(n)}}resetVisualValues(e){this.updateVisualValues(jh[e])}onRequestError(e){console.error("Settings DB Request Error:",e)}onQueryError(e){console.error("Settings DB Query Error:",e)}static getDefaultVisualValues(e=wg){return new Map(Object.entries(jh[e]))}static getVisualValue(e){return Fo.visuals.get(e)}static getVisualValues(){return Fo.visuals}};qh.visuals=qh.getDefaultVisualValues();let dt=qh;class hT{constructor(){this.coords=ke.portals,this.position=new L,this.player=new L,this.offset=new Ce,this.triggers=this.coords.filter((e,t)=>!(t%2)).map((e,t,i)=>e[0]+(+(t<i.length/2)*-2+1)*-.1),this.createPortals()}async createPortals(){await this.createMaterial();for(let e=0,t=0;t<this.triggers.length;e+=2,t++){const i=this.coords[e][1],n=this.coords[e+1][1],s=Math.abs(i-n)/2,o=+(t<2)*2-1,a=s+.52,l=new lt(new Hu(a,32,0,Math.PI),this.material);l.renderOrder=1,l.position.x=this.triggers[t],l.rotation.y=Qe.d2*o,l.position.z=i+s*-o,l.position.z+=xe.Level.portalsOffset[t],Q.dispatch("Level::AddObject",l)}}async createMaterial(){const e=await je.Loader.loadShader("portal/main.vert"),t=await je.Loader.loadShader("portal/main.frag"),i=dt.getVisualValue("volumetricFog"),n=new Fe(St.PORTAL),s=new Fe(St.MOON),o=xe.Level.fogDensity*(+!i*4+1);return this.material=new Vi({uniforms:{fogColor:{value:new Fe(St.FOG)},backgroundColor:{value:n},spikesColor:{value:s},fogDensity:{value:o},deltaTime:{value:0}},fragmentShader:t,vertexShader:e,glslVersion:Kr,transparent:!0}),this.material.defines={VOLUMETRIC_FOG:i},this.material.fog=dt.getVisualValue("fog"),this.material}topPortalArea(){if(this.player.z>this.coords[1][1]){if(this.player.x<=this.triggers[0])return this.offset.set(this.coords[0][0]-this.player.x,this.coords[0][1]-this.player.z),this.updatePosition(2,3),!0;if(this.player.x>=this.triggers[3])return this.offset.set(this.player.x-this.coords[6][0],this.coords[7][1]-this.player.z),this.updatePosition(4),!0}return!1}bottomPortalArea(){if(this.player.z<this.coords[2][1]){if(this.player.x<=this.triggers[1])return this.offset.set(-(this.coords[2][0]-this.player.x),this.coords[2][1]-this.player.z),this.updatePosition(0,1),!0;if(this.player.x>=this.triggers[2])return this.offset.set(this.player.x-this.coords[4][0],this.coords[5][1]-this.player.z),this.updatePosition(6),!0}return!1}updatePosition(e,t=e){const i=this.coords[e][0],n=Math.sign(i)*-.3;this.position.set(this.coords[e][0]-this.offset.x+n,this.player.y,this.coords[t][1]+this.offset.y)}update(e){this.material.uniforms.deltaTime.value+=e/10}portalPassed(e){return this.player.copy(e),this.topPortalArea()||this.bottomPortalArea()}setFogUniforms(e){this.material.onBeforeCompile=e}dispose(){this.material?.dispose(),this.triggers.splice(0)}get playerPosition(){return this.position}}function uT(r,e=r.length,t=0){for(;e;)t=Jt(0,1)*e--|0,[r[e],r[t]]=[r[t],r[e]]}function dT(r){return JSON.parse(JSON.stringify(r))}function fT(r){return r[Iu(0,r.length-1)]}function Ll(r){let e=r.length,t=1/0;for(;e--;)r[e]<t&&(t=r[e]);return t}function Dl(r){let e=r.length,t=-1/0;for(;e--;)r[e]>t&&(t=r[e]);return t}class pT extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mp=new et,$h=new Eu,el=new to,tl=new L;class Tg extends vt{constructor(e=new mi,t=new pT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(n),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Mp.copy(n).invert(),$h.copy(e.ray).applyMatrix4(Mp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,y=f;m<y;m++){const g=c.getX(m);tl.fromBufferAttribute(u,g),bp(tl,g,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,y=f;m<y;m++)tl.fromBufferAttribute(u,m),bp(tl,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bp(r,e,t,i,n,s,o){const a=$h.distanceSqToPoint(r);if(a<t){const l=new L;$h.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const Sp=Math.tan(Qe.d3)*3;class mT{constructor(e,t,i){this.renderer=e,this.scene=t,this.worker=i,this.minCoords=ke.minCoords.map(n=>n-5),this.maxCoords=ke.maxCoords.map(n=>n+5),this.geometry=new mi,this.delta=0,this.createRenderTargets(),this.createWorkerLoop(),this.createParticles()}createRenderTargets(){if(!dt.getVisualValue("softParticles"))return;const{width:e,height:t}=this.renderer.domElement,i=new Qm(e,t,Os);this.renderTargets=[new Fn(e,t),new Fn(e,t)],i.format=js,i.minFilter=bt,i.magFilter=bt,this.renderTargets.forEach(n=>{n.depthTexture=i.clone(),n.texture.minFilter=bt,n.texture.magFilter=bt,n.texture.generateMipmaps=!1,n.texture.format=Si,n.stencilBuffer=!0,n.depthBuffer=!0})}async createParticles(){const{width:e,height:t}=this.renderer.domElement,i=await je.Loader.loadShader("rain/main.vert"),n=await je.Loader.loadShader("rain/main.frag");this.material=new Vi({uniforms:{soft:{value:dt.getVisualValue("softParticles")},screenSize:{value:new Ce(e,t)},color:{value:new Fe(St.RAIN)},ratio:{value:t/Sp},near:{value:zt.near},far:{value:zt.far},dropSize:{value:3},diffuse:{value:null},depth:{value:null}},blending:Ih,fragmentShader:n,vertexShader:i,glslVersion:Kr,transparent:!0,depthWrite:!1});const s=this.material.uniforms;this.drops=new Tg(this.geometry,this.material),this.renderTargets&&(s.depth.value=this.renderTargets[0].depthTexture),Promise.all(xe.Level.rain.map(je.Loader.loadTexture.bind(je.Loader))).then(o=>s.diffuse.value=o),this.drops.frustumCulled=!1,this.drops.renderOrder=2,this.scene.add(this.drops)}createWorkerLoop(){this.worker?.add("Rain::UpdateParticles",e=>this.updateParticleGeometry(e.data),{minCoords:this.minCoords,maxCoords:this.maxCoords}),this.worker?.post("Rain::UpdateParticles",{camera:zt.position,delta:this.delta})}update(e){if(this.delta=e,!this.worker&&this.updateParticles(),this.renderTargets){const t=this.renderTargets[0];this.material.uniforms.depth.value=t.depthTexture,this.material.uniforms.near.value=zt.near,this.material.uniforms.far.value=zt.far,this.renderer.setRenderTarget(this.renderTargets[1]),this.renderer.render(this.scene,zt),this.renderTargets[0]=this.renderTargets[1],this.renderTargets[1]=t,this.renderer.setRenderTarget(null)}}updateParticles(){const e=this.minCoords,t=this.maxCoords;this.updateParticleGeometry(Dg({camera:zt.position,minCoords:e,maxCoords:t,delta:this.delta}))}updateParticleGeometry(e){this.geometry.setAttribute("position",new Xe(e[0],3)),this.geometry.setAttribute("angle",new Xe(e[1],1)),this.geometry.setAttribute("alpha",new Xe(e[2],1)),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.angle.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.worker?.post("Rain::UpdateParticles",{camera:zt.position,delta:this.delta})}resize(e,t){this.material&&(this.material.uniforms.ratio.value=t/Sp,this.material.uniforms.screenSize.value.set(e,t)),this.renderTargets?.forEach(i=>{i.depthTexture.needsUpdate=!0,i.texture.needsUpdate=!0,i.setSize(e,t)})}dispose(){if(this.material){const e=this.material.uniforms.diffuse;this.material.uniforms.depth.value?.dispose(),e.value?.forEach(i=>i.dispose())}this.worker?.remove("Rain::UpdateParticles"),this.renderTargets?.forEach(e=>{e.depthTexture.dispose(),e.texture.dispose(),e.dispose()}),this.minCoords.splice(0),this.maxCoords.splice(0),this.material?.dispose(),this.geometry.dispose(),this.drops?.clear(),this.delta=0}}class Gu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new Gu(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}let gT=class extends Gu{constructor(e){super(St.FOG,xe.Level.fogDensity*(+!e*4+1)),this.volumetric=e,this.shaders=[],this.materials=0,this.time=0,this.volumetric&&(this.loadShaders(),dt.getVisualValue("volumetricFog")&&je.Loader.loadTexture(xe.Level.fog).then(t=>this.noise=t))}async loadShaders(){const e=await je.Loader.loadShader("fog/pars.frag"),t=await je.Loader.loadShader("fog/pars.vert"),i=await je.Loader.loadShader("fog/main.frag"),n=await je.Loader.loadShader("fog/main.vert");Ie.fog_pars_fragment=e,Ie.fog_pars_vertex=t,Ie.fog_fragment=i,Ie.fog_vertex=n}setShaderUniforms(e){e.uniforms.noise={value:this.noise},e.uniforms.fogTime={value:0},this.shaders.push(e),this.materials=this.shaders.length}update(e){if(this.volumetric){this.time+=e*.025;for(let t=0;t<this.materials;t++)this.shaders[t].uniforms.fogTime.value=this.time}}dispose(){this.volumetric&&(this.shaders.splice(0),this.noise?.dispose(),this.materials=0)}get setUniforms(){return this.setShaderUniforms.bind(this)}};const Eg=0,yT=1,xT=2,wp=2,mh=1.25,Ap=1,_l=6*4+4+4,Yh=65535,_T=Math.pow(2,-24);class il{constructor(){}}function Zi(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function Tp(r){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=r[i+3]-r[i];n>t&&(t=n,e=i)}return e}function Ep(r,e){e.set(r)}function Rp(r,e,t){let i,n;for(let s=0;s<3;s++){const o=s+3;i=r[s],n=e[s],t[s]=i<n?i:n,i=r[o],n=e[o],t[o]=i>n?i:n}}function nl(r,e,t){for(let i=0;i<3;i++){const n=e[r+2*i],s=e[r+2*i+1],o=n-s,a=n+s;o<t[i]&&(t[i]=o),a>t[i+3]&&(t[i+3]=a)}}function To(r){const e=r[3]-r[0],t=r[4]-r[1],i=r[5]-r[2];return 2*(e*t+t*i+i*e)}function vT(r,e){if(!r.index){const t=r.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let n;t>65535?n=new Uint32Array(new i(4*t)):n=new Uint16Array(new i(2*t)),r.setIndex(new Qt(n,1));for(let s=0;s<t;s++)n[s]=s}}function MT(r){if(!r.groups||!r.groups.length)return[{offset:0,count:r.index.count/3}];const e=[],t=new Set;for(const n of r.groups)t.add(n.start),t.add(n.start+n.count);const i=Array.from(t.values()).sort((n,s)=>n-s);for(let n=0;n<i.length-1;n++){const s=i[n],o=i[n+1];e.push({offset:s/3,count:(o-s)/3})}return e}function gh(r,e,t,i,n=null){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,m=-1/0,y=-1/0,g=-1/0;const p=n!==null;for(let _=e*6,x=(e+t)*6;_<x;_+=6){const M=r[_+0],v=r[_+1],b=M-v,A=M+v;b<s&&(s=b),A>l&&(l=A),p&&M<u&&(u=M),p&&M>m&&(m=M);const E=r[_+2],S=r[_+3],w=E-S,D=E+S;w<o&&(o=w),D>c&&(c=D),p&&E<d&&(d=E),p&&E>y&&(y=E);const I=r[_+4],C=r[_+5],U=I-C,N=I+C;U<a&&(a=U),N>h&&(h=N),p&&I<f&&(f=I),p&&I>g&&(g=I)}i[0]=s,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=h,p&&(n[0]=u,n[1]=d,n[2]=f,n[3]=m,n[4]=y,n[5]=g)}function bT(r,e,t,i){let n=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let h=e*6,u=(e+t)*6;h<u;h+=6){const d=r[h+0];d<n&&(n=d),d>a&&(a=d);const f=r[h+2];f<s&&(s=f),f>l&&(l=f);const m=r[h+4];m<o&&(o=m),m>c&&(c=m)}i[0]=n,i[1]=s,i[2]=o,i[3]=a,i[4]=l,i[5]=c}function ST(r,e,t,i,n){let s=t,o=t+i-1;const a=n.pos,l=n.axis*2;for(;;){for(;s<=o&&e[s*6+l]<a;)s++;for(;s<=o&&e[o*6+l]>=a;)o--;if(s<o){for(let c=0;c<3;c++){let h=r[s*3+c];r[s*3+c]=r[o*3+c],r[o*3+c]=h;let u=e[s*6+c*2+0];e[s*6+c*2+0]=e[o*6+c*2+0],e[o*6+c*2+0]=u;let d=e[s*6+c*2+1];e[s*6+c*2+1]=e[o*6+c*2+1],e[o*6+c*2+1]=d}s++,o--}else return s}}const An=32,wT=(r,e)=>r.candidate-e.candidate,Kn=new Array(An).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),sl=new Float32Array(6);function AT(r,e,t,i,n,s){let o=-1,a=0;if(s===Eg)o=Tp(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===yT)o=Tp(r),o!==-1&&(a=TT(t,i,n,o));else if(s===xT){const l=To(r);let c=mh*n;const h=i*6,u=(i+n)*6;for(let d=0;d<3;d++){const f=e[d],g=(e[d+3]-f)/An;if(n<An/4){const p=[...Kn];p.length=n;let _=0;for(let M=h;M<u;M+=6,_++){const v=p[_];v.candidate=t[M+2*d],v.count=0;const{bounds:b,leftCacheBounds:A,rightCacheBounds:E}=v;for(let S=0;S<3;S++)E[S]=1/0,E[S+3]=-1/0,A[S]=1/0,A[S+3]=-1/0,b[S]=1/0,b[S+3]=-1/0;nl(M,t,b)}p.sort(wT);let x=n;for(let M=0;M<x;M++){const v=p[M];for(;M+1<x&&p[M+1].candidate===v.candidate;)p.splice(M+1,1),x--}for(let M=h;M<u;M+=6){const v=t[M+2*d];for(let b=0;b<x;b++){const A=p[b];v>=A.candidate?nl(M,t,A.rightCacheBounds):(nl(M,t,A.leftCacheBounds),A.count++)}}for(let M=0;M<x;M++){const v=p[M],b=v.count,A=n-v.count,E=v.leftCacheBounds,S=v.rightCacheBounds;let w=0;b!==0&&(w=To(E)/l);let D=0;A!==0&&(D=To(S)/l);const I=Ap+mh*(w*b+D*A);I<c&&(o=d,c=I,a=v.candidate)}}else{for(let x=0;x<An;x++){const M=Kn[x];M.count=0,M.candidate=f+g+x*g;const v=M.bounds;for(let b=0;b<3;b++)v[b]=1/0,v[b+3]=-1/0}for(let x=h;x<u;x+=6){let b=~~((t[x+2*d]-f)/g);b>=An&&(b=An-1);const A=Kn[b];A.count++,nl(x,t,A.bounds)}const p=Kn[An-1];Ep(p.bounds,p.rightCacheBounds);for(let x=An-2;x>=0;x--){const M=Kn[x],v=Kn[x+1];Rp(M.bounds,v.rightCacheBounds,M.rightCacheBounds)}let _=0;for(let x=0;x<An-1;x++){const M=Kn[x],v=M.count,b=M.bounds,E=Kn[x+1].rightCacheBounds;v!==0&&(_===0?Ep(b,sl):Rp(b,sl,sl)),_+=v;let S=0,w=0;_!==0&&(S=To(sl)/l);const D=n-_;D!==0&&(w=To(E)/l);const I=Ap+mh*(S*_+w*D);I<c&&(o=d,c=I,a=M.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function TT(r,e,t,i){let n=0;for(let s=e,o=e+t;s<o;s++)n+=r[s*6+i*2];return n/t}function ET(r,e){const t=r.attributes.position,i=r.index.array,n=i.length/3,s=new Float32Array(n*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const h=["getX","getY","getZ"];for(let u=0;u<n;u++){const d=u*3,f=u*6;let m,y,g;o?(m=i[d+0],y=i[d+1],g=i[d+2]):(m=i[d+0]*c+l,y=i[d+1]*c+l,g=i[d+2]*c+l);for(let p=0;p<3;p++){let _,x,M;o?(_=t[h[p]](m),x=t[h[p]](y),M=t[h[p]](g)):(_=a[m+p],x=a[y+p],M=a[g+p]);let v=_;x<v&&(v=x),M<v&&(v=M);let b=_;x>b&&(b=x),M>b&&(b=M);const A=(b-v)/2,E=p*2;s[f+E+0]=v+A,s[f+E+1]=A+(Math.abs(v)+A)*_T,v<e[p]&&(e[p]=v),b>e[p+3]&&(e[p+3]=b)}}return s}function RT(r,e){function t(p){d&&d(p/f)}function i(p,_,x,M=null,v=0){if(!m&&v>=l&&(m=!0,c&&(console.warn(`MeshBVH: Max depth of ${l} reached when generating BVH. Consider increasing maxDepth.`),console.warn(r))),x<=h||v>=l)return t(_+x),p.offset=_,p.count=x,p;const b=AT(p.boundingData,M,o,_,x,u);if(b.axis===-1)return t(_+x),p.offset=_,p.count=x,p;const A=ST(a,o,_,x,b);if(A===_||A===_+x)t(_+x),p.offset=_,p.count=x;else{p.splitAxis=b.axis;const E=new il,S=_,w=A-_;p.left=E,E.boundingData=new Float32Array(6),gh(o,S,w,E.boundingData,s),i(E,S,w,s,v+1);const D=new il,I=A,C=x-w;p.right=D,D.boundingData=new Float32Array(6),gh(o,I,C,D.boundingData,s),i(D,I,C,s,v+1)}return p}vT(r,e);const n=new Float32Array(6),s=new Float32Array(6),o=ET(r,n),a=r.index.array,l=e.maxDepth,c=e.verbose,h=e.maxLeafTris,u=e.strategy,d=e.onProgress,f=r.index.count/3;let m=!1;const y=[],g=MT(r);if(g.length===1){const p=g[0],_=new il;_.boundingData=n,bT(o,p.offset,p.count,s),i(_,p.offset,p.count,s),y.push(_)}else for(let p of g){const _=new il;_.boundingData=new Float32Array(6),gh(o,p.offset,p.count,_.boundingData,s),i(_,p.offset,p.count,s),y.push(_)}return y}function CT(r,e){const t=RT(r,e);let i,n,s;const o=[],a=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<t.length;h++){const u=t[h];let d=l(u);const f=new a(_l*d);i=new Float32Array(f),n=new Uint32Array(f),s=new Uint16Array(f),c(0,u),o.push(f)}return o;function l(h){return h.count?1:1+l(h.left)+l(h.right)}function c(h,u){const d=h/4,f=h/2,m=!!u.count,y=u.boundingData;for(let g=0;g<6;g++)i[d+g]=y[g];if(m){const g=u.offset,p=u.count;return n[d+6]=g,s[f+14]=p,s[f+15]=Yh,h+_l}else{const g=u.left,p=u.right,_=u.splitAxis;let x;if(x=c(h+_l,g),x/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return n[d+6]=x/4,x=c(x,p),n[d+7]=_,x}}}class Un{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}}Un.prototype.setFromBox=function(){const r=new F;return function(t,i){const n=i.min,s=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=n.x*l+s.x*(1-l),r.y=n.y*c+s.y*(1-c),r.z=n.z*h+s.z*(1-h);const u=t.dot(r);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}}();const PT=function(){const r=new F,e=new F,t=new F;return function(n,s,o){const a=n.start,l=r,c=s.start,h=e;t.subVectors(a,c),r.subVectors(n.end,n.start),e.subVectors(s.end,s.start);const u=t.dot(h),d=h.dot(l),f=h.dot(h),m=t.dot(l),g=l.dot(l)*f-d*d;let p,_;g!==0?p=(u*d-m*f)/g:p=0,_=(u+p*d)/f,o.x=p,o.y=_}}(),Wu=function(){const r=new qe,e=new F,t=new F;return function(n,s,o,a){PT(n,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),n.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?n.at(0,o):n.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=n.start:h=n.end;let u;c<0?u=s.start:u=s.end;const d=e,f=t;if(n.closestPointToPoint(u,!0,e),s.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(f);return}}}}(),IT=function(){const r=new F,e=new F,t=new Jn,i=new Pn;return function(s,o){const{radius:a,center:l}=s,{a:c,b:h,c:u}=o;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(i.start=c,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;const y=o.getPlane(t);if(Math.abs(y.distanceToPoint(l))<=a){const p=y.projectPoint(l,e);if(o.containsPoint(p))return!0}return!1}}(),LT=1e-15;function Er(r){return Math.abs(r)<LT}class Nn extends Ji{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new F),this.satBounds=new Array(4).fill().map(()=>new Un),this.points=[this.a,this.b,this.c],this.sphere=new on,this.plane=new Jn,this.needsUpdate=!0}intersectsSphere(e){return IT(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,n);const c=s[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,n);const u=s[2],d=o[2];u.subVectors(t,i),d.setFromPoints(u,n);const f=s[3],m=o[3];f.subVectors(i,e),m.setFromPoints(f,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Nn.prototype.closestPointToSegment=function(){const r=new F,e=new F,t=new Pn;return function(n,s=null,o=null){const{start:a,end:l}=n,c=this.points;let h,u=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),Wu(t,n,r,e),h=r.distanceToSquared(e),h<u&&(u=h,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),h=a.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(u)}}();Nn.prototype.intersectsTriangle=function(){const r=new Nn,e=new Array(3),t=new Array(3),i=new Un,n=new Un,s=new F,o=new F,a=new F,l=new F,c=new Pn,h=new Pn,u=new Pn;return function(f,m=null,y=!1){this.needsUpdate&&this.update(),f.isExtendedTriangle?f.needsUpdate&&f.update():(r.copy(f),r.update(),f=r);const g=this.plane,p=f.plane;if(Math.abs(g.normal.dot(p.normal))>1-1e-10){const _=this.satBounds,x=this.satAxes;t[0]=f.a,t[1]=f.b,t[2]=f.c;for(let b=0;b<4;b++){const A=_[b],E=x[b];if(i.setFromPoints(E,t),A.isSeparated(i))return!1}const M=f.satBounds,v=f.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let b=0;b<4;b++){const A=M[b],E=v[b];if(i.setFromPoints(E,e),A.isSeparated(i))return!1}for(let b=0;b<4;b++){const A=x[b];for(let E=0;E<4;E++){const S=v[E];if(s.crossVectors(A,S),i.setFromPoints(s,e),n.setFromPoints(s,t),i.isSeparated(n))return!1}}return m&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const _=this.points;let x=!1,M=0;for(let U=0;U<3;U++){const N=_[U],G=_[(U+1)%3];c.start.copy(N),c.end.copy(G),c.delta(o);const H=x?h.start:h.end,V=Er(p.distanceToPoint(N));if(Er(p.normal.dot(o))&&V){h.copy(c),M=2;break}if((p.intersectLine(c,H)||V)&&!Er(H.distanceTo(G))){if(M++,x)break;x=!0}}if(M===1&&f.containsPoint(h.end))return m&&(m.start.copy(h.end),m.end.copy(h.end)),!0;if(M!==2)return!1;const v=f.points;let b=!1,A=0;for(let U=0;U<3;U++){const N=v[U],G=v[(U+1)%3];c.start.copy(N),c.end.copy(G),c.delta(a);const H=b?u.start:u.end,V=Er(g.distanceToPoint(N));if(Er(g.normal.dot(a))&&V){u.copy(c),A=2;break}if((g.intersectLine(c,H)||V)&&!Er(H.distanceTo(G))){if(A++,b)break;b=!0}}if(A===1&&this.containsPoint(u.end))return m&&(m.start.copy(u.end),m.end.copy(u.end)),!0;if(A!==2)return!1;if(h.delta(o),u.delta(a),o.dot(a)<0){let U=u.start;u.start=u.end,u.end=U}const E=h.start.dot(o),S=h.end.dot(o),w=u.start.dot(o),D=u.end.dot(o),I=S<w,C=E<D;return E!==D&&w!==S&&I===C?!1:(m&&(l.subVectors(h.start,u.start),l.dot(o)>0?m.start.copy(h.start):m.start.copy(u.start),l.subVectors(h.end,u.end),l.dot(o)<0?m.end.copy(h.end):m.end.copy(u.end)),!0)}}}();Nn.prototype.distanceToPoint=function(){const r=new F;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();Nn.prototype.distanceToTriangle=function(){const r=new F,e=new F,t=["a","b","c"],i=new Pn,n=new Pn;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],m=o[f];this.closestPointToPoint(m,r),d=m.distanceToSquared(r),d<h&&(h=d,a&&a.copy(r),l&&l.copy(m));const y=this[f];o.closestPointToPoint(y,r),d=y.distanceToSquared(r),d<h&&(h=d,a&&a.copy(y),l&&l.copy(r))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];i.set(this[d],this[f]);for(let m=0;m<3;m++){const y=t[m],g=t[(m+1)%3];n.set(o[y],o[g]),Wu(i,n,r,e);const p=r.distanceToSquared(e);p<h&&(h=p,a&&a.copy(r),l&&l.copy(e))}}return Math.sqrt(h)}}();class rn{constructor(e,t,i){this.isOrientedBox=!0,this.min=new F,this.max=new F,this.matrix=new Pe,this.invMatrix=new Pe,this.points=new Array(8).fill().map(()=>new F),this.satAxes=new Array(3).fill().map(()=>new F),this.satBounds=new Array(3).fill().map(()=>new Un),this.alignedSatBounds=new Array(3).fill().map(()=>new Un),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}rn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=n[d];f.x=c?i.x:t.x,f.y=h?i.y:t.y,f.z=u?i.z:t.z,f.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=n[0];for(let c=0;c<3;c++){const h=o[c],u=s[c],d=1<<c,f=n[d];h.subVectors(a,f),u.setFromPoints(h,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();rn.prototype.intersectsBox=function(){const r=new Un;return function(t){this.needsUpdate&&this.update();const i=t.min,n=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=i.x,r.max=n.x,a[0].isSeparated(r)||(r.min=i.y,r.max=n.y,a[1].isSeparated(r))||(r.min=i.z,r.max=n.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=o[l],h=s[l];if(r.setFromBox(c,t),h.isSeparated(r))return!1}return!0}}();rn.prototype.intersectsTriangle=function(){const r=new Nn,e=new Array(3),t=new Un,i=new Un,n=new F;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const f=a[d],m=l[d];if(t.setFromPoints(m,e),f.isSeparated(t))return!1}const c=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],m=h[d];if(t.setFromPoints(m,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let m=0;m<4;m++){const y=h[m];if(n.crossVectors(f,y),t.setFromPoints(n,e),i.setFromPoints(n,u),t.isSeparated(i))return!1}}return!0}}();rn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();rn.prototype.distanceToPoint=function(){const r=new F;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();rn.prototype.distanceToBox=function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new Pn),t=new Array(12).fill().map(()=>new Pn),i=new F,n=new F;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(n),this.closestPointToPoint(n,i),o.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;const h=a*a,u=o.min,d=o.max,f=this.points;let m=1/0;for(let g=0;g<8;g++){const p=f[g];n.copy(p).clamp(u,d);const _=p.distanceToSquared(n);if(_<m&&(m=_,l&&l.copy(p),c&&c.copy(n),_<h))return Math.sqrt(_)}let y=0;for(let g=0;g<3;g++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){const x=(g+1)%3,M=(g+2)%3,v=p<<x|_<<M,b=1<<g|p<<x|_<<M,A=f[v],E=f[b];e[y].set(A,E);const w=r[g],D=r[x],I=r[M],C=t[y],U=C.start,N=C.end;U[w]=u[w],U[D]=p?u[D]:d[D],U[I]=_?u[I]:d[D],N[w]=d[w],N[D]=p?u[D]:d[D],N[I]=_?u[I]:d[D],y++}for(let g=0;g<=1;g++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){n.x=g?d.x:u.x,n.y=p?d.y:u.y,n.z=_?d.z:u.z,this.closestPointToPoint(n,i);const x=n.distanceToSquared(i);if(x<m&&(m=x,l&&l.copy(i),c&&c.copy(n),x<h))return Math.sqrt(x)}for(let g=0;g<12;g++){const p=e[g];for(let _=0;_<12;_++){const x=t[_];Wu(p,x,i,n);const M=i.distanceToSquared(n);if(M<m&&(m=M,l&&l.copy(i),c&&c.copy(n),M<h))return Math.sqrt(M)}}return Math.sqrt(m)}}();const Rr=new F,Cr=new F,Pr=new F,rl=new qe,ol=new qe,al=new qe,Cp=new F,Pp=new F,Ip=new F,ll=new F;function DT(r,e,t,i,n,s){let o;return s===$p?o=r.intersectTriangle(i,t,e,!0,n):o=r.intersectTriangle(e,t,i,s!==Yp,n),o===null?null:{distance:r.origin.distanceTo(n),point:n.clone()}}function FT(r,e,t,i,n,s,o,a,l){Rr.fromBufferAttribute(e,s),Cr.fromBufferAttribute(e,o),Pr.fromBufferAttribute(e,a);const c=DT(r,Rr,Cr,Pr,ll,l);if(c){i&&(rl.fromBufferAttribute(i,s),ol.fromBufferAttribute(i,o),al.fromBufferAttribute(i,a),c.uv=Ji.getInterpolation(ll,Rr,Cr,Pr,rl,ol,al,new qe)),n&&(rl.fromBufferAttribute(n,s),ol.fromBufferAttribute(n,o),al.fromBufferAttribute(n,a),c.uv1=Ji.getInterpolation(ll,Rr,Cr,Pr,rl,ol,al,new qe)),t&&(Cp.fromBufferAttribute(t,s),Pp.fromBufferAttribute(t,o),Ip.fromBufferAttribute(t,a),c.normal=Ji.getInterpolation(ll,Rr,Cr,Pr,Cp,Pp,Ip,new F),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const h={a:s,b:o,c:a,normal:new F,materialIndex:0};Ji.getNormal(Rr,Cr,Pr,h.normal),c.face=h,c.faceIndex=s}return c}function Rg(r,e,t,i,n){const s=i*3,o=r.index.getX(s),a=r.index.getX(s+1),l=r.index.getX(s+2),{position:c,normal:h,uv:u,uv1:d}=r.attributes,f=FT(t,c,h,u,d,o,a,l,e);return f?(f.faceIndex=i,n&&n.push(f),f):null}function UT(r,e,t,i,n,s){for(let o=i,a=i+n;o<a;o++)Rg(r,e,t,o,s)}function NT(r,e,t,i,n){let s=1/0,o=null;for(let a=i,l=i+n;a<l;a++){const c=Rg(r,e,t,a);c&&c.distance<s&&(o=c,s=c.distance)}return o}function $i(r,e,t,i){const n=r.a,s=r.b,o=r.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(e),l=t.getX(e+1),c=t.getX(e+2)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function Lp(r,e,t,i,n,s,o){const a=t.index,l=t.attributes.position;for(let c=r,h=e+r;c<h;c++)if($i(o,c*3,a,l),o.needsUpdate=!0,i(o,c,n,s))return!0;return!1}class Cg{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}function es(r,e){return e[r+15]===65535}function Wr(r,e){return e[r+6]}function Zo(r,e){return e[r+14]}function Jo(r){return r+8}function Qo(r,e){return e[r+6]}function BT(r,e){return e[r+7]}const Or=new kt,Fl=new F,zT=["x","y","z"];function Kh(r,e,t,i,n){let s=r*2,o=no,a=ss,l=rs;if(es(s,a)){const h=Wr(r,l),u=Zo(s,a);UT(e,t,i,h,u,n)}else{const h=Jo(r);Ul(h,o,i,Fl)&&Kh(h,e,t,i,n);const u=Qo(r,l);Ul(u,o,i,Fl)&&Kh(u,e,t,i,n)}}function Zh(r,e,t,i){let n=r*2,s=no,o=ss,a=rs;if(es(n,o)){const c=Wr(r,a),h=Zo(n,o);return NT(e,t,i,c,h)}else{const c=BT(r,a),h=zT[c],d=i.direction[h]>=0;let f,m;d?(f=Jo(r),m=Qo(r,a)):(f=Qo(r,a),m=Jo(r));const g=Ul(f,s,i,Fl)?Zh(f,e,t,i):null;if(g){const x=g.point[h];if(d?x<=s[m+c]:x>=s[m+c+3])return g}const _=Ul(m,s,i,Fl)?Zh(m,e,t,i):null;return g&&_?g.distance<=_.distance?g:_:g||_||null}}const OT=function(){let r,e;const t=[],i=new Cg(()=>new kt);return function(...o){r=i.getPrimitive(),e=i.getPrimitive(),t.push(r,e);const a=n(...o);i.releasePrimitive(r),i.releasePrimitive(e),t.pop(),t.pop();const l=t.length;return l>0&&(e=t[l-1],r=t[l-2]),a};function n(s,o,a,l,c=null,h=0,u=0){function d(x){let M=x*2,v=ss,b=rs;for(;!es(M,v);)x=Jo(x),M=x*2;return Wr(x,b)}function f(x){let M=x*2,v=ss,b=rs;for(;!es(M,v);)x=Qo(x,b),M=x*2;return Wr(x,b)+Zo(M,v)}let m=s*2,y=no,g=ss,p=rs;if(es(m,g)){const x=Wr(s,p),M=Zo(m,g);return Zi(s,y,r),l(x,M,!1,u,h+s,r)}else{const x=Jo(s),M=Qo(s,p);let v=x,b=M,A,E,S,w;if(c&&(S=r,w=e,Zi(v,y,S),Zi(b,y,w),A=c(S),E=c(w),E<A)){v=M,b=x;const H=A;A=E,E=H,S=w}S||(S=r,Zi(v,y,S));const D=es(v*2,g),I=a(S,D,A,u+1,h+v);let C;if(I===wp){const H=d(v),$=f(v)-H;C=l(H,$,!0,u+1,h+v,S)}else C=I&&n(v,o,a,l,c,h,u+1);if(C)return!0;w=e,Zi(b,y,w);const U=es(b*2,g),N=a(w,U,E,u+1,h+b);let G;if(N===wp){const H=d(b),$=f(b)-H;G=l(H,$,!0,u+1,h+b,w)}else G=N&&n(b,o,a,l,c,h,u+1);return!!G}}}(),kT=function(){const r=new Nn,e=new Nn,t=new Pe,i=new rn,n=new rn;return function s(o,a,l,c,h=null){let u=o*2,d=no,f=ss,m=rs;if(h===null&&(l.boundingBox||l.computeBoundingBox(),i.set(l.boundingBox.min,l.boundingBox.max,c),h=i),es(u,f)){const g=a,p=g.index,_=g.attributes.position,x=l.index,M=l.attributes.position,v=Wr(o,m),b=Zo(u,f);if(t.copy(c).invert(),l.boundsTree)return Zi(o,d,n),n.matrix.copy(t),n.needsUpdate=!0,l.boundsTree.shapecast({intersectsBounds:E=>n.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(c),E.b.applyMatrix4(c),E.c.applyMatrix4(c),E.needsUpdate=!0;for(let S=v*3,w=(b+v)*3;S<w;S+=3)if($i(e,S,p,_),e.needsUpdate=!0,E.intersectsTriangle(e))return!0;return!1}});for(let A=v*3,E=b+v*3;A<E;A+=3){$i(r,A,p,_),r.a.applyMatrix4(t),r.b.applyMatrix4(t),r.c.applyMatrix4(t),r.needsUpdate=!0;for(let S=0,w=x.count;S<w;S+=3)if($i(e,S,x,M),e.needsUpdate=!0,r.intersectsTriangle(e))return!0}}else{const g=o+8,p=m[o+6];return Zi(g,d,Or),!!(h.intersectsBox(Or)&&s(g,a,l,c,h)||(Zi(p,d,Or),h.intersectsBox(Or)&&s(p,a,l,c,h)))}}}();function Ul(r,e,t,i){return Zi(r,e,Or),t.intersectBox(Or,i)}const Jh=[];let vl,no,ss,rs;function Uo(r){vl&&Jh.push(vl),vl=r,no=new Float32Array(r),ss=new Uint16Array(r),rs=new Uint32Array(r)}function cl(){vl=null,no=null,ss=null,rs=null,Jh.length&&Uo(Jh.pop())}const yh=Symbol("skip tree generation"),xh=new kt,_h=new kt,Ir=new Pe,Ss=new rn,Eo=new rn,Ro=new F,hl=new F,VT=new F,HT=new F,GT=new F,Dp=new kt,Xi=new Cg(()=>new Nn);class Ho{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),Ho.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,s=i.getIndex();let o;return t.cloneBuffers?o={roots:n.map(a=>a.slice()),index:s.array.slice()}:o={roots:n,index:s.array},o}static deserialize(e,t,i={}){if(typeof i=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),Ho.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});i={setIndex:!0,...i};const{index:n,roots:s}=e,o=new Ho(t,{...i,[yh]:!0});if(o._roots=s,i.setIndex){const a=t.getIndex();if(a===null){const l=new Qt(e.index,1,!1);t.setIndex(l)}else a.array!==n&&(a.array.set(n),a.needsUpdate=!0)}return o}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:Eg,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[yh]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[yh]||(this._roots=CT(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new kt))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=this.geometry,i=t.index.array,n=t.attributes.position;let s,o,a,l,c=0;const h=this._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,f,m=!1){const y=d*2;if(a[y+15]===Yh){const p=o[d+6],_=a[y+14];let x=1/0,M=1/0,v=1/0,b=-1/0,A=-1/0,E=-1/0;for(let S=3*p,w=3*(p+_);S<w;S++){const D=i[S],I=n.getX(D),C=n.getY(D),U=n.getZ(D);I<x&&(x=I),I>b&&(b=I),C<M&&(M=C),C>A&&(A=C),U<v&&(v=U),U>E&&(E=U)}return l[d+0]!==x||l[d+1]!==M||l[d+2]!==v||l[d+3]!==b||l[d+4]!==A||l[d+5]!==E?(l[d+0]=x,l[d+1]=M,l[d+2]=v,l[d+3]=b,l[d+4]=A,l[d+5]=E,!0):!1}else{const p=d+8,_=o[d+6],x=p+f,M=_+f;let v=m,b=!1,A=!1;e?v||(b=e.has(x),A=e.has(M),v=!b&&!A):(b=!0,A=!0);const E=v||b,S=v||A;let w=!1;E&&(w=u(p,f,v));let D=!1;S&&(D=u(_,f,v));const I=w||D;if(I)for(let C=0;C<3;C++){const U=p+C,N=_+C,G=l[U],H=l[U+3],V=l[N],$=l[N+3];l[d+C]=G<V?G:V,l[d+C+3]=H>$?H:$}return I}}}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),s=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,h=s[c+15]===Yh;if(h){const u=n[a+6],d=s[c+14];e(l,h,new Float32Array(i,a*4,6),u,d)}else{const u=a+_l/4,d=n[a+6],f=n[a+7];e(l,h,new Float32Array(i,a*4,6),f)||(o(u,l+1),o(d,l+1))}}}raycast(e,t=Xr){const i=this._roots,n=this.geometry,s=[],o=t.isMaterial,a=Array.isArray(t),l=n.groups,c=o?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=a?t[l[h].materialIndex].side:c,f=s.length;if(Uo(i[h]),Kh(0,n,d,e,s),cl(),a){const m=l[h].materialIndex;for(let y=f,g=s.length;y<g;y++)s[y].face.materialIndex=m}}return s}raycastFirst(e,t=Xr){const i=this._roots,n=this.geometry,s=t.isMaterial,o=Array.isArray(t);let a=null;const l=n.groups,c=s?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=o?t[l[h].materialIndex].side:c;Uo(i[h]);const f=Zh(0,n,d,e);cl(),f!=null&&(a==null||f.distance<a.distance)&&(a=f,o&&(f.face.materialIndex=l[h].materialIndex))}return a}intersectsGeometry(e,t){const i=this.geometry;let n=!1;for(const s of this._roots)if(Uo(s),n=kT(0,i,e,t),cl(),n)break;return n}shapecast(e,t,i){const n=this.geometry;if(e instanceof Function){if(t){const d=t;t=(f,m,y,g)=>{const p=m*3;return d(f,p,p+1,p+2,y,g)}}e={boundsTraverseOrder:i,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const s=Xi.getPrimitive();let{boundsTraverseOrder:o,intersectsBounds:a,intersectsRange:l,intersectsTriangle:c}=e;if(l&&c){const d=l;l=(f,m,y,g,p)=>d(f,m,y,g,p)?!0:Lp(f,m,n,c,y,g,s)}else l||(c?l=(d,f,m,y)=>Lp(d,f,n,c,m,y,s):l=(d,f,m)=>m);let h=!1,u=0;for(const d of this._roots){if(Uo(d),h=OT(0,n,a,l,o,u),cl(),h)break;u+=d.byteLength}return Xi.releasePrimitive(s),h}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:s}=i;const o=this.geometry.index,a=this.geometry.attributes.position,l=e.geometry.index,c=e.geometry.attributes.position;Ir.copy(t).invert();const h=Xi.getPrimitive(),u=Xi.getPrimitive();if(s){let m=function(y,g,p,_,x,M,v,b){for(let A=p,E=p+_;A<E;A++){$i(u,A*3,l,c),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let S=y,w=y+g;S<w;S++)if($i(h,S*3,o,a),h.needsUpdate=!0,s(h,u,S,A,x,M,v,b))return!0}return!1};var f=m;if(n){const y=n;n=function(g,p,_,x,M,v,b,A){return y(g,p,_,x,M,v,b,A)?!0:m(g,p,_,x,M,v,b,A)}}else n=m}e.getBoundingBox(_h),_h.applyMatrix4(t);const d=this.shapecast({intersectsBounds:m=>_h.intersectsBox(m),intersectsRange:(m,y,g,p,_,x)=>(xh.copy(x),xh.applyMatrix4(Ir),e.shapecast({intersectsBounds:M=>xh.intersectsBox(M),intersectsRange:(M,v,b,A,E)=>n(m,y,M,v,p,_,A,E)}))});return Xi.releasePrimitive(h),Xi.releasePrimitive(u),d}intersectsBox(e,t){return Ss.set(e.min,e.max,t),Ss.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Ss.intersectsBox(i),intersectsTriangle:i=>Ss.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Ss.set(e.boundingBox.min,e.boundingBox.max,t),Ss.needsUpdate=!0;const a=this.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=Xi.getPrimitive(),f=Xi.getPrimitive();let m=hl,y=VT,g=null,p=null;n&&(g=HT,p=GT);let _=1/0,x=null,M=null;return Ir.copy(t).invert(),Eo.matrix.copy(Ir),this.shapecast({boundsTraverseOrder:v=>Ss.distanceToBox(v),intersectsBounds:(v,b,A)=>A<_&&A<o?(b&&(Eo.min.copy(v.min),Eo.max.copy(v.max),Eo.needsUpdate=!0),!0):!1,intersectsRange:(v,b)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:A=>Eo.distanceToBox(A),intersectsBounds:(A,E,S)=>S<_&&S<o,intersectsRange:(A,E)=>{for(let S=A*3,w=(A+E)*3;S<w;S+=3){$i(f,S,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let D=v*3,I=(v+b)*3;D<I;D+=3){$i(d,D,c,l),d.needsUpdate=!0;const C=d.distanceToTriangle(f,m,g);if(C<_&&(y.copy(m),p&&p.copy(g),_=C,x=D/3,M=S/3),C<s)return!0}}}});{const A=u?u.count:h.count;for(let E=0,S=A;E<S;E+=3){$i(f,E,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let w=v*3,D=(v+b)*3;w<D;w+=3){$i(d,w,c,l),d.needsUpdate=!0;const I=d.distanceToTriangle(f,m,g);if(I<_&&(y.copy(m),p&&p.copy(g),_=I,x=w/3,M=E/3),I<s)return!0}}}}}),Xi.releasePrimitive(d),Xi.releasePrimitive(f),_===1/0?null:(i.point?i.point.copy(y):i.point=y.clone(),i.distance=_,i.faceIndex=x,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(Ir),y.applyMatrix4(Ir),n.distance=y.sub(n.point).length(),n.faceIndex=M),i)}closestPointToPoint(e,t={},i=0,n=1/0){const s=i*i,o=n*n;let a=1/0,l=null;if(this.shapecast({boundsTraverseOrder:h=>(Ro.copy(e).clamp(h.min,h.max),Ro.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,Ro);const d=e.distanceToSquared(Ro);return d<a&&(hl.copy(Ro),a=d,l=u),d<s}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(hl):t.point=hl.clone(),t.distance=c,t.faceIndex=l,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{Zi(0,new Float32Array(i),Dp),e.union(Dp)}),e}}function WT(){this.boundsTree=null}const ws=new F,As=new F,Ts=new F,Fp=new di,ul=new F,vh=new F,Up=new di,Np=new di,dl=new Pe,Bp=new Pe;function Co(r,e){if(!r&&!e)return;const t=r.count===e.count,i=r.normalized===e.normalized,n=r.array.constructor===e.array.constructor,s=r.itemSize===e.itemSize;if(!t||!i||!n||!s)throw new Error}function No(r,e=null){const t=r.array.constructor,i=r.normalized,n=r.itemSize,s=e===null?r.count:e;return new Qt(new t(n*s),n,i)}function Pg(r,e,t=0){if(r.isInterleavedBufferAttribute){const i=r.itemSize;for(let n=0,s=r.count;n<s;n++){const o=n+t;e.setX(o,r.getX(n)),i>=2&&e.setY(o,r.getY(n)),i>=3&&e.setZ(o,r.getZ(n)),i>=4&&e.setW(o,r.getW(n))}}else{const i=e.array,n=i.constructor,s=i.BYTES_PER_ELEMENT*r.itemSize*t;new n(i.buffer,s,r.array.length).set(r.array)}}function XT(r,e,t){const i=r.elements,n=e.elements;for(let s=0,o=n.length;s<o;s++)i[s]+=n[s]*t}function zp(r,e,t){const i=r.skeleton,n=r.geometry,s=i.bones,o=i.boneInverses;Up.fromBufferAttribute(n.attributes.skinIndex,e),Np.fromBufferAttribute(n.attributes.skinWeight,e),dl.elements.fill(0);for(let a=0;a<4;a++){const l=Np.getComponent(a);if(l!==0){const c=Up.getComponent(a);Bp.multiplyMatrices(s[c].matrixWorld,o[c]),XT(dl,Bp,l)}}return dl.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),t.transformDirection(dl),t}function Mh(r,e,t,i,n){ul.set(0,0,0);for(let s=0,o=r.length;s<o;s++){const a=e[s],l=r[s];a!==0&&(vh.fromBufferAttribute(l,i),t?ul.addScaledVector(vh,a):ul.addScaledVector(vh.sub(n),a))}n.add(ul)}function jT(r,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new pi){const i=r[0].index!==null,{useGroups:n=!1,updateIndex:s=!1,skipAttributes:o=[]}=e,a=new Set(Object.keys(r[0].attributes)),l={};let c=0;t.clearGroups();for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const f in u.attributes){if(!a.has(f))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.');l[f]===void 0&&(l[f]=[]),l[f].push(u.attributes[f]),d++}if(d!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let f;if(i)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,f,h),c+=f}}if(i){let h=!1;if(!t.index){let u=0;for(let d=0;d<r.length;++d)u+=r[d].index.count;t.setIndex(new Qt(new Uint32Array(u),1,!1)),h=!0}if(s||h){const u=t.index;let d=0,f=0;for(let m=0;m<r.length;++m){const y=r[m],g=y.index;if(o[m]!==!0)for(let p=0;p<g.count;++p)u.setX(d,g.getX(p)+f),d++;f+=y.attributes.position.count}}}for(const h in l){const u=l[h];if(!(h in t.attributes)){let m=0;for(const y in u)m+=u[y].count;t.setAttribute(h,No(l[h][0],m))}const d=t.attributes[h];let f=0;for(let m=0,y=u.length;m<y;m++){const g=u[m];o[m]!==!0&&Pg(g,d,f),f+=g.count}}return t}function qT(r,e){if(r===null||e===null)return r===e;if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}class $T{constructor(e){this.matrixWorld=new Pe,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,i=e.skeleton,n=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const s=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==s.length?this.boneMatrices=s.slice():this.boneMatrices.set(s)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&qT(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class YT{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&t.push(n)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new pi),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new pi){let t=[];const{meshes:i,useGroups:n,_intermediateGeometry:s,_diffMap:o}=this;for(let a=0,l=i.length;a<l;a++){const c=i[a],h=s[a],u=o.get(c);!u||u.didChange(c)?(this._convertToStaticGeometry(c,h),t.push(!1),u?u.update():o.set(c,new $T(c))):t.push(!0)}jT(s,{useGroups:n,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new pi){const i=e.geometry,n=this.applyWorldTransforms,s=this.attributes.includes("normal"),o=this.attributes.includes("tangent"),a=i.attributes,l=t.attributes;t.index||(t.index=i.index),l.position||t.setAttribute("position",No(a.position)),s&&!l.normal&&a.normal&&t.setAttribute("normal",No(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",No(a.tangent)),Co(i.index,t.index),Co(a.position,l.position),s&&Co(a.normal,l.normal),o&&Co(a.tangent,l.tangent);const c=a.position,h=s?a.normal:null,u=o?a.tangent:null,d=i.morphAttributes.position,f=i.morphAttributes.normal,m=i.morphAttributes.tangent,y=i.morphTargetsRelative,g=e.morphTargetInfluences,p=new os;p.getNormalMatrix(e.matrixWorld);for(let _=0,x=a.position.count;_<x;_++)ws.fromBufferAttribute(c,_),h&&As.fromBufferAttribute(h,_),u&&(Fp.fromBufferAttribute(u,_),Ts.fromBufferAttribute(u,_)),g&&(d&&Mh(d,g,y,_,ws),f&&Mh(f,g,y,_,As),m&&Mh(m,g,y,_,Ts)),e.isSkinnedMesh&&(e.applyBoneTransform(_,ws),h&&zp(e,_,As),u&&zp(e,_,Ts)),n&&ws.applyMatrix4(e.matrixWorld),l.position.setXYZ(_,ws.x,ws.y,ws.z),h&&(n&&As.applyNormalMatrix(p),l.normal.setXYZ(_,As.x,As.y,As.z)),u&&(n&&Ts.transformDirection(e.matrixWorld),l.tangent.setXYZW(_,Ts.x,Ts.y,Ts.z,Fp.w));for(const _ in this.attributes){const x=this.attributes[_];x==="position"||x==="tangent"||x==="normal"||!(x in a)||(l[x]||t.setAttribute(x,No(a[x])),Co(a[x],l[x]),Pg(a[x],l[x]))}return t}}class Ig extends cs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}var wi;(r=>{class e extends Ig{constructor(i={}){super(i),this.setValues(i)}async updateDefaultFragmentShader(i){const n=await je.Loader.loadShader("ground/pars.frag"),s=await je.Loader.loadShader("ground/main.frag");i.fragmentShader=`${n}
      ${i.fragmentShader.replace("#include <output_fragment>",`
        ${s}`)}`}async updateDefaultVertexShader(i){const n=await je.Loader.loadShader("ground/pars.vert"),s=await je.Loader.loadShader("ground/main.vert");i.vertexShader=`${n}
      ${i.vertexShader.replace("void main() {",`void main() {
          ${s}`)}`}onBeforeCompile(i){this.updateDefaultFragmentShader(i),this.updateDefaultVertexShader(i),this.needsUpdate=!0}}r.Ground=e,r.DynamicCollider=new Br({color:St.RED,wireframe:!0,visible:!1,opacity:.33}),r.StaticCollider=new Br({color:St.RAIN,transparent:!0,depthWrite:!1,visible:!1,opacity:.5}),r.Transparent=new Br({color:St.BLACK,transparent:!0,depthWrite:!1,visible:!1,opacity:0}),r.HitBox=new Br({transparent:!0,depthWrite:!1,color:St.RED,visible:!1,opacity:.75})})(wi||(wi={}));class KT{constructor(){this.positionVector=new L,this.rotationVector=new nn,this.sizeVector=new L,this.GRAVITY=-9.81,this.MIN_SIZE=.01,this.DISABLE=5,this.ENABLE=1,this.SPEED=5}createBound(e,t,i,n=0){this.rotationVector.set(0,0,0);const s=e[0],o=e[1],a=s-t[0],l=o-t[1],c=a/-2+s,h=l/-2+o;let u=Math.abs(a),d=Math.abs(l);if(u&&d){const f=d>u,m=Math.hypot(u,d);this.rotationVector.set(0,f?Qe.d2+Math.atan(d/u):Qe.d2-Math.atan(u/d),0),f?d=m:u=m}u=u<d?this.MIN_SIZE:u,d=d<u?this.MIN_SIZE:d,this.positionVector.set(c,n,h),this.sizeVector.set(u,i,d)}borderOverflow(e){const{x:t,z:i}=this.positionVector;return Math.abs(t)>Math.abs(e.x)&&Math.abs(i)>Math.abs(e.z)&&t-e.x<=1&&i-e.z<=1}createStaticCollider(e){const{x:t,y:i,z:n}=this.sizeVector,s=new lt(new Qi(t,i,n),e);s.position.copy(this.positionVector),s.rotation.copy(this.rotationVector),Q.dispatch("Level::AddObject",s),this.addStaticCollider(s)}addArenaObstacle(e,t,i,n,s){this.positionVector.set(e,n/2,t),this.sizeVector.set(i,n,s),this.rotationVector.set(0,0,0),this.createStaticCollider(wi.Transparent)}createGround(e,t){this.sizeVector.set(Math.abs(e[0]-t[0]),this.MIN_SIZE,Math.abs(e[1]-t[1])),this.positionVector.set((e[0]+t[0])/2,0,(e[1]+t[1])/2),this.createStaticCollider(wi.Transparent)}createBounds(e,t){const i=new L,n=e.borders.concat([e.borders[0]]),s=t?.borders.concat([t?.borders[0]]);for(let o=0;o<e.borders.length;o++){if(this.createBound(n[o],n[o+1],e.height,e.y),this.createStaticCollider(wi.StaticCollider),i.copy(this.positionVector),s&&this.createBound(s[o],s[o+1],t?.height,t?.y),this.borderOverflow(i))continue;const a=this.rotationVector.y?1.1:1,l=this.positionVector.distanceTo(i)/2*.95;this.positionVector.x-=(this.positionVector.x-i.x)/2,this.positionVector.z-=(this.positionVector.z-i.z)/2,this.sizeVector.z===this.MIN_SIZE?this.sizeVector.setZ(l):this.sizeVector.setX(l),this.positionVector.x<0?this.sizeVector.z*=a:this.sizeVector.x*=a,this.createStaticCollider(wi.StaticCollider)}}}const Op=new L,fl=new L;class Lg{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Op.subVectors(e,this.start),fl.subVectors(this.end,this.start);const i=fl.dot(fl);let s=fl.dot(Op)/i;return t&&(s=jt(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ZT extends KT{constructor(){super(...arguments),this.characterVelocity=new Map,this.characters=new Map,this.linearVelocity=new L,this.environment=new Do,this.capsule=new L,this.matrix=new et,this.segment=new Lg,this.box=new ls,this.paused=!0,this.delta=0}updateCollisions(){const e=Array.from(this.characters.values());for(let t=e.length;t--;){const i=e[t];for(let n=t;n--;){const s=e[n];this.linearVelocity.subVectors(i.position,s.position);const o=this.linearVelocity.length()-(i.userData.radius+s.userData.radius);if(o>0)continue;this.linearVelocity.normalize();const a=this.characterVelocity.get(i.uuid),l=this.characterVelocity.get(s.uuid),c=a.dot(this.linearVelocity),h=l.dot(this.linearVelocity),u=Math.max(c,.2),d=Math.max(h,.2),f=u+d,m=u/f,y=d/f,{y:g}=i.position,{y:p}=s.position;i.position.addScaledVector(this.linearVelocity,-m*o),s.position.addScaledVector(this.linearVelocity,y*o),i.position.y=g,s.position.y=p}}}addPhysicsCollider(){this.environment.updateMatrixWorld(!0);const e=new YT(this.environment);e.attributes=["position"];const t=e.generate();t.boundsTree=new Ho(t,{lazyGeneration:!1}),Q.dispatch("Level::AddObject",this.environment),this.environmentCollider=new lt(t)}addStaticCollider(e){this.environment.attach(e)}createBounds(e,t){super.createBounds(e,t),this.addPhysicsCollider()}setCharacter(e){this.characterVelocity.set(e.uuid,new L),this.characters.set(e.uuid,e);const{height:t,radius:i}=e.userData;e.geometry.translate(0,-i,0),e.children[0].translateY(-i);const{x:n,z:s}=e.position;e.position.set(n,e.userData.segment.distance()+i+.005,s),this.move(e.uuid,fi.DOWN)}move(e,t){const i=this.characters.get(e),{segment:n,radius:s}=i.userData,o=this.characterVelocity.get(e),a=this.environmentCollider?.matrixWorld,l=this.environmentCollider?.geometry;o.y+=this.delta*this.GRAVITY,i.position.addScaledVector(o,this.delta),this.linearVelocity.set(t.x,t.y,t.z),i.position.addScaledVector(this.linearVelocity,this.SPEED*this.delta),i.updateMatrixWorld(),this.box.makeEmpty(),this.matrix.copy(a).invert(),this.segment.copy(n),this.segment.start.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.segment.end.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.box.expandByPoint(this.segment.start),this.box.expandByPoint(this.segment.end),this.box.min.addScalar(-s),this.box.max.addScalar(s),l.boundsTree.shapecast({intersectsBounds:u=>u.intersectsBox(this.box),intersectsTriangle:u=>{const d=this.capsule,f=this.linearVelocity,m=u.closestPointToSegment(this.segment,f,d);if(m<s){const y=s-m,g=d.sub(f).normalize();this.segment.start.addScaledVector(g,y),this.segment.end.addScaledVector(g,y)}}});const c=this.linearVelocity;c.copy(this.segment.start).applyMatrix4(a),this.capsule.subVectors(c,i.position),i.position.copy(c),o.setScalar(0)}stop(e){this.characterVelocity.get(e)?.setScalar(0)}update(e){this.paused||(this.delta=e*.2,this.updateCollisions())}remove(e){this.characterVelocity.delete(e),this.characters.delete(e)}dispose(){const e=this.environmentCollider?.geometry,t=WT.bind(e);e.dispose(),t(),this.paused=!0,this.characters.clear(),this.environment.clear(),this.characterVelocity.clear(),delete this.environmentCollider}set pause(e){this.paused=e}}const ut=new ZT;ut.constructor.name.includes("Ammo");class ke{constructor(e,t,i){this.objects=[],this.portals=new hT,this.clouds=new En,this.scene=new Sg,this.physicalLights=dt.getVisualValue("physicalLights");const n=dt.getVisualValue("raindrops");this.renderer=new eg({powerPreference:"high-performance",preserveDrawingBuffer:n,antialias:!0,canvas:e}),Q.add("Level::RemoveObject",this.removeGameObject.bind(this)),Q.add("Level::AddObject",this.addGameObject.bind(this)),this.pmrem=new zh(this.renderer),this.createColliders(),this.createEnvironment(i),this.createRenderer(t)}createColliders(){const{position:e,height:t,sidewalkHeight:i}=xe.Level;ut.createGround(ke.minCoords,ke.maxCoords),ut.createBounds({borders:ke.bounds,y:e.y,height:t},{borders:xe.Level.sidewalk,y:i*.5,height:i})}async createEnvironment(e){const t=dt.getVisualValue("fog"),i=dt.getVisualValue("raining"),n=dt.getVisualValue("lighting"),s=t&&dt.getVisualValue("volumetricFog"),o=await this.createSkybox(xe.Level.skybox),a=await this.loadLevel(xe.Level.model);a.position.copy(xe.Level.position),a.scale.copy(xe.Level.scale),n&&this.scene.add(this.clouds.flash),i&&(this.rain=new mT(this.renderer,this.scene,e)),t?(this.fog=new gT(s),this.scene.fog=this.fog,this.scene.background=new Fe(St.FOG),s&&this.portals.setFogUniforms(this.fog.setUniforms)):this.clouds.sky&&this.scene.add(this.clouds.sky),this.createLights(),a.traverse(c=>{const h=c,u=h.material;h.isMesh&&(u.opacity=1,u.alphaTest=1,u.side=ki,u.envMap=o,h.renderOrder=1,this.objects.push(h),h.receiveShadow=!0,this.csm?.setupMaterial(u),this.fog&&s&&(u.onBeforeCompile=this.fog.setUniforms))});const l=this.getSceneEnvMap();Q.dispatch("Level::EnvMap",l)}async loadLevel(e){const t=await je.Loader.loadGLTF(e);return this.scene.add(t.scene),t.scene}async createSkybox(e){const t=await je.Loader.loadCubeTexture(e);return t.colorSpace=Le,dt.getVisualValue("fog")||(this.scene.background=t),this.pmrem.compileCubemapShader(),this.pmrem.fromCubemap(t).texture}createLights(){const t=.25+ +!this.physicalLights*.1,i=new L(.925,-1.875,-1).normalize();this.scene.add(new tg(St.WHITE,.2)),this.csm=new aT({mode:"logarithmic",maxFar:zt.far*10,lightFar:zt.far,lightDirection:i,lightIntensity:t,camera:zt,parent:this.scene,cascades:4}),this.csm.lights.forEach(n=>n.color.set(St.MOON)),this.csm.fade=!0}getSceneEnvMap(){return this.pmrem.fromScene(this.scene,0,zt.near,zt.far).texture}createRenderer(e){const t=+!this.physicalLights*.25+.25;this.renderer.debug.checkShaderErrors=!1,this.renderer.useLegacyLights=this.physicalLights,this.renderer.toneMapping=Dm,this.renderer.outputColorSpace=Le,this.renderer.shadowMap.type=bu,this.renderer.setClearColor(St.BLACK,0),this.renderer.toneMappingExposure=t,this.renderer.setPixelRatio(e),this.renderer.shadowMap.enabled=!0}removeGameObject(e){const t=e.data;this.scene.remove(t)}addGameObject(e){const t=e.data;this.scene.add(t)}render(e){this.renderer.render(this.scene,zt),this.portals.update(e),this.rain?.update(e),this.fog?.update(e),this.clouds.update(),this.csm?.update()}resize(e,t){this.renderer.setSize(e,t,!1),this.rain?.resize(e,t),this.csm?.updateFrustums()}outOfBounds(e){return this.portals.portalPassed(e)&&this.portals.playerPosition||null}dispose(){for(this.fog?.dispose(),this.csm?.dispose(),this.rain?.dispose(),this.pmrem.dispose(),this.clouds.dispose(),this.portals.dispose(),this.renderer.dispose(),this.csm?.lights.forEach(e=>e.dispose()),Q.remove("Level::AddObject"),Q.remove("Level::RemoveObject");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.background instanceof Ru&&this.scene.background.dispose()}static get maxCoords(){return[Dl(ke.bounds.map(e=>e[0])),Dl(ke.bounds.map(e=>e[1]))]}static get minCoords(){return[Ll(ke.bounds.map(e=>e[0])),Ll(ke.bounds.map(e=>e[1]))]}static get portals(){return xe.Level.portals}static get bounds(){return xe.Level.bounds}static get center(){return new L((ke.maxCoords[0]+ke.minCoords[0])/2,0,(ke.maxCoords[1]+ke.minCoords[1])/2)}static get size(){return new Ce(ke.maxCoords[0]-ke.minCoords[0],ke.maxCoords[1]-ke.minCoords[1])}set pause(e){this.clouds.pause=e}get walls(){return this.objects}}class En{constructor(){this.count=dt.getVisualValue("clouds"),this.staticClouds=!dt.getVisualValue("dynamicClouds"),this.isLighting=dt.getVisualValue("lighting"),this.useFog=dt.getVisualValue("fog"),this.onShowLighting=this.showLighting.bind(this),this.onHideLighting=this.hideLighting.bind(this),this.rotation=new nn(Qe.d2,0,0),this.matrix=new et,this.paused=!0,this.isLighting&&this.createLighting(),this.createClouds()}createLighting(){const e=+(!this.useFog&&dt.getVisualValue("physicalLights"))+1;this.lighting=new ig(St.BLUE,10,En.height,e),this.lighting.position.set(0,En.height,0),this.lighting.castShadow=!0,this.lighting.power=0}startLighting(){this.timeout=setTimeout(this.onShowLighting,1e3*(Math.random()*15+15))}showLighting(){this.updateLightingPosition(),this.lighting.power=100+Math.random()*150,setTimeout(this.onHideLighting,Math.random()*400+100),Q.dispatch("SFX::Thunder",this.lighting.position,!0)}updateLightingPosition(){this.clouds?(this.clouds.getMatrixAt(Iu(0,this.count-1),this.matrix),this.lighting.position.setFromMatrixPosition(this.matrix)):this.lighting.position.set(Jt(ke.minCoords[0],ke.maxCoords[0]),En.height/xe.Level.height,Jt(ke.minCoords[1],ke.maxCoords[1])),this.lighting.position.y-=Math.random()*(this.lighting.position.y/4)}hideLighting(){!this.paused&&this.startLighting(),this.lighting.power=0}async createClouds(){if(!this.count||!this.isLighting&&this.useFog)return;const e=new Pu(En.height,16,16,0,Math.PI);e.rotateX(-Qe.d2);const t=new L,i=new vt;this.clouds=new ew(new Gl(En.height,En.height),new JS({transparent:!0,depthWrite:!1,opacity:.25}),this.count);const n=new ZS(new lt(e.toNonIndexed())).build();for(let s=0;s<this.count;s++)n.sample(t),i.position.copy(t),i.lookAt(fi.DOWN),i.updateMatrix(),this.clouds.setMatrixAt(s,i.matrix);this.clouds.position.copy(ke.center),this.clouds.instanceMatrix.needsUpdate=!0,this.clouds.material.map=await je.Loader.loadTexture(xe.Level.cloud)}update(){if(!(this.staticClouds||!this.clouds)){for(let e=0;e<this.count;e++){const t=e%2*2-1;this.clouds.getMatrixAt(e,this.matrix);const i=this.matrix.clone();this.rotation.setFromRotationMatrix(i),this.rotation.z+=Math.random()*t*.002,this.matrix.makeRotationFromEuler(this.rotation),this.matrix.copyPosition(i),this.clouds.setMatrixAt(e,this.matrix)}this.clouds.instanceMatrix.needsUpdate=!0}}dispose(){const e=this.clouds?.material;clearTimeout(this.timeout),e?.map?.dispose(),this.lighting?.dispose(),this.clouds?.dispose(),e?.dispose()}static get height(){return Math.max(ke.size.x,ke.size.y)}set pause(e){(this.paused=e)?clearTimeout(this.timeout):this.isLighting&&this.startLighting()}get sky(){return this.clouds}get flash(){return this.lighting}}class Ml{constructor(e=iw){this.lerp=e,this.length=0,this.points=[]}addPoint(e,t){this.length=this.points.push([e,t])}getValue(e){let t=0;for(let n=0;n<this.length&&!(this.points[n][0]>=e);n++)t=n;const i=Math.min(this.length-1,t+1);return t===i?this.points[t][1]:this.lerp(this.points[t][1],this.points[i][1],(e-this.points[t][0])/(this.points[i][0]-this.points[t][0]))}dispose(){this.length=this.points.length=0}}let is=[];const na=new Ml,Qh=new L;let eu=0;na.addPoint(0,0);na.addPoint(.5,0);na.addPoint(.8,.5);na.addPoint(1,.5);const Dg=r=>{const{camera:e,delta:t}=r;return Qh.copy(e),eu+=t,JT(r),QT(t),eE()},JT=r=>{const{minCoords:e,maxCoords:t}=r,i=eu*100|0;eu-=i/100;const n=i*50;for(let s=0;s<n;s++){const o=Math.random(),a=5.25-o*1.5,l=Math.random()*.1,c=Math.random()*25+50,h=-1+ +(Math.random()<.5)*2;is.push({velocity:new L(0,-c,0),position:new L(Jt(e[0],t[0]),En.height-o*50,Jt(e[1],t[1])),rotation:h*l,maxLife:a,alpha:0,life:a})}},QT=r=>{for(let e=0;e<is.length;e++){const t=is[e];if((t.life-=r)<=0)continue;const i=1-t.life/t.maxLife,n=t.velocity.clone(),{x:s,y:o,z:a}=n;t.position.add(n.multiplyScalar(r)),t.alpha=na.getValue(i),n.multiplyScalar(.1).set(Math.sign(s)*Math.min(Math.abs(n.x),Math.abs(s)),Math.sign(o)*Math.min(Math.abs(n.y),Math.abs(o)),Math.sign(a)*Math.min(Math.abs(n.z),Math.abs(a))),t.velocity.sub(n)}is=is.filter(e=>e.life>0).sort((e,t)=>{const i=Qh.distanceToSquared(e.position),n=Qh.distanceToSquared(t.position);return i>n?-1:i<n?1:0})},eE=()=>{const r=[],e=[],t=[];for(let i=0,n=is.length;i<n;i++){const{x:s,y:o,z:a}=is[i].position,{rotation:l,alpha:c}=is[i];r.push(s,o,a),t.push(l),e.push(c)}return[r,t,e]};class tE extends as{constructor(){super(...arguments),this.noop=()=>{}}addEventListener(e,t,i){super.addEventListener(e,t)}dispatchEvent(e){e.stopPropagation=this.noop,e.preventDefault=this.noop,super.dispatchEvent(e)}removeEventListener(e,t,i){super.removeEventListener(e,t)}}const tu=new tE,Po=new F;function _i(r,e,t,i,n,s){const o=2*Math.PI*n/4,a=Math.max(s-2*n,0),l=Math.PI/4;Po.copy(e),Po[i]=0,Po.normalize();const c=.5*o/(o+a),h=1-Po.angleTo(r)/l;return Math.sign(Po[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Fg extends hu{constructor(e=1,t=1,i=1,n=2,s=.1){if(n=n*2+1,s=Math.min(e/2,t/2,i/2,s),super(1,1,1,n,n,n),n===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new F,l=new F,c=new F(e,t,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new F,y=.5/n;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*s,h[g+1]=c.y*Math.sign(a.y)+l.y*s,h[g+2]=c.z*Math.sign(a.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=_i(m,l,"z","y",s,i),d[p+1]=1-_i(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[p+0]=1-_i(m,l,"z","y",s,i),d[p+1]=1-_i(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[p+0]=1-_i(m,l,"x","z",s,e),d[p+1]=_i(m,l,"z","x",s,i);break;case 3:m.set(0,-1,0),d[p+0]=1-_i(m,l,"x","z",s,e),d[p+1]=1-_i(m,l,"z","x",s,i);break;case 4:m.set(0,0,1),d[p+0]=1-_i(m,l,"x","y",s,e),d[p+1]=1-_i(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[p+0]=_i(m,l,"x","y",s,e),d[p+1]=1-_i(m,l,"y","x",s,t);break}}}function iE(r){const e=new Map,t=new Map,i=r.clone();return Ug(r,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,o=e.get(n),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Ug(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)Ug(r.children[i],e.children[i],t)}class Xu extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nE{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ur,endingEnd:Ur};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,o=s/n,a=n/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gx:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case wu:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const o=i===Hx;if(e===0)return s===-1?n:o&&(s&1)===1?t-n:n;if(i===Mi){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Nr,n.endingEnd=Nr):(e?n.endingStart=this.zeroSlopeAtStart?Nr:Ur:n.endingStart=Rl,t?n.endingEnd=this.zeroSlopeAtEnd?Nr:Ur:n.endingEnd=Rl)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}class Kl{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let o;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break t}o=t.length;break i}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}o=i,i=0;break i}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ng extends Kl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}const ju="\\[\\]\\.:\\/",sE=new RegExp("["+ju+"]","g"),qu="[^"+ju+"]",rE="[^"+ju.replace("\\.","")+"]",oE=/((?:WC+[\/:])*)/.source.replace("WC",qu),aE=/(WCOD+)?/.source.replace("WCOD",rE),lE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),cE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),hE=new RegExp("^"+oE+aE+lE+cE+"$"),uE=["material","materials","bones","map"];class dE{constructor(e,t,i){const n=i||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ke{constructor(e,t,i){this.path=t,this.parsedPath=i||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,i):new Ke(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sE,"")}static parseTrackName(e){const t=hE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);uE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=dE;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fE{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,o;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,o=n;s!==o;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){ni.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const o=this._workIndex*s;ni.multiplyQuaternionsFlat(e,o,e,t,e,i),ni.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,s){const o=1-n;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*n}}}function Zn(r,e,t){return Bg(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function pl(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Bg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function pE(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function kp(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function zg(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}class mE extends Kl{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ur,endingEnd:Ur}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nr:s=e,a=2*t-i;break;case Rl:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nr:o=e,l=2*i-t;break;case Rl:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*y+.5*m,M=f*g-f*y;for(let v=0;v!==a;++v)s[v]=p*o[h+v]+_*o[c+v]+x*o[l+v]+M*o[u+v];return s}}class gE extends Kl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ln{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pl(t,this.TimeBufferType),this.values=pl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pl(e.times,Array),values:pl(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tl:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case Nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tl;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Zn(i,s,o),this.values=Zn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Bg(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Zn(this.times),t=Zn(this.values),i=this.getValueSize(),n=this.getInterpolation()===Nc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const y=t[u+m];if(y!==t[d+m]||y!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Zn(e,0,o),this.values=Zn(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=Zn(this.times,0),t=Zn(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=El;class so extends ln{}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=Tl;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class Og extends ln{}Og.prototype.ValueTypeName="color";class Nl extends ln{}Nl.prototype.ValueTypeName="number";class yE extends Kl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)ni.slerpFlat(s,0,o,c-a,o,c,l);return s}}class sa extends ln{InterpolantFactoryMethodLinear(e){return new yE(this.times,this.values,this.getValueSize(),e)}}sa.prototype.ValueTypeName="quaternion";sa.prototype.DefaultInterpolation=El;sa.prototype.InterpolantFactoryMethodSmooth=void 0;class ro extends ln{}ro.prototype.ValueTypeName="string";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=Tl;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Bl extends ln{}Bl.prototype.ValueTypeName="vector";class Vp{constructor(e,t=-1,i,n=wu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=eo(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(_E(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ln.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=pE(l);l=kp(l,1,h),c=kp(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Nl(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,y){if(f.length!==0){const g=[],p=[];zg(f,g,p,m),g.length!==0&&y.push(new u(d,g,p))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let y=0;y<d[m].morphTargets.length;y++)f[d[m].morphTargets[y]]=-1;for(const y in f){const g=[],p=[];for(let _=0;_!==d[m].morphTargets.length;++_){const x=d[m];g.push(x.time),p.push(x.morphTarget===y?1:0)}n.push(new Nl(".morphTargetInfluence["+y+"]",g,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(Bl,f+".position",d,"pos",n),i(sa,f+".quaternion",d,"rot",n),i(Bl,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nl;case"vector":case"vector2":case"vector3":case"vector4":return Bl;case"color":return Og;case"quaternion":return sa;case"bool":case"boolean":return so;case"string":return ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function _E(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xE(r.type);if(r.times===void 0){const t=[],i=[];zg(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const vE=new Float32Array(1);class ME extends as{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const y=t&&t._propertyBindings[u].binding.parsedPath;m=new fE(Ke.create(i,f,y),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ng(new Float32Array(2),new Float32Array(2),1,vE),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let o=typeof e=="string"?Vp.findByName(n,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=wu),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new nE(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?Vp.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class kg{constructor(e){this.config=e,this.animations={},this.direction=new L,this.position=new L,this.rotation=new L,this.animationUpdate=!1,this.lastAnimation="",this.hitting=!1,this.running=!1,this.moving=!1,this.dead=!1,this.still=!1,this.health=100;const{x:t,y:i}=this.config.collider;this.object=new lt(new Fg(t,i,t,2,.5),wi.DynamicCollider),this.object.userData={segment:new Lg(new L,fi.DOWN),height:i,radius:.5,mass:this.config.mass},this.step=this.config.moves.Idle,this.uuid=this.object.uuid}updateAnimation(e,t,i){return this.currentAnimation.crossFadeTo(this.animations[t],i,!0),this.animations[t].play(),this.animationUpdate=!0,setTimeout(()=>{this.lastAnimation=t,this.setAnimation(e),this.currentAnimation.stop(),this.animationUpdate=!1,this.currentAnimation=this.animations[t]},i*1e3)}async load(e){const t=await je.Loader.loadGLTF(this.config.model);return this.mesh=t.scene,this.setTransform(t),this.setMaterial(e,1),t}playSound(e,t=!1){t&&this.stopSound(e),Q.dispatch("SFX::Character",{uuid:this.uuid,play:!0,sfx:e,matrix:this.object.matrixWorld},!0)}setMaterial(e,t=0){this.mesh.traverse(i=>{const n=i,s=n.material;n.isMesh&&(n.castShadow=!0,n.updateMorphTargets(),n.material=new Xu({envMap:e??null,transparent:!0,map:s.map,color:s.color,roughness:.65,side:ki,opacity:t}))})}getAnimationDuration(e){return this.animations[e].getClip().duration*1e3}setAnimation(e){this.step=this.config.moves[e]}setAnimations(e){const t=e.animations;this.mixer=new ME(this.mesh);for(let i=t.length;i--;){const{name:n}=t[i],s=n.charAt(0).toLowerCase()+n.slice(1);this.animations[s]=this.mixer.clipAction(t[i])}this.currentAnimation=this.animations.idle}setTransform(e){this.object.position.copy(this.config.position),this.mesh.position.set(0,this.config.collider.z,0),this.object.scale.copy(this.config.scale),this.rotation.setFromEuler(this.object.rotation),this.position.copy(this.object.position),this.object.add(this.mesh),this.setAnimations(e)}setMixerTimeScale(e){this.mixer&&(this.mixer.timeScale=e)}updateHealth(e){return this.dead?!0:(this.health=Math.max(this.health-e,0),!this.health&&this.die(),this.dead)}stopSound(e){Q.dispatch("SFX::Character",{uuid:this.uuid,play:!1,sfx:e,matrix:this.object.matrixWorld},!0)}setMixerTime(e){this.mixer?.setTime(e)}teleport(e){ut.pause=!0,this.object.position.copy(e),this.mesh.rotateOnWorldAxis(fi.UP,Math.PI),ut.teleportCollider?.(this.object.uuid),ut.pause=!1}update(e){this.mixer?.update(e),this.updateDirection(),this.moving?(this.still=!1,ut.move(this.uuid,this.direction)):this.still||(this.still=!0,ut.stop(this.uuid))}updateDirection(){const{speed:e,direction:t}=this.step;this.mesh.getWorldDirection(this.rotation),this.object.getWorldPosition(this.position);const i=this.rotation.x*e,n=this.rotation.z*e,{z0:s,x0:o,x1:a}=t,l=Math.min(o,a);this.direction.set(i*s+i*l+n*a,-1,n*s+n*l+i*o)}dispose(){this.object.userData={},this.object.geometry.dispose(),this.object.material.dispose();for(const e in this.animations)this.animations[e].stopFading(),this.animations[e].stop(),delete this.animations[e];this.model&&(this.object.remove(this.model),this.model.clear(),delete this.model),this.animations={},delete this.mixer,this.reset()}die(){this.playSound("death",!0),this.setAnimation("Idle"),ut.remove(this.uuid),this.hitting=!1,this.running=!1,this.moving=!1,this.still=!1,this.dead=!0}reset(){this.step=this.config.moves.Idle,this.direction.setScalar(0),this.position.setScalar(0),this.rotation.setScalar(0),this.hitting=!1,this.running=!1,this.moving=!1,this.health=100,this.still=!0,this.dead=!1}get blockingAnimation(){return this.dead||this.animationUpdate}set mesh(e){this.model=e}get mesh(){return this.model}get healthValue(){return this.health}get motionState(){return{moving:this.moving,blocking:this.blockingAnimation,animation:this.lastAnimation,step:this.step,direction:this.direction.toArray()}}get life(){return this.health}get collider(){return this.object}get alive(){return!this.dead}}class Hp extends kg{constructor(e,t,i=0){if(super(xe.Enemy),this.id=i,this.walkDistance=xe.Gameplay.enemy.walk,this.runDistance=xe.Gameplay.enemy.run,this.lose=xe.Gameplay.enemy.lose,this.animationUpdate=!0,this.lastAnimation="idle",this.hitBoxes=[],this.attackDistance=2.5,this.previousAnimation="idle",this.distance=1/0,this.playerDead=!1,this.attacking=!1,this.screaming=!1,this.screamed=!1,this.crawling=!1,this.falling=!1,this.visible=!1,this.crawlTime=0,this.fallTime=0,this.hitTime=0,this.walkDistance=this.walkDistance<0?1/0:this.walkDistance,this.runDistance=this.runDistance<0?1/0:this.runDistance,e&&t){this.character=iE(e.scene),Q.dispatch("Level::AddObject",this.object),Q.dispatch("Enemy::Spawn",this.uuid,!0);const n=+!this.id;this.mesh=this.character,this.setMaterial(t,n),this.setTransform(e),this.setDefaultState(),this.toggleVisibility(!0)}}updateAnimation(e,t,i=.5){return super.updateAnimation(e,t,i)}toggleVisibility(e,t){if(!this.hitBoxes.length)return;const i=1e3+ +!e*1500,n=e?"easeInQuad":"easeOutQuad",s=t&&this.getAnimationDuration(t)+500||0;if(e)this.visible=!0;else{this.character.visible=!1,this.cancelHit(),this.removeHitBoxes(),clearTimeout(this.crawlTimeout);const o=s+i,a=t==="crawlDeath";setTimeout(this.dispose.bind(this),o);const l=Date.now()-this.crawlTime<3e3;a&&l&&this.animations.crawling.stop(),this.animations.idle.stopFading(),this.animations.walk.stopFading(),this.animations.run.stopFading(),this.animations.idle.stop(),this.animations.walk.stop(),this.animations.run.stop()}setTimeout(()=>{Q.dispatch("Enemy::Active",e),this.animationUpdate=!1},+e*i),Se({changeBegin:this.disableShadow.bind(this),targets:this.material,opacity:+e,duration:i,easing:n,delay:s})}async loadCharacter(e){return this.load(e)}fallDeadAnimation(e){const t=Date.now()-this.fallTime<1500;this.falling&&t&&this.updateAnimation("Idle",e),this.toggleVisibility(!1,e)}headHit(e,t){if(!this.dead){if(this.stopSounds(),this.cancelAnimation(),this.hitting&&this.cancelHit(),!t&&this.life>e)return this.bodyHit(e);this.updateHitDamage(e)?this.falling&&this.fallDeadAnimation("headshot"):(this.toggleVisibility(!1,"headshot"),this.updateAnimation("Idle","headshot")),this.hitTime=Date.now(),this.running=!1}}bodyHit(e){if(this.dead)return;if(this.playHitSound(),this.cancelAnimation(),this.updateHitDamage(e)){this.dead&&this.fallDeadAnimation("death");return}if(this.dead){this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}else if(!this.hitting)this.previousAnimation=this.lastAnimation;else{this.cancelHit(),this.animations.idle.play(),this.currentAnimation=this.animations.idle;const i=this.previousAnimation==="run",n=this.lastAnimation==="run";if(this.running&&i&&n){if(this.updateHitDamage(this.life))return this.fallDeadAnimation("death");this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}}this.previousAnimation!=="hit"&&(this.animations.hit.time=this.hitStart,this.updateAnimation("Idle","hit",.1)),this.hitTimeout=setTimeout(()=>{if(this.dead||this.attacking)return;const i=this.previousAnimation==="hit",n=this.previousAnimation==="scream",s=this.previousAnimation.includes("Attack"),o=i||n||s;o||(this.animTimeout=this.updateAnimation(t,this.previousAnimation,.1)),this.hitTimeout=setTimeout(()=>{if(this.dead)return;this.hitting=!1;const a=this.distance<this.runDistance&&!this.running;this.distance<this.attackDistance?this.attack():a&&this.run()},+!o*100)},this.hitDuration-100);const t=this.animation;this.hitTime=Date.now(),this.hitting=!0}legHit(e){if(this.dead)return;this.playHitSound(),this.cancelAnimation();const t=Date.now(),i=t-this.hitTime,n=this.updateHitDamage(e);if(i<825&&i>600)return setTimeout(this.legHit.bind(this,e),825-i);if(this.hitting&&this.cancelHit(),n){this.dead&&this.falling&&this.toggleVisibility(!1,"crawlDeath");return}this.crawlTimeout=setTimeout(this.crawl.bind(this),2500),this.updateAnimation("Falling","falling",.1),this.hitTime=this.fallTime=t,this.running=!1,this.falling=!0,this.hitting=!0,this.moving=!1}crawl(e=3){this.dead||(this.crawlTime=Date.now(),this.crawlTimeout=this.updateAnimation("Crawling","crawling",e),this.crawling||(this.crawlAnimation=Se({z:this.rotation.z*(e*-.1),targets:this.character.position,duration:e*1e3,easing:"linear"})),this.attacking=!1,this.crawling=!0,this.falling=!1,this.hitting=!1,this.moving=!0)}cancelAnimation(){this.attacking&&(this.animations.softAttack.stopFading(),this.animations.hardAttack.stopFading(),this.animations.softAttack.stop(),this.animations.hardAttack.stop(),clearTimeout(this.hittingTimeout),clearTimeout(this.attackTimeout),clearTimeout(this.animTimeout),this.attacking=!1),this.screaming&&(this.animations.scream.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.runTimeout),this.animations.scream.stop(),this.screaming=!1)}playHitSound(){this.stopSounds(),!this.falling&&this.playSound("hit")}stopSounds(){this.screaming?this.stopSound("scream"):this.attacking&&(this.stopSound("hardAttack"),this.stopSound("softAttack"))}cancelHit(){this.animations.hit.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.hitTimeout),this.animations.hit.stop()}idle(){if(this.dead)return;const e=+!this.attacking*.4+.1;this.updateAnimation("Idle","idle",e),this.attacking=!1,this.hitting=!1,this.running=!1,this.moving=!1}walk(){this.dead||(this.updateAnimation("Walking","walk"),this.hitting=!1,this.running=!1,this.moving=!0)}scream(){this.dead||(this.cancelHit(),this.moving=!1,this.hitting=!1,this.screamed=!0,this.screaming=!0,this.attacking=!1,this.runTimeout=setTimeout(()=>{this.playSound("scream"),this.runTimeout=setTimeout(()=>this.distance<this.attackDistance?this.attack():this.run(),this.screamDuration-250)},this.screamStart*1e3),this.animTimeout=this.updateAnimation("Idle","scream",this.screamStart))}run(){if(this.dead||this.playerDead)return;const e=+(this.attacking||this.screaming)*.1;this.updateAnimation("Running","run",e+.1),this.attacking=!1,this.screaming=!1,this.hitting=!1,this.running=!0,this.moving=!0}attack(){if(this.dead)return;const e=this.life>50&&Math.random()<.5;let t="crawlAttack",i=.5,n=2200,s=250;this.crawling||(t=e?"hardAttack":"softAttack",s=e?1300:1e3,n=e?3e3:2500,setTimeout(this.playSound.bind(this,t,!0),+!e*350+400),i=.166),this.updateAnimation("Idle",t,i),this.hittingTimeout=setTimeout(()=>{const{strong:o,soft:a}=xe.Gameplay.damage.enemy;this.canAttack&&Q.dispatch("Enemy::Attack",{position:this.position,damage:e?o:a})},s),this.attackTimeout=setTimeout(()=>{if(this.dead||this.crawling&&this.playerDead)return;const o=this.distance<(this.crawling?1.5:this.attackDistance);this.crawling?this.crawl(+o+1):o?this.idle():this.run()},i*1e3+n),this.screaming=!1,this.attacking=!0,this.screamed=!0,this.hitting=!1,this.running=!1,this.moving=!1}update(e,t){const i=t;return this.visible?(super.update(e),this.dead?this.position:(this.distance=this.object.position.distanceToSquared(i),this.character.lookAt(i.x,0,i.z),this.toggleAnimation(),this.position)):this.position}updateHitDamage(e){const t=this.falling||this.crawling,i=this.updateHealth(e);if(t){if(i&&this.crawling){let n;this.crawlAnimation?.completed||(this.character.position.z=this.rotation.z,this.crawlAnimation?.pause(),this.animations.falling.setEffectiveTimeScale(1).setEffectiveWeight(1).stopWarping().stopFading(),n=0),this.toggleVisibility(!1,"crawlDeath"),this.updateAnimation("Idle","crawlDeath",n)}}else return!1;return!0}toggleAnimation(){if(this.blockingAnimation)return;if(this.canAttack)return this.attack();if(this.crawling||!this.lose&&this.running)return;const e=this.distance>this.walkDistance,t=this.distance<this.runDistance,i=!e&&!t,n=!this.screamed&&t;this.lose&&this.moving&&e?this.idle():!this.moving&&i?this.walk():!(this.lose&&this.running)&&n&&this.scream()}dispose(){super.dispose(),this.removeHitBoxes(),this.character?.clear(),Q.dispatch("Enemy::Death",this.id),Q.dispatch("Enemy::Dispose",this.uuid,!0),Q.dispatch("Level::RemoveObject",this.object)}setDefaultState(){const e=this.getAnimationDuration("scream");this.screamDuration=e-333.3332538604736|0,this.screamStart=(e-this.screamDuration)/1e3;const t=this.getAnimationDuration("hit");this.hitDuration=t-233.3333015441895|0,this.hitStart=(t-this.hitDuration)/1e3,this.animations.softAttack.clampWhenFinished=!0,this.animations.hardAttack.clampWhenFinished=!0,this.animations.crawlDeath.clampWhenFinished=!0,this.animations.headshot.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.falling.clampWhenFinished=!0,this.animations.scream.clampWhenFinished=!0,this.animations.hit.clampWhenFinished=!0,this.animations.softAttack.setLoop(Mi,0),this.animations.hardAttack.setLoop(Mi,0),this.animations.crawlDeath.setLoop(Mi,0),this.animations.headshot.setLoop(Mi,0),this.animations.death.setLoop(Mi,0),this.animations.falling.setLoop(Mi,0),this.animations.scream.setLoop(Mi,0),this.animations.hit.setLoop(Mi,0);const{idle:i}=this.animations;this.currentAnimation=i,this.createHitBoxes(),i.play(),this.setMixerTime(.01)}createHitBoxes(){const e=[[0,1.5,.8,.48,.5,.7],[0,1,.05,.75,.85,1.45],[-.3,.5,-.1,.28,.7,.35],[.3,.5,-.1,.28,.7,.35],[-.3,.2,.1,.3,.3,.4],[.3,.2,.1,.3,.3,.4]];for(const[t,i,n,s,o,a]of e){const l=new lt(new Qi(s,o,a),wi.HitBox.clone());l.position.set(t,i,n),l.userData.enemy=this.id,this.character.add(l),this.hitBoxes.push(l)}}removeHitBoxes(){for(let e=this.hitBoxes.length;e--;)delete this.hitBoxes[e];this.hitBoxes.splice(0)}addHeadHitBox(){const e=this.character.getObjectByName("Head"),t=new lt(new Qi(15,10,22),wi.HitBox.clone());t.position.y+=9.5,t.position.z+=2,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addBodyHitBox(){const e=this.character.getObjectByName("Spine"),t=new lt(new Fg(38,95,40,2,25),wi.HitBox.clone());t.position.y+=15,t.position.z+=2.5,t.position.x-=1,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addLegsHitBox(){const e=this.character.getObjectByName("RightUpLeg"),t=this.character.getObjectByName("LeftUpLeg"),i=this.character.getObjectByName("RightLeg"),n=this.character.getObjectByName("LeftLeg"),s=new lt(new Qi(16,50,15),wi.HitBox.clone()),o=new lt(new Qi(10,50,10),wi.HitBox.clone());o.userData.enemy=this.id,s.userData.enemy=this.id,o.position.y-=22.5,o.position.z-=2.5,s.position.y-=20;const a=s.clone(),l=s.clone(),c=o.clone(),h=o.clone();a.position.x+=1,l.position.x-=1,this.hitBoxes.push(a),this.hitBoxes.push(l),this.hitBoxes.push(c),this.hitBoxes.push(h),e.add(a),t.add(l),i.add(c),n.add(h)}disableShadow(){this.dead&&this.mesh.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!1)})}get blockingAnimation(){return this.attacking||this.falling||this.screaming||this.playerDead||super.blockingAnimation}get material(){const e=[];return this.mesh.traverse(t=>{t.isSkinnedMesh&&e.push(...[t.material].flat())}),e}get animation(){const e=this.running?"Running":this.moving?"Walking":"Idle";return this.falling?"Falling":this.crawling?"Crawling":e}set playerDeath(e){(this.playerDead=e)&&this.moving&&this.idle()}get hitBox(){return this.hitBoxes}get canAttack(){return!this.playerDead&&this.distance<(this.crawling?1.5:this.attackDistance)}get index(){return this.id}}const Vg=r=>{const e=dT(r.bounds),{boundOffset:t}=xe.RandomCoords;e.unshift(e.pop());const i=e.slice(0,e.length/2).slice(4),n=e.slice(e.length/2).slice(4),s=r.minCoords[1]+t,o=r.maxCoords[1]-t,a=[r.portals[2],r.portals[3],r.portals[4],r.portals[5]],l=[r.portals[6],r.portals[7],r.portals[0],r.portals[1]],c=Jt(s,o);if(c>l[0][1]){const m=Ll(l.map(g=>g[0])),y=Dl(l.map(g=>g[0]));return[Jt(m,y),c]}if(c<a[0][1]){const m=Ll(a.map(g=>g[0])),y=Dl(a.map(g=>g[0]));return[Jt(m,y),c]}let h,u,d,f;for(let m=0,y=i.length-1;m<y;m++)if(i[m][1]>c&&i[m+1][1]<c){d=i[m][0]+t,u=n[y-m][0]-t,h=i[m+1][0]+t,f=n[y-m-1][0]-t;break}return[Jt(Math.max(d,h),Math.min(f,u))|0,c|0]},oo=class ti{static getRandomLevelCoords(e,t,i){ti.playerCoords.set(e,t);do i=ti.setRandomCoords();while(i<ti.distance);return uT(ti.coords),ti.levelCoords.toArray()}static addLevelCoords(e){return ti.coords.push(e)===ti.ammount}static setRandomCoords(){return ti.levelCoords.fromArray(fT(ti.coords)),ti.levelCoords.distanceToSquared(ti.playerCoords)}static fillRandomLevelCoords(){for(let e=ti.ammount;e--;)ti.coords.push(Vg({minCoords:ke.minCoords,maxCoords:ke.maxCoords,portals:ke.portals,bounds:ke.bounds}))}};oo.levelCoords=new Ce;oo.playerCoords=new Ce;oo.coords=[];oo.ammount=xe.RandomCoords.ammount;oo.distance=xe.RandomCoords.playerDistance**2;let bl=oo;class Hg{constructor(e){this.envMap=e,this.onHeadHit=this.headHit.bind(this),this.onBodyHit=this.bodyHit.bind(this),this.onLegHit=this.legHit.bind(this),this.onDeath=this.death.bind(this),this.positions=[],this.enemyPosition=new L,this.enemies=[],this.spawnedEnemies=0,this.ready=new Hp().loadCharacter(e).then(t=>{this.enemyModel=t,this.spawnEnemy([0,-7])}),this.addEvents()}addEvents(){Q.add("Enemy::Death",this.onDeath),Q.add("Hit::Head",this.onHeadHit),Q.add("Hit::Body",this.onBodyHit),Q.add("Hit::Leg",this.onLegHit)}spawnEnemy(e){const t=new Hp(this.enemyModel,this.envMap,this.spawnedEnemies++);this.enemyPosition.set(e[0],t.collider.position.y,e[1]),t.teleport(this.enemyPosition),this.positions.push(new L().copy(this.enemyPosition)),ut.setCharacter(t.collider),this.enemies.push(t)}headHit(e){const{enemy:t,damage:i,headshot:n}=e.data,s=this.getEnemyIndex(t);this.enemies[s].headHit(i,n)}bodyHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].bodyHit(i)}legHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].legHit(i)}death(e){const t=this.getEnemyIndex(e.data);this.positions.splice(t,1),this.enemies.splice(t,1)}update(e,t){for(let i=this.enemies.length;i--;){const n=this.enemies[i].update(e,t);this.enemies[i].alive?this.positions[i].copy(n):this.positions[i].setScalar(NaN)}return this.positions}spawnMultiple(e,t,i=2){const n=this.enemies.length-1;i=Math.min(xe.Gameplay.maxEnemies-n,i);for(let s=i;s--;)this.spawnEnemy(bl.getRandomLevelCoords(e,t))}getHitDirection(e,t,i){let n=Math.atan2(e.z-t.z,e.x-t.x);const s=Wy(i);let o="Front";return Math.abs(s)>Qe.m075?(n=Math.abs(n),o=n<Qe.d4?"Right":n>Qe.m075?"Left":"Front"):s<-Qe.d4&&s>-Qe.m075?(n*=-1,o=n<-Qe.d4&&n>-Qe.m075?"Right":n<Qe.m075&&n>Qe.d4?"Left":"Front"):Math.abs(s)<Qe.d4?(n=Math.abs(n),o=n>Qe.m075?"Right":n<Qe.d4?"Left":"Front"):s<Qe.m075&&s>Qe.d4&&(n*=-1,o=n<Qe.m075&&n>Qe.d4?"Right":n<-Qe.d4&&n>-Qe.m075?"Left":"Front"),o}getEnemy(e){return this.enemies.find(t=>t.collider.uuid===e)}getEnemyIndex(e){return this.enemies.findIndex(t=>t.index===e)}removeEvents(){Q.remove("Enemy::Death"),Q.remove("Hit::Head"),Q.remove("Hit::Body"),Q.remove("Hit::Leg")}dispose(){for(let e=this.enemies.length;e--;)this.enemies[e].dispose(),delete this.enemies[e];this.enemyModel.scene.clear(),this.positions.splice(0),this.enemies.splice(0),this.removeEvents()}spawnWave(e){const t=[[-6,8],[6,4],[0,0],[-10,6],[10,10],[-5,-2],[5,-4]];for(let i=0;i<e;i++)this.spawnEnemy(t[i%t.length])}get aliveCount(){return this.enemies.filter(e=>e.alive).length}get positionsForHUD(){return this.enemies.filter(e=>e.alive).map(e=>({id:e.index,x:e.collider.position.x,y:e.collider.position.y,z:e.collider.position.z,health:e.healthValue,head:e.hitBox[0]?.getWorldPosition(new L).toArray()}))}get colliders(){const e=[];for(let t=this.enemies.length;t--;)e.push(...this.enemies[t].hitBox);return e}set playerDead(e){for(let t=this.enemies.length;t--;)this.enemies[t].playerDeath=e}}const $u=class Tn{constructor(e){this.player=e,this.paused=!0,this.move=zl}static get moves(){return Tn.directions}static get moving(){return Tn.directions.includes(1)}static get idle(){return!Tn.moving}static get runs(){return Tn.running}static set runs(e){Tn.running=e}get disabled(){return this.paused||!this.player.alive}set pause(e){this.paused=e,e&&(Tn.directions.fill(0),Tn.running=!1,this.move=zl,this.player.clearControls())}get movement(){return Tn.moves.join("")}dispose(){this.paused=!0}};$u.directions=[0,0,0,0];$u.running=!1;let Lt=$u;class ji extends Lt{constructor(e){super(e),this.wheelTime=0,this.aimTime=0,this.events=Object.entries({contextmenu:this.onContextMenu.bind(this),mousewheel:this.onMouseWheel.bind(this),mousedown:this.onMouseDown.bind(this),mousemove:this.onMouseMove.bind(this),mouseup:this.onMouseUp.bind(this),keydown:this.onKeyDown.bind(this),keyup:this.onKeyUp.bind(this)}),this.addEventListeners()}addEventListeners(){const e=xe.worker?tu:document;for(const[t,i]of this.events)e.addEventListener(t,i,!1)}onContextMenu(e){if(!this.paused)return e.stopPropagation(),e.preventDefault(),!1}onMouseWheel(e){const t=Date.now();e.stopPropagation(),!this.disabled&&t>this.wheelTime&&(this.wheelTime=t+450,this.player.changeWeapon())}onMouseDown(e){if(e.preventDefault(),e.stopPropagation(),!this.disabled){if(e.button===Bo.LEFT)this.player.startShooting();else if(e.button===Bo.RIGHT){const t=this.move!==zl;this.player.startAiming(t),this.aimTime=Date.now()}}}onMouseMove(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&this.player.rotate(e.movementX/-300,e.movementY/600,.15)}onMouseUp(e){e.preventDefault(),e.stopPropagation(),!this.disabled&&(e.button===Bo.LEFT?this.player.stopShooting():e.button===Bo.RIGHT&&(clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const t=!!Lt.moves[mt.UP],i=Lt.runs&&t;this.player.stopAiming(i),i?this.player.run(!0):this.player.move()},Math.max(450-(Date.now()-this.aimTime),0))))}onKeyDown(e){if(this.disabled||(e.preventDefault(),e.stopPropagation(),this.disabled))return;switch(this.onShift(e.code,!0),e.code){case"KeyW":Lt.moves[mt.UP]=1,Lt.moves[mt.DOWN]=0;break;case"KeyD":Lt.moves[mt.RIGHT]=1,Lt.moves[mt.LEFT]=0;break;case"KeyS":Lt.moves[mt.DOWN]=1,Lt.moves[mt.UP]=0;break;case"KeyA":Lt.moves[mt.RIGHT]=0,Lt.moves[mt.LEFT]=1;break;default:return}const t=this.movement;this.move!==t&&this.player.move(),this.move=t}onKeyUp(e){if(this.disabled||(e.preventDefault(),e.stopPropagation(),this.disabled))return;switch(this.onShift(e.code,!1),e.code){case"KeyW":Lt.moves[mt.UP]=0;break;case"KeyD":Lt.moves[mt.RIGHT]=0;break;case"KeyS":Lt.moves[mt.DOWN]=0;break;case"KeyA":Lt.moves[mt.LEFT]=0;break;case"KeyQ":case"KeyE":{const i=Date.now();i>this.wheelTime&&(this.wheelTime=i+450,this.player.changeWeapon());return}case"KeyC":return this.player.changeCamera(!0);case"KeyV":return this.player.changeCamera(!1);case"KeyR":return this.player.reload();default:return}const t=this.movement;t===zl?this.player.idle():this.move!==t&&this.player.move(),this.move=t}onShift(e,t){const i=t?!Lt.runs:Lt.runs;e==="ShiftLeft"&&i&&(this.player.run(t),Lt.runs=t)}removeEventListeners(){const e=xe.worker?tu:document;for(const[t,i]of this.events)e.removeEventListener(t,i,!1)}dispose(){this.removeEventListeners(),super.dispose()}}var mt=(r=>(r[r.UP=0]="UP",r[r.RIGHT=1]="RIGHT",r[r.DOWN=2]="DOWN",r[r.LEFT=3]="LEFT",r))(mt||{}),Bo=(r=>(r[r.LEFT=0]="LEFT",r[r.WHEEL=1]="WHEEL",r[r.RIGHT=2]="RIGHT",r))(Bo||{});const zl="0000";var Is=(r=>(r.Pistol="pistol",r.Rifle="rifle",r))(Is||{});class Sl extends kg{constructor(){super(xe.Player),this.modelRotation=new ni,this.lastAnimation="pistolIdle",this.equipRifle=!1,this.hasRifle=!1,this.reloading=!1,this.shooting=!1,this.aiming=!1,this.shootTime=0,this.idleTime=0,this.aimTime=0}async loadCharacter(e){const t=await this.load(e);this.hand=t.scene.getObjectByName("DinoWeaponMount")||t.scene.getObjectByName("LowerArmR")||t.scene,Q.dispatch("Level::AddObject",this.object),this.currentAnimation=this.animations.pistolIdle,this.animations.rifleReload.clampWhenFinished=!0,this.animations.rifleAim.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.rifleReload.setLoop(Mi,1),this.animations.rifleAim.setLoop(Mi,1),this.animations.death.setLoop(Mi,1),Re.setTo(t.scene),this.currentAnimation.play(),this.setMixerTime(.01),this.rotate(-Math.PI,0)}rotate(e,t,i=.25){const n=t>0,s=this.mesh,o=+Re.isFPS,a=this.rotation.y;if(s.rotateOnWorldAxis(fi.UP,e),this.running)return;const l=o*-.2-.2;i=Math.min(i+o*i,.25),(n&&a>=l||!n&&a<=i)&&s.rotateOnAxis(fi.RIGHT,t)}idle(){const e=Date.now(),t=Math.max(350-(e-this.idleTime),0);if(this.blockingAnimation||t)return setTimeout(this.idle.bind(this),t);Q.dispatch("Player::Aim",!this.equipRifle,!0),Q.dispatch("Player::Run",!1,!0);const i=this.getWeaponAnimation("Idle");this.lastAnimation!==i&&(this.hasRifle&&this.rifle.updatePosition(0),this.running=this.moving=!1,Re.runAnimation(!1),this.idleTime=e,setTimeout(this.updateAnimation.bind(this,"Idle",i),+(this.lastAnimation===i)*100))}move(){if(this.blockingAnimation){this.reloading&&(this.moving=ji.moving);return}const e=this.movementAnimation,t=this.getWeaponAnimation(e);this.lastAnimation!==t&&(this.updateAnimation(e,t),this.running=!1,this.moving=e!=="Idle",this.moving&&Re.runAnimation(!1),this.hasRifle&&this.rifle.updatePosition(1),Q.dispatch("Player::Run",!1,!0),Q.dispatch("Player::Aim",!1,!0))}run(e){if(this.blockingAnimation||this.running===e)return;const t=this.getWeaponAnimation("Run");if(!e||this.lastAnimation===t)return this.running=!1,ji.moving?this.move():setTimeout(this.idle.bind(this),150);ji.moves[mt.UP]&&(this.hasRifle&&this.rifle.updatePosition(1.5),Q.dispatch("Player::Run",!0,!0),this.running=this.moving=!0,this.updateAnimation("Run",t),Re.runAnimation(!0),this.resetRotation(!0))}hit(e,t){if(this.dead||this.updateHealth(t)||this.hitting)return;this.aiming&&this.stopAiming(this.running);const i=this.getHitAnimation(e),n=+!this.equipRifle*100+1200;Q.dispatch("Player::Aim",!1,!0),this.updateAnimation("Idle",i),clearTimeout(this.reloadTimeout),Re.isFPS&&(Re.headAnimation(e,n*.5),this.equipRifle&&this.weapon.toggleVisibility(0,n+100,0)),this.playSound("hit",!0),this.weapon.stopReloading(),this.toggleMesh(!1),setTimeout(()=>{if(this.hitting=!1,this.dead)return this.toggleMesh(!0);ji.runs?this.run(!0):this.move();const s=ji.idle&&!this.equipRifle;Q.dispatch("Player::Aim",s,!0),setTimeout(this.toggleMesh.bind(this,!0),100)},n),this.reloading=!1,this.running=!1,this.hitting=!0,this.moving=!1}startAiming(e){if(this.blockingAnimation)return;this.weapon.aiming=this.aiming=!0,Q.dispatch("Player::Run",!1,!0),Re.runAnimation(!1),Re.aimAnimation(!0,this.equipRifle),Re.updateNearPlane(!0,this.equipRifle);const t=this.equipRifle?"rifleAim":"pistolIdle";setTimeout(this.toggleMesh.bind(this,!0),300),this.aimTime=+this.equipRifle*Date.now(),clearTimeout(this.animTimeout),this.weapon.setAim(),this.lastAnimation!==t&&((this.equipRifle||e)&&(this.animTimeout=this.updateAnimation("Idle",t)),this.running=this.moving=!1),this.aimTimeout=setTimeout(()=>Q.dispatch("Player::Aim",!Re.isFPS,!0),300+ +this.equipRifle*300),!this.equipRifle&&setTimeout(()=>{this.currentAnimation.paused=!0,this.setMixerTime(.5)},400)}stopAiming(e){if(this.reloading)return;this.equipRifle&&clearTimeout(this.aimTimeout);const t=Math.min(Date.now()-this.aimTime,400);Q.dispatch("Player::Aim",!this.equipRifle,!0),!e&&Re.aimAnimation(!1,this.equipRifle,t),Re.isFPS&&e?Re.setNearPlane(+this.equipRifle*.185+.315,0):Re.updateNearPlane(!1,this.equipRifle),setTimeout(()=>this.weapon.aiming=this.aiming=!1,100),this.weapon.aiming=this.aiming=!1,this.currentAnimation.paused=!1,this.weapon.cancelAim(t),clearTimeout(this.animTimeout),this.toggleMesh(!1)}get aimProbe(){return this.weapon?.aimProbe}clearControls(){this.moving=!1,this.running=!1,this.stopShooting()}startShooting(e=Date.now()){if(this.equipRifle&&!this.aiming||this.hitting||this.reloading||e-this.aimTime<500||e-this.shootTime<165)return;this.shooting=!0,this.shootTime=e;const t=this.weapon.shoot();t&&this.rotate(t.x,t.y),!this.equipRifle&&this.stopShooting()}stopShooting(){this.shooting=!1}reload(){const e=this.moving;if(this.blockingAnimation||this.weapon.full||!this.weapon.inStock)return;Q.dispatch("Player::Run",!1,!0),this.updateAnimation("Idle","rifleReload");const t=+this.running*.02+.13;this.running=this.moving=!1,Re.setNearPlane(t,400),this.weapon.startReloading(),Re.runAnimation(!1),this.reloading=!0,this.toggleMesh(!0),this.reloadTimeout=setTimeout(()=>{ji.idle&&(e||this.moving)&&this.weapon.stopReloading(),this.weapon.addAmmo(0),this.reloading=!1},2e3),this.animTimeout=setTimeout(()=>{this.dead||(this.toggleMesh(!1),this.weapon.stopReloading(),Re.setNearPlane(.5,100),ji.runs?this.run(!0):this.move())},2500)}setPistol(e=this.weapon.walls,t){if(this.setWeapon(!1),t)this.pistol=t,this.weapon=this.pistol,this.weapon.walls=e,this.weapon.visible=!0,this.hand?.add(this.weapon.object);else{const i=this.weapon.targets;this.weapon=this.pistol,this.updateRiflePosition(!0),this.weapon.visible=!0,this.weapon.walls=e,this.rifle.toggle=!1,this.setTargets(i)}}setRifle(){this.rifle.walls=this.weapon.walls;const e=this.weapon.targets;this.weapon.visible=!1,this.rifle.toggle=!0,this.weapon=this.rifle,this.setTargets(e),this.setWeapon(!0)}setWeapon(e){Q.dispatch("Weapon::Change",e);let t=e?this.lastAnimation.replace(Is.Pistol,Is.Rifle):this.lastAnimation.replace(Is.Rifle,Is.Pistol);!e&&!this.animations[t]&&(t=t.replace(/BackwardLeft|BackwardRight/gm,"Backward"),t=t.replace(/ForwardLeft|ForwardRight/gm,"Forward")),this.lastAnimation!==t&&this.updateAnimation(this.playerAnimation,t),this.equipRifle=e}setTargets(e){this.weapon.targets=e}changeCamera(e){if(!e)Re.changeShoulder(this.aiming,this.equipRifle);else if(!this.hitting){const t=this.equipRifle&&!this.aiming||!Re.isFPS&&this.aiming;Re.changeView(this.running,this.aiming,this.equipRifle),!Re.isFPS&&this.resetRotation(),this.toggleVisibility(),setTimeout(()=>{const i=!this.moving&&!t;Q.dispatch("Player::Aim",i,!0)},+t*300)}}resetRotation(e=!1){if(e){const t=this.mesh,i=new ni().setFromAxisAngle(fi.RIGHT,this.rotation.y);this.modelRotation.copy(t.quaternion),this.modelRotation.multiply(i),Se({targets:t.quaternion,easing:"easeInOutQuad",...this.modelRotation,duration:500})}else if(this.rotation.y<-.2){const t=this.rotation.y+.2;this.mesh.rotateOnAxis(fi.RIGHT,t)}}toggleMesh(e){Re.isFPS&&this.equipRifle&&this.meshes.forEach(t=>t.material.opacity=+e)}toggleVisibility(){const e=+Re.isFPS*250,t=+Re.isFPS*150+250;this.weapon.toggleVisibility(e,t);const i=!(Re.isFPS&&this.equipRifle&&!this.aiming);this.meshes.forEach(n=>{Se({targets:n.material,delay:e,easing:"linear",duration:100,opacity:0}),i&&setTimeout(()=>Se({targets:n.material,easing:"linear",duration:100,opacity:1}),t)})}changeWeapon(){if(!this.hasRifle||this.blockingAnimation)return;const e=!this.moving&&this.equipRifle;Q.dispatch("Player::Aim",e,!0),this.toggleMesh(!0),this.equipRifle?this.setPistol():this.setRifle(),Re.updateNearPlane(this.aiming,this.equipRifle,this.running)}addRifle(e){this.rifle=e,this.rifle.toggle=!1,this.rifle.dummy.visible=!1,this.hand?.add(this.rifle.object),this.spine.add(this.rifle.dummy),this.updateRiflePosition(!0)}pickRifle(){this.rifle.dummy.visible=!this.equipRifle,this.updateRiflePosition(),this.rifle.addAmmo(),this.hasRifle||(this.rifle.addAmmo(0),this.hasRifle=!0)}updateRiflePosition(e=!1){const t=+this.running*.5+ +this.moving;e?this.rifle.append(t):this.rifle.updatePosition(t)}update(e){super.update(e),this.shooting&&this.startShooting()}updateAnimation(e,t,i=.1){return super.updateAnimation(e,t,i)}dispose(){clearTimeout(this.reloadTimeout),clearTimeout(this.animTimeout),clearTimeout(this.aimTimeout),this.pistol?.dispose(),this.weapon.dispose(),this.rifle.dispose(),delete this.pistol,delete this.hand,super.dispose()}die(){super.die();const e=+Re.isFPS*500;Re.isFPS&&this.changeCamera(!0),this.updateAnimation("Idle","death",.5),Q.dispatch("Player::Death",!0),Q.dispatch("Player::Aim",!1,!0),setTimeout(()=>Q.dispatch("Game::Quit",void 0,!0),e+5e3),clearTimeout(this.reloadTimeout),Re.deathAnimation(e),this.weapon.stopReloading(),this.reloading=!1,this.shooting=!1,this.aiming=!1}getHitAnimation(e){return`${this.currentWeapon}${e}Hit`}getWeaponAnimation(e){return`${this.currentWeapon}${e}`}get blockingAnimation(){return this.aiming||this.hitting||this.reloading||super.blockingAnimation}get movementAnimation(){const e=ji.moves;let t=e[mt.UP]?"Forward":e[mt.DOWN]?"Backward":"";return!this.equipRifle&&!t?t=e[mt.LEFT]?"Left":e[mt.RIGHT]?"Right":t:this.equipRifle&&(t+=e[mt.LEFT]?"Left":e[mt.RIGHT]?"Right":""),t||"Idle"}get playerAnimation(){return this.lastAnimation.replace(this.currentWeapon,"")}get meshes(){const e=[];return this.mesh.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e}get location(){return{position:this.position,rotation:Xy(Math.atan2(-this.rotation.x,this.rotation.z))}}get currentWeapon(){return this.equipRifle?Is.Rifle:Is.Pistol}get spine(){return this.mesh.getObjectByName("Torso")||this.mesh}}class bE{constructor(e,t,i=0,n=1/0){this.ray=new Eu(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return iu(e,this,i,t),i.sort(Gp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)iu(e[n],this,i,t);return i.sort(Gp),i}}function Gp(r,e){return r.distance-e.distance}function iu(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)iu(n[s],e,t,!0)}}class Zl extends mi{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const y=[],g=i/2;let p=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){const M=new L,v=new L;let b=0;const A=(t-e)/i;for(let E=0;E<=s;E++){const S=[],w=E/s,D=w*(t-e)+e;for(let I=0;I<=n;I++){const C=I/n,U=C*l+a,N=Math.sin(U),G=Math.cos(U);v.x=D*N,v.y=-w*i+g,v.z=D*G,u.push(v.x,v.y,v.z),M.set(N,A,G).normalize(),d.push(M.x,M.y,M.z),f.push(C,1-w),S.push(m++)}y.push(S)}for(let E=0;E<n;E++)for(let S=0;S<s;S++){const w=y[S][E],D=y[S+1][E],I=y[S+1][E+1],C=y[S][E+1];h.push(w,D,C),h.push(D,I,C),b+=6}c.addGroup(p,b,0),p+=b}function x(M){const v=m,b=new Ce,A=new L;let E=0;const S=M===!0?e:t,w=M===!0?1:-1;for(let I=1;I<=n;I++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;const D=m;for(let I=0;I<=n;I++){const U=I/n*l+a,N=Math.cos(U),G=Math.sin(U);A.x=S*G,A.y=g*w,A.z=S*N,u.push(A.x,A.y,A.z),d.push(0,w,0),b.x=N*.5+.5,b.y=G*.5*w+.5,f.push(b.x,b.y),m++}for(let I=0;I<n;I++){const C=v+I,U=D+I;M===!0?h.push(U,U+1,C):h.push(U+1,U,C),E+=3}c.addGroup(p,E,M===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yu extends Zl{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const SE=10;class wE{constructor(e){this.config=e,this.width=1,this.height=.3,this.radius=.1,this.segments=8,this.rotation=new ni,this.pivot=new et().makeTranslation(0,this.width*-.5,0),this.acceleration=e.speed*ng,this.speed=1/this.acceleration,this.createBullet()}async createBullet(){const e=await je.Loader.loadTexture("bullet.png");this.bullet=new lt(new Yu(this.radius,this.height,this.segments),new Xu({map:e})),this.bullet.scale.setScalar(this.config.scale),dt.getVisualValue("bulletPath")&&this.bullet.add(await this.createPath())}async createPath(){const e=this.radius*1.2,t=await je.Loader.loadShader("main.vert"),i=await je.Loader.loadShader("shot/bullet.frag"),n=new lt(new Zl(e,e,this.width,this.segments,1,!0),new Vi({uniforms:{color:{value:new Fe(St.WHITE)},traces:{value:0},time:{value:0}},fragmentShader:i,vertexShader:t,glslVersion:Kr,transparent:!0,depthWrite:!1,side:Ki}));return n.geometry.applyMatrix4(this.pivot),n.position.y-=this.height/2,n.scale.y=0,n}shoot(e,t){const i=this.config.position.z,{lifeTime:n}=this.config,s=this.bullet.clone(),o=+!t*.01+.01;return s.userData.direction=e.direction.clone(),s.userData.lifeTime=Date.now()+n,Q.dispatch("Level::AddObject",s),zt.getWorldQuaternion(this.rotation),s.userData.direction.y+=o,s.quaternion.copy(this.rotation),s.position.copy(e.origin),s.rotateX(-1.56),s.translateY(i),s}update(e){const t=e.children[0];if(e.position.addScaledVector(e.userData.direction,this.acceleration),e.rotateY(.5),!t)return;const i=t.material;t.scale.y>=SE?i.uniforms.time.value+=.1:i.uniforms.traces.value=t.scale.y+=this.acceleration}dispose(){const e=this.bullet.material,t=this.bullet.children[0];t?.material?.dispose(),this.bullet.geometry.dispose(),e.map?.dispose(),t?.geometry.dispose(),e.dispose(),this.bullet.clear()}}const AE=Math.tan(Qe.d6)*2,TE=[0,0,0];class EE{constructor(e,t,i){this.config=e,this.smokeParticles=[],this.fireParticles=[],this.smokeAlpha=new Ml,this.smokeSize=new Ml,this.fireAlpha=new Ml,this.lightPower=0,this.geometry=new mi,this.createFireLight(t),this.createParticleGeometry(),this.createParticles(t,i)}createFireLight(e){const{intensity:t,position:{x:i,y:n}}=this.config,s=+dt.getVisualValue("physicalLights")+1;this.light=new ig(St.FIRE,t*(3-s),1,s),this.lightPower=this.light.power,this.light.position.set(i,n,0),this.light.castShadow=!0,this.light.power=0,e.add(this.light)}createParticleGeometry(){this.geometry.setAttribute("smokeAngle",new Xe([],1)),this.geometry.setAttribute("smokeAlpha",new Xe([],1)),this.geometry.setAttribute("smokeSize",new Xe([],1)),this.geometry.setAttribute("fireAngle",new Xe([],1)),this.geometry.setAttribute("fireSize",new Xe([],1)),this.geometry.setAttribute("position",new Xe([],3)),this.geometry.setAttribute("blend",new Wc([],1)),this.fireAlpha.addPoint(0,0),this.fireAlpha.addPoint(.2,1),this.fireAlpha.addPoint(.5,1),this.fireAlpha.addPoint(1,0),this.smokeAlpha.addPoint(0,0),this.smokeAlpha.addPoint(.1,.1),this.smokeAlpha.addPoint(.5,.1),this.smokeAlpha.addPoint(1,0),this.smokeSize.addPoint(0,0),this.smokeSize.addPoint(.8,this.config.scale*.1),this.smokeSize.addPoint(1,this.config.scale*.12)}async createParticles(e,t){const i=await je.Loader.loadTexture(`${t}/smoke.png`),n=await je.Loader.loadTexture(`${t}/fire.png`),s=await je.Loader.loadShader("shot/fire.vert"),o=await je.Loader.loadShader("shot/fire.frag");this.material=new Vi({blendDst:Su,blendEquation:Ls,blending:Pm,fragmentShader:o,vertexShader:s,blendSrc:Im,glslVersion:Kr,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{smoke:{value:i},ratio:{value:null},fire:{value:n}}});const a=new Tg(this.geometry,this.material);a.position.x=this.config.position.x,a.position.y=this.config.position.y,a.renderOrder=2,e.add(a)}addParticles(){this.addFireParticle(),this.addSmokeParticles()}addFireParticle(){const e=Math.random()*.1+.1,t=this.config.scale*(Math.random()*.1+.15);this.fireParticles.push({rotation:Math.random()*Qe.m2,currentSize:t,maxLife:e,life:e,size:t,blend:0,alpha:0})}addSmokeParticles(){const[e,t]=this.config.particles,i=Iu(e,t);for(let n=i;n--;){const s=this.config.velocity*(i-n),o=Math.random()*.1+.4,a=this.config.scale*o;this.smokeParticles.push({rotation:Math.random()*Qe.m2,position:new L,currentSize:0,life:a,velocity:s,maxLife:a,blend:1,alpha:0})}}update(){this.updateParticles();const{length:e}=this.fireParticles;return this.light.power=e*this.lightPower,e?this.updateFireGeometry():this.updateSmokeGeometry(),!!(e||this.smokeParticles.length)}updateParticles(e=ng){for(let t=this.fireParticles.length;t--;){const i=this.fireParticles[t];if((i.life-=.05)<=0)continue;const n=1-i.life/i.maxLife,s=this.fireAlpha.getValue(n);i.currentSize=i.size*s,i.alpha=s,i.rotation+=.025}this.fireParticles=this.fireParticles.filter(t=>t.life>0);for(let t=this.smokeParticles.length;t--;){const i=this.smokeParticles[t];if((i.life-=.01)<=0)continue;const n=1-i.life/i.maxLife;i.currentSize=this.smokeSize.getValue(n),i.alpha=this.smokeAlpha.getValue(n);const s=(t%2*2-1)*e,o=i.velocity*e;i.rotation+=s,i.position.y+=o,i.velocity-=o}this.smokeParticles=this.smokeParticles.filter(t=>t.life>0)}updateFireGeometry(){const e=[],t=[],i=[];for(let n=this.fireParticles.length;n--;){const s=this.fireParticles[n];e.push(s.rotation),i.push(s.currentSize),t.push(s.blend)}this.geometry.setAttribute("fireAngle",new Xe(e,1)),this.geometry.setAttribute("fireSize",new Xe(i,1)),this.geometry.setAttribute("position",new Xe(TE,3)),this.geometry.setAttribute("blend",new Wc(t,1)),this.geometry.attributes.fireAngle.needsUpdate=!0,this.geometry.attributes.fireSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}updateSmokeGeometry(){const e=[],t=[],i=[],n=[],s=[];for(let o=this.smokeParticles.length;o--;){const a=this.smokeParticles[o],{x:l,y:c,z:h}=a.position;t.push(a.rotation),s.push(a.currentSize),i.push(a.alpha),n.push(a.blend),e.push(l,c,h)}this.geometry.setAttribute("smokeAngle",new Xe(t,1)),this.geometry.setAttribute("smokeAlpha",new Xe(i,1)),this.geometry.setAttribute("smokeSize",new Xe(s,1)),this.geometry.setAttribute("position",new Xe(e,3)),this.geometry.setAttribute("blend",new Wc(n,1)),this.geometry.attributes.smokeAngle.needsUpdate=!0,this.geometry.attributes.smokeAlpha.needsUpdate=!0,this.geometry.attributes.smokeSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}resize(e){this.material.uniforms.ratio.value=e/AE}dispose(){this.material.uniforms.smoke.value.dispose(),this.material.uniforms.fire.value.dispose(),this.smokeParticles.splice(0),this.fireParticles.splice(0),this.smokeAlpha.dispose(),this.smokeSize.dispose(),this.fireAlpha.dispose(),this.geometry.dispose(),this.material.dispose(),this.light.dispose()}}class RE extends pi{constructor(e,t,i,n){super();const s=[],o=[],a=[],l=new F,c=new Pe;c.makeRotationFromEuler(i),c.setPosition(t);const h=new Pe;h.copy(c).invert(),u(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(a,2));function u(){let y=[];const g=new F,p=new F,_=e.geometry,x=_.attributes.position,M=_.attributes.normal;if(_.index!==null){const v=_.index;for(let b=0;b<v.count;b++)g.fromBufferAttribute(x,v.getX(b)),p.fromBufferAttribute(M,v.getX(b)),d(y,g,p)}else for(let v=0;v<x.count;v++)g.fromBufferAttribute(x,v),p.fromBufferAttribute(M,v),d(y,g,p);y=f(y,l.set(1,0,0)),y=f(y,l.set(-1,0,0)),y=f(y,l.set(0,1,0)),y=f(y,l.set(0,-1,0)),y=f(y,l.set(0,0,1)),y=f(y,l.set(0,0,-1));for(let v=0;v<y.length;v++){const b=y[v];a.push(.5+b.position.x/n.x,.5+b.position.y/n.y),b.position.applyMatrix4(c),s.push(b.position.x,b.position.y,b.position.z),o.push(b.normal.x,b.normal.y,b.normal.z)}}function d(y,g,p){g.applyMatrix4(e.matrixWorld),g.applyMatrix4(h),p.transformDirection(e.matrixWorld),y.push(new Wp(g.clone(),p.clone()))}function f(y,g){const p=[],_=.5*Math.abs(n.dot(g));for(let x=0;x<y.length;x+=3){let M=0,v,b,A,E;const S=y[x+0].position.dot(g)-_,w=y[x+1].position.dot(g)-_,D=y[x+2].position.dot(g)-_,I=S>0,C=w>0,U=D>0;switch(M=(I?1:0)+(C?1:0)+(U?1:0),M){case 0:{p.push(y[x]),p.push(y[x+1]),p.push(y[x+2]);break}case 1:{if(I&&(v=y[x+1],b=y[x+2],A=m(y[x],v,g,_),E=m(y[x],b,g,_)),C){v=y[x],b=y[x+2],A=m(y[x+1],v,g,_),E=m(y[x+1],b,g,_),p.push(A),p.push(b.clone()),p.push(v.clone()),p.push(b.clone()),p.push(A.clone()),p.push(E);break}U&&(v=y[x],b=y[x+1],A=m(y[x+2],v,g,_),E=m(y[x+2],b,g,_)),p.push(v.clone()),p.push(b.clone()),p.push(A),p.push(E),p.push(A.clone()),p.push(b.clone());break}case 2:{I||(v=y[x].clone(),b=m(v,y[x+1],g,_),A=m(v,y[x+2],g,_),p.push(v),p.push(b),p.push(A)),C||(v=y[x+1].clone(),b=m(v,y[x+2],g,_),A=m(v,y[x],g,_),p.push(v),p.push(b),p.push(A)),U||(v=y[x+2].clone(),b=m(v,y[x],g,_),A=m(v,y[x+1],g,_),p.push(v),p.push(b),p.push(A));break}}}return p}function m(y,g,p,_){const x=y.position.dot(p)-_,M=g.position.dot(p)-_,v=x/(x-M);return new Wp(new F(y.position.x+v*(g.position.x-y.position.x),y.position.y+v*(g.position.y-y.position.y),y.position.z+v*(g.position.z-y.position.z)),new F(y.normal.x+v*(g.normal.x-y.normal.x),y.normal.y+v*(g.normal.y-y.normal.y),y.normal.z+v*(g.normal.z-y.normal.z)))}}}class Wp{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class CE{constructor(e,t){this.orientation=new nn,this.rotation=new et,this.position=new L,this.holes=[],this.origin=new L,this.scale=new L,this.surface=["defaultMaterial002_24","defaultMaterial002_39"],this.scale.setScalar(t*.5),je.Loader.loadTexture(`${e}/hole.png`).then(i=>{this.material=new Ig({polygonOffsetFactor:-.1,polygonOffset:!0,transparent:!0,depthWrite:!1,depthTest:!0,map:i})})}show(e){if(this.surface.includes(e.object.name))return;this.position.copy(e.point),this.origin.copy(this.position),this.origin.add(e.face.normal),this.rotation.lookAt(this.origin,this.position,fi.UP),this.orientation.setFromRotationMatrix(this.rotation),this.orientation.z=Math.random()*Qe.m2;const t=new RE(e.object,e.point,this.orientation,this.scale);this.holes.push(new lt(t,this.material.clone()));const i=this.holes.length-1,n=this.holes[i];Q.dispatch("Level::AddObject",n),Se({complete:this.remove.bind(this,i),targets:n.material,easing:"linear",duration:1e3,opacity:0,delay:5e3})}remove(e){if(!this.holes[e])return;const t=this.holes[e];t.material.map?.dispose(),t.material.dispose(),t.geometry.dispose(),delete this.holes[e],Q.dispatch("Level::RemoveObject",t)}dispose(){for(let e=this.holes.length;e--;)this.remove(e);this.material.dispose(),this.holes.splice(0)}}class Gg{constructor(e){this.config=e,this.onUpdate=this.updateAimSign.bind(this),this.onShoot=this.updateBullets.bind(this),this.bullets=new Map,this.hits=[],this.raycaster=new bE,this.camera=new L,this.offset=new L,this.origin=new L,this.aimProbe={},this.targets=[],this.walls=[],this.aimed=!1,this.aiming=!1,dt.getVisualValue("bullet")&&(this.bullet=new wE(e.bullet)),this.magazine=e.magazine,this.loadedAmmo=e.ammo,this.totalAmmo=e.ammo}async load(e){const{emissive:t=St.BLACK,emissiveIntensity:i=1}=this.config;this.weapon=(await je.Loader.loadGLTF(this.config.model)).scene,this.weapon.traverse(s=>{const o=s,a=o.material;o.isMesh&&(o.castShadow=o.receiveShadow=!0,o.material=new Xu({emissiveIntensity:i,transparent:!0,map:a.map,color:a.color,side:ki,roughness:.75,metalness:.25,emissive:t,envMap:e}))}),this.weapon.position.copy(this.config.position),this.weapon.rotation.copy(this.config.rotation),this.weapon.scale.copy(this.config.scale);const n=this.weapon.clone();return this.fire=new EE(this.config.fire,this.weapon,this.config.textures),dt.getVisualValue("bulletHoles")&&(this.hole=new CE(this.config.textures,this.config.bullet.scale)),n}playSound(e,t){const{stop:i,pistol:n,delay:s}=t;i&&this.stopSound(e,n),Q.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!0,sfx:e,delay:s,pistol:n},!0)}stopSound(e,t){Q.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!1,sfx:e,pistol:t},!0)}updateRaycaster(e=!0,t=this.targets){this.camera.setFromMatrixPosition(zt.matrixWorld),this.raycaster.ray.origin.copy(e?this.camera.clone().add(this.spread):this.camera),this.raycaster.ray.direction.copy(fi.FORWARD).unproject(zt).sub(this.camera).normalize(),this.hits.splice(0)&&this.raycaster.intersectObjects(t,!1,this.hits)}toggleAimSign(e=!1){Q.dispatch("Weapon::Aim",e,!0),this.aimed=e}removeBullet(e){const t=this.bullets.get(e);t&&(t.clear(),this.bullets.delete(e),Q.dispatch("Level::RemoveObject",t))}getEvent(e){return e?e===1?"Hit::Body":"Hit::Leg":"Hit::Head"}updateAimSign(){if(!this.aiming)return this.aimed&&this.toggleAimSign(!1);this.updateRaycaster(!1);const e=!!this.hits.length;this.aimed!==e&&this.toggleAimSign(e)}startReloading(){}stopReloading(){}resize(e){this.fire?.resize(e)}addAmmo(){}animateRecoil(){const{x:e,y:t}=this.weapon.position,i=this.recoil;return Se({targets:this.weapon.rotation,easing:"easeInOutSine",direction:"alternate",z:i.y/5,duration:50}),Se({targets:this.weapon.position,easing:"easeInOutSine",direction:"alternate",y:t-i.y*7.5,x:e-i.y*15,duration:50}),i}updateBullets(){!this.fire.update()&&Zt.remove(this.onShoot),this.bullets.forEach((e,t)=>{Date.now()<e.userData.lifeTime?this.bullet.update(e):this.removeBullet(t)})}shoot(){if(this.empty)return this.playSound("empty",{stop:!1});const e=this.target,t=this.targets[e],i=this.animateRecoil();let n;if(!this.bullets.size&&Zt.add(this.onShoot),Q.dispatch("Player::Shoot",!0,!0),this.bullet){const{ray:h}=this.raycaster;n=this.bullet.shoot(h,this.aiming),this.bullets.set(n.uuid,n)}if(this.fire.addParticles(),this.loadedAmmo--,this.totalAmmo--,this.playSound("shoot",{stop:!0}),this.playSound("bullet",{stop:!1,delay:.5}),e<0)return this.updateRaycaster(!1,this.walls),this.hits.length&&this.hole?.show(this.hits[0]),i;const s=e%6,o=this.getEvent(s),a=!s&&Math.random()<this.config.headshot,l=a&&100||this.getDamage(s);n&&this.removeBullet(n.uuid);const{enemy:c}=t.userData;return Q.dispatch(o,{enemy:c,damage:l,headshot:a}),i}dispose(){this.bullets.forEach((e,t)=>{const i=e.children[0],n=e.material;i.material.dispose(),n.map?.dispose(),e.geometry.dispose(),n.dispose(),i.geometry.dispose(),this.removeBullet(t)}),Zt.remove(this.onUpdate),Zt.remove(this.onShoot),this.bullet?.dispose(),this.targets.splice(0),this.walls.splice(0),this.hole?.dispose(),this.weapon.clear(),this.fire.dispose()}set visible(e){Zt[e?"add":"remove"](this.onUpdate),this.weapon.children[0].visible=e}get originOffset(){const{x:e,y:t}=this.config.bullet.position;return this.aiming?t:e}get spread(){let{x:e,y:t}=this.config.spread;const i=+!this.aiming*.5+.5;return e=Jt(-e,e)*i,t=Jt(-t,t)*i,this.offset.set(e,t-.003,0)}get recoil(){const{x:e,y:t}=this.config.recoil,i=+!this.aiming*.5+.5;return{x:Jt(-e,e)*i,y:t*i}}get target(){this.updateRaycaster();const e=this.raycaster.intersectObjects(this.walls,!1)[0];return this.aimProbe={hit:this.hits[0]?.object.userData.enemy,region:this.hits[0]?this.targets.indexOf(this.hits[0].object)%6:null,distance:this.hits[0]?.distance,wall:e?.object.position.toArray(),wallDistance:e?.distance,origin:this.camera.toArray(),direction:this.raycaster.ray.direction.toArray(),targets:this.targets.length},e&&this.hits.length&&e.distance<this.hits[0].distance?-1:(this.weapon.getWorldPosition(this.origin),this.origin.y+=this.originOffset,this.raycaster.ray.origin.copy(this.origin),this.hits.length?this.targets.indexOf(this.hits[0].object):-1)}get inStock(){return this.totalAmmo-this.loadedAmmo}get empty(){return!this.loadedAmmo}get full(){return this.loadedAmmo===this.magazine}get object(){return this.weapon}}class nu extends Gg{constructor(e){super(xe.Pistol),this.position=xe.Pistol.position,this.rotation=xe.Pistol.rotation,this.damage=xe.Gameplay.damage.pistol,this.load(e)}playSound(e,t){super.playSound(e,{...t,pistol:!0})}stopSound(e){super.stopSound(e,!0)}setAim(){Se({targets:this.object.rotation,y:this.rotation.y+.015,x:this.rotation.x,easing:"linear",duration:200,delay:200,z:-.06}),Se({targets:this.object.position,x:this.position.x,z:this.position.z,easing:"linear",duration:200,delay:200,y:this.position.y})}cancelAim(e){Se({targets:this.object.rotation,x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,easing:"linear",duration:e}),Se({targets:this.object.position,x:this.position.x,y:this.position.y,z:this.position.z,easing:"linear",duration:e})}toggleVisibility(e,t,i=100){this.object.children[0].children.forEach(n=>{const{material:s}=n;Se({targets:s,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>Se({targets:s,easing:"linear",opacity:1,duration:i}),t)})}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}dispose(){super.dispose()}}class Wg extends Gg{constructor(e){super(xe.Rifle),this.spinePosition=xe.Rifle.spinePosition,this.spineRotation=xe.Rifle.spineRotation,this.position=xe.Rifle.position,this.rotation=xe.Rifle.rotation,this.damage=xe.Gameplay.damage.rifle,this.maxStock=xe.Rifle.maxStock,this.appended=!1,this.spawned=!1,this.load(e)}async load(e){const t=await super.load(e);return this.spine=t.clone(),t.scale.copy(xe.Rifle.worldScale),Q.dispatch("Level::AddObject",t),t.rotation.set(0,0,0),t.visible=!1,this.clone=t,t}setAim(){this.object.rotation.set(this.rotation.x-.1,Math.PI-.028,-.1),this.object.position.set(this.position.x,-1,-2)}cancelAim(){Se({targets:this.object.rotation,easing:"easeInOutSine",x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,duration:50,delay:50}),Se({targets:this.object.position,easing:"easeInOutSine",x:this.position.x,y:this.position.y,z:this.position.z,duration:50,delay:50})}toggleVisibility(e,t,i=100){const{material:n}=this.object.children[0];Se({targets:n,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>Se({targets:n,easing:"linear",opacity:1,duration:i}),t)}addAmmo(e=xe.Rifle.magazine){if(e){this.playSound("pick",{stop:!1});const t=Math.min(this.inStock+e,this.maxStock);this.totalAmmo=t+ +!this.empty*this.loadedAmmo}else{const t=Math.min(Math.min(this.magazine-this.loadedAmmo,this.magazine),this.totalAmmo);this.loadedAmmo+=t,Q.dispatch("Weapon::Reload",{loaded:this.loadedAmmo,inStock:this.inStock,ammo:this.totalAmmo})}}getDamage(e){const{head:t,body:i,leg:n}=this.damage;return e?e===1?i:n:t}startReloading(){this.object.position.set(this.position.x,this.position.y,0),this.object.rotation.set(this.rotation.x,this.rotation.y,0),this.playSound("reload",{stop:!0})}stopReloading(){!this.aiming&&this.reset()}update(e){if(!this.spawned)return;this.clone.rotation.y-=.025;const t=this.clone.position.distanceToSquared(e);this.inStock<this.maxStock&&t<6.25&&(Q.dispatch("Player::PickRifle",this.clone),Q.dispatch("Rifle::Pick",null,!0),this.clone.visible=!1,this.spawned=!1)}spawn(e){this.clone.position.set(e[0],1.75,e[1]),Q.dispatch("Rifle::Spawn",e,!0),this.clone.visible=!0,this.spawned=!0}updatePosition(e){this.appended&&Se({targets:this.spine.position,duration:+!e*100,x:e*10-10,easing:"linear"})}append(e){this.spine.position.copy(this.spinePosition),this.spine.rotation.copy(this.spineRotation),this.appended=!0,this.updatePosition(e)}reset(){this.object.position.copy(this.position),this.object.rotation.copy(this.rotation),this.appended=!1}dispose(){this.clone.clear(),super.dispose()}set toggle(e){this.spine.visible=!e,this.visible=e}get onStage(){return this.spawned}get dummy(){return this.spine}}class PE{constructor(e,t,i){this.worker=i,this.enemyKills=0,this.clock=new Xl,this.player=new Sl,this.loop=this.update.bind(this),this.controls=new ji(this.player),this.onSceneLoad=this.onLoad.bind(this),this.onPlayerHit=this.playerHit.bind(this),this.level=new ke(e,t,i),Q.dispatch("Game::LoopInit",null,!0),this.addEventListeners()}addEventListeners(){Q.add("Level::EnvMap",this.onSceneLoad),Q.add("Enemy::Attack",this.onPlayerHit),this.worker?.add("Level::GetRandomCoord",e=>{bl.addLevelCoords(e.data)?Q.dispatch("Loading::Complete",null,!0):this.worker?.post("Level::GetRandomCoord")},{minCoords:ke.minCoords,maxCoords:ke.maxCoords,portals:ke.portals,bounds:ke.bounds}),Q.add("Enemy::Active",e=>{!e.data&&this.onEnemyKill(),this.player.setTargets(this.enemies.colliders)}),Q.add("Player::PickRifle",()=>this.player.pickRifle()),Q.add("Player::Death",e=>this.enemies.playerDead=e.data)}async onLoad(e){const t=e.data;this.player.loadCharacter(t).then(()=>{ut.setCharacter(this.player.collider),this.player.setPistol(this.level.walls,this.pistol),this.enemies=new Hg(t),this.player.addRifle(this.rifle),this.createRandomCoords(),Zt.add(this.loop)}),this.pistol=new nu(t),this.rifle=new Wg(t)}start(){}playerHit(e){const{position:t,damage:i}=e.data,{position:n,rotation:s}=this.player.location,o=this.enemies.getHitDirection(t,n,s);this.player.hit(o,i)}createRandomCoords(){if(this.worker)return this.worker.post("Level::GetRandomCoord");bl.fillRandomLevelCoords(),Q.dispatch("Loading::Complete",null,!0)}onEnemyKill(){const{x:e,z:t}=this.player.location.position;this.enemies.spawnMultiple(e,t),!(++this.enemyKills%xe.Gameplay.rifleSpawn)&&this.spawnRifle(e,t)}spawnRifle(e,t){!this.rifle.onStage&&this.rifle.spawn(bl.getRandomLevelCoords(e,t))}update(){const e=Math.min(this.clock.getDelta(),.1),t=this.updateCharactersLocation(e);this.player.alive&&ut.update(e),this.rifle.update(t),this.level.render(e),Re.updateState()}updateCharactersLocation(e){this.player.update(e);const{location:t}=this.player,i=this.level.outOfBounds(t.position),n=this.enemies.update(e,t.position);return i&&this.player.teleport(i),Q.dispatch("Characters::Location",{player:t,enemies:n},!0),i??t.position}resize(e,t){this.level.resize(e,t),this.pistol.resize(t),this.rifle.resize(t),Re.resize()}removeEventListeners(){this.worker?.remove("Level::GetRandomCoord"),Q.remove("Player::PickRifle"),Q.remove("Player::Death"),Q.remove("Level::EnvMap"),Q.remove("Enemy::Active"),Q.remove("Enemy::Attack")}dispose(){this.removeEventListeners(),this.controls.dispose(),this.enemies.dispose(),this.player.dispose(),this.pistol.dispose(),this.rifle.dispose(),this.level.dispose(),ut.dispose(),Re.dispose(),Zt.dispose()}set inputs(e){this.controls.pause=e}set pause(e){this.level.pause=e,ut.pause=e,Zt.pause=e}}class IE{takeControl(e){const t=e.element;Q.add("Game::SettingsInit",()=>this.createMainLoop(t,e.pixelRatio)),this.resetDOMElements(),new dt}createMainLoop(e,t){this.loop=new PE(e,t),Q.remove("Game::SettingsInit")}resetDOMElements(){const e=self.DedicatedWorkerGlobalScope;self.HTMLCollection=e,self.SVGElement=e,self.NodeList=e,self.document=null,self.window=self}dispatch(e){tu.dispatchEvent(e)}resize(e){const{width:t,height:i}=e;this.loop.resize(t,i)}dispose(){this.loop.dispose()}start(){this.loop.start()}set inputs(e){this.loop.inputs=e}set pause(e){this.loop.pause=e}}const Es=new IE,LE=(r,e)=>{switch(r){case"EventsTarget::Dispatch":return Es.dispatch(e);case"Rain::UpdateParticles":return Dg(e);case"Level::GetRandomCoord":return Vg(e);case"Offscreen::Transfer":return Es.takeControl(e);case"Game::Resize":return Es.resize(e);case"Game::Inputs":{const{disabled:t}=e;return Es.inputs=t}case"Game::Pause":{const{paused:t}=e;return Es.pause=t}case"Game::Dispose":return Es.dispose();case"Game::Start":return Es.start()}return e};self.onmessage=r=>{const{event:e,params:t}=r.data,i=LE(e,t);self.postMessage({name:e,response:i})};self.onerror=r=>console.error(r);const DE=self;class Xp{constructor(e){this.worker=e}add(e,t){this.worker.add(e,t)}static dispatch(e,t=null){DE.postMessage({name:e,response:t})}remove(e){this.worker.remove(e)}dispose(){this.worker.clear()}}class FE extends CustomEvent{constructor(){super(...arguments),this.data=null}}class UE extends KS{createWorkerEvents(e){this.workerEvents=new Xp(e)}add(e,t,i=!1){xe.offscreen&&i?this.workerEvents?.add(e,t):super.add(e,t)}dispatch(e,t=null,i=!1){xe.worker&&i?Xp.dispatch(e,t):super.dispatch(e,t)}remove(e,t=!1){xe.offscreen&&t?this.workerEvents?.remove(e):super.remove(e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}const Q=new UE;var Go=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++r%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";r=h}var n=(performance||Date).now(),s=n,o=0,a=t(new Go.Panel("FPS","#0ff","#002")),l=t(new Go.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Go.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){n=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-n,200),h>=s+1e3&&(a.update(o*1e3/(h-s),100),s=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:i}};Go.Panel=function(r,e,t){var i=1/0,n=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,h=2*o,u=3*o,d=15*o,f=74*o,m=30*o,y=document.createElement("canvas");y.width=a,y.height=l,y.style.cssText="width:80px;height:48px";var g=y.getContext("2d");return g.font="bold "+9*o+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=t,g.fillRect(0,0,a,l),g.fillStyle=e,g.fillText(r,c,h),g.fillRect(u,d,f,m),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(u,d,f,m),{dom:y,update:function(p,_){i=Math.min(i,p),n=Math.max(n,p),g.fillStyle=t,g.globalAlpha=1,g.fillRect(0,0,a,d),g.fillStyle=e,g.fillText(s(p)+" "+r+" ("+s(i)+"-"+s(n)+")",c,h),g.drawImage(y,u+o,d,f-o,m,u,d,f-o,m),g.fillRect(u+f-o,d,o,m),g.fillStyle=t,g.globalAlpha=.9,g.fillRect(u+f-o,d,o,s((1-p/_)*m))}}};const NE=Go;class Ku{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new Ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class BE{constructor(){this.lockChange=this.onLockChange.bind(this),this.lockError=this.onLockError.bind(this),document.addEventListener("pointerlockchange",this.lockChange,!1),document.addEventListener("pointerlockerror",this.lockError,!1)}onLockChange(e){e.stopPropagation(),e.preventDefault(),!this.locked&&Q.dispatch("Game::Pause")}onLockError(e){e.stopPropagation(),e.preventDefault(),console.error(e)}requestPointerLock(){document.documentElement.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}dispose(){document.removeEventListener("pointerlockchange",this.lockChange,!1),document.removeEventListener("pointerlockerror",this.lockError,!1)}get locked(){return!!document.pointerLockElement}}const jp=96;class zE{constructor(){this.arenaBlocks=[],this.arenaWalls=[],this.paused=!0,this.finished=!1,this.elapsed=0,this.wave=1,this.kills=0,this.shots=0,this.nextWave=0,this.clock=new Xl,this.scene=new Sg,this.player=new Sl,this.envMap=new ri,this.pointer=new BE,this.listener=new YS,this.rifle=new Wg(this.envMap),this.update=this.render.bind(this),this.pistol=new nu(this.envMap),this.onResize=this.resize.bind(this),this.onKeyRelease=this.onKeyUp.bind(this),this.onPointerLock=this.requestPointerLock.bind(this),this.renderer=new eg({antialias:!0,alpha:!1}),this.createScene(),this.createCamera(),this.createLights(),this.createGround(),this.createCharacters(),this.createColliders(),this.createRenderer(),this.createControls(),this.addEvents()}createScene(){this.scene.background=new Fe("#8ca4ab"),this.scene.fog=new Ku("#8ca4ab",35,115)}createCamera(){this.camera=new ii(45,innerWidth/innerHeight,.1,jp),this.camera.position.set(2.5,1.7,30),Re.object.add(this.listener)}createLights(){const e=new s_("#ffddb0",1.6),t=new tg("#b8d2e5",.85);e.position.set(-25,40,20),e.shadow.camera.bottom=-50,e.shadow.camera.right=50,e.shadow.camera.left=-50,e.shadow.camera.top=50,e.shadow.camera.near=1,e.shadow.camera.far=110,e.shadow.mapSize.x=1024,e.shadow.mapSize.y=1024,e.castShadow=!0,this.scene.add(e),this.scene.add(t)}createGround(){const e=Hy(this.scene);this.arenaBlocks=e.blockers,this.arenaWalls=e.walls}createColliders(){const e=jp*.5,{position:t,height:i}=xe.Level;ut.createGround([-e,-e],[e,e]);for(const n of this.arenaBlocks)ut.addArenaObstacle(n.x,n.z,n.w,n.h,n.d);ut.createBounds({height:i,y:t.y,borders:[[-e,e],[e,e],[e,-e],[-e,-e]]})}createRenderer(){document.body.appendChild(this.renderer.domElement),this.renderer.outputColorSpace=Le,this.renderer.shadowMap.type=bu,this.renderer.setSize(innerWidth,innerHeight),this.renderer.setClearColor(St.PORTAL,1),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.25)),this.renderer.shadowMap.enabled=!0}createControls(){this.controls=new ji(this.player)}createStats(){document.body.lastElementChild?.id!=="stats"&&(this.stats=new NE,this.stats.showPanel(0),this.stats.dom.style.left="auto",this.stats.dom.style.right="0px",document.body.appendChild(this.stats.dom))}addEvents(){Hh.addResizeCallback(this.onResize),document.body.addEventListener("keyup",this.onKeyRelease),this.renderer.domElement.addEventListener("click",this.onPointerLock),Q.add("Enemy::Attack",this.onPlayerHit.bind(this)),Q.add("Player::Death",this.onPlayerDeath.bind(this)),Q.add("Level::AddObject",this.addGameObject.bind(this)),Q.add("Game::Pause",this.toggleControls.bind(this,!1)),Q.add("Player::Shoot",()=>{this.shots++}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.toggleControls(!1)}),Q.add("Level::RemoveObject",this.removeGameObject.bind(this)),Q.add("SFX::Character",this.playCharacter.bind(this)),Q.add("Enemy::Active",this.onEnemyActive.bind(this)),Q.add("Enemy::Spawn",this.onEnemySpawn.bind(this)),Q.add("SFX::Weapon",this.playWeapon.bind(this))}async loadSounds(e){return Promise.all(e.map(je.Loader.loadAudio.bind(je.Loader)))}async addCharacterSounds(e){const t=e instanceof Sl?e.collider:e,i=e instanceof Sl?xe.Player.sounds:xe.Enemy.sounds,n=Object.keys(i);(await this.loadSounds(Object.values(i))).forEach((o,a)=>{const l=new Ef(this.listener);let c=n[a]==="scream"?1:.5;c=n[a]==="death"?2.5:c,l.userData={name:n[a]},l.setVolume(c),l.setBuffer(o),t.add(l)})}async addWeaponSounds(e){const t=e instanceof nu?xe.Pistol.sounds:xe.Rifle.sounds,i=Object.keys(t);(await this.loadSounds(Object.values(t))).forEach((s,o)=>{const a=new Ef(this.listener);let l=i[o]==="bullet"?.25:2.5;l=i[o]==="shoot"?5:l,a.userData={name:i[o]},e.object.add(a),a.setVolume(l),a.setBuffer(s)})}async createCharacters(){this.enemies=new Hg(this.envMap),await this.player.loadCharacter(this.envMap),ut.setCharacter(this.player.collider),await this.addWeaponSounds(this.pistol),await this.addWeaponSounds(this.rifle),this.player.setPistol(this.arenaWalls,this.pistol),this.addCharacterSounds(this.player),this.player.addRifle(this.rifle),await this.enemies.ready,this.enemies.spawnWave(2),this.player.setTargets(this.enemies.colliders),ut.pause=!1,Zt.add(this.update),Zt.pause=!1,this.clock.getDelta(),this.paused=!0,document.getElementById("start").removeAttribute("disabled"),document.getElementById("load").textContent="獵場已準備好。",document.body.dataset.ready="true"}playCharacter(e){const{sfx:t,uuid:i,play:n}=e.data,o=(this.player.collider.uuid!==i?this.enemies.getEnemy(i).collider:this.player.collider).children.find(a=>a.userData.name===t);n?o&&!o.isPlaying&&o.play():o?.isPlaying&&o.stop()}onEnemySpawn(e){const t=e.data,i=this.scene.getObjectByProperty("uuid",t);this.addCharacterSounds(i)}playWeapon(e){const{sfx:t,pistol:i,play:n,delay:s}=e.data,a=(i?this.pistol.object:this.rifle.object).children.find(l=>l.userData.name===t);n?a&&!a.isPlaying&&a.play(s):a?.isPlaying&&a.stop()}onKeyUp(e){e.key==="f"&&this.rifle.addAmmo()}addGameObject(e){this.scene.add(e.data)}removeGameObject(e){this.scene.remove(e.data)}updateCharacters(e,t){this.player.update(t),this.enemies.update(t,e)}updateGameObjects(e){const t=Math.min(this.clock.getDelta(),.1);this.updateCharacters(e,t),ut.update(t),Re.updateState()}onPlayerDeath(e){this.enemies.playerDead=e.data,e.data&&this.end(!1)}onPlayerHit(e){const{position:t,damage:i}=e.data,{position:n,rotation:s}=this.player.location,o=this.enemies.getHitDirection(t,n,s);!this.paused&&!this.finished&&(this.player.hit(o,i),document.getElementById("damage").classList.add("flash"),setTimeout(()=>document.getElementById("damage").classList.remove("flash"),250))}toggleControls(e){this.controls&&(this.controls.pause=!e,this.paused=!e,this.clock.getDelta(),document.getElementById("pauseLayer").hidden=e||this.finished,this.player.stopShooting())}requestPointerLock(){this.controls&&(this.finished||(this.pointer.requestPointerLock(),this.toggleControls(!0),document.getElementById("intro").hidden=!0,document.body.dataset.started="true"))}onEnemyActive(e){e.data||(this.kills++,document.getElementById("hit").textContent="擊倒 +1",setTimeout(()=>document.getElementById("hit").textContent="",900)),this.player.setTargets(this.enemies.colliders)}removeEvents(){document.body.removeEventListener("click",this.onPointerLock),document.body.removeEventListener("keyup",this.onKeyRelease),Hh.removeResizeCallback(this.onResize),Q.remove("Level::RemoveObject"),Q.remove("Level::AddObject"),Q.remove("SFX::Character"),Q.remove("Player::Death"),Q.remove("Enemy::Attack"),Q.remove("Enemy::Active"),Q.remove("Enemy::Spawn"),Q.remove("SFX::Weapon"),Q.remove("Game::Pause")}resume(){this.requestPointerLock()}setQuality(e){this.renderer.setPixelRatio(e==="standard"?Math.min(devicePixelRatio,1.25):.75),this.renderer.shadowMap.enabled=e==="standard"}end(e){this.finished=!0,this.paused=!0,this.controls.pause=!0,this.player.stopShooting(),this.pointer.exitPointerLock(),document.getElementById("pauseLayer").hidden=!0,document.getElementById("outcome").hidden=!1,document.getElementById("resultTitle").textContent=e?"守住獵場了":"被恐龍追上了",document.getElementById("resultDetail").textContent=`擊倒 ${this.kills} 隻 · 存活 ${Math.floor(this.elapsed)} 秒 · 第 ${this.wave} 波`,document.body.dataset.result=e?"win":"lose"}updateHUD(){const e=this.player.healthValue;document.getElementById("health").textContent=String(Math.ceil(e)),document.getElementById("healthFill").style.width=e+"%",document.getElementById("wave").textContent=`${this.wave} / 3`,document.getElementById("kills").textContent=String(this.kills),document.getElementById("clock").textContent=`${Math.floor(this.elapsed/60)}:${String(Math.floor(this.elapsed%60)).padStart(2,"0")}`;const t=this.player.location.position;document.body.dataset.state=JSON.stringify({health:e,wave:this.wave,kills:this.kills,shots:this.shots,paused:this.paused,finished:this.finished,elapsed:this.elapsed,player:{x:t.x,y:t.y,z:t.z},motion:this.player.motionState,aimProbe:this.player.aimProbe,enemies:this.enemies?.positionsForHUD||[],camera:Re.object.matrixWorld.elements,cameraFov:Re.object.fov,cameraAspect:Re.object.aspect})}render(){this.stats?.begin();const e=Math.min(this.clock.getDelta(),.1);if(!this.paused&&!this.finished){this.elapsed+=e;const t=Math.max(1,Math.ceil(e/.025));for(let i=0;i<t;i++)ut.update(e/t),this.updateCharacters(this.player.location.position,e/t);Re.updateState(),this.enemies.aliveCount===0&&(this.wave===3?this.end(!0):this.nextWave?this.elapsed>=this.nextWave&&(this.wave++,this.nextWave=0,this.enemies.spawnWave(this.wave===2?5:7),this.player.setTargets(this.enemies.colliders)):this.nextWave=this.elapsed+3)}this.updateHUD(),this.orbit?(this.orbit.update(),this.renderer.render(this.scene,this.camera)):this.renderer.render(this.scene,Re.object),this.stats?.end()}resize(){this.rifle.resize(innerHeight),this.pistol.resize(innerHeight),this.renderer.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),!this.orbit&&Re.resize()}dispose(){for(Zt.remove(this.update),this.controls?.dispose(),this.renderer.dispose(),this.pointer.dispose(),this.enemies.dispose(),this.orbit?.dispose(),this.player.dispose(),this.pistol.dispose(),this.rifle.dispose(),this.removeEvents(),this.scene.clear(),ut.dispose(),Re.dispose(),Zt.dispose(),this.stats?.dom.remove(),this.renderer.domElement.remove(),Re.object.remove(this.listener);this.scene.children.length>0;)this.scene.remove(this.scene.children[0])}}let Ol;window.addEventListener("error",r=>{document.getElementById("load").textContent="載入失敗："+r.message,document.body.dataset.error=r.message});window.addEventListener("unhandledrejection",r=>{console.error(r.reason),document.getElementById("load").textContent="載入失敗："+String(r.reason),document.body.dataset.error=String(r.reason)});try{Ol=new zE,Ol.setQuality("performance")}catch(r){throw document.getElementById("load").textContent=String(r),r}for(const r of["start","resume"])document.getElementById(r).onclick=()=>Ol.resume();document.getElementById("retry").onclick=()=>location.reload();document.getElementById("pauseButton").onclick=()=>{document.exitPointerLock(),Q.dispatch("Game::Pause")};Q.add("Weapon::Aim",r=>document.getElementById("aim").classList.toggle("target",!!r.data));Q.add("Player::Health",()=>{document.getElementById("damage").classList.add("flash"),setTimeout(()=>document.getElementById("damage").classList.remove("flash"),250)});document.getElementById("quality").onchange=r=>Ol.setQuality(r.target.value);document.addEventListener("keydown",r=>{r.code==="Escape"&&document.body.dataset.started==="true"&&(document.exitPointerLock(),Q.dispatch("Game::Pause"))});
