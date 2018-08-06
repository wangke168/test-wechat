webpackJsonp([0], [function (t, e, a) {
    (function ($, t) {
        "use strict";
        a(6), a(33), a(35), a(45), a(55), a(61), $(function () {
            var e = $("body"), a = e.find(".page-content");
            t.attach(document.body), e.find(".com-download-banner").on("DownloadBanner::Hide", function (t, e) {
                $(t.currentTarget);
                "false" == e.isHide ? a.addClass("showDownload") : a.removeClass("showDownload")
            }), e.find(".com-article-detail").on("ArticleDetail::changeDownloadBannerStatus", function (t, e) {
                var a = $.fn.utils.getComponentInstance(".com-download-banner");
                a && a.changeBannerStatus(e.hasAd)
            }), e.find(".com-header-brief").HeaderBrief(), e.find(".com-article-detail").ArticleDetail(), e.find(".com-related-banners").RelatedBanners(), e.find(".com-related-comments-brief").RelatedCommentsBrief({
                prefetch: !0,
                baseUrl: "/mobile/comments/article/" + e.find(".com-related-comments-brief").attr("data-id")
            }), $.fn.initLoginStatus(), e.find(".com-comment-popup").on("CommentPopup::addComment", function (t, e) {
                $.fn.utils.getComponentInstance(".com-related-comments-brief").addComment(e.data, e.isReplyComment)
            })
        })
    }).call(e, a(1), a(5))
}, , , , , function (t, e, a) {
    var i;
    !function () {
        "use strict";
        /**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */
        function n(t, e) {
            function a(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }

            var i;
            if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !n.notNeeded(t)) {
                for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, l = 0, c = s.length; l < c; l++)r[s[l]] = a(r[s[l]], r);
                o && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, a, i) {
                    var n = Node.prototype.removeEventListener;
                    "click" === e ? n.call(t, e, a.hijacked || a, i) : n.call(t, e, a, i)
                }, t.addEventListener = function (e, a, i) {
                    var n = Node.prototype.addEventListener;
                    "click" === e ? n.call(t, e, a.hijacked || (a.hijacked = function (t) {
                            t.propagationStopped || a(t)
                        }), i) : n.call(t, e, a, i)
                }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function (t) {
                    i(t)
                }, !1), t.onclick = null)
            }
        }

        var s = navigator.userAgent.indexOf("Windows Phone") >= 0, o = navigator.userAgent.indexOf("Android") > 0 && !s, r = /iP(ad|hone|od)/.test(navigator.userAgent) && !s, l = r && /OS 4_\d(_\d)?/.test(navigator.userAgent), c = r && /OS [6-7]_\d/.test(navigator.userAgent), d = navigator.userAgent.indexOf("BB10") > 0;
        n.prototype.needsClick = function (t) {
            switch (t.nodeName.toLowerCase()) {
                case"button":
                case"select":
                case"textarea":
                    if (t.disabled)return !0;
                    break;
                case"input":
                    if (r && "file" === t.type || t.disabled)return !0;
                    break;
                case"label":
                case"iframe":
                case"video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, n.prototype.needsFocus = function (t) {
            switch (t.nodeName.toLowerCase()) {
                case"textarea":
                    return !0;
                case"select":
                    return !o;
                case"input":
                    switch (t.type) {
                        case"button":
                        case"checkbox":
                        case"file":
                        case"image":
                        case"radio":
                        case"submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, n.prototype.sendClick = function (t, e) {
            var a, i;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], a = document.createEvent("MouseEvents"), a.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), a.forwardedTouchEvent = !0, t.dispatchEvent(a)
        }, n.prototype.determineEventType = function (t) {
            return o && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, n.prototype.focus = function (t) {
            var e;
            r && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, n.prototype.updateScrollParent = function (t) {
            var e, a;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                a = t;
                do {
                    if (a.scrollHeight > a.offsetHeight) {
                        e = a, t.fastClickScrollParent = a;
                        break
                    }
                    a = a.parentElement
                } while (a)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, n.prototype.getTargetElementFromEventTarget = function (t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, n.prototype.onTouchStart = function (t) {
            var e, a, i;
            if (t.targetTouches.length > 1)return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), a = t.targetTouches[0], r) {
                if (i = window.getSelection(), i.rangeCount && !i.isCollapsed)return !0;
                if (!l) {
                    if (a.identifier && a.identifier === this.lastTouchIdentifier)return t.preventDefault(), !1;
                    this.lastTouchIdentifier = a.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = a.pageX, this.touchStartY = a.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, n.prototype.touchHasMoved = function (t) {
            var e = t.changedTouches[0], a = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > a || Math.abs(e.pageY - this.touchStartY) > a
        }, n.prototype.onTouchMove = function (t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, n.prototype.findControl = function (t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, n.prototype.onTouchEnd = function (t) {
            var e, a, i, n, s, d = this.targetElement;
            if (!this.trackingClick)return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay)return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, c && (s = t.changedTouches[0], d = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || d, d.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = d.tagName.toLowerCase(), "label" === i) {
                if (e = this.findControl(d)) {
                    if (this.focus(d), o)return !1;
                    d = e
                }
            } else if (this.needsFocus(d))return t.timeStamp - a > 100 || r && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(d), this.sendClick(d, t), r && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
            return !(!r || l || (n = d.fastClickScrollParent, !n || n.fastClickLastScrollTop === n.scrollTop)) || (this.needsClick(d) || (t.preventDefault(), this.sendClick(d, t)), !1)
        }, n.prototype.onTouchCancel = function () {
            this.trackingClick = !1, this.targetElement = null
        }, n.prototype.onMouse = function (t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        }, n.prototype.onClick = function (t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, n.prototype.destroy = function () {
            var t = this.layer;
            o && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, n.notNeeded = function (t) {
            var e, a, i, n;
            if ("undefined" == typeof window.ontouchstart)return !0;
            if (a = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!o)return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1)return !0;
                    if (a > 31 && document.documentElement.scrollWidth <= window.outerWidth)return !0
                }
            }
            if (d && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1)return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth)return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (n = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(n >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }, n.attach = function (t, e) {
            return new n(t, e)
        }, i = function () {
            return n
        }.call(e, a, e, t), !(void 0 !== i && (t.exports = i))
    }()
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, a) {
    "use strict";
    a(34), function ($, t, e, a) {
        var i = function (t, e) {
            this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
        };
        i.prototype = {
            init: function () {
                var e = this, a = e.el, i = a.find(".callup-button");
                return $.fn.utils.addLocationHost(i), $.fn.utils.addParameter(i), e.bindEvents(), t.COMS = t.COMS || [], a.attr("data-guid", t.COMS.length), a.attr("data-initialized", "true"), t.COMS.push(e), e
            }, bindEvents: function () {
                var t, e = this, a = e.el, i = $.fn.utils.getUrlScheme();
                a.on("click", ".callup-button", function (e) {
                    return !!(t = $.fn.utils.callupApp(i)) || void e.preventDefault()
                })
            }, updateLoginInfo: function () {
                var e, a, i = this, n = i.el, s = t.location.href, o = /special_columns/;
                o.test(s) && (a = !0), e = $.ajax({
                    url: "/mobile/get_user_and_radar.json",
                    type: "GET",
                    dataType: "json",
                    data: {winWidth: screen.width, winHeight: screen.height, subscribe: a}
                }), e.success(function (t) {
                    var e = $.fn.utils.getComponentInstance(".com-tot-result"), a = $.fn.utils.getComponentInstance(".com-tot-information");
                    if (t && t.status) {
                        var i = t.data || {};
                        n.attr("data-isLogined", "true"), n.attr("data-userId", i.id || 0), a && a.setAvatar(i), e && e.setUserInfo(i)
                    } else e && e.setUserInfo(!1)
                })
            }
        }, $.fn.HeaderBrief = function (t) {
            var e;
            return this.each(function () {
                var a = $(this);
                "true" != a.attr("data-initialized") && (e = new i(a, t), e.init())
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, 8, function (t, e, a) {
    (function (t) {
        "use strict";
        a(36), a(37), a(38), a(40), a(43), function ($, e, i, n) {
            var s = function (t, e) {
                this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
            };
            s.prototype = {
                init: function () {
                    var t = this, a = t.el;
                    return a.find(".com-share").Share(), a.find(".smart-date").smartDate(), a.find(".com-related-vote").RelatedVote(), t.initMakemoney(), t.resetPaper(), t.resizeCategoryTags(), t.initImagesMutiple(), t.imgChangeFont(), t.resetADImg(), t.bindEvents(), t.adddAdBanner(), e.COMS = e.COMS || [], a.attr("data-initialized", "true"), a.attr("data-guid", e.COMS.length), e.COMS.push(t), t
                }, bindEvents: function () {
                    var t = this;
                    t.el
                }, resetPaper: function () {
                    var t = this, e = t.el;
                    e.hasClass("hollywood") && $.each(e.find(".item.paper"), function (t, e) {
                        var a, i, n, s, o = $(e);
                        o && o.length && o.attr("data-publishDate") && (a = new Date, i = new Date(o.attr("data-publishDate").replace(/-/g, "/")), n = Math.round((a.getTime() - i.getTime()) / 6e4), s = !1, n <= 60 * a.getHours() && (s = !0), s || (o.find(".count").removeClass("new"), o.find(".count .text").text("人已参加"), o.find(".count .num").removeClass("hidden")))
                    })
                }, resizeCategoryTags: function () {
                    for (var t = this, e = t.el, a = e.find(".category-tags"), i = a.find(".category"), n = a.find(".tags"), s = a.outerWidth(!0), o = n.outerWidth(!0), r = i.outerWidth(!0); o > s / 2 && n.find(".tag").length;)n.find(".tag:last").remove(), o = n.outerWidth(!0);
                    for (; r + o > s && n.find(".tag").length;)n.find(".tag:last").remove(), o = n.outerWidth(!0);
                    n.show()
                }, imgChangeFont: function () {
                    var t = this, e = t.el, a = e.find(".com-insert-quote"), i = e.find(".com-insert-wikipedia .wikipedia-hd"), n = e.find(".com-insert-images .count");
                    a.append('<span class="icon-quote iconfont"></span>'), i.append('<span class="icon-wikipedia iconfont"></span>'), n.addClass("icon-pics iconfont")
                }, initImagesMutiple: function () {
                    var t = this, e = t.el, a = e.find(".com-insert-images.multiple");
                    a.each(function (t, e) {
                        var a, i = $(e), n = i.find("figure"), s = n.find("figcaption"), o = i.find(".images-name"), r = n.length, l = s.eq(0).html() || "";
                        i.addClass("swiper-container"), i.wrapInner('<div class="swiper-wrapper">'), n.addClass("swiper-slide"), s.hide(), i.append('<div class="count">1/' + r + "</div>"), o.length && o.remove(), l ? (i.append('<div class="title">' + l + "</div>"), i.find(".count").css({bottom: i.find(".title").height() + 15})) : i.find(".count").css({bottom: 15}), a = new Swiper(i, {
                            autoHeight: !0,
                            touchAngle: 20,
                            onSlideChangeStart: function () {
                                var t = a.activeIndex + 1;
                                i.find(".count").html(t + "/" + r)
                            }
                        })
                    })
                }, initMakemoney: function () {
                    var e, i, n, s, o, r = this, l = r.el;
                    n = new t(a(44)), $.ajax({
                        url: "/mobile/mount_details/mobile/" + l.attr("data-categoryId") + ".json",
                        type: "GET",
                        dataType: "json",
                        data: {},
                        success: function (t) {
                            if (t && t.status) {
                                var a = t.data;
                                if (a.top && a.top.length) {
                                    for (s = 0, o = a.top.length; s < o; s++)a.top[s].redirect_url = a.top[s].redirect_url || "javascript:void(0);";
                                    e = n.render({makemoney: a.top}), l.find(".article-detail-hd .category-tags").before(e)
                                }
                                if (a.bottom && a.bottom.length) {
                                    for (s = 0, o = a.bottom.length; s < o; s++)a.bottom[s].redirect_url = a.bottom[s].redirect_url || "javascript:void(0);";
                                    i = n.render({makemoney: a.bottom}), l.find(".article-detail-ft .share-wrapper").before(i)
                                }
                            }
                        },
                        error: function (t) {
                        }
                    })
                }, resetADImg: function () {
                    var t = this, e = t.el, a = e.find(".banner img");
                    e.hasClass("short") && "10" === e.attr("data-categoryid") && a.css({width: "100%", height: "auto"})
                }, adddAdBanner: function () {
                    var t, a, i = this, n = i.el, s = n.find(".article-detail-ft .tags"), o = e.location.search, r = !1;
                    if (o) {
                        t = o.substr(1).split("&");
                        for (var l = 0; l < t.length; l++) {
                            a = t[l].split("=");
                            for (var c = 0; c < a.length; c++)"channel" == a[c] && "mpcnw" == a[c + 1] && (s.after('<a href="/mobile/downloads.html" class="pic-banner"></a>'), r = !0)
                        }
                    }
                    n.trigger("ArticleDetail::changeDownloadBannerStatus", {hasAd: r})
                }
            }, $.fn.ArticleDetail = function (t) {
                var e;
                return this.each(function () {
                    var a = $(this);
                    "true" != a.attr("data-initialized") && (e = new s(a, t), e.init())
                })
            }
        }(window.jQuery || window.Zepto, window, document)
    }).call(e, a(20))
}, function (t, e, a) {
    (function (jQuery) {
        !function () {
            "use strict";
            function t(t) {
                t.fn.swiper = function (a) {
                    var i;
                    return t(this).each(function () {
                        var t = new e(this, a);
                        i || (i = t)
                    }), i
                }
            }

            var $, e = function (t, a) {
                function i() {
                    return "horizontal" === b.params.direction
                }

                function n(t) {
                    return Math.floor(t)
                }

                function s() {
                    b.autoplayTimeoutId = setTimeout(function () {
                        b.params.loop ? (b.fixLoop(), b._slideNext()) : b.isEnd ? a.autoplayStopOnLast ? b.stopAutoplay() : b._slideTo(0) : b._slideNext()
                    }, b.params.autoplay)
                }

                function o(t, e) {
                    var a = $(t.target);
                    if (!a.is(e))if ("string" == typeof e)a = a.parents(e); else if (e.nodeType) {
                        var i;
                        return a.parents().each(function (t, a) {
                            a === e && (i = e)
                        }), i ? e : void 0
                    }
                    if (0 !== a.length)return a[0]
                }

                function r(t, e) {
                    e = e || {};
                    var a = window.MutationObserver || window.WebkitMutationObserver, i = new a(function (t) {
                        t.forEach(function (t) {
                            b.onResize(!0), b.emit("onObserverUpdate", b, t)
                        })
                    });
                    i.observe(t, {
                        attributes: "undefined" == typeof e.attributes || e.attributes,
                        childList: "undefined" == typeof e.childList || e.childList,
                        characterData: "undefined" == typeof e.characterData || e.characterData
                    }), b.observers.push(i)
                }

                function l(t) {
                    t.originalEvent && (t = t.originalEvent);
                    var e = t.keyCode || t.charCode;
                    if (!b.params.allowSwipeToNext && (i() && 39 === e || !i() && 40 === e))return !1;
                    if (!b.params.allowSwipeToPrev && (i() && 37 === e || !i() && 38 === e))return !1;
                    if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                        if (37 === e || 39 === e || 38 === e || 40 === e) {
                            var a = !1;
                            if (b.container.parents(".swiper-slide").length > 0 && 0 === b.container.parents(".swiper-slide-active").length)return;
                            var n = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            }, s = window.innerWidth, o = window.innerHeight, r = b.container.offset();
                            b.rtl && (r.left = r.left - b.container[0].scrollLeft);
                            for (var l = [[r.left, r.top], [r.left + b.width, r.top], [r.left, r.top + b.height], [r.left + b.width, r.top + b.height]], c = 0; c < l.length; c++) {
                                var d = l[c];
                                d[0] >= n.left && d[0] <= n.left + s && d[1] >= n.top && d[1] <= n.top + o && (a = !0)
                            }
                            if (!a)return
                        }
                        i() ? (37 !== e && 39 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === e && !b.rtl || 37 === e && b.rtl) && b.slideNext(), (37 === e && !b.rtl || 39 === e && b.rtl) && b.slidePrev()) : (38 !== e && 40 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && b.slideNext(), 38 === e && b.slidePrev())
                    }
                }

                function c(t) {
                    t.originalEvent && (t = t.originalEvent);
                    var e = b.mousewheel.event, a = 0, n = b.rtl ? -1 : 1;
                    if (t.detail)a = -t.detail; else if ("mousewheel" === e)if (b.params.mousewheelForceToAxis)if (i()) {
                        if (!(Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY)))return;
                        a = t.wheelDeltaX * n
                    } else {
                        if (!(Math.abs(t.wheelDeltaY) > Math.abs(t.wheelDeltaX)))return;
                        a = t.wheelDeltaY
                    } else a = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? -t.wheelDeltaX * n : -t.wheelDeltaY; else if ("DOMMouseScroll" === e)a = -t.detail; else if ("wheel" === e)if (b.params.mousewheelForceToAxis)if (i()) {
                        if (!(Math.abs(t.deltaX) > Math.abs(t.deltaY)))return;
                        a = -t.deltaX * n
                    } else {
                        if (!(Math.abs(t.deltaY) > Math.abs(t.deltaX)))return;
                        a = -t.deltaY
                    } else a = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? -t.deltaX * n : -t.deltaY;
                    if (0 !== a) {
                        if (b.params.mousewheelInvert && (a = -a), b.params.freeMode) {
                            var s = b.getWrapperTranslate() + a * b.params.mousewheelSensitivity, o = b.isBeginning, r = b.isEnd;
                            if (s >= b.minTranslate() && (s = b.minTranslate()), s <= b.maxTranslate() && (s = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(s), b.updateProgress(), b.updateActiveIndex(), (!o && b.isBeginning || !r && b.isEnd) && b.updateClasses(), b.params.freeModeSticky && (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function () {
                                    b.slideReset()
                                }, 300)), 0 === s || s === b.maxTranslate())return
                        } else {
                            if ((new window.Date).getTime() - b.mousewheel.lastScrollTime > 60)if (a < 0)if (b.isEnd && !b.params.loop || b.animating) {
                                if (b.params.mousewheelReleaseOnEdges)return !0
                            } else b.slideNext(); else if (b.isBeginning && !b.params.loop || b.animating) {
                                if (b.params.mousewheelReleaseOnEdges)return !0
                            } else b.slidePrev();
                            b.mousewheel.lastScrollTime = (new window.Date).getTime()
                        }
                        return b.params.autoplay && b.stopAutoplay(), t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                    }
                }

                function d(t, e) {
                    t = $(t);
                    var a, n, s, o = b.rtl ? -1 : 1;
                    a = t.attr("data-swiper-parallax") || "0", n = t.attr("data-swiper-parallax-x"), s = t.attr("data-swiper-parallax-y"), n || s ? (n = n || "0", s = s || "0") : i() ? (n = a, s = "0") : (s = a, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * e * o + "%" : n * e * o + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * e + "%" : s * e + "px", t.transform("translate3d(" + n + ", " + s + ",0px)")
                }

                function h(t) {
                    return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t), t
                }

                if (!(this instanceof e))return new e(t, a);
                var p = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
                    cube: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
                    fade: {crossFade: !1},
                    parallax: !1,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    hashnav: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slidePrevClass: "swiper-slide-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                }, u = a && a.virtualTranslate;
                a = a || {};
                var f = {};
                for (var m in a)if ("object" != typeof a[m] || (a[m].nodeType || a[m] === window || a[m] === document || "undefined" != typeof Dom7 && a[m] instanceof Dom7 || "undefined" != typeof jQuery && a[m] instanceof jQuery))f[m] = a[m]; else {
                    f[m] = {};
                    for (var g in a[m])f[m][g] = a[m][g]
                }
                for (var v in p)if ("undefined" == typeof a[v])a[v] = p[v]; else if ("object" == typeof a[v])for (var w in p[v])"undefined" == typeof a[v][w] && (a[v][w] = p[v][w]);
                var b = this;
                if (b.params = a, b.originalParams = f, b.classNames = [], "undefined" != typeof $ && "undefined" != typeof Dom7 && ($ = Dom7), ("undefined" != typeof $ || ($ = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (b.$ = $, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function () {
                        if (!b.params.breakpoints)return !1;
                        var t, e = !1, a = [];
                        for (t in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(t) && a.push(t);
                        a.sort(function (t, e) {
                            return parseInt(t, 10) > parseInt(e, 10)
                        });
                        for (var i = 0; i < a.length; i++)t = a[i], t >= window.innerWidth && !e && (e = t);
                        return e || "max"
                    }, b.setBreakpoint = function () {
                        var t = b.getActiveBreakpoint();
                        if (t && b.currentBreakpoint !== t) {
                            var e = t in b.params.breakpoints ? b.params.breakpoints[t] : b.originalParams;
                            for (var a in e)b.params[a] = e[a];
                            b.currentBreakpoint = t
                        }
                    }, b.params.breakpoints && b.setBreakpoint(), b.container = $(t), 0 !== b.container.length)) {
                    if (b.container.length > 1)return void b.container.each(function () {
                        new e(this, a)
                    });
                    b.container[0].swiper = b, b.container.data("swiper", b), b.classNames.push("swiper-container-" + b.params.direction), b.params.freeMode && b.classNames.push("swiper-container-free-mode"), b.support.flexbox || (b.classNames.push("swiper-container-no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push("swiper-container-autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push("swiper-container-3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push("swiper-container-" + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0, b.params.setWrapperSize = !1), "fade" === b.params.effect && (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, b.params.spaceBetween = 0, "undefined" == typeof u && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = $(b.params.pagination), b.params.paginationClickable && b.paginationContainer.addClass("swiper-pagination-clickable")), b.rtl = i() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push("swiper-container-rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), b.params.slidesPerColumn > 1 && b.classNames.push("swiper-container-multirow"), b.device.android && b.classNames.push("swiper-container-android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function () {
                        b.params.allowSwipeToNext = !1
                    }, b.lockSwipeToPrev = function () {
                        b.params.allowSwipeToPrev = !1
                    }, b.lockSwipes = function () {
                        b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1
                    }, b.unlockSwipeToNext = function () {
                        b.params.allowSwipeToNext = !0
                    }, b.unlockSwipeToPrev = function () {
                        b.params.allowSwipeToPrev = !0
                    }, b.unlockSwipes = function () {
                        b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0
                    }, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab"), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function (t, e, a, i, n) {
                        function s() {
                            n && n()
                        }

                        var o;
                        t.complete && i ? s() : e ? (o = new window.Image, o.onload = s, o.onerror = s, a && (o.srcset = a), e && (o.src = e)) : s()
                    }, b.preloadImages = function () {
                        function t() {
                            "undefined" != typeof b && null !== b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
                        }

                        b.imagesToLoad = b.container.find("img");
                        for (var e = 0; e < b.imagesToLoad.length; e++)b.loadImage(b.imagesToLoad[e], b.imagesToLoad[e].currentSrc || b.imagesToLoad[e].getAttribute("src"), b.imagesToLoad[e].srcset || b.imagesToLoad[e].getAttribute("srcset"), !0, t)
                    }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function () {
                        return "undefined" == typeof b.autoplayTimeoutId && (!!b.params.autoplay && (!b.autoplaying && (b.autoplaying = !0, b.emit("onAutoplayStart", b), void s())))
                    }, b.stopAutoplay = function (t) {
                        b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
                    }, b.pauseAutoplay = function (t) {
                        b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === t ? (b.autoplayPaused = !1, s()) : b.wrapper.transitionEnd(function () {
                            b && (b.autoplayPaused = !1, b.autoplaying ? s() : b.stopAutoplay())
                        }))
                    }, b.minTranslate = function () {
                        return -b.snapGrid[0]
                    }, b.maxTranslate = function () {
                        return -b.snapGrid[b.snapGrid.length - 1]
                    }, b.updateAutoHeight = function () {
                        var t = b.slides.eq(b.activeIndex)[0].offsetHeight;
                        t && b.wrapper.css("height", b.slides.eq(b.activeIndex)[0].offsetHeight + "px")
                    }, b.updateContainerSize = function () {
                        var t, e;
                        t = "undefined" != typeof b.params.width ? b.params.width : b.container[0].clientWidth, e = "undefined" != typeof b.params.height ? b.params.height : b.container[0].clientHeight, 0 === t && i() || 0 === e && !i() || (t = t - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), e = e - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = t, b.height = e, b.size = i() ? b.width : b.height)
                    }, b.updateSlidesSize = function () {
                        b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];
                        var t, e = b.params.spaceBetween, a = -b.params.slidesOffsetBefore, s = 0, o = 0;
                        "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * b.size), b.virtualSize = -e, b.rtl ? b.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : b.slides.css({marginRight: "", marginBottom: ""});
                        var r;
                        b.params.slidesPerColumn > 1 && (r = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (r = Math.max(r, b.params.slidesPerView * b.params.slidesPerColumn)));
                        var l, c = b.params.slidesPerColumn, d = r / c, h = d - (b.params.slidesPerColumn * d - b.slides.length);
                        for (t = 0; t < b.slides.length; t++) {
                            l = 0;
                            var p = b.slides.eq(t);
                            if (b.params.slidesPerColumn > 1) {
                                var u, f, m;
                                "column" === b.params.slidesPerColumnFill ? (f = Math.floor(t / c), m = t - f * c, (f > h || f === h && m === c - 1) && ++m >= c && (m = 0, f++), u = f + m * r / c, p.css({
                                    "-webkit-box-ordinal-group": u,
                                    "-moz-box-ordinal-group": u,
                                    "-ms-flex-order": u,
                                    "-webkit-order": u,
                                    order: u
                                })) : (m = Math.floor(t / d), f = t - m * d), p.css({"margin-top": 0 !== m && b.params.spaceBetween && b.params.spaceBetween + "px"}).attr("data-swiper-column", f).attr("data-swiper-row", m)
                            }
                            "none" !== p.css("display") && ("auto" === b.params.slidesPerView ? (l = i() ? p.outerWidth(!0) : p.outerHeight(!0), b.params.roundLengths && (l = n(l))) : (l = (b.size - (b.params.slidesPerView - 1) * e) / b.params.slidesPerView, b.params.roundLengths && (l = n(l)), i() ? b.slides[t].style.width = l + "px" : b.slides[t].style.height = l + "px"), b.slides[t].swiperSlideSize = l, b.slidesSizesGrid.push(l), b.params.centeredSlides ? (a = a + l / 2 + s / 2 + e, 0 === t && (a = a - b.size / 2 - e), Math.abs(a) < .001 && (a = 0), o % b.params.slidesPerGroup === 0 && b.snapGrid.push(a), b.slidesGrid.push(a)) : (o % b.params.slidesPerGroup === 0 && b.snapGrid.push(a), b.slidesGrid.push(a), a = a + l + e), b.virtualSize += l + e, s = l, o++)
                        }
                        b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
                        var g;
                        if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({width: b.virtualSize + b.params.spaceBetween + "px"}), b.support.flexbox && !b.params.setWrapperSize || (i() ? b.wrapper.css({width: b.virtualSize + b.params.spaceBetween + "px"}) : b.wrapper.css({height: b.virtualSize + b.params.spaceBetween + "px"})), b.params.slidesPerColumn > 1 && (b.virtualSize = (l + b.params.spaceBetween) * r, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.wrapper.css({width: b.virtualSize + b.params.spaceBetween + "px"}), b.params.centeredSlides)) {
                            for (g = [], t = 0; t < b.snapGrid.length; t++)b.snapGrid[t] < b.virtualSize + b.snapGrid[0] && g.push(b.snapGrid[t]);
                            b.snapGrid = g
                        }
                        if (!b.params.centeredSlides) {
                            for (g = [], t = 0; t < b.snapGrid.length; t++)b.snapGrid[t] <= b.virtualSize - b.size && g.push(b.snapGrid[t]);
                            b.snapGrid = g, Math.floor(b.virtualSize - b.size) > Math.floor(b.snapGrid[b.snapGrid.length - 1]) && b.snapGrid.push(b.virtualSize - b.size)
                        }
                        0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (i() ? b.rtl ? b.slides.css({marginLeft: e + "px"}) : b.slides.css({marginRight: e + "px"}) : b.slides.css({marginBottom: e + "px"})), b.params.watchSlidesProgress && b.updateSlidesOffset()
                    }, b.updateSlidesOffset = function () {
                        for (var t = 0; t < b.slides.length; t++)b.slides[t].swiperSlideOffset = i() ? b.slides[t].offsetLeft : b.slides[t].offsetTop
                    }, b.updateSlidesProgress = function (t) {
                        if ("undefined" == typeof t && (t = b.translate || 0), 0 !== b.slides.length) {
                            "undefined" == typeof b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                            var e = -t;
                            b.rtl && (e = t), b.slides.removeClass(b.params.slideVisibleClass);
                            for (var a = 0; a < b.slides.length; a++) {
                                var i = b.slides[a], n = (e - i.swiperSlideOffset) / (i.swiperSlideSize + b.params.spaceBetween);
                                if (b.params.watchSlidesVisibility) {
                                    var s = -(e - i.swiperSlideOffset), o = s + b.slidesSizesGrid[a], r = s >= 0 && s < b.size || o > 0 && o <= b.size || s <= 0 && o >= b.size;
                                    r && b.slides.eq(a).addClass(b.params.slideVisibleClass)
                                }
                                i.progress = b.rtl ? -n : n
                            }
                        }
                    }, b.updateProgress = function (t) {
                        "undefined" == typeof t && (t = b.translate || 0);
                        var e = b.maxTranslate() - b.minTranslate(), a = b.isBeginning, i = b.isEnd;
                        0 === e ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (t - b.minTranslate()) / e, b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1), b.isBeginning && !a && b.emit("onReachBeginning", b), b.isEnd && !i && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(t), b.emit("onProgress", b, b.progress)
                    }, b.updateActiveIndex = function () {
                        var t, e, a, i = b.rtl ? b.translate : -b.translate;
                        for (e = 0; e < b.slidesGrid.length; e++)"undefined" != typeof b.slidesGrid[e + 1] ? i >= b.slidesGrid[e] && i < b.slidesGrid[e + 1] - (b.slidesGrid[e + 1] - b.slidesGrid[e]) / 2 ? t = e : i >= b.slidesGrid[e] && i < b.slidesGrid[e + 1] && (t = e + 1) : i >= b.slidesGrid[e] && (t = e);
                        (t < 0 || "undefined" == typeof t) && (t = 0), a = Math.floor(t / b.params.slidesPerGroup), a >= b.snapGrid.length && (a = b.snapGrid.length - 1), t !== b.activeIndex && (b.snapIndex = a, b.previousIndex = b.activeIndex, b.activeIndex = t, b.updateClasses())
                    }, b.updateClasses = function () {
                        b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass);
                        var t = b.slides.eq(b.activeIndex);
                        if (t.addClass(b.params.slideActiveClass), t.next("." + b.params.slideClass).addClass(b.params.slideNextClass), t.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass), b.bullets && b.bullets.length > 0) {
                            b.bullets.removeClass(b.params.bulletActiveClass);
                            var e;
                            b.params.loop ? (e = Math.ceil(b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup, e > b.slides.length - 1 - 2 * b.loopedSlides && (e -= b.slides.length - 2 * b.loopedSlides), e > b.bullets.length - 1 && (e -= b.bullets.length)) : e = "undefined" != typeof b.snapIndex ? b.snapIndex : b.activeIndex || 0, b.paginationContainer.length > 1 ? b.bullets.each(function () {
                                $(this).index() === e && $(this).addClass(b.params.bulletActiveClass)
                            }) : b.bullets.eq(e).addClass(b.params.bulletActiveClass)
                        }
                        b.params.loop || (b.params.prevButton && (b.isBeginning ? ($(b.params.prevButton).addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable($(b.params.prevButton))) : ($(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable($(b.params.prevButton)))), b.params.nextButton && (b.isEnd ? ($(b.params.nextButton).addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable($(b.params.nextButton))) : ($(b.params.nextButton).removeClass(b.params.buttonDisabledClass),
                        b.params.a11y && b.a11y && b.a11y.enable($(b.params.nextButton)))))
                    }, b.updatePagination = function () {
                        if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
                            for (var t = "", e = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, a = 0; a < e; a++)t += b.params.paginationBulletRender ? b.params.paginationBulletRender(a, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
                            b.paginationContainer.html(t), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
                        }
                    }, b.update = function (t) {
                        function e() {
                            i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses()
                        }

                        if (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), t) {
                            var a, i;
                            b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (e(), b.params.autoHeight && b.updateAutoHeight()) : (a = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0), a || e())
                        } else b.params.autoHeight && b.updateAutoHeight()
                    }, b.onResize = function (t) {
                        b.params.breakpoints && b.setBreakpoint();
                        var e = b.params.allowSwipeToPrev, a = b.params.allowSwipeToNext;
                        if (b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || t) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode) {
                            var i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                            b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight()
                        } else b.updateClasses(), ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                        b.params.allowSwipeToPrev = e, b.params.allowSwipeToNext = a
                    };
                    var y = ["mousedown", "mousemove", "mouseup"];
                    window.navigator.pointerEnabled ? y = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (y = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), b.touchEvents = {
                        start: b.support.touch || !b.params.simulateTouch ? "touchstart" : y[0],
                        move: b.support.touch || !b.params.simulateTouch ? "touchmove" : y[1],
                        end: b.support.touch || !b.params.simulateTouch ? "touchend" : y[2]
                    }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), b.initEvents = function (t) {
                        var e = t ? "off" : "on", i = t ? "removeEventListener" : "addEventListener", n = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0], s = b.support.touch ? n : document, o = !!b.params.nested;
                        b.browser.ie ? (n[i](b.touchEvents.start, b.onTouchStart, !1), s[i](b.touchEvents.move, b.onTouchMove, o), s[i](b.touchEvents.end, b.onTouchEnd, !1)) : (b.support.touch && (n[i](b.touchEvents.start, b.onTouchStart, !1), n[i](b.touchEvents.move, b.onTouchMove, o), n[i](b.touchEvents.end, b.onTouchEnd, !1)), !a.simulateTouch || b.device.ios || b.device.android || (n[i]("mousedown", b.onTouchStart, !1), document[i]("mousemove", b.onTouchMove, o), document[i]("mouseup", b.onTouchEnd, !1))), window[i]("resize", b.onResize), b.params.nextButton && ($(b.params.nextButton)[e]("click", b.onClickNext), b.params.a11y && b.a11y && $(b.params.nextButton)[e]("keydown", b.a11y.onEnterKey)), b.params.prevButton && ($(b.params.prevButton)[e]("click", b.onClickPrev), b.params.a11y && b.a11y && $(b.params.prevButton)[e]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && ($(b.paginationContainer)[e]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && $(b.paginationContainer)[e]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && n[i]("click", b.preventClicks, !0)
                    }, b.attachEvents = function (t) {
                        b.initEvents()
                    }, b.detachEvents = function () {
                        b.initEvents(!0)
                    }, b.allowClick = !0, b.preventClicks = function (t) {
                        b.allowClick || (b.params.preventClicks && t.preventDefault(), b.params.preventClicksPropagation && b.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                    }, b.onClickNext = function (t) {
                        t.preventDefault(), b.isEnd && !b.params.loop || b.slideNext()
                    }, b.onClickPrev = function (t) {
                        t.preventDefault(), b.isBeginning && !b.params.loop || b.slidePrev()
                    }, b.onClickIndex = function (t) {
                        t.preventDefault();
                        var e = $(this).index() * b.params.slidesPerGroup;
                        b.params.loop && (e += b.loopedSlides), b.slideTo(e)
                    }, b.updateClickedSlide = function (t) {
                        var e = o(t, "." + b.params.slideClass), a = !1;
                        if (e)for (var i = 0; i < b.slides.length; i++)b.slides[i] === e && (a = !0);
                        if (!e || !a)return b.clickedSlide = void 0, void(b.clickedIndex = void 0);
                        if (b.clickedSlide = e, b.clickedIndex = $(e).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                            var n, s = b.clickedIndex;
                            if (b.params.loop) {
                                if (b.animating)return;
                                n = $(b.clickedSlide).attr("data-swiper-slide-index"), b.params.centeredSlides ? s < b.loopedSlides - b.params.slidesPerView / 2 || s > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2 ? (b.fixLoop(), s = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + n + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                                    b.slideTo(s)
                                }, 0)) : b.slideTo(s) : s > b.slides.length - b.params.slidesPerView ? (b.fixLoop(), s = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + n + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                                    b.slideTo(s)
                                }, 0)) : b.slideTo(s)
                            } else b.slideTo(s)
                        }
                    };
                    var x, S, C, T, k, P, M, L, E, z, I = "input, select, textarea, button", A = Date.now(), D = [];
                    b.animating = !1, b.touches = {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0};
                    var F, O;
                    if (b.onTouchStart = function (t) {
                            if (t.originalEvent && (t = t.originalEvent), F = "touchstart" === t.type, F || !("which" in t) || 3 !== t.which) {
                                if (b.params.noSwiping && o(t, "." + b.params.noSwipingClass))return void(b.allowClick = !0);
                                if (!b.params.swipeHandler || o(t, b.params.swipeHandler)) {
                                    var e = b.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, a = b.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                    if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && e <= b.params.iOSEdgeSwipeThreshold)) {
                                        if (x = !0, S = !1, C = !0, k = void 0, O = void 0, b.touches.startX = e, b.touches.startY = a, T = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, b.params.threshold > 0 && (L = !1), "touchstart" !== t.type) {
                                            var i = !0;
                                            $(t.target).is(I) && (i = !1), document.activeElement && $(document.activeElement).is(I) && document.activeElement.blur(), i && t.preventDefault()
                                        }
                                        b.emit("onTouchStart", b, t)
                                    }
                                }
                            }
                        }, b.onTouchMove = function (t) {
                            if (t.originalEvent && (t = t.originalEvent), !(F && "mousemove" === t.type || t.preventedByNestedSwiper)) {
                                if (b.params.onlyExternal)return b.allowClick = !1, void(x && (b.touches.startX = b.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, b.touches.startY = b.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, T = Date.now()));
                                if (F && document.activeElement && t.target === document.activeElement && $(t.target).is(I))return S = !0, void(b.allowClick = !1);
                                if (C && b.emit("onTouchMove", b, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                    if (b.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, b.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof k) {
                                        var e = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI;
                                        k = i() ? e > b.params.touchAngle : 90 - e > b.params.touchAngle
                                    }
                                    if (k && b.emit("onTouchMoveOpposite", b, t), "undefined" == typeof O && b.browser.ieTouch && (b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY || (O = !0)), x) {
                                        if (k)return void(x = !1);
                                        if (O || !b.browser.ieTouch) {
                                            b.allowClick = !1, b.emit("onSliderMove", b, t), t.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && t.stopPropagation(), S || (a.loop && b.fixLoop(), M = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), z = !1, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grabbing", b.container[0].style.cursor = "-moz-grabbin", b.container[0].style.cursor = "grabbing")), S = !0;
                                            var n = b.touches.diff = i() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                                            n *= b.params.touchRatio, b.rtl && (n = -n), b.swipeDirection = n > 0 ? "prev" : "next", P = n + M;
                                            var s = !0;
                                            if (n > 0 && P > b.minTranslate() ? (s = !1, b.params.resistance && (P = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + M + n, b.params.resistanceRatio))) : n < 0 && P < b.maxTranslate() && (s = !1, b.params.resistance && (P = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - M - n, b.params.resistanceRatio))), s && (t.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && P < M && (P = M), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && P > M && (P = M), b.params.followFinger) {
                                                if (b.params.threshold > 0) {
                                                    if (!(Math.abs(n) > b.params.threshold || L))return void(P = M);
                                                    if (!L)return L = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, P = M, void(b.touches.diff = i() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY)
                                                }
                                                (b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === D.length && D.push({
                                                    position: b.touches[i() ? "startX" : "startY"],
                                                    time: T
                                                }), D.push({
                                                    position: b.touches[i() ? "currentX" : "currentY"],
                                                    time: (new window.Date).getTime()
                                                })), b.updateProgress(P), b.setWrapperTranslate(P)
                                            }
                                        }
                                    }
                                }
                            }
                        }, b.onTouchEnd = function (t) {
                            if (t.originalEvent && (t = t.originalEvent), C && b.emit("onTouchEnd", b, t), C = !1, x) {
                                b.params.grabCursor && S && x && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab");
                                var e = Date.now(), a = e - T;
                                if (b.allowClick && (b.updateClickedSlide(t), b.emit("onTap", b, t), a < 300 && e - A > 300 && (E && clearTimeout(E), E = setTimeout(function () {
                                        b && (b.params.paginationHide && b.paginationContainer.length > 0 && !$(t.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, t))
                                    }, 300)), a < 300 && e - A < 300 && (E && clearTimeout(E), b.emit("onDoubleTap", b, t))), A = Date.now(), setTimeout(function () {
                                        b && (b.allowClick = !0)
                                    }, 0), !x || !S || !b.swipeDirection || 0 === b.touches.diff || P === M)return void(x = S = !1);
                                x = S = !1;
                                var i;
                                if (i = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -P, b.params.freeMode) {
                                    if (i < -b.minTranslate())return void b.slideTo(b.activeIndex);
                                    if (i > -b.maxTranslate())return void(b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                                    if (b.params.freeModeMomentum) {
                                        if (D.length > 1) {
                                            var n = D.pop(), s = D.pop(), o = n.position - s.position, r = n.time - s.time;
                                            b.velocity = o / r, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (r > 150 || (new window.Date).getTime() - n.time > 300) && (b.velocity = 0)
                                        } else b.velocity = 0;
                                        D.length = 0;
                                        var l = 1e3 * b.params.freeModeMomentumRatio, c = b.velocity * l, d = b.translate + c;
                                        b.rtl && (d = -d);
                                        var h, p = !1, u = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                                        if (d < b.maxTranslate())b.params.freeModeMomentumBounce ? (d + b.maxTranslate() < -u && (d = b.maxTranslate() - u), h = b.maxTranslate(), p = !0, z = !0) : d = b.maxTranslate(); else if (d > b.minTranslate())b.params.freeModeMomentumBounce ? (d - b.minTranslate() > u && (d = b.minTranslate() + u), h = b.minTranslate(), p = !0, z = !0) : d = b.minTranslate(); else if (b.params.freeModeSticky) {
                                            var f, m = 0;
                                            for (m = 0; m < b.snapGrid.length; m += 1)if (b.snapGrid[m] > -d) {
                                                f = m;
                                                break
                                            }
                                            d = Math.abs(b.snapGrid[f] - d) < Math.abs(b.snapGrid[f - 1] - d) || "next" === b.swipeDirection ? b.snapGrid[f] : b.snapGrid[f - 1], b.rtl || (d = -d)
                                        }
                                        if (0 !== b.velocity)l = b.rtl ? Math.abs((-d - b.translate) / b.velocity) : Math.abs((d - b.translate) / b.velocity); else if (b.params.freeModeSticky)return void b.slideReset();
                                        b.params.freeModeMomentumBounce && p ? (b.updateProgress(h), b.setWrapperTransition(l), b.setWrapperTranslate(d), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function () {
                                            b && z && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(h), b.wrapper.transitionEnd(function () {
                                                b && b.onTransitionEnd()
                                            }))
                                        })) : b.velocity ? (b.updateProgress(d), b.setWrapperTransition(l), b.setWrapperTranslate(d), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function () {
                                            b && b.onTransitionEnd()
                                        }))) : b.updateProgress(d), b.updateActiveIndex()
                                    }
                                    return void((!b.params.freeModeMomentum || a >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()))
                                }
                                var g, v = 0, w = b.slidesSizesGrid[0];
                                for (g = 0; g < b.slidesGrid.length; g += b.params.slidesPerGroup)"undefined" != typeof b.slidesGrid[g + b.params.slidesPerGroup] ? i >= b.slidesGrid[g] && i < b.slidesGrid[g + b.params.slidesPerGroup] && (v = g, w = b.slidesGrid[g + b.params.slidesPerGroup] - b.slidesGrid[g]) : i >= b.slidesGrid[g] && (v = g, w = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                                var y = (i - b.slidesGrid[v]) / w;
                                if (a > b.params.longSwipesMs) {
                                    if (!b.params.longSwipes)return void b.slideTo(b.activeIndex);
                                    "next" === b.swipeDirection && (y >= b.params.longSwipesRatio ? b.slideTo(v + b.params.slidesPerGroup) : b.slideTo(v)), "prev" === b.swipeDirection && (y > 1 - b.params.longSwipesRatio ? b.slideTo(v + b.params.slidesPerGroup) : b.slideTo(v))
                                } else {
                                    if (!b.params.shortSwipes)return void b.slideTo(b.activeIndex);
                                    "next" === b.swipeDirection && b.slideTo(v + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(v)
                                }
                            }
                        }, b._slideTo = function (t, e) {
                            return b.slideTo(t, e, !0, !0)
                        }, b.slideTo = function (t, e, a, i) {
                            "undefined" == typeof a && (a = !0), "undefined" == typeof t && (t = 0), t < 0 && (t = 0), b.snapIndex = Math.floor(t / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                            var n = -b.snapGrid[b.snapIndex];
                            b.params.autoplay && b.autoplaying && (i || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(e) : b.stopAutoplay()), b.updateProgress(n);
                            for (var s = 0; s < b.slidesGrid.length; s++)-Math.floor(100 * n) >= Math.floor(100 * b.slidesGrid[s]) && (t = s);
                            return !(!b.params.allowSwipeToNext && n < b.translate && n < b.minTranslate()) && (!(!b.params.allowSwipeToPrev && n > b.translate && n > b.maxTranslate() && (b.activeIndex || 0) !== t) && ("undefined" == typeof e && (e = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = t, b.rtl && -n === b.translate || !b.rtl && n === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(n), !1) : (b.updateClasses(), b.onTransitionStart(a), 0 === e ? (b.setWrapperTranslate(n), b.setWrapperTransition(0), b.onTransitionEnd(a)) : (b.setWrapperTranslate(n), b.setWrapperTransition(e), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function () {
                                    b && b.onTransitionEnd(a)
                                }))), !0)))
                        }, b.onTransitionStart = function (t) {
                            "undefined" == typeof t && (t = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), t && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)))
                        }, b.onTransitionEnd = function (t) {
                            b.animating = !1, b.setWrapperTransition(0), "undefined" == typeof t && (t = !0), b.lazy && b.lazy.onTransitionEnd(), t && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.hashnav && b.hashnav && b.hashnav.setHash()
                        }, b.slideNext = function (t, e, a) {
                            if (b.params.loop) {
                                if (b.animating)return !1;
                                b.fixLoop();
                                b.container[0].clientLeft;
                                return b.slideTo(b.activeIndex + b.params.slidesPerGroup, e, t, a)
                            }
                            return b.slideTo(b.activeIndex + b.params.slidesPerGroup, e, t, a)
                        }, b._slideNext = function (t) {
                            return b.slideNext(!0, t, !0)
                        }, b.slidePrev = function (t, e, a) {
                            if (b.params.loop) {
                                if (b.animating)return !1;
                                b.fixLoop();
                                b.container[0].clientLeft;
                                return b.slideTo(b.activeIndex - 1, e, t, a)
                            }
                            return b.slideTo(b.activeIndex - 1, e, t, a)
                        }, b._slidePrev = function (t) {
                            return b.slidePrev(!0, t, !0)
                        }, b.slideReset = function (t, e, a) {
                            return b.slideTo(b.activeIndex, e, t)
                        }, b.setWrapperTransition = function (t, e) {
                            b.wrapper.transition(t), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(t), b.params.parallax && b.parallax && b.parallax.setTransition(t), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(t), b.params.control && b.controller && b.controller.setTransition(t, e), b.emit("onSetTransition", b, t)
                        }, b.setWrapperTranslate = function (t, e, a) {
                            var s = 0, o = 0, r = 0;
                            i() ? s = b.rtl ? -t : t : o = t, b.params.roundLengths && (s = n(s), o = n(o)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + s + "px, " + o + "px, " + r + "px)") : b.wrapper.transform("translate(" + s + "px, " + o + "px)")), b.translate = i() ? s : o;
                            var l, c = b.maxTranslate() - b.minTranslate();
                            l = 0 === c ? 0 : (t - b.minTranslate()) / c, l !== b.progress && b.updateProgress(t), e && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, a), b.emit("onSetTranslate", b, b.translate)
                        }, b.getTranslate = function (t, e) {
                            var a, i, n, s;
                            return "undefined" == typeof e && (e = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (n = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? (i = n.transform || n.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (t) {
                                return t.replace(",", ".")
                            }).join(", ")), s = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = s.toString().split(",")), "x" === e && (i = window.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === e && (i = window.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), b.rtl && i && (i = -i), i || 0)
                        }, b.getWrapperTranslate = function (t) {
                            return "undefined" == typeof t && (t = i() ? "x" : "y"), b.getTranslate(b.wrapper[0], t)
                        }, b.observers = [], b.initObservers = function () {
                            if (b.params.observeParents)for (var t = b.container.parents(), e = 0; e < t.length; e++)r(t[e]);
                            r(b.container[0], {childList: !1}), r(b.wrapper[0], {attributes: !1})
                        }, b.disconnectObservers = function () {
                            for (var t = 0; t < b.observers.length; t++)b.observers[t].disconnect();
                            b.observers = []
                        }, b.createLoop = function () {
                            b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                            var t = b.wrapper.children("." + b.params.slideClass);
                            "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = t.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > t.length && (b.loopedSlides = t.length);
                            var e, a = [], i = [];
                            for (t.each(function (e, n) {
                                var s = $(this);
                                e < b.loopedSlides && i.push(n), e < t.length && e >= t.length - b.loopedSlides && a.push(n), s.attr("data-swiper-slide-index", e)
                            }), e = 0; e < i.length; e++)b.wrapper.append($(i[e].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                            for (e = a.length - 1; e >= 0; e--)b.wrapper.prepend($(a[e].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
                        }, b.destroyLoop = function () {
                            b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index")
                        }, b.fixLoop = function () {
                            var t;
                            b.activeIndex < b.loopedSlides ? (t = b.slides.length - 3 * b.loopedSlides + b.activeIndex, t += b.loopedSlides, b.slideTo(t, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (t = -b.slides.length + b.activeIndex + b.loopedSlides, t += b.loopedSlides, b.slideTo(t, 0, !1, !0))
                        }, b.appendSlide = function (t) {
                            if (b.params.loop && b.destroyLoop(), "object" == typeof t && t.length)for (var e = 0; e < t.length; e++)t[e] && b.wrapper.append(t[e]); else b.wrapper.append(t);
                            b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0)
                        }, b.prependSlide = function (t) {
                            b.params.loop && b.destroyLoop();
                            var e = b.activeIndex + 1;
                            if ("object" == typeof t && t.length) {
                                for (var a = 0; a < t.length; a++)t[a] && b.wrapper.prepend(t[a]);
                                e = b.activeIndex + t.length
                            } else b.wrapper.prepend(t);
                            b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(e, 0, !1)
                        }, b.removeSlide = function (t) {
                            b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                            var e, a = b.activeIndex;
                            if ("object" == typeof t && t.length) {
                                for (var i = 0; i < t.length; i++)e = t[i], b.slides[e] && b.slides.eq(e).remove(), e < a && a--;
                                a = Math.max(a, 0)
                            } else e = t, b.slides[e] && b.slides.eq(e).remove(), e < a && a--, a = Math.max(a, 0);
                            b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(a + b.loopedSlides, 0, !1) : b.slideTo(a, 0, !1)
                        }, b.removeAllSlides = function () {
                            for (var t = [], e = 0; e < b.slides.length; e++)t.push(e);
                            b.removeSlide(t)
                        }, b.effects = {
                            fade: {
                                setTranslate: function () {
                                    for (var t = 0; t < b.slides.length; t++) {
                                        var e = b.slides.eq(t), a = e[0].swiperSlideOffset, n = -a;
                                        b.params.virtualTranslate || (n -= b.translate);
                                        var s = 0;
                                        i() || (s = n, n = 0);
                                        var o = b.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                        e.css({opacity: o}).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                                    }
                                }, setTransition: function (t) {
                                    if (b.slides.transition(t), b.params.virtualTranslate && 0 !== t) {
                                        var e = !1;
                                        b.slides.transitionEnd(function () {
                                            if (!e && b) {
                                                e = !0, b.animating = !1;
                                                for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < t.length; a++)b.wrapper.trigger(t[a])
                                            }
                                        })
                                    }
                                }
                            }, cube: {
                                setTranslate: function () {
                                    var t, e = 0;
                                    b.params.cube.shadow && (i() ? (t = b.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = $('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(t)), t.css({height: b.width + "px"})) : (t = b.container.find(".swiper-cube-shadow"), 0 === t.length && (t = $('<div class="swiper-cube-shadow"></div>'), b.container.append(t))));
                                    for (var a = 0; a < b.slides.length; a++) {
                                        var n = b.slides.eq(a), s = 90 * a, o = Math.floor(s / 360);
                                        b.rtl && (s = -s, o = Math.floor(-s / 360));
                                        var r = Math.max(Math.min(n[0].progress, 1), -1), l = 0, c = 0, d = 0;
                                        a % 4 === 0 ? (l = 4 * -o * b.size, d = 0) : (a - 1) % 4 === 0 ? (l = 0, d = 4 * -o * b.size) : (a - 2) % 4 === 0 ? (l = b.size + 4 * o * b.size, d = b.size) : (a - 3) % 4 === 0 && (l = -b.size, d = 3 * b.size + 4 * b.size * o), b.rtl && (l = -l), i() || (c = l, l = 0);
                                        var h = "rotateX(" + (i() ? 0 : -s) + "deg) rotateY(" + (i() ? s : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + d + "px)";
                                        if (r <= 1 && r > -1 && (e = 90 * a + 90 * r, b.rtl && (e = 90 * -a - 90 * r)), n.transform(h), b.params.cube.slideShadows) {
                                            var p = i() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), u = i() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                            0 === p.length && (p = $('<div class="swiper-slide-shadow-' + (i() ? "left" : "top") + '"></div>'), n.append(p)), 0 === u.length && (u = $('<div class="swiper-slide-shadow-' + (i() ? "right" : "bottom") + '"></div>'), n.append(u));
                                            n[0].progress;
                                            p.length && (p[0].style.opacity = -n[0].progress), u.length && (u[0].style.opacity = n[0].progress)
                                        }
                                    }
                                    if (b.wrapper.css({
                                            "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                            "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                            "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                            "transform-origin": "50% 50% -" + b.size / 2 + "px"
                                        }), b.params.cube.shadow)if (i())t.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")"); else {
                                        var f = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90), m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2), g = b.params.cube.shadowScale, v = b.params.cube.shadowScale / m, w = b.params.cube.shadowOffset;
                                        t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + w) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)")
                                    }
                                    var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                                    b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (i() ? 0 : e) + "deg) rotateY(" + (i() ? -e : 0) + "deg)")
                                }, setTransition: function (t) {
                                    b.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), b.params.cube.shadow && !i() && b.container.find(".swiper-cube-shadow").transition(t)
                                }
                            }, coverflow: {
                                setTranslate: function () {
                                    for (var t = b.translate, e = i() ? -t + b.width / 2 : -t + b.height / 2, a = i() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, n = b.params.coverflow.depth, s = 0, o = b.slides.length; s < o; s++) {
                                        var r = b.slides.eq(s), l = b.slidesSizesGrid[s], c = r[0].swiperSlideOffset, d = (e - c - l / 2) / l * b.params.coverflow.modifier, h = i() ? a * d : 0, p = i() ? 0 : a * d, u = -n * Math.abs(d), f = i() ? 0 : b.params.coverflow.stretch * d, m = i() ? b.params.coverflow.stretch * d : 0;
                                        Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0);
                                        var g = "translate3d(" + m + "px," + f + "px," + u + "px)  rotateX(" + p + "deg) rotateY(" + h + "deg)";
                                        if (r.transform(g), r[0].style.zIndex = -Math.abs(Math.round(d)) + 1, b.params.coverflow.slideShadows) {
                                            var v = i() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), w = i() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                            0 === v.length && (v = $('<div class="swiper-slide-shadow-' + (i() ? "left" : "top") + '"></div>'), r.append(v)), 0 === w.length && (w = $('<div class="swiper-slide-shadow-' + (i() ? "right" : "bottom") + '"></div>'), r.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                                        }
                                    }
                                    if (b.browser.ie) {
                                        var y = b.wrapper[0].style;
                                        y.perspectiveOrigin = e + "px 50%"
                                    }
                                }, setTransition: function (t) {
                                    b.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                                }
                            }
                        }, b.lazy = {
                            initialImageLoaded: !1, loadImageInSlide: function (t, e) {
                                if ("undefined" != typeof t && ("undefined" == typeof e && (e = !0), 0 !== b.slides.length)) {
                                    var a = b.slides.eq(t), i = a.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                    !a.hasClass("swiper-lazy") || a.hasClass("swiper-lazy-loaded") || a.hasClass("swiper-lazy-loading") || (i = i.add(a[0])), 0 !== i.length && i.each(function () {
                                        var t = $(this);
                                        t.addClass("swiper-lazy-loading");
                                        var i = t.attr("data-background"), n = t.attr("data-src"), s = t.attr("data-srcset");
                                        b.loadImage(t[0], n || i, s, !1, function () {
                                            if (i ? (t.css("background-image", "url(" + i + ")"), t.removeAttr("data-background")) : (s && (t.attr("srcset", s), t.removeAttr("data-srcset")), n && (t.attr("src", n), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), a.find(".swiper-lazy-preloader, .preloader").remove(), b.params.loop && e) {
                                                var o = a.attr("data-swiper-slide-index");
                                                if (a.hasClass(b.params.slideDuplicateClass)) {
                                                    var r = b.wrapper.children('[data-swiper-slide-index="' + o + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                                    b.lazy.loadImageInSlide(r.index(), !1)
                                                } else {
                                                    var l = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]');
                                                    b.lazy.loadImageInSlide(l.index(), !1)
                                                }
                                            }
                                            b.emit("onLazyImageReady", b, a[0], t[0])
                                        }), b.emit("onLazyImageLoad", b, a[0], t[0])
                                    })
                                }
                            }, load: function () {
                                var t;
                                if (b.params.watchSlidesVisibility)b.wrapper.children("." + b.params.slideVisibleClass).each(function () {
                                    b.lazy.loadImageInSlide($(this).index())
                                }); else if (b.params.slidesPerView > 1)for (t = b.activeIndex; t < b.activeIndex + b.params.slidesPerView; t++)b.slides[t] && b.lazy.loadImageInSlide(t); else b.lazy.loadImageInSlide(b.activeIndex);
                                if (b.params.lazyLoadingInPrevNext)if (b.params.slidesPerView > 1) {
                                    for (t = b.activeIndex + b.params.slidesPerView; t < b.activeIndex + b.params.slidesPerView + b.params.slidesPerView; t++)b.slides[t] && b.lazy.loadImageInSlide(t);
                                    for (t = b.activeIndex - b.params.slidesPerView; t < b.activeIndex; t++)b.slides[t] && b.lazy.loadImageInSlide(t)
                                } else {
                                    var e = b.wrapper.children("." + b.params.slideNextClass);
                                    e.length > 0 && b.lazy.loadImageInSlide(e.index());
                                    var a = b.wrapper.children("." + b.params.slidePrevClass);
                                    a.length > 0 && b.lazy.loadImageInSlide(a.index())
                                }
                            }, onTransitionStart: function () {
                                b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
                            }, onTransitionEnd: function () {
                                b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
                            }
                        }, b.scrollbar = {
                            isTouched: !1, setDragPosition: function (t) {
                                var e = b.scrollbar, a = i() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY, n = a - e.track.offset()[i() ? "left" : "top"] - e.dragSize / 2, s = -b.minTranslate() * e.moveDivider, o = -b.maxTranslate() * e.moveDivider;
                                n < s ? n = s : n > o && (n = o), n = -n / e.moveDivider, b.updateProgress(n), b.setWrapperTranslate(n, !0)
                            }, dragStart: function (t) {
                                var e = b.scrollbar;
                                e.isTouched = !0, t.preventDefault(), t.stopPropagation(), e.setDragPosition(t), clearTimeout(e.dragTimeout), e.track.transition(0), b.params.scrollbarHide && e.track.css("opacity", 1), b.wrapper.transition(100), e.drag.transition(100), b.emit("onScrollbarDragStart", b)
                            }, dragMove: function (t) {
                                var e = b.scrollbar;
                                e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), b.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), b.emit("onScrollbarDragMove", b))
                            }, dragEnd: function (t) {
                                var e = b.scrollbar;
                                e.isTouched && (e.isTouched = !1, b.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function () {
                                    e.track.css("opacity", 0), e.track.transition(400)
                                }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
                            }, enableDraggable: function () {
                                var t = b.scrollbar, e = b.support.touch ? t.track : document;
                                $(t.track).on(b.touchEvents.start, t.dragStart), $(e).on(b.touchEvents.move, t.dragMove), $(e).on(b.touchEvents.end, t.dragEnd)
                            }, disableDraggable: function () {
                                var t = b.scrollbar, e = b.support.touch ? t.track : document;
                                $(t.track).off(b.touchEvents.start, t.dragStart), $(e).off(b.touchEvents.move, t.dragMove), $(e).off(b.touchEvents.end, t.dragEnd)
                            }, set: function () {
                                if (b.params.scrollbar) {
                                    var t = b.scrollbar;
                                    t.track = $(b.params.scrollbar), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = $('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = i() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = b.size / b.virtualSize, t.moveDivider = t.divider * (t.trackSize / b.size), t.dragSize = t.trackSize * t.divider, i() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", b.params.scrollbarHide && (t.track[0].style.opacity = 0)
                                }
                            }, setTranslate: function () {
                                if (b.params.scrollbar) {
                                    var t, e = b.scrollbar, a = (b.translate || 0, e.dragSize);
                                    t = (e.trackSize - e.dragSize) * b.progress, b.rtl && i() ? (t = -t, t > 0 ? (a = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (a = e.trackSize + t)) : t < 0 ? (a = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (a = e.trackSize - t), i() ? (b.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"), e.drag[0].style.width = a + "px") : (b.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"), e.drag[0].style.height = a + "px"), b.params.scrollbarHide && (clearTimeout(e.timeout), e.track[0].style.opacity = 1, e.timeout = setTimeout(function () {
                                        e.track[0].style.opacity = 0, e.track.transition(400)
                                    }, 1e3))
                                }
                            }, setTransition: function (t) {
                                b.params.scrollbar && b.scrollbar.drag.transition(t)
                            }
                        }, b.controller = {
                            LinearSpline: function (t, e) {
                                this.x = t, this.y = e, this.lastIndex = t.length - 1;
                                var a, i;
                                this.x.length;
                                this.interpolate = function (t) {
                                    return t ? (i = n(this.x, t), a = i - 1, (t - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
                                };
                                var n = function () {
                                    var t, e, a;
                                    return function (i, n) {
                                        for (e = -1, t = i.length; t - e > 1;)i[a = t + e >> 1] <= n ? e = a : t = a;
                                        return t
                                    }
                                }()
                            }, getInterpolateFunction: function (t) {
                                b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, t.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, t.snapGrid))
                            }, setTranslate: function (t, a) {
                                function i(e) {
                                    t = e.rtl && "horizontal" === e.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(e), s = -b.controller.spline.interpolate(-t)),
                                    s && "container" !== b.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (b.maxTranslate() - b.minTranslate()), s = (t - b.minTranslate()) * n + e.minTranslate()), b.params.controlInverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setWrapperTranslate(s, !1, b), e.updateActiveIndex()
                                }

                                var n, s, o = b.params.control;
                                if (b.isArray(o))for (var r = 0; r < o.length; r++)o[r] !== a && o[r] instanceof e && i(o[r]); else o instanceof e && a !== o && i(o)
                            }, setTransition: function (t, a) {
                                function i(e) {
                                    e.setWrapperTransition(t, b), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function () {
                                        s && (e.params.loop && "slide" === b.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                    }))
                                }

                                var n, s = b.params.control;
                                if (b.isArray(s))for (n = 0; n < s.length; n++)s[n] !== a && s[n] instanceof e && i(s[n]); else s instanceof e && a !== s && i(s)
                            }
                        }, b.hashnav = {
                            init: function () {
                                if (b.params.hashnav) {
                                    b.hashnav.initialized = !0;
                                    var t = document.location.hash.replace("#", "");
                                    if (t)for (var e = 0, a = 0, i = b.slides.length; a < i; a++) {
                                        var n = b.slides.eq(a), s = n.attr("data-hash");
                                        if (s === t && !n.hasClass(b.params.slideDuplicateClass)) {
                                            var o = n.index();
                                            b.slideTo(o, e, b.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                }
                            }, setHash: function () {
                                b.hashnav.initialized && b.params.hashnav && (document.location.hash = b.slides.eq(b.activeIndex).attr("data-hash") || "")
                            }
                        }, b.disableKeyboardControl = function () {
                            b.params.keyboardControl = !1, $(document).off("keydown", l)
                        }, b.enableKeyboardControl = function () {
                            b.params.keyboardControl = !0, $(document).on("keydown", l)
                        }, b.mousewheel = {
                            event: !1,
                            lastScrollTime: (new window.Date).getTime()
                        }, b.params.mousewheelControl) {
                        try {
                            new window.WheelEvent("wheel"), b.mousewheel.event = "wheel"
                        } catch (t) {
                        }
                        b.mousewheel.event || void 0 === document.onmousewheel || (b.mousewheel.event = "mousewheel"), b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll")
                    }
                    b.disableMousewheelControl = function () {
                        return !!b.mousewheel.event && (b.container.off(b.mousewheel.event, c), !0)
                    }, b.enableMousewheelControl = function () {
                        return !!b.mousewheel.event && (b.container.on(b.mousewheel.event, c), !0)
                    }, b.parallax = {
                        setTranslate: function () {
                            b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                d(this, b.progress)
                            }), b.slides.each(function () {
                                var t = $(this);
                                t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                    var e = Math.min(Math.max(t[0].progress, -1), 1);
                                    d(this, e)
                                })
                            })
                        }, setTransition: function (t) {
                            "undefined" == typeof t && (t = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                var e = $(this), a = parseInt(e.attr("data-swiper-parallax-duration"), 10) || t;
                                0 === t && (a = 0), e.transition(a)
                            })
                        }
                    }, b._plugins = [];
                    for (var R in b.plugins) {
                        var B = b.plugins[R](b, b.params[R]);
                        B && b._plugins.push(B)
                    }
                    return b.callPlugins = function (t) {
                        for (var e = 0; e < b._plugins.length; e++)t in b._plugins[e] && b._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }, b.emitterEventListeners = {}, b.emit = function (t) {
                        b.params[t] && b.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        var e;
                        if (b.emitterEventListeners[t])for (e = 0; e < b.emitterEventListeners[t].length; e++)b.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        b.callPlugins && b.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }, b.on = function (t, e) {
                        return t = h(t), b.emitterEventListeners[t] || (b.emitterEventListeners[t] = []), b.emitterEventListeners[t].push(e), b
                    }, b.off = function (t, e) {
                        var a;
                        if (t = h(t), "undefined" == typeof e)return b.emitterEventListeners[t] = [], b;
                        if (b.emitterEventListeners[t] && 0 !== b.emitterEventListeners[t].length) {
                            for (a = 0; a < b.emitterEventListeners[t].length; a++)b.emitterEventListeners[t][a] === e && b.emitterEventListeners[t].splice(a, 1);
                            return b
                        }
                    }, b.once = function (t, e) {
                        t = h(t);
                        var a = function () {
                            e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(t, a)
                        };
                        return b.on(t, a), b
                    }, b.a11y = {
                        makeFocusable: function (t) {
                            return t.attr("tabIndex", "0"), t
                        },
                        addRole: function (t, e) {
                            return t.attr("role", e), t
                        },
                        addLabel: function (t, e) {
                            return t.attr("aria-label", e), t
                        },
                        disable: function (t) {
                            return t.attr("aria-disabled", !0), t
                        },
                        enable: function (t) {
                            return t.attr("aria-disabled", !1), t
                        },
                        onEnterKey: function (t) {
                            13 === t.keyCode && ($(t.target).is(b.params.nextButton) ? (b.onClickNext(t), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : $(t.target).is(b.params.prevButton) && (b.onClickPrev(t), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), $(t.target).is("." + b.params.bulletClass) && $(t.target)[0].click())
                        },
                        liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function (t) {
                            var e = b.a11y.liveRegion;
                            0 !== e.length && (e.html(""), e.html(t))
                        },
                        init: function () {
                            if (b.params.nextButton) {
                                var t = $(b.params.nextButton);
                                b.a11y.makeFocusable(t), b.a11y.addRole(t, "button"), b.a11y.addLabel(t, b.params.nextSlideMessage)
                            }
                            if (b.params.prevButton) {
                                var e = $(b.params.prevButton);
                                b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.prevSlideMessage)
                            }
                            $(b.container).append(b.a11y.liveRegion)
                        },
                        initPagination: function () {
                            b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function () {
                                var t = $(this);
                                b.a11y.makeFocusable(t), b.a11y.addRole(t, "button"), b.a11y.addLabel(t, b.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                            })
                        },
                        destroy: function () {
                            b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove()
                        }
                    }, b.init = function () {
                        b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b)
                    }, b.cleanupStyles = function () {
                        b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && $(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && $(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
                    }, b.destroy = function (t, e) {
                        b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), e && b.cleanupStyles(), b.disconnectObservers(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.emit("onDestroy"), t !== !1 && (b = null)
                    }, b.init(), b
                }
            };
            e.prototype = {
                isSafari: function () {
                    var t = navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                isArray: function (t) {
                    return "[object Array]" === Object.prototype.toString.apply(t)
                },
                browser: {
                    ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                    ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
                },
                device: function () {
                    var t = navigator.userAgent, e = t.match(/(Android);?[\s\/]+([\d.]+)?/), a = t.match(/(iPad).*OS\s([\d_]+)/), i = t.match(/(iPod)(.*OS\s([\d_]+))?/), n = !a && t.match(/(iPhone\sOS)\s([\d_]+)/);
                    return {ios: a || n || i, android: e}
                }(),
                support: {
                    touch: window.Modernizr && Modernizr.touch === !0 || function () {
                        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                    }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                        var t = document.createElement("div").style;
                        return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                    }(), flexbox: function () {
                        for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < e.length; a++)if (e[a] in t)return !0
                    }(), observer: function () {
                        return "MutationObserver" in window || "WebkitMutationObserver" in window
                    }()
                },
                plugins: {}
            };
            for (var a = ["jQuery", "Zepto", "Dom7"], i = 0; i < a.length; i++)window[a[i]] && t(window[a[i]]);
            var n;
            n = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (t) {
                function e(s) {
                    if (s.target === this)for (t.call(this, s), a = 0; a < i.length; a++)n.off(i[a], e)
                }

                var a, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = this;
                if (t)for (a = 0; a < i.length; a++)n.on(i[a], e);
                return this
            }), "transform" in n.fn || (n.fn.transform = function (t) {
                for (var e = 0; e < this.length; e++) {
                    var a = this[e].style;
                    a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = t
                }
                return this
            }), "transition" in n.fn || (n.fn.transition = function (t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e++) {
                    var a = this[e].style;
                    a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = t
                }
                return this
            })), window.Swiper = e
        }(), t.exports = window.Swiper
    }).call(e, a(1))
}, 8, function (t, e, a) {
    (function (jQuery) {
        "use strict";
        a(39), function ($, t, e, a) {
            var i = function (t, e) {
                this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
            };
            i.prototype = {
                init: function () {
                    var e = this, a = e.el;
                    return e.formatLink(), e.bindEvents(), t.COMS = t.COMS || [], a.attr("data-initialized", "true"), a.attr("data-guid", t.COMS.length), t.COMS.push(e), e
                }, bindEvents: function () {
                    var t = this;
                    t.el
                }, formatLink: function () {
                    var t = this, e = t.el, a = e.attr("data-weiboAppkey"), i = encodeURIComponent(e.attr("data-title")), n = encodeURIComponent(e.attr("data-url")), s = encodeURIComponent(e.attr("data-pic"));
                    e.find(".iconfont:not(.favor)").each(function () {
                        var t = $(this), e = t.attr("href");
                        t.hasClass("icon-weibo") && t.attr("href", e + "?title=" + i + "&url=" + n + "&pic=" + s + "&appkey=" + a), t.hasClass("icon-tengxunweibo") && t.attr("href", e + "?c=share&a=index&title=" + i + "&url=" + n + "&pic=" + s), t.hasClass("icon-kongjian") && t.attr("href", e + "?title=" + i + "&url=" + n + "&pics=" + s + "&summary="), t.hasClass("icon-douban") && t.attr("href", e + "?name=" + i + "&href=" + n + "&image=" + s + "&text=" + i), t.hasClass("icon-linkedin") && t.attr("href", e + "?mini=true&ro=true&title=" + i + "&url=" + n + "&summary=&source=&armin=armin")
                    })
                }
            }, $.fn.Share = function (t) {
                var e;
                return this.each(function () {
                    var a = $(this);
                    "true" != a.attr("data-initialized") && (e = new i(a, t), e.init())
                })
            }
        }(jQuery, window, document)
    }).call(e, a(1))
}, 8, function (t, e, a) {
    (function (t) {
        "use strict";
        a(41), function ($, e, i, n) {
            var s = function (t, e) {
                this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
            };
            s.prototype = {
                init: function () {
                    var t = this, a = t.el;
                    return t.bindEvents(), e.COMS = e.COMS || [], a.data("initialized", !0), a.data("guid", e.COMS.length), e.COMS.push(t), t
                }, bindEvents: function () {
                    var e = this, i = e.el;
                    i.on("click", ".select-box .item", function (t) {
                        var e = $(t.currentTarget), a = e.find(".select-btn");
                        a.hasClass("select-multi-btn") || e.siblings(".item").removeClass("selected").find(".select-btn").removeClass("icon-dui"), e.hasClass("selected") ? (e.removeClass("selected"), e.find(".select-btn").removeClass("icon-dui")) : (e.addClass("selected"), e.find(".select-btn").addClass("icon-dui"))
                    }), i.on("click", ".select-box .note", function (n) {
                        var s = $(n.currentTarget), o = i.find(".select-box .item"), r = [], l = new t(a(42));
                        return o.hasClass("selected") ? (i.css({"min-height": i.outerHeight()}), i.find(".select-box .selected").each(function (t, e) {
                            var a = $(e);
                            r.push(a.attr("data-optionid"))
                        }), s.hide(), void i.find(".select-box").fadeOut(200, function () {
                            i.find(".result-box").fadeIn(200, function () {
                                $.ajax({
                                    url: "/mobile/papers/vote_create",
                                    type: "POST",
                                    dataType: "json",
                                    data: {paper_id: i.attr("data-id"), options: r.join(",")},
                                    success: function (t) {
                                        if (t && t.status) {
                                            var a, n = t.data, s = n.options;
                                            s.length;
                                            a = l.render({options: s}), i.find(".result-box").prepend(a), i.find(".result-box-ft").show(), e.renderResult()
                                        }
                                    },
                                    error: function () {
                                    }
                                })
                            })
                        })) : void $.fn.utils.showNotification("至少要选择一个哦~")
                    })
                }, renderResult: function () {
                    var t, e = this, a = e.el, i = a.find(".result-box .item"), n = 0;
                    i.each(function (e, a) {
                        t = $(a).find(".bar"), n = $(a).attr("data-percent"), t.animate({width: n + "%"}, 500)
                    })
                }
            }, $.fn.RelatedVote = function (t) {
                var e;
                return this.each(function () {
                    var a = $(this);
                    1 != a.data("initialized") && (e = new s(a, t), e.init())
                })
            }
        }(window.jQuery || window.Zepto, window, document)
    }).call(e, a(20))
}, 8, function (t, e) {
    t.exports = function (t) {
        function e(t, e, a) {
            t.data, t.affix;
            return e.data += '\n\t\t\t\t\t<span class="bar selected"></span>\n\t\t\t\t', e
        }

        function a(t, e, a) {
            t.data, t.affix;
            return e.data += '\n\t\t\t\t\t<span class="bar"></span>\n\t\t\t\t', e
        }

        function i(t, i, o) {
            var r = t.data, l = t.affix;
            i.data += '\n\t<li class="item" data-percent = "', c.line = 3;
            var d = (n = l.value) !== o ? n : r.value;
            i = i.writeEscaped(d), i.data += '" data-selected="';
            var h = (n = l.selected) !== o ? n : r.selected;
            i = i.writeEscaped(h), i.data += '">\n\t\t<p class="text">', c.line = 4;
            var p = (n = l.text) !== o ? n : r.text;
            i = i.writeEscaped(p), i.data += '</p>\n\t\t<div class="result clearfix">\n\t\t\t<span class="percent">', c.line = 6;
            var u = (n = l.value) !== o ? n : r.value;
            i = i.writeEscaped(u), i.data += '%</span>\n\t\t\t<div class="progress">\n\t\t\t\t', c.line = 8;
            var f = (n = l.selected) !== o ? n : r.selected;
            return i = m.call(s, t, {
                params: [f],
                fn: e,
                inverse: a
            }, i), i.data += "\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t", i
        }

        var n, s = this, o = s.root, r = s.buffer, l = s.scope, c = (s.runtime, s.name, s.pos), d = l.data, h = l.affix, p = o.nativeCommands, u = o.utils, f = (u.callFn, u.callDataFn, u.callCommand, p.range, p.void, p.foreach, p.forin, p.each), m = (p.with, p.if);
        p.set, p.include, p.includeOnce, p.parse, p.extend, p.block, p.macro, p.debugger;
        r.data += '<ul class="result-box-bd">\n\t', c.line = 2, c.line = 2;
        var g = (n = h.options) !== t ? n : (n = d.options) !== t ? n : l.resolveLooseUp(["options"]);
        return r = f.call(s, l, {params: [g], fn: i}, r), r.data += "\n</ul>\n", r
    }
}, 8, function (t, e) {
    t.exports = function (t) {
        function e(t, e, a) {
            var n = t.data, s = t.affix;
            e.data += '\n\t<img class="hidden" src="', l.line = 4;
            var o = (i = s.feedback_url) !== a ? i : n.feedback_url;
            return e = e.writeEscaped(o), e.data += '">\n    ', e
        }

        function a(t, a, s) {
            var o = t.data, r = t.affix;
            a.data += '\n<a href="', l.line = 2;
            var c = (i = r.redirect_url) !== s ? i : o.redirect_url;
            a = a.writeEscaped(c), a.data += '" class="makemoney">\n    ', l.line = 3, l.line = 3;
            var d = (i = r.feedback_url) !== s ? i : o.feedback_url;
            a = f.call(n, t, {params: [d], fn: e}, a), a.data += '\n    <img src="', l.line = 6;
            var h = (i = r.image_url) !== s ? i : o.image_url;
            a = a.writeEscaped(h), a.data += '" alt="';
            var p = (i = r.image_title) !== s ? i : o.image_title;
            return a = a.writeEscaped(p), a.data += '">\n</a>\n', a
        }

        var i, n = this, s = n.root, o = n.buffer, r = n.scope, l = (n.runtime, n.name, n.pos), c = r.data, d = r.affix, h = s.nativeCommands, p = s.utils, u = (p.callFn, p.callDataFn, p.callCommand, h.range, h.void, h.foreach, h.forin, h.each), f = (h.with, h.if);
        h.set, h.include, h.includeOnce, h.parse, h.extend, h.block, h.macro, h.debugger;
        o.data += "", l.line = 1;
        var m = (i = d.makemoney) !== t ? i : (i = c.makemoney) !== t ? i : r.resolveLooseUp(["makemoney"]);
        return o = u.call(n, r, {params: [m], fn: a}, o)
    }
}, function (t, e, a) {
    "use strict";
    a(46), a(48), a(52), a(54), function ($, t, e, a) {
        var i = function (t, e) {
            this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
        };
        i.prototype = {
            init: function () {
                var e = this, a = e.el;
                return e.initMapWrapper(), a.find(".com-grid-key-article").GridKeyArticle(), a.find(".com-grid-paper").GridPaper(), a.find(".com-grid-paper-votable").GridPaperVotable(), e.bindEvents(), t.COMS = t.COMS || [], a.attr("data-initialized", "true"), a.attr("data-guid", t.COMS.length), t.COMS.push(e), e
            }, bindEvents: function () {
                var t = this;
                t.el
            }, initMapWrapper: function () {
                var t = this, e = t.el, a = e.find(".map-wrapper");
                a.each(function () {
                    var t = $(this), e = "s&wd=" + t.attr("data-locname"), a = t.attr("href");
                    t.attr("href", a + encodeURIComponent(e))
                })
            }
        }, $.fn.RelatedBanners = function (t) {
            var e;
            return this.each(function () {
                var a = $(this);
                "true" != a.attr("data-initialized") && (e = new i(a, t), e.init())
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, function (t, e, a) {
    "use strict";
    a(47), function ($, t, e, a) {
        var i = function (t, e) {
            this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
        };
        i.prototype = {
            init: function () {
                var e = this, a = e.el;
                return e.formatCount(), e.bindEvents(), t.COMS = t.COMS || [], a.attr("data-initialized", "true"), a.attr("data-guid", t.COMS.length), t.COMS.push(e), e
            }, bindEvents: function () {
                var t = this;
                t.el
            }, formatCount: function () {
                var t, e, a, i = this, n = i.el, s = n.find(".grid-paper-bd .count"), o = !1;
                s.length && (e = new Date, t = new Date(s.attr("data-publishDate").replace(/-/g, "/")), a = Math.round((e.getTime() - t.getTime()) / 6e4), a <= 60 * e.getHours() && (o = !0), o && (s.addClass("new"), s.find(".num").remove(), s.find(".text").text("NEW")), s.find(".num, .text").css("display", "block"))
            }
        }, $.fn.GridPaper = function (t) {
            var e;
            return this.each(function () {
                var a = $(this);
                "true" != a.attr("data-initialized") && (e = new i(a, t), e.init())
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, 8, function (t, e, a) {
    (function (t, e) {
        "use strict";
        a(50), function ($, i, n, s) {
            var o = new t(a(51)), r = function (t, e) {
                this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
            };
            r.prototype = {
                init: function () {
                    var t = this, e = t.el;
                    return t.formatCount(), t.bindEvents(), i.COMS = i.COMS || [], e.attr("data-initialized", "true"), e.attr("data-guid", i.COMS.length), i.COMS.push(t), t
                }, bindEvents: function () {
                    var t = this, e = t.el;
                    e.on("click", ".grid-paper-votable-ft .vote .option", function (t) {
                        t.preventDefault();
                        var a = $(t.currentTarget);
                        "true" == e.attr("data-multiSelect") ? a.toggleClass("selected") : (a.siblings(".selected").removeClass("selected"), a.addClass("selected"))
                    }), e.on("click", ".grid-paper-votable-ft .btn", function (a) {
                        a.preventDefault();
                        var i = $(a.currentTarget), n = e.find(".grid-paper-votable-ft .vote"), s = e.find(".grid-paper-votable-ft .result"), r = [];
                        return !i.hasClass("disabled") && (e.find(".grid-paper-votable-ft .vote .selected").each(function (t, e) {
                                var a = $(e);
                                r.push(a.attr("data-optionId"))
                            }), r.length ? (i.addClass("disabled"), void $.ajax({
                                url: "/mobile/papers/vote_create",
                                type: "POST",
                                dataType: "json",
                                data: {paper_id: e.attr("data-id"), options: r.join(",")},
                                success: function (e) {
                                    if (e && e.status) {
                                        for (var a = e.data, r = a.options, l = "", c = r.length; r.length;)l += o.render({
                                            options: r.slice(0, 4),
                                            count: c
                                        }), r = r.slice(4);
                                        i.find(".text").text("已投票"), n.hide(), s.append(l) && s.show() && t.renderPie()
                                    } else i.removeClass("disabled")
                                },
                                error: function (t) {
                                    i.removeClass("disabled")
                                }
                            })) : ($.fn.utils.showNotification("至少要选择一个哦~"), !1))
                    })
                }, formatCount: function () {
                    var t, e, a, i = this, n = i.el, s = n.find(".grid-paper-votable-bd .count"), o = !1;
                    s.length && (e = new Date, t = new Date(s.attr("data-publishDate").replace(/-/g, "/")), a = Math.round((e.getTime() - t.getTime()) / 6e4), a <= 60 * e.getHours() && (o = !0), o && (s.addClass("new"), s.find(".num").remove(), s.find(".text").text("NEW")), s.find(".num, .text").css("display", "block"))
                }, renderPie: function () {
                    var t, a, i, n = this, s = n.el, o = s.find(".pie canvas");
                    o.each(function () {
                        var n = $(this);
                        n.parents(".option");
                        n[0] && n[0].getContext && (a = n[0].getContext("2d"), a && (i = parseFloat(n.attr("data-percent")), t = [{
                            value: i,
                            color: "#ffa200"
                        }, {value: 100 - i, color: "#ffffff"}], new e(a).Doughnut(t, {
                            showTooltips: !1,
                            segmentShowStroke: !1,
                            animationSteps: 60,
                            percentageInnerCutout: 80,
                            animationEasing: "easeInOutQuart"
                        })))
                    })
                }
            }, $.fn.GridPaperVotable = function (t) {
                var e;
                return this.each(function () {
                    var a = $(this);
                    "true" != a.attr("data-initialized") && (e = new r(a, t), e.init())
                })
            }
        }(window.jQuery || window.Zepto, window, document)
    }).call(e, a(20), a(49))
}, function (t, e, a) {
    var i;
    /*!
     * Chart.js
     * http://chartjs.org/
     * Version: 1.0.2
     *
     * Copyright 2015 Nick Downie
     * Released under the MIT license
     * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
     */
    (function () {
        "use strict";
        var n = this, s = n.Chart, o = function (t) {
            this.canvas = t.canvas, this.ctx = t;
            var e = function (t, e) {
                return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
            }, a = this.width = e(t.canvas, "Width"), i = this.height = e(t.canvas, "Height");
            t.canvas.width = a, t.canvas.height = i;
            var a = this.width = t.canvas.width, i = this.height = t.canvas.height;
            return this.aspectRatio = this.width / this.height, r.retinaScale(this), this
        };
        o.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                onAnimationProgress: function () {
                },
                onAnimationComplete: function () {
                }
            }
        }, o.types = {};
        var r = o.helpers = {}, l = r.each = function (t, e, a) {
            var i = Array.prototype.slice.call(arguments, 3);
            if (t)if (t.length === +t.length) {
                var n;
                for (n = 0; n < t.length; n++)e.apply(a, [t[n], n].concat(i))
            } else for (var s in t)e.apply(a, [t[s], s].concat(i))
        }, c = r.clone = function (t) {
            var e = {};
            return l(t, function (a, i) {
                t.hasOwnProperty(i) && (e[i] = a)
            }), e
        }, d = r.extend = function (t) {
            return l(Array.prototype.slice.call(arguments, 1), function (e) {
                l(e, function (a, i) {
                    e.hasOwnProperty(i) && (t[i] = a)
                })
            }), t
        }, h = r.merge = function (t, e) {
            var a = Array.prototype.slice.call(arguments, 0);
            return a.unshift({}), d.apply(null, a)
        }, p = r.indexOf = function (t, e) {
            if (Array.prototype.indexOf)return t.indexOf(e);
            for (var a = 0; a < t.length; a++)if (t[a] === e)return a;
            return -1
        }, u = (r.where = function (t, e) {
            var a = [];
            return r.each(t, function (t) {
                e(t) && a.push(t)
            }), a
        }, r.findNextWhere = function (t, e, a) {
            a || (a = -1);
            for (var i = a + 1; i < t.length; i++) {
                var n = t[i];
                if (e(n))return n
            }
        }, r.findPreviousWhere = function (t, e, a) {
            a || (a = t.length);
            for (var i = a - 1; i >= 0; i--) {
                var n = t[i];
                if (e(n))return n
            }
        }, r.inherits = function (t) {
            var e = this, a = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                return e.apply(this, arguments)
            }, i = function () {
                this.constructor = a
            };
            return i.prototype = e.prototype, a.prototype = new i, a.extend = u, t && d(a.prototype, t), a.__super__ = e.prototype, a
        }), f = r.noop = function () {
        }, m = r.uid = function () {
            var t = 0;
            return function () {
                return "chart-" + t++
            }
        }(), g = r.warn = function (t) {
            window.console && "function" == typeof window.console.warn && console.warn(t)
        }, v = r.amd = a(11), w = r.isNumber = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, b = r.max = function (t) {
            return Math.max.apply(Math, t)
        }, y = r.min = function (t) {
            return Math.min.apply(Math, t)
        }, x = (r.cap = function (t, e, a) {
            if (w(e)) {
                if (t > e)return e
            } else if (w(a) && t < a)return a;
            return t
        }, r.getDecimalPlaces = function (t) {
            return t % 1 !== 0 && w(t) ? t.toString().split(".")[1].length : 0
        }), S = r.radians = function (t) {
            return t * (Math.PI / 180)
        }, C = (r.getAngleFromPoint = function (t, e) {
            var a = e.x - t.x, i = e.y - t.y, n = Math.sqrt(a * a + i * i), s = 2 * Math.PI + Math.atan2(i, a);
            return a < 0 && i < 0 && (s += 2 * Math.PI), {angle: s, distance: n}
        }, r.aliasPixel = function (t) {
            return t % 2 === 0 ? 0 : .5
        }), T = (r.splineCurve = function (t, e, a, i) {
            var n = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)), s = Math.sqrt(Math.pow(a.x - e.x, 2) + Math.pow(a.y - e.y, 2)), o = i * n / (n + s), r = i * s / (n + s);
            return {
                inner: {x: e.x - o * (a.x - t.x), y: e.y - o * (a.y - t.y)},
                outer: {x: e.x + r * (a.x - t.x), y: e.y + r * (a.y - t.y)}
            }
        }, r.calculateOrderOfMagnitude = function (t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }), k = (r.calculateScaleRange = function (t, e, a, i, n) {
            var s = 2, o = Math.floor(e / (1.5 * a)), r = s >= o, l = b(t), c = y(t);
            l === c && (l += .5, c >= .5 && !i ? c -= .5 : l += .5);
            for (var d = Math.abs(l - c), h = T(d), p = Math.ceil(l / (1 * Math.pow(10, h))) * Math.pow(10, h), u = i ? 0 : Math.floor(c / (1 * Math.pow(10, h))) * Math.pow(10, h), f = p - u, m = Math.pow(10, h), g = Math.round(f / m); (g > o || 2 * g < o) && !r;)if (g > o)m *= 2, g = Math.round(f / m), g % 1 !== 0 && (r = !0); else if (n && h >= 0) {
                if (m / 2 % 1 !== 0)break;
                m /= 2, g = Math.round(f / m)
            } else m /= 2, g = Math.round(f / m);
            return r && (g = s, m = f / g), {steps: g, stepValue: m, min: u, max: u + g * m}
        }, r.template = function (t, e) {
            function a(t, e) {
                var a = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
                return e ? a(e) : a
            }

            if (t instanceof Function)return t(e);
            var i = {};
            return a(t, e)
        }), P = (r.generateLabels = function (t, e, a, i) {
            var n = new Array(e);
            return labelTemplateString && l(n, function (e, s) {
                n[s] = k(t, {value: a + i * (s + 1)})
            }), n
        }, r.easingEffects = {
            linear: function (t) {
                return t
            }, easeInQuad: function (t) {
                return t * t
            }, easeOutQuad: function (t) {
                return -1 * t * (t - 2)
            }, easeInOutQuad: function (t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, easeInCubic: function (t) {
                return t * t * t
            }, easeOutCubic: function (t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1)
            }, easeInOutCubic: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, easeInQuart: function (t) {
                return t * t * t * t
            }, easeOutQuart: function (t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            }, easeInOutQuart: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, easeInQuint: function (t) {
                return 1 * (t /= 1) * t * t * t * t
            }, easeOutQuint: function (t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            }, easeInOutQuint: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, easeInSine: function (t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            }, easeOutSine: function (t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2))
            }, easeInOutSine: function (t) {
                return -.5 * (Math.cos(Math.PI * t / 1) - 1)
            }, easeInExpo: function (t) {
                return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            }, easeOutExpo: function (t) {
                return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
            }, easeInOutExpo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            }, easeInCirc: function (t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            }, easeOutCirc: function (t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            }, easeInOutCirc: function (t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, easeInElastic: function (t) {
                var e = 1.70158, a = 0, i = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)))
            }, easeOutElastic: function (t) {
                var e = 1.70158, a = 0, i = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / a) + 1)
            }, easeInOutElastic: function (t) {
                var e = 1.70158, a = 0, i = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (a || (a = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a) * .5 + 1)
            }, easeInBack: function (t) {
                var e = 1.70158;
                return 1 * (t /= 1) * t * ((e + 1) * t - e)
            }, easeOutBack: function (t) {
                var e = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
            }, easeInOutBack: function (t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
            }, easeInBounce: function (t) {
                return 1 - P.easeOutBounce(1 - t)
            }, easeOutBounce: function (t) {
                return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }, easeInOutBounce: function (t) {
                return t < .5 ? .5 * P.easeInBounce(2 * t) : .5 * P.easeOutBounce(2 * t - 1) + .5
            }
        }), M = r.requestAnimFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
        }(), L = r.cancelAnimFrame = function () {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
        }(), E = (r.animationLoop = function (t, e, a, i, n, s) {
            var o = 0, r = P[a] || P.linear, l = function () {
                o++;
                var a = o / e, c = r(a);
                t.call(s, c, a, o), i.call(s, c, a), o < e ? s.animationFrame = M(l) : n.apply(s)
            };
            M(l)
        }, r.getRelativePosition = function (t) {
            var e, a, i = t.originalEvent || t, n = t.currentTarget || t.srcElement, s = n.getBoundingClientRect();
            return i.touches ? (e = i.touches[0].clientX - s.left, a = i.touches[0].clientY - s.top) : (e = i.clientX - s.left, a = i.clientY - s.top), {
                x: e,
                y: a
            }
        }, r.addEvent = function (t, e, a) {
            t.addEventListener ? t.addEventListener(e, a) : t.attachEvent ? t.attachEvent("on" + e, a) : t["on" + e] = a
        }), z = r.removeEvent = function (t, e, a) {
            t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent ? t.detachEvent("on" + e, a) : t["on" + e] = f
        }, I = (r.bindEvents = function (t, e, a) {
            t.events || (t.events = {}), l(e, function (e) {
                t.events[e] = function () {
                    a.apply(t, arguments)
                }, E(t.chart.canvas, e, t.events[e])
            })
        }, r.unbindEvents = function (t, e) {
            l(e, function (e, a) {
                z(t.chart.canvas, a, e)
            })
        }), A = r.getMaximumWidth = function (t) {
            var e = t.parentNode;
            return e.clientWidth
        }, D = r.getMaximumHeight = function (t) {
            var e = t.parentNode;
            return e.clientHeight
        }, F = (r.getMaximumSize = r.getMaximumWidth, r.retinaScale = function (t) {
            var e = t.ctx, a = t.canvas.width, i = t.canvas.height;
            window.devicePixelRatio && (e.canvas.style.width = a + "px", e.canvas.style.height = i + "px", e.canvas.height = i * window.devicePixelRatio, e.canvas.width = a * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
        }), O = r.clear = function (t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
        }, R = r.fontString = function (t, e, a) {
            return e + " " + t + "px " + a
        }, B = r.longestText = function (t, e, a) {
            t.font = e;
            var i = 0;
            return l(a, function (e) {
                var a = t.measureText(e).width;
                i = a > i ? a : i
            }), i
        }, W = r.drawRoundedRectangle = function (t, e, a, i, n, s) {
            t.beginPath(), t.moveTo(e + s, a), t.lineTo(e + i - s, a), t.quadraticCurveTo(e + i, a, e + i, a + s), t.lineTo(e + i, a + n - s), t.quadraticCurveTo(e + i, a + n, e + i - s, a + n), t.lineTo(e + s, a + n), t.quadraticCurveTo(e, a + n, e, a + n - s), t.lineTo(e, a + s), t.quadraticCurveTo(e, a, e + s, a), t.closePath()
        };
        o.instances = {}, o.Type = function (t, e, a) {
            this.options = e, this.chart = a, this.id = m(), o.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
        }, d(o.Type.prototype, {
            initialize: function () {
                return this
            }, clear: function () {
                return O(this.chart), this
            }, stop: function () {
                return L(this.animationFrame), this
            }, resize: function (t) {
                this.stop();
                var e = this.chart.canvas, a = A(this.chart.canvas), i = this.options.maintainAspectRatio ? a / this.chart.aspectRatio : D(this.chart.canvas);
                return e.width = this.chart.width = a, e.height = this.chart.height = i, F(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
            }, reflow: f, render: function (t) {
                return t && this.reflow(), this.options.animation && !t ? r.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
            }, generateLegend: function () {
                return k(this.options.legendTemplate, this)
            }, destroy: function () {
                this.clear(), I(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete o.instances[this.id]
            }, showTooltip: function (t, e) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var a = function (t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (l(t, function (t, a) {
                        t !== this.activeElements[a] && (e = !0)
                    }, this), e)
                }.call(this, t);
                if (a || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)if (this.datasets && this.datasets.length > 1) {
                        for (var i, n, s = this.datasets.length - 1; s >= 0 && (i = this.datasets[s].points || this.datasets[s].bars || this.datasets[s].segments, n = p(i, t[0]), n === -1); s--);
                        var c = [], d = [], h = function (t) {
                            var e, a, i, s, o, l = [], h = [], p = [];
                            return r.each(this.datasets, function (t) {
                                e = t.points || t.bars || t.segments, e[n] && e[n].hasValue() && l.push(e[n])
                            }), r.each(l, function (t) {
                                h.push(t.x), p.push(t.y), c.push(r.template(this.options.multiTooltipTemplate, t)), d.push({
                                    fill: t._saved.fillColor || t.fillColor,
                                    stroke: t._saved.strokeColor || t.strokeColor
                                })
                            }, this), o = y(p), i = b(p), s = y(h), a = b(h), {
                                x: s > this.chart.width / 2 ? s : a,
                                y: (o + i) / 2
                            }
                        }.call(this, n);
                        new o.MultiTooltip({
                            x: h.x,
                            y: h.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: c,
                            legendColors: d,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: t[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else l(t, function (t) {
                        var e = t.tooltipPosition();
                        new o.Tooltip({
                            x: Math.round(e.x),
                            y: Math.round(e.y),
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            caretHeight: this.options.tooltipCaretSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            text: k(this.options.tooltipTemplate, t),
                            chart: this.chart,
                            custom: this.options.customTooltips
                        }).draw()
                    }, this);
                    return this
                }
            }, toBase64Image: function () {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), o.Type.extend = function (t) {
            var e = this, a = function () {
                return e.apply(this, arguments)
            };
            if (a.prototype = c(e.prototype), d(a.prototype, t), a.extend = o.Type.extend, t.name || e.prototype.name) {
                var i = t.name || e.prototype.name, n = o.defaults[e.prototype.name] ? c(o.defaults[e.prototype.name]) : {};
                o.defaults[i] = d(n, t.defaults), o.types[i] = a, o.prototype[i] = function (t, e) {
                    var n = h(o.defaults.global, o.defaults[i], e || {});
                    return new a(t, n, this)
                }
            } else g("Name not provided for this chart, so it hasn't been registered");
            return e
        }, o.Element = function (t) {
            d(this, t), this.initialize.apply(this, arguments), this.save()
        }, d(o.Element.prototype, {
            initialize: function () {
            }, restore: function (t) {
                return t ? l(t, function (t) {
                    this[t] = this._saved[t]
                }, this) : d(this, this._saved), this
            }, save: function () {
                return this._saved = c(this), delete this._saved._saved, this
            }, update: function (t) {
                return l(t, function (t, e) {
                    this._saved[e] = this[e], this[e] = t
                }, this), this
            }, transition: function (t, e) {
                return l(t, function (t, a) {
                    this[a] = (t - this._saved[a]) * e + this._saved[a]
                }, this), this
            }, tooltipPosition: function () {
                return {x: this.x, y: this.y}
            }, hasValue: function () {
                return w(this.value)
            }
        }), o.Element.extend = u, o.Point = o.Element.extend({
            display: !0, inRange: function (t, e) {
                var a = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(a, 2)
            }, draw: function () {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                }
            }
        }), o.Arc = o.Element.extend({
            inRange: function (t, e) {
                var a = r.getAngleFromPoint(this, {
                    x: t,
                    y: e
                }), i = a.angle >= this.startAngle && a.angle <= this.endAngle, n = a.distance >= this.innerRadius && a.distance <= this.outerRadius;
                return i && n
            }, tooltipPosition: function () {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2, e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {x: this.x + Math.cos(t) * e, y: this.y + Math.sin(t) * e}
            }, draw: function (t) {
                var e = this.ctx;
                e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
            }
        }), o.Rectangle = o.Element.extend({
            draw: function () {
                var t = this.ctx, e = this.width / 2, a = this.x - e, i = this.x + e, n = this.base - (this.base - this.y), s = this.strokeWidth / 2;
                this.showStroke && (a += s, i -= s, n += s), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(a, this.base), t.lineTo(a, n), t.lineTo(i, n), t.lineTo(i, this.base), t.fill(), this.showStroke && t.stroke()
            }, height: function () {
                return this.base - this.y
            }, inRange: function (t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
            }
        }), o.Tooltip = o.Element.extend({
            draw: function () {
                var t = this.chart.ctx;
                t.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2, a = t.measureText(this.text).width + 2 * this.xPadding, i = this.fontSize + 2 * this.yPadding, n = i + this.caretHeight + e;
                this.x + a / 2 > this.chart.width ? this.xAlign = "left" : this.x - a / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
                var s = this.x - a / 2, o = this.y - n;
                if (t.fillStyle = this.fillColor, this.custom)this.custom(this); else {
                    switch (this.yAlign) {
                        case"above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case"below":
                            o = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                    }
                    switch (this.xAlign) {
                        case"left":
                            s = this.x - a + (this.cornerRadius + this.caretHeight);
                            break;
                        case"right":
                            s = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    W(t, s, o, a, i, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, s + a / 2, o + i / 2)
                }
            }
        }), o.MultiTooltip = o.Element.extend({
            initialize: function () {
                this.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = R(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width, e = B(this.ctx, this.font, this.labels) + this.fontSize + 3, a = b([e, t]);
                this.width = a + 2 * this.xPadding;
                var i = this.height / 2;
                this.y - i < 0 ? this.y = i : this.y + i > this.chart.height && (this.y = this.chart.height - i), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            }, getLineHeight: function (t) {
                var e = this.y - this.height / 2 + this.yPadding, a = t - 1;
                return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * a + this.fontSize / 2) + 1.5 * this.titleFontSize
            }, draw: function () {
                if (this.custom)this.custom(this); else {
                    W(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, r.each(this.labels, function (e, a) {
                        t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(a + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(a + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[a].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(a + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), o.Scale = o.Element.extend({
            initialize: function () {
                this.fit()
            }, buildYLabels: function () {
                this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++)this.yLabels.push(k(this.templateString, {value: (this.min + e * this.stepValue).toFixed(t)}));
                this.yLabelWidth = this.display && this.showLabels ? B(this.ctx, this.font, this.yLabels) : 0
            }, addXLabel: function (t) {
                this.xLabels.push(t), this.valuesCount++, this.fit()
            }, removeXLabel: function () {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            }, fit: function () {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var t, e = this.endPoint - this.startPoint;
                for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;)e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
            }, calculateXLabelRotation: function () {
                this.ctx.font = this.font;
                var t, e, a = this.ctx.measureText(this.xLabels[0]).width, i = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = i / 2 + 3, this.xScalePaddingLeft = a / 2 > this.yLabelWidth + 10 ? a / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                    var n, s = B(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = s;
                    for (var o = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > o && 0 === this.xLabelRotation || this.xLabelWidth > o && this.xLabelRotation <= 90 && this.xLabelRotation > 0;)n = Math.cos(S(this.xLabelRotation)), t = n * a, e = n * i, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * s;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(S(this.xLabelRotation)) * s + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            }, calculateYRange: f, drawingArea: function () {
                return this.startPoint - this.endPoint
            }, calculateY: function (t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min)
            }, calculateX: function (t) {
                var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)), a = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1), i = a * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (i += a / 2), Math.round(i)
            }, update: function (t) {
                r.extend(this, t), this.fit()
            }, draw: function () {
                var t = this.ctx, e = (this.endPoint - this.startPoint) / this.steps, a = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, l(this.yLabels, function (i, n) {
                    var s = this.endPoint - e * n, o = Math.round(s), l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(i, a - 10, s), 0 !== n || l || (l = !0), l && t.beginPath(), n > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), o += r.aliasPixel(t.lineWidth), l && (t.moveTo(a, o), t.lineTo(this.width, o), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(a - 5, o), t.lineTo(a, o), t.stroke(), t.closePath()
                }, this), l(this.xLabels, function (e, a) {
                    var i = this.calculateX(a) + C(this.lineWidth), n = this.calculateX(a - (this.offsetGridLines ? .5 : 0)) + C(this.lineWidth), s = this.xLabelRotation > 0, o = this.showVerticalLines;
                    0 !== a || o || (o = !0), o && t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), o && (t.moveTo(n, this.endPoint), t.lineTo(n, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n, this.endPoint), t.lineTo(n, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(i, s ? this.endPoint + 12 : this.endPoint + 8), t.rotate(S(this.xLabelRotation) * -1), t.font = this.font, t.textAlign = s ? "right" : "center", t.textBaseline = s ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                }, this))
            }
        }), o.RadialScale = o.Element.extend({
            initialize: function () {
                this.size = y([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            }, calculateCenterOffset: function (t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e
            }, update: function () {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            }, buildYLabels: function () {
                this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++)this.yLabels.push(k(this.templateString, {value: (this.min + e * this.stepValue).toFixed(t)}))
            }, getCircumference: function () {
                return 2 * Math.PI / this.valuesCount
            }, setScaleSize: function () {
                var t, e, a, i, n, s, o, r, l, c, d, h, p = y([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), u = this.width, f = 0;
                for (this.ctx.font = R(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++)t = this.getPointPosition(e, p), a = this.ctx.measureText(k(this.templateString, {value: this.labels[e]})).width + 5, 0 === e || e === this.valuesCount / 2 ? (i = a / 2, t.x + i > u && (u = t.x + i, n = e), t.x - i < f && (f = t.x - i, o = e)) : e < this.valuesCount / 2 ? t.x + a > u && (u = t.x + a, n = e) : e > this.valuesCount / 2 && t.x - a < f && (f = t.x - a, o = e);
                l = f, c = Math.ceil(u - this.width), s = this.getIndexAngle(n), r = this.getIndexAngle(o), d = c / Math.sin(s + Math.PI / 2), h = l / Math.sin(r + Math.PI / 2), d = w(d) ? d : 0, h = w(h) ? h : 0, this.drawingArea = p - (h + d) / 2, this.setCenterPoint(h, d)
            }, setCenterPoint: function (t, e) {
                var a = this.width - e - this.drawingArea, i = t + this.drawingArea;
                this.xCenter = (i + a) / 2, this.yCenter = this.height / 2
            }, getIndexAngle: function (t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2
            }, getPointPosition: function (t, e) {
                var a = this.getIndexAngle(t);
                return {x: Math.cos(a) * e + this.xCenter, y: Math.sin(a) * e + this.yCenter}
            }, draw: function () {
                if (this.display) {
                    var t = this.ctx;
                    if (l(this.yLabels, function (e, a) {
                            if (a > 0) {
                                var i, n = a * (this.drawingArea / this.steps), s = this.yCenter - n;
                                if (this.lineWidth > 0)if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc)t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke(); else {
                                    t.beginPath();
                                    for (var o = 0; o < this.valuesCount; o++)i = this.getPointPosition(o, this.calculateCenterOffset(this.min + a * this.stepValue)), 0 === o ? t.moveTo(i.x, i.y) : t.lineTo(i.x, i.y);
                                    t.closePath(), t.stroke()
                                }
                                if (this.showLabels) {
                                    if (t.font = R(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var r = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, s - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, s)
                                }
                            }
                        }, this), !this.lineArc) {
                        t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            if (this.angleLineWidth > 0) {
                                var a = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(a.x, a.y), t.stroke(), t.closePath()
                            }
                            var i = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = R(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var n = this.labels.length, s = this.labels.length / 2, o = s / 2, r = e < o || e > n - o, c = e === o || e === n - o;
                            0 === e ? t.textAlign = "center" : e === s ? t.textAlign = "center" : e < s ? t.textAlign = "left" : t.textAlign = "right", c ? t.textBaseline = "middle" : r ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], i.x, i.y)
                        }
                    }
                }
            }
        }), r.addEvent(window, "resize", function () {
            var t;
            return function () {
                clearTimeout(t), t = setTimeout(function () {
                    l(o.instances, function (t) {
                        t.options.responsive && t.resize(t.render, !0)
                    })
                }, 50)
            }
        }()), v ? (i = function () {
            return o
        }.call(e, a, e, t), !(void 0 !== i && (t.exports = i))) : "object" == typeof t && t.exports && (t.exports = o), n.Chart = o, o.noConflict = function () {
            return n.Chart = s, o
        }
    }).call(this), function () {
        "use strict";
        var t = this, e = t.Chart, a = e.helpers, i = {
            scaleBeginAtZero: !0,
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: !0,
            scaleShowVerticalLines: !0,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        };
        e.Type.extend({
            name: "Bar", defaults: i, initialize: function (t) {
                var i = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0, calculateBarX: function (t, e, a) {
                        var n = this.calculateBaseWidth(), s = this.calculateX(a) - n / 2, o = this.calculateBarWidth(t);
                        return s + o * e + e * i.barDatasetSpacing + o / 2
                    }, calculateBaseWidth: function () {
                        return this.calculateX(1) - this.calculateX(0) - 2 * i.barValueSpacing
                    }, calculateBarWidth: function (t) {
                        var e = this.calculateBaseWidth() - (t - 1) * i.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && a.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), a.each(e, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), a.each(t.datasets, function (e, i) {
                    var n = {label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, bars: []};
                    this.datasets.push(n), a.each(e.data, function (a, i) {
                        n.bars.push(new this.BarClass({
                            value: a,
                            label: t.labels[i],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (t, e, i) {
                    a.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, i, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            }, update: function () {
                this.scale.update(), a.each(this.activeElements, function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function (t) {
                    t.save()
                }), this.render()
            }, eachBars: function (t) {
                a.each(this.datasets, function (e, i) {
                    a.each(e.bars, t, this, i)
                }, this)
            }, getBarsAtEvent: function (t) {
                for (var e, i = [], n = a.getRelativePosition(t), s = function (t) {
                    i.push(t.bars[e])
                }, o = 0; o < this.datasets.length; o++)for (e = 0; e < this.datasets[o].bars.length; e++)if (this.datasets[o].bars[e].inRange(n.x, n.y))return a.each(this.datasets, s), i;
                return i
            }, buildScale: function (t) {
                var e = this, i = function () {
                    var t = [];
                    return e.eachBars(function (e) {
                        t.push(e.value)
                    }), t
                }, n = {
                    templateString: this.options.scaleLabel,
                    height: this.chart.height,
                    width: this.chart.width,
                    ctx: this.chart.ctx,
                    textColor: this.options.scaleFontColor,
                    fontSize: this.options.scaleFontSize,
                    fontStyle: this.options.scaleFontStyle,
                    fontFamily: this.options.scaleFontFamily,
                    valuesCount: t.length,
                    beginAtZero: this.options.scaleBeginAtZero,
                    integersOnly: this.options.scaleIntegersOnly,
                    calculateYRange: function (t) {
                        var e = a.calculateScaleRange(i(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                        a.extend(this, e)
                    },
                    xLabels: t,
                    font: a.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                    lineWidth: this.options.scaleLineWidth,
                    lineColor: this.options.scaleLineColor,
                    showHorizontalLines: this.options.scaleShowHorizontalLines,
                    showVerticalLines: this.options.scaleShowVerticalLines,
                    gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                    gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                    padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                    showLabels: this.options.scaleShowLabels,
                    display: this.options.showScale
                };
                this.options.scaleOverride && a.extend(n, {
                    calculateYRange: a.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(n)
            }, addData: function (t, e) {
                a.each(t, function (t, a) {
                    this.datasets[a].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateBarX(this.datasets.length, a, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[a].strokeColor,
                        fillColor: this.datasets[a].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            }, removeData: function () {
                this.scale.removeXLabel(), a.each(this.datasets, function (t) {
                    t.bars.shift()
                }, this), this.update()
            }, reflow: function () {
                a.extend(this.BarClass.prototype, {y: this.scale.endPoint, base: this.scale.endPoint});
                var t = a.extend({height: this.chart.height, width: this.chart.width});
                this.scale.update(t)
            }, draw: function (t) {
                var e = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(e), a.each(this.datasets, function (t, i) {
                    a.each(t.bars, function (t, a) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, i, a),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this), function () {
        "use strict";
        var t = this, e = t.Chart, a = e.helpers, i = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
        };
        e.Type.extend({
            name: "Doughnut", defaults: i, initialize: function (t) {
                this.segments = [], this.outerRadius = (a.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && a.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    a.each(this.segments, function (t) {
                        t.restore(["fillColor"])
                    }), a.each(e, function (t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), a.each(t, function (t, e) {
                    this.addData(t, e, !0)
                }, this), this.render()
            }, getSegmentsAtEvent: function (t) {
                var e = [], i = a.getRelativePosition(t);
                return a.each(this.segments, function (t) {
                    t.inRange(i.x, i.y) && e.push(t)
                }, this), e
            }, addData: function (t, e, a) {
                var i = e || this.segments.length;
                this.segments.splice(i, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), a || (this.reflow(), this.update())
            }, calculateCircumference: function (t) {
                return 2 * Math.PI * (Math.abs(t) / this.total)
            }, calculateTotal: function (t) {
                this.total = 0, a.each(t, function (t) {
                    this.total += Math.abs(t.value)
                }, this)
            }, update: function () {
                this.calculateTotal(this.segments), a.each(this.activeElements, function (t) {
                    t.restore(["fillColor"])
                }), a.each(this.segments, function (t) {
                    t.save()
                }), this.render()
            }, removeData: function (t) {
                var e = a.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            }, reflow: function () {
                a.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (a.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, a.each(this.segments, function (t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            }, draw: function (t) {
                var e = t ? t : 1;
                this.clear(), a.each(this.segments, function (t, a) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === a && (t.startAngle = 1.5 * Math.PI), a < this.segments.length - 1 && (this.segments[a + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({name: "Pie", defaults: a.merge(i, {percentageInnerCutout: 0})})
    }.call(this), function () {
        "use strict";
        var t = this, e = t.Chart, a = e.helpers, i = {
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: !0,
            scaleShowVerticalLines: !0,
            bezierCurve: !0,
            bezierCurveTension: .4,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        };
        e.Type.extend({
            name: "Line", defaults: i, initialize: function (t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function (t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && a.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), a.each(e, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), a.each(t.datasets, function (e) {
                    var i = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(i), a.each(e.data, function (a, n) {
                        i.points.push(new this.PointClass({
                            value: a,
                            label: t.labels[n],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function (t, e) {
                        a.extend(t, {x: this.scale.calculateX(e), y: this.scale.endPoint}), t.save()
                    }, this)
                }, this), this.render()
            }, update: function () {
                this.scale.update(), a.each(this.activeElements, function (t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function (t) {
                    t.save()
                }), this.render()
            }, eachPoints: function (t) {
                a.each(this.datasets, function (e) {
                    a.each(e.points, t, this)
                }, this)
            }, getPointsAtEvent: function (t) {
                var e = [], i = a.getRelativePosition(t);
                return a.each(this.datasets, function (t) {
                    a.each(t.points, function (t) {
                        t.inRange(i.x, i.y) && e.push(t)
                    })
                }, this), e
            }, buildScale: function (t) {
                var i = this, n = function () {
                    var t = [];
                    return i.eachPoints(function (e) {
                        t.push(e.value)
                    }), t
                }, s = {
                    templateString: this.options.scaleLabel,
                    height: this.chart.height,
                    width: this.chart.width,
                    ctx: this.chart.ctx,
                    textColor: this.options.scaleFontColor,
                    fontSize: this.options.scaleFontSize,
                    fontStyle: this.options.scaleFontStyle,
                    fontFamily: this.options.scaleFontFamily,
                    valuesCount: t.length,
                    beginAtZero: this.options.scaleBeginAtZero,
                    integersOnly: this.options.scaleIntegersOnly,
                    calculateYRange: function (t) {
                        var e = a.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                        a.extend(this, e)
                    },
                    xLabels: t,
                    font: a.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                    lineWidth: this.options.scaleLineWidth,
                    lineColor: this.options.scaleLineColor,
                    showHorizontalLines: this.options.scaleShowHorizontalLines,
                    showVerticalLines: this.options.scaleShowVerticalLines,
                    gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                    gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                    padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                    showLabels: this.options.scaleShowLabels,
                    display: this.options.showScale
                };
                this.options.scaleOverride && a.extend(s, {
                    calculateYRange: a.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(s)
            }, addData: function (t, e) {
                a.each(t, function (t, a) {
                    this.datasets[a].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[a].pointStrokeColor,
                        fillColor: this.datasets[a].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            }, removeData: function () {
                this.scale.removeXLabel(), a.each(this.datasets, function (t) {
                    t.points.shift()
                }, this), this.update()
            }, reflow: function () {
                var t = a.extend({height: this.chart.height, width: this.chart.width});
                this.scale.update(t)
            }, draw: function (t) {
                var e = t || 1;
                this.clear();
                var i = this.chart.ctx, n = function (t) {
                    return null !== t.value
                }, s = function (t, e, i) {
                    return a.findNextWhere(e, n, i) || t
                }, o = function (t, e, i) {
                    return a.findPreviousWhere(e, n, i) || t
                };
                this.scale.draw(e), a.each(this.datasets, function (t) {
                    var r = a.where(t.points, n);
                    a.each(t.points, function (t, a) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(a)
                        }, e)
                    }, this), this.options.bezierCurve && a.each(r, function (t, e) {
                        var i = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = a.splineCurve(o(t, r, e), t, s(t, r, e), i), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, i.beginPath(), a.each(r, function (t, e) {
                        if (0 === e)i.moveTo(t.x, t.y); else if (this.options.bezierCurve) {
                            var a = o(t, r, e);
                            i.bezierCurveTo(a.controlPoints.outer.x, a.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else i.lineTo(t.x, t.y)
                    }, this), i.stroke(), this.options.datasetFill && r.length > 0 && (i.lineTo(r[r.length - 1].x, this.scale.endPoint), i.lineTo(r[0].x, this.scale.endPoint), i.fillStyle = t.fillColor, i.closePath(), i.fill()), a.each(r, function (t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this), function () {
        "use strict";
        var t = this, e = t.Chart, a = e.helpers, i = {
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBeginAtZero: !0,
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            scaleShowLine: !0,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
        };
        e.Type.extend({
            name: "PolarArea", defaults: i, initialize: function (t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), a.each(t, function (t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && a.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    a.each(this.segments, function (t) {
                        t.restore(["fillColor"])
                    }), a.each(e, function (t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            }, getSegmentsAtEvent: function (t) {
                var e = [], i = a.getRelativePosition(t);
                return a.each(this.segments, function (t) {
                    t.inRange(i.x, i.y) && e.push(t)
                }, this), e
            }, addData: function (t, e, a) {
                var i = e || this.segments.length;
                this.segments.splice(i, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), a || (this.reflow(), this.update())
            }, removeData: function (t) {
                var e = a.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            }, calculateTotal: function (t) {
                this.total = 0, a.each(t, function (t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            }, updateScaleRange: function (t) {
                var e = [];
                a.each(t, function (t) {
                    e.push(t.value)
                });
                var i = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : a.calculateScaleRange(e, a.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                a.extend(this.scale, i, {
                    size: a.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            }, update: function () {
                this.calculateTotal(this.segments), a.each(this.segments, function (t) {
                    t.save()
                }), this.reflow(), this.render()
            }, reflow: function () {
                a.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), a.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), a.each(this.segments, function (t) {
                    t.update({outerRadius: this.scale.calculateCenterOffset(t.value)})
                }, this)
            }, draw: function (t) {
                var e = t || 1;
                this.clear(), a.each(this.segments, function (t, a) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === a && (t.startAngle = 1.5 * Math.PI), a < this.segments.length - 1 && (this.segments[a + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this), function () {
        "use strict";
        var t = this, e = t.Chart, a = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function (t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && a.bindEvents(this, this.options.tooltipEvents, function (t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function (t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), a.each(e, function (t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), a.each(t.datasets, function (e) {
                    var i = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(i), a.each(e.data, function (a, n) {
                        var s;
                        this.scale.animation || (s = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(a))), i.points.push(new this.PointClass({
                            value: a,
                            label: t.labels[n],
                            datasetLabel: e.label,
                            x: this.options.animation ? this.scale.xCenter : s.x,
                            y: this.options.animation ? this.scale.yCenter : s.y,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function (t) {
                a.each(this.datasets, function (e) {
                    a.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function (t) {
                var e = a.getRelativePosition(t), i = a.getAngleFromPoint({
                    x: this.scale.xCenter,
                    y: this.scale.yCenter
                }, e), n = 2 * Math.PI / this.scale.valuesCount, s = Math.round((i.angle - 1.5 * Math.PI) / n), o = [];
                return (s >= this.scale.valuesCount || s < 0) && (s = 0), i.distance <= this.scale.drawingArea && a.each(this.datasets, function (t) {
                    o.push(t.points[s])
                }), o
            },
            buildScale: function (t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function (t) {
                var e = function () {
                    var e = [];
                    return a.each(t, function (t) {
                        t.data ? e = e.concat(t.data) : a.each(t.points, function (t) {
                            e.push(t.value)
                        })
                    }), e
                }(), i = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : a.calculateScaleRange(e, a.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                a.extend(this.scale, i)
            },
            addData: function (t, e) {
                this.scale.valuesCount++, a.each(t, function (t, a) {
                    var i = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[a].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        x: i.x,
                        y: i.y,
                        strokeColor: this.datasets[a].pointStrokeColor,
                        fillColor: this.datasets[a].pointColor
                    }))
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function () {
                this.scale.valuesCount--, this.scale.labels.shift(), a.each(this.datasets, function (t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function () {
                this.eachPoints(function (t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function () {
                a.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: a.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function (t) {
                var e = t || 1, i = this.chart.ctx;
                this.clear(), this.scale.draw(), a.each(this.datasets, function (t) {
                    a.each(t.points, function (t, a) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(a, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, i.beginPath(), a.each(t.points, function (t, e) {
                        0 === e ? i.moveTo(t.x, t.y) : i.lineTo(t.x, t.y)
                    }, this), i.closePath(), i.stroke(), i.fillStyle = t.fillColor, i.fill(), a.each(t.points, function (t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this)
}, 8, function (t, e) {
    t.exports = function (t) {
        function e(t, e, a) {
            t.data, t.affix;
            return e.data += "selected", e
        }

        function a(t, a, s) {
            var o = t.data, r = t.affix;
            a.data += '\n    <li class="item option ', l.line = 3;
            var c = (i = r.selected) !== s ? i : o.selected;
            a = f.call(n, t, {
                params: [c],
                fn: e
            }, a), a.data += '">\n        <div class="pie">\n            <canvas class="canvas-outer" data-percent="', l.line = 5;
            var d = (i = r.value) !== s ? i : o.value;
            a = a.writeEscaped(d), a.data += '"></canvas>\n            <div class="num">', l.line = 6;
            var h = (i = r.value) !== s ? i : o.value;
            a = a.writeEscaped(h), a.data += '%</div>\n        </div>\n        <p class="text">', l.line = 8;
            var p = (i = r.text) !== s ? i : o.text;
            return a = a.writeEscaped(p), a.data += "</p>\n    </li>\n    ", a
        }

        var i, n = this, s = n.root, o = n.buffer, r = n.scope, l = (n.runtime, n.name, n.pos), c = r.data, d = r.affix, h = s.nativeCommands, p = s.utils, u = (p.callFn, p.callDataFn, p.callCommand, h.range, h.void, h.foreach, h.forin, h.each), f = (h.with, h.if);
        h.set, h.include, h.includeOnce, h.parse, h.extend, h.block, h.macro, h.debugger;
        o.data += '<ul class="items options clearfix count-';
        var m = (i = d.count) !== t ? i : (i = c.count) !== t ? i : r.resolveLooseUp(["count"]);
        o = o.writeEscaped(m), o.data += '">\n    ', l.line = 2, l.line = 2;
        var g = (i = d.options) !== t ? i : (i = c.options) !== t ? i : r.resolveLooseUp(["options"]);
        return o = u.call(n, r, {params: [g], fn: a}, o), o.data += "\n</ul>", o
    }
}, function (t, e, a) {
    "use strict";
    a(53), function ($, t, e, a) {
        var i = function (t, e) {
            this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
        };
        i.prototype = {
            init: function () {
                var e = this, a = e.el;
                return a.find(".smart-date").smartDate(), e.bindEvents(), t.COMS = t.COMS || [], a.attr("data-initialized", "true"), a.attr("data-guid", t.COMS.length), t.COMS.push(e), e
            }, bindEvents: function () {
                var t = this;
                t.el
            }
        }, $.fn.GridKeyArticle = function (t) {
            var e;
            return this.each(function () {
                var a = $(this);
                "true" != a.attr("data-initialized") && (e = new i(a, t), e.init())
            })
        }
    }(window.jQuery || window.Zepto, window, document)
}, 8, 8, function (t, e, a) {
    (function (t) {
        "use strict";
        a(56), function ($, e, i, n) {
            var s = 0, o = function (t, a) {
                this.el = t, this.defaults = {
                    fetchComments: !0,
                    elScrollWrapper: $(e),
                    prefetch: !1,
                    baseUrl: "",
                    commentType: "article",
                    elCommentsContainer: t.find(".items.comments")
                }, this.options = $.extend({}, this.defaults, a)
            };
            o.prototype = {
                init: function () {
                    var t = this, a = t.el, i = a.find(".callup-button .btn");
                    return $.fn.utils.addLocationHost(i), $.fn.utils.addParameter(i), t.options.fetchComments && t.fetchComments(), t.bindEvents(), e.COMS = e.COMS || [], a.attr("data-initialized", "true"), a.attr("data-guid", e.COMS.length), e.COMS.push(t), t
                }, bindEvents: function () {
                    var t, e = this, a = e.el, i = $.fn.utils.getUrlScheme();
                    a.on("click", ".callup-button .btn", function (e) {
                        return !!(t = $.fn.utils.callupApp(i)) || void e.preventDefault()
                    })
                }, updateCount: function (t) {
                    var e = this, a = e.el;
                    t && a.find(".count").text(t + "条评论").css({visibility: "visible"})
                }, updateCallupButton: function (t) {
                    var e = this, a = e.el, i = a.find(".callup-button");
                    t >= 5 && i.find(".btn").text("打开好奇心，查看更多评论")
                }, fetchComments: function () {
                    var e, i = this, n = (i.el, i.options), o = n.baseUrl, r = n.elCommentsContainer;
                    e = new t(a(57)), $.ajax({
                        url: o + "/" + s + ".json",
                        type: "GET",
                        dataType: "json",
                        data: {limit: 5},
                        success: function (t) {
                            if (t && t.status) {
                                var a, n = t.data;
                                s = n.last_key, r.attr("data-lastkey", s), a = $(e.render({comments: n.comments})), a.find(".smart-date").smartDate(), i.updateCount(n.total_count), i.updateCallupButton(n.total_count), r.append(a)
                            }
                        },
                        error: function (t) {
                        }
                    })
                }
            }, $.fn.RelatedCommentsBrief = function (t) {
                var e;
                return this.each(function () {
                    var a = $(this);
                    "true" != a.attr("data-initialized") && (e = new o(a, t), e.init())
                })
            }
        }(window.jQuery || window.Zepto, window, document)
    }).call(e, a(20))
}, 8, function (t, e, a) {
    t.exports = function (t) {
        function e(t, e, i) {
            var o = t.data;
            t.affix;
            e.data += "\n    ", l.line = 2;
            var r, c = o;
            e = s.includeModule(t, {params: [a(58), c]}, e, n);
            var d = r;
            return e = e.writeEscaped(d), e.data += "\n", e
        }

        var i, n = this, s = n.root, o = n.buffer, r = n.scope, l = (n.runtime, n.name, n.pos), c = r.data, d = r.affix, h = s.nativeCommands, p = s.utils, u = (p.callFn, p.callDataFn, p.callCommand, h.range, h.void, h.foreach, h.forin, h.each);
        h.with, h.if, h.set, h.include, h.includeOnce, h.parse, h.extend, h.block, h.macro, h.debugger;
        o.data += "", l.line = 1;
        var f = (i = d.comments) !== t ? i : (i = c.comments) !== t ? i : r.resolveLooseUp(["comments"]);
        return o = u.call(n, r, {params: [f], fn: e}, o)
    }
}, function (t, e, a) {
    t.exports = function (t) {
        function e(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += '\n            <a href="javascript:void(0)" class="avatar circle x35">\n                <img class="lazyload"  data-src="', u.line = 5;
            var s = (r = n.author) !== a ? null != r ? l = r.avatar : r : (r = i.author) !== a ? null != r ? l = r.avatar : r : t.resolveLooseUp(["author", "avatar"]);
            e = e.writeEscaped(s), e.data += '" alt="';
            var o = (r = n.author) !== a ? null != r ? l = r.name : r : (r = i.author) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["author", "name"]);
            return e = e.writeEscaped(o), e.data += '">\n            </a>\n        ', e
        }

        function i(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += '\n            <a href="javascript:void(0)" class="avatar circle x35">\n                <img class="lazyload"  data-src="/images/missing_face.png" alt="', u.line = 9;
            var s = (r = n.author) !== a ? null != r ? l = r.name : r : (r = i.author) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["author", "name"]);
            return e = e.writeEscaped(s), e.data += '">\n            </a>\n        ', e
        }

        function n(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += '\n                <a href="javascript:void(0)" class="name">', u.line = 16;
            var s = (r = n.author) !== a ? null != r ? l = r.name : r : (r = i.author) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["author", "name"]);
            return e = e.writeEscaped(s), e.data += "</a>\n            ", e
        }

        function s(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += "";
            var s = (r = n.comment_count) !== a ? r : (r = i.comment_count) !== a ? r : t.resolveLooseUp(["comment_count"]);
            return e = e.writeEscaped(s), e.data += "", e
        }

        function o(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += "";
            var s = (r = n.praise_count) !== a ? r : (r = i.praise_count) !== a ? r : t.resolveLooseUp(["praise_count"]);
            return e = e.writeEscaped(s), e.data += "", e
        }

        var r, l, c = this, d = c.root, h = c.buffer, p = c.scope, u = (c.runtime, c.name, c.pos), f = p.data, m = p.affix, g = d.nativeCommands, v = d.utils, w = (v.callFn, v.callDataFn, v.callCommand, g.range, g.void, g.foreach, g.forin, g.each, g.with, g.if);
        g.set, g.include, g.includeOnce, g.parse, g.extend, g.block, g.macro, g.debugger;
        h.data += '<div class="com-comment clearfix" data-commentId="';
        var b = (r = m.id) !== t ? r : (r = f.id) !== t ? r : p.resolveLooseUp(["id"]);
        h = h.writeEscaped(b), h.data += '">\n    <div class="comment-left">\n        ', u.line = 3, u.line = 3;
        var y = (r = m.author) !== t ? null != r ? l = r.avatar : r : (r = f.author) !== t ? null != r ? l = r.avatar : r : p.resolveLooseUp(["author", "avatar"]);
        h = w.call(c, p, {
            params: [y],
            fn: e,
            inverse: i
        }, h), h.data += '\n    </div>\n    <div class="comment-right">\n        <div class="name-date">\n            ', u.line = 15, u.line = 15;
        var x = (r = m.author) !== t ? null != r ? l = r.name : r : (r = f.author) !== t ? null != r ? l = r.name : r : p.resolveLooseUp(["author", "name"]);
        h = w.call(c, p, {
            params: [x],
            fn: n
        }, h), h.data += '\n            <span class="date smart-date" data-originDate="', u.line = 18;
        var S = (r = m.publish_time) !== t ? r : (r = f.publish_time) !== t ? r : p.resolveLooseUp(["publish_time"]);
        h = h.writeEscaped(S), h.data += '"></span>\n            <div class="ribbon">\n                <span class="iconfont icon-message">', u.line = 20;
        var C = (r = m.comment_count) !== t ? r : (r = f.comment_count) !== t ? r : p.resolveLooseUp(["comment_count"]), T = C;
        T = C > 0, h = w.call(c, p, {
            params: [T],
            fn: s
        }, h), h.data += '</span>\n                <span class="iconfont icon-praise">', u.line = 21;
        var k = (r = m.praise_count) !== t ? r : (r = f.praise_count) !== t ? r : p.resolveLooseUp(["praise_count"]), P = k;
        P = k > 0, h = w.call(c, p, {
            params: [P],
            fn: o
        }, h), h.data += '</span>\n            </div>\n        </div>\n        <p class="comment-text">', u.line = 24;
        var M = (r = m.content) !== t ? r : (r = f.content) !== t ? r : p.resolveLooseUp(["content"]);
        h = h.writeEscaped(M), h.data += '</p>\n        \n        <div class="replies">\n            ', u.line = 27;
        var L, E = (r = m.child_comments) !== t ? r : (r = f.child_comments) !== t ? r : p.resolveLooseUp(["child_comments"]);
        h = d.includeModule(p, {params: [a(59)], hash: {replies: E}}, h, c);
        var z = L;
        return h = h.writeEscaped(z), h.data += "\n        </div>\n    </div>\n</div>\n", h
    }
}, function (t, e, a) {
    t.exports = function (t) {
        function e(t, e, i) {
            var o = t.data;
            t.affix;
            e.data += "\n    ", l.line = 2;
            var r, c = o;
            e = s.includeModule(t, {params: [a(60), c]}, e, n);
            var d = r;
            return e = e.writeEscaped(d), e.data += "\n", e
        }

        var i, n = this, s = n.root, o = n.buffer, r = n.scope, l = (n.runtime, n.name, n.pos), c = r.data, d = r.affix, h = s.nativeCommands, p = s.utils, u = (p.callFn, p.callDataFn, p.callCommand, h.range, h.void, h.foreach, h.forin, h.each);
        h.with, h.if, h.set, h.include, h.includeOnce, h.parse, h.extend, h.block, h.macro, h.debugger;
        o.data += "", l.line = 1;
        var f = (i = d.replies) !== t ? i : (i = c.replies) !== t ? i : r.resolveLooseUp(["replies"]);
        return o = u.call(n, r, {params: [f], fn: e}, o)
    }
}, function (t, e) {
    t.exports = function (t) {
        function e(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += '\n            <a href="javascript:void(0)" class="avatar circle x35">\n                <img class="lazyload"  data-src="', u.line = 5;
            var s = (r = n.author) !== a ? null != r ? l = r.avatar : r : (r = i.author) !== a ? null != r ? l = r.avatar : r : t.resolveLooseUp(["author", "avatar"]);
            e = e.writeEscaped(s), e.data += '" alt="';
            var o = (r = n.author) !== a ? null != r ? l = r.name : r : (r = i.author) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["author", "name"]);
            return e = e.writeEscaped(o), e.data += '">\n            </a>\n        ', e
        }

        function a(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += '\n            <a href="javascript:void(0)" class="avatar circle x35">\n                <img class="lazyload"  data-src="/images/missing_face.png" alt="', u.line = 9;
            var s = (r = n.author) !== a ? null != r ? l = r.name : r : (r = i.author) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["author", "name"]);
            return e = e.writeEscaped(s), e.data += '">\n            </a>\n        ', e
        }

        function i(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += '\n                <a href="javascript:void(0)" class="name">', u.line = 16;
            var s = (r = n.author) !== a ? null != r ? l = r.name : r : (r = i.author) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["author", "name"]);
            return e = e.writeEscaped(s), e.data += "</a>\n            ", e
        }

        function n(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += "";
            var s = (r = n.praise_count) !== a ? r : (r = i.praise_count) !== a ? r : t.resolveLooseUp(["praise_count"]);
            return e = e.writeEscaped(s), e.data += "", e
        }

        function s(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += "@";
            var s = (r = n.parent_user) !== a ? null != r ? l = r.name : r : (r = i.parent_user) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["parent_user", "name"]);
            return e = e.writeEscaped(s), e.data += " ", e
        }

        function o(t, e, a) {
            var i = t.data, n = t.affix;
            e.data += "\n                ", u.line = 26;
            var o = (r = n.parent_user) !== a ? null != r ? l = r.name : r : (r = i.parent_user) !== a ? null != r ? l = r.name : r : t.resolveLooseUp(["parent_user", "name"]);
            e = w.call(c, t, {params: [o], fn: s}, e), e.data += "";
            var d = (r = n.content) !== a ? r : (r = i.content) !== a ? r : t.resolveLooseUp(["content"]);
            return e = e.writeEscaped(d), e.data += "\n            ", e
        }

        var r, l, c = this, d = c.root, h = c.buffer, p = c.scope, u = (c.runtime, c.name, c.pos), f = p.data, m = p.affix, g = d.nativeCommands, v = d.utils, w = (v.callFn, v.callDataFn, v.callCommand, g.range, g.void, g.foreach, g.forin, g.each, g.with, g.if);
        g.set, g.include, g.includeOnce, g.parse, g.extend, g.block, g.macro, g.debugger;
        h.data += '<div class="com-reply clearfix" data-commentId="';
        var b = (r = m.id) !== t ? r : (r = f.id) !== t ? r : p.resolveLooseUp(["id"]);
        h = h.writeEscaped(b), h.data += '">\n    <div class="reply-left">\n        ', u.line = 3, u.line = 3;
        var y = (r = m.author) !== t ? null != r ? l = r.avatar : r : (r = f.author) !== t ? null != r ? l = r.avatar : r : p.resolveLooseUp(["author", "avatar"]);
        h = w.call(c, p, {
            params: [y],
            fn: e,
            inverse: a
        }, h), h.data += '\n    </div>\n    <div class="reply-right">\n        <div class="name-date">\n            ', u.line = 15, u.line = 15;
        var x = (r = m.author) !== t ? null != r ? l = r.name : r : (r = f.author) !== t ? null != r ? l = r.name : r : p.resolveLooseUp(["author", "name"]);
        h = w.call(c, p, {
            params: [x],
            fn: i
        }, h), h.data += '\n            <span class="date smart-date" data-originDate="', u.line = 18;
        var S = (r = m.publish_time) !== t ? r : (r = f.publish_time) !== t ? r : p.resolveLooseUp(["publish_time"]);
        h = h.writeEscaped(S), h.data += '"></span>\n            <div class="ribbon">\n                <span class="iconfont icon-message"></span>\n                <span class="iconfont icon-praise">', u.line = 21;
        var C = (r = m.praise_count) !== t ? r : (r = f.praise_count) !== t ? r : p.resolveLooseUp(["praise_count"]), T = C;
        T = C > 0, h = w.call(c, p, {
            params: [T],
            fn: n
        }, h), h.data += '</span>\n            </div>\n        </div>\n        <p class="reply-text">\n            ',
            u.line = 25, u.line = 25;
        var k = (r = m.parent_user) !== t ? r : (r = f.parent_user) !== t ? r : p.resolveLooseUp(["parent_user"]);
        return h = w.call(c, p, {params: [k], fn: o}, h), h.data += "\n        </p>\n    </div>\n</div>", h
    }
}, 8]);