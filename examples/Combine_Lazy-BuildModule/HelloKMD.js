﻿(function (n) { function a(n, t, i) { var r = u.createElement("script"), e; i && (e = isFunction(i) ? i(n) : i, e && (r.charset = e)), v(r, t, n), r.async = !0, r.src = n, s = r, o ? f.insertBefore(r, o) : f.appendChild(r), s = null } function v(n, t, i) { function r(i) { n.onload = n.onerror = n.onreadystatechange = null, l.debug || f.removeChild(n), n = null, t(i) } var u = "onload" in n; u ? (n.onload = r, n.onerror = function () { throw "bad request!__" + i + "  404 (Not Found) "; }) : n.onreadystatechange = function () { /loaded|complete/.test(n.readyState) && r() } } var t = function (n) { this.thens = n || [], this.state = "", this._CONSTANT = { any: "any", number: "number", resolved: "resolved", rejected: "rejected", pending: "pending" } }, r, i; t.prototype = { resolve: function () { var f, s, c, i, l, r, u, e, o, h, n; if (this.state == this._CONSTANT.pending) { this.state = this._CONSTANT.resolved; return } if (this.state === "") { if (this.promiseArr) { for (n = 0, u = this.promiseArr.length; n < u; n++) this.promiseArr[n].resolveCount++; if (this.promiseArr[0].action !== this._CONSTANT.any) { if (this.resolveCount !== this.promiseArr.length) return } else if (this.resolveCount > 1) return } if (this.state = this._CONSTANT.resolved, this.thens) for (this.thens[0] && this.thens[0].finallyCB && this.thens[0].finallyCB.apply(null, arguments) ; f = this.thens.shift() ;) { if (typeof f === this._CONSTANT.number) { c = this, setTimeout(function () { var n = new t(c.thens); n.resolve() }, f); break } if (i = f.done, l = f.action, i) if (i instanceof Array) { for (r = [], n = 0, u = i.length; n < u; n++) e = i[n], e instanceof t ? (e.thens = this.thens, r.push(e)) : (o = e.apply(null, arguments), o instanceof t && (o.thens = this.thens, r.push(o))); if (h = r.length, h === 0) continue; else { for (n = 0; n < h; n++) r[n].promiseArr = r, r[n].action = l, r[n].resolveCount = 0; break } } else { if (i instanceof t) { i.thens = this.thens; break } else if (s = i.apply(null, arguments), s instanceof t) { s.thens = this.thens; break } continue } } } }, reject: function () { var n, i, r; if (this.state === "" && (!this.promiseArr || this.promiseArr[0].action !== this._CONSTANT.any || this.promiseArr[this.promiseArr.length - 1] === this) && (this.state = this._CONSTANT.rejected, this.thens)) for (this.thens[0] && this.thens[0].finallyCB && this.thens[0].finallyCB.apply(null, arguments) ; n = this.thens.shift() ;) { if (typeof n === this._CONSTANT.number) { r = this, setTimeout(function () { var n = new t(r.thens); n.resolve() }, n); break } if (n.fail) { if (i = n.fail.apply(null, arguments), i instanceof t) { i.thens = this.thens; break } continue } break } }, then: function (n, t, i) { return this.thens.push({ done: n, fail: t, progress: i }), this } }; var c = function (n) { var i = new t; if (n) if (arguments.length > 1) i.thens[0] = {}, i.thens[0].done = [], i.thens[0].done.push.apply(i.thens[0].done, arguments), setTimeout(function () { i.resolve() }, 1); else if (i = n(), i instanceof t) return i; return i }, u = document, l = {}, f = u.head || u.getElementsByTagName("head")[0] || u.documentElement, o = f.getElementsByTagName("base")[0], s; r = {}, r.get = function (n) { var t = c(); return i.modules[n] ? (setTimeout(function () { t.resolve(i.modules[n]) }, 0), t) : (a(n + ".js", function () { t.resolve(i.modules[n]) }), t) }, r.exec = function (n) { for (var u, o, s, r = 0, f = n.length; r < f; r++) { var t = n[r], e = [], h = new Function(t.a, t.b); for (u = 0, o = t.d.length; u < o; u++) e.push(i.modules[t.d[u]]); s = h.apply(null, e), i.modules[t.c] = s } }, n.kmdjs = r; var e = !1, y = /xyz/.test(function () { xyz }) ? /_super/ : /.*/, h = function () { }; h.extend = function (n) { function i() { !e && this.init && this.init.apply(this, arguments) } var o = this.prototype, f, t, r, u; e = !0, f = new this, e = !1; for (t in n) t != "statics" && (f[t] = typeof n[t] == "function" && typeof o[t] == "function" && y.test(n[t]) ? function (n, t) { return function () { var r = this._super, i; return this._super = o[n], i = t.apply(this, arguments), this._super = r, i } }(t, n[t]) : n[t]); for (r in this) this.hasOwnProperty(r) && r != "extend" && (i[r] = this[r]); if (n.statics) for (u in n.statics) n.statics.hasOwnProperty(u) && (i[u] = n.statics[u]); return i.prototype = f, i.prototype.constructor = i, i.extend = arguments.callee, i }, n.__class = h, i = {}, i.modules = {}, i.all = [{ "a": [], "b": "var t=__class.extend({statics:{getViewport:function(){var t=document.documentElement,e=document.body,n=window,i=document.createElement(\"div\");i.innerHTML=\" <link/><table></table><a href='/a'>a</a><input type='checkbox'/>\";var o=3!==i.firstChild.nodeType?{left:e.scrollLeft||t.scrollLeft,top:e.scrollTop||t.scrollTop}:{left:n.pageXOffset,top:n.pageYOffset},r=n.innerWidth?{width:n.innerWidth,height:n.innerHeight}:t&&t.clientWidth&&0!=t.clientWidth?{width:t.clientWidth,height:t.clientHeight}:{width:e.clientWidth,height:e.clientHeight};return[o.left,o.top,r.width,r.height]}}});return t", "c": "Util.Bom", "d": [] }, { "a": ["Bom"], "b": "var n=__class.extend({init:function(){var n=document.getElementById(\"crtBtn\"),t=[];n.onclick=function(){kmdjs.get(\"HelloKMD.Ball\").then(function(n){var o=new n(110,110,28,1,-2,\"KMD.js\");t.push(o)})};var o=Bom.getViewport();setInterval(function(){for(var n=0;n<t.length;n++){var i=t[n];(i.position.x+2*i.r>o[2]||i.position.x<0)&&(i.vx*=-1),(i.position.y+2*i.r>o[3]||i.position.y<0)&&(i.vy*=-1)}},100)}});return n", "c": "HelloKMD.Main", "d": ["Util.Bom"] }], r.exec(i.all), new i.modules["HelloKMD.Main"] })(this)