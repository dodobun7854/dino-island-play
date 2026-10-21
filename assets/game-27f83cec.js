import{V as ie,B as Ft,S as ft,C as on,M as $e,P as Bs,a as yt,b as is,c as To,d as pu,E as Bd,R as kd,e as tt,f as fi,F as Kn,D as yi,I as Cl,g as Ro,h as wn,T as mr,i as nl,j as oa,k as Vd,l as Hd,m as Ws,n as mu,o as gu,p as Ll,q as Gd,G as Li,r as yo,O as Wd,s as Xd,Q as Co,A as Ze,t as jd,u as _u,L as lc,v as cc,w as qd,x as Yd,y as qn,z as hc,H as Ls,J as ns,K as xu,N as nn,U as $d,W as si,X as os,Y as uc,Z as Kd,_ as Pl,$ as sl,a0 as vu,a1 as Zd,a2 as Jd,a3 as Qd,a4 as aa,a5 as ef,a6 as tf,a7 as nf,a8 as sf}from"./CreatureMotion-9aa01bd0.js";const er=new ie;function ai(s,e,t,i,n,r){const o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;er.copy(e),er[i]=0,er.normalize();const c=.5*o/(o+a),h=1-er.angleTo(s)/l;return Math.sign(er[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Xs extends Ft{constructor(e=1,t=1,i=1,n=2,r=.1){if(n=n*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,n,n,n),n===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new ie,l=new ie,c=new ie(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new ie,g=.5/n;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),d[f+0]=ai(_,l,"z","y",r,i),d[f+1]=1-ai(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[f+0]=1-ai(_,l,"z","y",r,i),d[f+1]=1-ai(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[f+0]=1-ai(_,l,"x","z",r,e),d[f+1]=ai(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),d[f+0]=1-ai(_,l,"x","z",r,e),d[f+1]=1-ai(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),d[f+0]=1-ai(_,l,"x","y",r,e),d[f+1]=1-ai(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[f+0]=ai(_,l,"x","y",r,e),d[f+1]=1-ai(_,l,"y","x",r,t);break}}}const we=Object.freeze({console:{x:-18,z:-1},reward:{x:-15.2,z:-1},uploadSeconds:8,breachSeconds:12,deck:{x:-23,z:4,w:6,d:6,h:2.8},ramp:{x:-23,z:12,w:3.6,d:10,h:2.8},service:{id:"service",x:-9,z:-1,w:.5,d:8,h:3.6},paddock:{id:"paddock",x:15.5,z:-35,w:.6,d:9.2,h:5.2},panels:[{x:-6.1,z:-1},{x:-11.7,z:-1}],fastRoute:[{x:0,z:14},{x:-4.8,z:8},{x:-4.8,z:-1},{x:-18,z:-1}],quietRoute:[{x:-21,z:21},{x:-29,z:17},{x:-29,z:-2},{x:-18,z:-1}]}),tr=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z);class rf{constructor(e,t={}){this.blocks=e,this.hooks=t,this.phase="idle",this.progress=0,this.activatedAt=null,this.claimedBy=null,this.lastPulse=-1/0,this.breached=!1,this.doors=Object.fromEntries(["service","paddock"].map(i=>{const n=we[i],r={...n,dynamic:!0};return e.push(r),[i,{id:i,closed:!0,broken:!1,motion:null,travel:0,cooldown:0,pressure:0,block:r}]}))}occupied(e,t){const i=e.block;return t.some(n=>n.hp>0&&Math.abs(n.x-i.x)<i.w/2+.9&&Math.abs(n.z-i.z)<i.d/2+.9)}topology(e,t){e.closed=t;const i=this.blocks.indexOf(e.block);t&&i<0?this.blocks.push(e.block):!t&&i>=0&&this.blocks.splice(i,1),this.hooks.topology?.(e.id,t)}interaction(e){if((e.y||0)>1.6)return null;const t=this.doors.service;return we.panels.some(i=>tr(i,e)<2.65)?{id:"service",type:"facility",label:t.broken?"防護閘已被暴龍撞毀":t.motion?"防護閘移動中…":t.cooldown>0?`控制器復位 · ${t.cooldown.toFixed(1)}s`:t.closed?"開啟防護閘 · 正門捷徑":"關閉防護閘 · 阻擋追兵",enabled:!t.broken&&!t.motion&&t.cooldown<=0}:this.phase==="ready"&&tr(e,we.reward)<2.65?{id:"research-reward",type:"research",label:"緊急補給 · 衝鋒槍／急救／誘餌",enabled:!0}:tr(e,we.console)<2.65?{id:"research-console",type:"facility",label:this.phase==="idle"?"啟動緊急補給 · 會觸發警報":this.phase==="uploading"?`補給傳輸中 · ${Math.ceil(we.uploadSeconds-this.progress)} 秒`:this.phase==="ready"?"補給已解鎖，前往金色補給箱":"補給已被領取",enabled:this.phase==="idle"}:null}interact(e,t,i){const n=this.interaction(e);if(!n)return null;if(!n.enabled)return{...n,denied:!0};if(n.id==="service"){const r=this.doors.service;if(!r.closed&&this.occupied(r,t))return this.hooks.notice?.("閘門通道有人，先離開門下再關閉。","neutral"),{...n,denied:!0};this.hooks.noise?.(we.service.x,we.service.z,10,-3),r.motion=r.closed?"opening":"closing",r.travel=0,r.cooldown=2.5,this.hooks.event?.({type:"facility",sound:"gate",position:we.service})}else if(n.id==="research-console")this.phase="uploading",this.activatedAt=i,this.lastPulse=-1/0,this.hooks.notice?.("研究站警報已啟動！8 秒解鎖補給；12 秒後圍欄失守。","danger"),this.pulse(i);else if(n.id==="research-reward")return this.claim(-1);return n}pulse(e){this.lastPulse=e,this.hooks.noise?.(we.console.x,we.console.z,60,-3),this.hooks.event?.({type:"facility",sound:"alarm",position:we.console})}claim(e){return this.phase!=="ready"?null:(this.phase="claimed",this.claimedBy=e,this.hooks.event?.({type:"researchReward",actorId:e,position:we.reward}),this.hooks.notice?.(e===-1?"取得緊急補給：衝鋒槍彈藥、急救與兩份誘餌。":"對手奪走了研究站補給！","good"),{id:"research-reward",type:"research",label:"研究站緊急補給"})}breakDoor(e){const t=this.doors[e];t.broken||(t.broken=!0,t.motion=null,t.travel=0,t.pressure=0,this.topology(t,!1),this.hooks.event?.({type:"facilityBreak",id:e,position:we[e]}))}openPaddock(){this.breached||(this.breached=!0,this.breakDoor("paddock"))}update(e,t){const i=[t.player,...t.activeActors];for(const a of Object.values(this.doors))if(a.cooldown=Math.max(0,a.cooldown-e),a.motion&&(a.travel+=e/.65,a.travel>=1)){const l=a.motion==="closing";a.motion=null,a.travel=0,l&&this.occupied(a,i)?this.hooks.notice?.("通道被占用，防護閘保持開啟。","neutral"):this.topology(a,l)}this.activatedAt!==null&&(this.phase==="uploading"&&(this.progress=Math.min(we.uploadSeconds,this.progress+e),t.elapsed-this.lastPulse>=2.5&&this.pulse(t.elapsed),this.progress>=we.uploadSeconds&&(this.phase="ready",this.hooks.notice?.("研究站補給已解鎖！金色箱子可按 E 領取。","good"),this.hooks.event?.({type:"facility",sound:"uplink",position:we.reward}))),!this.breached&&t.elapsed-this.activatedAt>=we.breachSeconds&&this.hooks.breach?.());const n=this.doors.service,r=t.actors[7];!(t.lure&&tr(r,t.lure)<65)&&!n.broken&&n.closed&&!n.motion&&r.hp>0&&r.active!==!1&&tr(r,we.service)<7.5&&t.player.x<we.service.x?(n.pressure===0&&this.hooks.event?.({type:"barricadeWarning",actor:r,position:we.service}),n.pressure+=e,r.heading=Math.atan2(we.service.x-r.x,we.service.z-r.z),r.state="alert",r.speed=0,n.pressure>=1.8&&(this.breakDoor("service"),this.hooks.notice?.("防護閘被撞毀！利用西側步道撤離。","danger"))):n.pressure=0}snapshot(e){return{phase:this.phase,progress:this.progress,uploadSeconds:we.uploadSeconds,activatedAt:this.activatedAt,claimedBy:this.claimedBy,breached:this.breached,breachIn:this.activatedAt!==null&&!this.breached?Math.max(0,we.breachSeconds-(e-this.activatedAt)):null,console:{...we.console},reward:{...we.reward},deck:{...we.deck},doors:Object.fromEntries(Object.entries(this.doors).map(([t,i])=>[t,{closed:i.closed,broken:i.broken,motion:i.motion,travel:i.travel,pressure:i.pressure}]))}}}const Zn={limit:43,buildings:[{x:-18,z:-13,w:12,d:10,h:4.1,type:"research"},{x:23,z:-21,w:12,d:11,h:4.5,type:"garage"},{x:-29,z:24,w:7,d:7,h:7,type:"tower"}],covers:[{x:-7,z:9,w:4,d:1.6,h:1.45},{x:8,z:1,w:3.5,d:1.8,h:1.5},{x:15,z:15,w:1.8,d:4,h:1.5},{x:3,z:-15,w:4,d:1.8,h:1.5},{x:28,z:1,w:3.5,d:1.8,h:1.5},{x:-10,z:-28,w:4,d:1.8,h:1.5}],loot:[{id:"arrival",x:0,z:17,type:"weapon",label:"消音衝鋒槍＋彈藥"},{id:"garden",x:-18,z:8,type:"bait",label:"誘餌補給＋手槍彈藥"},{id:"clinic",x:-17,z:-5,type:"med",label:"急救包＋彈藥"},{id:"garage",x:21,z:-12,type:"weapon",label:"消音衝鋒槍＋彈藥"},{id:"lookout",x:-25,z:17,type:"med",label:"急救包＋誘餌"},{id:"east",x:21,z:12,type:"bait",label:"誘餌補給＋手槍彈藥"}]},Ue=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),Sr=(s,e,t)=>Math.max(e,Math.min(t,s));function Di(s,e,t,i=0,n=!1){for(const r of t){let o=0,a=1;for(const l of["x","z"]){const c=(l==="x"?r.w:r.d)/2+i,h=e[l]-s[l];if(Math.abs(h)<1e-7){if(Math.abs(s[l]-r[l])>c){o=2;break}}else{const u=(r[l]-c-s[l])/h,d=(r[l]+c-s[l])/h;o=Math.max(o,Math.min(u,d)),a=Math.min(a,Math.max(u,d))}}if(o<=a&&a>.01&&o<.99){if(!n)return!1;const l=(s.y||0)+(ft[s.kind]?.headY||1.4),c=(e.y||0)+(ft[e.kind]?.headY||1.4),h=l+(c-l)*Sr(o,0,1),u=l+(c-l)*Sr(a,0,1);if(Math.min(h,u)<of(r)&&Math.max(h,u)>0)return!1}}return!0}const of=s=>s.h??100,un=(s,e,t)=>Di(s,e,t,0,!0),ir=(s,e)=>Math.abs((s.y||0)-(e.y||0))<(s.kind==="rex"?6:1.8);class dn{constructor(e,t=.7){this.blocks=e,this.clearance=t,this.step=2,this.size=43,this.cells=Array.from({length:this.size*this.size},(i,n)=>this.free(this.point(n),t))}free(e,t=.65){return Math.abs(e.x)<Zn.limit-t&&Math.abs(e.z)<Zn.limit-t&&!this.blocks.some(i=>Math.abs(e.x-i.x)<i.w/2+t&&Math.abs(e.z-i.z)<i.d/2+t)}point(e){return{x:e%this.size*2-42,z:Math.floor(e/this.size)*2-42}}index(e){return Sr(Math.round((e.z+42)/2),0,42)*43+Sr(Math.round((e.x+42)/2),0,42)}nearest(e,t=!1){let i=-1,n=1/0;for(let r=0;r<this.cells.length;r++)if(this.cells[r]){const o=this.point(r),a=Ue(e,o);a<n&&(!t||Di(e,o,this.blocks,this.clearance-.1))&&(i=r,n=a)}return i}path(e,t){if(this.free(t,this.clearance)&&Di(e,t,this.blocks,this.clearance))return[t];const i=this.nearest(e,!0),n=this.nearest(t);if(i<0||n<0)return[];const r=[i],o=new Map,a=new Map([[i,0]]),l=new Set;for(;r.length;){r.sort((d,p)=>a.get(d)+Ue(this.point(d),this.point(n))-(a.get(p)+Ue(this.point(p),this.point(n))));const c=r.shift();if(c===n){const d=[];let p=n;for(;p!==i;)d.unshift(this.point(p)),p=o.get(p);return Ue(e,this.point(i))>.1&&d.unshift(this.point(i)),d}l.add(c);const h=c%43,u=Math.floor(c/43);for(const[d,p]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const _=h+d,g=u+p;if(_<0||_>=43||g<0||g>=43)continue;const m=g*43+_;if(!this.cells[m]||l.has(m)||d&&p&&(!this.cells[u*43+_]||!this.cells[g*43+h]))continue;const f=a.get(c)+Math.hypot(d,p)*2;f<(a.get(m)??1/0)&&(o.set(m,c),a.set(m,f),r.includes(m)||r.push(m))}}return[]}move(e,t,i,n){e.repath=(e.repath||0)-n,(!e.route?.length||Ue(e.destination||t,t)>3||e.repath<=0&&Ue(e.destination||t,t)>.6)&&(e.route=this.path(e,t),e.destination={x:t.x,z:t.z},e.repath=.8);const r={rex:1.25,trike:1.6,brachio:.65}[e.kind];let o=1;if(e.turning=!1,r&&e.route.length){for(;e.route.length&&Ue(e,e.route[0])<.15;)e.route.shift();if(e.route.length){const l=e.route[0],c=Math.atan2(l.x-e.x,l.z-e.z),h=Number.isFinite(e.heading)?e.heading:c,u=Math.atan2(Math.sin(c-h),Math.cos(c-h));e.heading=h+Sr(u,-r*n,r*n),e.turning=Math.abs(u)>.12,o=Math.abs(u)>1?0:Math.max(.2,Math.cos(u)**2)}}let a=i*n*o;for(e.speed=0;a>0&&e.route.length;){const l=e.route[0],c=Ue(e,l);if(c<.15){e.route.shift();continue}const h=Math.min(a,c),u=e.x+(l.x-e.x)/c*h,d=e.z+(l.z-e.z)/c*h;if(!this.free({x:u,z:d},this.clearance-.1)){e.route=[];break}r||(e.heading=Math.atan2(l.x-e.x,l.z-e.z)),e.x=u,e.z=d,e.speed+=h/Math.max(n,.001),a-=h}}}class af{constructor(e=[],t=()=>{}){this.blocks=[...e],e=this.blocks,this.emit=t,this.research=new rf(e,{notice:(n,r)=>this.announce(n,r),event:n=>this.emit(n),noise:(...n)=>this.noise(...n),breach:()=>this.awakenRex(),topology:(n,r)=>{this.rebuildNavigation(),this.emit({type:"topology",id:n,closed:r})}}),this.nav=new dn(e),this.rexNav=new dn(e,ft.rex.clearance),this.trikeNav=new dn(e,ft.trike.clearance),this.brachioNav=new dn(e,ft.brachio.clearance),this.emit=t,this.elapsed=0,this.heat=0,this.totalNoise=0,this.health=100,this.kills=0,this.dinoKills=0,this.damageDealt=0,this.lures=2,this.lureCooldown=0,this.result=null,this.started=!1,this.rexAwake=!1,this.radius=59,this.events=[],this.player={id:-1,kind:"player",x:0,y:0,z:22,hp:100},this.lure=null,this.noises=[],this.loot=Zn.loot.map(n=>({...n,opened:!1}));const i=(n,r,o,a,l)=>({id:n,kind:r,x:o,z:a,name:l,hp:ft[r]?.hp||100,maxHp:ft[r]?.hp||100,heading:Math.PI,speed:0,velocity:0,state:"patrol",cooldown:n*.3,windup:0,targetId:null,goal:{x:o,z:a},home:{x:o,z:a},wander:n,route:[],repath:0,hurt:0,attackCount:0,stepDistance:0,burstUntil:0,burstCooldown:0,alertTime:0,growlCooldown:0,agitatedUntil:0});this.actors=[i(0,"human",10,5,"琥珀"),i(1,"human",-17,-25,"苔蘚"),i(2,"human",24,-5,"赤岩"),i(3,"human",-6,-27,"霧灰"),i(4,"raptor",-37,-32,"迅猛龍"),i(5,"raptor",32,23,"迅猛龍"),i(6,"raptor",-32,9,"迅猛龍"),i(7,"rex",33,-35,"暴龍")],this.actors[7].active=!1,this.actors.push(i(8,"trike",27,24,"三角龍"),i(9,"brachio",0,-12,"腕龍")),this.actors[9].heading=.9;for(const n of this.actors){const r=this.navigation(n);r.free(n,r.clearance)||Object.assign(n,r.point(r.nearest(n))),n.home={x:n.x,z:n.z}}}announce(e,t="neutral"){this.events.unshift({text:e,tone:t,time:this.elapsed}),this.events=this.events.slice(0,5),this.emit({type:"notice",text:e,tone:t})}start(){this.started||(this.started=!0,this.announce("先搜前方藍色補給箱。按 E 取得消音衝鋒槍。","good"))}get remaining(){return this.actors.filter(e=>e.kind==="human"&&e.hp>0).length}get activeActors(){return this.actors.filter(e=>e.hp>0&&e.active!==!1)}noise(e,t,i,n=-1){this.noises.push({x:e,z:t,radius:i,source:n,until:this.elapsed+9}),this.totalNoise++,this.heat=Math.min(100,this.heat+(n===-1?i*.52:n===-3?0:i*.12)),this.emit({type:"noise",x:e,z:t,radius:i,source:n})}throwLure(e,t){if(!this.started||this.result||this.lures<=0||this.lureCooldown>0)return!1;const i=Math.hypot(e,t)||1;let n={...this.player};for(let r=1;r<=18;r+=.5){const o={x:this.player.x+e/i*r,z:this.player.z+t/i*r};if(this.player.y>1){const a=r/18,l=(1-a)*(this.player.y+1.3)+a*.3+Math.sin(a*Math.PI)*3;if(this.blocks.some(c=>Math.abs(o.x-c.x)<c.w/2+.1&&Math.abs(o.z-c.z)<c.d/2+.1&&l<c.h))break;this.nav.free(o,.3)&&(n=o)}else{if(!this.nav.free(o,.3)||!Di(this.player,o,this.blocks,.1))break;n=o}}return this.lure={x:n.x,z:n.z,until:this.elapsed+13,from:{x:this.player.x,y:this.player.y,z:this.player.z},born:this.elapsed},this.lures--,this.lureCooldown=5,this.announce("誘餌已投出，附近獵食者正轉向聲源。","good"),this.emit({type:"lure",...this.lure}),!0}get nearbyLoot(){return this.loot.filter(e=>!e.opened&&Ue(e,this.player)<2.7).sort((e,t)=>Ue(e,this.player)-Ue(t,this.player))[0]}interact(){if(!this.started||this.result)return null;const e=this.research.interact(this.player,[this.player,...this.activeActors],this.elapsed);if(e)return e.type==="research"&&!e.denied&&(this.health=Math.min(100,this.health+30),this.lures=Math.min(5,this.lures+2)),e;const t=this.nearbyLoot;return t?(t.opened=!0,t.type==="med"&&(this.health=Math.min(100,this.health+45)),(t.type==="bait"||t.id==="lookout")&&(this.lures=Math.min(5,this.lures+2)),this.announce("取得 "+t.label,"good"),this.emit({type:"loot",loot:t}),t):null}hit(e,t,i=!1,n=-1){if(this.result)return;const r=e===-1?this.player:this.actors.find(o=>o.id===e);if(!(!r||r.hp<=0)){if(e===-1){this.health=Math.max(0,this.health-t),this.player.hp=this.health,this.emit({type:"playerHit",damage:t,source:n}),this.health<=0&&this.finish(!1);return}if(n===-1&&(this.damageDealt+=Math.min(t,r.hp)),ft[r.kind]&&(r.agitatedUntil=this.elapsed+18,r.aggressor=n),r.hp=Math.max(0,r.hp-t),r.hurt=.16,this.emit({type:"hit",target:r,damage:t,head:i,source:n}),r.hp<=0){r.state="dead",r.speed=0,this.emit({type:"death",target:r,source:n}),n===-1&&(r.kind==="human"?this.kills++:this.dinoKills++);const o=n===-1?"你":this.actors.find(a=>a.id===n)?.name||"禁區";this.announce(`${o} 擊倒 ${r.name}`,n===-1?"good":"neutral"),r.kind==="human"&&(this.loot.push({id:"drop-"+e,x:r.x,z:r.z,type:"ammo",label:"彈藥＋急救補給",opened:!1}),this.remaining||this.finish(!0))}}}finish(e){this.result||(this.result=e?"win":"lose",this.emit({type:"end",won:e}))}rebuildNavigation(){this.nav=new dn(this.blocks),this.rexNav=new dn(this.blocks,ft.rex.clearance),this.trikeNav=new dn(this.blocks,ft.trike.clearance),this.brachioNav=new dn(this.blocks,ft.brachio.clearance);for(const e of this.actors||[])e.route=[],e.repath=0}awakenRex(){this.rexAwake||(this.research.openPaddock(),this.rexAwake=!0,this.actors[7].active=!0,this.actors[7].state="investigate",this.announce("圍欄失守！巨型暴龍進入園區。","danger"),this.emit({type:"roar",actor:this.actors[7]}))}update(e,t){if(!(!this.started||this.result)){e=Math.min(e,.1),this.elapsed+=e,this.player.x=t.x,this.player.z=t.z,this.player.y=Math.max(0,t.y||0),this.player.hp=this.health,this.research.update(e,this),this.heat=Math.max(0,this.heat-e*1.3),this.lureCooldown=Math.max(0,this.lureCooldown-e),this.noises=this.noises.filter(i=>i.until>this.elapsed),this.lure&&this.elapsed>this.lure.until&&(this.lure=null),!this.rexAwake&&(this.elapsed>=70||this.heat>=85)&&this.awakenRex(),this.radius=this.elapsed<55?59:Math.max(8,59-(this.elapsed-55)*.3),Math.hypot(t.x,t.z)>this.radius&&this.hit(-1,e*7,!1,-2);for(const i of this.activeActors){if(this.result)break;if(i.hp<=0)continue;const n={x:i.x,z:i.z};if(i.hurt=Math.max(0,i.hurt-e),i.cooldown=Math.max(0,i.cooldown-e),i.speed=0,!(i.kind==="rex"&&this.research.doors.service.pressure>0)){if(i.kind==="human"?this.human(i,e):i.kind==="trike"?this.triceratops(i,e):i.kind==="brachio"?this.brachiosaurus(i,e):this.dinosaur(i,e),ft[i.kind]&&i.hp>0){i.stepDistance+=Ue(n,i);const r=ft[i.kind].stride;i.stepDistance>=r&&(i.stepDistance%=r,this.emit({type:"footstep",actor:i}))}i.kind==="human"&&Math.hypot(i.x,i.z)>this.radius&&this.hit(i.id,e*7,!1,-2)}}}}human(e,t){this.research.phase==="ready"&&Ue(e,we.reward)<2&&(this.research.claim(e.id),e.hp=Math.min(e.maxHp,e.hp+30),e.weapon="rifle");const i=this.activeActors.filter(l=>l.kind==="raptor"||l.kind==="rex"||l.kind==="trike"&&l.state==="charge"),n=i.filter(l=>Ue(e,l)<10&&un(e,l,this.blocks)).sort((l,c)=>Ue(e,l)-Ue(e,c))[0];if(n){if(e.windup=0,e.coverGoal=null,e.targetId=null,e.state="evade",!e.evadeGoal||e.evadeUntil<this.elapsed||!this.nav.free(e.evadeGoal)||Ue(e,e.evadeGoal)<1){const l=Math.atan2(e.x-n.x,e.z-n.z),c=[];for(let u=0;u<12;u++){const d=l+u*Math.PI/6,p={x:e.x+Math.sin(d)*13,z:e.z+Math.cos(d)*13};this.nav.free(p)&&Math.hypot(p.x,p.z)<this.radius-2&&c.push(p)}const h=u=>Math.min(35,...i.map(d=>Ue(d,u)))*2+(Di(n,u,this.blocks)?0:5)-Ue(e,u)*.1;e.evadeGoal=c.sort((u,d)=>h(d)-h(u)).find(u=>this.nav.path(e,u).length)||{x:e.x,z:e.z},e.evadeUntil=this.elapsed+1.5}this.nav.move(e,e.evadeGoal,6.3,t);return}if(e.coverGoal&&e.coverUntil>this.elapsed){e.state="cover",this.nav.move(e,e.coverGoal,3.3,t);return}const a=[...this.activeActors.filter(l=>l.id!==e.id&&l.kind!=="brachio"),...this.elapsed>18?[this.player]:[]].filter(l=>Ue(e,l)<(l.kind==="player"?32:24)&&un(e,l,this.blocks)).sort((l,c)=>Ue(l,e)-Ue(c,e))[0];if(e.windup>0){if(e.windup-=t,e.state="aim",e.windup<=0){const l=e.shotTarget,c=e.shotPoint;this.noise(e.x,e.z,e.weapon==="rifle"?23:39,e.id),e.attackCount++;const h=l.hp>0&&Ue(l,c)<1.7&&Math.abs((l.y||0)-(c.y||0))<1.4&&un(e,l,this.blocks);this.emit({type:"shot",actor:e,point:c,hit:h}),h&&this.hit(l.id,l.kind==="player"?7:19,!1,e.id),e.cooldown=2.2+e.id%2*.3,e.coverUntil=this.elapsed+1.1,e.coverGoal=this.blocks.filter(u=>u.w>=2&&u.w<=8&&u.h>=1.2).map(u=>{const d=u.x-l.x,p=u.z-l.z,_=Math.hypot(d,p)||1,g=Math.max(u.w,u.d)/2+1.3;return{x:u.x+d/_*g,z:u.z+p/_*g}}).filter(u=>Ue(e,u)<11&&this.nav.free(u)&&!Di(u,l,this.blocks)).sort((u,d)=>Ue(e,u)-Ue(e,d))[0]}return}if(a){if(e.targetId=a.id,e.heading=Math.atan2(a.x-e.x,a.z-e.z),e.cooldown<=0){e.windup=1.05,e.shotTarget=a,e.shotPoint={x:a.x,y:a.y||0,z:a.z},e.state="aim";return}const l=Math.atan2(e.x-a.x,e.z-a.z)+(e.id%2?1:-1)*.6,c={x:a.x+Math.sin(l)*17,z:a.z+Math.cos(l)*17};e.state="flank",this.nav.free(c)&&this.nav.move(e,c,2.6,t)}else{e.targetId=null,e.state="search";const c=["uploading","ready"].includes(this.research.phase)&&(e.id===1||e.id===3)?we.reward:this.elapsed<20?this.loot.filter(h=>!h.opened&&h.id!=="arrival").sort((h,u)=>Ue(h,e)-Ue(u,e))[0]:this.player;c&&this.nav.move(e,c,2.2,t),c?.id&&Ue(c,e)<2&&this.elapsed>5&&(c.opened=!0,c.type==="med"&&(e.hp=Math.min(e.maxHp,e.hp+35)),c.type==="weapon"&&(e.weapon="rifle"),this.announce(e.name+" 取得園區補給"))}}dinosaur(e,t){const i=e.kind==="rex",n=ft[e.kind],o=[this.player,...this.activeActors.filter(h=>h.kind==="human")].filter(h=>h.hp>0).sort((h,u)=>Ue(h,e)-Ue(u,e))[0];let a=null,l=null;if(this.lure&&Ue(e,this.lure)<(i?65:44))a=this.lure,e.state="lure";else if(o&&Ue(e,o)<n.notice&&un(e,o,this.blocks))a=l=o,e.state="hunt";else if(i&&this.research.activatedAt!==null&&this.elapsed<this.research.activatedAt+45)a=we.console,e.state="investigate";else{const h=this.noises.filter(u=>u.source!==e.id&&Ue(e,u)<u.radius*(Di(e,u,this.blocks)?1:.6)).at(-1);h&&(a=h,e.state="investigate")}const c=e.targetId;if(e.targetId=l?.id??null,e.growlCooldown=Math.max(0,e.growlCooldown-t),e.burstCooldown=Math.max(0,e.burstCooldown-t),e.windup>0&&a===this.lure&&(e.windup=0,e.cooldown=.4),a===this.lure&&(e.alertTime=0),l&&c!==l.id&&e.growlCooldown<=0&&(e.alertTime=i?.85:.4,e.growlCooldown=10,this.emit({type:"threat",actor:e,target:l.id})),e.alertTime>0){e.alertTime=Math.max(0,e.alertTime-t),e.state="alert",e.velocity=0;return}if(e.windup>0){if(e.windup-=t,e.state="pounce",e.windup<=0){const h=e.biteTarget;if(!i&&e.bitePoint){const u=e.bitePoint.x-e.x,d=e.bitePoint.z-e.z,p=Math.hypot(u,d)||1;this.forwardStep(e,{x:u/p,z:d/p},Math.min(2.2,p))}h.hp>0&&ir(e,h)&&Ue(e,h)<n.reach&&un(e,h,this.blocks)&&this.hit(h.id,n.damage,!1,e.id),e.cooldown=i?2.8:1.65,e.attackCount++,this.emit({type:"bite",actor:e})}return}if(l&&ir(e,l)&&Ue(e,l)<n.reach-.5&&e.cooldown<=0){e.windup=n.windup,e.biteTarget=l,e.bitePoint={x:l.x,z:l.z},e.velocity=0,e.state="pounce",this.emit({type:"attackWarning",actor:e,target:l.id});return}if(a){const h=Ue(e,a);let u=a;if(!i&&l&&h>5&&h<16){const _=e.id%2?1:-1,g=(l.x-e.x)/h,m=(l.z-e.z)/h,f={x:l.x+m*_*3.5,z:l.z-g*_*3.5};this.nav.free(f)&&Di(e,f,this.blocks,.7)&&(u=f)}l&&h<19&&h>n.reach+1&&e.burstCooldown<=0&&(e.burstUntil=this.elapsed+(i?1.8:.95),e.burstCooldown=i?6:4.2,this.emit({type:"rush",actor:e}));const d=this.elapsed<e.burstUntil&&!!l,p=d?n.sprint:n.chase;d&&(e.state="rush"),e.velocity=Math.min(p,(e.velocity||0)+(i?4:12)*t),e.velocity>p&&(e.velocity=Math.max(p,e.velocity-12*t)),h>1.2?this.navigation(e).move(e,u,e.velocity,t):(e.velocity=0,e.state==="lure"&&(e.state="feeding"))}else{e.state="patrol",e.wander+=t*.12;const h={x:e.home.x+Math.sin(e.wander)*6,z:e.home.z+Math.cos(e.wander)*6};this.navigation(e).move(e,h,n.walk,t)}}navigation(e){return e.kind==="rex"?this.rexNav:e.kind==="trike"?this.trikeNav:e.kind==="brachio"?this.brachioNav:this.nav}forwardStep(e,t,i){const n=this.navigation(e);let r=0;for(;r<i;){const o=Math.min(.2,i-r),a={x:e.x+t.x*o,z:e.z+t.z*o};if(!n.free(a,n.clearance-.1))break;e.x=a.x,e.z=a.z,r+=o}return r}triceratops(e,t){const i=ft.trike,n=[this.player,...this.activeActors.filter(l=>l.kind==="human")].filter(l=>l.hp>0),r=n.sort((l,c)=>Ue(e,l)-Ue(e,c))[0];if(e.chargeLeft>0){e.state="charge",e.chargeLeft=Math.max(0,e.chargeLeft-t);const l=this.forwardStep(e,e.chargeDirection,i.sprint*t);e.speed=l/t;for(const c of n)!e.chargeHits.has(c.id)&&ir(e,c)&&Ue(e,c)<i.reach&&un(e,c,this.blocks)&&(e.chargeHits.add(c.id),this.hit(c.id,i.damage,!1,e.id),this.emit({type:"chargeImpact",actor:e}));(l<i.sprint*t*.8||!e.chargeLeft)&&(e.chargeLeft=0,e.cooldown=6,e.state="recover",this.emit({type:"chargeImpact",actor:e}));return}if(e.windup>0){e.state="charge-windup",e.windup=Math.max(0,e.windup-t),e.windup||(e.chargeLeft=1.35,e.chargeHits=new Set,this.emit({type:"rush",actor:e}));return}const o=e.agitatedUntil>this.elapsed,a=o&&n.find(l=>l.id===e.aggressor)||r;if(a&&Ue(e,a)<(o?25:i.notice)&&un(e,a,this.blocks)&&e.cooldown<=0){const l=a.x-e.x,c=a.z-e.z,h=Math.hypot(l,c)||1;e.chargeDirection={x:l/h,z:c/h},e.heading=Math.atan2(l,c),e.targetId=a.id,e.windup=i.windup,e.state="charge-windup",this.emit({type:"attackWarning",actor:e,target:a.id});return}e.targetId=null,e.state=e.cooldown>0?"recover":"graze",e.wander+=t*.06,this.trikeNav.move(e,{x:e.home.x+Math.sin(e.wander)*4,z:e.home.z+Math.cos(e.wander)*4},i.walk,t)}brachiosaurus(e,t){const i=ft.brachio;if(e.targetId=null,e.windup>0){if(e.windup=Math.max(0,e.windup-t),e.state="stomp",!e.windup){for(const r of[this.player,...this.activeActors.filter(o=>o.kind==="human")])r.hp>0&&ir(e,r)&&Ue(e,r)<5&&un(e,r,this.blocks)&&this.hit(r.id,i.damage,!1,e.id);e.cooldown=5,this.emit({type:"chargeImpact",actor:e})}return}if(e.agitatedUntil>this.elapsed&&Ue(e,this.player)<6&&ir(e,this.player)&&e.cooldown<=0){e.windup=i.windup,e.state="stomp",this.emit({type:"attackWarning",actor:e,target:-1});return}e.state="graze",e.wander+=t*.035;const n={x:e.home.x+Math.sin(e.wander)*4,z:e.home.z+Math.cos(e.wander)*3};this.brachioNav.move(e,n,i.walk,t)}snapshot(){return{research:this.research.snapshot(this.elapsed),elapsed:this.elapsed,health:this.health,heat:this.heat,radius:this.radius,remaining:this.remaining,kills:this.kills,dinoKills:this.dinoKills,damageDealt:this.damageDealt,lures:this.lures,lureCooldown:this.lureCooldown,lure:this.lure,rexAwake:this.rexAwake,result:this.result,player:{...this.player},loot:this.loot.map(e=>({...e})),actors:this.actors.map(e=>({id:e.id,kind:e.kind,name:e.name,x:e.x,z:e.z,hp:e.hp,maxHp:e.maxHp,heading:e.heading,speed:e.speed,state:e.state,windup:e.windup,targetId:e.targetId,active:e.active,hurt:e.hurt,attackCount:e.attackCount,chargeLeft:e.chargeLeft||0,alert:e.alertTime||0,role:ft[e.kind]?.role,height:ft[e.kind]?.height})),events:this.events}}}function Ur(s,e){const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d");i.fillStyle=e,i.fillRect(0,0,256,256);let n=73;const r=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296;for(let a=0;a<3200;a++){const l=r();i.fillStyle=l>.5?"#ffffff0b":"#071b190c";const c=s==="grass"?3+r()*20:1+r()*3;i.fillRect(r()*256,r()*256,c,c)}if(s==="concrete"&&(i.strokeStyle="#29342f35",i.lineWidth=2,i.strokeRect(1,1,254,254),i.strokeStyle="#ffffff20",i.strokeRect(4,4,248,248)),s==="wood"){for(let a=5;a<256;a+=32)i.fillStyle="#162c2833",i.fillRect(0,a,256,2),i.fillStyle="#ffffff12",i.fillRect(0,a+3,256,1);for(let a=0;a<35;a++){i.strokeStyle="#15332316";const l=r()*256,c=r()*256;i.beginPath(),i.ellipse(l,c,20+r()*30,1.4,0,0,Math.PI*2),i.stroke()}}const o=new on(t);return o.colorSpace=is,o.wrapS=o.wrapT=kd,o.anisotropy=4,s==="road"&&o.repeat.set(3,18),s==="grass"&&o.repeat.set(12,12),s==="concrete"&&o.repeat.set(3,2),new tt({map:o,envMapIntensity:.25,roughness:s==="road"?.96:s==="wood"?.72:.9})}let la;function Wo(s,e,t=.35){if(!la){const n=document.createElement("canvas");n.width=n.height=64;const r=n.getContext("2d"),o=r.createRadialGradient(32,32,5,32,32,32);o.addColorStop(0,"#071d19b3"),o.addColorStop(.45,"#071d1970"),o.addColorStop(1,"#071d1900"),r.fillStyle=o,r.fillRect(0,0,64,64),la=new on(n)}const i=new $e(new Bs(s,e),new yt({map:la,transparent:!0,opacity:t,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=.082,i.renderOrder=1,i}function lf(s){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);i.addColorStop(0,"#3f738b"),i.addColorStop(.45,"#78a8b4"),i.addColorStop(.62,"#c6d8c4"),i.addColorStop(1,"#d8d9b0"),t.fillStyle=i,t.fillRect(0,0,1024,512);for(let a=0;a<12;a++){const l=a*137%1024,c=210+Math.sin(a*4)*45,h=t.createRadialGradient(l,c,0,l,c,75);h.addColorStop(0,"#f8f0d940"),h.addColorStop(1,"#f8f0d900"),t.fillStyle=h,t.fillRect(l-80,c-80,160,160)}const n=new on(e);n.colorSpace=is;const r=new $e(new To(165,24,12),new yt({map:n,side:pu,depthWrite:!1,fog:!1}));r.rotation.y=.6,s.add(r);const o=new on(e);o.mapping=Bd,o.colorSpace=is,s.environment=o}function ca(s=3,e=.7,t=.6,i=.7){const n=[],r=[],o=[];for(let c=0;c<=10;c++){const h=c/10,u=Math.sin(Math.PI*h)*e*(c%2?.79:1),d=Math.sin(Math.PI*h)*t-h*h*i;n.push(-u,d,s*h,0,d+.07*Math.sin(Math.PI*h),s*h,u,d,s*h),r.push(0,h,.5,h,1,h)}for(let c=0;c<10;c++)for(let h=0;h<2;h++){const u=c*3+h,d=u+3;o.push(u,d,u+1,u+1,d,d+1)}const l=new fi;return l.setAttribute("position",new Kn(n,3)),l.setAttribute("uv",new Kn(r,2)),l.setIndex(o),l.computeVertexNormals(),l}function cf({scene:s,part:e,brick:t,solid:i,sign:n,m:r,sphere:o,cyl:a,trees:l,occupied:c,rand:h}){const u=new tt({color:"#36734b",roughness:.65,envMapIntensity:.2,side:yi}),d=new tt({color:"#78a44e",roughness:.65,envMapIntensity:.2,side:yi}),p=new tt({color:"#526f46"}),_=new tt({color:"#394b43",roughness:.5,metalness:.35}),g=new tt({color:"#daa34f"}),m=new tt({color:"#665741"}),f=new tt({color:"#d9ccb0"}),M=ca(1.5,.28,.25,.15),x=ca(4,.65,.55,1.3),T=ca(2,.4,1,.45);function S(A,O,X,H=12){e(new Ll(new Ro(A),H,O,5,!1),X,0,0,0)}function b(A,O,X){S([new ie(A,0,O),new ie(A+.35,X*.5,O),new ie(A+.7,X,O+.3)],.23,r.bark,8),i(A,O,.65,X*.85,.65);for(let te=.4;te<X;te+=.48)e(new mr(.24,.025,4,8),r.wood,A+te/X*.7,te,O+te/X*.3,1,1,1,Math.PI/2);for(let te=0;te<9;te++)e(x,te%3===0?d:u,A+.7,X,O+.3,1,1,1,0,te*Math.PI*2/9);e(new nl(.42,0),r.bark,A+.7,X-.2,O+.3),e(new oa(1.7,16),m,A,.075,O,1,1,1,-Math.PI/2),e(new mr(1.8,.12,4,16),r.cream,A,.14,O,1,1,1,Math.PI/2),i(A,O,3.5,.28,3.5);const H=Wo(7,7,.42);H.position.x=A,H.position.z=O,s.add(H)}let v=0,w=0;for(const[A,O,X]of[[-9,27,8.8],[10,23,9.5],[-39,18,10],[15,1,10],[-35,3,12],[38,-21,11],[-36,-30,10],[22,-34,12]])b(A,O,X),v++;const y=[[-9,27],[10,23],[-15,7],[16,1],[-12,25],[16,25],[-18,29],[19,16],[-36,3],[-30,0],[-36,-11],[-28,-13],[-29,-4],[-36,11],[-28,15]];for(let A=0;A<65;A++){const O=(h()-.5)*86,X=(h()-.5)*86;Math.abs(O)<14||c(O,X)||y.push([O,X])}for(const[A,O]of y){w++;const X=.9+h()*.6;for(let H=0;H<8;H++)e(T,H%3===0?d:u,A,.15,O,X,X,X,0,H*Math.PI/4);for(let H=0;H<3;H++)e(new Cl(1,0),r.stone,A+Math.sin(H*2.1)*1.5,.1,O+Math.cos(H*2.1)*1.5,.32,.18,.3)}const E=new Ro([new ie(-33,.06,17),new ie(-31,.06,7),new ie(-33,.06,-3),new ie(-31,.06,-14),new ie(-30,.06,-19)]),R=[],I=[];for(let A=0;A<=40;A++){const O=E.getPoint(A/40),X=E.getTangent(A/40),H=1.1+Math.sin(A*.8)*.12;if(R.push(O.x-X.z*H,.062,O.z+X.x*H,O.x+X.z*H,.062,O.z-X.x*H),A<40){const te=A*2;I.push(te,te+2,te+1,te+1,te+2,te+3)}}const P=new fi;P.setAttribute("position",new Kn(R,3)),P.setIndex(I),P.computeVertexNormals();const F=new $e(P,new tt({color:"#86785a",roughness:.98,envMapIntensity:.2,side:yi}));F.receiveShadow=!0,s.add(F),e(a,r.bark,-37,.55,-8,.65,4.4,.65,Math.PI/2),i(-37,-8,1.4,1.2,4.5),e(new wn(.54,.54,.035,12),f,-37,.55,-5.77,1,1,1,Math.PI/2);for(const A of[.16,.3,.44])e(new mr(A,.012,3,14),r.bark,-37,.55,-5.74);e(o,p,-37,1.04,-8,.6,.13,1.7);for(const[A,O]of l.entries()){if(A%2===0){S([new ie(O.x+.4,O.h*.8,O.z),new ie(O.x+1,O.h*.55,O.z+.5),new ie(O.x+.2,1.2,O.z+1)],.045,u);for(let X=0;X<5;X++)e(M,d,O.x+.5,1.8+X*O.h*.12,O.z+.6,.45,1,.7,.3,X)}for(let X=0;X<3;X++){const H=X*2.09;S([new ie(O.x,.5,O.z),new ie(O.x+Math.sin(H)*.7,.15,O.z+Math.cos(H)*.7),new ie(O.x+Math.sin(H)*1.4,.02,O.z+Math.cos(H)*1.4)],.09,r.bark,6)}}for(let A=0;A<4;A++){const O=A>=2,X=A%2?44:-44;for(let H=-40;H<=40;H+=8){const te=O?H:X,fe=O?X:H;t(te,0,fe,.35,6,.35,_,!0),t(te,1.2,fe,.42,.45,.42,g,!0),t(te,4.6,fe,.65,.18,.65,r.cream,!0),t(te,5.6,fe,.65,.18,.65,r.cream,!0);for(let ue=1.2;ue<5.9;ue+=.95)t(O?te+4:te,ue,O?fe:fe+4,O?8:.04,.035,O?.04:8,_)}}for(const A of[-8.2,8.2]){t(A,0,-33,1.3,8,1.8,_,!0);for(let O=.2;O<2;O+=.45)t(A,O,-32.05,1.1,.24,.06,g);t(A,7.7,-33,1.6,.35,2.2,r.cream,!0),i(A,-33,1.4,8,1.8)}t(0,6.8,-33,18,1.2,1.3,_,!0),n("PREDATOR PADDOCK  /  RESTRICTED",0,7.4,-32.32,13,.7);for(const[A,O]of[[-7.1,-.7],[7.1,.85]])for(let X=.8;X<5.5;X+=.8)e(new Ft(5,.08,.1),_,A,X,-34.4,1,1,1,0,O);n("HIGH VOLTAGE",-8.2,3.5,-32.05,2.5,.43),n("KEEP CLEAR",8.2,3.5,-32.05,2.3,.43);const z=[];for(const A of[-8.2,8.2]){const O=new $e(new wn(.24,.28,.4,8),new tt({color:"#da7943",emissive:"#ff692e",emissiveIntensity:2}));O.position.set(A,8.2,-33),s.add(O),z.push(O)}for(const[A,O]of[[-37,-29],[37,32],[-39,-5],[36,-17]])for(let X=0;X<5;X++){const H=A+(h()-.5)*7,te=O+(h()-.5)*7;if(c(H,te))continue;const fe=1.3+h()*2;e(new nl(1,0),r.stone,H,fe*.42,te,fe,fe*.65,fe*.8,0,h()*6),e(o,p,H,fe*.82,te,fe*.8,.17,fe*.65),i(H,te,fe*1.1,fe,fe)}for(const[A,O]of[[-32,12],[34,25]]){e(new mr(1.6,.23,5,16),m,A,.18,O,1,1,1,Math.PI/2),e(new oa(1.6,16),m,A,.06,O,1,1,1,-Math.PI/2);for(let X=0;X<3;X++)e(o,f,A+Math.sin(X*2.1)*.6,.35,O+Math.cos(X*2.1)*.6,.3,.42,.3)}const W=-30,V=-20;t(W,0,V,5,.22,9,r.stone,!0),i(W,V,5,1,9);for(let A=0;A<12;A++){const O=V-4+A*.65,X=1.5+Math.sin(A/11*Math.PI)*.9;if(e(o,f,W,X,O,.26,.27,.3),A>2&&A<10)for(const H of[-1,1])S([new ie(W,X,O),new ie(W+H*1.2,X-.4,O),new ie(W+H*.9,.65,O+.1)],.08,f,8)}n("FOSSIL TRAIL  /  LATE CRETACEOUS",W,1,V+4.7,5,.45);for(let A=0;A<80;A++){const O=(h()-.5)*80,X=(h()-.5)*80;if(!(Math.abs(O)<2&&X>14))if(Math.abs(O)<5.2)Math.abs(O)>4.1&&e(M,m,O,.065,X,.18,1,.23,0,h()*6);else for(let H=0;H<3;H++)e(M,H%2?m:p,O+H*.2,.065,X,.12,1,.23,0,h()*6)}const j=new tt({color:"#617d70",roughness:.18,metalness:.25,transparent:!0,opacity:.8});for(const[A,O,X,H]of[[3,6,2.1,1.2],[-3,-18,2.8,1.1],[37,16,5,8]]){const te=new $e(new oa(1,32),j);te.rotation.x=-Math.PI/2,te.scale.set(X,H,1),te.position.set(A,.075,O),s.add(te)}const Y=document.createElement("canvas");Y.width=Y.height=128;const ne=Y.getContext("2d"),me=ne.createRadialGradient(64,64,4,64,64,64);me.addColorStop(0,"#ffffff44"),me.addColorStop(1,"#ffffff00"),ne.fillStyle=me,ne.fillRect(0,0,128,128);const he=new on(Y),q=[];for(let A=0;A<8;A++){const O=new Vd(new Hd({map:he,color:"#c4d2aa",transparent:!0,opacity:.28,depthWrite:!1}));O.position.set(Math.sin(A*2.4)*33,.7,Math.cos(A*2.4)*32),O.scale.set(18,3.5,1),s.add(O),q.push(O)}const ee=new Float32Array(150*3);for(let A=0;A<150;A++)ee[A*3]=(h()-.5)*85,ee[A*3+1]=1+h()*8,ee[A*3+2]=(h()-.5)*85;const le=new fi;le.setAttribute("position",new Ws(ee,3));const B=new mu(le,new gu({color:"#eee1ae",size:.07,transparent:!0,opacity:.4,depthWrite:!1}));return s.add(B),{update:A=>{for(const[O,X]of q.entries())X.position.x=Math.sin(O*2.4)*33+Math.sin(A*.08+O)*2;B.position.x=Math.sin(A*.1)*.5;for(const O of z)O.material.emissiveIntensity=1+Math.max(0,Math.sin(A*5))*2},counts:{ferns:w,palms:v,trees:l.length,electricFencePosts:44,mist:8,fossilTrail:!0}}}function hf({scene:s,part:e,brick:t,solid:i,sign:n,m:r,cyl:o}){const a=new tt({color:"#253d3d",roughness:.43,metalness:.42}),l=new tt({color:"#192c29",roughness:.96}),c=new tt({color:"#c5773e",roughness:.48}),h=new Gd({color:"#7bb8b4",roughness:.14,metalness:.2,clearcoat:.7}),u=new tt({color:"#fff2bd",emissive:"#ffb85b",emissiveIntensity:.6}),d=new wn(.055,.055,.035,6);d.rotateX(Math.PI/2);const p=(R,I,P,F,z=.5)=>{const W=Wo(P,F,z);W.position.x=R,W.position.z=I,s.add(W)};function _(R,I=.045){e(new Ll(new Ro(R.map(P=>new ie(...P))),14,I,5,!1),a,0,0,0)}for(const R of[-7.6,7.6]){t(R,0,5.5,2.2,.35,2.7,r.stone,!0),t(R,.35,5.5,1.7,1.45,2.1,r.cream,!0),t(R,1.8,5.5,1.25,6.7,1.45,a,!0),i(R,5.5,2.2,8.5,2.7),p(R,5.5,4,4);for(let I=2;I<8;I+=1.6){t(R,I,6.25,1.6,.22,.18,r.brass,!0);for(const P of[-.48,.48])e(d,r.dark,R+P,I+.1,6.38)}t(R,8.35,5.5,2,.32,2,r.brass,!0),t(R,8.7,5.5,1.55,.2,1.6,r.cream,!0);for(let I=0;I<5;I++)e(new Ft(1.5,.24,.04),I%2?a:r.brass,R,.6+I*.27,6.58,1,1,1,0,0,-.14);t(R,4.5,6.37,.9,1.15,.13,r.cream,!0),n("01",R,5.1,6.46,.65,.65)}t(0,7.25,5.5,15.5,1.35,1.8,a,!0),t(0,7.4,6.45,13.5,1.05,.12,r.cream,!0),t(0,8.6,5.5,16.8,.3,2,r.brass,!0),n("D I N O   I S L A N D",0,8.07,6.55,11.9,.65),n("SAURIAN RESERVE  /  SECTOR 01",0,7.57,6.56,7.2,.22);for(const R of[-5.6,5.6])t(R,7.65,6.55,.65,.7,.12,r.brass,!0),e(new mr(.2,.035,6,16),a,R,8,6.64);_([[-7.6,7.2,5],[0,6.6,4.8],[7.6,7.2,5]]);for(const R of[-1,1]){for(const I of[10.2,14.5])t(I*R,0,5.5,.25,4.2,.25,a,!0),i(I*R,5.5,.5,4.2,.5);for(const I of[.8,1.8,2.8,3.8])R<0?e(new Ft(4.3,.065,.08),a,-12.35,I,5.5):_([[10.2,I,5.5],[11.7,I*.45,6.2],[13.2,.25,7.1]],.04);n(R<0?"10,000 VOLTS":"CONTAINMENT BREACH",R*12.3,2,5.6,R<0?2.1:3.1,.4)}const g=-11.8,m=16.5;i(g,m,4.8,3.5,4.4),p(g,m,8,7,.65),t(g,0,m,5.1,.35,4.7,r.stone,!0),t(g,.35,m,4.6,2.8,4.2,r.teal,!0);for(let R=.55;R<3;R+=.38)t(g,R,m+2.15,4.65,.055,.04,r.dark);for(const R of[-2.25,2.25])t(g+R,.3,m+2.17,.19,3.2,.22,r.cream,!0);t(g,1.25,m+2.23,3.4,1.5,.16,r.cream,!0),t(g,1.4,m+2.34,3.08,1.19,.04,h),t(g,1.42,m+2.39,.09,1.2,.06,a),t(g,1.3,m+2.45,3.65,.15,.5,r.wood,!0);for(const R of[-1,1])e(new Ft(5.65,.25,2.8),c,g,3.45,m+R*1.05,1,1,1,R*.3);t(g,3.78,m,5.9,.22,.32,r.cream,!0),n("RANGER CHECKPOINT",g,3.12,m+2.45,3.9,.36);for(let R=0;R<5;R++)t(g-2.36,1.2+R*.18,m,.08,.08,1.45,a);for(const R of[-14.6,-8.8])t(R,0,20.1,.24,.85,.24,a,!0),e(o,r.brass,R,.84,20.1,.18,.12,.18);const f=11.7,M=13.5,x=-.28,T=Math.cos(x),S=Math.sin(x),b=(R,I,P,F,z,W=1,V=1,j=1)=>e(R,I,f+P*T+z*S,F,M-P*S+z*T,W,V,j,0,x),v=new Xs(1,1,1,2,.055);function w(R,I,P,F,z,W,V){b(v,V,R,I,P,F,z,W)}i(f,M,4.6,2.8,6.5),p(f,M,7,9,.7),w(0,.64,0,2.8,.35,5.2,a),w(0,1.13,.1,2.8,.7,4.8,c),w(0,1.42,1.7,2.7,.4,1.35,r.cream),w(0,1.95,-.5,2.5,1.25,2.5,a),w(0,2.03,.78,2.24,.95,.07,h),w(0,2.75,-.5,2.85,.18,2.9,r.cream);for(const R of[-1,1]){w(R*1.28,2,-.2,.07,.95,1.75,h);for(const I of[-1.5,.85])w(R*1.3,2,I,.13,1.3,.13,c);w(R*1.42,1.3,-.2,.1,.09,1.4,r.cream),w(R*1.56,1.9,.8,.28,.3,.15,a)}const y=new wn(1,1,1,16);y.rotateZ(Math.PI/2);for(const R of[-1.48,1.48])for(const I of[-1.65,1.65]){b(y,l,R,.72,I,.48,.67,.67),b(y,r.cream,R*1.15,.72,I,.08,.34,.34),b(y,a,R*1.2,.72,I,.1,.13,.13);for(let P=0;P<10;P++){const F=P*Math.PI/5;w(R,.72+Math.sin(F)*.65,I+Math.cos(F)*.65,.56,.12,.18,l)}w(R,1.45,I,.35,.12,1.6,c)}w(0,1.1,2.64,3.05,.22,.22,a),w(0,1.45,2.56,1.2,.5,.07,a);for(let R=0;R<5;R++)w(-.45+R*.22,1.45,2.62,.08,.32,.05,r.cream);for(const R of[-.96,.96])w(R,1.48,2.56,.52,.45,.12,a),w(R,1.48,2.64,.38,.3,.05,u),w(R,2.95,-.5,.12,.25,2.2,a);w(0,2.92,-.5,2.5,.1,.12,a),w(0,1.6,-2.5,1.25,1.25,.34,l),w(0,1.6,-2.7,.55,.55,.08,r.cream),n("FIELD UNIT 07",f+1.8,1.3,M+.4,1.3,.3,Math.PI/2+x);for(const R of[{x:-18,z:-13,w:12,d:10,h:4.1},{x:23,z:-21,w:12,d:11,h:4.5}]){p(R.x,R.z,R.w+5,R.d+5,.65);const I=R.z+R.d/2+.3;for(let P=.6;P<R.h-.5;P+=.46)t(R.x,P,I,R.w-.4,.035,.045,r.dark);for(const P of[-R.w/2+.4,R.w/2-.4]){t(R.x+P,.5,I+.05,.2,R.h-.4,.25,r.cream,!0);for(let F=.8;F<R.h;F+=.9)e(d,a,R.x+P,F,I+.19)}for(const P of[-4,4])t(R.x+P,.5,I+1.8,.18,2.7,.18,r.wood,!0),e(new Ft(1.4,.18,.18),r.wood,R.x+P,2.7,I+1.8,1,1,1,0,0,P>0?.75:-.75);t(R.x+R.w/2+.12,.3,R.z+1,.15,3.5,.15,a,!0),_([[R.x+R.w/2+.1,3.8,R.z+1],[R.x+R.w/2+.4,3.8,R.z],[R.x+R.w/2+.4,.4,R.z]])}function E(R,I,P,F,z){const W=document.createElement("canvas");W.width=512,W.height=256;const V=W.getContext("2d");V.fillStyle="#e7d9a9",V.textAlign="center",V.textBaseline="middle",V.font="900 140px sans-serif",V.fillText(R,256,130,480);const j=new on(W);j.colorSpace=is;const Y=new $e(new Bs(F,z),new yt({map:j,transparent:!0,opacity:.68,depthWrite:!1}));Y.rotation.set(-Math.PI/2,0,0),Y.position.set(I,.085,P),s.add(Y)}E("SLOW",0,11,4.2,2),E("01",0,-1,3.1,3.5);for(const R of[-3.8,3.8])for(let I=7;I<10;I+=.5)t(R,.08,I,.65,.015,.2,r.brass);for(const R of[9.2,15])t(R,0,17.6,.23,1.1,.23,a,!0),t(R,.55,17.6,.3,.18,.3,r.brass);for(let R=-8;R<32;R+=2.4)for(const I of[-5.9,5.9])if(t(I,.03,R,.32,.17,2.3,r.cream,!0),Math.round(R)%3===0)for(let P=0;P<5;P++)t(I*1.05,.03,R-.3+P*.14,.65,.018,.07,a);return{portal:!0,checkpoint:!0,safariTruck:!0}}function uf({scene:s,part:e,brick:t,solid:i,sign:n,m:r,cyl:o,blockers:a,walls:l}){const c=new tt({color:"#264647",roughness:.43,metalness:.45}),h=new tt({color:"#dca456",roughness:.55}),u=new tt({color:"#83c7b7",roughness:.48}),d=new tt({color:"#3b8c83",transparent:!0,opacity:.78,roughness:.28}),p=new tt({color:"#142d2d",roughness:.6}),_=new tt({color:"#69dcbb",emissive:"#55cfa9",emissiveIntensity:.8}),g=new tt({color:"#d57c3d",emissive:"#ff6d31",emissiveIntensity:.7}),m=new Xs(1,1,1,2,.055),f=new Ft(1,1,1),M=[],x=(B,A,O,X)=>{const H=new $e(B,new yt({visible:!1}));return H.position.set(A,O,X),s.add(H),l.push(H),M.push(H),H},T=(B,A,O)=>e(new Ll(new Ro(B.map(X=>new ie(...X))),20,A,5,!1),O,0,0,0);t(-18,.018,-1,8,.025,5,r.stone,!0),t(-18,.043,-1,7.6,.02,4.7,r.cream,!0);for(const B of[-21.7,-14.3])t(B,0,-5.8,.3,3.5,.3,c,!0),i(B,-5.8,.4,3.5,.4),t(B,3.4,-4.8,.25,.2,3.2,c,!0);t(-18,3.5,-5.8,8,.3,.3,c,!0),n("RESEARCH / BIOBANK 03",-18,3.45,-5.57,6.8,.48);for(const B of[-20.7,-15.3]){t(B,0,-6.7,1.3,1.3,.65,c,!0);for(let A=.25;A<1.2;A+=.2)t(B,A,-6.34,1,.06,.06,r.cream)}for(const B of[-19.8,-16.2])T([[B,.3,-6.7],[B,2.8,-6.7],[B,3.1,-4.8]],.09,r.brass);for(const B of[-21,-15])e(o,c,B,3.95,-5.8,.35,.3,.35),e(new To(.17,8,6),g,B,4.2,-5.8);const S=new Li;S.position.set(we.console.x,0,we.console.z),s.add(S);function b(B,A,O,X,H,te,fe=1,ue=1,Be=1){const ot=new $e(A,O);return ot.position.set(X,H,te),ot.scale.set(fe,ue,Be),ot.castShadow=ot.receiveShadow=!0,B.add(ot),ot}b(S,m,c,0,.55,0,1.5,1.1,.9),b(S,m,r.cream,0,1.25,0,1.7,.65,.4),b(S,f,p,0,1.29,.23,1.4,.48,.05),b(S,m,h,.55,.88,.5,.22,.12,.2),i(we.console.x,we.console.z,1.5,1.6,.9);const v=document.createElement("canvas");v.width=512,v.height=160;const w=v.getContext("2d"),y=new on(v);y.colorSpace=is;const E=new $e(new Bs(1.32,.42),new yt({map:y}));E.position.set(0,1.3,.265),S.add(E);let R="";const I=new Li;I.position.set(we.reward.x,0,we.reward.z),s.add(I),b(I,m,c,0,.5,0,1.7,1,1.15);const P=b(I,m,h,0,1.1,0,1.85,.2,1.25);for(const B of[-.55,.55])b(I,m,r.cream,B,.55,.6,.15,.8,.08);b(I,f,_,0,.65,.6,.4,.1,.04);const F=new $e(new yo(1.15,1.25,48),new yt({color:"#ffcf7e",transparent:!0,opacity:.9,side:yi,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.y=.36,I.add(F),F.visible=!1;for(const[B,A]of[[we.fastRoute,h],[we.quietRoute,u]])for(let O=1;O<B.length;O++){const X=B[O-1],H=B[O],te=Math.hypot(H.x-X.x,H.z-X.z);for(let fe=.8;fe<te;fe+=2.1){const ue=fe/te;e(new Ft(.35,.02,.95),A,X.x+(H.x-X.x)*ue,.065,X.z+(H.z-X.z)*ue,1,1,1,0,Math.atan2(H.x-X.x,H.z-X.z))}}n("RESEARCH →",-4.4,1.5,13,3.2,.45),t(-4.4,0,12.9,.12,1.8,.12,c),n("FOREST ACCESS / QUIET ROUTE",-24,1.55,19.5,5.5,.42);const z=we.deck;t(z.x,2.5,z.z,z.w,.24,z.d,c,!0),t(z.x,2.74,z.z,z.w+.2,.06,z.d+.2,r.cream,!0),i(z.x,z.z,z.w,z.h,z.d);for(const B of[-25.7,-20.3])for(const A of[1.3,6.7])t(B,0,A,.35,2.8,.35,c,!0);for(let B=.45;B<2.5;B+=.45)t(-26,B,4,.1,.12,6,r.wood),t(-23,B,1,6,.12,.1,r.wood);for(const B of[1.2,4,6.8])t(-26,2.8,B,.12,1,.12,h);for(const B of[-25.7,-23,-20.3])t(B,2.8,1,.12,1,.12,h);t(-26,3.65,4,.13,.13,6,r.cream,!0),t(-23,3.65,1,6,.13,.13,r.cream,!0),x(new Ft(.2,1.05,6),-26,3.3,4),x(new Ft(6,1.05,.2),-23,3.3,1);const W=we.ramp,V=new Ft(W.w,W.h,W.d),j=V.attributes.position;for(let B=0;B<j.count;B++)j.setY(B,j.getY(B)>0?W.h*(.5-j.getZ(B)/W.d):0);V.computeVertexNormals(),e(V,c,W.x,0,W.z),x(V.clone(),W.x,0,W.z),a.push({...W,shape:"ramp"});for(let B=8;B<17;B+=.8){const A=W.h*(17-B)/10+.02;t(W.x,A,B,3.45,.035,.12,r.brass)}for(const B of[-24.65,-21.35])T([[B,.2,16.8],[B,1.5,12],[B,2.9,7.2]],.07,h);n("LOOKOUT / 2.8 M",-23,3.05,7.13,4.2,.38);function Y(B,A,O,X,H){i(B,A,O,H,X),t(B,0,A,O,H*.68,X,c,!0),t(B,H*.68,A,O,.2,X,r.cream,!0),t(B,H*.72,A,O,H*.25,X,d);const te=O>X,fe=Math.max(O,X);for(let ue=-fe/2;ue<=fe/2+.1;ue+=Math.min(4,fe))t(B+(te?ue:0),0,A+(te?0:ue),.25,H+.2,.25,c,!0)}Y(-9,-7.2,.45,4.4,3.6),Y(-9,10.5,.45,15,3.6),Y(15.5,-42.3,.6,4.8,5.2),Y(15.5,-28.3,.6,4.8,5.2),Y(30,-27,29,.6,5.2);const ne=new Map;for(const B of["service","paddock"]){const A=we[B],O=new Li;O.position.set(A.x,0,A.z),s.add(O),b(O,m,c,0,A.h/2,0,A.w,A.h,A.d),b(O,f,d,A.w*.53,A.h*.58,0,.03,A.h*.45,A.d-.5);for(let te=-A.d/2+.3;te<A.d/2;te+=1.1)b(O,m,B==="service"?h:r.cream,A.w*.58,.6,te,.05,.3,.7);for(const te of[-A.d/2,A.d/2])t(A.x,0,A.z+te,.8,A.h+.8,.8,c,!0),i(A.x,A.z+te,.8,A.h+.8,.8);t(A.x,A.h+.5,A.z,.9,.3,A.d+1,r.cream,!0);const X=b(O,new To(.16,8,6),g,A.w*.7,A.h-.3,0),H=new $e(new Ft(A.w,A.h,A.d),new yt({visible:!1}));H.position.set(A.x,A.h/2,A.z),s.add(H),ne.set(B,{root:O,ray:H,lamp:X,breakAt:null})}for(const B of we.panels)t(B.x,0,B.z,.5,1.4,.5,c,!0),t(B.x,1.1,B.z+.28,.6,.4,.12,r.cream,!0),n("E",B.x,1.43,B.z+.36,.3,.22);const me=new Li;s.add(me);const he=[];for(let B=0;B<14;B++){const A=new $e(new Cl(.12+B%3*.06),new yt({color:"#dec6a0",transparent:!0,opacity:0}));me.add(A),he.push(A)}let q=-100,ee={x:0,z:0};function le(B,A){const O=ne.get(B),X=l.indexOf(O.ray);A&&X<0?l.push(O.ray):!A&&X>=0&&l.splice(X,1)}for(const B of ne.keys())le(B,!0);return{meshColliders:M,doors:ne,syncDoor:le,breakDoor:(B,A)=>{const O=ne.get(B);O.breakAt=A,q=A,ee=we[B]},update:(B,A)=>{for(const[H,te]of ne){const fe=B.doors[H];if(fe.broken){const ue=Math.min(1,(A-(te.breakAt??A))/.7);te.root.position.y=0,te.root.rotation.z=-Math.PI*.48*ue}else{const ue=fe.motion==="opening"?fe.travel:fe.motion==="closing"?1-fe.travel:fe.closed?0:1;te.root.position.y=ue*(we[H].h+.8),te.root.position.x=we[H].x+(fe.pressure>0?Math.sin(A*58)*.05:0)}te.lamp.material=fe.closed?g:_}const O=B.phase==="idle"?"STANDBY":B.phase==="uploading"?"UPLINK "+Math.round(B.progress/8*100)+"%":B.phase==="ready"?"SUPPLY READY":"COLLECTED";O!==R&&(R=O,w.fillStyle="#102c28",w.fillRect(0,0,512,160),w.fillStyle=B.phase==="uploading"?"#efbd70":"#88e8bd",w.font="700 38px sans-serif",w.textAlign="center",w.fillText(O,256,74),w.fillRect(32,110,448*(B.phase==="uploading"?B.progress/8:1),12),y.needsUpdate=!0),F.visible=B.phase==="ready",F.rotation.z=A*.5,I.visible=B.phase!=="claimed",P.position.y=B.phase==="ready"?1.25+Math.sin(A*3)*.035:1.1,g.emissiveIntensity=B.phase==="uploading"?.6+Math.max(0,Math.sin(A*7))*1.8:.35;const X=A-q;for(const[H,te]of he.entries())if(te.visible=X>=0&&X<1.5,te.visible){const fe=H*2.4;te.position.set(ee.x+Math.sin(fe)*X*3,1+X*(2+H%3)-X*X*2,ee.z+Math.cos(fe)*X*3),te.material.opacity=(1-X/1.5)*.7}}}}function df(s){const e=[],t=[],i=new Map,n=(v,w=.75)=>new tt({color:v,roughness:w,envMapIntensity:.3}),r={grass:Ur("grass","#466c48"),sand:Ur("concrete","#c3b698"),cream:n("#e8dcc0",.53),teal:n("#28665e",.48),dark:n("#203c37"),roof:n("#b9673b",.6),roof2:n("#8e4831"),road:Ur("road","#485854"),wood:Ur("wood","#816047"),bark:n("#6d5946"),leaf:n("#1e5543"),leaf2:n("#3c7751"),leaf3:n("#65934e"),glass:n("#79b9b2",.16),brass:n("#dda956",.4),red:n("#b96142"),blue:n("#648a8b"),stone:n("#78827b")},o=new Ft(1,1,1),a=new Xs(1,1,1,2,.07),l=new Cl(1,1),c=new wn(1,1,1,10),h=new Wd;function u(v,w,y,E,R,I=1,P=1,F=1,z=0,W=0,V=0){h.position.set(y,E,R),h.scale.set(I,P,F),h.rotation.set(z,W,V),h.updateMatrix();const j=(v.index?v.toNonIndexed():v.clone()).applyMatrix4(h.matrix);i.has(w)||i.set(w,[]),i.get(w).push(j)}function d(v,w,y,E,R,I,P,F=!1){u(F?a:o,P,v,w+R/2,y,E,R,I)}function p(v,w,y,E,R){e.push({x:v,z:w,w:y,h:E,d:R});const I=new $e(new Ft(y,E,R),new yt({visible:!1}));I.position.set(v,E/2,w),s.add(I),t.push(I)}function _(v,w,y,E,R,I=.65,P=0){const F=document.createElement("canvas");F.width=1024,F.height=128;const z=F.getContext("2d");z.fillStyle="#fff0cc",z.fillRect(0,0,1024,128),z.fillStyle="#244e52",z.textAlign="center",z.textBaseline="middle",z.font="700 64px sans-serif",z.fillText(v,512,69,960);const W=new on(F);W.colorSpace=is;const V=new $e(new Bs(R,I),new yt({map:W}));V.position.set(w,y,E),V.rotation.y=P,s.add(V)}d(0,-1.3,0,100,1.2,100,r.teal,!0),d(0,-.22,0,94,.22,94,r.grass,!0),d(0,.004,0,11,.025,85,r.road),d(-9,.006,0,6,.03,74,r.sand),d(10,.006,0,8,.03,74,r.sand),d(0,.008,26,52,.04,12,r.sand),d(0,.009,-8,65,.04,7,r.sand);for(let v=-40;v<42;v+=4){d(0,.035,v,.15,.015,1.6,r.cream);for(const w of[-5.7,5.7])d(w,.015,v,.28,.16,3.9,r.cream,!0)}for(let v=-23;v<25;v+=2.2)for(let w=22;w<31;w+=2.2)Math.abs(v)<6||d(v,.05,w,2.05,.02,2.05,Math.round(v+w)%3===0?r.cream:r.sand);for(const v of[-7.4,7.4])d(v,0,33,1.25,6.3,1.4,r.cream,!0),d(v,.3,33,1.4,.7,1.5,r.teal,!0),d(v,6.1,33,1.7,.3,1.8,r.brass,!0);d(0,5.3,33,16,1.1,1.2,r.teal,!0),_("D I N O   I S L A N D",0,5.87,33.62,12,.8),_("WELCOME TO THE HUNT",0,4.82,33.01,7,.43,Math.PI);for(const v of[-6.1,6.1])d(v,3.1,33,.08,1.8,1.1,r.brass),d(v,3.25,33,.1,1.45,.8,r.roof);for(const v of Zn.buildings){const w=v.type==="tower";if(p(v.x,v.z,v.w,v.h,v.d),d(v.x,0,v.z,v.w,.5,v.d,r.stone,!0),d(v.x,.45,v.z,v.w-.1,v.h-.45,v.d-.1,w?r.wood:r.teal,!0),d(v.x,v.h-.4,v.z,v.w+.25,.35,v.d+.25,r.cream,!0),w){d(v.x,v.h,v.z,v.w+1,.4,v.d+1,r.cream,!0);for(const y of[-2.8,2.8])for(const E of[-2.8,2.8])d(v.x+y,v.h,v.z+E,.35,2.5,.35,r.dark,!0);d(v.x,v.h+2.3,v.z,v.w+1.8,.4,v.d+1.8,r.roof,!0),_("LOOKOUT",v.x,v.h+1.8,v.z+3.8,5,.65);for(let y=0;y<10;y++)d(v.x-1.5,.3+y*.65,v.z+3.6,3,.13,.35,r.cream,!0)}else{for(const E of[-1,1])for(let R=0;R<5;R++)for(let I=0;I<10;I++)u(a,(I+R)%3?r.roof:r.roof2,v.x-v.w/2+.2+I*(v.w+.6)/10,v.h+1.8-R*.36,v.z+E*(.6+R*v.d/10),(v.w+.4)/10,.2,v.d/8,E*.34);d(v.x,v.h+1.9,v.z,v.w+1,.25,.38,r.cream,!0);const y=v.z+v.d/2+.08;for(const E of[-v.w*.32,0,v.w*.32])d(v.x+E,1.05,y,2.8,2.05,.14,r.cream,!0),d(v.x+E,1.19,y+.08,2.5,1.75,.03,r.glass),d(v.x+E,1.19,y+.12,.1,1.75,.06,r.dark),d(v.x+E,2,y+.12,2.5,.1,.06,r.dark),d(v.x+E,.95,y+.1,3,.18,.4,r.cream,!0);d(v.x,v.h-.05,y+.25,v.w-.8,.8,.5,r.cream,!0),_(v.type==="research"?"RESEARCH STATION / 03":v.type==="visitor"?"VISITOR CENTRE / 01":"RANGER GARAGE / 02",v.x,v.h+.35,y+.51,v.w-1,.61);for(const E of[-v.w/2+.7,v.w/2-.7])d(v.x+E,0,y+2,.3,v.h,.3,r.cream,!0);d(v.x,v.h-.5,y+1.4,v.w+.8,.25,3,r.roof,!0),d(v.x-2,v.h+1,v.z-2,2.2,1,1.8,r.dark,!0);for(let E=0;E<6;E++)d(v.x-2.9+E*.34,v.h+2.01,v.z-2,.1,.05,1.7,r.cream)}}for(const[v,w]of Zn.covers.entries()){p(w.x,w.z,w.w,w.h,w.d),d(w.x,0,w.z,w.w,w.h,w.d,v%2?r.teal:r.wood,!0),d(w.x,w.h-.12,w.z,w.w+.12,.2,w.d+.12,r.cream,!0);for(const y of[-1,1])d(w.x+y*w.w*.33,.08,w.z,.14,w.h-.08,w.d+.04,r.brass),d(w.x+y*w.w*.33,w.h*.5,w.z+w.d/2+.04,.32,.27,.08,r.dark,!0);for(const y of[-w.w*.3,w.w*.3])u(c,r.brass,w.x+y,w.h+.1,w.z,.18,.12,.18)}for(const[v,w]of[[-11,23],[12,26],[-24,-5],[18,-11],[30,18]]){for(const y of[-1.1,1.1])d(v+y,0,w,.14,.7,.9,r.dark);for(let y=0;y<4;y++)d(v,.55,w-.4+y*.24,2.8,.16,.2,r.wood,!0);d(v,.9,w-.4,2.8,.65,.15,r.wood,!0),p(v,w,2.8,1.4,1.05)}for(const[v,w]of[[-7,27],[15,28],[-9,-5],[12,-12],[26,9]])d(v,0,w,.2,4,.2,r.dark,!0),u(c,r.brass,v,4,w,.4,.25,.4),u(l,r.cream,v,4.25,w,.3,.35,.3);const g={x:31,z:-10};p(g.x,g.z,3.3,2.4,5.6),d(g.x,.65,g.z,3,1,5.3,r.roof,!0),d(g.x,1.55,g.z-.5,2.75,1.15,2.4,r.dark,!0),d(g.x,1.75,g.z+.73,2.45,.8,.08,r.glass),d(g.x,2.7,g.z-.5,3.1,.2,2.9,r.cream,!0);for(const v of[-1.5,1.5])for(const w of[-1.65,1.65])u(c,r.dark,g.x+v,.72,g.z+w,.7,.42,.7,0,0,Math.PI/2),u(c,r.brass,g.x+v*1.12,.72,g.z+w,.32,.1,.32,0,0,Math.PI/2);for(const v of[-1,1])d(g.x+v,1.2,g.z+2.7,.5,.38,.08,r.cream,!0);const m=hf({scene:s,part:u,brick:d,solid:p,sign:_,m:r,cyl:c}),f=uf({scene:s,part:u,brick:d,solid:p,sign:_,m:r,cyl:c,blockers:e,walls:t});let M=92811;const x=()=>(M=Math.imul(M,1664525)+1013904223>>>0)/4294967296,T=(v,w)=>v>-31&&v<-4&&w>-9&&w<21||Math.abs(v)<15&&w<8||Math.hypot(v-33,w+35)<12||Math.abs(v+32)<3&&w>-23&&w<18||Math.abs(v)<11&&w>8||Math.abs(v+30)<4&&Math.abs(w+20)<6||e.some(y=>Math.abs(v-y.x)<y.w/2+3&&Math.abs(w-y.z)<y.d/2+3)||Zn.loot.some(y=>Math.hypot(v-y.x,w-y.z)<4),S=[];for(let v=0;v<105;v++){const w=(x()-.5)*88,y=(x()-.5)*88;if(T(w,y))continue;const E=8+x()*6;S.push({x:w,z:y,h:E}),u(new wn(.27,.58,1,7),r.bark,w,E*.35,y,1,E*.7,1),p(w,y,1,E*.7,1);for(let I=0;I<3;I++){const P=I*2.1+x()*.5;u(new wn(.14,.29,1,6),r.bark,w+Math.sin(P),E*.69,y+Math.cos(P),1,E*.3,1,Math.cos(P)*.55,0,-Math.sin(P)*.55)}for(let I=0;I<5;I++){const P=I*2.4,F=1.2+x();u(l,I%3===0?r.leaf3:I%2?r.leaf:r.leaf2,w+Math.sin(P)*F,E*(.78+I%2*.13),y+Math.cos(P)*F,2.1+x(),1.05+x()*.5,2.1+x(),x()*.3,P,x()*.3)}const R=Wo(8,8,.45);R.position.x=w,R.position.z=y,s.add(R)}for(let v=0;v<75;v++){const w=(x()-.5)*86,y=(x()-.5)*86;if(!(Math.abs(w)<14||T(w,y)))for(let E=0;E<4;E++)u(l,E%2?r.leaf:r.leaf2,w+Math.sin(E*2.4)*.5,.3+E*.08,y+Math.cos(E*2.4)*.5,.65,.4,.8,0,E,0)}for(const v of[-44,44])for(let w=-44;w<44;w+=4)d(v,0,w,.22,2,.22,r.cream,!0),d(v,.65,w+2,.12,.18,4,r.wood),d(v,1.4,w+2,.12,.18,4,r.wood);for(const v of[-44,44])for(let w=-44;w<44;w+=4)d(w,0,v,.22,2,.22,r.cream,!0),d(w+2,.65,v,4,.18,.12,r.wood),d(w+2,1.4,v,4,.18,.12,r.wood);for(const v of[-44,44])p(v,0,.25,2,88);for(const v of[-44,44])p(0,v,88,2,.25);for(let v=0;v<16;v++){const w=v/16*Math.PI*2;u(new nl(1,1),v%2?r.leaf:r.leaf2,Math.sin(w)*76,2,Math.cos(w)*76,19,18+x()*13,19,0,w)}const b=cf({scene:s,part:u,brick:d,solid:p,sign:_,m:r,sphere:l,cyl:c,trees:S,occupied:T,rand:x});for(const[v,w]of i){const y=Xd(w);if(!y)throw Error("Park geometry attributes differ for "+v.type);const E=new $e(y,v);E.castShadow=!0,E.receiveShadow=!0,s.add(E);for(const R of w)R.dispose()}_("← VISITOR CENTRE     GARAGE →",0,3.3,-25,10,.58);for(const v of[-5,5])d(v,0,-25,.18,3.5,.18,r.dark);return{blockers:e,walls:t,jungle:b,arrival:m,research:f}}function yu(s){const e=new Map,t=new Map,i=s.clone();return Mu(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;const r=n,o=e.get(n),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Mu(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)Mu(s.children[i],e.children[i],t)}const dc=new WeakMap,fc=new ie(0,1,0);function rl(s,e=0){let t=dc.get(s);if(t||(t=["UpperArmL","LowerArmL","UpperArmR","LowerArmR"].map(o=>s.getObjectByName(o)).filter(Boolean),dc.set(s,t)),t.length!==4)return;s.updateWorldMatrix(!0,!0);const i=s.getWorldDirection(new ie);i.y=0,i.normalize();const n=new ie().crossVectors(i,fc).normalize(),r=[[.8,.25,-.22],[.98,-.12,.12],[.65,-.5,-.3],[.85,-.4,.22]];for(let o=0;o<4;o++){const[a,l,c]=r[o],h=i.clone().multiplyScalar(a*Math.cos(e)).addScaledVector(n,l);h.y=c-Math.sin(e)*.85,h.normalize();const u=t[o].parent.getWorldQuaternion(new Co).invert();t[o].quaternion.copy(u.multiply(new Co().setFromUnitVectors(fc,h))),t[o].updateWorldMatrix(!1,!0)}}class ff{constructor(e){this.scene=e,this.actors=new Map,this.crates=new Map,this.effects=[],this.lure=new Li,this.templates={},this.labels=new Map,this.invisible=new yt({visible:!1}),this.temp=new ie;const t=document.createElement("canvas");t.width=t.height=64;const i=t.getContext("2d"),n=i.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"#163a3480"),n.addColorStop(1,"#163a3400"),i.fillStyle=n,i.fillRect(0,0,64,64),this.shadowMap=new on(t);const r=new wn(1,1,6,96,1,!0);this.ring=new $e(r,new yt({color:"#f1b55b",transparent:!0,opacity:.16,side:yi,depthWrite:!1})),this.ring.position.y=3,e.add(this.ring);const o=new $e(new To(.22,8,6),new tt({color:"#ffad5d",emissive:"#e57b36",emissiveIntensity:.5}));this.lure.add(o);const a=new $e(new yo(.9,1,48),new yt({color:"#ffbd65",transparent:!0,opacity:.8,side:yi,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=-.17,this.lure.add(a),e.add(this.lure),this.lure.visible=!1}async load(e){const t=["player.glb",...Object.values(ft).map(i=>i.model)];await Promise.all(t.map(async i=>{this.templates[i]=await Ze.Loader.loadGLTF(i)}));for(const i of e.actors){const n=ft[i.kind],r=this.templates[n?.model||"player.glb"],o=new Li,a=yu(r.scene),l=new jd(a),c={},h={rex:{Green:"#315b46",LightGreen:"#a4b282",Black:"#14251e",Red:"#804538",LightYellow:"#eadbb5"},trike:{Purple:"#a76c49",LightBrown:"#e2cca3",Brown:"#704e38"},raptor:{Brown:"#a36e3e",LightBrown:"#d1af72",Black:"#17231b"}};a.traverse(v=>{v.isMesh&&(v.material=v.material.clone(),h[i.kind]?.[v.material.name]&&v.material.color.set(h[i.kind][v.material.name]),v.material.envMapIntensity=.3,v.castShadow=!0,v.receiveShadow=!0,i.kind==="human"&&v.material.color&&v.material.color.r>.2&&v.material.color.lerp(new _u(["#c47948","#648b66","#bd6354","#7a8e9c"][i.id]),.22))});const u=a.getObjectByName("Pistol");u&&(u.visible=!1);for(const v of r.animations)c[v.name]=l.clipAction(v);o.add(a),this.scene.add(o);const d=[],p=n?n.height/2:1,_=n?.headY||1.55,g=n?.bodyY||.9;for(let v=0;v<6;v++){const w=i.kind==="brachio"?2.3:p,y=new $e(new Ft(v===0?.52*w:v===1?n?.width||.85:.35*p,v===0?.52*w:v===1?(n?.height||1.8)*.27:.55*p,v===0?.65*w:v===1?n?.length||1.15:.6*p),this.invisible);y.position.set(v<2?0:(v%2?1:-1)*(n?.width||.8)*.32,v===0?_:v===1?g:.35*p,v===0&&n?.headZ||0),y.userData={enemy:i.id,region:v===0?0:v===1?1:2},o.add(y),d.push(y)}const m=new $e(new Bs(n?(n.width+1.2)*1.8:2.3,n?(n.length+1)*1.4:2.3),new yt({map:this.shadowMap,transparent:!0,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.07,o.add(m);const f=n?.reach||1,M=new $e(new yo(f*.85,f*.85+.12,40),new yt({color:"#ed7955",transparent:!0,opacity:.7,side:yi,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.1,o.add(M);let x,T;if(i.kind==="human"){x=new Li;const v=new tt({color:"#294748",roughness:.45}),w=new $e(new Ft(.13,.13,.42),v),y=new $e(new Ft(.1,.22,.13),v);w.position.z=.16,y.position.y=-.13,x.add(w,y),o.add(x),T=new lc(new fi().setFromPoints([new ie,new ie]),new cc({color:"#e99b59",transparent:!0,opacity:.4})),this.scene.add(T)}let S;if(i.kind==="trike"){S=new Li;const v=new yt({color:"#eea44c",transparent:!0,opacity:.25,side:yi,depthWrite:!1}),w=new $e(new Bs(2.8,18),v);w.rotation.x=-Math.PI/2,w.position.set(0,.1,9),S.add(w);for(let y=3;y<18;y+=3){const E=new fi;E.setAttribute("position",new Kn([-.65,.12,y,.65,.12,y,0,.12,y+1],3));const R=new $e(E,new yt({color:"#ffd38b",side:yi,transparent:!0,opacity:.7,depthWrite:!1}));S.add(R)}o.add(S)}this.actors.set(i.id,{root:o,model:a,mixer:l,actions:c,boxes:d,headBone:n?a.getObjectByName("Head"):void 0,shadow:m,indicator:M,gun:x,laser:T,chargeGuide:S,motion:n?new qd(a,i.kind,n.height):void 0});const b=document.createElement("div");b.className="actor-label "+i.kind,b.innerHTML=`<span>${i.name}</span><i><b></b></i>`,document.getElementById("worldLabels").appendChild(b),this.labels.set(i.id,b)}for(const i of e.loot)this.addCrate(i)}addCrate(e){if(this.crates.has(e.id))return;const t=new Li,i=new Li,n=e.type==="med"?"#e9d5ae":e.type==="weapon"?"#4c9ea8":"#d49d55",r=new tt({color:n,roughness:.5}),o=new tt({color:"#294e50"}),a=new tt({color:"#fff2cb"}),l=(h,u,d,p,_,g,m,f=t)=>{const M=new $e(new Xs(h,u,d,2,.06),m);M.position.set(p,_,g),M.castShadow=!0,f.add(M)};l(1.45,.75,.95,0,.4,0,r),i.position.set(0,.78,-.45),l(1.53,.16,1.02,0,.08,.45,o,i),t.add(i);for(const h of[-.5,.5])l(.1,.7,1,h,.42,0,a);l(.3,.22,.08,0,.7,.51,a),e.type==="med"&&(l(.5,.12,.04,0,.4,.5,o),l(.12,.48,.04,0,.4,.51,o));const c=new $e(new yo(1.1,1.22,40),new yt({color:e.type==="weapon"?"#9ae7df":"#ffe0a0",side:yi,transparent:!0,opacity:.85,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.06,t.add(c),t.position.set(e.x,0,e.z),this.scene.add(t),this.crates.set(e.id,{root:t,lid:i,beam:c})}update(e,t,i,n=!1){const r=e.elapsed;this.ring.scale.set(e.radius,1,e.radius);for(const o of e.actors){const a=this.actors.get(o.id);a.root.visible=o.hp>0&&(o.active!==!1||n),a.root.position.set(o.x,0,o.z),a.root.rotation.y=o.heading;const l=i.getWorldPosition(this.temp);a.model.visible=Math.hypot(l.x-o.x,l.z-o.z)>1.4;const c=ft[o.kind],h=o.kind==="human"?o.speed>5?"pistolRun":o.speed>.1?"pistolForward":"pistolIdle":o.kind==="brachio"&&r<5?"idle":o.state==="alert"||o.state==="charge-windup"?"scream":o.windup>0?"softAttack":o.speed>2?"run":o.speed>.1||o.turning?"walk":o.kind==="brachio"||o.kind==="trike"?"graze":"idle";if(h!==a.current&&a.actions[h]){const _=a.actions[h];a.current&&a.actions[a.current]?.fadeOut(.15),_.reset().fadeIn(.15).play(),a.current=h,r||a.mixer.update(.01)}if(c&&a.current&&a.actions[a.current].setEffectiveTimeScale(h==="run"||h==="walk"?Yd(o.speed||c.walk*.35,a.actions[a.current].getClip().duration,c.stride):1),a.motion?.beforeMixer(),a.mixer.update(t),a.motion?.update(t,o.speed,o.heading,o.state,o.windup,r),a.headBone&&(a.model.updateWorldMatrix(!0,!0),a.headBone.getWorldPosition(this.temp),a.boxes[0].position.copy(a.root.worldToLocal(this.temp)),a.boxes[0].quaternion.copy(a.root.getWorldQuaternion(new Co).invert().multiply(a.headBone.getWorldQuaternion(new Co)))),a.model.traverse(_=>{_.isMesh&&_.material?.emissive&&_.material.emissive.set(o.hurt>0?"#9f5533":"#000000")}),o.kind==="human"&&rl(a.model),a.gun){const _=a.model.getObjectByName("DinoWeaponMount");if(_&&(_.getWorldPosition(this.temp),a.gun.position.copy(a.root.worldToLocal(this.temp))),a.laser&&(a.laser.visible=a.root.visible&&o.windup>0,a.laser.visible&&o.shotPoint)){const g=a.laser.geometry.attributes.position;g.setXYZ(0,o.x,1.4,o.z),g.setXYZ(1,o.shotPoint.x,1.15,o.shotPoint.z),g.needsUpdate=!0,a.laser.geometry.computeBoundingSphere()}}if(a.indicator.visible=o.windup>0,a.indicator.scale.setScalar(1+o.windup*.3),a.chargeGuide){a.chargeGuide.visible=o.state==="charge-windup"||o.state==="charge";let _=18;const g={x:Math.sin(o.heading),z:Math.cos(o.heading)};for(let m=2;m<=18;m+=1)if(!e.trikeNav.free({x:o.x+g.x*m,z:o.z+g.z*m},1.4)){_=m;break}a.chargeGuide.scale.z=_/18}const u=this.labels.get(o.id);this.temp.set(o.x,(c?.height||1.8)+.4,o.z).project(i);const d=Math.hypot(o.x-e.player.x,o.z-e.player.z),p=new ie(o.x,c?.bodyY||1,o.z).sub(i.getWorldPosition(new ie)).normalize().dot(i.getWorldDirection(new ie));u.hidden=n||!e.started||!a.root.visible||this.temp.z>1||this.temp.z<-1||d>24||p<.96&&o.windup<=0&&o.hurt<=0||!Di(e.player,o,e.blocks),u.style.transform=`translate(${(this.temp.x*.5+.5)*innerWidth}px,${(-this.temp.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`,u.classList.toggle("danger",o.windup>0),u.querySelector("b").style.width=o.hp/o.maxHp*100+"%"}for(const o of e.loot){this.addCrate(o);const a=this.crates.get(o.id);a.lid.rotation.x=qn.damp(a.lid.rotation.x,o.opened?-1.5:0,6,t),a.beam.visible=!o.opened,a.beam.scale.setScalar(1+Math.sin(r*3)*.07)}if(this.lure.visible=!!e.lure,e.lure){const o=Math.min(1,(r-e.lure.born)/.6),a=e.lure.from;this.lure.position.set(qn.lerp(a.x,e.lure.x,o),qn.lerp((a.y||0)+1.3,.3,o)+Math.sin(o*Math.PI)*3,qn.lerp(a.z,e.lure.z,o)),this.lure.children[1].scale.setScalar(1+r*1.5%1*5)}for(let o=this.effects.length-1;o>=0;o--){const a=this.effects[o];a.life-=t,a.life<=0?(this.scene.remove(a.object),a.object.traverse(l=>{l.geometry?.dispose(),l.material&&!Array.isArray(l.material)&&l.material.dispose()}),this.effects.splice(o,1)):a.object.traverse(l=>{l.material&&(l.material.opacity=a.life/a.max)})}}tracer(e,t,i="#ffe6a1"){const n=new lc(new fi().setFromPoints([e,t]),new cc({color:i,transparent:!0,opacity:1}));this.scene.add(n),this.effects.push({object:n,life:.15,max:.15});const r=new $e(new hc(.13),new yt({color:"#ffeda9",transparent:!0}));r.position.copy(e),this.scene.add(r),this.effects.push({object:r,life:.08,max:.08})}impact(e){const t=new $e(new hc(e.kind==="rex"?.5:.2),new yt({color:"#ffcc76",transparent:!0}));t.position.set(e.x,e.kind==="rex"?3:1.1,e.z),this.scene.add(t),this.effects.push({object:t,life:.25,max:.25})}footfall(e){this.actors.get(e.id)?.motion?.land();const t=e.kind!=="raptor",i=t?18:7,n=new Float32Array(i*3),r=t?1.6:.65;for(let l=0;l<i;l++)n[l*3]=(Math.random()-.5)*r,n[l*3+1]=Math.random()*.35,n[l*3+2]=(Math.random()-.5)*r;const o=new fi;o.setAttribute("position",new Ws(n,3));const a=new mu(o,new gu({color:"#b7a77d",size:t?.22:.11,transparent:!0,opacity:.45,depthWrite:!1}));a.position.set(e.x,.1,e.z),this.scene.add(a),this.effects.push({object:a,life:t?.65:.4,max:t?.65:.4})}get targets(){return[...this.actors.values()].filter(e=>e.root.visible).flatMap(e=>e.boxes)}get heads(){return[...this.actors.entries()].filter(([,e])=>e.root.visible).map(([e,t])=>({id:e,head:t.boxes[0].getWorldPosition(new ie).toArray()}))}}const Dt=Math.PI*2;function pf(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0)/4294967296*2-1}function pc(s,e,t){const i=Dt*e/s,n=Math.sin(i)/(2*t),r=n/(1+n),o=-r,a=-2*Math.cos(i)/(1+n),l=(1-n)/(1+n);let c=0,h=0,u=0,d=0;return p=>{const _=r*p+o*h-a*u-l*d;return h=c,c=p,d=u,u=_,_}}function mf(s,e=22050){const t=["raptor","rex","trike","brachio"].includes(s),i=s==="heavyStep"||s==="stomp",n=s==="alarm"?1.7:s==="gate"?.75:s==="breach"?1.25:s==="uplink"?.7:s==="metalStep"?.35:t?{raptor:.85,rex:2.8,trike:1.7,brachio:2.5}[s]:i?.65:s==="wind"?8:s==="bird"?.65:s==="shot"?.25:s==="suppressed"?.14:s==="leafStep"?.24:.19,r=new Float32Array(Math.ceil(n*e)),o=pf(s.split("").reduce((_,g)=>_+g.charCodeAt(0)*7919,73));let a=0,l=0,c=0;const h=pc(e,s==="raptor"?750:320,1.4),u=pc(e,s==="brachio"?650:1100,2.1);for(let _=0;_<r.length;_++){const g=_/e,m=g/n,f=o();l+=.04*(f-l),c=.997*c+f*.024;let M=0;if(s==="alarm")a+=Dt*(530+180*Math.sin(g*Dt*1.8))/e,M=Math.sin(a)*.26*Math.min(1,g*20,(n-g)*12);else if(s==="gate")M=(Math.sin(g*Dt*72)*.18+l*.8)*Math.sin(Math.PI*m)+f*.2*Math.exp(-Math.abs(g-.66)*90);else if(s==="breach")a+=Dt*(38+45*Math.exp(-g*15))/e,M=Math.sin(a)*Math.exp(-g*5)*.65+l*Math.exp(-g*3)*2+f*Math.exp(-g*35)*.32+Math.sin(g*Dt*760)*Math.exp(-g*12)*.08;else if(s==="uplink"){const x=[523.25,659.25,783.99,1046.5][Math.min(3,Math.floor(m*4))];a+=Dt*x/e,M=Math.sin(a)*.24*Math.sin(Math.PI*(m*4%1))}else if(s==="metalStep")M=f*Math.exp(-g*55)*.2+(Math.sin(g*Dt*370)+.45*Math.sin(g*Dt*610))*Math.exp(-g*18)*.13;else if(t){const x={raptor:145,rex:46,trike:70,brachio:63}[s],T=x*(1.18-.48*m)+Math.sin(g*(s==="raptor"?37:16))*x*.14;a+=Dt*T/e;const S=.73+.27*Math.sin(g*(s==="raptor"?71:39)+Math.sin(g*21));let b=0;for(let y=1;y<=9;y++)b+=Math.sin(a*y+.08*Math.sin(g*31+y))*Math.pow(y,-1.35);const v=h(f)*1.5+u(f)*.7,w=Math.pow(Math.sin(Math.PI*m),.65)*(s==="raptor"?.75+.25*Math.sin(g*49):.8+.2*Math.sin(g*11));M=(Math.tanh(b*1.8)*.52*S+v*.7+c*.2)*w}else i?(a+=Dt*(31+55*Math.exp(-g*35))/e,M=Math.sin(a)*Math.exp(-g*8)*.78+l*Math.exp(-g*16)*1.5+f*Math.exp(-g*65)*.15):s==="leafStep"||s==="bootStep"?M=(f-l)*(.65+.35*Math.sin(g*93))*Math.exp(-g*(s==="leafStep"?20:38))*.48+Math.sin(g*Dt*95)*Math.exp(-g*45)*.28:s==="wind"?(M=(l*.12+c*.018)*(1+.2*Math.sin(g*Dt/n)),M+=Math.sin(g*Dt*3250+Math.sin(g*16)*.2)*Math.pow(Math.max(0,Math.sin(g*7)),14)*.007):s==="bird"?(a+=Dt*(2100+Math.sin(g*21)*450+Math.sin(g*9)*250)/e,M=Math.sin(a)*Math.pow(Math.max(0,Math.sin(g*30)),8)*Math.sin(Math.PI*m)*.12):s==="shot"||s==="suppressed"?M=(s==="shot"?f*.7+l:l*1.4)*Math.exp(-g*(s==="shot"?26:45))+Math.sin(g*Dt*83)*Math.exp(-g*40)*.25:(a+=Dt*(s==="hit"?920:s==="loot"?740:s==="lure"?430:s==="empty"?170:s==="reload"?300:105)*(1-m*.45)/e,M=(s==="reload"?f*.25:Math.sin(a)*.25)*Math.exp(-m*5));r[_]=M*Math.min(1,g*500,Math.max(0,(n-g)*200))}if(s==="wind"){const _=Math.floor(e*.15);for(let g=0;g<_;g++){const m=g/_;r[g]*=m,r[r.length-1-g]*=m}}let d=0;for(const _ of r)d=Math.max(d,Math.abs(_));const p=d>.94?.94/d:1;for(let _=0;_<r.length;_++)r[_]*=p;return{samples:r,rate:e,duration:n}}class gf{constructor(){this.buffers=new Map,this.voices=new Set,this.counts={},this.paused=!0,this.lastAmbient=0,this.volume=.72,this.muted=!1}start(){if(!this.context){const e=this.context=new AudioContext,t=this.bus=e.createDynamicsCompressor();t.threshold.value=-22,t.ratio.value=5,t.attack.value=.004,t.release.value=.18,this.master=e.createGain(),this.master.gain.value=this.muted?0:this.volume,this.analyser=e.createAnalyser(),this.analyser.fftSize=512,t.connect(this.master),this.master.connect(this.analyser),this.analyser.connect(e.destination),this.loop("wind",.38)}this.paused=!1,this.context.resume()}pause(){this.paused=!0,this.context?.suspend()}setMute(){return this.muted=!this.muted,this.master?.gain.setTargetAtTime(this.muted?0:this.volume,this.context.currentTime,.03),this.muted}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.master?.gain.setTargetAtTime(this.muted?0:this.volume,this.context.currentTime,.03)}buffer(e){if(!this.buffers.has(e)){const t=mf(e),i=this.context.createBuffer(1,t.samples.length,t.rate);i.copyToChannel(t.samples,0),this.buffers.set(e,i)}return this.buffers.get(e)}loop(e,t){const i=this.context.createBufferSource(),n=this.context.createGain();i.buffer=this.buffer(e),i.loop=!0,n.gain.value=t,i.connect(n),n.connect(this.bus),i.start()}source(e,t,i,n=5,r=1){const o=this.context;if(!o||this.paused)return;const a=o.createBufferSource(),l=o.createGain();a.buffer=this.buffer(e),a.playbackRate.value=r,l.gain.value=t,a.connect(l);let c;i?(c=o.createPanner(),c.panningModel="HRTF",c.distanceModel="inverse",c.refDistance=n,c.maxDistance=100,c.rolloffFactor=1.3,c.positionX.value=i.x,c.positionY.value=i.y??1,c.positionZ.value=i.z,l.connect(c),c.connect(this.bus)):l.connect(this.bus),this.voices.add(a),this.counts[e]=(this.counts[e]||0)+1,a.onended=()=>{this.voices.delete(a),a.disconnect(),l.disconnect(),c?.disconnect()},a.start()}play(e,t=!1,i=0){const n=e==="shot"?t?"suppressed":"shot":e==="roar"?"rex":e;this.source(n,e==="shot"?.7:.48)}creature(e,t,i=!1){this.source(e,i?.8:1,t,e==="rex"?15:e==="brachio"?17:8,.94+Math.random()*.1)}step(e,t){this.source(e==="rex"||e==="trike"||e==="brachio"?"heavyStep":"leafStep",e==="raptor"?.48:e==="brachio"?1.05:.85,t,e==="rex"||e==="brachio"?8:4,.9+Math.random()*.15)}facility(e,t){this.source(e,e==="breach"?.9:e==="alarm"?.6:.55,t,e==="alarm"?14:8)}playerStep(e){this.source(e==="metal"?"metalStep":e==="road"?"bootStep":"leafStep",.23,void 0,5,.9+Math.random()*.2)}positionalShot(e,t=!1){this.source(t?"suppressed":"shot",.6,e,7)}update(e,t){const i=this.context;if(!i||this.paused)return;const n=e.matrixWorld.elements,r=i.listener;if(r.positionX.value=n[12],r.positionY.value=n[13],r.positionZ.value=n[14],r.forwardX.value=-n[8],r.forwardY.value=-n[9],r.forwardZ.value=-n[10],r.upX.value=n[4],r.upY.value=n[5],r.upZ.value=n[6],t-this.lastAmbient>6.5){this.lastAmbient=t;const o=t*.73;this.source("bird",.48,{x:n[12]+Math.sin(o)*24,y:8,z:n[14]+Math.cos(o)*24},10,1+Math.sin(t)*.15)}}get state(){let e=0,t=0;if(this.analyser){const i=new Float32Array(this.analyser.fftSize);this.analyser.getFloatTimeDomainData(i);for(const n of i)e+=n*n,t=Math.max(t,Math.abs(n));e=Math.sqrt(e/i.length)}return{running:this.context?.state==="running",paused:this.paused,muted:this.muted,volume:this.volume,voices:this.voices.size,counts:{...this.counts},rms:e,peak:t,spatial:"HRTF"}}}class _f{constructor(){this.target=new EventTarget,this.events=new Map,this.callbacks=new Map}add(e,t){this.callbacks.set(e,t),this.events.set(e,new KM(e)),this.target.addEventListener(e,t,!1)}dispatch(e,t=null){const i=this.events.get(e);i&&(i.data=t,this.target.dispatchEvent(i))}remove(e){const t=this.callbacks.get(e);this.target.removeEventListener(e,t,!1),this.callbacks.delete(e),this.events.delete(e)}dispose(){for(const[e]of this.events)this.remove(e);this.callbacks.clear(),this.events.clear()}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,Lo=180/Math.PI;function js(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function xf(s,e){return(s%e+e)%e}function ha(s,e,t){return(1-t)*s+t*e}function vf(s){return s*Mo}function yf(s){return s*Lo}function mc(s){return(s&s-1)===0&&s!==0}function Mf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-a;const f=l*d+c*p+h*_+u*g,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),b=Math.atan2(S,f*M);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S}const T=a*M;if(l=l*m+d*T,c=c*m+p*T,h=h*m+_*T,u=u*m+g*T,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*p-c*d,e[t+1]=l*_+h*d+c*u-a*p,e[t+2]=c*_+h*p+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),p=l(n/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-n)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,h=l*i+a*t-r*n,u=l*n+r*i-o*t,d=-r*t-o*i-a*n;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new U,gc=new Wt,Pt=new Ls,Fr=new ie;class Sf{constructor(e){let t=e.geometry;t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,i=new Float32Array(e.count/3);for(let r=0;r<e.count;r+=3){let o=1;t&&(o=t.getX(r)+t.getX(r+1)+t.getX(r+2)),Pt.a.fromBufferAttribute(e,r),Pt.b.fromBufferAttribute(e,r+1),Pt.c.fromBufferAttribute(e,r+2),o*=Pt.getArea(),i[r/3]=o}this.distribution=new Float32Array(e.count/3);let n=0;for(let r=0;r<i.length;r++)n+=i[r],this.distribution[r]=n;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,i){const n=this.distribution[this.distribution.length-1],r=this.binarySearch(this.randomFunction()*n);return this.sampleFace(r,e,t,i)}binarySearch(e){const t=this.distribution;let i=0,n=t.length-1,r=-1;for(;i<=n;){const o=Math.ceil((i+n)/2);if(o===0||t[o-1]<=e&&t[o]>e){r=o;break}else e<t[o]?n=o-1:i=o+1}return r}sampleFace(e,t,i,n){let r=this.randomFunction(),o=this.randomFunction();return r+o>1&&(r=1-r,o=1-o),Pt.a.fromBufferAttribute(this.positionAttribute,e*3),Pt.b.fromBufferAttribute(this.positionAttribute,e*3+1),Pt.c.fromBufferAttribute(this.positionAttribute,e*3+2),t.set(0,0,0).addScaledVector(Pt.a,r).addScaledVector(Pt.b,o).addScaledVector(Pt.c,1-(r+o)),i!==void 0&&Pt.getNormal(i),n!==void 0&&this.colorAttribute!==void 0&&(Pt.a.fromBufferAttribute(this.colorAttribute,e*3),Pt.b.fromBufferAttribute(this.colorAttribute,e*3+1),Pt.c.fromBufferAttribute(this.colorAttribute,e*3+2),Fr.set(0,0,0).addScaledVector(Pt.a,r).addScaledVector(Pt.b,o).addScaledVector(Pt.c,1-(r+o)),n.r=Fr.x,n.g=Fr.y,n.b=Fr.z),this}}const bf="152",wf=0,_c=1,Ef=2,Su=1,bu=2,Ki=3,wi=0,Kt=1,Ui=2,En=0,Ns=1,ol=2,xc=3,vc=4,wu=5,Xn=100,Af=101,Tf=102,yc=103,Mc=104,Rf=200,Eu=201,Cf=202,Lf=203,Au=204,Il=205,Pf=206,If=207,Df=208,Uf=209,Ff=210,Nf=0,zf=1,Of=2,al=3,Bf=4,kf=5,Vf=6,Hf=7,Xo=0,Gf=1,Wf=2,sn=0,Xf=1,jf=2,qf=3,Tu=4,Yf=5,Ru=300,ks=301,Vs=302,ll=303,cl=304,jo=306,hl=1e3,Si=1001,ul=1002,St=1003,Sc=1004,da=1005,hi=1006,$f=1007,Ar=1008,ss=1009,Kf=1010,Zf=1011,Cu=1012,Jf=1013,Yn=1014,$n=1015,Tr=1016,Qf=1017,ep=1018,Jn=1020,tp=1021,ui=1023,ip=1024,np=1025,Qn=1026,rs=1027,sp=1028,rp=1029,op=1030,ap=1031,lp=1033,fa=33776,pa=33777,ma=33778,ga=33779,bc=35840,wc=35841,Ec=35842,Ac=35843,cp=36196,Tc=37492,Rc=37496,Cc=37808,Lc=37809,Pc=37810,Ic=37811,Dc=37812,Uc=37813,Fc=37814,Nc=37815,zc=37816,Oc=37817,Bc=37818,kc=37819,Vc=37820,Hc=37821,_a=36492,hp=36283,Gc=36284,Wc=36285,Xc=36286,ci=2200,up=2201,dp=2202,Po=2300,Io=2301,xa=2302,Ps=2400,Is=2401,Do=2402,Dl=2500,fp=2501,Lu=3e3,es=3001,pp=3200,mp=3201,qo=0,gp=1,ts="",Ne="srgb",ki="srgb-linear",Pu="display-p3",va=7680,_p=519,jc=35044,Hs="300 es",dl=1035;class Rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}let xp=0,Cn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Ns,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Au,this.blendDst=Il,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],_=i[8],g=n[0],m=n[3],f=n[6],M=n[1],x=n[4],T=n[7],S=n[2],b=n[5],v=n[8];return r[0]=o*g+a*M+l*S,r[3]=o*m+a*x+l*b,r[6]=o*f+a*T+l*v,r[1]=c*g+h*M+u*S,r[4]=c*m+h*x+u*b,r[7]=c*f+h*T+u*v,r[2]=d*g+p*M+_*S,r[5]=d*m+p*x+_*b,r[8]=d*f+p*T+_*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,_=t*u+i*d+n*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new We;function zs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const vp=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yp=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Mp(s){return s.convertSRGBToLinear().applyMatrix3(yp)}function Sp(s){return s.applyMatrix3(vp).convertLinearToSRGB()}const bp={[ki]:s=>s,[Ne]:s=>s.convertSRGBToLinear(),[Pu]:Mp},wp={[ki]:s=>s,[Ne]:s=>s.convertLinearToSRGB(),[Pu]:Sp},gi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return ki},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=bp[e],n=wp[t];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=gi.workingColorSpace){return this.r=e,this.g=t,this.b=i,gi.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=gi.workingColorSpace){if(e=xf(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Sa(o,r,e+1/3),this.g=Sa(o,r,e),this.b=Sa(o,r,e-1/3)}return gi.toWorkingColorSpace(this,n),this}setStyle(e,t=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return gi.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Bt(Ot.r*255,0,255))*65536+Math.round(Bt(Ot.g*255,0,255))*256+Math.round(Bt(Ot.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gi.workingColorSpace){gi.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,n=Ot.g,r=Ot.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gi.workingColorSpace){return gi.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Ne){gi.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,n=Ot.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),_i.h+=e,_i.s+=t,_i.l+=i,this.setHSL(_i.h,_i.s,_i.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Nr);const i=ha(_i.h,Nr.h,t),n=ha(_i.s,Nr.s,t),r=ha(_i.l,Nr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ze;ze.NAMES=Iu;class Ep extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox),as.applyMatrix4(e.matrixWorld),this.union(as);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Wi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Wi)}else n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox),as.applyMatrix4(e.matrixWorld),this.union(as)}const i=e.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),zr.subVectors(this.max,nr),ls.subVectors(e.a,nr),cs.subVectors(e.b,nr),hs.subVectors(e.c,nr),fn.subVectors(cs,ls),pn.subVectors(hs,cs),Un.subVectors(ls,hs);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Un.z,Un.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Un.z,0,-Un.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Un.y,Un.x,0];return!ba(t,ls,cs,hs,zr)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,ls,cs,hs,zr))?!1:(Or.crossVectors(fn,pn),t=[Or.x,Or.y,Or.z],ba(t,ls,cs,hs,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new U,new U,new U,new U,new U,new U,new U,new U],Wi=new U,as=new Ln,ls=new U,cs=new U,hs=new U,fn=new U,pn=new U,Un=new U,nr=new U,zr=new U,Or=new U,Fn=new U;function ba(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Fn.fromArray(s,r);const a=n.x*Math.abs(Fn.x)+n.y*Math.abs(Fn.y)+n.z*Math.abs(Fn.z),l=e.dot(Fn),c=t.dot(Fn),h=i.dot(Fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const tn=Ap();function Ap(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:o,offsetTable:a}}function Jt(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Bt(s,-65504,65504),tn.floatView[0]=s;const e=tn.uint32View[0],t=e>>23&511;return tn.baseTable[t]+((e&8388607)>>tn.shiftTable[t])}function Br(s){const e=s>>10;return tn.uint32View[0]=tn.mantissaTable[tn.offsetTable[e]+(s&1023)]+tn.exponentTable[e],tn.floatView[0]}const vt=new U,kr=new De;class pi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Du extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uu extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wa extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Br(this.array[e*this.itemSize]);return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=Jt(t),this}getY(e){let t=Br(this.array[e*this.itemSize+1]);return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=Jt(t),this}getZ(e){let t=Br(this.array[e*this.itemSize+2]);return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=Jt(t),this}getW(e){let t=Br(this.array[e*this.itemSize+3]);return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=Jt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(i),this.array[e+2]=Jt(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=Jt(t),this.array[e+1]=Jt(i),this.array[e+2]=Jt(n),this.array[e+3]=Jt(r),this}}class qe extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Tp=new Ln,sr=new U,Ea=new U;class qs{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(sr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Ea)),this.expandByPoint(sr.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,r,o,a,l,c,h,u,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Cp)}lookAt(e,t,i){const n=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),mn.crossVectors(i,Qt),mn.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),mn.crossVectors(i,Qt)),mn.normalize(),Vr.crossVectors(Qt,mn),n[0]=mn.x,n[4]=Vr.x,n[8]=Qt.x,n[1]=mn.y,n[5]=Vr.y,n[9]=Qt.y,n[2]=mn.z,n[6]=Vr.z,n[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],M=i[3],x=i[7],T=i[11],S=i[15],b=n[0],v=n[4],w=n[8],y=n[12],E=n[1],R=n[5],I=n[9],P=n[13],F=n[2],z=n[6],W=n[10],V=n[14],j=n[3],Y=n[7],ne=n[11],me=n[15];return r[0]=o*b+a*E+l*F+c*j,r[4]=o*v+a*R+l*z+c*Y,r[8]=o*w+a*I+l*W+c*ne,r[12]=o*y+a*P+l*V+c*me,r[1]=h*b+u*E+d*F+p*j,r[5]=h*v+u*R+d*z+p*Y,r[9]=h*w+u*I+d*W+p*ne,r[13]=h*y+u*P+d*V+p*me,r[2]=_*b+g*E+m*F+f*j,r[6]=_*v+g*R+m*z+f*Y,r[10]=_*w+g*I+m*W+f*ne,r[14]=_*y+g*P+m*V+f*me,r[3]=M*b+x*E+T*F+S*j,r[7]=M*v+x*R+T*z+S*Y,r[11]=M*w+x*I+T*W+S*ne,r[15]=M*y+x*P+T*V+S*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*p-i*l*p)+g*(+t*l*p-t*c*d+r*o*d-n*o*p+n*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],M=u*m*c-g*d*c+g*l*p-a*m*p-u*l*f+a*d*f,x=_*d*c-h*m*c-_*l*p+o*m*p+h*l*f-o*d*f,T=h*g*c-_*u*c+_*a*p-o*g*p-h*a*f+o*u*f,S=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,b=t*M+i*x+n*T+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/b;return e[0]=M*v,e[1]=(g*d*r-u*m*r-g*n*p+i*m*p+u*n*f-i*d*f)*v,e[2]=(a*m*r-g*l*r+g*n*c-i*m*c-a*n*f+i*l*f)*v,e[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*p-i*l*p)*v,e[4]=x*v,e[5]=(h*m*r-_*d*r+_*n*p-t*m*p-h*n*f+t*d*f)*v,e[6]=(_*l*r-o*m*r-_*n*c+t*m*c+o*n*f-t*l*f)*v,e[7]=(o*d*r-h*l*r+h*n*c-t*d*c-o*n*p+t*l*p)*v,e[8]=T*v,e[9]=(_*u*r-h*g*r-_*i*p+t*g*p+h*i*f-t*u*f)*v,e[10]=(o*g*r-_*a*r+_*i*c-t*g*c-o*i*f+t*a*f)*v,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*v,e[12]=S*v,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*m+t*u*m)*v,e[14]=(_*a*n-o*g*n-_*i*l+t*g*l+o*i*m-t*a*m)*v,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*v,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,_=r*u,g=o*h,m=o*u,f=a*u,M=l*c,x=l*h,T=l*u,S=i.x,b=i.y,v=i.z;return n[0]=(1-(g+f))*S,n[1]=(p+T)*S,n[2]=(_-x)*S,n[3]=0,n[4]=(p-T)*b,n[5]=(1-(d+f))*b,n[6]=(m+M)*b,n[7]=0,n[8]=(_+x)*v,n[9]=(m-M)*v,n[10]=(1-(d+g))*v,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=us.set(n[0],n[1],n[2]).length();const o=us.set(n[4],n[5],n[6]).length(),a=us.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],xi.copy(this);const c=1/r,h=1/o,u=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,t.setFromRotationMatrix(xi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,r,o){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(o-r),u=(t+e)*l,d=(i+n)*c,p=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const us=new U,xi=new it,Rp=new U(0,0,0),Cp=new U(1,1,1),mn=new U,Vr=new U,Qt=new U,qc=new it,Yc=new Wt;class Bi{constructor(e=0,t=0,i=0,n=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const $c=new U,ds=new Wt,Xi=new it,Hr=new U,rr=new U,Pp=new U,Ip=new Wt,Kc=new U(1,0,0),Zc=new U(0,1,0),Jc=new U(0,0,1),Dp={type:"added"},Qc={type:"removed"};class kt extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new U,t=new Bi,i=new Wt,n=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new it},normalMatrix:{value:new We}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis(Zc,e)}rotateZ(e){return this.rotateOnAxis(Jc,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis(Zc,e)}translateZ(e){return this.translateOnAxis(Jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(rr,Hr,this.up):Xi.lookAt(Hr,rr,this.up),this.quaternion.setFromRotationMatrix(Xi),n&&(Xi.extractRotation(n.matrixWorld),ds.setFromRotationMatrix(Xi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Qc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}kt.DEFAULT_UP=new U(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Fu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const eh={};function br(s){s in eh||(eh[s]=!0,console.warn(s))}let Up=0;const li=new it,Aa=new kt,fs=new U,ei=new Ln,or=new Ln,Tt=new U;class ri extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?Uu:Du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(ei.min,or.min),ei.expandByPoint(Tt),Tt.addVectors(ei.max,or.max),ei.expandByPoint(Tt)):(ei.expandByPoint(or.min),ei.expandByPoint(or.max))}ei.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Tt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Tt.add(fs)),n=Math.max(n,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new U,h[E]=new U;const u=new U,d=new U,p=new U,_=new De,g=new De,m=new De,f=new U,M=new U;function x(E,R,I){u.fromArray(n,E*3),d.fromArray(n,R*3),p.fromArray(n,I*3),_.fromArray(o,E*2),g.fromArray(o,R*2),m.fromArray(o,I*2),d.sub(u),p.sub(u),g.sub(_),m.sub(_);const P=1/(g.x*m.y-m.x*g.y);isFinite(P)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(P),M.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(P),c[E].add(f),c[R].add(f),c[I].add(f),h[E].add(M),h[R].add(M),h[I].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let E=0,R=T.length;E<R;++E){const I=T[E],P=I.start,F=I.count;for(let z=P,W=P+F;z<W;z+=3)x(i[z+0],i[z+1],i[z+2])}const S=new U,b=new U,v=new U,w=new U;function y(E){v.fromArray(r,E*3),w.copy(v);const R=c[E];S.copy(R),S.sub(v.multiplyScalar(v.dot(R))).normalize(),b.crossVectors(w,R);const P=b.dot(h[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=P}for(let E=0,R=T.length;E<R;++E){const I=T[E],P=I.start,F=I.count;for(let z=P,W=P+F;z<W;z+=3)y(i[z+0]),y(i[z+1]),y(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new pi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fl extends ri{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],_=[],g=[],m=[];for(let f=0;f<=i;f++){const M=[],x=f/i;let T=0;f===0&&o===0?T=.5/t:f===i&&l===Math.PI&&(T=-.5/t);for(let S=0;S<=t;S++){const b=S/t;u.x=-e*Math.cos(n+b*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(n+b*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+T,1-x),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const x=h[f][M+1],T=h[f][M],S=h[f+1][M],b=h[f+1][M+1];(f!==0||o>0)&&p.push(x,T,b),(f!==i-1||l<Math.PI)&&p.push(T,S,b)}this.setIndex(p),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yo extends ri{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const M=f*d-o;for(let x=0;x<c;x++){const T=x*u-r;_.push(T,-M,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const x=M+c*f,T=M+c*(f+1),S=M+1+c*(f+1),b=M+1+c*f;p.push(x,T,b),p.push(T,S,b)}this.setIndex(p),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class th extends pi{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new U,Ta=new U,Gr=new U,gn=new U,Ra=new U,Wr=new U,Ca=new U;class Nl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ta.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(Ta);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=gn.dot(this.direction),l=-gn.dot(Gr),c=gn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ta).addScaledVector(Gr,d),p}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const i=ji.dot(this.direction),n=ji.dot(ji)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,i,n,r){Ra.subVectors(t,e),Wr.subVectors(i,e),Ca.crossVectors(Ra,Wr);let o=this.direction.dot(Ca),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const l=a*this.direction.dot(Wr.crossVectors(gn,Wr));if(l<0)return null;const c=a*this.direction.dot(Ra.cross(gn));if(c<0||l+c>o)return null;const h=-a*gn.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const vi=new U,qi=new U,La=new U,Yi=new U,ps=new U,ms=new U,ih=new U,Pa=new U,Ia=new U,Da=new U;let Xr=!1;class Mi{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),vi.subVectors(e,t),n.cross(vi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){vi.subVectors(n,t),qi.subVectors(i,t),La.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(qi),l=vi.dot(La),c=qi.dot(qi),h=qi.dot(La),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Yi),Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getUV(e,t,i,n,r,o,a,l){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(e,t,i,n,r,o,a,l)}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,Yi),l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l}static isFrontFacing(e,t,i,n){return vi.subVectors(i,t),qi.subVectors(e,t),vi.cross(qi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),Mi.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;ps.subVectors(n,i),ms.subVectors(r,i),Pa.subVectors(e,i);const l=ps.dot(Pa),c=ms.dot(Pa);if(l<=0&&c<=0)return t.copy(i);Ia.subVectors(e,n);const h=ps.dot(Ia),u=ms.dot(Ia);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ps,o);Da.subVectors(e,r);const p=ps.dot(Da),_=ms.dot(Da);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ms,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return ih.subVectors(r,n),a=(u-h)/(u-h+(p-_)),t.copy(n).addScaledVector(ih,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ds extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nh=new it,Ri=new Nl,jr=new qs,sh=new U,gs=new U,_s=new U,xs=new U,Ua=new U,qr=new U,Yr=new De,$r=new De,Kr=new De,rh=new U,oh=new U,ah=new U,Zr=new U,Jr=new U;class ht extends kt{constructor(e=new ri,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ua.fromBufferAttribute(u,e),o?qr.addScaledVector(Ua,h):qr.addScaledVector(Ua.sub(t),h))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(jr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(jr,sh)===null||Ri.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(nh.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(nh),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const n=this.geometry,r=this.material,o=n.index,a=n.attributes.position,l=n.attributes.uv,c=n.attributes.uv1,h=n.attributes.normal,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],f=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=f,T=M;x<T;x+=3){const S=o.getX(x),b=o.getX(x+1),v=o.getX(x+2);i=Qr(this,m,e,Ri,l,c,h,S,b,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const f=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);i=Qr(this,r,e,Ri,l,c,h,f,M,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],f=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=f,T=M;x<T;x+=3){const S=x,b=x+1,v=x+2;i=Qr(this,m,e,Ri,l,c,h,S,b,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const f=g,M=g+1,x=g+2;i=Qr(this,r,e,Ri,l,c,h,f,M,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Fp(s,e,t,i,n,r,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===wi,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Jr);return c<t.near||c>t.far?null:{distance:c,point:Jr.clone(),object:s}}function Qr(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,gs),s.getVertexPosition(l,_s),s.getVertexPosition(c,xs);const h=Fp(s,e,t,i,gs,_s,xs,Zr);if(h){n&&(Yr.fromBufferAttribute(n,a),$r.fromBufferAttribute(n,l),Kr.fromBufferAttribute(n,c),h.uv=Mi.getInterpolation(Zr,gs,_s,xs,Yr,$r,Kr,new De)),r&&(Yr.fromBufferAttribute(r,a),$r.fromBufferAttribute(r,l),Kr.fromBufferAttribute(r,c),h.uv1=Mi.getInterpolation(Zr,gs,_s,xs,Yr,$r,Kr,new De),h.uv2=h.uv1),o&&(rh.fromBufferAttribute(o,a),oh.fromBufferAttribute(o,l),ah.fromBufferAttribute(o,c),h.normal=Mi.getInterpolation(Zr,gs,_s,xs,rh,oh,ah,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Mi.getNormal(gs,_s,xs,u.normal),h.face=u}return h}const vs=new it,lh=new it,eo=[],ch=new Ln,Np=new it,ar=new ht,lr=new qs;class zp extends ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new th(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),ch.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),lr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,vs),lh.multiplyMatrices(i,vs),ar.matrixWorld=lh,ar.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const l=eo[o];l.instanceId=r,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new th(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Nu extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ct{constructor(e=0,t=0,i=0,n=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(p+1)/2,S=(f+1)/2,b=(h+d)/4,v=(u+g)/4,w=(_+m)/4;return x>T&&x>S?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=b/i,r=v/i):T>S?T<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(T),i=b/n,r=w/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=v/r,n=w/r),this.set(i,n,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}const Fa=new U,Op=new U,Bp=new We;class Hn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Fa.subVectors(i,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bp.getNormalMatrix(e),n=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new qs,to=new U;class zl{constructor(e=new Hn,t=new Hn,i=new Hn,n=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],f=i[13],M=i[14],x=i[15];return t[0].setComponents(a-n,u-l,g-d,x-m).normalize(),t[1].setComponents(a+n,u+l,g+d,x+m).normalize(),t[2].setComponents(a+r,u+c,g+p,x+f).normalize(),t[3].setComponents(a-r,u-c,g-p,x-f).normalize(),t[4].setComponents(a-o,u-h,g-_,x-M).normalize(),t[5].setComponents(a+o,u+h,g+_,x+M).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(to.x=n.normal.x>0?e.max.x:e.min.x,to.y=n.normal.y>0?e.max.y:e.min.y,to.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Na=new it,hh=new U,uh=new U;class kp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}let zu=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class ti extends zu{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dh=new it,cr=new U,za=new U;class Vp extends kp{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(cr),za.copy(i.position),za.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(za),i.updateMatrixWorld(),n.makeTranslation(-cr.x,-cr.y,-cr.z),dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}class Ou extends Nu{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const Ol=(s,e)=>(Math.random()*(e-s+1)|0)+s,Xt=(s,e)=>Math.random()*(e-s)+s,Hp=(s,e,t)=>s+t*(e-s),Bu=1/60,et=Object.freeze({m075:Math.PI*.75,m2:Math.PI*2,d2:Math.PI/2,d3:Math.PI/3,d4:Math.PI/4,d6:Math.PI/6});var $t;(s=>{s.UP=new U(0,1,0),s.RIGHT=new U(1,0,0),s.FORWARD=new U(0,0,1),s.BACKWARD=new U(0,0,-1),s.LEFT=new U(-1,0,0),s.DOWN=new U(0,-1,0),s.random=()=>new U(Xt(-1,1),Xt(-1,1),Xt(-1,1))})($t||($t={}));function ku(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gp(s,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,p=h.updateRange;s.bindBuffer(u,c),p.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Ni extends ri{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,n,o,2),_("x","z","y",1,-1,e,i,-t,n,o,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function _(g,m,f,M,x,T,S,b,v,w,y){const E=T/v,R=S/w,I=T/2,P=S/2,F=b/2,z=v+1,W=w+1;let V=0,j=0;const Y=new U;for(let ne=0;ne<W;ne++){const me=ne*R-P;for(let he=0;he<z;he++){const q=he*E-I;Y[g]=q*M,Y[m]=me*x,Y[f]=F,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(he/v),u.push(1-ne/w),V+=1}}for(let ne=0;ne<w;ne++)for(let me=0;me<v;me++){const he=d+me+z*ne,q=d+me+z*(ne+1),ee=d+(me+1)+z*(ne+1),le=d+(me+1)+z*ne;l.push(he,q,le),l.push(q,ee,le),j+=6}a.addGroup(p,j,y),p+=j,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const i=Gs(s[t]);for(const n in i)e[n]=i[n]}return e}function Wp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vu(s){return s.getRenderTarget()===null?s.outputColorSpace:ki}const Xp={clone:Gs,merge:Gt},jp=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,qp=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Ei extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const Yp=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,$p=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Kp=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,Zp=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Jp=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,Qp=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,em=`
vec3 transformed = vec3( position );
`,tm=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,im=`

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

`,nm=`

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

`,sm=`
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
`,rm=`
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
`,om=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,am=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,lm=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,cm=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,hm=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,um=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,dm=`
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
`,fm=`
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
`,pm=`
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
`,mm=`
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
`,gm=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,_m=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,xm=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,vm=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,ym=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Mm=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Sm=`
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
`,bm=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,wm=`
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
`,Em=`
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
`,Am=`
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
`,Tm=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,Rm=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Cm=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Lm=`
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
`,Pm=`

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
`,Im=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,Dm=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,Um=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,Fm=`
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
`,Nm=`
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
`,zm=`
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
`,Om=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Bm=`
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
`,km=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Vm=`
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
`,Hm=`
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
`,Gm=`

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
`,Wm=`
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
`,Xm=`
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
`,jm=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,qm=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Ym=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,$m=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Km=`
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
`,Zm=`
#ifdef USE_MAP

	diffuseColor *= texture2D( map, vMapUv );

#endif
`,Jm=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Qm=`
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
`,eg=`
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
`,tg=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,ig=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,ng=`
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
`,sg=`
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
`,rg=`
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
`,og=`
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
`,ag=`
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

`,lg=`

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
`,cg=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,hg=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,ug=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,dg=`
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
`,fg=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,pg=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,mg=`

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
`,gg=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,_g=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,xg=`
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
`,vg=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,yg=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Mg=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Sg=`
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
`,bg=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,wg=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Eg=`
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
`,Ag=`

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
`,Tg=`

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


`,Rg=`
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
`,Cg=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Lg=`
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
`,Pg=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,Ig=`
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
`,Dg=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Ug=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,Fg=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,Ng=`
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
`,zg=`
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
`,Og=`
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
`,Bg=`
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
`,kg=`
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
`,Vg=`
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
`,Hg=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,Gg=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Wg=`
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
`,Xg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,jg=`

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
`,qg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Yg=`
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
`,$g=`
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
`,Kg=`
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
`,Zg=`
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
`,Jg=`
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
`,Qg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,e0=`
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
`,t0=`
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
`,i0=`
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
`,n0=`
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
`,s0=`
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
`,r0=`
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
`,o0=`
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
`,a0=`
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
`,l0=`
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
`,c0=`
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
`,h0=`
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
`,u0=`
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
`,d0=`
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
`,f0=`
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
`,p0=`
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
`,m0=`
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
`,g0=`
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
`,_0=`
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
`,x0=`
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
`,v0=`
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
`,y0=`
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
`,M0=`
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
`,S0=`
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
`,Fe={alphamap_fragment:Yp,alphamap_pars_fragment:$p,alphatest_fragment:Kp,alphatest_pars_fragment:Zp,aomap_fragment:Jp,aomap_pars_fragment:Qp,begin_vertex:em,beginnormal_vertex:tm,bsdfs:im,iridescence_fragment:nm,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:xm,emissivemap_pars_fragment:vm,encodings_fragment:ym,encodings_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:bm,envmap_pars_fragment:wm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:zm,envmap_vertex:Am,fog_vertex:Tm,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Pm,lightmap_fragment:Im,lightmap_pars_fragment:Dm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Fm,lights_pars_begin:Nm,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:km,lights_phong_pars_fragment:Vm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:jm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Km,map_fragment:Zm,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ig,morphcolor_vertex:ng,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,output_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Tg,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Lg,skinning_vertex:Pg,skinnormal_vertex:Ig,specularmap_fragment:Dg,specularmap_pars_fragment:Ug,tonemapping_fragment:Fg,tonemapping_pars_fragment:Ng,transmission_fragment:zg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:kg,uv_vertex:Vg,worldpos_vertex:Hg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:jg,cube_vert:qg,cube_frag:Yg,depth_vert:$g,depth_frag:Kg,distanceRGBA_vert:Zg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:e0,linedashed_vert:t0,linedashed_frag:i0,meshbasic_vert:n0,meshbasic_frag:s0,meshlambert_vert:r0,meshlambert_frag:o0,meshmatcap_vert:a0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:f0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:_0,points_frag:x0,shadow_vert:v0,shadow_frag:y0,sprite_vert:M0,sprite_frag:S0},ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},Pi={basic:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([ce.lights,ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Pi.physical={uniforms:Gt([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const io={r:0,b:0,g:0};function b0(s,e,t,i,n,r,o){const a=new ze(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(m,f){let M=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),M=!0),s.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),M=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),M=!0;break}(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===jo)?(h===void 0&&(h=new ht(new Ni(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Gs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Ne,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ht(new Yo(2,2),new Ei({name:"BackgroundMaterial",uniforms:Gs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(io,Vu(s)),i.buffers.color.setClear(io.r,io.g,io.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function w0(s,e,t,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(F,z,W,V,j){let Y=!1;if(o){const ne=g(V,W,z);c!==ne&&(c=ne,p(c.object)),Y=f(F,V,W,j),Y&&M(F,V,W,j)}else{const ne=z.wireframe===!0;(c.geometry!==V.id||c.program!==W.id||c.wireframe!==ne)&&(c.geometry=V.id,c.program=W.id,c.wireframe=ne,Y=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,w(F,z,W,V),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(F){return i.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,z,W){const V=W.wireframe===!0;let j=a[F.id];j===void 0&&(j={},a[F.id]=j);let Y=j[z.id];Y===void 0&&(Y={},j[z.id]=Y);let ne=Y[V];return ne===void 0&&(ne=m(d()),Y[V]=ne),ne}function m(F){const z=[],W=[],V=[];for(let j=0;j<n;j++)z[j]=0,W[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:V,object:F,attributes:{},index:null}}function f(F,z,W,V){const j=c.attributes,Y=z.attributes;let ne=0;const me=W.getAttributes();for(const he in me)if(me[he].location>=0){const ee=j[he];let le=Y[he];if(le===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;ne++}return c.attributesNum!==ne||c.index!==V}function M(F,z,W,V){const j={},Y=z.attributes;let ne=0;const me=W.getAttributes();for(const he in me)if(me[he].location>=0){let ee=Y[he];ee===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),j[he]=le,ne++}c.attributes=j,c.attributesNum=ne,c.index=V}function x(){const F=c.newAttributes;for(let z=0,W=F.length;z<W;z++)F[z]=0}function T(F){S(F,0)}function S(F,z){const W=c.newAttributes,V=c.enabledAttributes,j=c.attributeDivisors;W[F]=1,V[F]===0&&(s.enableVertexAttribArray(F),V[F]=1),j[F]!==z&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),j[F]=z)}function b(){const F=c.newAttributes,z=c.enabledAttributes;for(let W=0,V=z.length;W<V;W++)z[W]!==F[W]&&(s.disableVertexAttribArray(W),z[W]=0)}function v(F,z,W,V,j,Y){i.isWebGL2===!0&&(W===s.INT||W===s.UNSIGNED_INT)?s.vertexAttribIPointer(F,z,W,j,Y):s.vertexAttribPointer(F,z,W,V,j,Y)}function w(F,z,W,V){if(i.isWebGL2===!1&&(F.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=V.attributes,Y=W.getAttributes(),ne=z.defaultAttributeValues;for(const me in Y){const he=Y[me];if(he.location>=0){let q=j[me];if(q===void 0&&(me==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),me==="instanceColor"&&F.instanceColor&&(q=F.instanceColor)),q!==void 0){const ee=q.normalized,le=q.itemSize,B=t.get(q);if(B===void 0)continue;const A=B.buffer,O=B.type,X=B.bytesPerElement;if(q.isInterleavedBufferAttribute){const H=q.data,te=H.stride,fe=q.offset;if(H.isInstancedInterleavedBuffer){for(let ue=0;ue<he.locationSize;ue++)S(he.location+ue,H.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ue=0;ue<he.locationSize;ue++)T(he.location+ue);s.bindBuffer(s.ARRAY_BUFFER,A);for(let ue=0;ue<he.locationSize;ue++)v(he.location+ue,le/he.locationSize,O,ee,te*X,(fe+le/he.locationSize*ue)*X)}else{if(q.isInstancedBufferAttribute){for(let H=0;H<he.locationSize;H++)S(he.location+H,q.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let H=0;H<he.locationSize;H++)T(he.location+H);s.bindBuffer(s.ARRAY_BUFFER,A);for(let H=0;H<he.locationSize;H++)v(he.location+H,le/he.locationSize,O,ee,le*X,le/he.locationSize*H*X)}}else if(ne!==void 0){const ee=ne[me];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(he.location,ee);break;case 3:s.vertexAttrib3fv(he.location,ee);break;case 4:s.vertexAttrib4fv(he.location,ee);break;default:s.vertexAttrib1fv(he.location,ee)}}}}b()}function y(){I();for(const F in a){const z=a[F];for(const W in z){const V=z[W];for(const j in V)_(V[j].object),delete V[j];delete z[W]}delete a[F]}}function E(F){if(a[F.id]===void 0)return;const z=a[F.id];for(const W in z){const V=z[W];for(const j in V)_(V[j].object),delete V[j];delete z[W]}delete a[F.id]}function R(F){for(const z in a){const W=a[z];if(W[F.id]===void 0)continue;const V=W[F.id];for(const j in V)_(V[j].object),delete V[j];delete W[F.id]}}function I(){P(),h=!0,c!==l&&(c=l,p(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:I,resetDefaultState:P,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:T,disableUnusedAttributes:b}}function E0(s,e,t,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,p;if(n)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function A0(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=o||e.has("OES_texture_float"),S=x&&T,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:b}}function T0(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new Hn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!n||_===null||_.length===0||r&&!m)r?h(null):c();else{const M=r?0:i,x=M*4;let T=f.clippingState||null;l.value=T,T=h(_,d,x,p);for(let S=0;S!==x;++S)T[S]=t[S];f.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,T=p;x!==g;++x,T+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}let ys;class Hu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Uo("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zs(t[i]/255)*255):t[i]=zs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gu{constructor(e=null){this.isSource=!0,this.uuid=js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Oa(n[o].image)):r.push(Oa(n[o]))}else r=Oa(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R0=0;class ni extends Rn{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=Si,n=Si,r=hi,o=Ar,a=ui,l=ss,c=ni.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=js(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===es?Ne:ts),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hl:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hl:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?es:Lu}set encoding(e){br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===es?Ne:ts}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=Ru;ni.DEFAULT_ANISOTROPY=1;class an extends Rn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===es?Ne:ts),this.texture=new ni(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:hi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ms=-90,Ss=1;class C0 extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new ti(Ms,Ss,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new ti(Ms,Ss,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new ti(Ms,Ss,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ti(Ms,Ss,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ti(Ms,Ss,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ti(Ms,Ss,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=sn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Bl extends ni{constructor(e,t,i,n,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L0 extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===es?Ne:ts),this.texture=new Bl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ni(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:En});r.uniforms.tEquirect.value=t;const o=new ht(n,r),a=t.minFilter;return t.minFilter===Ar&&(t.minFilter=hi),new C0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}function P0(s){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=ks:a===cl&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ll||a===cl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new L0(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class I0 extends zu{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,fh=[.125,.215,.35,.446,.526,.582],jn=20,Ba=new I0,ph=new ze;let ka=null;const Gn=(1+Math.sqrt(5))/2,bs=1/Gn,mh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Gn,bs),new U(0,Gn,-bs),new U(bs,0,Gn),new U(-bs,0,Gn),new U(Gn,bs,0),new U(-Gn,bs,0)];class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ka=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka),e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Tr,format:ui,colorSpace:ki,depthBuffer:!1},n=gh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=U0(r,e,t)}return n}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,n){const a=new ti(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ph),h.toneMapping=sn,h.autoClear=!1;const p=new Ds({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new ht(new Ni,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(ph),g=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;no(n,M*x,f>2?x:0,x,x),h.setRenderTarget(n),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===ks||e.mapping===Vs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;no(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=mh[(n-1)%mh.length];this._blur(e,n-1,n,r,o)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let M=0;for(let v=0;v<jn;++v){const w=v/g,y=Math.exp(-w*w/2);f.push(y),v===0?M+=y:v<m&&(M+=2*y)}for(let v=0;v<f.length;v++)f[v]=f[v]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const T=this._sizeLods[n],S=3*T*(n>x-Us?n-x+Us:0),b=4*(this._cubeSize-T);no(t,S,b,3*T,2*T),l.setRenderTarget(t),l.render(u,Ba)}}function D0(s){const e=[],t=[],i=[];let n=s;const r=s-Us+1+fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Us?l=fh[o-s+Us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,M=new Float32Array(g*_*p),x=new Float32Array(m*_*p),T=new Float32Array(f*_*p);for(let b=0;b<p;b++){const v=b%3*2/3-1,w=b>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];M.set(y,g*_*b),x.set(d,m*_*b);const E=[b,b,b,b,b,b];T.set(E,f*_*b)}const S=new ri;S.setAttribute("position",new pi(M,g)),S.setAttribute("uv",new pi(x,m)),S.setAttribute("faceIndex",new pi(T,f)),e.push(S),n>Us&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gh(s,e,t){const i=new an(s,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function U0(s,e,t){const i=new Float32Array(jn),n=new U(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:kl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function _h(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function xh(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function F0(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ll||l===cl,h=l===ks||l===Vs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new fl(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new fl(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function N0(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function z0(s,e,t,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete n[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let x=0,T=M.length;x<T;x+=3){const S=M[x+0],b=M[x+1],v=M[x+2];d.push(S,b,b,v,v,S)}}else{const M=_.array;g=_.version;for(let x=0,T=M.length/3-1;x<T;x+=3){const S=x+0,b=x+1,v=x+2;d.push(S,b,b,v,v,S)}}const m=new(Fu(d)?Uu:Du)(d,1);m.version=g;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function O0(s,e,t,i){const n=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*l),t.update(p,r,1)}function u(d,p,_){if(_===0)return;let g,m;if(n)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,d*l,_),t.update(p,r,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function B0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class Wu extends ni{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=St,this.minFilter=St,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function k0(s,e){return s[0]-e[0]}function V0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function H0(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let F=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",F)};g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],v=h.morphAttributes.color||[];let w=0;M===!0&&(w=1),x===!0&&(w=2),T===!0&&(w=3);let y=h.attributes.position.count*w,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*E*4*_),I=new Wu(R,y,E,_);I.type=$n,I.needsUpdate=!0;const P=w*4;for(let z=0;z<_;z++){const W=S[z],V=b[z],j=v[z],Y=y*E*4*z;for(let ne=0;ne<W.count;ne++){const me=ne*P;M===!0&&(o.fromBufferAttribute(W,ne),R[Y+me+0]=o.x,R[Y+me+1]=o.y,R[Y+me+2]=o.z,R[Y+me+3]=0),x===!0&&(o.fromBufferAttribute(V,ne),R[Y+me+4]=o.x,R[Y+me+5]=o.y,R[Y+me+6]=o.z,R[Y+me+7]=0),T===!0&&(o.fromBufferAttribute(j,ne),R[Y+me+8]=o.x,R[Y+me+9]=o.y,R[Y+me+10]=o.z,R[Y+me+11]=j.itemSize===4?o.w:1)}}g={count:_,texture:I,size:new De(y,E)},r.set(h,g),h.addEventListener("dispose",F)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];const f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",f),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const p=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==p){_=[];for(let x=0;x<p;x++)_[x]=[x,0];i[h.id]=_}for(let x=0;x<p;x++){const T=_[x];T[0]=x,T[1]=d[x]}_.sort(V0);for(let x=0;x<8;x++)x<p&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(k0);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const T=a[x],S=T[0],b=T[1];S!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+x)!==g[S]&&h.setAttribute("morphTarget"+x,g[S]),m&&h.getAttribute("morphNormal"+x)!==m[S]&&h.setAttribute("morphNormal"+x,m[S]),n[x]=b,f+=b):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}const M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function G0(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class W0 extends ni{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=St,this.minFilter=St,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=new ni,ju=new Wu,qu=new W0,Yu=new Bl,vh=[],yh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),bh=new Float32Array(4);function Ys(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=vh[n];if(r===void 0&&(r=new Float32Array(n),vh[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function $o(s,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function X0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function j0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function Y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function $0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;bh.set(i),s.uniformMatrix2fv(this.addr,!1,bh),wt(t,i)}}function K0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Sh.set(i),s.uniformMatrix3fv(this.addr,!1,Sh),wt(t,i)}}function Z0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Mh.set(i),s.uniformMatrix4fv(this.addr,!1,Mh),wt(t,i)}}function J0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function e_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function t_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function i_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function o_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Xu,n)}function a_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||qu,n)}function l_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Yu,n)}function c_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||ju,n)}function h_(s){switch(s){case 5126:return X0;case 35664:return j0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return K0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return i_;case 36294:return n_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(s,e){s.uniform1fv(this.addr,e)}function d_(s,e){const t=Ys(e,this.size,2);s.uniform2fv(this.addr,t)}function f_(s,e){const t=Ys(e,this.size,3);s.uniform3fv(this.addr,t)}function p_(s,e){const t=Ys(e,this.size,4);s.uniform4fv(this.addr,t)}function m_(s,e){const t=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function g_(s,e){const t=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function __(s,e){const t=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function x_(s,e){s.uniform1iv(this.addr,e)}function v_(s,e){s.uniform2iv(this.addr,e)}function y_(s,e){s.uniform3iv(this.addr,e)}function M_(s,e){s.uniform4iv(this.addr,e)}function S_(s,e){s.uniform1uiv(this.addr,e)}function b_(s,e){s.uniform2uiv(this.addr,e)}function w_(s,e){s.uniform3uiv(this.addr,e)}function E_(s,e){s.uniform4uiv(this.addr,e)}function A_(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);bt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Xu,r[o])}function T_(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);bt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||qu,r[o])}function R_(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);bt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Yu,r[o])}function C_(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);bt(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||ju,r[o])}function L_(s){switch(s){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return w_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}class P_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=h_(t.type)}}class I_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=L_(t.type)}}class D_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(e,t[a.id],i)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function wh(s,e){s.seq.push(e),s.map[e.id]=e}function U_(s,e,t){const i=s.name,n=i.length;for(Va.lastIndex=0;;){const r=Va.exec(i),o=Va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){wh(t,c===void 0?new P_(a,s,e):new I_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new D_(a),wh(t,u)),t=u}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);U_(r,o,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Eh(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let F_=0;function N_(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function z_(s){switch(s){case ki:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Ah(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+N_(s.getShaderSource(e),o)}else return n}function O_(s,e){const t=z_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function B_(s,e){let t;switch(e){case Xf:t="Linear";break;case jf:t="Reinhard";break;case qf:t="OptimizedCineon";break;case Tu:t="ACESFilmic";break;case Yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function V_(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function H_(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function gr(s){return s!==""}function Th(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(G_,W_)}function W_(s,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pl(t)}const X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(s){return s.replace(X_,j_)}function j_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Lh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Y_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Vs:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function K_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Gf:e="ENVMAP_BLENDING_MIX";break;case Wf:e="ENVMAP_BLENDING_ADD";break}return e}function Z_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function J_(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=q_(t),c=Y_(t),h=$_(t),u=K_(t),d=Z_(t),p=t.isWebGL2?"":k_(t),_=V_(r),g=n.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(gr).join(`
`),m.length>0&&(m+=`
`),f=[p,_].filter(gr).join(`
`),f.length>0&&(f+=`
`)):(m=[Lh(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),f=[p,Lh(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==sn?B_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,O_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=pl(o),o=Th(o,t),o=Rh(o,t),a=pl(a),a=Th(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Hs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+o,T=M+f+a,S=Eh(n,n.VERTEX_SHADER,x),b=Eh(n,n.FRAGMENT_SHADER,T);if(n.attachShader(g,S),n.attachShader(g,b),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),s.debug.checkShaderErrors){const y=n.getProgramInfoLog(g).trim(),E=n.getShaderInfoLog(S).trim(),R=n.getShaderInfoLog(b).trim();let I=!0,P=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,S,b);else{const F=Ah(n,S,"vertex"),z=Ah(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+F+`
`+z)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(E===""||R==="")&&(P=!1);P&&(this.diagnostics={runnable:I,programLog:y,vertexShader:{log:E,prefix:m},fragmentShader:{log:R,prefix:f}})}n.deleteShader(S),n.deleteShader(b);let v;this.getUniforms=function(){return v===void 0&&(v=new So(n,g)),v};let w;return this.getAttributes=function(){return w===void 0&&(w=H_(n,g)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}let Q_=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tx(e),t.set(e,i)),i}}class tx{constructor(e){this.id=Q_++,this.code=e,this.usedTimes=0}}function ix(s,e,t,i,n,r,o){const a=new Ul,l=new ex,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function m(y,E,R,I,P){const F=I.fog,z=P.geometry,W=y.isMeshStandardMaterial?I.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),j=V&&V.mapping===jo?V.image.height:null,Y=_[y.type];y.precision!==null&&(p=n.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=ne!==void 0?ne.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let q,ee,le,B;if(Y){const nt=Pi[Y];q=nt.vertexShader,ee=nt.fragmentShader}else q=y.vertexShader,ee=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),B=l.getFragmentShaderID(y);const A=s.getRenderTarget(),O=P.isInstancedMesh===!0,X=!!y.map,H=!!y.matcap,te=!!V,fe=!!y.aoMap,ue=!!y.lightMap,Be=!!y.bumpMap,ot=!!y.normalMap,Lt=!!y.displacementMap,Et=!!y.emissiveMap,Mt=!!y.metalnessMap,Ye=!!y.roughnessMap,ut=y.clearcoat>0,jt=y.iridescence>0,D=y.sheen>0,C=y.transmission>0,$=ut&&!!y.clearcoatMap,re=ut&&!!y.clearcoatNormalMap,oe=ut&&!!y.clearcoatRoughnessMap,de=jt&&!!y.iridescenceMap,Pe=jt&&!!y.iridescenceThicknessMap,xe=D&&!!y.sheenColorMap,J=D&&!!y.sheenRoughnessMap,ye=!!y.specularMap,Ee=!!y.specularColorMap,Te=!!y.specularIntensityMap,_e=C&&!!y.transmissionMap,Me=C&&!!y.thicknessMap,Xe=!!y.gradientMap,Je=!!y.alphaMap,gt=y.alphaTest>0,N=!!y.extensions,K=!!z.attributes.uv1,se=!!z.attributes.uv2,pe=!!z.attributes.uv3;return{isWebGL2:h,shaderID:Y,shaderName:y.type,vertexShader:q,fragmentShader:ee,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:O,instancingColor:O&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:A===null?s.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ki,map:X,matcap:H,envMap:te,envMapMode:te&&V.mapping,envMapCubeUVHeight:j,aoMap:fe,lightMap:ue,bumpMap:Be,normalMap:ot,displacementMap:d&&Lt,emissiveMap:Et,normalMapObjectSpace:ot&&y.normalMapType===gp,normalMapTangentSpace:ot&&y.normalMapType===qo,metalnessMap:Mt,roughnessMap:Ye,clearcoat:ut,clearcoatMap:$,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,iridescence:jt,iridescenceMap:de,iridescenceThicknessMap:Pe,sheen:D,sheenColorMap:xe,sheenRoughnessMap:J,specularMap:ye,specularColorMap:Ee,specularIntensityMap:Te,transmission:C,transmissionMap:_e,thicknessMap:Me,gradientMap:Xe,opaque:y.transparent===!1&&y.blending===Ns,alphaMap:Je,alphaTest:gt,combine:y.combine,mapUv:X&&g(y.map.channel),aoMapUv:fe&&g(y.aoMap.channel),lightMapUv:ue&&g(y.lightMap.channel),bumpMapUv:Be&&g(y.bumpMap.channel),normalMapUv:ot&&g(y.normalMap.channel),displacementMapUv:Lt&&g(y.displacementMap.channel),emissiveMapUv:Et&&g(y.emissiveMap.channel),metalnessMapUv:Mt&&g(y.metalnessMap.channel),roughnessMapUv:Ye&&g(y.roughnessMap.channel),clearcoatMapUv:$&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:J&&g(y.sheenRoughnessMap.channel),specularMapUv:ye&&g(y.specularMap.channel),specularColorMapUv:Ee&&g(y.specularColorMap.channel),specularIntensityMapUv:Te&&g(y.specularIntensityMap.channel),transmissionMapUv:_e&&g(y.transmissionMap.channel),thicknessMapUv:Me&&g(y.thicknessMap.channel),alphaMapUv:Je&&g(y.alphaMap.channel),vertexTangents:ot&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:se,vertexUv3s:pe,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(X||Je),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:he,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:sn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ui,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:N&&y.extensions.derivatives===!0,extensionFragDepth:N&&y.extensions.fragDepth===!0,extensionDrawBuffers:N&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(M(E,y),x(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),y.push(a.mask)}function T(y){const E=_[y.type];let R;if(E){const I=Pi[E];R=Xp.clone(I.uniforms)}else R=y.uniforms;return R}function S(y,E){let R;for(let I=0,P=c.length;I<P;I++){const F=c[I];if(F.cacheKey===E){R=F,++R.usedTimes;break}}return R===void 0&&(R=new J_(s,E,y,r),c.push(R)),R}function b(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function v(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:S,releaseProgram:b,releaseShaderCache:v,programs:c,dispose:w}}function nx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function sx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ph(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ih(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,p,_,g,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||sx),i.length>1&&i.sort(d||Ph),n.length>1&&n.sort(d||Ph)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function rx(){let s=new WeakMap;function e(i,n){const r=s.get(i);let o;return r===void 0?(o=new Ih,s.set(i,[o])):n>=r.length?(o=new Ih,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ox(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ze};break;case"SpotLight":t={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function ax(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let lx=0;function cx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hx(s,e){const t=new ox,i=ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new U);const r=new U,o=new it,a=new it;function l(h,u){let d=0,p=0,_=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let g=0,m=0,f=0,M=0,x=0,T=0,S=0,b=0,v=0,w=0;h.sort(cx);const y=u===!0?Math.PI:1;for(let R=0,I=h.length;R<I;R++){const P=h[R],F=P.color,z=P.intensity,W=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*z*y,p+=F.g*z*y,_+=F.b*z*y;else if(P.isLightProbe)for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],z);else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const Y=P.shadow,ne=i.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,n.directionalShadow[g]=ne,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=P.shadow.matrix,T++}n.directional[g]=j,g++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(F).multiplyScalar(z*y),j.distance=W,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[f]=j;const Y=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[f]=Y.matrix,P.castShadow){const ne=i.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,n.spotShadow[f]=ne,n.spotShadowMap[f]=V,b++}f++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(F).multiplyScalar(z),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=j,M++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*y),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Y=P.shadow,ne=i.get(P);ne.shadowBias=Y.bias,ne.shadowNormalBias=Y.normalBias,ne.shadowRadius=Y.radius,ne.shadowMapSize=Y.mapSize,ne.shadowCameraNear=Y.camera.near,ne.shadowCameraFar=Y.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=P.shadow.matrix,S++}n.point[m]=j,m++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(z*y),j.groundColor.copy(P.groundColor).multiplyScalar(z*y),n.hemi[x]=j,x++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=_;const E=n.hash;(E.directionalLength!==g||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==M||E.hemiLength!==x||E.numDirectionalShadows!==T||E.numPointShadows!==S||E.numSpotShadows!==b||E.numSpotMaps!==v)&&(n.directional.length=g,n.spot.length=f,n.rectArea.length=M,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,E.directionalLength=g,E.pointLength=m,E.spotLength=f,E.rectAreaLength=M,E.hemiLength=x,E.numDirectionalShadows=T,E.numPointShadows=S,E.numSpotShadows=b,E.numSpotMaps=v,n.version=lx++)}function c(h,u){let d=0,p=0,_=0,g=0,m=0;const f=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const T=h[M];if(T.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),d++}else if(T.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),_++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(T.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function Dh(s,e){const t=new hx(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ux(s,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Dh(s,e),t.set(r,[l])):o>=a.length?(l=new Dh(s,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class dx extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fx extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,mx=`
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
`;function gx(s,e,t){let i=new zl;const n=new De,r=new De,o=new ct,a=new dx({depthPacking:mp}),l=new fx,c={},h=t.maxTextureSize,u={[wi]:Kt,[Kt]:wi,[Ui]:Ui},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:px,fragmentShader:mx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ri;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ht(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let f=this.type;this.render=function(S,b,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const w=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),R=s.state;R.setBlending(En),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const I=f!==Ki&&this.type===Ki,P=f===Ki&&this.type!==Ki;for(let F=0,z=S.length;F<z;F++){const W=S[F],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const j=V.getFrameExtents();if(n.multiply(j),r.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/j.x),n.x=r.x*j.x,V.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/j.y),n.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||I===!0||P===!0){const ne=this.type!==Ki?{minFilter:St,magFilter:St}:{};V.map!==null&&V.map.dispose(),V.map=new an(n.x,n.y,ne),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const Y=V.getViewportCount();for(let ne=0;ne<Y;ne++){const me=V.getViewport(ne);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),R.viewport(o),V.updateMatrices(W,ne),i=V.getFrustum(),T(b,v,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Ki&&M(V,v),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,y,E)};function M(S,b){const v=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new an(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(b,null,v,d,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(b,null,v,p,g,null)}function x(S,b,v,w){let y=null;const E=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)y=E;else if(y=v.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const R=y.uuid,I=b.uuid;let P=c[R];P===void 0&&(P={},c[R]=P);let F=P[I];F===void 0&&(F=y.clone(),P[I]=F),y=F}if(y.visible=b.visible,y.wireframe=b.wireframe,w===Ki?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,v.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const R=s.properties.get(y);R.light=v}return y}function T(S,b,v,w,y){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Ki)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const I=e.update(S),P=S.material;if(Array.isArray(P)){const F=I.groups;for(let z=0,W=F.length;z<W;z++){const V=F[z],j=P[V.materialIndex];if(j&&j.visible){const Y=x(S,j,w,y);s.renderBufferDirect(v,null,I,Y,S,V)}}}else if(P.visible){const F=x(S,P,w,y);s.renderBufferDirect(v,null,I,F,S,null)}}const R=S.children;for(let I=0,P=R.length;I<P;I++)T(R[I],b,v,w,y)}}function _x(s,e,t){const i=t.isWebGL2;function n(){let N=!1;const K=new ct;let se=null;const pe=new ct(0,0,0,0);return{setMask:function(ve){se!==ve&&!N&&(s.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){N=ve},setClear:function(ve,nt,st,Nt,hn){hn===!0&&(ve*=Nt,nt*=Nt,st*=Nt),K.set(ve,nt,st,Nt),pe.equals(K)===!1&&(s.clearColor(ve,nt,st,Nt),pe.copy(K))},reset:function(){N=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let N=!1,K=null,se=null,pe=null;return{setTest:function(ve){ve?A(s.DEPTH_TEST):O(s.DEPTH_TEST)},setMask:function(ve){K!==ve&&!N&&(s.depthMask(ve),K=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Nf:s.depthFunc(s.NEVER);break;case zf:s.depthFunc(s.ALWAYS);break;case Of:s.depthFunc(s.LESS);break;case al:s.depthFunc(s.LEQUAL);break;case Bf:s.depthFunc(s.EQUAL);break;case kf:s.depthFunc(s.GEQUAL);break;case Vf:s.depthFunc(s.GREATER);break;case Hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=ve}},setLocked:function(ve){N=ve},setClear:function(ve){pe!==ve&&(s.clearDepth(ve),pe=ve)},reset:function(){N=!1,K=null,se=null,pe=null}}}function o(){let N=!1,K=null,se=null,pe=null,ve=null,nt=null,st=null,Nt=null,hn=null;return{setTest:function(_t){N||(_t?A(s.STENCIL_TEST):O(s.STENCIL_TEST))},setMask:function(_t){K!==_t&&!N&&(s.stencilMask(_t),K=_t)},setFunc:function(_t,oi,Ti){(se!==_t||pe!==oi||ve!==Ti)&&(s.stencilFunc(_t,oi,Ti),se=_t,pe=oi,ve=Ti)},setOp:function(_t,oi,Ti){(nt!==_t||st!==oi||Nt!==Ti)&&(s.stencilOp(_t,oi,Ti),nt=_t,st=oi,Nt=Ti)},setLocked:function(_t){N=_t},setClear:function(_t){hn!==_t&&(s.clearStencil(_t),hn=_t)},reset:function(){N=!1,K=null,se=null,pe=null,ve=null,nt=null,st=null,Nt=null,hn=null}}}const a=new n,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,M=null,x=null,T=null,S=null,b=null,v=null,w=null,y=!1,E=null,R=null,I=null,P=null,F=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=V>=2);let Y=null,ne={};const me=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),q=new ct().fromArray(me),ee=new ct().fromArray(he);function le(N,K,se,pe){const ve=new Uint8Array(4),nt=s.createTexture();s.bindTexture(N,nt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<se;st++)i&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(K,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(K+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return nt}const B={};B[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(B[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),A(s.DEPTH_TEST),l.setFunc(al),Lt(!1),Et(_c),A(s.CULL_FACE),Be(En);function A(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function O(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function X(N,K){return p[N]!==K?(s.bindFramebuffer(N,K),p[N]=K,i&&(N===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=K),N===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=K)),!0):!1}function H(N,K){let se=g,pe=!1;if(N)if(se=_.get(K),se===void 0&&(se=[],_.set(K,se)),N.isWebGLMultipleRenderTargets){const ve=N.texture;if(se.length!==ve.length||se[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,st=ve.length;nt<st;nt++)se[nt]=s.COLOR_ATTACHMENT0+nt;se.length=ve.length,pe=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,pe=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function te(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const fe={[Xn]:s.FUNC_ADD,[Af]:s.FUNC_SUBTRACT,[Tf]:s.FUNC_REVERSE_SUBTRACT};if(i)fe[yc]=s.MIN,fe[Mc]=s.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(fe[yc]=N.MIN_EXT,fe[Mc]=N.MAX_EXT)}const ue={[Rf]:s.ZERO,[Eu]:s.ONE,[Cf]:s.SRC_COLOR,[Au]:s.SRC_ALPHA,[Ff]:s.SRC_ALPHA_SATURATE,[Df]:s.DST_COLOR,[Pf]:s.DST_ALPHA,[Lf]:s.ONE_MINUS_SRC_COLOR,[Il]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[If]:s.ONE_MINUS_DST_ALPHA};function Be(N,K,se,pe,ve,nt,st,Nt){if(N===En){f===!0&&(O(s.BLEND),f=!1);return}if(f===!1&&(A(s.BLEND),f=!0),N!==wu){if(N!==M||Nt!==y){if((x!==Xn||b!==Xn)&&(s.blendEquation(s.FUNC_ADD),x=Xn,b=Xn),Nt)switch(N){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ol:s.blendFunc(s.ONE,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ol:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,S=null,v=null,w=null,M=N,y=Nt}return}ve=ve||K,nt=nt||se,st=st||pe,(K!==x||ve!==b)&&(s.blendEquationSeparate(fe[K],fe[ve]),x=K,b=ve),(se!==T||pe!==S||nt!==v||st!==w)&&(s.blendFuncSeparate(ue[se],ue[pe],ue[nt],ue[st]),T=se,S=pe,v=nt,w=st),M=N,y=!1}function ot(N,K){N.side===Ui?O(s.CULL_FACE):A(s.CULL_FACE);let se=N.side===Kt;K&&(se=!se),Lt(se),N.blending===Ns&&N.transparent===!1?Be(En):Be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const pe=N.stencilWrite;c.setTest(pe),pe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?A(s.SAMPLE_ALPHA_TO_COVERAGE):O(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){E!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),E=N)}function Et(N){N!==wf?(A(s.CULL_FACE),N!==R&&(N===_c?s.cullFace(s.BACK):N===Ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):O(s.CULL_FACE),R=N}function Mt(N){N!==I&&(W&&s.lineWidth(N),I=N)}function Ye(N,K,se){N?(A(s.POLYGON_OFFSET_FILL),(P!==K||F!==se)&&(s.polygonOffset(K,se),P=K,F=se)):O(s.POLYGON_OFFSET_FILL)}function ut(N){N?A(s.SCISSOR_TEST):O(s.SCISSOR_TEST)}function jt(N){N===void 0&&(N=s.TEXTURE0+z-1),Y!==N&&(s.activeTexture(N),Y=N)}function D(N,K,se){se===void 0&&(Y===null?se=s.TEXTURE0+z-1:se=Y);let pe=ne[se];pe===void 0&&(pe={type:void 0,texture:void 0},ne[se]=pe),(pe.type!==N||pe.texture!==K)&&(Y!==se&&(s.activeTexture(se),Y=se),s.bindTexture(N,K||B[N]),pe.type=N,pe.texture=K)}function C(){const N=ne[Y];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(N){q.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function Me(N){ee.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ee.copy(N))}function Xe(N,K){let se=u.get(K);se===void 0&&(se=new WeakMap,u.set(K,se));let pe=se.get(N);pe===void 0&&(pe=s.getUniformBlockIndex(K,N.name),se.set(N,pe))}function Je(N,K){const pe=u.get(K).get(N);h.get(K)!==pe&&(s.uniformBlockBinding(K,pe,N.__bindingPointIndex),h.set(K,pe))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Y=null,ne={},p={},_=new WeakMap,g=[],m=null,f=!1,M=null,x=null,T=null,S=null,b=null,v=null,w=null,y=!1,E=null,R=null,I=null,P=null,F=null,q.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:A,disable:O,bindFramebuffer:X,drawBuffers:H,useProgram:te,setBlending:Be,setMaterial:ot,setFlipSided:Lt,setCullFace:Et,setLineWidth:Mt,setPolygonOffset:Ye,setScissorTest:ut,activeTexture:jt,bindTexture:D,unbindTexture:C,compressedTexImage2D:$,compressedTexImage3D:re,texImage2D:Ee,texImage3D:Te,updateUBOMapping:Xe,uniformBlockBinding:Je,texStorage2D:J,texStorage3D:ye,texSubImage2D:oe,texSubImage3D:de,compressedTexSubImage2D:Pe,compressedTexSubImage3D:xe,scissor:_e,viewport:Me,reset:gt}}function xx(s,e,t,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,C){return f?new OffscreenCanvas(D,C):Uo("canvas")}function x(D,C,$,re){let oe=1;if((D.width>re||D.height>re)&&(oe=re/Math.max(D.width,D.height)),oe<1||C===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const de=C?Mf:Math.floor,Pe=de(oe*D.width),xe=de(oe*D.height);g===void 0&&(g=M(Pe,xe));const J=$?M(Pe,xe):g;return J.width=Pe,J.height=xe,J.getContext("2d").drawImage(D,0,0,Pe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Pe+"x"+xe+")."),J}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function T(D){return mc(D.width)&&mc(D.height)}function S(D){return a?!1:D.wrapS!==Si||D.wrapT!==Si||D.minFilter!==St&&D.minFilter!==hi}function b(D,C){return D.generateMipmaps&&C&&D.minFilter!==St&&D.minFilter!==hi}function v(D){s.generateMipmap(D)}function w(D,C,$,re,oe=!1){if(a===!1)return C;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=C;return C===s.RED&&($===s.FLOAT&&(de=s.R32F),$===s.HALF_FLOAT&&(de=s.R16F),$===s.UNSIGNED_BYTE&&(de=s.R8)),C===s.RG&&($===s.FLOAT&&(de=s.RG32F),$===s.HALF_FLOAT&&(de=s.RG16F),$===s.UNSIGNED_BYTE&&(de=s.RG8)),C===s.RGBA&&($===s.FLOAT&&(de=s.RGBA32F),$===s.HALF_FLOAT&&(de=s.RGBA16F),$===s.UNSIGNED_BYTE&&(de=re===Ne&&oe===!1?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)),(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function y(D,C,$){return b(D,$)===!0||D.isFramebufferTexture&&D.minFilter!==St&&D.minFilter!==hi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function E(D){return D===St||D===Sc||D===da?s.NEAREST:s.LINEAR}function R(D){const C=D.target;C.removeEventListener("dispose",R),P(C),C.isVideoTexture&&_.delete(C)}function I(D){const C=D.target;C.removeEventListener("dispose",I),z(C)}function P(D){const C=i.get(D);if(C.__webglInit===void 0)return;const $=D.source,re=m.get($);if(re){const oe=re[C.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&F(D),Object.keys(re).length===0&&m.delete($)}i.remove(D)}function F(D){const C=i.get(D);s.deleteTexture(C.__webglTexture);const $=D.source,re=m.get($);delete re[C.__cacheKey],o.memory.textures--}function z(D){const C=D.texture,$=i.get(D),re=i.get(C);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)s.deleteFramebuffer($.__webglFramebuffer[oe]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[oe]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let oe=0;oe<$.__webglColorRenderbuffer.length;oe++)$.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[oe]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let oe=0,de=C.length;oe<de;oe++){const Pe=i.get(C[oe]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(C[oe])}i.remove(C),i.remove(D)}let W=0;function V(){W=0}function j(){const D=W;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),W+=1,D}function Y(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function ne(D,C){const $=i.get(D);if(D.isVideoTexture&&ut(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const re=D.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O($,D,C);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+C)}function me(D,C){const $=i.get(D);if(D.version>0&&$.__version!==D.version){O($,D,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+C)}function he(D,C){const $=i.get(D);if(D.version>0&&$.__version!==D.version){O($,D,C);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+C)}function q(D,C){const $=i.get(D);if(D.version>0&&$.__version!==D.version){X($,D,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+C)}const ee={[hl]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[ul]:s.MIRRORED_REPEAT},le={[St]:s.NEAREST,[Sc]:s.NEAREST_MIPMAP_NEAREST,[da]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[$f]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR};function B(D,C,$){if($?(s.texParameteri(D,s.TEXTURE_WRAP_S,ee[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ee[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ee[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,le[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,le[C.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==Si||C.wrapT!==Si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,E(C.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,E(C.minFilter)),C.minFilter!==St&&C.minFilter!==hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===St||C.minFilter!==da&&C.minFilter!==Ar||C.type===$n&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(s.texParameterf(D,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function A(D,C){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",R));const re=C.source;let oe=m.get(re);oe===void 0&&(oe={},m.set(re,oe));const de=Y(C);if(de!==D.__cacheKey){oe[de]===void 0&&(oe[de]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),oe[de].usedTimes++;const Pe=oe[D.__cacheKey];Pe!==void 0&&(oe[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&F(C)),D.__cacheKey=de,D.__webglTexture=oe[de].texture}return $}function O(D,C,$){let re=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(re=s.TEXTURE_3D);const oe=A(D,C),de=C.source;t.bindTexture(re,D.__webglTexture,s.TEXTURE0+$);const Pe=i.get(de);if(de.version!==Pe.__version||oe===!0){t.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const xe=S(C)&&T(C.image)===!1;let J=x(C.image,xe,!1,h);J=jt(C,J);const ye=T(J)||a,Ee=r.convert(C.format,C.colorSpace);let Te=r.convert(C.type),_e=w(C.internalFormat,Ee,Te,C.colorSpace);B(re,C,ye);let Me;const Xe=C.mipmaps,Je=a&&C.isVideoTexture!==!0,gt=Pe.__version===void 0||oe===!0,N=y(C,J,ye);if(C.isDepthTexture)_e=s.DEPTH_COMPONENT,a?C.type===$n?_e=s.DEPTH_COMPONENT32F:C.type===Yn?_e=s.DEPTH_COMPONENT24:C.type===Jn?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:C.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Qn&&_e===s.DEPTH_COMPONENT&&C.type!==Cu&&C.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Yn,Te=r.convert(C.type)),C.format===rs&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,C.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Jn,Te=r.convert(C.type))),gt&&(Je?t.texStorage2D(s.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,_e,J.width,J.height,0,Ee,Te,null));else if(C.isDataTexture)if(Xe.length>0&&ye){Je&&gt&&t.texStorage2D(s.TEXTURE_2D,N,_e,Xe[0].width,Xe[0].height);for(let K=0,se=Xe.length;K<se;K++)Me=Xe[K],Je?t.texSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,Ee,Te,Me.data):t.texImage2D(s.TEXTURE_2D,K,_e,Me.width,Me.height,0,Ee,Te,Me.data);C.generateMipmaps=!1}else Je?(gt&&t.texStorage2D(s.TEXTURE_2D,N,_e,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Ee,Te,J.data)):t.texImage2D(s.TEXTURE_2D,0,_e,J.width,J.height,0,Ee,Te,J.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Je&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,N,_e,Xe[0].width,Xe[0].height,J.depth);for(let K=0,se=Xe.length;K<se;K++)Me=Xe[K],C.format!==ui?Ee!==null?Je?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,J.depth,Ee,Me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,_e,Me.width,Me.height,J.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,J.depth,Ee,Te,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,_e,Me.width,Me.height,J.depth,0,Ee,Te,Me.data)}else{Je&&gt&&t.texStorage2D(s.TEXTURE_2D,N,_e,Xe[0].width,Xe[0].height);for(let K=0,se=Xe.length;K<se;K++)Me=Xe[K],C.format!==ui?Ee!==null?Je?t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,K,_e,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,Ee,Te,Me.data):t.texImage2D(s.TEXTURE_2D,K,_e,Me.width,Me.height,0,Ee,Te,Me.data)}else if(C.isDataArrayTexture)Je?(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,N,_e,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ee,Te,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,Ee,Te,J.data);else if(C.isData3DTexture)Je?(gt&&t.texStorage3D(s.TEXTURE_3D,N,_e,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ee,Te,J.data)):t.texImage3D(s.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,Ee,Te,J.data);else if(C.isFramebufferTexture){if(gt)if(Je)t.texStorage2D(s.TEXTURE_2D,N,_e,J.width,J.height);else{let K=J.width,se=J.height;for(let pe=0;pe<N;pe++)t.texImage2D(s.TEXTURE_2D,pe,_e,K,se,0,Ee,Te,null),K>>=1,se>>=1}}else if(Xe.length>0&&ye){Je&&gt&&t.texStorage2D(s.TEXTURE_2D,N,_e,Xe[0].width,Xe[0].height);for(let K=0,se=Xe.length;K<se;K++)Me=Xe[K],Je?t.texSubImage2D(s.TEXTURE_2D,K,0,0,Ee,Te,Me):t.texImage2D(s.TEXTURE_2D,K,_e,Ee,Te,Me);C.generateMipmaps=!1}else Je?(gt&&t.texStorage2D(s.TEXTURE_2D,N,_e,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Te,J)):t.texImage2D(s.TEXTURE_2D,0,_e,Ee,Te,J);b(C,ye)&&v(re),Pe.__version=de.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function X(D,C,$){if(C.image.length!==6)return;const re=A(D,C),oe=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+$);const de=i.get(oe);if(oe.version!==de.__version||re===!0){t.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Pe=C.isCompressedTexture||C.image[0].isCompressedTexture,xe=C.image[0]&&C.image[0].isDataTexture,J=[];for(let K=0;K<6;K++)!Pe&&!xe?J[K]=x(C.image[K],!1,!0,c):J[K]=xe?C.image[K].image:C.image[K],J[K]=jt(C,J[K]);const ye=J[0],Ee=T(ye)||a,Te=r.convert(C.format,C.colorSpace),_e=r.convert(C.type),Me=w(C.internalFormat,Te,_e,C.colorSpace),Xe=a&&C.isVideoTexture!==!0,Je=de.__version===void 0||re===!0;let gt=y(C,ye,Ee);B(s.TEXTURE_CUBE_MAP,C,Ee);let N;if(Pe){Xe&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Me,ye.width,ye.height);for(let K=0;K<6;K++){N=J[K].mipmaps;for(let se=0;se<N.length;se++){const pe=N[se];C.format!==ui?Te!==null?Xe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,pe.width,pe.height,Te,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,pe.width,pe.height,Te,_e,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Me,pe.width,pe.height,0,Te,_e,pe.data)}}}else{N=C.mipmaps,Xe&&Je&&(N.length>0&&gt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Me,J[0].width,J[0].height));for(let K=0;K<6;K++)if(xe){Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,J[K].width,J[K].height,Te,_e,J[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,J[K].width,J[K].height,0,Te,_e,J[K].data);for(let se=0;se<N.length;se++){const ve=N[se].image[K].image;Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,ve.width,ve.height,Te,_e,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Me,ve.width,ve.height,0,Te,_e,ve.data)}}else{Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,_e,J[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,Te,_e,J[K]);for(let se=0;se<N.length;se++){const pe=N[se];Xe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Te,_e,pe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Me,Te,_e,pe.image[K])}}}b(C,Ee)&&v(s.TEXTURE_CUBE_MAP),de.__version=oe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function H(D,C,$,re,oe){const de=r.convert($.format,$.colorSpace),Pe=r.convert($.type),xe=w($.internalFormat,de,Pe,$.colorSpace);i.get(C).__hasExternalTextures||(oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,xe,C.width,C.height,C.depth,0,de,Pe,null):t.texImage2D(oe,0,xe,C.width,C.height,0,de,Pe,null)),t.bindFramebuffer(s.FRAMEBUFFER,D),Ye(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,oe,i.get($).__webglTexture,0,Mt(C)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,oe,i.get($).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(D,C,$){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer&&!C.stencilBuffer){let re=s.DEPTH_COMPONENT16;if($||Ye(C)){const oe=C.depthTexture;oe&&oe.isDepthTexture&&(oe.type===$n?re=s.DEPTH_COMPONENT32F:oe.type===Yn&&(re=s.DEPTH_COMPONENT24));const de=Mt(C);Ye(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,re,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,de,re,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(C.depthBuffer&&C.stencilBuffer){const re=Mt(C);$&&Ye(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,C.width,C.height):Ye(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const re=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let oe=0;oe<re.length;oe++){const de=re[oe],Pe=r.convert(de.format,de.colorSpace),xe=r.convert(de.type),J=w(de.internalFormat,Pe,xe,de.colorSpace),ye=Mt(C);$&&Ye(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,J,C.width,C.height):Ye(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,J,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,J,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ne(C.depthTexture,0);const re=i.get(C.depthTexture).__webglTexture,oe=Mt(C);if(C.depthTexture.format===Qn)Ye(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(C.depthTexture.format===rs)Ye(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ue(D){const C=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");fe(C.__webglFramebuffer,D)}else if($){C.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[re]),C.__webglDepthbuffer[re]=s.createRenderbuffer(),te(C.__webglDepthbuffer[re],D,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),te(C.__webglDepthbuffer,D,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(D,C,$){const re=i.get(D);C!==void 0&&H(re.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),$!==void 0&&ue(D)}function ot(D){const C=D.texture,$=i.get(D),re=i.get(C);D.addEventListener("dispose",I),D.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=C.version,o.memory.textures++);const oe=D.isWebGLCubeRenderTarget===!0,de=D.isWebGLMultipleRenderTargets===!0,Pe=T(D)||a;if(oe){$.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)$.__webglFramebuffer[xe]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),de)if(n.drawBuffers){const xe=D.texture;for(let J=0,ye=xe.length;J<ye;J++){const Ee=i.get(xe[J]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&Ye(D)===!1){const xe=de?C:[C];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let J=0;J<xe.length;J++){const ye=xe[J];$.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[J]);const Ee=r.convert(ye.format,ye.colorSpace),Te=r.convert(ye.type),_e=w(ye.internalFormat,Ee,Te,ye.colorSpace,D.isXRRenderTarget===!0),Me=Mt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,_e,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,$.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),te($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),B(s.TEXTURE_CUBE_MAP,C,Pe);for(let xe=0;xe<6;xe++)H($.__webglFramebuffer[xe],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe);b(C,Pe)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const xe=D.texture;for(let J=0,ye=xe.length;J<ye;J++){const Ee=xe[J],Te=i.get(Ee);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),B(s.TEXTURE_2D,Ee,Pe),H($.__webglFramebuffer,D,Ee,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D),b(Ee,Pe)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?xe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,re.__webglTexture),B(xe,C,Pe),H($.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,xe),b(C,Pe)&&v(xe),t.unbindTexture()}D.depthBuffer&&ue(D)}function Lt(D){const C=T(D)||a,$=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let re=0,oe=$.length;re<oe;re++){const de=$[re];if(b(de,C)){const Pe=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xe=i.get(de).__webglTexture;t.bindTexture(Pe,xe),v(Pe),t.unbindTexture()}}}function Et(D){if(a&&D.samples>0&&Ye(D)===!1){const C=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],$=D.width,re=D.height;let oe=s.COLOR_BUFFER_BIT;const de=[],Pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=i.get(D),J=D.isWebGLMultipleRenderTargets===!0;if(J)for(let ye=0;ye<C.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<C.length;ye++){de.push(s.COLOR_ATTACHMENT0+ye),D.depthBuffer&&de.push(Pe);const Ee=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ee===!1&&(D.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),J&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]),Ee===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Pe])),J){const Te=i.get(C[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,$,re,0,0,$,re,oe,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ye=0;ye<C.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const Ee=i.get(C[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Mt(D){return Math.min(u,D.samples)}function Ye(D){const C=i.get(D);return a&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ut(D){const C=o.render.frame;_.get(D)!==C&&(_.set(D,C),D.update())}function jt(D,C){const $=D.colorSpace,re=D.format,oe=D.type;return D.isCompressedTexture===!0||D.format===dl||$!==ki&&$!==ts&&($===Ne?a===!1?e.has("EXT_sRGB")===!0&&re===ui?(D.format=dl,D.minFilter=hi,D.generateMipmaps=!1):C=Hu.sRGBToLinear(C):(re!==ui||oe!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}this.allocateTextureUnit=j,this.resetTextureUnits=V,this.setTexture2D=ne,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=q,this.rebindTextures=Be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ye}function vx(s,e,t){const i=t.isWebGL2;function n(r,o=ts){let a;if(r===ss)return s.UNSIGNED_BYTE;if(r===Qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ep)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kf)return s.BYTE;if(r===Zf)return s.SHORT;if(r===Cu)return s.UNSIGNED_SHORT;if(r===Jf)return s.INT;if(r===Yn)return s.UNSIGNED_INT;if(r===$n)return s.FLOAT;if(r===Tr)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===tp)return s.ALPHA;if(r===ui)return s.RGBA;if(r===ip)return s.LUMINANCE;if(r===np)return s.LUMINANCE_ALPHA;if(r===Qn)return s.DEPTH_COMPONENT;if(r===rs)return s.DEPTH_STENCIL;if(r===dl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===sp)return s.RED;if(r===rp)return s.RED_INTEGER;if(r===op)return s.RG;if(r===ap)return s.RG_INTEGER;if(r===lp)return s.RGBA_INTEGER;if(r===fa||r===pa||r===ma||r===ga)if(o===Ne)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bc||r===wc||r===Ec||r===Ac)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ec)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ac)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tc||r===Rc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tc)return o===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Rc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cc||r===Lc||r===Pc||r===Ic||r===Dc||r===Uc||r===Fc||r===Nc||r===zc||r===Oc||r===Bc||r===kc||r===Vc||r===Hc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Cc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ic)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hc)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_a)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===_a)return o===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===hp||r===Gc||r===Wc||r===Xc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===_a)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class yx extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _r extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $u extends ni{constructor(e,t,i,n,r,o,a,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qn&&(i=Yn),i===void 0&&h===rs&&(i=Jn),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class Sx extends Rn{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const M=[],x=[],T=new Set,S=new Map,b=new ti;b.layers.enable(1),b.viewport=new ct;const v=new ti;v.layers.enable(2),v.viewport=new ct;const w=[b,v],y=new yx;y.layers.enable(1),y.layers.enable(2);let E=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=M[q];return ee===void 0&&(ee=new Ha,M[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=M[q];return ee===void 0&&(ee=new Ha,M[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=M[q];return ee===void 0&&(ee=new Ha,M[q]=ee),ee.getHandSpace()};function I(q){const ee=x.indexOf(q.inputSource);if(ee===-1)return;const le=M[ee];le!==void 0&&(le.update(q.inputSource,q.frame,c||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function P(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",P),n.removeEventListener("inputsourceschange",F);for(let q=0;q<M.length;q++){const ee=x[q];ee!==null&&(x[q]=null,M[q].disconnect(ee))}E=null,R=null,e.setRenderTarget(m),p=null,d=null,u=null,n=null,f=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",P),n.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,ee),n.updateRenderState({baseLayer:p}),f=new an(p.framebufferWidth,p.framebufferHeight,{format:ui,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,le=null,B=null;g.depth&&(B=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?rs:Qn,le=g.stencil?Jn:Yn);const A={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(A),n.updateRenderState({layers:[d]}),f=new an(d.textureWidth,d.textureHeight,{format:ui,type:ss,depthTexture:new $u(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const O=e.properties.get(f);O.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),he.setContext(n),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function F(q){for(let ee=0;ee<q.removed.length;ee++){const le=q.removed[ee],B=x.indexOf(le);B>=0&&(x[B]=null,M[B].disconnect(le))}for(let ee=0;ee<q.added.length;ee++){const le=q.added[ee];let B=x.indexOf(le);if(B===-1){for(let O=0;O<M.length;O++)if(O>=x.length){x.push(le),B=O;break}else if(x[O]===null){x[O]=le,B=O;break}if(B===-1)break}const A=M[B];A&&A.connect(le)}}const z=new U,W=new U;function V(q,ee,le){z.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const B=z.distanceTo(W),A=ee.projectionMatrix.elements,O=le.projectionMatrix.elements,X=A[14]/(A[10]-1),H=A[14]/(A[10]+1),te=(A[9]+1)/A[5],fe=(A[9]-1)/A[5],ue=(A[8]-1)/A[0],Be=(O[8]+1)/O[0],ot=X*ue,Lt=X*Be,Et=B/(-ue+Be),Mt=Et*-ue;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Mt),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const Ye=X+Et,ut=H+Et,jt=ot-Mt,D=Lt+(B-Mt),C=te*H/ut*Ye,$=fe*H/ut*Ye;q.projectionMatrix.makePerspective(jt,D,C,$,Ye,ut),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function j(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;y.near=v.near=b.near=q.near,y.far=v.far=b.far=q.far,(E!==y.near||R!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,R=y.far);const ee=q.parent,le=y.cameras;j(y,ee);for(let B=0;B<le.length;B++)j(le[B],ee);le.length===2?V(y,b,v):y.projectionMatrix.copy(b.projectionMatrix),Y(q,y,ee)};function Y(q,ee,le){le===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const B=q.children;for(let A=0,O=B.length;A<O;A++)B[A].updateMatrixWorld(!0);q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Lo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.getPlanes=function(){return T};let ne=null;function me(q,ee){if(h=ee.getViewerPose(c||o),_=ee,h!==null){const le=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let B=!1;le.length!==y.cameras.length&&(y.cameras.length=0,B=!0);for(let A=0;A<le.length;A++){const O=le[A];let X=null;if(p!==null)X=p.getViewport(O);else{const te=u.getViewSubImage(d,O);X=te.viewport,A===0&&(e.setRenderTargetTextures(f,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(f))}let H=w[A];H===void 0&&(H=new ti,H.layers.enable(A),H.viewport=new ct,w[A]=H),H.matrix.fromArray(O.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(O.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(X.x,X.y,X.width,X.height),A===0&&(y.matrix.copy(H.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),B===!0&&y.cameras.push(H)}}for(let le=0;le<M.length;le++){const B=x[le],A=M[le];B!==null&&A!==void 0&&A.update(B,ee,c||o)}if(ne&&ne(q,ee),ee.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ee.detectedPlanes});let le=null;for(const B of T)ee.detectedPlanes.has(B)||(le===null&&(le=[]),le.push(B));if(le!==null)for(const B of le)T.delete(B),S.delete(B),i.dispatchEvent({type:"planeremoved",data:B});for(const B of ee.detectedPlanes)if(!T.has(B))T.add(B),S.set(B,ee.lastChangedTime),i.dispatchEvent({type:"planeadded",data:B});else{const A=S.get(B);B.lastChangedTime>A&&(S.set(B,B.lastChangedTime),i.dispatchEvent({type:"planechanged",data:B}))}}_=null}const he=new ku;he.setAnimationLoop(me),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}function bx(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Vu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,M,x,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function wx(s,e,t,i){let n={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const T=x.program;i.uniformBlockBinding(M,T)}function c(M,x){let T=n[M.id];T===void 0&&(_(M),T=h(M),n[M.id]=T,M.addEventListener("dispose",m));const S=x.program;i.updateUBOMapping(M,S);const b=e.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function h(M){const x=u();M.__bindingPointIndex=x;const T=s.createBuffer(),S=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,T),T}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=n[M.id],T=M.uniforms,S=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,v=T.length;b<v;b++){const w=T[b];if(p(w,b,S)===!0){const y=w.__offset,E=Array.isArray(w.value)?w.value:[w.value];let R=0;for(let I=0;I<E.length;I++){const P=E[I],F=g(P);typeof P=="number"?(w.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,y+R,w.__data)):P.isMatrix3?(w.__data[0]=P.elements[0],w.__data[1]=P.elements[1],w.__data[2]=P.elements[2],w.__data[3]=P.elements[0],w.__data[4]=P.elements[3],w.__data[5]=P.elements[4],w.__data[6]=P.elements[5],w.__data[7]=P.elements[0],w.__data[8]=P.elements[6],w.__data[9]=P.elements[7],w.__data[10]=P.elements[8],w.__data[11]=P.elements[0]):(P.toArray(w.__data,R),R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,y,w.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,x,T){const S=M.value;if(T[x]===void 0){if(typeof S=="number")T[x]=S;else{const b=Array.isArray(S)?S:[S],v=[];for(let w=0;w<b.length;w++)v.push(b[w].clone());T[x]=v}return!0}else if(typeof S=="number"){if(T[x]!==S)return T[x]=S,!0}else{const b=Array.isArray(T[x])?T[x]:[T[x]],v=Array.isArray(S)?S:[S];for(let w=0;w<b.length;w++){const y=b[w];if(y.equals(v[w])===!1)return y.copy(v[w]),!0}}return!1}function _(M){const x=M.uniforms;let T=0;const S=16;let b=0;for(let v=0,w=x.length;v<w;v++){const y=x[v],E={boundary:0,storage:0},R=Array.isArray(y.value)?y.value:[y.value];for(let I=0,P=R.length;I<P;I++){const F=R[I],z=g(F);E.boundary+=z.boundary,E.storage+=z.storage}if(y.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=T,v>0){b=T%S;const I=S-b;b!==0&&I-E.boundary<0&&(T+=S-b,y.__offset=T)}T+=E.storage}return b=T%S,b>0&&(T+=S-b),M.__size=T,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function f(){for(const M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:l,update:c,dispose:f}}function Ex(){const s=Uo("canvas");return s.style.display="block",s}class Ax{constructor(e={}){const{canvas:t=Ex(),context:i=null,depth:n=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this.useLegacyLights=!0,this.toneMapping=sn,this.toneMappingExposure=1;const f=this;let M=!1,x=0,T=0,S=null,b=-1,v=null;const w=new ct,y=new ct;let E=null,R=t.width,I=t.height,P=1,F=null,z=null;const W=new ct(0,0,R,I),V=new ct(0,0,R,I);let j=!1;const Y=new zl;let ne=!1,me=!1,he=null;const q=new it,ee=new U,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function B(){return S===null?P:1}let A=i;function O(L,G){for(let Z=0;Z<L.length;Z++){const k=L[Z],Q=t.getContext(k,G);if(Q!==null)return Q}return null}try{const L={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bf}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Je,!1),A===null){const G=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&G.shift(),A=O(G,L),A===null)throw O(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let X,H,te,fe,ue,Be,ot,Lt,Et,Mt,Ye,ut,jt,D,C,$,re,oe,de,Pe,xe,J,ye,Ee;function Te(){X=new N0(A),H=new A0(A,X,e),X.init(H),J=new vx(A,X,H),te=new _x(A,X,H),fe=new B0(A),ue=new nx,Be=new xx(A,X,te,ue,H,J,fe),ot=new P0(f),Lt=new F0(f),Et=new Gp(A,H),ye=new w0(A,X,Et,H),Mt=new z0(A,Et,fe,ye),Ye=new G0(A,Mt,Et,fe),de=new H0(A,H,Be),$=new T0(ue),ut=new ix(f,ot,Lt,X,H,ye,$),jt=new bx(f,ue),D=new rx,C=new ux(X,H),oe=new b0(f,ot,Lt,te,Ye,d,l),re=new gx(f,Ye,H),Ee=new wx(A,fe,H,te),Pe=new E0(A,X,fe,H),xe=new O0(A,X,fe,H),fe.programs=ut.programs,f.capabilities=H,f.extensions=X,f.properties=ue,f.renderLists=D,f.shadowMap=re,f.state=te,f.info=fe}Te();const _e=new Sx(f,A);this.xr=_e,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const L=X.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=X.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(L){L!==void 0&&(P=L,this.setSize(R,I,!1))},this.getSize=function(L){return L.set(R,I)},this.setSize=function(L,G,Z=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=L,I=G,t.width=Math.floor(L*P),t.height=Math.floor(G*P),Z===!0&&(t.style.width=L+"px",t.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set(R*P,I*P).floor()},this.setDrawingBufferSize=function(L,G,Z){R=L,I=G,P=Z,t.width=Math.floor(L*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(W)},this.setViewport=function(L,G,Z,k){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,G,Z,k),te.viewport(w.copy(W).multiplyScalar(P).floor())},this.getScissor=function(L){return L.copy(V)},this.setScissor=function(L,G,Z,k){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,G,Z,k),te.scissor(y.copy(V).multiplyScalar(P).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(L){te.setScissorTest(j=L)},this.setOpaqueSort=function(L){F=L},this.setTransparentSort=function(L){z=L},this.getClearColor=function(L){return L.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(L=!0,G=!0,Z=!0){let k=0;L&&(k|=A.COLOR_BUFFER_BIT),G&&(k|=A.DEPTH_BUFFER_BIT),Z&&(k|=A.STENCIL_BUFFER_BIT),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),D.dispose(),C.dispose(),ue.dispose(),ot.dispose(),Lt.dispose(),Ye.dispose(),ye.dispose(),Ee.dispose(),ut.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ve),_e.removeEventListener("sessionend",nt),he&&(he.dispose(),he=null),st.stop()};function Me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const L=fe.autoReset,G=re.enabled,Z=re.autoUpdate,k=re.needsUpdate,Q=re.type;Te(),fe.autoReset=L,re.enabled=G,re.autoUpdate=Z,re.needsUpdate=k,re.type=Q}function Je(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function gt(L){const G=L.target;G.removeEventListener("dispose",gt),N(G)}function N(L){K(L),ue.remove(L)}function K(L){const G=ue.get(L).programs;G!==void 0&&(G.forEach(function(Z){ut.releaseProgram(Z)}),L.isShaderMaterial&&ut.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,Z,k,Q,Ae){G===null&&(G=le);const Re=Q.isMesh&&Q.matrixWorld.determinant()<0,Ie=Fd(L,G,Z,k,Q);te.setMaterial(k,Re);let Oe=Z.index,ke=1;k.wireframe===!0&&(Oe=Mt.getWireframeAttribute(Z),ke=2);const Ve=Z.drawRange,He=Z.attributes.position;let Qe=Ve.start*ke,Vt=(Ve.start+Ve.count)*ke;Ae!==null&&(Qe=Math.max(Qe,Ae.start*ke),Vt=Math.min(Vt,(Ae.start+Ae.count)*ke)),Oe!==null?(Qe=Math.max(Qe,0),Vt=Math.min(Vt,Oe.count)):He!=null&&(Qe=Math.max(Qe,0),Vt=Math.min(Vt,He.count));const mi=Vt-Qe;if(mi<0||mi===1/0)return;ye.setup(Q,k,Ie,Z,Oe);let Pn,xt=Pe;if(Oe!==null&&(Pn=Et.get(Oe),xt=xe,xt.setIndex(Pn)),Q.isMesh)k.wireframe===!0?(te.setLineWidth(k.wireframeLinewidth*B()),xt.setMode(A.LINES)):xt.setMode(A.TRIANGLES);else if(Q.isLine){let je=k.linewidth;je===void 0&&(je=1),te.setLineWidth(je*B()),Q.isLineSegments?xt.setMode(A.LINES):Q.isLineLoop?xt.setMode(A.LINE_LOOP):xt.setMode(A.LINE_STRIP)}else Q.isPoints?xt.setMode(A.POINTS):Q.isSprite&&xt.setMode(A.TRIANGLES);if(Q.isInstancedMesh)xt.renderInstances(Qe,mi,Q.count);else if(Z.isInstancedBufferGeometry){const je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ia=Math.min(Z.instanceCount,je);xt.renderInstances(Qe,mi,ia)}else xt.render(Qe,mi)},this.compile=function(L,G){function Z(k,Q,Ae){k.transparent===!0&&k.side===Ui&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,Dr(k,Q,Ae),k.side=wi,k.needsUpdate=!0,Dr(k,Q,Ae),k.side=Ui):Dr(k,Q,Ae)}_=C.get(L),_.init(),m.push(_),L.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights(f.useLegacyLights),L.traverse(function(k){const Q=k.material;if(Q)if(Array.isArray(Q))for(let Ae=0;Ae<Q.length;Ae++){const Re=Q[Ae];Z(Re,L,k)}else Z(Q,L,k)}),m.pop(),_=null};let se=null;function pe(L){se&&se(L)}function ve(){st.stop()}function nt(){st.start()}const st=new ku;st.setAnimationLoop(pe),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(L){se=L,_e.setAnimationLoop(L),L===null?st.stop():st.start()},_e.addEventListener("sessionstart",ve),_e.addEventListener("sessionend",nt),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(G),G=_e.getCamera()),L.isScene===!0&&L.onBeforeRender(f,L,G,S),_=C.get(L,m.length),_.init(),m.push(_),q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(q),me=this.localClippingEnabled,ne=$.init(this.clippingPlanes,me),p=D.get(L,g.length),p.init(),g.push(p),Nt(L,G,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(F,z),ne===!0&&$.beginShadows();const Z=_.state.shadowsArray;if(re.render(Z,L,G),ne===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(p,L),_.setupLights(f.useLegacyLights),G.isArrayCamera){const k=G.cameras;for(let Q=0,Ae=k.length;Q<Ae;Q++){const Re=k[Q];hn(p,L,Re,Re.viewport)}}else hn(p,L,G);S!==null&&(Be.updateMultisampleRenderTarget(S),Be.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(f,L,G),ye.resetDefaultState(),b=-1,v=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function Nt(L,G,Z,k){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){k&&ee.setFromMatrixPosition(L.matrixWorld).applyMatrix4(q);const Re=Ye.update(L),Ie=L.material;Ie.visible&&p.push(L,Re,Ie,Z,ee.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){L.isSkinnedMesh&&L.skeleton.frame!==fe.render.frame&&(L.skeleton.update(),L.skeleton.frame=fe.render.frame);const Re=Ye.update(L),Ie=L.material;if(k&&(Re.boundingSphere===null&&Re.computeBoundingSphere(),ee.copy(Re.boundingSphere.center).applyMatrix4(L.matrixWorld).applyMatrix4(q)),Array.isArray(Ie)){const Oe=Re.groups;for(let ke=0,Ve=Oe.length;ke<Ve;ke++){const He=Oe[ke],Qe=Ie[He.materialIndex];Qe&&Qe.visible&&p.push(L,Re,Qe,Z,ee.z,He)}}else Ie.visible&&p.push(L,Re,Ie,Z,ee.z,null)}}const Ae=L.children;for(let Re=0,Ie=Ae.length;Re<Ie;Re++)Nt(Ae[Re],G,Z,k)}function hn(L,G,Z,k){const Q=L.opaque,Ae=L.transmissive,Re=L.transparent;_.setupLightsView(Z),ne===!0&&$.setGlobalState(f.clippingPlanes,Z),Ae.length>0&&_t(Q,Ae,G,Z),k&&te.viewport(w.copy(k)),Q.length>0&&oi(Q,G,Z),Ae.length>0&&oi(Ae,G,Z),Re.length>0&&oi(Re,G,Z),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function _t(L,G,Z,k){if(he===null){const Ie=H.isWebGL2;he=new an(1024,1024,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Tr:ss,minFilter:Ar,samples:Ie&&a===!0?4:0})}const Q=f.getRenderTarget();f.setRenderTarget(he),f.clear();const Ae=f.toneMapping;f.toneMapping=sn,oi(L,Z,k),Be.updateMultisampleRenderTarget(he),Be.updateRenderTargetMipmap(he);let Re=!1;for(let Ie=0,Oe=G.length;Ie<Oe;Ie++){const ke=G[Ie],Ve=ke.object,He=ke.geometry,Qe=ke.material,Vt=ke.group;if(Qe.side===Ui&&Ve.layers.test(k.layers)){const mi=Qe.side;Qe.side=Kt,Qe.needsUpdate=!0,Ti(Ve,Z,k,He,Qe,Vt),Qe.side=mi,Qe.needsUpdate=!0,Re=!0}}Re===!0&&(Be.updateMultisampleRenderTarget(he),Be.updateRenderTargetMipmap(he)),f.setRenderTarget(Q),f.toneMapping=Ae}function oi(L,G,Z){const k=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Ae=L.length;Q<Ae;Q++){const Re=L[Q],Ie=Re.object,Oe=Re.geometry,ke=k===null?Re.material:k,Ve=Re.group;Ie.layers.test(Z.layers)&&Ti(Ie,G,Z,Oe,ke,Ve)}}function Ti(L,G,Z,k,Q,Ae){L.onBeforeRender(f,G,Z,k,Q,Ae),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(f,G,Z,k,L,Ae),Q.transparent===!0&&Q.side===Ui&&Q.forceSinglePass===!1?(Q.side=Kt,Q.needsUpdate=!0,f.renderBufferDirect(Z,G,k,Q,L,Ae),Q.side=wi,Q.needsUpdate=!0,f.renderBufferDirect(Z,G,k,Q,L,Ae),Q.side=Ui):f.renderBufferDirect(Z,G,k,Q,L,Ae),L.onAfterRender(f,G,Z,k,Q,Ae)}function Dr(L,G,Z){G.isScene!==!0&&(G=le);const k=ue.get(L),Q=_.state.lights,Ae=_.state.shadowsArray,Re=Q.state.version,Ie=ut.getParameters(L,Q.state,Ae,G,Z),Oe=ut.getProgramCacheKey(Ie);let ke=k.programs;k.environment=L.isMeshStandardMaterial?G.environment:null,k.fog=G.fog,k.envMap=(L.isMeshStandardMaterial?Lt:ot).get(L.envMap||k.environment),ke===void 0&&(L.addEventListener("dispose",gt),ke=new Map,k.programs=ke);let Ve=ke.get(Oe);if(Ve!==void 0){if(k.currentProgram===Ve&&k.lightsStateVersion===Re)return rc(L,Ie),Ve}else Ie.uniforms=ut.getUniforms(L),L.onBuild(Z,Ie,f),L.onBeforeCompile(Ie,f),Ve=ut.acquireProgram(Ie,Oe),ke.set(Oe,Ve),k.uniforms=Ie.uniforms;const He=k.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(He.clippingPlanes=$.uniform),rc(L,Ie),k.needsLights=zd(L),k.lightsStateVersion=Re,k.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMap.value=Q.state.directionalShadowMap,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotShadowMap.value=Q.state.spotShadowMap,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMap.value=Q.state.pointShadowMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Qe=Ve.getUniforms(),Vt=So.seqWithValue(Qe.seq,He);return k.currentProgram=Ve,k.uniformsList=Vt,Ve}function rc(L,G){const Z=ue.get(L);Z.outputColorSpace=G.outputColorSpace,Z.instancing=G.instancing,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Fd(L,G,Z,k,Q){G.isScene!==!0&&(G=le),Be.resetTextureUnits();const Ae=G.fog,Re=k.isMeshStandardMaterial?G.environment:null,Ie=S===null?f.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ki,Oe=(k.isMeshStandardMaterial?Lt:ot).get(k.envMap||Re),ke=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!k.normalMap&&!!Z.attributes.tangent,He=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,Vt=!!Z.morphAttributes.color,mi=k.toneMapped?f.toneMapping:sn,Pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=Pn!==void 0?Pn.length:0,je=ue.get(k),ia=_.state.lights;if(ne===!0&&(me===!0||L!==v)){const Zt=L===v&&k.id===b;$.setState(k,L,Zt)}let At=!1;k.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ia.state.version||je.outputColorSpace!==Ie||Q.isInstancedMesh&&je.instancing===!1||!Q.isInstancedMesh&&je.instancing===!0||Q.isSkinnedMesh&&je.skinning===!1||!Q.isSkinnedMesh&&je.skinning===!0||je.envMap!==Oe||k.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==$.numPlanes||je.numIntersection!==$.numIntersection)||je.vertexAlphas!==ke||je.vertexTangents!==Ve||je.morphTargets!==He||je.morphNormals!==Qe||je.morphColors!==Vt||je.toneMapping!==mi||H.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(At=!0):(At=!0,je.__version=k.version);let In=je.currentProgram;At===!0&&(In=Dr(k,G,Q));let oc=!1,Qs=!1,na=!1;const Ht=In.getUniforms(),Dn=je.uniforms;if(te.useProgram(In.program)&&(oc=!0,Qs=!0,na=!0),k.id!==b&&(b=k.id,Qs=!0),oc||v!==L){if(Ht.setValue(A,"projectionMatrix",L.projectionMatrix),H.logarithmicDepthBuffer&&Ht.setValue(A,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),v!==L&&(v=L,Qs=!0,na=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Zt=Ht.map.cameraPosition;Zt!==void 0&&Zt.setValue(A,ee.setFromMatrixPosition(L.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ht.setValue(A,"isOrthographic",L.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Q.isSkinnedMesh)&&Ht.setValue(A,"viewMatrix",L.matrixWorldInverse)}if(Q.isSkinnedMesh){Ht.setOptional(A,Q,"bindMatrix"),Ht.setOptional(A,Q,"bindMatrixInverse");const Zt=Q.skeleton;Zt&&(H.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ht.setValue(A,"boneTexture",Zt.boneTexture,Be),Ht.setValue(A,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sa=Z.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0&&H.isWebGL2===!0)&&de.update(Q,Z,In),(Qs||je.receiveShadow!==Q.receiveShadow)&&(je.receiveShadow=Q.receiveShadow,Ht.setValue(A,"receiveShadow",Q.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Dn.envMap.value=Oe,Dn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Qs&&(Ht.setValue(A,"toneMappingExposure",f.toneMappingExposure),je.needsLights&&Nd(Dn,na),Ae&&k.fog===!0&&jt.refreshFogUniforms(Dn,Ae),jt.refreshMaterialUniforms(Dn,k,P,I,he),So.upload(A,je.uniformsList,Dn,Be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(So.upload(A,je.uniformsList,Dn,Be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ht.setValue(A,"center",Q.center),Ht.setValue(A,"modelViewMatrix",Q.modelViewMatrix),Ht.setValue(A,"normalMatrix",Q.normalMatrix),Ht.setValue(A,"modelMatrix",Q.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Zt=k.uniformsGroups;for(let ra=0,Od=Zt.length;ra<Od;ra++)if(H.isWebGL2){const ac=Zt[ra];Ee.update(ac,In),Ee.bind(ac,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function Nd(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function zd(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,G,Z){ue.get(L.texture).__webglTexture=G,ue.get(L.depthTexture).__webglTexture=Z;const k=ue.get(L);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Z===void 0,k.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,G){const Z=ue.get(L);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(L,G=0,Z=0){S=L,x=G,T=Z;let k=!0,Q=null,Ae=!1,Re=!1;if(L){const Oe=ue.get(L);Oe.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(A.FRAMEBUFFER,null),k=!1):Oe.__webglFramebuffer===void 0?Be.setupRenderTarget(L):Oe.__hasExternalTextures&&Be.rebindTextures(L,ue.get(L.texture).__webglTexture,ue.get(L.depthTexture).__webglTexture);const ke=L.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);const Ve=ue.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Q=Ve[G],Ae=!0):H.isWebGL2&&L.samples>0&&Be.useMultisampledRTT(L)===!1?Q=ue.get(L).__webglMultisampledFramebuffer:Q=Ve,w.copy(L.viewport),y.copy(L.scissor),E=L.scissorTest}else w.copy(W).multiplyScalar(P).floor(),y.copy(V).multiplyScalar(P).floor(),E=j;if(te.bindFramebuffer(A.FRAMEBUFFER,Q)&&H.drawBuffers&&k&&te.drawBuffers(L,Q),te.viewport(w),te.scissor(y),te.setScissorTest(E),Ae){const Oe=ue.get(L.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,Z)}else if(Re){const Oe=ue.get(L.texture),ke=G||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,ke)}b=-1},this.readRenderTargetPixels=function(L,G,Z,k,Q,Ae,Re){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){te.bindFramebuffer(A.FRAMEBUFFER,Ie);try{const Oe=L.texture,ke=Oe.format,Ve=Oe.type;if(ke!==ui&&J.convert(ke)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ve===Tr&&(X.has("EXT_color_buffer_half_float")||H.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ve!==ss&&J.convert(Ve)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===$n&&(H.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-k&&Z>=0&&Z<=L.height-Q&&A.readPixels(G,Z,k,Q,J.convert(ke),J.convert(Ve),Ae)}finally{const Oe=S!==null?ue.get(S).__webglFramebuffer:null;te.bindFramebuffer(A.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(L,G,Z=0){const k=Math.pow(2,-Z),Q=Math.floor(G.image.width*k),Ae=Math.floor(G.image.height*k);Be.setTexture2D(G,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,L.x,L.y,Q,Ae),te.unbindTexture()},this.copyTextureToTexture=function(L,G,Z,k=0){const Q=G.image.width,Ae=G.image.height,Re=J.convert(Z.format),Ie=J.convert(Z.type);Be.setTexture2D(Z,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,Z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,k,L.x,L.y,Q,Ae,Re,Ie,G.image.data):G.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,k,L.x,L.y,G.mipmaps[0].width,G.mipmaps[0].height,Re,G.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,k,L.x,L.y,Re,Ie,G.image),k===0&&Z.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(L,G,Z,k,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=L.max.x-L.min.x+1,Re=L.max.y-L.min.y+1,Ie=L.max.z-L.min.z+1,Oe=J.convert(k.format),ke=J.convert(k.type);let Ve;if(k.isData3DTexture)Be.setTexture3D(k,0),Ve=A.TEXTURE_3D;else if(k.isDataArrayTexture)Be.setTexture2DArray(k,0),Ve=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const He=A.getParameter(A.UNPACK_ROW_LENGTH),Qe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Vt=A.getParameter(A.UNPACK_SKIP_PIXELS),mi=A.getParameter(A.UNPACK_SKIP_ROWS),Pn=A.getParameter(A.UNPACK_SKIP_IMAGES),xt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,xt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,xt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,L.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,L.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,L.min.z),Z.isDataTexture||Z.isData3DTexture?A.texSubImage3D(Ve,Q,G.x,G.y,G.z,Ae,Re,Ie,Oe,ke,xt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ve,Q,G.x,G.y,G.z,Ae,Re,Ie,Oe,xt.data)):A.texSubImage3D(Ve,Q,G.x,G.y,G.z,Ae,Re,Ie,Oe,ke,xt),A.pixelStorei(A.UNPACK_ROW_LENGTH,He),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Qe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Vt),A.pixelStorei(A.UNPACK_SKIP_ROWS,mi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pn),Q===0&&k.generateMipmaps&&A.generateMipmap(Ve),te.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Be.setTextureCube(L,0):L.isData3DTexture?Be.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Be.setTexture2DArray(L,0):Be.setTexture2D(L,0),te.unbindTexture()},this.resetState=function(){x=0,T=0,S=null,te.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?es:Lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===es?Ne:ki}}class Tx extends Nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uh(){return(typeof performance>"u"?Date:performance).now()}class Rx extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Cx{constructor(){this.lockChange=this.onLockChange.bind(this),this.lockError=this.onLockError.bind(this),document.addEventListener("pointerlockchange",this.lockChange,!1),document.addEventListener("pointerlockerror",this.lockError,!1)}onLockChange(e){e.stopPropagation(),e.preventDefault(),!this.locked&&ae.dispatch("Game::Pause")}onLockError(e){e.stopPropagation(),e.preventDefault(),console.error(e)}requestPointerLock(){document.documentElement.requestPointerLock()}exitPointerLock(){document.exitPointerLock()}dispose(){document.removeEventListener("pointerlockchange",this.lockChange,!1),document.removeEventListener("pointerlockerror",this.lockError,!1)}get locked(){return!!document.pointerLockElement}}class Vl extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lx{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ps,endingEnd:Ps};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=up,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,r=e._clip.duration,o=r/n,a=n/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case fp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Dl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const o=i===dp;if(e===0)return r===-1?n:o&&(r&1)===1?t-n:n;if(i===ci){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Is,n.endingEnd=Is):(e?n.endingStart=this.zeroSlopeAtStart?Is:Ps:n.endingStart=Do,t?n.endingEnd=this.zeroSlopeAtEnd?Is:Ps:n.endingEnd=Do)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=i,this}}class Ko{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let o;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}o=t.length;break i}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}o=i,i=0;break i}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zu extends Ko{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}const Hl="\\[\\]\\.:\\/",Px=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",Ix="[^"+Hl.replace("\\.","")+"]",Dx=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Ux=/(WCOD+)?/.source.replace("WCOD",Ix),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),zx=new RegExp("^"+Dx+Ux+Fx+Nx+"$"),Ox=["material","materials","bones","map"];class Bx{constructor(e,t,i){const n=i||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ke{constructor(e,t,i){this.path=t,this.parsedPath=i||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,i):new Ke(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(e){const t=zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);Ox.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=Bx;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kx{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,o;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,o=n;r!==o;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){Wt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const o=this._workIndex*r;Wt.multiplyQuaternionsFlat(e,o,e,t,e,i),Wt.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,r){const o=1-n;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*n}}}function _n(s,e,t){return Ju(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function so(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ju(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vx(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Fh(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function Qu(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}class Hx extends Ko{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ps,endingEnd:Ps}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Is:r=e,a=2*t-i;break;case Do:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Is:o=e,l=2*i-t;break;case Do:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-t)/(n-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-p)*m+(1.5+p)*g+.5*_,T=p*m-p*g;for(let S=0;S!==a;++S)r[S]=f*o[h+S]+M*o[c+S]+x*o[l+S]+T*o[u+S];return r}}class Gx extends Ko{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=_n(i,r,o),this.values=_n(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Ju(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=_n(this.times),t=_n(this.values),i=this.getValueSize(),n=this.getInterpolation()===xa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,p=u+i;for(let _=0;_!==i;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=_n(e,0,o),this.values=_n(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=_n(this.times,0),t=_n(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=Io;class $s extends Hi{}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Po;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class ed extends Hi{}ed.prototype.ValueTypeName="color";class Fo extends Hi{}Fo.prototype.ValueTypeName="number";class Wx extends Ko{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Wt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Pr extends Hi{InterpolantFactoryMethodLinear(e){return new Wx(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.DefaultInterpolation=Io;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Hi{}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Po;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends Hi{}No.prototype.ValueTypeName="vector";class Nh{constructor(e,t=-1,i,n=Dl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=js(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(jx(i[o]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Hi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Vx(l);l=Fh(l,1,h),c=Fh(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,p,_,g){if(p.length!==0){const m=[],f=[];Qu(p,m,f,_),m.length!==0&&g.push(new u(d,m,f))}},n=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let M=0;M!==d[_].morphTargets.length;++M){const x=d[_];m.push(x.time),f.push(x.morphTarget===g?1:0)}n.push(new Fo(".morphTargetInfluence["+g+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";i(No,p+".position",d,"pos",n),i(Pr,p+".quaternion",d,"rot",n),i(No,p+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fo;case"vector":case"vector2":case"vector3":case"vector4":return No;case"color":return ed;case"quaternion":return Pr;case"bool":case"boolean":return $s;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function jx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xx(s.type);if(s.times===void 0){const t=[],i=[];Qu(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const qx=new Float32Array(1);class Yx extends Rn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=n[u],p=d.name;let _=h[p];if(_!==void 0)++_.referenceCount,o[u]=_;else{if(_=o[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;_=new kx(Ke.create(i,p,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),o[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Zu(new Float32Array(2),new Float32Array(2),1,qx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let o=typeof e=="string"?Nh.findByName(n,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=Dl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Lx(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?Nh.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const zh=new U,ro=new U;class td{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zh.subVectors(e,this.start),ro.subVectors(this.end,this.start);const i=ro.dot(ro);let r=ro.dot(zh)/i;return t&&(r=Bt(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class id extends Cn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}var Ct=(s=>(s[s.BLACK=0]="BLACK",s[s.PORTAL=2236962]="PORTAL",s[s.BLUE=2980095]="BLUE",s[s.FOG=4737096]="FOG",s[s.RAIN=4934475]="RAIN",s[s.RED=9045767]="RED",s[s.MOON=11065767]="MOON",s[s.FIRE=16496449]="FIRE",s[s.WHITE=16777215]="WHITE",s))(Ct||{}),di;(s=>{class e extends id{constructor(i={}){super(i),this.setValues(i)}async updateDefaultFragmentShader(i){const n=await Ze.Loader.loadShader("ground/pars.frag"),r=await Ze.Loader.loadShader("ground/main.frag");i.fragmentShader=`${n}
      ${i.fragmentShader.replace("#include <output_fragment>",`
        ${r}`)}`}async updateDefaultVertexShader(i){const n=await Ze.Loader.loadShader("ground/pars.vert"),r=await Ze.Loader.loadShader("ground/main.vert");i.vertexShader=`${n}
      ${i.vertexShader.replace("void main() {",`void main() {
          ${r}`)}`}onBeforeCompile(i){this.updateDefaultFragmentShader(i),this.updateDefaultVertexShader(i),this.needsUpdate=!0}}s.Ground=e,s.DynamicCollider=new Ds({color:Ct.RED,wireframe:!0,visible:!1,opacity:.33}),s.StaticCollider=new Ds({color:Ct.RAIN,transparent:!0,depthWrite:!1,visible:!1,opacity:.5}),s.Transparent=new Ds({color:Ct.BLACK,transparent:!0,depthWrite:!1,visible:!1,opacity:0}),s.HitBox=new Ds({transparent:!0,depthWrite:!1,color:Ct.RED,visible:!1,opacity:.75})})(di||(di={}));const nd=0,$x=1,Kx=2,Oh=2,Ga=1.25,Bh=1,bo=6*4+4+4,ml=65535,Zx=Math.pow(2,-24);class oo{constructor(){}}function Fi(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function kh(s){let e=-1,t=-1/0;for(let i=0;i<3;i++){const n=s[i+3]-s[i];n>t&&(t=n,e=i)}return e}function Vh(s,e){e.set(s)}function Hh(s,e,t){let i,n;for(let r=0;r<3;r++){const o=r+3;i=s[r],n=e[r],t[r]=i<n?i:n,i=s[o],n=e[o],t[o]=i>n?i:n}}function ao(s,e,t){for(let i=0;i<3;i++){const n=e[s+2*i],r=e[s+2*i+1],o=n-r,a=n+r;o<t[i]&&(t[i]=o),a>t[i+3]&&(t[i+3]=a)}}function hr(s){const e=s[3]-s[0],t=s[4]-s[1],i=s[5]-s[2];return 2*(e*t+t*i+i*e)}function Jx(s,e){if(!s.index){const t=s.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let n;t>65535?n=new Uint32Array(new i(4*t)):n=new Uint16Array(new i(2*t)),s.setIndex(new Ws(n,1));for(let r=0;r<t;r++)n[r]=r}}function Qx(s){if(!s.groups||!s.groups.length)return[{offset:0,count:s.index.count/3}];const e=[],t=new Set;for(const n of s.groups)t.add(n.start),t.add(n.start+n.count);const i=Array.from(t.values()).sort((n,r)=>n-r);for(let n=0;n<i.length-1;n++){const r=i[n],o=i[n+1];e.push({offset:r/3,count:(o-r)/3})}return e}function Wa(s,e,t,i,n=null){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,p=1/0,_=-1/0,g=-1/0,m=-1/0;const f=n!==null;for(let M=e*6,x=(e+t)*6;M<x;M+=6){const T=s[M+0],S=s[M+1],b=T-S,v=T+S;b<r&&(r=b),v>l&&(l=v),f&&T<u&&(u=T),f&&T>_&&(_=T);const w=s[M+2],y=s[M+3],E=w-y,R=w+y;E<o&&(o=E),R>c&&(c=R),f&&w<d&&(d=w),f&&w>g&&(g=w);const I=s[M+4],P=s[M+5],F=I-P,z=I+P;F<a&&(a=F),z>h&&(h=z),f&&I<p&&(p=I),f&&I>m&&(m=I)}i[0]=r,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=h,f&&(n[0]=u,n[1]=d,n[2]=p,n[3]=_,n[4]=g,n[5]=m)}function ev(s,e,t,i){let n=1/0,r=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let h=e*6,u=(e+t)*6;h<u;h+=6){const d=s[h+0];d<n&&(n=d),d>a&&(a=d);const p=s[h+2];p<r&&(r=p),p>l&&(l=p);const _=s[h+4];_<o&&(o=_),_>c&&(c=_)}i[0]=n,i[1]=r,i[2]=o,i[3]=a,i[4]=l,i[5]=c}function tv(s,e,t,i,n){let r=t,o=t+i-1;const a=n.pos,l=n.axis*2;for(;;){for(;r<=o&&e[r*6+l]<a;)r++;for(;r<=o&&e[o*6+l]>=a;)o--;if(r<o){for(let c=0;c<3;c++){let h=s[r*3+c];s[r*3+c]=s[o*3+c],s[o*3+c]=h;let u=e[r*6+c*2+0];e[r*6+c*2+0]=e[o*6+c*2+0],e[o*6+c*2+0]=u;let d=e[r*6+c*2+1];e[r*6+c*2+1]=e[o*6+c*2+1],e[o*6+c*2+1]=d}r++,o--}else return r}}const Zi=32,iv=(s,e)=>s.candidate-e.candidate,xn=new Array(Zi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),lo=new Float32Array(6);function nv(s,e,t,i,n,r){let o=-1,a=0;if(r===nd)o=kh(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===$x)o=kh(s),o!==-1&&(a=sv(t,i,n,o));else if(r===Kx){const l=hr(s);let c=Ga*n;const h=i*6,u=(i+n)*6;for(let d=0;d<3;d++){const p=e[d],m=(e[d+3]-p)/Zi;if(n<Zi/4){const f=[...xn];f.length=n;let M=0;for(let T=h;T<u;T+=6,M++){const S=f[M];S.candidate=t[T+2*d],S.count=0;const{bounds:b,leftCacheBounds:v,rightCacheBounds:w}=S;for(let y=0;y<3;y++)w[y]=1/0,w[y+3]=-1/0,v[y]=1/0,v[y+3]=-1/0,b[y]=1/0,b[y+3]=-1/0;ao(T,t,b)}f.sort(iv);let x=n;for(let T=0;T<x;T++){const S=f[T];for(;T+1<x&&f[T+1].candidate===S.candidate;)f.splice(T+1,1),x--}for(let T=h;T<u;T+=6){const S=t[T+2*d];for(let b=0;b<x;b++){const v=f[b];S>=v.candidate?ao(T,t,v.rightCacheBounds):(ao(T,t,v.leftCacheBounds),v.count++)}}for(let T=0;T<x;T++){const S=f[T],b=S.count,v=n-S.count,w=S.leftCacheBounds,y=S.rightCacheBounds;let E=0;b!==0&&(E=hr(w)/l);let R=0;v!==0&&(R=hr(y)/l);const I=Bh+Ga*(E*b+R*v);I<c&&(o=d,c=I,a=S.candidate)}}else{for(let x=0;x<Zi;x++){const T=xn[x];T.count=0,T.candidate=p+m+x*m;const S=T.bounds;for(let b=0;b<3;b++)S[b]=1/0,S[b+3]=-1/0}for(let x=h;x<u;x+=6){let b=~~((t[x+2*d]-p)/m);b>=Zi&&(b=Zi-1);const v=xn[b];v.count++,ao(x,t,v.bounds)}const f=xn[Zi-1];Vh(f.bounds,f.rightCacheBounds);for(let x=Zi-2;x>=0;x--){const T=xn[x],S=xn[x+1];Hh(T.bounds,S.rightCacheBounds,T.rightCacheBounds)}let M=0;for(let x=0;x<Zi-1;x++){const T=xn[x],S=T.count,b=T.bounds,w=xn[x+1].rightCacheBounds;S!==0&&(M===0?Vh(b,lo):Hh(b,lo,lo)),M+=S;let y=0,E=0;M!==0&&(y=hr(lo)/l);const R=n-M;R!==0&&(E=hr(w)/l);const I=Bh+Ga*(y*M+E*R);I<c&&(o=d,c=I,a=T.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function sv(s,e,t,i){let n=0;for(let r=e,o=e+t;r<o;r++)n+=s[r*6+i*2];return n/t}function rv(s,e){const t=s.attributes.position,i=s.index.array,n=i.length/3,r=new Float32Array(n*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const h=["getX","getY","getZ"];for(let u=0;u<n;u++){const d=u*3,p=u*6;let _,g,m;o?(_=i[d+0],g=i[d+1],m=i[d+2]):(_=i[d+0]*c+l,g=i[d+1]*c+l,m=i[d+2]*c+l);for(let f=0;f<3;f++){let M,x,T;o?(M=t[h[f]](_),x=t[h[f]](g),T=t[h[f]](m)):(M=a[_+f],x=a[g+f],T=a[m+f]);let S=M;x<S&&(S=x),T<S&&(S=T);let b=M;x>b&&(b=x),T>b&&(b=T);const v=(b-S)/2,w=f*2;r[p+w+0]=S+v,r[p+w+1]=v+(Math.abs(S)+v)*Zx,S<e[f]&&(e[f]=S),b>e[f+3]&&(e[f+3]=b)}}return r}function ov(s,e){function t(f){d&&d(f/p)}function i(f,M,x,T=null,S=0){if(!_&&S>=l&&(_=!0,c&&(console.warn(`MeshBVH: Max depth of ${l} reached when generating BVH. Consider increasing maxDepth.`),console.warn(s))),x<=h||S>=l)return t(M+x),f.offset=M,f.count=x,f;const b=nv(f.boundingData,T,o,M,x,u);if(b.axis===-1)return t(M+x),f.offset=M,f.count=x,f;const v=tv(a,o,M,x,b);if(v===M||v===M+x)t(M+x),f.offset=M,f.count=x;else{f.splitAxis=b.axis;const w=new oo,y=M,E=v-M;f.left=w,w.boundingData=new Float32Array(6),Wa(o,y,E,w.boundingData,r),i(w,y,E,r,S+1);const R=new oo,I=v,P=x-E;f.right=R,R.boundingData=new Float32Array(6),Wa(o,I,P,R.boundingData,r),i(R,I,P,r,S+1)}return f}Jx(s,e);const n=new Float32Array(6),r=new Float32Array(6),o=rv(s,n),a=s.index.array,l=e.maxDepth,c=e.verbose,h=e.maxLeafTris,u=e.strategy,d=e.onProgress,p=s.index.count/3;let _=!1;const g=[],m=Qx(s);if(m.length===1){const f=m[0],M=new oo;M.boundingData=n,ev(o,f.offset,f.count,r),i(M,f.offset,f.count,r),g.push(M)}else for(let f of m){const M=new oo;M.boundingData=new Float32Array(6),Wa(o,f.offset,f.count,M.boundingData,r),i(M,f.offset,f.count,r),g.push(M)}return g}function av(s,e){const t=ov(s,e);let i,n,r;const o=[],a=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<t.length;h++){const u=t[h];let d=l(u);const p=new a(bo*d);i=new Float32Array(p),n=new Uint32Array(p),r=new Uint16Array(p),c(0,u),o.push(p)}return o;function l(h){return h.count?1:1+l(h.left)+l(h.right)}function c(h,u){const d=h/4,p=h/2,_=!!u.count,g=u.boundingData;for(let m=0;m<6;m++)i[d+m]=g[m];if(_){const m=u.offset,f=u.count;return n[d+6]=m,r[p+14]=f,r[p+15]=ml,h+bo}else{const m=u.left,f=u.right,M=u.splitAxis;let x;if(x=c(h+bo,m),x/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return n[d+6]=x/4,x=c(x,f),n[d+7]=M,x}}}class ln{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,n=-1/0;for(let r=0,o=e.length;r<o;r++){const l=e[r][t];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(e,t){let i=1/0,n=-1/0;for(let r=0,o=t.length;r<o;r++){const a=t[r],l=e.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(e){return this.min>e.max||e.min>this.max}}ln.prototype.setFromBox=function(){const s=new ie;return function(t,i){const n=i.min,r=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){s.x=n.x*l+r.x*(1-l),s.y=n.y*c+r.y*(1-c),s.z=n.z*h+r.z*(1-h);const u=t.dot(s);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}}();const lv=function(){const s=new ie,e=new ie,t=new ie;return function(n,r,o){const a=n.start,l=s,c=r.start,h=e;t.subVectors(a,c),s.subVectors(n.end,n.start),e.subVectors(r.end,r.start);const u=t.dot(h),d=h.dot(l),p=h.dot(h),_=t.dot(l),m=l.dot(l)*p-d*d;let f,M;m!==0?f=(u*d-_*p)/m:f=0,M=(u+f*d)/p,o.x=f,o.y=M}}(),Wl=function(){const s=new ns,e=new ie,t=new ie;return function(n,r,o,a){lv(n,r,s);let l=s.x,c=s.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),n.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?n.at(0,o):n.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=n.start:h=n.end;let u;c<0?u=r.start:u=r.end;const d=e,p=t;if(n.closestPointToPoint(u,!0,e),r.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=p.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(p);return}}}}(),cv=function(){const s=new ie,e=new ie,t=new xu,i=new nn;return function(r,o){const{radius:a,center:l}=r,{a:c,b:h,c:u}=o;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a||(i.start=c,i.end=u,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a)||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const f=g.projectPoint(l,e);if(o.containsPoint(f))return!0}return!1}}(),hv=1e-15;function ws(s){return Math.abs(s)<hv}class cn extends Ls{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new ie),this.satBounds=new Array(4).fill().map(()=>new ln),this.points=[this.a,this.b,this.c],this.sphere=new $d,this.plane=new xu,this.needsUpdate=!0}intersectsSphere(e){return cv(e,this)}update(){const e=this.a,t=this.b,i=this.c,n=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,n);const c=r[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,n);const u=r[2],d=o[2];u.subVectors(t,i),d.setFromPoints(u,n);const p=r[3],_=o[3];p.subVectors(i,e),_.setFromPoints(p,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}cn.prototype.closestPointToSegment=function(){const s=new ie,e=new ie,t=new nn;return function(n,r=null,o=null){const{start:a,end:l}=n,c=this.points;let h,u=1/0;for(let d=0;d<3;d++){const p=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[p]),Wl(t,n,s,e),h=s.distanceToSquared(e),h<u&&(u=h,r&&r.copy(s),o&&o.copy(e))}return this.closestPointToPoint(a,s),h=a.distanceToSquared(s),h<u&&(u=h,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(l,s),h=l.distanceToSquared(s),h<u&&(u=h,r&&r.copy(s),o&&o.copy(l)),Math.sqrt(u)}}();cn.prototype.intersectsTriangle=function(){const s=new cn,e=new Array(3),t=new Array(3),i=new ln,n=new ln,r=new ie,o=new ie,a=new ie,l=new ie,c=new nn,h=new nn,u=new nn;return function(p,_=null,g=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(s.copy(p),s.update(),p=s);const m=this.plane,f=p.plane;if(Math.abs(m.normal.dot(f.normal))>1-1e-10){const M=this.satBounds,x=this.satAxes;t[0]=p.a,t[1]=p.b,t[2]=p.c;for(let b=0;b<4;b++){const v=M[b],w=x[b];if(i.setFromPoints(w,t),v.isSeparated(i))return!1}const T=p.satBounds,S=p.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let b=0;b<4;b++){const v=T[b],w=S[b];if(i.setFromPoints(w,e),v.isSeparated(i))return!1}for(let b=0;b<4;b++){const v=x[b];for(let w=0;w<4;w++){const y=S[w];if(r.crossVectors(v,y),i.setFromPoints(r,e),n.setFromPoints(r,t),i.isSeparated(n))return!1}}return _&&(g||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}else{const M=this.points;let x=!1,T=0;for(let F=0;F<3;F++){const z=M[F],W=M[(F+1)%3];c.start.copy(z),c.end.copy(W),c.delta(o);const V=x?h.start:h.end,j=ws(f.distanceToPoint(z));if(ws(f.normal.dot(o))&&j){h.copy(c),T=2;break}if((f.intersectLine(c,V)||j)&&!ws(V.distanceTo(W))){if(T++,x)break;x=!0}}if(T===1&&p.containsPoint(h.end))return _&&(_.start.copy(h.end),_.end.copy(h.end)),!0;if(T!==2)return!1;const S=p.points;let b=!1,v=0;for(let F=0;F<3;F++){const z=S[F],W=S[(F+1)%3];c.start.copy(z),c.end.copy(W),c.delta(a);const V=b?u.start:u.end,j=ws(m.distanceToPoint(z));if(ws(m.normal.dot(a))&&j){u.copy(c),v=2;break}if((m.intersectLine(c,V)||j)&&!ws(V.distanceTo(W))){if(v++,b)break;b=!0}}if(v===1&&this.containsPoint(u.end))return _&&(_.start.copy(u.end),_.end.copy(u.end)),!0;if(v!==2)return!1;if(h.delta(o),u.delta(a),o.dot(a)<0){let F=u.start;u.start=u.end,u.end=F}const w=h.start.dot(o),y=h.end.dot(o),E=u.start.dot(o),R=u.end.dot(o),I=y<E,P=w<R;return w!==R&&E!==y&&I===P?!1:(_&&(l.subVectors(h.start,u.start),l.dot(o)>0?_.start.copy(h.start):_.start.copy(u.start),l.subVectors(h.end,u.end),l.dot(o)<0?_.end.copy(h.end):_.end.copy(u.end)),!0)}}}();cn.prototype.distanceToPoint=function(){const s=new ie;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();cn.prototype.distanceToTriangle=function(){const s=new ie,e=new ie,t=["a","b","c"],i=new nn,n=new nn;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const p=t[u],_=o[p];this.closestPointToPoint(_,s),d=_.distanceToSquared(s),d<h&&(h=d,a&&a.copy(s),l&&l.copy(_));const g=this[p];o.closestPointToPoint(g,s),d=g.distanceToSquared(s),d<h&&(h=d,a&&a.copy(g),l&&l.copy(s))}for(let u=0;u<3;u++){const d=t[u],p=t[(u+1)%3];i.set(this[d],this[p]);for(let _=0;_<3;_++){const g=t[_],m=t[(_+1)%3];n.set(o[g],o[m]),Wl(i,n,s,e);const f=s.distanceToSquared(e);f<h&&(h=f,a&&a.copy(s),l&&l.copy(e))}}return Math.sqrt(h)}}();class Vi{constructor(e,t,i){this.isOrientedBox=!0,this.min=new ie,this.max=new ie,this.matrix=new si,this.invMatrix=new si,this.points=new Array(8).fill().map(()=>new ie),this.satAxes=new Array(3).fill().map(()=>new ie),this.satBounds=new Array(3).fill().map(()=>new ln),this.alignedSatBounds=new Array(3).fill().map(()=>new ln),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Vi.prototype.update=function(){return function(){const e=this.matrix,t=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,p=n[d];p.x=c?i.x:t.x,p.y=h?i.y:t.y,p.z=u?i.z:t.z,p.applyMatrix4(e)}const r=this.satBounds,o=this.satAxes,a=n[0];for(let c=0;c<3;c++){const h=o[c],u=r[c],d=1<<c,p=n[d];h.subVectors(a,p),u.setFromPoints(h,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Vi.prototype.intersectsBox=function(){const s=new ln;return function(t){this.needsUpdate&&this.update();const i=t.min,n=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=i.x,s.max=n.x,a[0].isSeparated(s)||(s.min=i.y,s.max=n.y,a[1].isSeparated(s))||(s.min=i.z,s.max=n.z,a[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const c=o[l],h=r[l];if(s.setFromBox(c,t),h.isSeparated(s))return!1}return!0}}();Vi.prototype.intersectsTriangle=function(){const s=new cn,e=new Array(3),t=new ln,i=new ln,n=new ie;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const p=a[d],_=l[d];if(t.setFromPoints(_,e),p.isSeparated(t))return!1}const c=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){const p=c[d],_=h[d];if(t.setFromPoints(_,u),p.isSeparated(t))return!1}for(let d=0;d<3;d++){const p=l[d];for(let _=0;_<4;_++){const g=h[_];if(n.crossVectors(p,g),t.setFromPoints(n,e),i.setFromPoints(n,u),t.isSeparated(i))return!1}}return!0}}();Vi.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Vi.prototype.distanceToPoint=function(){const s=new ie;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();Vi.prototype.distanceToBox=function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new nn),t=new Array(12).fill().map(()=>new nn),i=new ie,n=new ie;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(n),this.closestPointToPoint(n,i),o.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;const h=a*a,u=o.min,d=o.max,p=this.points;let _=1/0;for(let m=0;m<8;m++){const f=p[m];n.copy(f).clamp(u,d);const M=f.distanceToSquared(n);if(M<_&&(_=M,l&&l.copy(f),c&&c.copy(n),M<h))return Math.sqrt(M)}let g=0;for(let m=0;m<3;m++)for(let f=0;f<=1;f++)for(let M=0;M<=1;M++){const x=(m+1)%3,T=(m+2)%3,S=f<<x|M<<T,b=1<<m|f<<x|M<<T,v=p[S],w=p[b];e[g].set(v,w);const E=s[m],R=s[x],I=s[T],P=t[g],F=P.start,z=P.end;F[E]=u[E],F[R]=f?u[R]:d[R],F[I]=M?u[I]:d[R],z[E]=d[E],z[R]=f?u[R]:d[R],z[I]=M?u[I]:d[R],g++}for(let m=0;m<=1;m++)for(let f=0;f<=1;f++)for(let M=0;M<=1;M++){n.x=m?d.x:u.x,n.y=f?d.y:u.y,n.z=M?d.z:u.z,this.closestPointToPoint(n,i);const x=n.distanceToSquared(i);if(x<_&&(_=x,l&&l.copy(i),c&&c.copy(n),x<h))return Math.sqrt(x)}for(let m=0;m<12;m++){const f=e[m];for(let M=0;M<12;M++){const x=t[M];Wl(f,x,i,n);const T=i.distanceToSquared(n);if(T<_&&(_=T,l&&l.copy(i),c&&c.copy(n),T<h))return Math.sqrt(T)}}return Math.sqrt(_)}}();const Es=new ie,As=new ie,Ts=new ie,co=new ns,ho=new ns,uo=new ns,Gh=new ie,Wh=new ie,Xh=new ie,fo=new ie;function uv(s,e,t,i,n,r){let o;return r===pu?o=s.intersectTriangle(i,t,e,!0,n):o=s.intersectTriangle(e,t,i,r!==yi,n),o===null?null:{distance:s.origin.distanceTo(n),point:n.clone()}}function dv(s,e,t,i,n,r,o,a,l){Es.fromBufferAttribute(e,r),As.fromBufferAttribute(e,o),Ts.fromBufferAttribute(e,a);const c=uv(s,Es,As,Ts,fo,l);if(c){i&&(co.fromBufferAttribute(i,r),ho.fromBufferAttribute(i,o),uo.fromBufferAttribute(i,a),c.uv=Ls.getInterpolation(fo,Es,As,Ts,co,ho,uo,new ns)),n&&(co.fromBufferAttribute(n,r),ho.fromBufferAttribute(n,o),uo.fromBufferAttribute(n,a),c.uv1=Ls.getInterpolation(fo,Es,As,Ts,co,ho,uo,new ns)),t&&(Gh.fromBufferAttribute(t,r),Wh.fromBufferAttribute(t,o),Xh.fromBufferAttribute(t,a),c.normal=Ls.getInterpolation(fo,Es,As,Ts,Gh,Wh,Xh,new ie),c.normal.dot(s.direction)>0&&c.normal.multiplyScalar(-1));const h={a:r,b:o,c:a,normal:new ie,materialIndex:0};Ls.getNormal(Es,As,Ts,h.normal),c.face=h,c.faceIndex=r}return c}function sd(s,e,t,i,n){const r=i*3,o=s.index.getX(r),a=s.index.getX(r+1),l=s.index.getX(r+2),{position:c,normal:h,uv:u,uv1:d}=s.attributes,p=dv(t,c,h,u,d,o,a,l,e);return p?(p.faceIndex=i,n&&n.push(p),p):null}function fv(s,e,t,i,n,r){for(let o=i,a=i+n;o<a;o++)sd(s,e,t,o,r)}function pv(s,e,t,i,n){let r=1/0,o=null;for(let a=i,l=i+n;a<l;a++){const c=sd(s,e,t,a);c&&c.distance<r&&(o=c,r=c.distance)}return o}function Ii(s,e,t,i){const n=s.a,r=s.b,o=s.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(e),l=t.getX(e+1),c=t.getX(e+2)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),r.x=i.getX(l),r.y=i.getY(l),r.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function jh(s,e,t,i,n,r,o){const a=t.index,l=t.attributes.position;for(let c=s,h=e+s;c<h;c++)if(Ii(o,c*3,a,l),o.needsUpdate=!0,i(o,c,n,r))return!0;return!1}class rd{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}function Mn(s,e){return e[s+15]===65535}function Os(s,e){return e[s+6]}function Rr(s,e){return e[s+14]}function Cr(s){return s+8}function Lr(s,e){return e[s+6]}function mv(s,e){return e[s+7]}const Fs=new os,zo=new ie,gv=["x","y","z"];function gl(s,e,t,i,n){let r=s*2,o=Zs,a=An,l=Tn;if(Mn(r,a)){const h=Os(s,l),u=Rr(r,a);fv(e,t,i,h,u,n)}else{const h=Cr(s);Oo(h,o,i,zo)&&gl(h,e,t,i,n);const u=Lr(s,l);Oo(u,o,i,zo)&&gl(u,e,t,i,n)}}function _l(s,e,t,i){let n=s*2,r=Zs,o=An,a=Tn;if(Mn(n,o)){const c=Os(s,a),h=Rr(n,o);return pv(e,t,i,c,h)}else{const c=mv(s,a),h=gv[c],d=i.direction[h]>=0;let p,_;d?(p=Cr(s),_=Lr(s,a)):(p=Lr(s,a),_=Cr(s));const m=Oo(p,r,i,zo)?_l(p,e,t,i):null;if(m){const x=m.point[h];if(d?x<=r[_+c]:x>=r[_+c+3])return m}const M=Oo(_,r,i,zo)?_l(_,e,t,i):null;return m&&M?m.distance<=M.distance?m:M:m||M||null}}const _v=function(){let s,e;const t=[],i=new rd(()=>new os);return function(...o){s=i.getPrimitive(),e=i.getPrimitive(),t.push(s,e);const a=n(...o);i.releasePrimitive(s),i.releasePrimitive(e),t.pop(),t.pop();const l=t.length;return l>0&&(e=t[l-1],s=t[l-2]),a};function n(r,o,a,l,c=null,h=0,u=0){function d(x){let T=x*2,S=An,b=Tn;for(;!Mn(T,S);)x=Cr(x),T=x*2;return Os(x,b)}function p(x){let T=x*2,S=An,b=Tn;for(;!Mn(T,S);)x=Lr(x,b),T=x*2;return Os(x,b)+Rr(T,S)}let _=r*2,g=Zs,m=An,f=Tn;if(Mn(_,m)){const x=Os(r,f),T=Rr(_,m);return Fi(r,g,s),l(x,T,!1,u,h+r,s)}else{const x=Cr(r),T=Lr(r,f);let S=x,b=T,v,w,y,E;if(c&&(y=s,E=e,Fi(S,g,y),Fi(b,g,E),v=c(y),w=c(E),w<v)){S=T,b=x;const V=v;v=w,w=V,y=E}y||(y=s,Fi(S,g,y));const R=Mn(S*2,m),I=a(y,R,v,u+1,h+S);let P;if(I===Oh){const V=d(S),Y=p(S)-V;P=l(V,Y,!0,u+1,h+S,y)}else P=I&&n(S,o,a,l,c,h,u+1);if(P)return!0;E=e,Fi(b,g,E);const F=Mn(b*2,m),z=a(E,F,w,u+1,h+b);let W;if(z===Oh){const V=d(b),Y=p(b)-V;W=l(V,Y,!0,u+1,h+b,E)}else W=z&&n(b,o,a,l,c,h,u+1);return!!W}}}(),xv=function(){const s=new cn,e=new cn,t=new si,i=new Vi,n=new Vi;return function r(o,a,l,c,h=null){let u=o*2,d=Zs,p=An,_=Tn;if(h===null&&(l.boundingBox||l.computeBoundingBox(),i.set(l.boundingBox.min,l.boundingBox.max,c),h=i),Mn(u,p)){const m=a,f=m.index,M=m.attributes.position,x=l.index,T=l.attributes.position,S=Os(o,_),b=Rr(u,p);if(t.copy(c).invert(),l.boundsTree)return Fi(o,d,n),n.matrix.copy(t),n.needsUpdate=!0,l.boundsTree.shapecast({intersectsBounds:w=>n.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(c),w.b.applyMatrix4(c),w.c.applyMatrix4(c),w.needsUpdate=!0;for(let y=S*3,E=(b+S)*3;y<E;y+=3)if(Ii(e,y,f,M),e.needsUpdate=!0,w.intersectsTriangle(e))return!0;return!1}});for(let v=S*3,w=b+S*3;v<w;v+=3){Ii(s,v,f,M),s.a.applyMatrix4(t),s.b.applyMatrix4(t),s.c.applyMatrix4(t),s.needsUpdate=!0;for(let y=0,E=x.count;y<E;y+=3)if(Ii(e,y,x,T),e.needsUpdate=!0,s.intersectsTriangle(e))return!0}}else{const m=o+8,f=_[o+6];return Fi(m,d,Fs),!!(h.intersectsBox(Fs)&&r(m,a,l,c,h)||(Fi(f,d,Fs),h.intersectsBox(Fs)&&r(f,a,l,c,h)))}}}();function Oo(s,e,t,i){return Fi(s,e,Fs),t.intersectBox(Fs,i)}const xl=[];let wo,Zs,An,Tn;function xr(s){wo&&xl.push(wo),wo=s,Zs=new Float32Array(s),An=new Uint16Array(s),Tn=new Uint32Array(s)}function po(){wo=null,Zs=null,An=null,Tn=null,xl.length&&xr(xl.pop())}const Xa=Symbol("skip tree generation"),ja=new os,qa=new os,Rs=new si,zn=new Vi,ur=new Vi,dr=new ie,mo=new ie,vv=new ie,yv=new ie,Mv=new ie,qh=new os,Ci=new rd(()=>new cn);class wr{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),wr.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};const i=e.geometry,n=e._roots,r=i.getIndex();let o;return t.cloneBuffers?o={roots:n.map(a=>a.slice()),index:r.array.slice()}:o={roots:n,index:r.array},o}static deserialize(e,t,i={}){if(typeof i=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),wr.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});i={setIndex:!0,...i};const{index:n,roots:r}=e,o=new wr(t,{...i,[Xa]:!0});if(o._roots=r,i.setIndex){const a=t.getIndex();if(a===null){const l=new Ws(e.index,1,!1);t.setIndex(l)}else a.array!==n&&(a.array.set(n),a.needsUpdate=!0)}return o}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:nd,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[Xa]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[Xa]||(this._roots=av(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new os))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=this.geometry,i=t.index.array,n=t.attributes.position;let r,o,a,l,c=0;const h=this._roots;for(let d=0,p=h.length;d<p;d++)r=h[d],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,p,_=!1){const g=d*2;if(a[g+15]===ml){const f=o[d+6],M=a[g+14];let x=1/0,T=1/0,S=1/0,b=-1/0,v=-1/0,w=-1/0;for(let y=3*f,E=3*(f+M);y<E;y++){const R=i[y],I=n.getX(R),P=n.getY(R),F=n.getZ(R);I<x&&(x=I),I>b&&(b=I),P<T&&(T=P),P>v&&(v=P),F<S&&(S=F),F>w&&(w=F)}return l[d+0]!==x||l[d+1]!==T||l[d+2]!==S||l[d+3]!==b||l[d+4]!==v||l[d+5]!==w?(l[d+0]=x,l[d+1]=T,l[d+2]=S,l[d+3]=b,l[d+4]=v,l[d+5]=w,!0):!1}else{const f=d+8,M=o[d+6],x=f+p,T=M+p;let S=_,b=!1,v=!1;e?S||(b=e.has(x),v=e.has(T),S=!b&&!v):(b=!0,v=!0);const w=S||b,y=S||v;let E=!1;w&&(E=u(f,p,S));let R=!1;y&&(R=u(M,p,S));const I=E||R;if(I)for(let P=0;P<3;P++){const F=f+P,z=M+P,W=l[F],V=l[F+3],j=l[z],Y=l[z+3];l[d+P]=W<j?W:j,l[d+P+3]=V>Y?V:Y}return I}}}traverse(e,t=0){const i=this._roots[t],n=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,h=r[c+15]===ml;if(h){const u=n[a+6],d=r[c+14];e(l,h,new Float32Array(i,a*4,6),u,d)}else{const u=a+bo/4,d=n[a+6],p=n[a+7];e(l,h,new Float32Array(i,a*4,6),p)||(o(u,l+1),o(d,l+1))}}}raycast(e,t=uc){const i=this._roots,n=this.geometry,r=[],o=t.isMaterial,a=Array.isArray(t),l=n.groups,c=o?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=a?t[l[h].materialIndex].side:c,p=r.length;if(xr(i[h]),gl(0,n,d,e,r),po(),a){const _=l[h].materialIndex;for(let g=p,m=r.length;g<m;g++)r[g].face.materialIndex=_}}return r}raycastFirst(e,t=uc){const i=this._roots,n=this.geometry,r=t.isMaterial,o=Array.isArray(t);let a=null;const l=n.groups,c=r?t.side:t;for(let h=0,u=i.length;h<u;h++){const d=o?t[l[h].materialIndex].side:c;xr(i[h]);const p=_l(0,n,d,e);po(),p!=null&&(a==null||p.distance<a.distance)&&(a=p,o&&(p.face.materialIndex=l[h].materialIndex))}return a}intersectsGeometry(e,t){const i=this.geometry;let n=!1;for(const r of this._roots)if(xr(r),n=xv(0,i,e,t),po(),n)break;return n}shapecast(e,t,i){const n=this.geometry;if(e instanceof Function){if(t){const d=t;t=(p,_,g,m)=>{const f=_*3;return d(p,f,f+1,f+2,g,m)}}e={boundsTraverseOrder:i,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const r=Ci.getPrimitive();let{boundsTraverseOrder:o,intersectsBounds:a,intersectsRange:l,intersectsTriangle:c}=e;if(l&&c){const d=l;l=(p,_,g,m,f)=>d(p,_,g,m,f)?!0:jh(p,_,n,c,g,m,r)}else l||(c?l=(d,p,_,g)=>jh(d,p,n,c,_,g,r):l=(d,p,_)=>_);let h=!1,u=0;for(const d of this._roots){if(xr(d),h=_v(0,n,a,l,o,u),po(),h)break;u+=d.byteLength}return Ci.releasePrimitive(r),h}bvhcast(e,t,i){let{intersectsRanges:n,intersectsTriangles:r}=i;const o=this.geometry.index,a=this.geometry.attributes.position,l=e.geometry.index,c=e.geometry.attributes.position;Rs.copy(t).invert();const h=Ci.getPrimitive(),u=Ci.getPrimitive();if(r){let p=function(_,g,m,f,M,x,T,S){for(let b=m,v=m+f;b<v;b++){Ii(u,b*3,l,c),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let w=_,y=_+g;w<y;w++)if(Ii(h,w*3,o,a),h.needsUpdate=!0,r(h,u,w,b,M,x,T,S))return!0}return!1};if(n){const _=n;n=function(g,m,f,M,x,T,S,b){return _(g,m,f,M,x,T,S,b)?!0:p(g,m,f,M,x,T,S,b)}}else n=p}e.getBoundingBox(qa),qa.applyMatrix4(t);const d=this.shapecast({intersectsBounds:p=>qa.intersectsBox(p),intersectsRange:(p,_,g,m,f,M)=>(ja.copy(M),ja.applyMatrix4(Rs),e.shapecast({intersectsBounds:x=>ja.intersectsBox(x),intersectsRange:(x,T,S,b,v)=>n(p,_,x,T,m,f,b,v)}))});return Ci.releasePrimitive(h),Ci.releasePrimitive(u),d}intersectsBox(e,t){return zn.set(e.min,e.max,t),zn.needsUpdate=!0,this.shapecast({intersectsBounds:i=>zn.intersectsBox(i),intersectsTriangle:i=>zn.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},n={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),zn.set(e.boundingBox.min,e.boundingBox.max,t),zn.needsUpdate=!0;const a=this.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=Ci.getPrimitive(),p=Ci.getPrimitive();let _=mo,g=vv,m=null,f=null;n&&(m=yv,f=Mv);let M=1/0,x=null,T=null;return Rs.copy(t).invert(),ur.matrix.copy(Rs),this.shapecast({boundsTraverseOrder:S=>zn.distanceToBox(S),intersectsBounds:(S,b,v)=>v<M&&v<o?(b&&(ur.min.copy(S.min),ur.max.copy(S.max),ur.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:v=>ur.distanceToBox(v),intersectsBounds:(v,w,y)=>y<M&&y<o,intersectsRange:(v,w)=>{for(let y=v*3,E=(v+w)*3;y<E;y+=3){Ii(p,y,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let R=S*3,I=(S+b)*3;R<I;R+=3){Ii(d,R,c,l),d.needsUpdate=!0;const P=d.distanceToTriangle(p,_,m);if(P<M&&(g.copy(_),f&&f.copy(m),M=P,x=R/3,T=y/3),P<r)return!0}}}});{const v=u?u.count:h.count;for(let w=0,y=v;w<y;w+=3){Ii(p,w,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let E=S*3,R=(S+b)*3;E<R;E+=3){Ii(d,E,c,l),d.needsUpdate=!0;const I=d.distanceToTriangle(p,_,m);if(I<M&&(g.copy(_),f&&f.copy(m),M=I,x=E/3,T=w/3),I<r)return!0}}}}}),Ci.releasePrimitive(d),Ci.releasePrimitive(p),M===1/0?null:(i.point?i.point.copy(g):i.point=g.clone(),i.distance=M,i.faceIndex=x,n&&(n.point?n.point.copy(f):n.point=f.clone(),n.point.applyMatrix4(Rs),g.applyMatrix4(Rs),n.distance=g.sub(n.point).length(),n.faceIndex=T),i)}closestPointToPoint(e,t={},i=0,n=1/0){const r=i*i,o=n*n;let a=1/0,l=null;if(this.shapecast({boundsTraverseOrder:h=>(dr.copy(e).clamp(h.min,h.max),dr.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,dr);const d=e.distanceToSquared(dr);return d<a&&(mo.copy(dr),a=d,l=u),d<r}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(mo):t.point=mo.clone(),t.distance=c,t.faceIndex=l,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{Fi(0,new Float32Array(i),qh),e.union(qh)}),e}}function Sv(){this.boundsTree=null}const On=new ie,Bn=new ie,kn=new ie,Yh=new Pl,go=new ie,Ya=new ie,$h=new Pl,Kh=new Pl,_o=new si,Zh=new si;function fr(s,e){if(!s&&!e)return;const t=s.count===e.count,i=s.normalized===e.normalized,n=s.array.constructor===e.array.constructor,r=s.itemSize===e.itemSize;if(!t||!i||!n||!r)throw new Error}function vr(s,e=null){const t=s.array.constructor,i=s.normalized,n=s.itemSize,r=e===null?s.count:e;return new Ws(new t(n*r),n,i)}function od(s,e,t=0){if(s.isInterleavedBufferAttribute){const i=s.itemSize;for(let n=0,r=s.count;n<r;n++){const o=n+t;e.setX(o,s.getX(n)),i>=2&&e.setY(o,s.getY(n)),i>=3&&e.setZ(o,s.getZ(n)),i>=4&&e.setW(o,s.getW(n))}}else{const i=e.array,n=i.constructor,r=i.BYTES_PER_ELEMENT*s.itemSize*t;new n(i.buffer,r,s.array.length).set(s.array)}}function bv(s,e,t){const i=s.elements,n=e.elements;for(let r=0,o=n.length;r<o;r++)i[r]+=n[r]*t}function Jh(s,e,t){const i=s.skeleton,n=s.geometry,r=i.bones,o=i.boneInverses;$h.fromBufferAttribute(n.attributes.skinIndex,e),Kh.fromBufferAttribute(n.attributes.skinWeight,e),_o.elements.fill(0);for(let a=0;a<4;a++){const l=Kh.getComponent(a);if(l!==0){const c=$h.getComponent(a);Zh.multiplyMatrices(r[c].matrixWorld,o[c]),bv(_o,Zh,l)}}return _o.multiply(s.bindMatrix).premultiply(s.bindMatrixInverse),t.transformDirection(_o),t}function $a(s,e,t,i,n){go.set(0,0,0);for(let r=0,o=s.length;r<o;r++){const a=e[r],l=s[r];a!==0&&(Ya.fromBufferAttribute(l,i),t?go.addScaledVector(Ya,a):go.addScaledVector(Ya.sub(n),a))}n.add(go)}function wv(s,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new fi){const i=s[0].index!==null,{useGroups:n=!1,updateIndex:r=!1,skipAttributes:o=[]}=e,a=new Set(Object.keys(s[0].attributes)),l={};let c=0;t.clearGroups();for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(i!==(u.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const p in u.attributes){if(!a.has(p))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.');l[p]===void 0&&(l[p]=[]),l[p].push(u.attributes[p]),d++}if(d!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(n){let p;if(i)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,p,h),c+=p}}if(i){let h=!1;if(!t.index){let u=0;for(let d=0;d<s.length;++d)u+=s[d].index.count;t.setIndex(new Ws(new Uint32Array(u),1,!1)),h=!0}if(r||h){const u=t.index;let d=0,p=0;for(let _=0;_<s.length;++_){const g=s[_],m=g.index;if(o[_]!==!0)for(let f=0;f<m.count;++f)u.setX(d,m.getX(f)+p),d++;p+=g.attributes.position.count}}}for(const h in l){const u=l[h];if(!(h in t.attributes)){let _=0;for(const g in u)_+=u[g].count;t.setAttribute(h,vr(l[h][0],_))}const d=t.attributes[h];let p=0;for(let _=0,g=u.length;_<g;_++){const m=u[_];o[_]!==!0&&od(m,d,p),p+=m.count}}return t}function Ev(s,e){if(s===null||e===null)return s===e;if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}class Av{constructor(e){this.matrixWorld=new si,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,i=e.skeleton,n=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=n,i){i.boneTexture||i.computeBoneTexture(),i.update();const r=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==r.length?this.boneMatrices=r.slice():this.boneMatrices.set(r)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&Ev(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class Tv{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(i=>{i.traverseVisible(n=>{n.isMesh&&t.push(n)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new fi),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new fi){let t=[];const{meshes:i,useGroups:n,_intermediateGeometry:r,_diffMap:o}=this;for(let a=0,l=i.length;a<l;a++){const c=i[a],h=r[a],u=o.get(c);!u||u.didChange(c)?(this._convertToStaticGeometry(c,h),t.push(!1),u?u.update():o.set(c,new Av(c))):t.push(!0)}wv(r,{useGroups:n,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new fi){const i=e.geometry,n=this.applyWorldTransforms,r=this.attributes.includes("normal"),o=this.attributes.includes("tangent"),a=i.attributes,l=t.attributes;t.index||(t.index=i.index),l.position||t.setAttribute("position",vr(a.position)),r&&!l.normal&&a.normal&&t.setAttribute("normal",vr(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",vr(a.tangent)),fr(i.index,t.index),fr(a.position,l.position),r&&fr(a.normal,l.normal),o&&fr(a.tangent,l.tangent);const c=a.position,h=r?a.normal:null,u=o?a.tangent:null,d=i.morphAttributes.position,p=i.morphAttributes.normal,_=i.morphAttributes.tangent,g=i.morphTargetsRelative,m=e.morphTargetInfluences,f=new Kd;f.getNormalMatrix(e.matrixWorld);for(let M=0,x=a.position.count;M<x;M++)On.fromBufferAttribute(c,M),h&&Bn.fromBufferAttribute(h,M),u&&(Yh.fromBufferAttribute(u,M),kn.fromBufferAttribute(u,M)),m&&(d&&$a(d,m,g,M,On),p&&$a(p,m,g,M,Bn),_&&$a(_,m,g,M,kn)),e.isSkinnedMesh&&(e.applyBoneTransform(M,On),h&&Jh(e,M,Bn),u&&Jh(e,M,kn)),n&&On.applyMatrix4(e.matrixWorld),l.position.setXYZ(M,On.x,On.y,On.z),h&&(n&&Bn.applyNormalMatrix(f),l.normal.setXYZ(M,Bn.x,Bn.y,Bn.z)),u&&(n&&kn.transformDirection(e.matrixWorld),l.tangent.setXYZW(M,kn.x,kn.y,kn.z,Yh.w));for(const M in this.attributes){const x=this.attributes[M];x==="position"||x==="tangent"||x==="normal"||!(x in a)||(l[x]||t.setAttribute(x,vr(a[x])),fr(a[x],l[x]),od(a[x],l[x]))}return t}}class Rv{constructor(){this.positionVector=new U,this.rotationVector=new Bi,this.sizeVector=new U,this.GRAVITY=-9.81,this.MIN_SIZE=.01,this.DISABLE=5,this.ENABLE=1,this.SPEED=5}createBound(e,t,i,n=0){this.rotationVector.set(0,0,0);const r=e[0],o=e[1],a=r-t[0],l=o-t[1],c=a/-2+r,h=l/-2+o;let u=Math.abs(a),d=Math.abs(l);if(u&&d){const p=d>u,_=Math.hypot(u,d);this.rotationVector.set(0,p?et.d2+Math.atan(d/u):et.d2-Math.atan(u/d),0),p?d=_:u=_}u=u<d?this.MIN_SIZE:u,d=d<u?this.MIN_SIZE:d,this.positionVector.set(c,n,h),this.sizeVector.set(u,i,d)}borderOverflow(e){const{x:t,z:i}=this.positionVector;return Math.abs(t)>Math.abs(e.x)&&Math.abs(i)>Math.abs(e.z)&&t-e.x<=1&&i-e.z<=1}createStaticCollider(e){const{x:t,y:i,z:n}=this.sizeVector,r=new ht(new Ni(t,i,n),e);return r.position.copy(this.positionVector),r.rotation.copy(this.rotationVector),ae.dispatch("Level::AddObject",r),this.addStaticCollider(r),r}addArenaObstacle(e,t,i,n,r){return this.positionVector.set(e,n/2,t),this.sizeVector.set(i,n,r),this.rotationVector.set(0,0,0),this.createStaticCollider(di.Transparent)}addArenaMesh(e){this.addStaticCollider(e)}createGround(e,t){this.sizeVector.set(Math.abs(e[0]-t[0]),this.MIN_SIZE,Math.abs(e[1]-t[1])),this.positionVector.set((e[0]+t[0])/2,0,(e[1]+t[1])/2),this.createStaticCollider(di.Transparent)}createBounds(e,t){const i=new U,n=e.borders.concat([e.borders[0]]),r=t?.borders.concat([t?.borders[0]]);for(let o=0;o<e.borders.length;o++){if(this.createBound(n[o],n[o+1],e.height,e.y),this.createStaticCollider(di.StaticCollider),i.copy(this.positionVector),r&&this.createBound(r[o],r[o+1],t?.height,t?.y),this.borderOverflow(i))continue;const a=this.rotationVector.y?1.1:1,l=this.positionVector.distanceTo(i)/2*.95;this.positionVector.x-=(this.positionVector.x-i.x)/2,this.positionVector.z-=(this.positionVector.z-i.z)/2,this.sizeVector.z===this.MIN_SIZE?this.sizeVector.setZ(l):this.sizeVector.setX(l),this.positionVector.x<0?this.sizeVector.z*=a:this.sizeVector.x*=a,this.createStaticCollider(di.StaticCollider)}}}class Cv extends Rv{constructor(){super(...arguments),this.characterVelocity=new Map,this.characters=new Map,this.linearVelocity=new U,this.environment=new _r,this.capsule=new U,this.matrix=new it,this.segment=new td,this.box=new Ln,this.paused=!0,this.delta=0}updateCollisions(){const e=Array.from(this.characters.values());for(let t=e.length;t--;){const i=e[t];for(let n=t;n--;){const r=e[n];this.linearVelocity.subVectors(i.position,r.position);const o=this.linearVelocity.length()-(i.userData.radius+r.userData.radius);if(o>0)continue;this.linearVelocity.normalize();const a=this.characterVelocity.get(i.uuid),l=this.characterVelocity.get(r.uuid),c=a.dot(this.linearVelocity),h=l.dot(this.linearVelocity),u=Math.max(c,.2),d=Math.max(h,.2),p=u+d,_=u/p,g=d/p,{y:m}=i.position,{y:f}=r.position;i.position.addScaledVector(this.linearVelocity,-_*o),r.position.addScaledVector(this.linearVelocity,g*o),i.position.y=m,r.position.y=f}}}addPhysicsCollider(){this.environmentCollider?.geometry.dispose(),this.environment.updateMatrixWorld(!0);const e=new Tv(this.environment);e.attributes=["position"];const t=e.generate();t.boundsTree=new wr(t,{lazyGeneration:!1}),ae.dispatch("Level::AddObject",this.environment),this.environmentCollider=new ht(t)}addStaticCollider(e){this.environment.attach(e)}setArenaObstacleEnabled(e,t){t?this.environment.add(e):this.environment.remove(e),this.addPhysicsCollider()}createBounds(e,t){super.createBounds(e,t),this.addPhysicsCollider()}setCharacter(e){this.characterVelocity.set(e.uuid,new U),this.characters.set(e.uuid,e);const{height:t,radius:i}=e.userData;e.geometry.translate(0,-i,0),e.children[0].translateY(-i);const{x:n,z:r}=e.position;e.position.set(n,e.userData.segment.distance()+i+.005,r),this.move(e.uuid,$t.DOWN)}move(e,t){const i=this.characters.get(e),{segment:n,radius:r}=i.userData,o=this.characterVelocity.get(e),a=this.environmentCollider?.matrixWorld,l=this.environmentCollider?.geometry,c=this.delta*5;o.y=Math.max(-12,o.y+c*this.GRAVITY),i.position.addScaledVector(o,c),this.linearVelocity.set(t.x,t.y,t.z),i.position.addScaledVector(this.linearVelocity,this.SPEED*this.delta),i.updateMatrixWorld(),this.box.makeEmpty(),this.matrix.copy(a).invert(),this.segment.copy(n),this.segment.start.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.segment.end.applyMatrix4(i.matrixWorld).applyMatrix4(this.matrix),this.box.expandByPoint(this.segment.start),this.box.expandByPoint(this.segment.end),this.box.min.addScalar(-r),this.box.max.addScalar(r),l.boundsTree.shapecast({intersectsBounds:d=>d.intersectsBox(this.box),intersectsTriangle:d=>{const p=this.capsule,_=this.linearVelocity,g=d.closestPointToSegment(this.segment,_,p);if(g<r){const m=r-g,f=p.sub(_).normalize();this.segment.start.addScaledVector(f,m),this.segment.end.addScaledVector(f,m)}}});const h=this.linearVelocity;h.copy(this.segment.start).applyMatrix4(a);const u=this.capsule;u.subVectors(h,i.position),i.position.copy(h),u.y>1e-5&&o.y<0&&(o.y=0),o.x=o.z=0}stop(e){this.characterVelocity.get(e)?.setScalar(0)}update(e){this.paused||(this.delta=e*.2,this.updateCollisions())}remove(e){this.characterVelocity.delete(e),this.characters.delete(e)}dispose(){const e=this.environmentCollider?.geometry,t=Sv.bind(e);e.dispose(),t(),this.paused=!0,this.characters.clear(),this.environment.clear(),this.characterVelocity.clear(),delete this.environmentCollider}set pause(e){this.paused=e}}const lt=new Cv;lt.constructor.name.includes("Ammo");class ad{constructor(e){this.config=e,this.animations={},this.direction=new U,this.position=new U,this.rotation=new U,this.animationUpdate=!1,this.lastAnimation="",this.hitting=!1,this.running=!1,this.moving=!1,this.dead=!1,this.still=!1,this.health=100;const{x:t,y:i}=this.config.collider;this.object=new ht(new Xs(t,i,t,2,.5),di.DynamicCollider),this.object.userData={segment:new td(new U,$t.DOWN),height:i,radius:.5,mass:this.config.mass},this.step=this.config.moves.Idle,this.uuid=this.object.uuid}updateAnimation(e,t,i){return this.currentAnimation.crossFadeTo(this.animations[t],i,!0),this.animations[t].play(),this.animationUpdate=!0,setTimeout(()=>{this.lastAnimation=t,this.setAnimation(e),this.currentAnimation.stop(),this.animationUpdate=!1,this.currentAnimation=this.animations[t]},i*1e3)}async load(e){const t=await Ze.Loader.loadGLTF(this.config.model);return this.mesh=t.scene,this.setTransform(t),this.setMaterial(e,1),t}playSound(e,t=!1){t&&this.stopSound(e),ae.dispatch("SFX::Character",{uuid:this.uuid,play:!0,sfx:e,matrix:this.object.matrixWorld},!0)}setMaterial(e,t=0){this.mesh.traverse(i=>{const n=i,r=n.material;n.isMesh&&(n.castShadow=!0,n.updateMorphTargets(),n.material=new Vl({envMap:e?.image?e:null,envMapIntensity:.45,transparent:!0,map:r.map,color:r.color,roughness:.65,side:wi,opacity:t}))})}getAnimationDuration(e){return this.animations[e].getClip().duration*1e3}setAnimation(e){this.step=this.config.moves[e]}setAnimations(e){const t=e.animations;this.mixer=new Yx(this.mesh);for(let i=t.length;i--;){const{name:n}=t[i],r=n.charAt(0).toLowerCase()+n.slice(1);this.animations[r]=this.mixer.clipAction(t[i])}this.currentAnimation=this.animations.idle}setTransform(e){this.object.position.copy(this.config.position),this.mesh.position.set(0,this.config.collider.z,0),this.object.scale.copy(this.config.scale),this.rotation.setFromEuler(this.object.rotation),this.position.copy(this.object.position),this.object.add(this.mesh),this.setAnimations(e)}setMixerTimeScale(e){this.mixer&&(this.mixer.timeScale=e)}updateHealth(e){return this.dead?!0:(this.health=Math.max(this.health-e,0),!this.health&&this.die(),this.dead)}stopSound(e){ae.dispatch("SFX::Character",{uuid:this.uuid,play:!1,sfx:e,matrix:this.object.matrixWorld},!0)}setMixerTime(e){this.mixer?.setTime(e)}teleport(e){lt.pause=!0,this.object.position.copy(e),this.mesh.rotateOnWorldAxis($t.UP,Math.PI),lt.teleportCollider?.(this.object.uuid),lt.pause=!1}update(e){this.mixer?.update(e),this.updateDirection(),this.moving?(this.still=!1,lt.move(this.uuid,this.direction)):(lt.move(this.uuid,$t.DOWN),this.still||(this.still=!0,lt.stop(this.uuid)))}updateDirection(){const{speed:e,direction:t}=this.step;this.mesh.getWorldDirection(this.rotation),this.object.getWorldPosition(this.position);const i=this.rotation.x*e,n=this.rotation.z*e,{z0:r,x0:o,x1:a}=t,l=Math.min(o,a);this.direction.set(i*r+i*l+n*a,-1,n*r+n*l+i*o)}dispose(){this.object.userData={},this.object.geometry.dispose(),this.object.material.dispose();for(const e in this.animations)this.animations[e].stopFading(),this.animations[e].stop(),delete this.animations[e];this.model&&(this.object.remove(this.model),this.model.clear(),delete this.model),this.animations={},delete this.mixer,this.reset()}die(){this.playSound("death",!0),this.setAnimation("Idle"),lt.remove(this.uuid),this.hitting=!1,this.running=!1,this.moving=!1,this.still=!1,this.dead=!0}reset(){this.step=this.config.moves.Idle,this.direction.setScalar(0),this.position.setScalar(0),this.rotation.setScalar(0),this.hitting=!1,this.running=!1,this.moving=!1,this.health=100,this.still=!0,this.dead=!1}get blockingAnimation(){return this.dead||this.animationUpdate}set mesh(e){this.model=e}get mesh(){return this.model}get healthValue(){return this.health}get motionState(){return{moving:this.moving,blocking:this.blockingAnimation,animation:this.lastAnimation,step:this.step,direction:this.direction.toArray()}}get life(){return this.health}get collider(){return this.object}get alive(){return!this.dead}}const Lv={maxEnemies:10,rifleSpawn:3,enemy:{immune:!1,lose:!0,walk:500,run:250},damage:{enemy:{strong:10,soft:5},pistol:{head:90,body:25,leg:10},rifle:{head:100,body:50,leg:20}}},Pv={maxEnemies:25,rifleSpawn:5,enemy:{immune:!1,lose:!1,walk:1e3,run:500},damage:{enemy:{strong:25,soft:10},pistol:{head:75,body:10,leg:5},rifle:{head:80,body:20,leg:10}}},Iv={maxEnemies:50,rifleSpawn:8,enemy:{immune:!0,lose:!1,walk:-1,run:1e4},damage:{enemy:{strong:50,soft:25},pistol:{head:50,body:5,leg:1},rifle:{head:75,body:10,leg:5}}},Dv={easy:Lv,normal:Pv,hard:Iv},Uv=[0,1.8,22],Fv=[.65,1.8,-1],Nv=[1,1,1],zv="player.glb",Ov=90,Bv={death:"player/death.mp3",hit:"player/hit.mp3"},kv={Idle:[0,0,0,0],Run:[8.75,1,0,0],Left:[3.5,1,-1,1],Right:[4.5,1,1,-1],Backward:[3,-1,0,0],BackwardLeft:[2,-1,-.5,.5],BackwardRight:[2,-1,.5,-.5],ForwardRight:[4,1,.5,-.5],ForwardLeft:[4,1,-.5,.5],Forward:[5,1,0,0]},vn={position:Uv,collider:Fv,scale:Nv,model:zv,mass:Ov,sounds:Bv,animations:kv},Vv=[0,0,0],Hv=[.02,-.05,.1],Gv=[1,1,1],Wv=.025,Xv=[.001,.001],jv=[0,-.003],qv=12632256,Yv="1911.glb",$v="1911",Kv=.9,Zv=12,Jv=48,Qv={bullet:"weapons/shell.mp3",shoot:"weapons/1911.mp3"},ey={position:[.05,.1,.4],lifeTime:500,speed:253,scale:.4},ty={position:[0,.05],particles:[3,5],intensity:.5,velocity:.25,scale:.035},dt={rotation:Vv,position:Hv,scale:Gv,emissiveIntensity:Wv,spread:Xv,recoil:jv,emissive:qv,model:Yv,textures:$v,headshot:Kv,magazine:Zv,ammo:Jv,sounds:Qv,bullet:ey,fire:ty},iy={idle:[0,1.6,.075],aim:[-.05,1.525,.25]},ny={idle:[-.8,2.1,-6],aim:[-.4,1.6,-1.8],run:[-.9,2.05,-6.7]},Cs={fps:iy,tps:ny},sy="environment/rain.mp3",ry=[0,4,0],oy=.216,ay=[75,75,75],ly="level.glb",cy="cloud.png",hy=.01,uy="fog.png",dy="sky",fy=8,py=220,my=[-.025,.225,-.275,-.025],gy=["environment/lightning0.mp3","environment/lightning1.mp3","environment/lightning2.mp3","environment/lightning3.mp3","environment/lightning4.mp3"],_y=["rain/drop0.png","rain/drop1.png","rain/drop2.png","rain/drop3.png","rain/drop4.png"],xy=[],vy=[[-45,-45],[45,-45],[45,45],[-45,45]],yy=[],It={ambient:sy,position:ry,sidewalkHeight:oy,scale:ay,model:ly,cloud:cy,fogDensity:hy,fog:uy,skybox:dy,height:fy,depth:py,portalsOffset:my,lighting:gy,rain:_y,portals:xy,bounds:vy,sidewalk:yy},My=[.65,1.8,-.9],Sy=[0,1.8,0],by=[1,1,1],wy="enemy.glb",Ey=75,Ay={hardAttack:"enemy/hardAttack.mp3",softAttack:"enemy/softAttack.mp3",scream:"enemy/scream.mp3",death:"enemy/death.mp3",hit:"enemy/hit.mp3"},Ty={Idle:[0,0,0,0],Walking:[.5,1,0,0],Running:[3.5,1,0,0],Falling:[.75,1,0,0],Crawling:[.5,1,0,0]},yn={collider:My,position:Sy,scale:by,model:wy,mass:Ey,sounds:Ay,animations:Ty},Ry=[0,0,0],Cy=[0,.15,-.2],Ly=[1,1,1],Py=[0,0,0],Iy=[.02,-.05,.1],Dy=[1,1,1],Uy=[.0025,.0025],Fy=[0,-.003],Ny="AK47.glb",zy="AK47",Oy=.8,By=150,ky=30,Vy=0,Hy={reload:"weapons/reload.mp3",bullet:"weapons/case.mp3",empty:"weapons/empty.mp3",shoot:"weapons/AK47.mp3",pick:"weapons/pick.mp3"},Gy={position:[.05,.1,.4],lifeTime:200,speed:670,scale:.6},Wy={position:[0,.05],particles:[5,8],intensity:.5,velocity:11.2,scale:.035},at={rotation:Ry,spinePosition:Cy,worldScale:Ly,spineRotation:Py,position:Iy,scale:Dy,spread:Uy,recoil:Fy,model:Ny,textures:zy,headshot:Oy,maxStock:By,magazine:ky,ammo:Vy,sounds:Hy,bullet:Gy,fire:Wy},Ji=s=>{Object.freeze(s);const e=Object.getOwnPropertyNames(s);for(const t in e){const i=s[e[t]];i&&(typeof i=="object"||typeof i=="function")&&!Object.isFrozen(i)&&Ji(i)}return s};var vl;(s=>{const e=()=>s.offscreen?`${window.location.pathname.slice(0,window.location.pathname.lastIndexOf("/"))}/assets`:"/assets",t=o=>Object.assign({},...Object.keys(o).map(a=>({[a]:{speed:o[a][0],direction:{z0:o[a][1],x0:o[a][2],x1:o[a][3]}}}))),i=vn.animations,n=yn.animations;s.APP=navigator.userAgent.toLowerCase().includes("electron");const r=o=>o<0?1/0:o;s.offscreen=!1,s.worker=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,s.basePath=(o=!1)=>s.APP?s.offscreen||!s.worker?o?"./":"./assets":"./":o?"":e(),s.RandomCoords=Ji({playerDistance:5,boundOffset:.5,ammount:50}),s.Gameplay=Ji(Dv.normal),s.Level=Ji({position:new U(...It.position),sidewalkHeight:It.sidewalkHeight,portalsOffset:It.portalsOffset,scale:new U(...It.scale),fogDensity:It.fogDensity,lighting:It.lighting,sidewalk:It.sidewalk,ambient:It.ambient,portals:It.portals,skybox:It.skybox,bounds:It.bounds,height:It.height,depth:It.depth,model:It.model,cloud:It.cloud,rain:It.rain,fog:It.fog}),s.Camera=Ji({fps:{idle:new U(...Cs.fps.idle),run:new U(...Cs.fps.idle),aim:new U(...Cs.fps.aim)},tps:{idle:new U(...Cs.tps.idle),run:new U(...Cs.tps.run),aim:new U(...Cs.tps.aim)}}),s.Player=Ji({position:new U(...vn.position),collider:new U(...vn.collider),scale:new U(...vn.scale),moves:t(i),animations:vn.animations,sounds:vn.sounds,model:vn.model,mass:vn.mass}),s.Enemy=Ji({position:new U(...yn.position),collider:new U(...yn.collider),scale:new U(...yn.scale),moves:t(n),animations:yn.animations,sounds:yn.sounds,model:yn.model,mass:yn.mass}),s.Pistol=Ji({emissiveIntensity:dt.emissiveIntensity,position:new U(...dt.position),rotation:new Bi(...dt.rotation),spread:new De(...dt.spread),recoil:new De(...dt.recoil),scale:new U(...dt.scale),magazine:r(dt.magazine),ammo:r(dt.ammo),headshot:dt.headshot,textures:dt.textures,emissive:dt.emissive,sounds:dt.sounds,model:dt.model,bullet:{position:new U(...dt.bullet.position),lifeTime:dt.bullet.lifeTime,speed:dt.bullet.speed,scale:dt.bullet.scale},fire:{position:new De(...dt.fire.position),particles:dt.fire.particles,intensity:dt.fire.intensity,velocity:dt.fire.velocity,scale:dt.fire.scale}}),s.Rifle=Ji({spinePosition:new U(...at.spinePosition),spineRotation:new Bi(...at.spineRotation),worldScale:new U(...at.worldScale),position:new U(...at.position),rotation:new Bi(...at.rotation),spread:new De(...at.spread),recoil:new De(...at.recoil),scale:new U(...at.scale),magazine:r(at.magazine),ammo:r(at.ammo),headshot:at.headshot,textures:at.textures,maxStock:at.maxStock,sounds:at.sounds,model:at.model,bullet:{position:new U(...at.bullet.position),lifeTime:at.bullet.lifeTime,speed:at.bullet.speed,scale:at.bullet.scale},fire:{position:new De(...at.fire.position),particles:at.fire.particles,intensity:at.fire.intensity,velocity:at.fire.velocity,scale:at.fire.scale}})})(vl||(vl={}));const Le=vl;var ld={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Xl={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Xy=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Bo={CSS:{},springs:{}};function zi(s,e,t){return Math.min(Math.max(s,e),t)}function Er(s,e){return s.indexOf(e)>-1}function Ka(s,e){return s.apply(null,e)}var Se={arr:function(s){return Array.isArray(s)},obj:function(s){return Er(Object.prototype.toString.call(s),"Object")},pth:function(s){return Se.obj(s)&&s.hasOwnProperty("totalLength")},svg:function(s){return s instanceof SVGElement},inp:function(s){return s instanceof HTMLInputElement},dom:function(s){return s.nodeType||Se.svg(s)},str:function(s){return typeof s=="string"},fnc:function(s){return typeof s=="function"},und:function(s){return typeof s>"u"},nil:function(s){return Se.und(s)||s===null},hex:function(s){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(s)},rgb:function(s){return/^rgb/.test(s)},hsl:function(s){return/^hsl/.test(s)},col:function(s){return Se.hex(s)||Se.rgb(s)||Se.hsl(s)},key:function(s){return!ld.hasOwnProperty(s)&&!Xl.hasOwnProperty(s)&&s!=="targets"&&s!=="keyframes"}};function cd(s){var e=/\(([^)]+)\)/.exec(s);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function hd(s,e){var t=cd(s),i=zi(Se.und(t[0])?1:t[0],.1,100),n=zi(Se.und(t[1])?100:t[1],.1,100),r=zi(Se.und(t[2])?10:t[2],.1,100),o=zi(Se.und(t[3])?0:t[3],.1,100),a=Math.sqrt(n/i),l=r/(2*Math.sqrt(n*i)),c=l<1?a*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*a+-o)/c:-o+a;function d(_){var g=e?e*_/1e3:_;return l<1?g=Math.exp(-g*l*a)*(h*Math.cos(c*g)+u*Math.sin(c*g)):g=(h+u*g)*Math.exp(-g*a),_===0||_===1?_:1-g}function p(){var _=Bo.springs[s];if(_)return _;for(var g=1/6,m=0,f=0;;)if(m+=g,d(m)===1){if(f++,f>=16)break}else f=0;var M=m*g*1e3;return Bo.springs[s]=M,M}return e?d:p}function jy(s){return s===void 0&&(s=10),function(e){return Math.ceil(zi(e,1e-6,1)*s)*(1/s)}}var qy=function(){var s=11,e=1/(s-1);function t(h,u){return 1-3*u+3*h}function i(h,u){return 3*u-6*h}function n(h){return 3*h}function r(h,u,d){return((t(u,d)*h+i(u,d))*h+n(u))*h}function o(h,u,d){return 3*t(u,d)*h*h+2*i(u,d)*h+n(u)}function a(h,u,d,p,_){var g,m,f=0;do m=u+(d-u)/2,g=r(m,p,_)-h,g>0?d=m:u=m;while(Math.abs(g)>1e-7&&++f<10);return m}function l(h,u,d,p){for(var _=0;_<4;++_){var g=o(u,d,p);if(g===0)return u;var m=r(u,d,p)-h;u-=m/g}return u}function c(h,u,d,p){if(!(0<=h&&h<=1&&0<=d&&d<=1))return;var _=new Float32Array(s);if(h!==u||d!==p)for(var g=0;g<s;++g)_[g]=r(g*e,h,d);function m(f){for(var M=0,x=1,T=s-1;x!==T&&_[x]<=f;++x)M+=e;--x;var S=(f-_[x])/(_[x+1]-_[x]),b=M+S*e,v=o(b,h,d);return v>=.001?l(f,b,h,d):v===0?b:a(f,M,M+e,h,d)}return function(f){return h===u&&d===p||f===0||f===1?f:r(m(f),u,p)}}return c}(),ud=function(){var s={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var n,r=4;i<((n=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((n*3-2)/22-i,2)}},Elastic:function(i,n){i===void 0&&(i=1),n===void 0&&(n=.5);var r=zi(i,1,10),o=zi(n,.1,2);return function(a){return a===0||a===1?a:-r*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(i,n){e[i]=function(){return function(r){return Math.pow(r,n+2)}}}),Object.keys(e).forEach(function(i){var n=e[i];s["easeIn"+i]=n,s["easeOut"+i]=function(r,o){return function(a){return 1-n(r,o)(1-a)}},s["easeInOut"+i]=function(r,o){return function(a){return a<.5?n(r,o)(a*2)/2:1-n(r,o)(a*-2+2)/2}},s["easeOutIn"+i]=function(r,o){return function(a){return a<.5?(1-n(r,o)(1-a*2))/2:(n(r,o)(a*2-1)+1)/2}}}),s}();function jl(s,e){if(Se.fnc(s))return s;var t=s.split("(")[0],i=ud[t],n=cd(s);switch(t){case"spring":return hd(s,e);case"cubicBezier":return Ka(qy,n);case"steps":return Ka(jy,n);default:return Ka(i,n)}}function dd(s){try{var e=document.querySelectorAll(s);return e}catch{return}}function Zo(s,e){for(var t=s.length,i=arguments.length>=2?arguments[1]:void 0,n=[],r=0;r<t;r++)if(r in s){var o=s[r];e.call(i,o,r,s)&&n.push(o)}return n}function Jo(s){return s.reduce(function(e,t){return e.concat(Se.arr(t)?Jo(t):t)},[])}function Qh(s){return Se.arr(s)?s:(Se.str(s)&&(s=dd(s)||s),s instanceof NodeList||s instanceof HTMLCollection?[].slice.call(s):[s])}function ql(s,e){return s.some(function(t){return t===e})}function Yl(s){var e={};for(var t in s)e[t]=s[t];return e}function yl(s,e){var t=Yl(s);for(var i in s)t[i]=e.hasOwnProperty(i)?e[i]:s[i];return t}function Qo(s,e){var t=Yl(s);for(var i in e)t[i]=Se.und(s[i])?e[i]:s[i];return t}function Yy(s){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(s);return e?"rgba("+e[1]+",1)":s}function $y(s){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=s.replace(e,function(a,l,c,h){return l+l+c+c+h+h}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16);return"rgba("+n+","+r+","+o+",1)"}function Ky(s){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(s)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(s),t=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,n=parseInt(e[3],10)/100,r=e[4]||1;function o(d,p,_){return _<0&&(_+=1),_>1&&(_-=1),_<1/6?d+(p-d)*6*_:_<1/2?p:_<2/3?d+(p-d)*(2/3-_)*6:d}var a,l,c;if(i==0)a=l=c=n;else{var h=n<.5?n*(1+i):n+i-n*i,u=2*n-h;a=o(u,h,t+1/3),l=o(u,h,t),c=o(u,h,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+r+")"}function Zy(s){if(Se.rgb(s))return Yy(s);if(Se.hex(s))return $y(s);if(Se.hsl(s))return Ky(s)}function rn(s){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(s);if(e)return e[1]}function Jy(s){if(Er(s,"translate")||s==="perspective")return"px";if(Er(s,"rotate")||Er(s,"skew"))return"deg"}function Ml(s,e){return Se.fnc(s)?s(e.target,e.id,e.total):s}function Oi(s,e){return s.getAttribute(e)}function $l(s,e,t){var i=rn(e);if(ql([t,"deg","rad","turn"],i))return e;var n=Bo.CSS[e+t];if(!Se.und(n))return n;var r=100,o=document.createElement(s.tagName),a=s.parentNode&&s.parentNode!==document?s.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=r+t;var l=r/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return Bo.CSS[e+t]=c,c}function fd(s,e,t){if(e in s.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=s.style[e]||getComputedStyle(s).getPropertyValue(i)||"0";return t?$l(s,n,t):n}}function Kl(s,e){if(Se.dom(s)&&!Se.inp(s)&&(!Se.nil(Oi(s,e))||Se.svg(s)&&s[e]))return"attribute";if(Se.dom(s)&&ql(Xy,e))return"transform";if(Se.dom(s)&&e!=="transform"&&fd(s,e))return"css";if(s[e]!=null)return"object"}function pd(s){if(Se.dom(s)){for(var e=s.style.transform||"",t=/(\w+)\(([^)]*)\)/g,i=new Map,n;n=t.exec(e);)i.set(n[1],n[2]);return i}}function Qy(s,e,t,i){var n=Er(e,"scale")?1:0+Jy(e),r=pd(s).get(e)||n;return t&&(t.transforms.list.set(e,r),t.transforms.last=e),i?$l(s,r,i):r}function Zl(s,e,t,i){switch(Kl(s,e)){case"transform":return Qy(s,e,i,t);case"css":return fd(s,e,t);case"attribute":return Oi(s,e);default:return s[e]||0}}function Jl(s,e){var t=/^(\*=|\+=|-=)/.exec(s);if(!t)return s;var i=rn(s)||0,n=parseFloat(e),r=parseFloat(s.replace(t[0],""));switch(t[0][0]){case"+":return n+r+i;case"-":return n-r+i;case"*":return n*r+i}}function md(s,e){if(Se.col(s))return Zy(s);if(/\s/g.test(s))return s;var t=rn(s),i=t?s.substr(0,s.length-t.length):s;return e?i+e:i}function Ql(s,e){return Math.sqrt(Math.pow(e.x-s.x,2)+Math.pow(e.y-s.y,2))}function eM(s){return Math.PI*2*Oi(s,"r")}function tM(s){return Oi(s,"width")*2+Oi(s,"height")*2}function iM(s){return Ql({x:Oi(s,"x1"),y:Oi(s,"y1")},{x:Oi(s,"x2"),y:Oi(s,"y2")})}function gd(s){for(var e=s.points,t=0,i,n=0;n<e.numberOfItems;n++){var r=e.getItem(n);n>0&&(t+=Ql(i,r)),i=r}return t}function nM(s){var e=s.points;return gd(s)+Ql(e.getItem(e.numberOfItems-1),e.getItem(0))}function _d(s){if(s.getTotalLength)return s.getTotalLength();switch(s.tagName.toLowerCase()){case"circle":return eM(s);case"rect":return tM(s);case"line":return iM(s);case"polyline":return gd(s);case"polygon":return nM(s)}}function sM(s){var e=_d(s);return s.setAttribute("stroke-dasharray",e),e}function rM(s){for(var e=s.parentNode;Se.svg(e)&&Se.svg(e.parentNode);)e=e.parentNode;return e}function xd(s,e){var t=e||{},i=t.el||rM(s),n=i.getBoundingClientRect(),r=Oi(i,"viewBox"),o=n.width,a=n.height,l=t.viewBox||(r?r.split(" "):[0,0,o,a]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function oM(s,e){var t=Se.str(s)?dd(s)[0]:s,i=e||100;return function(n){return{property:n,el:t,svg:xd(t),totalLength:_d(t)*(i/100)}}}function aM(s,e,t){function i(h){h===void 0&&(h=0);var u=e+h>=1?e+h:0;return s.el.getPointAtLength(u)}var n=xd(s.el,s.svg),r=i(),o=i(-1),a=i(1),l=t?1:n.w/n.vW,c=t?1:n.h/n.vH;switch(s.property){case"x":return(r.x-n.x)*l;case"y":return(r.y-n.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function eu(s,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=md(Se.pth(s)?s.totalLength:s,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:Se.str(s)||e?i.split(t):[]}}function ec(s){var e=s?Jo(Se.arr(s)?s.map(Qh):Qh(s)):[];return Zo(e,function(t,i,n){return n.indexOf(t)===i})}function vd(s){var e=ec(s);return e.map(function(t,i){return{target:t,id:i,total:e.length,transforms:{list:pd(t)}}})}function lM(s,e){var t=Yl(e);if(/^spring/.test(t.easing)&&(t.duration=hd(t.easing)),Se.arr(s)){var i=s.length,n=i===2&&!Se.obj(s[0]);n?s={value:s}:Se.fnc(e.duration)||(t.duration=e.duration/i)}var r=Se.arr(s)?s:[s];return r.map(function(o,a){var l=Se.obj(o)&&!Se.pth(o)?o:{value:o};return Se.und(l.delay)&&(l.delay=a?0:e.delay),Se.und(l.endDelay)&&(l.endDelay=a===r.length-1?e.endDelay:0),l}).map(function(o){return Qo(o,t)})}function cM(s){for(var e=Zo(Jo(s.map(function(r){return Object.keys(r)})),function(r){return Se.key(r)}).reduce(function(r,o){return r.indexOf(o)<0&&r.push(o),r},[]),t={},i=function(r){var o=e[r];t[o]=s.map(function(a){var l={};for(var c in a)Se.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},n=0;n<e.length;n++)i(n);return t}function hM(s,e){var t=[],i=e.keyframes;i&&(e=Qo(cM(i),e));for(var n in e)Se.key(n)&&t.push({name:n,tweens:lM(e[n],s)});return t}function uM(s,e){var t={};for(var i in s){var n=Ml(s[i],e);Se.arr(n)&&(n=n.map(function(r){return Ml(r,e)}),n.length===1&&(n=n[0])),t[i]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function dM(s,e){var t;return s.tweens.map(function(i){var n=uM(i,e),r=n.value,o=Se.arr(r)?r[1]:r,a=rn(o),l=Zl(e.target,s.name,a,e),c=t?t.to.original:l,h=Se.arr(r)?r[0]:c,u=rn(h)||rn(l),d=a||u;return Se.und(o)&&(o=c),n.from=eu(h,d),n.to=eu(Jl(o,h),d),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=jl(n.easing,n.duration),n.isPath=Se.pth(r),n.isPathTargetInsideSVG=n.isPath&&Se.svg(e.target),n.isColor=Se.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var yd={css:function(s,e,t){return s.style[e]=t},attribute:function(s,e,t){return s.setAttribute(e,t)},object:function(s,e,t){return s[e]=t},transform:function(s,e,t,i,n){if(i.list.set(e,t),e===i.last||n){var r="";i.list.forEach(function(o,a){r+=a+"("+o+") "}),s.style.transform=r}}};function Md(s,e){var t=vd(s);t.forEach(function(i){for(var n in e){var r=Ml(e[n],i),o=i.target,a=rn(r),l=Zl(o,n,a,i),c=a||rn(l),h=Jl(md(r,c),l),u=Kl(o,n);yd[u](o,n,h,i.transforms,!0)}})}function fM(s,e){var t=Kl(s.target,e.name);if(t){var i=dM(e,s),n=i[i.length-1];return{type:t,property:e.name,animatable:s,tweens:i,duration:n.end,delay:i[0].delay,endDelay:n.endDelay}}}function pM(s,e){return Zo(Jo(s.map(function(t){return e.map(function(i){return fM(t,i)})})),function(t){return!Se.und(t)})}function Sd(s,e){var t=s.length,i=function(r){return r.timelineOffset?r.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,s.map(function(r){return i(r)+r.duration})):e.duration,n.delay=t?Math.min.apply(Math,s.map(function(r){return i(r)+r.delay})):e.delay,n.endDelay=t?n.duration-Math.max.apply(Math,s.map(function(r){return i(r)+r.duration-r.endDelay})):e.endDelay,n}var tu=0;function mM(s){var e=yl(ld,s),t=yl(Xl,s),i=hM(t,s),n=vd(s.targets),r=pM(n,i),o=Sd(r,t),a=tu;return tu++,Qo(e,{id:a,children:[],animatables:n,animations:r,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var bi=[],bd=function(){var s;function e(){!s&&(!iu()||!Ce.suspendWhenDocumentHidden)&&bi.length>0&&(s=requestAnimationFrame(t))}function t(n){for(var r=bi.length,o=0;o<r;){var a=bi[o];a.paused?(bi.splice(o,1),r--):(a.tick(n),o++)}s=o>0?requestAnimationFrame(t):void 0}function i(){Ce.suspendWhenDocumentHidden&&(iu()?s=cancelAnimationFrame(s):(bi.forEach(function(n){return n._onDocumentVisibility()}),bd()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function iu(){return!!document&&document.hidden}function Ce(s){s===void 0&&(s={});var e=0,t=0,i=0,n,r=0,o=null;function a(M){var x=window.Promise&&new Promise(function(T){return o=T});return M.finished=x,x}var l=mM(s);a(l);function c(){var M=l.direction;M!=="alternate"&&(l.direction=M!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,n.forEach(function(x){return x.reversed=l.reversed})}function h(M){return l.reversed?l.duration-M:M}function u(){e=0,t=h(l.currentTime)*(1/Ce.speed)}function d(M,x){x&&x.seek(M-x.timelineOffset)}function p(M){if(l.reversePlayback)for(var T=r;T--;)d(M,n[T]);else for(var x=0;x<r;x++)d(M,n[x])}function _(M){for(var x=0,T=l.animations,S=T.length;x<S;){var b=T[x],v=b.animatable,w=b.tweens,y=w.length-1,E=w[y];y&&(E=Zo(w,function(B){return M<B.end})[0]||E);for(var R=zi(M-E.start-E.delay,0,E.duration)/E.duration,I=isNaN(R)?1:E.easing(R),P=E.to.strings,F=E.round,z=[],W=E.to.numbers.length,V=void 0,j=0;j<W;j++){var Y=void 0,ne=E.to.numbers[j],me=E.from.numbers[j]||0;E.isPath?Y=aM(E.value,I*ne,E.isPathTargetInsideSVG):Y=me+I*(ne-me),F&&(E.isColor&&j>2||(Y=Math.round(Y*F)/F)),z.push(Y)}var he=P.length;if(!he)V=z[0];else{V=P[0];for(var q=0;q<he;q++){P[q];var ee=P[q+1],le=z[q];isNaN(le)||(ee?V+=le+ee:V+=le+" ")}}yd[b.type](v.target,b.property,V,v.transforms),b.currentValue=V,x++}}function g(M){l[M]&&!l.passThrough&&l[M](l)}function m(){l.remaining&&l.remaining!==!0&&l.remaining--}function f(M){var x=l.duration,T=l.delay,S=x-l.endDelay,b=h(M);l.progress=zi(b/x*100,0,100),l.reversePlayback=b<l.currentTime,n&&p(b),!l.began&&l.currentTime>0&&(l.began=!0,g("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,g("loopBegin")),b<=T&&l.currentTime!==0&&_(0),(b>=S&&l.currentTime!==x||!x)&&_(x),b>T&&b<S?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,g("changeBegin")),g("change"),_(b)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,g("changeComplete")),l.currentTime=zi(b,0,x),l.began&&g("update"),M>=x&&(t=0,m(),l.remaining?(e=i,g("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,g("loopComplete"),g("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var M=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=M==="reverse",l.remaining=l.loop,n=l.children,r=n.length;for(var x=r;x--;)l.children[x].reset();(l.reversed&&l.loop!==!0||M==="alternate"&&l.loop===1)&&l.remaining++,_(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(M,x){return Md(M,x),l},l.tick=function(M){i=M,e||(e=i),f((i+(t-e))*Ce.speed)},l.seek=function(M){f(h(M))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,bi.push(l),u(),bd())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(M){var x=ec(M);wd(x,l)},l.reset(),l.autoplay&&l.play(),l}function nu(s,e){for(var t=e.length;t--;)ql(s,e[t].animatable.target)&&e.splice(t,1)}function wd(s,e){var t=e.animations,i=e.children;nu(s,t);for(var n=i.length;n--;){var r=i[n],o=r.animations;nu(s,o),!o.length&&!r.children.length&&i.splice(n,1)}!t.length&&!i.length&&e.pause()}function gM(s){for(var e=ec(s),t=bi.length;t--;){var i=bi[t];wd(e,i)}}function _M(s,e){e===void 0&&(e={});var t=e.direction||"normal",i=e.easing?jl(e.easing):null,n=e.grid,r=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",h=Se.arr(s),u=parseFloat(h?s[0]:s),d=h?parseFloat(s[1]):0,p=rn(h?s[1]:s)||0,_=e.start||0+(h?u:0),g=[],m=0;return function(f,M,x){if(a&&(o=0),l&&(o=(x-1)/2),c&&(o=x-1),!g.length){for(var T=0;T<x;T++){if(!n)g.push(Math.abs(o-T));else{var S=l?(n[0]-1)/2:o%n[0],b=l?(n[1]-1)/2:Math.floor(o/n[0]),v=T%n[0],w=Math.floor(T/n[0]),y=S-v,E=b-w,R=Math.sqrt(y*y+E*E);r==="x"&&(R=-y),r==="y"&&(R=-E),g.push(R)}m=Math.max.apply(Math,g)}i&&(g=g.map(function(P){return i(P/m)*m})),t==="reverse"&&(g=g.map(function(P){return r?P<0?P*-1:-P:Math.abs(m-P)}))}var I=h?(d-u)/m:u;return _+I*(Math.round(g[M]*100)/100)+p}}function xM(s){s===void 0&&(s={});var e=Ce(s);return e.duration=0,e.add=function(t,i){var n=bi.indexOf(e),r=e.children;n>-1&&bi.splice(n,1);function o(d){d.passThrough=!0}for(var a=0;a<r.length;a++)o(r[a]);var l=Qo(t,yl(Xl,s));l.targets=l.targets||s.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Se.und(i)?c:Jl(i,c),o(e),e.seek(l.timelineOffset);var h=Ce(l);o(h),r.push(h);var u=Sd(r,s);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Ce.version="3.2.1";Ce.speed=1;Ce.suspendWhenDocumentHidden=!0;Ce.running=bi;Ce.remove=gM;Ce.get=Zl;Ce.set=Md;Ce.convertPx=$l;Ce.path=oM;Ce.setDashoffset=sM;Ce.stagger=_M;Ce.timeline=xM;Ce.easing=jl;Ce.penner=ud;Ce.random=function(s,e){return Math.floor(Math.random()*(e-s+1))+s};class su extends ad{constructor(e,t,i=0){if(super(Le.Enemy),this.id=i,this.walkDistance=Le.Gameplay.enemy.walk,this.runDistance=Le.Gameplay.enemy.run,this.lose=Le.Gameplay.enemy.lose,this.animationUpdate=!0,this.lastAnimation="idle",this.hitBoxes=[],this.attackDistance=2.5,this.previousAnimation="idle",this.distance=1/0,this.playerDead=!1,this.attacking=!1,this.screaming=!1,this.screamed=!1,this.crawling=!1,this.falling=!1,this.visible=!1,this.crawlTime=0,this.fallTime=0,this.hitTime=0,this.walkDistance=this.walkDistance<0?1/0:this.walkDistance,this.runDistance=this.runDistance<0?1/0:this.runDistance,e&&t){this.character=yu(e.scene),ae.dispatch("Level::AddObject",this.object),ae.dispatch("Enemy::Spawn",this.uuid,!0);const n=+!this.id;this.mesh=this.character,this.setMaterial(t,n),this.setTransform(e),this.setDefaultState(),this.toggleVisibility(!0)}}updateAnimation(e,t,i=.5){return super.updateAnimation(e,t,i)}toggleVisibility(e,t){if(!this.hitBoxes.length)return;const i=1e3+ +!e*1500,n=e?"easeInQuad":"easeOutQuad",r=t&&this.getAnimationDuration(t)+500||0;if(e)this.visible=!0;else{this.character.visible=!1,this.cancelHit(),this.removeHitBoxes(),clearTimeout(this.crawlTimeout);const o=r+i,a=t==="crawlDeath";setTimeout(this.dispose.bind(this),o);const l=Date.now()-this.crawlTime<3e3;a&&l&&this.animations.crawling.stop(),this.animations.idle.stopFading(),this.animations.walk.stopFading(),this.animations.run.stopFading(),this.animations.idle.stop(),this.animations.walk.stop(),this.animations.run.stop()}setTimeout(()=>{ae.dispatch("Enemy::Active",e),this.animationUpdate=!1},+e*i),Ce({changeBegin:this.disableShadow.bind(this),targets:this.material,opacity:+e,duration:i,easing:n,delay:r})}async loadCharacter(e){return this.load(e)}fallDeadAnimation(e){const t=Date.now()-this.fallTime<1500;this.falling&&t&&this.updateAnimation("Idle",e),this.toggleVisibility(!1,e)}headHit(e,t){if(!this.dead){if(this.stopSounds(),this.cancelAnimation(),this.hitting&&this.cancelHit(),!t&&this.life>e)return this.bodyHit(e);this.updateHitDamage(e)?this.falling&&this.fallDeadAnimation("headshot"):(this.toggleVisibility(!1,"headshot"),this.updateAnimation("Idle","headshot")),this.hitTime=Date.now(),this.running=!1}}bodyHit(e){if(this.dead)return;if(this.playHitSound(),this.cancelAnimation(),this.updateHitDamage(e)){this.dead&&this.fallDeadAnimation("death");return}if(this.dead){this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}else if(!this.hitting)this.previousAnimation=this.lastAnimation;else{this.cancelHit(),this.animations.idle.play(),this.currentAnimation=this.animations.idle;const i=this.previousAnimation==="run",n=this.lastAnimation==="run";if(this.running&&i&&n){if(this.updateHitDamage(this.life))return this.fallDeadAnimation("death");this.toggleVisibility(!1,"death"),this.updateAnimation("Idle","death");return}}this.previousAnimation!=="hit"&&(this.animations.hit.time=this.hitStart,this.updateAnimation("Idle","hit",.1)),this.hitTimeout=setTimeout(()=>{if(this.dead||this.attacking)return;const i=this.previousAnimation==="hit",n=this.previousAnimation==="scream",r=this.previousAnimation.includes("Attack"),o=i||n||r;o||(this.animTimeout=this.updateAnimation(t,this.previousAnimation,.1)),this.hitTimeout=setTimeout(()=>{if(this.dead)return;this.hitting=!1;const a=this.distance<this.runDistance&&!this.running;this.distance<this.attackDistance?this.attack():a&&this.run()},+!o*100)},this.hitDuration-100);const t=this.animation;this.hitTime=Date.now(),this.hitting=!0}legHit(e){if(this.dead)return;this.playHitSound(),this.cancelAnimation();const t=Date.now(),i=t-this.hitTime,n=this.updateHitDamage(e);if(i<825&&i>600)return setTimeout(this.legHit.bind(this,e),825-i);if(this.hitting&&this.cancelHit(),n){this.dead&&this.falling&&this.toggleVisibility(!1,"crawlDeath");return}this.crawlTimeout=setTimeout(this.crawl.bind(this),2500),this.updateAnimation("Falling","falling",.1),this.hitTime=this.fallTime=t,this.running=!1,this.falling=!0,this.hitting=!0,this.moving=!1}crawl(e=3){this.dead||(this.crawlTime=Date.now(),this.crawlTimeout=this.updateAnimation("Crawling","crawling",e),this.crawling||(this.crawlAnimation=Ce({z:this.rotation.z*(e*-.1),targets:this.character.position,duration:e*1e3,easing:"linear"})),this.attacking=!1,this.crawling=!0,this.falling=!1,this.hitting=!1,this.moving=!0)}cancelAnimation(){this.attacking&&(this.animations.softAttack.stopFading(),this.animations.hardAttack.stopFading(),this.animations.softAttack.stop(),this.animations.hardAttack.stop(),clearTimeout(this.hittingTimeout),clearTimeout(this.attackTimeout),clearTimeout(this.animTimeout),this.attacking=!1),this.screaming&&(this.animations.scream.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.runTimeout),this.animations.scream.stop(),this.screaming=!1)}playHitSound(){this.stopSounds(),!this.falling&&this.playSound("hit")}stopSounds(){this.screaming?this.stopSound("scream"):this.attacking&&(this.stopSound("hardAttack"),this.stopSound("softAttack"))}cancelHit(){this.animations.hit.stopFading(),clearTimeout(this.animTimeout),clearTimeout(this.hitTimeout),this.animations.hit.stop()}idle(){if(this.dead)return;const e=+!this.attacking*.4+.1;this.updateAnimation("Idle","idle",e),this.attacking=!1,this.hitting=!1,this.running=!1,this.moving=!1}walk(){this.dead||(this.updateAnimation("Walking","walk"),this.hitting=!1,this.running=!1,this.moving=!0)}scream(){this.dead||(this.cancelHit(),this.moving=!1,this.hitting=!1,this.screamed=!0,this.screaming=!0,this.attacking=!1,this.runTimeout=setTimeout(()=>{this.playSound("scream"),this.runTimeout=setTimeout(()=>this.distance<this.attackDistance?this.attack():this.run(),this.screamDuration-250)},this.screamStart*1e3),this.animTimeout=this.updateAnimation("Idle","scream",this.screamStart))}run(){if(this.dead||this.playerDead)return;const e=+(this.attacking||this.screaming)*.1;this.updateAnimation("Running","run",e+.1),this.attacking=!1,this.screaming=!1,this.hitting=!1,this.running=!0,this.moving=!0}attack(){if(this.dead)return;const e=this.life>50&&Math.random()<.5;let t="crawlAttack",i=.5,n=2200,r=250;this.crawling||(t=e?"hardAttack":"softAttack",r=e?1300:1e3,n=e?3e3:2500,setTimeout(this.playSound.bind(this,t,!0),+!e*350+400),i=.166),this.updateAnimation("Idle",t,i),this.hittingTimeout=setTimeout(()=>{const{strong:o,soft:a}=Le.Gameplay.damage.enemy;this.canAttack&&ae.dispatch("Enemy::Attack",{position:this.position,damage:e?o:a})},r),this.attackTimeout=setTimeout(()=>{if(this.dead||this.crawling&&this.playerDead)return;const o=this.distance<(this.crawling?1.5:this.attackDistance);this.crawling?this.crawl(+o+1):o?this.idle():this.run()},i*1e3+n),this.screaming=!1,this.attacking=!0,this.screamed=!0,this.hitting=!1,this.running=!1,this.moving=!1}update(e,t){const i=t;return this.visible?(super.update(e),this.dead?this.position:(this.distance=this.object.position.distanceToSquared(i),this.character.lookAt(i.x,0,i.z),this.toggleAnimation(),this.position)):this.position}updateHitDamage(e){const t=this.falling||this.crawling,i=this.updateHealth(e);if(t){if(i&&this.crawling){let n;this.crawlAnimation?.completed||(this.character.position.z=this.rotation.z,this.crawlAnimation?.pause(),this.animations.falling.setEffectiveTimeScale(1).setEffectiveWeight(1).stopWarping().stopFading(),n=0),this.toggleVisibility(!1,"crawlDeath"),this.updateAnimation("Idle","crawlDeath",n)}}else return!1;return!0}toggleAnimation(){if(this.blockingAnimation)return;if(this.canAttack)return this.attack();if(this.crawling||!this.lose&&this.running)return;const e=this.distance>this.walkDistance,t=this.distance<this.runDistance,i=!e&&!t,n=!this.screamed&&t;this.lose&&this.moving&&e?this.idle():!this.moving&&i?this.walk():!(this.lose&&this.running)&&n&&this.scream()}dispose(){super.dispose(),this.removeHitBoxes(),this.character?.clear(),ae.dispatch("Enemy::Death",this.id),ae.dispatch("Enemy::Dispose",this.uuid,!0),ae.dispatch("Level::RemoveObject",this.object)}setDefaultState(){const e=this.getAnimationDuration("scream");this.screamDuration=e-333.3332538604736|0,this.screamStart=(e-this.screamDuration)/1e3;const t=this.getAnimationDuration("hit");this.hitDuration=t-233.3333015441895|0,this.hitStart=(t-this.hitDuration)/1e3,this.animations.softAttack.clampWhenFinished=!0,this.animations.hardAttack.clampWhenFinished=!0,this.animations.crawlDeath.clampWhenFinished=!0,this.animations.headshot.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.falling.clampWhenFinished=!0,this.animations.scream.clampWhenFinished=!0,this.animations.hit.clampWhenFinished=!0,this.animations.softAttack.setLoop(ci,0),this.animations.hardAttack.setLoop(ci,0),this.animations.crawlDeath.setLoop(ci,0),this.animations.headshot.setLoop(ci,0),this.animations.death.setLoop(ci,0),this.animations.falling.setLoop(ci,0),this.animations.scream.setLoop(ci,0),this.animations.hit.setLoop(ci,0);const{idle:i}=this.animations;this.currentAnimation=i,this.createHitBoxes(),i.play(),this.setMixerTime(.01)}createHitBoxes(){const e=[[0,1.5,.8,.48,.5,.7],[0,1,.05,.75,.85,1.45],[-.3,.5,-.1,.28,.7,.35],[.3,.5,-.1,.28,.7,.35],[-.3,.2,.1,.3,.3,.4],[.3,.2,.1,.3,.3,.4]];for(const[t,i,n,r,o,a]of e){const l=new ht(new Ni(r,o,a),di.HitBox.clone());l.position.set(t,i,n),l.userData.enemy=this.id,this.character.add(l),this.hitBoxes.push(l)}}removeHitBoxes(){for(let e=this.hitBoxes.length;e--;)delete this.hitBoxes[e];this.hitBoxes.splice(0)}addHeadHitBox(){const e=this.character.getObjectByName("Head"),t=new ht(new Ni(15,10,22),di.HitBox.clone());t.position.y+=9.5,t.position.z+=2,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addBodyHitBox(){const e=this.character.getObjectByName("Spine"),t=new ht(new Xs(38,95,40,2,25),di.HitBox.clone());t.position.y+=15,t.position.z+=2.5,t.position.x-=1,t.userData.enemy=this.id,this.hitBoxes.push(t),e.add(t)}addLegsHitBox(){const e=this.character.getObjectByName("RightUpLeg"),t=this.character.getObjectByName("LeftUpLeg"),i=this.character.getObjectByName("RightLeg"),n=this.character.getObjectByName("LeftLeg"),r=new ht(new Ni(16,50,15),di.HitBox.clone()),o=new ht(new Ni(10,50,10),di.HitBox.clone());o.userData.enemy=this.id,r.userData.enemy=this.id,o.position.y-=22.5,o.position.z-=2.5,r.position.y-=20;const a=r.clone(),l=r.clone(),c=o.clone(),h=o.clone();a.position.x+=1,l.position.x-=1,this.hitBoxes.push(a),this.hitBoxes.push(l),this.hitBoxes.push(c),this.hitBoxes.push(h),e.add(a),t.add(l),i.add(c),n.add(h)}disableShadow(){this.dead&&this.mesh.traverse(e=>{const t=e;t.isMesh&&(t.castShadow=!1)})}get blockingAnimation(){return this.attacking||this.falling||this.screaming||this.playerDead||super.blockingAnimation}get material(){const e=[];return this.mesh.traverse(t=>{t.isSkinnedMesh&&e.push(...[t.material].flat())}),e}get animation(){const e=this.running?"Running":this.moving?"Walking":"Idle";return this.falling?"Falling":this.crawling?"Crawling":e}set playerDeath(e){(this.playerDead=e)&&this.moving&&this.idle()}get hitBox(){return this.hitBoxes}get canAttack(){return!this.playerDead&&this.distance<(this.crawling?1.5:this.attackDistance)}get index(){return this.id}}function vM(s,e=s.length,t=0){for(;e;)t=Xt(0,1)*e--|0,[s[e],s[t]]=[s[t],s[e]]}function yM(s){return JSON.parse(JSON.stringify(s))}function MM(s){return s[Ol(0,s.length-1)]}function ko(s){let e=s.length,t=1/0;for(;e--;)s[e]<t&&(t=s[e]);return t}function Vo(s){let e=s.length,t=-1/0;for(;e--;)s[e]>t&&(t=s[e]);return t}const Ed=s=>{const e=yM(s.bounds),{boundOffset:t}=Le.RandomCoords;e.unshift(e.pop());const i=e.slice(0,e.length/2).slice(4),n=e.slice(e.length/2).slice(4),r=s.minCoords[1]+t,o=s.maxCoords[1]-t,a=[s.portals[2],s.portals[3],s.portals[4],s.portals[5]],l=[s.portals[6],s.portals[7],s.portals[0],s.portals[1]],c=Xt(r,o);if(c>l[0][1]){const _=ko(l.map(m=>m[0])),g=Vo(l.map(m=>m[0]));return[Xt(_,g),c]}if(c<a[0][1]){const _=ko(a.map(m=>m[0])),g=Vo(a.map(m=>m[0]));return[Xt(_,g),c]}let h,u,d,p;for(let _=0,g=i.length-1;_<g;_++)if(i[_][1]>c&&i[_+1][1]<c){d=i[_][0]+t,u=n[g-_][0]-t,h=i[_+1][0]+t,p=n[g-_-1][0]-t;break}return[Xt(Math.max(d,h),Math.min(p,u))|0,c|0]},Js=class qt{static getRandomLevelCoords(e,t,i){qt.playerCoords.set(e,t);do i=qt.setRandomCoords();while(i<qt.distance);return vM(qt.coords),qt.levelCoords.toArray()}static addLevelCoords(e){return qt.coords.push(e)===qt.ammount}static setRandomCoords(){return qt.levelCoords.fromArray(MM(qt.coords)),qt.levelCoords.distanceToSquared(qt.playerCoords)}static fillRandomLevelCoords(){for(let e=qt.ammount;e--;)qt.coords.push(Ed({minCoords:Ge.minCoords,maxCoords:Ge.maxCoords,portals:Ge.portals,bounds:Ge.bounds}))}};Js.levelCoords=new De;Js.playerCoords=new De;Js.coords=[];Js.ammount=Le.RandomCoords.ammount;Js.distance=Le.RandomCoords.playerDistance**2;let Eo=Js;class SM{constructor(e){this.envMap=e,this.onHeadHit=this.headHit.bind(this),this.onBodyHit=this.bodyHit.bind(this),this.onLegHit=this.legHit.bind(this),this.onDeath=this.death.bind(this),this.positions=[],this.enemyPosition=new U,this.enemies=[],this.spawnedEnemies=0,this.ready=new su().loadCharacter(e).then(t=>{this.enemyModel=t,this.spawnEnemy([0,-7])}),this.addEvents()}addEvents(){ae.add("Enemy::Death",this.onDeath),ae.add("Hit::Head",this.onHeadHit),ae.add("Hit::Body",this.onBodyHit),ae.add("Hit::Leg",this.onLegHit)}spawnEnemy(e){const t=new su(this.enemyModel,this.envMap,this.spawnedEnemies++);this.enemyPosition.set(e[0],t.collider.position.y,e[1]),t.teleport(this.enemyPosition),this.positions.push(new U().copy(this.enemyPosition)),lt.setCharacter(t.collider),this.enemies.push(t)}headHit(e){const{enemy:t,damage:i,headshot:n}=e.data,r=this.getEnemyIndex(t);this.enemies[r].headHit(i,n)}bodyHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].bodyHit(i)}legHit(e){const{enemy:t,damage:i}=e.data,n=this.getEnemyIndex(t);this.enemies[n].legHit(i)}death(e){const t=this.getEnemyIndex(e.data);this.positions.splice(t,1),this.enemies.splice(t,1)}update(e,t){for(let i=this.enemies.length;i--;){const n=this.enemies[i].update(e,t);this.enemies[i].alive?this.positions[i].copy(n):this.positions[i].setScalar(NaN)}return this.positions}spawnMultiple(e,t,i=2){const n=this.enemies.length-1;i=Math.min(Le.Gameplay.maxEnemies-n,i);for(let r=i;r--;)this.spawnEnemy(Eo.getRandomLevelCoords(e,t))}getHitDirection(e,t,i){let n=Math.atan2(e.z-t.z,e.x-t.x);const r=vf(i);let o="Front";return Math.abs(r)>et.m075?(n=Math.abs(n),o=n<et.d4?"Right":n>et.m075?"Left":"Front"):r<-et.d4&&r>-et.m075?(n*=-1,o=n<-et.d4&&n>-et.m075?"Right":n<et.m075&&n>et.d4?"Left":"Front"):Math.abs(r)<et.d4?(n=Math.abs(n),o=n>et.m075?"Right":n<et.d4?"Left":"Front"):r<et.m075&&r>et.d4&&(n*=-1,o=n<et.m075&&n>et.d4?"Right":n<-et.d4&&n>-et.m075?"Left":"Front"),o}getEnemy(e){return this.enemies.find(t=>t.collider.uuid===e)}getEnemyIndex(e){return this.enemies.findIndex(t=>t.index===e)}removeEvents(){ae.remove("Enemy::Death"),ae.remove("Hit::Head"),ae.remove("Hit::Body"),ae.remove("Hit::Leg")}dispose(){for(let e=this.enemies.length;e--;)this.enemies[e].dispose(),delete this.enemies[e];this.enemyModel.scene.clear(),this.positions.splice(0),this.enemies.splice(0),this.removeEvents()}spawnWave(e){const t=[[-6,8],[6,4],[0,0],[-10,6],[10,10],[-5,-2],[5,-4]];for(let i=0;i<e;i++)this.spawnEnemy(t[i%t.length])}get aliveCount(){return this.enemies.filter(e=>e.alive).length}get positionsForHUD(){return this.enemies.filter(e=>e.alive).map(e=>({id:e.index,x:e.collider.position.x,y:e.collider.position.y,z:e.collider.position.z,health:e.healthValue,head:e.hitBox[0]?.getWorldPosition(new U).toArray()}))}get colliders(){const e=[];for(let t=this.enemies.length;t--;)e.push(...this.enemies[t].hitBox);return e}set playerDead(e){for(let t=this.enemies.length;t--;)this.enemies[t].playerDeath=e}}class bM extends Rn{constructor(){super(...arguments),this.noop=()=>{}}addEventListener(e,t,i){super.addEventListener(e,t)}dispatchEvent(e){e.stopPropagation=this.noop,e.preventDefault=this.noop,super.dispatchEvent(e)}removeEventListener(e,t,i){super.removeEventListener(e,t)}}const Sl=new bM,tc=class Qi{constructor(e){this.player=e,this.paused=!0,this.move=Ho}static get moves(){return Qi.directions}static get moving(){return Qi.directions.includes(1)}static get idle(){return!Qi.moving}static get runs(){return Qi.running}static set runs(e){Qi.running=e}get disabled(){return this.paused||!this.player.alive}set pause(e){this.paused=e,e&&(Qi.directions.fill(0),Qi.running=!1,this.move=Ho,this.player.clearControls())}get movement(){return Qi.moves.join("")}dispose(){this.paused=!0}};tc.directions=[0,0,0,0];tc.running=!1;let Rt=tc;class Yt extends Rt{constructor(e){super(e),this.wheelTime=0,this.aimTime=0,this.events=Object.entries({contextmenu:this.onContextMenu.bind(this),mousewheel:this.onMouseWheel.bind(this),mousedown:this.onMouseDown.bind(this),mousemove:this.onMouseMove.bind(this),mouseup:this.onMouseUp.bind(this),keydown:this.onKeyDown.bind(this),keyup:this.onKeyUp.bind(this)}),this.addEventListeners()}addEventListeners(){const e=Le.worker?Sl:document;for(const[t,i]of this.events)e.addEventListener(t,i,!1)}onContextMenu(e){if(!this.paused)return e.stopPropagation(),e.preventDefault(),!1}onMouseWheel(e){const t=Date.now();e.stopPropagation(),!this.disabled&&t>this.wheelTime&&(this.wheelTime=t+450,this.player.changeWeapon())}onMouseDown(e){if(!this.disabled&&(e.preventDefault(),e.stopPropagation(),!this.disabled)){if(e.button===yr.LEFT)this.player.startShooting();else if(e.button===yr.RIGHT){const t=this.move!==Ho;this.player.startAiming(t),this.aimTime=Date.now()}}}onMouseMove(e){this.disabled||(e.preventDefault(),e.stopPropagation(),!this.disabled&&this.player.rotate(e.movementX/-300,e.movementY/600,.15))}onMouseUp(e){this.disabled||(e.preventDefault(),e.stopPropagation(),!this.disabled&&(e.button===yr.LEFT?this.player.stopShooting():e.button===yr.RIGHT&&(clearTimeout(this.aimTimeout),this.aimTimeout=setTimeout(()=>{const t=!!Rt.moves[pt.UP],i=Rt.runs&&t;this.player.stopAiming(i),i?this.player.run(!0):this.player.move()},Math.max(450-(Date.now()-this.aimTime),0)))))}onKeyDown(e){if(this.disabled||(e.preventDefault(),e.stopPropagation(),this.disabled))return;switch(this.onShift(e.code,!0),e.code){case"KeyW":Rt.moves[pt.UP]=1,Rt.moves[pt.DOWN]=0;break;case"KeyD":Rt.moves[pt.RIGHT]=1,Rt.moves[pt.LEFT]=0;break;case"KeyS":Rt.moves[pt.DOWN]=1,Rt.moves[pt.UP]=0;break;case"KeyA":Rt.moves[pt.RIGHT]=0,Rt.moves[pt.LEFT]=1;break;default:return}const t=this.movement;this.move!==t&&this.player.move(),this.move=t}onKeyUp(e){if(this.disabled||(e.preventDefault(),e.stopPropagation(),this.disabled))return;switch(this.onShift(e.code,!1),e.code){case"KeyW":Rt.moves[pt.UP]=0;break;case"KeyD":Rt.moves[pt.RIGHT]=0;break;case"KeyS":Rt.moves[pt.DOWN]=0;break;case"KeyA":Rt.moves[pt.LEFT]=0;break;case"KeyC":return this.player.changeCamera(!0);case"KeyV":return this.player.changeCamera(!1);case"KeyR":return this.player.reload();default:return}const t=this.movement;t===Ho?this.player.idle():this.move!==t&&this.player.move(),this.move=t}onShift(e,t){const i=t?!Rt.runs:Rt.runs;e==="ShiftLeft"&&i&&(this.player.run(t),Rt.runs=t)}removeEventListeners(){const e=Le.worker?Sl:document;for(const[t,i]of this.events)e.removeEventListener(t,i,!1)}dispose(){this.removeEventListeners(),super.dispose()}}var pt=(s=>(s[s.UP=0]="UP",s[s.RIGHT=1]="RIGHT",s[s.DOWN=2]="DOWN",s[s.LEFT=3]="LEFT",s))(pt||{}),yr=(s=>(s[s.LEFT=0]="LEFT",s[s.WHEEL=1]="WHEEL",s[s.RIGHT=2]="RIGHT",s))(yr||{});const Ho="0000";var Wn=(s=>(s.Pistol="pistol",s.Rifle="rifle",s))(Wn||{});class Ad extends ad{constructor(){super(Le.Player),this.modelRotation=new Wt,this.lastAnimation="pistolIdle",this.equipRifle=!1,this.hasRifle=!1,this.reloading=!1,this.shooting=!1,this.aiming=!1,this.shootTime=0,this.idleTime=0,this.aimTime=0,this.viewPitch=0}async loadCharacter(e){const t=await this.load(e);this.hand=t.scene.getObjectByName("DinoWeaponMount")||t.scene.getObjectByName("LowerArmR")||t.scene,ae.dispatch("Level::AddObject",this.object),this.currentAnimation=this.animations.pistolIdle,this.animations.rifleReload.clampWhenFinished=!0,this.animations.rifleAim.clampWhenFinished=!0,this.animations.death.clampWhenFinished=!0,this.animations.rifleReload.setLoop(ci,1),this.animations.rifleAim.setLoop(ci,1),this.animations.death.setLoop(ci,1),be.setTo(t.scene),this.currentAnimation.play(),this.setMixerTime(.01),this.rotate(-Math.PI,0),rl(this.mesh)}rotate(e,t,i=.25){this.mesh.rotateOnWorldAxis($t.UP,e),this.viewPitch=Math.max(-1.25,Math.min(.92,this.viewPitch+t)),be.object.rotation.x=this.viewPitch}idle(){if(Yt.moving)return;this.moving=this.running=!1;const e=Date.now(),t=Math.max(350-(e-this.idleTime),0);if(this.blockingAnimation||t)return setTimeout(this.idle.bind(this),t);ae.dispatch("Player::Aim",!this.equipRifle,!0),ae.dispatch("Player::Run",!1,!0);const i=this.getWeaponAnimation("Idle");this.lastAnimation!==i&&(this.hasRifle&&this.rifle.updatePosition(0),this.running=this.moving=!1,be.runAnimation(!1),this.idleTime=e,setTimeout(this.updateAnimation.bind(this,"Idle",i),+(this.lastAnimation===i)*100))}move(){if(this.blockingAnimation){this.reloading&&(this.moving=Yt.moving);return}const e=this.movementAnimation,t=this.getWeaponAnimation(e);if(this.lastAnimation===t){this.moving=e!=="Idle",this.running=!1;return}this.updateAnimation(e,t),this.running=!1,this.moving=e!=="Idle",this.moving&&be.runAnimation(!1),this.hasRifle&&this.rifle.updatePosition(1),ae.dispatch("Player::Run",!1,!0),ae.dispatch("Player::Aim",!1,!0)}run(e){if(this.blockingAnimation||this.running===e)return;const t=this.getWeaponAnimation("Run");if(!e||this.lastAnimation===t)return this.running=!1,Yt.moving?this.move():setTimeout(this.idle.bind(this),150);Yt.moves[pt.UP]&&(this.hasRifle&&this.rifle.updatePosition(1.5),ae.dispatch("Player::Run",!0,!0),this.running=this.moving=!0,this.updateAnimation("Run",t),be.runAnimation(!0),this.resetRotation(!0))}hit(e,t){if(this.dead||this.updateHealth(t)||this.hitting)return;this.aiming&&this.stopAiming(this.running);const i=this.getHitAnimation(e),n=+!this.equipRifle*100+1200;ae.dispatch("Player::Aim",!1,!0),this.updateAnimation("Idle",i),clearTimeout(this.reloadTimeout),be.isFPS&&(be.headAnimation(e,n*.5),this.equipRifle&&this.weapon.toggleVisibility(0,n+100,0)),this.playSound("hit",!0),this.weapon.stopReloading(),this.toggleMesh(!1),setTimeout(()=>{if(this.hitting=!1,this.dead)return this.toggleMesh(!0);Yt.runs?this.run(!0):this.move();const r=Yt.idle&&!this.equipRifle;ae.dispatch("Player::Aim",r,!0),setTimeout(this.toggleMesh.bind(this,!0),100)},n),this.reloading=!1,this.running=!1,this.hitting=!0,this.moving=!1}startAiming(e){if(this.blockingAnimation)return;this.weapon.aiming=this.aiming=!0,ae.dispatch("Player::Run",!1,!0),be.runAnimation(!1),be.aimAnimation(!0,this.equipRifle),be.updateNearPlane(!0,this.equipRifle);const t=this.equipRifle?"rifleAim":"pistolIdle";setTimeout(this.toggleMesh.bind(this,!0),300),this.aimTime=+this.equipRifle*Date.now(),clearTimeout(this.animTimeout),this.weapon.setAim(),this.lastAnimation!==t&&((this.equipRifle||e)&&(this.animTimeout=this.updateAnimation("Idle",t)),this.running=this.moving=!1),this.aimTimeout=setTimeout(()=>ae.dispatch("Player::Aim",!be.isFPS,!0),300+ +this.equipRifle*300),!this.equipRifle&&setTimeout(()=>{this.currentAnimation.paused=!0,this.setMixerTime(.5)},400)}stopAiming(e){if(this.reloading)return;this.equipRifle&&clearTimeout(this.aimTimeout);const t=Math.min(Date.now()-this.aimTime,400);ae.dispatch("Player::Aim",!this.equipRifle,!0),!e&&be.aimAnimation(!1,this.equipRifle,t),be.isFPS&&e?be.setNearPlane(+this.equipRifle*.185+.315,0):be.updateNearPlane(!1,this.equipRifle),setTimeout(()=>this.weapon.aiming=this.aiming=!1,100),this.weapon.aiming=this.aiming=!1,this.currentAnimation.paused=!1,this.weapon.cancelAim(t),clearTimeout(this.animTimeout),this.toggleMesh(!1)}get aimProbe(){return this.weapon?.aimProbe}clearControls(){this.moving=!1,this.running=!1,this.stopShooting(),this.aiming&&this.stopAiming(!1)}startShooting(e=Date.now()){if(this.dead||this.hitting||this.weapon.ammoState.reloading||e-this.shootTime<(this.equipRifle?115:230))return;this.shooting=!0,this.shootTime=e;const t=this.weapon.shoot();t&&this.rotate(t.x,t.y),!this.equipRifle&&this.stopShooting()}stopShooting(){this.shooting=!1}reload(){this.shooting=!1,this.weapon.beginReload()}setPistol(e=this.weapon.walls,t){if(this.setWeapon(!1),t)this.pistol=t,this.weapon=this.pistol,this.weapon.walls=e,this.weapon.visible=!0,this.hand?.add(this.weapon.object);else{const i=this.weapon.targets;this.weapon=this.pistol,this.updateRiflePosition(!0),this.weapon.visible=!0,this.weapon.walls=e,this.rifle.toggle=!1,this.setTargets(i)}}setRifle(){this.rifle.walls=this.weapon.walls;const e=this.weapon.targets;this.weapon.visible=!1,this.rifle.toggle=!0,this.weapon=this.rifle,this.setTargets(e),this.setWeapon(!0)}setWeapon(e){ae.dispatch("Weapon::Change",e);let t=e?this.lastAnimation.replace(Wn.Pistol,Wn.Rifle):this.lastAnimation.replace(Wn.Rifle,Wn.Pistol);!e&&!this.animations[t]&&(t=t.replace(/BackwardLeft|BackwardRight/gm,"Backward"),t=t.replace(/ForwardLeft|ForwardRight/gm,"Forward")),this.lastAnimation!==t&&this.updateAnimation(this.playerAnimation,t),this.equipRifle=e}setTargets(e){this.weapon.targets=e}changeCamera(e){if(!e)be.changeShoulder(this.aiming,this.equipRifle);else if(!this.hitting){const t=this.equipRifle&&!this.aiming||!be.isFPS&&this.aiming;be.changeView(this.running,this.aiming,this.equipRifle),!be.isFPS&&this.resetRotation(),this.toggleVisibility(),setTimeout(()=>{const i=!this.moving&&!t;ae.dispatch("Player::Aim",i,!0)},+t*300)}}resetRotation(e=!1){if(e){const t=this.mesh,i=new Wt().setFromAxisAngle($t.RIGHT,this.rotation.y);this.modelRotation.copy(t.quaternion),this.modelRotation.multiply(i),Ce({targets:t.quaternion,easing:"easeInOutQuad",...this.modelRotation,duration:500})}else if(this.rotation.y<-.2){const t=this.rotation.y+.2;this.mesh.rotateOnAxis($t.RIGHT,t)}}toggleMesh(e){be.isFPS&&this.equipRifle&&this.meshes.forEach(t=>t.material.opacity=+e)}toggleVisibility(){const e=+be.isFPS*250,t=+be.isFPS*150+250;this.weapon.toggleVisibility(e,t);const i=!(be.isFPS&&this.equipRifle&&!this.aiming);this.meshes.forEach(n=>{Ce({targets:n.material,delay:e,easing:"linear",duration:100,opacity:0}),i&&setTimeout(()=>Ce({targets:n.material,easing:"linear",duration:100,opacity:1}),t)})}changeWeapon(){if(!this.hasRifle||this.blockingAnimation)return;const e=!this.moving&&this.equipRifle;ae.dispatch("Player::Aim",e,!0),this.toggleMesh(!0),this.equipRifle?this.setPistol():this.setRifle(),be.updateNearPlane(this.aiming,this.equipRifle,this.running)}addRifle(e){this.rifle=e,this.rifle.toggle=!1,this.rifle.dummy.visible=!1,this.hand?.add(this.rifle.object),this.spine.add(this.rifle.dummy),this.updateRiflePosition(!0)}pickRifle(){this.rifle.dummy.visible=!this.equipRifle,this.updateRiflePosition(),this.rifle.addAmmo(),this.hasRifle||(this.rifle.addAmmo(0),this.hasRifle=!0)}updateRiflePosition(e=!1){const t=+this.running*.5+ +this.moving;e?this.rifle.append(t):this.rifle.updatePosition(t)}update(e){if(super.update(e),!this.blockingAnimation&&!this.aiming&&(Yt.moving&&!this.moving?this.move():!Yt.moving&&this.moving&&this.idle(),this.running&&!Yt.runs&&this.run(!1)),!this.running&&Yt.runs&&Yt.moves[pt.UP]&&this.moving&&!this.aiming&&this.run(!0),rl(this.mesh,this.viewPitch),this.weapon){const t=be.object.getWorldQuaternion(new Wt).multiply(new Wt().setFromAxisAngle($t.UP,Math.PI)),i=this.weapon.object.parent;if(i){this.weapon.object.quaternion.copy(i.getWorldQuaternion(new Wt).invert().multiply(t));const n=i.getWorldScale(new ie);this.weapon.object.scale.set(1/n.x,1/n.y,1/n.z)}}this.pistol?.tickReload(e),this.rifle?.tickReload(e),this.shooting&&this.startShooting()}updateAnimation(e,t,i=.1){return super.updateAnimation(e,t,i)}dispose(){clearTimeout(this.reloadTimeout),clearTimeout(this.animTimeout),clearTimeout(this.aimTimeout),this.pistol?.dispose(),this.weapon.dispose(),this.rifle.dispose(),delete this.pistol,delete this.hand,super.dispose()}die(){super.die();const e=+be.isFPS*500;be.isFPS&&this.changeCamera(!0),this.updateAnimation("Idle","death",.5),ae.dispatch("Player::Death",!0),ae.dispatch("Player::Aim",!1,!0),setTimeout(()=>ae.dispatch("Game::Quit",void 0,!0),e+5e3),clearTimeout(this.reloadTimeout),be.deathAnimation(e),this.weapon.stopReloading(),this.reloading=!1,this.shooting=!1,this.aiming=!1}getHitAnimation(e){return`${this.currentWeapon}${e}Hit`}getWeaponAnimation(e){return`${this.currentWeapon}${e}`}get blockingAnimation(){return this.hitting||super.blockingAnimation}get weaponState(){return{...this.weapon.ammoState,name:this.equipRifle?"消音衝鋒槍":"獵場手槍",kind:this.equipRifle?"rifle":"pistol",hasRifle:this.hasRifle,aiming:this.aiming}}collectSupply(e){e==="weapon"||e==="research"?(this.rifle.supply(e==="research"?90:54),this.hasRifle=!0,this.rifle.tickReload(0),this.rifle.beginReload(),this.rifle.tickReload(2),this.changeWeaponTo(!0)):(this.pistol?.supply(24),this.hasRifle&&this.rifle.supply(30))}changeWeaponTo(e){this.equipRifle!==e&&(!e||this.hasRifle)&&(this.stopShooting(),e?this.setRifle():this.setPistol(),be.updateNearPlane(this.aiming,this.equipRifle,this.running))}get movementAnimation(){const e=Yt.moves;let t=e[pt.UP]?"Forward":e[pt.DOWN]?"Backward":"";return!this.equipRifle&&!t?t=e[pt.LEFT]?"Left":e[pt.RIGHT]?"Right":t:this.equipRifle&&(t+=e[pt.LEFT]?"Left":e[pt.RIGHT]?"Right":""),t||"Idle"}get playerAnimation(){return this.lastAnimation.replace(this.currentWeapon,"")}get meshes(){const e=[];return this.mesh.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e}get location(){return{position:this.position,rotation:yf(Math.atan2(-this.rotation.x,this.rotation.z))}}get currentWeapon(){return this.equipRifle?Wn.Rifle:Wn.Pistol}get spine(){return this.mesh.getObjectByName("Torso")||this.mesh}}class wM{constructor(){this.update=this.updateScreen.bind(this),this.callbacks=[],this.ratio=16/9,this.height=0,this.width=0,typeof window<"u"&&(this.root=document.documentElement.style,this.root.setProperty("--ratio",`${this.ratio}`),window.addEventListener("resize",this.update,!1),this.updateScreen())}updateScreen(){this.width=window.innerWidth,this.height=window.innerHeight,this.width/this.height<this.ratio?this.height=this.width/this.ratio:this.width=this.height*this.ratio,this.root.setProperty("--height",`${this.height}px`),this.root.setProperty("--width",`${this.width}px`);for(let e=this.callbacks.length;e--;)this.callbacks[e](this.width,this.height)}addResizeCallback(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}removeResizeCallback(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){window.removeEventListener("resize",this.update,!1),this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}const EM=new wM;class AM{constructor(e,t,i=0,n=1/0){this.ray=new Nl(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return bl(e,this,i,t),i.sort(ru),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)bl(e[n],this,i,t);return i.sort(ru),i}}function ru(s,e){return s.distance-e.distance}function bl(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const n=s.children;for(let r=0,o=n.length;r<o;r++)bl(n[r],e,t,!0)}}class ea extends ri{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],p=[];let _=0;const g=[],m=i/2;let f=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2));function M(){const T=new U,S=new U;let b=0;const v=(t-e)/i;for(let w=0;w<=r;w++){const y=[],E=w/r,R=E*(t-e)+e;for(let I=0;I<=n;I++){const P=I/n,F=P*l+a,z=Math.sin(F),W=Math.cos(F);S.x=R*z,S.y=-E*i+m,S.z=R*W,u.push(S.x,S.y,S.z),T.set(z,v,W).normalize(),d.push(T.x,T.y,T.z),p.push(P,1-E),y.push(_++)}g.push(y)}for(let w=0;w<n;w++)for(let y=0;y<r;y++){const E=g[y][w],R=g[y+1][w],I=g[y+1][w+1],P=g[y][w+1];h.push(E,R,P),h.push(R,I,P),b+=6}c.addGroup(f,b,0),f+=b}function x(T){const S=_,b=new De,v=new U;let w=0;const y=T===!0?e:t,E=T===!0?1:-1;for(let I=1;I<=n;I++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),_++;const R=_;for(let I=0;I<=n;I++){const F=I/n*l+a,z=Math.cos(F),W=Math.sin(F);v.x=y*W,v.y=m*E,v.z=y*z,u.push(v.x,v.y,v.z),d.push(0,E,0),b.x=z*.5+.5,b.y=W*.5*E+.5,p.push(b.x,b.y),_++}for(let I=0;I<n;I++){const P=S+I,F=R+I;T===!0?h.push(F,F+1,P):h.push(F+1,F,P),w+=3}c.addGroup(f,w,T===!0?1:2),f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ic extends ea{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ic(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const wl=[{bullet:!0,bulletPath:!1,bulletHoles:!1,fog:!0,volumetricFog:!1,raining:!0,raindrops:!1,softParticles:!1,clouds:0,dynamicClouds:!1,lighting:!1,physicalLights:!1},{bullet:!0,bulletPath:!1,bulletHoles:!0,fog:!1,volumetricFog:!1,raining:!0,raindrops:!0,softParticles:!1,clouds:300,dynamicClouds:!0,lighting:!0,physicalLights:!1},{bullet:!0,bulletPath:!0,bulletHoles:!0,fog:!0,volumetricFog:!0,raining:!0,raindrops:!0,softParticles:!0,clouds:1,dynamicClouds:!1,lighting:!0,physicalLights:!0}],Td=0,Rd=wl[Td],{length:TM}=Object.keys(Rd),Za=TM;var RM=(s=>(s[s.LOW=Za+0]="LOW",s[s.MEDIUM=Za+1]="MEDIUM",s[s.HIGH=Za+2]="HIGH",s))(RM||{});const El=class Mr{constructor(){this.openDBConnection(this.getEnviromentSettings.bind(this))}updateVisualsStore(e,t=!0,i=Rd){const n=e.transaction("Visuals","readwrite"),r=n.objectStore("Visuals");for(const o in i){const a=o;Mr.visuals.set(a,i[a]),r[t?"add":"put"](i[a],a).onerror=this.onQueryError.bind(this)}n.oncomplete=this.onTransactionComplete.bind(this,e,!1)}getEnviromentSettings(e,t=!1){const i=e.transaction("Visuals","readonly"),n=i.objectStore("Visuals");n.openCursor().onsuccess=r=>{const o=r.target.result;if(!o)return t?null:this.updateVisualsStore(e);const a=o.key;Mr.visuals.set(a,o.value),o.continue(),t=!0},i.oncomplete=this.onTransactionComplete.bind(this,e,!0)}updateVisualValues(e){this.openDBConnection(t=>this.updateVisualsStore(t,!1,e))}onTransactionComplete(e,t){t&&ae.dispatch("Game::SettingsInit"),e.close()}onUpgradeNeeded(e){e.target.result.createObjectStore("Visuals")}openDBConnection(e){const t=indexedDB.open("YAZH");t.onerror=this.onRequestError.bind(this),t.onupgradeneeded=this.onUpgradeNeeded.bind(this),t.onsuccess=i=>{const n=i.target.result;e(n)}}resetVisualValues(e){this.updateVisualValues(wl[e])}onRequestError(e){console.error("Settings DB Request Error:",e)}onQueryError(e){console.error("Settings DB Query Error:",e)}static getDefaultVisualValues(e=Td){return new Map(Object.entries(wl[e]))}static getVisualValue(e){return Mr.visuals.get(e)}static getVisualValues(){return Mr.visuals}};El.visuals=El.getDefaultVisualValues();let mt=El;const CM=10;class LM{constructor(e){this.config=e,this.width=1,this.height=.3,this.radius=.1,this.segments=8,this.rotation=new Wt,this.pivot=new it().makeTranslation(0,this.width*-.5,0),this.acceleration=e.speed*Bu,this.speed=1/this.acceleration,this.createBullet()}async createBullet(){const e=await Ze.Loader.loadTexture("bullet.png");this.bullet=new ht(new ic(this.radius,this.height,this.segments),new Vl({map:e})),this.bullet.scale.setScalar(this.config.scale),mt.getVisualValue("bulletPath")&&this.bullet.add(await this.createPath())}async createPath(){const e=this.radius*1.2,t=await Ze.Loader.loadShader("main.vert"),i=await Ze.Loader.loadShader("shot/bullet.frag"),n=new ht(new ea(e,e,this.width,this.segments,1,!0),new Ei({uniforms:{color:{value:new ze(Ct.WHITE)},traces:{value:0},time:{value:0}},fragmentShader:i,vertexShader:t,glslVersion:Hs,transparent:!0,depthWrite:!1,side:Ui}));return n.geometry.applyMatrix4(this.pivot),n.position.y-=this.height/2,n.scale.y=0,n}shoot(e,t){const i=this.config.position.z,{lifeTime:n}=this.config,r=this.bullet.clone(),o=+!t*.01+.01;return r.userData.direction=e.direction.clone(),r.userData.lifeTime=Date.now()+n,ae.dispatch("Level::AddObject",r),Ut.getWorldQuaternion(this.rotation),r.userData.direction.y+=o,r.quaternion.copy(this.rotation),r.position.copy(e.origin),r.rotateX(-1.56),r.translateY(i),r}update(e){const t=e.children[0];if(e.position.addScaledVector(e.userData.direction,this.acceleration),e.rotateY(.5),!t)return;const i=t.material;t.scale.y>=CM?i.uniforms.time.value+=.1:i.uniforms.traces.value=t.scale.y+=this.acceleration}dispose(){const e=this.bullet.material,t=this.bullet.children[0];t?.material?.dispose(),this.bullet.geometry.dispose(),e.map?.dispose(),t?.geometry.dispose(),e.dispose(),this.bullet.clear()}}class PM extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ou=new it,Al=new Nl,xo=new qs,vo=new U;class Cd extends kt{constructor(e=new ri,t=new PM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(n),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;ou.copy(n).invert(),Al.copy(e.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);vo.fromBufferAttribute(u,m),au(vo,m,l,n,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++)vo.fromBufferAttribute(u,_),au(vo,_,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function au(s,e,t,i,n,r,o){const a=Al.distanceSqToPoint(s);if(a<t){const l=new U;Al.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ao{constructor(e=Hp){this.lerp=e,this.length=0,this.points=[]}addPoint(e,t){this.length=this.points.push([e,t])}getValue(e){let t=0;for(let n=0;n<this.length&&!(this.points[n][0]>=e);n++)t=n;const i=Math.min(this.length-1,t+1);return t===i?this.points[t][1]:this.lerp(this.points[t][1],this.points[i][1],(e-this.points[t][0])/(this.points[i][0]-this.points[t][0]))}dispose(){this.length=this.points.length=0}}const IM=Math.tan(et.d6)*2,DM=[0,0,0];class UM{constructor(e,t,i){this.config=e,this.smokeParticles=[],this.fireParticles=[],this.smokeAlpha=new Ao,this.smokeSize=new Ao,this.fireAlpha=new Ao,this.lightPower=0,this.geometry=new ri,this.createFireLight(t),this.createParticleGeometry(),this.createParticles(t,i)}createFireLight(e){const{intensity:t,position:{x:i,y:n}}=this.config,r=+mt.getVisualValue("physicalLights")+1;this.light=new Ou(Ct.FIRE,t*(3-r),1,r),this.lightPower=this.light.power,this.light.position.set(i,n,0),this.light.castShadow=!0,this.light.power=0,e.add(this.light)}createParticleGeometry(){this.geometry.setAttribute("smokeAngle",new qe([],1)),this.geometry.setAttribute("smokeAlpha",new qe([],1)),this.geometry.setAttribute("smokeSize",new qe([],1)),this.geometry.setAttribute("fireAngle",new qe([],1)),this.geometry.setAttribute("fireSize",new qe([],1)),this.geometry.setAttribute("position",new qe([],3)),this.geometry.setAttribute("blend",new wa([],1)),this.fireAlpha.addPoint(0,0),this.fireAlpha.addPoint(.2,1),this.fireAlpha.addPoint(.5,1),this.fireAlpha.addPoint(1,0),this.smokeAlpha.addPoint(0,0),this.smokeAlpha.addPoint(.1,.1),this.smokeAlpha.addPoint(.5,.1),this.smokeAlpha.addPoint(1,0),this.smokeSize.addPoint(0,0),this.smokeSize.addPoint(.8,this.config.scale*.1),this.smokeSize.addPoint(1,this.config.scale*.12)}async createParticles(e,t){const i=await Ze.Loader.loadTexture(`${t}/smoke.png`),n=await Ze.Loader.loadTexture(`${t}/fire.png`),r=await Ze.Loader.loadShader("shot/fire.vert"),o=await Ze.Loader.loadShader("shot/fire.frag");this.material=new Ei({blendDst:Il,blendEquation:Xn,blending:wu,fragmentShader:o,vertexShader:r,blendSrc:Eu,glslVersion:Hs,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,uniforms:{smoke:{value:i},ratio:{value:null},fire:{value:n}}});const a=new Cd(this.geometry,this.material);a.position.x=this.config.position.x,a.position.y=this.config.position.y,a.renderOrder=2,e.add(a)}addParticles(){this.addFireParticle(),this.addSmokeParticles()}addFireParticle(){const e=Math.random()*.1+.1,t=this.config.scale*(Math.random()*.1+.15);this.fireParticles.push({rotation:Math.random()*et.m2,currentSize:t,maxLife:e,life:e,size:t,blend:0,alpha:0})}addSmokeParticles(){const[e,t]=this.config.particles,i=Ol(e,t);for(let n=i;n--;){const r=this.config.velocity*(i-n),o=Math.random()*.1+.4,a=this.config.scale*o;this.smokeParticles.push({rotation:Math.random()*et.m2,position:new U,currentSize:0,life:a,velocity:r,maxLife:a,blend:1,alpha:0})}}update(){this.updateParticles();const{length:e}=this.fireParticles;return this.light.power=e*this.lightPower,e?this.updateFireGeometry():this.updateSmokeGeometry(),!!(e||this.smokeParticles.length)}updateParticles(e=Bu){for(let t=this.fireParticles.length;t--;){const i=this.fireParticles[t];if((i.life-=.05)<=0)continue;const n=1-i.life/i.maxLife,r=this.fireAlpha.getValue(n);i.currentSize=i.size*r,i.alpha=r,i.rotation+=.025}this.fireParticles=this.fireParticles.filter(t=>t.life>0);for(let t=this.smokeParticles.length;t--;){const i=this.smokeParticles[t];if((i.life-=.01)<=0)continue;const n=1-i.life/i.maxLife;i.currentSize=this.smokeSize.getValue(n),i.alpha=this.smokeAlpha.getValue(n);const r=(t%2*2-1)*e,o=i.velocity*e;i.rotation+=r,i.position.y+=o,i.velocity-=o}this.smokeParticles=this.smokeParticles.filter(t=>t.life>0)}updateFireGeometry(){const e=[],t=[],i=[];for(let n=this.fireParticles.length;n--;){const r=this.fireParticles[n];e.push(r.rotation),i.push(r.currentSize),t.push(r.blend)}this.geometry.setAttribute("fireAngle",new qe(e,1)),this.geometry.setAttribute("fireSize",new qe(i,1)),this.geometry.setAttribute("position",new qe(DM,3)),this.geometry.setAttribute("blend",new wa(t,1)),this.geometry.attributes.fireAngle.needsUpdate=!0,this.geometry.attributes.fireSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}updateSmokeGeometry(){const e=[],t=[],i=[],n=[],r=[];for(let o=this.smokeParticles.length;o--;){const a=this.smokeParticles[o],{x:l,y:c,z:h}=a.position;t.push(a.rotation),r.push(a.currentSize),i.push(a.alpha),n.push(a.blend),e.push(l,c,h)}this.geometry.setAttribute("smokeAngle",new qe(t,1)),this.geometry.setAttribute("smokeAlpha",new qe(i,1)),this.geometry.setAttribute("smokeSize",new qe(r,1)),this.geometry.setAttribute("position",new qe(e,3)),this.geometry.setAttribute("blend",new wa(n,1)),this.geometry.attributes.smokeAngle.needsUpdate=!0,this.geometry.attributes.smokeAlpha.needsUpdate=!0,this.geometry.attributes.smokeSize.needsUpdate=!0,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.blend.needsUpdate=!0}resize(e){this.material.uniforms.ratio.value=e/IM}dispose(){this.material.uniforms.smoke.value.dispose(),this.material.uniforms.fire.value.dispose(),this.smokeParticles.splice(0),this.fireParticles.splice(0),this.smokeAlpha.dispose(),this.smokeSize.dispose(),this.fireAlpha.dispose(),this.geometry.dispose(),this.material.dispose(),this.light.dispose()}}class FM extends fi{constructor(e,t,i,n){super();const r=[],o=[],a=[],l=new ie,c=new si;c.makeRotationFromEuler(i),c.setPosition(t);const h=new si;h.copy(c).invert(),u(),this.setAttribute("position",new Kn(r,3)),this.setAttribute("normal",new Kn(o,3)),this.setAttribute("uv",new Kn(a,2));function u(){let g=[];const m=new ie,f=new ie,M=e.geometry,x=M.attributes.position,T=M.attributes.normal;if(M.index!==null){const S=M.index;for(let b=0;b<S.count;b++)m.fromBufferAttribute(x,S.getX(b)),f.fromBufferAttribute(T,S.getX(b)),d(g,m,f)}else for(let S=0;S<x.count;S++)m.fromBufferAttribute(x,S),f.fromBufferAttribute(T,S),d(g,m,f);g=p(g,l.set(1,0,0)),g=p(g,l.set(-1,0,0)),g=p(g,l.set(0,1,0)),g=p(g,l.set(0,-1,0)),g=p(g,l.set(0,0,1)),g=p(g,l.set(0,0,-1));for(let S=0;S<g.length;S++){const b=g[S];a.push(.5+b.position.x/n.x,.5+b.position.y/n.y),b.position.applyMatrix4(c),r.push(b.position.x,b.position.y,b.position.z),o.push(b.normal.x,b.normal.y,b.normal.z)}}function d(g,m,f){m.applyMatrix4(e.matrixWorld),m.applyMatrix4(h),f.transformDirection(e.matrixWorld),g.push(new lu(m.clone(),f.clone()))}function p(g,m){const f=[],M=.5*Math.abs(n.dot(m));for(let x=0;x<g.length;x+=3){let T=0,S,b,v,w;const y=g[x+0].position.dot(m)-M,E=g[x+1].position.dot(m)-M,R=g[x+2].position.dot(m)-M,I=y>0,P=E>0,F=R>0;switch(T=(I?1:0)+(P?1:0)+(F?1:0),T){case 0:{f.push(g[x]),f.push(g[x+1]),f.push(g[x+2]);break}case 1:{if(I&&(S=g[x+1],b=g[x+2],v=_(g[x],S,m,M),w=_(g[x],b,m,M)),P){S=g[x],b=g[x+2],v=_(g[x+1],S,m,M),w=_(g[x+1],b,m,M),f.push(v),f.push(b.clone()),f.push(S.clone()),f.push(b.clone()),f.push(v.clone()),f.push(w);break}F&&(S=g[x],b=g[x+1],v=_(g[x+2],S,m,M),w=_(g[x+2],b,m,M)),f.push(S.clone()),f.push(b.clone()),f.push(v),f.push(w),f.push(v.clone()),f.push(b.clone());break}case 2:{I||(S=g[x].clone(),b=_(S,g[x+1],m,M),v=_(S,g[x+2],m,M),f.push(S),f.push(b),f.push(v)),P||(S=g[x+1].clone(),b=_(S,g[x+2],m,M),v=_(S,g[x],m,M),f.push(S),f.push(b),f.push(v)),F||(S=g[x+2].clone(),b=_(S,g[x],m,M),v=_(S,g[x+1],m,M),f.push(S),f.push(b),f.push(v));break}}}return f}function _(g,m,f,M){const x=g.position.dot(f)-M,T=m.position.dot(f)-M,S=x/(x-T);return new lu(new ie(g.position.x+S*(m.position.x-g.position.x),g.position.y+S*(m.position.y-g.position.y),g.position.z+S*(m.position.z-g.position.z)),new ie(g.normal.x+S*(m.normal.x-g.normal.x),g.normal.y+S*(m.normal.y-g.normal.y),g.normal.z+S*(m.normal.z-g.normal.z)))}}}class lu{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}class NM{constructor(e,t){this.orientation=new Bi,this.rotation=new it,this.position=new U,this.holes=[],this.origin=new U,this.scale=new U,this.surface=["defaultMaterial002_24","defaultMaterial002_39"],this.scale.setScalar(t*.5),Ze.Loader.loadTexture(`${e}/hole.png`).then(i=>{this.material=new id({polygonOffsetFactor:-.1,polygonOffset:!0,transparent:!0,depthWrite:!1,depthTest:!0,map:i})})}show(e){if(this.surface.includes(e.object.name))return;this.position.copy(e.point),this.origin.copy(this.position),this.origin.add(e.face.normal),this.rotation.lookAt(this.origin,this.position,$t.UP),this.orientation.setFromRotationMatrix(this.rotation),this.orientation.z=Math.random()*et.m2;const t=new FM(e.object,e.point,this.orientation,this.scale);this.holes.push(new ht(t,this.material.clone()));const i=this.holes.length-1,n=this.holes[i];ae.dispatch("Level::AddObject",n),Ce({complete:this.remove.bind(this,i),targets:n.material,easing:"linear",duration:1e3,opacity:0,delay:5e3})}remove(e){if(!this.holes[e])return;const t=this.holes[e];t.material.map?.dispose(),t.material.dispose(),t.geometry.dispose(),delete this.holes[e],ae.dispatch("Level::RemoveObject",t)}dispose(){for(let e=this.holes.length;e--;)this.remove(e);this.material.dispose(),this.holes.splice(0)}}class zM{constructor(){this.paused=!0,this.lastTime=0,this.callbacks=[],this.onUpdate=this.update.bind(this)}add(e){this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)}update(e){this.raf=requestAnimationFrame(this.onUpdate);const t=e-(this.lastTime||0);for(let i=this.callbacks.length;i--;)this.callbacks[i](t,e);this.lastTime=e}remove(e){const t=this.callbacks.indexOf(e);t!==-1&&this.callbacks.splice(t,1)}dispose(){cancelAnimationFrame(this.raf),this.callbacks.length=0}set pause(e){this.paused!==e&&((this.paused=e)?cancelAnimationFrame(this.raf):this.raf=requestAnimationFrame(this.onUpdate))}}const ii=new zM;class Ld{constructor(e){this.config=e,this.onUpdate=this.updateAimSign.bind(this),this.onShoot=this.updateBullets.bind(this),this.bullets=new Map,this.hits=[],this.raycaster=new AM,this.camera=new U,this.offset=new U,this.origin=new U,this.aimProbe={},this.targets=[],this.walls=[],this.aimed=!1,this.aiming=!1,this.reloadLeft=0,this.reloadLength=0,this.impactPoint=new U,mt.getVisualValue("bullet")&&(this.bullet=new LM(e.bullet)),this.magazine=e.magazine,this.loadedAmmo=Math.min(e.magazine,e.ammo),this.totalAmmo=e.ammo}async load(e){const{emissive:t=Ct.BLACK,emissiveIntensity:i=1}=this.config;this.weapon=(await Ze.Loader.loadGLTF(this.config.model)).scene,this.weapon.traverse(r=>{const o=r,a=o.material;o.isMesh&&(o.castShadow=o.receiveShadow=!0,o.material=new Vl({emissiveIntensity:i,transparent:!0,map:a.map,color:a.color,side:wi,roughness:.75,metalness:.25,emissive:t,envMap:e}))}),this.weapon.position.copy(this.config.position),this.weapon.rotation.copy(this.config.rotation),this.weapon.scale.copy(this.config.scale);const n=this.weapon.clone();return this.fire=new UM(this.config.fire,this.weapon,this.config.textures),mt.getVisualValue("bulletHoles")&&(this.hole=new NM(this.config.textures,this.config.bullet.scale)),n}playSound(e,t){const{stop:i,pistol:n,delay:r}=t;i&&this.stopSound(e,n),ae.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!0,sfx:e,delay:r,pistol:n},!0)}stopSound(e,t){ae.dispatch("SFX::Weapon",{matrix:this.weapon.matrixWorld,play:!1,sfx:e,pistol:t},!0)}updateRaycaster(e=!0,t=this.targets){this.camera.setFromMatrixPosition(Ut.matrixWorld),this.raycaster.ray.origin.copy(e?this.camera.clone().add(this.spread):this.camera),this.raycaster.ray.direction.copy($t.FORWARD).unproject(Ut).sub(this.camera).normalize(),this.hits.splice(0)&&this.raycaster.intersectObjects(t,!1,this.hits)}toggleAimSign(e=!1){ae.dispatch("Weapon::Aim",e,!0),this.aimed=e}removeBullet(e){const t=this.bullets.get(e);t&&(t.clear(),this.bullets.delete(e),ae.dispatch("Level::RemoveObject",t))}getEvent(e){return e?e===1?"Hit::Body":"Hit::Leg":"Hit::Head"}updateAimSign(){if(!this.aiming)return this.aimed&&this.toggleAimSign(!1);this.updateRaycaster(!1);const e=!!this.hits.length;this.aimed!==e&&this.toggleAimSign(e)}startReloading(){}stopReloading(){}resize(e){this.fire?.resize(e)}addAmmo(){}animateRecoil(){const{x:e,y:t}=this.weapon.position,i=this.recoil;return Ce({targets:this.weapon.rotation,easing:"easeInOutSine",direction:"alternate",z:i.y/5,duration:50}),Ce({targets:this.weapon.position,easing:"easeInOutSine",direction:"alternate",y:t-i.y*7.5,x:e-i.y*15,duration:50}),i}updateBullets(){!this.fire.update()&&ii.remove(this.onShoot),this.bullets.forEach((e,t)=>{Date.now()<e.userData.lifeTime?this.bullet.update(e):this.removeBullet(t)})}shoot(){if(this.reloadLeft>0)return;if(this.empty)return this.playSound("empty",{stop:!1});const e=this.target,t=this.targets[e],i=this.animateRecoil();let n;if(!this.bullets.size&&ii.add(this.onShoot),ae.dispatch("Player::Shoot",!0,!0),ae.dispatch("Combat::Shot",{point:this.impactPoint.toArray(),weapon:this.config.model.includes("AK")?"rifle":"pistol",target:t?.userData.enemy}),this.bullet){const{ray:h}=this.raycaster;n=this.bullet.shoot(h,this.aiming),this.bullets.set(n.uuid,n)}if(this.fire.addParticles(),this.loadedAmmo--,this.totalAmmo--,this.playSound("shoot",{stop:!0}),this.playSound("bullet",{stop:!1,delay:.5}),e<0)return this.updateRaycaster(!1,this.walls),this.hits.length&&this.hole?.show(this.hits[0]),i;const r=t.userData.region??e%6,o=this.getEvent(r),a=r===0,l=this.getDamage(r);n&&this.removeBullet(n.uuid);const{enemy:c}=t.userData;return ae.dispatch(o,{enemy:c,damage:l,headshot:a}),i}dispose(){this.bullets.forEach((e,t)=>{const i=e.children[0],n=e.material;i.material.dispose(),n.map?.dispose(),e.geometry.dispose(),n.dispose(),i.geometry.dispose(),this.removeBullet(t)}),ii.remove(this.onUpdate),ii.remove(this.onShoot),this.bullet?.dispose(),this.targets.splice(0),this.walls.splice(0),this.hole?.dispose(),this.weapon.clear(),this.fire.dispose()}set visible(e){ii[e?"add":"remove"](this.onUpdate),this.weapon.children[0].visible=e}get originOffset(){const{x:e,y:t}=this.config.bullet.position;return this.aiming?t:e}get spread(){let{x:e,y:t}=this.config.spread;const i=+!this.aiming*.5+.5;return e=Xt(-e,e)*i,t=Xt(-t,t)*i,this.offset.set(e,t-.003,0)}get recoil(){const{x:e,y:t}=this.config.recoil,i=+!this.aiming*.5+.5;return{x:Xt(-e,e)*i,y:t*i}}get target(){this.updateRaycaster();const e=this.raycaster.intersectObjects(this.walls,!1)[0];this.aimProbe={hit:this.hits[0]?.object.userData.enemy,region:this.hits[0]?this.targets.indexOf(this.hits[0].object)%6:null,distance:this.hits[0]?.distance,wall:e?.object.position.toArray(),wallDistance:e?.distance,origin:this.camera.toArray(),direction:this.raycaster.ray.direction.toArray(),targets:this.targets.length};const t=this.hits[0];if(this.impactPoint.copy(e&&(!t||e.distance<t.distance)?e.point:t?t.point:this.camera.clone().addScaledVector(this.raycaster.ray.direction,90)),e&&this.hits.length&&e.distance<this.hits[0].distance)return-1;this.weapon.getWorldPosition(this.origin),this.origin.y+=this.originOffset,this.raycaster.ray.origin.copy(this.origin),this.raycaster.ray.direction.subVectors(this.impactPoint,this.origin).normalize();const i=this.raycaster.intersectObjects(this.walls,!1)[0];return i&&i.distance<this.origin.distanceTo(this.impactPoint)-.15?(this.impactPoint.copy(i.point),this.aimProbe.muzzleBlocked=!0,-1):this.hits.length?this.targets.indexOf(this.hits[0].object):-1}get inStock(){return this.totalAmmo-this.loadedAmmo}get empty(){return!this.loadedAmmo}get full(){return this.loadedAmmo===this.magazine}get object(){return this.weapon}beginReload(){return this.reloadLeft>0||this.full||this.inStock<=0?!1:(this.reloadLength=this.config.model.includes("AK")?1.65:1.25,this.reloadLeft=this.reloadLength,this.playSound("reload",{stop:!0}),!0)}tickReload(e){this.reloadLeft<=0||(this.reloadLeft=Math.max(0,this.reloadLeft-e),this.reloadLeft||(this.loadedAmmo+=Math.min(this.magazine-this.loadedAmmo,this.inStock)))}supply(e){this.totalAmmo=Math.min(this.totalAmmo+e,this.loadedAmmo+150)}get ammoState(){return{loaded:this.loadedAmmo,reserve:this.inStock,reloading:this.reloadLeft>0,progress:this.reloadLeft>0?1-this.reloadLeft/this.reloadLength:0}}}class Pd extends Ld{constructor(e){super(Le.Pistol),this.position=Le.Pistol.position,this.rotation=Le.Pistol.rotation,this.damage=Le.Gameplay.damage.pistol,this.load(e)}playSound(e,t){super.playSound(e,{...t,pistol:!0})}stopSound(e){super.stopSound(e,!0)}setAim(){Ce({targets:this.object.rotation,y:this.rotation.y+.015,x:this.rotation.x,easing:"linear",duration:200,delay:200,z:-.06}),Ce({targets:this.object.position,x:this.position.x,z:this.position.z,easing:"linear",duration:200,delay:200,y:this.position.y})}cancelAim(e){Ce({targets:this.object.rotation,x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,easing:"linear",duration:e}),Ce({targets:this.object.position,x:this.position.x,y:this.position.y,z:this.position.z,easing:"linear",duration:e})}toggleVisibility(e,t,i=100){this.object.children[0].children.forEach(n=>{const{material:r}=n;Ce({targets:r,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>Ce({targets:r,easing:"linear",opacity:1,duration:i}),t)})}getDamage(e){return e===0?70:e===1?32:23}dispose(){super.dispose()}}class Id extends Ld{constructor(e){super(Le.Rifle),this.spinePosition=Le.Rifle.spinePosition,this.spineRotation=Le.Rifle.spineRotation,this.position=Le.Rifle.position,this.rotation=Le.Rifle.rotation,this.damage=Le.Gameplay.damage.rifle,this.maxStock=Le.Rifle.maxStock,this.appended=!1,this.spawned=!1,this.load(e)}async load(e){const t=await super.load(e);return this.spine=t.clone(),t.scale.copy(Le.Rifle.worldScale),ae.dispatch("Level::AddObject",t),t.rotation.set(0,0,0),t.visible=!1,this.clone=t,t}setAim(){this.object.rotation.copy(this.rotation),this.object.position.copy(this.position)}cancelAim(){Ce({targets:this.object.rotation,easing:"easeInOutSine",x:this.rotation.x,y:this.rotation.y,z:this.rotation.z,duration:50,delay:50}),Ce({targets:this.object.position,easing:"easeInOutSine",x:this.position.x,y:this.position.y,z:this.position.z,duration:50,delay:50})}toggleVisibility(e,t,i=100){this.object.traverse(n=>{if(!n.isMesh)return;const r=n.material;Ce({targets:r,easing:"linear",opacity:0,delay:e,duration:i}),setTimeout(()=>Ce({targets:r,easing:"linear",opacity:1,duration:i}),t)})}addAmmo(e=Le.Rifle.magazine){if(e){this.playSound("pick",{stop:!1});const t=Math.min(this.inStock+e,this.maxStock);this.totalAmmo=t+ +!this.empty*this.loadedAmmo}else{const t=Math.min(Math.min(this.magazine-this.loadedAmmo,this.magazine),this.totalAmmo);this.loadedAmmo+=t,ae.dispatch("Weapon::Reload",{loaded:this.loadedAmmo,inStock:this.inStock,ammo:this.totalAmmo})}}getDamage(e){return e===0?42:e===1?23:16}startReloading(){this.object.position.set(this.position.x,this.position.y,0),this.object.rotation.set(this.rotation.x,this.rotation.y,0),this.playSound("reload",{stop:!0})}stopReloading(){!this.aiming&&this.reset()}update(e){if(!this.spawned)return;this.clone.rotation.y-=.025;const t=this.clone.position.distanceToSquared(e);this.inStock<this.maxStock&&t<6.25&&(ae.dispatch("Player::PickRifle",this.clone),ae.dispatch("Rifle::Pick",null,!0),this.clone.visible=!1,this.spawned=!1)}spawn(e){this.clone.position.set(e[0],1.75,e[1]),ae.dispatch("Rifle::Spawn",e,!0),this.clone.visible=!0,this.spawned=!0}updatePosition(e){this.appended&&Ce({targets:this.spine.position,duration:+!e*100,x:.18+e*.02,easing:"linear"})}append(e){this.spine.position.copy(this.spinePosition),this.spine.rotation.copy(this.spineRotation),this.appended=!0,this.updatePosition(e)}reset(){this.object.position.copy(this.position),this.object.rotation.copy(this.rotation),this.appended=!1}dispose(){this.clone.clear(),super.dispose()}set toggle(e){this.spine.visible=!e,this.visible=e}get onStage(){return this.spawned}get dummy(){return this.spine}}class Go{constructor(){this.fps=!1,this.runTimeout=0,this.shakeDuration=0,this.rightShoulder=!0,this.position=new U,this.shakePower=.025,this.clock=new Ku,this.shakeAttenuation=1,this.onRunning=this.run.bind(this),this.fpRifleAim=new U(-.1541,1.524,.5);const e=EM.size.ratio;this.camera=new ti(45,e,+this.fps*.215+.1),this.camera.far=Le.Level.depth,this.setCamera(),this.updateState()}setCamera(){const e=this.getPosition(),t=+!this.fps*2.5+22.5;this.camera.rotation.set(0,Math.PI,0),this.camera.setFocalLength(t),this.camera.position.copy(e)}updateState(){const{aspect:e,near:t,far:i,fov:n}=this.camera;Go.state={matrix:this.camera.matrixWorld,aspect:e,near:t,far:i,fov:n}}getPosition(e=!1,t=!1,i=!1){if(this.fps&&t&&i)return this.fpRifleAim;const{idle:n,run:r,aim:o}=Le.Camera[this.fps?"fps":"tps"];return this.position.copy(e?r:t?o:n),this.position.x-=+(!this.fps&&this.rightShoulder&&t&&i)*.125,this.position.x*=+(!this.fps&&!this.rightShoulder)*-2+1,this.position}changeView(e,t,i){this.fps=!this.fps,this.updateNearPlane(t,i);const{x:n,y:r,z:o}=this.getPosition(e,t,i);Ce({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:n,y:r,z:o})}updateNearPlane(e,t,i){const r=+(this.camera.near===.5)*-300+400,o=e?.03:this.fps?t?.5:.315:.1;this.fps&&i&&t&&(this.camera.position.z=.2),this.camera.near!==o&&this.setNearPlane(o,r)}setNearPlane(e,t){Ce({complete:()=>this.camera.updateProjectionMatrix(),update:()=>this.camera.updateProjectionMatrix(),targets:this.camera,easing:"linear",duration:t,near:e})}changeShoulder(e,t){if(this.fps)return;let{x:i}=this.camera.position;this.rightShoulder=!this.rightShoulder,e&&t&&(i=Le.Camera.tps.aim.x,i-=+this.rightShoulder*.125,i*=+this.rightShoulder*-2+1),Ce({targets:this.camera.position,easing:"easeInOutQuad",duration:500,x:-i})}aimAnimation(e,t,i=400){const{x:n,y:r,z:o}=this.getPosition(!1,e,t);e&&ii.remove(this.onRunning),e&&Ce({targets:this.camera.rotation,easing:"linear",duration:250,y:Math.PI}),Ce({targets:this.camera.position,easing:"easeInOutQuad",delay:+e*100,duration:i,x:n,y:r,z:o})}headAnimation(e,t){const{x:i,y:n,z:r}=this.camera.position,{x:o,y:a,z:l}=this.camera.rotation,c={x:0,y:0,z:0},h={x:0,y:0,z:0};switch(e){case"Front":c.y=.2,h.x=-.2;break;case"Left":c.x=-.5,c.y=.5,h.x=.5,h.y=-1;break;case"Right":c.x=.36,c.y=-.2,h.x=.5,h.y=.55;break}Ce({targets:this.camera.position,direction:"alternate",easing:"easeOutSine",duration:t,x:i+c.x,y:n+c.y,z:r+c.z}),Ce({targets:this.camera.rotation,direction:"alternate",easing:"easeOutSine",duration:t,x:o+h.x,y:a+h.y,z:l+h.z})}shakeAnimation(e){if(this.shakeDuration=Math.max(e,0),this.shakeDuration){const t=this.clock.getDelta(),i=$t.random().multiplyScalar(this.shakePower);setTimeout(()=>this.shakeAnimation(this.shakeDuration),t),this.shakeDuration-=t*this.shakeAttenuation,this.camera.position.add(i)}else this.camera.position.copy(this.getPosition())}runAnimation(e){if(e&&this.runTimeout)return;this.runTimeout=e?setTimeout(()=>ii.add(this.onRunning),500):this.dispose();const t=this.getPosition(e),{x:i,y:n,z:r}=t;this.runDelta=0,!this.camera.position.equals(t)&&Ce({targets:this.camera.position,easing:"easeOutQuad",duration:300,x:i,y:n,z:r})}run(){this.runDelta+=.25;const e=+this.fps+1,t=Math.sin(this.runDelta),i=Math.cos(this.runDelta/2);this.camera.position.y+=t*e/100,this.camera.rotation.y-=i*e/500}deathAnimation(e){const{x:t,z:i}=Le.Camera.tps.idle;Ce({targets:this.camera.position,easing:"easeInOutQuad",duration:500,z:i-1,y:.75,delay:e,x:t})}setTo(e){e.add(this.camera)}resize(){this.camera.updateProjectionMatrix()}dispose(){return clearTimeout(this.runTimeout),ii.remove(this.onRunning),0}static get config(){return Go.state}get object(){return this.camera}get isFPS(){return this.fps}}const Dd=new Go,Ut=Dd.object,be=Dd,Ja=new si;class ta{constructor(e){e=e||{},this.vertices={near:[new ie,new ie,new ie,new ie],far:[new ie,new ie,new ie,new ie]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return Ja.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(n){n.applyMatrix4(Ja)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(n){n.applyMatrix4(Ja);const r=Math.abs(n.z);i?n.z*=Math.min(t/r,1):n.multiplyScalar(Math.min(t/r,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new ta);t.length=e.length;for(let i=0;i<e.length;i++){const n=t[i];if(i===0)for(let r=0;r<4;r++)n.vertices.near[r].copy(this.vertices.near[r]);else for(let r=0;r<4;r++)n.vertices.near[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[i-1]);if(i===e.length-1)for(let r=0;r<4;r++)n.vertices.far[r].copy(this.vertices.far[r]);else for(let r=0;r<4;r++)n.vertices.far[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const cu={lights_fragment_begin:`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

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
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
	vec2 cascade;
	float cascadeCenter;
	float closestEdge;
	float margin;
	float csmx;
	float csmy;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );

	  	#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
			// NOTE: Depth gets larger away from the camera.
			// cascade.x is closer, cascade.y is further
			cascade = CSM_cascades[ i ];
			cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
			closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
			margin = 0.25 * pow( closestEdge, 2.0 );
			csmx = cascade.x - margin / 2.0;
			csmy = cascade.y + margin / 2.0;
			if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

				float dist = min( linearDepth - csmx, csmy - linearDepth );
				float ratio = clamp( dist / margin, 0.0, 1.0 );

				vec3 prevColor = directLight.color;
				directionalLightShadow = directionalLightShadows[ i ];
				directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

				bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
				directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

				ReflectedLight prevLight = reflectedLight;
				RE_Direct( directLight, geometry, material, reflectedLight );

				bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
				float blendRatio = shouldBlend ? ratio : 1.0;

				reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
				reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
				reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
				reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

			}
	  	#endif

	}
	#pragma unroll_loop_end
	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, geometry, directLight );

			#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )

			directionalLightShadow = directionalLightShadows[ i ];
			if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

			if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometry, material, reflectedLight );

			#endif

		}
		#pragma unroll_loop_end

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, geometry, directLight );

			RE_Direct( directLight, geometry, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

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
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+sl.lights_pars_begin},hu=new si,Qa=new ta,$i=new ie,pr=new os,el=[],tl=[],il=new si,uu=new si,OM=new ie(0,1,0);class BM{constructor(e){e=e||{},this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new ie(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||1,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new ta,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new vu(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const n=this.lights[t].shadow.camera,r=this.frustums[t],o=r.vertices.near,a=r.vertices.far,l=a[0];let c;l.distanceTo(a[2])>l.distanceTo(o[2])?c=a[2]:c=o[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),p=r.vertices.far[0].z/(d-u.near),_=.25*Math.pow(p,2)*(d-u.near);h+=_}n.left=-h/2,n.right=h/2,n.top=h/2,n.bottom=-h/2,n.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":n(this.cascades,e.near,t,this.breaks);break;case"practical":r(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(o,a,l,c){for(let h=1;h<o;h++)c.push((a+(l-a)*h/o)/l);c.push(1)}function n(o,a,l,c){for(let h=1;h<o;h++)c.push(a*(l/a)**(h/o)/l);c.push(1)}function r(o,a,l,c,h){el.length=0,tl.length=0,n(o,a,l,tl),i(o,a,l,el);for(let u=1;u<o;u++)h.push(qn.lerp(el[u-1],tl[u-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;il.lookAt(new ie,this.lightDirection,OM),uu.copy(il).invert();for(let i=0;i<t.length;i++){const n=this.lights[i],r=n.shadow.camera,o=(r.right-r.left)/this.shadowMapSize,a=(r.top-r.bottom)/this.shadowMapSize;hu.multiplyMatrices(uu,e.matrixWorld),t[i].toSpace(hu,Qa);const l=Qa.vertices.near,c=Qa.vertices.far;pr.makeEmpty();for(let h=0;h<4;h++)pr.expandByPoint(l[h]),pr.expandByPoint(c[h]);pr.getCenter($i),$i.z=pr.max.z+this.lightMargin,$i.x=Math.floor($i.x/o)*o,$i.y=Math.floor($i.y/a)*a,$i.applyMatrix4(il),n.position.copy($i),n.target.position.copy($i),n.target.position.x+=this.lightDirection.x,n.target.position.y+=this.lightDirection.y,n.target.position.z+=this.lightDirection.z}}injectInclude(){sl.lights_fragment_begin=cu.lights_fragment_begin,sl.lights_pars_begin=cu.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,n=this.shaders;e.onBeforeCompile=function(r){const o=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),r.uniforms.CSM_cascades={value:t},r.uniforms.cameraNear={value:i.camera.near},r.uniforms.shadowFar={value:o},n.set(e,r)},n.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(i,n){if(i!==null){const r=i.uniforms;this.getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in n.defines?(delete n.defines.CSM_FADE,n.needsUpdate=!0):this.fade&&!("CSM_FADE"in n.defines)&&(n.defines.CSM_FADE="",n.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new ns);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],n=this.breaks[t-1]||0;e[t].x=n,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}class nc extends ri{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new U,h=new De;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kM{constructor(){this.coords=Ge.portals,this.position=new U,this.player=new U,this.offset=new De,this.triggers=this.coords.filter((e,t)=>!(t%2)).map((e,t,i)=>e[0]+(+(t<i.length/2)*-2+1)*-.1),this.createPortals()}async createPortals(){await this.createMaterial();for(let e=0,t=0;t<this.triggers.length;e+=2,t++){const i=this.coords[e][1],n=this.coords[e+1][1],r=Math.abs(i-n)/2,o=+(t<2)*2-1,a=r+.52,l=new ht(new nc(a,32,0,Math.PI),this.material);l.renderOrder=1,l.position.x=this.triggers[t],l.rotation.y=et.d2*o,l.position.z=i+r*-o,l.position.z+=Le.Level.portalsOffset[t],ae.dispatch("Level::AddObject",l)}}async createMaterial(){const e=await Ze.Loader.loadShader("portal/main.vert"),t=await Ze.Loader.loadShader("portal/main.frag"),i=mt.getVisualValue("volumetricFog"),n=new ze(Ct.PORTAL),r=new ze(Ct.MOON),o=Le.Level.fogDensity*(+!i*4+1);return this.material=new Ei({uniforms:{fogColor:{value:new ze(Ct.FOG)},backgroundColor:{value:n},spikesColor:{value:r},fogDensity:{value:o},deltaTime:{value:0}},fragmentShader:t,vertexShader:e,glslVersion:Hs,transparent:!0}),this.material.defines={VOLUMETRIC_FOG:i},this.material.fog=mt.getVisualValue("fog"),this.material}topPortalArea(){if(this.player.z>this.coords[1][1]){if(this.player.x<=this.triggers[0])return this.offset.set(this.coords[0][0]-this.player.x,this.coords[0][1]-this.player.z),this.updatePosition(2,3),!0;if(this.player.x>=this.triggers[3])return this.offset.set(this.player.x-this.coords[6][0],this.coords[7][1]-this.player.z),this.updatePosition(4),!0}return!1}bottomPortalArea(){if(this.player.z<this.coords[2][1]){if(this.player.x<=this.triggers[1])return this.offset.set(-(this.coords[2][0]-this.player.x),this.coords[2][1]-this.player.z),this.updatePosition(0,1),!0;if(this.player.x>=this.triggers[2])return this.offset.set(this.player.x-this.coords[4][0],this.coords[5][1]-this.player.z),this.updatePosition(6),!0}return!1}updatePosition(e,t=e){const i=this.coords[e][0],n=Math.sign(i)*-.3;this.position.set(this.coords[e][0]-this.offset.x+n,this.player.y,this.coords[t][1]+this.offset.y)}update(e){this.material.uniforms.deltaTime.value+=e/10}portalPassed(e){return this.player.copy(e),this.topPortalArea()||this.bottomPortalArea()}setFogUniforms(e){this.material.onBeforeCompile=e}dispose(){this.material?.dispose(),this.triggers.splice(0)}get playerPosition(){return this.position}}const du=Math.tan(et.d3)*3;class VM{constructor(e,t,i){this.renderer=e,this.scene=t,this.worker=i,this.minCoords=Ge.minCoords.map(n=>n-5),this.maxCoords=Ge.maxCoords.map(n=>n+5),this.geometry=new ri,this.delta=0,this.createRenderTargets(),this.createWorkerLoop(),this.createParticles()}createRenderTargets(){if(!mt.getVisualValue("softParticles"))return;const{width:e,height:t}=this.renderer.domElement,i=new $u(e,t,Jn);this.renderTargets=[new an(e,t),new an(e,t)],i.format=rs,i.minFilter=St,i.magFilter=St,this.renderTargets.forEach(n=>{n.depthTexture=i.clone(),n.texture.minFilter=St,n.texture.magFilter=St,n.texture.generateMipmaps=!1,n.texture.format=ui,n.stencilBuffer=!0,n.depthBuffer=!0})}async createParticles(){const{width:e,height:t}=this.renderer.domElement,i=await Ze.Loader.loadShader("rain/main.vert"),n=await Ze.Loader.loadShader("rain/main.frag");this.material=new Ei({uniforms:{soft:{value:mt.getVisualValue("softParticles")},screenSize:{value:new De(e,t)},color:{value:new ze(Ct.RAIN)},ratio:{value:t/du},near:{value:Ut.near},far:{value:Ut.far},dropSize:{value:3},diffuse:{value:null},depth:{value:null}},blending:ol,fragmentShader:n,vertexShader:i,glslVersion:Hs,transparent:!0,depthWrite:!1});const r=this.material.uniforms;this.drops=new Cd(this.geometry,this.material),this.renderTargets&&(r.depth.value=this.renderTargets[0].depthTexture),Promise.all(Le.Level.rain.map(Ze.Loader.loadTexture.bind(Ze.Loader))).then(o=>r.diffuse.value=o),this.drops.frustumCulled=!1,this.drops.renderOrder=2,this.scene.add(this.drops)}createWorkerLoop(){this.worker?.add("Rain::UpdateParticles",e=>this.updateParticleGeometry(e.data),{minCoords:this.minCoords,maxCoords:this.maxCoords}),this.worker?.post("Rain::UpdateParticles",{camera:Ut.position,delta:this.delta})}update(e){if(this.delta=e,!this.worker&&this.updateParticles(),this.renderTargets){const t=this.renderTargets[0];this.material.uniforms.depth.value=t.depthTexture,this.material.uniforms.near.value=Ut.near,this.material.uniforms.far.value=Ut.far,this.renderer.setRenderTarget(this.renderTargets[1]),this.renderer.render(this.scene,Ut),this.renderTargets[0]=this.renderTargets[1],this.renderTargets[1]=t,this.renderer.setRenderTarget(null)}}updateParticles(){const e=this.minCoords,t=this.maxCoords;this.updateParticleGeometry(Ud({camera:Ut.position,minCoords:e,maxCoords:t,delta:this.delta}))}updateParticleGeometry(e){this.geometry.setAttribute("position",new qe(e[0],3)),this.geometry.setAttribute("angle",new qe(e[1],1)),this.geometry.setAttribute("alpha",new qe(e[2],1)),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.angle.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.worker?.post("Rain::UpdateParticles",{camera:Ut.position,delta:this.delta})}resize(e,t){this.material&&(this.material.uniforms.ratio.value=t/du,this.material.uniforms.screenSize.value.set(e,t)),this.renderTargets?.forEach(i=>{i.depthTexture.needsUpdate=!0,i.texture.needsUpdate=!0,i.setSize(e,t)})}dispose(){if(this.material){const e=this.material.uniforms.diffuse;this.material.uniforms.depth.value?.dispose(),e.value?.forEach(i=>i.dispose())}this.worker?.remove("Rain::UpdateParticles"),this.renderTargets?.forEach(e=>{e.depthTexture.dispose(),e.texture.dispose(),e.dispose()}),this.minCoords.splice(0),this.maxCoords.splice(0),this.material?.dispose(),this.geometry.dispose(),this.drops?.clear(),this.delta=0}}class sc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new sc(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class HM extends sc{constructor(e){super(Ct.FOG,Le.Level.fogDensity*(+!e*4+1)),this.volumetric=e,this.shaders=[],this.materials=0,this.time=0,this.volumetric&&(this.loadShaders(),mt.getVisualValue("volumetricFog")&&Ze.Loader.loadTexture(Le.Level.fog).then(t=>this.noise=t))}async loadShaders(){const e=await Ze.Loader.loadShader("fog/pars.frag"),t=await Ze.Loader.loadShader("fog/pars.vert"),i=await Ze.Loader.loadShader("fog/main.frag"),n=await Ze.Loader.loadShader("fog/main.vert");Fe.fog_pars_fragment=e,Fe.fog_pars_vertex=t,Fe.fog_fragment=i,Fe.fog_vertex=n}setShaderUniforms(e){e.uniforms.noise={value:this.noise},e.uniforms.fogTime={value:0},this.shaders.push(e),this.materials=this.shaders.length}update(e){if(this.volumetric){this.time+=e*.025;for(let t=0;t<this.materials;t++)this.shaders[t].uniforms.fogTime.value=this.time}}dispose(){this.volumetric&&(this.shaders.splice(0),this.noise?.dispose(),this.materials=0)}get setUniforms(){return this.setShaderUniforms.bind(this)}}class Ge{constructor(e,t,i){this.objects=[],this.portals=new kM,this.clouds=new en,this.scene=new Rx,this.physicalLights=mt.getVisualValue("physicalLights");const n=mt.getVisualValue("raindrops");this.renderer=new Ax({powerPreference:"high-performance",preserveDrawingBuffer:n,antialias:!0,canvas:e}),ae.add("Level::RemoveObject",this.removeGameObject.bind(this)),ae.add("Level::AddObject",this.addGameObject.bind(this)),this.pmrem=new fl(this.renderer),this.createColliders(),this.createEnvironment(i),this.createRenderer(t)}createColliders(){const{position:e,height:t,sidewalkHeight:i}=Le.Level;lt.createGround(Ge.minCoords,Ge.maxCoords),lt.createBounds({borders:Ge.bounds,y:e.y,height:t},{borders:Le.Level.sidewalk,y:i*.5,height:i})}async createEnvironment(e){const t=mt.getVisualValue("fog"),i=mt.getVisualValue("raining"),n=mt.getVisualValue("lighting"),r=t&&mt.getVisualValue("volumetricFog"),o=await this.createSkybox(Le.Level.skybox),a=await this.loadLevel(Le.Level.model);a.position.copy(Le.Level.position),a.scale.copy(Le.Level.scale),n&&this.scene.add(this.clouds.flash),i&&(this.rain=new VM(this.renderer,this.scene,e)),t?(this.fog=new HM(r),this.scene.fog=this.fog,this.scene.background=new ze(Ct.FOG),r&&this.portals.setFogUniforms(this.fog.setUniforms)):this.clouds.sky&&this.scene.add(this.clouds.sky),this.createLights(),a.traverse(c=>{const h=c,u=h.material;h.isMesh&&(u.opacity=1,u.alphaTest=1,u.side=wi,u.envMap=o,h.renderOrder=1,this.objects.push(h),h.receiveShadow=!0,this.csm?.setupMaterial(u),this.fog&&r&&(u.onBeforeCompile=this.fog.setUniforms))});const l=this.getSceneEnvMap();ae.dispatch("Level::EnvMap",l)}async loadLevel(e){const t=await Ze.Loader.loadGLTF(e);return this.scene.add(t.scene),t.scene}async createSkybox(e){const t=await Ze.Loader.loadCubeTexture(e);return t.colorSpace=Ne,mt.getVisualValue("fog")||(this.scene.background=t),this.pmrem.compileCubemapShader(),this.pmrem.fromCubemap(t).texture}createLights(){const t=.25+ +!this.physicalLights*.1,i=new U(.925,-1.875,-1).normalize();this.scene.add(new Tx(Ct.WHITE,.2)),this.csm=new BM({mode:"logarithmic",maxFar:Ut.far*10,lightFar:Ut.far,lightDirection:i,lightIntensity:t,camera:Ut,parent:this.scene,cascades:4}),this.csm.lights.forEach(n=>n.color.set(Ct.MOON)),this.csm.fade=!0}getSceneEnvMap(){return this.pmrem.fromScene(this.scene,0,Ut.near,Ut.far).texture}createRenderer(e){const t=+!this.physicalLights*.25+.25;this.renderer.debug.checkShaderErrors=!1,this.renderer.useLegacyLights=this.physicalLights,this.renderer.toneMapping=Tu,this.renderer.outputColorSpace=Ne,this.renderer.shadowMap.type=bu,this.renderer.setClearColor(Ct.BLACK,0),this.renderer.toneMappingExposure=t,this.renderer.setPixelRatio(e),this.renderer.shadowMap.enabled=!0}removeGameObject(e){const t=e.data;this.scene.remove(t)}addGameObject(e){const t=e.data;this.scene.add(t)}render(e){this.renderer.render(this.scene,Ut),this.portals.update(e),this.rain?.update(e),this.fog?.update(e),this.clouds.update(),this.csm?.update()}resize(e,t){this.renderer.setSize(e,t,!1),this.rain?.resize(e,t),this.csm?.updateFrustums()}outOfBounds(e){return this.portals.portalPassed(e)&&this.portals.playerPosition||null}dispose(){for(this.fog?.dispose(),this.csm?.dispose(),this.rain?.dispose(),this.pmrem.dispose(),this.clouds.dispose(),this.portals.dispose(),this.renderer.dispose(),this.csm?.lights.forEach(e=>e.dispose()),ae.remove("Level::AddObject"),ae.remove("Level::RemoveObject");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.background instanceof Bl&&this.scene.background.dispose()}static get maxCoords(){return[Vo(Ge.bounds.map(e=>e[0])),Vo(Ge.bounds.map(e=>e[1]))]}static get minCoords(){return[ko(Ge.bounds.map(e=>e[0])),ko(Ge.bounds.map(e=>e[1]))]}static get portals(){return Le.Level.portals}static get bounds(){return Le.Level.bounds}static get center(){return new U((Ge.maxCoords[0]+Ge.minCoords[0])/2,0,(Ge.maxCoords[1]+Ge.minCoords[1])/2)}static get size(){return new De(Ge.maxCoords[0]-Ge.minCoords[0],Ge.maxCoords[1]-Ge.minCoords[1])}set pause(e){this.clouds.pause=e}get walls(){return this.objects}}class en{constructor(){this.count=mt.getVisualValue("clouds"),this.staticClouds=!mt.getVisualValue("dynamicClouds"),this.isLighting=mt.getVisualValue("lighting"),this.useFog=mt.getVisualValue("fog"),this.onShowLighting=this.showLighting.bind(this),this.onHideLighting=this.hideLighting.bind(this),this.rotation=new Bi(et.d2,0,0),this.matrix=new it,this.paused=!0,this.isLighting&&this.createLighting(),this.createClouds()}createLighting(){const e=+(!this.useFog&&mt.getVisualValue("physicalLights"))+1;this.lighting=new Ou(Ct.BLUE,10,en.height,e),this.lighting.position.set(0,en.height,0),this.lighting.castShadow=!0,this.lighting.power=0}startLighting(){this.timeout=setTimeout(this.onShowLighting,1e3*(Math.random()*15+15))}showLighting(){this.updateLightingPosition(),this.lighting.power=100+Math.random()*150,setTimeout(this.onHideLighting,Math.random()*400+100),ae.dispatch("SFX::Thunder",this.lighting.position,!0)}updateLightingPosition(){this.clouds?(this.clouds.getMatrixAt(Ol(0,this.count-1),this.matrix),this.lighting.position.setFromMatrixPosition(this.matrix)):this.lighting.position.set(Xt(Ge.minCoords[0],Ge.maxCoords[0]),en.height/Le.Level.height,Xt(Ge.minCoords[1],Ge.maxCoords[1])),this.lighting.position.y-=Math.random()*(this.lighting.position.y/4)}hideLighting(){!this.paused&&this.startLighting(),this.lighting.power=0}async createClouds(){if(!this.count||!this.isLighting&&this.useFog)return;const e=new Fl(en.height,16,16,0,Math.PI);e.rotateX(-et.d2);const t=new U,i=new kt;this.clouds=new zp(new Yo(en.height,en.height),new Ep({transparent:!0,depthWrite:!1,opacity:.25}),this.count);const n=new Sf(new ht(e.toNonIndexed())).build();for(let r=0;r<this.count;r++)n.sample(t),i.position.copy(t),i.lookAt($t.DOWN),i.updateMatrix(),this.clouds.setMatrixAt(r,i.matrix);this.clouds.position.copy(Ge.center),this.clouds.instanceMatrix.needsUpdate=!0,this.clouds.material.map=await Ze.Loader.loadTexture(Le.Level.cloud)}update(){if(!(this.staticClouds||!this.clouds)){for(let e=0;e<this.count;e++){const t=e%2*2-1;this.clouds.getMatrixAt(e,this.matrix);const i=this.matrix.clone();this.rotation.setFromRotationMatrix(i),this.rotation.z+=Math.random()*t*.002,this.matrix.makeRotationFromEuler(this.rotation),this.matrix.copyPosition(i),this.clouds.setMatrixAt(e,this.matrix)}this.clouds.instanceMatrix.needsUpdate=!0}}dispose(){const e=this.clouds?.material;clearTimeout(this.timeout),e?.map?.dispose(),this.lighting?.dispose(),this.clouds?.dispose(),e?.dispose()}static get height(){return Math.max(Ge.size.x,Ge.size.y)}set pause(e){(this.paused=e)?clearTimeout(this.timeout):this.isLighting&&this.startLighting()}get sky(){return this.clouds}get flash(){return this.lighting}}let bn=[];const Ir=new Ao,Tl=new U;let Rl=0;Ir.addPoint(0,0);Ir.addPoint(.5,0);Ir.addPoint(.8,.5);Ir.addPoint(1,.5);const Ud=s=>{const{camera:e,delta:t}=s;return Tl.copy(e),Rl+=t,GM(s),WM(t),XM()},GM=s=>{const{minCoords:e,maxCoords:t}=s,i=Rl*100|0;Rl-=i/100;const n=i*50;for(let r=0;r<n;r++){const o=Math.random(),a=5.25-o*1.5,l=Math.random()*.1,c=Math.random()*25+50,h=-1+ +(Math.random()<.5)*2;bn.push({velocity:new U(0,-c,0),position:new U(Xt(e[0],t[0]),en.height-o*50,Xt(e[1],t[1])),rotation:h*l,maxLife:a,alpha:0,life:a})}},WM=s=>{for(let e=0;e<bn.length;e++){const t=bn[e];if((t.life-=s)<=0)continue;const i=1-t.life/t.maxLife,n=t.velocity.clone(),{x:r,y:o,z:a}=n;t.position.add(n.multiplyScalar(s)),t.alpha=Ir.getValue(i),n.multiplyScalar(.1).set(Math.sign(r)*Math.min(Math.abs(n.x),Math.abs(r)),Math.sign(o)*Math.min(Math.abs(n.y),Math.abs(o)),Math.sign(a)*Math.min(Math.abs(n.z),Math.abs(a))),t.velocity.sub(n)}bn=bn.filter(e=>e.life>0).sort((e,t)=>{const i=Tl.distanceToSquared(e.position),n=Tl.distanceToSquared(t.position);return i>n?-1:i<n?1:0})},XM=()=>{const s=[],e=[],t=[];for(let i=0,n=bn.length;i<n;i++){const{x:r,y:o,z:a}=bn[i].position,{rotation:l,alpha:c}=bn[i];s.push(r,o,a),t.push(l),e.push(c)}return[s,t,e]};class jM{constructor(e,t,i){this.worker=i,this.enemyKills=0,this.clock=new Ku,this.player=new Ad,this.loop=this.update.bind(this),this.controls=new Yt(this.player),this.onSceneLoad=this.onLoad.bind(this),this.onPlayerHit=this.playerHit.bind(this),this.level=new Ge(e,t,i),ae.dispatch("Game::LoopInit",null,!0),this.addEventListeners()}addEventListeners(){ae.add("Level::EnvMap",this.onSceneLoad),ae.add("Enemy::Attack",this.onPlayerHit),this.worker?.add("Level::GetRandomCoord",e=>{Eo.addLevelCoords(e.data)?ae.dispatch("Loading::Complete",null,!0):this.worker?.post("Level::GetRandomCoord")},{minCoords:Ge.minCoords,maxCoords:Ge.maxCoords,portals:Ge.portals,bounds:Ge.bounds}),ae.add("Enemy::Active",e=>{!e.data&&this.onEnemyKill(),this.player.setTargets(this.enemies.colliders)}),ae.add("Player::PickRifle",()=>this.player.pickRifle()),ae.add("Player::Death",e=>this.enemies.playerDead=e.data)}async onLoad(e){const t=e.data;this.player.loadCharacter(t).then(()=>{lt.setCharacter(this.player.collider),this.player.setPistol(this.level.walls,this.pistol),this.enemies=new SM(t),this.player.addRifle(this.rifle),this.createRandomCoords(),ii.add(this.loop)}),this.pistol=new Pd(t),this.rifle=new Id(t)}start(){}playerHit(e){const{position:t,damage:i}=e.data,{position:n,rotation:r}=this.player.location,o=this.enemies.getHitDirection(t,n,r);this.player.hit(o,i)}createRandomCoords(){if(this.worker)return this.worker.post("Level::GetRandomCoord");Eo.fillRandomLevelCoords(),ae.dispatch("Loading::Complete",null,!0)}onEnemyKill(){const{x:e,z:t}=this.player.location.position;this.enemies.spawnMultiple(e,t),!(++this.enemyKills%Le.Gameplay.rifleSpawn)&&this.spawnRifle(e,t)}spawnRifle(e,t){!this.rifle.onStage&&this.rifle.spawn(Eo.getRandomLevelCoords(e,t))}update(){const e=Math.min(this.clock.getDelta(),.1),t=this.updateCharactersLocation(e);this.player.alive&&lt.update(e),this.rifle.update(t),this.level.render(e),be.updateState()}updateCharactersLocation(e){this.player.update(e);const{location:t}=this.player,i=this.level.outOfBounds(t.position),n=this.enemies.update(e,t.position);return i&&this.player.teleport(i),ae.dispatch("Characters::Location",{player:t,enemies:n},!0),i??t.position}resize(e,t){this.level.resize(e,t),this.pistol.resize(t),this.rifle.resize(t),be.resize()}removeEventListeners(){this.worker?.remove("Level::GetRandomCoord"),ae.remove("Player::PickRifle"),ae.remove("Player::Death"),ae.remove("Level::EnvMap"),ae.remove("Enemy::Active"),ae.remove("Enemy::Attack")}dispose(){this.removeEventListeners(),this.controls.dispose(),this.enemies.dispose(),this.player.dispose(),this.pistol.dispose(),this.rifle.dispose(),this.level.dispose(),lt.dispose(),be.dispose(),ii.dispose()}set inputs(e){this.controls.pause=e}set pause(e){this.level.pause=e,lt.pause=e,ii.pause=e}}class qM{takeControl(e){const t=e.element;ae.add("Game::SettingsInit",()=>this.createMainLoop(t,e.pixelRatio)),this.resetDOMElements(),new mt}createMainLoop(e,t){this.loop=new jM(e,t),ae.remove("Game::SettingsInit")}resetDOMElements(){const e=self.DedicatedWorkerGlobalScope;self.HTMLCollection=e,self.SVGElement=e,self.NodeList=e,self.document=null,self.window=self}dispatch(e){Sl.dispatchEvent(e)}resize(e){const{width:t,height:i}=e;this.loop.resize(t,i)}dispose(){this.loop.dispose()}start(){this.loop.start()}set inputs(e){this.loop.inputs=e}set pause(e){this.loop.pause=e}}const Vn=new qM,YM=(s,e)=>{switch(s){case"EventsTarget::Dispatch":return Vn.dispatch(e);case"Rain::UpdateParticles":return Ud(e);case"Level::GetRandomCoord":return Ed(e);case"Offscreen::Transfer":return Vn.takeControl(e);case"Game::Resize":return Vn.resize(e);case"Game::Inputs":{const{disabled:t}=e;return Vn.inputs=t}case"Game::Pause":{const{paused:t}=e;return Vn.pause=t}case"Game::Dispose":return Vn.dispose();case"Game::Start":return Vn.start()}return e};self.onmessage=s=>{const{event:e,params:t}=s.data,i=YM(e,t);self.postMessage({name:e,response:i})};self.onerror=s=>console.error(s);const $M=self;class fu{constructor(e){this.worker=e}add(e,t){this.worker.add(e,t)}static dispatch(e,t=null){$M.postMessage({name:e,response:t})}remove(e){this.worker.remove(e)}dispose(){this.worker.clear()}}class KM extends CustomEvent{constructor(){super(...arguments),this.data=null}}class ZM extends _f{createWorkerEvents(e){this.workerEvents=new fu(e)}add(e,t,i=!1){Le.offscreen&&i?this.workerEvents?.add(e,t):super.add(e,t)}dispatch(e,t=null,i=!1){Le.worker&&i?fu.dispatch(e,t):super.dispatch(e,t)}remove(e,t=!1){Le.offscreen&&t?this.workerEvents?.remove(e):super.remove(e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}const ae=new ZM,ge=s=>document.getElementById(s);class JM{constructor(){this.scene=new Zd,this.renderer=new Jd({antialias:!0}),this.clock=new Qd,this.player=new Ad,this.controls=new Yt(this.player),this.pointer=new Cx,this.audio=new gf,this.pistol=new Pd(new aa),this.rifle=new Id(new aa),this.paused=!0,this.ready=!1,this.shots=0,this.uiTimer=0,this.hurt=0,this.hit=0,this.noticeUntil=0,this.redrawUntil=0,this.forward=new ie,this.doorColliders=new Map,this.shake=0,this.playerSpeed=0,this.footDistance=0,this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,this.playerShadow=Wo(1.7,2,.75),this.tour="",this.forceFrame=!0,this.scene.background=new _u("#b5cbc1"),this.scene.fog=new ef("#b5cbc1",55,145),lf(this.scene),this.scene.add(new tf("#b6d9e1","#31453d",.85));const e=new vu("#ffe5b1",2.6);e.position.set(-27,36,23),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),Object.assign(e.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:120}),e.shadow.bias=-2e-4,e.shadow.normalBias=.055,e.shadow.radius=2,this.scene.add(e),this.scene.add(this.playerShadow);const t=df(this.scene);this.jungle=t.jungle,this.researchView=t.research,this.match=new af(t.blockers,i=>this.onMatchEvent(i)),lt.createGround([-48,-48],[48,48]);for(const i of t.blockers)i.shape!=="ramp"&&lt.addArenaObstacle(i.x,i.z,i.w,i.h,i.d);for(const i of["service","paddock"]){const n=this.match.research.doors[i].block;this.doorColliders.set(i,lt.addArenaObstacle(n.x,n.z,n.w,n.h,n.d))}for(const i of this.researchView.meshColliders)lt.addArenaMesh(i);lt.createBounds({height:8,y:4,borders:[[-48,48],[48,48],[48,-48],[-48,-48]]}),this.view=new ff(this.scene),this.renderer.outputColorSpace=is,this.renderer.toneMapping=nf,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.type=sf,document.body.appendChild(this.renderer.domElement),be.object.fov=58,this.setQuality("standard"),this.resize(),ae.add("Level::AddObject",i=>this.scene.add(i.data)),ae.add("Level::RemoveObject",i=>this.scene.remove(i.data)),ae.add("Game::Pause",()=>this.pause());for(const i of["Hit::Head","Hit::Body","Hit::Leg"])ae.add(i,n=>{const{enemy:r,damage:o,headshot:a}=n.data;this.paused||this.match.hit(r,o,a)});ae.add("Combat::Shot",i=>{if(this.paused)return;const n=i.data,r=this.player.location.position;this.shots++,this.match.noise(r.x,r.z,n.weapon==="rifle"?18:48);const o=r.clone();o.y=this.floorHeight()+1.35,this.view.tracer(o,new ie().fromArray(n.point)),this.audio.play("shot",n.weapon==="rifle")}),ae.add("SFX::Weapon",i=>{const n=i.data;(n.sfx==="reload"||n.sfx==="empty")&&this.audio.play(n.sfx)}),document.addEventListener("keydown",i=>this.key(i)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.pause()}),this.renderer.domElement.addEventListener("click",()=>{this.ready&&this.paused&&!this.tour&&!this.match.result&&this.resume()}),window.addEventListener("resize",()=>this.resize()),this.load(t.walls)}async load(e){await Promise.all([this.player.loadCharacter(new aa),this.view.load(this.match)]),lt.setCharacter(this.player.collider),this.player.setPistol(e,this.pistol),this.player.addRifle(this.rifle),lt.pause=!1,this.ready=!0,this.forceFrame=!0,this.redrawUntil=performance.now()+1200,this.view.update(this.match,0,be.object),this.player.setTargets(this.view.targets),this.clock.getDelta(),ii.add(()=>this.render()),ii.pause=!1,ge("start").removeAttribute("disabled"),ge("tour").removeAttribute("disabled"),ge("load").textContent="園區已準備好",document.body.dataset.ready="true",document.body.dataset.artVersion="DINO-ART-04",document.body.dataset.gameVersion="DINO-CREATURES-06",this.updateHUD()}key(e){if(e.code==="Escape"){this.tour?this.endTour():this.pause();return}if(!(this.paused||this.match.result||e.repeat)){if(e.code==="KeyE"){const t=this.match.interact();t&&!t.denied&&t.type!=="facility"&&this.player.collectSupply(t.type)}e.code==="KeyQ"&&(be.object.getWorldDirection(this.forward),this.match.throwLure(this.forward.x,this.forward.z)),e.code==="Digit1"&&this.player.changeWeaponTo(!1),e.code==="Digit2"&&this.player.changeWeaponTo(!0)}}resume(){if(this.tour&&this.endTour(),!this.ready||this.match.result)return;const e=!this.match.started;this.pointer.requestPointerLock(),this.audio.start(),this.paused=!1,this.controls.pause=!1,this.clock.getDelta(),this.match.start(),this.audio.update(be.object,this.match.elapsed),e&&this.audio.creature("brachio",this.match.actors[9]),ge("intro").hidden=!0,ge("pauseLayer").hidden=!0,document.body.dataset.started="true"}pause(){!this.ready||!this.match.started||this.match.result||(this.paused=!0,this.controls.pause=!0,this.audio.pause(),this.pointer.exitPointerLock(),this.forceFrame=!0,this.redrawUntil=performance.now()+1e3,ge("pauseSettings").appendChild(ge("gameSettings")),ge("pauseLayer").hidden=!1)}setQuality(e){const t=e==="standard";this.renderer.setPixelRatio(t?Math.min(devicePixelRatio,1.25):.75),this.renderer.shadowMap.enabled=t,this.forceFrame=!0,this.redrawUntil=performance.now()+1200}mute(){return this.audio.setMute()}volume(e){this.audio.setVolume(e)}motion(){return this.reducedMotion=!this.reducedMotion,this.reducedMotion}get motionReduced(){return this.reducedMotion}showTour(e="entry"){if(!this.ready||this.match.started)return;const t=be.object;this.tourSaved||(this.tourSaved={parent:t.parent,position:t.position.clone(),rotation:t.rotation.clone()}),this.scene.attach(t),this.player.collider.visible=!1,this.playerShadow.visible=!1;const i={entry:[[2.5,3.1,30],[0,5,2]],rex:[[21,2.2,-43],[32,4.8,-36]],jungle:[[-33,1.9,7],[-31,3,-15]],research:[[-8,8.5,19],[-19,2,-1]]},n=i[e]||i.entry;t.position.fromArray(n[0]),t.lookAt(new ie().fromArray(n[1])),t.updateMatrixWorld(!0),this.tour=e,document.body.dataset.tour=e,ge("intro").hidden=!0,ge("tourLayer").hidden=!1,this.redrawUntil=1/0,document.querySelectorAll("[data-view]").forEach(r=>{r.classList.toggle("selected",r.dataset.view===e),r.setAttribute("aria-pressed",String(r.dataset.view===e))}),ge("tourCaption").textContent=e==="entry"?"入口廣場 · 破損閘門與巡邏車":e==="rex"?"獵食者圍場 · 暴龍近景":e==="research"?"研究站 · 雙路線、防護閘與高台":"林緣步道 · 多層植被與化石區"}endTour(){if(!this.tourSaved)return;const e=be.object,t=this.tourSaved;t.parent.add(e),e.position.copy(t.position),e.rotation.copy(t.rotation),e.updateMatrixWorld(!0),this.player.collider.visible=!0,this.playerShadow.visible=!0,this.tour="",this.tourSaved=void 0,delete document.body.dataset.tour,ge("tourLayer").hidden=!0,ge("intro").hidden=!1,this.view.update(this.match,0,e),this.updateHUD(),this.forceFrame=!0,this.redrawUntil=performance.now()+1200,this.clock.getDelta()}onMatchEvent(e){if(e.type==="topology"){const t=this.doorColliders.get(e.id);t&&lt.setArenaObstacleEnabled(t,e.closed),this.researchView.syncDoor(e.id,e.closed),this.forceFrame=!0}if(e.type==="facility"&&this.audio.facility(e.sound,e.position),e.type==="researchReward"&&this.audio.facility("uplink",e.position),e.type==="facilityBreak"&&(this.researchView.breakDoor(e.id,this.match.elapsed),this.audio.facility("breach",e.position),this.shake=Math.max(this.shake,.8)),e.type==="barricadeWarning"&&(this.audio.creature("rex",e.actor,!0),this.match.announce("暴龍正撞擊防護閘！準備從西側步道撤離。","danger")),e.type==="notice"&&(ge("notice").textContent=e.text,ge("notice").dataset.tone=e.tone,this.noticeUntil=this.match.elapsed+5),e.type==="shot"&&(this.view?.tracer(new ie(e.actor.x,1.4,e.actor.z),new ie(e.point.x,1.1+(e.point.y||0),e.point.z),"#ffc075"),Math.hypot(e.actor.x-this.match.player.x,e.actor.z-this.match.player.z)<50&&this.audio.positionalShot(e.actor,e.actor.weapon==="rifle")),e.type==="playerHit"&&(this.hurt=.35,this.audio.play("hurt")),e.type==="hit"&&(this.view.impact(e.target),e.source===-1&&(this.hit=.25,ge("hit").textContent=e.head?"要害 "+Math.round(e.damage):String(Math.round(e.damage)),ge("hit").classList.toggle("critical",e.head),this.audio.play("hit"))),e.type==="loot"&&this.audio.play("loot"),e.type==="lure"&&this.audio.play("lure"),e.type==="roar"||e.type==="threat"||e.type==="attackWarning"){const t=e.actor;this.audio.creature(t.kind,{x:t.x,y:ft[t.kind]?.headY||2,z:t.z},e.type!=="roar"),e.type==="attackWarning"&&e.target===-1&&(ge("notice").textContent=t.kind==="trike"?"三角龍低頭蓄力！側向閃開黃色衝撞路線。":t.kind==="rex"?"暴龍張口了！立刻拉開距離。":"迅猛龍準備撲咬！側移並利用掩體。",ge("notice").dataset.tone="danger",this.noticeUntil=this.match.elapsed+2.2)}if(e.type==="footstep"||e.type==="chargeImpact"){const t=e.actor,i=Math.hypot(t.x-this.match.player.x,t.z-this.match.player.z);i<65&&this.audio.step(t.kind,t),i<35&&this.view?.footfall(t),t.kind!=="raptor"&&i<28&&(this.shake=Math.min(1.8,this.shake+(1-i/28)*(t.kind==="rex"?1.1:t.kind==="brachio"?.85:.6)))}e.type==="death"&&this.player.setTargets(this.view.targets.filter(t=>t.userData.enemy!==e.target.id)),e.type==="end"&&(this.paused=!0,this.controls.pause=!0,this.audio.pause(),this.pointer.exitPointerLock(),this.forceFrame=!0,this.redrawUntil=performance.now()+1e3,ge("pauseLayer").hidden=!0,ge("outcome").hidden=!1,ge("resultTitle").textContent=e.won?"最後生還者":"這次，園區贏了",ge("resultDetail").textContent=`擊倒對手 ${this.match.kills} 人 · 獵殺恐龍 ${this.match.dinoKills} 隻 · 存活 ${Math.floor(this.match.elapsed)} 秒`,document.body.dataset.result=e.won?"win":"lose")}render(){const e=Math.min(this.clock.getDelta(),.1);if(this.paused&&!this.forceFrame&&performance.now()>this.redrawUntil)return;if(this.forceFrame=!1,this.tour&&(this.view.update(this.match,e,be.object,!0),this.jungle.update(performance.now()/1e3)),!this.paused&&!this.match.result){const r={x:this.match.player.x,z:this.match.player.z},o=Math.max(1,Math.ceil(e/.025));for(let h=0;h<o;h++)lt.update(e/o),this.player.update(e/o);const a=this.player.location.position;this.match.update(e,{x:a.x,y:this.floorHeight(),z:a.z}),this.view.update(this.match,e,be.object),this.player.setTargets(this.view.targets),this.hurt=Math.max(0,this.hurt-e),this.hit=Math.max(0,this.hit-e);const l=Math.hypot(this.match.player.x-r.x,this.match.player.z-r.z);this.playerSpeed=qn.damp(this.playerSpeed,Math.min(12,l/Math.max(.001,e)),6,e),this.footDistance+=l,this.footDistance>1.4&&(this.footDistance%=1.4,this.audio.playerStep(this.match.player.y>1?"metal":Math.abs(this.match.player.x)<6?"road":"leaves")),this.jungle.update(this.match.elapsed),this.shake=Math.max(0,this.shake-e*2);const c=this.player.weaponState.aiming?53:this.playerSpeed>6&&!this.reducedMotion?66:58;be.object.fov=qn.damp(be.object.fov,c,5,e),be.object.updateProjectionMatrix()}this.researchView.update(this.match.research.snapshot(this.match.elapsed),this.match.elapsed),this.playerShadow.position.y=this.floorHeight()+.055,this.playerShadow.position.x=this.match.player.x,this.playerShadow.position.z=this.match.player.z,this.scene.updateMatrixWorld(!0),be.updateState(),this.paused||this.audio.update(be.object,this.match.elapsed),this.uiTimer+=e,this.uiTimer>.06&&(this.updateHUD(),this.uiTimer=0);const t=be.object,i=!this.paused&&!this.reducedMotion?this.shake:0,n=new ie(Math.sin(this.match.elapsed*57)*i*.018,Math.sin(this.match.elapsed*43)*i*.028,0);t.position.add(n),t.updateWorldMatrix(!0,!1),this.renderer.render(this.scene,t),t.position.sub(n),t.updateWorldMatrix(!0,!1)}updateHUD(){const e=this.match,t=this.player.weaponState,i=this.player.location.position;ge("health").textContent=String(Math.ceil(e.health)),ge("healthFill").style.width=e.health+"%",ge("remaining").textContent=String(e.remaining+(e.health>0?1:0)),ge("kills").textContent=String(e.kills),ge("clock").textContent=`${Math.floor(e.elapsed/60)}:${String(Math.floor(e.elapsed%60)).padStart(2,"0")}`,ge("weaponName").textContent=t.name,ge("ammo").textContent=t.reloading?"↻":String(t.loaded),ge("reserve").textContent="/ "+t.reserve,ge("weapon2").classList.toggle("locked",!t.hasRifle),ge("weapon1").classList.toggle("selected",t.kind==="pistol"),ge("weapon2").classList.toggle("selected",t.kind==="rifle"),ge("reloadBar").style.width=(t.reloading?t.progress*100:0)+"%",ge("reloadText").hidden=!t.reloading&&t.loaded>0,ge("reloadText").textContent=t.reloading?"換彈中…":"按 R 換彈",ge("lures").textContent=String(e.lures),ge("lureSlot").classList.toggle("cooldown",e.lureCooldown>0||e.lures<=0),ge("lureTime").textContent=e.lureCooldown>0?e.lureCooldown.toFixed(1)+"s":"投向準星",ge("heatFill").style.width=e.heat+"%",ge("heatLabel").textContent=e.rexAwake?"暴龍已入場":e.heat>55?"警戒升高":"槍聲會吸引恐龍",ge("zoneLabel").textContent=e.elapsed<55?"禁區收縮 "+Math.ceil(55-e.elapsed)+"s":"禁區半徑 "+Math.round(e.radius)+"m",ge("damage").classList.toggle("flash",this.hurt>0),ge("hit").hidden=this.hit<=0,ge("aim").classList.toggle("confirmed",this.hit>0),ge("notice").hidden=!e.started||e.elapsed>this.noticeUntil||e.elapsed<5;const n=e.research.snapshot(e.elapsed),r=n.phase;ge("objective").textContent=e.loot[0].opened?r==="idle"?"研究站：啟動高價值補給，警報會引來追兵":r==="uploading"?"補給傳輸中：利用高台與電閘爭奪補給":r==="ready"?"金色補給已解鎖，搶在對手之前領取":"補給已被領取，利用地形活到最後":"前方藍箱：取得消音衝鋒槍",ge("facilityPhase").textContent=r==="idle"?"等待啟動":r==="uploading"?`傳輸 ${Math.floor(n.progress/8*100)}%`:r==="ready"?"補給可領取":n.claimedBy===-1?"你已取得補給":"對手取得補給",ge("facilityFill").style.width=(r==="idle"?0:r==="uploading"?n.progress/8*100:100)+"%",ge("facilityHint").textContent=e.player.y>2.3?"高台能避迅猛龍，暴龍仍能咬到。":n.breachIn!==null?`圍欄過載 · ${Math.ceil(n.breachIn)} 秒後失守`:n.breached?"圍欄已破，留意暴龍方向。":"橘線走電閘捷徑，綠線繞西側步道。";const o=e.activeActors.filter(u=>u.kind!=="human"&&u.kind!=="brachio"&&(u.targetId===-1||u.kind==="rex"&&Math.hypot(u.x-i.x,u.z-i.z)<22)).sort((u,d)=>Math.hypot(u.x-i.x,u.z-i.z)-Math.hypot(d.x-i.x,d.z-i.z))[0];if(ge("threat").hidden=!o||this.paused,o){const u=be.object.matrixWorld.elements,d=o.x-i.x,p=o.z-i.z,_=Math.atan2(d*u[0]+p*u[2],-d*u[8]-p*u[10]),g=Math.abs(_)>2.3?"後方":_>.55?"右側":_<-.55?"左側":"前方";ge("threatArrow").style.transform=`rotate(${_}rad)`,ge("threatText").textContent=`${o.name} · ${g} ${Math.round(Math.hypot(d,p))}m`,ge("threat").dataset.state=o.state}const a=e.research.interaction(e.player),l=a||e.nearbyLoot;ge("interact").hidden=!l,ge("interactLabel").textContent=l?.label||"",ge("interactTitle").textContent=a?"操作設施":"開啟補給",ge("interact").dataset.disabled=String(a?.enabled===!1);const c=e.loot.filter(u=>!u.opened).sort((u,d)=>Math.hypot(u.x-i.x,u.z-i.z)-Math.hypot(d.x-i.x,d.z-i.z))[0],h=e.loot[0].opened&&r!=="claimed"?{...r==="ready"?we.reward:we.console,research:!0}:c;if(h){const u=new ie(h.x,1.7,h.z).project(be.object);ge("lootMarker").hidden=u.z>1||u.z<-1||Math.abs(u.x)>.92,ge("lootMarker").style.left=(u.x*.5+.5)*100+"%",ge("lootMarker").style.top=(-u.y*.5+.5)*100+"%",ge("lootMarker").textContent=`◇ ${h.research?"研究站":"補給"} ${Math.round(Math.hypot(h.x-i.x,h.z-i.z))}m`}ge("feed").replaceChildren(...e.events.filter(u=>e.elapsed-u.time<5&&u.tone==="danger").slice(0,2).map(u=>{const d=document.createElement("div");return d.textContent=u.text,d.dataset.tone=u.tone,d})),this.drawMap(),document.body.dataset.state=JSON.stringify({...e.snapshot(),obstacles:e.blocks,paused:this.paused,tour:this.tour,finished:!!e.result,shots:this.shots,weapon:t,motion:this.player.motionState,playerSpeed:this.playerSpeed,reducedMotion:this.reducedMotion,audio:this.audio.state,scene:this.jungle.counts,aimProbe:this.player.aimProbe,heads:this.view?.heads||[],camera:be.object.matrixWorld.elements,cameraFov:be.object.fov,cameraAspect:be.object.aspect})}drawMap(){const e=ge("minimap"),t=e.getContext("2d"),i=this.match;t.clearRect(0,0,200,200),t.fillStyle="#214b47",t.fillRect(0,0,200,200);const n=o=>100+o*2;t.fillStyle="#547b6c",t.fillRect(12,12,176,176),t.fillStyle="#a4b29b",t.fillRect(89,14,22,172),t.fillRect(14,79,172,14);for(const o of Zn.buildings)t.fillStyle="#e0c89c",t.fillRect(n(o.x)-o.w,n(o.z)-o.d,o.w*2,o.d*2);for(const[o,a]of[[we.fastRoute,"#e8b268"],[we.quietRoute,"#76cbbb"]])t.strokeStyle=a,t.lineWidth=1,t.beginPath(),o.forEach((l,c)=>c?t.lineTo(n(l.x),n(l.z)):t.moveTo(n(l.x),n(l.z))),t.stroke();const r=we.deck;t.fillStyle="#9bc8bd",t.fillRect(n(r.x)-r.w,n(r.z)-r.d,r.w*2,r.d*2);for(const o of["service","paddock"]){const a=i.research.doors[o],l=we[o];t.strokeStyle=a.broken?"#9a8270":a.closed?"#f29164":"#8be1c3",t.lineWidth=3,t.beginPath(),t.moveTo(n(l.x),n(l.z-l.d/2)),t.lineTo(n(l.x),n(l.z+l.d/2)),t.stroke()}t.fillStyle=i.research.phase==="ready"?"#ffdc83":"#b4d8c7",t.font="bold 12px sans-serif",t.fillText("◆",n(we.console.x)-5,n(we.console.z)+4),t.strokeStyle="#f5b66d",t.lineWidth=2,t.beginPath(),t.arc(100,100,i.radius*2,0,Math.PI*2),t.stroke();for(const o of i.loot)o.opened||(t.fillStyle=o.type==="weapon"?"#8ce7df":"#efcf8c",t.fillRect(n(o.x)-2,n(o.z)-2,4,4));for(const o of i.noises)o.until-i.elapsed>7&&(t.strokeStyle="#ed9c6699",t.beginPath(),t.arc(n(o.x),n(o.z),4+(9-(o.until-i.elapsed))*4,0,Math.PI*2),t.stroke());for(const o of i.activeActors)Math.hypot(o.x-i.player.x,o.z-i.player.z)<20&&Di(i.player,o,i.blocks)&&(t.fillStyle=o.kind==="human"?"#ffcc79":"#ed8d63",t.beginPath(),t.arc(n(o.x),n(o.z),o.kind==="rex"?5:2.5,0,Math.PI*2),t.fill());i.lure&&(t.strokeStyle="#ffe6a1",t.beginPath(),t.arc(n(i.lure.x),n(i.lure.z),5,0,Math.PI*2),t.stroke()),be.object.getWorldDirection(this.forward),t.save(),t.translate(n(i.player.x),n(i.player.z)),t.rotate(Math.atan2(this.forward.x,-this.forward.z)),t.fillStyle="#fff7d9",t.beginPath(),t.moveTo(0,-6),t.lineTo(-4,5),t.lineTo(4,5),t.closePath(),t.fill(),t.restore()}floorHeight(){const e=this.player.collider;return Math.max(0,e.position.y-e.userData.segment.distance()-e.userData.radius-.005)}resize(){this.renderer.setSize(innerWidth,innerHeight),be.object.aspect=innerWidth/innerHeight,be.resize(),this.pistol.resize(innerHeight),this.rifle.resize(innerHeight)}}let Ai;window.addEventListener("error",s=>{document.getElementById("load").textContent="載入失敗："+s.message,document.body.dataset.error=s.message});window.addEventListener("unhandledrejection",s=>{console.error(s.reason),document.getElementById("load").textContent="載入失敗："+String(s.reason),document.body.dataset.error=String(s.reason)});try{Ai=new JM}catch(s){throw document.getElementById("load").textContent=String(s),s}for(const s of["start","resume"])document.getElementById(s).onclick=()=>Ai.resume();document.getElementById("retry").onclick=()=>location.reload();document.getElementById("pauseButton").onclick=()=>{document.exitPointerLock(),ae.dispatch("Game::Pause")};ae.add("Weapon::Aim",s=>document.getElementById("aim").classList.toggle("target",!!s.data));ae.add("Player::Health",()=>{document.getElementById("damage").classList.add("flash"),setTimeout(()=>document.getElementById("damage").classList.remove("flash"),250)});document.getElementById("quality").onchange=s=>Ai.setQuality(s.target.value);document.getElementById("mute").onclick=()=>{document.getElementById("mute").textContent=Ai.mute()?"音效：關":"音效：開"};document.getElementById("volume").oninput=s=>Ai.volume(Number(s.target.value)/100);document.getElementById("motion").textContent=Ai.motionReduced?"震動：關":"震動：開";document.getElementById("motion").onclick=()=>{document.getElementById("motion").textContent=Ai.motion()?"震動：關":"震動：開"};document.addEventListener("keydown",s=>{s.code==="Escape"&&document.body.dataset.started==="true"&&(document.exitPointerLock(),ae.dispatch("Game::Pause"))});document.getElementById("tour").onclick=()=>{document.getElementById("tourQuality").value=document.getElementById("quality").value,Ai.showTour()};for(const s of document.querySelectorAll("[data-view]"))s.onclick=()=>Ai.showTour(s.dataset.view);document.getElementById("tourExit").onclick=()=>Ai.endTour();document.getElementById("tourQuality").onchange=s=>{const e=s.target.value;document.getElementById("quality").value=e,Ai.setQuality(e)};
