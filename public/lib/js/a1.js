!function (e) {
    function t(n) {
        if (r[n])return r[n].exports;
        var i = r[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var n = window.webpackJsonp;
    window.webpackJsonp = function (o, a) {
        for (var s, l, u = 0, c = []; u < o.length; u++)l = o[u], i[l] && c.push.apply(c, i[l]), i[l] = 0;
        for (s in a) {
            var f = a[s];
            switch (typeof f) {
                case"object":
                    e[s] = function (t) {
                        var n = t.slice(1), r = t[0];
                        return function (t, i, o) {
                            e[r].apply(this, [t, i, o].concat(n))
                        }
                    }(f);
                    break;
                case"function":
                    e[s] = f;
                    break;
                default:
                    e[s] = e[f]
            }
        }
        for (n && n(o, a); c.length;)c.shift().call(null, t);
        if (a[0])return r[0] = 0, t(0)
    };
    var r = {}, i = {25: 0};
    t.e = function (e, n) {
        if (0 === i[e])return n.call(null, t);
        if (void 0 !== i[e])i[e].push(n); else {
            i[e] = [n];
            var r = document.getElementsByTagName("head")[0], o = document.createElement("script");
            o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = t.p + "" + ({
                    0: "articles/show",
                    1: "cards/show",
                    2: "categories/index",
                    4: "choices/show",
                    5: "homes/aboutus",
                    6: "homes/index",
                    7: "mobs/show",
                    8: "oscar/done",
                    9: "oscar/show",
                    10: "papers/done",
                    11: "papers/index",
                    12: "papers/show",
                    13: "searches/search",
                    14: "special_columns/index",
                    15: "special_columns/series",
                    16: "special_columns/show",
                    17: "subjects/show",
                    18: "tags/index",
                    19: "tots/show",
                    20: "users/center",
                    21: "users/edit",
                    22: "users/password",
                    23: "weixin_papers/show",
                    24: "whos/show"
                }[e] || e) + "." + {
                    0: "7056e77c",
                    1: "36ce6f15",
                    2: "e31b1295",
                    3: "145a05a3",
                    4: "5d9774fa",
                    5: "e84d9e2d",
                    6: "45492e78",
                    7: "eda95d66",
                    8: "f899ba22",
                    9: "1f15333b",
                    10: "574eb0e6",
                    11: "5fed82c9",
                    12: "d48eb24d",
                    13: "c046f630",
                    14: "6f7f073d",
                    15: "197df753",
                    16: "ef997174",
                    17: "903711eb",
                    18: "af0fb860",
                    19: "50208271",
                    20: "e024f210",
                    21: "a917aa99",
                    22: "60942260",
                    23: "a59615a9",
                    24: "9c309b08"
                }[e] + ".js", r.appendChild(o)
        }
    }, t.m = e, t.c = r, t.p = "/assets/mobile/"
}(function (e) {
    for (var t in e)if (Object.prototype.hasOwnProperty.call(e, t))switch (typeof e[t]) {
        case"function":
            break;
        case"object":
            e[t] = function (t) {
                var n = t.slice(1), r = e[t[0]];
                return function (e, t, i) {
                    r.apply(this, [e, t, i].concat(n))
                }
            }(e[t]);
            break;
        default:
            e[t] = e[e[t]]
    }
    return e
}([, function (e, t, n) {
    (function (t) {
        e.exports = t.$ = n(2)
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    (function (t) {
        e.exports = t.jQuery = n(3)
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    (function (t) {
        e.exports = t.jquery = n(4)
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v2.1.3
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-12-18T15:11Z
     */
    !function (t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, o) {
        function a(e) {
            var t = e.length, n = jQuery.type(e);
            return "function" !== n && !jQuery.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function s(e, t, n) {
            if (jQuery.isFunction(t))return jQuery.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType)return jQuery.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (fe.test(t))return jQuery.filter(t, e, n);
                t = jQuery.filter(t, e)
            }
            return jQuery.grep(e, function (e) {
                return K.call(t, e) >= 0 !== n
            })
        }

        function l(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function u(e) {
            var t = ye[e] = {};
            return jQuery.each(e.match(ge) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function c() {
            ne.removeEventListener("DOMContentLoaded", c, !1), n.removeEventListener("load", c, !1), jQuery.ready()
        }

        function f() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function () {
                    return {}
                }
            }), this.expando = jQuery.expando + f.uid++
        }

        function d(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(Ee, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? jQuery.parseJSON(n) : n)
                } catch (e) {
                }
                ke.set(e, t, n)
            } else n = void 0;
            return n
        }

        function p() {
            return !0
        }

        function h() {
            return !1
        }

        function m() {
            try {
                return ne.activeElement
            } catch (e) {
            }
        }

        function v(e, t) {
            return jQuery.nodeName(e, "table") && jQuery.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function g(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function y(e) {
            var t = Ie.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n = 0, r = e.length; n < r; n++)xe.set(e[n], "globalEval", !t || xe.get(t[n], "globalEval"))
        }

        function b(e, t) {
            var n, r, i, o, a, s, l, u;
            if (1 === t.nodeType) {
                if (xe.hasData(e) && (o = xe.access(e), a = xe.set(t, o), u = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in u)for (n = 0, r = u[i].length; n < r; n++)jQuery.event.add(t, i, u[i][n])
                }
                ke.hasData(e) && (s = ke.access(e), l = jQuery.extend({}, s), ke.set(t, l))
            }
        }

        function x(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && jQuery.nodeName(e, t) ? jQuery.merge([e], n) : n
        }

        function k(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ae.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function C(e, t) {
            var r, i = jQuery(t.createElement(e)).appendTo(t.body), o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : jQuery.css(i[0], "display");
            return i.detach(), o
        }

        function E(e) {
            var t = ne, n = We[e];
            return n || (n = C(e, t), "none" !== n && n || (Be = (Be || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Be[0].contentDocument, t.write(), t.close(), n = C(e, t), Be.detach()), We[e] = n), n
        }

        function T(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || Ve(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || jQuery.contains(e.ownerDocument, e) || (a = jQuery.style(e, t)), Xe.test(a) && $e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function L(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e, t) {
            if (t in e)return t;
            for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Je.length; i--;)if (t = Je[i] + n, t in e)return t;
            return r
        }

        function A(e, t, n) {
            var r = Ge.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function N(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += jQuery.css(e, n + Le[o], !0, i)), r ? ("content" === n && (a -= jQuery.css(e, "padding" + Le[o], !0, i)), "margin" !== n && (a -= jQuery.css(e, "border" + Le[o] + "Width", !0, i))) : (a += jQuery.css(e, "padding" + Le[o], !0, i), "padding" !== n && (a += jQuery.css(e, "border" + Le[o] + "Width", !0, i)));
            return a
        }

        function j(e, t, n) {
            var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Ve(e), a = "border-box" === jQuery.css(e, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = T(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Xe.test(i))return i;
                r = a && (te.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + N(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function _(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)r = e[a], r.style && (o[a] = xe.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Se(r) && (o[a] = xe.access(r, "olddisplay", E(r.nodeName)))) : (i = Se(r), "none" === n && i || xe.set(r, "olddisplay", i ? n : jQuery.css(r, "display"))));
            for (a = 0; a < s; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function D(e, t, n, r, i) {
            return new D.prototype.init(e, t, n, r, i)
        }

        function O() {
            return setTimeout(function () {
                et = void 0
            }), et = jQuery.now()
        }

        function M(e, t) {
            var n, r = 0, i = {height: e};
            for (t = t ? 1 : 0; r < 4; r += 2 - t)n = Le[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function q(e, t, n) {
            for (var r, i = (at[t] || []).concat(at["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e))return r
        }

        function F(e, t, n) {
            var r, i, o, a, s, l, u, c, f = this, d = {}, p = e.style, h = e.nodeType && Se(e), m = xe.get(e, "fxshow");
            n.queue || (s = jQuery._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, jQuery.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = jQuery.css(e, "display"), c = "none" === u ? xe.get(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === jQuery.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t)if (i = t[r], nt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])continue;
                    h = !0
                }
                d[r] = m && m[r] || jQuery.style(e, r)
            } else u = void 0;
            if (jQuery.isEmptyObject(d))"inline" === ("none" === u ? E(e.nodeName) : u) && (p.display = u); else {
                m ? "hidden" in m && (h = m.hidden) : m = xe.access(e, "fxshow", {}), o && (m.hidden = !h), h ? jQuery(e).show() : f.done(function () {
                    jQuery(e).hide()
                }), f.done(function () {
                    var t;
                    xe.remove(e, "fxshow");
                    for (t in d)jQuery.style(e, t, d[t])
                });
                for (r in d)a = q(h ? m[r] : 0, r, f), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function z(e, t) {
            var n, r, i, o, a;
            for (n in e)if (r = jQuery.camelCase(n), i = t[r], o = e[n], jQuery.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = jQuery.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o)n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }

        function U(e, t, n) {
            var r, i, o = 0, a = ot.length, s = jQuery.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (i)return !1;
                for (var t = et || O(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; a < l; a++)u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: jQuery.extend({}, t),
                opts: jQuery.extend(!0, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: et || O(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = jQuery.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? u.tweens.length : 0;
                    if (i)return this;
                    for (i = !0; n < r; n++)u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }), c = u.props;
            for (z(c, u.opts.specialEasing); o < a; o++)if (r = ot[o].call(u, e, c, u.opts))return r;
            return jQuery.map(c, q, u), jQuery.isFunction(u.opts.start) && u.opts.start.call(e, u), jQuery.fx.timer(jQuery.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function H(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0, o = t.toLowerCase().match(ge) || [];
                if (jQuery.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function I(e, t, n, r) {
            function i(s) {
                var l;
                return o[s] = !0, jQuery.each(e[s] || [], function (e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
                }), l
            }

            var o = {}, a = e === Ct;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function P(e, t) {
            var n, r, i = jQuery.ajaxSettings.flatOptions || {};
            for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && jQuery.extend(!0, e, r), e
        }

        function R(e, t, n) {
            for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)for (i in s)if (s[i] && s[i].test(r)) {
                l.unshift(i);
                break
            }
            if (l[0] in n)o = l[0]; else {
                for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            if (o)return o !== l[0] && l.unshift(o), n[o]
        }

        function B(e, t, n, r) {
            var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
            if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && e.throws)t = a(t); else try {
                    t = a(t)
                } catch (e) {
                    return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
                }
            }
            return {state: "success", data: t}
        }

        function W(e, t, n, r) {
            var i;
            if (jQuery.isArray(t))jQuery.each(t, function (t, i) {
                n || At.test(e) ? r(e, i) : W(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            }); else if (n || "object" !== jQuery.type(t))r(e, t); else for (i in t)W(e + "[" + i + "]", t[i], n, r)
        }

        function X(e) {
            return jQuery.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }

        var V = [], Q = V.slice, G = V.concat, Y = V.push, K = V.indexOf, Z = {}, J = Z.toString, ee = Z.hasOwnProperty, te = {}, ne = n.document, re = "2.1.3", jQuery = function (e, t) {
            return new jQuery.fn.init(e, t)
        }, ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oe = /^-ms-/, ae = /-([\da-z])/gi, se = function (e, t) {
            return t.toUpperCase()
        };
        jQuery.fn = jQuery.prototype = {
            jquery: re, constructor: jQuery, selector: "", length: 0, toArray: function () {
                return Q.call(this)
            }, get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : Q.call(this)
            }, pushStack: function (e) {
                var t = jQuery.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e, t) {
                return jQuery.each(this, e, t)
            }, map: function (e) {
                return this.pushStack(jQuery.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(Q.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: Y, sort: V.sort, splice: V.splice
        }, jQuery.extend = jQuery.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || jQuery.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)if (null != (e = arguments[s]))for (t in e)n = a[t], r = e[t], a !== r && (u && r && (jQuery.isPlainObject(r) || (i = jQuery.isArray(r))) ? (i ? (i = !1, o = n && jQuery.isArray(n) ? n : []) : o = n && jQuery.isPlainObject(n) ? n : {}, a[t] = jQuery.extend(u, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, jQuery.extend({
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {
            },
            isFunction: function (e) {
                return "function" === jQuery.type(e)
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                return !jQuery.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function (e) {
                return "object" === jQuery.type(e) && !e.nodeType && !jQuery.isWindow(e) && !(e.constructor && !ee.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[J.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                var t, n = eval;
                e = jQuery.trim(e), e && (1 === e.indexOf("use strict") ? (t = ne.createElement("script"), t.text = e, ne.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function (e) {
                return e.replace(oe, "ms-").replace(ae, se)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, n) {
                var r, i = 0, o = e.length, s = a(e);
                if (n) {
                    if (s)for (; i < o && (r = t.apply(e[i], n), r !== !1); i++); else for (i in e)if (r = t.apply(e[i], n), r === !1)break
                } else if (s)for (; i < o && (r = t.call(e[i], i, e[i]), r !== !1); i++); else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(ie, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? jQuery.merge(n, "string" == typeof e ? [e] : e) : Y.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : K.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)r = !t(e[o], o), r !== s && i.push(e[o]);
                return i
            },
            map: function (e, t, n) {
                var r, i = 0, o = e.length, s = a(e), l = [];
                if (s)for (; i < o; i++)r = t(e[i], i, n), null != r && l.push(r); else for (i in e)r = t(e[i], i, n), null != r && l.push(r);
                return G.apply([], l)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), jQuery.isFunction(e))return r = Q.call(arguments, 2), i = function () {
                    return e.apply(t || this, r.concat(Q.call(arguments)))
                }, i.guid = e.guid = e.guid || jQuery.guid++, i
            },
            now: Date.now,
            support: te
        }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var le = /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
            function (e) {
                function t(e, t, n, r) {
                    var i, o, a, s, l, u, f, p, h, m;
                    if ((t ? t.ownerDocument || t : I) !== D && _(t), t = t || D, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)return n;
                    if (!r && M) {
                        if (11 !== s && (i = we.exec(e)))if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode)return n;
                                if (o.id === a)return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && U(t, o) && o.id === a)return n.push(o), n
                        } else {
                            if (i[2])return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && x.getElementsByClassName)return J.apply(n, t.getElementsByClassName(a)), n
                        }
                        if (x.qsa && (!q || !q.test(e))) {
                            if (p = f = H, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (u = T(e), (f = t.getAttribute("id")) ? p = f.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;)u[l] = p + d(u[l]);
                                h = be.test(e) && c(t.parentNode) || t, m = u.join(",")
                            }
                            if (m)try {
                                return J.apply(n, h.querySelectorAll(m)), n
                            } catch (e) {
                            } finally {
                                f || t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(ue, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }

                    var t = [];
                    return e
                }

                function r(e) {
                    return e[H] = !0, e
                }

                function i(e) {
                    var t = D.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;)k.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                    if (r)return r;
                    if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function f() {
                }

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
                    return r
                }

                function p(e, t, n) {
                    var r = t.dir, i = n && "parentNode" === r, o = R++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
                    } : function (t, n, a) {
                        var s, l, u = [P, o];
                        if (a) {
                            for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                        } else for (; t = t[r];)if (1 === t.nodeType || i) {
                            if (l = t[H] || (t[H] = {}), (s = l[r]) && s[0] === P && s[1] === o)return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a))return !0
                        }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++)t(e, n[i], r);
                    return r
                }

                function v(e, t, n, r, i) {
                    for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
                    return a
                }

                function g(e, t, n, i, o, a) {
                    return i && !i[H] && (i = g(i)), o && !o[H] && (o = g(o, a)), r(function (r, a, s, l) {
                        var u, c, f, d = [], p = [], h = a.length, g = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? g : v(g, d, e, s, l), w = n ? o || (r ? e : h || i) ? [] : a : y;
                        if (n && n(y, w, s, l), i)for (u = v(w, p), i(u, [], s, l), c = u.length; c--;)(f = u[c]) && (w[p[c]] = !(y[p[c]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], c = w.length; c--;)(f = w[c]) && u.push(y[c] = f);
                                    o(null, w = [], u, l)
                                }
                                for (c = w.length; c--;)(f = w[c]) && (u = o ? te(r, f) : d[c]) > -1 && (r[u] = !(a[u] = f))
                            }
                        } else w = v(w === a ? w.splice(h, w.length) : w), o ? o(null, a, w, l) : J.apply(a, w)
                    })
                }

                function y(e) {
                    for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                        return e === t
                    }, a, !0), u = p(function (e) {
                        return te(t, e) > -1
                    }, a, !0), c = [function (e, n, r) {
                        var i = !o && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                        return t = null, i
                    }]; s < i; s++)if (n = k.relative[e[s].type])c = [p(h(c), n)]; else {
                        if (n = k.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                            for (r = ++s; r < i && !k.relative[e[r].type]; r++);
                            return g(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                        }
                        c.push(n)
                    }
                    return h(c)
                }

                function w(e, n) {
                    var i = n.length > 0, o = e.length > 0, a = function (r, a, s, l, u) {
                        var c, f, d, p = 0, h = "0", m = r && [], g = [], y = A, w = r || o && k.find.TAG("*", u), b = P += null == y ? 1 : Math.random() || .1, x = w.length;
                        for (u && (A = a !== D && a); h !== x && null != (c = w[h]); h++) {
                            if (o && c) {
                                for (f = 0; d = e[f++];)if (d(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                                u && (P = b)
                            }
                            i && ((c = !d && c) && p--, r && m.push(c))
                        }
                        if (p += h, i && h !== p) {
                            for (f = 0; d = n[f++];)d(m, g, a, s);
                            if (r) {
                                if (p > 0)for (; h--;)m[h] || g[h] || (g[h] = K.call(l));
                                g = v(g)
                            }
                            J.apply(l, g), u && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (P = b, A = y), m
                    };
                    return i ? r(a) : a
                }

                var b, x, k, C, E, T, L, S, A, N, j, _, D, O, M, q, F, z, U, H = "sizzle" + 1 * new Date, I = e.document, P = 0, R = 0, B = n(), W = n(), X = n(), V = function (e, t) {
                    return e === t && (j = !0), 0
                }, Q = 1 << 31, G = {}.hasOwnProperty, Y = [], K = Y.pop, Z = Y.push, J = Y.push, ee = Y.slice, te = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
                    return -1
                }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), ae = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", le = new RegExp(re + "+", "g"), ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"), ce = new RegExp("^" + re + "*," + re + "*"), fe = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), de = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"), pe = new RegExp(se), he = new RegExp("^" + oe + "$"), me = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                }, ve = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, ke = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"), Ce = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, Ee = function () {
                    _()
                };
                try {
                    J.apply(Y = ee.call(I.childNodes), I.childNodes), Y[I.childNodes.length].nodeType
                } catch (e) {
                    J = {
                        apply: Y.length ? function (e, t) {
                            Z.apply(e, ee.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                x = t.support = {}, E = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, _ = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : I;
                    return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, O = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), M = !E(r), x.attributes = i(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = i(function (e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = ye.test(r.getElementsByClassName), x.getById = i(function (e) {
                        return O.appendChild(e).id = H, !r.getElementsByName || !r.getElementsByName(H).length
                    }), x.getById ? (k.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && M) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, k.filter.ID = function (e) {
                        var t = e.replace(ke, Ce);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete k.find.ID, k.filter.ID = function (e) {
                        var t = e.replace(ke, Ce);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), k.find.TAG = x.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];)1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, k.find.CLASS = x.getElementsByClassName && function (e, t) {
                            if (M)return t.getElementsByClassName(e)
                        }, F = [], q = [], (x.qsa = ye.test(r.querySelectorAll)) && (i(function (e) {
                        O.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]")
                    }), i(function (e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                    })), (x.matchesSelector = ye.test(z = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
                        x.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), F.push("!=", se)
                    }), q = q.length && new RegExp(q.join("|")), F = F.length && new RegExp(F.join("|")), t = ye.test(O.compareDocumentPosition), U = t || ye.test(O.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)for (; t = t.parentNode;)if (t === e)return !0;
                        return !1
                    }, V = t ? function (e, t) {
                        if (e === t)return j = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === I && U(I, e) ? -1 : t === r || t.ownerDocument === I && U(I, t) ? 1 : N ? te(N, e) - te(N, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t)return j = !0, 0;
                        var n, i = 0, o = e.parentNode, s = t.parentNode, l = [e], u = [t];
                        if (!o || !s)return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : N ? te(N, e) - te(N, t) : 0;
                        if (o === s)return a(e, t);
                        for (n = e; n = n.parentNode;)l.unshift(n);
                        for (n = t; n = n.parentNode;)u.unshift(n);
                        for (; l[i] === u[i];)i++;
                        return i ? a(l[i], u[i]) : l[i] === I ? -1 : u[i] === I ? 1 : 0
                    }, r) : D
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== D && _(e), n = n.replace(de, "='$1']"), x.matchesSelector && M && (!F || !F.test(n)) && (!q || !q.test(n)))try {
                        var r = z.call(e, n);
                        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
                    } catch (e) {
                    }
                    return t(n, D, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== D && _(e), U(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== D && _(e);
                    var n = k.attrHandle[t.toLowerCase()], r = n && G.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                    return void 0 !== r ? r : x.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], r = 0, i = 0;
                    if (j = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(V), j) {
                        for (; t = e[i++];)t === e[i] && (r = n.push(i));
                        for (; r--;)e.splice(n[r], 1)
                    }
                    return N = null, e
                }, C = t.getText = function (e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                        } else if (3 === i || 4 === i)return e.nodeValue
                    } else for (; t = e[r++];)n += C(t);
                    return n
                }, k = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: me,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ke, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(ke, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return me.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(ke, Ce).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = B[e + " "];
                            return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && B(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, r) {
                            return function (i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(le, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        }, CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var u, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !l && !s;
                                if (v) {
                                    if (o) {
                                        for (; m;) {
                                            for (f = t; f = f[m];)if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType)return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                        for (c = v[H] || (v[H] = {}), u = c[e] || [], p = u[0] === P && u[1], d = u[0] === P && u[2], f = p && v.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)if (1 === f.nodeType && ++d && f === t) {
                                            c[e] = [P, p, d];
                                            break
                                        }
                                    } else if (y && (u = (t[H] || (t[H] = {}))[e]) && u[0] === P)d = u[1]; else for (; (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++d || (y && ((f[H] || (f[H] = {}))[e] = [P, d]), f !== t)););
                                    return d -= i, d === r || d % r === 0 && d / r >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var i, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;)r = te(e, i[a]), e[r] = !(t[r] = i[a])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [], n = [], i = L(e.replace(ue, "$1"));
                            return i[H] ? r(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }), has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: r(function (e) {
                            return e = e.replace(ke, Ce), function (t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                        }), lang: r(function (e) {
                            return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ke, Ce).toLowerCase(), function (t) {
                                var n;
                                do if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === O
                        }, focus: function (e) {
                            return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !k.pseudos.empty(e)
                        }, header: function (e) {
                            return ge.test(e.nodeName)
                        }, input: function (e) {
                            return ve.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: u(function () {
                            return [0]
                        }), last: u(function (e, t) {
                            return [t - 1]
                        }), eq: u(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: u(function (e, t) {
                            for (var n = 0; n < t; n += 2)e.push(n);
                            return e
                        }), odd: u(function (e, t) {
                            for (var n = 1; n < t; n += 2)e.push(n);
                            return e
                        }), lt: u(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                            return e
                        }), gt: u(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                            return e
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[b] = s(b);
                for (b in{submit: !0, reset: !0})k.pseudos[b] = l(b);
                return f.prototype = k.filters = k.pseudos, k.setFilters = new f, T = t.tokenize = function (e, n) {
                    var r, i, o, a, s, l, u, c = W[e + " "];
                    if (c)return n ? 0 : c.slice(0);
                    for (s = e, l = [], u = k.preFilter; s;) {
                        r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = fe.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(ue, " ")
                        }), s = s.slice(r.length));
                        for (a in k.filter)!(i = me[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r)break
                    }
                    return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
                }, L = t.compile = function (e, t) {
                    var n, r = [], i = [], o = X[e + " "];
                    if (!o) {
                        for (t || (t = T(e)), n = t.length; n--;)o = y(t[n]), o[H] ? r.push(o) : i.push(o);
                        o = X(e, w(i, r)), o.selector = e
                    }
                    return o
                }, S = t.select = function (e, t, n, r) {
                    var i, o, a, s, l, u = "function" == typeof e && e, f = !r && T(e = u.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && M && k.relative[o[1].type]) {
                            if (t = (k.find.ID(a.matches[0].replace(ke, Ce), t) || [])[0], !t)return n;
                            u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = me.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);)if ((l = k.find[s]) && (r = l(a.matches[0].replace(ke, Ce), be.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e)return J.apply(n, r), n;
                            break
                        }
                    }
                    return (u || L(e, f))(r, t, !M, n, be.test(e) && c(t.parentNode) || t), n
                }, x.sortStable = H.split("").sort(V).join("") === H, x.detectDuplicates = !!j, _(), x.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(D.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), x.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(ne, function (e, t, n) {
                    var r;
                    if (!n)return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(n);
        jQuery.find = le, jQuery.expr = le.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = le.uniqueSort, jQuery.text = le.getText, jQuery.isXMLDoc = le.isXML, jQuery.contains = le.contains;
        var ue = jQuery.expr.match.needsContext, ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fe = /^.[^:#\[\.,]*$/;
        jQuery.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, jQuery.fn.extend({
            find: function (e) {
                var t, n = this.length, r = [], i = this;
                if ("string" != typeof e)return this.pushStack(jQuery(e).filter(function () {
                    for (t = 0; t < n; t++)if (jQuery.contains(i[t], this))return !0
                }));
                for (t = 0; t < n; t++)jQuery.find(e, i[t], r);
                return r = this.pushStack(n > 1 ? jQuery.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
            }, filter: function (e) {
                return this.pushStack(s(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(s(this, e || [], !0))
            }, is: function (e) {
                return !!s(this, "string" == typeof e && ue.test(e) ? jQuery(e) : e || [], !1).length
            }
        });
        var de, pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, he = jQuery.fn.init = function (e, t) {
            var n, r;
            if (!e)return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : pe.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || de).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), ce.test(n[1]) && jQuery.isPlainObject(t))for (n in t)jQuery.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = ne.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = ne, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : jQuery.isFunction(e) ? "undefined" != typeof de.ready ? de.ready(e) : e(jQuery) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), jQuery.makeArray(e, this))
        };
        he.prototype = jQuery.fn, de = jQuery(ne);
        var me = /^(?:parents|prev(?:Until|All))/, ve = {children: !0, contents: !0, next: !0, prev: !0};
        jQuery.extend({
            dir: function (e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                    if (i && jQuery(e).is(n))break;
                    r.push(e)
                }
                return r
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), jQuery.fn.extend({
            has: function (e) {
                var t = jQuery(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)if (jQuery.contains(this, t[e]))return !0
                })
            }, closest: function (e, t) {
                for (var n, r = 0, i = this.length, o = [], a = ue.test(e) || "string" != typeof e ? jQuery(e, t || this.context) : 0; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && jQuery.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? jQuery.unique(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? K.call(jQuery(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), jQuery.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return jQuery.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return jQuery.dir(e, "parentNode", n)
            }, next: function (e) {
                return l(e, "nextSibling")
            }, prev: function (e) {
                return l(e, "previousSibling")
            }, nextAll: function (e) {
                return jQuery.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return jQuery.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return jQuery.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return jQuery.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return jQuery.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return jQuery.sibling(e.firstChild)
            }, contents: function (e) {
                return e.contentDocument || jQuery.merge([], e.childNodes)
            }
        }, function (e, t) {
            jQuery.fn[e] = function (n, r) {
                var i = jQuery.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = jQuery.filter(r, i)), this.length > 1 && (ve[e] || jQuery.unique(i), me.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var ge = /\S+/g, ye = {};
        jQuery.Callbacks = function (e) {
            e = "string" == typeof e ? ye[e] || u(e) : jQuery.extend({}, e);
            var t, n, r, i, o, a, s = [], l = !e.once && [], c = function (u) {
                for (t = e.memory && u, n = !0, a = i || 0, i = 0, o = s.length, r = !0; s && a < o; a++)if (s[a].apply(u[0], u[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
                r = !1, s && (l ? l.length && c(l.shift()) : t ? s = [] : f.disable())
            }, f = {
                add: function () {
                    if (s) {
                        var n = s.length;
                        !function t(n) {
                            jQuery.each(n, function (n, r) {
                                var i = jQuery.type(r);
                                "function" === i ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), r ? o = s.length : t && (i = n, c(t))
                    }
                    return this
                }, remove: function () {
                    return s && jQuery.each(arguments, function (e, t) {
                        for (var n; (n = jQuery.inArray(t, s, n)) > -1;)s.splice(n, 1), r && (n <= o && o--, n <= a && a--)
                    }), this
                }, has: function (e) {
                    return e ? jQuery.inArray(e, s) > -1 : !(!s || !s.length)
                }, empty: function () {
                    return s = [], o = 0, this
                }, disable: function () {
                    return s = l = t = void 0, this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return l = void 0, t || f.disable(), this
                }, locked: function () {
                    return !l
                }, fireWith: function (e, t) {
                    return !s || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                }, fire: function () {
                    return f.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return f
        }, jQuery.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return jQuery.Deferred(function (n) {
                            jQuery.each(t, function (t, o) {
                                var a = jQuery.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && jQuery.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? jQuery.extend(e, r) : r
                    }
                }, i = {};
                return r.pipe = r.then, jQuery.each(t, function (e, o) {
                    var a = o[2], s = o[3];
                    r[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            }, when: function (e) {
                var t, n, r, i = 0, o = Q.call(arguments), a = o.length, s = 1 !== a || e && jQuery.isFunction(e.promise) ? a : 0, l = 1 === s ? e : jQuery.Deferred(), u = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
                if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)o[i] && jQuery.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
                return s || l.resolveWith(r, o), l.promise()
            }
        });
        var we;
        jQuery.fn.ready = function (e) {
            return jQuery.ready.promise().done(e), this
        }, jQuery.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? jQuery.readyWait++ : jQuery.ready(!0)
            }, ready: function (e) {
                (e === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, e !== !0 && --jQuery.readyWait > 0 || (we.resolveWith(ne, [jQuery]), jQuery.fn.triggerHandler && (jQuery(ne).triggerHandler("ready"), jQuery(ne).off("ready"))))
            }
        }), jQuery.ready.promise = function (e) {
            return we || (we = jQuery.Deferred(), "complete" === ne.readyState ? setTimeout(jQuery.ready) : (ne.addEventListener("DOMContentLoaded", c, !1), n.addEventListener("load", c, !1))), we.promise(e)
        }, jQuery.ready.promise();
        var be = jQuery.access = function (e, t, n, r, i, o, a) {
            var s = 0, l = e.length, u = null == n;
            if ("object" === jQuery.type(n)) {
                i = !0;
                for (s in n)jQuery.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, jQuery.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(jQuery(e), n)
                })), t))for (; s < l; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        };
        jQuery.acceptData = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, f.uid = 1, f.accepts = jQuery.acceptData, f.prototype = {
            key: function (e) {
                if (!f.accepts(e))return 0;
                var t = {}, n = e[this.expando];
                if (!n) {
                    n = f.uid++;
                    try {
                        t[this.expando] = {value: n}, Object.defineProperties(e, t)
                    } catch (r) {
                        t[this.expando] = n, jQuery.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            }, set: function (e, t, n) {
                var r, i = this.key(e), o = this.cache[i];
                if ("string" == typeof t)o[t] = n; else if (jQuery.isEmptyObject(o))jQuery.extend(this.cache[i], t); else for (r in t)o[r] = t[r];
                return o
            }, get: function (e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            }, access: function (e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, jQuery.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, r, i, o = this.key(e), a = this.cache[o];
                if (void 0 === t)this.cache[o] = {}; else {
                    jQuery.isArray(t) ? r = t.concat(t.map(jQuery.camelCase)) : (i = jQuery.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(ge) || [])), n = r.length;
                    for (; n--;)delete a[r[n]]
                }
            }, hasData: function (e) {
                return !jQuery.isEmptyObject(this.cache[e[this.expando]] || {})
            }, discard: function (e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var xe = new f, ke = new f, Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ee = /([A-Z])/g;
        jQuery.extend({
            hasData: function (e) {
                return ke.hasData(e) || xe.hasData(e)
            }, data: function (e, t, n) {
                return ke.access(e, t, n)
            }, removeData: function (e, t) {
                ke.remove(e, t)
            }, _data: function (e, t, n) {
                return xe.access(e, t, n)
            }, _removeData: function (e, t) {
                xe.remove(e, t)
            }
        }), jQuery.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = ke.get(o), 1 === o.nodeType && !xe.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = jQuery.camelCase(r.slice(5)), d(o, r, i[r])));
                        xe.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    ke.set(this, e)
                }) : be(this, function (t) {
                    var n, r = jQuery.camelCase(e);
                    if (o && void 0 === t) {
                        if (n = ke.get(o, e), void 0 !== n)return n;
                        if (n = ke.get(o, r), void 0 !== n)return n;
                        if (n = d(o, r, void 0), void 0 !== n)return n
                    } else this.each(function () {
                        var n = ke.get(this, r);
                        ke.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && ke.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    ke.remove(this, e)
                })
            }
        }), jQuery.extend({
            queue: function (e, t, n) {
                var r;
                if (e)return t = (t || "fx") + "queue", r = xe.get(e, t), n && (!r || jQuery.isArray(n) ? r = xe.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = jQuery.queue(e, t), r = n.length, i = n.shift(), o = jQuery._queueHooks(e, t), a = function () {
                    jQuery.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return xe.get(e, n) || xe.access(e, n, {
                        empty: jQuery.Callbacks("once memory").add(function () {
                            xe.remove(e, [t + "queue", n])
                        })
                    })
            }
        }), jQuery.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? jQuery.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = jQuery.queue(this, e, t);
                    jQuery._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && jQuery.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    jQuery.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, r = 1, i = jQuery.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = xe.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Le = ["Top", "Right", "Bottom", "Left"], Se = function (e, t) {
            return e = t || e, "none" === jQuery.css(e, "display") || !jQuery.contains(e.ownerDocument, e)
        }, Ae = /^(?:checkbox|radio)$/i;
        !function () {
            var e = ne.createDocumentFragment(), t = e.appendChild(ne.createElement("div")), n = ne.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), te.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", te.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ne = "undefined";
        te.focusinBubbles = "onfocusin" in n;
        var je = /^key/, _e = /^(?:mouse|pointer|contextmenu)|click/, De = /^(?:focusinfocus|focusoutblur)$/, Oe = /^([^.]*)(?:\.(.+)|)$/;
        jQuery.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var o, a, s, l, u, c, f, d, p, h, m, v = xe.get(e);
                if (v)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = jQuery.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                    return typeof jQuery !== Ne && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(ge) || [""], u = t.length; u--;)s = Oe.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = jQuery.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = jQuery.event.special[p] || {}, c = jQuery.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && jQuery.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), jQuery.event.global[p] = !0)
            },
            remove: function (e, t, n, r, i) {
                var o, a, s, l, u, c, f, d, p, h, m, v = xe.hasData(e) && xe.get(e);
                if (v && (l = v.events)) {
                    for (t = (t || "").match(ge) || [""], u = t.length; u--;)if (s = Oe.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = jQuery.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;)c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || jQuery.removeEvent(e, p, v.handle),
                            delete l[p])
                    } else for (p in l)jQuery.event.remove(e, p + t[u], n, r, !0);
                    jQuery.isEmptyObject(l) && (delete v.handle, xe.remove(e, "events"))
                }
            },
            trigger: function (e, t, r, i) {
                var o, a, s, l, u, c, f, d = [r || ne], p = ee.call(e, "type") ? e.type : e, h = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(p + jQuery.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[jQuery.expando] ? e : new jQuery.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : jQuery.makeArray(t, [e]), f = jQuery.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, t) !== !1)) {
                    if (!i && !f.noBubble && !jQuery.isWindow(r)) {
                        for (l = f.delegateType || p, De.test(l + p) || (a = a.parentNode); a; a = a.parentNode)d.push(a), s = a;
                        s === (r.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0; (a = d[o++]) && !e.isPropagationStopped();)e.type = o > 1 ? l : f.bindType || p, c = (xe.get(a, "events") || {})[e.type] && xe.get(a, "handle"), c && c.apply(a, t), c = u && a[u], c && c.apply && jQuery.acceptData(a) && (e.result = c.apply(a, t), e.result === !1 && e.preventDefault());
                    return e.type = p, i || e.isDefaultPrevented() || f._default && f._default.apply(d.pop(), t) !== !1 || !jQuery.acceptData(r) || u && jQuery.isFunction(r[p]) && !jQuery.isWindow(r) && (s = r[u], s && (r[u] = null), jQuery.event.triggered = p, r[p](), jQuery.event.triggered = void 0, s && (r[u] = s)), e.result
                }
            },
            dispatch: function (e) {
                e = jQuery.event.fix(e);
                var t, n, r, i, o, a = [], s = Q.call(arguments), l = (xe.get(this, "events") || {})[e.type] || [], u = jQuery.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = jQuery.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((jQuery.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, r, i, o, a = [], s = t.delegateCount, l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== e.type) {
                    for (r = [], n = 0; n < s; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? jQuery(i, this).index(l) >= 0 : jQuery.find(i, this, null, [l]).length), r[i] && r.push(o);
                    r.length && a.push({elem: l, handlers: r})
                }
                return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, r, i, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ne, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[jQuery.expando])return e;
                var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = _e.test(i) ? this.mouseHooks : je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new jQuery.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
                return e.target || (e.target = ne), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== m() && this.focus)return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === m() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && jQuery.nodeName(this, "input"))return this.click(), !1
                    }, _default: function (e) {
                        return jQuery.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = jQuery.extend(new jQuery.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                r ? jQuery.event.trigger(i, null, t) : jQuery.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, jQuery.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, jQuery.Event = function (e, t) {
            return this instanceof jQuery.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(e, t)
        }, jQuery.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            jQuery.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || jQuery.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), te.focusinBubbles || jQuery.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                jQuery.event.simulate(t, e.target, jQuery.event.fix(e), !0)
            };
            jQuery.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = xe.access(r, t);
                    i || r.addEventListener(e, n, !0), xe.access(r, t, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = xe.access(r, t) - 1;
                    i ? xe.access(r, t, i) : (r.removeEventListener(e, n, !0), xe.remove(r, t))
                }
            }
        }), jQuery.fn.extend({
            on: function (e, t, n, r, i) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e)this.on(a, t, n, e[a], i);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)r = h; else if (!r)return this;
                return 1 === i && (o = r, r = function (e) {
                    return jQuery().off(e), o.apply(this, arguments)
                }, r.guid = o.guid || (o.guid = jQuery.guid++)), this.each(function () {
                    jQuery.event.add(this, e, r, n, t)
                })
            }, one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            }, off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e)this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                    jQuery.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    jQuery.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n)return jQuery.event.trigger(e, t, n, !0)
            }
        });
        var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qe = /<([\w:]+)/, Fe = /<|&#?\w+;/, ze = /<(?:script|style|link)/i, Ue = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^$|\/(?:java|ecma)script/i, Ie = /^true\/(.*)/, Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, jQuery.extend({
            clone: function (e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0), l = jQuery.contains(e.ownerDocument, e);
                if (!(te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || jQuery.isXMLDoc(e)))for (a = x(s), o = x(e), r = 0, i = o.length; r < i; r++)k(o[r], a[r]);
                if (t)if (n)for (o = o || x(e), a = a || x(s), r = 0, i = o.length; r < i; r++)b(o[r], a[r]); else b(e, s);
                return a = x(s, "script"), a.length > 0 && w(a, !l && x(e, "script")), s
            }, buildFragment: function (e, t, n, r) {
                for (var i, o, a, s, l, u, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)if (i = e[d], i || 0 === i)if ("object" === jQuery.type(i))jQuery.merge(f, i.nodeType ? [i] : i); else if (Fe.test(i)) {
                    for (o = o || c.appendChild(t.createElement("div")), a = (qe.exec(i) || ["", ""])[1].toLowerCase(), s = Re[a] || Re._default, o.innerHTML = s[1] + i.replace(Me, "<$1></$2>") + s[2], u = s[0]; u--;)o = o.lastChild;
                    jQuery.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                } else f.push(t.createTextNode(i));
                for (c.textContent = "", d = 0; i = f[d++];)if ((!r || jQuery.inArray(i, r) === -1) && (l = jQuery.contains(i.ownerDocument, i), o = x(c.appendChild(i), "script"), l && w(o), n))for (u = 0; i = o[u++];)He.test(i.type || "") && n.push(i);
                return c
            }, cleanData: function (e) {
                for (var t, n, r, i, o = jQuery.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (jQuery.acceptData(n) && (i = n[xe.expando], i && (t = xe.cache[i]))) {
                        if (t.events)for (r in t.events)o[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
                        xe.cache[i] && delete xe.cache[i]
                    }
                    delete ke.cache[n[ke.expando]]
                }
            }
        }), jQuery.fn.extend({
            text: function (e) {
                return be(this, function (e) {
                    return void 0 === e ? jQuery.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function (e, t) {
                for (var n, r = e ? jQuery.filter(e, this) : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || jQuery.cleanData(x(n)), n.parentNode && (t && jQuery.contains(n.ownerDocument, n) && w(x(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (jQuery.cleanData(x(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return jQuery.clone(this, e, t)
                })
            }, html: function (e) {
                return be(this, function (e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                    if ("string" == typeof e && !ze.test(e) && !Re[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Me, "<$1></$2>");
                        try {
                            for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType && (jQuery.cleanData(x(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, jQuery.cleanData(x(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, t) {
                e = G.apply([], e);
                var n, r, i, o, a, s, l = 0, u = this.length, c = this, f = u - 1, d = e[0], p = jQuery.isFunction(d);
                if (p || u > 1 && "string" == typeof d && !te.checkClone && Ue.test(d))return this.each(function (n) {
                    var r = c.eq(n);
                    p && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
                });
                if (u && (n = jQuery.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                    for (i = jQuery.map(x(n, "script"), g), o = i.length; l < u; l++)a = n, l !== f && (a = jQuery.clone(a, !0, !0), o && jQuery.merge(i, x(a, "script"))), t.call(this[l], a, l);
                    if (o)for (s = i[i.length - 1].ownerDocument, jQuery.map(i, y), l = 0; l < o; l++)a = i[l], He.test(a.type || "") && !xe.access(a, "globalEval") && jQuery.contains(s, a) && (a.src ? jQuery._evalUrl && jQuery._evalUrl(a.src) : jQuery.globalEval(a.textContent.replace(Pe, "")))
                }
                return this
            }
        }), jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            jQuery.fn[e] = function (e) {
                for (var n, r = [], i = jQuery(e), o = i.length - 1, a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), jQuery(i[a])[t](n), Y.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Be, We = {}, $e = /^margin/, Xe = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"), Ve = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
        };
        !function () {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                var e = n.getComputedStyle(a, null);
                t = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
            }

            var t, r, i = ne.documentElement, o = ne.createElement("div"), a = ne.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", te.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), n.getComputedStyle && jQuery.extend(te, {
                pixelPosition: function () {
                    return e(), t
                }, boxSizingReliable: function () {
                    return null == r && e(), r
                }, reliableMarginRight: function () {
                    var e, t = a.appendChild(ne.createElement("div"));
                    return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", i.appendChild(o), e = !parseFloat(n.getComputedStyle(t, null).marginRight), i.removeChild(o), a.removeChild(t), e
                }
            }))
        }(), jQuery.swap = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        };
        var Qe = /^(none|table(?!-c[ea]).+)/, Ge = new RegExp("^(" + Te + ")(.*)$", "i"), Ye = new RegExp("^([+-])=(" + Te + ")", "i"), Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Ze = {letterSpacing: "0", fontWeight: "400"}, Je = ["Webkit", "O", "Moz", "ms"];
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = T(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = jQuery.camelCase(t), l = e.style;
                    return t = jQuery.cssProps[s] || (jQuery.cssProps[s] = S(l, s)), a = jQuery.cssHooks[t] || jQuery.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = Ye.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(jQuery.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || jQuery.cssNumber[s] || (n += "px"), te.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n)), void 0)
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = jQuery.camelCase(t);
                return t = jQuery.cssProps[s] || (jQuery.cssProps[s] = S(e.style, s)), a = jQuery.cssHooks[t] || jQuery.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = T(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), n === !0 || jQuery.isNumeric(o) ? o || 0 : i) : i
            }
        }), jQuery.each(["height", "width"], function (e, t) {
            jQuery.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)return Qe.test(jQuery.css(e, "display")) && 0 === e.offsetWidth ? jQuery.swap(e, Ke, function () {
                        return j(e, t, r)
                    }) : j(e, t, r)
                }, set: function (e, n, r) {
                    var i = r && Ve(e);
                    return A(e, n, r ? N(e, t, r, "border-box" === jQuery.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), jQuery.cssHooks.marginRight = L(te.reliableMarginRight, function (e, t) {
            if (t)return jQuery.swap(e, {display: "inline-block"}, T, [e, "marginRight"])
        }), jQuery.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            jQuery.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + Le[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, $e.test(e) || (jQuery.cssHooks[e + t].set = A)
        }), jQuery.fn.extend({
            css: function (e, t) {
                return be(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (jQuery.isArray(t)) {
                        for (r = Ve(e), i = t.length; a < i; a++)o[t[a]] = jQuery.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return _(this, !0)
            }, hide: function () {
                return _(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Se(this) ? jQuery(this).show() : jQuery(this).hide()
                })
            }
        }), jQuery.Tween = D, D.prototype = {
            constructor: D, init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (jQuery.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = D.propHooks[this.prop];
                return e && e.get ? e.get(this) : D.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = D.propHooks[this.prop];
                return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = jQuery.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                }, set: function (e) {
                    jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[jQuery.cssProps[e.prop]] || jQuery.cssHooks[e.prop]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, jQuery.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, jQuery.fx = D.prototype.init, jQuery.fx.step = {};
        var et, tt, nt = /^(?:toggle|show|hide)$/, rt = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"), it = /queueHooks$/, ot = [F], at = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = rt.exec(t), o = i && i[3] || (jQuery.cssNumber[e] ? "" : "px"), a = (jQuery.cssNumber[e] || "px" !== o && +r) && rt.exec(jQuery.css(n.elem, e)), s = 1, l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, jQuery.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
        jQuery.Animation = jQuery.extend(U, {
            tweener: function (e, t) {
                jQuery.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++)n = e[r], at[n] = at[n] || [], at[n].unshift(t)
            }, prefilter: function (e, t) {
                t ? ot.unshift(e) : ot.push(e)
            }
        }), jQuery.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? jQuery.extend({}, e) : {
                complete: n || !n && t || jQuery.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !jQuery.isFunction(t) && t
            };
            return r.duration = jQuery.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in jQuery.fx.speeds ? jQuery.fx.speeds[r.duration] : jQuery.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                jQuery.isFunction(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue)
            }, r
        }, jQuery.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Se).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                var i = jQuery.isEmptyObject(e), o = jQuery.speed(t, n, r), a = function () {
                    var t = U(this, jQuery.extend({}, e), o);
                    (i || xe.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, i = null != e && e + "queueHooks", o = jQuery.timers, a = xe.get(this);
                    if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && it.test(i) && r(a[i]);
                    for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || jQuery.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = xe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = jQuery.timers, a = r ? r.length : 0;
                    for (n.finish = !0, jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), jQuery.each(["toggle", "show", "hide"], function (e, t) {
            var n = jQuery.fn[t];
            jQuery.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, r, i)
            }
        }), jQuery.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            jQuery.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), jQuery.timers = [], jQuery.fx.tick = function () {
            var e, t = 0, n = jQuery.timers;
            for (et = jQuery.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || jQuery.fx.stop(), et = void 0
        }, jQuery.fx.timer = function (e) {
            jQuery.timers.push(e), e() ? jQuery.fx.start() : jQuery.timers.pop()
        }, jQuery.fx.interval = 13, jQuery.fx.start = function () {
            tt || (tt = setInterval(jQuery.fx.tick, jQuery.fx.interval))
        }, jQuery.fx.stop = function () {
            clearInterval(tt), tt = null
        }, jQuery.fx.speeds = {slow: 600, fast: 200, _default: 400}, jQuery.fn.delay = function (e, t) {
            return e = jQuery.fx ? jQuery.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, function () {
            var e = ne.createElement("input"), t = ne.createElement("select"), n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", te.checkOn = "" !== e.value, te.optSelected = n.selected, t.disabled = !0, te.optDisabled = !n.disabled, e = ne.createElement("input"), e.value = "t", e.type = "radio", te.radioValue = "t" === e.value
        }();
        var st, lt, ut = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function (e, t) {
                return be(this, jQuery.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    jQuery.removeAttr(this, e)
                })
            }
        }), jQuery.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Ne ? jQuery.prop(e, t, n) : (1 === o && jQuery.isXMLDoc(e) || (t = t.toLowerCase(), r = jQuery.attrHooks[t] || (jQuery.expr.match.bool.test(t) ? lt : st)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = jQuery.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void jQuery.removeAttr(e, t))
            }, removeAttr: function (e, t) {
                var n, r, i = 0, o = t && t.match(ge);
                if (o && 1 === e.nodeType)for (; n = o[i++];)r = jQuery.propFix[n] || n, jQuery.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!te.radioValue && "radio" === t && jQuery.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), lt = {
            set: function (e, t, n) {
                return t === !1 ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ut[t] || jQuery.find.attr;
            ut[t] = function (e, t, r) {
                var i, o;
                return r || (o = ut[t], ut[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ut[t] = o), i
            }
        });
        var ct = /^(?:input|select|textarea|button)$/i;
        jQuery.fn.extend({
            prop: function (e, t) {
                return be(this, jQuery.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[jQuery.propFix[e] || e]
                })
            }
        }), jQuery.extend({
            propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
                var r, i, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !jQuery.isXMLDoc(e), o && (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        return e.hasAttribute("tabindex") || ct.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), te.optSelected || (jQuery.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            jQuery.propFix[this.toLowerCase()] = this
        });
        var ft = /[\t\r\n\f]/g;
        jQuery.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, s = "string" == typeof e && e, l = 0, u = this.length;
                if (jQuery.isFunction(e))return this.each(function (t) {
                    jQuery(this).addClass(e.call(this, t, this.className))
                });
                if (s)for (t = (e || "").match(ge) || []; l < u; l++)if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ft, " ") : " ")) {
                    for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                    a = jQuery.trim(r), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, l = 0, u = this.length;
                if (jQuery.isFunction(e))return this.each(function (t) {
                    jQuery(this).removeClass(e.call(this, t, this.className))
                });
                if (s)for (t = (e || "").match(ge) || []; l < u; l++)if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ft, " ") : "")) {
                    for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                    a = e ? jQuery.trim(r) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : jQuery.isFunction(e) ? this.each(function (n) {
                    jQuery(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)for (var t, r = 0, i = jQuery(this), o = e.match(ge) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else n !== Ne && "boolean" !== n || (this.className && xe.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : xe.get(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ft, " ").indexOf(t) >= 0)return !0;
                return !1
            }
        });
        var dt = /\r/g;
        jQuery.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0];
                {
                    if (arguments.length)return r = jQuery.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, jQuery(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : jQuery.isArray(i) && (i = jQuery.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i)return t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
                }
            }
        }), jQuery.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = jQuery.find.attr(e, "value");
                        return null != t ? t : jQuery.trim(jQuery.text(e))
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++)if (n = r[l], (n.selected || l === i) && (te.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !jQuery.nodeName(n.parentNode, "optgroup"))) {
                            if (t = jQuery(n).val(), o)return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, r, i = e.options, o = jQuery.makeArray(t), a = i.length; a--;)r = i[a], (r.selected = jQuery.inArray(r.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), jQuery.each(["radio", "checkbox"], function () {
            jQuery.valHooks[this] = {
                set: function (e, t) {
                    if (jQuery.isArray(t))return e.checked = jQuery.inArray(jQuery(e).val(), t) >= 0
                }
            }, te.checkOn || (jQuery.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            jQuery.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), jQuery.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var pt = jQuery.now(), ht = /\?/;
        jQuery.parseJSON = function (e) {
            return JSON.parse(e + "")
        }, jQuery.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e)return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + e), t
        };
        var mt = /#.*$/, vt = /([?&])_=[^&]*/, gt = /^(.*?):[ \t]*([^\r\n]*)$/gm, yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, wt = /^(?:GET|HEAD)$/, bt = /^\/\//, xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, kt = {}, Ct = {}, Et = "*/".concat("*"), Tt = n.location.href, Lt = xt.exec(Tt.toLowerCase()) || [];
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt,
                type: "GET",
                isLocal: yt.test(Lt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Et,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": jQuery.parseJSON,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? P(P(e, jQuery.ajaxSettings), t) : P(jQuery.ajaxSettings, e)
            },
            ajaxPrefilter: H(kt),
            ajaxTransport: H(Ct),
            ajax: function (e, t) {
                function n(e, t, n, a) {
                    var l, c, g, y, b, k = t;
                    2 !== w && (w = 2, s && clearTimeout(s), r = void 0, o = a || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (y = R(f, x, n)), y = B(f, y, x, l), l ? (f.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (jQuery.lastModified[i] = b), b = x.getResponseHeader("etag"), b && (jQuery.etag[i] = b)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, c = y.data, g = y.error, l = !g)) : (g = k, !e && k || (k = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || k) + "", l ? h.resolveWith(d, [c, k, x]) : h.rejectWith(d, [x, k, g]), x.statusCode(v), v = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? c : g]), m.fireWith(d, [x, k]), u && (p.trigger("ajaxComplete", [x, f]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, a, s, l, u, c, f = jQuery.ajaxSetup({}, t), d = f.context || f, p = f.context && (d.nodeType || d.jquery) ? jQuery(d) : jQuery.event, h = jQuery.Deferred(), m = jQuery.Callbacks("once memory"), v = f.statusCode || {}, g = {}, y = {}, w = 0, b = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!a)for (a = {}; t = gt.exec(o);)a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (w < 2)for (t in e)v[t] = [v[t], e[t]]; else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
                if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || Tt) + "").replace(mt, "").replace(bt, Lt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = jQuery.trim(f.dataType || "*").toLowerCase().match(ge) || [""], null == f.crossDomain && (l = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === Lt[1] && l[2] === Lt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = jQuery.param(f.data, f.traditional)), I(kt, f, t, x), 2 === w)return x;
                u = jQuery.event && f.global, u && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !wt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ht.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = vt.test(i) ? i.replace(vt, "$1_=" + pt++) : i + (ht.test(i) ? "&" : "?") + "_=" + pt++)), f.ifModified && (jQuery.lastModified[i] && x.setRequestHeader("If-Modified-Since", jQuery.lastModified[i]), jQuery.etag[i] && x.setRequestHeader("If-None-Match", jQuery.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : f.accepts["*"]);
                for (c in f.headers)x.setRequestHeader(c, f.headers[c]);
                if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === w))return x.abort();
                b = "abort";
                for (c in{success: 1, error: 1, complete: 1})x[c](f[c]);
                if (r = I(Ct, f, t, x)) {
                    x.readyState = 1, u && p.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                        x.abort("timeout")
                    }, f.timeout));
                    try {
                        w = 1, r.send(g, n)
                    } catch (e) {
                        if (!(w < 2))throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (e, t, n) {
                return jQuery.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return jQuery.get(e, void 0, t, "script")
            }
        }), jQuery.each(["get", "post"], function (e, t) {
            jQuery[t] = function (e, n, r, i) {
                return jQuery.isFunction(n) && (i = i || r, r = n, n = void 0), jQuery.ajax({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }), jQuery._evalUrl = function (e) {
            return jQuery.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
        }, jQuery.fn.extend({
            wrapAll: function (e) {
                var t;
                return jQuery.isFunction(e) ? this.each(function (t) {
                    jQuery(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                    return e
                }).append(this)), this)
            }, wrapInner: function (e) {
                return jQuery.isFunction(e) ? this.each(function (t) {
                    jQuery(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = jQuery(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = jQuery.isFunction(e);
                return this.each(function (n) {
                    jQuery(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
                }).end()
            }
        }), jQuery.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, jQuery.expr.filters.visible = function (e) {
            return !jQuery.expr.filters.hidden(e)
        };
        var St = /%20/g, At = /\[\]$/, Nt = /\r?\n/g, jt = /^(?:submit|button|image|reset|file)$/i, _t = /^(?:input|select|textarea|keygen)/i;
        jQuery.param = function (e, t) {
            var n, r = [], i = function (e, t) {
                t = jQuery.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(e) || e.jquery && !jQuery.isPlainObject(e))jQuery.each(e, function () {
                i(this.name, this.value)
            }); else for (n in e)W(n, e[n], t, i);
            return r.join("&").replace(St, "+")
        }, jQuery.fn.extend({
            serialize: function () {
                return jQuery.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = jQuery.prop(this, "elements");
                    return e ? jQuery.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !jQuery(this).is(":disabled") && _t.test(this.nodeName) && !jt.test(e) && (this.checked || !Ae.test(e))
                }).map(function (e, t) {
                    var n = jQuery(this).val();
                    return null == n ? null : jQuery.isArray(n) ? jQuery.map(n, function (e) {
                        return {name: t.name, value: e.replace(Nt, "\r\n")}
                    }) : {name: t.name, value: n.replace(Nt, "\r\n")}
                }).get()
            }
        }), jQuery.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest
            } catch (e) {
            }
        };
        var Dt = 0, Ot = {}, Mt = {0: 200, 1223: 204}, qt = jQuery.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function () {
            for (var e in Ot)Ot[e]()
        }), te.cors = !!qt && "withCredentials" in qt, te.ajax = qt = !!qt, jQuery.ajaxTransport(function (e) {
            var t;
            if (te.cors || qt && !e.crossDomain)return {
                send: function (n, r) {
                    var i, o = e.xhr(), a = ++Dt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)o.setRequestHeader(i, n[i]);
                    t = function (e) {
                        return function () {
                            t && (delete Ot[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Mt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), o.onerror = t("error"), t = Ot[a] = t("abort");
                    try {
                      //  o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t)throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        }), jQuery.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    return jQuery.globalEval(e), e
                }
            }
        }), jQuery.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), jQuery.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (r, i) {
                        t = jQuery("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), ne.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ft = [], zt = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Ft.pop() || jQuery.expando + "_" + pt++;
                return this[e] = !0, e
            }
        }), jQuery.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i, o, a, s = e.jsonp !== !1 && (zt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])return i = e.jsonpCallback = jQuery.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(zt, "$1" + i) : e.jsonp !== !1 && (e.url += (ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || jQuery.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Ft.push(i)), a && jQuery.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), jQuery.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ne;
            var r = ce.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = jQuery.buildFragment([e], t, i), i && i.length && jQuery(i).remove(), jQuery.merge([], r.childNodes))
        };
        var Ut = jQuery.fn.load;
        jQuery.fn.load = function (e, t, n) {
            if ("string" != typeof e && Ut)return Ut.apply(this, arguments);
            var r, i, o, a = this, s = e.indexOf(" ");
            return s >= 0 && (r = jQuery.trim(e.slice(s)), e = e.slice(0, s)), jQuery.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && jQuery.ajax({
                url: e,
                type: i,
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
            }).complete(n && function (e, t) {
                    a.each(n, o || [e.responseText, t, e])
                }), this
        }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            jQuery.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), jQuery.expr.filters.animated = function (e) {
            return jQuery.grep(jQuery.timers, function (t) {
                return e === t.elem
            }).length
        };
        var Ht = n.document.documentElement;
        jQuery.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, l, u, c = jQuery.css(e, "position"), f = jQuery(e), d = {};
                "static" === c && (e.style.position = "relative"), s = f.offset(), o = jQuery.css(e, "top"), l = jQuery.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), jQuery.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
            }
        }, jQuery.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    jQuery.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
                if (o)return t = o.documentElement, jQuery.contains(t, r) ? (typeof r.getBoundingClientRect !== Ne && (i = r.getBoundingClientRect()), n = X(o), {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
            }, position: function () {
                if (this[0]) {
                    var e, t, n = this[0], r = {top: 0, left: 0};
                    return "fixed" === jQuery.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), jQuery.nodeName(e[0], "html") || (r = e.offset()), r.top += jQuery.css(e[0], "borderTopWidth", !0), r.left += jQuery.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - r.top - jQuery.css(n, "marginTop", !0),
                        left: t.left - r.left - jQuery.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || Ht; e && !jQuery.nodeName(e, "html") && "static" === jQuery.css(e, "position");)e = e.offsetParent;
                    return e || Ht
                })
            }
        }), jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var r = "pageYOffset" === t;
            jQuery.fn[e] = function (i) {
                return be(this, function (e, i, o) {
                    var a = X(e);
                    return void 0 === o ? a ? a[t] : e[i] : void(a ? a.scrollTo(r ? n.pageXOffset : o, r ? o : n.pageYOffset) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), jQuery.each(["top", "left"], function (e, t) {
            jQuery.cssHooks[t] = L(te.pixelPosition, function (e, n) {
                if (n)return n = T(e, t), Xe.test(n) ? jQuery(e).position()[t] + "px" : n
            })
        }), jQuery.each({Height: "height", Width: "width"}, function (e, t) {
            jQuery.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                jQuery.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return be(this, function (t, n, r) {
                        var i;
                        return jQuery.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? jQuery.css(t, n, a) : jQuery.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }), jQuery.fn.size = function () {
            return this.length
        }, jQuery.fn.andSelf = jQuery.fn.addBack, r = [], i = function () {
            return jQuery
        }.apply(t, r), !(void 0 !== i && (e.exports = i));
        var It = n.jQuery, Pt = n.$;
        return jQuery.noConflict = function (e) {
            return n.$ === jQuery && (n.$ = Pt), e && n.jQuery === jQuery && (n.jQuery = It), jQuery
        }, typeof o === Ne && (n.jQuery = n.$ = jQuery), jQuery
    })
}, , function (e, t, n) {
    (function ($) {
        "use strict";
        window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.expand = 50, n(7), n(8), n(9), n(12), n(13), n(19), n(30), n(31), n(32), $.fn.utils.initJWeixin(), function ($, e, t, n) {
            function r() {
                var e = $("body");
                e.on("click", "a", function (e) {
                    var t = $(e.currentTarget);
                    return "_blank" != t.attr("target") && t.attr("target", "_self"), !0
                })
            }

            $.fn.initLink = r
        }(window.jQuery || window.Zepto, window, document), function ($, e, t, n) {
            $(t).on("click", "[data-ga-event]", function (e) {
                var t, n = $(e.currentTarget);
                return t = n.data("ga-event").split(":"), t.length < 2 || ga("send", "event", t[0], t[1], t[2])
            })
        }(window.jQuery || window.Zepto, window, document)
    }).call(t, n(1))
}, function (e, t, n) {
    var r, i;
    !function (o, a) {
        var s = a(o, o.document);
        o.lazySizes = s, "object" == typeof e && e.exports ? e.exports = s : (r = s, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i)))
    }(window, function (e, t) {
        "use strict";
        if (t.getElementsByClassName) {
            var n, r = t.documentElement, i = e.HTMLPictureElement && "sizes" in t.createElement("img"), o = "addEventListener", a = "getAttribute", s = e[o], l = e.setTimeout, u = e.requestAnimationFrame || l, c = /^picture$/i, f = ["load", "error", "lazyincluded", "_lazyloaded"], d = {}, p = Array.prototype.forEach, h = function (e, t) {
                return d[t] || (d[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), d[t].test(e[a]("class") || "") && d[t]
            }, m = function (e, t) {
                h(e, t) || e.setAttribute("class", (e[a]("class") || "").trim() + " " + t)
            }, v = function (e, t) {
                var n;
                (n = h(e, t)) && e.setAttribute("class", (e[a]("class") || "").replace(n, " "))
            }, g = function (e, t, n) {
                var r = n ? o : "removeEventListener";
                n && g(e, t), f.forEach(function (n) {
                    e[r](n, t)
                })
            }, y = function (e, n, r, i, o) {
                var a = t.createEvent("CustomEvent");
                return a.initCustomEvent(n, !i, !o, r || {}), e.dispatchEvent(a), a
            }, w = function (t, r) {
                var o;
                !i && (o = e.picturefill || n.pf) ? o({reevaluate: !0, elements: [t]}) : r && r.src && (t.src = r.src)
            }, b = function (e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }, x = function (e, t, r) {
                for (r = r || e.offsetWidth; r < n.minSize && t && !e._lazysizesWidth;)r = t.offsetWidth, t = t.parentNode;
                return r
            }, k = function (t) {
                var n, r = 0, i = e.Date, o = function () {
                    n = !1, r = i.now(), t()
                }, a = function () {
                    l(o)
                }, s = function () {
                    u(a)
                };
                return function () {
                    if (!n) {
                        var e = 125 - (i.now() - r);
                        n = !0, e < 6 && (e = 6), l(s, e)
                    }
                }
            }, C = function () {
                var i, f, d, x, C, T, L, S, A, N, j, _, D, O, M, q = /^img$/i, F = /^iframe$/i, z = "onscroll" in e && !/glebot/.test(navigator.userAgent), U = 0, H = 0, I = 0, P = 0, R = 0, B = function (e) {
                    I--, e && e.target && g(e.target, B), (!e || I < 0 || !e.target) && (I = 0)
                }, W = function (e, n) {
                    var i, o = e, a = "hidden" == b(t.body, "visibility") || "hidden" != b(e, "visibility");
                    for (A -= n, _ += n, N -= n, j += n; a && (o = o.offsetParent) && o != t.body && o != r;)a = (b(o, "opacity") || 1) > 0, a && "visible" != b(o, "overflow") && (i = o.getBoundingClientRect(), a = j > i.left && N < i.right && _ > i.top - 1 && A < i.bottom + 1);
                    return a
                }, X = function () {
                    var e, t, o, s, l, u, c, p, h;
                    if ((C = n.loadMode) && I < 8 && (e = i.length)) {
                        t = 0, P++, null == O && ("expand" in n || (n.expand = r.clientHeight > 600 ? r.clientWidth > 860 ? 500 : 410 : 359), D = n.expand, O = D * n.expFactor), H < O && I < 1 && P > 3 && C > 2 ? (H = O, P = 0) : H = C > 1 && P > 2 && I < 6 ? D : U;
                        for (; t < e; t++)if (i[t] && !i[t]._lazyRace)if (z)if ((p = i[t][a]("data-expand")) && (u = 1 * p) || (u = H), h !== u && (L = innerWidth + u * M, S = innerHeight + u, c = u * -1, h = u), o = i[t].getBoundingClientRect(), (_ = o.bottom) >= c && (A = o.top) <= S && (j = o.right) >= c * M && (N = o.left) <= L && (_ || j || N || A) && (d && I < 3 && !p && (C < 3 || P < 4) || W(i[t], u))) {
                            if (J(i[t]), l = !0, I > 9)break
                        } else!l && d && !s && I < 4 && P < 4 && C > 2 && (f[0] || n.preloadAfterLoad) && (f[0] || !p && (_ || j || N || A || "auto" != i[t][a](n.sizesAttr))) && (s = f[0] || i[t]); else J(i[t]);
                        s && !l && J(s)
                    }
                }, V = k(X), Q = function (e) {
                    m(e.target, n.loadedClass), v(e.target, n.loadingClass), g(e.target, G)
                }, G = function (e) {
                    e = {target: e.target}, u(function () {
                        Q(e)
                    })
                }, Y = function (e, t) {
                    try {
                        e.contentWindow.location.replace(t)
                    } catch (n) {
                        e.src = t
                    }
                }, K = function (e) {
                    var t, r, i = e[a](n.srcsetAttr);
                    (t = n.customMedia[e[a]("data-media") || e[a]("media")]) && e.setAttribute("media", t), i && e.setAttribute("srcset", i), t && (r = e.parentNode, r.insertBefore(e.cloneNode(), e), r.removeChild(e))
                }, Z = function () {
                    var e, t = [], n = function () {
                        for (; t.length;)t.shift()();
                        e = !1
                    }, r = function (r) {
                        t.push(r), e || (e = !0, u(n))
                    };
                    return {add: r, run: n}
                }(), J = function (e) {
                    var t, r, i, o, s, f, b, k = q.test(e.nodeName), C = k && (e[a](n.sizesAttr) || e[a]("sizes")), T = "auto" == C;
                    (!T && d || !k || !e.src && !e.srcset || e.complete || h(e, n.errorClass)) && (T && (b = e.offsetWidth), e._lazyRace = !0, I++, n.rC && (b = n.rC(e, b) || b), Z.add(function () {
                        R++, (s = y(e, "lazybeforeunveil")).defaultPrevented || (C && (T ? (E.updateElem(e, !0, b), m(e, n.autosizesClass)) : e.setAttribute("sizes", C)), r = e[a](n.srcsetAttr), t = e[a](n.srcAttr), k && (i = e.parentNode, o = i && c.test(i.nodeName || "")), f = s.detail.firesLoad || "src" in e && (r || t || o), s = {target: e}, f && (g(e, B, !0), clearTimeout(x), x = l(B, 2500), m(e, n.loadingClass), g(e, G, !0)), o && p.call(i.getElementsByTagName("source"), K), r ? e.setAttribute("srcset", r) : t && !o && (F.test(e.nodeName) ? Y(e, t) : e.src = t), (r || o) && w(e, {src: t})), u(function () {
                            e._lazyRace && delete e._lazyRace, v(e, n.lazyClass), f && !e.complete || (f ? B(s) : I--, Q(s))
                        })
                    }))
                }, ee = function () {
                    if (!d) {
                        if (Date.now() - T < 999)return void l(ee, 999);
                        var e, t = function () {
                            n.loadMode = 3, V()
                        };
                        d = !0, n.loadMode = 3, R ? V() : l(function () {
                            X(), Z.run()
                        }), s("scroll", function () {
                            3 == n.loadMode && (n.loadMode = 2), clearTimeout(e), e = l(t, 99)
                        }, !0)
                    }
                };
                return {
                    _: function () {
                        T = Date.now(), i = t.getElementsByClassName(n.lazyClass), f = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass), M = n.hFac, s("scroll", V, !0), s("resize", V, !0), e.MutationObserver ? new MutationObserver(V).observe(r, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (r[o]("DOMNodeInserted", V, !0), r[o]("DOMAttrModified", V, !0), setInterval(V, 999)), s("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (e) {
                            t[o](e, V, !0)
                        }), /d$|^c/.test(t.readyState) ? ee() : (s("load", ee), t[o]("DOMContentLoaded", V), l(ee, 2e4)), V(i.length > 0)
                    }, checkElems: V, unveil: J
                }
            }(), E = function () {
                var e, r = function (e, t, n) {
                    var r, i, o, a, s = e.parentNode;
                    if (s && (n = x(e, s, n), a = y(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        }), !a.defaultPrevented && (n = a.detail.width, n && n !== e._lazysizesWidth))) {
                        if (e._lazysizesWidth = n, n += "px", e.setAttribute("sizes", n), c.test(s.nodeName || ""))for (r = s.getElementsByTagName("source"), i = 0, o = r.length; i < o; i++)r[i].setAttribute("sizes", n);
                        a.detail.dataAttr || w(e, a.detail)
                    }
                }, i = function () {
                    var t, n = e.length;
                    if (n)for (t = 0; t < n; t++)r(e[t])
                }, o = k(i);
                return {
                    _: function () {
                        e = t.getElementsByClassName(n.autosizesClass), s("resize", o)
                    }, checkElems: o, updateElem: r
                }
            }(), T = function () {
                T.i || (T.i = !0, E._(), C._())
            };
            return function () {
                var t, r = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.7,
                    hFac: .8,
                    loadMode: 2
                };
                n = e.lazySizesConfig || e.lazysizesConfig || {};
                for (t in r)t in n || (n[t] = r[t]);
                e.lazySizesConfig = n, l(function () {
                    n.init && T()
                })
            }(), {cfg: n, autoSizer: E, loader: C, init: T, uP: w, aC: m, rC: v, hC: h, fire: y, gW: x}
        }
    })
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    n(10), function ($, e, t, n) {
        function r(t) {
            var n = t.elContainer, r = t.elOriginContainer, i = $('<div class="packery-item combo">'), o = $('<div class="packery-item single">');
            r.find(".com-grid-article, .com-grid-key-article, .com-grid-paper, .com-grid-makemoney, .com-grid-experiment").each(function () {
                var e = $(this), t = n.find(".packery-item:last"), r = t.children().length;
                return t.hasClass("combo") ? void(e.hasClass("com-grid-article") || e.hasClass("com-grid-makemoney") ? t.append(e) : (n.append(o.clone().append(e)), r % 2 == 1 && (n.append(i.clone().append(t.children().last())), !t.children().length && t.remove()))) : !t.length || t.hasClass("single") ? void(e.hasClass("com-grid-article") || e.hasClass("com-grid-makemoney") ? n.append(i.clone().append(e)) : n.append(o.clone().append(e))) : void 0
            }), "Android" == $.ua.os.name && "QQBrowser" == $.ua.browser.name && n.find(".combo .com-grid-article").css("width", ($(e).width() - 2) / 2)
        }

        $.fn.initLayout = r
    }(window.jQuery || window.Zepto, window, document)
}, function (e, t, n) {
    var r;
    !function (i, o) {
        "use strict";
        var a = "0.7.9", s = "", l = "?", u = "function", c = "undefined", f = "object", d = "string", p = "major", h = "model", m = "name", v = "type", g = "vendor", y = "version", w = "architecture", b = "console", x = "mobile", k = "tablet", C = "smarttv", E = "wearable", T = "embedded", L = {
            extend: function (e, t) {
                for (var n in t)"browser cpu device engine os".indexOf(n) !== -1 && t[n].length % 2 === 0 && (e[n] = t[n].concat(e[n]));
                return e
            }, has: function (e, t) {
                return "string" == typeof e && t.toLowerCase().indexOf(e.toLowerCase()) !== -1
            }, lowerize: function (e) {
                return e.toLowerCase()
            }, major: function (e) {
                return typeof e === d ? e.split(".")[0] : o
            }
        }, S = {
            rgx: function () {
                for (var e, t, n, r, i, a, s, l = 0, d = arguments; l < d.length && !a;) {
                    var p = d[l], h = d[l + 1];
                    if (typeof e === c) {
                        e = {};
                        for (r in h)i = h[r], typeof i === f ? e[i[0]] = o : e[i] = o
                    }
                    for (t = n = 0; t < p.length && !a;)if (a = p[t++].exec(this.getUA()))for (r = 0; r < h.length; r++)s = a[++n], i = h[r], typeof i === f && i.length > 0 ? 2 == i.length ? typeof i[1] == u ? e[i[0]] = i[1].call(this, s) : e[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== u || i[1].exec && i[1].test ? e[i[0]] = s ? s.replace(i[1], i[2]) : o : e[i[0]] = s ? i[1].call(this, s, i[2]) : o : 4 == i.length && (e[i[0]] = s ? i[3].call(this, s.replace(i[1], i[2])) : o) : e[i] = s ? s : o;
                    l += 2
                }
                return e
            }, str: function (e, t) {
                for (var n in t)if (typeof t[n] === f && t[n].length > 0) {
                    for (var r = 0; r < t[n].length; r++)if (L.has(t[n][r], e))return n === l ? o : n
                } else if (L.has(t[n], e))return n === l ? o : n;
                return e
            }
        }, A = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {model: {"Fire Phone": ["SD", "KF"]}},
                sprint: {model: {"Evo Shift 4G": "7373KT"}, vendor: {HTC: "APA", Sprint: "Sprint"}}
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2000: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        }, N = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [m, y], [/\s(opr)\/([\w\.]+)/i], [[m, "Opera"], y], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i], [m, y], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[m, "IE"], y], [/(edge)\/((\d+)?[\w\.]+)/i], [m, y], [/(yabrowser)\/([\w\.]+)/i], [[m, "Yandex"], y], [/(comodo_dragon)\/([\w\.]+)/i], [[m, /_/g, " "], y], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i], [m, y], [/(dolfin)\/([\w\.]+)/i], [[m, "Dolphin"], y], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[m, "Chrome"], y], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [y, [m, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [y, [m, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [y, [m, "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [y, [m, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [y, m], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [m, [y, S.str, A.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [m, y], [/(navigator|netscape)\/([\w\.-]+)/i], [[m, "Netscape"], y], [/fxios\/([\w\.-]+)/i], [y, [m, "Firefox"]], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [m, y]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[w, "amd64"]], [/(ia32(?=;))/i], [[w, L.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[w, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[w, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[w, /ower/, "", L.lowerize]], [/(sun4\w)[;\)]/i], [[w, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[w, L.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [h, g, [v, k]], [/applecoremedia\/[\w\.]+ \((ipad)/], [h, [g, "Apple"], [v, k]], [/(apple\s{0,1}tv)/i], [[h, "Apple TV"], [g, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [g, h, [v, k]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [h, [g, "Amazon"], [v, k]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[h, S.str, A.device.amazon.model], [g, "Amazon"], [v, x]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [h, g, [v, x]], [/\((ip[honed|\s\w*]+);/i], [h, [g, "Apple"], [v, x]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [g, h, [v, x]], [/\(bb10;\s(\w+)/i], [h, [g, "BlackBerry"], [v, x]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [h, [g, "Asus"], [v, k]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[g, "Sony"], [h, "Xperia Tablet"], [v, k]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[g, "Sony"], [h, "Xperia Phone"], [v, x]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [g, h, [v, b]], [/android.+;\s(shield)\sbuild/i], [h, [g, "Nvidia"], [v, b]], [/(playstation\s[3portablevi]+)/i], [h, [g, "Sony"], [v, b]], [/(sprint\s(\w+))/i], [[g, S.str, A.device.sprint.vendor], [h, S.str, A.device.sprint.model], [v, x]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [g, h, [v, k]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [g, [h, /_/g, " "], [v, x]], [/(nexus\s9)/i], [h, [g, "HTC"], [v, k]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [h, [g, "Microsoft"], [v, b]], [/(kin\.[onetw]{3})/i], [[h, /\./g, " "], [g, "Microsoft"], [v, x]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i], [h, [g, "Motorola"], [v, x]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [h, [g, "Motorola"], [v, k]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[g, "Samsung"], h, [v, k]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[g, "Samsung"], h, [v, x]], [/(samsung);smarttv/i], [g, h, [v, C]], [/\(dtv[\);].+(aquos)/i], [h, [g, "Sharp"], [v, C]], [/sie-(\w+)*/i], [h, [g, "Siemens"], [v, x]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[g, "Nokia"], h, [v, x]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [h, [g, "Acer"], [v, k]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[g, "LG"], h, [v, k]], [/(lg) netcast\.tv/i], [g, h, [v, C]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [h, [g, "LG"], [v, x]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [h, [g, "Lenovo"], [v, k]], [/linux;.+((jolla));/i], [g, h, [v, x]], [/((pebble))app\/[\d\.]+\s/i], [g, h, [v, E]], [/android.+;\s(glass)\s\d/i], [h, [g, "Google"], [v, E]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[h, /_/g, " "], [g, "Xiaomi"], [v, x]], [/(mobile|tablet);.+rv\:.+gecko\//i], [[v, L.lowerize], g, h]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [y, [m, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [m, y], [/rv\:([\w\.]+).*(gecko)/i], [y, m]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [m, y], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [m, [y, S.str, A.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[m, "Windows"], [y, S.str, A.os.windows.version]], [/\((bb)(10);/i], [[m, "BlackBerry"], y], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [m, y], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[m, "Symbian"], y], [/\((series40);/i], [m], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[m, "Firefox OS"], y], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [m, y], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[m, "Chromium OS"], y], [/(sunos)\s?([\w\.]+\d)*/i], [[m, "Solaris"], y], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [m, y], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[m, "iOS"], [y, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[m, "Mac OS"], [y, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [m, y]]
        }, j = function (e, t) {
            if (!(this instanceof j))return new j(e, t).getResult();
            var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : s), r = t ? L.extend(N, t) : N;
            return this.getBrowser = function () {
                var e = S.rgx.apply(this, r.browser);
                return e.major = L.major(e.version), e
            }, this.getCPU = function () {
                return S.rgx.apply(this, r.cpu)
            }, this.getDevice = function () {
                return S.rgx.apply(this, r.device)
            }, this.getEngine = function () {
                return S.rgx.apply(this, r.engine)
            }, this.getOS = function () {
                return S.rgx.apply(this, r.os)
            }, this.getResult = function () {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function () {
                return n
            }, this.setUA = function (e) {
                return n = e, this
            }, this.setUA(n), this
        };
        j.VERSION = a, j.BROWSER = {NAME: m, MAJOR: p, VERSION: y}, j.CPU = {ARCHITECTURE: w}, j.DEVICE = {
            MODEL: h,
            VENDOR: g,
            TYPE: v,
            CONSOLE: b,
            MOBILE: x,
            SMARTTV: C,
            TABLET: k,
            WEARABLE: E,
            EMBEDDED: T
        }, j.ENGINE = {NAME: m, VERSION: y}, j.OS = {
            NAME: m,
            VERSION: y
        }, typeof t !== c ? (typeof e !== c && e.exports && (t = e.exports = j), t.UAParser = j) : "function" === u && n(11) ? (r = function () {
            return j
        }.call(t, n, t, e), !(r !== o && (e.exports = r))) : i.UAParser = j;
        var $ = i.jQuery || i.Zepto;
        if (typeof $ !== c) {
            var _ = new j;
            $.ua = _.getResult(), $.ua.get = function () {
                return _.getUA()
            }, $.ua.set = function (e) {
                _.setUA(e);
                var t = _.getResult();
                for (var n in t)$.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : this)
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(t, {})
}, function (e, t) {
    "use strict";
    !function ($, e, t, n) {
        function r(e) {
            var t = $("body"), n = $.fn.utils.getComponentInstance(".com-header"), r = $.fn.utils.getComponentInstance(".com-header-brief");
            n && (n.updateLoginInfo(), t.find(".com-login-popup").on("LoginPopup::loginsuccess", function (e) {
                $.fn.utils.getComponentInstance(".com-header").updateLoginInfo()
            }), t.find(".com-login-popup").on("LoginPopup::registersuccess", function (e) {
                $.fn.utils.getComponentInstance(".com-header").updateLoginInfo()
            }), t.find(".com-mob-comment-popup").on("MobCommentPopup::login", function (e) {
                t.find(".com-header").trigger("Header::login")
            }), t.find(".com-grid-column").on("GridColumn::login", function (e) {
                t.find(".com-header").trigger("Header::login")
            }), t.find(".com-comment-popup").on("CommentPopup::login", function (e) {
                t.find(".com-header").trigger("Header::login")
            })), r && r.updateLoginInfo()
        }

        $.fn.initLoginStatus = r
    }(window.jQuery || window.Zepto, window, document)
}, function (e, t, n) {
    (function (e) {
        "use strict";
        n(14), n(15), n(16), n(17), n(18), function ($, t, n, r) {
            $.fn.utils = {
                getComponentInstance: function (e) {
                    var t;
            //        return "undefined" == typeof e ? null : ("string" == typeof e && (e = $(e)), e = e.eq(0), t = e.attr("data-guid"), COMS[t])
                }, showNotification: function (e) {
                    var n, r = '<div class="com-notification">\t                                        <div class="notification-bd">\t                                            <p class="msg"></p>\t                                        </div>\t                                    </div>';
                    0 == $(".com-notification").length && $("body").append(r), n = $(".com-notification"), n.find(".msg").text(e || "出错啦~"), n.css({
                        left: ($(t).outerWidth() - n.outerWidth()) / 2,
                        top: ($(t).outerHeight() - n.outerHeight()) / 2 - 40
                    }), $.fn.utils.setErrorMessageLocation(n), n.fadeIn(), setTimeout(function () {
                        $.fn.utils.hideNotification()
                    }, 2e3)
                }, setScreenInnerSize: function (e) {
                    switch (e.size) {
                        case"width":
                            t.screen.width < t.innerWidth && e.obj.css("width", t.innerWidth);
                            break;
                        case"height":
                            t.screen.height < t.innerHeight && e.obj.css("height", t.innerHeight);
                            break;
                        case"all":
                            t.screen.width < t.innerWidth && e.obj.css("width", t.innerWidth), t.screen.height < t.innerHeight && e.obj.css("height", t.innerHeight)
                    }
                }, setErrorMessageLocation: function (e) {
                    t.screen.width < t.innerWidth && e.css("left", (t.innerWidth - $(".com-notification").outerWidth()) / 2), t.screen.height < t.innerHeight && e.css("top", (t.innerHeight - $(".com-notification").outerHeight()) / 2 - 40)
                }, hideNotification: function () {
                    $(".com-notification").length && $(".com-notification").fadeOut(function () {
                        $(".com-notification").remove()
                    })
                }, isLogined: function e() {
                    var t = $(".com-page-header, .com-card-header, .com-header"), e = t.attr("data-isLogined");
                    switch (e) {
                        case"true":
                            e = !0;
                            break;
                        case"false":
                            e = !1;
                            break;
                        default:
                            e = !1
                    }
                    return e
                }, smartDate: function (e) {
                    "string" == typeof e && (e = $(e)), e.each(function () {
                        var e, t, n = $(this), r = !1, i = !1, o = !1, a = new Date;
                        n.attr("data-originDate") && (e = new Date(n.attr("data-originDate").replace(/-/g, "/")), t = Math.round((a.getTime() - e.getTime()) / 6e4), t <= 60 * a.getHours() && (r = !0), a.getDate() - e.getDate() == 1 && (i = !0), a.getFullYear() - e.getFullYear() >= 1 && (o = !0), t < 30 && r ? n.text("刚刚") : t < 60 && r ? n.text(t + " 分钟前") : t < 1440 && r ? n.text(Math.floor(t / 60) + " 小时前") : t < 2880 && i ? n.text("昨天") : o ? n.text(e.getFullYear() + " 年 " + (e.getMonth() + 1) + " 月 " + e.getDate() + " 日") : n.text(e.getMonth() + 1 + " 月 " + e.getDate() + " 日"))
                    })
                }, smartDotdotdot: function (e) {
                    "string" == typeof e && (e = $(e)), e.each(function () {
                        $(this);
                        e.dotdotdot({wrap: "letter"})
                    })
                }, smartLines: function (e) {
                    "string" == typeof e && (e = $(e)), e.each(function () {
                        var e, t, n, r, i, o = $(this), a = /\b\S+\b$/g;
                        for (o.find(".line").remove(), n = o.attr("data-originText"), e = $('<span class="line isolated"></span>').text(n), t = $('<span class="line"></span>'), o.append(e), r = n; r && e.outerWidth() > o.outerWidth();)i = 0, /[a-zA-Z]/.test(r[r.length - 1]) && (i = r.match(a)[0].length), r = r.slice(0, r.length - 1 - i), e.text(r);
                        r.length < n.length && (t.text(n.slice(r.length, n.length)), o.append(t)), e.removeClass("isolated hidden")
                    })
                }, readStatistic: function (e, t) {
                    var n, r = $("body"), i = r.attr("data-postId") || 0, e = e || 0, t = t || "web", o = !1, a = (new Date).getTime();
                    o = o || r.hasClass("articles show"), o = o || r.hasClass("cards show"), o = o || r.hasClass("papers show"), o = o || r.hasClass("mobs show"), o && (n = "http://dataad.somecoding.com/read/" + i + "-" + e + "-" + t + ".gif?" + a, r.find(".read-statistic").remove(), r.append($('<img class="read-statistic hidden" src="' + n + '" />')))
                }, iframeCallup: function (e, t) {
                    function r(e) {
                        function t(t) {
                            t > 1200 || n.hidden || n.webkitHidden || n.mozHidden || n.msHidden ? e && e(!0) : e && e(!1)
                        }

                        var r, i, o = +new Date, a = 0;
                        r = setInterval(function () {
                            a++, i = +new Date - o, (a >= 50 || i > 1200) && (clearInterval(r), t(i))
                        }, 20)
                    }

                    var i = n.createElement("iframe");
                    i.src = e, i.style.display = "none", t && r(function (e) {
                        t(e)
                    }), n.body.appendChild(i);
                    var o;
                    o = setTimeout(function () {
                        n.body.removeChild(i)
                    }, 1e3)
                }, callupApp: function (t, n) {
                    var r, i, o = this, a = new e, s = a.getBrowser(), l = a.getOS(), u = navigator.userAgent, c = ("Mobile Safari" == s.name, "Chrome" == s.name, u.match(/UCBrowser/i)), f = u.match(/QQBrowser/i) && !u.match(/MicroMessenger/i) && !u.match(/QQ\//i), d = u.match(/baidubrowser/i), p = (u.match(/Sogou/i), function (e) {
                        e || (location.href = "/mobile/downloads.html")
                    }), h = function (e) {
                        e || (location.href = "/mobile/downloads/callup/1.html")
                    };
                    if (r = l.name, i = l.version, "Android" == r)this.versionCompare(i, "6.0.0") >= 0 ? (c || f || d) && (n = h) : this.versionCompare(i, "5.0.0") >= 0 ? (d || f || c) && (n = h) : this.versionCompare(i, "4.0.0") >= 0 && (c || f) && (n = h); else if ("iOS" == r && this.versionCompare(i, "9.0.0") >= 0)return !0;
                    return o.iframeCallup(t, n || p), !1
                }, getUrlScheme: function () {
                    var e, t, r, i, o = $("body"), a = "qdaily://app";
                    return t = location.pathname.match(/\d+/gi), t && t.length >= 1 && (e = t[0]), i = n.title.split("_"), i && i.length >= 1 && (r = i[0]), o.hasClass("homes index") ? a += "/homes?type=homes" : o.hasClass("papers index") ? a += "/labs?type=labs" : o.hasClass("special_columns index") ? a += "/columnCenter?type=columnCenter" : o.hasClass("tags index") ? a += "/tag?type=tag&id=" + e + "&title=" + r : o.hasClass("categories index") ? a += "/category?type=category&id=" + e + "&title=" + r : o.hasClass("special_columns show") ? a += "/column?type=column&id=" + e + "&title=" + r : o.hasClass("articles show") || o.hasClass("cards show") ? a += "/article?type=article&id=" + e : o.hasClass("papers show") ? a += "/paper?type=paper&id=" + e : o.hasClass("papers done") ? a += "/paper?type=paper&id=" + e : o.hasClass("mobs show") ? a += "/mob?type=mob&id=" + e : o.hasClass("tots show") ? a += "/tot?type=tot&id=" + e : o.hasClass("choices show") ? a += "/choice?type=choice&id=" + e : o.hasClass("whos show") && (a += "/who?type=who&id=" + e), a
                }, addLocationHost: function (n) {
                    var r, i = new e, o = i.getOS(), a = o.name, s = o.version, l = "https://", u = l + t.location.host, c = (u.search("http"), u.search("https"), "m.qdaily.com"), f = "test.m.qdaily.com", d = "test1.m.qdaily.com";
                    if ("iOS" == a) {
                        if (this.versionCompare(s, "9.0.0") < 0)return !1;
                        if (u.search(f) != -1 || u.search("qdaily") == -1)return !1;
                        u.search(d) != -1 ? r = u.replace("test1.m.qdaily", "test.m.qdaily") : u.search(c) != -1 && (r = u.replace("m.qdaily", "ms.qdaily")), n.each(function (e, t) {
                            var n = $(t).attr("href");
                            "/" == n.substring(0, 1) && $(t).attr("href", r + n)
                        })
                    }
                }, addParameter: function (t) {
                    var n, r, i, o = this, a = (o.el, new e), s = a.getOS(), l = s.name, u = s.version, c = t.attr("href");
                    n = this.getUrlScheme(), i = n.split("?")[1], i = i.replace(/\d+/g, t.attr("data-id")), r = c + "?" + i, "iOS" == l && this.versionCompare(u, "9.0.0") >= 0 && (r += "&redirect=true"), t.attr("href", r)
                }, versionCompare: function (e, t) {
                    var n, r, i, o, a;
                    for (o = e.replace(/(\.0+)+$/, "").split("."), a = t.replace(/(\.0+)+$/, "").split("."), r = Math.min(o.length, a.length), n = 0; n < r; n++) {
                        if (i = parseInt(o[n], 10) - parseInt(a[n], 10), i > 0)return 1;
                        if (i < 0)return -1
                    }
                    return 0
                }, initJWeixin: function (e, n, r) {
                    $.ajax({
                        url: "/oauth_sessions/weixin_share_information",
                        type: "POST",
                        dataType: "json",
                        data: {signurl: t.location.href.replace(/#.*$/gi, "")},
                        success: function (e) {
                            if (e && e.status) {
                                var i = e.data, o = $.extend({}, i.weixin), a = $.extend({
                                    title: "好奇心日报",
                                    text: "好奇心日报",
                                    image: "http://app3.qdaily.com/img/app3/logo.jpg",
                                    url: t.location.href.replace(/#.*$/gi, "")
                                }, i.share);
                                wx.config({
                                    debug: !1,
                                    appId: o.appId,
                                    nonceStr: o.nonceStr,
                                    signature: o.signature,
                                    timestamp: o.timestamp,
                                    jsApiList: n || ["onMenuShareTimeline", "onMenuShareAppMessage"]
                                }), wx.ready(function () {
                                    r ? r() : (wx.onMenuShareTimeline({
                                        title: a.title,
                                        link: a.url,
                                        imgUrl: a.image,
                                        success: function () {
                                        },
                                        cancel: function () {
                                        }
                                    }), wx.onMenuShareAppMessage({
                                        title: a.title,
                                        desc: a.text,
                                        link: a.url,
                                        imgUrl: a.image,
                                        type: "",
                                        dataUrl: "",
                                        success: function () {
                                        },
                                        cancel: function () {
                                        }
                                    }))
                                }), wx.error(function (e) {
                                })
                            }
                        },
                        error: function (e) {
                        }
                    })
                }
            }
        }(window.jQuery || window.Zepto, window, document)
    }).call(t, n(10))
}, function (e, t) {
    !function ($, e) {
        function t(e, t, n) {
            var r = e.children(), o = !1;
            e.empty();
            for (var a = 0, s = r.length; a < s; a++) {
                var l = r.eq(a);
                if (e.append(l), n && e.append(n), i(e, t)) {
                    l.remove(), o = !0;
                    break
                }
                n && n.detach()
            }
            return o
        }

        function n(e, t, o, a, s) {
            var l = !1, u = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style", c = "script, .dotdotdot-keep";
            return e.contents().detach().each(function () {
                var f = this, d = $(f);
                if ("undefined" == typeof f || 3 == f.nodeType && 0 == $.trim(f.data).length)return !0;
                if (d.is(c))e.append(d); else {
                    if (l)return !0;
                    e.append(d), s && e[e.is(u) ? "after" : "append"](s), i(o, a) && (l = 3 == f.nodeType ? r(d, t, o, a, s) : n(d, t, o, a, s), l || (d.detach(), l = !0)), l || s && s.detach()
                }
            }), l
        }

        function r(e, t, n, r, a) {
            var u = e[0];
            if (!u)return !1;
            var f = l(u), d = f.indexOf(" ") !== -1 ? " " : "　", p = "letter" == r.wrap ? "" : d, h = f.split(p), m = -1, v = -1, g = 0, y = h.length - 1;
            for (r.fallbackToLetter && 0 == g && 0 == y && (p = "", h = f.split(p), y = h.length - 1); g <= y && (0 != g || 0 != y);) {
                var w = Math.floor((g + y) / 2);
                if (w == v)break;
                v = w, s(u, h.slice(0, v + 1).join(p) + r.ellipsis), i(n, r) ? (y = v, r.fallbackToLetter && 0 == g && 0 == y && (p = "", h = h[0].split(p), m = -1, v = -1, g = 0, y = h.length - 1)) : (m = v, g = v)
            }
            if (m == -1 || 1 == h.length && 0 == h[0].length) {
                var b = e.parent();
                e.detach();
                var x = a && a.closest(b).length ? a.length : 0;
                b.contents().length > x ? u = c(b.contents().eq(-1 - x), t) : (u = c(b, t, !0), x || b.detach()), u && (f = o(l(u), r), s(u, f), x && a && $(u).parent().append(a))
            } else f = o(h.slice(0, m + 1).join(p), r), s(u, f);
            return !0
        }

        function i(e, t) {
            return e.innerHeight() > t.maxHeight
        }

        function o(e, t) {
            for (; $.inArray(e.slice(-1), t.lastCharacter.remove) > -1;)e = e.slice(0, -1);
            return $.inArray(e.slice(-1), t.lastCharacter.noEllipsis) < 0 && (e += t.ellipsis), e
        }

        function a(e) {
            return {width: e.innerWidth(), height: e.innerHeight()}
        }

        function s(e, t) {
            e.innerText ? e.innerText = t : e.nodeValue ? e.nodeValue = t : e.textContent && (e.textContent = t)
        }

        function l(e) {
            return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : ""
        }

        function u(e) {
            do e = e.previousSibling; while (e && 1 !== e.nodeType && 3 !== e.nodeType);
            return e
        }

        function c(e, t, n) {
            var r, i = e && e[0];
            if (i) {
                if (!n) {
                    if (3 === i.nodeType)return i;
                    if ($.trim(e.text()))return c(e.contents().last(), t)
                }
                for (r = u(i); !r;) {
                    if (e = e.parent(), e.is(t) || !e.length)return !1;
                    r = u(e[0])
                }
                if (r)return c($(r), t)
            }
            return !1
        }

        function f(e, t) {
            return !!e && ("string" == typeof e ? (e = $(e, t), !!e.length && e) : !!e.jquery && e)
        }

        function d(e) {
            for (var t = e.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, i = n.length; r < i; r++) {
                var o = parseInt(e.css(n[r]), 10);
                isNaN(o) && (o = 0), t -= o
            }
            return t
        }

        if (!$.fn.dotdotdot) {
            $.fn.dotdotdot = function (e) {
                if (0 == this.length)return $.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
                if (this.length > 1)return this.each(function () {
                    $(this).dotdotdot(e)
                });
                var r = this;
                r.data("dotdotdot") && r.trigger("destroy:dot"), r.data("dotdotdot-style", r.attr("style") || ""), r.css("word-wrap", "break-word"), "nowrap" === r.css("white-space") && r.css("white-space", "normal"), r.bind_events = function () {
                    return r.bind("update:dot", function (e, a) {
                        e.preventDefault(), e.stopPropagation(), s.maxHeight = "number" == typeof s.height ? s.height : d(r), s.maxHeight += s.tolerance, "undefined" != typeof a && (("string" == typeof a || a instanceof HTMLElement) && (a = $("<div />").append(a).contents()), a instanceof $ && (o = a)), h = r.wrapInner('<div class="dotdotdot" />').children(), h.contents().detach().end().append(o.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                            height: "auto",
                            width: "auto",
                            border: "none",
                            padding: 0,
                            margin: 0
                        });
                        var u = !1, c = !1;
                        return l.afterElement && (u = l.afterElement.clone(!0), u.show(), l.afterElement.detach()), i(h, s) && (c = "children" == s.wrap ? t(h, s, u) : n(h, r, h, s, u)), h.replaceWith(h.contents()), h = null, $.isFunction(s.callback) && s.callback.call(r[0], c, o), l.isTruncated = c, c
                    }).bind("isTruncated:dot", function (e, t) {
                        return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(r[0], l.isTruncated), l.isTruncated
                    }).bind("originalContent:dot", function (e, t) {
                        return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(r[0], o), o
                    }).bind("destroy:dot", function (e) {
                        e.preventDefault(), e.stopPropagation(), r.unwatch().unbind_events().contents().detach().end().append(o).attr("style", r.data("dotdotdot-style") || "").data("dotdotdot", !1)
                    }), r
                }, r.unbind_events = function () {
                    return r.unbind(".dot"), r
                }, r.watch = function () {
                    if (r.unwatch(), "window" == s.watch) {
                        var e = $(window), t = e.width(), n = e.height();
                        e.bind("resize.dot" + l.dotId, function () {
                            t == e.width() && n == e.height() && s.windowResizeFix || (t = e.width(), n = e.height(), c && clearInterval(c), c = setTimeout(function () {
                                r.trigger("update:dot")
                            }, 100))
                        })
                    } else u = a(r), c = setInterval(function () {
                        if (r.is(":visible")) {
                            var e = a(r);
                            u.width == e.width && u.height == e.height || (r.trigger("update:dot"), u = e)
                        }
                    }, 500);
                    return r
                }, r.unwatch = function () {
                    return $(window).unbind("resize.dot" + l.dotId), c && clearInterval(c), r
                };
                var o = r.contents(), s = $.extend(!0, {}, $.fn.dotdotdot.defaults, e), l = {}, u = {}, c = null, h = null;
                return s.lastCharacter.remove instanceof Array || (s.lastCharacter.remove = $.fn.dotdotdot.defaultArrays.lastCharacter.remove), s.lastCharacter.noEllipsis instanceof Array || (s.lastCharacter.noEllipsis = $.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), l.afterElement = f(s.after, r), l.isTruncated = !1, l.dotId = p++, r.data("dotdotdot", !0).bind_events().trigger("update:dot"), s.watch && r.watch(), r
            }, $.fn.dotdotdot.defaults = {
                ellipsis: "... ",
                wrap: "word",
                fallbackToLetter: !0,
                lastCharacter: {},
                tolerance: 0,
                callback: null,
                after: null,
                height: null,
                watch: !1,
                windowResizeFix: !0
            }, $.fn.dotdotdot.defaultArrays = {
                lastCharacter: {
                    remove: [" ", "　", ",", ";", ".", "!", "?"],
                    noEllipsis: []
                }
            }, $.fn.dotdotdot.debug = function (e) {
            };
            var p = 1, h = $.fn.html;
            $.fn.html = function (t) {
                return t != e && !$.isFunction(t) && this.data("dotdotdot") ? this.trigger("update", [t]) : h.apply(this, arguments)
            };
            var m = $.fn.text;
            $.fn.text = function (t) {
                return t != e && !$.isFunction(t) && this.data("dotdotdot") ? (t = $("<div />").text(t).html(), this.trigger("update", [t])) : m.apply(this, arguments)
            }
        }
    }(window.jQuery || window.Zepto)
}, function (e, t) {
    "use strict";
    !function ($, e, t, n) {
        function r(e) {
            var r = !1, i = "Webkit Moz ms O".split(" "), o = t.createElement("div"), a = null;
            if (e = e.toLowerCase(), o.style[e] !== n && (r = !0), r === !1) {
                a = e.charAt(0).toUpperCase() + e.substr(1);
                for (var s = 0; s < i.length; s++)if (o.style[i[s] + a] !== n) {
                    r = !0;
                    break
                }
            }
            return r
        }

        $.fn.animationEnd = function (e) {
            this.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", e), r("animation") === !1 && e()
        }, $.fn.transitionEnd = function (e) {
            this.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", e), r("transition") === !1 && e()
        }
    }(window.jQuery || window.Zepto, window, document)
}, function (e, t) {
    "use strict";
    !function ($, e, t, n) {
        function r(e) {
            var t, n, r = $(e), i = !1, o = !1, a = !1, s = new Date;
            r.attr("data-originDate") && (t = new Date(r.attr("data-originDate").replace(/-/g, "/")), n = Math.round((s.getTime() - t.getTime()) / 6e4), n <= 60 * s.getHours() && (i = !0), s.getDate() - t.getDate() == 1 && (o = !0), s.getFullYear() - t.getFullYear() >= 1 && (a = !0), n < 30 && i ? r.text("刚刚") : n < 60 && i ? r.text(n + " 分钟前") : n < 1440 && i ? r.text(Math.floor(n / 60) + " 小时前") : n < 2880 && o ? r.text("昨天") : a ? r.text(t.getFullYear() + " 年 " + (t.getMonth() + 1) + " 月 " + t.getDate() + " 日") : r.text(t.getMonth() + 1 + " 月 " + t.getDate() + " 日"))
        }

        $.fn.smartDate = function () {
            return this.each(function () {
                r(this)
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, function (e, t, n) {
    "use strict";
    n(14), function ($, e, t, n) {
        $.fn.smartDotdotdot = function () {
            return this.each(function () {
                var e = $(this);
                e.dotdotdot({wrap: "letter"})
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, function (e, t) {
    "use strict";
    !function ($, e, t, n) {
        function r(e) {
            var t, n, r, i, o, a = $(e), s = /\b\S+\b$/g;
            for (a.find(".line").remove(), r = a.attr("data-originText"), t = $('<span class="line isolated"></span>').text(r), n = $('<span class="line"></span>'), a.append(t), i = r; i && t.outerWidth() > a.outerWidth();)o = 0, /[a-zA-Z]/.test(i[i.length - 1]) && (o = i.match(s)[0].length), i = i.slice(0, i.length - 1 - o), t.text(i);
            i.length < r.length && (n.text(r.slice(i.length, r.length)), a.append(n)), t.removeClass("isolated hidden")
        }

        $.fn.smartLines = function () {
            return this.each(function () {
                r(this)
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, function (e, t, n) {
    (function (e, t) {
        "use strict";
        n(27), function ($, r, i, o) {
            function a(e) {
                this.isLoading = !1, this.options = t.extend({
                    formatURL: function (e) {
                        return e.baseUrl + e.lastKey + ".json"
                    }
                }, e || {}), this.bindEvents(), this.init()
            }

            var s = new e(n(29));
            a.prototype = {
                bindEvents: function () {
                    var e = this, t = e.options, n = t.elLoader;
                    n && n.on("Loader::showmore", function (t) {
                        e.ajaxFetch()
                    })
                }, init: function () {
                    var e = this, n = e.options, i = n.elLoader, o = n.forbidLoadCondition, a = n.scrollContainer || r;
                    e.initMakemoney(), i && i.Loader(), n.prefetch && e.ajaxFetch(), n.packery && e.initPackery(), $(a).on("scroll", t.throttle(function (t) {
                        if (!(e.isLoading || o && o())) {
                            var i = $(r), a = i.scrollTop(), s = i.height(), l = n.elContainer, u = l.height(), c = l.offset().top;
                            a + s + 60 >= c + u && e.ajaxFetch()
                        }
                    }, 300, {leading: !1}))
                }, initMakemoney: function () {
                    var e, t = this, n = t.options, i = n.elContainer;
                    r.makemoneyData && r.makemoneyData.fixed && (e = r.makemoneyData.fixed, e = e.sort(function (e, t) {
                        return !(e.position <= t.position)
                    }), $.each(e, function (e, t) {
                        var n = t.position, r = i.find(".packery-item:lt(" + n + ").size1x2").length, o = i.find(".packery-item:eq(" + (n - r) + ")"), a = $(s.render(t));
                        a.find(".com-grid-article").GridArticle(), a.find(".com-grid-key-article").GridKeyArticle(), a.find(".com-grid-banner-article").GridBannerArticle(), a.find(".com-grid-makemoney-article").GridMakemoney(), a.find(".com-video-player").VideoPlayer(), 0 == o.length ? i.append(a) : o.before(a)
                    }))
                }, initPackery: function () {
                    var e = this, t = e.options, n = t.elContainer;
                    n.packery({
                        isInitLayout: !1,
                        itemSelector: ".packery-item",
                        stamp: ".packery-stamp",
                        gutter: 10,
                        transitionDuration: 0
                    }), n.packery("on", "layoutComplete", function (e) {
                        $.each(e, function (e, t) {
                            var n = $(t.element);
                            n.css("visibility", "visible"), n.addClass("animated fadeIn")
                        })
                    }), n.packery()
                }, ajaxFetch: function () {
                    var e = this, t = e.options;
                    switch (e.isLoading = !0, t.type) {
                        case"lastKey":
                            e.ajaxFetchByLastkey();
                            break;
                        default:
                            e.ajaxFetchByLastkey()
                    }
                }, ajaxFetchByLastkey: function () {
                    var e = this, t = e.options, n = (t.elContainer, t.formatURL), r = t.elLoader, i = $.fn.utils.getComponentInstance(r);
                    $.ajax({url: n.apply(this, [t]), type: "GET", dataType: "json", data: {}}).done(function (n) {
                        if (n && n.status) {
                            var r = n.data;
                            if (!r || 0 === (r.feeds || r.columns).length)return t.noDataCallback && t.noDataCallback(), e.isLoading = !0, void(i && i.setStatus("nomore"));
                            t.doneCallback && t.doneCallback(r), r.has_more ? (e.isLoading = !1, t.lastKey = r.last_key) : (e.isLoading = !0, i && i.setStatus("nomore"))
                        } else e.isLoading = !0, i && i.setStatus("nomore")
                    }).fail(function (t) {
                        e.isLoading = !0, i && i.setStatus("nomore")
                    })
                }
            }, $.fn.initLoadMore = function (e) {
                var t;
                t = new a(e)
            }
        }(window.jQuery || window.Zepto, window, document)
    }).call(t, n(20), n(26))
}, function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i, o, a, s) {
        this.name = e, this.originalName = o || e, this.runtime = t, this.root = n, this.pos = {line: 1}, this.scope = r, this.buffer = i, this.fn = a, this.parent = s
    }

    function i(e, t, n) {
        var r = n[0], i = e && e[r] || t && t[r] || g[r];
        if (1 === n.length)return i;
        if (i)for (var o = n.length, a = 1; a < o; a++)if (i = i[n[a]], !i)return !1;
        return i
    }

    function o(e, t) {
        var n = e.split("/"), r = t.split("/");
        n.pop();
        for (var i = 0, o = r.length; i < o; i++) {
            var a = r[i];
            "." !== a && (".." === a ? n.pop() : n.push(a))
        }
        return n.join("/")
    }

    function a(e, t, n, r, o, a) {
        var s = void 0, l = void 0, u = void 0;
        if (a || (u = i(e.runtime.commands, e.root.config.commands, o)), u)return u.call(e, t, n, r);
        if (u !== !1) {
            var c = o.slice(0, -1);
            if (s = t.resolve(c, a), null === s || void 0 === s)return r.error("Execute function `" + o.join(".") + "` Error: " + c.join(".") + " is undefined or null"), r;
            if (l = s[o[o.length - 1]])try {
                return l.apply(s, n.params || [])
            } catch (e) {
                return r.error("Execute function `" + o.join(".") + "` Error: " + e.message), r
            }
        }
        return r.error("Command Not Found: " + o.join(".")), r
    }

    function s(e, t) {
        this.fn = e, this.config = m.merge(s.globalConfig, t), this.subNameResolveCache = {}, this.loadedSubTplNames = {}
    }

    function l(e, t, n) {
        var r = t;
        if ("." !== r.charAt(0))return r;
        var i = n + "_ks_" + r, a = e.subNameResolveCache, s = a[i];
        return s ? s : r = a[i] = o(n, r)
    }

    function u(e, t, n, i, o, a, s, l) {
        var u = new r(t, n, e, i, o, a, void 0, l);
        o.tpl = u, e.config.loader.load(u, function (e, t) {
            var n = t;
            "function" == typeof n ? (u.fn = n, d(u)) : e ? o.error(e) : (n = n || "", s ? o.writeEscaped(n) : o.data += n, o.end())
        })
    }

    function c(e, t, n, r, i, o) {
        var a = l(e, o, i.name), s = r.insert(), c = s.next;
        return u(e, a, i.runtime, t, s, o, n, r.tpl), c
    }

    function f(e, t, n, i, o) {
        var a = n.insert(), s = a.next, l = new r(o.TPL_NAME, i.runtime, e, t, a, void 0, o, n.tpl);
        return a.tpl = l, d(l), s
    }

    function d(e) {
        var t = e.fn();
        if (t) {
            var n = e.runtime, r = n.extendTpl, i = void 0;
            if (r && (i = r.params[0], !i))return t.error("extend command required a non-empty parameter");
            var o = n.extendTplFn, a = n.extendTplBuffer;
            return o ? (n.extendTpl = null, n.extendTplBuffer = null, n.extendTplFn = null, f(e.root, e.scope, a, e, o).end()) : i && (n.extendTpl = null, n.extendTplBuffer = null, c(e.root, e.scope, 0, a, e, i).end()), t.end()
        }
    }

    function p(e, t, n) {
        var r = t.params;
        if (!r[0])return n.error("include command required a non-empty parameter");
        var i = e, o = r[1], a = t.hash;
        return a && (o = o ? m.mix({}, o) : {}, m.mix(o, a)), o && (i = new y(o, void 0, e)), i
    }

    function h(e, t, n) {
        var r = t.params[0], i = l(e, r, n.name), o = e.loadedSubTplNames;
        return !o[i] && (o[i] = !0, !0)
    }

    var m = n(21), v = n(23), g = {}, y = n(24), w = n(25), b = {
        callFn: a, callDataFn: function (e, t) {
            for (var n = t[0], r = n, i = 1; i < t.length; i++) {
                var o = t[i];
                if (!r || !r[o])return "";
                n = r, r = r[o]
            }
            return r.apply(n, e || [])
        }, callCommand: function (e, t, n, r, i) {
            return a(e, t, n, r, i)
        }
    };
    m.mix(s, {
        Scope: y, LinkedBuffer: w, globalConfig: {}, config: function (e, t) {
            var n = this.globalConfig;
            return void 0 === e ? n : void(void 0 !== t ? n[e] = t : m.mix(n, e))
        }, nativeCommands: v, utils: b, util: m, addCommand: function (e, t) {
            g[e] = t
        }, removeCommand: function (e) {
            delete g[e]
        }
    }), s.prototype = {
        constructor: s, Scope: y, nativeCommands: v, utils: b, removeCommand: function (e) {
            var t = this.config;
            t.commands && delete t.commands[e]
        }, addCommand: function (e, t) {
            var n = this.config;
            n.commands = n.commands || {}, n.commands[e] = t
        }, include: function (e, t, n, r) {
            return c(this, p(e, t, n), t.escape, n, r, t.params[0])
        }, includeModule: function (e, t, n, r) {
            return f(this, p(e, t, n), n, r, t.params[0])
        }, includeOnce: function (e, t, n, r) {
            return h(this, t, r) ? this.include(e, t, n, r) : n
        }, includeOnceModule: function (e, t, n, r) {
            return h(this, t, r) ? this.includeModule(e, t, n, r) : n
        }, render: function (e, t, n) {
            var i = this, o = t, a = n, s = "", l = this.fn, u = this.config;
            "function" == typeof o && (a = o, o = null), o = o || {}, a || (a = function (e, t) {
                var n = e;
                if (n)throw n instanceof Error || (n = new Error(n)), n;
                s = t
            });
            var c = this.config.name;
            !c && l && l.TPL_NAME && (c = l.TPL_NAME);
            var f = void 0;
            f = e instanceof y ? e : new y(e);
            var p = new w(a, u).head, h = new r(c, {commands: o.commands}, this, f, p, c, l);
            return p.tpl = h, l ? (d(h), s) : (u.loader.load(h, function (e, t) {
                t ? (h.fn = i.fn = t, d(h)) : e && p.error(e)
            }), s)
        }
    }, e.exports = s
}, function (e, t, n) {
    (function (t) {
        "use strict";
        var r = n(22), i = /\\?\{([^{}]+)\}/g, o = "undefined" != typeof t ? t : window, a = void 0, s = Object.prototype.toString;
        e.exports = a = {
            isArray: Array.isArray || function (e) {
                return "[object Array]" === s.call(e)
            }, keys: Object.keys || function (e) {
                var t = [], n = void 0;
                for (n in e)e.hasOwnProperty(n) && t.push(n);
                return t
            }, each: function (e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                if (e) {
                    var r = void 0, i = void 0, o = void 0, s = 0, l = e && e.length, u = void 0 === l || "[object Function]" === Object.prototype.toString.call(e);
                    if (u)for (o = a.keys(e); s < o.length && (r = o[s], t.call(n, e[r], r, e) !== !1); s++); else for (i = e[0]; s < l && t.call(n, i, s, e) !== !1; i = e[++s]);
                }
                return e
            }, mix: function (e, t) {
                if (t)for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }, globalEval: function (e) {
                o.execScript ? o.execScript(e) : !function (e) {
                    o.eval.call(o, e)
                }(e)
            }, substitute: function (e, t, n) {
                return "string" == typeof e && t ? e.replace(n || i, function (e, n) {
                    return "\\" === e.charAt(0) ? e.slice(1) : void 0 === t[n] ? "" : t[n]
                }) : e
            }, escapeHtml: r, merge: function () {
                for (var e = 0, t = arguments.length, n = {}; e < t; e++) {
                    var r = arguments.length <= e + 0 ? void 0 : arguments[e + 0];
                    r && a.mix(n, r)
                }
                return n
            }
        }
    }).call(t, function () {
        return this
    }())
}, function (e, t) {/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
    "use strict";
    function n(e) {
        var t = "" + e, n = r.exec(t);
        if (!n)return t;
        var i, o = "", a = 0, s = 0;
        for (a = n.index; a < t.length; a++) {
            switch (t.charCodeAt(a)) {
                case 34:
                    i = "&quot;";
                    break;
                case 38:
                    i = "&amp;";
                    break;
                case 39:
                    i = "&#39;";
                    break;
                case 60:
                    i = "&lt;";
                    break;
                case 62:
                    i = "&gt;";
                    break;
                default:
                    continue
            }
            s !== a && (o += t.substring(s, a)), s = a + 1, o += i
        }
        return s !== a ? o + t.substring(s, a) : o
    }

    var r = /["'&<>]/;
    e.exports = n
}, function (e, t, n) {
    "use strict";
    var r = n(24), i = n(21), o = {
        range: function (e, t) {
            var n = t.params, r = n[0], i = n[1], o = n[2];
            o ? (r > i && o > 0 || r < i && o < 0) && (o = -o) : o = r > i ? -1 : 1;
            for (var a = [], s = r; r < i ? s < i : s > i; s += o)a.push(s);
            return a
        }, void: function () {
        }, foreach: function (e, t, n) {
            var i = n, o = t.params, a = o[0], s = o[2] || "xindex", l = o[1], u = void 0, c = void 0, f = void 0, d = void 0;
            if (a)for (u = a.length, d = 0; d < u; d++)c = new r(a[d], {
                xcount: u,
                xindex: d
            }, e), f = c.affix, "xindex" !== s && (f[s] = d, f.xindex = void 0), l && (f[l] = a[d]), i = t.fn(c, i);
            return i
        }, forin: function (e, t, n) {
            var i = n, o = t.params, a = o[0], s = o[2] || "xindex", l = o[1], u = void 0, c = void 0, f = void 0;
            if (a)for (f in a)a.hasOwnProperty(f) && (u = new r(a[f], {xindex: f}, e), c = u.affix, "xindex" !== s && (c[s] = f, c.xindex = void 0), l && (c[l] = a[f]), i = t.fn(u, i));
            return i
        }, each: function (e, t, n) {
            var r = t.params, a = r[0];
            return a ? i.isArray(a) ? o.foreach(e, t, n) : o.forin(e, t, n) : n
        }, with: function (e, t, n) {
            var i = n, o = t.params, a = o[0];
            if (a) {
                var s = new r(a, void 0, e);
                i = t.fn(s, i)
            }
            return i
        }, if: function (e, t, n) {
            var r = n, i = t.params, o = i[0];
            if (o) {
                var a = t.fn;
                a && (r = a(e, r))
            } else {
                var s = !1, l = t.elseIfs, u = t.inverse;
                if (l)for (var c = 0, f = l.length; c < f; c++) {
                    var d = l[c];
                    if (s = d.test(e)) {
                        r = d.fn(e, r);
                        break
                    }
                }
                !s && u && (r = u(e, r))
            }
            return r
        }, set: function (e, t, n) {
            for (var r = e, i = t.hash, o = i.length, a = 0; a < o; a++) {
                var s = i[a], l = s.key, u = s.depth, c = s.value;
                if (1 === l.length) {
                    for (var f = r.root; u && f !== r;)r = r.parent, --u;
                    r.set(l[0], c)
                } else {
                    var d = r.resolve(l.slice(0, -1), u);
                    d && (d[l[l.length - 1]] = c)
                }
            }
            return n
        }, include: 1, includeOnce: 1, parse: 1, extend: 1, block: function (e, t, n) {
            var r = n, i = this, o = i.runtime, a = t.params, s = a[0], l = void 0;
            2 === a.length && (l = a[0], s = a[1]);
            var u = o.blocks = o.blocks || {}, c = u[s], f = void 0, d = {fn: t.fn, type: l};
            if (c) {
                if (c.type)if ("append" === c.type)d.next = c, u[s] = d; else if ("prepend" === c.type) {
                    var p = void 0;
                    for (f = c; f && "prepend" === f.type;)p = f, f = f.next;
                    d.next = f, p.next = d
                }
            } else u[s] = d;
            if (!o.extendTpl)for (f = u[s]; f;)f.fn && (r = f.fn.call(i, e, r)), f = f.next;
            return r
        }, macro: function e(t, n, i) {
            var o = i, a = n.hash, s = n.params, l = s[0], u = s.slice(1), c = this, f = c.runtime, d = f.macros = f.macros || {}, e = d[l];
            if (n.fn)d[l] = {paramNames: u, hash: a, fn: n.fn}; else if (e) {
                var p = e.hash || {}, h = e.paramNames;
                if (h)for (var m = 0, v = h.length; m < v; m++) {
                    var g = h[m];
                    p[g] = u[m]
                }
                if (a)for (var y in a)a.hasOwnProperty(y) && (p[y] = a[y]);
                var w = new r(p);
                w.root = t.root, o = e.fn.call(c, w, o)
            } else {
                var b = "can not find macro: " + l;
                o.error(b)
            }
            return o
        }
    };
    o.debugger = function () {
        i.globalEval("debugger")
    }, e.exports = o
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        void 0 !== e ? this.data = e : this.data = {}, n ? (this.parent = n, this.root = n.root) : (this.parent = void 0, this.root = this), this.affix = t || {}, this.ready = !1
    }

    n.prototype = {
        isScope: 1, constructor: n, setParent: function (e) {
            this.parent = e, this.root = e.root
        }, set: function (e, t) {
            this.affix[e] = t
        }, setData: function (e) {
            this.data = e
        }, getData: function () {
            return this.data
        }, mix: function (e) {
            var t = this.affix;
            for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n])
        }, get: function (e) {
            var t = this.data, n = void 0, r = this.affix;
            return null !== t && void 0 !== t && (n = t[e]), void 0 !== n ? n : r[e]
        }, resolveInternalOuter: function (e) {
            var t = e[0], n = void 0, r = this, i = r;
            if ("this" === t)n = r.data; else if ("root" === t)i = i.root, n = i.data; else {
                if (!t)return [i.data];
                do n = i.get(t); while (void 0 === n && (i = i.parent))
            }
            return [void 0, n]
        }, resolveInternal: function (e) {
            var t = this.resolveInternalOuter(e);
            if (1 === t.length)return t[0];
            var n = void 0, r = e.length, i = t[1];
            if (void 0 !== i) {
                for (n = 1; n < r; n++) {
                    if (null === i || void 0 === i)return i;
                    i = i[e[n]]
                }
                return i
            }
        }, resolveLooseInternal: function (e) {
            var t = this.resolveInternalOuter(e);
            if (1 === t.length)return t[0];
            var n = void 0, r = e.length, i = t[1];
            for (n = 1; null !== i && void 0 !== i && n < r; n++)i = i[e[n]];
            return i
        }, resolveUp: function (e) {
            return this.parent && this.parent.resolveInternal(e)
        }, resolveLooseUp: function (e) {
            return this.parent && this.parent.resolveLooseInternal(e)
        }, resolveOuter: function (e, t) {
            var n = this, r = n, i = t, o = void 0;
            if (!i && 1 === e.length) {
                if (o = n.get(e[0]), void 0 !== o)return [o];
                i = 1
            }
            if (i)for (; r && i--;)r = r.parent;
            return r ? [void 0, r] : [void 0]
        }, resolveLoose: function (e, t) {
            var n = this.resolveOuter(e, t);
            return 1 === n.length ? n[0] : n[1].resolveLooseInternal(e)
        }, resolve: function (e, t) {
            var n = this.resolveOuter(e, t);
            return 1 === n.length ? n[0] : n[1].resolveInternal(e)
        }
    }, e.exports = n
}, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
        this.list = e, this.init(), this.next = t, this.ready = !1, this.tpl = n
    }

    function i(e, t) {
        var n = this;
        n.config = t, n.head = new r(n, void 0), n.callback = e, this.init()
    }

    var o = n(21);
    r.prototype = {
        constructor: r, isBuffer: 1, init: function () {
            this.data = ""
        }, append: function (e) {
            return this.data += e, this
        }, write: function (e) {
            if (null !== e && void 0 !== e) {
                if (e.isBuffer)return e;
                this.data += e
            }
            return this
        }, writeEscaped: function (e) {
            if (null !== e && void 0 !== e) {
                if (e.isBuffer)return e;
                this.data += o.escapeHtml(e)
            }
            return this
        }, insert: function () {
            var e = this, t = e.list, n = e.tpl, i = new r(t, e.next, n), o = new r(t, i, n);
            return e.next = o, e.ready = !0, o
        }, async: function (e) {
            var t = this.insert(), n = t.next;
            return e(t), n
        }, error: function (e) {
            var t = this.list.callback, n = e;
            if (t) {
                var r = this.tpl;
                if (r) {
                    n instanceof Error || (n = new Error(n));
                    var i = r.name, o = r.pos.line, a = "XTemplate error in file: " + i + " at line " + o + ": ";
                    try {
                        n.stack = a + n.stack, n.message = a + n.message
                    } catch (e) {
                    }
                    n.xtpl = {pos: {line: o}, name: i}
                }
                this.list.callback = null, t(n, void 0)
            }
        }, end: function () {
            var e = this;
            return e.list.callback && (e.ready = !0, e.list.flush()), e
        }
    }, i.prototype = {
        constructor: i, init: function () {
            this.data = ""
        }, append: function (e) {
            this.data += e
        }, end: function () {
            this.callback(null, this.data), this.callback = null
        }, flush: function () {
            for (var e = this, t = e.head; t;) {
                if (!t.ready)return void(e.head = t);
                this.data += t.data, t = t.next
            }
            e.end()
        }
    }, i.Buffer = r, e.exports = i
}, function (e, t, n) {
    var r, i;
    (function () {
        function n(e) {
            function t(t, n, r, i, o, a) {
                for (; o >= 0 && o < a; o += e) {
                    var s = i ? i[o] : o;
                    r = n(r, t[s], s, t)
                }
                return r
            }

            return function (n, r, i, o) {
                r = C(r, o, 4);
                var a = !j(n) && k.keys(n), s = (a || n).length, l = e > 0 ? 0 : s - 1;
                return arguments.length < 3 && (i = n[a ? a[l] : l], l += e), t(n, r, i, a, l, s)
            }
        }

        function o(e) {
            return function (t, n, r) {
                n = E(n, r);
                for (var i = N(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)if (n(t[o], o, t))return o;
                return -1
            }
        }

        function a(e, t, n) {
            return function (r, i, o) {
                var a = 0, s = N(r);
                if ("number" == typeof o)e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1; else if (n && o && s)return o = n(r, i), r[o] === i ? o : -1;
                if (i !== i)return o = t(h.call(r, a, s), k.isNaN), o >= 0 ? o + a : -1;
                for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)if (r[o] === i)return o;
                return -1
            }
        }

        function s(e, t) {
            var n = q.length, r = e.constructor, i = k.isFunction(r) && r.prototype || f, o = "constructor";
            for (k.has(e, o) && !k.contains(t, o) && t.push(o); n--;)o = q[n], o in e && e[o] !== i[o] && !k.contains(t, o) && t.push(o)
        }

        var l = this, u = l._, c = Array.prototype, f = Object.prototype, d = Function.prototype, p = c.push, h = c.slice, m = f.toString, v = f.hasOwnProperty, g = Array.isArray, y = Object.keys, w = d.bind, b = Object.create, x = function () {
        }, k = function (e) {
            return e instanceof k ? e : this instanceof k ? void(this._wrapped = e) : new k(e)
        };
        "undefined" != typeof e && e.exports && (t = e.exports = k), t._ = k, k.VERSION = "1.8.3";
        var C = function (e, t, n) {
            if (void 0 === t)return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function (n, r, i, o) {
                        return e.call(t, n, r, i, o)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }, E = function (e, t, n) {
            return null == e ? k.identity : k.isFunction(e) ? C(e, t, n) : k.isObject(e) ? k.matcher(e) : k.property(e)
        };
        k.iteratee = function (e, t) {
            return E(e, t, 1 / 0)
        };
        var T = function (e, t) {
            return function (n) {
                var r = arguments.length;
                if (r < 2 || null == n)return n;
                for (var i = 1; i < r; i++)for (var o = arguments[i], a = e(o), s = a.length, l = 0; l < s; l++) {
                    var u = a[l];
                    t && void 0 !== n[u] || (n[u] = o[u])
                }
                return n
            }
        }, L = function (e) {
            if (!k.isObject(e))return {};
            if (b)return b(e);
            x.prototype = e;
            var t = new x;
            return x.prototype = null, t
        }, S = function (e) {
            return function (t) {
                return null == t ? void 0 : t[e]
            }
        }, A = Math.pow(2, 53) - 1, N = S("length"), j = function (e) {
            var t = N(e);
            return "number" == typeof t && t >= 0 && t <= A
        };
        k.each = k.forEach = function (e, t, n) {
            t = C(t, n);
            var r, i;
            if (j(e))for (r = 0, i = e.length; r < i; r++)t(e[r], r, e); else {
                var o = k.keys(e);
                for (r = 0, i = o.length; r < i; r++)t(e[o[r]], o[r], e)
            }
            return e
        }, k.map = k.collect = function (e, t, n) {
            t = E(t, n);
            for (var r = !j(e) && k.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
                var s = r ? r[a] : a;
                o[a] = t(e[s], s, e)
            }
            return o
        }, k.reduce = k.foldl = k.inject = n(1), k.reduceRight = k.foldr = n(-1), k.find = k.detect = function (e, t, n) {
            var r;
            if (r = j(e) ? k.findIndex(e, t, n) : k.findKey(e, t, n), void 0 !== r && r !== -1)return e[r]
        }, k.filter = k.select = function (e, t, n) {
            var r = [];
            return t = E(t, n), k.each(e, function (e, n, i) {
                t(e, n, i) && r.push(e)
            }), r
        }, k.reject = function (e, t, n) {
            return k.filter(e, k.negate(E(t)), n)
        }, k.every = k.all = function (e, t, n) {
            t = E(t, n);
            for (var r = !j(e) && k.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (!t(e[a], a, e))return !1
            }
            return !0
        }, k.some = k.any = function (e, t, n) {
            t = E(t, n);
            for (var r = !j(e) && k.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (t(e[a], a, e))return !0
            }
            return !1
        }, k.contains = k.includes = k.include = function (e, t, n, r) {
            return j(e) || (e = k.values(e)), ("number" != typeof n || r) && (n = 0), k.indexOf(e, t, n) >= 0
        }, k.invoke = function (e, t) {
            var n = h.call(arguments, 2), r = k.isFunction(t);
            return k.map(e, function (e) {
                var i = r ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }, k.pluck = function (e, t) {
            return k.map(e, k.property(t))
        }, k.where = function (e, t) {
            return k.filter(e, k.matcher(t))
        }, k.findWhere = function (e, t) {
            return k.find(e, k.matcher(t))
        }, k.max = function (e, t, n) {
            var r, i, o = -(1 / 0), a = -(1 / 0);
            if (null == t && null != e) {
                e = j(e) ? e : k.values(e);
                for (var s = 0, l = e.length; s < l; s++)r = e[s], r > o && (o = r)
            } else t = E(t, n), k.each(e, function (e, n, r) {
                i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
            });
            return o
        }, k.min = function (e, t, n) {
            var r, i, o = 1 / 0, a = 1 / 0;
            if (null == t && null != e) {
                e = j(e) ? e : k.values(e);
                for (var s = 0, l = e.length; s < l; s++)r = e[s], r < o && (o = r)
            } else t = E(t, n), k.each(e, function (e, n, r) {
                i = t(e, n, r), (i < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
            });
            return o
        }, k.shuffle = function (e) {
            for (var t, n = j(e) ? e : k.values(e), r = n.length, i = Array(r), o = 0; o < r; o++)t = k.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
            return i
        }, k.sample = function (e, t, n) {
            return null == t || n ? (j(e) || (e = k.values(e)), e[k.random(e.length - 1)]) : k.shuffle(e).slice(0, Math.max(0, t))
        }, k.sortBy = function (e, t, n) {
            return t = E(t, n), k.pluck(k.map(e, function (e, n, r) {
                return {value: e, index: n, criteria: t(e, n, r)}
            }).sort(function (e, t) {
                var n = e.criteria, r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n)return 1;
                    if (n < r || void 0 === r)return -1
                }
                return e.index - t.index
            }), "value")
        };
        var _ = function (e) {
            return function (t, n, r) {
                var i = {};
                return n = E(n, r), k.each(t, function (r, o) {
                    var a = n(r, o, t);
                    e(i, r, a)
                }), i
            }
        };
        k.groupBy = _(function (e, t, n) {
            k.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), k.indexBy = _(function (e, t, n) {
            e[n] = t
        }), k.countBy = _(function (e, t, n) {
            k.has(e, n) ? e[n]++ : e[n] = 1
        }), k.toArray = function (e) {
            return e ? k.isArray(e) ? h.call(e) : j(e) ? k.map(e, k.identity) : k.values(e) : []
        }, k.size = function (e) {
            return null == e ? 0 : j(e) ? e.length : k.keys(e).length
        }, k.partition = function (e, t, n) {
            t = E(t, n);
            var r = [], i = [];
            return k.each(e, function (e, n, o) {
                (t(e, n, o) ? r : i).push(e)
            }), [r, i]
        }, k.first = k.head = k.take = function (e, t, n) {
            if (null != e)return null == t || n ? e[0] : k.initial(e, e.length - t)
        }, k.initial = function (e, t, n) {
            return h.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, k.last = function (e, t, n) {
            if (null != e)return null == t || n ? e[e.length - 1] : k.rest(e, Math.max(0, e.length - t))
        }, k.rest = k.tail = k.drop = function (e, t, n) {
            return h.call(e, null == t || n ? 1 : t)
        }, k.compact = function (e) {
            return k.filter(e, k.identity)
        };
        var D = function (e, t, n, r) {
            for (var i = [], o = 0, a = r || 0, s = N(e); a < s; a++) {
                var l = e[a];
                if (j(l) && (k.isArray(l) || k.isArguments(l))) {
                    t || (l = D(l, t, n));
                    var u = 0, c = l.length;
                    for (i.length += c; u < c;)i[o++] = l[u++]
                } else n || (i[o++] = l)
            }
            return i
        };
        k.flatten = function (e, t) {
            return D(e, t, !1)
        }, k.without = function (e) {
            return k.difference(e, h.call(arguments, 1))
        }, k.uniq = k.unique = function (e, t, n, r) {
            k.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = E(n, r));
            for (var i = [], o = [], a = 0, s = N(e); a < s; a++) {
                var l = e[a], u = n ? n(l, a, e) : l;
                t ? (a && o === u || i.push(l), o = u) : n ? k.contains(o, u) || (o.push(u), i.push(l)) : k.contains(i, l) || i.push(l)
            }
            return i
        }, k.union = function () {
            return k.uniq(D(arguments, !0, !0))
        }, k.intersection = function (e) {
            for (var t = [], n = arguments.length, r = 0, i = N(e); r < i; r++) {
                var o = e[r];
                if (!k.contains(t, o)) {
                    for (var a = 1; a < n && k.contains(arguments[a], o); a++);
                    a === n && t.push(o)
                }
            }
            return t
        }, k.difference = function (e) {
            var t = D(arguments, !0, !0, 1);
            return k.filter(e, function (e) {
                return !k.contains(t, e)
            })
        }, k.zip = function () {
            return k.unzip(arguments)
        }, k.unzip = function (e) {
            for (var t = e && k.max(e, N).length || 0, n = Array(t), r = 0; r < t; r++)n[r] = k.pluck(e, r);
            return n
        }, k.object = function (e, t) {
            for (var n = {}, r = 0, i = N(e); r < i; r++)t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, k.findIndex = o(1), k.findLastIndex = o(-1), k.sortedIndex = function (e, t, n, r) {
            n = E(n, r, 1);
            for (var i = n(t), o = 0, a = N(e); o < a;) {
                var s = Math.floor((o + a) / 2);
                n(e[s]) < i ? o = s + 1 : a = s
            }
            return o
        }, k.indexOf = a(1, k.findIndex, k.sortedIndex), k.lastIndexOf = a(-1, k.findLastIndex), k.range = function (e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n)i[o] = e;
            return i
        };
        var O = function (e, t, n, r, i) {
            if (!(r instanceof t))return e.apply(n, i);
            var o = L(e.prototype), a = e.apply(o, i);
            return k.isObject(a) ? a : o
        };
        k.bind = function (e, t) {
            if (w && e.bind === w)return w.apply(e, h.call(arguments, 1));
            if (!k.isFunction(e))throw new TypeError("Bind must be called on a function");
            var n = h.call(arguments, 2), r = function () {
                return O(e, r, t, this, n.concat(h.call(arguments)))
            };
            return r
        }, k.partial = function (e) {
            var t = h.call(arguments, 1), n = function () {
                for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++)o[a] = t[a] === k ? arguments[r++] : t[a];
                for (; r < arguments.length;)o.push(arguments[r++]);
                return O(e, n, this, this, o)
            };
            return n
        }, k.bindAll = function (e) {
            var t, n, r = arguments.length;
            if (r <= 1)throw new Error("bindAll must be passed function names");
            for (t = 1; t < r; t++)n = arguments[t], e[n] = k.bind(e[n], e);
            return e
        }, k.memoize = function (e, t) {
            var n = function (r) {
                var i = n.cache, o = "" + (t ? t.apply(this, arguments) : r);
                return k.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
            };
            return n.cache = {}, n
        }, k.delay = function (e, t) {
            var n = h.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, k.defer = k.partial(k.delay, k, 1), k.throttle = function (e, t, n) {
            var r, i, o, a = null, s = 0;
            n || (n = {});
            var l = function () {
                s = n.leading === !1 ? 0 : k.now(), a = null, o = e.apply(r, i), a || (r = i = null)
            };
            return function () {
                var u = k.now();
                s || n.leading !== !1 || (s = u);
                var c = t - (u - s);
                return r = this, i = arguments, c <= 0 || c > t ? (a && (clearTimeout(a), a = null), s = u, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(l, c)), o
            }
        }, k.debounce = function (e, t, n) {
            var r, i, o, a, s, l = function () {
                var u = k.now() - a;
                u < t && u >= 0 ? r = setTimeout(l, t - u) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
            };
            return function () {
                o = this, i = arguments, a = k.now();
                var u = n && !r;
                return r || (r = setTimeout(l, t)), u && (s = e.apply(o, i), o = i = null), s
            }
        }, k.wrap = function (e, t) {
            return k.partial(t, e)
        }, k.negate = function (e) {
            return function () {
                return !e.apply(this, arguments)
            }
        }, k.compose = function () {
            var e = arguments, t = e.length - 1;
            return function () {
                for (var n = t, r = e[t].apply(this, arguments); n--;)r = e[n].call(this, r);
                return r
            }
        }, k.after = function (e, t) {
            return function () {
                if (--e < 1)return t.apply(this, arguments)
            }
        }, k.before = function (e, t) {
            var n;
            return function () {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, k.once = k.partial(k.before, 2);
        var M = !{toString: null}.propertyIsEnumerable("toString"), q = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        k.keys = function (e) {
            if (!k.isObject(e))return [];
            if (y)return y(e);
            var t = [];
            for (var n in e)k.has(e, n) && t.push(n);
            return M && s(e, t), t
        }, k.allKeys = function (e) {
            if (!k.isObject(e))return [];
            var t = [];
            for (var n in e)t.push(n);
            return M && s(e, t), t
        }, k.values = function (e) {
            for (var t = k.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)r[i] = e[t[i]];
            return r
        }, k.mapObject = function (e, t, n) {
            t = E(t, n);
            for (var r, i = k.keys(e), o = i.length, a = {}, s = 0; s < o; s++)r = i[s], a[r] = t(e[r], r, e);
            return a
        }, k.pairs = function (e) {
            for (var t = k.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)r[i] = [t[i], e[t[i]]];
            return r
        }, k.invert = function (e) {
            for (var t = {}, n = k.keys(e), r = 0, i = n.length; r < i; r++)t[e[n[r]]] = n[r];
            return t
        }, k.functions = k.methods = function (e) {
            var t = [];
            for (var n in e)k.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, k.extend = T(k.allKeys), k.extendOwn = k.assign = T(k.keys), k.findKey = function (e, t, n) {
            t = E(t, n);
            for (var r, i = k.keys(e), o = 0, a = i.length; o < a; o++)if (r = i[o], t(e[r], r, e))return r
        }, k.pick = function (e, t, n) {
            var r, i, o = {}, a = e;
            if (null == a)return o;
            k.isFunction(t) ? (i = k.allKeys(a), r = C(t, n)) : (i = D(arguments, !1, !1, 1), r = function (e, t, n) {
                return t in n
            }, a = Object(a));
            for (var s = 0, l = i.length; s < l; s++) {
                var u = i[s], c = a[u];
                r(c, u, a) && (o[u] = c)
            }
            return o
        }, k.omit = function (e, t, n) {
            if (k.isFunction(t))t = k.negate(t); else {
                var r = k.map(D(arguments, !1, !1, 1), String);
                t = function (e, t) {
                    return !k.contains(r, t)
                }
            }
            return k.pick(e, t, n)
        }, k.defaults = T(k.allKeys, !0), k.create = function (e, t) {
            var n = L(e);
            return t && k.extendOwn(n, t), n
        }, k.clone = function (e) {
            return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
        }, k.tap = function (e, t) {
            return t(e), e
        }, k.isMatch = function (e, t) {
            var n = k.keys(t), r = n.length;
            if (null == e)return !r;
            for (var i = Object(e), o = 0; o < r; o++) {
                var a = n[o];
                if (t[a] !== i[a] || !(a in i))return !1
            }
            return !0
        };
        var F = function (e, t, n, r) {
            if (e === t)return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t)return e === t;
            e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
            var i = m.call(e);
            if (i !== m.call(t))return !1;
            switch (i) {
                case"[object RegExp]":
                case"[object String]":
                    return "" + e == "" + t;
                case"[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case"[object Date]":
                case"[object Boolean]":
                    return +e === +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t)return !1;
                var a = e.constructor, s = t.constructor;
                if (a !== s && !(k.isFunction(a) && a instanceof a && k.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t)return !1
            }
            n = n || [], r = r || [];
            for (var l = n.length; l--;)if (n[l] === e)return r[l] === t;
            if (n.push(e), r.push(t), o) {
                if (l = e.length, l !== t.length)return !1;
                for (; l--;)if (!F(e[l], t[l], n, r))return !1
            } else {
                var u, c = k.keys(e);
                if (l = c.length, k.keys(t).length !== l)return !1;
                for (; l--;)if (u = c[l], !k.has(t, u) || !F(e[u], t[u], n, r))return !1
            }
            return n.pop(), r.pop(), !0
        };
        k.isEqual = function (e, t) {
            return F(e, t)
        }, k.isEmpty = function (e) {
            return null == e || (j(e) && (k.isArray(e) || k.isString(e) || k.isArguments(e)) ? 0 === e.length : 0 === k.keys(e).length)
        }, k.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, k.isArray = g || function (e) {
                return "[object Array]" === m.call(e)
            }, k.isObject = function (e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, k.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
            k["is" + e] = function (t) {
                return m.call(t) === "[object " + e + "]"
            }
        }), k.isArguments(arguments) || (k.isArguments = function (e) {
            return k.has(e, "callee")
        }), "function" != typeof/./ && "object" != typeof Int8Array && (k.isFunction = function (e) {
            return "function" == typeof e || !1
        }), k.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, k.isNaN = function (e) {
            return k.isNumber(e) && e !== +e
        }, k.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" === m.call(e)
        }, k.isNull = function (e) {
            return null === e
        }, k.isUndefined = function (e) {
            return void 0 === e
        }, k.has = function (e, t) {
            return null != e && v.call(e, t)
        }, k.noConflict = function () {
            return l._ = u, this
        }, k.identity = function (e) {
            return e
        }, k.constant = function (e) {
            return function () {
                return e
            }
        }, k.noop = function () {
        }, k.property = S, k.propertyOf = function (e) {
            return null == e ? function () {
            } : function (t) {
                return e[t]
            }
        }, k.matcher = k.matches = function (e) {
            return e = k.extendOwn({}, e), function (t) {
                return k.isMatch(t, e)
            }
        }, k.times = function (e, t, n) {
            var r = Array(Math.max(0, e));
            t = C(t, n, 1);
            for (var i = 0; i < e; i++)r[i] = t(i);
            return r
        }, k.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, k.now = Date.now || function () {
                return (new Date).getTime()
            };
        var z = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, U = k.invert(z), H = function (e) {
            var t = function (t) {
                return e[t]
            }, n = "(?:" + k.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
            return function (e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        };
        k.escape = H(z), k.unescape = H(U), k.result = function (e, t, n) {
            var r = null == e ? void 0 : e[t];
            return void 0 === r && (r = n), k.isFunction(r) ? r.call(e) : r
        };
        var I = 0;
        k.uniqueId = function (e) {
            var t = ++I + "";
            return e ? e + t : t
        }, k.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var P = /(.)^/, R = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, B = /\\|'|\r|\n|\u2028|\u2029/g, W = function (e) {
            return "\\" + R[e]
        };
        k.template = function (e, t, n) {
            !t && n && (t = n), t = k.defaults({}, t, k.templateSettings);
            var r = RegExp([(t.escape || P).source, (t.interpolate || P).source, (t.evaluate || P).source].join("|") + "|$", "g"), i = 0, o = "__p+='";
            e.replace(r, function (t, n, r, a, s) {
                return o += e.slice(i, s).replace(B, W), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", o)
            } catch (e) {
                throw e.source = o, e
            }
            var s = function (e) {
                return a.call(this, e, k)
            }, l = t.variable || "obj";
            return s.source = "function(" + l + "){\n" + o + "}", s
        }, k.chain = function (e) {
            var t = k(e);
            return t._chain = !0, t
        };
        var X = function (e, t) {
            return e._chain ? k(t).chain() : t
        };
        k.mixin = function (e) {
            k.each(k.functions(e), function (t) {
                var n = k[t] = e[t];
                k.prototype[t] = function () {
                    var e = [this._wrapped];
                    return p.apply(e, arguments), X(this, n.apply(k, e))
                }
            })
        }, k.mixin(k), k.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = c[e];
            k.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], X(this, n)
            }
        }), k.each(["concat", "join", "slice"], function (e) {
            var t = c[e];
            k.prototype[e] = function () {
                return X(this, t.apply(this._wrapped, arguments))
            }
        }), k.prototype.value = function () {
            return this._wrapped
        }, k.prototype.valueOf = k.prototype.toJSON = k.prototype.value, k.prototype.toString = function () {
            return "" + this._wrapped
        }, r = [], i = function () {
            return k
        }.apply(t, r), !(void 0 !== i && (e.exports = i))
    }).call(this)
}, function (e, t, n) {
    "use strict";
    n(28), function ($, e, t, n) {
        var r = function (e, t) {
            this.el = e, this.defaults = {}, this.options = $.extend({}, this.defaults, t)
        };
        r.prototype = {
            init: function () {
                var t = this, n = t.el;
                return t.bindEvents(), e.COMS = e.COMS || [], n.attr("data-guid", e.COMS.length), n.attr("data-initialized", "true"), e.COMS.push(t), t
            }, bindEvents: function () {
                var e = this, t = e.el;
                t.on("click", ".btn.showtext", function (n) {
                    n.preventDefault();
                    $(n.currentTarget);
                    e.setStatus("loading"), t.trigger("Loader::showmore")
                })
            }, setStatus: function (e) {
                var t = this, n = t.el, r = ["loading", "nomore", "showmore"].join(" ");
                switch (e = e || "loading") {
                    case"loading":
                        n.removeClass(r).addClass("loading");
                        break;
                    case"nomore":
                        n.removeClass(r).addClass("nomore");
                        break;
                    case"showmore":
                        n.removeClass(r).addClass("showmore");
                        break;
                    default:
                        n.removeClass(r).addClass("loading")
                }
            }
        }, $.fn.Loader = function (e) {
            var t;
            return this.each(function () {
                var n = $(this);
                "true" != n.attr("data-initialized") && (t = new r(n, e), t.init())
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, 8, function (e, t) {
    e.exports = function (e) {
        function t(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                <img class="hidden" src="', O.line = 6;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            return t = t.writeEscaped(o), t.data += '">\n            ', t
        }

        function n(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                    <span class="iconfont icon-message">', O.line = 23;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.comment_count : S : (S = r.makemoney) !== n ? null != S ? A = S.comment_count : S : e.resolveLooseUp(["makemoney", "comment_count"]);
            return t = t.writeEscaped(o), t.data += "</span>\n                ", t
        }

        function r(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                    <span class="iconfont icon-heart">', O.line = 26;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.praise_count : S : (S = r.makemoney) !== n ? null != S ? A = S.praise_count : S : e.resolveLooseUp(["makemoney", "praise_count"]);
            return t = t.writeEscaped(o), t.data += "</span>\n                ", t
        }

        function i(e, i, o) {
            var a = e.data, s = e.affix;
            i.data += '\n<div class="packery-item article normal">\n    <a href="', O.line = 3;
            var l = (S = s.makemoney) !== o ? null != S ? A = S.url : S : (S = a.makemoney) !== o ? null != S ? A = S.url : S : e.resolveLooseUp(["makemoney", "url"]);
            i = i.writeEscaped(l), i.data += '" class="com-grid-article" >\n        <div class="grid-article-hd">\n            ', O.line = 5, O.line = 5;
            var u = (S = s.makemoney) !== o ? null != S ? A = S.feedback_url : S : (S = a.makemoney) !== o ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            i = U.call(N, e, {
                params: [u],
                fn: t
            }, i), i.data += '\n            <div class="pic imgcover">\n                <img src="', O.line = 9;
            var c = (S = s.makemoney) !== o ? null != S ? A = S.image : S : (S = a.makemoney) !== o ? null != S ? A = S.image : S : e.resolveLooseUp(["makemoney", "image"]);
            i = i.writeEscaped(c), i.data += '" alt="';
            var f = (S = s.makemoney) !== o ? null != S ? A = S.title : S : (S = a.makemoney) !== o ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            i = i.writeEscaped(f), i.data += '">\n            </div>\n            <p class="category">\n                <img src="', O.line = 12;
            var d = (S = s.category) !== o ? null != S ? A = S.image : S : (S = a.category) !== o ? null != S ? A = S.image : S : e.resolveLooseUp(["category", "image"]);
            i = i.writeEscaped(d), i.data += '" alt="';
            var p = (S = s.category) !== o ? null != S ? A = S.name : S : (S = a.category) !== o ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            i = i.writeEscaped(p), i.data += '">\n                <span>', O.line = 13;
            var h = (S = s.category) !== o ? null != S ? A = S.name : S : (S = a.category) !== o ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            i = i.writeEscaped(h), i.data += '</span>\n            </p>\n        </div>\n        <div class="grid-article-bd">\n            <h3 class="smart-dotdotdot">', O.line = 17;
            var m = (S = s.makemoney) !== o ? null != S ? A = S.title : S : (S = a.makemoney) !== o ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            i = i.writeEscaped(m), i.data += '</h3>\n        </div>\n        <div class="grid-article-ft  clearfix">\n            <span class="smart-date" data-originDate="', O.line = 20;
            var v = (S = s.makemoney) !== o ? null != S ? A = S.publish_time : S : (S = a.makemoney) !== o ? null != S ? A = S.publish_time : S : e.resolveLooseUp(["makemoney", "publish_time"]);
            i = i.writeEscaped(v), i.data += '"></span>\n            <div class="ribbon">\n                ', O.line = 22, O.line = 22;
            var g = (S = s.makemoney) !== o ? null != S ? A = S.comment_count : S : (S = a.makemoney) !== o ? null != S ? A = S.comment_count : S : e.resolveLooseUp(["makemoney", "comment_count"]);
            i = U.call(N, e, {params: [g], fn: n}, i), i.data += "\n                ", O.line = 25, O.line = 25;
            var y = (S = s.makemoney) !== o ? null != S ? A = S.praise_count : S : (S = a.makemoney) !== o ? null != S ? A = S.praise_count : S : e.resolveLooseUp(["makemoney", "praise_count"]);
            return i = U.call(N, e, {
                params: [y],
                fn: r
            }, i), i.data += "\n            </div>\n        </div>\n    </a>\n</div>\n", i
        }

        function o(e, t, n) {
            var r = e.data, i = e.affix;
            O.line = 32;
            var o = (S = i.type) !== n ? S : (S = r.type) !== n ? S : e.resolveLooseUp(["type"]), a = o;
            return a = "key" === o
        }

        function a(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                <img class="hidden" src="', O.line = 37;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            return t = t.writeEscaped(o), t.data += '">\n            ', t
        }

        function s(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                    <span class="iconfont icon-message">', O.line = 56;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.comment_count : S : (S = r.makemoney) !== n ? null != S ? A = S.comment_count : S : e.resolveLooseUp(["makemoney", "comment_count"]);
            return t = t.writeEscaped(o), t.data += "</span>\n                ", t
        }

        function l(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                    <span class="iconfont icon-heart">', O.line = 59;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.praise_count : S : (S = r.makemoney) !== n ? null != S ? A = S.praise_count : S : e.resolveLooseUp(["makemoney", "praise_count"]);
            return t = t.writeEscaped(o), t.data += "</span>\n                ", t
        }

        function u(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n<div class="packery-item article size1x2 key">\n    <a href="', O.line = 34;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.url : S : (S = r.makemoney) !== n ? null != S ? A = S.url : S : e.resolveLooseUp(["makemoney", "url"]);
            t = t.writeEscaped(o), t.data += '" class="com-grid-key-article" >\n        <div class="grid-key-article-hd">\n            ', O.line = 36, O.line = 36;
            var u = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            t = U.call(N, e, {
                params: [u],
                fn: a
            }, t), t.data += '\n            <div class="pic imgcover">\n                <img src="', O.line = 40;
            var c = (S = i.makemoney) !== n ? null != S ? A = S.image : S : (S = r.makemoney) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["makemoney", "image"]);
            t = t.writeEscaped(c), t.data += '" alt="';
            var f = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(f), t.data += '">\n            </div>\n            <p class="category">\n                <img src="', O.line = 43;
            var d = (S = i.category) !== n ? null != S ? A = S.image : S : (S = r.category) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["category", "image"]);
            t = t.writeEscaped(d), t.data += '" alt="';
            var p = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(p), t.data += '">\n                <span>', O.line = 44;
            var h = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(h), t.data += '</span>\n            </p>\n        </div>\n        <div class="grid-key-article-bd">\n            <h3 class="title smart-lines" data-originText="', O.line = 48;
            var m = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(m), t.data += '">\n                <span class="line">', O.line = 49;
            var v = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(v), t.data += '</span>\n            </h3>\n        </div>\n        <div class="grid-key-article-ft  clearfix">\n            <span class="smart-date" data-originDate="', O.line = 53;
            var g = (S = i.makemoney) !== n ? null != S ? A = S.publish_time : S : (S = r.makemoney) !== n ? null != S ? A = S.publish_time : S : e.resolveLooseUp(["makemoney", "publish_time"]);
            t = t.writeEscaped(g), t.data += '"></span>\n            <div class="ribbon">\n                ', O.line = 55, O.line = 55;
            var y = (S = i.makemoney) !== n ? null != S ? A = S.comment_count : S : (S = r.makemoney) !== n ? null != S ? A = S.comment_count : S : e.resolveLooseUp(["makemoney", "comment_count"]);
            t = U.call(N, e, {params: [y], fn: s}, t), t.data += "\n                ", O.line = 58, O.line = 58;
            var w = (S = i.makemoney) !== n ? null != S ? A = S.praise_count : S : (S = r.makemoney) !== n ? null != S ? A = S.praise_count : S : e.resolveLooseUp(["makemoney", "praise_count"]);
            return t = U.call(N, e, {
                params: [w],
                fn: l
            }, t), t.data += "\n            </div>\n        </div>\n    </a>\n</div>\n", t
        }

        function c(e, t, n) {
            var r = e.data, i = e.affix;
            O.line = 65;
            var o = (S = i.type) !== n ? S : (S = r.type) !== n ? S : e.resolveLooseUp(["type"]), a = o;
            return a = "banner" === o
        }

        function f(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                <img class="hidden" src="', O.line = 70;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            return t = t.writeEscaped(o), t.data += '">\n            ', t
        }

        function d(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                        <span class="iconfont icon-message">', O.line = 86;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.comment_count : S : (S = r.makemoney) !== n ? null != S ? A = S.comment_count : S : e.resolveLooseUp(["makemoney", "comment_count"]);
            return t = t.writeEscaped(o), t.data += "</span>\n                    ", t
        }

        function p(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                        <span class="iconfont icon-heart">', O.line = 89;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.praise_count : S : (S = r.makemoney) !== n ? null != S ? A = S.praise_count : S : e.resolveLooseUp(["makemoney", "praise_count"]);
            return t = t.writeEscaped(o), t.data += "</span>\n                    ", t
        }

        function h(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n<div class="packery-item article size1x2 banner">\n    <a href="', O.line = 67;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.url : S : (S = r.makemoney) !== n ? null != S ? A = S.url : S : e.resolveLooseUp(["makemoney", "url"]);
            t = t.writeEscaped(o), t.data += '" class="com-grid-banner-article" >\n        <div class="grid-banner-article-hd">\n            ', O.line = 69, O.line = 69;
            var a = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            t = U.call(N, e, {
                params: [a],
                fn: f
            }, t), t.data += '\n            <div class="pic imgcover">\n                <img src="', O.line = 73;
            var s = (S = i.makemoney) !== n ? null != S ? A = S.image : S : (S = r.makemoney) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["makemoney", "image"]);
            t = t.writeEscaped(s), t.data += '" alt="';
            var l = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(l), t.data += '">\n            </div>\n            <p class="category">\n                <img src="', O.line = 76;
            var u = (S = i.category) !== n ? null != S ? A = S.image : S : (S = r.category) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["category", "image"]);
            t = t.writeEscaped(u), t.data += '" alt="';
            var c = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(c), t.data += '">\n                <span>', O.line = 77;
            var h = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(h), t.data += '</span>\n            </p>\n        </div>\n        <div class="grid-banner-article-bd">\n            <div class="title-ribbon">\n                <h3 class="title">', O.line = 82;
            var m = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(m), t.data += '</h3>\n                <span class="smart-date" data-originDate="', O.line = 83;
            var v = (S = i.makemoney) !== n ? null != S ? A = S.publish_time : S : (S = r.makemoney) !== n ? null != S ? A = S.publish_time : S : e.resolveLooseUp(["makemoney", "publish_time"]);
            t = t.writeEscaped(v), t.data += '"></span>\n                <div class="ribbon">\n                    ', O.line = 85, O.line = 85;
            var g = (S = i.makemoney) !== n ? null != S ? A = S.comment_count : S : (S = r.makemoney) !== n ? null != S ? A = S.comment_count : S : e.resolveLooseUp(["makemoney", "comment_count"]);
            t = U.call(N, e, {params: [g], fn: d}, t), t.data += "\n                    ", O.line = 88, O.line = 88;
            var y = (S = i.makemoney) !== n ? null != S ? A = S.praise_count : S : (S = r.makemoney) !== n ? null != S ? A = S.praise_count : S : e.resolveLooseUp(["makemoney", "praise_count"]);
            return t = U.call(N, e, {
                params: [y],
                fn: p
            }, t), t.data += "\n                </div>\n            </div>\n        </div>\n    </a>\n</div>\n", t
        }

        function m(e, t, n) {
            var r = e.data, i = e.affix;
            O.line = 96;
            var o = (S = i.type) !== n ? S : (S = r.type) !== n ? S : e.resolveLooseUp(["type"]), a = o;
            return a = "normalPic" === o
        }

        function v(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                <img class="hidden" src="', O.line = 107;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            return t = t.writeEscaped(o), t.data += '">\n            ', t
        }

        function g(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n<div class="packery-item article normalPic">\n    <a href="', O.line = 98;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.url : S : (S = r.makemoney) !== n ? null != S ? A = S.url : S : e.resolveLooseUp(["makemoney", "url"]);
            t = t.writeEscaped(o), t.data += '" class="com-grid-makemoney">\n        <div class="grid-makemoney-hd">\n            <p class="category">\n                <img src="', O.line = 101;
            var a = (S = i.category) !== n ? null != S ? A = S.image : S : (S = r.category) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["category", "image"]);
            t = t.writeEscaped(a), t.data += '" alt="';
            var s = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(s), t.data += '">\n                <span>', O.line = 102;
            var l = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(l), t.data += '</span>\n            </p>\n        </div>\n        <div class="grid-makemoney-bd">\n            ', O.line = 106, O.line = 106;
            var u = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            t = U.call(N, e, {
                params: [u],
                fn: v
            }, t), t.data += '\n            <div class="pic imgcover">\n                <img src="', O.line = 110;
            var c = (S = i.makemoney) !== n ? null != S ? A = S.image : S : (S = r.makemoney) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["makemoney", "image"]);
            return t = t.writeEscaped(c), t.data += '">\n            </div>\n        </div>\n    </a>\n</div>\n', t
        }

        function y(e, t, n) {
            var r = e.data, i = e.affix;
            O.line = 115;
            var o = (S = i.type) !== n ? S : (S = r.type) !== n ? S : e.resolveLooseUp(["type"]), a = o;
            return a = "bannerPic" === o
        }

        function w(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                <img class="hidden" src="', O.line = 120;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            return t = t.writeEscaped(o), t.data += '">\n            ', t
        }

        function b(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n<div class="packery-item article size1x2 banner">\n    <a href="', O.line = 117;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.url : S : (S = r.makemoney) !== n ? null != S ? A = S.url : S : e.resolveLooseUp(["makemoney", "url"]);
            t = t.writeEscaped(o), t.data += '" class="com-grid-banner-article" >\n        <div class="grid-banner-article-hd">\n            ', O.line = 119, O.line = 119;
            var a = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            t = U.call(N, e, {
                params: [a],
                fn: w
            }, t), t.data += '\n            <div class="pic imgcover">\n                <img src="', O.line = 123;
            var s = (S = i.makemoney) !== n ? null != S ? A = S.image : S : (S = r.makemoney) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["makemoney", "image"]);
            t = t.writeEscaped(s), t.data += '" alt="';
            var l = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(l), t.data += '">\n            </div>\n            <p class="category">\n                <img src="', O.line = 126;
            var u = (S = i.category) !== n ? null != S ? A = S.image : S : (S = r.category) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["category", "image"]);
            t = t.writeEscaped(u), t.data += '" alt="';
            var c = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(c), t.data += '">\n                <span>', O.line = 127;
            var f = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            return t = t.writeEscaped(f), t.data += "</span>\n            </p>\n        </div>\n    </a>\n</div>\n", t
        }

        function x(e, t, n) {
            var r = e.data, i = e.affix;
            O.line = 132;
            var o = (S = i.type) !== n ? S : (S = r.type) !== n ? S : e.resolveLooseUp(["type"]), a = o;
            return a = "video" === o
        }

        function k(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                <img class="hidden" src="', O.line = 136;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            return t = t.writeEscaped(o), t.data += '">\n            ', t
        }

        function C(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n   <div class="packery-item article">\n        <div class="com-video-player">\n            ', O.line = 135, O.line = 135;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            t = U.call(N, e, {
                params: [o],
                fn: k
            }, t), t.data += '\n            <video class="video" autoplay muted>\n                <source src="', O.line = 139;
            var a = (S = i.makemoney) !== n ? null != S ? A = S.video_url : S : (S = r.makemoney) !== n ? null != S ? A = S.video_url : S : e.resolveLooseUp(["makemoney", "video_url"]);
            t = t.writeEscaped(a), t.data += '" type="">\n            </video>\n            <div class="poster imgcover">\n                <img src="', O.line = 142;
            var s = (S = i.makemoney) !== n ? null != S ? A = S.image : S : (S = r.makemoney) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["makemoney", "image"]);
            t = t.writeEscaped(s), t.data += '" alt="';
            var l = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(l), t.data += '" />\n            </div>\n            <p class="category">\n                <img src="', O.line = 145;
            var u = (S = i.category) !== n ? null != S ? A = S.image : S : (S = r.category) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["category", "image"]);
            t = t.writeEscaped(u), t.data += '" alt="';
            var c = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(c), t.data += '">\n                <span>', O.line = 146;
            var f = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(f), t.data += '</span>\n            </p>\n            <span class="iconfont icon-nosound"></span>\n            <span class="iconfont icon-pause"></span>\n            <a href="', O.line = 150;
            var d = (S = i.makemoney) !== n ? null != S ? A = S.url : S : (S = r.makemoney) !== n ? null != S ? A = S.url : S : e.resolveLooseUp(["makemoney", "url"]);
            return t = t.writeEscaped(d), t.data += '"></a>\n        </div>\n    </div>\n', t
        }

        function E(e, t, n) {
            var r = e.data, i = e.affix;
            O.line = 153;
            var o = (S = i.type) !== n ? S : (S = r.type) !== n ? S : e.resolveLooseUp(["type"]), a = o;
            return a = "keyVideo" === o
        }

        function T(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n                <img class="hidden" src="', O.line = 157;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            return t = t.writeEscaped(o), t.data += '">\n            ', t
        }

        function L(e, t, n) {
            var r = e.data, i = e.affix;
            t.data += '\n    <div class="packery-item article size1x2">\n        <div class="com-video-player big-size">\n            ', O.line = 156, O.line = 156;
            var o = (S = i.makemoney) !== n ? null != S ? A = S.feedback_url : S : (S = r.makemoney) !== n ? null != S ? A = S.feedback_url : S : e.resolveLooseUp(["makemoney", "feedback_url"]);
            t = U.call(N, e, {
                params: [o],
                fn: T
            }, t), t.data += '\n            <video class="video" autoplay muted>\n                <source src="', O.line = 160;
            var a = (S = i.makemoney) !== n ? null != S ? A = S.video_url : S : (S = r.makemoney) !== n ? null != S ? A = S.video_url : S : e.resolveLooseUp(["makemoney", "video_url"]);
            t = t.writeEscaped(a), t.data += '" type="">\n            </video>\n            <div class="poster imgcover">\n                <img src="', O.line = 163;
            var s = (S = i.makemoney) !== n ? null != S ? A = S.image : S : (S = r.makemoney) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["makemoney", "image"]);
            t = t.writeEscaped(s), t.data += '" alt="';
            var l = (S = i.makemoney) !== n ? null != S ? A = S.title : S : (S = r.makemoney) !== n ? null != S ? A = S.title : S : e.resolveLooseUp(["makemoney", "title"]);
            t = t.writeEscaped(l), t.data += '" />\n            </div>\n            <p class="category">\n                <img src="', O.line = 166;
            var u = (S = i.category) !== n ? null != S ? A = S.image : S : (S = r.category) !== n ? null != S ? A = S.image : S : e.resolveLooseUp(["category", "image"]);
            t = t.writeEscaped(u), t.data += '" alt="';
            var c = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(c), t.data += '">\n                <span>', O.line = 167;
            var f = (S = i.category) !== n ? null != S ? A = S.name : S : (S = r.category) !== n ? null != S ? A = S.name : S : e.resolveLooseUp(["category", "name"]);
            t = t.writeEscaped(f), t.data += '</span>\n            </p>\n            <span class="iconfont icon-nosound"></span>\n            <span class="iconfont icon-pause"></span>\n            <a href="', O.line = 171;
            var d = (S = i.makemoney) !== n ? null != S ? A = S.url : S : (S = r.makemoney) !== n ? null != S ? A = S.url : S : e.resolveLooseUp(["makemoney", "url"]);
            return t = t.writeEscaped(d), t.data += '"></a>\n        </div>\n    </div>\n', t
        }

        var S, A, N = this, j = N.root, _ = N.buffer, D = N.scope, O = (N.runtime, N.name, N.pos), M = D.data, q = D.affix, F = j.nativeCommands, z = j.utils, U = (z.callFn, z.callDataFn, z.callCommand, F.range, F.void, F.foreach, F.forin, F.each, F.with, F.if);
        F.set, F.include, F.includeOnce, F.parse, F.extend, F.block, F.macro, F.debugger;
        _.data += "", O.line = 1;
        var H = (S = q.type) !== e ? S : (S = M.type) !== e ? S : D.resolveLooseUp(["type"]), I = H;
        return I = "normal" === H, _ = U.call(N, D, {
            params: [I],
            fn: i,
            elseIfs: [{test: o, fn: u}, {test: c, fn: h}, {test: m, fn: g}, {test: y, fn: b}, {
                test: x,
                fn: C
            }, {test: E, fn: L}]
        }, _), _.data += "\n", _
    }
}, 8, 8, 8]));
