var Rt=Object.create;var S=Object.defineProperty,xt=Object.defineProperties,Tt=Object.getOwnPropertyDescriptor,It=Object.getOwnPropertyDescriptors,Ot=Object.getOwnPropertyNames,K=Object.getOwnPropertySymbols,Mt=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable;var B=(s,t,e)=>t in s?S(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,_=(s,t)=>{for(var e in t||(t={}))Q.call(t,e)&&B(s,e,t[e]);if(K)for(var e of K(t))Gt.call(t,e)&&B(s,e,t[e]);return s},Z=(s,t)=>xt(s,It(t)),Lt=s=>S(s,"__esModule",{value:!0});var qt=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Bt=(s,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ot(t))!Q.call(s,r)&&r!=="default"&&S(s,r,{get:()=>t[r],enumerable:!(e=Tt(t,r))||e.enumerable});return s},g=s=>Bt(Lt(S(s!=null?Rt(Mt(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);var n=(s,t,e)=>(B(s,typeof t!="symbol"?t+"":t,e),e);var nt=qt(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});var U=function(s,t){return U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},U(s,t)};function C(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=s}U(s,t),s.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var D,V=function(){function s(){}return s._xfnv1a=function(t){for(var e=2166136261,r=0;r<t.length;r++)e=Math.imul(e^t.charCodeAt(r),16777619);return function(){return e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,(e+=e<<5)>>>0}},s}(),Ct=function(s){function t(e){var r=s.call(this)||this;return r.a=t._xfnv1a(e)(),r}return C(t,s),t.prototype.next=function(){var e=this.a+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296},t}(V),Dt=function(s){function t(e){var r=s.call(this)||this,o=t._xfnv1a(e);return r.a=o(),r.b=o(),r.c=o(),r.d=o(),r}return C(t,s),t.prototype.next=function(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;var e=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,e=e+this.d|0,this.c=this.c+e|0,(e>>>0)/4294967296},t}(V),Vt=function(s){function t(e){var r=s.call(this)||this,o=t._xfnv1a(e);return r.a=o(),r.b=o(),r.c=o(),r.d=o(),r}return C(t,s),t.prototype.next=function(){var e=this.b<<9,r=5*this.a;return r=r<<7|9*(r>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=e,this.d=this.d<<11|this.d>>>21,(r>>>0)/4294967296},t}(V);E.PRNG=void 0,(D=E.PRNG||(E.PRNG={})).sfc32="sfc32",D.mulberry32="mulberry32",D.xoshiro128ss="xoshiro128ss";var jt=function(){function s(t,e){e===void 0&&(e=E.PRNG.sfc32),this.str=t,this.prng=e,this.generator=this._initializeGenerator()}return s.prototype.next=function(){return this.generator.next()},s.prototype._initializeGenerator=function(){if(function(e){return e===null}(t=this.str)||function(e){return e===void 0}(t))return this.wrap();var t;switch(this.prng){case"sfc32":return new Dt(this.str);case"mulberry32":return new Ct(this.str);case"xoshiro128ss":return new Vt(this.str);default:return this.wrap()}},s.prototype.wrap=function(){return{next:function(){return Math.random()}}},s}();E.default=jt});var lt=g(require("path")),ht=g(require("fs"));var N=g(require("path")),tt=[{flag:"-d",desc:"Indica que as sa\xEDdas de debug devem ser impressas.",process:s=>s.debug=!0,num:0},{flag:"-q",desc:'Entra no modo "quiet": roda todo o jogo e s\xF3 imprime o resultado final (sobrescreve o par\xE2metro de debug).',process:s=>{s.quiet=!0,s.debug=!1},num:0},{flag:"-i",desc:"Entra no modo iterativo. A cada rodada, o jogo espera o usu\xE1rio digitar <enter> para continuar.",process:s=>s.interactive=!0,num:0},{flag:"-m",desc:"Salva as mensagens enviadas para os bots, \xFAtil para debugar. Cada bot ter\xE1 seu arquivo com a extens\xE3o .in",process:s=>s.messages=!0,num:0},{flag:"-r",desc:"L\xEA o estado do jogo especificado em um arquivo, sobrescrevendo argumentos passados. Exemplo: -r game.state",process:(s,t,e)=>s.readfile=t[e+1],num:1},{flag:"-s",desc:"Indica uma semente para o gerador de n\xFAmero aleat\xF3rios. A semente deve ser um valor inteiro. Exemplo: -s 24652",process:(s,t,e)=>s.seed=parseInt(t[e+1]),num:1},{flag:"-t",desc:"Indica o tempo (em milisegundos) que um bot tem para responder com uma a\xE7\xE3o antes de dar timeout (default: 3000). Exemplo: -t 2000",process:(s,t,e)=>s.timeout=parseInt(t[e+1]),num:1}];function Nt(s){let t=N.basename(process.argv[0]),e=N.basename(process.argv[1]);s.split(`
`).forEach(r=>console.log(r.trim())),console.log(`Uso: ${t} ${e} [op\xE7\xF5es] [bot1 bot2 ...]
`),console.log("As op\xE7\xF5es s\xE3o:"),tt.forEach(r=>console.log(r.flag,r.desc)),console.log(`
`)}function et(s){let t=process.argv,e={debug:!1,quiet:!1,interactive:!1,messages:!1,timeout:3e3};return tt.forEach(r=>{let o=t.indexOf(r.flag);o>1&&o<t.length-r.num&&(r.process(e,t,o),t.splice(o,r.num+1))}),t.includes("-h")&&(Nt(s),process.exit(0)),e.bots=t.slice(2).filter(r=>!r.startsWith("-")),e}var x=g(require("path")),ot=g(require("fs")),F=g(require("child_process"));var Ft=g(require("child_process")),$t=g(require("stream")),rt=g(require("readline"));function st(s){let t=(0,rt.createInterface)({input:s}),e=async function*(){for await(let r of t)yield r}();return async()=>(await e.next()).value}var c=s=>`[${s}m`,R={bold:c("1"),black:c("30"),red:c("31"),green:c("32"),yellow:c("33"),blue:c("34"),magenta:c("35"),cyan:c("36"),white:c("37"),gray:c("90"),bgBlack:c("40"),bgRed:c("41"),bgGreen:c("42"),bgYellow:c("43"),bgBlue:c("44"),bgMagenta:c("45"),bgCyan:c("46"),bgWhite:c("47"),bgGray:c("100"),reset:c("0")};function Ut(s){return s.endsWith(R.reset)?s:`${s}${R.reset}`}var a=Object.keys(R).reduce((s,t)=>Z(_({},s),{[t]:e=>Ut(`${R[t]}${e}`)}),{});var d=console.log,it=a.bgGreen(a.black("DEBUG:")),$=class{constructor(t,e,r){this.game=t;this.id=e;this.execName=r;n(this,"_proc");n(this,"_read");n(this,"_errorPromise");n(this,"_msgStream",null);n(this,"_active");x.dirname(r)==="."?this._proc=(0,F.spawn)(x.join(process.cwd(),r)):this._proc=(0,F.spawn)(r),this.game.config.messages&&(this._msgStream=(0,ot.createWriteStream)(r+".in")),this.game.config.quiet&&(d=()=>{}),this._proc.on("error",o=>{d(a.red(`Erro na execu\xE7\xE3o do programa ${r}.`)),d(a.red(o)),this.game.quit(e,o)}),this._proc.stderr.on("data",o=>{if(this.game.config.quiet===!1){let m=o.toString().replace(/\n/g,`
	`);d(a.red(`Bot ${e}:`)),d(a.red(`	${m}`))}}),this._errorPromise=new Promise(o=>{this._proc.on("close",(m,u)=>{u!=="SIGINT"?(d(a.red(`Programa ${this.execName} terminou com signal ${u}.`)),o("EXEC_ERROR")):o("FINISHED")})}),this._read=st(this._proc.stdout),this._active=!0}async write(t){if(this._active){this.game.config.debug&&console.debug(`${it} Enviando para ${this.id}: ${t}`);let e=`${t}
`;this._msgStream&&this._msgStream.write(e);try{return this._proc.stdin.write(e),Promise.resolve("OK")}catch(r){return Promise.resolve("ERROR")}}}async read(){if(this._active){let t,e=new Promise(u=>{t=setTimeout(()=>u("TIMEOUT"),this.game.config.timeout)}),r=this._read(),o=this._errorPromise,m=await Promise.race([e,r,o]).then(u=>u===void 0||u==="EXEC_ERROR"?"ERROR":u);return m==="TIMEOUT"?(d(`Jogador ${this.id} n\xE3o enviou dados no tempo de ${this.game.config.timeout}ms e foi eliminado.`),Promise.resolve("PLAYER_ERROR")):m==="ERROR"?(d(`Jogador ${this.id} teve problemas t\xE9cnicos e foi eliminado.`),Promise.resolve("PLAYER_ERROR")):(clearTimeout(t),this.game.config.debug&&console.debug(`${it} Recebido de ${this.id}: ${m}`),Promise.resolve(m))}}halt(){console.log(a.red("HALT")),this._msgStream&&this._msgStream.close(),this._proc.kill("SIGINT"),this._active=!1}get isActive(){return this._active}};var at=g(nt()),j,ct;function ut(s,t,e=0){return Math.floor(s*(t-e)+e)}function v(s){return typeof s=="number"&&(j=new at.default(s.toString()),ct=s),ct}function y(){return j||v(ut(Math.random(),1e5)),j.next()}function h(s,t=0){return ut(y(),s,t)}var i=class{constructor(t,...e){this.content=t;n(this,"params");this.params=e.map(r=>r.toString())}toString(){let t=this.params.join(" "),e=this.content.length>0&&t.length>0;return this.content+(e?" ":"")+t}static parse(t){let[e,...r]=t.split(" ").filter(o=>o.length>0);return new i(e,...r)}};var T=console.log,Wt=[a.cyan,a.yellow,a.magenta,a.cyan],I=class{constructor(t){this.config=t;n(this,"players");n(this,"currPlayerIndex");let e=et(this.config.description);this.config=_(_({},t),e),this.config.quiet&&(T=()=>{}),this.config.readfile&&this.loadFile(this.config.readfile),this.config.seed||(y(),this.config.seed=v()),T(`Seed da partida ${v()}`),(!this.currPlayerIndex||this.currPlayerIndex<0||this.currPlayerIndex>this.config.bots.length-1)&&(this.currPlayerIndex=h(this.config.bots.length)),this.players=this.config.bots.map(r=>new $(this,lt.basename(r),r)),this.players.forEach((r,o)=>r.color=Wt[o])}async run(){try{for(await this.config.init(),await this.config.start();;)await this.config.turn(),this.currPlayerIndex=(this.currPlayerIndex+1)%this.players.length}catch(t){console.error(t),this.players.forEach(e=>e.halt())}}over(t){T(t),this.config.finish(),this.closeGame()}quit(t,e){}closeGame(){console.log(a.red("closeGame")),this.players.forEach(t=>t.halt()),process.exit()}loadFile(t){try{let e=ht.readFileSync(t,"utf8"),[r,o]=e.split(`---
`),m=r.match(/seed\s*:\s*(\d+)\s*\n/);m&&(this.config.seed=parseInt(m[1]));let u=r.match(/bots\s*:\s*([ \w]+)\n/);u&&(this.config.bots=u[1].split(" ").filter(J=>J&&J.length>0));let w=r.match(/curr\s*:\s*(\d+)\n/);w&&(this.currPlayerIndex=parseInt(w[1])),this.config.loadState(o)}catch(e){console.error(e)}}async forEachPlayer(t){await Promise.all(this.players.map(async e=>{await t(e)}))}get numPlayers(){return this.players.length}async send(t,e){let r=this.players.find(o=>o.id===t);if(r){let o=await r.write(e.toString());return o!=="OK"?(this.failPlayer("CONFIG ERROR",`Algo estranho ocorreu com o jogador ${r.id}`,r),"ERROR"):o}return"PLAYER ID not found."}async broadcast(t,e=this.players){await Promise.all(e.map(async r=>{await this.send(r.id,t)}))}async broadcastNonCurrent(t){await this.broadcast(t,this.players.filter(e=>e!=this.currentPlayer))}async receiveMessage(){let t=await this.currentPlayer.read();return i.parse(t)}failPlayer(t,e,r){T(`${r.id}: ${a.red(t)} ${e}`)}get currentPlayer(){return this.players[this.currPlayerIndex]}};var mt=10,ft=30,pt=20,gt=50,dt=500,yt=5e4,bt=500,O=2e3,_t=200,W=10,H=20,Et=200,At=150,Pt=100,M=10,X=20,G=30;var L=class{constructor(t=0,e=0){this.lin=t;this.col=e}},P=class{constructor(){n(this,"width");n(this,"height");n(this,"harbors");n(this,"_cell");this.height=h(H,W),this.width=h(H,W);let t=()=>y()<.5?M+h(10,1):y()<.7?X+h(10,1):G+h(10,1);this._cell=[];for(let e=0;e<this.height;e++){this._cell.push([]);for(let r=0;r<this.width;r++)this._cell[e].push(y()<=.3?t():0)}this.harbors=[];for(let e=h(5,1);e>0;e--){let r=new L(h(this.height),h(this.width));this.harbors.push(r),this._cell[r.lin][r.col]=1}}static get instance(){return P._instance===void 0&&(P._instance=new P),P._instance}isInside({lin:t,col:e}){return t>=0&&t<this.height&&e>=0&&e<this.width}cell(t){return this.isInside(t)?this._cell[t.lin][t.col]:0}isFishingPoint(t){if(this.isInside(t)){let e=this.cell(t);return e>=M&&e<G+10}return!1}isPort(t){return this.cell(t)===1}getFishInfo(t){if(this.isFishingPoint(t)){let e=this.cell(t),r=e%10;switch(e-r){case M:return{fish:"MULLET",quantity:r};case X:return{fish:"SNAPPER",quantity:r};case G:return{fish:"SEABASS",quantity:r}}}return null}isAllowedToFish(t){let e=this.getFishInfo(t);return e?e.quantity>0:!0}fish(t){let e=this.getFishInfo(t);e&&e.quantity>0&&this._cell[t.lin][t.col]--}update(){let t=h(this.height),e=h(this.width),r=this.getFishInfo({lin:t,col:e});r&&r.quantity>0&&r.quantity<9&&this._cell[t][e]++}get strData(){return this._cell.map(t=>t.join(" ")).join(`
`)}},f=P;n(f,"_instance");var k=class{constructor(t=new L(0,0)){n(this,"_type");n(this,"_pos");n(this,"_moves");n(this,"_charge");this._type="BOAT",this._pos=t,this._moves=0,this._charge=[{fish:"MULLET",quantity:0},{fish:"SNAPPER",quantity:0},{fish:"SEABASS",quantity:0}]}get type(){return this._type}get moveLimit(){return this.type==="BOAT"?ft:gt}get chargeLimit(){return this.type==="BOAT"?mt:pt}get pos(){return this._pos}get moves(){return this._moves}get overload(){let t=this._charge.reduce((e,r)=>e+r.quantity,0);return t>this.chargeLimit?t-this.chargeLimit:0}moveTo(t){return this._pos=t,this._moves++,this._moves<=this.moveLimit}load(t){this._charge.find(e=>e.fish===t).quantity++}quantity(t){return this._charge.find(e=>e.fish===t).quantity}unload(){let t=this.quantity("MULLET")*Pt+this.quantity("SNAPPER")*At+this.quantity("SEABASS")*Et;return this._moves=0,this._charge.forEach(e=>e.quantity=0),t}upgrade(){this._type="MOTORBOAT"}};var b=class{constructor(t){this.id=t;n(this,"_boat");n(this,"_money");let e=f.instance,r=e.harbors[h(e.harbors.length)];this._boat=new k(r),this._money=0,b._bots.set(t,this)}valid(t){switch(t.content){case"LEFT":case"RIGHT":case"UP":case"DOWN":return this.move(t.content);case"FISH":return this.fish();case"UPGRADE":return this.upgrade();case"SELL":return this.sell();case"RADAR":return this.radar();case"WAIT":return new i("NONE");default:return new i("INVALID")}}get pos(){return this._boat.pos}get money(){return this._money}static get ids(){return[...b._bots.keys()]}static get bots(){return[...b._bots.values()]}static bot(t){return b._bots.get(t)}static isBusy({lin:t,col:e}){return b.bots.some(r=>r.pos.lin===t&&r.pos.col===e)}quantity(t){return this._boat.quantity(t)}move(t){let e=f.instance,r=_({},this.pos);if(t==="LEFT"&&r.col--,t==="RIGHT"&&r.col++,t==="UP"&&r.lin--,t==="DOWN"&&r.lin++,!e.isInside(r))return this._money-=dt,new i("OUT");if(b.isBusy(r))return new i("BUSY");if(!this._boat.moveTo(r))return this._money-=O,new i("TUGBOAT");if(e.isPort(r))return new i("PORT");let o=e.getFishInfo(r);return o?new i(o.fish,o.quantity):new i("SEA")}fish(){let t=f.instance,e=t.getFishInfo(this.pos);return e?t.isAllowedToFish(this.pos)?(t.fish(this.pos),this._boat.load(e.fish),new i(e.fish)):(this._money-=yt,new i("IMPACT")):new i("NONE")}upgrade(){return this.money>=O&&(this._money-=O,this._boat.upgrade()),new i(this.money.toString())}sell(){if(f.instance.isPort(this.pos)){let e=this._boat.overload*bt,r=this._boat.unload();this._money+=r-e}return new i(this.money.toString())}radar(){let t=f.instance;return this._money-=_t,new i(t.strData)}},p=b;n(p,"_bots",new Map);function A(s){switch(s.fish){case"MULLET":return a.bgGray(s.quantity);case"SNAPPER":return a.bgGreen(a.gray(s.quantity));case"SEABASS":return a.bgMagenta(s.quantity)}}function Y(s){return a.bgRed(a.white(String.fromCharCode(65+s)))}function Ht(){return a.bgBlack("P")}function vt(){return a.bgBlue(" ")}function wt(){console.log("Bots");let t=p.bots.reduce((e,r,o)=>`${e}${Y(o)}: ${r.id}
`,"");console.log(t),console.log("Pontos de pesca (o digito \xE9 a quantidade)"),console.log(A({fish:"MULLET",quantity:0})+": Tainha"),console.log(A({fish:"SNAPPER",quantity:0})+": Cioba"),console.log(A({fish:"SEABASS",quantity:0})+": Robalo"),console.log(),console.log("P: Porto")}function z(){let s=f.instance,t=p.bots,e="";for(let r=0;r<s.height;r++){for(let o=0;o<s.width;o++){let m=t.findIndex(u=>u.pos.lin===r&&u.pos.col===o);if(m>=0)e+=Y(m);else{let u=s.getFishInfo({lin:r,col:o});u?e+=A(u):s.isPort({lin:r,col:o})?e+=Ht():e+=vt()}e+=vt()}if(r<t.length){let o=t[r],m=A({fish:"MULLET",quantity:o.quantity("MULLET")}),u=A({fish:"SNAPPER",quantity:o.quantity("SNAPPER")}),w=A({fish:"SEABASS",quantity:o.quantity("SEABASS")});e+=`    ${Y(r)}: ${m} ${u} ${w} - R$ ${o.money}`}e+=`
`}console.log(e)}var q,St,l=new I({description:"Neste jogo, voc\xEA controla um barco-pesqueiro, que compete com outros barcos pelos recursos naturais de uma \xE1rea de pesca.",loadState:Xt,init:kt,start:Yt,turn:zt,finish:Jt});l.run();function Xt(s){}async function kt(){l.numPlayers===0&&(console.log("N\xE3o h\xE1 bot-jogadores."),l.closeGame()),q=3,St=0,l.forEachPlayer(s=>new p(s.id))}async function Yt(){let s=f.instance;await l.broadcast(new i("AREA",s.height,s.width)),await l.broadcast(new i(s.strData)),await l.broadcast(new i("TIME",q)),await l.broadcast(new i("BOTS",p.bots.length));for(let t of p.bots)await l.broadcast(new i(t.id,t.pos.lin,t.pos.col));for(let t of p.bots)await l.send(t.id,new i("YOU",t.id));wt(),z()}async function zt(){let s=f.instance;try{if(++St%l.numPlayers==0&&q--,q>=0){let t=l.currentPlayer.id;await l.broadcast(new i("BOT",t));let e=await l.receiveMessage();await l.broadcastNonCurrent(e);let r=p.bot(t).valid(e);await l.broadcast(r),s.update(),z()}else l.over("timeout")}catch(t){console.log(t)}}function Jt(){console.log("closing game")}