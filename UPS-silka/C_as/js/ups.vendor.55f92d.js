/* Fri Mar 05 2021 12:57:40 GMT-0500 (Eastern Standard Time) */
function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}if(function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=!!a&&"length"in a&&a.length,c=fa.type(a);return"function"!==c&&!fa.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}function d(a,b,c){if(fa.isFunction(b))return fa.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return fa.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(pa.test(b))return fa.filter(b,a,c);b=fa.filter(b,a)}return fa.grep(a,function(a){return _.call(b,a)>-1!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b={};return fa.each(a.match(ua)||[],function(a,c){b[c]=!0}),b}function g(){X.removeEventListener("DOMContentLoaded",g),a.removeEventListener("load",g),fa.ready()}function h(){this.expando=fa.expando+h.uid++}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Ba,"-$&").toLowerCase(),"string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:Aa.test(c)?fa.parseJSON(c):c)}catch(a){}za.set(a,b,c)}else c=void 0;return c}function j(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return fa.css(a,b,"")},i=h(),j=c&&c[3]||(fa.cssNumber[b]?"":"px"),k=(fa.cssNumber[b]||"px"!==j&&+i)&&Da.exec(fa.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,fa.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function k(a,b){var c=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&fa.nodeName(a,b)?fa.merge([a],c):c}function l(a,b){for(var c=0,d=a.length;d>c;c++)ya.set(a[c],"globalEval",!b||ya.get(b[c],"globalEval"))}function m(a,b,c,d,e){for(var f,g,h,i,j,m,n=b.createDocumentFragment(),o=[],p=0,q=a.length;q>p;p++)if((f=a[p])||0===f)if("object"===fa.type(f))fa.merge(o,f.nodeType?[f]:f);else if(Ka.test(f)){for(g=g||n.appendChild(b.createElement("div")),h=(Ha.exec(f)||["",""])[1].toLowerCase(),i=Ja[h]||Ja._default,g.innerHTML=i[1]+fa.htmlPrefilter(f)+i[2],m=i[0];m--;)g=g.lastChild;fa.merge(o,g.childNodes),g=n.firstChild,g.textContent=""}else o.push(b.createTextNode(f));for(n.textContent="",p=0;f=o[p++];)if(d&&fa.inArray(f,d)>-1)e&&e.push(f);else if(j=fa.contains(f.ownerDocument,f),g=k(n.appendChild(f),"script"),j&&l(g),c)for(m=0;f=g[m++];)Ia.test(f.type||"")&&c.push(f);return n}function n(){return!0}function o(){return!1}function p(){try{return X.activeElement}catch(a){}}function q(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)q(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=o;else if(!e)return a;return 1===f&&(g=e,e=function(a){return fa().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=fa.guid++)),a.each(function(){fa.event.add(this,b,e,d,c)})}function r(a,b){return fa.nodeName(a,"table")&&fa.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function s(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function t(a){var b=Ra.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function u(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(ya.hasData(a)&&(f=ya.access(a),g=ya.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)fa.event.add(b,e,j[e][c])}za.hasData(a)&&(h=za.access(a),i=fa.extend({},h),za.set(b,i))}}function v(a,b){var c=b.nodeName.toLowerCase();"input"===c&&Ga.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function w(a,b,c,d){b=Z.apply([],b);var e,f,g,h,i,j,l=0,n=a.length,o=n-1,p=b[0],q=fa.isFunction(p);if(q||n>1&&"string"==typeof p&&!da.checkClone&&Qa.test(p))return a.each(function(e){var f=a.eq(e);q&&(b[0]=p.call(this,e,f.html())),w(f,b,c,d)});if(n&&(e=m(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(g=fa.map(k(e,"script"),s),h=g.length;n>l;l++)i=e,l!==o&&(i=fa.clone(i,!0,!0),h&&fa.merge(g,k(i,"script"))),c.call(a[l],i,l);if(h)for(j=g[g.length-1].ownerDocument,fa.map(g,t),l=0;h>l;l++)i=g[l],Ia.test(i.type||"")&&!ya.access(i,"globalEval")&&fa.contains(j,i)&&(i.src?fa._evalUrl&&fa._evalUrl(i.src):fa.globalEval(i.textContent.replace(Sa,"")))}return a}function x(a,b,c){for(var d,e=b?fa.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||fa.cleanData(k(d)),d.parentNode&&(c&&fa.contains(d.ownerDocument,d)&&l(k(d,"script")),d.parentNode.removeChild(d));return a}function y(a,b){var c=fa(b.createElement(a)).appendTo(b.body),d=fa.css(c[0],"display");return c.detach(),d}function z(a){var b=X,c=Ua[a];return c||(c=y(a,b),"none"!==c&&c||(Ta=(Ta||fa("<iframe frameborder='0' width='0' height='0' />")).appendTo(b.documentElement),b=Ta[0].contentDocument,b.write(),b.close(),c=y(a,b),Ta.detach()),Ua[a]=c),c}function A(a,b,c){var d,e,f,g,h=a.style;return c=c||Xa(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||fa.contains(a.ownerDocument,a)||(g=fa.style(a,b)),c&&!da.pixelMarginRight()&&Wa.test(g)&&Va.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function B(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function C(a){if(a in cb)return a;for(var b=a[0].toUpperCase()+a.slice(1),c=bb.length;c--;)if((a=bb[c]+b)in cb)return a}function D(a,b,c){var d=Da.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function E(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=fa.css(a,c+Ea[f],!0,e)),d?("content"===c&&(g-=fa.css(a,"padding"+Ea[f],!0,e)),"margin"!==c&&(g-=fa.css(a,"border"+Ea[f]+"Width",!0,e))):(g+=fa.css(a,"padding"+Ea[f],!0,e),"padding"!==c&&(g+=fa.css(a,"border"+Ea[f]+"Width",!0,e)));return g}function F(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Xa(a),g="border-box"===fa.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=A(a,b,f),(0>e||null==e)&&(e=a.style[b]),Wa.test(e))return e;d=g&&(da.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+E(a,b,c||(g?"border":"content"),d,f)+"px"}function G(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ya.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Fa(d)&&(f[g]=ya.access(d,"olddisplay",z(d.nodeName)))):(e=Fa(d),"none"===c&&e||ya.set(d,"olddisplay",e?c:fa.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function H(a,b,c,d,e){return new H.prototype.init(a,b,c,d,e)}function I(){return a.setTimeout(function(){db=void 0}),db=fa.now()}function J(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=Ea[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function K(a,b,c){for(var d,e=(N.tweeners[b]||[]).concat(N.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function L(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&Fa(a),o=ya.get(a,"fxshow");c.queue||(h=fa._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,fa.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=fa.css(a,"display"),"inline"===("none"===j?ya.get(a,"olddisplay")||z(a.nodeName):j)&&"none"===fa.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],fb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!o||void 0===o[d])continue;n=!0}l[d]=o&&o[d]||fa.style(a,d)}else j=void 0;if(fa.isEmptyObject(l))"inline"===("none"===j?z(a.nodeName):j)&&(m.display=j);else{o?"hidden"in o&&(n=o.hidden):o=ya.access(a,"fxshow",{}),f&&(o.hidden=!n),n?fa(a).show():k.done(function(){fa(a).hide()}),k.done(function(){var b;ya.remove(a,"fxshow");for(b in l)fa.style(a,b,l[b])});for(d in l)g=K(n?o[d]:0,d,k),d in o||(o[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function M(a,b){var c,d,e,f,g;for(c in a)if(d=fa.camelCase(c),e=b[d],f=a[c],fa.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=fa.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function N(a,b,c){var d,e,f=0,g=N.prefilters.length,h=fa.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=db||I(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:fa.extend({},b),opts:fa.extend(!0,{specialEasing:{},easing:fa.easing._default},c),originalProperties:b,originalOptions:c,startTime:db||I(),duration:c.duration,tweens:[],createTween:function(b,c){var d=fa.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(M(k,j.opts.specialEasing);g>f;f++)if(d=N.prefilters[f].call(j,a,k,j.opts))return fa.isFunction(d.stop)&&(fa._queueHooks(j.elem,j.opts.queue).stop=fa.proxy(d.stop,d)),d;return fa.map(k,K,j),fa.isFunction(j.opts.start)&&j.opts.start.call(a,j),fa.fx.timer(fa.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function O(a){return a.getAttribute&&a.getAttribute("class")||""}function P(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(ua)||[];if(fa.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Q(a,b,c,d){function e(h){var i;return f[h]=!0,fa.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===zb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function R(a,b){var c,d,e=fa.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&fa.extend(!0,a,d),a}function S(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function T(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(a){return{state:"parsererror",error:g?a:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function U(a,b,c,d){var e;if(fa.isArray(b))fa.each(b,function(b,e){c||Db.test(a)?d(a,e):U(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==fa.type(b))d(a,b);else for(e in b)U(a+"["+e+"]",b[e],c,d)}function V(a){return fa.isWindow(a)?a:9===a.nodeType&&a.defaultView}var W=[],X=a.document,Y=W.slice,Z=W.concat,$=W.push,_=W.indexOf,aa={},ba=aa.toString,ca=aa.hasOwnProperty,da={},ea="2.2.4",fa=function(a,b){return new fa.fn.init(a,b)},ga=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ha=/^-ms-/,ia=/-([\da-z])/gi,ja=function(a,b){return b.toUpperCase()};fa.fn=fa.prototype={jquery:ea,constructor:fa,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:Y.call(this)},pushStack:function(a){var b=fa.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return fa.each(this,a)},map:function(a){return this.pushStack(fa.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:$,sort:W.sort,splice:W.splice},fa.extend=fa.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||fa.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(fa.isPlainObject(d)||(e=fa.isArray(d)))?(e?(e=!1,f=c&&fa.isArray(c)?c:[]):f=c&&fa.isPlainObject(c)?c:{},g[b]=fa.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},fa.extend({expando:"jQuery"+(ea+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===fa.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!fa.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==fa.type(a)||a.nodeType||fa.isWindow(a))return!1;if(a.constructor&&!ca.call(a,"constructor")&&!ca.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||ca.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?aa[ba.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;(a=fa.trim(a))&&(1===a.indexOf("use strict")?(b=X.createElement("script"),b.text=a,X.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(ha,"ms-").replace(ia,ja)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var d,e=0;if(c(a))for(d=a.length;d>e&&!1!==b.call(a[e],e,a[e]);e++);else for(e in a)if(!1===b.call(a[e],e,a[e]))break;return a},trim:function(a){return null==a?"":(a+"").replace(ga,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?fa.merge(d,"string"==typeof a?[a]:a):$.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:_.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d=[],e=0,f=a.length,g=!c;f>e;e++)!b(a[e],e)!==g&&d.push(a[e]);return d},map:function(a,b,d){var e,f,g=0,h=[];if(c(a))for(e=a.length;e>g;g++)null!=(f=b(a[g],g,d))&&h.push(f);else for(g in a)null!=(f=b(a[g],g,d))&&h.push(f);return Z.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),fa.isFunction(a)?(d=Y.call(arguments,2),e=function(){return a.apply(b||this,d.concat(Y.call(arguments)))},e.guid=a.guid=a.guid||fa.guid++,e):void 0},now:Date.now,support:da}),"function"==typeof Symbol&&(fa.fn[Symbol.iterator]=W[Symbol.iterator]),fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){aa["[object "+b+"]"]=b.toLowerCase()});var ka=function(a){function b(a,b,c,d){var e,f,g,h,j,l,m,n,o=b&&b.ownerDocument,p=b?b.nodeType:9;if(c=c||[],"string"!=typeof a||!a||1!==p&&9!==p&&11!==p)return c;if(!d&&((b?b.ownerDocument||b:M)!==E&&D(b),b=b||E,G)){if(11!==p&&(l=pa.exec(a)))if(e=l[1]){if(9===p){if(!(g=b.getElementById(e)))return c;if(g.id===e)return c.push(g),c}else if(o&&(g=o.getElementById(e))&&K(b,g)&&g.id===e)return c.push(g),c}else{if(l[2])return Y.apply(c,b.getElementsByTagName(a)),c;if((e=l[3])&&t.getElementsByClassName&&b.getElementsByClassName)return Y.apply(c,b.getElementsByClassName(e)),c}if(t.qsa&&!R[a+" "]&&(!H||!H.test(a))){if(1!==p)o=b,n=a;else if("object"!==b.nodeName.toLowerCase()){for((h=b.getAttribute("id"))?h=h.replace(ra,"\\$&"):b.setAttribute("id",h=L),m=x(a),f=m.length,j=ka.test(h)?"#"+h:"[id='"+h+"']";f--;)m[f]=j+" "+k(m[f]);n=m.join(","),o=qa.test(a)&&i(b.parentNode)||b}if(n)try{return Y.apply(c,o.querySelectorAll(n)),c}catch(a){}finally{h===L&&b.removeAttribute("id")}}}return z(a.replace(fa,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>u.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[L]=!0,a}function e(a){var b=E.createElement("div");try{return!!a(b)}catch(a){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=c.length;d--;)u.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||T)-(~a.sourceIndex||T);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function i(a){return a&&void 0!==a.getElementsByTagName&&a}function j(){}function k(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function l(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=O++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[N,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(j=b[L]||(b[L]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===N&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function m(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function n(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function o(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function p(a,b,c,e,f,g){return e&&!e[L]&&(e=p(e)),f&&!f[L]&&(f=p(f,g)),d(function(d,g,h,i){var j,k,l,m=[],p=[],q=g.length,r=d||n(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:o(r,m,a,h,i),t=c?f||(d?a:q||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=o(t,p),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[p[k]]=!(s[p[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?$(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=o(t===g?t.splice(q,t.length):t),f?f(null,g,t,i):Y.apply(g,t)})}function q(a){for(var b,c,d,e=a.length,f=u.relative[a[0].type],g=f||u.relative[" "],h=f?1:0,i=l(function(a){return a===b},g,!0),j=l(function(a){return $(b,a)>-1},g,!0),n=[function(a,c,d){var e=!f&&(d||c!==A)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];e>h;h++)if(c=u.relative[a[h].type])n=[l(m(n),c)];else{if(c=u.filter[a[h].type].apply(null,a[h].matches),c[L]){for(d=++h;e>d&&!u.relative[a[d].type];d++);return p(h>1&&m(n),h>1&&k(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(fa,"$1"),c,d>h&&q(a.slice(h,d)),e>d&&q(a=a.slice(d)),e>d&&k(a))}n.push(c)}return m(n)}function r(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,p="0",q=d&&[],r=[],s=A,t=d||f&&u.find.TAG("*",j),v=N+=null==s?1:Math.random()||.1,w=t.length;for(j&&(A=g===E||g||j);p!==w&&null!=(k=t[p]);p++){if(f&&k){for(l=0,g||k.ownerDocument===E||(D(k),h=!G);m=a[l++];)if(m(k,g||E,h)){i.push(k);break}j&&(N=v)}e&&((k=!m&&k)&&n--,d&&q.push(k))}if(n+=p,e&&p!==n){for(l=0;m=c[l++];)m(q,r,g,h);if(d){if(n>0)for(;p--;)q[p]||r[p]||(r[p]=W.call(i));r=o(r)}Y.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(N=v,A=s),q};return e?d(g):g}var s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L="sizzle"+1*new Date,M=a.document,N=0,O=0,P=c(),Q=c(),R=c(),S=function(a,b){return a===b&&(C=!0),0},T=1<<31,U={}.hasOwnProperty,V=[],W=V.pop,X=V.push,Y=V.push,Z=V.slice,$=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},_="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",aa="[\\x20\\t\\r\\n\\f]",ba="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ca="\\["+aa+"*("+ba+")(?:"+aa+"*([*^$|!~]?=)"+aa+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ba+"))|)"+aa+"*\\]",da=":("+ba+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ca+")*)|.*)\\)|)",ea=new RegExp(aa+"+","g"),fa=new RegExp("^"+aa+"+|((?:^|[^\\\\])(?:\\\\.)*)"+aa+"+$","g"),ga=new RegExp("^"+aa+"*,"+aa+"*"),ha=new RegExp("^"+aa+"*([>+~]|"+aa+")"+aa+"*"),ia=new RegExp("="+aa+"*([^\\]'\"]*?)"+aa+"*\\]","g"),ja=new RegExp(da),ka=new RegExp("^"+ba+"$"),la={ID:new RegExp("^#("+ba+")"),CLASS:new RegExp("^\\.("+ba+")"),TAG:new RegExp("^("+ba+"|[*])"),ATTR:new RegExp("^"+ca),PSEUDO:new RegExp("^"+da),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+aa+"*(even|odd|(([+-]|)(\\d*)n|)"+aa+"*(?:([+-]|)"+aa+"*(\\d+)|))"+aa+"*\\)|)","i"),bool:new RegExp("^(?:"+_+")$","i"),needsContext:new RegExp("^"+aa+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+aa+"*((?:-\\d)?\\d*)"+aa+"*\\)|)(?=[^-]|$)","i")},ma=/^(?:input|select|textarea|button)$/i,na=/^h\d$/i,oa=/^[^{]+\{\s*\[native \w/,pa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,qa=/[+~]/,ra=/'|\\/g,sa=new RegExp("\\\\([\\da-f]{1,6}"+aa+"?|("+aa+")|.)","ig"),ta=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ua=function(){D()};try{Y.apply(V=Z.call(M.childNodes),M.childNodes),V[M.childNodes.length].nodeType}catch(a){Y={apply:V.length?function(a,b){X.apply(a,Z.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}t=b.support={},w=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},D=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:M;return d!==E&&9===d.nodeType&&d.documentElement?(E=d,F=E.documentElement,G=!w(E),(c=E.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",ua,!1):c.attachEvent&&c.attachEvent("onunload",ua)),t.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),t.getElementsByTagName=e(function(a){return a.appendChild(E.createComment("")),!a.getElementsByTagName("*").length}),t.getElementsByClassName=oa.test(E.getElementsByClassName),t.getById=e(function(a){return F.appendChild(a).id=L,!E.getElementsByName||!E.getElementsByName(L).length}),t.getById?(u.find.ID=function(a,b){if(void 0!==b.getElementById&&G){var c=b.getElementById(a);return c?[c]:[]}},u.filter.ID=function(a){var b=a.replace(sa,ta);return function(a){return a.getAttribute("id")===b}}):(delete u.find.ID,u.filter.ID=function(a){var b=a.replace(sa,ta);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),u.find.TAG=t.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):t.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},u.find.CLASS=t.getElementsByClassName&&function(a,b){return void 0!==b.getElementsByClassName&&G?b.getElementsByClassName(a):void 0},I=[],H=[],(t.qsa=oa.test(E.querySelectorAll))&&(e(function(a){F.appendChild(a).innerHTML="<a id='"+L+"'></a><select id='"+L+"-\r\\' msallowcapture=''>
      <option selected=''></option>
    </select>",a.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+aa+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||H.push("\\["+aa+"*(?:value|"+_+")"),a.querySelectorAll("[id~="+L+"-]").length||H.push("~="),a.querySelectorAll(":checked").length||H.push(":checked"),a.querySelectorAll("a#"+L+"+*").length||H.push(".#.+[+~]")}),e(function(a){var b=E.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&H.push("name"+aa+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),H.push(",.*:")})),(t.matchesSelector=oa.test(J=F.matches||F.webkitMatchesSelector||F.mozMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&e(function(a){t.disconnectedMatch=J.call(a,"div"),J.call(a,"[s!='']:x"),I.push("!=",da)}),H=H.length&&new RegExp(H.join("|")),I=I.length&&new RegExp(I.join("|")),b=oa.test(F.compareDocumentPosition),K=b||oa.test(F.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},S=b?function(a,b){if(a===b)return C=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c||(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!t.sortDetached&&b.compareDocumentPosition(a)===c?a===E||a.ownerDocument===M&&K(M,a)?-1:b===E||b.ownerDocument===M&&K(M,b)?1:B?$(B,a)-$(B,b):0:4&c?-1:1)}:function(a,b){if(a===b)return C=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===E?-1:b===E?1:e?-1:f?1:B?$(B,a)-$(B,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===M?-1:i[d]===M?1:0},E):E},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==E&&D(a),c=c.replace(ia,"='$1']"),t.matchesSelector&&G&&!R[c+" "]&&(!I||!I.test(c))&&(!H||!H.test(c)))try{var d=J.call(a,c);if(d||t.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(a){}return b(c,E,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==E&&D(a),K(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==E&&D(a);var c=u.attrHandle[b.toLowerCase()],d=c&&U.call(u.attrHandle,b.toLowerCase())?c(a,b,!G):void 0;return void 0!==d?d:t.attributes||!G?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(C=!t.detectDuplicates,B=!t.sortStable&&a.slice(0),a.sort(S),C){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return B=null,a},v=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=v(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=v(b);return c},u=b.selectors={cacheLength:50,createPseudo:d,match:la,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(sa,ta),a[3]=(a[3]||a[4]||a[5]||"").replace(sa,ta),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return la.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ja.test(c)&&(b=x(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(sa,ta).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=P[a+" "];return b||(b=new RegExp("(^|"+aa+")"+a+"("+aa+"|$)"))&&P(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ea," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[L]||(m[L]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===N&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[N,n,t];break}}else if(s&&(m=b,l=m[L]||(m[L]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===N&&j[1],t=n),!1===t)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[L]||(m[L]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[N,t]),m!==b)););return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=u.pseudos[a]||u.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[L]?f(c):f.length>1?(e=[a,a,"",c],u.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=$(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=y(a.replace(fa,"$1"));return e[L]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(sa,ta),function(b){return(b.textContent||b.innerText||v(b)).indexOf(a)>-1}}),lang:d(function(a){return ka.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(sa,ta).toLowerCase(),function(b){var c;do{if(c=G?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===F},focus:function(a){return a===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!u.pseudos.empty(a)},header:function(a){return na.test(a.nodeName)},input:function(a){return ma.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:h(function(){return[0]}),last:h(function(a,b){return[b-1]}),eq:h(function(a,b,c){return[0>c?c+b:c]}),even:h(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:h(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:h(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:h(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d) ;return a})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=function(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=function(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}(s);return j.prototype=u.filters=u.pseudos,u.setFilters=new j,x=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=Q[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=u.preFilter;h;){d&&!(e=ga.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ha.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(fa," ")}),h=h.slice(d.length));for(g in u.filter)!(e=la[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):Q(a,i).slice(0)},y=b.compile=function(a,b){var c,d=[],e=[],f=R[a+" "];if(!f){for(b||(b=x(a)),c=b.length;c--;)f=q(b[c]),f[L]?d.push(f):e.push(f);f=R(a,r(e,d)),f.selector=a}return f},z=b.select=function(a,b,c,d){var e,f,g,h,j,l=" function"==typeof a&&a,m=!d&&x(a=l.selector||a);if(c=c||[],1===m.length){if(f=m[0]=m[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&t.getById&&9===b.nodeType&&G&&u.relative[f[1].type]){if(!(b=(u.find.ID(g.matches[0].replace(sa,ta),b)||[])[0]))return c;l&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=la.needsContext.test(a)?0:f.length;e--&&(g=f[e],!u.relative[h=g.type]);)if((j=u.find[h])&&(d=j(g.matches[0].replace(sa,ta),qa.test(f[0].type)&&i(b.parentNode)||b))){if(f.splice(e,1),!(a=d.length&&k(f)))return Y.apply(c,d),c;break}}return(l||y(a,m))(d,b,!G,c,!b||qa.test(a)&&i(b.parentNode)||b),c},t.sortStable=L.split("").sort(S).join("")===L,t.detectDuplicates=!!C,D(),t.sortDetached=e(function(a){return 1&a.compareDocumentPosition(E.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),t.attributes&&e(function(a){return a.innerHTML="<input />",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(_,function(a,b,c){var d;return c?void 0:!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);fa.find=ka,fa.expr=ka.selectors,fa.expr[":"]=fa.expr.pseudos,fa.uniqueSort=fa.unique=ka.uniqueSort,fa.text=ka.getText,fa.isXMLDoc=ka.isXML,fa.contains=ka.contains;var la=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&fa(a).is(c))break;d.push(a)}return d},ma=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},na=fa.expr.match.needsContext,oa=/^<([\w-]+)\s*\ /?>(?:<\ /\1>|)$/,pa=/^.[^:#\[\.,]*$/;fa.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?fa.find.matchesSelector(d,a)?[d]:[]:fa.find.matches(a,fa.grep(b,function(a){return 1===a.nodeType}))},fa.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(fa(a).filter(function(){for(b=0;c>b;b++)if(fa.contains(e[b],this))return!0}));for(b=0;c>b;b++)fa.find(a,e[b],d);return d=this.pushStack(c>1?fa.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&na.test(a)?fa(a):a||[],!1).length}});var qa,ra=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(fa.fn.init=function(a,b,c){var d,e;if(!a)return this;if(c=c||qa,"string"==typeof a){if(!(d="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:ra.exec(a))||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(d[1]){if(b=b instanceof fa?b[0]:b,fa.merge(this,fa.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:X,!0)),oa.test(d[1])&&fa.isPlainObject(b))for(d in b)fa.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}return e=X.getElementById(d[2]),e&&e.parentNode&&(this.length=1,this[0]=e),this.context=X,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):fa.isFunction(a)?void 0!==c.ready?c.ready(a):a(fa):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),fa.makeArray(a,this))}).prototype=fa.fn,qa=fa(X);var sa=/^(?:parents|prev(?:Until|All))/,ta={children:!0,contents:!0,next:!0,prev:!0};fa.fn.extend({has:function(a){var b=fa(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(fa.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=na.test(a)||"string"!=typeof a?fa(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&fa.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?fa.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?_.call(fa(a),this[0]):_.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(fa.uniqueSort(fa.merge(this.get(),fa(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),fa.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return la(a,"parentNode")},parentsUntil:function(a,b,c){return la(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return la(a,"nextSibling")},prevAll:function(a){return la(a,"previousSibling")},nextUntil:function(a,b,c){return la(a,"nextSibling",c)},prevUntil:function(a,b,c){return la(a,"previousSibling",c)},siblings:function(a){return ma((a.parentNode||{}).firstChild,a)},children:function(a){return ma(a.firstChild)},contents:function(a){return a.contentDocument||fa.merge([],a.childNodes)}},function(a,b){fa.fn[a]=function(c,d){var e=fa.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=fa.filter(d,e)),this.length>1&&(ta[a]||fa.uniqueSort(e),sa.test(a)&&e.reverse()),this.pushStack(e)}});var ua=/\S+/g;fa.Callbacks=function(a){a="string"==typeof a?f(a):fa.extend({},a);var b,c,d,e,g=[],h=[],i=-1,j=function(){for(e=a.once,d=b=!0;h.length;i=-1)for(c=h.shift();++i<g.length;)!1===g[i].apply(c[0],c[1])&&a.stopOnFalse&&(i=g.length,c=!1);a.memory||(c=!1),b=!1,e&&(g=c?[]:"")},k={add:function(){return g&&(c&&!b&&(i=g.length-1,h.push(c)),function b(c){fa.each(c,function(c,d){fa.isFunction(d)?a.unique&&k.has(d)||g.push(d):d&&d.length&&"string"!==fa.type(d)&&b(d)})}(arguments),c&&!b&&j()),this},remove:function(){return fa.each(arguments,function(a,b){for(var c;(c=fa.inArray(b,g,c))>-1;)g.splice(c,1),i>=c&&i--}),this},has:function(a){return a?fa.inArray(a,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return e=h=[],g=c="",this},disabled:function(){return!g},lock:function(){return e=h=[],c||(g=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||j()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},fa.extend({Deferred:function(a){var b=[["resolve","done",fa.Callbacks("once memory"),"resolved"],["reject","fail",fa.Callbacks("once memory"),"rejected"],["notify","progress",fa.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return fa.Deferred(function(c){fa.each(b,function(b,f){var g=fa.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&fa.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?fa.extend(a,d):d}},e={};return d.pipe=d.then,fa.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=Y.call(arguments),g=f.length,h=1!==g||a&&fa.isFunction(a.promise)?g:0,i=1===h?a:fa.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?Y.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&fa.isFunction(f[e].promise)?f[e].promise().progress(j(e,c,b)).done(j(e,d,f)).fail(i.reject):--h;return h||i.resolveWith(d,f),i.promise()}});var va;fa.fn.ready=function(a){return fa.ready.promise().done(a),this},fa.extend({isReady:!1,readyWait:1,holdReady:function(a){a?fa.readyWait++:fa.ready(!0)},ready:function(a){(!0===a?--fa.readyWait:fa.isReady)||(fa.isReady=!0,!0!==a&&--fa.readyWait>0||(va.resolveWith(X,[fa]),fa.fn.triggerHandler&&(fa(X).triggerHandler("ready"),fa(X).off("ready"))))}}),fa.ready.promise=function(b){return va||(va=fa.Deferred(),"complete"===X.readyState||"loading"!==X.readyState&&!X.documentElement.doScroll?a.setTimeout(fa.ready):(X.addEventListener("DOMContentLoaded",g),a.addEventListener("load",g))),va.promise(b)},fa.ready.promise();var wa=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===fa.type(c)){e=!0;for(h in c)wa(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,fa.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(fa(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},xa=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};h.uid=1,h.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!xa(a))return{};var b=a[this.expando];return b||(b={},xa(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,fa.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{fa.isArray(b)?d=b.concat(b.map(fa.camelCase)):(e=fa.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(ua)||[])),c=d.length;for(;c--;)delete f[d[c]]}(void 0===b||fa.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!fa.isEmptyObject(b)}};var ya=new h,za=new h,Aa=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ba=/[A-Z]/g;fa.extend({hasData:function(a){return za.hasData(a)||ya.hasData(a)},data:function(a,b,c){return za.access(a,b,c)},removeData:function(a,b){za.remove(a,b)},_data:function(a,b,c){return ya.access(a,b,c)},_removeData:function(a,b){ya.remove(a,b)}}),fa.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=za.get(f),1===f.nodeType&&!ya.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=fa.camelCase(d.slice(5)),i(f,d,e[d])));ya.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){za.set(this,a)}):wa(this,function(b){var c,d;if(f&&void 0===b){if(void 0!==(c=za.get(f,a)||za.get(f,a.replace(Ba,"-$&").toLowerCase())))return c;if(d=fa.camelCase(a),void 0!==(c=za.get(f,d)))return c;if(void 0!==(c=i(f,d,void 0)))return c}else d=fa.camelCase(a),this.each(function(){var c=za.get(this,d);za.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&za.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){za.remove(this,a)})}}),fa.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=ya.get(a,b),c&&(!d||fa.isArray(c)?d=ya.access(a,b,fa.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=fa.queue(a,b),d=c.length,e=c.shift(),f=fa._queueHooks(a,b),g=function(){fa.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return ya.get(a,c)||ya.access(a,c,{empty:fa.Callbacks("once memory").add(function(){ya.remove(a,[b+"queue",c])})})}}),fa.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?fa.queue(this[0],a):void 0===b?this:this.each(function(){var c=fa.queue(this,a,b);fa._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&fa.dequeue(this,a)})},dequeue:function(a){return this.each(function(){fa.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=fa.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)(c=ya.get(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Ca=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Da=new RegExp("^(?:([+-])=|)("+Ca+")([a-z%]*)$","i"),Ea=["Top","Right","Bottom","Left"],Fa=function(a,b){return a=b||a,"none"===fa.css(a,"display")||!fa.contains(a.ownerDocument,a)},Ga=/^(?:checkbox|radio)$/i,Ha=/<([\w:-]+)/,Ia=/^$|\/(?:java|ecma)script/i,Ja={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table>
                        <colgroup>","</colgroup>
                      </table>"],tr:[2,"<table>
                        <tbody>","</tbody>
                      </table>"],td:[3,"<table>
                        <tbody>
                          <tr>","</tr>
                        </tbody>
                      </table>"],_default:[0,"",""]};Ja.optgroup=Ja.option,Ja.tbody=Ja.tfoot=Ja.colgroup=Ja.caption=Ja.thead,Ja.th=Ja.td;var Ka=/<|&#?\w+; /;!function(){var a=X.createDocumentFragment(),b=a.appendChild(X.createElement("div")),c=X.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),da.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>" ,da.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var La=/^key/,Ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Na=/^([^.]*)(?:\.(.+)|)/;fa.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ya.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=fa.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return void 0!==fa&&fa.event.triggered!==b.type?fa.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(ua)||[""],j=b.length;j--;)h=Na.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=fa.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=fa.event.special[n]||{},k=fa.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&fa.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&!1!==l.setup.call(a,d,o,g)||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),fa.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ya.hasData(a)&&ya.get(a);if(q&&(i=q.events)){for(b=(b||"").match(ua)||[""],j=b.length;j--;)if(h=Na.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=fa.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,o,q.handle)||fa.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)fa.event.remove(a,n+b[j],c,d,!0);fa.isEmptyObject(i)&&ya.remove(a,"handle events")}},dispatch:function(a){a=fa.event.fix(a);var b,c,d,e,f,g=[],h=Y.call(arguments),i=(ya.get(this,"events")||{})[a.type]||[],j=fa.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||!1!==j.preDispatch.call(this,a)){for(g=fa.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(f.namespace)||(a.handleObj=f,a.data=f.data,void 0!==(d=((fa.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h))&&!1===(a.result=d)&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?fa(e,this).index(i)>-1:fa.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:" char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:" button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||X,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[fa.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ma.test(e)?this.mouseHooks:La.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new fa.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=X),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==p()&&this.focus?(this.focus(),!1):void 0},delegateType:" focusin"},blur:{trigger:function(){return this===p()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&fa.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return fa.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},fa.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},fa.Event=function(a,b){return this instanceof fa.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?n:o):this.type=a,b&&fa.extend(this,b),this.timeStamp=a&&a.timeStamp||fa.now(),void(this[fa.expando]=!0)):new fa.Event(a,b)},fa.Event.prototype={constructor:fa.Event,isDefaultPrevented:o,isPropagationStopped:o,isImmediatePropagationStopped:o,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=n,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=n,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=n,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},fa.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){fa.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||fa.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),fa.fn.extend({on:function(a,b,c,d){return q(this,a,b,c,d)},one:function(a,b,c,d){return q(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,fa(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=o),this.each(function(){fa.event.remove(this,a,c,b)})}});var Oa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Pa=/<script|<style|<link /i,Qa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ra=/^true\/(.*)/,Sa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;fa.extend({htmlPrefilter:function(a){return a.replace(Oa,"<$1>
                              </$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=fa.contains(a.ownerDocument,a);if(!(da.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||fa.isXMLDoc(a)))for(g=k(h),f=k(a),d=0,e=f.length;e>d;d++)v(f[d],g[d]);if(b)if(c)for(f=f||k(a),g=g||k(h),d=0,e=f.length;e>d;d++)u(f[d],g[d]);else u(a,h);return g=k(h,"script"),g.length>0&&l(g,!i&&k(a,"script")),h},cleanData:function(a){for(var b,c,d,e=fa.event.special,f=0;void 0!==(c=a[f]);f++)if(xa(c)){if(b=c[ya.expando]){if(b.events)for(d in b.events)e[d]?fa.event.remove(c,d):fa.removeEvent(c,d,b.handle);c[ya.expando]=void 0}c[za.expando]&&(c[za.expando]=void 0)}}}),fa.fn.extend({domManip:w,detach:function(a){return x(this,a,!0)},remove:function(a){return x(this,a)},text:function(a){return wa(this,function(a){return void 0===a?fa.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return w(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){r(this,a).appendChild(a)}})},prepend:function(){return w(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=r(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return w(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return w(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(fa.cleanData(k(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return fa.clone(this,a,b)})},html:function(a){return wa(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Pa.test(a)&&!Ja[(Ha.exec(a)||["",""])[1].toLowerCase()]){a=fa.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(fa.cleanData(k(b,!1)),b.innerHTML=a);b=0}catch(a){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return w(this,arguments,function(b){var c=this.parentNode;fa.inArray(this,a)<0&&(fa.cleanData(k(this)),c&&c.replaceChild(b,this))},a)}}),fa.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){fa.fn[a]=function(a){for(var c,d=[],e=fa(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),fa(e[g])[b](c),$.apply(d,c.get());return this.pushStack(d)}});var Ta,Ua={HTML:"block",BODY:"block"},Va=/^margin/,Wa=new RegExp("^("+Ca+")(?!px)[a-z%]+$","i"),Xa=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Ya=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Za=X.documentElement;!function(){function b(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Za.appendChild(g);var b=a.getComputedStyle(h);c="1%"!==b.top,f="2px"===b.marginLeft,d="4px"===b.width,h.style.marginRight="50%",e="4px"===b.marginRight,Za.removeChild(g)}var c,d,e,f,g=X.createElement("div"),h=X.createElement("div");h.style&&(h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",da.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h),fa.extend(da,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},pixelMarginRight:function(){return null==d&&b(),e},reliableMarginLeft:function(){return null==d&&b(),f},reliableMarginRight:function(){var b,c=h.appendChild(X.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Za.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Za.removeChild(g),h.removeChild(c),b}}))}();var $a=/^(none|table(?!-c[ea]).+)/,_a={position:"absolute",visibility:"hidden",display:"block"},ab={letterSpacing:"0",fontWeight:"400"},bb=["Webkit","O","Moz","ms"],cb=X.createElement("div").style;fa.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=A(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=fa.camelCase(b),i=a.style;return b=fa.cssProps[h]||(fa.cssProps[h]=C(h)||h),g=fa.cssHooks[b]||fa.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Da.exec(c))&&e[1]&&(c=j(a,b,e),f="number"),void(null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(fa.cssNumber[h]?"":"px")),da.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c))))}},css:function(a,b,c,d){var e,f,g,h=fa.camelCase(b);return b=fa.cssProps[h]||(fa.cssProps[h]=C(h)||h),g=fa.cssHooks[b]||fa.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=A(a,b,d)),"normal"===e&&b in ab&&(e=ab[b]),""===c||c?(f=parseFloat(e),!0===c||isFinite(f)?f||0:e):e}}),fa.each(["height","width"],function(a,b){fa.cssHooks[b]={get:function(a,c,d){return c?$a.test(fa.css(a,"display"))&&0===a.offsetWidth?Ya(a,_a,function(){return F(a,b,d)}):F(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Xa(a),g=d&&E(a,b,d,"border-box"===fa.css(a,"boxSizing",!1,f),f);return g&&(e=Da.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=fa.css(a,b)),D(a,c,g)}}}),fa.cssHooks.marginLeft=B(da.reliableMarginLeft,function(a,b){return b?(parseFloat(A(a,"marginLeft"))||a.getBoundingClientRect().left-Ya(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),fa.cssHooks.marginRight=B(da.reliableMarginRight,function(a,b){return b?Ya(a,{display:"inline-block"},A,[a,"marginRight"]):void 0}),fa.each({margin:"",padding:"",border:"Width"},function(a,b){fa.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+Ea[d]+b]=f[d]||f[d-2]||f[0];return e}},Va.test(a)||(fa.cssHooks[a+b].set=D)}),fa.fn.extend({css:function(a,b){return wa(this,function(a,b,c){var d,e,f={},g=0;if(fa.isArray(b)){for(d=Xa(a),e=b.length;e>g;g++)f[b[g]]=fa.css(a,b[g],!1,d);return f}return void 0!==c?fa.style(a,b,c):fa.css(a,b)},a,b,arguments.length>1)},show:function(){return G(this,!0)},hide:function(){return G(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Fa(this)?fa(this).show():fa(this).hide()})}}),fa.Tween=H,H.prototype={constructor:H,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||fa.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(fa.cssNumber[c]?"":"px")},cur:function(){var a=H.propHooks[this.prop];return a&&a.get?a.get(this):H.propHooks._default.get(this)},run:function(a){var b,c=H.propHooks[this.prop];return this.options.duration?this.pos=b=fa.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=fa.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){fa.fx.step[a.prop]?fa.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[fa.cssProps[a.prop]]&&!fa.cssHooks[a.prop]?a.elem[a.prop]=a.now:fa.style(a.elem,a.prop,a.now+a.unit)}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},fa.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},fa.fx=H.prototype.init,fa.fx.step={};var db,eb,fb=/^(?:toggle|show|hide)$/,gb=/queueHooks$/;fa.Animation=fa.extend(N,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return j(c.elem,a,Da.exec(b),c),c}]},tweener:function(a,b){fa.isFunction(a)?(b=a,a=["*"]):a=a.match(ua);for(var c,d=0,e=a.length;e>d;d++)c=a[d],N.tweeners[c]=N.tweeners[c]||[],N.tweeners[c].unshift(b)},prefilters:[L],prefilter:function(a,b){b?N.prefilters.unshift(a):N.prefilters.push(a)}}),fa.speed=function(a,b,c){var d=a&&"object"==typeof a?fa.extend({},a):{complete:c||!c&&b||fa.isFunction(a)&&a,duration:a,easing:c&&b||b&&!fa.isFunction(b)&&b};return d.duration=fa.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in fa.fx.speeds?fa.fx.speeds[d.duration]:fa.fx.speeds._default,null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){fa.isFunction(d.old)&&d.old.call(this),d.queue&&fa.dequeue(this,d.queue)},d},fa.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Fa).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=fa.isEmptyObject(a),f=fa.speed(b,c,d),g=function(){var b=N(this,fa.extend({},a),f);(e||ya.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=fa.timers,g=ya.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&gb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||fa.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=ya.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=fa.timers,g=d?d.length:0;for(c.finish=!0,fa.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),fa.each(["toggle","show","hide"],function(a,b){var c=fa.fn[b];fa.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(J(b,!0),a,d,e)}}),fa.each({slideDown:J("show"),slideUp:J("hide"),slideToggle:J("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){fa.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),fa.timers=[],fa.fx.tick=function(){var a,b=0,c=fa.timers
                                ;for(db=fa.now();b<c.length;b++)(a=c[b])()||c[b]!==a||c.splice(b--,1);c.length||fa.fx.stop(),db=void 0},fa.fx.timer=function(a){fa.timers.push(a),a()?fa.fx.start():fa.timers.pop()},fa.fx.interval=13,fa.fx.start=function(){eb||(eb=a.setInterval(fa.fx.tick,fa.fx.interval))},fa.fx.stop=function(){a.clearInterval(eb),eb=null},fa.fx.speeds={slow:600,fast:200,_default:400},fa.fn.delay=function(b,c){return b=fa.fx?fa.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=X.createElement("input"),b=X.createElement("select"),c=b.appendChild(X.createElement("option"));a.type="checkbox" ,da.checkOn="" !==a.value,da.optSelected=c.selected,b.disabled=!0,da.optDisabled=!c.disabled,a=X.createElement("input"),a.value="t" ,a.type="radio" ,da.radioValue="t"===a.value}();var hb,ib=fa.expr.attrHandle;fa.fn.extend({attr:function(a,b){return wa(this,fa.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){fa.removeAttr(this,a)})}}),fa.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?fa.prop(a,b,c):(1===f&&fa.isXMLDoc(a)||(b=b.toLowerCase(),e=fa.attrHooks[b]||(fa.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void fa.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=fa.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!da.radioValue&&"radio"===b&&fa.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(ua);if(f&&1===a.nodeType)for(;c=f[e++];)d=fa.propFix[c]||c,fa.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),hb={set:function(a,b,c){return!1===b?fa.removeAttr(a,c):a.setAttribute(c,c),c}},fa.each(fa.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||fa.find.attr;ib[b]=function(a,b,d){var e,f;return d||(f=ib[b],ib[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ib[b]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;fa.fn.extend({prop:function(a,b){return wa(this,fa.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[fa.propFix[a]||a]})}}),fa.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&fa.isXMLDoc(a)||(b=fa.propFix[b]||b,e=fa.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=fa.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),da.optSelected||(fa.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),fa.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){fa.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;fa.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(fa.isFunction(a))return this.each(function(b){fa(this).addClass(a.call(this,b,O(this)))});if("string"==typeof a&&a)for(b=a.match(ua)||[];c=this[i++];)if(e=O(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=fa.trim(d),e!==h&&c.setAttribute(" class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(fa.isFunction(a))return this.each(function(b){fa(this).removeClass(a.call(this,b,O(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(ua)||[];c=this[i++];)if(e=O(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){for(g=0;f=b[g++];)for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");h=fa.trim(d),e!==h&&c.setAttribute(" class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):fa.isFunction(a)?this.each(function(c){fa(this).toggleClass(a.call(this,c,O(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c)for(d=0,e=fa(this),f=a.match(ua)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||(b=O(this),b&&ya.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||!1===a?"":ya.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" " +a+" ";c=this[d++];)if(1===c.nodeType&&(" "+O(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var mb=/\r/g,nb=/[\x20\t\r\n\f]+/g;fa.fn.extend({val:function(a){var b,c,d,e=this[0];return arguments.length?(d=fa.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,fa(this).val()):a,null==e?e="":" number"==typeof e?e+="" :fa.isArray(e)&&(e=fa.map(e,function(a){return null==a?"":a+""})),(b=fa.valHooks[this.type]||fa.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))})):e?(b=fa.valHooks[e.type]||fa.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mb,""):null==c?"":c)):void 0}}),fa.extend({valHooks:{option:{get:function(a){var b=fa.find.attr(a,"value");return null!=b?b:fa.trim(fa.text(a)).replace(nb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f=" select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(da.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!fa.nodeName(c.parentNode,"optgroup"))){if(b=fa(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=fa.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=fa.inArray(fa.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),fa.each(["radio","checkbox"],function(){fa.valHooks[this]={set:function(a,b){return fa.isArray(b)?a.checked=fa.inArray(fa(a).val(),b)>-1:void 0}},da.checkOn||(fa.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ob=/^(?:focusinfocus|focusoutblur)$/;fa.extend(fa.event,{trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||X],n=ca.call(b,"type")?b.type:b,o=ca.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||X,3!==d.nodeType&&8!==d.nodeType&&!ob.test(n+fa.event.triggered)&&(n.indexOf(".")>-1&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[fa.expando]?b:new fa.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:fa.makeArray(c,[b]),l=fa.event.special[n]||{},e||!l.trigger||!1!==l.trigger.apply(d,c))){if(!e&&!l.noBubble&&!fa.isWindow(d)){for(i=l.delegateType||n,ob.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;h===(d.ownerDocument||X)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(ya.get(g,"events")||{})[b.type]&&ya.get(g,"handle"),k&&k.apply(g,c),(k=j&&g[j])&&k.apply&&xa(g)&&(b.result=k.apply(g,c),!1===b.result&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&!1!==l._default.apply(m.pop(),c)||!xa(d)||j&&fa.isFunction(d[n])&&!fa.isWindow(d)&&(h=d[j],h&&(d[j]=null),fa.event.triggered=n,d[n](),fa.event.triggered=void 0,h&&(d[j]=h)),b.result}},simulate:function(a,b,c){var d=fa.extend(new fa.Event,c,{type:a,isSimulated:!0});fa.event.trigger(d,null,b)}}),fa.fn.extend({trigger:function(a,b){return this.each(function(){fa.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?fa.event.trigger(a,b,c,!0):void 0}}),fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){fa.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),fa.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),da.focusin="onfocusin"in a,da.focusin||fa.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){fa.event.simulate(b,a.target,fa.event.fix(a))};fa.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ya.access(d,b);e||d.addEventListener(a,c,!0),ya.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ya.access(d,b)-1;e?ya.access(d,b,e):(d.removeEventListener(a,c,!0),ya.remove(d,b))}}});var pb=a.location,qb=fa.now(),rb=/\?/;fa.parseJSON=function(a){return JSON.parse(a+"")},fa.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(a){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||fa.error("Invalid XML: "+b),c};var sb=/#.*$/,tb=/([?&])_=[^&]*/,ub=/^(.*?):[ \t]*([^\r\n]*)$/gm,vb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,wb=/^(?:GET|HEAD)$/,xb=/^\/\//,yb={},zb={},Ab="*/".concat("*"),Bb=X.createElement("a");Bb.href=pb.href,fa.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pb.href,type:"GET",isLocal:vb.test(pb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ab,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":fa.parseJSON,"text xml":fa.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?R(R(a,fa.ajaxSettings),b):R(fa.ajaxSettings,a)},ajaxPrefilter:P(yb),ajaxTransport:P(zb),ajax:function(b,c){function d(b,c,d,h){var j,l,s,t,v,x=c;2!==u&&(u=2,i&&a.clearTimeout(i),e=void 0,g=h||"",w.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(t=S(m,w,d)),t=T(m,t,w,j),j?(m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(fa.lastModified[f]=v),(v=w.getResponseHeader("etag"))&&(fa.etag[f]=v)),204===b||"HEAD"===m.type?x="nocontent":304===b?x="notmodified":(x=t.state,l=t.data,s=t.error,j=!s)):(s=x,!b&&x||(x="error",0>b&&(b=0))),w.status=b,w.statusText=(c||x)+"",j?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),w.statusCode(r),r=void 0,k&&o.trigger(j?"ajaxSuccess":"ajaxError",[w,m,j?l:s]),q.fireWith(n,[w,x]),k&&(o.trigger("ajaxComplete",[w,m]),--fa.active||fa.event.trigger("ajaxStop")))}"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=fa.ajaxSetup({},c),n=m.context||m,o=m.context&&(n.nodeType||n.jquery)?fa(n):fa.event,p=fa.Deferred(),q=fa.Callbacks("once memory"),r=m.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!h)for(h={};b=ub.exec(g);)h[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return e&&e.abort(b),d(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,m.url=((b||m.url||pb.href)+"").replace(sb,"").replace(xb,pb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=fa.trim(m.dataType||"*").toLowerCase().match(ua)||[""],null==m.crossDomain){j=X.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=Bb.protocol+"//"+Bb.host!=j.protocol+"//"+j.host}catch(a){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=fa.param(m.data,m.traditional)),Q(yb,m,c,w),2===u)return w;k=fa.event&&m.global,k&&0==fa.active++&&fa.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!wb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(rb.test(f)?"&":"?")+m.data,delete m.data),!1===m.cache&&(m.url=tb.test(f)?f.replace(tb,"$1_="+qb++):f+(rb.test(f)?"&":"?")+"_="+qb++)),m.ifModified&&(fa.lastModified[f]&&w.setRequestHeader("If-Modified-Since",fa.lastModified[f]),fa.etag[f]&&w.setRequestHeader("If-None-Match",fa.etag[f])),(m.data&&m.hasContent&&!1!==m.contentType||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+Ab+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)w.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(!1===m.beforeSend.call(n,w,m)||2===u))return w.abort();v="abort";for(l in{success:1,error:1,complete:1})w[l](m[l]);if(e=Q(zb,m,c,w)){if(w.readyState=1,k&&o.trigger("ajaxSend",[w,m]),2===u)return w;m.async&&m.timeout>0&&(i=a.setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,e.send(s,d)}catch(a){if(!(2>u))throw a;d(-1,a)}}else d(-1,"No Transport");return w},getJSON:function(a,b,c){return fa.get(a,b,c,"json")},getScript:function(a,b){return fa.get(a,void 0,b,"script")}}),fa.each(["get","post"],function(a,b){fa[b]=function(a,c,d,e){return fa.isFunction(c)&&(e=e||d,d=c,c=void 0),fa.ajax(fa.extend({url:a,type:b,dataType:e,data:c,success:d},fa.isPlainObject(a)&&a))}}),fa._evalUrl=function(a){return fa.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},fa.fn.extend({wrapAll:function(a){var b;return fa.isFunction(a)?this.each(function(b){fa(this).wrapAll(a.call(this,b))}):(this[0]&&(b=fa(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return fa.isFunction(a)?this.each(function(b){fa(this).wrapInner(a.call(this,b))}):this.each(function(){var b=fa(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=fa.isFunction(a);return this.each(function(c){fa(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){fa.nodeName(this,"body")||fa(this).replaceWith(this.childNodes)}).end()}}),fa.expr.filters.hidden=function(a){return!fa.expr.filters.visible(a)},fa.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Cb=/%20/g,Db=/\[\]$/,Eb=/\r?\n/g,Fb=/^(?:submit|button|image|reset|file)$/i,Gb=/^(?:input|select|textarea|keygen)/i;fa.param=function(a,b){var c,d=[],e=function(a,b){b=fa.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=fa.ajaxSettings&&fa.ajaxSettings.traditional),fa.isArray(a)||a.jquery&&!fa.isPlainObject(a))fa.each(a,function(){e(this.name,this.value)});else for(c in a)U(c,a[c],b,e);return d.join("&").replace(Cb,"+")},fa.fn.extend({serialize:function(){return fa.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=fa.prop(this,"elements");return a?fa.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!fa(this).is(":disabled")&&Gb.test(this.nodeName)&&!Fb.test(a)&&(this.checked||!Ga.test(a))}).map(function(a,b){var c=fa(this).val();return null==c?null:fa.isArray(c)?fa.map(c,function(a){return{name:b.name,value:a.replace(Eb,"\r\n")}}):{name:b.name,value:c.replace(Eb,"\r\n")}}).get()}}),fa.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(a){}};var Hb={0:200,1223:204},Ib=fa.ajaxSettings.xhr();da.cors=!!Ib&&"withCredentials"in Ib,da.ajax=Ib=!!Ib,fa.ajaxTransport(function(b){var c,d;return da.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(a){if(c)throw a}},abort:function(){c&&c()}}:void 0}),fa.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return fa.globalEval(a),a}}}),fa.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),fa.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=fa("<script>
                                        ").prop({charset:a.scriptCharset,src:a.url}).on("
                                        load error ",c=function(a){b.remove(),c=null,a&&e("
                                        error "===a.type?404:200,a.type)}),X.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;fa.ajaxSetup({jsonp:"
                                        callback ",jsonpCallback:function(){var a=Jb.pop()||fa.expando+"
                                        _ "+qb++;return this[a]=!0,a}}),fa.ajaxPrefilter("
                                        json jsonp ",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(Kb.test(b.url)?"
                                        url ":"
                                        string "==typeof b.data&&0===(b.contentType||"
                                        ").indexOf("
                                        application / x - www - form - urlencoded ")&&Kb.test(b.data)&&"
                                        data ");return h||"
                                        jsonp "===b.dataTypes[0]?(e=b.jsonpCallback=fa.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"
                                        $1 "+e):!1!==b.jsonp&&(b.url+=(rb.test(b.url)?" & ":" ? ")+b.jsonp+" = "+e),b.converters["
                                        script json "]=function(){return g||fa.error(e+"
                                        was not called "),g[0]},b.dataTypes[0]="
                                        json ",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?fa(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&fa.isFunction(f)&&f(g[0]),g=f=void 0}),"
                                        script "):void 0}),fa.parseHTML=function(a,b,c){if(!a||"
                                        string "!=typeof a)return null;"
                                        boolean "==typeof b&&(c=b,b=!1),b=b||X;var d=oa.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m([a],b,e),e&&e.length&&fa(e).remove(),fa.merge([],d.childNodes))};var Lb=fa.fn.load;fa.fn.load=function(a,b,c){if("
                                        string "!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf("
                                        ");return h>-1&&(d=fa.trim(a.slice(h)),a=a.slice(0,h)),fa.isFunction(b)?(c=b,b=void 0):b&&"
                                        object "==typeof b&&(e="
                                        POST "),g.length>0&&fa.ajax({url:a,type:e||"
                                        GET ",dataType:"
                                        html ",data:b}).done(function(a){f=arguments,g.html(d?fa(" < div > ").append(fa.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},fa.each(["
                                        ajaxStart ","
                                        ajaxStop ","
                                        ajaxComplete ","
                                        ajaxError ","
                                        ajaxSuccess ","
                                        ajaxSend "],function(a,b){fa.fn[b]=function(a){return this.on(b,a)}}),fa.expr.filters.animated=function(a){return fa.grep(fa.timers,function(b){return a===b.elem}).length},fa.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=fa.css(a,"
                                        position "),l=fa(a),m={};"
                                        static "===k&&(a.style.position="
                                        relative "),h=l.offset(),f=fa.css(a,"
                                        top "),i=fa.css(a,"
                                        left "),j=("
                                        absolute "===k||"
                                        fixed "===k)&&(f+i).indexOf("
                                        auto ")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),fa.isFunction(b)&&(b=b.call(a,c,fa.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"
                                        using "in b?b.using.call(a,m):l.css(m)}},fa.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){fa.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;return f?(b=f.documentElement,fa.contains(b,d)?(e=d.getBoundingClientRect(),c=V(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e):void 0},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"
                                        fixed "===fa.css(c,"
                                        position ")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),fa.nodeName(a[0],"
                                        html ")||(d=a.offset()),d.top+=fa.css(a[0],"
                                        borderTopWidth ",!0),d.left+=fa.css(a[0],"
                                        borderLeftWidth ",!0)),{top:b.top-d.top-fa.css(c,"
                                        marginTop ",!0),left:b.left-d.left-fa.css(c,"
                                        marginLeft ",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&"
                                        static "===fa.css(a,"
                                        position ");)a=a.offsetParent;return a||Za})}}),fa.each({scrollLeft:"
                                        pageXOffset ",scrollTop:"
                                        pageYOffset "},function(a,b){var c="
                                        pageYOffset "===b;fa.fn[a]=function(d){return wa(this,function(a,d,e){var f=V(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),fa.each(["
                                        top ","
                                        left "],function(a,b){fa.cssHooks[b]=B(da.pixelPosition,function(a,c){return c?(c=A(a,b),Wa.test(c)?fa(a).position()[b]+"
                                        px ":c):void 0})}),fa.each({Height:"
                                        height ",Width:"
                                        width "},function(a,b){fa.each({padding:"
                                        inner "+a,content:b,"
                                        ":"
                                        outer "+a},function(c,d){fa.fn[d]=function(d,e){var f=arguments.length&&(c||"
                                        boolean "!=typeof d),g=c||(!0===d||!0===e?"
                                        margin ":"
                                        border ");return wa(this,function(b,c,d){var e;return fa.isWindow(b)?b.document.documentElement["
                                        client "+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["
                                        scroll "+a],e["
                                        scroll "+a],b.body["
                                        offset "+a],e["
                                        offset "+a],e["
                                        client "+a])):void 0===d?fa.css(b,c,g):fa.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),fa.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a," ** "):this.off(b,a||" ** ",c)},size:function(){return this.length}}),fa.fn.andSelf=fa.fn.addBack,"
                                        function "==typeof define&&define.amd&&define("
                                        jquery ",[],function(){return fa});var Mb=a.jQuery,Nb=a.$;return fa.noConflict=function(b){return a.$===fa&&(a.$=Nb),b&&a.jQuery===fa&&(a.jQuery=Mb),fa},b||(a.jQuery=a.$=fa),fa}),function(a){"
                                        function "==typeof define&&define.amd?define(["
                                        jquery "],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("
                                        visibility ");"
                                        inherit "===b;)a=a.parent(),b=a.css("
                                        visibility ");return"
                                        hidden "!==b}function c(a){for(var b,c;a.length&&a[0]!==document;){if(("
                                        absolute "===(b=a.css("
                                        position "))||"
                                        relative "===b||"
                                        fixed "===b)&&(c=parseInt(a.css("
                                        zIndex "),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}function d(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="
                                        ui - datepicker - div ",this._inlineClass="
                                        ui - datepicker - inline ",this._appendClass="
                                        ui - datepicker - append ",this._triggerClass="
                                        ui - datepicker - trigger ",this._dialogClass="
                                        ui - datepicker - dialog ",this._disableClass="
                                        ui - datepicker - disabled ",this._unselectableClass="
                                        ui - datepicker - unselectable ",this._currentClass="
                                        ui - datepicker - current - day ",this._dayOverClass="
                                        ui - datepicker - days - cell - over ",this.regional=[],this.regional["
                                        "]={closeText:"
                                        Done ",prevText:"
                                        Prev ",nextText:"
                                        Next ",currentText:"
                                        Today ",monthNames:["
                                        January ","
                                        February ","
                                        March ","
                                        April ","
                                        May ","
                                        June ","
                                        July ","
                                        August ","
                                        September ","
                                        October ","
                                        November ","
                                        December "],monthNamesShort:["
                                        Jan ","
                                        Feb ","
                                        Mar ","
                                        Apr ","
                                        May ","
                                        Jun ","
                                        Jul ","
                                        Aug ","
                                        Sep ","
                                        Oct ","
                                        Nov ","
                                        Dec "],dayNames:["
                                        Sunday ","
                                        Monday ","
                                        Tuesday ","
                                        Wednesday ","
                                        Thursday ","
                                        Friday ","
                                        Saturday "],dayNamesShort:["
                                        Sun ","
                                        Mon ","
                                        Tue ","
                                        Wed ","
                                        Thu ","
                                        Fri ","
                                        Sat "],dayNamesMin:["
                                        Su ","
                                        Mo ","
                                        Tu ","
                                        We ","
                                        Th ","
                                        Fr ","
                                        Sa "],weekHeader:"
                                        Wk ",dateFormat:"
                                        mm / dd / yy ",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"
                                        "},this._defaults={showOn:"
                                        focus ",showAnim:"
                                        fadeIn ",showOptions:{},defaultDate:null,appendText:"
                                        ",buttonText:"...",buttonImage:"
                                        ",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"
                                        c - 10: c + 10 ",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:" + 10 ",minDate:null,maxDate:null,duration:"
                                        fast ",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"
                                        ",altFormat:"
                                        ",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional["
                                        "]),this.regional.en=a.extend(!0,{},this.regional["
                                        "]),this.regional["
                                        en - US "]=a.extend(!0,{},this.regional.en),this.dpDiv=e(a(" < div id = '"+this._mainDivId+"'
                                        class = 'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all' > < /div>"))}function e(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.on("mouseout",c,function(){a(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",c,f)}function f(){a.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).addClass("ui-datepicker-next-hover"))}function g(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}function h(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}a.ui=a.ui||{},a.ui.version="1.12.1";var i=0,j=Array.prototype.slice;a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{(d=a._data(e,"events"))&&d.remove&&a(e).triggerHandler("remove")}catch(a){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var c,d,e=j.call(arguments,1),f=0,g=e.length;g>f;f++)for(c in e[f])d=e[f][c],e[f].hasOwnProperty(c)&&void 0!==d&&(b[c]=a.isPlainObject(d)?a.isPlainObject(b[c])?a.widget.extend({},b[c],d):a.widget.extend({},d):d);return b},a.widget.bridge=function(b,c){var d=c.prototype.widgetFullName||b;a.fn[b]=function(e){var f="string"==typeof e,g=j.call(arguments,1),h=this;return f?this.length||"instance"!==e?this.each(function(){var c,f=a.data(this,d);return"instance"===e?(h=f,!1):f?a.isFunction(f[e])&&"_"!==e.charAt(0)?(c=f[e].apply(f,g),c!==f&&void 0!==c?(h=c&&c.jquery?h.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+e+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'")}):h=void 0:(g.length&&(e=a.widget.extend.apply(null,[e].concat(g))),this.each(function(){var b=a.data(this,d);b?(b.option(e||{}),b._init&&b._init()):a.data(this,d,new c(e,this))})),h}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(b,c){c=a(c||this.defaultElement||this)[0],this.element=a(c),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},c!==this&&(a.data(c,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===c&&this.destroy()}}),this.document=a(c.style?c.ownerDocument:c.document||c),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;d.length-1>f;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;c.length>h;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\
                                        S + /g)||[],!0),b.extra&&c(b.extra.match(/\
                                        S + /g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){-1!==a.inArray(b.target,e)&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||!0!==f.options.disabled&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);
                                        var i = d.match(/^([\w:-]*)\s*(.*)$/),
                                          j = i[1] + f.eventNamespace,
                                          k = i[2];
                                        k ? e.on(j, k, h) : c.on(j, h)
                                        })
                                        }, _off: function(b, c) {
                                          c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.off(c).off(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
                                        }, _delay: function(a, b) {
                                          function c() {
                                            return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                                          }
                                          var d = this;
                                          return setTimeout(c, b || 0)
                                        }, _hoverable: function(b) {
                                          this.hoverable = this.hoverable.add(b), this._on(b, {
                                            mouseenter: function(b) {
                                              this._addClass(a(b.currentTarget), null, "ui-state-hover")
                                            },
                                            mouseleave: function(b) {
                                              this._removeClass(a(b.currentTarget), null, "ui-state-hover")
                                            }
                                          })
                                        }, _focusable: function(b) {
                                          this.focusable = this.focusable.add(b), this._on(b, {
                                            focusin: function(b) {
                                              this._addClass(a(b.currentTarget), null, "ui-state-focus")
                                            },
                                            focusout: function(b) {
                                              this._removeClass(a(b.currentTarget), null, "ui-state-focus")
                                            }
                                          })
                                        }, _trigger: function(b, c, d) {
                                          var e, f, g = this.options[b];
                                          if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                                            for (e in f) e in c || (c[e] = f[e]);
                                          return this.element.trigger(c, d), !(a.isFunction(g) && !1 === g.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
                                        }
                                        }, a.each({
                                            show: "fadeIn",
                                            hide: "fadeOut"
                                          }, function(b, c) {
                                            a.Widget.prototype["_" + b] = function(d, e, f) {
                                              "string" == typeof e && (e = {
                                                effect: e
                                              });
                                              var g, h = e ? !0 === e || "number" == typeof e ? c : e.effect || c : b;
                                              e = e || {}, "number" == typeof e && (e = {
                                                duration: e
                                              }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                                                a(this)[b](), f && f.call(d[0]), c()
                                              })
                                            }
                                          }), a.widget,
                                          function() {
                                            function b(a, b, c) {
                                              return [parseFloat(a[0]) * (l.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (l.test(a[1]) ? c / 100 : 1)]
                                            }

                                            function c(b, c) {
                                              return parseInt(a.css(b, c), 10) || 0
                                            }

                                            function d(b) {
                                              var c = b[0];
                                              return 9 === c.nodeType ? {
                                                width: b.width(),
                                                height: b.height(),
                                                offset: {
                                                  top: 0,
                                                  left: 0
                                                }
                                              } : a.isWindow(c) ? {
                                                width: b.width(),
                                                height: b.height(),
                                                offset: {
                                                  top: b.scrollTop(),
                                                  left: b.scrollLeft()
                                                }
                                              } : c.preventDefault ? {
                                                width: 0,
                                                height: 0,
                                                offset: {
                                                  top: c.pageY,
                                                  left: c.pageX
                                                }
                                              } : {
                                                width: b.outerWidth(),
                                                height: b.outerHeight(),
                                                offset: b.offset()
                                              }
                                            }
                                            var e, f = Math.max,
                                              g = Math.abs,
                                              h = /left|center|right/,
                                              i = /top|center|bottom/,
                                              j = /[\+\-]\d+(\.[\d]+)?%?/,
                                              k = /^\w+/,
                                              l = /%$/,
                                              m = a.fn.position;
                                            a.position = {
                                              scrollbarWidth: function() {
                                                if (void 0 !== e) return e;
                                                var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                                  f = d.children()[0];
                                                return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
                                              },
                                              getScrollInfo: function(b) {
                                                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                                                  d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                                                  e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth;
                                                return {
                                                  width: "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0,
                                                  height: e ? a.position.scrollbarWidth() : 0
                                                }
                                              },
                                              getWithinInfo: function(b) {
                                                var c = a(b || window),
                                                  d = a.isWindow(c[0]),
                                                  e = !!c[0] && 9 === c[0].nodeType;
                                                return {
                                                  element: c,
                                                  isWindow: d,
                                                  isDocument: e,
                                                  offset: d || e ? {
                                                    left: 0,
                                                    top: 0
                                                  } : a(b).offset(),
                                                  scrollLeft: c.scrollLeft(),
                                                  scrollTop: c.scrollTop(),
                                                  width: c.outerWidth(),
                                                  height: c.outerHeight()
                                                }
                                              }
                                            }, a.fn.position = function(e) {
                                              if (!e || !e.of) return m.apply(this, arguments);
                                              e = a.extend({}, e);
                                              var l, n, o, p, q, r, s = a(e.of),
                                                t = a.position.getWithinInfo(e.within),
                                                u = a.position.getScrollInfo(t),
                                                v = (e.collision || "flip").split(" "),
                                                w = {};
                                              return r = d(s), s[0].preventDefault && (e.at = "left top"), n = r.width, o = r.height, p = r.offset, q = a.extend({}, p), a.each(["my", "at"], function() {
                                                var a, b, c = (e[this] || "").split(" ");
                                                1 === c.length && (c = h.test(c[0]) ? c.concat(["center"]) : i.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = h.test(c[0]) ? c[0] : "center", c[1] = i.test(c[1]) ? c[1] : "center", a = j.exec(c[0]), b = j.exec(c[1]), w[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [k.exec(c[0])[0], k.exec(c[1])[0]]
                                              }), 1 === v.length && (v[1] = v[0]), "right" === e.at[0] ? q.left += n : "center" === e.at[0] && (q.left += n / 2), "bottom" === e.at[1] ? q.top += o : "center" === e.at[1] && (q.top += o / 2), l = b(w.at, n, o), q.left += l[0], q.top += l[1], this.each(function() {
                                                var d, h, i = a(this),
                                                  j = i.outerWidth(),
                                                  k = i.outerHeight(),
                                                  m = c(this, "marginLeft"),
                                                  r = c(this, "marginTop"),
                                                  x = j + m + c(this, "marginRight") + u.width,
                                                  y = k + r + c(this, "marginBottom") + u.height,
                                                  z = a.extend({}, q),
                                                  A = b(w.my, i.outerWidth(), i.outerHeight());
                                                "right" === e.my[0] ? z.left -= j : "center" === e.my[0] && (z.left -= j / 2), "bottom" === e.my[1] ? z.top -= k : "center" === e.my[1] && (z.top -= k / 2), z.left += A[0], z.top += A[1], d = {
                                                  marginLeft: m,
                                                  marginTop: r
                                                }, a.each(["left", "top"], function(b, c) {
                                                  a.ui.position[v[b]] && a.ui.position[v[b]][c](z, {
                                                    targetWidth: n,
                                                    targetHeight: o,
                                                    elemWidth: j,
                                                    elemHeight: k,
                                                    collisionPosition: d,
                                                    collisionWidth: x,
                                                    collisionHeight: y,
                                                    offset: [l[0] + A[0], l[1] + A[1]],
                                                    my: e.my,
                                                    at: e.at,
                                                    within: t,
                                                    elem: i
                                                  })
                                                }), e.using && (h = function(a) {
                                                  var b = p.left - z.left,
                                                    c = b + n - j,
                                                    d = p.top - z.top,
                                                    h = d + o - k,
                                                    l = {
                                                      target: {
                                                        element: s,
                                                        left: p.left,
                                                        top: p.top,
                                                        width: n,
                                                        height: o
                                                      },
                                                      element: {
                                                        element: i,
                                                        left: z.left,
                                                        top: z.top,
                                                        width: j,
                                                        height: k
                                                      },
                                                      horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                                                      vertical: 0 > h ? "top" : d > 0 ? "bottom" : "middle"
                                                    };
                                                  j > n && n > g(b + c) && (l.horizontal = "center"), k > o && o > g(d + h) && (l.vertical = "middle"), l.important = f(g(b), g(c)) > f(g(d), g(h)) ? "horizontal" : "vertical", e.using.call(this, a, l)
                                                }), i.offset(a.extend(z, {
                                                  using: h
                                                }))
                                              })
                                            }, a.ui.position = {
                                              fit: {
                                                left: function(a, b) {
                                                  var c, d = b.within,
                                                    e = d.isWindow ? d.scrollLeft : d.offset.left,
                                                    g = d.width,
                                                    h = a.left - b.collisionPosition.marginLeft,
                                                    i = e - h,
                                                    j = h + b.collisionWidth - g - e;
                                                  b.collisionWidth > g ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - g - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = f(a.left - h, a.left)
                                                },
                                                top: function(a, b) {
                                                  var c, d = b.within,
                                                    e = d.isWindow ? d.scrollTop : d.offset.top,
                                                    g = b.within.height,
                                                    h = a.top - b.collisionPosition.marginTop,
                                                    i = e - h,
                                                    j = h + b.collisionHeight - g - e;
                                                  b.collisionHeight > g ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - g - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = f(a.top - h, a.top)
                                                }
                                              },
                                              flip: {
                                                left: function(a, b) {
                                                  var c, d, e = b.within,
                                                    f = e.offset.left + e.scrollLeft,
                                                    h = e.width,
                                                    i = e.isWindow ? e.scrollLeft : e.offset.left,
                                                    j = a.left - b.collisionPosition.marginLeft,
                                                    k = j - i,
                                                    l = j + b.collisionWidth - h - i,
                                                    m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                                                    n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                                                    o = -2 * b.offset[0];
                                                  0 > k ? (0 > (c = a.left + m + n + o + b.collisionWidth - h - f) || g(k) > c) && (a.left += m + n + o) : l > 0 && ((d = a.left - b.collisionPosition.marginLeft + m + n + o - i) > 0 || l > g(d)) && (a.left += m + n + o)
                                                },
                                                top: function(a, b) {
                                                  var c, d, e = b.within,
                                                    f = e.offset.top + e.scrollTop,
                                                    h = e.height,
                                                    i = e.isWindow ? e.scrollTop : e.offset.top,
                                                    j = a.top - b.collisionPosition.marginTop,
                                                    k = j - i,
                                                    l = j + b.collisionHeight - h - i,
                                                    m = "top" === b.my[1],
                                                    n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                                                    o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                                                    p = -2 * b.offset[1];
                                                  0 > k ? (0 > (d = a.top + n + o + p + b.collisionHeight - h - f) || g(k) > d) && (a.top += n + o + p) : l > 0 && ((c = a.top - b.collisionPosition.marginTop + n + o + p - i) > 0 || l > g(c)) && (a.top += n + o + p)
                                                }
                                              },
                                              flipfit: {
                                                left: function() {
                                                  a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                                                },
                                                top: function() {
                                                  a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                                                }
                                              }
                                            }
                                          }(), a.ui.position, a.extend(a.expr[":"], {
                                            data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                                              return function(c) {
                                                return !!a.data(c, b)
                                              }
                                            }) : function(b, c, d) {
                                              return !!a.data(b, d[3])
                                            }
                                          }), a.fn.extend({
                                            disableSelection: function() {
                                              var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                                              return function() {
                                                return this.on(a + ".ui-disableSelection", function(a) {
                                                  a.preventDefault()
                                                })
                                              }
                                            }(),
                                            enableSelection: function() {
                                              return this.off(".ui-disableSelection")
                                            }
                                          });
                                        var k = "ui-effects-",
                                          l = "ui-effects-style",
                                          m = "ui-effects-animated",
                                          n = a;
                                        a.effects = {
                                            effect: {}
                                          },
                                          function(a, b) {
                                            function c(a, b, c) {
                                              var d = k[b.type] || {};
                                              return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
                                            }

                                            function d(c) {
                                              var d = i(),
                                                e = d._rgba = [];
                                              return c = c.toLowerCase(), n(h, function(a, f) {
                                                var g, h = f.re.exec(c),
                                                  i = h && f.parse(h),
                                                  k = f.space || "rgba";
                                                return i ? (g = d[k](i), d[j[k].cache] = g[j[k].cache], e = d._rgba = g._rgba, !1) : b
                                              }), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c]
                                            }

                                            function e(a, b, c) {
                                              return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
                                            }
                                            var f, g = /^([\-+])=\s*(\d+\.?\d*)/,
                                              h = [{
                                                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                                parse: function(a) {
                                                  return [a[1], a[2], a[3], a[4]]
                                                }
                                              }, {
                                                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                                parse: function(a) {
                                                  return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                                                }
                                              }, {
                                                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                                                parse: function(a) {
                                                  return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                                                }
                                              }, {
                                                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                                                parse: function(a) {
                                                  return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                                                }
                                              }, {
                                                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                                space: "hsla",
                                                parse: function(a) {
                                                  return [a[1], a[2] / 100, a[3] / 100, a[4]]
                                                }
                                              }],
                                              i = a.Color = function(b, c, d, e) {
                                                return new a.Color.fn.parse(b, c, d, e)
                                              },
                                              j = {
                                                rgba: {
                                                  props: {
                                                    red: {
                                                      idx: 0,
                                                      type: "byte"
                                                    },
                                                    green: {
                                                      idx: 1,
                                                      type: "byte"
                                                    },
                                                    blue: {
                                                      idx: 2,
                                                      type: "byte"
                                                    }
                                                  }
                                                },
                                                hsla: {
                                                  props: {
                                                    hue: {
                                                      idx: 0,
                                                      type: "degrees"
                                                    },
                                                    saturation: {
                                                      idx: 1,
                                                      type: "percent"
                                                    },
                                                    lightness: {
                                                      idx: 2,
                                                      type: "percent"
                                                    }
                                                  }
                                                }
                                              },
                                              k = {
                                                byte: {
                                                  floor: !0,
                                                  max: 255
                                                },
                                                percent: {
                                                  max: 1
                                                },
                                                degrees: {
                                                  mod: 360,
                                                  floor: !0
                                                }
                                              },
                                              l = i.support = {},
                                              m = a("<p>")[0],
                                              n = a.each;
                                            m.style.cssText = "background-color:rgba(1,1,1,.5)", l.rgba = m.style.backgroundColor.indexOf("rgba") > -1, n(j, function(a, b) {
                                              b.cache = "_" + a, b.props.alpha = {
                                                idx: 3,
                                                type: "percent",
                                                def: 1
                                              }
                                            }), i.fn = a.extend(i.prototype, {
                                              parse: function(e, g, h, k) {
                                                if (e === b) return this._rgba = [null, null, null, null], this;
                                                (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                                                var l = this,
                                                  m = a.type(e),
                                                  o = this._rgba = [];
                                                return g !== b && (e = [e, g, h, k], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (n(j.rgba.props, function(a, b) {
                                                  o[b.idx] = c(e[b.idx], b)
                                                }), this) : "object" === m ? (e instanceof i ? n(j, function(a, b) {
                                                  e[b.cache] && (l[b.cache] = e[b.cache].slice())
                                                }) : n(j, function(b, d) {
                                                  var f = d.cache;
                                                  n(d.props, function(a, b) {
                                                    if (!l[f] && d.to) {
                                                      if ("alpha" === a || null == e[a]) return;
                                                      l[f] = d.to(l._rgba)
                                                    }
                                                    l[f][b.idx] = c(e[a], b, !0)
                                                  }), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                                                }), this) : b
                                              },
                                              is: function(a) {
                                                var c = i(a),
                                                  d = !0,
                                                  e = this;
                                                return n(j, function(a, f) {
                                                  var g, h = c[f.cache];
                                                  return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], n(f.props, function(a, c) {
                                                    return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b
                                                  })), d
                                                }), d
                                              },
                                              _space: function() {
                                                var a = [],
                                                  b = this;
                                                return n(j, function(c, d) {
                                                  b[d.cache] && a.push(c)
                                                }), a.pop()
                                              },
                                              transition: function(a, b) {
                                                var d = i(a),
                                                  e = d._space(),
                                                  f = j[e],
                                                  g = 0 === this.alpha() ? i("transparent") : this,
                                                  h = g[f.cache] || f.to(g._rgba),
                                                  l = h.slice();
                                                return d = d[f.cache], n(f.props, function(a, e) {
                                                  var f = e.idx,
                                                    g = h[f],
                                                    i = d[f],
                                                    j = k[e.type] || {};
                                                  null !== i && (null === g ? l[f] = i : (j.mod && (i - g > j.mod / 2 ? g += j.mod : g - i > j.mod / 2 && (g -= j.mod)), l[f] = c((i - g) * b + g, e)))
                                                }), this[e](l)
                                              },
                                              blend: function(b) {
                                                if (1 === this._rgba[3]) return this;
                                                var c = this._rgba.slice(),
                                                  d = c.pop(),
                                                  e = i(b)._rgba;
                                                return i(a.map(c, function(a, b) {
                                                  return (1 - d) * e[b] + d * a
                                                }))
                                              },
                                              toRgbaString: function() {
                                                var b = "rgba(",
                                                  c = a.map(this._rgba, function(a, b) {
                                                    return null == a ? b > 2 ? 1 : 0 : a
                                                  });
                                                return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                                              },
                                              toHslaString: function() {
                                                var b = "hsla(",
                                                  c = a.map(this.hsla(), function(a, b) {
                                                    return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                                                  });
                                                return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                                              },
                                              toHexString: function(b) {
                                                var c = this._rgba.slice(),
                                                  d = c.pop();
                                                return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                                                  return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                                                }).join("")
                                              },
                                              toString: function() {
                                                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                                              }
                                            }), i.fn.parse.prototype = i.fn, j.hsla.to = function(a) {
                                              if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                                              var b, c, d = a[0] / 255,
                                                e = a[1] / 255,
                                                f = a[2] / 255,
                                                g = a[3],
                                                h = Math.max(d, e, f),
                                                i = Math.min(d, e, f),
                                                j = h - i,
                                                k = h + i,
                                                l = .5 * k;
                                              return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
                                            }, j.hsla.from = function(a) {
                                              if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                                              var b = a[0] / 360,
                                                c = a[1],
                                                d = a[2],
                                                f = a[3],
                                                g = .5 >= d ? d * (1 + c) : d + c - d * c,
                                                h = 2 * d - g;
                                              return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
                                            }, n(j, function(d, e) {
                                              var f = e.props,
                                                h = e.cache,
                                                j = e.to,
                                                k = e.from;
                                              i.fn[d] = function(d) {
                                                if (j && !this[h] && (this[h] = j(this._rgba)), d === b) return this[h].slice();
                                                var e, g = a.type(d),
                                                  l = "array" === g || "object" === g ? d : arguments,
                                                  m = this[h].slice();
                                                return n(f, function(a, b) {
                                                  var d = l["object" === g ? a : b.idx];
                                                  null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                                                }), k ? (e = i(k(m)), e[h] = m, e) : i(m)
                                              }, n(f, function(b, c) {
                                                i.fn[b] || (i.fn[b] = function(e) {
                                                  var f, h = a.type(e),
                                                    i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                                                    j = this[i](),
                                                    k = j[c.idx];
                                                  return "undefined" === h ? k : ("function" === h && (e = e.call(this, k), h = a.type(e)), null == e && c.empty ? this : ("string" === h && (f = g.exec(e)) && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1)), j[c.idx] = e, this[i](j)))
                                                })
                                              })
                                            }), i.hook = function(b) {
                                              var c = b.split(" ");
                                              n(c, function(b, c) {
                                                a.cssHooks[c] = {
                                                  set: function(b, e) {
                                                    var f, g, h = "";
                                                    if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                                      if (e = i(f || e), !l.rgba && 1 !== e._rgba[3]) {
                                                        for (g = "backgroundColor" === c ? b.parentNode : b;
                                                          ("" === h || "transparent" === h) && g && g.style;) try {
                                                          h = a.css(g, "backgroundColor"), g = g.parentNode
                                                        } catch (a) {}
                                                        e = e.blend(h && "transparent" !== h ? h : "_default")
                                                      }
                                                      e = e.toRgbaString()
                                                    }
                                                    try {
                                                      b.style[c] = e
                                                    } catch (a) {}
                                                  }
                                                }, a.fx.step[c] = function(b) {
                                                  b.colorInit || (b.start = i(b.elem, c), b.end = i(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                                                }
                                              })
                                            }, i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), a.cssHooks.borderColor = {
                                              expand: function(a) {
                                                var b = {};
                                                return n(["Top", "Right", "Bottom", "Left"], function(c, d) {
                                                  b["border" + d + "Color"] = a
                                                }), b
                                              }
                                            }, f = a.Color.names = {
                                              aqua: "#00ffff",
                                              black: "#000000",
                                              blue: "#0000ff",
                                              fuchsia: "#ff00ff",
                                              gray: "#808080",
                                              green: "#008000",
                                              lime: "#00ff00",
                                              maroon: "#800000",
                                              navy: "#000080",
                                              olive: "#808000",
                                              purple: "#800080",
                                              red: "#ff0000",
                                              silver: "#c0c0c0",
                                              teal: "#008080",
                                              white: "#ffffff",
                                              yellow: "#ffff00",
                                              transparent: [null, null, null, 0],
                                              _default: "#ffffff"
                                            }
                                          }(n),
                                          function() {
                                            function b(b) {
                                              var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                                                f = {};
                                              if (e && e.length && e[0] && e[e[0]])
                                                for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                                              else
                                                for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
                                              return f
                                            }

                                            function c(b, c) {
                                              var d, f, g = {};
                                              for (d in c) f = c[d], b[d] !== f && (e[d] || (a.fx.step[d] || !isNaN(parseFloat(f))) && (g[d] = f));
                                              return g
                                            }
                                            var d = ["add", "remove", "toggle"],
                                              e = {
                                                border: 1,
                                                borderBottom: 1,
                                                borderColor: 1,
                                                borderLeft: 1,
                                                borderRight: 1,
                                                borderTop: 1,
                                                borderWidth: 1,
                                                margin: 1,
                                                padding: 1
                                              };
                                            a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
                                              a.fx.step[c] = function(a) {
                                                ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (n.style(a.elem, c, a.end), a.setAttr = !0)
                                              }
                                            }), a.fn.addBack || (a.fn.addBack = function(a) {
                                              return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                                            }), a.effects.animateClass = function(e, f, g, h) {
                                              var i = a.speed(f, g, h);
                                              return this.queue(function() {
                                                var f, g = a(this),
                                                  h = g.attr("class") || "",
                                                  j = i.children ? g.find("*").addBack() : g;
                                                j = j.map(function() {
                                                  return {
                                                    el: a(this),
                                                    start: b(this)
                                                  }
                                                }), f = function() {
                                                  a.each(d, function(a, b) {
                                                    e[b] && g[b + "Class"](e[b])
                                                  })
                                                }, f(), j = j.map(function() {
                                                  return this.end = b(this.el[0]), this.diff = c(this.start, this.end), this
                                                }), g.attr("class", h), j = j.map(function() {
                                                  var b = this,
                                                    c = a.Deferred(),
                                                    d = a.extend({}, i, {
                                                      queue: !1,
                                                      complete: function() {
                                                        c.resolve(b)
                                                      }
                                                    });
                                                  return this.el.animate(this.diff, d), c.promise()
                                                }), a.when.apply(a, j.get()).done(function() {
                                                  f(), a.each(arguments, function() {
                                                    var b = this.el;
                                                    a.each(this.diff, function(a) {
                                                      b.css(a, "")
                                                    })
                                                  }), i.complete.call(g[0])
                                                })
                                              })
                                            }, a.fn.extend({
                                              addClass: function(b) {
                                                return function(c, d, e, f) {
                                                  return d ? a.effects.animateClass.call(this, {
                                                    add: c
                                                  }, d, e, f) : b.apply(this, arguments)
                                                }
                                              }(a.fn.addClass),
                                              removeClass: function(b) {
                                                return function(c, d, e, f) {
                                                  return arguments.length > 1 ? a.effects.animateClass.call(this, {
                                                    remove: c
                                                  }, d, e, f) : b.apply(this, arguments)
                                                }
                                              }(a.fn.removeClass),
                                              toggleClass: function(b) {
                                                return function(c, d, e, f, g) {
                                                  return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
                                                    add: c
                                                  } : {
                                                    remove: c
                                                  }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                                                    toggle: c
                                                  }, d, e, f)
                                                }
                                              }(a.fn.toggleClass),
                                              switchClass: function(b, c, d, e, f) {
                                                return a.effects.animateClass.call(this, {
                                                  add: c,
                                                  remove: b
                                                }, d, e, f)
                                              }
                                            })
                                          }(),
                                          function() {
                                            function b(b, c, d, e) {
                                              return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                                                effect: b
                                              }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
                                            }

                                            function c(b) {
                                              return !(b && "number" != typeof b && !a.fx.speeds[b]) || ("string" == typeof b && !a.effects.effect[b] || (!!a.isFunction(b) || "object" == typeof b && !b.effect))
                                            }

                                            function d(a, b) {
                                              var c = b.outerWidth(),
                                                d = b.outerHeight(),
                                                e = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                                                f = e.exec(a) || ["", 0, c, d, 0];
                                              return {
                                                top: parseFloat(f[1]) || 0,
                                                right: "auto" === f[2] ? c : parseFloat(f[2]),
                                                bottom: "auto" === f[3] ? d : parseFloat(f[3]),
                                                left: parseFloat(f[4]) || 0
                                              }
                                            }
                                            a.expr && a.expr.filters && a.expr.filters.animated && (a.expr.filters.animated = function(b) {
                                              return function(c) {
                                                return !!a(c).data(m) || b(c)
                                              }
                                            }(a.expr.filters.animated)), !1 !== a.uiBackCompat && a.extend(a.effects, {
                                              save: function(a, b) {
                                                for (var c = 0, d = b.length; d > c; c++) null !== b[c] && a.data(k + b[c], a[0].style[b[c]])
                                              },
                                              restore: function(a, b) {
                                                for (var c, d = 0, e = b.length; e > d; d++) null !== b[d] && (c = a.data(k + b[d]), a.css(b[d], c))
                                              },
                                              setMode: function(a, b) {
                                                return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                                              },
                                              createWrapper: function(b) {
                                                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                                                var c = {
                                                    width: b.outerWidth(!0),
                                                    height: b.outerHeight(!0),
                                                    float: b.css("float")
                                                  },
                                                  d = a("<div></div>").addClass("ui-effects-wrapper").css({
                                                    fontSize: "100%",
                                                    background: "transparent",
                                                    border: "none",
                                                    margin: 0,
                                                    padding: 0
                                                  }),
                                                  e = {
                                                    width: b.width(),
                                                    height: b.height()
                                                  },
                                                  f = document.activeElement;
                                                try {
                                                  f.id
                                                } catch (a) {
                                                  f = document.body
                                                }
                                                return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).trigger("focus"), d = b.parent(), "static" === b.css("position") ? (d.css({
                                                  position: "relative"
                                                }), b.css({
                                                  position: "relative"
                                                })) : (a.extend(c, {
                                                  position: b.css("position"),
                                                  zIndex: b.css("z-index")
                                                }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                                                  c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                                                }), b.css({
                                                  position: "relative",
                                                  top: 0,
                                                  left: 0,
                                                  right: "auto",
                                                  bottom: "auto"
                                                })), b.css(e), d.css(c).show()
                                              },
                                              removeWrapper: function(b) {
                                                var c = document.activeElement;
                                                return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).trigger("focus")), b
                                              }
                                            }), a.extend(a.effects, {
                                              version: "1.12.1",
                                              define: function(b, c, d) {
                                                return d || (d = c, c = "effect"), a.effects.effect[b] = d, a.effects.effect[b].mode = c, d
                                              },
                                              scaledDimensions: function(a, b, c) {
                                                if (0 === b) return {
                                                  height: 0,
                                                  width: 0,
                                                  outerHeight: 0,
                                                  outerWidth: 0
                                                };
                                                var d = "horizontal" !== c ? (b || 100) / 100 : 1,
                                                  e = "vertical" !== c ? (b || 100) / 100 : 1;
                                                return {
                                                  height: a.height() * e,
                                                  width: a.width() * d,
                                                  outerHeight: a.outerHeight() * e,
                                                  outerWidth: a.outerWidth() * d
                                                }
                                              },
                                              clipToBox: function(a) {
                                                return {
                                                  width: a.clip.right - a.clip.left,
                                                  height: a.clip.bottom - a.clip.top,
                                                  left: a.clip.left,
                                                  top: a.clip.top
                                                }
                                              },
                                              unshift: function(a, b, c) {
                                                var d = a.queue();
                                                b > 1 && d.splice.apply(d, [1, 0].concat(d.splice(b, c))), a.dequeue()
                                              },
                                              saveStyle: function(a) {
                                                a.data(l, a[0].style.cssText)
                                              },
                                              restoreStyle: function(a) {
                                                a[0].style.cssText = a.data(l) || "", a.removeData(l)
                                              },
                                              mode: function(a, b) {
                                                var c = a.is(":hidden");
                                                return "toggle" === b && (b = c ? "show" : "hide"), (c ? "hide" === b : "show" === b) && (b = "none"), b
                                              },
                                              getBaseline: function(a, b) {
                                                var c, d;
                                                switch (a[0]) {
                                                  case "top":
                                                    c = 0;
                                                    break;
                                                  case "middle":
                                                    c = .5;
                                                    break;
                                                  case "bottom":
                                                    c = 1;
                                                    break;
                                                  default:
                                                    c = a[0] / b.height
                                                }
                                                switch (a[1]) {
                                                  case "left":
                                                    d = 0;
                                                    break;
                                                  case "center":
                                                    d = .5;
                                                    break;
                                                  case "right":
                                                    d = 1;
                                                    break;
                                                  default:
                                                    d = a[1] / b.width
                                                }
                                                return {
                                                  x: d,
                                                  y: c
                                                }
                                              },
                                              createPlaceholder: function(b) {
                                                var c, d = b.css("position"),
                                                  e = b.position();
                                                return b.css({
                                                  marginTop: b.css("marginTop"),
                                                  marginBottom: b.css("marginBottom"),
                                                  marginLeft: b.css("marginLeft"),
                                                  marginRight: b.css("marginRight")
                                                }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()), /^(static|relative)/.test(d) && (d = "absolute", c = a("<" + b[0].nodeName + ">").insertAfter(b).css({
                                                  display: /^(inline|ruby)/.test(b.css("display")) ? "inline-block" : "block",
                                                  visibility: "hidden",
                                                  marginTop: b.css("marginTop"),
                                                  marginBottom: b.css("marginBottom"),
                                                  marginLeft: b.css("marginLeft"),
                                                  marginRight: b.css("marginRight"),
                                                  float: b.css("float")
                                                }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).addClass("ui-effects-placeholder"), b.data(k + "placeholder", c)), b.css({
                                                  position: d,
                                                  left: e.left,
                                                  top: e.top
                                                }), c
                                              },
                                              removePlaceholder: function(a) {
                                                var b = k + "placeholder",
                                                  c = a.data(b);
                                                c && (c.remove(), a.removeData(b))
                                              },
                                              cleanUp: function(b) {
                                                a.effects.restoreStyle(b), a.effects.removePlaceholder(b)
                                              },
                                              setTransition: function(b, c, d, e) {
                                                return e = e || {}, a.each(c, function(a, c) {
                                                  var f = b.cssUnit(c);
                                                  f[0] > 0 && (e[c] = f[0] * d + f[1])
                                                }), e
                                              }
                                            }), a.fn.extend({
                                              effect: function() {
                                                function c(b) {
                                                  function c() {
                                                    h.removeData(m), a.effects.cleanUp(h), "hide" === d.mode && h.hide(), g()
                                                  }

                                                  function g() {
                                                    a.isFunction(i) && i.call(h[0]), a.isFunction(b) && b()
                                                  }
                                                  var h = a(this);
                                                  d.mode = k.shift(), !1 === a.uiBackCompat || f ? "none" === d.mode ? (h[j](), g()) : e.call(h[0], d, c) : (h.is(":hidden") ? "hide" === j : "show" === j) ? (h[j](), g()) : e.call(h[0], d, g)
                                                }
                                                var d = b.apply(this, arguments),
                                                  e = a.effects.effect[d.effect],
                                                  f = e.mode,
                                                  g = d.queue,
                                                  h = g || "fx",
                                                  i = d.complete,
                                                  j = d.mode,
                                                  k = [],
                                                  l = function(b) {
                                                    var c = a(this),
                                                      d = a.effects.mode(c, j) || f;
                                                    c.data(m, !0), k.push(d), f && ("show" === d || d === f && "hide" === d) && c.show(), f && "none" === d || a.effects.saveStyle(c), a.isFunction(b) && b()
                                                  };
                                                return a.fx.off || !e ? j ? this[j](d.duration, i) : this.each(function() {
                                                  i && i.call(this)
                                                }) : !1 === g ? this.each(l).each(c) : this.queue(h, l).queue(h, c)
                                              },
                                              show: function(a) {
                                                return function(d) {
                                                  if (c(d)) return a.apply(this, arguments);
                                                  var e = b.apply(this, arguments);
                                                  return e.mode = "show", this.effect.call(this, e)
                                                }
                                              }(a.fn.show),
                                              hide: function(a) {
                                                return function(d) {
                                                  if (c(d)) return a.apply(this, arguments);
                                                  var e = b.apply(this, arguments);
                                                  return e.mode = "hide", this.effect.call(this, e)
                                                }
                                              }(a.fn.hide),
                                              toggle: function(a) {
                                                return function(d) {
                                                  if (c(d) || "boolean" == typeof d) return a.apply(this, arguments);
                                                  var e = b.apply(this, arguments);
                                                  return e.mode = "toggle", this.effect.call(this, e)
                                                }
                                              }(a.fn.toggle),
                                              cssUnit: function(b) {
                                                var c = this.css(b),
                                                  d = [];
                                                return a.each(["em", "px", "%", "pt"], function(a, b) {
                                                  c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                                                }), d
                                              },
                                              cssClip: function(a) {
                                                return a ? this.css("clip", "rect(" + a.top + "px " + a.right + "px " + a.bottom + "px " + a.left + "px)") : d(this.css("clip"), this)
                                              },
                                              transfer: function(b, c) {
                                                var d = a(this),
                                                  e = a(b.to),
                                                  f = "fixed" === e.css("position"),
                                                  g = a("body"),
                                                  h = f ? g.scrollTop() : 0,
                                                  i = f ? g.scrollLeft() : 0,
                                                  j = e.offset(),
                                                  k = {
                                                    top: j.top - h,
                                                    left: j.left - i,
                                                    height: e.innerHeight(),
                                                    width: e.innerWidth()
                                                  },
                                                  l = d.offset(),
                                                  m = a("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(b.className).css({
                                                    top: l.top - h,
                                                    left: l.left - i,
                                                    height: d.innerHeight(),
                                                    width: d.innerWidth(),
                                                    position: f ? "fixed" : "absolute"
                                                  }).animate(k, b.duration, b.easing, function() {
                                                    m.remove(), a.isFunction(c) && c()
                                                  })
                                              }
                                            }), a.fx.step.clip = function(b) {
                                              b.clipInit || (b.start = a(b.elem).cssClip(), "string" == typeof b.end && (b.end = d(b.end, b.elem)), b.clipInit = !0), a(b.elem).cssClip({
                                                top: b.pos * (b.end.top - b.start.top) + b.start.top,
                                                right: b.pos * (b.end.right - b.start.right) + b.start.right,
                                                bottom: b.pos * (b.end.bottom - b.start.bottom) + b.start.bottom,
                                                left: b.pos * (b.end.left - b.start.left) + b.start.left
                                              })
                                            }
                                          }(),
                                          function() {
                                            var b = {};
                                            a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                                              b[c] = function(b) {
                                                return Math.pow(b, a + 2)
                                              }
                                            }), a.extend(b, {
                                              Sine: function(a) {
                                                return 1 - Math.cos(a * Math.PI / 2)
                                              },
                                              Circ: function(a) {
                                                return 1 - Math.sqrt(1 - a * a)
                                              },
                                              Elastic: function(a) {
                                                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                                              },
                                              Back: function(a) {
                                                return a * a * (3 * a - 2)
                                              },
                                              Bounce: function(a) {
                                                for (var b, c = 4;
                                                  ((b = Math.pow(2, --c)) - 1) / 11 > a;);
                                                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                                              }
                                            }), a.each(b, function(b, c) {
                                              a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                                                return 1 - c(1 - a)
                                              }, a.easing["easeInOut" + b] = function(a) {
                                                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                                              }
                                            })
                                          }();
                                        a.effects;
                                        a.effects.define("blind", "hide", function(b, c) {
                                          var d = {
                                              up: ["bottom", "top"],
                                              vertical: ["bottom", "top"],
                                              down: ["top", "bottom"],
                                              left: ["right", "left"],
                                              horizontal: ["right", "left"],
                                              right: ["left", "right"]
                                            },
                                            e = a(this),
                                            f = b.direction || "up",
                                            g = e.cssClip(),
                                            h = {
                                              clip: a.extend({}, g)
                                            },
                                            i = a.effects.createPlaceholder(e);
                                          h.clip[d[f][0]] = h.clip[d[f][1]], "show" === b.mode && (e.cssClip(h.clip), i && i.css(a.effects.clipToBox(h)), h.clip = g), i && i.animate(a.effects.clipToBox(h), b.duration, b.easing), e.animate(h, {
                                            queue: !1,
                                            duration: b.duration,
                                            easing: b.easing,
                                            complete: c
                                          })
                                        }), a.effects.define("bounce", function(b, c) {
                                          var d, e, f, g = a(this),
                                            h = b.mode,
                                            i = "hide" === h,
                                            j = "show" === h,
                                            k = b.direction || "up",
                                            l = b.distance,
                                            m = b.times || 5,
                                            n = 2 * m + (j || i ? 1 : 0),
                                            o = b.duration / n,
                                            p = b.easing,
                                            q = "up" === k || "down" === k ? "top" : "left",
                                            r = "up" === k || "left" === k,
                                            s = 0,
                                            t = g.queue().length;
                                          for (a.effects.createPlaceholder(g), f = g.css(q), l || (l = g["top" === q ? "outerHeight" : "outerWidth"]() / 3), j && (e = {
                                              opacity: 1
                                            }, e[q] = f, g.css("opacity", 0).css(q, r ? 2 * -l : 2 * l).animate(e, o, p)), i && (l /= Math.pow(2, m - 1)), e = {}, e[q] = f; m > s; s++) d = {}, d[q] = (r ? "-=" : "+=") + l, g.animate(d, o, p).animate(e, o, p), l = i ? 2 * l : l / 2;
                                          i && (d = {
                                            opacity: 0
                                          }, d[q] = (r ? "-=" : "+=") + l, g.animate(d, o, p)), g.queue(c), a.effects.unshift(g, t, n + 1)
                                        }), a.effects.define("clip", "hide", function(b, c) {
                                          var d, e = {},
                                            f = a(this),
                                            g = b.direction || "vertical",
                                            h = "both" === g,
                                            i = h || "horizontal" === g,
                                            j = h || "vertical" === g;
                                          d = f.cssClip(), e.clip = {
                                            top: j ? (d.bottom - d.top) / 2 : d.top,
                                            right: i ? (d.right - d.left) / 2 : d.right,
                                            bottom: j ? (d.bottom - d.top) / 2 : d.bottom,
                                            left: i ? (d.right - d.left) / 2 : d.left
                                          }, a.effects.createPlaceholder(f), "show" === b.mode && (f.cssClip(e.clip), e.clip = d), f.animate(e, {
                                            queue: !1,
                                            duration: b.duration,
                                            easing: b.easing,
                                            complete: c
                                          })
                                        }), a.effects.define("drop", "hide", function(b, c) {
                                          var d, e = a(this),
                                            f = b.mode,
                                            g = "show" === f,
                                            h = b.direction || "left",
                                            i = "up" === h || "down" === h ? "top" : "left",
                                            j = "up" === h || "left" === h ? "-=" : "+=",
                                            k = "+=" === j ? "-=" : "+=",
                                            l = {
                                              opacity: 0
                                            };
                                          a.effects.createPlaceholder(e), d = b.distance || e["top" === i ? "outerHeight" : "outerWidth"](!0) / 2, l[i] = j + d, g && (e.css(l), l[i] = k + d, l.opacity = 1), e.animate(l, {
                                            queue: !1,
                                            duration: b.duration,
                                            easing: b.easing,
                                            complete: c
                                          })
                                        }), a.effects.define("explode", "hide", function(b, c) {
                                          function d() {
                                            t.push(this), t.length === l * m && e()
                                          }

                                          function e() {
                                            n.css({
                                              visibility: "visible"
                                            }), a(t).remove(), c()
                                          }
                                          var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3,
                                            m = l,
                                            n = a(this),
                                            o = b.mode,
                                            p = "show" === o,
                                            q = n.show().css("visibility", "hidden").offset(),
                                            r = Math.ceil(n.outerWidth() / m),
                                            s = Math.ceil(n.outerHeight() / l),
                                            t = [];
                                          for (f = 0; l > f; f++)
                                            for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
                                              position: "absolute",
                                              visibility: "visible",
                                              left: -g * r,
                                              top: -f * s
                                            }).parent().addClass("ui-effects-explode").css({
                                              position: "absolute",
                                              overflow: "hidden",
                                              width: r,
                                              height: s,
                                              left: h + (p ? j * r : 0),
                                              top: i + (p ? k * s : 0),
                                              opacity: p ? 0 : 1
                                            }).animate({
                                              left: h + (p ? 0 : j * r),
                                              top: i + (p ? 0 : k * s),
                                              opacity: p ? 1 : 0
                                            }, b.duration || 500, b.easing, d)
                                        }), a.effects.define("fade", "toggle", function(b, c) {
                                          var d = "show" === b.mode;
                                          a(this).css("opacity", d ? 0 : 1).animate({
                                            opacity: d ? 1 : 0
                                          }, {
                                            queue: !1,
                                            duration: b.duration,
                                            easing: b.easing,
                                            complete: c
                                          })
                                        }), a.effects.define("fold", "hide", function(b, c) {
                                          var d = a(this),
                                            e = b.mode,
                                            f = "show" === e,
                                            g = "hide" === e,
                                            h = b.size || 15,
                                            i = /([0-9]+)%/.exec(h),
                                            j = !!b.horizFirst,
                                            k = j ? ["right", "bottom"] : ["bottom", "right"],
                                            l = b.duration / 2,
                                            m = a.effects.createPlaceholder(d),
                                            n = d.cssClip(),
                                            o = {
                                              clip: a.extend({}, n)
                                            },
                                            p = {
                                              clip: a.extend({}, n)
                                            },
                                            q = [n[k[0]], n[k[1]]],
                                            r = d.queue().length;
                                          i && (h = parseInt(i[1], 10) / 100 * q[g ? 0 : 1]), o.clip[k[0]] = h, p.clip[k[0]] = h, p.clip[k[1]] = 0, f && (d.cssClip(p.clip), m && m.css(a.effects.clipToBox(p)), p.clip = n), d.queue(function(c) {
                                            m && m.animate(a.effects.clipToBox(o), l, b.easing).animate(a.effects.clipToBox(p), l, b.easing), c()
                                          }).animate(o, l, b.easing).animate(p, l, b.easing).queue(c), a.effects.unshift(d, r, 4)
                                        }), a.effects.define("highlight", "show", function(b, c) {
                                          var d = a(this),
                                            e = {
                                              backgroundColor: d.css("backgroundColor")
                                            };
                                          "hide" === b.mode && (e.opacity = 0), a.effects.saveStyle(d), d.css({
                                            backgroundImage: "none",
                                            backgroundColor: b.color || "#ffff99"
                                          }).animate(e, {
                                            queue: !1,
                                            duration: b.duration,
                                            easing: b.easing,
                                            complete: c
                                          })
                                        }), a.effects.define("size", function(b, c) {
                                          var d, e, f, g = a(this),
                                            h = ["fontSize"],
                                            i = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                                            j = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                                            k = b.mode,
                                            l = "effect" !== k,
                                            m = b.scale || "both",
                                            n = b.origin || ["middle", "center"],
                                            o = g.css("position"),
                                            p = g.position(),
                                            q = a.effects.scaledDimensions(g),
                                            r = b.from || q,
                                            s = b.to || a.effects.scaledDimensions(g, 0);
                                          a.effects.createPlaceholder(g), "show" === k && (f = r, r = s, s = f), e = {
                                            from: {
                                              y: r.height / q.height,
                                              x: r.width / q.width
                                            },
                                            to: {
                                              y: s.height / q.height,
                                              x: s.width / q.width
                                            }
                                          }, ("box" === m || "both" === m) && (e.from.y !== e.to.y && (r = a.effects.setTransition(g, i, e.from.y, r), s = a.effects.setTransition(g, i, e.to.y, s)), e.from.x !== e.to.x && (r = a.effects.setTransition(g, j, e.from.x, r), s = a.effects.setTransition(g, j, e.to.x, s))), ("content" === m || "both" === m) && e.from.y !== e.to.y && (r = a.effects.setTransition(g, h, e.from.y, r), s = a.effects.setTransition(g, h, e.to.y, s)), n && (d = a.effects.getBaseline(n, q), r.top = (q.outerHeight - r.outerHeight) * d.y + p.top, r.left = (q.outerWidth - r.outerWidth) * d.x + p.left, s.top = (q.outerHeight - s.outerHeight) * d.y + p.top, s.left = (q.outerWidth - s.outerWidth) * d.x + p.left), g.css(r), ("content" === m || "both" === m) && (i = i.concat(["marginTop", "marginBottom"]).concat(h), j = j.concat(["marginLeft", "marginRight"]), g.find("*[width]").each(function() {
                                            var c = a(this),
                                              d = a.effects.scaledDimensions(c),
                                              f = {
                                                height: d.height * e.from.y,
                                                width: d.width * e.from.x,
                                                outerHeight: d.outerHeight * e.from.y,
                                                outerWidth: d.outerWidth * e.from.x
                                              },
                                              g = {
                                                height: d.height * e.to.y,
                                                width: d.width * e.to.x,
                                                outerHeight: d.height * e.to.y,
                                                outerWidth: d.width * e.to.x
                                              };
                                            e.from.y !== e.to.y && (f = a.effects.setTransition(c, i, e.from.y, f), g = a.effects.setTransition(c, i, e.to.y, g)), e.from.x !== e.to.x && (f = a.effects.setTransition(c, j, e.from.x, f), g = a.effects.setTransition(c, j, e.to.x, g)), l && a.effects.saveStyle(c), c.css(f), c.animate(g, b.duration, b.easing, function() {
                                              l && a.effects.restoreStyle(c)
                                            })
                                          })), g.animate(s, {
                                            queue: !1,
                                            duration: b.duration,
                                            easing: b.easing,
                                            complete: function() {
                                              var b = g.offset();
                                              0 === s.opacity && g.css("opacity", r.opacity), l || (g.css("position", "static" === o ? "relative" : o).offset(b), a.effects.saveStyle(g)), c()
                                            }
                                          })
                                        }), a.effects.define("scale", function(b, c) {
                                          var d = a(this),
                                            e = b.mode,
                                            f = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "effect" !== e ? 0 : 100),
                                            g = a.extend(!0, {
                                              from: a.effects.scaledDimensions(d),
                                              to: a.effects.scaledDimensions(d, f, b.direction || "both"),
                                              origin: b.origin || ["middle", "center"]
                                            }, b);
                                          b.fade && (g.from.opacity = 1, g.to.opacity = 0), a.effects.effect.size.call(this, g, c)
                                        }), a.effects.define("puff", "hide", function(b, c) {
                                          var d = a.extend(!0, {}, b, {
                                            fade: !0,
                                            percent: parseInt(b.percent, 10) || 150
                                          });
                                          a.effects.effect.scale.call(this, d, c)
                                        }), a.effects.define("pulsate", "show", function(b, c) {
                                          var d = a(this),
                                            e = b.mode,
                                            f = "show" === e,
                                            g = "hide" === e,
                                            h = f || g,
                                            i = 2 * (b.times || 5) + (h ? 1 : 0),
                                            j = b.duration / i,
                                            k = 0,
                                            l = 1,
                                            m = d.queue().length;
                                          for ((f || !d.is(":visible")) && (d.css("opacity", 0).show(), k = 1); i > l; l++) d.animate({
                                            opacity: k
                                          }, j, b.easing), k = 1 - k;
                                          d.animate({
                                            opacity: k
                                          }, j, b.easing), d.queue(c), a.effects.unshift(d, m, i + 1)
                                        }), a.effects.define("shake", function(b, c) {
                                          var d = 1,
                                            e = a(this),
                                            f = b.direction || "left",
                                            g = b.distance || 20,
                                            h = b.times || 3,
                                            i = 2 * h + 1,
                                            j = Math.round(b.duration / i),
                                            k = "up" === f || "down" === f ? "top" : "left",
                                            l = "up" === f || "left" === f,
                                            m = {},
                                            n = {},
                                            o = {},
                                            p = e.queue().length;
                                          for (a.effects.createPlaceholder(e), m[k] = (l ? "-=" : "+=") + g, n[k] = (l ? "+=" : "-=") + 2 * g, o[k] = (l ? "-=" : "+=") + 2 * g, e.animate(m, j, b.easing); h > d; d++) e.animate(n, j, b.easing).animate(o, j, b.easing);
                                          e.animate(n, j, b.easing).animate(m, j / 2, b.easing).queue(c), a.effects.unshift(e, p, i + 1)
                                        }), a.effects.define("slide", "show", function(b, c) {
                                          var d, e, f = a(this),
                                            g = {
                                              up: ["bottom", "top"],
                                              down: ["top", "bottom"],
                                              left: ["right", "left"],
                                              right: ["left", "right"]
                                            },
                                            h = b.mode,
                                            i = b.direction || "left",
                                            j = "up" === i || "down" === i ? "top" : "left",
                                            k = "up" === i || "left" === i,
                                            l = b.distance || f["top" === j ? "outerHeight" : "outerWidth"](!0),
                                            m = {};
                                          a.effects.createPlaceholder(f), d = f.cssClip(), e = f.position()[j], m[j] = (k ? -1 : 1) * l + e, m.clip = f.cssClip(), m.clip[g[i][1]] = m.clip[g[i][0]], "show" === h && (f.cssClip(m.clip), f.css(j, m[j]), m.clip = d, m[j] = e), f.animate(m, {
                                            queue: !1,
                                            duration: b.duration,
                                            easing: b.easing,
                                            complete: c
                                          })
                                        });
                                        !1 !== a.uiBackCompat && a.effects.define("transfer", function(b, c) {
                                          a(this).transfer(b, c)
                                        }), a.ui.focusable = function(c, d) {
                                          var e, f, g, h, i, j = c.nodeName.toLowerCase();
                                          return "area" === j ? (e = c.parentNode, f = e.name, !(!c.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']"), g.length > 0 && g.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(j) ? (h = !c.disabled) && (i = a(c).closest("fieldset")[0]) && (h = !i.disabled) : h = "a" === j ? c.href || d : d, h && a(c).is(":visible") && b(a(c)))
                                        }, a.extend(a.expr[":"], {
                                          focusable: function(b) {
                                            return a.ui.focusable(b, null != a.attr(b, "tabindex"))
                                          }
                                        }), a.ui.focusable, a.fn.form = function() {
                                          return "string" == typeof this[0].form ? this.closest("form") : a(this[0].form)
                                        }, a.ui.formResetMixin = {
                                          _formResetHandler: function() {
                                            var b = a(this);
                                            setTimeout(function() {
                                              var c = b.data("ui-form-reset-instances");
                                              a.each(c, function() {
                                                this.refresh()
                                              })
                                            })
                                          },
                                          _bindFormResetHandler: function() {
                                            if (this.form = this.element.form(), this.form.length) {
                                              var a = this.form.data("ui-form-reset-instances") || [];
                                              a.length || this.form.on("reset.ui-form-reset", this._formResetHandler), a.push(this), this.form.data("ui-form-reset-instances", a)
                                            }
                                          },
                                          _unbindFormResetHandler: function() {
                                            if (this.form.length) {
                                              var b = this.form.data("ui-form-reset-instances");
                                              b.splice(a.inArray(this, b), 1), b.length ? this.form.data("ui-form-reset-instances", b) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                                            }
                                          }
                                        }, "1.7" === a.fn.jquery.substring(0, 3) && (a.each(["Width", "Height"], function(b, c) {
                                          function d(b, c, d, f) {
                                            return a.each(e, function() {
                                              c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                                            }), c
                                          }
                                          var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                                            f = c.toLowerCase(),
                                            g = {
                                              innerWidth: a.fn.innerWidth,
                                              innerHeight: a.fn.innerHeight,
                                              outerWidth: a.fn.outerWidth,
                                              outerHeight: a.fn.outerHeight
                                            };
                                          a.fn["inner" + c] = function(b) {
                                            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                                              a(this).css(f, d(this, b) + "px")
                                            })
                                          }, a.fn["outer" + c] = function(b, e) {
                                            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                                              a(this).css(f, d(this, b, !0, e) + "px")
                                            })
                                          }
                                        }), a.fn.addBack = function(a) {
                                          return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                                        }), a.ui.keyCode = {
                                          BACKSPACE: 8,
                                          COMMA: 188,
                                          DELETE: 46,
                                          DOWN: 40,
                                          END: 35,
                                          ENTER: 13,
                                          ESCAPE: 27,
                                          HOME: 36,
                                          LEFT: 37,
                                          PAGE_DOWN: 34,
                                          PAGE_UP: 33,
                                          PERIOD: 190,
                                          RIGHT: 39,
                                          SPACE: 32,
                                          TAB: 9,
                                          UP: 38
                                        }, a.ui.escapeSelector = function() {
                                          var a = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
                                          return function(b) {
                                            return b.replace(a, "\\$1")
                                          }
                                        }(), a.fn.labels = function() {
                                          var b, c, d, e, f;
                                          return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), d = this.attr("id"), d && (b = this.eq(0).parents().last(), f = b.add(b.length ? b.siblings() : this.siblings()), c = "label[for='" + a.ui.escapeSelector(d) + "']", e = e.add(f.find(c).addBack(c))), this.pushStack(e))
                                        }, a.fn.scrollParent = function(b) {
                                          var c = this.css("position"),
                                            d = "absolute" === c,
                                            e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                                            f = this.parents().filter(function() {
                                              var b = a(this);
                                              return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                                            }).eq(0);
                                          return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
                                        }, a.extend(a.expr[":"], {
                                          tabbable: function(b) {
                                            var c = a.attr(b, "tabindex"),
                                              d = null != c;
                                            return (!d || c >= 0) && a.ui.focusable(b, d)
                                          }
                                        }), a.fn.extend({
                                          uniqueId: function() {
                                            var a = 0;
                                            return function() {
                                              return this.each(function() {
                                                this.id || (this.id = "ui-id-" + ++a)
                                              })
                                            }
                                          }(),
                                          removeUniqueId: function() {
                                            return this.each(function() {
                                              /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
                                            })
                                          }
                                        }), a.widget("ui.accordion", {
                                          version: "1.12.1",
                                          options: {
                                            active: 0,
                                            animate: {},
                                            classes: {
                                              "ui-accordion-header": "ui-corner-top",
                                              "ui-accordion-header-collapsed": "ui-corner-all",
                                              "ui-accordion-content": "ui-corner-bottom"
                                            },
                                            collapsible: !1,
                                            event: "click",
                                            header: "> li > :first-child, > :not(li):even",
                                            heightStyle: "auto",
                                            icons: {
                                              activeHeader: "ui-icon-triangle-1-s",
                                              header: "ui-icon-triangle-1-e"
                                            },
                                            activate: null,
                                            beforeActivate: null
                                          },
                                          hideProps: {
                                            borderTopWidth: "hide",
                                            borderBottomWidth: "hide",
                                            paddingTop: "hide",
                                            paddingBottom: "hide",
                                            height: "hide"
                                          },
                                          showProps: {
                                            borderTopWidth: "show",
                                            borderBottomWidth: "show",
                                            paddingTop: "show",
                                            paddingBottom: "show",
                                            height: "show"
                                          },
                                          _create: function() {
                                            var b = this.options;
                                            this.prevShow = this.prevHide = a(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), b.collapsible || !1 !== b.active && null != b.active || (b.active = 0), this._processPanels(), 0 > b.active && (b.active += this.headers.length), this._refresh()
                                          },
                                          _getCreateEventData: function() {
                                            return {
                                              header: this.active,
                                              panel: this.active.length ? this.active.next() : a()
                                            }
                                          },
                                          _createIcons: function() {
                                            var b, c, d = this.options.icons;
                                            d && (b = a("<span>"), this._addClass(b, "ui-accordion-header-icon", "ui-icon " + d.header), b.prependTo(this.headers), c = this.active.children(".ui-accordion-header-icon"), this._removeClass(c, d.header)._addClass(c, null, d.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
                                          },
                                          _destroyIcons: function() {
                                            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
                                          },
                                          _destroy: function() {
                                            var a;
                                            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && a.css("height", "")
                                          },
                                          _setOption: function(a, b) {
                                            return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || !1 !== this.options.active || this._activate(0), void("icons" === a && (this._destroyIcons(), b && this._createIcons())))
                                          },
                                          _setOptionDisabled: function(a) {
                                            this._super(a), this.element.attr("aria-disabled", a), this._toggleClass(null, "ui-state-disabled", !!a), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!a)
                                          },
                                          _keydown: function(b) {
                                            if (!b.altKey && !b.ctrlKey) {
                                              var c = a.ui.keyCode,
                                                d = this.headers.length,
                                                e = this.headers.index(b.target),
                                                f = !1;
                                              switch (b.keyCode) {
                                                case c.RIGHT:
                                                case c.DOWN:
                                                  f = this.headers[(e + 1) % d];
                                                  break;
                                                case c.LEFT:
                                                case c.UP:
                                                  f = this.headers[(e - 1 + d) % d];
                                                  break;
                                                case c.SPACE:
                                                case c.ENTER:
                                                  this._eventHandler(b);
                                                  break;
                                                case c.HOME:
                                                  f = this.headers[0];
                                                  break;
                                                case c.END:
                                                  f = this.headers[d - 1]
                                              }
                                              f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), a(f).trigger("focus"), b.preventDefault())
                                            }
                                          },
                                          _panelKeyDown: function(b) {
                                            b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().trigger("focus")
                                          },
                                          refresh: function() {
                                            var b = this.options;
                                            this._processPanels(), !1 === b.active && !0 === b.collapsible || !this.headers.length ? (b.active = !1, this.active = a()) : !1 === b.active ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                                          },
                                          _processPanels: function() {
                                            var a = this.headers,
                                              b = this.panels;
                                            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)))
                                          },
                                          _refresh: function() {
                                            var b, c = this.options,
                                              d = c.heightStyle,
                                              e = this.element.parent();
                                            this.active = this._findActive(c.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                                              var b = a(this),
                                                c = b.uniqueId().attr("id"),
                                                d = b.next(),
                                                e = d.uniqueId().attr("id");
                                              b.attr("aria-controls", e), d.attr("aria-labelledby", c)
                                            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                                              "aria-selected": "false",
                                              "aria-expanded": "false",
                                              tabIndex: -1
                                            }).next().attr({
                                              "aria-hidden": "true"
                                            }).hide(), this.active.length ? this.active.attr({
                                              "aria-selected": "true",
                                              "aria-expanded": "true",
                                              tabIndex: 0
                                            }).next().attr({
                                              "aria-hidden": "false"
                                            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(c.event), "fill" === d ? (b = e.height(), this.element.siblings(":visible").each(function() {
                                              var c = a(this),
                                                d = c.css("position");
                                              "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0))
                                            }), this.headers.each(function() {
                                              b -= a(this).outerHeight(!0)
                                            }), this.headers.next().each(function() {
                                              a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
                                            }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function() {
                                              var c = a(this).is(":visible");
                                              c || a(this).show(), b = Math.max(b, a(this).css("height", "").height()), c || a(this).hide()
                                            }).height(b))
                                          },
                                          _activate: function(b) {
                                            var c = this._findActive(b)[0];
                                            c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                                              target: c,
                                              currentTarget: c,
                                              preventDefault: a.noop
                                            }))
                                          },
                                          _findActive: function(b) {
                                            return "number" == typeof b ? this.headers.eq(b) : a()
                                          },
                                          _setupEvents: function(b) {
                                            var c = {
                                              keydown: "_keydown"
                                            };
                                            b && a.each(b.split(" "), function(a, b) {
                                              c[b] = "_eventHandler"
                                            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {
                                              keydown: "_panelKeyDown"
                                            }), this._hoverable(this.headers), this._focusable(this.headers)
                                          },
                                          _eventHandler: function(b) {
                                            var c, d, e = this.options,
                                              f = this.active,
                                              g = a(b.currentTarget),
                                              h = g[0] === f[0],
                                              i = h && e.collapsible,
                                              j = i ? a() : g.next(),
                                              k = f.next(),
                                              l = {
                                                oldHeader: f,
                                                oldPanel: k,
                                                newHeader: i ? a() : g,
                                                newPanel: j
                                              };
                                            b.preventDefault(), h && !e.collapsible || !1 === this._trigger("beforeActivate", b, l) || (e.active = !i && this.headers.index(g), this.active = h ? a() : g, this._toggle(l), this._removeClass(f, "ui-accordion-header-active", "ui-state-active"), e.icons && (c = f.children(".ui-accordion-header-icon"), this._removeClass(c, null, e.icons.activeHeader)._addClass(c, null, e.icons.header)), h || (this._removeClass(g, "ui-accordion-header-collapsed")._addClass(g, "ui-accordion-header-active", "ui-state-active"), e.icons && (d = g.children(".ui-accordion-header-icon"), this._removeClass(d, null, e.icons.header)._addClass(d, null, e.icons.activeHeader)), this._addClass(g.next(), "ui-accordion-content-active")))
                                          },
                                          _toggle: function(b) {
                                            var c = b.newPanel,
                                              d = this.prevShow.length ? this.prevShow : b.oldPanel;
                                            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                                              "aria-hidden": "true"
                                            }), d.prev().attr({
                                              "aria-selected": "false",
                                              "aria-expanded": "false"
                                            }), c.length && d.length ? d.prev().attr({
                                              tabIndex: -1,
                                              "aria-expanded": "false"
                                            }) : c.length && this.headers.filter(function() {
                                              return 0 === parseInt(a(this).attr("tabIndex"), 10)
                                            }).attr("tabIndex", -1), c.attr("aria-hidden", "false").prev().attr({
                                              "aria-selected": "true",
                                              "aria-expanded": "true",
                                              tabIndex: 0
                                            })
                                          },
                                          _animate: function(a, b, c) {
                                            var d, e, f, g = this,
                                              h = 0,
                                              i = a.css("box-sizing"),
                                              j = a.length && (!b.length || a.index() < b.index()),
                                              k = this.options.animate || {},
                                              l = j && k.down || k,
                                              m = function() {
                                                g._toggleComplete(c)
                                              };
                                            return "number" == typeof l && (f = l), "string" == typeof l && (e = l), e = e || l.easing || k.easing, f = f || l.duration || k.duration, b.length ? a.length ? (d = a.show().outerHeight(), b.animate(this.hideProps, {
                                              duration: f,
                                              easing: e,
                                              step: function(a, b) {
                                                b.now = Math.round(a)
                                              }
                                            }), void a.hide().animate(this.showProps, {
                                              duration: f,
                                              easing: e,
                                              complete: m,
                                              step: function(a, c) {
                                                c.now = Math.round(a), "height" !== c.prop ? "content-box" === i && (h += c.now) : "content" !== g.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - h), h = 0)
                                              }
                                            })) : b.animate(this.hideProps, f, e, m) : a.animate(this.showProps, f, e, m)
                                          },
                                          _toggleComplete: function(a) {
                                            var b = a.oldPanel,
                                              c = b.prev();
                                            this._removeClass(b, "ui-accordion-content-active"), this._removeClass(c, "ui-accordion-header-active")._addClass(c, "ui-accordion-header-collapsed"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
                                          }
                                        }), a.ui.safeActiveElement = function(a) {
                                          var b;
                                          try {
                                            b = a.activeElement
                                          } catch (c) {
                                            b = a.body
                                          }
                                          return b || (b = a.body), b.nodeName || (b = a.body), b
                                        }, a.widget("ui.menu", {
                                          version: "1.12.1",
                                          defaultElement: "<ul>",
                                          delay: 300,
                                          options: {
                                            icons: {
                                              submenu: "ui-icon-caret-1-e"
                                            },
                                            items: "> *",
                                            menus: "ul",
                                            position: {
                                              my: "left top",
                                              at: "right top"
                                            },
                                            role: "menu",
                                            blur: null,
                                            focus: null,
                                            select: null
                                          },
                                          _create: function() {
                                            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                                              role: this.options.role,
                                              tabIndex: 0
                                            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                                              "mousedown .ui-menu-item": function(a) {
                                                a.preventDefault()
                                              },
                                              "click .ui-menu-item": function(b) {
                                                var c = a(b.target),
                                                  d = a(a.ui.safeActiveElement(this.document[0]));
                                                !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && d.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                                              },
                                              "mouseenter .ui-menu-item": function(b) {
                                                if (!this.previousFilter) {
                                                  var c = a(b.target).closest(".ui-menu-item"),
                                                    d = a(b.currentTarget);
                                                  c[0] === d[0] && (this._removeClass(d.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(b, d))
                                                }
                                              },
                                              mouseleave: "collapseAll",
                                              "mouseleave .ui-menu": "collapseAll",
                                              focus: function(a, b) {
                                                var c = this.active || this.element.find(this.options.items).eq(0);
                                                b || this.focus(a, c)
                                              },
                                              blur: function(b) {
                                                this._delay(function() {
                                                  !a.contains(this.element[0], a.ui.safeActiveElement(this.document[0])) && this.collapseAll(b)
                                                })
                                              },
                                              keydown: "_keydown"
                                            }), this.refresh(), this._on(this.document, {
                                              click: function(a) {
                                                this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
                                              }
                                            })
                                          },
                                          _destroy: function() {
                                            var b = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                                              c = b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                                            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), c.children().each(function() {
                                              var b = a(this);
                                              b.data("ui-menu-submenu-caret") && b.remove()
                                            })
                                          },
                                          _keydown: function(b) {
                                            var c, d, e, f, g = !0;
                                            switch (b.keyCode) {
                                              case a.ui.keyCode.PAGE_UP:
                                                this.previousPage(b);
                                                break;
                                              case a.ui.keyCode.PAGE_DOWN:
                                                this.nextPage(b);
                                                break;
                                              case a.ui.keyCode.HOME:
                                                this._move("first", "first", b);
                                                break;
                                              case a.ui.keyCode.END:
                                                this._move("last", "last", b);
                                                break;
                                              case a.ui.keyCode.UP:
                                                this.previous(b);
                                                break;
                                              case a.ui.keyCode.DOWN:
                                                this.next(b);
                                                break;
                                              case a.ui.keyCode.LEFT:
                                                this.collapse(b);
                                                break;
                                              case a.ui.keyCode.RIGHT:
                                                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                                                break;
                                              case a.ui.keyCode.ENTER:
                                              case a.ui.keyCode.SPACE:
                                                this._activate(b);
                                                break;
                                              case a.ui.keyCode.ESCAPE:
                                                this.collapse(b);
                                                break;
                                              default:
                                                g = !1, d = this.previousFilter || "", f = !1, e = b.keyCode >= 96 && 105 >= b.keyCode ? "" + (b.keyCode - 96) : String.fromCharCode(b.keyCode), clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                                                  delete this.previousFilter
                                                }, 1e3)) : delete this.previousFilter
                                            }
                                            g && b.preventDefault()
                                          },
                                          _activate: function(a) {
                                            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
                                          },
                                          refresh: function() {
                                            var b, c, d, e, f, g = this,
                                              h = this.options.icons.submenu,
                                              i = this.element.find(this.options.menus);
                                            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), d = i.filter(":not(.ui-menu)").hide().attr({
                                              role: this.options.role,
                                              "aria-hidden": "true",
                                              "aria-expanded": "false"
                                            }).each(function() {
                                              var b = a(this),
                                                c = b.prev(),
                                                d = a("<span>").data("ui-menu-submenu-caret", !0);
                                              g._addClass(d, "ui-menu-icon", "ui-icon " + h), c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
                                            }), this._addClass(d, "ui-menu", "ui-widget ui-widget-content ui-front"), b = i.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
                                              var b = a(this);
                                              g._isDivider(b) && g._addClass(b, "ui-menu-divider", "ui-widget-content")
                                            }), e = c.not(".ui-menu-item, .ui-menu-divider"), f = e.children().not(".ui-menu").uniqueId().attr({
                                              tabIndex: -1,
                                              role: this._itemRole()
                                            }), this._addClass(e, "ui-menu-item")._addClass(f, "ui-menu-item-wrapper"), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
                                          },
                                          _itemRole: function() {
                                            return {
                                              menu: "menuitem",
                                              listbox: "option"
                                            } [this.options.role]
                                          },
                                          _setOption: function(a, b) {
                                            if ("icons" === a) {
                                              var c = this.element.find(".ui-menu-icon");
                                              this._removeClass(c, null, this.options.icons.submenu)._addClass(c, null, b.submenu)
                                            }
                                            this._super(a, b)
                                          },
                                          _setOptionDisabled: function(a) {
                                            this._super(a), this.element.attr("aria-disabled", a + ""), this._toggleClass(null, "ui-state-disabled", !!a)
                                          },
                                          focus: function(a, b) {
                                            var c, d, e;
                                            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children(".ui-menu-item-wrapper"), this._addClass(d, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), e = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(e, null, "ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                                              this._close()
                                            }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                                              item: b
                                            })
                                          },
                                          _scrollIntoView: function(b) {
                                            var c, d, e, f, g, h;
                                            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
                                          },
                                          blur: function(a, b) {
                                            b || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", a, {
                                              item: this.active
                                            }), this.active = null)
                                          },
                                          _startOpening: function(a) {
                                            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                                              this._close(), this._open(a)
                                            }, this.delay))
                                          },
                                          _open: function(b) {
                                            var c = a.extend({
                                              of: this.active
                                            }, this.options.position);
                                            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
                                          },
                                          collapseAll: function(b, c) {
                                            clearTimeout(this.timer), this.timer = this._delay(function() {
                                              var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                                              d.length || (d = this.element), this._close(d), this.blur(b), this._removeClass(d.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = d
                                            }, this.delay)
                                          },
                                          _close: function(a) {
                                            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
                                          },
                                          _closeOnDocumentClick: function(b) {
                                            return !a(b.target).closest(".ui-menu").length
                                          },
                                          _isDivider: function(a) {
                                            return !/[^\-\u2014\u2013\s]/.test(a.text())
                                          },
                                          collapse: function(a) {
                                            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                                            b && b.length && (this._close(), this.focus(a, b))
                                          },
                                          expand: function(a) {
                                            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                                            b && b.length && (this._open(b.parent()), this._delay(function() {
                                              this.focus(a, b)
                                            }))
                                          },
                                          next: function(a) {
                                            this._move("next", "first", a)
                                          },
                                          previous: function(a) {
                                            this._move("prev", "last", a)
                                          },
                                          isFirstItem: function() {
                                            return this.active && !this.active.prevAll(".ui-menu-item").length
                                          },
                                          isLastItem: function() {
                                            return this.active && !this.active.nextAll(".ui-menu-item").length
                                          },
                                          _move: function(a, b, c) {
                                            var d;
                                            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
                                          },
                                          nextPage: function(b) {
                                            var c, d, e;
                                            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                                              return c = a(this), 0 > c.offset().top - d - e
                                            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
                                          },
                                          previousPage: function(b) {
                                            var c, d, e;
                                            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                                              return c = a(this), c.offset().top - d + e > 0
                                            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
                                          },
                                          _hasScroll: function() {
                                            return this.element.outerHeight() < this.element.prop("scrollHeight")
                                          },
                                          select: function(b) {
                                            this.active = this.active || a(b.target).closest(".ui-menu-item");
                                            var c = {
                                              item: this.active
                                            };
                                            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
                                          },
                                          _filterMenuItems: function(b) {
                                            var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                                              d = RegExp("^" + c, "i");
                                            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                                              return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))
                                            })
                                          }
                                        }), a.widget("ui.autocomplete", {
                                          version: "1.12.1",
                                          defaultElement: "<input>",
                                          options: {
                                            appendTo: null,
                                            autoFocus: !1,
                                            delay: 300,
                                            minLength: 1,
                                            position: {
                                              my: "left top",
                                              at: "left bottom",
                                              collision: "none"
                                            },
                                            source: null,
                                            change: null,
                                            close: null,
                                            focus: null,
                                            open: null,
                                            response: null,
                                            search: null,
                                            select: null
                                          },
                                          requestIndex: 0,
                                          pending: 0,
                                          _create: function() {
                                            var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                                              f = "textarea" === e,
                                              g = "input" === e;
                                            this.isMultiLine = f || !g && this._isContentEditable(this.element), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                                              keydown: function(e) {
                                                if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
                                                b = !1, d = !1, c = !1;
                                                var f = a.ui.keyCode;
                                                switch (e.keyCode) {
                                                  case f.PAGE_UP:
                                                    b = !0, this._move("previousPage", e);
                                                    break;
                                                  case f.PAGE_DOWN:
                                                    b = !0, this._move("nextPage", e);
                                                    break;
                                                  case f.UP:
                                                    b = !0, this._keyEvent("previous", e);
                                                    break;
                                                  case f.DOWN:
                                                    b = !0, this._keyEvent("next", e);
                                                    break;
                                                  case f.ENTER:
                                                    this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                                    break;
                                                  case f.TAB:
                                                    this.menu.active && this.menu.select(e);
                                                    break;
                                                  case f.ESCAPE:
                                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                                    break;
                                                  default:
                                                    c = !0, this._searchTimeout(e)
                                                }
                                              },
                                              keypress: function(d) {
                                                if (b) return b = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                                                if (!c) {
                                                  var e = a.ui.keyCode;
                                                  switch (d.keyCode) {
                                                    case e.PAGE_UP:
                                                      this._move("previousPage", d);
                                                      break;
                                                    case e.PAGE_DOWN:
                                                      this._move("nextPage", d);
                                                      break;
                                                    case e.UP:
                                                      this._keyEvent("previous", d);
                                                      break;
                                                    case e.DOWN:
                                                      this._keyEvent("next", d)
                                                  }
                                                }
                                              },
                                              input: function(a) {
                                                return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
                                              },
                                              focus: function() {
                                                this.selectedItem = null, this.previous = this._value()
                                              },
                                              blur: function(a) {
                                                return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
                                              }
                                            }), this._initSource(), this.menu = a("<ul>").appendTo(this._appendTo()).menu({
                                              role: null
                                            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                                              mousedown: function(b) {
                                                b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                                                  delete this.cancelBlur, this.element[0] !== a.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                                                })
                                              },
                                              menufocus: function(b, c) {
                                                var d, e;
                                                return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                                                  a(b.target).trigger(b.originalEvent)
                                                })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
                                                  item: e
                                                }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), void((d = c.item.attr("aria-label") || e.value) && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
                                              },
                                              menuselect: function(b, c) {
                                                var d = c.item.data("ui-autocomplete-item"),
                                                  e = this.previous;
                                                this.element[0] !== a.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = e, this._delay(function() {
                                                  this.previous = e, this.selectedItem = d
                                                })), !1 !== this._trigger("select", b, {
                                                  item: d
                                                }) && this._value(d.value), this.term = this._value(), this.close(b), this.selectedItem = d
                                              }
                                            }), this.liveRegion = a("<div>", {
                                              role: "status",
                                              "aria-live": "assertive",
                                              "aria-relevant": "additions"
                                            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                                              beforeunload: function() {
                                                this.element.removeAttr("autocomplete")
                                              }
                                            })
                                          },
                                          _destroy: function() {
                                            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
                                          },
                                          _setOption: function(a, b) {
                                            this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
                                          },
                                          _isEventTargetInWidget: function(b) {
                                            var c = this.menu.element[0];
                                            return b.target === this.element[0] || b.target === c || a.contains(c, b.target)
                                          },
                                          _closeOnClickOutside: function(a) {
                                            this._isEventTargetInWidget(a) || this.close()
                                          },
                                          _appendTo: function() {
                                            var b = this.options.appendTo;
                                            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front, dialog")), b.length || (b = this.document[0].body), b
                                          },
                                          _initSource: function() {
                                            var b, c, d = this;
                                            a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                                              d(a.ui.autocomplete.filter(b, c.term))
                                            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                                              d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                                                url: c,
                                                data: b,
                                                dataType: "json",
                                                success: function(a) {
                                                  e(a)
                                                },
                                                error: function() {
                                                  e([])
                                                }
                                              })
                                            }) : this.source = this.options.source
                                          },
                                          _searchTimeout: function(a) {
                                            clearTimeout(this.searching), this.searching = this._delay(function() {
                                              var b = this.term === this._value(),
                                                c = this.menu.element.is(":visible"),
                                                d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                                              (!b || b && !c && !d) && (this.selectedItem = null, this.search(null, a))
                                            }, this.options.delay)
                                          },
                                          search: function(a, b) {
                                            return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : !1 !== this._trigger("search", b) ? this._search(a) : void 0
                                          },
                                          _search: function(a) {
                                            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                                              term: a
                                            }, this._response())
                                          },
                                          _response: function() {
                                            var b = ++this.requestIndex;
                                            return a.proxy(function(a) {
                                              b === this.requestIndex && this.__response(a), --this.pending || this._removeClass("ui-autocomplete-loading")
                                            }, this)
                                          },
                                          __response: function(a) {
                                            a && (a = this._normalize(a)), this._trigger("response", null, {
                                              content: a
                                            }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
                                          },
                                          close: function(a) {
                                            this.cancelSearch = !0, this._close(a)
                                          },
                                          _close: function(a) {
                                            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
                                          },
                                          _change: function(a) {
                                            this.previous !== this._value() && this._trigger("change", a, {
                                              item: this.selectedItem
                                            })
                                          },
                                          _normalize: function(b) {
                                            return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                                              return "string" == typeof b ? {
                                                label: b,
                                                value: b
                                              } : a.extend({}, b, {
                                                label: b.label || b.value,
                                                value: b.value || b.label
                                              })
                                            })
                                          },
                                          _suggest: function(b) {
                                            var c = this.menu.element.empty();
                                            this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                                              of: this.element
                                            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                                              mousedown: "_closeOnClickOutside"
                                            })
                                          },
                                          _resizeMenu: function() {
                                            var a = this.menu.element;
                                            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
                                          },
                                          _renderMenu: function(b, c) {
                                            var d = this;
                                            a.each(c, function(a, c) {
                                              d._renderItemData(b, c)
                                            })
                                          },
                                          _renderItemData: function(a, b) {
                                            return this._renderItem(a, b).data("ui-autocomplete-item", b)
                                          },
                                          _renderItem: function(b, c) {
                                            return a("<li>").append(a("<div>").text(c.label)).appendTo(b)
                                          },
                                          _move: function(a, b) {
                                            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
                                          },
                                          widget: function() {
                                            return this.menu.element
                                          },
                                          _value: function() {
                                            return this.valueMethod.apply(this.element, arguments)
                                          },
                                          _keyEvent: function(a, b) {
                                            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
                                          },
                                          _isContentEditable: function(a) {
                                            if (!a.length) return !1;
                                            var b = a.prop("contentEditable");
                                            return "inherit" === b ? this._isContentEditable(a.parent()) : "true" === b
                                          }
                                        }), a.extend(a.ui.autocomplete, {
                                          escapeRegex: function(a) {
                                            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                                          },
                                          filter: function(b, c) {
                                            var d = RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                                            return a.grep(b, function(a) {
                                              return d.test(a.label || a.value || a)
                                            })
                                          }
                                        }), a.widget("ui.autocomplete", a.ui.autocomplete, {
                                          options: {
                                            messages: {
                                              noResults: "No search results.",
                                              results: function(a) {
                                                return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                                              }
                                            }
                                          },
                                          __response: function(b) {
                                            var c;
                                            this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
                                          }
                                        }), a.ui.autocomplete;
                                        var o = /ui-corner-([a-z]){2,6}/g;
                                        a.widget("ui.controlgroup", {
                                          version: "1.12.1",
                                          defaultElement: "<div>",
                                          options: {
                                            direction: "horizontal",
                                            disabled: null,
                                            onlyVisible: !0,
                                            items: {
                                              button: "input[type=button], input[type=submit], input[type=reset], button, a",
                                              controlgroupLabel: ".ui-controlgroup-label",
                                              checkboxradio: "input[type='checkbox'], input[type='radio']",
                                              selectmenu: "select",
                                              spinner: ".ui-spinner-input"
                                            }
                                          },
                                          _create: function() {
                                            this._enhance()
                                          },
                                          _enhance: function() {
                                            this.element.attr("role", "toolbar"), this.refresh()
                                          },
                                          _destroy: function() {
                                            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
                                          },
                                          _initWidgets: function() {
                                            var b = this,
                                              c = [];
                                            a.each(this.options.items, function(d, e) {
                                              var f, g = {};
                                              return e ? "controlgroupLabel" === d ? (f = b.element.find(e), f.each(function() {
                                                var b = a(this);
                                                b.children(".ui-controlgroup-label-contents").length || b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                                              }), b._addClass(f, null, "ui-widget ui-widget-content ui-state-default"), void(c = c.concat(f.get()))) : void(a.fn[d] && (g = b["_" + d + "Options"] ? b["_" + d + "Options"]("middle") : {
                                                classes: {}
                                              }, b.element.find(e).each(function() {
                                                var e = a(this),
                                                  f = e[d]("instance"),
                                                  h = a.widget.extend({}, g);
                                                if ("button" !== d || !e.parent(".ui-spinner").length) {
                                                  f || (f = e[d]()[d]("instance")), f && (h.classes = b._resolveClassesValues(h.classes, f)), e[d](h);
                                                  var i = e[d]("widget");
                                                  a.data(i[0], "ui-controlgroup-data", f || e[d]("instance")), c.push(i[0])
                                                }
                                              }))) : void 0
                                            }), this.childWidgets = a(a.unique(c)), this._addClass(this.childWidgets, "ui-controlgroup-item")
                                          },
                                          _callChildMethod: function(b) {
                                            this.childWidgets.each(function() {
                                              var c = a(this),
                                                d = c.data("ui-controlgroup-data");
                                              d && d[b] && d[b]()
                                            })
                                          },
                                          _updateCornerClass: function(a, b) {
                                            var c = this._buildSimpleOptions(b, "label").classes.label;
                                            this._removeClass(a, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(a, null, c)
                                          },
                                          _buildSimpleOptions: function(a, b) {
                                            var c = "vertical" === this.options.direction,
                                              d = {
                                                classes: {}
                                              };
                                            return d.classes[b] = {
                                              middle: "",
                                              first: "ui-corner-" + (c ? "top" : "left"),
                                              last: "ui-corner-" + (c ? "bottom" : "right"),
                                              only: "ui-corner-all"
                                            } [a], d
                                          },
                                          _spinnerOptions: function(a) {
                                            var b = this._buildSimpleOptions(a, "ui-spinner");
                                            return b.classes["ui-spinner-up"] = "", b.classes["ui-spinner-down"] = "", b
                                          },
                                          _buttonOptions: function(a) {
                                            return this._buildSimpleOptions(a, "ui-button")
                                          },
                                          _checkboxradioOptions: function(a) {
                                            return this._buildSimpleOptions(a, "ui-checkboxradio-label")
                                          },
                                          _selectmenuOptions: function(a) {
                                            var b = "vertical" === this.options.direction;
                                            return {
                                              width: !!b && "auto",
                                              classes: {
                                                middle: {
                                                  "ui-selectmenu-button-open": "",
                                                  "ui-selectmenu-button-closed": ""
                                                },
                                                first: {
                                                  "ui-selectmenu-button-open": "ui-corner-" + (b ? "top" : "tl"),
                                                  "ui-selectmenu-button-closed": "ui-corner-" + (b ? "top" : "left")
                                                },
                                                last: {
                                                  "ui-selectmenu-button-open": b ? "" : "ui-corner-tr",
                                                  "ui-selectmenu-button-closed": "ui-corner-" + (b ? "bottom" : "right")
                                                },
                                                only: {
                                                  "ui-selectmenu-button-open": "ui-corner-top",
                                                  "ui-selectmenu-button-closed": "ui-corner-all"
                                                }
                                              } [a]
                                            }
                                          },
                                          _resolveClassesValues: function(b, c) {
                                            var d = {};
                                            return a.each(b, function(e) {
                                              var f = c.options.classes[e] || "";
                                              f = a.trim(f.replace(o, "")), d[e] = (f + " " + b[e]).replace(/\s+/g, " ")
                                            }), d
                                          },
                                          _setOption: function(a, b) {
                                            return "direction" === a && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(a, b), "disabled" === a ? void this._callChildMethod(b ? "disable" : "enable") : void this.refresh()
                                          },
                                          refresh: function() {
                                            var b, c = this;
                                            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), b = this.childWidgets, this.options.onlyVisible && (b = b.filter(":visible")), b.length && (a.each(["first", "last"], function(a, d) {
                                              var e = b[d]().data("ui-controlgroup-data");
                                              if (e && c["_" + e.widgetName + "Options"]) {
                                                var f = c["_" + e.widgetName + "Options"](1 === b.length ? "only" : d);
                                                f.classes = c._resolveClassesValues(f.classes, e), e.element[e.widgetName](f)
                                              } else c._updateCornerClass(b[d](), d)
                                            }), this._callChildMethod("refresh"))
                                          }
                                        }), a.widget("ui.checkboxradio", [a.ui.formResetMixin, {
                                          version: "1.12.1",
                                          options: {
                                            disabled: null,
                                            label: null,
                                            icon: !0,
                                            classes: {
                                              "ui-checkboxradio-label": "ui-corner-all",
                                              "ui-checkboxradio-icon": "ui-corner-all"
                                            }
                                          },
                                          _getCreateOptions: function() {
                                            var b, c, d = this,
                                              e = this._super() || {};
                                            return this._readType(), c = this.element.labels(), this.label = a(c[c.length - 1]), this.label.length || a.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                                              d.originalLabel += 3 === this.nodeType ? a(this).text() : this.outerHTML
                                            }), this.originalLabel && (e.label = this.originalLabel), b = this.element[0].disabled, null != b && (e.disabled = b), e
                                          },
                                          _create: function() {
                                            var a = this.element[0].checked;
                                            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), a && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                                              change: "_toggleClasses",
                                              focus: function() {
                                                this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                                              },
                                              blur: function() {
                                                this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                                              }
                                            })
                                          },
                                          _readType: function() {
                                            var b = this.element[0].nodeName.toLowerCase();
                                            this.type = this.element[0].type, "input" === b && /radio|checkbox/.test(this.type) || a.error("Can't create checkboxradio on element.nodeName=" + b + " and element.type=" + this.type)
                                          },
                                          _enhance: function() {
                                            this._updateIcon(this.element[0].checked)
                                          },
                                          widget: function() {
                                            return this.label
                                          },
                                          _getRadioGroup: function() {
                                            var b, c = this.element[0].name,
                                              d = "input[name='" + a.ui.escapeSelector(c) + "']";
                                            return c ? (b = this.form.length ? a(this.form[0].elements).filter(d) : a(d).filter(function() {
                                              return 0 === a(this).form().length
                                            }), b.not(this.element)) : a([])
                                          },
                                          _toggleClasses: function() {
                                            var b = this.element[0].checked;
                                            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", b), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", b)._toggleClass(this.icon, null, "ui-icon-blank", !b), "radio" === this.type && this._getRadioGroup().each(function() {
                                              var b = a(this).checkboxradio("instance");
                                              b && b._removeClass(b.label, "ui-checkboxradio-checked", "ui-state-active")
                                            })
                                          },
                                          _destroy: function() {
                                            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
                                          },
                                          _setOption: function(a, b) {
                                            return "label" !== a || b ? (this._super(a, b), "disabled" === a ? (this._toggleClass(this.label, null, "ui-state-disabled", b), void(this.element[0].disabled = b)) : void this.refresh()) : void 0
                                          },
                                          _updateIcon: function(b) {
                                            var c = "ui-icon ui-icon-background ";
                                            this.options.icon ? (this.icon || (this.icon = a("<span>"), this.iconSpace = a("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (c += b ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, b ? "ui-icon-blank" : "ui-icon-check")) : c += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", c), b || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
                                          },
                                          _updateLabel: function() {
                                            var a = this.label.contents().not(this.element[0]);
                                            this.icon && (a = a.not(this.icon[0])), this.iconSpace && (a = a.not(this.iconSpace[0])), a.remove(), this.label.append(this.options.label)
                                          },
                                          refresh: function() {
                                            var a = this.element[0].checked,
                                              b = this.element[0].disabled;
                                            this._updateIcon(a), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a), null !== this.options.label && this._updateLabel(), b !== this.options.disabled && this._setOptions({
                                              disabled: b
                                            })
                                          }
                                        }]), a.ui.checkboxradio, a.widget("ui.button", {
                                          version: "1.12.1",
                                          defaultElement: "<button>",
                                          options: {
                                            classes: {
                                              "ui-button": "ui-corner-all"
                                            },
                                            disabled: null,
                                            icon: null,
                                            iconPosition: "beginning",
                                            label: null,
                                            showLabel: !0
                                          },
                                          _getCreateOptions: function() {
                                            var a, b = this._super() || {};
                                            return this.isInput = this.element.is("input"), a = this.element[0].disabled, null != a && (b.disabled = a), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (b.label = this.originalLabel), b
                                          },
                                          _create: function() {
                                            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                                              keyup: function(b) {
                                                b.keyCode === a.ui.keyCode.SPACE && (b.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                                              }
                                            })
                                          },
                                          _enhance: function() {
                                            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
                                          },
                                          _updateTooltip: function() {
                                            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
                                          },
                                          _updateIcon: function(b, c) {
                                            var d = "iconPosition" !== b,
                                              e = d ? this.options.iconPosition : c,
                                              f = "top" === e || "bottom" === e;
                                            this.icon ? d && this._removeClass(this.icon, null, this.options.icon) : (this.icon = a("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), d && this._addClass(this.icon, null, c), this._attachIcon(e), f ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = a("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(e))
                                          },
                                          _destroy: function() {
                                            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
                                          },
                                          _attachIconSpace: function(a) {
                                            this.icon[/^(?:end|bottom)/.test(a) ? "before" : "after"](this.iconSpace)
                                          },
                                          _attachIcon: function(a) {
                                            this.element[/^(?:end|bottom)/.test(a) ? "append" : "prepend"](this.icon)
                                          },
                                          _setOptions: function(a) {
                                            var b = void 0 === a.showLabel ? this.options.showLabel : a.showLabel,
                                              c = void 0 === a.icon ? this.options.icon : a.icon;
                                            b || c || (a.showLabel = !0), this._super(a)
                                          },
                                          _setOption: function(a, b) {
                                            "icon" === a && (b ? this._updateIcon(a, b) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === a && this._updateIcon(a, b), "showLabel" === a && (this._toggleClass("ui-button-icon-only", null, !b), this._updateTooltip()), "label" === a && (this.isInput ? this.element.val(b) : (this.element.html(b), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(a, b), "disabled" === a && (this._toggleClass(null, "ui-state-disabled", b), this.element[0].disabled = b, b && this.element.blur())
                                          },
                                          refresh: function() {
                                            var a = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                                            a !== this.options.disabled && this._setOptions({
                                              disabled: a
                                            }), this._updateTooltip()
                                          }
                                        }), !1 !== a.uiBackCompat && (a.widget("ui.button", a.ui.button, {
                                          options: {
                                            text: !0,
                                            icons: {
                                              primary: null,
                                              secondary: null
                                            }
                                          },
                                          _create: function() {
                                            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
                                          },
                                          _setOption: function(a, b) {
                                            return "text" === a ? void this._super("showLabel", b) : ("showLabel" === a && (this.options.text = b), "icon" === a && (this.options.icons.primary = b), "icons" === a && (b.primary ? (this._super("icon", b.primary), this._super("iconPosition", "beginning")) : b.secondary && (this._super("icon", b.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
                                          }
                                        }), a.fn.button = function(b) {
                                          return function() {
                                            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? b.apply(this, arguments) : (a.ui.checkboxradio || a.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                                              icon: !1
                                            }) : this.checkboxradio.apply(this, arguments))
                                          }
                                        }(a.fn.button), a.fn.buttonset = function() {
                                          return a.ui.controlgroup || a.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                                            button: arguments[0].items
                                          }), this.controlgroup.apply(this, arguments))
                                        }), a.ui.button, a.extend(a.ui, {
                                          datepicker: {
                                            version: "1.12.1"
                                          }
                                        });
                                        var p;
                                        a.extend(d.prototype, {
                                          markerClassName: "hasDatepicker",
                                          maxRows: 4,
                                          _widgetDatepicker: function() {
                                            return this.dpDiv
                                          },
                                          setDefaults: function(a) {
                                            return g(this._defaults, a || {}), this
                                          },
                                          _attachDatepicker: function(b, c) {
                                            var d, e, f;
                                            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
                                          },
                                          _newInst: function(b, c) {
                                            return {
                                              id: b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                                              input: b,
                                              selectedDay: 0,
                                              selectedMonth: 0,
                                              selectedYear: 0,
                                              drawMonth: 0,
                                              drawYear: 0,
                                              inline: c,
                                              dpDiv: c ? e(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                                            }
                                          },
                                          _connectDatepicker: function(b, c) {
                                            var d = a(b);
                                            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
                                          },
                                          _attachments: function(b, c) {
                                            var d, e, f, g = this._get(c, "appendText"),
                                              h = this._get(c, "isRTL");
                                            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.off("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.on("focus", this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                                              src: f,
                                              alt: e,
                                              title: e
                                            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                                              src: f,
                                              alt: e,
                                              title: e
                                            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.on("click", function() {
                                              return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
                                            }))
                                          },
                                          _autoSize: function(a) {
                                            if (this._get(a, "autoSize") && !a.inline) {
                                              var b, c, d, e, f = new Date(2009, 11, 20),
                                                g = this._get(a, "dateFormat");
                                              g.match(/[DM]/) && (b = function(a) {
                                                for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e);
                                                return d
                                              }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
                                            }
                                          },
                                          _inlineDatepicker: function(b, c) {
                                            var d = a(b);
                                            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
                                          },
                                          _dialogDatepicker: function(b, c, d, e, f) {
                                            var h, i, j, k, l, m = this._dialogInst;
                                            return m || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), g(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this
                                          },
                                          _destroyDatepicker: function(b) {
                                            var c, d = a(b),
                                              e = a.data(b, "datepicker");
                                            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty(), p === e && (p = null))
                                          },
                                          _enableDatepicker: function(b) {
                                            var c, d, e = a(b),
                                              f = a.data(b, "datepicker");
                                            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
                                              this.disabled = !1
                                            }).end().filter("img").css({
                                              opacity: "1.0",
                                              cursor: ""
                                            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                                              return a === b ? null : a
                                            }))
                                          },
                                          _disableDatepicker: function(b) {
                                            var c, d, e = a(b),
                                              f = a.data(b, "datepicker");
                                            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
                                              this.disabled = !0
                                            }).end().filter("img").css({
                                              opacity: "0.5",
                                              cursor: "default"
                                            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
                                              return a === b ? null : a
                                            }), this._disabledInputs[this._disabledInputs.length] = b)
                                          },
                                          _isDisabledDatepicker: function(a) {
                                            if (!a) return !1;
                                            for (var b = 0; this._disabledInputs.length > b; b++)
                                              if (this._disabledInputs[b] === a) return !0;
                                            return !1
                                          },
                                          _getInst: function(b) {
                                            try {
                                              return a.data(b, "datepicker")
                                            } catch (a) {
                                              throw "Missing instance data for this datepicker"
                                            }
                                          },
                                          _optionDatepicker: function(b, c, d) {
                                            var e, f, h, i, j = this._getInst(b);
                                            return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), f = this._getDateDatepicker(b, !0), h = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), g(j.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, h)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, f), this._updateAlternate(j), this._updateDatepicker(j))))
                                          },
                                          _changeDatepicker: function(a, b, c) {
                                            this._optionDatepicker(a, b, c)
                                          },
                                          _refreshDatepicker: function(a) {
                                            var b = this._getInst(a);
                                            b && this._updateDatepicker(b)
                                          },
                                          _setDateDatepicker: function(a, b) {
                                            var c = this._getInst(a);
                                            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
                                          },
                                          _getDateDatepicker: function(a, b) {
                                            var c = this._getInst(a);
                                            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
                                          },
                                          _doKeyDown: function(b) {
                                            var c, d, e, f = a.datepicker._getInst(b.target),
                                              g = !0,
                                              h = f.dpDiv.is(".ui-datepicker-rtl");
                                            if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
                                              case 9:
                                                a.datepicker._hideDatepicker(), g = !1;
                                                break;
                                              case 13:
                                                return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                                              case 27:
                                                a.datepicker._hideDatepicker();
                                                break;
                                              case 33:
                                                a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                                                break;
                                              case 34:
                                                a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                                                break;
                                              case 35:
                                                (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                                                break;
                                              case 36:
                                                (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                                                break;
                                              case 37:
                                                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                                                break;
                                              case 38:
                                                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                                                break;
                                              case 39:
                                                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                                                break;
                                              case 40:
                                                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                                                break;
                                              default:
                                                g = !1
                                            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
                                            g && (b.preventDefault(), b.stopPropagation())
                                          },
                                          _doKeyPress: function(b) {
                                            var c, d, e = a.datepicker._getInst(b.target);
                                            return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0
                                          },
                                          _doKeyUp: function(b) {
                                            var c = a.datepicker._getInst(b.target);
                                            if (c.input.val() !== c.lastVal) try {
                                              a.datepicker.parseDate(a.datepicker._get(c, "dateFormat"), c.input ? c.input.val() : null, a.datepicker._getFormatConfig(c)) && (a.datepicker._setDateFromField(c), a.datepicker._updateAlternate(c), a.datepicker._updateDatepicker(c))
                                            } catch (a) {}
                                            return !0
                                          },
                                          _showDatepicker: function(b) {
                                            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                                              var d, e, f, h, i, j, k;
                                              d = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(d, "beforeShow"), !1 !== (f = e ? e.apply(b, [b, d]) : {}) && (g(d.settings, f), d.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(d), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), h = !1, a(b).parents().each(function() {
                                                return !(h |= "fixed" === a(this).css("position"))
                                              }), i = {
                                                left: a.datepicker._pos[0],
                                                top: a.datepicker._pos[1]
                                              }, a.datepicker._pos = null, d.dpDiv.empty(), d.dpDiv.css({
                                                position: "absolute",
                                                display: "block",
                                                top: "-1000px"
                                              }), a.datepicker._updateDatepicker(d), i = a.datepicker._checkOffset(d, i, h), d.dpDiv.css({
                                                position: a.datepicker._inDialog && a.blockUI ? "static" : h ? "fixed" : "absolute",
                                                display: "none",
                                                left: i.left + "px",
                                                top: i.top + "px"
                                              }), d.inline || (j = a.datepicker._get(d, "showAnim"), k = a.datepicker._get(d, "duration"), d.dpDiv.css("z-index", c(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k) : d.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(d) && d.input.trigger("focus"), a.datepicker._curInst = d))
                                            }
                                          },
                                          _updateDatepicker: function(b) {
                                            this.maxRows = 4, p = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
                                            var c, d = this._getNumberOfMonths(b),
                                              e = d[1],
                                              g = b.dpDiv.find("." + this._dayOverClass + " a");
                                            g.length > 0 && f.apply(g.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.trigger("focus"), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                                              c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
                                            }, 0))
                                          },
                                          _shouldFocusInput: function(a) {
                                            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
                                          },
                                          _checkOffset: function(b, c, d) {
                                            var e = b.dpDiv.outerWidth(),
                                              f = b.dpDiv.outerHeight(),
                                              g = b.input ? b.input.outerWidth() : 0,
                                              h = b.input ? b.input.outerHeight() : 0,
                                              i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                                              j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
                                            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
                                          },
                                          _findPos: function(b) {
                                            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
                                            return c = a(b).offset(), [c.left, c.top]
                                          },
                                          _hideDatepicker: function(b) {
                                            var c, d, e, f, g = this._curInst;
                                            !g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
                                              a.datepicker._tidyDialog(g)
                                            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                                              position: "absolute",
                                              left: "0",
                                              top: "-100px"
                                            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
                                          },
                                          _tidyDialog: function(a) {
                                            a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
                                          },
                                          _checkExternalClick: function(b) {
                                            if (a.datepicker._curInst) {
                                              var c = a(b.target),
                                                d = a.datepicker._getInst(c[0]);
                                              (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
                                            }
                                          },
                                          _adjustDate: function(b, c, d) {
                                            var e = a(b),
                                              f = this._getInst(e[0]);
                                            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
                                          },
                                          _gotoToday: function(b) {
                                            var c, d = a(b),
                                              e = this._getInst(d[0]);
                                            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
                                          },
                                          _selectMonthYear: function(b, c, d) {
                                            var e = a(b),
                                              f = this._getInst(e[0]);
                                            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
                                          },
                                          _selectDay: function(b, c, d, e) {
                                            var f, g = a(b);
                                            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
                                          },
                                          _clearDate: function(b) {
                                            var c = a(b);
                                            this._selectDate(c, "")
                                          },
                                          _selectDate: function(b, c) {
                                            var d, e = a(b),
                                              f = this._getInst(e[0]);
                                            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.trigger("focus"), this._lastInput = null)
                                          },
                                          _updateAlternate: function(b) {
                                            var c, d, e, f = this._get(b, "altField");
                                            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).val(e))
                                          },
                                          noWeekends: function(a) {
                                            var b = a.getDay();
                                            return [b > 0 && 6 > b, ""]
                                          },
                                          iso8601Week: function(a) {
                                            var b, c = new Date(a.getTime());
                                            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
                                          },
                                          parseDate: function(b, c, d) {
                                            if (null == b || null == c) throw "Invalid arguments";
                                            if ("" === (c = "object" == typeof c ? "" + c : c + "")) return null;
                                            var e, f, g, h, i = 0,
                                              j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                                              k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
                                              l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                                              m = (d ? d.dayNames : null) || this._defaults.dayNames,
                                              n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
                                              o = (d ? d.monthNames : null) || this._defaults.monthNames,
                                              p = -1,
                                              q = -1,
                                              r = -1,
                                              s = -1,
                                              t = !1,
                                              u = function(a) {
                                                var c = b.length > e + 1 && b.charAt(e + 1) === a;
                                                return c && e++, c
                                              },
                                              v = function(a) {
                                                var b = u(a),
                                                  d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                                                  e = "y" === a ? d : 1,
                                                  f = RegExp("^\\d{" + e + "," + d + "}"),
                                                  g = c.substring(i).match(f);
                                                if (!g) throw "Missing number at position " + i;
                                                return i += g[0].length, parseInt(g[0], 10)
                                              },
                                              w = function(b, d, e) {
                                                var f = -1,
                                                  g = a.map(u(b) ? e : d, function(a, b) {
                                                    return [
                                                      [b, a]
                                                    ]
                                                  }).sort(function(a, b) {
                                                    return -(a[1].length - b[1].length)
                                                  });
                                                if (a.each(g, function(a, b) {
                                                    var d = b[1];
                                                    return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0
                                                  }), -1 !== f) return f + 1;
                                                throw "Unknown name at position " + i
                                              },
                                              x = function() {
                                                if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                                                i++
                                              };
                                            for (e = 0; b.length > e; e++)
                                              if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
                                              else switch (b.charAt(e)) {
                                                case "d":
                                                  r = v("d");
                                                  break;
                                                case "D":
                                                  w("D", l, m);
                                                  break;
                                                case "o":
                                                  s = v("o");
                                                  break;
                                                case "m":
                                                  q = v("m");
                                                  break;
                                                case "M":
                                                  q = w("M", n, o);
                                                  break;
                                                case "y":
                                                  p = v("y");
                                                  break;
                                                case "@":
                                                  h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                                                  break;
                                                case "!":
                                                  h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                                                  break;
                                                case "'":
                                                  u("'") ? x() : t = !0;
                                                  break;
                                                default:
                                                  x()
                                              }
                                            if (c.length > i && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
                                            if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
                                              for (q = 1, r = s; !((f = this._getDaysInMonth(p, q - 1)) >= r);) q++, r -= f;
                                            if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
                                            return h
                                          },
                                          ATOM: "yy-mm-dd",
                                          COOKIE: "D, dd M yy",
                                          ISO_8601: "yy-mm-dd",
                                          RFC_822: "D, d M y",
                                          RFC_850: "DD, dd-M-y",
                                          RFC_1036: "D, d M y",
                                          RFC_1123: "D, d M yy",
                                          RFC_2822: "D, d M yy",
                                          RSS: "D, d M y",
                                          TICKS: "!",
                                          TIMESTAMP: "@",
                                          W3C: "yy-mm-dd",
                                          _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
                                          formatDate: function(a, b, c) {
                                            if (!b) return "";
                                            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                                              f = (c ? c.dayNames : null) || this._defaults.dayNames,
                                              g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                                              h = (c ? c.monthNames : null) || this._defaults.monthNames,
                                              i = function(b) {
                                                var c = a.length > d + 1 && a.charAt(d + 1) === b;
                                                return c && d++, c
                                              },
                                              j = function(a, b, c) {
                                                var d = "" + b;
                                                if (i(a))
                                                  for (; c > d.length;) d = "0" + d;
                                                return d
                                              },
                                              k = function(a, b, c, d) {
                                                return i(a) ? d[b] : c[b]
                                              },
                                              l = "",
                                              m = !1;
                                            if (b)
                                              for (d = 0; a.length > d; d++)
                                                if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                                                else switch (a.charAt(d)) {
                                                  case "d":
                                                    l += j("d", b.getDate(), 2);
                                                    break;
                                                  case "D":
                                                    l += k("D", b.getDay(), e, f);
                                                    break;
                                                  case "o":
                                                    l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                                    break;
                                                  case "m":
                                                    l += j("m", b.getMonth() + 1, 2);
                                                    break;
                                                  case "M":
                                                    l += k("M", b.getMonth(), g, h);
                                                    break;
                                                  case "y":
                                                    l += i("y") ? b.getFullYear() : (10 > b.getFullYear() % 100 ? "0" : "") + b.getFullYear() % 100;
                                                    break;
                                                  case "@":
                                                    l += b.getTime();
                                                    break;
                                                  case "!":
                                                    l += 1e4 * b.getTime() + this._ticksTo1970;
                                                    break;
                                                  case "'":
                                                    i("'") ? l += "'" : m = !0;
                                                    break;
                                                  default:
                                                    l += a.charAt(d)
                                                }
                                            return l
                                          },
                                          _possibleChars: function(a) {
                                            var b, c = "",
                                              d = !1,
                                              e = function(c) {
                                                var d = a.length > b + 1 && a.charAt(b + 1) === c;
                                                return d && b++, d
                                              };
                                            for (b = 0; a.length > b; b++)
                                              if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                                              else switch (a.charAt(b)) {
                                                case "d":
                                                case "m":
                                                case "y":
                                                case "@":
                                                  c += "0123456789";
                                                  break;
                                                case "D":
                                                case "M":
                                                  return null;
                                                case "'":
                                                  e("'") ? c += "'" : d = !0;
                                                  break;
                                                default:
                                                  c += a.charAt(b)
                                              }
                                            return c
                                          },
                                          _get: function(a, b) {
                                            return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
                                          },
                                          _setDateFromField: function(a, b) {
                                            if (a.input.val() !== a.lastVal) {
                                              var c = this._get(a, "dateFormat"),
                                                d = a.lastVal = a.input ? a.input.val() : null,
                                                e = this._getDefaultDate(a),
                                                f = e,
                                                g = this._getFormatConfig(a);
                                              try {
                                                f = this.parseDate(c, d, g) || e
                                              } catch (a) {
                                                d = b ? "" : d
                                              }
                                              a.selectedDay = f.getDate(),
                                                a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
                                            }
                                          },
                                          _getDefaultDate: function(a) {
                                            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
                                          },
                                          _determineDate: function(b, c, d) {
                                            var e = null == c || "" === c ? d : "string" == typeof c ? function(c) {
                                              try {
                                                return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                                              } catch (a) {}
                                              for (var d = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(c); i;) {
                                                switch (i[2] || "d") {
                                                  case "d":
                                                  case "D":
                                                    g += parseInt(i[1], 10);
                                                    break;
                                                  case "w":
                                                  case "W":
                                                    g += 7 * parseInt(i[1], 10);
                                                    break;
                                                  case "m":
                                                  case "M":
                                                    f += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f));
                                                    break;
                                                  case "y":
                                                  case "Y":
                                                    e += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f))
                                                }
                                                i = h.exec(c)
                                              }
                                              return new Date(e, f, g)
                                            }(c) : "number" == typeof c ? isNaN(c) ? d : function(a) {
                                              var b = new Date;
                                              return b.setDate(b.getDate() + a), b
                                            }(c) : new Date(c.getTime());
                                            return e = e && "Invalid Date" == "" + e ? d : e, e && (e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)), this._daylightSavingAdjust(e)
                                          },
                                          _daylightSavingAdjust: function(a) {
                                            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
                                          },
                                          _setDate: function(a, b, c) {
                                            var d = !b,
                                              e = a.selectedMonth,
                                              f = a.selectedYear,
                                              g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                                            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
                                          },
                                          _getDate: function(a) {
                                            return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
                                          },
                                          _attachHandlers: function(b) {
                                            var c = this._get(b, "stepMonths"),
                                              d = "#" + b.id.replace(/\\\\/g, "\\");
                                            b.dpDiv.find("[data-handler]").map(function() {
                                              var b = {
                                                prev: function() {
                                                  a.datepicker._adjustDate(d, -c, "M")
                                                },
                                                next: function() {
                                                  a.datepicker._adjustDate(d, +c, "M")
                                                },
                                                hide: function() {
                                                  a.datepicker._hideDatepicker()
                                                },
                                                today: function() {
                                                  a.datepicker._gotoToday(d)
                                                },
                                                selectDay: function() {
                                                  return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                                                },
                                                selectMonth: function() {
                                                  return a.datepicker._selectMonthYear(d, this, "M"), !1
                                                },
                                                selectYear: function() {
                                                  return a.datepicker._selectMonthYear(d, this, "Y"), !1
                                                }
                                              };
                                              a(this).on(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
                                            })
                                          },
                                          _generateHTML: function(a) {
                                            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                                              P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                                              Q = this._get(a, "isRTL"),
                                              R = this._get(a, "showButtonPanel"),
                                              S = this._get(a, "hideIfNoPrevNext"),
                                              T = this._get(a, "navigationAsDateFormat"),
                                              U = this._getNumberOfMonths(a),
                                              V = this._get(a, "showCurrentAtPos"),
                                              W = this._get(a, "stepMonths"),
                                              X = 1 !== U[0] || 1 !== U[1],
                                              Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                                              Z = this._getMinMaxDate(a, "min"),
                                              $ = this._getMinMaxDate(a, "max"),
                                              _ = a.drawMonth - V,
                                              aa = a.drawYear;
                                            if (0 > _ && (_ += 12, aa--), $)
                                              for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) 0 > --_ && (_ = 11, aa--);
                                            for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
                                              for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
                                                if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                                                  if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                                                    case 0:
                                                      B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                                                      break;
                                                    case U[1] - 1:
                                                      B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                                                      break;
                                                    default:
                                                      B += " ui-datepicker-group-middle", A = ""
                                                  }
                                                  B += "'>"
                                                }
                                                for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                                                for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
                                                  for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                                                  B += K + "</tr>"
                                                }
                                                _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                                              }
                                              u += x
                                            }
                                            return u += j, a._keyEvent = !1, u
                                          },
                                          _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
                                            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                                              r = this._get(a, "changeYear"),
                                              s = this._get(a, "showMonthAfterYear"),
                                              t = "<div class='ui-datepicker-title'>",
                                              u = "";
                                            if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
                                            else {
                                              for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                                              u += "</select>"
                                            }
                                            if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                                              if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                                              else {
                                                for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
                                                    var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                                                    return isNaN(b) ? m : b
                                                  }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                                                a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
                                              } return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
                                          },
                                          _adjustInstDate: function(a, b, c) {
                                            var d = a.selectedYear + ("Y" === c ? b : 0),
                                              e = a.selectedMonth + ("M" === c ? b : 0),
                                              f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                                              g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                                            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
                                          },
                                          _restrictMinMax: function(a, b) {
                                            var c = this._getMinMaxDate(a, "min"),
                                              d = this._getMinMaxDate(a, "max"),
                                              e = c && c > b ? c : b;
                                            return d && e > d ? d : e
                                          },
                                          _notifyChange: function(a) {
                                            var b = this._get(a, "onChangeMonthYear");
                                            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
                                          },
                                          _getNumberOfMonths: function(a) {
                                            var b = this._get(a, "numberOfMonths");
                                            return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
                                          },
                                          _getMinMaxDate: function(a, b) {
                                            return this._determineDate(a, this._get(a, b + "Date"), null)
                                          },
                                          _getDaysInMonth: function(a, b) {
                                            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
                                          },
                                          _getFirstDayOfMonth: function(a, b) {
                                            return new Date(a, b, 1).getDay()
                                          },
                                          _canAdjustMonth: function(a, b, c, d) {
                                            var e = this._getNumberOfMonths(a),
                                              f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
                                            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
                                          },
                                          _isInRange: function(a, b) {
                                            var c, d, e = this._getMinMaxDate(a, "min"),
                                              f = this._getMinMaxDate(a, "max"),
                                              g = null,
                                              h = null,
                                              i = this._get(a, "yearRange");
                                            return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
                                          },
                                          _getFormatConfig: function(a) {
                                            var b = this._get(a, "shortYearCutoff");
                                            return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                                              shortYearCutoff: b,
                                              dayNamesShort: this._get(a, "dayNamesShort"),
                                              dayNames: this._get(a, "dayNames"),
                                              monthNamesShort: this._get(a, "monthNamesShort"),
                                              monthNames: this._get(a, "monthNames")
                                            }
                                          },
                                          _formatDate: function(a, b, c, d) {
                                            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                                            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                                            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
                                          }
                                        }), a.fn.datepicker = function(b) {
                                          if (!this.length) return this;
                                          a.datepicker.initialized || (a(document).on("mousedown", a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
                                          var c = Array.prototype.slice.call(arguments, 1);
                                          return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
                                            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
                                          }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
                                        }, a.datepicker = new d, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.12.1", a.datepicker, a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
                                        var q = !1;
                                        a(document).on("mouseup", function() {
                                          q = !1
                                        }), a.widget("ui.mouse", {
                                          version: "1.12.1",
                                          options: {
                                            cancel: "input, textarea, button, select, option",
                                            distance: 1,
                                            delay: 0
                                          },
                                          _mouseInit: function() {
                                            var b = this;
                                            this.element.on("mousedown." + this.widgetName, function(a) {
                                              return b._mouseDown(a)
                                            }).on("click." + this.widgetName, function(c) {
                                              return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                                            }), this.started = !1
                                          },
                                          _mouseDestroy: function() {
                                            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                                          },
                                          _mouseDown: function(b) {
                                            if (!q) {
                                              this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                                              var c = this,
                                                d = 1 === b.which,
                                                e = !("string" != typeof this.options.cancel || !b.target.nodeName) && a(b.target).closest(this.options.cancel).length;
                                              return !(d && !e && this._mouseCapture(b)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                                                c.mouseDelayMet = !0
                                              }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(b), !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                                                return c._mouseMove(a)
                                              }, this._mouseUpDelegate = function(a) {
                                                return c._mouseUp(a)
                                              }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), q = !0, !0))
                                            }
                                          },
                                          _mouseMove: function(b) {
                                            if (this._mouseMoved) {
                                              if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b);
                                              if (!b.which)
                                                if (b.originalEvent.altKey || b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                                                else if (!this.ignoreMissingWhich) return this._mouseUp(b)
                                            }
                                            return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
                                          },
                                          _mouseUp: function(b) {
                                            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, q = !1, b.preventDefault()
                                          },
                                          _mouseDistanceMet: function(a) {
                                            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
                                          },
                                          _mouseDelayMet: function() {
                                            return this.mouseDelayMet
                                          },
                                          _mouseStart: function() {},
                                          _mouseDrag: function() {},
                                          _mouseStop: function() {},
                                          _mouseCapture: function() {
                                            return !0
                                          }
                                        }), a.ui.plugin = {
                                          add: function(b, c, d) {
                                            var e, f = a.ui[b].prototype;
                                            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
                                          },
                                          call: function(a, b, c, d) {
                                            var e, f = a.plugins[b];
                                            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                                              for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
                                          }
                                        }, a.ui.safeBlur = function(b) {
                                          b && "body" !== b.nodeName.toLowerCase() && a(b).trigger("blur")
                                        }, a.widget("ui.draggable", a.ui.mouse, {
                                          version: "1.12.1",
                                          widgetEventPrefix: "drag",
                                          options: {
                                            addClasses: !0,
                                            appendTo: "parent",
                                            axis: !1,
                                            connectToSortable: !1,
                                            containment: !1,
                                            cursor: "auto",
                                            cursorAt: !1,
                                            grid: !1,
                                            handle: !1,
                                            helper: "original",
                                            iframeFix: !1,
                                            opacity: !1,
                                            refreshPositions: !1,
                                            revert: !1,
                                            revertDuration: 500,
                                            scope: "default",
                                            scroll: !0,
                                            scrollSensitivity: 20,
                                            scrollSpeed: 20,
                                            snap: !1,
                                            snapMode: "both",
                                            snapTolerance: 20,
                                            stack: !1,
                                            zIndex: !1,
                                            drag: null,
                                            start: null,
                                            stop: null
                                          },
                                          _create: function() {
                                            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
                                          },
                                          _setOption: function(a, b) {
                                            this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
                                          },
                                          _destroy: function() {
                                            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
                                          },
                                          _mouseCapture: function(b) {
                                            var c = this.options;
                                            return !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), !!this.handle && (this._blurActiveElement(b), this._blockFrames(!0 === c.iframeFix ? "iframe" : c.iframeFix), !0))
                                          },
                                          _blockFrames: function(b) {
                                            this.iframeBlocks = this.document.find(b).map(function() {
                                              var b = a(this);
                                              return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
                                            })
                                          },
                                          _unblockFrames: function() {
                                            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                                          },
                                          _blurActiveElement: function(b) {
                                            var c = a.ui.safeActiveElement(this.document[0]);
                                            a(b.target).closest(c).length || a.ui.safeBlur(c)
                                          },
                                          _mouseStart: function(b) {
                                            var c = this.options;
                                            return this.helper = this._createHelper(b), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                                              return "fixed" === a(this).css("position")
                                            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), !1 === this._trigger("start", b) ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
                                          },
                                          _refreshOffsets: function(a) {
                                            this.offset = {
                                              top: this.positionAbs.top - this.margins.top,
                                              left: this.positionAbs.left - this.margins.left,
                                              scroll: !1,
                                              parent: this._getParentOffset(),
                                              relative: this._getRelativeOffset()
                                            }, this.offset.click = {
                                              left: a.pageX - this.offset.left,
                                              top: a.pageY - this.offset.top
                                            }
                                          },
                                          _mouseDrag: function(b, c) {
                                            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                                              var d = this._uiHash();
                                              if (!1 === this._trigger("drag", b, d)) return this._mouseUp(new a.Event("mouseup", b)), !1;
                                              this.position = d.position
                                            }
                                            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
                                          },
                                          _mouseStop: function(b) {
                                            var c = this,
                                              d = !1;
                                            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                                              !1 !== c._trigger("stop", b) && c._clear()
                                            }) : !1 !== this._trigger("stop", b) && this._clear(), !1
                                          },
                                          _mouseUp: function(b) {
                                            return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.trigger("focus"), a.ui.mouse.prototype._mouseUp.call(this, b)
                                          },
                                          cancel: function() {
                                            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new a.Event("mouseup", {
                                              target: this.element[0]
                                            })) : this._clear(), this
                                          },
                                          _getHandle: function(b) {
                                            return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length
                                          },
                                          _setHandleClassName: function() {
                                            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
                                          },
                                          _removeHandleClassName: function() {
                                            this._removeClass(this.handleElement, "ui-draggable-handle")
                                          },
                                          _createHelper: function(b) {
                                            var c = this.options,
                                              d = a.isFunction(c.helper),
                                              e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                                            return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e
                                          },
                                          _setPositionRelative: function() {
                                            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                                          },
                                          _adjustOffsetFromHelper: function(b) {
                                            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                                              left: +b[0],
                                              top: +b[1] || 0
                                            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
                                          },
                                          _isRootNode: function(a) {
                                            return /(html|body)/i.test(a.tagName) || a === this.document[0]
                                          },
                                          _getParentOffset: function() {
                                            var b = this.offsetParent.offset(),
                                              c = this.document[0];
                                            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
                                              top: 0,
                                              left: 0
                                            }), {
                                              top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                                              left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                                            }
                                          },
                                          _getRelativeOffset: function() {
                                            if ("relative" !== this.cssPosition) return {
                                              top: 0,
                                              left: 0
                                            };
                                            var a = this.element.position(),
                                              b = this._isRootNode(this.scrollParent[0]);
                                            return {
                                              top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                                              left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
                                            }
                                          },
                                          _cacheMargins: function() {
                                            this.margins = {
                                              left: parseInt(this.element.css("marginLeft"), 10) || 0,
                                              top: parseInt(this.element.css("marginTop"), 10) || 0,
                                              right: parseInt(this.element.css("marginRight"), 10) || 0,
                                              bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                                            }
                                          },
                                          _cacheHelperProportions: function() {
                                            this.helperProportions = {
                                              width: this.helper.outerWidth(),
                                              height: this.helper.outerHeight()
                                            }
                                          },
                                          _setContainment: function() {
                                            var b, c, d, e = this.options,
                                              f = this.document[0];
                                            return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), void((d = c[0]) && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null)
                                          },
                                          _convertPositionTo: function(a, b) {
                                            b || (b = this.position);
                                            var c = "absolute" === a ? 1 : -1,
                                              d = this._isRootNode(this.scrollParent[0]);
                                            return {
                                              top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                                              left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
                                            }
                                          },
                                          _generatePosition: function(a, b) {
                                            var c, d, e, f, g = this.options,
                                              h = this._isRootNode(this.scrollParent[0]),
                                              i = a.pageX,
                                              j = a.pageY;
                                            return h && this.offset.scroll || (this.offset.scroll = {
                                              top: this.scrollParent.scrollTop(),
                                              left: this.scrollParent.scrollLeft()
                                            }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
                                              top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                                              left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
                                            }
                                          },
                                          _clear: function() {
                                            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
                                          },
                                          _trigger: function(b, c, d) {
                                            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d)
                                          },
                                          plugins: {},
                                          _uiHash: function() {
                                            return {
                                              helper: this.helper,
                                              position: this.position,
                                              originalPosition: this.originalPosition,
                                              offset: this.positionAbs
                                            }
                                          }
                                        }), a.ui.plugin.add("draggable", "connectToSortable", {
                                          start: function(b, c, d) {
                                            var e = a.extend({}, c, {
                                              item: d.element
                                            });
                                            d.sortables = [], a(d.options.connectToSortable).each(function() {
                                              var c = a(this).sortable("instance");
                                              c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
                                            })
                                          },
                                          stop: function(b, c, d) {
                                            var e = a.extend({}, c, {
                                              item: d.element
                                            });
                                            d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                                              var a = this;
                                              a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
                                                position: a.placeholder.css("position"),
                                                top: a.placeholder.css("top"),
                                                left: a.placeholder.css("left")
                                              }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
                                            })
                                          },
                                          drag: function(b, c, d) {
                                            a.each(d.sortables, function() {
                                              var e = !1,
                                                f = this;
                                              f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                                                return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e
                                              })), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                                                return c.helper[0]
                                              }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                                                this.refreshPositions()
                                              }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
                                                this.refreshPositions()
                                              }))
                                            })
                                          }
                                        }), a.ui.plugin.add("draggable", "cursor", {
                                          start: function(b, c, d) {
                                            var e = a("body"),
                                              f = d.options;
                                            e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor)
                                          },
                                          stop: function(b, c, d) {
                                            var e = d.options;
                                            e._cursor && a("body").css("cursor", e._cursor)
                                          }
                                        }), a.ui.plugin.add("draggable", "opacity", {
                                          start: function(b, c, d) {
                                            var e = a(c.helper),
                                              f = d.options;
                                            e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity)
                                          },
                                          stop: function(b, c, d) {
                                            var e = d.options;
                                            e._opacity && a(c.helper).css("opacity", e._opacity)
                                          }
                                        }), a.ui.plugin.add("draggable", "scroll", {
                                          start: function(a, b, c) {
                                            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
                                          },
                                          drag: function(b, c, d) {
                                            var e = d.options,
                                              f = !1,
                                              g = d.scrollParentNotHidden[0],
                                              h = d.document[0];
                                            g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), !1 !== f && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
                                          }
                                        }), a.ui.plugin.add("draggable", "snap", {
                                          start: function(b, c, d) {
                                            var e = d.options;
                                            d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                                              var b = a(this),
                                                c = b.offset();
                                              this !== d.element[0] && d.snapElements.push({
                                                item: this,
                                                width: b.outerWidth(),
                                                height: b.outerHeight(),
                                                top: c.top,
                                                left: c.left
                                              })
                                            })
                                          },
                                          drag: function(b, c, d) {
                                            var e, f, g, h, i, j, k, l, m, n, o = d.options,
                                              p = o.snapTolerance,
                                              q = c.offset.left,
                                              r = q + d.helperProportions.width,
                                              s = c.offset.top,
                                              t = s + d.helperProportions.height;
                                            for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                                              snapItem: d.snapElements[m].item
                                            })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = p >= Math.abs(k - t), f = p >= Math.abs(l - s), g = p >= Math.abs(i - r), h = p >= Math.abs(j - q), e && (c.position.top = d._convertPositionTo("relative", {
                                              top: k - d.helperProportions.height,
                                              left: 0
                                            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                                              top: l,
                                              left: 0
                                            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                                              top: 0,
                                              left: i - d.helperProportions.width
                                            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                                              top: 0,
                                              left: j
                                            }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = p >= Math.abs(k - s), f = p >= Math.abs(l - t), g = p >= Math.abs(i - q), h = p >= Math.abs(j - r), e && (c.position.top = d._convertPositionTo("relative", {
                                              top: k,
                                              left: 0
                                            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                                              top: l - d.helperProportions.height,
                                              left: 0
                                            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                                              top: 0,
                                              left: i
                                            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                                              top: 0,
                                              left: j - d.helperProportions.width
                                            }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                                              snapItem: d.snapElements[m].item
                                            })), d.snapElements[m].snapping = e || f || g || h || n)
                                          }
                                        }), a.ui.plugin.add("draggable", "stack", {
                                          start: function(b, c, d) {
                                            var e, f = d.options,
                                              g = a.makeArray(a(f.stack)).sort(function(b, c) {
                                                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                                              });
                                            g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                                              a(this).css("zIndex", e + b)
                                            }), this.css("zIndex", e + g.length))
                                          }
                                        }), a.ui.plugin.add("draggable", "zIndex", {
                                          start: function(b, c, d) {
                                            var e = a(c.helper),
                                              f = d.options;
                                            e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex)
                                          },
                                          stop: function(b, c, d) {
                                            var e = d.options;
                                            e._zIndex && a(c.helper).css("zIndex", e._zIndex)
                                          }
                                        }), a.ui.draggable, a.widget("ui.resizable", a.ui.mouse, {
                                          version: "1.12.1",
                                          widgetEventPrefix: "resize",
                                          options: {
                                            alsoResize: !1,
                                            animate: !1,
                                            animateDuration: "slow",
                                            animateEasing: "swing",
                                            aspectRatio: !1,
                                            autoHide: !1,
                                            classes: {
                                              "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                                            },
                                            containment: !1,
                                            ghost: !1,
                                            grid: !1,
                                            handles: "e,s,se",
                                            helper: !1,
                                            maxHeight: null,
                                            maxWidth: null,
                                            minHeight: 10,
                                            minWidth: 10,
                                            zIndex: 90,
                                            resize: null,
                                            start: null,
                                            stop: null
                                          },
                                          _num: function(a) {
                                            return parseFloat(a) || 0
                                          },
                                          _isNumber: function(a) {
                                            return !isNaN(parseFloat(a))
                                          },
                                          _hasScroll: function(b, c) {
                                            if ("hidden" === a(b).css("overflow")) return !1;
                                            var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                                              e = !1;
                                            return b[d] > 0 || (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
                                          },
                                          _create: function() {
                                            var b, c = this.options,
                                              d = this;
                                            this._addClass("ui-resizable"), a.extend(this, {
                                              _aspectRatio: !!c.aspectRatio,
                                              aspectRatio: c.aspectRatio,
                                              originalElement: this.element,
                                              _proportionallyResizeElements: [],
                                              _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
                                            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                                              position: this.element.css("position"),
                                              width: this.element.outerWidth(),
                                              height: this.element.outerHeight(),
                                              top: this.element.css("top"),
                                              left: this.element.css("left")
                                            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, b = {
                                              marginTop: this.originalElement.css("marginTop"),
                                              marginRight: this.originalElement.css("marginRight"),
                                              marginBottom: this.originalElement.css("marginBottom"),
                                              marginLeft: this.originalElement.css("marginLeft")
                                            }, this.element.css(b), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                                              position: "static",
                                              zoom: 1,
                                              display: "block"
                                            })), this.originalElement.css(b), this._proportionallyResize()), this._setupHandles(), c.autoHide && a(this.element).on("mouseenter", function() {
                                              c.disabled || (d._removeClass("ui-resizable-autohide"), d._handles.show())
                                            }).on("mouseleave", function() {
                                              c.disabled || d.resizing || (d._addClass("ui-resizable-autohide"), d._handles.hide())
                                            }), this._mouseInit()
                                          },
                                          _destroy: function() {
                                            this._mouseDestroy();
                                            var b, c = function(b) {
                                              a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                                            };
                                            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                                              position: b.css("position"),
                                              width: b.outerWidth(),
                                              height: b.outerHeight(),
                                              top: b.css("top"),
                                              left: b.css("left")
                                            }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
                                          },
                                          _setOption: function(a, b) {
                                            switch (this._super(a, b), a) {
                                              case "handles":
                                                this._removeHandles(), this._setupHandles()
                                            }
                                          },
                                          _setupHandles: function() {
                                            var b, c, d, e, f, g = this.options,
                                              h = this;
                                            if (this.handles = g.handles || (a(".ui-resizable-handle", this.element).length ? {
                                                n: ".ui-resizable-n",
                                                e: ".ui-resizable-e",
                                                s: ".ui-resizable-s",
                                                w: ".ui-resizable-w",
                                                se: ".ui-resizable-se",
                                                sw: ".ui-resizable-sw",
                                                ne: ".ui-resizable-ne",
                                                nw: ".ui-resizable-nw"
                                              } : "e,s,se"), this._handles = a(), this.handles.constructor === String)
                                              for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), d = this.handles.split(","), this.handles = {}, c = 0; d.length > c; c++) b = a.trim(d[c]), e = "ui-resizable-" + b, f = a("<div>"), this._addClass(f, "ui-resizable-handle " + e), f.css({
                                                zIndex: g.zIndex
                                              }), this.handles[b] = ".ui-resizable-" + b, this.element.append(f);
                                            this._renderAxis = function(b) {
                                              var c, d, e, f;
                                              b = b || this.element;
                                              for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], {
                                                mousedown: h._mouseDown
                                              })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c])
                                            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                                              h.resizing || (this.className && (f = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), h.axis = f && f[1] ? f[1] : "se")
                                            }), g.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
                                          },
                                          _removeHandles: function() {
                                            this._handles.remove()
                                          },
                                          _mouseCapture: function(b) {
                                            var c, d, e = !1;
                                            for (c in this.handles)((d = a(this.handles[c])[0]) === b.target || a.contains(d, b.target)) && (e = !0);
                                            return !this.options.disabled && e
                                          },
                                          _mouseStart: function(b) {
                                            var c, d, e, f = this.options,
                                              g = this.element;
                                            return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                                              left: c,
                                              top: d
                                            }, this.size = this._helper ? {
                                              width: this.helper.width(),
                                              height: this.helper.height()
                                            } : {
                                              width: g.width(),
                                              height: g.height()
                                            }, this.originalSize = this._helper ? {
                                              width: g.outerWidth(),
                                              height: g.outerHeight()
                                            } : {
                                              width: g.width(),
                                              height: g.height()
                                            }, this.sizeDiff = {
                                              width: g.outerWidth() - g.width(),
                                              height: g.outerHeight() - g.height()
                                            }, this.originalPosition = {
                                              left: c,
                                              top: d
                                            }, this.originalMousePosition = {
                                              left: b.pageX,
                                              top: b.pageY
                                            }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), this._addClass("ui-resizable-resizing"), this._propagate("start", b), !0
                                          },
                                          _mouseDrag: function(b) {
                                            var c, d, e = this.originalMousePosition,
                                              f = this.axis,
                                              g = b.pageX - e.left || 0,
                                              h = b.pageY - e.top || 0,
                                              i = this._change[f];
                                            return this._updatePrevProperties(), !!i && (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1)
                                          },
                                          _mouseStop: function(b) {
                                            this.resizing = !1;
                                            var c, d, e, f, g, h, i, j = this.options,
                                              k = this;
                                            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                                              width: k.helper.width() - f,
                                              height: k.helper.height() - e
                                            }, h = parseFloat(k.element.css("left")) + (k.position.left - k.originalPosition.left) || null, i = parseFloat(k.element.css("top")) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                                              top: i,
                                              left: h
                                            })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
                                          },
                                          _updatePrevProperties: function() {
                                            this.prevPosition = {
                                              top: this.position.top,
                                              left: this.position.left
                                            }, this.prevSize = {
                                              width: this.size.width,
                                              height: this.size.height
                                            }
                                          },
                                          _applyChanges: function() {
                                            var a = {};
                                            return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
                                          },
                                          _updateVirtualBoundaries: function(a) {
                                            var b, c, d, e, f, g = this.options;
                                            f = {
                                              minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
                                              maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
                                              minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
                                              maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
                                            }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), f.maxWidth > c && (f.maxWidth = c), f.maxHeight > e && (f.maxHeight = e)), this._vBoundaries = f
                                          },
                                          _updateCache: function(a) {
                                            this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
                                          },
                                          _updateRatio: function(a) {
                                            var b = this.position,
                                              c = this.size,
                                              d = this.axis;
                                            return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
                                          },
                                          _respectSize: function(a) {
                                            var b = this._vBoundaries,
                                              c = this.axis,
                                              d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
                                              e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
                                              f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
                                              g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
                                              h = this.originalPosition.left + this.originalSize.width,
                                              i = this.originalPosition.top + this.originalSize.height,
                                              j = /sw|nw|w/.test(c),
                                              k = /nw|ne|n/.test(c);
                                            return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
                                          },
                                          _getPaddingPlusBorderDimensions: function(a) {
                                            for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) c[b] = parseFloat(d[b]) || 0, c[b] += parseFloat(e[b]) || 0;
                                            return {
                                              height: c[0] + c[2],
                                              width: c[1] + c[3]
                                            }
                                          },
                                          _proportionallyResize: function() {
                                            if (this._proportionallyResizeElements.length)
                                              for (var a, b = 0, c = this.helper || this.element; this._proportionallyResizeElements.length > b; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                                                height: c.height() - this.outerDimensions.height || 0,
                                                width: c.width() - this.outerDimensions.width || 0
                                              })
                                          },
                                          _renderProxy: function() {
                                            var b = this.element,
                                              c = this.options;
                                            this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                                              width: this.element.outerWidth(),
                                              height: this.element.outerHeight(),
                                              position: "absolute",
                                              left: this.elementOffset.left + "px",
                                              top: this.elementOffset.top + "px",
                                              zIndex: ++c.zIndex
                                            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                                          },
                                          _change: {
                                            e: function(a, b) {
                                              return {
                                                width: this.originalSize.width + b
                                              }
                                            },
                                            w: function(a, b) {
                                              var c = this.originalSize;
                                              return {
                                                left: this.originalPosition.left + b,
                                                width: c.width - b
                                              }
                                            },
                                            n: function(a, b, c) {
                                              var d = this.originalSize;
                                              return {
                                                top: this.originalPosition.top + c,
                                                height: d.height - c
                                              }
                                            },
                                            s: function(a, b, c) {
                                              return {
                                                height: this.originalSize.height + c
                                              }
                                            },
                                            se: function(b, c, d) {
                                              return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                                            },
                                            sw: function(b, c, d) {
                                              return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                                            },
                                            ne: function(b, c, d) {
                                              return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                                            },
                                            nw: function(b, c, d) {
                                              return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                                            }
                                          },
                                          _propagate: function(b, c) {
                                            a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
                                          },
                                          plugins: {},
                                          ui: function() {
                                            return {
                                              originalElement: this.originalElement,
                                              element: this.element,
                                              helper: this.helper,
                                              position: this.position,
                                              size: this.size,
                                              originalSize: this.originalSize,
                                              originalPosition: this.originalPosition
                                            }
                                          }
                                        }), a.ui.plugin.add("resizable", "animate", {
                                          stop: function(b) {
                                            var c = a(this).resizable("instance"),
                                              d = c.options,
                                              e = c._proportionallyResizeElements,
                                              f = e.length && /textarea/i.test(e[0].nodeName),
                                              g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                                              h = f ? 0 : c.sizeDiff.width,
                                              i = {
                                                width: c.size.width - h,
                                                height: c.size.height - g
                                              },
                                              j = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null,
                                              k = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null;
                                            c.element.animate(a.extend(i, k && j ? {
                                              top: k,
                                              left: j
                                            } : {}), {
                                              duration: d.animateDuration,
                                              easing: d.animateEasing,
                                              step: function() {
                                                var d = {
                                                  width: parseFloat(c.element.css("width")),
                                                  height: parseFloat(c.element.css("height")),
                                                  top: parseFloat(c.element.css("top")),
                                                  left: parseFloat(c.element.css("left"))
                                                };
                                                e && e.length && a(e[0]).css({
                                                  width: d.width,
                                                  height: d.height
                                                }), c._updateCache(d), c._propagate("resize", b)
                                              }
                                            })
                                          }
                                        }), a.ui.plugin.add("resizable", "containment", {
                                          start: function() {
                                            var b, c, d, e, f, g, h, i = a(this).resizable("instance"),
                                              j = i.options,
                                              k = i.element,
                                              l = j.containment,
                                              m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
                                            m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
                                              left: 0,
                                              top: 0
                                            }, i.containerPosition = {
                                              left: 0,
                                              top: 0
                                            }, i.parentData = {
                                              element: a(document),
                                              left: 0,
                                              top: 0,
                                              width: a(document).width(),
                                              height: a(document).height() || document.body.parentNode.scrollHeight
                                            }) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, d) {
                                              c[a] = i._num(b.css("padding" + d))
                                            }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
                                              height: b.innerHeight() - c[3],
                                              width: b.innerWidth() - c[1]
                                            }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {
                                              element: m,
                                              left: d.left,
                                              top: d.top,
                                              width: g,
                                              height: h
                                            }))
                                          },
                                          resize: function(b) {
                                            var c, d, e, f, g = a(this).resizable("instance"),
                                              h = g.options,
                                              i = g.containerOffset,
                                              j = g.position,
                                              k = g._aspectRatio || b.shiftKey,
                                              l = {
                                                top: 0,
                                                left: 0
                                              },
                                              m = g.containerElement,
                                              n = !0;
                                            m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
                                          },
                                          stop: function() {
                                            var b = a(this).resizable("instance"),
                                              c = b.options,
                                              d = b.containerOffset,
                                              e = b.containerPosition,
                                              f = b.containerElement,
                                              g = a(b.helper),
                                              h = g.offset(),
                                              i = g.outerWidth() - b.sizeDiff.width,
                                              j = g.outerHeight() - b.sizeDiff.height;
                                            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                                              left: h.left - e.left - d.left,
                                              width: i,
                                              height: j
                                            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                                              left: h.left - e.left - d.left,
                                              width: i,
                                              height: j
                                            })
                                          }
                                        }), a.ui.plugin.add("resizable", "alsoResize", {
                                          start: function() {
                                            var b = a(this).resizable("instance"),
                                              c = b.options;
                                            a(c.alsoResize).each(function() {
                                              var b = a(this);
                                              b.data("ui-resizable-alsoresize", {
                                                width: parseFloat(b.width()),
                                                height: parseFloat(b.height()),
                                                left: parseFloat(b.css("left")),
                                                top: parseFloat(b.css("top"))
                                              })
                                            })
                                          },
                                          resize: function(b, c) {
                                            var d = a(this).resizable("instance"),
                                              e = d.options,
                                              f = d.originalSize,
                                              g = d.originalPosition,
                                              h = {
                                                height: d.size.height - f.height || 0,
                                                width: d.size.width - f.width || 0,
                                                top: d.position.top - g.top || 0,
                                                left: d.position.left - g.left || 0
                                              };
                                            a(e.alsoResize).each(function() {
                                              var b = a(this),
                                                d = a(this).data("ui-resizable-alsoresize"),
                                                e = {},
                                                f = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                              a.each(f, function(a, b) {
                                                var c = (d[b] || 0) + (h[b] || 0);
                                                c && c >= 0 && (e[b] = c || null)
                                              }), b.css(e)
                                            })
                                          },
                                          stop: function() {
                                            a(this).removeData("ui-resizable-alsoresize")
                                          }
                                        }), a.ui.plugin.add("resizable", "ghost", {
                                          start: function() {
                                            var b = a(this).resizable("instance"),
                                              c = b.size;
                                            b.ghost = b.originalElement.clone(), b.ghost.css({
                                              opacity: .25,
                                              display: "block",
                                              position: "relative",
                                              height: c.height,
                                              width: c.width,
                                              margin: 0,
                                              left: 0,
                                              top: 0
                                            }), b._addClass(b.ghost, "ui-resizable-ghost"), !1 !== a.uiBackCompat && "string" == typeof b.options.ghost && b.ghost.addClass(this.options.ghost), b.ghost.appendTo(b.helper)
                                          },
                                          resize: function() {
                                            var b = a(this).resizable("instance");
                                            b.ghost && b.ghost.css({
                                              position: "relative",
                                              height: b.size.height,
                                              width: b.size.width
                                            })
                                          },
                                          stop: function() {
                                            var b = a(this).resizable("instance");
                                            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
                                          }
                                        }), a.ui.plugin.add("resizable", "grid", {
                                          resize: function() {
                                            var b, c = a(this).resizable("instance"),
                                              d = c.options,
                                              e = c.size,
                                              f = c.originalSize,
                                              g = c.originalPosition,
                                              h = c.axis,
                                              i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
                                              j = i[0] || 1,
                                              k = i[1] || 1,
                                              l = Math.round((e.width - f.width) / j) * j,
                                              m = Math.round((e.height - f.height) / k) * k,
                                              n = f.width + l,
                                              o = f.height + m,
                                              p = d.maxWidth && n > d.maxWidth,
                                              q = d.maxHeight && o > d.maxHeight,
                                              r = d.minWidth && d.minWidth > n,
                                              s = d.minHeight && d.minHeight > o;
                                            d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n))
                                          }
                                        }), a.ui.resizable, a.widget("ui.dialog", {
                                          version: "1.12.1",
                                          options: {
                                            appendTo: "body",
                                            autoOpen: !0,
                                            buttons: [],
                                            classes: {
                                              "ui-dialog": "ui-corner-all",
                                              "ui-dialog-titlebar": "ui-corner-all"
                                            },
                                            closeOnEscape: !0,
                                            closeText: "Close",
                                            draggable: !0,
                                            hide: null,
                                            height: "auto",
                                            maxHeight: null,
                                            maxWidth: null,
                                            minHeight: 150,
                                            minWidth: 150,
                                            modal: !1,
                                            position: {
                                              my: "center",
                                              at: "center",
                                              of: window,
                                              collision: "fit",
                                              using: function(b) {
                                                var c = a(this).css(b).offset().top;
                                                0 > c && a(this).css("top", b.top - c)
                                              }
                                            },
                                            resizable: !0,
                                            show: null,
                                            title: null,
                                            width: 300,
                                            beforeClose: null,
                                            close: null,
                                            drag: null,
                                            dragStart: null,
                                            dragStop: null,
                                            focus: null,
                                            open: null,
                                            resize: null,
                                            resizeStart: null,
                                            resizeStop: null
                                          },
                                          sizeRelatedOptions: {
                                            buttons: !0,
                                            height: !0,
                                            maxHeight: !0,
                                            maxWidth: !0,
                                            minHeight: !0,
                                            minWidth: !0,
                                            width: !0
                                          },
                                          resizableRelatedOptions: {
                                            maxHeight: !0,
                                            maxWidth: !0,
                                            minHeight: !0,
                                            minWidth: !0
                                          },
                                          _create: function() {
                                            this.originalCss = {
                                              display: this.element[0].style.display,
                                              width: this.element[0].style.width,
                                              minHeight: this.element[0].style.minHeight,
                                              maxHeight: this.element[0].style.maxHeight,
                                              height: this.element[0].style.height
                                            }, this.originalPosition = {
                                              parent: this.element.parent(),
                                              index: this.element.parent().children().index(this.element)
                                            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                                          },
                                          _init: function() {
                                            this.options.autoOpen && this.open()
                                          },
                                          _appendTo: function() {
                                            var b = this.options.appendTo;
                                            return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
                                          },
                                          _destroy: function() {
                                            var a, b = this.originalPosition;
                                            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
                                          },
                                          widget: function() {
                                            return this.uiDialog
                                          },
                                          disable: a.noop,
                                          enable: a.noop,
                                          close: function(b) {
                                            var c = this;
                                            this._isOpen && !1 !== this._trigger("beforeClose", b) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                                              c._trigger("close", b)
                                            }))
                                          },
                                          isOpen: function() {
                                            return this._isOpen
                                          },
                                          moveToTop: function() {
                                            this._moveToTop()
                                          },
                                          _moveToTop: function(b, c) {
                                            var d = !1,
                                              e = this.uiDialog.siblings(".ui-front:visible").map(function() {
                                                return +a(this).css("z-index")
                                              }).get(),
                                              f = Math.max.apply(null, e);
                                            return f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), d = !0), d && !c && this._trigger("focus", b), d
                                          },
                                          open: function() {
                                            var b = this;
                                            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(a.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                                              b._focusTabbable(), b._trigger("focus")
                                            }), this._makeFocusTarget(), void this._trigger("open"))
                                          },
                                          _focusTabbable: function() {
                                            var a = this._focusedElement;
                                            a || (a = this.element.find("[autofocus]")), a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).trigger("focus")
                                          },
                                          _keepFocus: function(b) {
                                            function c() {
                                              var b = a.ui.safeActiveElement(this.document[0]);
                                              this.uiDialog[0] === b || a.contains(this.uiDialog[0], b) || this._focusTabbable()
                                            }
                                            b.preventDefault(), c.call(this), this._delay(c)
                                          },
                                          _createWrapper: function() {
                                            this.uiDialog = a("<div>").hide().attr({
                                              tabIndex: -1,
                                              role: "dialog"
                                            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                                              keydown: function(b) {
                                                if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), void this.close(b);
                                                if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
                                                  var c = this.uiDialog.find(":tabbable"),
                                                    d = c.filter(":first"),
                                                    e = c.filter(":last");
                                                  b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function() {
                                                    e.trigger("focus")
                                                  }), b.preventDefault()) : (this._delay(function() {
                                                    d.trigger("focus")
                                                  }), b.preventDefault())
                                                }
                                              },
                                              mousedown: function(a) {
                                                this._moveToTop(a) && this._focusTabbable()
                                              }
                                            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                                              "aria-describedby": this.element.uniqueId().attr("id")
                                            })
                                          },
                                          _createTitlebar: function() {
                                            var b;
                                            this.uiDialogTitlebar = a("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                                              mousedown: function(b) {
                                                a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                                              }
                                            }), this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
                                              label: a("<a>").text(this.options.closeText).html(),
                                              icon: "ui-icon-closethick",
                                              showLabel: !1
                                            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                                              click: function(a) {
                                                a.preventDefault(), this.close(a)
                                              }
                                            }), b = a("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(b, "ui-dialog-title"), this._title(b), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                                              "aria-labelledby": b.attr("id")
                                            })
                                          },
                                          _title: function(a) {
                                            this.options.title ? a.text(this.options.title) : a.html("&#160;")
                                          },
                                          _createButtonPane: function() {
                                            this.uiDialogButtonPane = a("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
                                          },
                                          _createButtons: function() {
                                            var b = this,
                                              c = this.options.buttons;
                                            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (a.each(c, function(c, d) {
                                              var e, f;
                                              d = a.isFunction(d) ? {
                                                click: d,
                                                text: c
                                              } : d, d = a.extend({
                                                type: "button"
                                              }, d), e = d.click, f = {
                                                icon: d.icon,
                                                iconPosition: d.iconPosition,
                                                showLabel: d.showLabel,
                                                icons: d.icons,
                                                text: d.text
                                              }, delete d.click, delete d.icon, delete d.iconPosition, delete d.showLabel, delete d.icons, "boolean" == typeof d.text && delete d.text, a("<button></button>", d).button(f).appendTo(b.uiButtonSet).on("click", function() {
                                                e.apply(b.element[0], arguments)
                                              })
                                            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
                                          },
                                          _makeDraggable: function() {
                                            function b(a) {
                                              return {
                                                position: a.position,
                                                offset: a.offset
                                              }
                                            }
                                            var c = this,
                                              d = this.options;
                                            this.uiDialog.draggable({
                                              cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                                              handle: ".ui-dialog-titlebar",
                                              containment: "document",
                                              start: function(d, e) {
                                                c._addClass(a(this), "ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
                                              },
                                              drag: function(a, d) {
                                                c._trigger("drag", a, b(d))
                                              },
                                              stop: function(e, f) {
                                                var g = f.offset.left - c.document.scrollLeft(),
                                                  h = f.offset.top - c.document.scrollTop();
                                                d.position = {
                                                  my: "left top",
                                                  at: "left" + (g >= 0 ? "+" : "") + g + " top" + (h >= 0 ? "+" : "") + h,
                                                  of: c.window
                                                }, c._removeClass(a(this), "ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
                                              }
                                            })
                                          },
                                          _makeResizable: function() {
                                            function b(a) {
                                              return {
                                                originalPosition: a.originalPosition,
                                                originalSize: a.originalSize,
                                                position: a.position,
                                                size: a.size
                                              }
                                            }
                                            var c = this,
                                              d = this.options,
                                              e = d.resizable,
                                              f = this.uiDialog.css("position"),
                                              g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
                                            this.uiDialog.resizable({
                                              cancel: ".ui-dialog-content",
                                              containment: "document",
                                              alsoResize: this.element,
                                              maxWidth: d.maxWidth,
                                              maxHeight: d.maxHeight,
                                              minWidth: d.minWidth,
                                              minHeight: this._minHeight(),
                                              handles: g,
                                              start: function(d, e) {
                                                c._addClass(a(this), "ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
                                              },
                                              resize: function(a, d) {
                                                c._trigger("resize", a, b(d))
                                              },
                                              stop: function(e, f) {
                                                var g = c.uiDialog.offset(),
                                                  h = g.left - c.document.scrollLeft(),
                                                  i = g.top - c.document.scrollTop();
                                                d.height = c.uiDialog.height(), d.width = c.uiDialog.width(), d.position = {
                                                  my: "left top",
                                                  at: "left" + (h >= 0 ? "+" : "") + h + " top" + (i >= 0 ? "+" : "") + i,
                                                  of: c.window
                                                }, c._removeClass(a(this), "ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
                                              }
                                            }).css("position", f)
                                          },
                                          _trackFocus: function() {
                                            this._on(this.widget(), {
                                              focusin: function(b) {
                                                this._makeFocusTarget(), this._focusedElement = a(b.target)
                                              }
                                            })
                                          },
                                          _makeFocusTarget: function() {
                                            this._untrackInstance(), this._trackingInstances().unshift(this)
                                          },
                                          _untrackInstance: function() {
                                            var b = this._trackingInstances(),
                                              c = a.inArray(this, b); - 1 !== c && b.splice(c, 1)
                                          },
                                          _trackingInstances: function() {
                                            var a = this.document.data("ui-dialog-instances");
                                            return a || (a = [], this.document.data("ui-dialog-instances", a)), a
                                          },
                                          _minHeight: function() {
                                            var a = this.options;
                                            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
                                          },
                                          _position: function() {
                                            var a = this.uiDialog.is(":visible");
                                            a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
                                          },
                                          _setOptions: function(b) {
                                            var c = this,
                                              d = !1,
                                              e = {};
                                            a.each(b, function(a, b) {
                                              c._setOption(a, b), a in c.sizeRelatedOptions && (d = !0), a in c.resizableRelatedOptions && (e[a] = b)
                                            }), d && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e)
                                          },
                                          _setOption: function(b, c) {
                                            var d, e, f = this.uiDialog;
                                            "disabled" !== b && (this._super(b, c), "appendTo" === b && this.uiDialog.appendTo(this._appendTo()), "buttons" === b && this._createButtons(), "closeText" === b && this.uiDialogTitlebarClose.button({
                                              label: a("<a>").text("" + this.options.closeText).html()
                                            }), "draggable" === b && (d = f.is(":data(ui-draggable)"), d && !c && f.draggable("destroy"), !d && c && this._makeDraggable()), "position" === b && this._position(), "resizable" === b && (e = f.is(":data(ui-resizable)"), e && !c && f.resizable("destroy"), e && "string" == typeof c && f.resizable("option", "handles", c), e || !1 === c || this._makeResizable()), "title" === b && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                                          },
                                          _size: function() {
                                            var a, b, c, d = this.options;
                                            this.element.show().css({
                                              width: "auto",
                                              minHeight: 0,
                                              maxHeight: "none",
                                              height: 0
                                            }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                                              height: "auto",
                                              width: d.width
                                            }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
                                              minHeight: b,
                                              maxHeight: c,
                                              height: "auto"
                                            }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                                          },
                                          _blockFrames: function() {
                                            this.iframeBlocks = this.document.find("iframe").map(function() {
                                              var b = a(this);
                                              return a("<div>").css({
                                                position: "absolute",
                                                width: b.outerWidth(),
                                                height: b.outerHeight()
                                              }).appendTo(b.parent()).offset(b.offset())[0]
                                            })
                                          },
                                          _unblockFrames: function() {
                                            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                                          },
                                          _allowInteraction: function(b) {
                                            return !!a(b.target).closest(".ui-dialog").length || !!a(b.target).closest(".ui-datepicker").length
                                          },
                                          _createOverlay: function() {
                                            if (this.options.modal) {
                                              var b = !0;
                                              this._delay(function() {
                                                  b = !1
                                                }),
                                                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                                                  focusin: function(a) {
                                                    b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                                                  }
                                                }), this.overlay = a("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                                                  mousedown: "_keepFocus"
                                                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                                            }
                                          },
                                          _destroyOverlay: function() {
                                            if (this.options.modal && this.overlay) {
                                              var a = this.document.data("ui-dialog-overlays") - 1;
                                              a ? this.document.data("ui-dialog-overlays", a) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                                            }
                                          }
                                        }), !1 !== a.uiBackCompat && a.widget("ui.dialog", a.ui.dialog, {
                                          options: {
                                            dialogClass: ""
                                          },
                                          _createWrapper: function() {
                                            this._super(), this.uiDialog.addClass(this.options.dialogClass)
                                          },
                                          _setOption: function(a, b) {
                                            "dialogClass" === a && this.uiDialog.removeClass(this.options.dialogClass).addClass(b), this._superApply(arguments)
                                          }
                                        }), a.ui.dialog, a.widget("ui.droppable", {
                                          version: "1.12.1",
                                          widgetEventPrefix: "drop",
                                          options: {
                                            accept: "*",
                                            addClasses: !0,
                                            greedy: !1,
                                            scope: "default",
                                            tolerance: "intersect",
                                            activate: null,
                                            deactivate: null,
                                            drop: null,
                                            out: null,
                                            over: null
                                          },
                                          _create: function() {
                                            var b, c = this.options,
                                              d = c.accept;
                                            this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) {
                                              return a.is(d)
                                            }, this.proportions = function() {
                                              return arguments.length ? void(b = arguments[0]) : b || (b = {
                                                width: this.element[0].offsetWidth,
                                                height: this.element[0].offsetHeight
                                              })
                                            }, this._addToManager(c.scope), c.addClasses && this._addClass("ui-droppable")
                                          },
                                          _addToManager: function(b) {
                                            a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this)
                                          },
                                          _splice: function(a) {
                                            for (var b = 0; a.length > b; b++) a[b] === this && a.splice(b, 1)
                                          },
                                          _destroy: function() {
                                            var b = a.ui.ddmanager.droppables[this.options.scope];
                                            this._splice(b)
                                          },
                                          _setOption: function(b, c) {
                                            if ("accept" === b) this.accept = a.isFunction(c) ? c : function(a) {
                                              return a.is(c)
                                            };
                                            else if ("scope" === b) {
                                              var d = a.ui.ddmanager.droppables[this.options.scope];
                                              this._splice(d), this._addToManager(c)
                                            }
                                            this._super(b, c)
                                          },
                                          _activate: function(b) {
                                            var c = a.ui.ddmanager.current;
                                            this._addActiveClass(), c && this._trigger("activate", b, this.ui(c))
                                          },
                                          _deactivate: function(b) {
                                            var c = a.ui.ddmanager.current;
                                            this._removeActiveClass(), c && this._trigger("deactivate", b, this.ui(c))
                                          },
                                          _over: function(b) {
                                            var c = a.ui.ddmanager.current;
                                            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._addHoverClass(), this._trigger("over", b, this.ui(c)))
                                          },
                                          _out: function(b) {
                                            var c = a.ui.ddmanager.current;
                                            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._removeHoverClass(), this._trigger("out", b, this.ui(c)))
                                          },
                                          _drop: function(b, c) {
                                            var d = c || a.ui.ddmanager.current,
                                              e = !1;
                                            return !(!d || (d.currentItem || d.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                                              var c = a(this).droppable("instance");
                                              return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && r(d, a.extend(c, {
                                                offset: c.element.offset()
                                              }), c.options.tolerance, b) ? (e = !0, !1) : void 0
                                            }), !e && (!!this.accept.call(this.element[0], d.currentItem || d.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", b, this.ui(d)), this.element)))
                                          },
                                          ui: function(a) {
                                            return {
                                              draggable: a.currentItem || a.element,
                                              helper: a.helper,
                                              position: a.position,
                                              offset: a.positionAbs
                                            }
                                          },
                                          _addHoverClass: function() {
                                            this._addClass("ui-droppable-hover")
                                          },
                                          _removeHoverClass: function() {
                                            this._removeClass("ui-droppable-hover")
                                          },
                                          _addActiveClass: function() {
                                            this._addClass("ui-droppable-active")
                                          },
                                          _removeActiveClass: function() {
                                            this._removeClass("ui-droppable-active")
                                          }
                                        });
                                        var r = a.ui.intersect = function() {
                                          function a(a, b, c) {
                                            return a >= b && b + c > a
                                          }
                                          return function(b, c, d, e) {
                                            if (!c.offset) return !1;
                                            var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
                                              g = (b.positionAbs || b.position.absolute).top + b.margins.top,
                                              h = f + b.helperProportions.width,
                                              i = g + b.helperProportions.height,
                                              j = c.offset.left,
                                              k = c.offset.top,
                                              l = j + c.proportions().width,
                                              m = k + c.proportions().height;
                                            switch (d) {
                                              case "fit":
                                                return f >= j && l >= h && g >= k && m >= i;
                                              case "intersect":
                                                return f + b.helperProportions.width / 2 > j && l > h - b.helperProportions.width / 2 && g + b.helperProportions.height / 2 > k && m > i - b.helperProportions.height / 2;
                                              case "pointer":
                                                return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
                                              case "touch":
                                                return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);
                                              default:
                                                return !1
                                            }
                                          }
                                        }();
                                        a.ui.ddmanager = {
                                        current: null,
                                        droppables: {
                                          default: []
                                        },
                                        prepareOffsets: function(b, c) {
                                          var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
                                            g = c ? c.type : null,
                                            h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
                                          a: for (d = 0; f.length > d; d++)
                                            if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                                              for (e = 0; h.length > e; e++)
                                                if (h[e] === f[d].element[0]) {
                                                  f[d].proportions().height = 0;
                                                  continue a
                                                } f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({
                                                width: f[d].element[0].offsetWidth,
                                                height: f[d].element[0].offsetHeight
                                              }))
                                            }
                                        },
                                        drop: function(b, c) {
                                          var d = !1;
                                          return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                                            this.options && (!this.options.disabled && this.visible && r(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
                                          }), d
                                        },
                                        dragStart: function(b, c) {
                                          b.element.parentsUntil("body").on("scroll.droppable", function() {
                                            b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
                                          })
                                        },
                                        drag: function(b, c) {
                                          b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                                            if (!this.options.disabled && !this.greedyChild && this.visible) {
                                              var d, e, f, g = r(b, this, this.options.tolerance, c),
                                                h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                                              h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                                                return a(this).droppable("instance").options.scope === e
                                              }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                                            }
                                          })
                                        },
                                        dragStop: function(b, c) {
                                          b.element.parentsUntil("body").off("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
                                        }
                                        }, !1 !== a.uiBackCompat && a.widget("ui.droppable", a.ui.droppable, {
                                        options: {
                                          hoverClass: !1,
                                          activeClass: !1
                                        },
                                        _addActiveClass: function() {
                                          this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
                                        },
                                        _removeActiveClass: function() {
                                          this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
                                        },
                                        _addHoverClass: function() {
                                          this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
                                        },
                                        _removeHoverClass: function() {
                                          this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
                                        }
                                        }), a.ui.droppable, a.widget("ui.progressbar", {
                                        version: "1.12.1",
                                        options: {
                                          classes: {
                                            "ui-progressbar": "ui-corner-all",
                                            "ui-progressbar-value": "ui-corner-left",
                                            "ui-progressbar-complete": "ui-corner-right"
                                          },
                                          max: 100,
                                          value: 0,
                                          change: null,
                                          complete: null
                                        },
                                        min: 0,
                                        _create: function() {
                                          this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                                            role: "progressbar",
                                            "aria-valuemin": this.min
                                          }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = a("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
                                        },
                                        _destroy: function() {
                                          this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
                                        },
                                        value: function(a) {
                                          return void 0 === a ? this.options.value : (this.options.value = this._constrainedValue(a), void this._refreshValue())
                                        },
                                        _constrainedValue: function(a) {
                                          return void 0 === a && (a = this.options.value), this.indeterminate = !1 === a, "number" != typeof a && (a = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, a))
                                        },
                                        _setOptions: function(a) {
                                          var b = a.value;
                                          delete a.value, this._super(a), this.options.value = this._constrainedValue(b), this._refreshValue()
                                        },
                                        _setOption: function(a, b) {
                                          "max" === a && (b = Math.max(this.min, b)), this._super(a, b)
                                        },
                                        _setOptionDisabled: function(a) {
                                          this._super(a), this.element.attr("aria-disabled", a), this._toggleClass(null, "ui-state-disabled", !!a)
                                        },
                                        _percentage: function() {
                                          return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                                        },
                                        _refreshValue: function() {
                                          var b = this.options.value,
                                            c = this._percentage();
                                          this.valueDiv.toggle(this.indeterminate || b > this.min).width(c.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, b === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                                            "aria-valuemax": this.options.max,
                                            "aria-valuenow": b
                                          }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, this._trigger("change")), b === this.options.max && this._trigger("complete")
                                        }
                                        }), a.widget("ui.selectable", a.ui.mouse, {
                                        version: "1.12.1",
                                        options: {
                                          appendTo: "body",
                                          autoRefresh: !0,
                                          distance: 0,
                                          filter: "*",
                                          tolerance: "touch",
                                          selected: null,
                                          selecting: null,
                                          start: null,
                                          stop: null,
                                          unselected: null,
                                          unselecting: null
                                        },
                                        _create: function() {
                                          var b = this;
                                          this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                                            b.elementPos = a(b.element[0]).offset(), b.selectees = a(b.options.filter, b.element[0]), b._addClass(b.selectees, "ui-selectee"), b.selectees.each(function() {
                                              var c = a(this),
                                                d = c.offset(),
                                                e = {
                                                  left: d.left - b.elementPos.left,
                                                  top: d.top - b.elementPos.top
                                                };
                                              a.data(this, "selectable-item", {
                                                element: this,
                                                $element: c,
                                                left: e.left,
                                                top: e.top,
                                                right: e.left + c.outerWidth(),
                                                bottom: e.top + c.outerHeight(),
                                                startselected: !1,
                                                selected: c.hasClass("ui-selected"),
                                                selecting: c.hasClass("ui-selecting"),
                                                unselecting: c.hasClass("ui-unselecting")
                                              })
                                            })
                                          }, this.refresh(), this._mouseInit(), this.helper = a("<div>"), this._addClass(this.helper, "ui-selectable-helper")
                                        },
                                        _destroy: function() {
                                          this.selectees.removeData("selectable-item"), this._mouseDestroy()
                                        },
                                        _mouseStart: function(b) {
                                          var c = this,
                                            d = this.options;
                                          this.opos = [b.pageX, b.pageY], this.elementPos = a(this.element[0]).offset(), this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                                            left: b.pageX,
                                            top: b.pageY,
                                            width: 0,
                                            height: 0
                                          }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                                            var d = a.data(this, "selectable-item");
                                            d.startselected = !0, b.metaKey || b.ctrlKey || (c._removeClass(d.$element, "ui-selected"), d.selected = !1, c._addClass(d.$element, "ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                                              unselecting: d.element
                                            }))
                                          }), a(b.target).parents().addBack().each(function() {
                                            var d, e = a.data(this, "selectable-item");
                                            return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), c._removeClass(e.$element, d ? "ui-unselecting" : "ui-selected")._addClass(e.$element, d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                                              selecting: e.element
                                            }) : c._trigger("unselecting", b, {
                                              unselecting: e.element
                                            }), !1) : void 0
                                          }))
                                        },
                                        _mouseDrag: function(b) {
                                          if (this.dragged = !0, !this.options.disabled) {
                                            var c, d = this,
                                              e = this.options,
                                              f = this.opos[0],
                                              g = this.opos[1],
                                              h = b.pageX,
                                              i = b.pageY;
                                            return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                                              left: f,
                                              top: g,
                                              width: h - f,
                                              height: i - g
                                            }), this.selectees.each(function() {
                                              var c = a.data(this, "selectable-item"),
                                                j = !1,
                                                k = {};
                                              c && c.element !== d.element[0] && (k.left = c.left + d.elementPos.left, k.right = c.right + d.elementPos.left, k.top = c.top + d.elementPos.top, k.bottom = c.bottom + d.elementPos.top, "touch" === e.tolerance ? j = !(k.left > h || f > k.right || k.top > i || g > k.bottom) : "fit" === e.tolerance && (j = k.left > f && h > k.right && k.top > g && i > k.bottom), j ? (c.selected && (d._removeClass(c.$element, "ui-selected"), c.selected = !1), c.unselecting && (d._removeClass(c.$element, "ui-unselecting"), c.unselecting = !1), c.selecting || (d._addClass(c.$element, "ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {
                                                selecting: c.element
                                              }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (d._removeClass(c.$element, "ui-selecting"), c.selecting = !1, d._addClass(c.$element, "ui-selected"), c.selected = !0) : (d._removeClass(c.$element, "ui-selecting"), c.selecting = !1, c.startselected && (d._addClass(c.$element, "ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {
                                                unselecting: c.element
                                              }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (d._removeClass(c.$element, "ui-selected"), c.selected = !1, d._addClass(c.$element, "ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
                                                unselecting: c.element
                                              })))))
                                            }), !1
                                          }
                                        },
                                        _mouseStop: function(b) {
                                          var c = this;
                                          return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                                            var d = a.data(this, "selectable-item");
                                            c._removeClass(d.$element, "ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
                                              unselected: d.element
                                            })
                                          }), a(".ui-selecting", this.element[0]).each(function() {
                                            var d = a.data(this, "selectable-item");
                                            c._removeClass(d.$element, "ui-selecting")._addClass(d.$element, "ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                                              selected: d.element
                                            })
                                          }), this._trigger("stop", b), this.helper.remove(), !1
                                        }
                                        }), a.widget("ui.selectmenu", [a.ui.formResetMixin, {
                                        version: "1.12.1",
                                        defaultElement: "<select>",
                                        options: {
                                          appendTo: null,
                                          classes: {
                                            "ui-selectmenu-button-open": "ui-corner-top",
                                            "ui-selectmenu-button-closed": "ui-corner-all"
                                          },
                                          disabled: null,
                                          icons: {
                                            button: "ui-icon-triangle-1-s"
                                          },
                                          position: {
                                            my: "left top",
                                            at: "left bottom",
                                            collision: "none"
                                          },
                                          width: !1,
                                          change: null,
                                          close: null,
                                          focus: null,
                                          open: null,
                                          select: null
                                        },
                                        _create: function() {
                                          var b = this.element.uniqueId().attr("id");
                                          this.ids = {
                                            element: b,
                                            button: b + "-button",
                                            menu: b + "-menu"
                                          }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = a()
                                        },
                                        _drawButton: function() {
                                          var b, c = this,
                                            d = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                                          this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                                            click: function(a) {
                                              this.button.focus(), a.preventDefault()
                                            }
                                          }), this.element.hide(), this.button = a("<span>", {
                                            tabindex: this.options.disabled ? -1 : 0,
                                            id: this.ids.button,
                                            role: "combobox",
                                            "aria-expanded": "false",
                                            "aria-autocomplete": "list",
                                            "aria-owns": this.ids.menu,
                                            "aria-haspopup": "true",
                                            title: this.element.attr("title")
                                          }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), b = a("<span>").appendTo(this.button), this._addClass(b, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(d).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                                            c._rendered || c._refreshMenu()
                                          })
                                        },
                                        _drawMenu: function() {
                                          var b = this;
                                          this.menu = a("<ul>", {
                                            "aria-hidden": "true",
                                            "aria-labelledby": this.ids.button,
                                            id: this.ids.menu
                                          }), this.menuWrap = a("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                                            classes: {
                                              "ui-menu": "ui-corner-bottom"
                                            },
                                            role: "listbox",
                                            select: function(a, c) {
                                              a.preventDefault(), b._setSelection(), b._select(c.item.data("ui-selectmenu-item"), a)
                                            },
                                            focus: function(a, c) {
                                              var d = c.item.data("ui-selectmenu-item");
                                              null != b.focusIndex && d.index !== b.focusIndex && (b._trigger("focus", a, {
                                                item: d
                                              }), b.isOpen || b._select(d, a)), b.focusIndex = d.index, b.button.attr("aria-activedescendant", b.menuItems.eq(d.index).attr("id"))
                                            }
                                          }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                                            return !1
                                          }, this.menuInstance._isDivider = function() {
                                            return !1
                                          }
                                        },
                                        refresh: function() {
                                          this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
                                        },
                                        _refreshMenu: function() {
                                          var a, b = this.element.find("option");
                                          this.menu.empty(), this._parseOptions(b), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, b.length && (a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
                                        },
                                        open: function(a) {
                                          this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", a)))
                                        },
                                        _position: function() {
                                          this.menuWrap.position(a.extend({
                                            of: this.button
                                          }, this.options.position))
                                        },
                                        close: function(a) {
                                          this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", a))
                                        },
                                        widget: function() {
                                          return this.button
                                        },
                                        menuWidget: function() {
                                          return this.menu
                                        },
                                        _renderButtonItem: function(b) {
                                          var c = a("<span>");
                                          return this._setText(c, b.label), this._addClass(c, "ui-selectmenu-text"), c
                                        },
                                        _renderMenu: function(b, c) {
                                          var d = this,
                                            e = "";
                                          a.each(c, function(c, f) {
                                            var g;
                                            f.optgroup !== e && (g = a("<li>", {
                                              text: f.optgroup
                                            }), d._addClass(g, "ui-selectmenu-optgroup", "ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), g.appendTo(b), e = f.optgroup), d._renderItemData(b, f)
                                          })
                                        },
                                        _renderItemData: function(a, b) {
                                          return this._renderItem(a, b).data("ui-selectmenu-item", b)
                                        },
                                        _renderItem: function(b, c) {
                                          var d = a("<li>"),
                                            e = a("<div>", {
                                              title: c.element.attr("title")
                                            });
                                          return c.disabled && this._addClass(d, null, "ui-state-disabled"), this._setText(e, c.label), d.append(e).appendTo(b)
                                        },
                                        _setText: function(a, b) {
                                          b ? a.text(b) : a.html("&#160;")
                                        },
                                        _move: function(a, b) {
                                          var c, d, e = ".ui-menu-item";
                                          this.isOpen ? c = this.menuItems.eq(this.focusIndex).parent("li") : (c = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), e += ":not(.ui-state-disabled)"), d = "first" === a || "last" === a ? c["first" === a ? "prevAll" : "nextAll"](e).eq(-1) : c[a + "All"](e).eq(0), d.length && this.menuInstance.focus(b, d)
                                        },
                                        _getSelectedItem: function() {
                                          return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
                                        },
                                        _toggle: function(a) {
                                          this[this.isOpen ? "close" : "open"](a)
                                        },
                                        _setSelection: function() {
                                          var a;
                                          this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), a.addRange(this.range)) : this.range.select(), this.button.focus())
                                        },
                                        _documentClick: {
                                          mousedown: function(b) {
                                            this.isOpen && (a(b.target).closest(".ui-selectmenu-menu, #" + a.ui.escapeSelector(this.ids.button)).length || this.close(b))
                                          }
                                        },
                                        _buttonEvents: {
                                          mousedown: function() {
                                            var a;
                                            window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) : this.range = document.selection.createRange()
                                          },
                                          click: function(a) {
                                            this._setSelection(), this._toggle(a)
                                          },
                                          keydown: function(b) {
                                            var c = !0;
                                            switch (b.keyCode) {
                                              case a.ui.keyCode.TAB:
                                              case a.ui.keyCode.ESCAPE:
                                                this.close(b), c = !1;
                                                break;
                                              case a.ui.keyCode.ENTER:
                                                this.isOpen && this._selectFocusedItem(b);
                                                break;
                                              case a.ui.keyCode.UP:
                                                b.altKey ? this._toggle(b) : this._move("prev", b);
                                                break;
                                              case a.ui.keyCode.DOWN:
                                                b.altKey ? this._toggle(b) : this._move("next", b);
                                                break;
                                              case a.ui.keyCode.SPACE:
                                                this.isOpen ? this._selectFocusedItem(b) : this._toggle(b);
                                                break;
                                              case a.ui.keyCode.LEFT:
                                                this._move("prev", b);
                                                break;
                                              case a.ui.keyCode.RIGHT:
                                                this._move("next", b);
                                                break;
                                              case a.ui.keyCode.HOME:
                                              case a.ui.keyCode.PAGE_UP:
                                                this._move("first", b);
                                                break;
                                              case a.ui.keyCode.END:
                                              case a.ui.keyCode.PAGE_DOWN:
                                                this._move("last", b);
                                                break;
                                              default:
                                                this.menu.trigger(b), c = !1
                                            }
                                            c && b.preventDefault()
                                          }
                                        },
                                        _selectFocusedItem: function(a) {
                                          var b = this.menuItems.eq(this.focusIndex).parent("li");
                                          b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a)
                                        },
                                        _select: function(a, b) {
                                          var c = this.element[0].selectedIndex;
                                          this.element[0].selectedIndex = a.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(a)), this._setAria(a), this._trigger("select", b, {
                                            item: a
                                          }), a.index !== c && this._trigger("change", b, {
                                            item: a
                                          }), this.close(b)
                                        },
                                        _setAria: function(a) {
                                          var b = this.menuItems.eq(a.index).attr("id");
                                          this.button.attr({
                                            "aria-labelledby": b,
                                            "aria-activedescendant": b
                                          }), this.menu.attr("aria-activedescendant", b)
                                        },
                                        _setOption: function(a, b) {
                                          if ("icons" === a) {
                                            var c = this.button.find("span.ui-icon");
                                            this._removeClass(c, null, this.options.icons.button)._addClass(c, null, b.button)
                                          }
                                          this._super(a, b), "appendTo" === a && this.menuWrap.appendTo(this._appendTo()), "width" === a && this._resizeButton()
                                        },
                                        _setOptionDisabled: function(a) {
                                          this._super(a), this.menuInstance.option("disabled", a), this.button.attr("aria-disabled", a), this._toggleClass(this.button, null, "ui-state-disabled", a), this.element.prop("disabled", a), a ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
                                        },
                                        _appendTo: function() {
                                          var b = this.options.appendTo;
                                          return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front, dialog")), b.length || (b = this.document[0].body), b
                                        },
                                        _toggleAttr: function() {
                                          this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
                                        },
                                        _resizeButton: function() {
                                          var a = this.options.width;
                                          return !1 === a ? void this.button.css("width", "") : (null === a && (a = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(a))
                                        },
                                        _resizeMenu: function() {
                                          this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                                        },
                                        _getCreateOptions: function() {
                                          var a = this._super();
                                          return a.disabled = this.element.prop("disabled"), a
                                        },
                                        _parseOptions: function(b) {
                                          var c = this,
                                            d = [];
                                          b.each(function(b, e) {
                                            d.push(c._parseOption(a(e), b))
                                          }), this.items = d
                                        },
                                        _parseOption: function(a, b) {
                                          var c = a.parent("optgroup");
                                          return {
                                            element: a,
                                            index: b,
                                            value: a.val(),
                                            label: a.text(),
                                            optgroup: c.attr("label") || "",
                                            disabled: c.prop("disabled") || a.prop("disabled")
                                          }
                                        },
                                        _destroy: function() {
                                          this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
                                        }
                                        }]), a.widget("ui.slider", a.ui.mouse, {
                                        version: "1.12.1",
                                        widgetEventPrefix: "slide",
                                        options: {
                                          animate: !1,
                                          classes: {
                                            "ui-slider": "ui-corner-all",
                                            "ui-slider-handle": "ui-corner-all",
                                            "ui-slider-range": "ui-corner-all ui-widget-header"
                                          },
                                          distance: 0,
                                          max: 100,
                                          min: 0,
                                          orientation: "horizontal",
                                          range: !1,
                                          step: 1,
                                          value: 0,
                                          values: null,
                                          change: null,
                                          slide: null,
                                          start: null,
                                          stop: null
                                        },
                                        numPages: 5,
                                        _create: function() {
                                          this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
                                        },
                                        _refresh: function() {
                                          this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                                        },
                                        _createHandles: function() {
                                          var b, c, d = this.options,
                                            e = this.element.find(".ui-slider-handle"),
                                            f = [];
                                          for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++) f.push("<span tabindex='0'></span>");
                                          this.handles = e.add(a(f.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(b) {
                                            a(this).data("ui-slider-handle-index", b).attr("tabIndex", 0)
                                          })
                                        },
                                        _createRange: function() {
                                          var b = this.options;
                                          b.range ? (!0 === b.range && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                                            left: "",
                                            bottom: ""
                                          })) : (this.range = a("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === b.range || "max" === b.range) && this._addClass(this.range, "ui-slider-range-" + b.range)) : (this.range && this.range.remove(), this.range = null)
                                        },
                                        _setupEvents: function() {
                                          this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                                        },
                                        _destroy: function() {
                                          this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
                                        },
                                        _mouseCapture: function(b) {
                                          var c, d, e, f, g, h, i, j = this,
                                            k = this.options;
                                          return !k.disabled && (this.elementSize = {
                                            width: this.element.outerWidth(),
                                            height: this.element.outerHeight()
                                          }, this.elementOffset = this.element.offset(), c = {
                                            x: b.pageX,
                                            y: b.pageY
                                          }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(b) {
                                            var c = Math.abs(d - j.values(b));
                                            (e > c || e === c && (b === j._lastChangedValue || j.values(b) === k.min)) && (e = c, f = a(this), g = b)
                                          }), !1 !== this._start(b, g) && (this._mouseSliding = !0, this._handleIndex = g, this._addClass(f, null, "ui-state-active"), f.trigger("focus"), h = f.offset(), i = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = i ? {
                                            left: 0,
                                            top: 0
                                          } : {
                                            left: b.pageX - h.left - f.width() / 2,
                                            top: b.pageY - h.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                                          }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
                                        },
                                        _mouseStart: function() {
                                          return !0
                                        },
                                        _mouseDrag: function(a) {
                                          var b = {
                                              x: a.pageX,
                                              y: a.pageY
                                            },
                                            c = this._normValueFromMouse(b);
                                          return this._slide(a, this._handleIndex, c), !1
                                        },
                                        _mouseStop: function(a) {
                                          return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                                        },
                                        _detectOrientation: function() {
                                          this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                                        },
                                        _normValueFromMouse: function(a) {
                                          var b, c, d, e, f;
                                          return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
                                        },
                                        _uiHash: function(a, b, c) {
                                          var d = {
                                            handle: this.handles[a],
                                            handleIndex: a,
                                            value: void 0 !== b ? b : this.value()
                                          };
                                          return this._hasMultipleValues() && (d.value = void 0 !== b ? b : this.values(a), d.values = c || this.values()), d
                                        },
                                        _hasMultipleValues: function() {
                                          return this.options.values && this.options.values.length
                                        },
                                        _start: function(a, b) {
                                          return this._trigger("start", a, this._uiHash(b))
                                        },
                                        _slide: function(a, b, c) {
                                          var d, e = this.value(),
                                            f = this.values();
                                          this._hasMultipleValues() && (d = this.values(b ? 0 : 1), e = this.values(b), 2 === this.options.values.length && !0 === this.options.range && (c = 0 === b ? Math.min(d, c) : Math.max(d, c)), f[b] = c), c !== e && !1 !== this._trigger("slide", a, this._uiHash(b, c, f)) && (this._hasMultipleValues() ? this.values(b, c) : this.value(c))
                                        },
                                        _stop: function(a, b) {
                                          this._trigger("stop", a, this._uiHash(b))
                                        },
                                        _change: function(a, b) {
                                          this._keySliding || this._mouseSliding || (this._lastChangedValue = b, this._trigger("change", a, this._uiHash(b)))
                                        },
                                        value: function(a) {
                                          return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value()
                                        },
                                        values: function(b, c) {
                                          var d, e, f;
                                          if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b);
                                          if (!arguments.length) return this._values();
                                          if (!a.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(b) : this.value();
                                          for (d = this.options.values, e = arguments[0], f = 0; d.length > f; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                                          this._refreshValue()
                                        },
                                        _setOption: function(b, c) {
                                          var d, e = 0;
                                          switch ("range" === b && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), this._super(b, c), b) {
                                            case "orientation":
                                              this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(c), this.handles.css("horizontal" === c ? "bottom" : "left", "");
                                              break;
                                            case "value":
                                              this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                                              break;
                                            case "values":
                                              for (this._animateOff = !0, this._refreshValue(), d = e - 1; d >= 0; d--) this._change(null, d);
                                              this._animateOff = !1;
                                              break;
                                            case "step":
                                            case "min":
                                            case "max":
                                              this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                                              break;
                                            case "range":
                                              this._animateOff = !0, this._refresh(), this._animateOff = !1
                                          }
                                        },
                                        _setOptionDisabled: function(a) {
                                          this._super(a), this._toggleClass(null, "ui-state-disabled", !!a)
                                        },
                                        _value: function() {
                                          var a = this.options.value;
                                          return a = this._trimAlignValue(a)
                                        },
                                        _values: function(a) {
                                          var b, c, d;
                                          if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
                                          if (this._hasMultipleValues()) {
                                            for (c = this.options.values.slice(), d = 0; c.length > d; d += 1) c[d] = this._trimAlignValue(c[d]);
                                            return c
                                          }
                                          return []
                                        },
                                        _trimAlignValue: function(a) {
                                          if (this._valueMin() >= a) return this._valueMin();
                                          if (a >= this._valueMax()) return this._valueMax();
                                          var b = this.options.step > 0 ? this.options.step : 1,
                                            c = (a - this._valueMin()) % b,
                                            d = a - c;
                                          return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
                                        },
                                        _calculateNewMax: function() {
                                          var a = this.options.max,
                                            b = this._valueMin(),
                                            c = this.options.step;
                                          a = Math.round((a - b) / c) * c + b, a > this.options.max && (a -= c), this.max = parseFloat(a.toFixed(this._precision()))
                                        },
                                        _precision: function() {
                                          var a = this._precisionOf(this.options.step);
                                          return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
                                        },
                                        _precisionOf: function(a) {
                                          var b = "" + a,
                                            c = b.indexOf(".");
                                          return -1 === c ? 0 : b.length - c - 1
                                        },
                                        _valueMin: function() {
                                          return this.options.min
                                        },
                                        _valueMax: function() {
                                          return this.max
                                        },
                                        _refreshRange: function(a) {
                                          "vertical" === a && this.range.css({
                                            width: "",
                                            left: ""
                                          }), "horizontal" === a && this.range.css({
                                            height: "",
                                            bottom: ""
                                          })
                                        },
                                        _refreshValue: function() {
                                          var b, c, d, e, f, g = this.options.range,
                                            h = this.options,
                                            i = this,
                                            j = !this._animateOff && h.animate,
                                            k = {};
                                          this._hasMultipleValues() ? this.handles.each(function(d) {
                                            c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), !0 === i.options.range && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                                              left: c + "%"
                                            }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                                              width: c - b + "%"
                                            }, {
                                              queue: !1,
                                              duration: h.animate
                                            })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                                              bottom: c + "%"
                                            }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                                              height: c - b + "%"
                                            }, {
                                              queue: !1,
                                              duration: h.animate
                                            }))), b = c
                                          }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                                            width: c + "%"
                                          }, h.animate), "max" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                                            width: 100 - c + "%"
                                          }, h.animate), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                                            height: c + "%"
                                          }, h.animate), "max" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                                            height: 100 - c + "%"
                                          }, h.animate))
                                        },
                                        _handleEvents: {
                                          keydown: function(b) {
                                            var c, d, e, f = a(b.target).data("ui-slider-handle-index");
                                            switch (b.keyCode) {
                                              case a.ui.keyCode.HOME:
                                              case a.ui.keyCode.END:
                                              case a.ui.keyCode.PAGE_UP:
                                              case a.ui.keyCode.PAGE_DOWN:
                                              case a.ui.keyCode.UP:
                                              case a.ui.keyCode.RIGHT:
                                              case a.ui.keyCode.DOWN:
                                              case a.ui.keyCode.LEFT:
                                                if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(a(b.target), null, "ui-state-active"), !1 === this._start(b, f))) return
                                            }
                                            switch (e = this.options.step, c = d = this._hasMultipleValues() ? this.values(f) : this.value(), b.keyCode) {
                                              case a.ui.keyCode.HOME:
                                                d = this._valueMin();
                                                break;
                                              case a.ui.keyCode.END:
                                                d = this._valueMax();
                                                break;
                                              case a.ui.keyCode.PAGE_UP:
                                                d = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
                                                break;
                                              case a.ui.keyCode.PAGE_DOWN:
                                                d = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / this.numPages);
                                                break;
                                              case a.ui.keyCode.UP:
                                              case a.ui.keyCode.RIGHT:
                                                if (c === this._valueMax()) return;
                                                d = this._trimAlignValue(c + e);
                                                break;
                                              case a.ui.keyCode.DOWN:
                                              case a.ui.keyCode.LEFT:
                                                if (c === this._valueMin()) return;
                                                d = this._trimAlignValue(c - e)
                                            }
                                            this._slide(b, f, d)
                                          },
                                          keyup: function(b) {
                                            var c = a(b.target).data("ui-slider-handle-index");
                                            this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), this._removeClass(a(b.target), null, "ui-state-active"))
                                          }
                                        }
                                        }), a.widget("ui.sortable", a.ui.mouse, {
                                        version: "1.12.1",
                                        widgetEventPrefix: "sort",
                                        ready: !1,
                                        options: {
                                          appendTo: "parent",
                                          axis: !1,
                                          connectWith: !1,
                                          containment: !1,
                                          cursor: "auto",
                                          cursorAt: !1,
                                          dropOnEmpty: !0,
                                          forcePlaceholderSize: !1,
                                          forceHelperSize: !1,
                                          grid: !1,
                                          handle: !1,
                                          helper: "original",
                                          items: "> *",
                                          opacity: !1,
                                          placeholder: !1,
                                          revert: !1,
                                          scroll: !0,
                                          scrollSensitivity: 20,
                                          scrollSpeed: 20,
                                          scope: "default",
                                          tolerance: "intersect",
                                          zIndex: 1e3,
                                          activate: null,
                                          beforeStop: null,
                                          change: null,
                                          deactivate: null,
                                          out: null,
                                          over: null,
                                          receive: null,
                                          remove: null,
                                          sort: null,
                                          start: null,
                                          stop: null,
                                          update: null
                                        },
                                        _isOverAxis: function(a, b, c) {
                                          return a >= b && b + c > a
                                        },
                                        _isFloating: function(a) {
                                          return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
                                        },
                                        _create: function() {
                                          this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                                        },
                                        _setOption: function(a, b) {
                                          this._super(a, b), "handle" === a && this._setHandleClassName()
                                        },
                                        _setHandleClassName: function() {
                                          var b = this;
                                          this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), a.each(this.items, function() {
                                            b._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                                          })
                                        },
                                        _destroy: function() {
                                          this._mouseDestroy();
                                          for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
                                          return this
                                        },
                                        _mouseCapture: function(b, c) {
                                          var d = null,
                                            e = !1,
                                            f = this;
                                          return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(b), a(b.target).parents().each(function() {
                                            return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
                                          }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), !!d && (!(this.options.handle && !c && (a(this.options.handle, d).find("*").addBack().each(function() {
                                            this === b.target && (e = !0)
                                          }), !e)) && (this.currentItem = d, this._removeCurrentsFromItems(), !0))))
                                        },
                                        _mouseStart: function(b, c, d) {
                                          var e, f, g = this.options;
                                          if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                                              top: this.offset.top - this.margins.top,
                                              left: this.offset.left - this.margins.left
                                            }, a.extend(this.offset, {
                                              click: {
                                                left: b.pageX - this.offset.left,
                                                top: b.pageY - this.offset.top
                                              },
                                              parent: this._getParentOffset(),
                                              relative: this._getRelativeOffset()
                                            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {
                                              prev: this.currentItem.prev()[0],
                                              parent: this.currentItem.parent()[0]
                                            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                                            for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
                                          return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(b), !0
                                        },
                                        _mouseDrag: function(b) {
                                          var c, d, e, f, g = this.options,
                                            h = !1;
                                          for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - this.document.scrollTop() < g.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - g.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < g.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + g.scrollSpeed)), b.pageX - this.document.scrollLeft() < g.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - g.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < g.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + g.scrollSpeed))), !1 !== h && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                                            if (d = this.items[c], e = d.item[0], (f = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" !== this.options.type || !a.contains(this.element[0], e))) {
                                              if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                                              this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                                              break
                                            } return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                                        },
                                        _mouseStop: function(b, c) {
                                          if (b) {
                                            if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                                              var d = this,
                                                e = this.placeholder.offset(),
                                                f = this.options.axis,
                                                g = {};
                                              f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                                                d._clear(b)
                                              })
                                            } else this._clear(b, c);
                                            return !1
                                          }
                                        },
                                        cancel: function() {
                                          if (this.dragging) {
                                            this._mouseUp(new a.Event("mouseup", {
                                              target: null
                                            })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                                            for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
                                          }
                                          return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                                            helper: null,
                                            dragging: !1,
                                            reverting: !1,
                                            _noFinalSort: null
                                          }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
                                        },
                                        serialize: function(b) {
                                          var c = this._getItemsAsjQuery(b && b.connected),
                                            d = [];
                                          return b = b || {}, a(c).each(function() {
                                            var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                                            c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
                                          }), !d.length && b.key && d.push(b.key + "="), d.join("&")
                                        },
                                        toArray: function(b) {
                                          var c = this._getItemsAsjQuery(b && b.connected),
                                            d = [];
                                          return b = b || {}, c.each(function() {
                                            d.push(a(b.item || this).attr(b.attribute || "id") || "")
                                          }), d
                                        },
                                        _intersectsWith: function(a) {
                                          var b = this.positionAbs.left,
                                            c = b + this.helperProportions.width,
                                            d = this.positionAbs.top,
                                            e = d + this.helperProportions.height,
                                            f = a.left,
                                            g = f + a.width,
                                            h = a.top,
                                            i = h + a.height,
                                            j = this.offset.click.top,
                                            k = this.offset.click.left,
                                            l = "x" === this.options.axis || d + j > h && i > d + j,
                                            m = "y" === this.options.axis || b + k > f && g > b + k,
                                            n = l && m;
                                          return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && i > e - this.helperProportions.height / 2
                                        },
                                        _intersectsWithPointer: function(a) {
                                          var b, c, d = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                                            e = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
                                          return !(!d || !e) && (b = this._getDragVerticalDirection(), c = this._getDragHorizontalDirection(), this.floating ? "right" === c || "down" === b ? 2 : 1 : b && ("down" === b ? 2 : 1))
                                        },
                                        _intersectsWithSides: function(a) {
                                          var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                                            c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                                            d = this._getDragVerticalDirection(),
                                            e = this._getDragHorizontalDirection();
                                          return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b)
                                        },
                                        _getDragVerticalDirection: function() {
                                          var a = this.positionAbs.top - this.lastPositionAbs.top;
                                          return 0 !== a && (a > 0 ? "down" : "up")
                                        },
                                        _getDragHorizontalDirection: function() {
                                          var a = this.positionAbs.left - this.lastPositionAbs.left;
                                          return 0 !== a && (a > 0 ? "right" : "left")
                                        },
                                        refresh: function(a) {
                                          return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this
                                        },
                                        _connectWith: function() {
                                          var a = this.options;
                                          return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
                                        },
                                        _getItemsAsjQuery: function(b) {
                                          function c() {
                                            h.push(this)
                                          }
                                          var d, e, f, g, h = [],
                                            i = [],
                                            j = this._connectWith();
                                          if (j && b)
                                            for (d = j.length - 1; d >= 0; d--)
                                              for (f = a(j[d], this.document[0]), e = f.length - 1; e >= 0; e--)(g = a.data(f[e], this.widgetFullName)) && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]);
                                          for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                                              options: this.options,
                                              item: this.currentItem
                                            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--) i[d][0].each(c);
                                          return a(h)
                                        },
                                        _removeCurrentsFromItems: function() {
                                          var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
                                          this.items = a.grep(this.items, function(a) {
                                            for (var c = 0; b.length > c; c++)
                                              if (b[c] === a.item[0]) return !1;
                                            return !0
                                          })
                                        },
                                        _refreshItems: function(b) {
                                          this.items = [], this.containers = [this];
                                          var c, d, e, f, g, h, i, j, k = this.items,
                                            l = [
                                              [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                                                item: this.currentItem
                                              }) : a(this.options.items, this.element), this]
                                            ],
                                            m = this._connectWith();
                                          if (m && this.ready)
                                            for (c = m.length - 1; c >= 0; c--)
                                              for (e = a(m[c], this.document[0]), d = e.length - 1; d >= 0; d--)(f = a.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                                                item: this.currentItem
                                              }) : a(f.options.items, f.element), f]), this.containers.push(f));
                                          for (c = l.length - 1; c >= 0; c--)
                                            for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                                              item: i,
                                              instance: g,
                                              width: 0,
                                              height: 0,
                                              left: 0,
                                              top: 0
                                            })
                                        },
                                        refreshPositions: function(b) {
                                          this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                                          var c, d, e, f;
                                          for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
                                          if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                                          else
                                            for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
                                          return this
                                        },
                                        _createPlaceholder: function(b) {
                                          b = b || this;
                                          var c, d = b.options;
                                          d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                                            element: function() {
                                              var d = b.currentItem[0].nodeName.toLowerCase(),
                                                e = a("<" + d + ">", b.document[0]);
                                              return b._addClass(e, "ui-sortable-placeholder", c || b.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === d ? b._createTrPlaceholder(b.currentItem.find("tr").eq(0), a("<tr>", b.document[0]).appendTo(e)) : "tr" === d ? b._createTrPlaceholder(b.currentItem, e) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
                                            },
                                            update: function(a, e) {
                                              (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                                            }
                                          }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
                                        },
                                        _createTrPlaceholder: function(b, c) {
                                          var d = this;
                                          b.children().each(function() {
                                            a("<td>&#160;</td>", d.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(c)
                                          })
                                        },
                                        _contactContainers: function(b) {
                                          var c, d, e, f, g, h, i, j, k, l, m = null,
                                            n = null;
                                          for (c = this.containers.length - 1; c >= 0; c--)
                                            if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                                              if (this._intersectsWith(this.containers[c].containerCache)) {
                                                if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
                                                m = this.containers[c], n = c
                                              } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
                                          if (m)
                                            if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);
                                            else {
                                              for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "pageX" : "pageY", d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), e > Math.abs(b[l] - i) && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down"));
                                              if (!f && !this.options.dropOnEmpty) return;
                                              if (this.currentContainer === this.containers[n]) return void(this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
                                              f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1
                                            }
                                        },
                                        _createHelper: function(b) {
                                          var c = this.options,
                                            d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
                                          return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                                            width: this.currentItem[0].style.width,
                                            height: this.currentItem[0].style.height,
                                            position: this.currentItem.css("position"),
                                            top: this.currentItem.css("top"),
                                            left: this.currentItem.css("left")
                                          }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
                                        },
                                        _adjustOffsetFromHelper: function(b) {
                                          "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                                            left: +b[0],
                                            top: +b[1] || 0
                                          }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
                                        },
                                        _getParentOffset: function() {
                                          this.offsetParent = this.helper.offsetParent();
                                          var b = this.offsetParent.offset();
                                          return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                                            top: 0,
                                            left: 0
                                          }), {
                                            top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                                            left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                                          }
                                        },
                                        _getRelativeOffset: function() {
                                          if ("relative" === this.cssPosition) {
                                            var a = this.currentItem.position();
                                            return {
                                              top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                                              left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                                            }
                                          }
                                          return {
                                            top: 0,
                                            left: 0
                                          }
                                        },
                                        _cacheMargins: function() {
                                          this.margins = {
                                            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                                            top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                                          }
                                        },
                                        _cacheHelperProportions: function() {
                                          this.helperProportions = {
                                            width: this.helper.outerWidth(),
                                            height: this.helper.outerHeight()
                                          }
                                        },
                                        _setContainment: function() {
                                          var b, c, d, e = this.options;
                                          "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                                        },
                                        _convertPositionTo: function(b, c) {
                                          c || (c = this.position);
                                          var d = "absolute" === b ? 1 : -1,
                                            e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                                            f = /(html|body)/i.test(e[0].tagName);
                                          return {
                                            top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                                            left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                                          }
                                        },
                                        _generatePosition: function(b) {
                                          var c, d, e = this.options,
                                            f = b.pageX,
                                            g = b.pageY,
                                            h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                                            i = /(html|body)/i.test(h[0].tagName);
                                          return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                                            top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                                            left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
                                          }
                                        },
                                        _rearrange: function(a, b, c, d) {
                                          c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                                          var e = this.counter;
                                          this._delay(function() {
                                            e === this.counter && this.refreshPositions(!d)
                                          })
                                        },
                                        _clear: function(a, b) {
                                          function c(a, b, c) {
                                            return function(d) {
                                              c._trigger(a, d, b._uiHash(b))
                                            }
                                          }
                                          this.reverting = !1;
                                          var d, e = [];
                                          if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                                            for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                                            this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                                          } else this.currentItem.show();
                                          for (this.fromOutside && !b && e.push(function(a) {
                                              this._trigger("receive", a, this._uiHash(this.fromOutside))
                                            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
                                              this._trigger("update", a, this._uiHash())
                                            }), this !== this.currentContainer && (b || (e.push(function(a) {
                                              this._trigger("remove", a, this._uiHash())
                                            }), e.push(function(a) {
                                              return function(b) {
                                                a._trigger("receive", b, this._uiHash(this))
                                              }
                                            }.call(this, this.currentContainer)), e.push(function(a) {
                                              return function(b) {
                                                a._trigger("update", b, this._uiHash(this))
                                              }
                                            }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
                                          if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) {
                                            for (d = 0; e.length > d; d++) e[d].call(this, a);
                                            this._trigger("stop", a, this._uiHash())
                                          }
                                          return this.fromOutside = !1, !this.cancelHelperRemoval
                                        },
                                        _trigger: function() {
                                          !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                                        },
                                        _uiHash: function(b) {
                                          var c = b || this;
                                          return {
                                            helper: c.helper,
                                            placeholder: c.placeholder || a([]),
                                            position: c.position,
                                            originalPosition: c.originalPosition,
                                            offset: c.positionAbs,
                                            item: c.currentItem,
                                            sender: b ? b.element : null
                                          }
                                        }
                                        }), a.widget("ui.spinner", {
                                        version: "1.12.1",
                                        defaultElement: "<input>",
                                        widgetEventPrefix: "spin",
                                        options: {
                                          classes: {
                                            "ui-spinner": "ui-corner-all",
                                            "ui-spinner-down": "ui-corner-br",
                                            "ui-spinner-up": "ui-corner-tr"
                                          },
                                          culture: null,
                                          icons: {
                                            down: "ui-icon-triangle-1-s",
                                            up: "ui-icon-triangle-1-n"
                                          },
                                          incremental: !0,
                                          max: null,
                                          min: null,
                                          numberFormat: null,
                                          page: 10,
                                          step: 1,
                                          change: null,
                                          spin: null,
                                          start: null,
                                          stop: null
                                        },
                                        _create: function() {
                                          this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                                            beforeunload: function() {
                                              this.element.removeAttr("autocomplete")
                                            }
                                          })
                                        },
                                        _getCreateOptions: function() {
                                          var b = this._super(),
                                            c = this.element;
                                          return a.each(["min", "max", "step"], function(a, d) {
                                            var e = c.attr(d);
                                            null != e && e.length && (b[d] = e)
                                          }), b
                                        },
                                        _events: {
                                          keydown: function(a) {
                                            this._start(a) && this._keydown(a) && a.preventDefault()
                                          },
                                          keyup: "_stop",
                                          focus: function() {
                                            this.previous = this.element.val()
                                          },
                                          blur: function(a) {
                                            return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", a)))
                                          },
                                          mousewheel: function(a, b) {
                                            if (b) {
                                              if (!this.spinning && !this._start(a)) return !1;
                                              this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                                                this.spinning && this._stop(a)
                                              }, 100), a.preventDefault()
                                            }
                                          },
                                          "mousedown .ui-spinner-button": function(b) {
                                            function c() {
                                              this.element[0] === a.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = d, this._delay(function() {
                                                this.previous = d
                                              }))
                                            }
                                            var d;
                                            d = this.element[0] === a.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                                              delete this.cancelBlur, c.call(this)
                                            }), !1 !== this._start(b) && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b)
                                          },
                                          "mouseup .ui-spinner-button": "_stop",
                                          "mouseenter .ui-spinner-button": function(b) {
                                            return a(b.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(b) && void this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) : void 0
                                          },
                                          "mouseleave .ui-spinner-button": "_stop"
                                        },
                                        _enhance: function() {
                                          this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
                                        },
                                        _draw: function() {
                                          this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                                            classes: {
                                              "ui-button": ""
                                            }
                                          }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                                            icon: this.options.icons.up,
                                            showLabel: !1
                                          }), this.buttons.last().button({
                                            icon: this.options.icons.down,
                                            showLabel: !1
                                          }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
                                        },
                                        _keydown: function(b) {
                                          var c = this.options,
                                            d = a.ui.keyCode;
                                          switch (b.keyCode) {
                                            case d.UP:
                                              return this._repeat(null, 1, b), !0;
                                            case d.DOWN:
                                              return this._repeat(null, -1, b), !0;
                                            case d.PAGE_UP:
                                              return this._repeat(null, c.page, b), !0;
                                            case d.PAGE_DOWN:
                                              return this._repeat(null, -c.page, b), !0
                                          }
                                          return !1
                                        },
                                        _start: function(a) {
                                          return !(!this.spinning && !1 === this._trigger("start", a)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
                                        },
                                        _repeat: function(a, b, c) {
                                          a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                                            this._repeat(40, b, c)
                                          }, a), this._spin(b * this.options.step, c)
                                        },
                                        _spin: function(a, b) {
                                          var c = this.value() || 0;
                                          this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", b, {
                                            value: c
                                          }) || (this._value(c), this.counter++)
                                        },
                                        _increment: function(b) {
                                          var c = this.options.incremental;
                                          return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1
                                        },
                                        _precision: function() {
                                          var a = this._precisionOf(this.options.step);
                                          return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
                                        },
                                        _precisionOf: function(a) {
                                          var b = "" + a,
                                            c = b.indexOf(".");
                                          return -1 === c ? 0 : b.length - c - 1
                                        },
                                        _adjustValue: function(a) {
                                          var b, c, d = this.options;
                                          return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && d.min > a ? d.min : a
                                        },
                                        _stop: function(a) {
                                          this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
                                        },
                                        _setOption: function(a, b) {
                                          var c, d, e;
                                          return "culture" === a || "numberFormat" === a ? (c = this._parse(this.element.val()), this.options[a] = b, void this.element.val(this._format(c))) : (("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), "icons" === a && (d = this.buttons.first().find(".ui-icon"), this._removeClass(d, null, this.options.icons.up), this._addClass(d, null, b.up), e = this.buttons.last().find(".ui-icon"), this._removeClass(e, null, this.options.icons.down), this._addClass(e, null, b.down)), void this._super(a, b))
                                        },
                                        _setOptionDisabled: function(a) {
                                          this._super(a), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!a), this.element.prop("disabled", !!a), this.buttons.button(a ? "disable" : "enable")
                                        },
                                        _setOptions: h(function(a) {
                                          this._super(a)
                                        }),
                                        _parse: function(a) {
                                          return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), "" === a || isNaN(a) ? null : a
                                        },
                                        _format: function(a) {
                                          return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
                                        },
                                        _refresh: function() {
                                          this.element.attr({
                                            "aria-valuemin": this.options.min,
                                            "aria-valuemax": this.options.max,
                                            "aria-valuenow": this._parse(this.element.val())
                                          })
                                        },
                                        isValid: function() {
                                          var a = this.value();
                                          return null !== a && a === this._adjustValue(a)
                                        },
                                        _value: function(a, b) {
                                          var c;
                                          "" !== a && null !== (c = this._parse(a)) && (b || (c = this._adjustValue(c)), a = this._format(c)), this.element.val(a), this._refresh()
                                        },
                                        _destroy: function() {
                                          this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                                        },
                                        stepUp: h(function(a) {
                                          this._stepUp(a)
                                        }),
                                        _stepUp: function(a) {
                                          this._start() && (this._spin((a || 1) * this.options.step), this._stop())
                                        },
                                        stepDown: h(function(a) {
                                          this._stepDown(a)
                                        }),
                                        _stepDown: function(a) {
                                          this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
                                        },
                                        pageUp: h(function(a) {
                                          this._stepUp((a || 1) * this.options.page)
                                        }),
                                        pageDown: h(function(a) {
                                          this._stepDown((a || 1) * this.options.page)
                                        }),
                                        value: function(a) {
                                          return arguments.length ? void h(this._value).call(this, a) : this._parse(this.element.val())
                                        },
                                        widget: function() {
                                          return this.uiSpinner
                                        }
                                        }), !1 !== a.uiBackCompat && a.widget("ui.spinner", a.ui.spinner, {
                                        _enhance: function() {
                                          this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
                                        },
                                        _uiSpinnerHtml: function() {
                                          return "<span>"
                                        },
                                        _buttonHtml: function() {
                                          return "<a></a><a></a>"
                                        }
                                        }), a.ui.spinner, a.widget("ui.tabs", {
                                        version: "1.12.1",
                                        delay: 300,
                                        options: {
                                          active: null,
                                          classes: {
                                            "ui-tabs": "ui-corner-all",
                                            "ui-tabs-nav": "ui-corner-all",
                                            "ui-tabs-panel": "ui-corner-bottom",
                                            "ui-tabs-tab": "ui-corner-top"
                                          },
                                          collapsible: !1,
                                          event: "click",
                                          heightStyle: "content",
                                          hide: null,
                                          show: null,
                                          activate: null,
                                          beforeActivate: null,
                                          beforeLoad: null,
                                          load: null
                                        },
                                        _isLocal: function() {
                                          var a = /#.*$/;
                                          return function(b) {
                                            var c, d;
                                            c = b.href.replace(a, ""), d = location.href.replace(a, "");
                                            try {
                                              c = decodeURIComponent(c)
                                            } catch (a) {}
                                            try {
                                              d = decodeURIComponent(d)
                                            } catch (a) {}
                                            return b.hash.length > 1 && c === d
                                          }
                                        }(),
                                        _create: function() {
                                          var b = this,
                                            c = this.options;
                                          this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, c.collapsible), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                                            return b.tabs.index(a)
                                          }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : a(), this._refresh(), this.active.length && this.load(c.active)
                                        },
                                        _initialActive: function() {
                                          var b = this.options.active,
                                            c = this.options.collapsible,
                                            d = location.hash.substring(1);
                                          return null === b && (d && this.tabs.each(function(c, e) {
                                            return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0
                                          }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = !!this.tabs.length && 0)), !1 !== b && -1 === (b = this.tabs.index(this.tabs.eq(b))) && (b = !c && 0), !c && !1 === b && this.anchors.length && (b = 0), b
                                        },
                                        _getCreateEventData: function() {
                                          return {
                                            tab: this.active,
                                            panel: this.active.length ? this._getPanelForTab(this.active) : a()
                                          }
                                        },
                                        _tabKeydown: function(b) {
                                          var c = a(a.ui.safeActiveElement(this.document[0])).closest("li"),
                                            d = this.tabs.index(c),
                                            e = !0;
                                          if (!this._handlePageNav(b)) {
                                            switch (b.keyCode) {
                                              case a.ui.keyCode.RIGHT:
                                              case a.ui.keyCode.DOWN:
                                                d++;
                                                break;
                                              case a.ui.keyCode.UP:
                                              case a.ui.keyCode.LEFT:
                                                e = !1, d--;
                                                break;
                                              case a.ui.keyCode.END:
                                                d = this.anchors.length - 1;
                                                break;
                                              case a.ui.keyCode.HOME:
                                                d = 0;
                                                break;
                                              case a.ui.keyCode.SPACE:
                                                return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
                                              case a.ui.keyCode.ENTER:
                                                return b.preventDefault(), clearTimeout(this.activating), void this._activate(d !== this.options.active && d);
                                              default:
                                                return
                                            }
                                            b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || b.metaKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                                              this.option("active", d)
                                            }, this.delay))
                                          }
                                        },
                                        _panelKeydown: function(b) {
                                          this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.trigger("focus"))
                                        },
                                        _handlePageNav: function(b) {
                                          return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                                        },
                                        _findNextTab: function(b, c) {
                                          for (var d = this.tabs.length - 1; - 1 !== a.inArray(function() {
                                              return b > d && (b = 0), 0 > b && (b = d), b
                                            }(), this.options.disabled);) b = c ? b + 1 : b - 1;
                                          return b
                                        },
                                        _focusNextTab: function(a, b) {
                                          return a = this._findNextTab(a, b), this.tabs.eq(a).trigger("focus"), a
                                        },
                                        _setOption: function(a, b) {
                                          return "active" === a ? void this._activate(b) : (this._super(a, b), "collapsible" === a && (this._toggleClass("ui-tabs-collapsible", null, b), b || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
                                        },
                                        _sanitizeSelector: function(a) {
                                          return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                                        },
                                        refresh: function() {
                                          var b = this.options,
                                            c = this.tablist.children(":has(a[href])");
                                          b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                                            return c.index(a)
                                          }), this._processTabs(), !1 !== b.active && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
                                        },
                                        _refresh: function() {
                                          this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                                            "aria-selected": "false",
                                            "aria-expanded": "false",
                                            tabIndex: -1
                                          }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                                            "aria-hidden": "true"
                                          }), this.active.length ? (this.active.attr({
                                            "aria-selected": "true",
                                            "aria-expanded": "true",
                                            tabIndex: 0
                                          }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                                            "aria-hidden": "false"
                                          })) : this.tabs.eq(0).attr("tabIndex", 0)
                                        },
                                        _processTabs: function() {
                                          var b = this,
                                            c = this.tabs,
                                            d = this.anchors,
                                            e = this.panels;
                                          this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(b) {
                                            a(this).is(".ui-state-disabled") && b.preventDefault()
                                          }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                                            a(this).closest("li").is(".ui-state-disabled") && this.blur()
                                          }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                                            role: "tab",
                                            tabIndex: -1
                                          }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                                            return a("a", this)[0]
                                          }).attr({
                                            role: "presentation",
                                            tabIndex: -1
                                          }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = a(), this.anchors.each(function(c, d) {
                                            var e, f, g, h = a(d).uniqueId().attr("id"),
                                              i = a(d).closest("li"),
                                              j = i.attr("aria-controls");
                                            b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = i.attr("aria-controls") || a({}).uniqueId()[0].id, e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), f.attr("aria-live", "polite")), f.length && (b.panels = b.panels.add(f)), j && i.data("ui-tabs-aria-controls", j), i.attr({
                                              "aria-controls": g,
                                              "aria-labelledby": h
                                            }), f.attr("aria-labelledby", h)
                                          }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)))
                                        },
                                        _getList: function() {
                                          return this.tablist || this.element.find("ol, ul").eq(0)
                                        },
                                        _createPanel: function(b) {
                                          return a("<div>").attr("id", b).data("ui-tabs-destroy", !0)
                                        },
                                        _setOptionDisabled: function(b) {
                                          var c, d, e;
                                          for (a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1), e = 0; d = this.tabs[e]; e++) c = a(d), !0 === b || -1 !== a.inArray(e, b) ? (c.attr("aria-disabled", "true"), this._addClass(c, null, "ui-state-disabled")) : (c.removeAttr("aria-disabled"), this._removeClass(c, null, "ui-state-disabled"));
                                          this.options.disabled = b, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === b)
                                        },
                                        _setupEvents: function(b) {
                                          var c = {};
                                          b && a.each(b.split(" "), function(a, b) {
                                            c[b] = "_eventHandler"
                                          }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                                            click: function(a) {
                                              a.preventDefault()
                                            }
                                          }), this._on(this.anchors, c), this._on(this.tabs, {
                                            keydown: "_tabKeydown"
                                          }), this._on(this.panels, {
                                            keydown: "_panelKeydown"
                                          }), this._focusable(this.tabs), this._hoverable(this.tabs)
                                        },
                                        _setupHeightStyle: function(b) {
                                          var c, d = this.element.parent();
                                          "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                                            var b = a(this),
                                              d = b.css("position");
                                            "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                                          }), this.element.children().not(this.panels).each(function() {
                                            c -= a(this).outerHeight(!0)
                                          }), this.panels.each(function() {
                                            a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                                          }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                                            c = Math.max(c, a(this).height("").height())
                                          }).height(c))
                                        },
                                        _eventHandler: function(b) {
                                          var c = this.options,
                                            d = this.active,
                                            e = a(b.currentTarget),
                                            f = e.closest("li"),
                                            g = f[0] === d[0],
                                            h = g && c.collapsible,
                                            i = h ? a() : this._getPanelForTab(f),
                                            j = d.length ? this._getPanelForTab(d) : a(),
                                            k = {
                                              oldTab: d,
                                              oldPanel: j,
                                              newTab: h ? a() : f,
                                              newPanel: i
                                            };
                                          b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || !1 === this._trigger("beforeActivate", b, k) || (c.active = !h && this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
                                        },
                                        _toggle: function(b, c) {
                                          function d() {
                                            f.running = !1, f._trigger("activate", b, c)
                                          }

                                          function e() {
                                            f._addClass(c.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
                                          }
                                          var f = this,
                                            g = c.newPanel,
                                            h = c.oldPanel;
                                          this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                                            f._removeClass(c.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), e()
                                          }) : (this._removeClass(c.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), h.hide(), e()), h.attr("aria-hidden", "true"), c.oldTab.attr({
                                            "aria-selected": "false",
                                            "aria-expanded": "false"
                                          }), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                                            return 0 === a(this).attr("tabIndex")
                                          }).attr("tabIndex", -1), g.attr("aria-hidden", "false"), c.newTab.attr({
                                            "aria-selected": "true",
                                            "aria-expanded": "true",
                                            tabIndex: 0
                                          })
                                        },
                                        _activate: function(b) {
                                          var c, d = this._findActive(b);
                                          d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                                            target: c,
                                            currentTarget: c,
                                            preventDefault: a.noop
                                          }))
                                        },
                                        _findActive: function(b) {
                                          return !1 === b ? a() : this.tabs.eq(b)
                                        },
                                        _getIndex: function(b) {
                                          return "string" == typeof b && (b = this.anchors.index(this.anchors.filter("[href$='" + a.ui.escapeSelector(b) + "']"))), b
                                        },
                                        _destroy: function() {
                                          this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                                            a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                                          }), this.tabs.each(function() {
                                            var b = a(this),
                                              c = b.data("ui-tabs-aria-controls");
                                            c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
                                          }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                                        },
                                        enable: function(b) {
                                          var c = this.options.disabled;
                                          !1 !== c && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                                            return a !== b ? a : null
                                          }) : a.map(this.tabs, function(a, c) {
                                            return c !== b ? c : null
                                          })), this._setOptionDisabled(c))
                                        },
                                        disable: function(b) {
                                          var c = this.options.disabled;
                                          if (!0 !== c) {
                                            if (void 0 === b) c = !0;
                                            else {
                                              if (b = this._getIndex(b), -1 !== a.inArray(b, c)) return;
                                              c = a.isArray(c) ? a.merge([b], c).sort() : [b]
                                            }
                                            this._setOptionDisabled(c)
                                          }
                                        },
                                        load: function(b, c) {
                                          b = this._getIndex(b);
                                          var d = this,
                                            e = this.tabs.eq(b),
                                            f = e.find(".ui-tabs-anchor"),
                                            g = this._getPanelForTab(e),
                                            h = {
                                              tab: e,
                                              panel: g
                                            },
                                            i = function(a, b) {
                                              "abort" === b && d.panels.stop(!1, !0), d._removeClass(e, "ui-tabs-loading"), g.removeAttr("aria-busy"), a === d.xhr && delete d.xhr
                                            };
                                          this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(e, "ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.done(function(a, b, e) {
                                            setTimeout(function() {
                                              g.html(a), d._trigger("load", c, h), i(e, b)
                                            }, 1)
                                          }).fail(function(a, b) {
                                            setTimeout(function() {
                                              i(a, b)
                                            }, 1)
                                          })))
                                        },
                                        _ajaxSettings: function(b, c, d) {
                                          var e = this;
                                          return {
                                            url: b.attr("href").replace(/#.*$/, ""),
                                            beforeSend: function(b, f) {
                                              return e._trigger("beforeLoad", c, a.extend({
                                                jqXHR: b,
                                                ajaxSettings: f
                                              }, d))
                                            }
                                          }
                                        },
                                        _getPanelForTab: function(b) {
                                          var c = a(b).attr("aria-controls");
                                          return this.element.find(this._sanitizeSelector("#" + c))
                                        }
                                        }), !1 !== a.uiBackCompat && a.widget("ui.tabs", a.ui.tabs, {
                                        _processTabs: function() {
                                          this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
                                        }
                                        }), a.ui.tabs, a.widget("ui.tooltip", {
                                        version: "1.12.1",
                                        options: {
                                          classes: {
                                            "ui-tooltip": "ui-corner-all ui-widget-shadow"
                                          },
                                          content: function() {
                                            var b = a(this).attr("title") || "";
                                            return a("<a>").text(b).html()
                                          },
                                          hide: !0,
                                          items: "[title]:not([disabled])",
                                          position: {
                                            my: "left top+15",
                                            at: "left bottom",
                                            collision: "flipfit flip"
                                          },
                                          show: !0,
                                          track: !1,
                                          close: null,
                                          open: null
                                        },
                                        _addDescribedBy: function(b, c) {
                                          var d = (b.attr("aria-describedby") || "").split(/\s+/);
                                          d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
                                        },
                                        _removeDescribedBy: function(b) {
                                          var c = b.data("ui-tooltip-id"),
                                            d = (b.attr("aria-describedby") || "").split(/\s+/),
                                            e = a.inArray(c, d); - 1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
                                        },
                                        _create: function() {
                                          this._on({
                                            mouseover: "open",
                                            focusin: "open"
                                          }), this.tooltips = {}, this.parents = {}, this.liveRegion = a("<div>").attr({
                                            role: "log",
                                            "aria-live": "assertive",
                                            "aria-relevant": "additions"
                                          }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = a([])
                                        },
                                        _setOption: function(b, c) {
                                          var d = this;
                                          this._super(b, c), "content" === b && a.each(this.tooltips, function(a, b) {
                                            d._updateContent(b.element)
                                          })
                                        },
                                        _setOptionDisabled: function(a) {
                                          this[a ? "_disable" : "_enable"]()
                                        },
                                        _disable: function() {
                                          var b = this;
                                          a.each(this.tooltips, function(c, d) {
                                            var e = a.Event("blur");
                                            e.target = e.currentTarget = d.element[0], b.close(e, !0)
                                          }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                                            var b = a(this);
                                            return b.is("[title]") ? b.data("ui-tooltip-title", b.attr("title")).removeAttr("title") : void 0
                                          }))
                                        },
                                        _enable: function() {
                                          this.disabledTitles.each(function() {
                                            var b = a(this);
                                            b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
                                          }), this.disabledTitles = a([])
                                        },
                                        open: function(b) {
                                          var c = this,
                                            d = a(b ? b.target : this.element).closest(this.options.items);
                                          d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
                                            var b, d = a(this);
                                            d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                                              element: this,
                                              title: d.attr("title")
                                            }, d.attr("title", ""))
                                          }), this._registerCloseHandlers(b, d), this._updateContent(d, b))
                                        },
                                        _updateContent: function(a, b) {
                                          var c, d = this.options.content,
                                            e = this,
                                            f = b ? b.type : null;
                                          return "string" == typeof d || d.nodeType || d.jquery ? this._open(b, a, d) : void((c = d.call(a[0], function(c) {
                                            e._delay(function() {
                                              a.data("ui-tooltip-open") && (b && (b.type = f), this._open(b, a, c))
                                            })
                                          })) && this._open(b, a, c))
                                        },
                                        _open: function(b, c, d) {
                                          function e(a) {
                                            j.of = a, g.is(":hidden") || g.position(j)
                                          }
                                          var f, g, h, i, j = a.extend({}, this.options.position);
                                          if (d) {
                                            if (f = this._find(c)) return void f.tooltip.find(".ui-tooltip-content").html(d);
                                            c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title")), f = this._tooltip(c), g = f.tooltip, this._addDescribedBy(c, g.attr("id")), g.find(".ui-tooltip-content").html(d), this.liveRegion.children().hide(), i = a("<div>").html(g.find(".ui-tooltip-content").html()), i.removeAttr("name").find("[name]").removeAttr("name"), i.removeAttr("id").find("[id]").removeAttr("id"), i.appendTo(this.liveRegion), this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {
                                              mousemove: e
                                            }), e(b)) : g.position(a.extend({
                                              of: c
                                            }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.track && this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                                              g.is(":visible") && (e(j.of), clearInterval(h))
                                            }, a.fx.interval)), this._trigger("open", b, {
                                              tooltip: g
                                            })
                                          }
                                        },
                                        _registerCloseHandlers: function(b, c) {
                                          var d = {
                                            keyup: function(b) {
                                              if (b.keyCode === a.ui.keyCode.ESCAPE) {
                                                var d = a.Event(b);
                                                d.currentTarget = c[0], this.close(d, !0)
                                              }
                                            }
                                          };
                                          c[0] !== this.element[0] && (d.remove = function() {
                                            this._removeTooltip(this._find(c).tooltip)
                                          }), b && "mouseover" !== b.type || (d.mouseleave = "close"), b && "focusin" !== b.type || (d.focusout = "close"), this._on(!0, c, d)
                                        },
                                        close: function(b) {
                                          var c, d = this,
                                            e = a(b ? b.currentTarget : this.element),
                                            f = this._find(e);
                                          return f ? (c = f.tooltip, void(f.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function() {
                                            d._removeTooltip(a(this))
                                          }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
                                            a(c.element).attr("title", c.title), delete d.parents[b]
                                          }), f.closing = !0, this._trigger("close", b, {
                                            tooltip: c
                                          }), f.hiding || (f.closing = !1)))) : void e.removeData("ui-tooltip-open")
                                        },
                                        _tooltip: function(b) {
                                          var c = a("<div>").attr("role", "tooltip"),
                                            d = a("<div>").appendTo(c),
                                            e = c.uniqueId().attr("id");
                                          return this._addClass(d, "ui-tooltip-content"), this._addClass(c, "ui-tooltip", "ui-widget ui-widget-content"), c.appendTo(this._appendTo(b)), this.tooltips[e] = {
                                            element: b,
                                            tooltip: c
                                          }
                                        },
                                        _find: function(a) {
                                          var b = a.data("ui-tooltip-id");
                                          return b ? this.tooltips[b] : null
                                        },
                                        _removeTooltip: function(a) {
                                          a.remove(), delete this.tooltips[a.attr("id")]
                                        },
                                        _appendTo: function(a) {
                                          var b = a.closest(".ui-front, dialog");
                                          return b.length || (b = this.document[0].body), b
                                        },
                                        _destroy: function() {
                                          var b = this;
                                          a.each(this.tooltips, function(c, d) {
                                            var e = a.Event("blur"),
                                              f = d.element;
                                            e.target = e.currentTarget = f[0], b.close(e, !0), a("#" + c).remove(), f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), f.removeData("ui-tooltip-title"))
                                          }), this.liveRegion.remove()
                                        }
                                        }), !1 !== a.uiBackCompat && a.widget("ui.tooltip", a.ui.tooltip, {
                                        options: {
                                          tooltipClass: null
                                        },
                                        _tooltip: function() {
                                          var a = this._superApply(arguments);
                                          return this.options.tooltipClass && a.tooltip.addClass(this.options.tooltipClass), a
                                        }
                                        }), a.ui.tooltip
                                        }),
                                        function(a) {
                                          "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
                                        }(function(a) {
                                          function b(a) {
                                            return h.raw ? a : encodeURIComponent(a)
                                          }

                                          function c(a) {
                                            return h.raw ? a : decodeURIComponent(a)
                                          }

                                          function d(a) {
                                            return b(h.json ? JSON.stringify(a) : String(a))
                                          }

                                          function e(a) {
                                            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                                            try {
                                              return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
                                            } catch (a) {}
                                          }

                                          function f(b, c) {
                                            var d = h.raw ? b : e(b);
                                            return a.isFunction(c) ? c(d) : d
                                          }
                                          var g = /\+/g,
                                            h = a.cookie = function(e, g, i) {
                                              if (void 0 !== g && !a.isFunction(g)) {
                                                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                                                  var j = i.expires,
                                                    k = i.expires = new Date;
                                                  k.setTime(+k + 864e5 * j)
                                                }
                                                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                                              }
                                              for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
                                                var p = m[n].split("="),
                                                  q = c(p.shift()),
                                                  r = p.join("=");
                                                if (e && e === q) {
                                                  l = f(r, g);
                                                  break
                                                }
                                                e || void 0 === (r = f(r)) || (l[q] = r)
                                              }
                                              return l
                                            };
                                          h.defaults = {}, a.removeCookie = function(b, c) {
                                            return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, c, {
                                              expires: -1
                                            })), !a.cookie(b))
                                          }
                                        }),
                                        function(a, b) {
                                          "function" == typeof define && define.amd ? define(b) : "object" == typeof module && module.exports ? module.exports = b() : a.H5F = b()
                                        }(this, function() {
                                          var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = document,
                                            A = z.createElement("input"),
                                            B = /^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            C = /[a-z][\-\.+a-z]*:\/\//i,
                                            D = /^(input|select|textarea)$/i;
                                          return f = function(a, b) {
                                              var c = !a.nodeType || !1,
                                                d = {
                                                  validClass: "valid",
                                                  invalidClass: "error",
                                                  requiredClass: "required",
                                                  placeholderClass: "placeholder",
                                                  onSubmit: Function.prototype,
                                                  onInvalid: Function.prototype
                                                };
                                              if ("object" == typeof b)
                                                for (var f in d) void 0 === b[f] && (b[f] = d[f]);
                                              if (e = b || d, c)
                                                for (var h = 0, i = a.length; i > h; h++) g(a[h]);
                                              else g(a)
                                            }, g = function(c) {
                                              var d = c.elements,
                                                f = d.length,
                                                g = !!c.attributes.novalidate;
                                              if (r(c, "invalid", i, !0), r(c, "blur", i, !0), r(c, "input", i, !0), r(c, "keyup", i, !0), r(c, "focus", i, !0), r(c, "change", i, !0), r(c, "click", j, !0), r(c, "submit", function(d) {
                                                  return a = !0, b || g || c.checkValidity() ? void e.onSubmit.call(c, d) : void t(d)
                                                }, !1), !m())
                                                for (c.checkValidity = function() {
                                                    return k(c)
                                                  }; f--;) !!d[f].attributes.required, "fieldset" !== d[f].nodeName.toLowerCase() && h(d[f])
                                            }, h = function(a) {
                                              var b = a,
                                                c = q(b),
                                                e = {
                                                  type: b.getAttribute("type"),
                                                  pattern: b.getAttribute("pattern"),
                                                  placeholder: b.getAttribute("placeholder")
                                                },
                                                f = /^(email|url)$/i,
                                                g = /^(input|keyup)$/i,
                                                h = f.test(e.type) ? e.type : !!e.pattern && e.pattern,
                                                i = n(b, h),
                                                j = p(b, "step"),
                                                m = p(b, "min"),
                                                r = p(b, "max"),
                                                s = !("" === b.validationMessage || void 0 === b.validationMessage);
                                              b.checkValidity = function() {
                                                return k.call(this, b)
                                              }, b.setCustomValidity = function(a) {
                                                l.call(b, a)
                                              }, b.validity = {
                                                valueMissing: c,
                                                patternMismatch: i,
                                                rangeUnderflow: m,
                                                rangeOverflow: r,
                                                stepMismatch: j,
                                                customError: s,
                                                valid: !(c || i || j || m || r || s)
                                              }, e.placeholder && !g.test(d) && o(b)
                                            }, i = function(a) {
                                              var b = u(a) || a,
                                                c = /^(input|keyup|focusin|focus|change)$/i,
                                                f = /^(submit|image|button|reset)$/i,
                                                g = /^(checkbox|radio)$/i,
                                                j = !0;
                                              !D.test(b.nodeName) || f.test(b.type) || f.test(b.nodeName) || (d = a.type, m() || h(b), b.validity.valid && ("" !== b.value || g.test(b.type)) || b.value !== b.getAttribute("placeholder") && b.validity.valid ? (w(b, [e.invalidClass, e.requiredClass]), v(b, e.validClass)) : c.test(d) ? b.validity.valueMissing && w(b, [e.requiredClass, e.invalidClass, e.validClass]) : b.validity.valueMissing ? (w(b, [e.invalidClass, e.validClass]), v(b, e.requiredClass)) : b.validity.valid || (w(b, [e.validClass, e.requiredClass]), v(b, e.invalidClass)), "input" === d && j && (s(b.form, "keyup", i, !0), j = !1))
                                            }, k = function(b) {
                                              var c, d, f, g, h, j = !1;
                                              if ("form" === b.nodeName.toLowerCase()) {
                                                c = b.elements;
                                                for (var k = 0, l = c.length; l > k; k++) d = c[k], f = !!d.attributes.disabled, g = !!d.attributes.required, h = !!d.attributes.pattern, "fieldset" !== d.nodeName.toLowerCase() && !f && (g || h && g) && (i(d), d.validity.valid || j || (a && d.focus(), j = !0, e.onInvalid.call(b, d)));
                                                return !j
                                              }
                                              return i(b), b.validity.valid
                                            }, l = function(a) {
                                              this.validationMessage = a
                                            }, j = function(a) {
                                              var c = u(a);
                                              c.attributes.formnovalidate && "submit" === c.type && (b = !0)
                                            }, m = function() {
                                              return x(A, "validity") && x(A, "checkValidity")
                                            }, n = function(a, b) {
                                              if ("email" === b) return !B.test(a.value);
                                              if ("url" === b) return !C.test(a.value);
                                              if (b) {
                                                var d = a.getAttribute("placeholder"),
                                                  e = a.value;
                                                return c = RegExp("^(?:" + b + ")$"), e !== d && ("" !== e && !c.test(a.value))
                                              }
                                              return !1
                                            }, o = function(a) {
                                              var b = {
                                                  placeholder: a.getAttribute("placeholder")
                                                },
                                                c = /^(focus|focusin|submit)$/i,
                                                f = /^(input|textarea)$/i,
                                                g = /^password$/i;
                                              !!("placeholder" in A) || !f.test(a.nodeName) || g.test(a.type) || ("" !== a.value || c.test(d) ? a.value === b.placeholder && c.test(d) && (a.value = "", w(a, e.placeholderClass)) : (a.value = b.placeholder, r(a.form, "submit", function() {
                                                d = "submit", o(a)
                                              }, !0), v(a, e.placeholderClass)))
                                            }, p = function(a, b) {
                                              var c = parseInt(a.getAttribute("min"), 10) || 0,
                                                d = parseInt(a.getAttribute("max"), 10) || !1,
                                                e = parseInt(a.getAttribute("step"), 10) || 1,
                                                f = parseInt(a.value, 10),
                                                g = (f - c) % e;
                                              return q(a) || isNaN(f) ? "number" === a.getAttribute("type") : "step" === b ? !!a.getAttribute("step") && 0 !== g : "min" === b ? !!a.getAttribute("min") && c > f : "max" === b ? !!a.getAttribute("max") && f > d : void 0
                                            },
                                            function(a) {
                                              return !!a.attributes.required && q(a)
                                            }, q = function(a) {
                                              var b = a.getAttribute("placeholder"),
                                                c = /^(checkbox|radio)$/i;
                                              return !(!a.attributes.required || "" !== a.value && a.value !== b && (!c.test(a.type) || y(a)))
                                            }, r = function(a, b, c, d) {
                                              x(window, "addEventListener") ? a.addEventListener(b, c, d) : x(window, "attachEvent") && void 0 !== window.event && ("blur" === b ? b = "focusout" : "focus" === b && (b = "focusin"), a.attachEvent("on" + b, c))
                                            }, s = function(a, b, c, d) {
                                              x(window, "removeEventListener") ? a.removeEventListener(b, c, d) : x(window, "detachEvent") && void 0 !== window.event && a.detachEvent("on" + b, c)
                                            }, t = function(a) {
                                              a = a || window.event, a.stopPropagation && a.preventDefault ? (a.stopPropagation(), a.preventDefault()) : (a.cancelBubble = !0, a.returnValue = !1)
                                            }, u = function(a) {
                                              return a = a || window.event, a.target || a.srcElement
                                            }, v = function(a, b) {
                                              var c;
                                              a.className ? (c = RegExp("(^|\\s)" + b + "(\\s|$)"), c.test(a.className) || (a.className += " " + b)) : a.className = b
                                            }, w = function(a, b) {
                                              var c, d, e = "object" == typeof b ? b.length : 1,
                                                f = e;
                                              if (a.className)
                                                if (a.className === b) a.className = "";
                                                else
                                                  for (; e--;) c = RegExp("(^|\\s)" + (f > 1 ? b[e] : b) + "(\\s|$)"), (d = a.className.match(c)) && 3 === d.length && (a.className = a.className.replace(c, d[1] && d[2] ? " " : ""))
                                            }, x = function(a, b) {
                                              var c = typeof a[b];
                                              return !!(RegExp("^function|object$", "i").test(c) && a[b] || "unknown" === c)
                                            }, y = function(a) {
                                              for (var b = document.getElementsByName(a.name), c = 0; b.length > c; c++)
                                                if (b[c].checked) return !0;
                                              return !1
                                            }, {
                                              setup: f
                                            }
                                        }),
                                        function(a) {
                                          "use strict";
                                          "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
                                        }(function(a) {
                                        "use strict";
                                        var b = window.Slick || {};
                                        (b = function() {
                                          var b = 0;
                                          return function(c, d) {
                                            var e, f = this;
                                            f.defaults = {
                                              accessibility: !0,
                                              adaptiveHeight: !1,
                                              appendArrows: a(c),
                                              appendDots: a(c),
                                              arrows: !0,
                                              asNavFor: null,
                                              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                              autoplay: !1,
                                              autoplaySpeed: 3e3,
                                              centerMode: !1,
                                              centerPadding: "50px",
                                              cssEase: "ease",
                                              customPaging: function(b, c) {
                                                return a('<button type="button" />').text(c + 1)
                                              },
                                              dots: !1,
                                              dotsClass: "slick-dots",
                                              draggable: !0,
                                              easing: "linear",
                                              edgeFriction: .35,
                                              fade: !1,
                                              focusOnSelect: !1,
                                              focusOnChange: !1,
                                              infinite: !0,
                                              initialSlide: 0,
                                              lazyLoad: "ondemand",
                                              mobileFirst: !1,
                                              pauseOnHover: !0,
                                              pauseOnFocus: !0,
                                              pauseOnDotsHover: !1,
                                              respondTo: "window",
                                              responsive: null,
                                              rows: 1,
                                              rtl: !1,
                                              slide: "",
                                              slidesPerRow: 1,
                                              slidesToShow: 1,
                                              slidesToScroll: 1,
                                              speed: 500,
                                              swipe: !0,
                                              swipeToSlide: !1,
                                              touchMove: !0,
                                              touchThreshold: 5,
                                              useCSS: !0,
                                              useTransform: !0,
                                              variableWidth: !1,
                                              vertical: !1,
                                              verticalSwiping: !1,
                                              waitForAnimate: !0,
                                              zIndex: 1e3
                                            }, f.initials = {
                                              animating: !1,
                                              dragging: !1,
                                              autoPlayTimer: null,
                                              currentDirection: 0,
                                              currentLeft: null,
                                              currentSlide: 0,
                                              direction: 1,
                                              $dots: null,
                                              listWidth: null,
                                              listHeight: null,
                                              loadIndex: 0,
                                              $nextArrow: null,
                                              $prevArrow: null,
                                              scrolling: !1,
                                              slideCount: null,
                                              slideWidth: null,
                                              $slideTrack: null,
                                              $slides: null,
                                              sliding: !1,
                                              slideOffset: 0,
                                              swipeLeft: null,
                                              swiping: !1,
                                              $list: null,
                                              touchObject: {},
                                              transformsEnabled: !1,
                                              unslicked: !1
                                            }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(c), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(c).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, void 0 !== document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = b++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0)
                                          }
                                        }()).prototype.activateADA = function() {
                                          this.$slideTrack.find(".slick-active").attr({
                                            "aria-hidden": "false"
                                          }).find("a, input, button, select").attr({
                                            tabindex: "0"
                                          })
                                        }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
                                          var e = this;
                                          if ("boolean" == typeof c) d = c, c = null;
                                          else if (c < 0 || c >= e.slideCount) return !1;
                                          e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : !0 === d ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                                            a(c).attr("data-slick-index", b)
                                          }), e.$slidesCache = e.$slides, e.reinit()
                                        }, b.prototype.animateHeight = function() {
                                          var a = this;
                                          if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
                                            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                                            a.$list.animate({
                                              height: b
                                            }, a.options.speed)
                                          }
                                        }, b.prototype.animateSlide = function(b, c) {
                                          var d = {},
                                            e = this;
                                          e.animateHeight(), !0 === e.options.rtl && !1 === e.options.vertical && (b = -b), !1 === e.transformsEnabled ? !1 === e.options.vertical ? e.$slideTrack.animate({
                                            left: b
                                          }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                                            top: b
                                          }, e.options.speed, e.options.easing, c) : !1 === e.cssTransitions ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft), a({
                                            animStart: e.currentLeft
                                          }).animate({
                                            animStart: b
                                          }, {
                                            duration: e.options.speed,
                                            easing: e.options.easing,
                                            step: function(a) {
                                              a = Math.ceil(a), !1 === e.options.vertical ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                                            },
                                            complete: function() {
                                              c && c.call()
                                            }
                                          })) : (e.applyTransition(), b = Math.ceil(b), !1 === e.options.vertical ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                                            e.disableTransition(), c.call()
                                          }, e.options.speed))
                                        }, b.prototype.getNavTarget = function() {
                                          var b = this,
                                            c = b.options.asNavFor;
                                          return c && null !== c && (c = a(c).not(b.$slider)), c
                                        }, b.prototype.asNavFor = function(b) {
                                          var c = this.getNavTarget();
                                          null !== c && "object" == typeof c && c.each(function() {
                                            var c = a(this).slick("getSlick");
                                            c.unslicked || c.slideHandler(b, !0)
                                          })
                                        }, b.prototype.applyTransition = function(a) {
                                          var b = this,
                                            c = {};
                                          !1 === b.options.fade ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
                                        }, b.prototype.autoPlay = function() {
                                          var a = this;
                                          a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
                                        }, b.prototype.autoPlayClear = function() {
                                          var a = this;
                                          a.autoPlayTimer && clearInterval(a.autoPlayTimer)
                                        }, b.prototype.autoPlayIterator = function() {
                                          var a = this,
                                            b = a.currentSlide + a.options.slidesToScroll;
                                          a.paused || a.interrupted || a.focussed || (!1 === a.options.infinite && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 == 0 && (a.direction = 1))), a.slideHandler(b))
                                        }, b.prototype.buildArrows = function() {
                                          var b = this;
                                          !0 === b.options.arrows && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), !0 !== b.options.infinite && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                                            "aria-disabled": "true",
                                            tabindex: "-1"
                                          }))
                                        }, b.prototype.buildDots = function() {
                                          var b, c, d = this;
                                          if (!0 === d.options.dots) {
                                            for (d.$slider.addClass("slick-dotted"),
                                              c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
                                            d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active")
                                          }
                                        }, b.prototype.buildOut = function() {
                                          var b = this;
                                          b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                                            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
                                          }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), !0 !== b.options.centerMode && !0 !== b.options.swipeToSlide || (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), !0 === b.options.draggable && b.$list.addClass("draggable")
                                        }, b.prototype.buildRows = function() {
                                          var a, b, c, d, e, f, g, h = this;
                                          if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
                                            for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; a < e; a++) {
                                              var i = document.createElement("div");
                                              for (b = 0; b < h.options.rows; b++) {
                                                var j = document.createElement("div");
                                                for (c = 0; c < h.options.slidesPerRow; c++) {
                                                  var k = a * g + (b * h.options.slidesPerRow + c);
                                                  f.get(k) && j.appendChild(f.get(k))
                                                }
                                                i.appendChild(j)
                                              }
                                              d.appendChild(i)
                                            }
                                            h.$slider.empty().append(d), h.$slider.children().children().children().css({
                                              width: 100 / h.options.slidesPerRow + "%",
                                              display: "inline-block"
                                            })
                                          }
                                        }, b.prototype.checkResponsive = function(b, c) {
                                          var d, e, f, g = this,
                                            h = !1,
                                            i = g.$slider.width(),
                                            j = window.innerWidth || a(window).width();
                                          if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
                                            e = null;
                                            for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (!1 === g.originalSettings.mobileFirst ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                                            null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, !0 === b && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || !1 === h || g.$slider.trigger("breakpoint", [g, h])
                                          }
                                        }, b.prototype.changeSlide = function(b, c) {
                                          var d, e, f, g = this,
                                            h = a(b.currentTarget);
                                          switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll != 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                                            case "previous":
                                              e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                                              break;
                                            case "next":
                                              e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                                              break;
                                            case "index":
                                              var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                                              g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                                              break;
                                            default:
                                              return
                                          }
                                        }, b.prototype.checkNavigable = function(a) {
                                          var b, c;
                                          if (b = this.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
                                          else
                                            for (var d in b) {
                                              if (a < b[d]) {
                                                a = c;
                                                break
                                              }
                                              c = b[d]
                                            }
                                          return a
                                        }, b.prototype.cleanUpEvents = function() {
                                          var b = this;
                                          b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), !0 === b.options.accessibility && b.$dots.off("keydown.slick", b.keyHandler)), b.$slider.off("focus.slick blur.slick"), !0 === b.options.arrows && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide), !0 === b.options.accessibility && (b.$prevArrow && b.$prevArrow.off("keydown.slick", b.keyHandler), b.$nextArrow && b.$nextArrow.off("keydown.slick", b.keyHandler))), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), !0 === b.options.accessibility && b.$list.off("keydown.slick", b.keyHandler), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition)
                                        }, b.prototype.cleanUpSlideEvents = function() {
                                          var b = this;
                                          b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
                                        }, b.prototype.cleanUpRows = function() {
                                          var a, b = this;
                                          b.options.rows > 1 && ((a = b.$slides.children().children()).removeAttr("style"), b.$slider.empty().append(a))
                                        }, b.prototype.clickHandler = function(a) {
                                          !1 === this.shouldClick && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
                                        }, b.prototype.destroy = function(b) {
                                          var c = this;
                                          c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                                            a(this).attr("style", a(this).data("originalStyling"))
                                          }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
                                        }, b.prototype.disableTransition = function(a) {
                                          var b = this,
                                            c = {};
                                          c[b.transitionType] = "", !1 === b.options.fade ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
                                        }, b.prototype.fadeSlide = function(a, b) {
                                          var c = this;
                                          !1 === c.cssTransitions ? (c.$slides.eq(a).css({
                                            zIndex: c.options.zIndex
                                          }), c.$slides.eq(a).animate({
                                            opacity: 1
                                          }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                                            opacity: 1,
                                            zIndex: c.options.zIndex
                                          }), b && setTimeout(function() {
                                            c.disableTransition(a), b.call()
                                          }, c.options.speed))
                                        }, b.prototype.fadeSlideOut = function(a) {
                                          var b = this;
                                          !1 === b.cssTransitions ? b.$slides.eq(a).animate({
                                            opacity: 0,
                                            zIndex: b.options.zIndex - 2
                                          }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                                            opacity: 0,
                                            zIndex: b.options.zIndex - 2
                                          }))
                                        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
                                          var b = this;
                                          null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
                                        }, b.prototype.focusHandler = function() {
                                          var b = this;
                                          b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(c) {
                                            c.stopImmediatePropagation();
                                            var d = a(this);
                                            setTimeout(function() {
                                              b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
                                            }, 0)
                                          })
                                        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
                                          return this.currentSlide
                                        }, b.prototype.getDotCount = function() {
                                          var a = this,
                                            b = 0,
                                            c = 0,
                                            d = 0;
                                          if (!0 === a.options.infinite)
                                            if (a.slideCount <= a.options.slidesToShow) ++d;
                                            else
                                              for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
                                          else if (!0 === a.options.centerMode) d = a.slideCount;
                                          else if (a.options.asNavFor)
                                            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
                                          else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
                                          return d - 1
                                        }, b.prototype.getLeft = function(a) {
                                          var b, c, d, e, f = this,
                                            g = 0;
                                          return f.slideOffset = 0, c = f.$slides.first().outerHeight(!0), !0 === f.options.infinite ? (f.slideCount > f.options.slidesToShow && (f.slideOffset = f.slideWidth * f.options.slidesToShow * -1, e = -1, !0 === f.options.vertical && !0 === f.options.centerMode && (2 === f.options.slidesToShow ? e = -1.5 : 1 === f.options.slidesToShow && (e = -2)), g = c * f.options.slidesToShow * e), f.slideCount % f.options.slidesToScroll != 0 && a + f.options.slidesToScroll > f.slideCount && f.slideCount > f.options.slidesToShow && (a > f.slideCount ? (f.slideOffset = (f.options.slidesToShow - (a - f.slideCount)) * f.slideWidth * -1, g = (f.options.slidesToShow - (a - f.slideCount)) * c * -1) : (f.slideOffset = f.slideCount % f.options.slidesToScroll * f.slideWidth * -1, g = f.slideCount % f.options.slidesToScroll * c * -1))) : a + f.options.slidesToShow > f.slideCount && (f.slideOffset = (a + f.options.slidesToShow - f.slideCount) * f.slideWidth, g = (a + f.options.slidesToShow - f.slideCount) * c), f.slideCount <= f.options.slidesToShow && (f.slideOffset = 0, g = 0), !0 === f.options.centerMode && f.slideCount <= f.options.slidesToShow ? f.slideOffset = f.slideWidth * Math.floor(f.options.slidesToShow) / 2 - f.slideWidth * f.slideCount / 2 : !0 === f.options.centerMode && !0 === f.options.infinite ? f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2) - f.slideWidth : !0 === f.options.centerMode && (f.slideOffset = 0, f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2)), b = !1 === f.options.vertical ? a * f.slideWidth * -1 + f.slideOffset : a * c * -1 + g, !0 === f.options.variableWidth && (d = f.slideCount <= f.options.slidesToShow || !1 === f.options.infinite ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow), b = !0 === f.options.rtl ? d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, !0 === f.options.centerMode && (d = f.slideCount <= f.options.slidesToShow || !1 === f.options.infinite ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow + 1), b = !0 === f.options.rtl ? d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (f.$list.width() - d.outerWidth()) / 2)), b
                                        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
                                          return this.options[a]
                                        }, b.prototype.getNavigableIndexes = function() {
                                          var a, b = this,
                                            c = 0,
                                            d = 0,
                                            e = [];
                                          for (!1 === b.options.infinite ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); c < a;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
                                          return e
                                        }, b.prototype.getSlick = function() {
                                          return this
                                        }, b.prototype.getSlideCount = function() {
                                          var b, c, d = this;
                                          return c = !0 === d.options.centerMode ? d.slideWidth * Math.floor(d.options.slidesToShow / 2) : 0, !0 === d.options.swipeToSlide ? (d.$slideTrack.find(".slick-slide").each(function(e, f) {
                                            if (f.offsetLeft - c + a(f).outerWidth() / 2 > -1 * d.swipeLeft) return b = f, !1
                                          }), Math.abs(a(b).attr("data-slick-index") - d.currentSlide) || 1) : d.options.slidesToScroll
                                        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
                                          this.changeSlide({
                                            data: {
                                              message: "index",
                                              index: parseInt(a)
                                            }
                                          }, b)
                                        }, b.prototype.init = function(b) {
                                          var c = this;
                                          a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), !0 === c.options.accessibility && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
                                        }, b.prototype.initADA = function() {
                                          var b = this,
                                            c = Math.ceil(b.slideCount / b.options.slidesToShow),
                                            d = b.getNavigableIndexes().filter(function(a) {
                                              return a >= 0 && a < b.slideCount
                                            });
                                          b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                                            "aria-hidden": "true",
                                            tabindex: "-1"
                                          }).find("a, input, button, select").attr({
                                            tabindex: "-1"
                                          }), null !== b.$dots && (b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
                                            var e = d.indexOf(c);
                                            a(this).attr({
                                              role: "tabpanel",
                                              id: "slick-slide" + b.instanceUid + c,
                                              tabindex: -1
                                            }), -1 !== e && a(this).attr({
                                              "aria-describedby": "slick-slide-control" + b.instanceUid + e
                                            })
                                          }), b.$dots.attr("role", "tablist").find("li").each(function(e) {
                                            var f = d[e];
                                            a(this).attr({
                                              role: "presentation"
                                            }), a(this).find("button").first().attr({
                                              role: "tab",
                                              id: "slick-slide-control" + b.instanceUid + e,
                                              "aria-controls": "slick-slide" + b.instanceUid + f,
                                              "aria-label": e + 1 + " of " + c,
                                              "aria-selected": null,
                                              tabindex: "-1"
                                            })
                                          }).eq(b.currentSlide).find("button").attr({
                                            "aria-selected": "true",
                                            tabindex: "0"
                                          }).end());
                                          for (var e = b.currentSlide, f = e + b.options.slidesToShow; e < f; e++) b.$slides.eq(e).attr("tabindex", 0);
                                          b.activateADA()
                                        }, b.prototype.initArrowEvents = function() {
                                          var a = this;
                                          !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
                                            message: "previous"
                                          }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
                                            message: "next"
                                          }, a.changeSlide), !0 === a.options.accessibility && (a.$prevArrow.on("keydown.slick", a.keyHandler), a.$nextArrow.on("keydown.slick", a.keyHandler)))
                                        }, b.prototype.initDotEvents = function() {
                                          var b = this;
                                          !0 === b.options.dots && (a("li", b.$dots).on("click.slick", {
                                            message: "index"
                                          }, b.changeSlide), !0 === b.options.accessibility && b.$dots.on("keydown.slick", b.keyHandler)), !0 === b.options.dots && !0 === b.options.pauseOnDotsHover && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
                                        }, b.prototype.initSlideEvents = function() {
                                          var b = this;
                                          b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
                                        }, b.prototype.initializeEvents = function() {
                                          var b = this;
                                          b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                                            action: "start"
                                          }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                                            action: "move"
                                          }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                                            action: "end"
                                          }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                                            action: "end"
                                          }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), !0 === b.options.accessibility && b.$list.on("keydown.slick", b.keyHandler), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(b.setPosition)
                                        }, b.prototype.initUI = function() {
                                          var a = this;
                                          !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.show()
                                        }, b.prototype.keyHandler = function(a) {
                                          var b = this;
                                          a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && !0 === b.options.accessibility ? b.changeSlide({
                                            data: {
                                              message: !0 === b.options.rtl ? "next" : "previous"
                                            }
                                          }) : 39 === a.keyCode && !0 === b.options.accessibility && b.changeSlide({
                                            data: {
                                              message: !0 === b.options.rtl ? "previous" : "next"
                                            }
                                          }))
                                        }, b.prototype.lazyLoad = function() {
                                          function b(b) {
                                            a("img[data-lazy]", b).each(function() {
                                              var b = a(this),
                                                c = a(this).attr("data-lazy"),
                                                d = a(this).attr("data-srcset"),
                                                e = a(this).attr("data-sizes") || f.$slider.attr("data-sizes"),
                                                g = document.createElement("img");
                                              g.onload = function() {
                                                b.animate({
                                                  opacity: 0
                                                }, 100, function() {
                                                  d && (b.attr("srcset", d), e && b.attr("sizes", e)), b.attr("src", c).animate({
                                                    opacity: 1
                                                  }, 200, function() {
                                                    b.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                                  }), f.$slider.trigger("lazyLoaded", [f, b, c])
                                                })
                                              }, g.onerror = function() {
                                                b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), f.$slider.trigger("lazyLoadError", [f, b, c])
                                              }, g.src = c
                                            })
                                          }
                                          var c, d, e, f = this;
                                          if (!0 === f.options.centerMode ? !0 === f.options.infinite ? e = (d = f.currentSlide + (f.options.slidesToShow / 2 + 1)) + f.options.slidesToShow + 2 : (d = Math.max(0, f.currentSlide - (f.options.slidesToShow / 2 + 1)), e = f.options.slidesToShow / 2 + 1 + 2 + f.currentSlide) : (d = f.options.infinite ? f.options.slidesToShow + f.currentSlide : f.currentSlide, e = Math.ceil(d + f.options.slidesToShow), !0 === f.options.fade && (d > 0 && d--, e <= f.slideCount && e++)), c = f.$slider.find(".slick-slide").slice(d, e), "anticipated" === f.options.lazyLoad)
                                            for (var g = d - 1, h = e, i = f.$slider.find(".slick-slide"), j = 0; j < f.options.slidesToScroll; j++) g < 0 && (g = f.slideCount - 1), c = (c = c.add(i.eq(g))).add(i.eq(h)), g--, h++;
                                          b(c), f.slideCount <= f.options.slidesToShow ? b(f.$slider.find(".slick-slide")) : f.currentSlide >= f.slideCount - f.options.slidesToShow ? b(f.$slider.find(".slick-cloned").slice(0, f.options.slidesToShow)) : 0 === f.currentSlide && b(f.$slider.find(".slick-cloned").slice(-1 * f.options.slidesToShow))
                                        }, b.prototype.loadSlider = function() {
                                          var a = this;
                                          a.setPosition(), a.$slideTrack.css({
                                            opacity: 1
                                          }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
                                        }, b.prototype.next = b.prototype.slickNext = function() {
                                          this.changeSlide({
                                            data: {
                                              message: "next"
                                            }
                                          })
                                        }, b.prototype.orientationChange = function() {
                                          var a = this;
                                          a.checkResponsive(), a.setPosition()
                                        }, b.prototype.pause = b.prototype.slickPause = function() {
                                          var a = this;
                                          a.autoPlayClear(), a.paused = !0
                                        }, b.prototype.play = b.prototype.slickPlay = function() {
                                          var a = this;
                                          a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
                                        }, b.prototype.postSlide = function(b) {
                                          var c = this;
                                          c.unslicked || (c.$slider.trigger("afterChange", [c, b]), c.animating = !1, c.slideCount > c.options.slidesToShow && c.setPosition(), c.swipeLeft = null, c.options.autoplay && c.autoPlay(), !0 === c.options.accessibility && (c.initADA(), c.options.focusOnChange && a(c.$slides.get(c.currentSlide)).attr("tabindex", 0).focus()))
                                        }, b.prototype.prev = b.prototype.slickPrev = function() {
                                          this.changeSlide({
                                            data: {
                                              message: "previous"
                                            }
                                          })
                                        }, b.prototype.preventDefault = function(a) {
                                          a.preventDefault()
                                        }, b.prototype.progressiveLazyLoad = function(b) {
                                          b = b || 1;
                                          var c, d, e, f, g, h = this,
                                            i = a("img[data-lazy]", h.$slider);
                                          i.length ? (c = i.first(), d = c.attr("data-lazy"), e = c.attr("data-srcset"), f = c.attr("data-sizes") || h.$slider.attr("data-sizes"), (g = document.createElement("img")).onload = function() {
                                            e && (c.attr("srcset", e), f && c.attr("sizes", f)), c.attr("src", d).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === h.options.adaptiveHeight && h.setPosition(), h.$slider.trigger("lazyLoaded", [h, c, d]), h.progressiveLazyLoad()
                                          }, g.onerror = function() {
                                            b < 3 ? setTimeout(function() {
                                              h.progressiveLazyLoad(b + 1)
                                            }, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), h.$slider.trigger("lazyLoadError", [h, c, d]), h.progressiveLazyLoad())
                                          }, g.src = d) : h.$slider.trigger("allImagesLoaded", [h])
                                        }, b.prototype.refresh = function(b) {
                                          var c, d, e = this;
                                          d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
                                            currentSlide: c
                                          }), e.init(), b || e.changeSlide({
                                            data: {
                                              message: "index",
                                              index: c
                                            }
                                          }, !1)
                                        }, b.prototype.registerBreakpoints = function() {
                                          var b, c, d, e = this,
                                            f = e.options.responsive || null;
                                          if ("array" === a.type(f) && f.length) {
                                            e.respondTo = e.options.respondTo || "window";
                                            for (b in f)
                                              if (d = e.breakpoints.length - 1, f.hasOwnProperty(b)) {
                                                for (c = f[b].breakpoint; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                                                e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                                              } e.breakpoints.sort(function(a, b) {
                                              return e.options.mobileFirst ? a - b : b - a
                                            })
                                          }
                                        }, b.prototype.reinit = function() {
                                          var b = this;
                                          b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), !0 === b.options.focusOnSelect && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
                                        }, b.prototype.resize = function() {
                                          var b = this;
                                          a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                                            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
                                          }, 50))
                                        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
                                          var d = this;
                                          if (a = "boolean" == typeof a ? !0 === (b = a) ? 0 : d.slideCount - 1 : !0 === b ? --a : a, d.slideCount < 1 || a < 0 || a > d.slideCount - 1) return !1;
                                          d.unload(), !0 === c ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit()
                                        }, b.prototype.setCSS = function(a) {
                                          var b, c, d = this,
                                            e = {};
                                          !0 === d.options.rtl && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, !1 === d.transformsEnabled ? d.$slideTrack.css(e) : (e = {}, !1 === d.cssTransitions ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
                                        }, b.prototype.setDimensions = function() {
                                          var a = this;
                                          !1 === a.options.vertical ? !0 === a.options.centerMode && a.$list.css({
                                            padding: "0px " + a.options.centerPadding
                                          }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), !0 === a.options.centerMode && a.$list.css({
                                            padding: a.options.centerPadding + " 0px"
                                          })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), !1 === a.options.vertical && !1 === a.options.variableWidth ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : !0 === a.options.variableWidth ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
                                          var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
                                          !1 === a.options.variableWidth && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
                                        }, b.prototype.setFade = function() {
                                          var b, c = this;
                                          c.$slides.each(function(d, e) {
                                            b = c.slideWidth * d * -1, !0 === c.options.rtl ? a(e).css({
                                              position: "relative",
                                              right: b,
                                              top: 0,
                                              zIndex: c.options.zIndex - 2,
                                              opacity: 0
                                            }) : a(e).css({
                                              position: "relative",
                                              left: b,
                                              top: 0,
                                              zIndex: c.options.zIndex - 2,
                                              opacity: 0
                                            })
                                          }), c.$slides.eq(c.currentSlide).css({
                                            zIndex: c.options.zIndex - 1,
                                            opacity: 1
                                          })
                                        }, b.prototype.setHeight = function() {
                                          var a = this;
                                          if (1 === a.options.slidesToShow && !0 === a.options.adaptiveHeight && !1 === a.options.vertical) {
                                            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                                            a.$list.css("height", b)
                                          }
                                        }, b.prototype.setOption = b.prototype.slickSetOption = function() {
                                          var b, c, d, e, f, g = this,
                                            h = !1;
                                          if ("object" === a.type(arguments[0]) ? (d = arguments[0], h = arguments[1], f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0], e = arguments[1], h = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : void 0 !== arguments[1] && (f = "single")), "single" === f) g.options[d] = e;
                                          else if ("multiple" === f) a.each(d, function(a, b) {
                                            g.options[a] = b
                                          });
                                          else if ("responsive" === f)
                                            for (c in e)
                                              if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
                                              else {
                                                for (b = g.options.responsive.length - 1; b >= 0;) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
                                                g.options.responsive.push(e[c])
                                              } h && (g.unload(), g.reinit())
                                        }, b.prototype.setPosition = function() {
                                          var a = this;
                                          a.setDimensions(), a.setHeight(), !1 === a.options.fade ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
                                        }, b.prototype.setProps = function() {
                                          var a = this,
                                            b = document.body.style;
                                          a.positionProp = !0 === a.options.vertical ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), void 0 === b.WebkitTransition && void 0 === b.MozTransition && void 0 === b.msTransition || !0 === a.options.useCSS && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && !1 !== a.animType && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && !1 !== a.animType
                                        }, b.prototype.setSlideClasses = function(a) {
                                          var b, c, d, e, f = this;
                                          if (c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), !0 === f.options.centerMode) {
                                            var g = f.options.slidesToShow % 2 == 0 ? 1 : 0;
                                            b = Math.floor(f.options.slidesToShow / 2), !0 === f.options.infinite && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b + g, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1 + g, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")
                                          } else a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = !0 === f.options.infinite ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                                          "ondemand" !== f.options.lazyLoad && "anticipated" !== f.options.lazyLoad || f.lazyLoad()
                                        }, b.prototype.setupInfinite = function() {
                                          var b, c, d, e = this;
                                          if (!0 === e.options.fade && (e.options.centerMode = !1), !0 === e.options.infinite && !1 === e.options.fade && (c = null, e.slideCount > e.options.slidesToShow)) {
                                            for (d = !0 === e.options.centerMode ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                                            for (b = 0; b < d + e.slideCount; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                                            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                                              a(this).attr("id", "")
                                            })
                                          }
                                        }, b.prototype.interrupt = function(a) {
                                          var b = this;
                                          a || b.autoPlay(), b.interrupted = a
                                        }, b.prototype.selectHandler = function(b) {
                                          var c = this,
                                            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                                            e = parseInt(d.attr("data-slick-index"));
                                          e || (e = 0), c.slideCount <= c.options.slidesToShow ? c.slideHandler(e, !1, !0) : c.slideHandler(e)
                                        }, b.prototype.slideHandler = function(a, b, c) {
                                          var d, e, f, g, h, i = null,
                                            j = this;
                                          if (b = b || !1, !(!0 === j.animating && !0 === j.options.waitForAnimate || !0 === j.options.fade && j.currentSlide === a))
                                            if (!1 === b && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, !1 === j.options.infinite && !1 === j.options.centerMode && (a < 0 || a > j.getDotCount() * j.options.slidesToScroll)) !1 === j.options.fade && (d = j.currentSlide, !0 !== c ? j.animateSlide(g, function() {
                                              j.postSlide(d)
                                            }) : j.postSlide(d));
                                            else if (!1 === j.options.infinite && !0 === j.options.centerMode && (a < 0 || a > j.slideCount - j.options.slidesToScroll)) !1 === j.options.fade && (d = j.currentSlide, !0 !== c ? j.animateSlide(g, function() {
                                            j.postSlide(d)
                                          }) : j.postSlide(d));
                                          else {
                                            if (j.options.autoplay && clearInterval(j.autoPlayTimer), e = d < 0 ? j.slideCount % j.options.slidesToScroll != 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll != 0 ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, e]), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = (h = j.getNavTarget()).slick("getSlick")).slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide), j.updateDots(), j.updateArrows(), !0 === j.options.fade) return !0 !== c ? (j.fadeSlideOut(f), j.fadeSlide(e, function() {
                                              j.postSlide(e)
                                            })) : j.postSlide(e), void j.animateHeight();
                                            !0 !== c ? j.animateSlide(i, function() {
                                              j.postSlide(e)
                                            }) : j.postSlide(e)
                                          }
                                        }, b.prototype.startLoad = function() {
                                          var a = this;
                                          !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), !0 === a.options.dots && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
                                        }, b.prototype.swipeDirection = function() {
                                          var a, b, c, d, e = this;
                                          return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), (d = Math.round(180 * c / Math.PI)) < 0 && (d = 360 - Math.abs(d)), d <= 45 && d >= 0 ? !1 === e.options.rtl ? "left" : "right" : d <= 360 && d >= 315 ? !1 === e.options.rtl ? "left" : "right" : d >= 135 && d <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? d >= 35 && d <= 135 ? "down" : "up" : "vertical"
                                        }, b.prototype.swipeEnd = function(a) {
                                          var b, c, d = this;
                                          if (d.dragging = !1, d.swiping = !1, d.scrolling) return d.scrolling = !1, !1;
                                          if (d.interrupted = !1, d.shouldClick = !(d.touchObject.swipeLength > 10), void 0 === d.touchObject.curX) return !1;
                                          if (!0 === d.touchObject.edgeHit && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe) {
                                            switch (c = d.swipeDirection()) {
                                              case "left":
                                              case "down":
                                                b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(), d.currentDirection = 0;
                                                break;
                                              case "right":
                                              case "up":
                                                b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(), d.currentDirection = 1
                                            }
                                            "vertical" != c && (d.slideHandler(b), d.touchObject = {}, d.$slider.trigger("swipe", [d, c]))
                                          } else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), d.touchObject = {})
                                        }, b.prototype.swipeHandler = function(a) {
                                          var b = this;
                                          if (!(!1 === b.options.swipe || "ontouchend" in document && !1 === b.options.swipe || !1 === b.options.draggable && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, !0 === b.options.verticalSwiping && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                                            case "start":
                                              b.swipeStart(a);
                                              break;
                                            case "move":
                                              b.swipeMove(a);
                                              break;
                                            case "end":
                                              b.swipeEnd(a)
                                          }
                                        }, b.prototype.swipeMove = function(a) {
                                          var b, c, d, e, f, g, h = this;
                                          return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!h.dragging || h.scrolling || f && 1 !== f.length) && (b = h.getLeft(h.currentSlide), h.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, h.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, h.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(h.touchObject.curX - h.touchObject.startX, 2))), g = Math.round(Math.sqrt(Math.pow(h.touchObject.curY - h.touchObject.startY, 2))), !h.options.verticalSwiping && !h.swiping && g > 4 ? (h.scrolling = !0, !1) : (!0 === h.options.verticalSwiping && (h.touchObject.swipeLength = g), c = h.swipeDirection(), void 0 !== a.originalEvent && h.touchObject.swipeLength > 4 && (h.swiping = !0, a.preventDefault()), e = (!1 === h.options.rtl ? 1 : -1) * (h.touchObject.curX > h.touchObject.startX ? 1 : -1), !0 === h.options.verticalSwiping && (e = h.touchObject.curY > h.touchObject.startY ? 1 : -1), d = h.touchObject.swipeLength, h.touchObject.edgeHit = !1, !1 === h.options.infinite && (0 === h.currentSlide && "right" === c || h.currentSlide >= h.getDotCount() && "left" === c) && (d = h.touchObject.swipeLength * h.options.edgeFriction, h.touchObject.edgeHit = !0), !1 === h.options.vertical ? h.swipeLeft = b + d * e : h.swipeLeft = b + d * (h.$list.height() / h.listWidth) * e, !0 === h.options.verticalSwiping && (h.swipeLeft = b + d * e), !0 !== h.options.fade && !1 !== h.options.touchMove && (!0 === h.animating ? (h.swipeLeft = null, !1) : void h.setCSS(h.swipeLeft))))
                                        }, b.prototype.swipeStart = function(a) {
                                          var b, c = this;
                                          if (c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow) return c.touchObject = {}, !1;
                                          void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, c.dragging = !0
                                        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
                                          var a = this;
                                          null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
                                        }, b.prototype.unload = function() {
                                          var b = this;
                                          a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                                        }, b.prototype.unslick = function(a) {
                                          var b = this;
                                          b.$slider.trigger("unslick", [b, a]), b.destroy()
                                        }, b.prototype.updateArrows = function() {
                                          var a = this;
                                          Math.floor(a.options.slidesToShow / 2), !0 === a.options.arrows && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && !1 === a.options.centerMode ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && !0 === a.options.centerMode && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                                        }, b.prototype.updateDots = function() {
                                          var a = this;
                                          null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").end(), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
                                        }, b.prototype.visibility = function() {
                                          var a = this;
                                          a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
                                        }, a.fn.slick = function() {
                                          var a, c, d = this,
                                            e = arguments[0],
                                            f = Array.prototype.slice.call(arguments, 1),
                                            g = d.length;
                                          for (a = 0; a < g; a++)
                                            if ("object" == typeof e || void 0 === e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), void 0 !== c) return c;
                                          return d
                                        }
                                        }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
                                          "use strict";
                                          var b = a.fn.jquery.split(" ")[0].split(".");
                                          if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b() {
                                            var a = document.createElement("bootstrap"),
                                              b = {
                                                WebkitTransition: "webkitTransitionEnd",
                                                MozTransition: "transitionend",
                                                OTransition: "oTransitionEnd otransitionend",
                                                transition: "transitionend"
                                              };
                                            for (var c in b)
                                              if (void 0 !== a.style[c]) return {
                                                end: b[c]
                                              };
                                            return !1
                                          }
                                          a.fn.emulateTransitionEnd = function(b) {
                                            var c = !1,
                                              d = this;
                                            a(this).one("bsTransitionEnd", function() {
                                              c = !0
                                            });
                                            var e = function() {
                                              c || a(d).trigger(a.support.transition.end)
                                            };
                                            return setTimeout(e, b), this
                                          }, a(function() {
                                            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                                              bindType: a.support.transition.end,
                                              delegateType: a.support.transition.end,
                                              handle: function(b) {
                                                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                                              }
                                            })
                                          })
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            return this.each(function() {
                                              var c = a(this),
                                                e = c.data("bs.alert");
                                              e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
                                            })
                                          }
                                          var c = '[data-dismiss="alert"]',
                                            d = function(b) {
                                              a(b).on("click", c, this.close)
                                            };
                                          d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
                                            function c() {
                                              g.detach().trigger("closed.bs.alert").remove()
                                            }
                                            var e = a(this),
                                              f = e.attr("data-target");
                                            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
                                            var g = a("#" === f ? [] : f);
                                            b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
                                          };
                                          var e = a.fn.alert;
                                          a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
                                            return a.fn.alert = e, this
                                          }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            return this.each(function() {
                                              var d = a(this),
                                                e = d.data("bs.button"),
                                                f = "object" == typeof b && b;
                                              e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
                                            })
                                          }
                                          var c = function(b, d) {
                                            this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
                                          };
                                          c.VERSION = "3.3.7", c.DEFAULTS = {
                                            loadingText: "loading..."
                                          }, c.prototype.setState = function(b) {
                                            var c = "disabled",
                                              d = this.$element,
                                              e = d.is("input") ? "val" : "html",
                                              f = d.data();
                                            b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
                                              d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
                                            }, this), 0)
                                          }, c.prototype.toggle = function() {
                                            var a = !0,
                                              b = this.$element.closest('[data-toggle="buttons"]');
                                            if (b.length) {
                                              var c = this.$element.find("input");
                                              "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
                                            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
                                          };
                                          var d = a.fn.button;
                                          a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
                                            return a.fn.button = d, this
                                          }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
                                            var d = a(c.target).closest(".btn");
                                            b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
                                          }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
                                            a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
                                          })
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            return this.each(function() {
                                              var d = a(this),
                                                e = d.data("bs.carousel"),
                                                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                                                g = "string" == typeof b ? b : f.slide;
                                              e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
                                            })
                                          }
                                          var c = function(b, c) {
                                            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
                                          };
                                          c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
                                            interval: 5e3,
                                            pause: "hover",
                                            wrap: !0,
                                            keyboard: !0
                                          }, c.prototype.keydown = function(a) {
                                            if (!/input|textarea/i.test(a.target.tagName)) {
                                              switch (a.which) {
                                                case 37:
                                                  this.prev();
                                                  break;
                                                case 39:
                                                  this.next();
                                                  break;
                                                default:
                                                  return
                                              }
                                              a.preventDefault()
                                            }
                                          }, c.prototype.cycle = function(b) {
                                            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
                                          }, c.prototype.getItemIndex = function(a) {
                                            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
                                          }, c.prototype.getItemForDirection = function(a, b) {
                                            var c = this.getItemIndex(b);
                                            if (("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap) return b;
                                            var d = "prev" == a ? -1 : 1,
                                              e = (c + d) % this.$items.length;
                                            return this.$items.eq(e)
                                          }, c.prototype.to = function(a) {
                                            var b = this,
                                              c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                                            if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                                              b.to(a)
                                            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
                                          }, c.prototype.pause = function(b) {
                                            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                                          }, c.prototype.next = function() {
                                            if (!this.sliding) return this.slide("next")
                                          }, c.prototype.prev = function() {
                                            if (!this.sliding) return this.slide("prev")
                                          }, c.prototype.slide = function(b, d) {
                                            var e = this.$element.find(".item.active"),
                                              f = d || this.getItemForDirection(b, e),
                                              g = this.interval,
                                              h = "next" == b ? "left" : "right",
                                              i = this;
                                            if (f.hasClass("active")) return this.sliding = !1;
                                            var j = f[0],
                                              k = a.Event("slide.bs.carousel", {
                                                relatedTarget: j,
                                                direction: h
                                              });
                                            if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                                              if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                                                this.$indicators.find(".active").removeClass("active");
                                                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                                                l && l.addClass("active")
                                              }
                                              var m = a.Event("slid.bs.carousel", {
                                                relatedTarget: j,
                                                direction: h
                                              });
                                              return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                                                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                                                  i.$element.trigger(m)
                                                }, 0)
                                              }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
                                            }
                                          };
                                          var d = a.fn.carousel;
                                          a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
                                            return a.fn.carousel = d, this
                                          };
                                          var e = function(c) {
                                            var d, e = a(this),
                                              f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
                                            if (f.hasClass("carousel")) {
                                              var g = a.extend({}, f.data(), e.data()),
                                                h = e.attr("data-slide-to");
                                              h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
                                            }
                                          };
                                          a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
                                            a('[data-ride="carousel"]').each(function() {
                                              var c = a(this);
                                              b.call(c, c.data())
                                            })
                                          })
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
                                            return a(d)
                                          }

                                          function c(b) {
                                            return this.each(function() {
                                              var c = a(this),
                                                e = c.data("bs.collapse"),
                                                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                                              !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
                                            })
                                          }
                                          var d = function(b, c) {
                                            this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
                                          };
                                          d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
                                            toggle: !0
                                          }, d.prototype.dimension = function() {
                                            return this.$element.hasClass("width") ? "width" : "height"
                                          }, d.prototype.show = function() {
                                            if (!this.transitioning && !this.$element.hasClass("in")) {
                                              var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                                              if (!(e && e.length && (b = e.data("bs.collapse")) && b.transitioning)) {
                                                var f = a.Event("show.bs.collapse");
                                                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                                                  e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                                                  var g = this.dimension();
                                                  this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                                                  var h = function() {
                                                    this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                                                  };
                                                  if (!a.support.transition) return h.call(this);
                                                  var i = a.camelCase(["scroll", g].join("-"));
                                                  this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                                                }
                                              }
                                            }
                                          }, d.prototype.hide = function() {
                                            if (!this.transitioning && this.$element.hasClass("in")) {
                                              var b = a.Event("hide.bs.collapse");
                                              if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                                                var c = this.dimension();
                                                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                                                var e = function() {
                                                  this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                                };
                                                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                                              }
                                            }
                                          }, d.prototype.toggle = function() {
                                            this[this.$element.hasClass("in") ? "hide" : "show"]()
                                          }, d.prototype.getParent = function() {
                                            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                                              var e = a(d);
                                              this.addAriaAndCollapsedClass(b(e), e)
                                            }, this)).end()
                                          }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
                                            var c = a.hasClass("in");
                                            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
                                          };
                                          var e = a.fn.collapse;
                                          a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
                                            return a.fn.collapse = e, this
                                          }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
                                            var e = a(this);
                                            e.attr("data-target") || d.preventDefault();
                                            var f = b(e),
                                              g = f.data("bs.collapse"),
                                              h = g ? "toggle" : e.data();
                                            c.call(f, h)
                                          })
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            var c = b.attr("data-target");
                                            c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
                                            var d = c && a(c);
                                            return d && d.length ? d : b.parent()
                                          }

                                          function c(c) {
                                            c && 3 === c.which || (a(e).remove(), a(f).each(function() {
                                              var d = a(this),
                                                e = b(d),
                                                f = {
                                                  relatedTarget: this
                                                };
                                              e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
                                            }))
                                          }

                                          function d(b) {
                                            return this.each(function() {
                                              var c = a(this),
                                                d = c.data("bs.dropdown");
                                              d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
                                            })
                                          }
                                          var e = ".dropdown-backdrop",
                                            f = '[data-toggle="dropdown"]',
                                            g = function(b) {
                                              a(b).on("click.bs.dropdown", this.toggle)
                                            };
                                          g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
                                            var e = a(this);
                                            if (!e.is(".disabled, :disabled")) {
                                              var f = b(e),
                                                g = f.hasClass("open");
                                              if (c(), !g) {
                                                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                                                var h = {
                                                  relatedTarget: this
                                                };
                                                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                                                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                                              }
                                              return !1
                                            }
                                          }, g.prototype.keydown = function(c) {
                                            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                                              var d = a(this);
                                              if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                                                var e = b(d),
                                                  g = e.hasClass("open");
                                                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                                                var h = e.find(".dropdown-menu li:not(.disabled):visible a");
                                                if (h.length) {
                                                  var i = h.index(c.target);
                                                  38 == c.which && i > 0 && i--, 40 == c.which && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).trigger("focus")
                                                }
                                              }
                                            }
                                          };
                                          var h = a.fn.dropdown;
                                          a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
                                            return a.fn.dropdown = h, this
                                          }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
                                            a.stopPropagation()
                                          }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b, d) {
                                            return this.each(function() {
                                              var e = a(this),
                                                f = e.data("bs.modal"),
                                                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                                              f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
                                            })
                                          }
                                          var c = function(b, c) {
                                            this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                                              this.$element.trigger("loaded.bs.modal")
                                            }, this))
                                          };
                                          c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
                                            backdrop: !0,
                                            keyboard: !0,
                                            show: !0
                                          }, c.prototype.toggle = function(a) {
                                            return this.isShown ? this.hide() : this.show(a)
                                          }, c.prototype.show = function(b) {
                                            var d = this,
                                              e = a.Event("show.bs.modal", {
                                                relatedTarget: b
                                              });
                                            this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                                              d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                                                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                                              })
                                            }), this.backdrop(function() {
                                              var e = a.support.transition && d.$element.hasClass("fade");
                                              d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                                              var f = a.Event("shown.bs.modal", {
                                                relatedTarget: b
                                              });
                                              e ? d.$dialog.one("bsTransitionEnd", function() {
                                                d.$element.trigger("focus").trigger(f)
                                              }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
                                            }))
                                          }, c.prototype.hide = function(b) {
                                            b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
                                          }, c.prototype.enforceFocus = function() {
                                            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
                                              document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
                                            }, this))
                                          }, c.prototype.escape = function() {
                                            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                                              27 == a.which && this.hide()
                                            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                                          }, c.prototype.resize = function() {
                                            this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
                                          }, c.prototype.hideModal = function() {
                                            var a = this;
                                            this.$element.hide(), this.backdrop(function() {
                                              a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
                                            })
                                          }, c.prototype.removeBackdrop = function() {
                                            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                                          }, c.prototype.backdrop = function(b) {
                                            var d = this,
                                              e = this.$element.hasClass("fade") ? "fade" : "";
                                            if (this.isShown && this.options.backdrop) {
                                              var f = a.support.transition && e;
                                              if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                                                  return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                                                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                                              f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
                                            } else if (!this.isShown && this.$backdrop) {
                                              this.$backdrop.removeClass("in");
                                              var g = function() {
                                                d.removeBackdrop(), b && b()
                                              };
                                              a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
                                            } else b && b()
                                          }, c.prototype.handleUpdate = function() {
                                            this.adjustDialog()
                                          }, c.prototype.adjustDialog = function() {
                                            var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                                            this.$element.css({
                                              paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                                              paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
                                            })
                                          }, c.prototype.resetAdjustments = function() {
                                            this.$element.css({
                                              paddingLeft: "",
                                              paddingRight: ""
                                            })
                                          }, c.prototype.checkScrollbar = function() {
                                            var a = window.innerWidth;
                                            if (!a) {
                                              var b = document.documentElement.getBoundingClientRect();
                                              a = b.right - Math.abs(b.left)
                                            }
                                            this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
                                          }, c.prototype.setScrollbar = function() {
                                            var a = parseInt(this.$body.css("padding-right") || 0, 10);
                                            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
                                          }, c.prototype.resetScrollbar = function() {
                                            this.$body.css("padding-right", this.originalBodyPad)
                                          }, c.prototype.measureScrollbar = function() {
                                            var a = document.createElement("div");
                                            a.className = "modal-scrollbar-measure", this.$body.append(a);
                                            var b = a.offsetWidth - a.clientWidth;
                                            return this.$body[0].removeChild(a), b
                                          };
                                          var d = a.fn.modal;
                                          a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
                                            return a.fn.modal = d, this
                                          }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
                                            var d = a(this),
                                              e = d.attr("href"),
                                              f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
                                              g = f.data("bs.modal") ? "toggle" : a.extend({
                                                remote: !/#/.test(e) && e
                                              }, f.data(), d.data());
                                            d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
                                              a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                                                d.is(":visible") && d.trigger("focus")
                                              })
                                            }), b.call(f, g, this)
                                          })
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            return this.each(function() {
                                              var d = a(this),
                                                e = d.data("bs.tooltip"),
                                                f = "object" == typeof b && b;
                                              !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
                                            })
                                          }
                                          var c = function(a, b) {
                                            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
                                          };
                                          c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
                                              animation: !0,
                                              placement: "top",
                                              selector: !1,
                                              template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                                              trigger: "hover focus",
                                              title: "",
                                              delay: 0,
                                              html: !1,
                                              container: !1,
                                              viewport: {
                                                selector: "body",
                                                padding: 0
                                              }
                                            }, c.prototype.init = function(b, c, d) {
                                              if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                                                  click: !1,
                                                  hover: !1,
                                                  focus: !1
                                                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                                              for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                                                var g = e[f];
                                                if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                                                else if ("manual" != g) {
                                                  var h = "hover" == g ? "mouseenter" : "focusin",
                                                    i = "hover" == g ? "mouseleave" : "focusout";
                                                  this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                                                }
                                              }
                                              this.options.selector ? this._options = a.extend({}, this.options, {
                                                trigger: "manual",
                                                selector: ""
                                              }) : this.fixTitle()
                                            }, c.prototype.getDefaults = function() {
                                              return c.DEFAULTS
                                            }, c.prototype.getOptions = function(b) {
                                              return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                                                show: b.delay,
                                                hide: b.delay
                                              }), b
                                            }, c.prototype.getDelegateOptions = function() {
                                              var b = {},
                                                c = this.getDefaults();
                                              return this._options && a.each(this._options, function(a, d) {
                                                c[a] != d && (b[a] = d)
                                              }), b
                                            }, c.prototype.enter = function(b) {
                                              var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                                              return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
                                                "in" == c.hoverState && c.show()
                                              }, c.options.delay.show)) : c.show())
                                            }, c.prototype.isInStateTrue = function() {
                                              for (var a in this.inState)
                                                if (this.inState[a]) return !0;
                                              return !1
                                            }, c.prototype.leave = function(b) {
                                              var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
                                              if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
                                                "out" == c.hoverState && c.hide()
                                              }, c.options.delay.hide)) : c.hide()
                                            }, c.prototype.show = function() {
                                              var b = a.Event("show.bs." + this.type);
                                              if (this.hasContent() && this.enabled) {
                                                this.$element.trigger(b);
                                                var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                                                if (b.isDefaultPrevented() || !d) return;
                                                var e = this,
                                                  f = this.tip(),
                                                  g = this.getUID(this.type);
                                                this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                                                var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                                                  i = /\s?auto?\s?/i,
                                                  j = i.test(h);
                                                j && (h = h.replace(i, "") || "top"), f.detach().css({
                                                  top: 0,
                                                  left: 0,
                                                  display: "block"
                                                }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                                                var k = this.getPosition(),
                                                  l = f[0].offsetWidth,
                                                  m = f[0].offsetHeight;
                                                if (j) {
                                                  var n = h,
                                                    o = this.getPosition(this.$viewport);
                                                  h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
                                                }
                                                var p = this.getCalculatedOffset(h, k, l, m);
                                                this.applyPlacement(p, h);
                                                var q = function() {
                                                  var a = e.hoverState;
                                                  e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
                                                };
                                                a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
                                              }
                                            }, c.prototype.applyPlacement = function(b, c) {
                                              var d = this.tip(),
                                                e = d[0].offsetWidth,
                                                f = d[0].offsetHeight,
                                                g = parseInt(d.css("margin-top"), 10),
                                                h = parseInt(d.css("margin-left"), 10);
                                              isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                                                using: function(a) {
                                                  d.css({
                                                    top: Math.round(a.top),
                                                    left: Math.round(a.left)
                                                  })
                                                }
                                              }, b), 0), d.addClass("in");
                                              var i = d[0].offsetWidth,
                                                j = d[0].offsetHeight;
                                              "top" == c && j != f && (b.top = b.top + f - j);
                                              var k = this.getViewportAdjustedDelta(c, b, i, j);
                                              k.left ? b.left += k.left : b.top += k.top;
                                              var l = /top|bottom/.test(c),
                                                m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                                                n = l ? "offsetWidth" : "offsetHeight";
                                              d.offset(b), this.replaceArrow(m, d[0][n], l)
                                            }, c.prototype.replaceArrow = function(a, b, c) {
                                              this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
                                            }, c.prototype.setContent = function() {
                                              var a = this.tip(),
                                                b = this.getTitle();
                                              a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
                                            }, c.prototype.hide = function(b) {
                                              function d() {
                                                "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
                                              }
                                              var e = this,
                                                f = a(this.$tip),
                                                g = a.Event("hide.bs." + this.type);
                                              if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
                                            }, c.prototype.fixTitle = function() {
                                              var a = this.$element;
                                              (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
                                            }, c.prototype.hasContent = function() {
                                              return this.getTitle()
                                            }, c.prototype.getPosition = function(b) {
                                              b = b || this.$element;
                                              var c = b[0],
                                                d = "BODY" == c.tagName,
                                                e = c.getBoundingClientRect();
                                              null == e.width && (e = a.extend({}, e, {
                                                width: e.right - e.left,
                                                height: e.bottom - e.top
                                              }));
                                              var f = window.SVGElement && c instanceof window.SVGElement,
                                                g = d ? {
                                                  top: 0,
                                                  left: 0
                                                } : f ? null : b.offset(),
                                                h = {
                                                  scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                                                },
                                                i = d ? {
                                                  width: a(window).width(),
                                                  height: a(window).height()
                                                } : null;
                                              return a.extend({}, e, h, i, g)
                                            }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
                                              return "bottom" == a ? {
                                                top: b.top + b.height,
                                                left: b.left + b.width / 2 - c / 2
                                              } : "top" == a ? {
                                                top: b.top - d,
                                                left: b.left + b.width / 2 - c / 2
                                              } : "left" == a ? {
                                                top: b.top + b.height / 2 - d / 2,
                                                left: b.left - c
                                              } : {
                                                top: b.top + b.height / 2 - d / 2,
                                                left: b.left + b.width
                                              }
                                            }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
                                              var e = {
                                                top: 0,
                                                left: 0
                                              };
                                              if (!this.$viewport) return e;
                                              var f = this.options.viewport && this.options.viewport.padding || 0,
                                                g = this.getPosition(this.$viewport);
                                              if (/right|left/.test(a)) {
                                                var h = b.top - f - g.scroll,
                                                  i = b.top + f - g.scroll + d;
                                                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
                                              } else {
                                                var j = b.left - f,
                                                  k = b.left + f + c;
                                                j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
                                              }
                                              return e
                                            }, c.prototype.getTitle = function() {
                                              var a = this.$element,
                                                b = this.options;
                                              return a.attr("data-original-title") || ("function" == typeof b.title ? b.title.call(a[0]) : b.title)
                                            }, c.prototype.getUID = function(a) {
                                              do {
                                                a += ~~(1e6 * Math.random())
                                              } while (document.getElementById(a));
                                              return a
                                            }, c.prototype.tip = function() {
                                              if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                                              return this.$tip
                                            }, c.prototype.arrow = function() {
                                              return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                                            }, c.prototype.enable = function() {
                                              this.enabled = !0
                                            }, c.prototype.disable = function() {
                                              this.enabled = !1
                                            }, c.prototype.toggleEnabled = function() {
                                              this.enabled = !this.enabled
                                            },
                                            c.prototype.toggle = function(b) {
                                              var c = this;
                                              b && ((c = a(b.currentTarget).data("bs." + this.type)) || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
                                            }, c.prototype.destroy = function() {
                                              var a = this;
                                              clearTimeout(this.timeout), this.hide(function() {
                                                a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
                                              })
                                            };
                                          var d = a.fn.tooltip;
                                          a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
                                            return a.fn.tooltip = d, this
                                          }
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            return this.each(function() {
                                              var d = a(this),
                                                e = d.data("bs.popover"),
                                                f = "object" == typeof b && b;
                                              !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
                                            })
                                          }
                                          var c = function(a, b) {
                                            this.init("popover", a, b)
                                          };
                                          if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
                                          c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                                            placement: "right",
                                            trigger: "click",
                                            content: "",
                                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                                          }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
                                            return c.DEFAULTS
                                          }, c.prototype.setContent = function() {
                                            var a = this.tip(),
                                              b = this.getTitle(),
                                              c = this.getContent();
                                            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
                                          }, c.prototype.hasContent = function() {
                                            return this.getTitle() || this.getContent()
                                          }, c.prototype.getContent = function() {
                                            var a = this.$element,
                                              b = this.options;
                                            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
                                          }, c.prototype.arrow = function() {
                                            return this.$arrow = this.$arrow || this.tip().find(".arrow")
                                          };
                                          var d = a.fn.popover;
                                          a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
                                            return a.fn.popover = d, this
                                          }
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(c, d) {
                                            this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
                                          }

                                          function c(c) {
                                            return this.each(function() {
                                              var d = a(this),
                                                e = d.data("bs.scrollspy"),
                                                f = "object" == typeof c && c;
                                              e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
                                            })
                                          }
                                          b.VERSION = "3.3.7", b.DEFAULTS = {
                                            offset: 10
                                          }, b.prototype.getScrollHeight = function() {
                                            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                                          }, b.prototype.refresh = function() {
                                            var b = this,
                                              c = "offset",
                                              d = 0;
                                            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                                              var b = a(this),
                                                e = b.data("target") || b.attr("href"),
                                                f = /^#./.test(e) && a(e);
                                              return f && f.length && f.is(":visible") && [
                                                [f[c]().top + d, e]
                                              ] || null
                                            }).sort(function(a, b) {
                                              return a[0] - b[0]
                                            }).each(function() {
                                              b.offsets.push(this[0]), b.targets.push(this[1])
                                            })
                                          }, b.prototype.process = function() {
                                            var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                                              c = this.getScrollHeight(),
                                              d = this.options.offset + c - this.$scrollElement.height(),
                                              e = this.offsets,
                                              f = this.targets,
                                              g = this.activeTarget;
                                            if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
                                            if (g && b < e[0]) return this.activeTarget = null, this.clear();
                                            for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
                                          }, b.prototype.activate = function(b) {
                                            this.activeTarget = b, this.clear();
                                            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                                              d = a(c).parents("li").addClass("active");
                                            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
                                          }, b.prototype.clear = function() {
                                            a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                                          };
                                          var d = a.fn.scrollspy;
                                          a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
                                            return a.fn.scrollspy = d, this
                                          }, a(window).on("load.bs.scrollspy.data-api", function() {
                                            a('[data-spy="scroll"]').each(function() {
                                              var b = a(this);
                                              c.call(b, b.data())
                                            })
                                          })
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            return this.each(function() {
                                              var d = a(this),
                                                e = d.data("bs.tab");
                                              e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
                                            })
                                          }
                                          var c = function(b) {
                                            this.element = a(b)
                                          };
                                          c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
                                            var b = this.element,
                                              c = b.closest("ul:not(.dropdown-menu)"),
                                              d = b.data("target");
                                            if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                                              var e = c.find(".active:last a"),
                                                f = a.Event("hide.bs.tab", {
                                                  relatedTarget: b[0]
                                                }),
                                                g = a.Event("show.bs.tab", {
                                                  relatedTarget: e[0]
                                                });
                                              if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                                var h = a(d);
                                                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                                                  e.trigger({
                                                    type: "hidden.bs.tab",
                                                    relatedTarget: b[0]
                                                  }), b.trigger({
                                                    type: "shown.bs.tab",
                                                    relatedTarget: e[0]
                                                  })
                                                })
                                              }
                                            }
                                          }, c.prototype.activate = function(b, d, e) {
                                            function f() {
                                              g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
                                            }
                                            var g = d.find("> .active"),
                                              h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
                                            g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
                                          };
                                          var d = a.fn.tab;
                                          a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
                                            return a.fn.tab = d, this
                                          };
                                          var e = function(c) {
                                            c.preventDefault(), b.call(a(this), "show")
                                          };
                                          a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
                                        }(jQuery),
                                        function(a) {
                                          "use strict";

                                          function b(b) {
                                            return this.each(function() {
                                              var d = a(this),
                                                e = d.data("bs.affix"),
                                                f = "object" == typeof b && b;
                                              e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
                                            })
                                          }
                                          var c = function(b, d) {
                                            this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
                                          };
                                          c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
                                            offset: 0,
                                            target: window
                                          }, c.prototype.getState = function(a, b, c, d) {
                                            var e = this.$target.scrollTop(),
                                              f = this.$element.offset(),
                                              g = this.$target.height();
                                            if (null != c && "top" == this.affixed) return e < c && "top";
                                            if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
                                            var h = null == this.affixed,
                                              i = h ? e : f.top,
                                              j = h ? g : b;
                                            return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
                                          }, c.prototype.getPinnedOffset = function() {
                                            if (this.pinnedOffset) return this.pinnedOffset;
                                            this.$element.removeClass(c.RESET).addClass("affix");
                                            var a = this.$target.scrollTop(),
                                              b = this.$element.offset();
                                            return this.pinnedOffset = b.top - a
                                          }, c.prototype.checkPositionWithEventLoop = function() {
                                            setTimeout(a.proxy(this.checkPosition, this), 1)
                                          }, c.prototype.checkPosition = function() {
                                            if (this.$element.is(":visible")) {
                                              var b = this.$element.height(),
                                                d = this.options.offset,
                                                e = d.top,
                                                f = d.bottom,
                                                g = Math.max(a(document).height(), a(document.body).height());
                                              "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                                              var h = this.getState(g, b, e, f);
                                              if (this.affixed != h) {
                                                null != this.unpin && this.$element.css("top", "");
                                                var i = "affix" + (h ? "-" + h : ""),
                                                  j = a.Event(i + ".bs.affix");
                                                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                                                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
                                              }
                                              "bottom" == h && this.$element.offset({
                                                top: g - b - f
                                              })
                                            }
                                          };
                                          var d = a.fn.affix;
                                          a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
                                            return a.fn.affix = d, this
                                          }, a(window).on("load", function() {
                                            a('[data-spy="affix"]').each(function() {
                                              var c = a(this),
                                                d = c.data();
                                              d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
                                            })
                                          })
                                        }(jQuery);
                                        var _slice = Array.prototype.slice;
                                        ! function(a, b) {
                                          "object" == typeof exports && "undefined" != typeof module ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : a.parsley = b(a.jQuery)
                                        }(this, function(a) {
                                          "use strict";

                                          function b(a, b) {
                                            return a.parsleyAdaptedCallback || (a.parsleyAdaptedCallback = function() {
                                              var c = Array.prototype.slice.call(arguments, 0);
                                              c.unshift(this), a.apply(b || F, c)
                                            }), a.parsleyAdaptedCallback
                                          }

                                          function c(a) {
                                            return 0 === a.lastIndexOf(H, 0) ? a.substr(H.length) : a
                                          }
                                          var d = 1,
                                            e = {},
                                            f = {
                                              attr: function(a, b, c) {
                                                var d, e, f, g = new RegExp("^" + b, "i");
                                                if (void 0 === c) c = {};
                                                else
                                                  for (d in c) c.hasOwnProperty(d) && delete c[d];
                                                if (void 0 === a || void 0 === a[0]) return c;
                                                for (f = a[0].attributes, d = f.length; d--;)(e = f[d]) && e.specified && g.test(e.name) && (c[this.camelize(e.name.slice(b.length))] = this.deserializeValue(e.value));
                                                return c
                                              },
                                              checkAttr: function(a, b, c) {
                                                return a.is("[" + b + c + "]")
                                              },
                                              setAttr: function(a, b, c, d) {
                                                a[0].setAttribute(this.dasherize(b + c), String(d))
                                              },
                                              generateID: function() {
                                                return "" + d++
                                              },
                                              deserializeValue: function(b) {
                                                var c;
                                                try {
                                                  return b ? "true" == b || "false" != b && ("null" == b ? null : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
                                                } catch (a) {
                                                  return b
                                                }
                                              },
                                              camelize: function(a) {
                                                return a.replace(/-+(.)?/g, function(a, b) {
                                                  return b ? b.toUpperCase() : ""
                                                })
                                              },
                                              dasherize: function(a) {
                                                return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                                              },
                                              warn: function() {
                                                var a;
                                                window.console && "function" == typeof window.console.warn && (a = window.console).warn.apply(a, arguments)
                                              },
                                              warnOnce: function(a) {
                                                e[a] || (e[a] = !0, this.warn.apply(this, arguments))
                                              },
                                              _resetWarnings: function() {
                                                e = {}
                                              },
                                              trimString: function(a) {
                                                return a.replace(/^\s+|\s+$/g, "")
                                              },
                                              namespaceEvents: function(b, c) {
                                                return b = this.trimString(b || "").split(/\s+/), b[0] ? a.map(b, function(a) {
                                                  return a + "." + c
                                                }).join(" ") : ""
                                              },
                                              objectCreate: Object.create || function() {
                                                var a = function() {};
                                                return function(b) {
                                                  if (arguments.length > 1) throw Error("Second argument not supported");
                                                  if ("object" != typeof b) throw TypeError("Argument must be an object");
                                                  a.prototype = b;
                                                  var c = new a;
                                                  return a.prototype = null, c
                                                }
                                              }()
                                            },
                                            g = f,
                                            h = {
                                              namespace: "data-parsley-",
                                              inputs: "input, textarea, select",
                                              excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
                                              priorityEnabled: !0,
                                              multiple: null,
                                              group: null,
                                              uiEnabled: !0,
                                              validationThreshold: 3,
                                              focus: "first",
                                              trigger: !1,
                                              triggerAfterFailure: "input",
                                              errorClass: "parsley-error",
                                              successClass: "parsley-success",
                                              classHandler: function(a) {},
                                              errorsContainer: function(a) {},
                                              errorsWrapper: '<ul class="parsley-errors-list"></ul>',
                                              errorTemplate: "<li></li>"
                                            },
                                            i = function() {
                                              this.__id__ = g.generateID()
                                            };
                                          i.prototype = {
                                            asyncSupport: !0,
                                            _pipeAccordingToValidationResult: function() {
                                              var b = this,
                                                c = function() {
                                                  var c = a.Deferred();
                                                  return !0 !== b.validationResult && c.reject(), c.resolve().promise()
                                                };
                                              return [c, c]
                                            },
                                            actualizeOptions: function() {
                                              return g.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
                                            },
                                            _resetOptions: function(a) {
                                              this.domOptions = g.objectCreate(this.parent.options), this.options = g.objectCreate(this.domOptions);
                                              for (var b in a) a.hasOwnProperty(b) && (this.options[b] = a[b]);
                                              this.actualizeOptions()
                                            },
                                            _listeners: null,
                                            on: function(a, b) {
                                              return this._listeners = this._listeners || {}, (this._listeners[a] = this._listeners[a] || []).push(b), this
                                            },
                                            subscribe: function(b, c) {
                                              a.listenTo(this, b.toLowerCase(), c)
                                            },
                                            off: function(a, b) {
                                              var c = this._listeners && this._listeners[a];
                                              if (c)
                                                if (b)
                                                  for (var d = c.length; d--;) c[d] === b && c.splice(d, 1);
                                                else delete this._listeners[a];
                                              return this
                                            },
                                            unsubscribe: function(b, c) {
                                              a.unsubscribeTo(this, b.toLowerCase())
                                            },
                                            trigger: function(a, b, c) {
                                              b = b || this;
                                              var d, e = this._listeners && this._listeners[a];
                                              if (e)
                                                for (var f = e.length; f--;)
                                                  if (!1 === (d = e[f].call(b, b, c))) return d;
                                              return !this.parent || this.parent.trigger(a, b, c)
                                            },
                                            reset: function() {
                                              if ("ParsleyForm" !== this.__class__) return this._resetUI(), this._trigger("reset");
                                              for (var a = 0; a < this.fields.length; a++) this.fields[a].reset();
                                              this._trigger("reset")
                                            },
                                            destroy: function() {
                                              if (this._destroyUI(), "ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
                                              for (var a = 0; a < this.fields.length; a++) this.fields[a].destroy();
                                              this.$element.removeData("Parsley"), this._trigger("destroy")
                                            },
                                            asyncIsValid: function(a, b) {
                                              return g.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
                                                group: a,
                                                force: b
                                              })
                                            },
                                            _findRelated: function() {
                                              return this.options.multiple ? this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]') : this.$element
                                            }
                                          };
                                          var j = {
                                              string: function(a) {
                                                return a
                                              },
                                              integer: function(a) {
                                                if (isNaN(a)) throw 'Requirement is not an integer: "' + a + '"';
                                                return parseInt(a, 10)
                                              },
                                              number: function(a) {
                                                if (isNaN(a)) throw 'Requirement is not a number: "' + a + '"';
                                                return parseFloat(a)
                                              },
                                              reference: function(b) {
                                                var c = a(b);
                                                if (0 === c.length) throw 'No such reference: "' + b + '"';
                                                return c
                                              },
                                              boolean: function(a) {
                                                return "false" !== a
                                              },
                                              object: function(a) {
                                                return g.deserializeValue(a)
                                              },
                                              regexp: function(a) {
                                                var b = "";
                                                return /^\/.*\/(?:[gimy]*)$/.test(a) ? (b = a.replace(/.*\/([gimy]*)$/, "$1"), a = a.replace(new RegExp("^/(.*?)/" + b + "$"), "$1")) : a = "^" + a + "$", new RegExp(a, b)
                                              }
                                            },
                                            k = function(a, b) {
                                              var c = a.match(/^\s*\[(.*)\]\s*$/);
                                              if (!c) throw 'Requirement is not an array: "' + a + '"';
                                              var d = c[1].split(",").map(g.trimString);
                                              if (d.length !== b) throw "Requirement has " + d.length + " values when " + b + " are needed";
                                              return d
                                            },
                                            l = function(a, b) {
                                              var c = j[a || "string"];
                                              if (!c) throw 'Unknown requirement specification: "' + a + '"';
                                              return c(b)
                                            },
                                            m = function(a, b, c) {
                                              var d = null,
                                                e = {};
                                              for (var f in a)
                                                if (f) {
                                                  var g = c(f);
                                                  "string" == typeof g && (g = l(a[f], g)), e[f] = g
                                                } else d = l(a[f], b);
                                              return [d, e]
                                            },
                                            n = function(b) {
                                              a.extend(!0, this, b)
                                            };
                                          n.prototype = {
                                            validate: function(b, c) {
                                              if (this.fn) return arguments.length > 3 && (c = [].slice.call(arguments, 1, -1)), this.fn.call(this, b, c);
                                              if (a.isArray(b)) {
                                                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                                                return this.validateMultiple.apply(this, arguments)
                                              }
                                              if (this.validateNumber) return !isNaN(b) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
                                              if (this.validateString) return this.validateString.apply(this, arguments);
                                              throw "Validator `" + this.name + "` only handles multiple values"
                                            },
                                            parseRequirements: function(b, c) {
                                              if ("string" != typeof b) return a.isArray(b) ? b : [b];
                                              var d = this.requirementType;
                                              if (a.isArray(d)) {
                                                for (var e = k(b, d.length), f = 0; f < e.length; f++) e[f] = l(d[f], e[f]);
                                                return e
                                              }
                                              return a.isPlainObject(d) ? m(d, b, c) : [l(d, b)]
                                            },
                                            requirementType: "string",
                                            priority: 2
                                          };
                                          var o = function(a, b) {
                                              this.__class__ = "ParsleyValidatorRegistry", this.locale = "en", this.init(a || {}, b || {})
                                            },
                                            p = {
                                              email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                                              number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
                                              integer: /^-?\d+$/,
                                              digits: /^\d+$/,
                                              alphanum: /^\w+$/i,
                                              url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i")
                                            };
                                          p.range = p.number;
                                          var q = function(a) {
                                            var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                            return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
                                          };
                                          o.prototype = {
                                            init: function(b, c) {
                                              this.catalog = c, this.validators = a.extend({}, this.validators);
                                              for (var d in b) this.addValidator(d, b[d].fn, b[d].priority);
                                              window.Parsley.trigger("parsley:validator:init")
                                            },
                                            setLocale: function(a) {
                                              if (void 0 === this.catalog[a]) throw new Error(a + " is not available in the catalog");
                                              return this.locale = a, this
                                            },
                                            addCatalog: function(a, b, c) {
                                              return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
                                            },
                                            addMessage: function(a, b, c) {
                                              return void 0 === this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b] = c, this
                                            },
                                            addMessages: function(a, b) {
                                              for (var c in b) this.addMessage(a, c, b[c]);
                                              return this
                                            },
                                            addValidator: function(a, b, c) {
                                              if (this.validators[a]) g.warn('Validator "' + a + '" is already defined.');
                                              else if (h.hasOwnProperty(a)) return void g.warn('"' + a + '" is a restricted keyword and is not a valid validator name.');
                                              return this._setValidator.apply(this, arguments)
                                            },
                                            updateValidator: function(a, b, c) {
                                              return this.validators[a] ? this._setValidator(this, arguments) : (g.warn('Validator "' + a + '" is not already defined.'), this.addValidator.apply(this, arguments))
                                            },
                                            removeValidator: function(a) {
                                              return this.validators[a] || g.warn('Validator "' + a + '" is not defined.'), delete this.validators[a], this
                                            },
                                            _setValidator: function(a, b, c) {
                                              "object" != typeof b && (b = {
                                                fn: b,
                                                priority: c
                                              }), b.validate || (b = new n(b)), this.validators[a] = b;
                                              for (var d in b.messages || {}) this.addMessage(d, a, b.messages[d]);
                                              return this
                                            },
                                            getErrorMessage: function(a) {
                                              var b;
                                              if ("type" === a.name) {
                                                b = (this.catalog[this.locale][a.name] || {})[a.requirements]
                                              } else b = this.formatMessage(this.catalog[this.locale][a.name], a.requirements);
                                              return b || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
                                            },
                                            formatMessage: function(a, b) {
                                              if ("object" == typeof b) {
                                                for (var c in b) a = this.formatMessage(a, b[c]);
                                                return a
                                              }
                                              return "string" == typeof a ? a.replace(/%s/i, b) : ""
                                            },
                                            validators: {
                                              notblank: {
                                                validateString: function(a) {
                                                  return /\S/.test(a)
                                                },
                                                priority: 2
                                              },
                                              required: {
                                                validateMultiple: function(a) {
                                                  return a.length > 0
                                                },
                                                validateString: function(a) {
                                                  return /\S/.test(a)
                                                },
                                                priority: 512
                                              },
                                              type: {
                                                validateString: function(a, b) {
                                                  var c = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                                                    d = c.step,
                                                    e = void 0 === d ? "1" : d,
                                                    f = c.base,
                                                    g = void 0 === f ? 0 : f,
                                                    h = p[b];
                                                  if (!h) throw new Error("validator type `" + b + "` is not supported");
                                                  if (!h.test(a)) return !1;
                                                  if ("number" === b && !/^any$/i.test(e || "")) {
                                                    var i = Number(a),
                                                      j = Math.max(q(e), q(g));
                                                    if (q(i) > j) return !1;
                                                    var k = function(a) {
                                                      return Math.round(a * Math.pow(10, j))
                                                    };
                                                    if ((k(i) - k(g)) % k(e) != 0) return !1
                                                  }
                                                  return !0
                                                },
                                                requirementType: {
                                                  "": "string",
                                                  step: "string",
                                                  base: "number"
                                                },
                                                priority: 256
                                              },
                                              pattern: {
                                                validateString: function(a, b) {
                                                  return b.test(a)
                                                },
                                                requirementType: "regexp",
                                                priority: 64
                                              },
                                              minlength: {
                                                validateString: function(a, b) {
                                                  return a.length >= b
                                                },
                                                requirementType: "integer",
                                                priority: 30
                                              },
                                              maxlength: {
                                                validateString: function(a, b) {
                                                  return a.length <= b
                                                },
                                                requirementType: "integer",
                                                priority: 30
                                              },
                                              length: {
                                                validateString: function(a, b, c) {
                                                  return a.length >= b && a.length <= c
                                                },
                                                requirementType: ["integer", "integer"],
                                                priority: 30
                                              },
                                              mincheck: {
                                                validateMultiple: function(a, b) {
                                                  return a.length >= b
                                                },
                                                requirementType: "integer",
                                                priority: 30
                                              },
                                              maxcheck: {
                                                validateMultiple: function(a, b) {
                                                  return a.length <= b
                                                },
                                                requirementType: "integer",
                                                priority: 30
                                              },
                                              check: {
                                                validateMultiple: function(a, b, c) {
                                                  return a.length >= b && a.length <= c
                                                },
                                                requirementType: ["integer", "integer"],
                                                priority: 30
                                              },
                                              min: {
                                                validateNumber: function(a, b) {
                                                  return a >= b
                                                },
                                                requirementType: "number",
                                                priority: 30
                                              },
                                              max: {
                                                validateNumber: function(a, b) {
                                                  return b >= a
                                                },
                                                requirementType: "number",
                                                priority: 30
                                              },
                                              range: {
                                                validateNumber: function(a, b, c) {
                                                  return a >= b && c >= a
                                                },
                                                requirementType: ["number", "number"],
                                                priority: 30
                                              },
                                              equalto: {
                                                validateString: function(b, c) {
                                                  var d = a(c);
                                                  return d.length ? b === d.val() : b === c
                                                },
                                                priority: 256
                                              }
                                            }
                                          };
                                          var r = {},
                                            s = function a(b, c, d) {
                                              for (var e = [], f = [], g = 0; g < b.length; g++) {
                                                for (var h = !1, i = 0; i < c.length; i++)
                                                  if (b[g].assert.name === c[i].assert.name) {
                                                    h = !0;
                                                    break
                                                  } h ? f.push(b[g]) : e.push(b[g])
                                              }
                                              return {
                                                kept: f,
                                                added: e,
                                                removed: d ? [] : a(c, b, !0).added
                                              }
                                            };
                                          r.Form = {
                                            _actualizeTriggers: function() {
                                              var a = this;
                                              this.$element.on("submit.Parsley", function(b) {
                                                a.onSubmitValidate(b)
                                              }), this.$element.on("click.Parsley", 'input[type="submit"], button[type="submit"]', function(b) {
                                                a.onSubmitButton(b)
                                              }), !1 !== this.options.uiEnabled && this.$element.attr("novalidate", "")
                                            },
                                            focus: function() {
                                              if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null;
                                              for (var a = 0; a < this.fields.length; a++) {
                                                var b = this.fields[a];
                                                if (!0 !== b.validationResult && b.validationResult.length > 0 && void 0 === b.options.noFocus && (this._focusedField = b.$element, "first" === this.options.focus)) break
                                              }
                                              return null === this._focusedField ? null : this._focusedField.focus()
                                            },
                                            _destroyUI: function() {
                                              this.$element.off(".Parsley")
                                            }
                                          }, r.Field = {
                                            _reflowUI: function() {
                                              if (this._buildUI(), this._ui) {
                                                var a = s(this.validationResult, this._ui.lastValidationResult);
                                                this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(a), this._actualizeTriggers(), !a.kept.length && !a.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
                                              }
                                            },
                                            getErrorsMessages: function() {
                                              if (!0 === this.validationResult) return [];
                                              for (var a = [], b = 0; b < this.validationResult.length; b++) a.push(this.validationResult[b].errorMessage || this._getErrorMessage(this.validationResult[b].assert));
                                              return a
                                            },
                                            addError: function(a) {
                                              var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                                c = b.message,
                                                d = b.assert,
                                                e = b.updateClass,
                                                f = void 0 === e || e;
                                              this._buildUI(), this._addError(a, {
                                                message: c,
                                                assert: d
                                              }), f && this._errorClass()
                                            },
                                            updateError: function(a) {
                                              var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                                c = b.message,
                                                d = b.assert,
                                                e = b.updateClass,
                                                f = void 0 === e || e;
                                              this._buildUI(), this._updateError(a, {
                                                message: c,
                                                assert: d
                                              }), f && this._errorClass()
                                            },
                                            removeError: function(a) {
                                              var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                                c = b.updateClass,
                                                d = void 0 === c || c;
                                              this._buildUI(), this._removeError(a), d && this._manageStatusClass()
                                            },
                                            _manageStatusClass: function() {
                                              this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
                                            },
                                            _manageErrorsMessages: function(b) {
                                              if (void 0 === this.options.errorsMessagesDisabled) {
                                                if (void 0 !== this.options.errorMessage) return b.added.length || b.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(a(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                                                for (var c = 0; c < b.removed.length; c++) this._removeError(b.removed[c].assert.name);
                                                for (c = 0; c < b.added.length; c++) this._addError(b.added[c].assert.name, {
                                                  message: b.added[c].errorMessage,
                                                  assert: b.added[c].assert
                                                });
                                                for (c = 0; c < b.kept.length; c++) this._updateError(b.kept[c].assert.name, {
                                                  message: b.kept[c].errorMessage,
                                                  assert: b.kept[c].assert
                                                })
                                              }
                                            },
                                            _addError: function(b, c) {
                                              var d = c.message,
                                                e = c.assert;
                                              this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(a(this.options.errorTemplate).addClass("parsley-" + b).html(d || this._getErrorMessage(e)))
                                            },
                                            _updateError: function(a, b) {
                                              var c = b.message,
                                                d = b.assert;
                                              this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + a).html(c || this._getErrorMessage(d))
                                            },
                                            _removeError: function(a) {
                                              this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + a).remove()
                                            },
                                            _getErrorMessage: function(a) {
                                              var b = a.name + "Message";
                                              return void 0 !== this.options[b] ? window.Parsley.formatMessage(this.options[b], a.requirements) : window.Parsley.getErrorMessage(a)
                                            },
                                            _buildUI: function() {
                                              if (!this._ui && !1 !== this.options.uiEnabled) {
                                                var b = {};
                                                this.$element.attr(this.options.namespace + "id", this.__id__), b.$errorClassHandler = this._manageClassHandler(), b.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), b.$errorsWrapper = a(this.options.errorsWrapper).attr("id", b.errorsWrapperId), b.lastValidationResult = [], b.validationInformationVisible = !1, this._ui = b
                                              }
                                            },
                                            _manageClassHandler: function() {
                                              if ("string" == typeof this.options.classHandler && a(this.options.classHandler).length) return a(this.options.classHandler);
                                              var b = this.options.classHandler.call(this, this);
                                              return void 0 !== b && b.length ? b : !this.options.multiple || this.$element.is("select") ? this.$element : this.$element.parent()
                                            },
                                            _insertErrorWrapper: function() {
                                              var b;
                                              if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
                                              if ("string" == typeof this.options.errorsContainer) {
                                                if (a(this.options.errorsContainer).length) return a(this.options.errorsContainer).append(this._ui.$errorsWrapper);
                                                g.warn("The errors container `" + this.options.errorsContainer + "` does not exist in DOM")
                                              } else "function" == typeof this.options.errorsContainer && (b = this.options.errorsContainer.call(this, this));
                                              if (void 0 !== b && b.length) return b.append(this._ui.$errorsWrapper);
                                              var c = this.$element;
                                              return this.options.multiple && (c = c.parent()), c.after(this._ui.$errorsWrapper)
                                            },
                                            _actualizeTriggers: function() {
                                              var a = this,
                                                b = this._findRelated();
                                              b.off(".Parsley"), this._failedOnce ? b.on(g.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
                                                a.validate()
                                              }) : b.on(g.namespaceEvents(this.options.trigger, "Parsley"), function(b) {
                                                a._eventValidate(b)
                                              })
                                            },
                                            _eventValidate: function(a) {
                                              (!/key|input/.test(a.type) || this._ui && this._ui.validationInformationVisible || !(this.getValue().length <= this.options.validationThreshold)) && this.validate()
                                            },
                                            _resetUI: function() {
                                              this._failedOnce = !1, this._actualizeTriggers(), void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
                                            },
                                            _destroyUI: function() {
                                              this._resetUI(), void 0 !== this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
                                            },
                                            _successClass: function() {
                                              this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
                                            },
                                            _errorClass: function() {
                                              this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
                                            },
                                            _resetClass: function() {
                                              this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
                                            }
                                          };
                                          var t = function(b, c, d) {
                                              this.__class__ = "ParsleyForm", this.$element = a(b), this.domOptions = c, this.options = d, this.parent = window.Parsley, this.fields = [], this.validationResult = null
                                            },
                                            u = {
                                              pending: null,
                                              resolved: !0,
                                              rejected: !1
                                            };
                                          t.prototype = {
                                            onSubmitValidate: function(a) {
                                              var b = this;
                                              if (!0 !== a.parsley) {
                                                var c = this._$submitSource || this.$element.find('input[type="submit"], button[type="submit"]').first();
                                                if (this._$submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !c.is("[formnovalidate]")) {
                                                  var d = this.whenValidate({
                                                    event: a
                                                  });
                                                  "resolved" === d.state() && !1 !== this._trigger("submit") || (a.stopImmediatePropagation(), a.preventDefault(), "pending" === d.state() && d.done(function() {
                                                    b._submit(c)
                                                  }))
                                                }
                                              }
                                            },
                                            onSubmitButton: function(b) {
                                              this._$submitSource = a(b.target)
                                            },
                                            _submit: function(b) {
                                              if (!1 !== this._trigger("submit")) {
                                                if (b) {
                                                  var c = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                                                  0 === c.length && (c = a('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), c.attr({
                                                    name: b.attr("name"),
                                                    value: b.attr("value")
                                                  })
                                                }
                                                this.$element.trigger(a.extend(a.Event("submit"), {
                                                  parsley: !0
                                                }))
                                              }
                                            },
                                            validate: function(b) {
                                              if (arguments.length >= 1 && !a.isPlainObject(b)) {
                                                g.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                                                var c = _slice.call(arguments);
                                                b = {
                                                  group: c[0],
                                                  force: c[1],
                                                  event: c[2]
                                                }
                                              }
                                              return u[this.whenValidate(b).state()]
                                            },
                                            whenValidate: function() {
                                              var b, c = this,
                                                d = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                                e = d.group,
                                                f = d.force,
                                                h = d.event;
                                              this.submitEvent = h, h && (this.submitEvent = a.extend({}, h, {
                                                preventDefault: function() {
                                                  g.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), c.validationResult = !1
                                                }
                                              })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
                                              var i = this._withoutReactualizingFormOptions(function() {
                                                return a.map(c.fields, function(a) {
                                                  return a.whenValidate({
                                                    force: f,
                                                    group: e
                                                  })
                                                })
                                              });
                                              return (b = a.when.apply(a, _toConsumableArray(i)).done(function() {
                                                c._trigger("success")
                                              }).fail(function() {
                                                c.validationResult = !1, c.focus(), c._trigger("error")
                                              }).always(function() {
                                                c._trigger("validated")
                                              })).pipe.apply(b, _toConsumableArray(this._pipeAccordingToValidationResult()))
                                            },
                                            isValid: function(b) {
                                              if (arguments.length >= 1 && !a.isPlainObject(b)) {
                                                g.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                                                var c = _slice.call(arguments);
                                                b = {
                                                  group: c[0],
                                                  force: c[1]
                                                }
                                              }
                                              return u[this.whenValid(b).state()]
                                            },
                                            whenValid: function() {
                                              var b = this,
                                                c = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                                d = c.group,
                                                e = c.force;
                                              this._refreshFields();
                                              var f = this._withoutReactualizingFormOptions(function() {
                                                return a.map(b.fields, function(a) {
                                                  return a.whenValid({
                                                    group: d,
                                                    force: e
                                                  })
                                                })
                                              });
                                              return a.when.apply(a, _toConsumableArray(f))
                                            },
                                            _refreshFields: function() {
                                              return this.actualizeOptions()._bindFields()
                                            },
                                            _bindFields: function() {
                                              var b = this,
                                                c = this.fields;
                                              return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
                                                b.$element.find(b.options.inputs).not(b.options.excluded).each(function(a, c) {
                                                  var d = new window.Parsley.Factory(c, {}, b);
                                                  "ParsleyField" !== d.__class__ && "ParsleyFieldMultiple" !== d.__class__ || !0 === d.options.excluded || void 0 === b.fieldsMappedById[d.__class__ + "-" + d.__id__] && (b.fieldsMappedById[d.__class__ + "-" + d.__id__] = d, b.fields.push(d))
                                                }), a(c).not(b.fields).each(function(a, b) {
                                                  b._trigger("reset")
                                                })
                                              }), this
                                            },
                                            _withoutReactualizingFormOptions: function(a) {
                                              var b = this.actualizeOptions;
                                              this.actualizeOptions = function() {
                                                return this
                                              };
                                              var c = a();
                                              return this.actualizeOptions = b, c
                                            },
                                            _trigger: function(a) {
                                              return this.trigger("form:" + a)
                                            }
                                          };
                                          var v = function(b, c, d, e, f) {
                                              if (!/ParsleyField/.test(b.__class__)) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
                                              var g = window.Parsley._validatorRegistry.validators[c],
                                                h = new n(g);
                                              a.extend(this, {
                                                validator: h,
                                                name: c,
                                                requirements: d,
                                                priority: e || b.options[c + "Priority"] || h.priority,
                                                isDomConstraint: !0 === f
                                              }), this._parseRequirements(b.options)
                                            },
                                            w = function(a) {
                                              return a[0].toUpperCase() + a.slice(1)
                                            };
                                          v.prototype = {
                                            validate: function(a, b) {
                                              var c = this.requirementList.slice(0);
                                              return c.unshift(a), c.push(b), this.validator.validate.apply(this.validator, c)
                                            },
                                            _parseRequirements: function(a) {
                                              var b = this;
                                              this.requirementList = this.validator.parseRequirements(this.requirements, function(c) {
                                                return a[b.name + w(c)]
                                              })
                                            }
                                          };
                                          var x = function(b, c, d, e) {
                                              this.__class__ = "ParsleyField", this.$element = a(b), void 0 !== e && (this.parent = e), this.options = d, this.domOptions = c, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
                                            },
                                            y = {
                                              pending: null,
                                              resolved: !0,
                                              rejected: !1
                                            };
                                          x.prototype = {
                                            validate: function(b) {
                                              arguments.length >= 1 && !a.isPlainObject(b) && (g.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), b = {
                                                options: b
                                              });
                                              var c = this.whenValidate(b);
                                              if (!c) return !0;
                                              switch (c.state()) {
                                                case "pending":
                                                  return null;
                                                case "resolved":
                                                  return !0;
                                                case "rejected":
                                                  return this.validationResult
                                              }
                                            },
                                            whenValidate: function() {
                                              var a, b = this,
                                                c = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                                d = c.force,
                                                e = c.group;
                                              return this.refreshConstraints(), !e || this._isInGroup(e) ? (this.value = this.getValue(), this._trigger("validate"), (a = this.whenValid({
                                                force: d,
                                                value: this.value,
                                                _refreshed: !0
                                              }).always(function() {
                                                b._reflowUI()
                                              }).done(function() {
                                                b._trigger("success")
                                              }).fail(function() {
                                                b._trigger("error")
                                              }).always(function() {
                                                b._trigger("validated")
                                              })).pipe.apply(a, _toConsumableArray(this._pipeAccordingToValidationResult()))) : void 0
                                            },
                                            hasConstraints: function() {
                                              return 0 !== this.constraints.length
                                            },
                                            needsValidation: function(a) {
                                              return void 0 === a && (a = this.getValue()), !(!a.length && !this._isRequired() && void 0 === this.options.validateIfEmpty)
                                            },
                                            _isInGroup: function(b) {
                                              return a.isArray(this.options.group) ? -1 !== a.inArray(b, this.options.group) : this.options.group === b
                                            },
                                            isValid: function(b) {
                                              if (arguments.length >= 1 && !a.isPlainObject(b)) {
                                                g.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                                                var c = _slice.call(arguments);
                                                b = {
                                                  force: c[0],
                                                  value: c[1]
                                                }
                                              }
                                              var d = this.whenValid(b);
                                              return !d || y[d.state()]
                                            },
                                            whenValid: function() {
                                              var b = this,
                                                c = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                                d = c.force,
                                                e = void 0 !== d && d,
                                                f = c.value,
                                                g = c.group;
                                              if (c._refreshed || this.refreshConstraints(), !g || this._isInGroup(g)) {
                                                if (this.validationResult = !0, !this.hasConstraints()) return a.when();
                                                if ((void 0 === f || null === f) && (f = this.getValue()), !this.needsValidation(f) && !0 !== e) return a.when();
                                                var h = this._getGroupedConstraints(),
                                                  i = [];
                                                return a.each(h, function(c, d) {
                                                  var e = a.when.apply(a, _toConsumableArray(a.map(d, function(a) {
                                                    return b._validateConstraint(f, a)
                                                  })));
                                                  return i.push(e), "rejected" !== e.state() && void 0
                                                }), a.when.apply(a, i)
                                              }
                                            },
                                            _validateConstraint: function(b, c) {
                                              var d = this,
                                                e = c.validate(b, this);
                                              return !1 === e && (e = a.Deferred().reject()), a.when(e).fail(function(a) {
                                                d.validationResult instanceof Array || (d.validationResult = []), d.validationResult.push({
                                                  assert: c,
                                                  errorMessage: "string" == typeof a && a
                                                })
                                              })
                                            },
                                            getValue: function() {
                                              var a;
                                              return a = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val(), void 0 === a || null === a ? "" : this._handleWhitespace(a)
                                            },
                                            refreshConstraints: function() {
                                              return this.actualizeOptions()._bindConstraints()
                                            },
                                            addConstraint: function(a, b, c, d) {
                                              if (window.Parsley._validatorRegistry.validators[a]) {
                                                var e = new v(this, a, b, c, d);
                                                "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e
                                              }
                                              return this
                                            },
                                            removeConstraint: function(a) {
                                              for (var b = 0; b < this.constraints.length; b++)
                                                if (a === this.constraints[b].name) {
                                                  this.constraints.splice(b, 1);
                                                  break
                                                } return delete this.constraintsByName[a], this
                                            },
                                            updateConstraint: function(a, b, c) {
                                              return this.removeConstraint(a).addConstraint(a, b, c)
                                            },
                                            _bindConstraints: function() {
                                              for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) !1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]), b[this.constraints[c].name] = this.constraints[c]);
                                              this.constraints = a, this.constraintsByName = b;
                                              for (var d in this.options) this.addConstraint(d, this.options[d], void 0, !0);
                                              return this._bindHtml5Constraints()
                                            },
                                            _bindHtml5Constraints: function() {
                                              (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), void 0 !== this.$element.attr("min") && void 0 !== this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : void 0 !== this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : void 0 !== this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), void 0 !== this.$element.attr("minlength") && void 0 !== this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : void 0 !== this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : void 0 !== this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
                                              var a = this.$element.attr("type");
                                              return void 0 === a ? this : "number" === a ? this.addConstraint("type", ["number", {
                                                step: this.$element.attr("step"),
                                                base: this.$element.attr("min") || this.$element.attr("value")
                                              }], void 0, !0) : /^(email|url|range)$/i.test(a) ? this.addConstraint("type", a, void 0, !0) : this
                                            },
                                            _isRequired: function() {
                                              return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
                                            },
                                            _trigger: function(a) {
                                              return this.trigger("field:" + a)
                                            },
                                            _handleWhitespace: function(a) {
                                              return !0 === this.options.trimValue && g.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (a = a.replace(/\s{2,}/g, " ")), ("trim" === this.options.whitespace || "squish" === this.options.whitespace || !0 === this.options.trimValue) && (a = g.trimString(a)), a
                                            },
                                            _getGroupedConstraints: function() {
                                              if (!1 === this.options.priorityEnabled) return [this.constraints];
                                              for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) {
                                                var d = this.constraints[c].priority;
                                                b[d] || a.push(b[d] = []), b[d].push(this.constraints[c])
                                              }
                                              return a.sort(function(a, b) {
                                                return b[0].priority - a[0].priority
                                              }), a
                                            }
                                          };
                                          var z = x,
                                            A = function() {
                                              this.__class__ = "ParsleyFieldMultiple"
                                            };
                                          A.prototype = {
                                            addElement: function(a) {
                                              return this.$elements.push(a), this
                                            },
                                            refreshConstraints: function() {
                                              var b;
                                              if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
                                              for (var c = 0; c < this.$elements.length; c++)
                                                if (a("html").has(this.$elements[c]).length) {
                                                  b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                                                  for (var d = 0; d < b.length; d++) this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
                                                } else this.$elements.splice(c, 1);
                                              return this
                                            },
                                            getValue: function() {
                                              if ("function" == typeof this.options.value) return this.options.value(this);
                                              if (void 0 !== this.options.value) return this.options.value;
                                              if (this.$element.is("input[type=radio]")) return this._findRelated().filter(":checked").val() || "";
                                              if (this.$element.is("input[type=checkbox]")) {
                                                var b = [];
                                                return this._findRelated().filter(":checked").each(function() {
                                                  b.push(a(this).val())
                                                }), b
                                              }
                                              return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
                                            },
                                            _init: function() {
                                              return this.$elements = [this.$element], this
                                            }
                                          };
                                          var B = function(b, c, d) {
                                            this.$element = a(b);
                                            var e = this.$element.data("Parsley");
                                            if (e) return void 0 !== d && e.parent === window.Parsley && (e.parent = d, e._resetOptions(e.options)), e;
                                            if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
                                            if (void 0 !== d && "ParsleyForm" !== d.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
                                            return this.parent = d || window.Parsley, this.init(c)
                                          };
                                          B.prototype = {
                                            init: function(a) {
                                              return this.__class__ = "Parsley", this.__version__ = "2.3.8", this.__id__ = g.generateID(), this._resetOptions(a), this.$element.is("form") || g.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
                                            },
                                            isMultiple: function() {
                                              return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && void 0 !== this.$element.attr("multiple")
                                            },
                                            handleMultiple: function() {
                                              var b, c, d = this;
                                              if (this.options.multiple || (void 0 !== this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = b = this.$element.attr("name") : void 0 !== this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && void 0 !== this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
                                              if (!this.options.multiple) return g.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
                                              this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), void 0 !== b && a('input[name="' + b + '"]').each(function(b, c) {
                                                a(c).is("input[type=radio], input[type=checkbox]") && a(c).attr(d.options.namespace + "multiple", d.options.multiple)
                                              });
                                              for (var e = this._findRelated(), f = 0; f < e.length; f++)
                                                if (void 0 !== (c = a(e.get(f)).data("Parsley"))) {
                                                  this.$element.data("ParsleyFieldMultiple") || c.addElement(this.$element);
                                                  break
                                                } return this.bind("parsleyField", !0), c || this.bind("parsleyFieldMultiple")
                                            },
                                            bind: function(b, c) {
                                              var d;
                                              switch (b) {
                                                case "parsleyForm":
                                                  d = a.extend(new t(this.$element, this.domOptions, this.options), new i, window.ParsleyExtend)._bindFields();
                                                  break;
                                                case "parsleyField":
                                                  d = a.extend(new z(this.$element, this.domOptions, this.options, this.parent), new i, window.ParsleyExtend);
                                                  break;
                                                case "parsleyFieldMultiple":
                                                  d = a.extend(new z(this.$element, this.domOptions, this.options, this.parent), new A, new i, window.ParsleyExtend)._init();
                                                  break;
                                                default:
                                                  throw new Error(b + "is not a supported Parsley type")
                                              }
                                              return this.options.multiple && g.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), void 0 !== c ? (this.$element.data("ParsleyFieldMultiple", d), d) : (this.$element.data("Parsley", d), d._actualizeTriggers(), d._trigger("init"), d)
                                            }
                                          };
                                          var C = a.fn.jquery.split(".");
                                          if (parseInt(C[0]) <= 1 && parseInt(C[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
                                          C.forEach || g.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
                                          var D = a.extend(new i, {
                                            $element: a(document),
                                            actualizeOptions: null,
                                            _resetOptions: null,
                                            Factory: B,
                                            version: "2.3.8"
                                          });
                                          a.extend(z.prototype, r.Field, i.prototype), a.extend(t.prototype, r.Form, i.prototype), a.extend(B.prototype, i.prototype), a.fn.parsley = a.fn.psly = function(b) {
                                            if (this.length > 1) {
                                              var c = [];
                                              return this.each(function() {
                                                c.push(a(this).parsley(b))
                                              }), c
                                            }
                                            return a(this).length ? new B(this, b) : void g.warn("You must bind Parsley on an existing element.")
                                          }, void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}), D.options = a.extend(g.objectCreate(h), window.ParsleyConfig), window.ParsleyConfig = D.options, window.Parsley = window.psly = D, window.ParsleyUtils = g;
                                          var E = window.Parsley._validatorRegistry = new o(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
                                          window.ParsleyValidator = {}, a.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "), function(b, c) {
                                            window.Parsley[c] = a.proxy(E, c), window.ParsleyValidator[c] = function() {
                                              var a;
                                              return g.warnOnce("Accessing the method '" + c + "' through ParsleyValidator is deprecated. Simply call 'window.Parsley." + c + "(...)'"), (a = window.Parsley)[c].apply(a, arguments)
                                            }
                                          }), window.Parsley.UI = r, window.ParsleyUI = {
                                            removeError: function(a, b, c) {
                                              var d = !0 !== c;
                                              return g.warnOnce("Accessing ParsleyUI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), a.removeError(b, {
                                                updateClass: d
                                              })
                                            },
                                            getErrorsMessages: function(a) {
                                              return g.warnOnce("Accessing ParsleyUI is deprecated. Call 'getErrorsMessages' on the instance directly."), a.getErrorsMessages()
                                            }
                                          }, a.each("addError updateError".split(" "), function(a, b) {
                                            window.ParsleyUI[b] = function(a, c, d, e, f) {
                                              var h = !0 !== f;
                                              return g.warnOnce("Accessing ParsleyUI is deprecated. Call '" + b + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), a[b](c, {
                                                message: d,
                                                assert: e,
                                                updateClass: h
                                              })
                                            }
                                          }), /firefox|msie/i.test(navigator.userAgent) && a(document).on("change", "select", function(b) {
                                            a(b.target).trigger("input")
                                          }), !1 !== window.ParsleyConfig.autoBind && a(function() {
                                            a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
                                          });
                                          var F = a({}),
                                            G = function() {
                                              g.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
                                            },
                                            H = "parsley:";
                                          return a.listen = function(a, d) {
                                            var e;
                                            if (G(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (e = arguments[1], d = arguments[2]), "function" != typeof d) throw new Error("Wrong parameters");
                                            window.Parsley.on(c(a), b(d, e))
                                          }, a.listenTo = function(a, d, e) {
                                            if (G(), !(a instanceof z || a instanceof t)) throw new Error("Must give Parsley instance");
                                            if ("string" != typeof d || "function" != typeof e) throw new Error("Wrong parameters");
                                            a.on(c(d), b(e))
                                          }, a.unsubscribe = function(a, b) {
                                            if (G(), "string" != typeof a || "function" != typeof b) throw new Error("Wrong arguments");
                                            window.Parsley.off(c(a), b.parsleyAdaptedCallback)
                                          }, a.unsubscribeTo = function(a, b) {
                                            if (G(), !(a instanceof z || a instanceof t)) throw new Error("Must give Parsley instance");
                                            a.off(c(b))
                                          }, a.unsubscribeAll = function(b) {
                                            G(), window.Parsley.off(c(b)), a("form,input,textarea,select").each(function() {
                                              var d = a(this).data("Parsley");
                                              d && d.off(c(b))
                                            })
                                          }, a.emit = function(a, b) {
                                            var d;
                                            G();
                                            var e = b instanceof z || b instanceof t,
                                              f = Array.prototype.slice.call(arguments, e ? 2 : 1);
                                            f.unshift(c(a)), e || (b = window.Parsley), (d = b).trigger.apply(d, _toConsumableArray(f))
                                          }, a.extend(!0, D, {
                                            asyncValidators: {
                                              default: {
                                                fn: function(a) {
                                                  return a.status >= 200 && a.status < 300
                                                },
                                                url: !1
                                              },
                                              reverse: {
                                                fn: function(a) {
                                                  return a.status < 200 || a.status >= 300
                                                },
                                                url: !1
                                              }
                                            },
                                            addAsyncValidator: function(a, b, c, d) {
                                              return D.asyncValidators[a] = {
                                                fn: b,
                                                url: c || !1,
                                                options: d || {}
                                              }, this
                                            }
                                          }), D.addValidator("remote", {
                                            requirementType: {
                                              "": "string",
                                              validator: "string",
                                              reverse: "boolean",
                                              options: "object"
                                            },
                                            validateString: function(b, c, d, e) {
                                              var f, g, h = {},
                                                i = d.validator || (!0 === d.reverse ? "reverse" : "default");
                                              if (void 0 === D.asyncValidators[i]) throw new Error("Calling an undefined async validator: `" + i + "`");
                                              c = D.asyncValidators[i].url || c, c.indexOf("{value}") > -1 ? c = c.replace("{value}", encodeURIComponent(b)) : h[e.$element.attr("name") || e.$element.attr("id")] = b;
                                              var j = a.extend(!0, d.options || {}, D.asyncValidators[i].options);
                                              f = a.extend(!0, {}, {
                                                url: c,
                                                data: h,
                                                type: "GET"
                                              }, j), e.trigger("field:ajaxoptions", e, f), g = a.param(f), void 0 === D._remoteCache && (D._remoteCache = {});
                                              var k = D._remoteCache[g] = D._remoteCache[g] || a.ajax(f),
                                                l = function() {
                                                  var b = D.asyncValidators[i].fn.call(e, k, c, d);
                                                  return b || (b = a.Deferred().reject()), a.when(b)
                                                };
                                              return k.then(l, l)
                                            },
                                            priority: -1
                                          }), D.on("form:submit", function() {
                                            D._remoteCache = {}
                                          }), window.ParsleyExtend.addAsyncValidator = function() {
                                            return ParsleyUtils.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), D.addAsyncValidator.apply(D, arguments)
                                          }, D.addMessages("en", {
                                            defaultMessage: "This value seems to be invalid.",
                                            type: {
                                              email: "This value should be a valid email.",
                                              url: "This value should be a valid url.",
                                              number: "This value should be a valid number.",
                                              integer: "This value should be a valid integer.",
                                              digits: "This value should be digits.",
                                              alphanum: "This value should be alphanumeric."
                                            },
                                            notblank: "This value should not be blank.",
                                            required: "This value is required.",
                                            pattern: "This value seems to be invalid.",
                                            min: "This value should be greater than or equal to %s.",
                                            max: "This value should be lower than or equal to %s.",
                                            range: "This value should be between %s and %s.",
                                            minlength: "This value is too short. It should have %s characters or more.",
                                            maxlength: "This value is too long. It should have %s characters or fewer.",
                                            length: "This value length is invalid. It should be between %s and %s characters long.",
                                            mincheck: "You must select at least %s choices.",
                                            maxcheck: "You must select %s choices or fewer.",
                                            check: "You must select between %s and %s choices.",
                                            equalto: "This value should be the same."
                                          }), D.setLocale("en"), D
                                        }),
                                        function(a, b) {
                                          "use strict";

                                          function c(c, d, f, h, i) {
                                            function j() {
                                              y = a.devicePixelRatio > 1, f = k(f), d.delay >= 0 && setTimeout(function() {
                                                l(!0)
                                              }, d.delay), (d.delay < 0 || d.combined) && (h.e = s(d.throttle, function(a) {
                                                "resize" === a.type && (w = x = -1), l(a.all)
                                              }), h.a = function(a) {
                                                a = k(a), f.push.apply(f, a)
                                              }, h.g = function() {
                                                return f = e(f).filter(function() {
                                                  return !e(this).data(d.loadedName)
                                                })
                                              }, h.f = function(a) {
                                                for (var b = 0; b < a.length; b++) {
                                                  var c = f.filter(function() {
                                                    return this === a[b]
                                                  });
                                                  c.length && l(!1, c)
                                                }
                                              }, l(), e(d.appendScroll).on("scroll." + i + " resize." + i, h.e))
                                            }

                                            function k(a) {
                                              var f = d.defaultImage,
                                                g = d.placeholder,
                                                h = d.imageBase,
                                                i = d.srcsetAttribute,
                                                j = d.loaderAttribute,
                                                k = d._f || {};
                                              a = e(a).filter(function() {
                                                var a = e(this),
                                                  c = q(this);
                                                return !a.data(d.handledName) && (a.attr(d.attribute) || a.attr(i) || a.attr(j) || k[c] !== b)
                                              }).data("plugin_" + d.name, c);
                                              for (var l = 0, m = a.length; l < m; l++) {
                                                var n = e(a[l]),
                                                  o = q(a[l]),
                                                  p = n.attr(d.imageBaseAttribute) || h;
                                                o === C && p && n.attr(i) && n.attr(i, r(n.attr(i), p)), k[o] === b || n.attr(j) || n.attr(j, k[o]), o === C && f && !n.attr(D) ? n.attr(D, f) : o === C || !g || n.css(G) && "none" !== n.css(G) || n.css(G, "url('" + g + "')")
                                              }
                                              return a
                                            }

                                            function l(a, b) {
                                              if (!f.length) return void(d.autoDestroy && c.destroy());
                                              for (var g = b || f, h = !1, i = d.imageBase || "", j = d.srcsetAttribute, k = d.handledName, l = 0; l < g.length; l++)
                                                if (a || b || n(g[l])) {
                                                  var o = e(g[l]),
                                                    p = q(g[l]),
                                                    r = o.attr(d.attribute),
                                                    s = o.attr(d.imageBaseAttribute) || i,
                                                    t = o.attr(d.loaderAttribute);
                                                  o.data(k) || d.visibleOnly && !o.is(":visible") || !((r || o.attr(j)) && (p === C && (s + r !== o.attr(D) || o.attr(j) !== o.attr(E)) || p !== C && s + r !== o.css(G)) || t) || (h = !0, o.data(k, !0), m(o, p, s, t))
                                                } h && (f = e(f).filter(function() {
                                                return !e(this).data(k)
                                              }))
                                            }

                                            function m(a, b, c, f) {
                                              ++v;
                                              var g = function() {
                                                u("onError", a), t(), g = e.noop
                                              };
                                              u("beforeLoad", a);
                                              var h = d.attribute,
                                                i = d.srcsetAttribute,
                                                j = d.sizesAttribute,
                                                k = d.retinaAttribute,
                                                l = d.removeAttribute,
                                                m = d.loadedName,
                                                n = a.attr(k);
                                              if (f) {
                                                var o = function() {
                                                  l && a.removeAttr(d.loaderAttribute), a.data(m, !0), u(z, a), setTimeout(t, 1), o = e.noop
                                                };
                                                a.off(B).one(B, g).one(A, o), u(f, a, function(b) {
                                                  b ? (a.off(A), o()) : (a.off(B), g())
                                                }) || a.trigger(B)
                                              } else {
                                                var p = e(new Image);
                                                p.one(B, g).one(A, function() {
                                                  a.hide(), b === C ? a.attr(F, p.attr(F)).attr(E, p.attr(E)).attr(D, p.attr(D)) : a.css(G, "url('" + p.attr(D) + "')"), a[d.effect](d.effectTime), l && (a.removeAttr(h + " " + i + " " + k + " " + d.imageBaseAttribute), j !== F && a.removeAttr(j)), a.data(m, !0), u(z, a), p.remove(), t()
                                                });
                                                var q = (y && n ? n : a.attr(h)) || "";
                                                p.attr(F, a.attr(j)).attr(E, a.attr(i)).attr(D, q ? c + q : null), p.complete && p.trigger(A)
                                              }
                                            }

                                            function n(a) {
                                              var b = a.getBoundingClientRect(),
                                                c = d.scrollDirection,
                                                e = d.threshold,
                                                f = p() + e > b.top && -e < b.bottom,
                                                g = o() + e > b.left && -e < b.right;
                                              return "vertical" === c ? f : "horizontal" === c ? g : f && g
                                            }

                                            function o() {
                                              return w >= 0 ? w : w = e(a).width()
                                            }

                                            function p() {
                                              return x >= 0 ? x : x = e(a).height()
                                            }

                                            function q(a) {
                                              return a.tagName.toLowerCase()
                                            }

                                            function r(a, b) {
                                              if (b) {
                                                var c = a.split(",");
                                                a = "";
                                                for (var d = 0, e = c.length; d < e; d++) a += b + c[d].trim() + (d !== e - 1 ? "," : "")
                                              }
                                              return a
                                            }

                                            function s(a, b) {
                                              var e, f = 0;
                                              return function(g, h) {
                                                function i() {
                                                  f = +new Date, b.call(c, g)
                                                }
                                                var j = +new Date - f;
                                                e && clearTimeout(e), j > a || !d.enableThrottle || h ? i() : e = setTimeout(i, a - j)
                                              }
                                            }

                                            function t() {
                                              --v, f.length || v || u("onFinishedAll")
                                            }

                                            function u(a, b, e) {
                                              return !!(a = d[a]) && (a.apply(c, [].slice.call(arguments, 1)), !0)
                                            }
                                            var v = 0,
                                              w = -1,
                                              x = -1,
                                              y = !1,
                                              z = "afterLoad",
                                              A = "load",
                                              B = "error",
                                              C = "img",
                                              D = "src",
                                              E = "srcset",
                                              F = "sizes",
                                              G = "background-image";
                                            "event" === d.bind || g ? j() : e(a).on(A + "." + i, j)
                                          }

                                          function d(d, g) {
                                            var h = this,
                                              i = e.extend({}, h.config, g),
                                              j = {},
                                              k = i.name + "-" + ++f;
                                            return h.config = function(a, c) {
                                              return c === b ? i[a] : (i[a] = c, h)
                                            }, h.addItems = function(a) {
                                              return j.a && j.a("string" === e.type(a) ? e(a) : a), h
                                            }, h.getItems = function() {
                                              return j.g ? j.g() : {}
                                            }, h.update = function(a) {
                                              return j.e && j.e({}, !a), h
                                            }, h.force = function(a) {
                                              return j.f && j.f("string" === e.type(a) ? e(a) : a), h
                                            }, h.loadAll = function() {
                                              return j.e && j.e({
                                                all: !0
                                              }, !0), h
                                            }, h.destroy = function() {
                                              return e(i.appendScroll).off("." + k, j.e), e(a).off("." + k), j = {}, b
                                            }, c(h, i, d, j, k), i.chainable ? d : h
                                          }
                                          var e = a.jQuery || a.Zepto,
                                            f = 0,
                                            g = !1;
                                          e.fn.Lazy = e.fn.lazy = function(a) {
                                            return new d(this, a)
                                          }, e.Lazy = e.lazy = function(a, c, f) {
                                            if (e.isFunction(c) && (f = c, c = []), e.isFunction(f)) {
                                              a = e.isArray(a) ? a : [a], c = e.isArray(c) ? c : [c];
                                              for (var g = d.prototype.config, h = g._f || (g._f = {}), i = 0, j = a.length; i < j; i++)(g[a[i]] === b || e.isFunction(g[a[i]])) && (g[a[i]] = f);
                                              for (var k = 0, l = c.length; k < l; k++) h[c[k]] = a[0]
                                            }
                                          }, d.prototype.config = {
                                            name: "lazy",
                                            chainable: !0,
                                            autoDestroy: !0,
                                            bind: "load",
                                            threshold: 500,
                                            visibleOnly: !1,
                                            appendScroll: a,
                                            scrollDirection: "both",
                                            imageBase: null,
                                            defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
                                            placeholder: null,
                                            delay: -1,
                                            combined: !1,
                                            attribute: "data-src",
                                            srcsetAttribute: "data-srcset",
                                            sizesAttribute: "data-sizes",
                                            retinaAttribute: "data-retina",
                                            loaderAttribute: "data-loader",
                                            imageBaseAttribute: "data-imagebase",
                                            removeAttribute: !0,
                                            handledName: "handled",
                                            loadedName: "loaded",
                                            effect: "show",
                                            effectTime: 0,
                                            enableThrottle: !0,
                                            throttle: 250,
                                            beforeLoad: b,
                                            afterLoad: b,
                                            onError: b,
                                            onFinishedAll: b
                                          }, e(a).on("load", function() {
                                            g = !0
                                          })
                                        }(window);