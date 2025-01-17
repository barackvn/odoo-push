! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 89)
}([function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(44),
        a = n(35),
        u = n(3),
        c = n(13),
        l = n(17),
        d = o(n(7)),
        f = function() {
            function e() {}
            return e.getBuildEnv = function() {
                return s.BuildEnvironmentKind.Production
            }, e.getIntegration = function(t) {
                return i(this, void 0, void 0, function() {
                    var n, i, o;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (d.default.safari) return [2, l.IntegrationKind.Secure];
                                if (n = window === window.top, i = "https:" === window.location.protocol, void 0 === t) {
                                    if ("undefined" == typeof OneSignal) throw new c.InvalidArgumentError("usingProxyOrigin", c.InvalidArgumentReason.Empty);
                                    (o = OneSignal.context) && (t = !!o.appConfig.subdomain)
                                }
                                return n ? i ? [2, t ? l.IntegrationKind.SecureProxy : l.IntegrationKind.Secure] : [2, l.IntegrationKind.InsecureProxy] : [3, 1];
                            case 1:
                                return i ? [4, e.isFrameContextInsecure()] : [3, 3];
                            case 2:
                                return r.sent() ? [2, l.IntegrationKind.InsecureProxy] : [2, t ? l.IntegrationKind.SecureProxy : l.IntegrationKind.Secure];
                            case 3:
                                return [2, l.IntegrationKind.InsecureProxy];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.isFrameContextInsecure = function() {
                return i(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (window === window.top || !("serviceWorker" in navigator) || void 0 === navigator.serviceWorker.getRegistration) return [2, !1];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, navigator.serviceWorker.getRegistration()];
                            case 2:
                                return e.sent(), [2, !1];
                            case 3:
                                return e.sent(), [2, !0];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.isInsecureOrigin = function() {
                return "http:" === window.location.protocol
            }, e.getWindowEnv = function() {
                return "undefined" == typeof window ? "undefined" != typeof self && void 0 !== self.registration ? u.WindowEnvironmentKind.ServiceWorker : u.WindowEnvironmentKind.Unknown : window === window.top ? -1 !== location.href.indexOf("initOneSignal") || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.endsWith(".os.tc") || -1 !== location.hostname.indexOf(".localhost") && e.getBuildEnv() === s.BuildEnvironmentKind.Development) ? u.WindowEnvironmentKind.OneSignalSubscriptionPopup : u.WindowEnvironmentKind.Host : "/webPushIframe" === location.pathname ? u.WindowEnvironmentKind.OneSignalProxyFrame : "/webPushModal" === location.pathname ? u.WindowEnvironmentKind.OneSignalSubscriptionModal : u.WindowEnvironmentKind.CustomIframe
            }, e.getTestEnv = function() {
                return a.TestEnvironmentKind.None
            }, e.getBuildEnvPrefix = function(t) {
                switch (void 0 === t && (t = e.getBuildEnv()), t) {
                    case s.BuildEnvironmentKind.Development:
                        return "Dev-";
                    case s.BuildEnvironmentKind.Staging:
                        return "Staging-";
                    case s.BuildEnvironmentKind.Production:
                        return "";
                    default:
                        throw new c.InvalidArgumentError("buildEnv", c.InvalidArgumentReason.EnumOutOfRange)
                }
            }, e.getOneSignalApiUrl = function(t) {
                switch (void 0 === t && (t = e.getBuildEnv()), t) {
                    case s.BuildEnvironmentKind.Development:
                        return new URL("https://localhost:3001/api/v1");
                    case s.BuildEnvironmentKind.Staging:
                        return new URL("https://onesignal-staging.pw/api/v1");
                    case s.BuildEnvironmentKind.Production:
                        return new URL("https://onesignal.com/api/v1");
                    default:
                        throw new c.InvalidArgumentError("buildEnv", c.InvalidArgumentReason.EnumOutOfRange)
                }
            }, e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var i = this && this.__awaiter || function(e, t, n, i) {
                return new(n || (n = Promise))(function(r, o) {
                    function s(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        e.done ? r(e.value) : new n(function(t) {
                            t(e.value)
                        }).then(s, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                })
            },
            r = this && this.__generator || function(e, t) {
                var n, i, r, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                                switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, i = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < r[1]) {
                                            s.label = r[1], r = o;
                                            break
                                        }
                                        if (r && s.label < r[2]) {
                                            s.label = r[2], s.ops.push(o);
                                            break
                                        }
                                        r[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e], i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = o(n(7)),
            a = o(n(4)),
            u = o(n(61)),
            c = o(n(0)),
            l = n(3),
            d = o(n(8)),
            f = o(n(2)),
            p = o(n(5));

        function h(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        t.isArray = h;
        var g = null;

        function b() {
            if ("" === s.default.name && "" === s.default.version) var e = s.default._detect(navigator.userAgent);
            else e = s.default;
            return e
        }

        function m() {
            return OneSignal.config && OneSignal.config.userConfig && !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
        }

        function v() {
            if (!OneSignal.config) throw new Error("(" + c.default.getWindowEnv().toString() + ") isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.");
            return !s.default.safari && (!(m() && "localhost" === location.hostname || "127.0.0.1" === location.hostname) && !(c.default.getWindowEnv() !== l.WindowEnvironmentKind.Host && c.default.getWindowEnv() !== l.WindowEnvironmentKind.CustomIframe || !OneSignal.config.subdomain && "http:" !== location.protocol))
        }

        function S(e) {
            return JSON.stringify(e, function(e, t) {
                return "function" == typeof t ? "[Function]" : t
            }, 4)
        }
        t.decodeHtmlEntities = function(e) {
            return a.default.isBrowser() && (g || (g = document.createElement("textarea"))), g ? (g.innerHTML = e, g.value) : e
        }, t.redetectBrowserUserAgent = b, t.isPushNotificationsSupported = function() {
            if (void 0 === window.Promise) return !1;
            var e = b(),
                t = navigator.userAgent || "";
            return !(!e.safari && void 0 === navigator.serviceWorker || e.ios || e.ipod || e.iphone || e.ipad || e.msie || !(e.msedge && Number(e.version) >= 17.17063) && (t.indexOf("FBAN") > -1 || t.indexOf("FBAV") > -1 || navigator.appVersion.match(/ wv/) || e.firefox && Number(e.version) < 48 && (e.mobile || e.tablet) || !(e.firefox && Number(e.version) >= 44) && !(e.safari && Number(e.version) >= 7.1) && !(e.samsungBrowser && Number(e.version) >= 4) && !((e.chrome || e.chromium) && Number(e.version) >= 42) && !(e.yandexbrowser && Number(e.version) >= 15.12) && !(e.opera && (e.mobile || e.tablet) && Number(e.version) >= 37 || e.opera && Number(e.version) >= 42) && !e.vivaldi))
        }, t.isChromeLikeBrowser = function() {
            return s.default.chrome || s.default.chromium || s.default.opera || s.default.yandexbrowser
        }, t.removeDomElement = function(e) {
            var t = document.querySelectorAll(e);
            if (t.length > 0)
                for (var n = 0; n < t.length; n++) t[n].parentNode.removeChild(t[n])
        }, t.isLocalhostAllowedAsSecureOrigin = m, t.awaitOneSignalInitAndSupported = function() {
            return new Promise(function(e) {
                OneSignal.initialized ? e() : OneSignal.once(OneSignal.EVENTS.SDK_INITIALIZED, e)
            })
        }, t.isUsingSubscriptionWorkaround = v, t.triggerNotificationPermissionChanged = function(e) {
            return void 0 === e && (e = !1), i(this, void 0, void 0, function() {
                var t, n, i;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, OneSignal.getNotificationPermission()];
                        case 1:
                            return n = r.sent(), [4, d.default.get("Options", "notificationPermission")];
                        case 2:
                            return i = r.sent(), t = n, n !== i || e ? [4, d.default.put("Options", {
                                key: "notificationPermission",
                                value: n
                            })] : [3, 4];
                        case 3:
                            r.sent(), p.default.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
                                to: t
                            }), r.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }, t.stringify = S, t.executeCallback = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            if (e) return e.apply(null, t)
        }, t.logMethodCall = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return f.default.debug("Called %c" + e + "(" + t.map(S).join(", ") + ")", y("code"), ".")
        }, t.isValidEmail = function(e) {
            return !!e && !!e.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
        }, t.addDomElement = function(e, t, n) {
            if ("string" == typeof e) document.querySelector(e).insertAdjacentHTML(t, n);
            else {
                if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
                e.insertAdjacentHTML(t, n)
            }
        }, t.clearDomElementChildren = function(e) {
            if ("string" == typeof e)
                for (var t = document.querySelector(e); t.firstChild;) t.removeChild(t.firstChild);
            else {
                if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }
        }, t.addCssClass = function(e, t) {
            if ("string" == typeof e) document.querySelector(e).classList.add(t);
            else {
                if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
                e.classList.add(t)
            }
        }, t.removeCssClass = function(e, t) {
            if ("string" == typeof e) document.querySelector(e).classList.remove(t);
            else {
                if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
                e.classList.remove(t)
            }
        }, t.hasCssClass = function(e, t) {
            if ("string" == typeof e) return document.querySelector(e).classList.contains(t);
            if ("object" == typeof e) return e.classList.contains(t);
            throw new Error(e + " must be a CSS selector string or DOM Element object.")
        };

        function y(e) {
            return "code" == e ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;' : "bold" == e ? "font-weight: 600;color: rgb(51, 51, 51);" : "alert" == e ? "font-weight: 600;color: red;" : "event" == e ? "color: green;" : "postmessage" == e ? "color: orange;" : "serviceworkermessage" == e ? "color: purple;" : ""
        }

        function w() {
            return Promise.resolve()
        }

        function O() {
            return f.default.warn("OneSignal: Unsubscribing from push."), c.default.getWindowEnv() !== l.WindowEnvironmentKind.ServiceWorker ? self.registration.pushManager.getSubscription().then(function(e) {
                if (e) return e.unsubscribe();
                throw new Error("Cannot unsubscribe because not subscribed.")
            }) : v() ? new Promise(function(e, t) {
                f.default.debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame."), OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, function(n) {
                    f.default.debug("Unsubscribe from push succesfully remotely executed."), n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t("Failed to remotely unsubscribe from push.")
                })
            }) : navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(function(e) {
                return e.pushManager
            }).then(function(e) {
                return e.getSubscription()
            }).then(function(e) {
                return e ? e.unsubscribe() : Promise.resolve()
            }) : Promise.resolve()
        }

        function _() {
            return f.default.warn("OneSignal: Unregistering service worker."), c.default.getWindowEnv() === l.WindowEnvironmentKind.OneSignalProxyFrame ? Promise.resolve() : navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(function(e) {
                return e.unregister()
            }) : Promise.resolve()
        }

        function E() {
            return window.__oneSignalSdkLoadCount || 0
        }
        t.getConsoleStyle = y, t.delay = function(e) {
            return new Promise(function(t) {
                setTimeout(t, e)
            })
        }, t.nothing = w, t.timeoutPromise = function(e, t) {
            var n = new Promise(function(e, n) {
                setTimeout(function() {
                    n(new u.default)
                }, t)
            });
            return Promise.race([e, n])
        }, t.when = function(e, t, n) {
            return void 0 === t && (t = w()), void 0 === n && (n = w()), e ? t : n
        }, t.contains = function(e, t) {
            return !!e && -1 !== e.indexOf(t)
        }, t.trimUndefined = function(e) {
            for (var t in e) e.hasOwnProperty(t) && void 0 === e[t] && delete e[t];
            return e
        }, t.getRandomUuid = function() {
            var t = "undefined" == typeof window ? e.crypto : window.crypto || window.msCrypto;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t ? function(e) {
                var n = t.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                return ("x" == e ? n : 3 & n | 8).toString(16)
            } : function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        }, t.isValidUuid = function(e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e)
        }, t.getUrlQueryParam = function(e) {
            var t = window.location.href;
            t = t.toLowerCase(), e = e.replace(/[\[\]]/g, "\\$&").toLowerCase();
            var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        }, t.wipeIndexedDb = function() {
            return f.default.warn("OneSignal: Wiping IndexedDB data."), Promise.all([d.default.remove("Ids"), d.default.remove("NotificationOpened"), d.default.remove("Options")])
        }, t.capitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, t.unsubscribeFromPush = O, t.wipeServiceWorker = _, t.wipeServiceWorkerAndUnsubscribe = function() {
            return Promise.all([O(), _()])
        }, t.wait = function(e) {
            return new Promise(function(t) {
                return setTimeout(t, e)
            })
        }, t.substringAfter = function(e, t) {
            return e.substr(e.indexOf(t) + t.length)
        }, t.once = function e(t, n, i, r) {
            if (void 0 === r && (r = !1), n || f.default.error("Cannot call on() with no event: ", n), i || f.default.error("Cannot call on() with no task: ", i), "string" == typeof t) {
                var o = document.querySelectorAll(t);
                if (o.length > 0)
                    for (var s = 0; s < o.length; s++) e(o[s], n, i)
            } else if (h(t))
                for (s = 0; s < t.length; s++) e(t[s], n, i);
            else {
                if ("object" != typeof t) throw new Error(t + " must be a CSS selector string or DOM Element object.");
                var a = function(e) {
                    var n = function() {
                        t.removeEventListener(e.type, a)
                    };
                    r || n(), i(e, n)
                };
                t.addEventListener(n, a)
            }
        }, t.getSdkLoadCount = E, t.awaitSdkEvent = function(e, t) {
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, new Promise(function(n) {
                                OneSignal.once(e, function(e) {
                                    t ? t(e) && n(e) : n(e)
                                })
                            })];
                        case 1:
                            return [2, n.sent()]
                    }
                })
            })
        }, t.incrementSdkLoadCount = function() {
            window.__oneSignalSdkLoadCount = E() + 1
        }, t.prepareEmailForHashing = function(e) {
            return e.replace(/\s/g, "").toLowerCase()
        }, t.encodeHashAsUriComponent = function(e) {
            for (var t = "", n = 0, i = Object.keys(e); n < i.length; n++) {
                var r = i[n],
                    o = e[r];
                t += encodeURIComponent(r) + "=" + encodeURIComponent(o)
            }
            return t
        }
    }).call(this, n(34))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.shouldLog = function() {
            if ("undefined" == typeof window || void 0 === window.localStorage) return !1;
            try {
                var e = window.localStorage.getItem("loglevel");
                return !(!e || "trace" !== e.toLowerCase())
            } catch (e) {
                return !1
            }
        }, e.setLevel = function(t) {
            if ("undefined" != typeof window && void 0 !== window.localStorage) try {
                window.localStorage.setItem("loglevel", t), e.proxyMethodsCreated = void 0, e.createProxyMethods()
            } catch (e) {
                return
            }
        }, e.createProxyMethods = function() {
            if (void 0 === e.proxyMethodsCreated) {
                e.proxyMethodsCreated = !0;
                for (var t = {
                        log: "debug",
                        trace: "trace",
                        info: "info",
                        warn: "warn",
                        error: "error"
                    }, n = 0, i = Object.keys(t); n < i.length; n++) {
                    var r = i[n],
                        o = void 0 !== console[r],
                        s = t[r],
                        a = o && (e.shouldLog() || "error" === s);
                    e[s] = a ? console[r].bind(console) : function() {}
                }
            }
        }, e
    }();
    t.default = i, i.createProxyMethods()
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.WindowEnvironmentKind || (t.WindowEnvironmentKind = {})).ServiceWorker = "ServiceWorker", i.Host = "Host", i.OneSignalSubscriptionPopup = "Popup", i.OneSignalSubscriptionModal = "Modal", i.OneSignalProxyFrame = "ProxyFrame", i.CustomIframe = "CustomFrame", i.Unknown = "Unknown"
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0)),
        o = n(3),
        s = function() {
            function e() {}
            return e.isBrowser = function() {
                return "undefined" != typeof window
            }, e.version = function() {
                return Number(150125)
            }, Object.defineProperty(e, "TRADITIONAL_CHINESE_LANGUAGE_TAG", {
                get: function() {
                    return ["tw", "hant"]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "SIMPLIFIED_CHINESE_LANGUAGE_TAG", {
                get: function() {
                    return ["cn", "hans"]
                },
                enumerable: !0,
                configurable: !0
            }), e.getLanguage = function() {
                var t = navigator.language;
                if (t) {
                    var n = (t = t.toLowerCase()).split("-");
                    if ("zh" == n[0]) {
                        for (var i = 0, r = e.TRADITIONAL_CHINESE_LANGUAGE_TAG; i < r.length; i++) {
                            var o = r[i];
                            if (-1 !== n.indexOf(o)) return "zh-Hant"
                        }
                        for (var s = 0, a = e.SIMPLIFIED_CHINESE_LANGUAGE_TAG; s < a.length; s++) {
                            var u = a[s];
                            if (-1 !== n.indexOf(u)) return "zh-Hans"
                        }
                        return "zh-Hant"
                    }
                    return n[0].substring(0, 2)
                }
                return "en"
            }, e.supportsServiceWorkers = function() {
                switch (r.default.getWindowEnv()) {
                    case o.WindowEnvironmentKind.ServiceWorker:
                        return !0;
                    default:
                        return "undefined" != typeof navigator && "serviceWorker" in navigator
                }
            }, e.getSdkStylesVersionHash = function() {
                return "854ac1bd14f6a39fdc2f138655ab385a"
            }, e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(4)),
        o = i(n(0)),
        s = n(3),
        a = n(1),
        u = i(n(2)),
        c = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"],
        l = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"],
        d = {
            notificationPermissionChange: "onesignal.prompt.native.permissionchanged",
            subscriptionChange: "onesignal.subscription.changed",
            customPromptClick: "onesignal.prompt.custom.clicked"
        },
        f = function() {
            function e() {}
            return e.trigger = function(t, n, i) {
                if (void 0 === i && (i = null), !a.contains(c, t)) {
                    var f = n;
                    if (i) var p = a.capitalize(o.default.getWindowEnv().toString()) + " â¬¸ " + a.capitalize(i);
                    else p = a.capitalize(o.default.getWindowEnv().toString());
                    f || !1 === f ? u.default.debug("(" + p + ") Â» %c" + t + ":", a.getConsoleStyle("event"), f) : u.default.debug("(" + p + ") Â» %c" + t, a.getConsoleStyle("event"))
                }
                if (r.default.isBrowser()) {
                    if (t === OneSignal.EVENTS.SDK_INITIALIZED) {
                        if (OneSignal.initialized) return;
                        OneSignal.initialized = !0
                    }
                    OneSignal.emit(t, n)
                }
                if (d.hasOwnProperty(t)) {
                    var h = d[t];
                    e._triggerLegacy(h, n)
                }!r.default.isBrowser() || o.default.getWindowEnv() !== s.WindowEnvironmentKind.OneSignalSubscriptionPopup && o.default.getWindowEnv() !== s.WindowEnvironmentKind.OneSignalProxyFrame || (opener || parent ? a.contains(l, t) && (o.default.getWindowEnv() === s.WindowEnvironmentKind.OneSignalSubscriptionPopup ? OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                    eventName: t,
                    eventData: n
                }) : OneSignal.proxyFrame.retriggerRemoteEvent(t, n)) : u.default.error("Could not send event '" + t + "' back to host page because no creator (opener or parent) found!"))
            }, e._triggerLegacy = function(e, t) {
                var n = new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: t
                });
                window.dispatchEvent(n)
            }, e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        },
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        function t(t) {
            void 0 === t && (t = "");
            var n = e.call(this, t) || this;
            return Object.defineProperty(n, "message", {
                configurable: !0,
                enumerable: !1,
                value: t,
                writable: !0
            }), Object.defineProperty(n, "name", {
                configurable: !0,
                enumerable: !1,
                value: n.constructor.name,
                writable: !0
            }), Error.hasOwnProperty("captureStackTrace") ? (Error.captureStackTrace(n, n.constructor), n) : (Object.defineProperty(n, "stack", {
                configurable: !0,
                enumerable: !1,
                value: new Error(t).stack,
                writable: !0
            }), n)
        }
        return r(t, e), t
    }(Error);
    t.default = o
}, function(e, t, n) {
    var i;
    i = function() {
        var e = !0;

        function t(t) {
            function n(e) {
                var n = t.match(e);
                return n && n.length > 1 && n[1] || ""
            }
            var i, r, o, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
                a = !/like android/i.test(t) && /android/i.test(t),
                u = /nexus\s*[0-6]\s*/i.test(t),
                c = !u && /nexus\s*[0-9]+/i.test(t),
                l = /CrOS/.test(t),
                d = /silk/i.test(t),
                f = /sailfish/i.test(t),
                p = /tizen/i.test(t),
                h = /(web|hpw)os/i.test(t),
                g = /windows phone/i.test(t),
                b = (/SamsungBrowser/i.test(t), !g && /windows/i.test(t)),
                m = !s && !d && /macintosh/i.test(t),
                v = !a && !f && !p && !h && /linux/i.test(t),
                S = n(/edge\/(\d+(\.\d+)?)/i),
                y = n(/version\/(\d+(\.\d+)?)/i),
                w = /tablet/i.test(t) && !/tablet pc/i.test(t),
                O = !w && /[^-]mobi/i.test(t),
                _ = /xbox/i.test(t);
            /opera/i.test(t) ? i = {
                name: "Opera",
                opera: e,
                version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(t) ? i = {
                name: "Opera",
                opera: e,
                version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
            } : /SamsungBrowser/i.test(t) ? i = {
                name: "Samsung Internet for Android",
                samsungBrowser: e,
                version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /coast/i.test(t) ? i = {
                name: "Opera Coast",
                coast: e,
                version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /yabrowser/i.test(t) ? i = {
                name: "Yandex Browser",
                yandexbrowser: e,
                version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(t) ? i = {
                name: "UC Browser",
                ucbrowser: e,
                version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(t) ? i = {
                name: "Maxthon",
                maxthon: e,
                version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(t) ? i = {
                name: "Epiphany",
                epiphany: e,
                version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(t) ? i = {
                name: "Puffin",
                puffin: e,
                version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(t) ? i = {
                name: "Sleipnir",
                sleipnir: e,
                version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(t) ? i = {
                name: "K-Meleon",
                kMeleon: e,
                version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : g ? (i = {
                name: "Windows Phone",
                windowsphone: e
            }, S ? (i.msedge = e, i.version = S) : (i.msie = e, i.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? i = {
                name: "Internet Explorer",
                msie: e,
                version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : l ? i = {
                name: "Chrome",
                chromeos: e,
                chromeBook: e,
                chrome: e,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /chrome.+? edge/i.test(t) ? i = {
                name: "Microsoft Edge",
                msedge: e,
                version: S
            } : /vivaldi/i.test(t) ? i = {
                name: "Vivaldi",
                vivaldi: e,
                version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
            } : f ? i = {
                name: "Sailfish",
                sailfish: e,
                version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(t) ? i = {
                name: "SeaMonkey",
                seamonkey: e,
                version: n(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(t) ? (i = {
                name: "Firefox",
                firefox: e,
                version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (i.firefoxos = e)) : d ? i = {
                name: "Amazon Silk",
                silk: e,
                version: n(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(t) ? i = {
                name: "PhantomJS",
                phantom: e,
                version: n(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(t) ? i = {
                name: "SlimerJS",
                slimer: e,
                version: n(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? i = {
                name: "BlackBerry",
                blackberry: e,
                version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : h ? (i = {
                name: "WebOS",
                webos: e,
                version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(t) && (i.touchpad = e)) : /bada/i.test(t) ? i = {
                name: "Bada",
                bada: e,
                version: n(/dolfin\/(\d+(\.\d+)?)/i)
            } : p ? i = {
                name: "Tizen",
                tizen: e,
                version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
            } : /qupzilla/i.test(t) ? i = {
                name: "QupZilla",
                qupzilla: e,
                version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
            } : /chromium/i.test(t) ? i = {
                name: "Chromium",
                chromium: e,
                version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
            } : /chrome|crios|crmo/i.test(t) ? i = {
                name: "Chrome",
                chrome: e,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : a ? i = {
                name: "Android",
                version: y
            } : /safari|applewebkit/i.test(t) ? (i = {
                name: "Safari",
                safari: e
            }, y && (i.version = y)) : s ? (i = {
                name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
            }, y && (i.version = y)) : i = /googlebot/i.test(t) ? {
                name: "Googlebot",
                googlebot: e,
                version: n(/googlebot\/(\d+(\.\d+))/i) || y
            } : {
                name: n(/^(.*)\/(.*) /),
                version: (r = /^(.*)\/(.*) /, o = t.match(r), o && o.length > 1 && o[2] || "")
            }, !i.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (i.name = i.name || "Blink", i.blink = e) : (i.name = i.name || "Webkit", i.webkit = e), !i.version && y && (i.version = y)) : !i.opera && /gecko\//i.test(t) && (i.name = i.name || "Gecko", i.gecko = e, i.version = i.version || n(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || i.msedge || !a && !i.silk ? i.windowsphone || i.msedge || !s ? m ? i.mac = e : _ ? i.xbox = e : b ? i.windows = e : v && (i.linux = e) : (i[s] = e, i.ios = e) : i.android = e;
            var E = "";
            i.windows ? E = function(e) {
                switch (e) {
                    case "NT":
                        return "NT";
                    case "XP":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return
                }
            }(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (i.osversion = E);
            var P = !i.windows && E.split(".")[0];
            return w || c || "ipad" == s || a && (3 == P || P >= 4 && !O) || i.silk ? i.tablet = e : (O || "iphone" == s || "ipod" == s || a || u || i.blackberry || i.webos || i.bada) && (i.mobile = e), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = e : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = e : i.x = e, i
        }
        var n = t("undefined" != typeof navigator && navigator.userAgent || "");

        function i(e) {
            return e.split(".").length
        }

        function r(e, t) {
            var n, i = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (n = 0; n < e.length; n++) i.push(t(e[n]));
            return i
        }

        function o(e) {
            for (var t = Math.max(i(e[0]), i(e[1])), n = r(e, function(e) {
                    var n = t - i(e);
                    return r((e += new Array(n + 1).join(".0")).split("."), function(e) {
                        return new Array(20 - e.length).join("0") + e
                    }).reverse()
                }); --t >= 0;) {
                if (n[0][t] > n[1][t]) return 1;
                if (n[0][t] !== n[1][t]) return -1;
                if (0 === t) return 0
            }
        }

        function s(e, i, r) {
            var s = n;
            "string" == typeof i && (r = i, i = void 0), void 0 === i && (i = !1), r && (s = t(r));
            var a = "" + s.version;
            for (var u in e)
                if (e.hasOwnProperty(u) && s[u]) {
                    if ("string" != typeof e[u]) throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(e));
                    return o([a, e[u]]) < 0
                }
            return i
        }
        return n.test = function(e) {
            for (var t = 0; t < e.length; ++t) {
                var i = e[t];
                if ("string" == typeof i && i in n) return !0
            }
            return !1
        }, n.isUnsupportedBrowser = s, n.compareVersions = o, n.check = function(e, t, n) {
            return !s(e, t, n)
        }, n._detect = t, n
    }, void 0 !== e && e.exports ? e.exports = i() : n(62)("bowser", i)
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(20)),
        u = o(n(0)),
        c = n(60),
        l = n(59),
        d = n(25),
        f = n(35),
        p = n(3),
        h = o(n(43)),
        g = n(42),
        b = n(1);
    ! function(e) {
        e[e.SET = 0] = "SET"
    }(s || (s = {}));
    var m = function() {
        function e(e) {
            this.databaseName = e, this.emitter = new a.default, this.database = new h.default(this.databaseName)
        }
        return e.applyDbResultFilter = function(e, t, n) {
            switch (e) {
                case "Options":
                    return n && t ? n.value : n && !t ? n : null;
                case "Ids":
                    return n && t ? n.id : n && !t ? n : null;
                case "NotificationOpened":
                    return n && t ? {
                        data: n.data,
                        timestamp: n.timestamp
                    } : n && !t ? n : null;
                default:
                    return n || null
            }
        }, e.prototype.get = function(t, n) {
            return i(this, void 0, void 0, function() {
                var o = this;
                return r(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, new Promise(function(s) {
                                return i(o, void 0, void 0, function() {
                                    var i, o;
                                    return r(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return u.default.getWindowEnv() !== p.WindowEnvironmentKind.ServiceWorker && b.isUsingSubscriptionWorkaround() && u.default.getTestEnv() === f.TestEnvironmentKind.None ? (OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                                                    table: t,
                                                    key: n
                                                }], function(e) {
                                                    var t = e.data[0];
                                                    s(t)
                                                }), [3, 3]) : [3, 1];
                                            case 1:
                                                return [4, this.database.get(t, n)];
                                            case 2:
                                                i = r.sent(), o = e.applyDbResultFilter(t, n, i), s(o), r.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return [2, s.sent()]
                    }
                })
            })
        }, e.prototype.put = function(t, n) {
            return i(this, void 0, void 0, function() {
                var o = this;
                return r(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, new Promise(function(e, s) {
                                return i(o, void 0, void 0, function() {
                                    return r(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return u.default.getWindowEnv() !== p.WindowEnvironmentKind.ServiceWorker && b.isUsingSubscriptionWorkaround() && u.default.getTestEnv() === f.TestEnvironmentKind.None ? (OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                                                    table: t,
                                                    keypath: n
                                                }], function(i) {
                                                    i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : s("(Database) Attempted remote IndexedDB put(" + t + ", " + n + "), but did not get success response.")
                                                }), [3, 3]) : [3, 1];
                                            case 1:
                                                return [4, this.database.put(t, n)];
                                            case 2:
                                                i.sent(), e(), i.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return s.sent(), this.emitter.emit(e.EVENTS.SET, n), [2]
                    }
                })
            })
        }, e.prototype.remove = function(e, t) {
            return u.default.getWindowEnv() !== p.WindowEnvironmentKind.ServiceWorker && b.isUsingSubscriptionWorkaround() && u.default.getTestEnv() === f.TestEnvironmentKind.None ? new Promise(function(n, i) {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
                    table: e,
                    keypath: t
                }], function(r) {
                    r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? n() : i("(Database) Attempted remote IndexedDB remove(" + e + ", " + t + "), but did not get success response.")
                })
            }) : this.database.remove(e, t)
        }, e.prototype.getAppConfig = function() {
            return i(this, void 0, void 0, function() {
                var e, t, n, i, o;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = {}, [4, this.get("Ids", "appId")];
                        case 1:
                            return t = r.sent(), e.appId = t, n = e, [4, this.get("Options", "subdomain")];
                        case 2:
                            return n.subdomain = r.sent(), i = e, [4, this.get("Options", "vapidPublicKey")];
                        case 3:
                            return i.vapidPublicKey = r.sent(), o = e, [4, this.get("Options", "emailAuthRequired")];
                        case 4:
                            return o.emailAuthRequired = r.sent(), [2, e]
                    }
                })
            })
        }, e.prototype.setAppConfig = function(e) {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e.appId ? [4, this.put("Ids", {
                                type: "appId",
                                id: e.appId
                            })] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return e.subdomain ? [4, this.put("Options", {
                                key: "subdomain",
                                value: e.subdomain
                            })] : [3, 4];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return !0 !== e.httpUseOneSignalCom ? [3, 6] : [4, this.put("Options", {
                                key: "httpUseOneSignalCom",
                                value: !0
                            })];
                        case 5:
                            return t.sent(), [3, 8];
                        case 6:
                            return !1 !== e.httpUseOneSignalCom ? [3, 8] : [4, this.put("Options", {
                                key: "httpUseOneSignalCom",
                                value: !1
                            })];
                        case 7:
                            t.sent(), t.label = 8;
                        case 8:
                            return !0 !== e.emailAuthRequired ? [3, 10] : [4, this.put("Options", {
                                key: "emailAuthRequired",
                                value: !0
                            })];
                        case 9:
                            return t.sent(), [3, 12];
                        case 10:
                            return !1 !== e.emailAuthRequired ? [3, 12] : [4, this.put("Options", {
                                key: "emailAuthRequired",
                                value: !1
                            })];
                        case 11:
                            t.sent(), t.label = 12;
                        case 12:
                            return e.vapidPublicKey ? [4, this.put("Options", {
                                key: "vapidPublicKey",
                                value: e.vapidPublicKey
                            })] : [3, 14];
                        case 13:
                            t.sent(), t.label = 14;
                        case 14:
                            return [2]
                    }
                })
            })
        }, e.prototype.getAppState = function() {
            return i(this, void 0, void 0, function() {
                var e, t, n, i, o;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = new c.AppState, t = e, [4, this.get("Options", "defaultUrl")];
                        case 1:
                            return t.defaultNotificationUrl = r.sent(), n = e, [4, this.get("Options", "defaultTitle")];
                        case 2:
                            return n.defaultNotificationTitle = r.sent(), i = e, [4, this.get("Options", "isPushEnabled")];
                        case 3:
                            return i.lastKnownPushEnabled = r.sent(), o = e, [4, this.get("NotificationOpened")];
                        case 4:
                            return o.clickedNotifications = r.sent(), [2, e]
                    }
                })
            })
        }, e.prototype.setAppState = function(e) {
            return i(this, void 0, void 0, function() {
                var t, n, i, o, s;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e.defaultNotificationUrl ? [4, this.put("Options", {
                                key: "defaultUrl",
                                value: e.defaultNotificationUrl
                            })] : [3, 2];
                        case 1:
                            r.sent(), r.label = 2;
                        case 2:
                            return e.defaultNotificationTitle || "" === e.defaultNotificationTitle ? [4, this.put("Options", {
                                key: "defaultTitle",
                                value: e.defaultNotificationTitle
                            })] : [3, 4];
                        case 3:
                            r.sent(), r.label = 4;
                        case 4:
                            return null == e.lastKnownPushEnabled ? [3, 6] : [4, this.put("Options", {
                                key: "isPushEnabled",
                                value: e.lastKnownPushEnabled
                            })];
                        case 5:
                            r.sent(), r.label = 6;
                        case 6:
                            if (!e.clickedNotifications) return [3, 12];
                            t = Object.keys(e.clickedNotifications), n = 0, i = t, r.label = 7;
                        case 7:
                            return n < i.length ? (o = i[n], (s = e.clickedNotifications[o]) ? [4, this.put("NotificationOpened", {
                                url: o,
                                data: s.data,
                                timestamp: s.timestamp
                            })] : [3, 9]) : [3, 12];
                        case 8:
                            return r.sent(), [3, 11];
                        case 9:
                            return null !== s ? [3, 11] : [4, this.remove("NotificationOpened", o)];
                        case 10:
                            r.sent(), r.label = 11;
                        case 11:
                            return n++, [3, 7];
                        case 12:
                            return [2]
                    }
                })
            })
        }, e.prototype.getServiceWorkerState = function() {
            return i(this, void 0, void 0, function() {
                var e, t, n, i;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = new l.ServiceWorkerState, t = e, [4, this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION")];
                        case 1:
                            return t.workerVersion = r.sent(), n = e, [4, this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION")];
                        case 2:
                            return n.updaterWorkerVersion = r.sent(), i = e, [4, this.get("Ids", "backupNotification")];
                        case 3:
                            return i.backupNotification = r.sent(), [2, e]
                    }
                })
            })
        }, e.prototype.setServiceWorkerState = function(e) {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e.workerVersion ? [4, this.put("Ids", {
                                type: "WORKER1_ONE_SIGNAL_SW_VERSION",
                                id: e.workerVersion
                            })] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return e.updaterWorkerVersion ? [4, this.put("Ids", {
                                type: "WORKER2_ONE_SIGNAL_SW_VERSION",
                                id: e.updaterWorkerVersion
                            })] : [3, 4];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return e.backupNotification ? [4, this.put("Ids", {
                                type: "backupNotification",
                                id: e.backupNotification
                            })] : [3, 6];
                        case 5:
                            t.sent(), t.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.prototype.getSubscription = function() {
            return i(this, void 0, void 0, function() {
                var e, t, n, i, o, s, a;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = new d.Subscription, t = e, [4, this.get("Ids", "userId")];
                        case 1:
                            return t.deviceId = r.sent(), n = e, [4, this.get("Ids", "registrationId")];
                        case 2:
                            return n.subscriptionToken = r.sent(), [4, this.get("Options", "optedOut")];
                        case 3:
                            return i = r.sent(), [4, this.get("Options", "subscription")];
                        case 4:
                            return o = r.sent(), [4, this.get("Options", "subscriptionCreatedAt")];
                        case 5:
                            return s = r.sent(), [4, this.get("Options", "subscriptionExpirationTime")];
                        case 6:
                            return a = r.sent(), e.optedOut = null != i ? i : null != o && !o, e.createdAt = s, e.expirationTime = a, [2, e]
                    }
                })
            })
        }, e.prototype.setSubscription = function(e) {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e.deviceId && e.deviceId ? [4, this.put("Ids", {
                                type: "userId",
                                id: e.deviceId
                            })] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return void 0 === e.subscriptionToken ? [3, 4] : [4, this.put("Ids", {
                                type: "registrationId",
                                id: e.subscriptionToken
                            })];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return null == e.optedOut ? [3, 6] : [4, this.put("Options", {
                                key: "optedOut",
                                value: e.optedOut
                            })];
                        case 5:
                            t.sent(), t.label = 6;
                        case 6:
                            return null == e.createdAt ? [3, 8] : [4, this.put("Options", {
                                key: "subscriptionCreatedAt",
                                value: e.createdAt
                            })];
                        case 7:
                            t.sent(), t.label = 8;
                        case 8:
                            return null == e.expirationTime ? [3, 10] : [4, this.put("Options", {
                                key: "subscriptionExpirationTime",
                                value: e.expirationTime
                            })];
                        case 9:
                            return t.sent(), [3, 12];
                        case 10:
                            return [4, this.remove("Options", "subscriptionExpirationTime")];
                        case 11:
                            t.sent(), t.label = 12;
                        case 12:
                            return [2]
                    }
                })
            })
        }, e.prototype.getEmailProfile = function() {
            return i(this, void 0, void 0, function() {
                var e;
                return r(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.get("Ids", "emailProfile")];
                        case 1:
                            return (e = t.sent()) ? [2, g.EmailProfile.deserialize(e)] : [2, new g.EmailProfile]
                    }
                })
            })
        }, e.prototype.setEmailProfile = function(e) {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e ? [4, this.put("Ids", {
                                type: "emailProfile",
                                id: e.serialize()
                            })] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.rebuild = function() {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    return e.ensureSingletonInstance(), [2, Promise.all([e.databaseInstance.remove("Ids"), e.databaseInstance.remove("NotificationOpened"), e.databaseInstance.remove("Options")])]
                })
            })
        }, e.ensureSingletonInstance = function() {
            e.databaseInstanceName || (e.databaseInstanceName = "ONE_SIGNAL_SDK_DB"), e.databaseInstance || (e.databaseInstance = new e(e.databaseInstanceName))
        }, e.on = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.emitter.on.apply(e.databaseInstance.emitter, t)]
                })
            })
        }, e.setEmailProfile = function(t) {
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.setEmailProfile.call(e.databaseInstance, t)]
                })
            })
        }, e.getEmailProfile = function() {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.getEmailProfile.call(e.databaseInstance)]
                })
            })
        }, e.setSubscription = function(t) {
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.setSubscription.call(e.databaseInstance, t)]
                })
            })
        }, e.getSubscription = function() {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.getSubscription.call(e.databaseInstance)]
                })
            })
        }, e.setServiceWorkerState = function(t) {
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.setServiceWorkerState.call(e.databaseInstance, t)]
                })
            })
        }, e.getServiceWorkerState = function() {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.getServiceWorkerState.call(e.databaseInstance)]
                })
            })
        }, e.setAppState = function(t) {
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.setAppState.call(e.databaseInstance, t)]
                })
            })
        }, e.getAppState = function() {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.getAppState.call(e.databaseInstance)]
                })
            })
        }, e.setAppConfig = function(t) {
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.setAppConfig.call(e.databaseInstance, t)]
                })
            })
        }, e.getAppConfig = function() {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.getAppConfig.call(e.databaseInstance)]
                })
            })
        }, e.remove = function(t, n) {
            return i(this, void 0, void 0, function() {
                return r(this, function(i) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.remove.call(e.databaseInstance, t, n)]
                })
            })
        }, e.put = function(t, n) {
            return i(this, void 0, void 0, function() {
                return r(this, function(i) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.put.call(e.databaseInstance, t, n)]
                })
            })
        }, e.get = function(t, n) {
            return i(this, void 0, void 0, function() {
                return r(this, function(i) {
                    return e.ensureSingletonInstance(), [2, e.databaseInstance.get.call(e.databaseInstance, t, n)]
                })
            })
        }, e
    }();
    t.default = m, m.EVENTS = s
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e) {
        function t() {
            return e.call(this, "This code is not implemented yet.") || this
        }
        return r(t, e), t
    }(o(n(6)).default);
    t.default = s
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(57)),
        u = s(n(4)),
        c = s(n(0)),
        l = n(1),
        d = n(56),
        f = n(3),
        p = n(14),
        h = s(n(2)),
        g = n(33),
        b = function() {
            function e() {}
            return e.get = function(t, n, i) {
                return e.call("GET", t, n, i)
            }, e.post = function(t, n, i) {
                return e.call("POST", t, n, i)
            }, e.put = function(t, n, i) {
                return e.call("PUT", t, n, i)
            }, e.delete = function(t, n, i) {
                return e.call("DELETE", t, n, i)
            }, e.call = function(t, n, i, r) {
                var o = new Headers;
                if (o.append("SDK-Version", "onesignal/web/" + u.default.version()), o.append("Content-Type", "application/json;charset=UTF-8"), r)
                    for (var s = 0, a = Object.keys(r); s < a.length; s++) {
                        var l = a[s];
                        o.append(l, r[l])
                    }
                var d, f = {
                    method: t || "NO_METHOD_SPECIFIED",
                    headers: o,
                    cache: "no-cache"
                };
                return i && (f.body = JSON.stringify(i)), fetch(c.default.getOneSignalApiUrl().toString() + "/" + n, f).then(function(e) {
                    return d = e.status, e.json()
                }).then(function(t) {
                    return d >= 200 && d < 300 ? t : "no-user-id-error" !== e.identifyError(t) ? Promise.reject(t) : void 0
                })
            }, e.identifyError = function(e) {
                if (!e || !e.errors) return "no-error";
                var t = e.errors;
                return l.contains(t, "No user with this id found") || l.contains(t, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error"
            }, e.getUserIdFromSubscriptionIdentifier = function(t, n, i) {
                return e.post("players", {
                    app_id: t,
                    device_type: n,
                    identifier: i,
                    notification_types: p.SubscriptionStateKind.TemporaryWebRecord
                }).then(function(e) {
                    return e && e.id ? e.id : null
                }).catch(function(e) {
                    return h.default.debug("Error getting user ID from subscription identifier:", e), null
                })
            }, e.getPlayer = function(t, n) {
                return e.get("players/" + n + "?app_id=" + t)
            }, e.updatePlayer = function(t, n, r) {
                return e.put("players/" + n, i({
                    app_id: t
                }, r))
            }, e.sendNotification = function(t, n, i, r, o, s, a, u) {
                var c = {
                    app_id: t,
                    contents: r,
                    include_player_ids: n,
                    isAnyWeb: !0,
                    data: a,
                    web_buttons: u
                };
                return i && (c.headings = i), o && (c.url = o), s && (c.chrome_web_icon = s, c.firefox_icon = s), l.trimUndefined(c), e.post("notifications", c)
            }, e.downloadServerAppConfig = function(t) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, new Promise(function(n, i) {
                                    c.default.getWindowEnv() !== f.WindowEnvironmentKind.ServiceWorker ? a.default(c.default.getOneSignalApiUrl().toString() + "/sync/" + t + "/web", null, function(e, t) {
                                        e ? i(e) : t.success ? n(t) : i(t)
                                    }) : n(e.get("sync/" + t + "/web", null))
                                })];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                throw n.sent();
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.createUser = function(t) {
                return r(this, void 0, void 0, function() {
                    var n;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, e.post("players", t.serialize())];
                            case 1:
                                return (n = i.sent()) && n.success ? [2, n.id] : [2, null]
                        }
                    })
                })
            }, e.createEmailRecord = function(t, n, i) {
                return r(this, void 0, void 0, function() {
                    var r, s;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return (r = new g.EmailDeviceRecord(n.emailAddress, n.emailAuthHash)).appId = t.appId, r.pushDeviceRecordId = i, [4, e.post("players", r.serialize())];
                            case 1:
                                return (s = o.sent()) && s.success ? [2, s.id] : [2, null]
                        }
                    })
                })
            }, e.updateEmailRecord = function(t, n, i) {
                return r(this, void 0, void 0, function() {
                    var r, s;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return (r = new g.EmailDeviceRecord(n.emailAddress, n.emailAuthHash)).appId = t.appId, r.pushDeviceRecordId = i, [4, e.put("players/" + n.emailId, r.serialize())];
                            case 1:
                                return (s = o.sent()) && s.success ? [2, s.id] : [2, null]
                        }
                    })
                })
            }, e.logoutEmail = function(t, n, i) {
                return r(this, void 0, void 0, function() {
                    var r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, e.post("players/" + i + "/email_logout", {
                                    app_id: t.appId,
                                    parent_player_id: n.emailId,
                                    email_auth_hash: n.emailAuthHash ? n.emailAuthHash : void 0
                                })];
                            case 1:
                                return (r = o.sent()) && r.success ? [2, !0] : [2, !1]
                        }
                    })
                })
            }, e.updateUserSession = function(t, n) {
                return r(this, void 0, void 0, function() {
                    var i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, e.post("players/" + t + "/on_session", n.serialize())];
                            case 1:
                                return (i = o.sent()).id ? [2, i.id] : [2, t];
                            case 2:
                                throw (r = o.sent()) && Array.isArray(r.errors) && r.errors.length > 0 && l.contains(r.errors[0], "app_id not found") ? new d.OneSignalApiError(d.OneSignalApiErrorKind.MissingAppId) : r;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.default = b
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6));
    (s = t.PushPermissionNotGrantedErrorReason || (t.PushPermissionNotGrantedErrorReason = {}))[s.Blocked = 0] = "Blocked", s[s.Dismissed = 1] = "Dismissed", s[s.Default = 2] = "Default";
    var PushPermissionNotGrantedError = function(e) {
        function PushPermissionNotGrantedError(n) {
            var i = this;
            switch (n) {
                case t.PushPermissionNotGrantedErrorReason.Dismissed:
                    i = e.call(this, "The user dismissed the permission prompt.") || this;
                    break;
                case t.PushPermissionNotGrantedErrorReason.Blocked:
                    i = e.call(this, "Notification permissions are blocked.") || this;
                    break;
                case t.PushPermissionNotGrantedErrorReason.Default:
                    i = e.call(this, "Notification permissions have not been granted yet.") || this
            }
            return i.reason = n, i
        }
        return r(PushPermissionNotGrantedError, e), PushPermissionNotGrantedError
    }(a.default);
    t.default = PushPermissionNotGrantedError
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6)),
        u = n(41);
    (s = t.InvalidStateReason || (t.InvalidStateReason = {}))[s.MissingAppId = 0] = "MissingAppId", s[s.RedundantPermissionMessage = 1] = "RedundantPermissionMessage", s[s.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted", s[s.UnsupportedEnvironment = 3] = "UnsupportedEnvironment", s[s.MissingDomElement = 4] = "MissingDomElement", s[s.ServiceWorkerNotActivated = 5] = "ServiceWorkerNotActivated", s[s.NoProxyFrame = 6] = "NoProxyFrame";
    var InvalidStateError = function(e) {
        function InvalidStateError(n, i) {
            var r = this;
            switch (n) {
                case t.InvalidStateReason.MissingAppId:
                    r = e.call(this, "Missing required app ID.") || this;
                    break;
                case t.InvalidStateReason.RedundantPermissionMessage:
                    var o = "";
                    i.permissionPromptType && (o = "(" + u.PermissionPromptType[i.permissionPromptType] + ")"), r = e.call(this, "Another permission message " + o + " is being displayed.") || this;
                    break;
                case t.InvalidStateReason.PushPermissionAlreadyGranted:
                    r = e.call(this, "Push permission has already been granted.") || this;
                    break;
                case t.InvalidStateReason.UnsupportedEnvironment:
                    r = e.call(this, "The current environment does not support this operation.") || this;
                    break;
                case t.InvalidStateReason.ServiceWorkerNotActivated:
                    r = e.call(this, "The service worker must be activated first.") || this;
                    break;
                case t.InvalidStateReason.NoProxyFrame:
                    r = e.call(this, "No proxy frame.") || this
            }
            return r.description = t.InvalidStateReason[n], r.reason = n, r
        }
        return r(InvalidStateError, e), InvalidStateError
    }(a.default);
    t.InvalidStateError = InvalidStateError
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6));
    (s = t.InvalidArgumentReason || (t.InvalidArgumentReason = {}))[s.Empty = 0] = "Empty", s[s.Malformed = 1] = "Malformed", s[s.EnumOutOfRange = 2] = "EnumOutOfRange";
    var InvalidArgumentError = function(e) {
        function InvalidArgumentError(n, i) {
            var r = this;
            switch (i) {
                case t.InvalidArgumentReason.Empty:
                    r = e.call(this, "Supply a non-empty value to '" + n + "'.") || this;
                    break;
                case t.InvalidArgumentReason.Malformed:
                    r = e.call(this, "The value for '" + n + "' was malformed.") || this;
                    break;
                case t.InvalidArgumentReason.EnumOutOfRange:
                    r = e.call(this, "The value for '" + n + "' was out of range of the expected input enum.") || this
            }
            return r.argument = n, r.reason = t.InvalidArgumentReason[i], r
        }
        return r(InvalidArgumentError, e), InvalidArgumentError
    }(a.default);
    t.InvalidArgumentError = InvalidArgumentError
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.SubscriptionStateKind || (t.SubscriptionStateKind = {}))[i.Subscribed = 1] = "Subscribed", i[i.MutedByApi = -2] = "MutedByApi", i[i.NotSubscribed = -10] = "NotSubscribed", i[i.TemporaryWebRecord = -20] = "TemporaryWebRecord", i[i.PermissionRevoked = -21] = "PermissionRevoked", i[i.PushSubscriptionRevoked = -22] = "PushSubscriptionRevoked"
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = n(13),
        u = o(n(0)),
        c = n(18),
        l = n(3),
        d = o(n(4)),
        f = o(n(2));
    (s = t.WorkerMessengerCommand || (t.WorkerMessengerCommand = {})).WorkerVersion = "GetWorkerVersion", s.Subscribe = "Subscribe", s.SubscribeNew = "SubscribeNew", s.AmpSubscriptionState = "amp-web-push-subscription-state", s.AmpSubscribe = "amp-web-push-subscribe", s.AmpUnsubscribe = "amp-web-push-unsubscribe", s.NotificationDisplayed = "notification.displayed", s.NotificationClicked = "notification.clicked", s.NotificationDismissed = "notification.dismissed", s.RedirectPage = "command.redirect";
    var p = function() {
        function e() {
            this.replies = {}
        }
        return e.prototype.addListener = function(e, t, n) {
            var i = {
                callback: t,
                onceListenerOnly: n
            };
            this.findListenersForMessage(e).length > 0 ? this.replies[e.toString()].push(i) : this.replies[e.toString()] = [i]
        }, e.prototype.findListenersForMessage = function(e) {
            return this.replies[e.toString()] || []
        }, e.prototype.deleteListenerRecords = function(e) {
            this.replies[e.toString()] = null
        }, e.prototype.deleteAllListenerRecords = function() {
            this.replies = {}
        }, e.prototype.deleteListenerRecord = function(e, t) {
            for (var n = this.replies[e.toString()], i = n.length - 1; i >= 0; i--) {
                n[i] === t && n.splice(i, 1)
            }
        }, e
    }();
    t.WorkerMessengerReplyBuffer = p;
    var h = function() {
        function e(e) {
            this.context = e, this.replies = new p, this.debug = !0
        }
        return e.prototype.broadcast = function(e, t) {
            return i(this, void 0, void 0, function() {
                var n, i, o, s;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return u.default.getWindowEnv() === l.WindowEnvironmentKind.ServiceWorker ? [3, 1] : [2];
                        case 1:
                            return [4, self.clients.matchAll({
                                type: "window",
                                includeUncontrolled: !0
                            })];
                        case 2:
                            for (n = r.sent(), i = 0, o = n; i < o.length; i++) s = o[i], f.default.debug("[Worker Messenger] [SW -> Page] Broadcasting '" + e.toString() + "' to window client " + s.url + "."), s.postMessage({
                                command: e,
                                payload: t
                            });
                            r.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, e.prototype.unicast = function(e, t, n) {
            return i(this, void 0, void 0, function() {
                return r(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (u.default.getWindowEnv() !== l.WindowEnvironmentKind.ServiceWorker) return [3, 1];
                            if (!n) throw new a.InvalidArgumentError("windowClient", a.InvalidArgumentReason.Empty);
                            return f.default.debug("[Worker Messenger] [SW -> Page] Unicasting '" + e.toString() + "' to window client " + n.url + "."), n.postMessage({
                                command: e,
                                payload: t
                            }), [3, 4];
                        case 1:
                            return [4, this.isWorkerControllingPage()];
                        case 2:
                            return i.sent() || f.default.debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), [4, this.waitUntilWorkerControlsPage()];
                        case 3:
                            i.sent(), f.default.debug("[Worker Messenger] [Page -> SW] Unicasting '" + e.toString() + "' to service worker."), navigator.serviceWorker.controller.postMessage({
                                command: e,
                                payload: t
                            }), i.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.listen = function(e) {
            d.default.supportsServiceWorkers() && (u.default.getWindowEnv() === l.WindowEnvironmentKind.ServiceWorker ? (self.addEventListener("message", this.onWorkerMessageReceivedFromPage.bind(this)), f.default.debug("[Worker Messenger] Service worker is now listening for messages.")) : this.listenForPage(e))
        }, e.prototype.listenForPage = function(e) {
            return i(this, void 0, void 0, function() {
                return r(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e ? [3, 3] : [4, this.isWorkerControllingPage()];
                        case 1:
                            return t.sent() || f.default.debug("(" + location.origin + ") [Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), [4, this.waitUntilWorkerControlsPage()];
                        case 2:
                            t.sent(), f.default.debug("(" + location.origin + ") [Worker Messenger] The page is now controlled by the service worker."), t.label = 3;
                        case 3:
                            return navigator.serviceWorker.addEventListener("message", this.onPageMessageReceivedFromServiceWorker.bind(this)), f.default.debug("(" + location.origin + ") [Worker Messenger] Page is now listening for messages."), [2]
                    }
                })
            })
        }, e.prototype.onWorkerMessageReceivedFromPage = function(e) {
            var t = e.data;
            if (t && t.command) {
                var n = this.replies.findListenersForMessage(t.command),
                    i = [],
                    r = [];
                f.default.debug("[Worker Messenger] Service worker received message:", e.data);
                for (var o = 0, s = n; o < s.length; o++) {
                    (u = s[o]).onceListenerOnly && i.push(u), r.push(u)
                }
                for (var a = i.length - 1; a >= 0; a--) {
                    var u = i[a];
                    this.replies.deleteListenerRecord(t.command, u)
                }
                for (var c = 0, l = r; c < l.length; c++) {
                    (u = l[c]).callback.apply(null, [t.payload])
                }
            }
        }, e.prototype.onPageMessageReceivedFromServiceWorker = function(e) {
            var t = e.data;
            if (t && t.command) {
                var n = this.replies.findListenersForMessage(t.command),
                    i = [],
                    r = [];
                f.default.debug("[Worker Messenger] Page received message:", e.data);
                for (var o = 0, s = n; o < s.length; o++) {
                    (u = s[o]).onceListenerOnly && i.push(u), r.push(u)
                }
                for (var a = i.length - 1; a >= 0; a--) {
                    var u = i[a];
                    this.replies.deleteListenerRecord(t.command, u)
                }
                for (var c = 0, l = r; c < l.length; c++) {
                    (u = l[c]).callback.apply(null, [t.payload])
                }
            }
        }, e.prototype.on = function(e, t) {
            this.replies.addListener(e, t, !1)
        }, e.prototype.once = function(e, t) {
            this.replies.addListener(e, t, !0)
        }, e.prototype.off = function(e) {
            e ? this.replies.deleteListenerRecords(e) : this.replies.deleteAllListenerRecords()
        }, e.prototype.isWorkerControllingPage = function() {
            return i(this, void 0, void 0, function() {
                var e;
                return r(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return u.default.getWindowEnv() !== l.WindowEnvironmentKind.ServiceWorker ? [3, 1] : [2, !!self.registration.active];
                        case 1:
                            return [4, this.context.serviceWorkerManager.getActiveState()];
                        case 2:
                            return [2, (e = t.sent()) === c.ServiceWorkerActiveState.WorkerA || e === c.ServiceWorkerActiveState.WorkerB]
                    }
                })
            })
        }, e.prototype.waitUntilWorkerControlsPage = function() {
            return i(this, void 0, void 0, function() {
                var e = this;
                return r(this, function(t) {
                    return [2, new Promise(function(t) {
                        return i(e, void 0, void 0, function() {
                            var e = this;
                            return r(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.isWorkerControllingPage()];
                                    case 1:
                                        return n.sent() ? t() : u.default.getWindowEnv() === l.WindowEnvironmentKind.ServiceWorker ? self.addEventListener("activate", function(n) {
                                            return i(e, void 0, void 0, function() {
                                                return r(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this.isWorkerControllingPage()];
                                                        case 1:
                                                            return e.sent() && t(), [2]
                                                    }
                                                })
                                            })
                                        }) : navigator.serviceWorker.addEventListener("controllerchange", function(n) {
                                            return i(e, void 0, void 0, function() {
                                                return r(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this.isWorkerControllingPage()];
                                                        case 1:
                                                            return e.sent() && t(), [2]
                                                    }
                                                })
                                            })
                                        }), [2]
                                }
                            })
                        })
                    })]
                })
            })
        }, e
    }();
    t.WorkerMessenger = h
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.NotificationPermission = i,
        function(e) {
            e.Default = "default", e.Granted = "granted", e.Denied = "denied"
        }(i || (t.NotificationPermission = i = {}))
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.IntegrationKind || (t.IntegrationKind = {})).Secure = "Secure", i.SecureProxy = "Secure Proxy", i.InsecureProxy = "Insecure Proxy"
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(4)),
        u = n(12),
        c = n(15),
        l = o(n(31)),
        d = o(n(0)),
        f = n(25),
        p = n(1),
        h = o(n(8)),
        g = n(17),
        b = n(3),
        m = o(n(9)),
        v = o(n(2)),
        S = o(n(5));
    (s = t.ServiceWorkerActiveState || (t.ServiceWorkerActiveState = {})).WorkerA = "Worker A (Main)", s.WorkerB = "Worker B (Updater)", s.ThirdParty = "3rd Party", s.Installing = "Installing", s.None = "None", s.Bypassed = "Bypassed", s.Indeterminate = "Indeterminate";
    var y = function() {
        function e(e, t) {
            this.context = e, this.config = t
        }
        return e.prototype.getActiveState = function() {
            return i(this, void 0, void 0, function() {
                var e, n, i, o, s, a;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, d.default.getIntegration()];
                        case 1:
                            return (e = r.sent()) !== g.IntegrationKind.InsecureProxy ? [3, 2] : [2, t.ServiceWorkerActiveState.Indeterminate];
                        case 2:
                            if (e !== g.IntegrationKind.SecureProxy) return [3, 8];
                            switch (n = d.default.getWindowEnv(), n) {
                                case b.WindowEnvironmentKind.Host:
                                case b.WindowEnvironmentKind.CustomIframe:
                                    return [3, 3];
                                case b.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                    return [3, 6];
                                case b.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                    return [3, 7]
                            }
                            return [3, 8];
                        case 3:
                            return (i = OneSignal.proxyFrameHost) ? [3, 4] : [2, t.ServiceWorkerActiveState.Indeterminate];
                        case 4:
                            return [4, i.runCommand(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE)];
                        case 5:
                            return [2, r.sent()];
                        case 6:
                            return [3, 8];
                        case 7:
                            throw new m.default;
                        case 8:
                            o = null, r.label = 9;
                        case 9:
                            return r.trys.push([9, 11, , 12]), [4, navigator.serviceWorker.getRegistration()];
                        case 10:
                            return o = r.sent(), [3, 12];
                        case 11:
                            return r.sent(), [3, 12];
                        case 12:
                            return o ? o.installing ? [2, t.ServiceWorkerActiveState.Installing] : o.active ? (s = new URL(o.active.scriptURL).pathname, a = new l.default(s).getFileName() == this.config.workerAPath.getFileName() ? t.ServiceWorkerActiveState.WorkerA : new l.default(s).getFileName() == this.config.workerBPath.getFileName() ? t.ServiceWorkerActiveState.WorkerB : t.ServiceWorkerActiveState.ThirdParty, navigator.serviceWorker.controller || a !== t.ServiceWorkerActiveState.WorkerA && a !== t.ServiceWorkerActiveState.WorkerB ? [2, a] : [2, t.ServiceWorkerActiveState.Bypassed]) : [2, t.ServiceWorkerActiveState.ThirdParty] : [2, t.ServiceWorkerActiveState.None]
                    }
                })
            })
        }, e.prototype.getWorkerVersion = function() {
            return i(this, void 0, void 0, function() {
                var e = this;
                return r(this, function(t) {
                    return [2, new Promise(function(t) {
                        return i(e, void 0, void 0, function() {
                            var e, n;
                            return r(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return p.isUsingSubscriptionWorkaround() ? (e = OneSignal.proxyFrameHost) ? [3, 1] : (t(NaN), [3, 3]) : [3, 4];
                                    case 1:
                                        return [4, e.runCommand(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION)];
                                    case 2:
                                        n = i.sent(), t(n), i.label = 3;
                                    case 3:
                                        return [3, 5];
                                    case 4:
                                        this.context.workerMessenger.once(c.WorkerMessengerCommand.WorkerVersion, function(e) {
                                            t(e)
                                        }), this.context.workerMessenger.unicast(c.WorkerMessengerCommand.WorkerVersion), i.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    })]
                })
            })
        }, e.prototype.shouldInstallWorker = function() {
            return i(this, void 0, void 0, function() {
                var e;
                return r(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.getActiveState()];
                        case 1:
                            return (e = n.sent()) !== t.ServiceWorkerActiveState.WorkerA && e !== t.ServiceWorkerActiveState.WorkerB ? [2, !0] : [2, !1]
                    }
                })
            })
        }, e.prototype.subscribeForPushNotifications = function() {
            return i(this, void 0, void 0, function() {
                var e, n = this;
                return r(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.getActiveState()];
                        case 1:
                            if ((e = i.sent()) !== t.ServiceWorkerActiveState.WorkerA && e !== t.ServiceWorkerActiveState.WorkerB) throw new u.InvalidStateError(u.InvalidStateReason.ServiceWorkerNotActivated);
                            return [2, new Promise(function(e) {
                                n.context.workerMessenger.once(c.WorkerMessengerCommand.Subscribe, function(t) {
                                    e(f.Subscription.deserialize(t))
                                }), n.context.workerMessenger.unicast(c.WorkerMessengerCommand.Subscribe, n.context.appConfig)
                            })]
                    }
                })
            })
        }, e.prototype.updateWorker = function() {
            return i(this, void 0, void 0, function() {
                var e, n;
                return r(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return a.default.supportsServiceWorkers() ? [4, this.getActiveState()] : [2];
                        case 1:
                            e = i.sent(), v.default.info("[Service Worker Update] Checking service worker version..."), i.label = 2;
                        case 2:
                            return i.trys.push([2, 4, , 5]), [4, p.timeoutPromise(this.getWorkerVersion(), 2e3)];
                        case 3:
                            return n = i.sent(), [3, 5];
                        case 4:
                            return i.sent(), v.default.info("[Service Worker Update] Worker did not reply to version query; assuming older version."), n = 1, [3, 5];
                        case 5:
                            return e !== t.ServiceWorkerActiveState.WorkerA && e !== t.ServiceWorkerActiveState.WorkerB ? (v.default.debug("[Service Worker Update] Not updating service worker, current active worker state is " + e + "."), [2]) : (n !== a.default.version() ? (v.default.info("[Service Worker Update] Updating service worker from v" + n + " --\x3e v" + a.default.version() + "."), this.installWorker()) : v.default.info("[Service Worker Update] Service worker version is current at v" + n + " (no update required)."), [2])
                    }
                })
            })
        }, e.prototype.installWorker = function() {
            return i(this, void 0, void 0, function() {
                var e, n = this;
                return r(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return a.default.supportsServiceWorkers() ? [4, this.getActiveState()] : [2];
                        case 1:
                            return e = o.sent(), [4, this.installAlternatingWorker()];
                        case 2:
                            return o.sent(), [4, new Promise(function(o) {
                                return i(n, void 0, void 0, function() {
                                    var n, s = this;
                                    return r(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, this.getActiveState()];
                                            case 1:
                                                return n = a.sent(), e !== n && n !== t.ServiceWorkerActiveState.Installing ? o() : navigator.serviceWorker.addEventListener("controllerchange", function(n) {
                                                    return i(s, void 0, void 0, function() {
                                                        var n;
                                                        return r(this, function(i) {
                                                            switch (i.label) {
                                                                case 0:
                                                                    return [4, this.getActiveState()];
                                                                case 1:
                                                                    return (n = i.sent()) !== e && n !== t.ServiceWorkerActiveState.Installing && o(), [2]
                                                            }
                                                        })
                                                    })
                                                }), [2]
                                        }
                                    })
                                })
                            })];
                        case 3:
                            return o.sent(), [4, this.getActiveState()];
                        case 4:
                            return o.sent() !== t.ServiceWorkerActiveState.WorkerB ? [3, 6] : [4, this.installAlternatingWorker()];
                        case 5:
                            o.sent(), o.label = 6;
                        case 6:
                            return this.establishServiceWorkerChannel(), [2]
                    }
                })
            })
        }, e.prototype.establishServiceWorkerChannel = function() {
            var e = this,
                t = this.context.workerMessenger;
            t.off(), t.on(c.WorkerMessengerCommand.NotificationDisplayed, function(e) {
                v.default.debug(location.origin, "Received notification display event from service worker."), S.default.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e)
            }), t.on(c.WorkerMessengerCommand.NotificationClicked, function(t) {
                return i(e, void 0, void 0, function() {
                    var e, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return d.default.getWindowEnv() !== b.WindowEnvironmentKind.OneSignalProxyFrame ? [3, 2] : [4, new Promise(function(e) {
                                    var t = OneSignal.proxyFrame;
                                    t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, function(t) {
                                        var n = t.data;
                                        e(n)
                                    })
                                })];
                            case 1:
                                return e = i.sent(), [3, 3];
                            case 2:
                                e = OneSignal.getListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED).length, i.label = 3;
                            case 3:
                                return 0 !== e ? [3, 5] : (v.default.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval."), n = t.url, t.url || (n = location.href), [4, h.default.put("NotificationOpened", {
                                    url: n,
                                    data: t,
                                    timestamp: Date.now()
                                })]);
                            case 4:
                                return i.sent(), [3, 6];
                            case 5:
                                S.default.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, t), i.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }), t.on(c.WorkerMessengerCommand.RedirectPage, function(e) {
                v.default.debug(d.default.getWindowEnv().toString() + " Picked up command.redirect to " + e + ", forwarding to host page.");
                var t = OneSignal.proxyFrame;
                t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, e)
            }), t.on(c.WorkerMessengerCommand.NotificationDismissed, function(e) {
                S.default.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e)
            })
        }, e.prototype.installAlternatingWorker = function() {
            return i(this, void 0, void 0, function() {
                var e, n, i, o, s;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.getActiveState()];
                        case 1:
                            return (e = r.sent()) !== t.ServiceWorkerActiveState.ThirdParty ? [3, 4] : [4, navigator.serviceWorker.getRegistration()];
                        case 2:
                            return [4, r.sent().unregister()];
                        case 3:
                            r.sent(), r.label = 4;
                        case 4:
                            if (e === t.ServiceWorkerActiveState.WorkerA) n = this.config.workerBPath.getPathWithoutFileName(), i = this.config.workerBPath.getFileName();
                            else if (e === t.ServiceWorkerActiveState.WorkerB || e === t.ServiceWorkerActiveState.ThirdParty || e === t.ServiceWorkerActiveState.None) n = this.config.workerAPath.getPathWithoutFileName(), i = this.config.workerAPath.getFileName();
                            else if (e === t.ServiceWorkerActiveState.Bypassed) throw new u.InvalidStateError(u.InvalidStateReason.UnsupportedEnvironment);
                            return s = {
                                appId: this.context.appConfig.appId
                            }, o = n + "/" + i + "?" + p.encodeHashAsUriComponent(s), v.default.info("[Service Worker Installation] Installing service worker " + o + "."), [4, navigator.serviceWorker.register(o, this.config.registrationOptions)];
                        case 5:
                            return r.sent(), v.default.debug("[Service Worker Installation] Service worker installed."), [2]
                    }
                })
            })
        }, e
    }();
    t.ServiceWorkerManager = y
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6));
    (s = t.SdkInitErrorKind || (t.SdkInitErrorKind = {}))[s.InvalidAppId = 0] = "InvalidAppId", s[s.AppNotConfiguredForWebPush = 1] = "AppNotConfiguredForWebPush", s[s.MissingSubdomain = 2] = "MissingSubdomain", s[s.WrongSiteUrl = 3] = "WrongSiteUrl", s[s.MultipleInitialization = 4] = "MultipleInitialization", s[s.MissingSafariWebId = 5] = "MissingSafariWebId", s[s.Unknown = 6] = "Unknown";
    var SdkInitError = function(e) {
        function SdkInitError(n, i) {
            var r = this;
            switch (n) {
                case t.SdkInitErrorKind.InvalidAppId:
                    r = e.call(this, "OneSignal: This app ID does match any existing app. Double check your app ID.") || this;
                    break;
                case t.SdkInitErrorKind.AppNotConfiguredForWebPush:
                    r = e.call(this, "OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ).") || this;
                    break;
                case t.SdkInitErrorKind.MissingSubdomain:
                    r = e.call(this, "OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB).") || this;
                    break;
                case t.SdkInitErrorKind.WrongSiteUrl:
                    r = i && i.siteUrl ? e.call(this, "OneSignal: This web push config can only be used on " + new URL(i.siteUrl).origin + ". Your current origin is " + location.origin + ".") || this : e.call(this, "OneSignal: This web push config can not be used on the current site.") || this;
                    break;
                case t.SdkInitErrorKind.MultipleInitialization:
                    r = e.call(this, "OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.") || this;
                    break;
                case t.SdkInitErrorKind.MissingSafariWebId:
                    r = e.call(this, "OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.") || this;
                    break;
                case t.SdkInitErrorKind.Unknown:
                    r = e.call(this, "OneSignal: An unknown initialization error occurred.") || this
            }
            return r.reason = t.SdkInitErrorKind[n], r
        }
        return r(SdkInitError, e), SdkInitError
    }(a.default);
    t.SdkInitError = SdkInitError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            this._events = {}
        }
        return e.prototype.on = function(e, t) {
            return this._events[e] = this._events[e] || [], this._events[e].push(t), this
        }, e.prototype.once = function(e, t) {
            var n = this;

            function i() {
                n.off(e, i), t.apply(this, arguments)
            }
            return i.listener = t, this.on(e, i), this
        }, e.prototype.off = function(e, t) {
            var n = this._events[e];
            if (void 0 !== n) {
                for (var i = 0; i < n.length; i += 1)
                    if (n[i] === t || n[i].listener === t) {
                        n.splice(i, 1);
                        break
                    }
                0 === n.length && this.removeAllListeners(e)
            }
            return this
        }, e.prototype.removeAllListeners = function(e) {
            try {
                e ? delete this._events[e] : this._events = []
            } catch (e) {}
            return this
        }, e.prototype.listeners = function(e) {
            try {
                return this._events[e]
            } catch (e) {
                return
            }
        }, e.prototype.emit = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = [].slice.call(arguments, 0),
                i = n.shift(),
                r = this._events[i];
            if (void 0 !== r)
                for (var o = (r = r.slice(0)).length, s = 0; s < o; s += 1) r[s].apply(this, n);
            return this
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(7)),
        a = o(n(9)),
        u = n(14),
        c = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.subscription = t, n
            }
            return r(t, e), t.prototype.serialize = function() {
                var t = e.prototype.serialize.call(this);
                return this.subscription && (t.identifier = s.default.safari ? this.subscription.safariDeviceToken : this.subscription.w3cEndpoint.toString(), t.web_auth = this.subscription.w3cAuth, t.web_p256 = this.subscription.w3cP256dh), t
            }, t.createFromPushSubscription = function(e, n, i) {
                var r = new t(n);
                return r.appId = e, r.subscriptionState = n ? u.SubscriptionStateKind.Subscribed : u.SubscriptionStateKind.NotSubscribed, i && (r.subscriptionState = i), r
            }, t.prototype.deserialize = function(e) {
                throw new a.default
            }, t
        }(n(24).DeviceRecord);
    t.PushDeviceRecord = c
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(4)),
        u = s(n(0)),
        c = n(1),
        l = s(n(20)),
        d = s(n(2)),
        f = function() {
            function e(e, t, n) {
                if (this.windowReference = e, this.sendToOrigin = t, this.receiveFromOrigin = n, !window || !window.postMessage) throw new Error("Must pass in a valid window reference supporting postMessage():" + e);
                if (!t || !n) throw new Error("Invalid origin. Must be set.");
                this.emitter = new l.default, this.channel = new MessageChannel, this.messagePort = null, this.isListening = !1, this.isConnected = !1, this.replies = {}
            }
            return Object.defineProperty(e, "HANDSHAKE_MESSAGE", {
                get: function() {
                    return "onesignal.postmam.handshake"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "CONNECTED_MESSAGE", {
                get: function() {
                    return "onesignal.postmam.connected"
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.listen = function() {
                d.default.debug("(Postmam) Called listen()."), this.isListening ? d.default.debug("(Postmam) Already listening for Postmam connections.") : a.default.isBrowser() && (this.isListening = !0, d.default.debug("(Postmam) Listening for Postmam connections.", this), window.addEventListener("message", this.onWindowMessagePostmanConnectReceived.bind(this)))
            }, e.prototype.startPostMessageReceive = function() {
                window.addEventListener("message", this.onWindowPostMessageReceived.bind(this))
            }, e.prototype.stopPostMessageReceive = function() {
                window.removeEventListener("message", this.onWindowPostMessageReceived)
            }, e.prototype.destroy = function() {
                this.stopPostMessageReceive(), this.emitter.removeAllListeners()
            }, e.prototype.onWindowPostMessageReceived = function(t) {
                if (this.isSafeOrigin(t.origin)) {
                    var n = t.data,
                        r = n.id,
                        o = n.command,
                        s = n.data,
                        a = n.source;
                    if (o === e.CONNECTED_MESSAGE) return this.emitter.emit("connect"), void(this.isConnected = !0);
                    var u = {
                            id: r,
                            command: o,
                            data: s,
                            source: a
                        },
                        c = i({
                            reply: this.reply.bind(this, u)
                        }, u);
                    if (this.replies.hasOwnProperty(r)) d.default.info("(Postmam) This message is a reply."), !1 === this.replies[r].bind(window)(c) && delete this.replies[r];
                    else this.emitter.emit(o, c)
                }
            }, e.prototype.onWindowMessagePostmanConnectReceived = function(t) {
                (d.default.debug("(Postmam) (" + u.default.getWindowEnv().toString() + ") Window postmessage for Postman connect received:", t), this.isSafeOrigin(t.origin)) && (t.data.handshake === e.HANDSHAKE_MESSAGE ? (d.default.info("(Postmam) Got our expected Postmam handshake message (and connecting...):", t.data), window.removeEventListener("message", this.onWindowMessagePostmanConnectReceived), this.messagePort = t.ports[0], this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), d.default.info("(Postmam) Removed previous message event listener for handshakes, replaced with main message listener."), this.messagePort.start(), this.isConnected = !0, d.default.info("(Postmam) (" + u.default.getWindowEnv().toString() + ") Connected."), this.message(e.CONNECTED_MESSAGE), this.emitter.emit("connect")) : d.default.info("(Postmam) Got a postmam message, but not our expected handshake:", t.data))
            }, e.prototype.connect = function() {
                d.default.info("(Postmam) (" + u.default.getWindowEnv().toString() + ") Establishing a connection to " + this.sendToOrigin + "."), this.messagePort = this.channel.port1, this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), this.messagePort.start(), this.windowReference.postMessage({
                    handshake: e.HANDSHAKE_MESSAGE
                }, this.sendToOrigin, [this.channel.port2])
            }, e.prototype.onMessageReceived = function(t) {
                if (t.data) {
                    var n = t.data,
                        r = n.id,
                        o = n.command,
                        s = n.data,
                        a = n.source;
                    if (o === e.CONNECTED_MESSAGE) return this.emitter.emit("connect"), void(this.isConnected = !0);
                    var c = {
                            id: r,
                            command: o,
                            data: s,
                            source: a
                        },
                        l = i({
                            reply: this.reply.bind(this, c)
                        }, c);
                    if (this.replies.hasOwnProperty(r)) !1 === this.replies[r].bind(window)(l) && delete this.replies[r];
                    else this.emitter.emit(o, l)
                } else d.default.debug("(" + u.default.getWindowEnv().toString() + ") Received an empty Postmam message:", t)
            }, e.prototype.reply = function(e, t, n) {
                var i = {
                    id: e.id,
                    command: e.command,
                    data: t,
                    source: u.default.getWindowEnv().toString(),
                    isReply: !0
                };
                "function" == typeof n && (this.replies[i.id] = n), this.messagePort.postMessage(i)
            }, e.prototype.postMessage = function(e, t, n) {
                if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
                if ("function" != typeof t) {
                    var i = {
                        id: c.getRandomUuid(),
                        command: e,
                        data: t,
                        source: u.default.getWindowEnv().toString()
                    };
                    "function" == typeof n && (this.replies[i.id] = n), this.windowReference.postMessage(i, "*")
                } else d.default.debug("You passed a function to data, did you mean to pass null?")
            }, e.prototype.message = function(e, t, n) {
                if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
                if ("function" != typeof t) {
                    var i = {
                        id: c.getRandomUuid(),
                        command: e,
                        data: t,
                        source: u.default.getWindowEnv().toString()
                    };
                    "function" == typeof n && (this.replies[i.id] = n), this.messagePort.postMessage(i)
                } else d.default.debug("You passed a function to data, did you mean to pass null?")
            }, e.prototype.generateSafeOrigins = function(e) {
                var t = [];
                try {
                    var n = new URL(e),
                        i = n.host;
                    0 === n.host.indexOf("www.") && (i = n.host.replace("www.", "")), "https:" === n.protocol ? (t.push("https://" + i), t.push("https://www." + i)) : "http:" === n.protocol && (t.push("http://" + i), t.push("http://www." + i), t.push("https://" + i), t.push("https://www." + i))
                } catch (e) {}
                return t
            }, e.prototype.isSafeOrigin = function(e) {
                if (OneSignal.config) t = OneSignal.config.subdomain;
                else var t = "x";
                var n = this.generateSafeOrigins(this.receiveFromOrigin);
                return "https://onesignal.com" === e || e === "https://" + (t || "") + ".onesignal.com" || e === "https://" + (t || "") + ".os.tc" || e === "https://" + (t || "") + ".os.tc:3001" || e === u.default.getOneSignalApiUrl().origin || "*" === this.receiveFromOrigin || c.contains(n, e)
            }, e.prototype.on = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return [2, this.emitter.on.apply(this.emitter, e)]
                    })
                })
            }, e.prototype.off = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return [2, this.emitter.off.apply(this.emitter, e)]
                    })
                })
            }, e.prototype.once = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return [2, this.emitter.once.apply(this.emitter, e)]
                    })
                })
            }, e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(12),
        a = o(n(5)),
        u = o(n(0)),
        c = o(n(8)),
        l = n(1),
        d = o(n(54)),
        f = o(n(2)),
        p = function() {
            function e() {}
            return e.fixWordpressManifestIfMisplaced = function() {
                var e = document.querySelectorAll("link[rel=manifest]");
                if (e && !(e.length <= 1))
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                            i = n.href;
                        l.contains(i, "gcm_sender_id") && (document.querySelector("head").insertBefore(n, document.querySelector("head").children[0]), f.default.info("OneSignal: Moved the WordPress push <manifest> to the first element in <head>."))
                    }
            }, e.getNotificationTypeFromOptIn = function(e) {
                return 1 == e || null == e ? 1 : -2
            }, e.wasHttpsNativePromptDismissed = function() {
                return "dismissed" === d.default.getItem("onesignal-notification-prompt")
            }, e.markHttpPopoverShown = function() {
                sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true")
            }, e.isHttpPromptAlreadyShown = function() {
                return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN")
            }, e.checkAndTriggerNotificationPermissionChanged = function() {
                return i(this, void 0, void 0, function() {
                    var e, t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, c.default.get("Options", "notificationPermission")];
                            case 1:
                                return e = n.sent(), [4, OneSignal.getNotificationPermission()];
                            case 2:
                                return t = n.sent(), e === t ? [3, 5] : [4, l.triggerNotificationPermissionChanged()];
                            case 3:
                                return n.sent(), [4, c.default.put("Options", {
                                    key: "notificationPermission",
                                    value: t
                                })];
                            case 4:
                                n.sent(), n.label = 5;
                            case 5:
                                return [2]
                        }
                    })
                })
            }, e.getNotificationIcons = function() {
                return i(this, void 0, void 0, function() {
                    var t, n, i;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, e.getAppId()];
                            case 1:
                                if (!(t = r.sent())) throw new s.InvalidStateError(s.InvalidStateReason.MissingAppId);
                                return n = u.default.getOneSignalApiUrl().toString() + "/apps/" + t + "/icon", [4, fetch(n)];
                            case 2:
                                return [4, r.sent().json()];
                            case 3:
                                if ((i = r.sent()).errors) throw f.default.error("API call %c" + n, l.getConsoleStyle("code"), "failed with:", i.errors), new Error("Failed to get notification icons.");
                                return [2, i]
                        }
                    })
                })
            }, e.getSlidedownPermissionMessageOptions = function() {
                var e = OneSignal.config.userConfig.promptOptions;
                return e ? e && !e.slidedown ? e : {
                    actionMessage: e.slidedown.actionMessage,
                    acceptButtonText: e.slidedown.acceptButtonText,
                    cancelButtonText: e.slidedown.cancelButtonText
                } : null
            }, e.getFullscreenPermissionMessageOptions = function() {
                var e = OneSignal.config.userConfig.promptOptions;
                return e ? e && !e.fullscreen ? e : {
                    autoAcceptTitle: e.fullscreen.autoAcceptTitle,
                    actionMessage: e.fullscreen.actionMessage,
                    exampleNotificationTitleDesktop: e.fullscreen.title,
                    exampleNotificationTitleMobile: e.fullscreen.title,
                    exampleNotificationMessageDesktop: e.fullscreen.message,
                    exampleNotificationMessageMobile: e.fullscreen.message,
                    exampleNotificationCaption: e.fullscreen.caption,
                    acceptButtonText: e.fullscreen.acceptButton,
                    cancelButtonText: e.fullscreen.cancelButton
                } : null
            }, e.getPromptOptionsQueryString = function() {
                var t = "";
                if (e.getFullscreenPermissionMessageOptions())
                    for (var n = e.getPromptOptionsPostHash(), i = 0, r = Object.keys(n); i < r.length; i++) {
                        var o = r[i];
                        t += "&" + o + "=" + n[o]
                    }
                return t
            }, e.getPromptOptionsPostHash = function() {
                var t = e.getFullscreenPermissionMessageOptions();
                if (t) {
                    for (var n = {
                            exampleNotificationTitleDesktop: "exampleNotificationTitle",
                            exampleNotificationMessageDesktop: "exampleNotificationMessage",
                            exampleNotificationTitleMobile: "exampleNotificationTitle",
                            exampleNotificationMessageMobile: "exampleNotificationMessage"
                        }, i = 0, r = Object.keys(n); i < r.length; i++) {
                        var o = r[i],
                            s = n[o];
                        t[o] && (t[s] = t[o])
                    }
                    for (var a = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText", "timeout"], u = {}, c = 0; c < a.length; c++) {
                        var l = a[c],
                            d = t[l],
                            f = encodeURIComponent(d);
                        (d || !1 === d || "" === d) && (u[l] = f)
                    }
                }
                return u
            }, e.triggerCustomPromptClicked = function(e) {
                a.default.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {
                    result: e
                })
            }, e.getAppId = function() {
                return i(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return OneSignal.config.appId ? [2, Promise.resolve(OneSignal.config.appId)] : [3, 1];
                            case 1:
                                return [4, c.default.get("Ids", "appId")];
                            case 2:
                                return [2, e.sent()]
                        }
                    })
                })
            }, e
        }();
    t.default = p
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(7)),
        o = i(n(4)),
        s = i(n(9)),
        a = n(32),
        u = n(55),
        c = n(1),
        l = function() {
            function e() {
                this.language = o.default.getLanguage(), this.timezone = -60 * (new Date).getTimezoneOffset(), this.browserName = r.default.name, this.browserVersion = NaN !== parseInt(String(r.default.version)) ? parseInt(String(r.default.version)) : -1, this.operatingSystem = this.getBrowserOperatingSystem(), this.operatingSystemVersion = String(r.default.osversion), this.devicePlatform = this.getDevicePlatform(), this.deviceModel = navigator.platform, this.sdkVersion = o.default.version().toString(), this.deliveryPlatform = this.getDeliveryPlatform()
            }
            return e.prototype.getDevicePlatform = function() {
                var e = r.default.mobile,
                    t = r.default.tablet;
                return e ? u.DevicePlatformKind.Mobile : t ? u.DevicePlatformKind.Tablet : u.DevicePlatformKind.Desktop
            }, e.prototype.isSafari = function() {
                return r.default.safari && void 0 !== window.safari && void 0 !== window.safari.pushNotification
            }, e.prototype.getBrowserOperatingSystem = function() {
                return r.default.mac ? "Mac OS X" : r.default.windows ? "Microsoft Windows" : r.default.windowsphone ? "Microsoft Windows Phone" : r.default.linux ? "Linux" : r.default.chromeos ? "Google Chrome OS" : r.default.android ? "Google Android" : r.default.ios ? "Apple iOS" : r.default.blackberry ? "Blackberry" : r.default.firefoxos ? "Mozilla Firefox OS" : r.default.webos ? "WebOS" : r.default.tizen ? "Tizen" : r.default.sailfish ? "Sailfish OS" : "Unknown"
            }, e.prototype.getDeliveryPlatform = function() {
                var e = c.redetectBrowserUserAgent();
                return this.isSafari() ? a.DeliveryPlatformKind.Safari : e.firefox ? a.DeliveryPlatformKind.Firefox : e.msedge ? a.DeliveryPlatformKind.Edge : a.DeliveryPlatformKind.ChromeLike
            }, e.prototype.serialize = function() {
                var e = {
                    device_type: this.deliveryPlatform,
                    language: this.language,
                    timezone: this.timezone,
                    device_os: this.browserVersion,
                    sdk: this.sdkVersion,
                    notification_types: this.subscriptionState,
                    delivery_platform: this.deliveryPlatform,
                    browser_name: this.browserName,
                    browser_version: this.browserVersion,
                    operating_system: this.operatingSystem,
                    operating_system_version: this.operatingSystemVersion,
                    device_platform: this.devicePlatform,
                    device_model: this.deviceModel
                };
                return this.appId && (e.app_id = this.appId), e
            }, e.prototype.deserialize = function(e) {
                throw new s.default
            }, e
        }();
    t.DeviceRecord = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.serialize = function() {
            return {
                deviceId: this.deviceId,
                subscriptionToken: this.subscriptionToken,
                optedOut: this.optedOut,
                createdAt: this.createdAt,
                expirationTime: this.expirationTime
            }
        }, e.deserialize = function(t) {
            var n = new e;
            return n.deviceId = t.deviceId, n.subscriptionToken = t.subscriptionToken, n.optedOut = t.optedOut, n.createdAt = t.createdAt, n.expirationTime = t.expirationTime, n
        }, e
    }();
    t.Subscription = i
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, u, c = n(46),
        l = s(n(10)),
        d = n(19),
        f = n(1),
        p = s(n(0)),
        h = n(3);
    ! function(e) {
        e[e.Boolean = 0] = "Boolean", e[e.Text = 1] = "Text", e[e.Number = 2] = "Number"
    }(a || (a = {})), (u = t.IntegrationConfigurationKind || (t.IntegrationConfigurationKind = {}))[u.Dashboard = 0] = "Dashboard", u[u.JavaScript = 1] = "JavaScript";
    var g = function() {
        function e() {}
        return e.prototype.getAppConfig = function(e) {
            return r(this, void 0, void 0, function() {
                var t, n, i;
                return o(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (r.trys.push([0, 2, , 3]), !e || !e.appId) throw new d.SdkInitError(d.SdkInitErrorKind.InvalidAppId);
                            return [4, l.default.downloadServerAppConfig(e.appId)];
                        case 1:
                            if (t = r.sent(), (n = this.getMergedConfig(e, t)).restrictedOriginEnabled && p.default.getWindowEnv() !== h.WindowEnvironmentKind.ServiceWorker && window.top === window && !f.contains(window.location.hostname, ".os.tc") && !f.contains(window.location.hostname, ".onesignal.com") && !this.doesCurrentOriginMatchConfigOrigin(n.origin)) throw new d.SdkInitError(d.SdkInitErrorKind.WrongSiteUrl, {
                                siteUrl: n.origin
                            });
                            return [2, n];
                        case 2:
                            if (i = r.sent()) {
                                if (1 === i.code) throw new d.SdkInitError(d.SdkInitErrorKind.InvalidAppId);
                                if (2 === i.code) throw new d.SdkInitError(d.SdkInitErrorKind.AppNotConfiguredForWebPush)
                            }
                            throw i;
                        case 3:
                            return [2]
                    }
                })
            })
        }, e.prototype.doesCurrentOriginMatchConfigOrigin = function(e) {
            try {
                return location.origin === new URL(e).origin
            } catch (e) {
                return !1
            }
        }, e.prototype.getIntegrationCapabilities = function(e) {
            switch (e) {
                case c.ConfigIntegrationKind.Custom:
                case c.ConfigIntegrationKind.WordPress:
                    return {
                        configuration: t.IntegrationConfigurationKind.JavaScript
                    };
                default:
                    return {
                        configuration: t.IntegrationConfigurationKind.Dashboard
                    }
            }
        }, e.prototype.getMergedConfig = function(e, t) {
            var n = this.getConfigIntegrationKind(t);
            return {
                appId: t.app_id,
                subdomain: this.getSubdomainForConfigIntegrationKind(n, e, t),
                origin: t.config.origin,
                httpUseOneSignalCom: t.config.http_use_onesignal_com,
                cookieSyncEnabled: t.features.cookie_sync.enable,
                restrictedOriginEnabled: t.features.restrict_origin && t.features.restrict_origin.enable,
                metrics: {
                    enable: t.features.metrics.enable,
                    mixpanelReportingToken: t.features.metrics.mixpanel_reporting_token
                },
                safariWebId: t.config.safari_web_id,
                vapidPublicKey: t.config.vapid_public_key,
                onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
                emailAuthRequired: t.features.email && t.features.email.require_auth,
                userConfig: this.getUserConfigForConfigIntegrationKind(n, e, t)
            }
        }, e.prototype.getConfigIntegrationKind = function(e) {
            return e.config.integration ? e.config.integration.kind : c.ConfigIntegrationKind.Custom
        }, e.prototype.getUserConfigForConfigIntegrationKind = function(e, n, r) {
            switch (this.getIntegrationCapabilities(e).configuration) {
                case t.IntegrationConfigurationKind.Dashboard:
                    return {
                        appId: r.app_id,
                        autoRegister: !1,
                        path: r.config.serviceWorker.path,
                        serviceWorkerPath: r.config.serviceWorker.workerName,
                        serviceWorkerUpdaterPath: r.config.serviceWorker.updaterWorkerName,
                        serviceWorkerParam: {
                            scope: r.config.serviceWorker.registrationScope
                        },
                        subdomainName: r.config.siteInfo.proxyOrigin,
                        promptOptions: {
                            slidedown: {
                                autoPrompt: r.config.staticPrompts.slidedown.enabled,
                                actionMessage: r.config.staticPrompts.slidedown.actionMessage,
                                acceptButtonText: r.config.staticPrompts.slidedown.acceptButton,
                                cancelButtonText: r.config.staticPrompts.slidedown.cancelButton
                            },
                            fullscreen: {
                                actionMessage: r.config.staticPrompts.fullscreen.actionMessage,
                                acceptButton: r.config.staticPrompts.fullscreen.acceptButton,
                                cancelButton: r.config.staticPrompts.fullscreen.cancelButton,
                                title: r.config.staticPrompts.fullscreen.title,
                                message: r.config.staticPrompts.fullscreen.message,
                                caption: r.config.staticPrompts.fullscreen.caption,
                                autoAcceptTitle: r.config.staticPrompts.fullscreen.autoAcceptTitle
                            }
                        },
                        welcomeNotification: {
                            disable: !r.config.welcomeNotification.enable,
                            title: r.config.welcomeNotification.title,
                            message: r.config.welcomeNotification.message,
                            url: r.config.welcomeNotification.url
                        },
                        notifyButton: {
                            enable: r.config.staticPrompts.bell.enabled,
                            displayPredicate: r.config.staticPrompts.bell.hideWhenSubscribed ? function() {
                                return OneSignal.isPushNotificationsEnabled().then(function(e) {
                                    return !e
                                })
                            } : null,
                            size: r.config.staticPrompts.bell.size,
                            position: r.config.staticPrompts.bell.location,
                            showCredit: !1,
                            offset: {
                                bottom: r.config.staticPrompts.bell.offset.bottom + "px",
                                left: r.config.staticPrompts.bell.offset.left + "px",
                                right: r.config.staticPrompts.bell.offset.right + "px"
                            },
                            colors: {
                                "circle.background": r.config.staticPrompts.bell.color.main,
                                "circle.foreground": r.config.staticPrompts.bell.color.accent,
                                "badge.background": "black",
                                "badge.foreground": "white",
                                "badge.bordercolor": "black",
                                "pulse.color": r.config.staticPrompts.bell.color.accent,
                                "dialog.button.background.hovering": r.config.staticPrompts.bell.color.main,
                                "dialog.button.background.active": r.config.staticPrompts.bell.color.main,
                                "dialog.button.background": r.config.staticPrompts.bell.color.main,
                                "dialog.button.foreground": "white"
                            },
                            text: {
                                "tip.state.unsubscribed": r.config.staticPrompts.bell.tooltip.unsubscribed,
                                "tip.state.subscribed": r.config.staticPrompts.bell.tooltip.subscribed,
                                "tip.state.blocked": r.config.staticPrompts.bell.tooltip.blocked,
                                "message.prenotify": r.config.staticPrompts.bell.tooltip.unsubscribed,
                                "message.action.subscribed": r.config.staticPrompts.bell.message.subscribing,
                                "message.action.resubscribed": r.config.staticPrompts.bell.message.subscribing,
                                "message.action.unsubscribed": r.config.staticPrompts.bell.message.unsubscribing,
                                "dialog.main.title": r.config.staticPrompts.bell.dialog.main.title,
                                "dialog.main.button.subscribe": r.config.staticPrompts.bell.dialog.main.subscribeButton,
                                "dialog.main.button.unsubscribe": r.config.staticPrompts.bell.dialog.main.unsubscribeButton,
                                "dialog.blocked.title": r.config.staticPrompts.bell.dialog.blocked.title,
                                "dialog.blocked.message": r.config.staticPrompts.bell.dialog.blocked.message
                            }
                        },
                        persistNotification: r.config.notificationBehavior.display.persist,
                        webhooks: {
                            cors: r.config.webhooks.corsEnable,
                            "notification.displayed": r.config.webhooks.notificationDisplayedHook,
                            "notification.clicked": r.config.webhooks.notificationClickedHook,
                            "notification.dismissed": r.config.webhooks.notificationDismissedHook
                        },
                        notificationClickHandlerMatch: r.config.notificationBehavior.click.match,
                        notificationClickHandlerAction: r.config.notificationBehavior.click.action,
                        allowLocalhostAsSecureOrigin: r.config.setupBehavior.allowLocalhostAsSecureOrigin
                    };
                case t.IntegrationConfigurationKind.JavaScript:
                    return i({}, n, {
                        serviceWorkerParam: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PARAM ? OneSignal.SERVICE_WORKER_PARAM : {
                            scope: "/"
                        },
                        serviceWorkerPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PATH ? OneSignal.SERVICE_WORKER_PATH : "OneSignalSDKWorker.js",
                        serviceWorkerUpdaterPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_UPDATER_PATH ? OneSignal.SERVICE_WORKER_UPDATER_PATH : "OneSignalSDUpdaterKWorker.js",
                        path: n.path ? n.path : "/"
                    })
            }
        }, e.prototype.getSubdomainForConfigIntegrationKind = function(e, n, i) {
            var r = this.getIntegrationCapabilities(e),
                o = n.subdomainName,
                s = "";
            switch (r.configuration) {
                case t.IntegrationConfigurationKind.Dashboard:
                    s = i.config.siteInfo.proxyOriginEnabled ? i.config.siteInfo.proxyOrigin : void 0;
                    break;
                case t.IntegrationConfigurationKind.JavaScript:
                    s = i.config.subdomain
            }
            return s && !this.shouldUseServerConfigSubdomain(o, r) ? void 0 : s
        }, e.prototype.shouldUseServerConfigSubdomain = function(e, n) {
            switch (n.configuration) {
                case t.IntegrationConfigurationKind.Dashboard:
                    return !0;
                case t.IntegrationConfigurationKind.JavaScript:
                    switch (location.protocol) {
                        case "https:":
                            return !!e;
                        case "http:":
                            return !0;
                        default:
                            return !1
                    }
            }
        }, e
    }();
    t.default = g
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.base64ToUint8Array = function(e) {
        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
        return i
    }, t.arrayBufferToBase64 = function(e) {
        for (var t, n = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(e), o = r.byteLength, s = o % 3, a = o - s, u = 0; u < a; u += 3) n += i[(16515072 & (t = r[u] << 16 | r[u + 1] << 8 | r[u + 2])) >> 18] + i[(258048 & t) >> 12] + i[(4032 & t) >> 6] + i[63 & t];
        return 1 == s ? n += i[(252 & (t = r[a])) >> 2] + i[(3 & t) << 4] + "==" : 2 == s && (n += i[(64512 & (t = r[a] << 8 | r[a + 1])) >> 10] + i[(1008 & t) >> 4] + i[(15 & t) << 2] + "="), n
    }, t.base64Encode = function(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
            return String.fromCharCode("0x" + t)
        }))
    }, t.base64Decode = function(e) {
        return decodeURIComponent(atob(e).split("").map(function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }).join(""))
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.isNewSubscription = function() {
            return this.existingW3cPushSubscription ? this.existingW3cPushSubscription.w3cEndpoint.toString() !== this.w3cEndpoint.toString() || this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh || this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth : !this.existingSafariDeviceToken || this.existingSafariDeviceToken !== this.safariDeviceToken
        }, e.setFromW3cSubscription = function(t) {
            var n = new e;
            if (t && (n.w3cEndpoint = new URL(t.endpoint), t.getKey)) {
                var i = null;
                try {
                    i = t.getKey("p256dh")
                } catch (e) {}
                var r = null;
                try {
                    r = t.getKey("auth")
                } catch (e) {}
                if (i) {
                    var o = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
                    n.w3cP256dh = o
                }
                if (r) {
                    var s = btoa(String.fromCharCode.apply(null, new Uint8Array(r)));
                    n.w3cAuth = s
                }
            }
            return n
        }, e.prototype.setFromSafariSubscription = function(e) {
            this.safariDeviceToken = e
        }, e.prototype.serialize = function() {
            return {
                w3cEndpoint: this.w3cEndpoint.toString(),
                w3cP256dh: this.w3cP256dh,
                w3cAuth: this.w3cAuth,
                safariDeviceToken: this.safariDeviceToken,
                existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null,
                existingSafariDeviceToken: this.existingSafariDeviceToken
            }
        }, e.deserialize = function(t) {
            var n = new e;
            if (!t) return n;
            try {
                n.w3cEndpoint = new URL(t.w3cEndpoint)
            } catch (e) {}
            return n.w3cP256dh = t.w3cP256dh, n.w3cAuth = t.w3cAuth, n.existingW3cPushSubscription = t.existingPushSubscription ? e.deserialize(t.existingPushSubscription) : null, n.safariDeviceToken = t.safariDeviceToken, n.existingSafariDeviceToken = t.existingSafariDeviceToken, n
        }, e
    }();
    t.RawPushSubscription = i
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6));
    (s = t.SubscriptionErrorReason || (t.SubscriptionErrorReason = {}))[s.InvalidSafariSetup = 0] = "InvalidSafariSetup", s[s.Blocked = 1] = "Blocked", s[s.Dismissed = 2] = "Dismissed";
    var u = function(e) {
        function n(n) {
            var i = this;
            switch (n) {
                case t.SubscriptionErrorReason.InvalidSafariSetup:
                    i = e.call(this, "The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.") || this;
                    break;
                case t.SubscriptionErrorReason.Blocked:
                    i = e.call(this, "Notification permissions are blocked.") || this;
                    break;
                case t.SubscriptionErrorReason.Dismissed:
                    i = e.call(this, "The notification permission prompt was dismissed.") || this
            }
            return i
        }
        return r(n, e), n
    }(a.default);
    t.default = u
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(15),
        o = n(18),
        s = n(50),
        a = n(38),
        u = i(n(49)),
        c = i(n(31)),
        l = i(n(0)),
        d = n(48),
        f = i(n(47)),
        p = i(n(36)),
        h = function() {
            return function(e) {
                this.appConfig = e, this.cookieSyncer = new u.default(this, e.cookieSyncEnabled), this.subscriptionManager = new s.SubscriptionManager(this, {
                    safariWebId: e.safariWebId,
                    appId: e.appId,
                    vapidPublicKey: e.vapidPublicKey,
                    onesignalVapidPublicKey: e.onesignalVapidPublicKey
                });
                var t = {
                    workerAPath: new c.default("/" + l.default.getBuildEnvPrefix() + "OneSignalSDKWorker.js"),
                    workerBPath: new c.default("/" + l.default.getBuildEnvPrefix() + "OneSignalSDKUpdaterWorker.js"),
                    registrationOptions: {
                        scope: "/"
                    }
                };
                e.userConfig && (e.userConfig.path && (t.workerAPath = new c.default(e.userConfig.path + l.default.getBuildEnvPrefix() + e.userConfig.serviceWorkerPath), t.workerBPath = new c.default(e.userConfig.path + l.default.getBuildEnvPrefix() + e.userConfig.serviceWorkerUpdaterPath)), e.userConfig.serviceWorkerParam && (t.registrationOptions = e.userConfig.serviceWorkerParam)), this.serviceWorkerManager = new o.ServiceWorkerManager(this, t), this.workerMessenger = new r.WorkerMessenger(this), this.dynamicResourceLoader = new a.DynamicResourceLoader, this.sessionManager = new d.SessionManager, this.permissionManager = new f.default, this.metricsManager = new p.default(e.metrics.enable, e.metrics.mixpanelReportingToken)
            }
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(13),
        r = function() {
            function e(e) {
                if (!e) throw new i.InvalidArgumentError("path", i.InvalidArgumentReason.Empty);
                this.path = e.trim()
            }
            return e.prototype.getQueryString = function() {
                var e = this.path.indexOf("?");
                return -1 === e ? null : this.path.length > e ? this.path.substring(e + 1) : null
            }, e.prototype.getWithoutQueryString = function() {
                return this.path.split(e.QUERY_STRING)[0]
            }, e.prototype.getFileName = function() {
                return this.getWithoutQueryString().split("\\").pop().split("/").pop()
            }, e.prototype.getFileNameWithQuery = function() {
                return this.path.split("\\").pop().split("/").pop()
            }, e.prototype.getFullPath = function() {
                return this.path
            }, e.prototype.getPathWithoutFileName = function() {
                var e = this.getWithoutQueryString(),
                    t = e.lastIndexOf(this.getFileName()),
                    n = e.substring(0, t);
                return n = n.replace(/[\\\/]$/, "")
            }, e
        }();
    t.default = r, r.QUERY_STRING = "?"
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.DeliveryPlatformKind || (t.DeliveryPlatformKind = {}))[i.ChromeLike = 5] = "ChromeLike", i[i.Safari = 7] = "Safari", i[i.Firefox = 8] = "Firefox", i[i.Edge = 12] = "Edge", i[i.Email = 11] = "Email"
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(9)),
        a = n(32),
        u = function(e) {
            function t(t, n, i) {
                var r = e.call(this) || this;
                return r.email = t, r.emailAuthHash = n, r.pushDeviceRecordId = i, r.deliveryPlatform = a.DeliveryPlatformKind.Email, r
            }
            return r(t, e), t.prototype.serialize = function() {
                var t = e.prototype.serialize.call(this);
                return this.email && (t.identifier = this.email), this.emailAuthHash && (t.email_auth_hash = this.emailAuthHash), this.pushDeviceRecordId && (t.device_player_id = this.pushDeviceRecordId), t
            }, t.prototype.deserialize = function(e) {
                throw new s.default
            }, t
        }(n(24).DeviceRecord);
    t.EmailDeviceRecord = u
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.TestEnvironmentKind || (t.TestEnvironmentKind = {})).None = "None", i.UnitTesting = "Unit Testing"
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a, u = n(27),
        c = s(n(4)),
        l = function() {
            function e() {}
            return e.prototype.getPropertiesAsJson = function() {
                return {
                    origin: location.origin,
                    url: location.href,
                    sdkVersion: c.default.version()
                }
            }, e
        }(),
        d = function() {
            return function() {}
        }();
    (a = t.ApiUsageMetricKind || (t.ApiUsageMetricKind = {})).HttpPermissionRequest = "HttpPermissionRequest", a.SyncHashedEmail = "SyncHashedEmail";
    var f = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.apiName = t, n
        }
        return r(t, e), t.prototype.getEventName = function() {
            return "api-usage"
        }, t.prototype.getPropertiesAsJson = function() {
            return o({
                api: this.apiName.toString()
            }, e.prototype.getPropertiesAsJson.call(this))
        }, t
    }(l);
    t.ApiUsageMetricEvent = f;
    var p = function(e) {
        function t() {
            return e.call(this) || this
        }
        return r(t, e), t.prototype.getProfileName = function() {
            return "all_websites"
        }, t.prototype.getDateUtc = function() {
            var e = new Date;
            return e.getUTCMonth() + 1 + "_" + e.getUTCDate() + "_" + e.getUTCFullYear()
        }, t.prototype.getOperationData = function() {
            var e = {
                $add: {},
                $ignore_time: !0
            };
            return e.$add["pageview_" + this.getDateUtc()] = 1, e
        }, t
    }(d);
    t.PageViewMetricEngagement = p;
    var h = function() {
        function e(e, t) {
            this.isFeatureEnabled = e, this.mixpanelReportingToken = t
        }
        return Object.defineProperty(e, "MIXPANEL_REPORTING_URL", {
            get: function() {
                return "https://api.mixpanel.com"
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.isEnabled = function() {
            return this.isFeatureEnabled && !!this.mixpanelReportingToken
        }, e.prototype.reportEvent = function(t) {
            if (!this.isEnabled()) return Promise.resolve(null);
            var n = {
                    event: t.getEventName(),
                    properties: o({
                        token: this.mixpanelReportingToken
                    }, t.getPropertiesAsJson())
                },
                i = u.base64Encode(JSON.stringify(n)),
                r = {
                    method: "GET",
                    headers: new Headers,
                    cache: "no-cache"
                };
            return fetch(e.MIXPANEL_REPORTING_URL + "/track/?data=" + i, r)
        }, e.prototype.reportEngagement = function(t) {
            if (!this.isEnabled()) return Promise.resolve(null);
            var n = {
                $token: this.mixpanelReportingToken,
                $distinct_id: t.getProfileName()
            };
            n = o({}, n, t.getOperationData());
            var i = u.base64Encode(JSON.stringify(n)),
                r = {
                    method: "GET",
                    headers: new Headers,
                    cache: "no-cache"
                };
            return fetch(e.MIXPANEL_REPORTING_URL + "/engage/?data=" + i, r)
        }, e.prototype.shouldCollectPageView = function() {
            var e = new Date;
            return e.getUTCMonth() + 1 <= 2 && e.getUTCDate() <= 10 && e.getUTCFullYear() <= 2018 && e.getUTCMonth() + 1 >= 2 && e.getUTCDate() >= 8 && e.getUTCFullYear() >= 2018
        }, e.prototype.reportPageView = function() {
            this.shouldCollectPageView() && this.reportEngagement(new p)
        }, e
    }();
    t.default = h
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(7)),
        a = o(n(5)),
        u = o(n(23)),
        c = n(1),
        l = o(n(81)),
        d = o(n(80)),
        f = o(n(79)),
        p = o(n(78)),
        h = o(n(64)),
        g = o(n(2)),
        b = function() {
            function e(t) {
                var n = void 0 === t ? {} : t,
                    o = n.enable,
                    s = void 0 !== o && o,
                    a = n.size,
                    l = void 0 === a ? "medium" : a,
                    d = n.position,
                    f = void 0 === d ? "bottom-right" : d,
                    p = n.theme,
                    g = void 0 === p ? "default" : p,
                    b = n.showLauncherAfter,
                    m = void 0 === b ? 10 : b,
                    v = n.showBadgeAfter,
                    S = void 0 === v ? 300 : v,
                    y = n.text,
                    w = void 0 === y ? {
                        "tip.state.unsubscribed": "Subscribe to notifications",
                        "tip.state.subscribed": "You're subscribed to notifications",
                        "tip.state.blocked": "You've blocked notifications",
                        "message.prenotify": "Click to subscribe to notifications",
                        "message.action.subscribing": "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
                        "message.action.subscribed": "Thanks for subscribing!",
                        "message.action.resubscribed": "You're subscribed to notifications",
                        "message.action.unsubscribed": "You won't receive notifications again",
                        "dialog.main.title": "Manage Site Notifications",
                        "dialog.main.button.subscribe": "SUBSCRIBE",
                        "dialog.main.button.unsubscribe": "UNSUBSCRIBE",
                        "dialog.blocked.title": "Unblock Notifications",
                        "dialog.blocked.message": "Follow these instructions to allow notifications:"
                    } : y,
                    O = n.prenotify,
                    _ = void 0 === O || O,
                    E = n.showCredit,
                    P = void 0 === E || E,
                    I = n.colors,
                    M = void 0 === I ? null : I,
                    C = n.offset,
                    k = void 0 === C ? null : C,
                    T = n.launcher,
                    N = void 0 === T ? null : T,
                    A = this;
                if (this.options = {
                        enable: s,
                        size: l,
                        position: f,
                        theme: g,
                        showLauncherAfter: m,
                        showBadgeAfter: S,
                        text: w,
                        prenotify: _,
                        showCredit: P,
                        colors: M,
                        offset: k
                    }, this.options.enable) {
                    if (!c.contains(["small", "medium", "large"], this.options.size)) throw new Error("Invalid size " + this.options.size + " for notify button. Choose among 'small', 'medium', or 'large'.");
                    if (!c.contains(["bottom-left", "bottom-right"], this.options.position)) throw new Error("Invalid position " + this.options.position + " for notify button. Choose either 'bottom-left', or 'bottom-right'.");
                    if (!c.contains(["default", "inverse"], this.options.theme)) throw new Error("Invalid theme " + this.options.theme + " for notify button. Choose either 'default', or 'inverse'.");
                    if (this.options.showLauncherAfter < 0) throw new Error("Invalid delay duration of " + this.options.showLauncherAfter + " for showing the notify button. Choose a value above 0.");
                    if (this.options.showBadgeAfter < 0) throw new Error("Invalid delay duration of " + this.options.showBadgeAfter + " for showing the notify button's badge. Choose a value above 0.");
                    this.size = this.options.size, this.position = this.options.position, this.text = this.options.text, this.text["tip.state.unsubscribed"] || (this.text["tip.state.unsubscribed"] = "Subscribe to notifications"), this.text["tip.state.subscribed"] || (this.text["tip.state.subscribed"] = "You're subscribed to notifications"), this.text["tip.state.blocked"] || (this.text["tip.state.blocked"] = "You've blocked notifications"), this.text["message.prenotify"] || (this.text["message.prenotify"] = "Click to subscribe to notifications"), this.text["message.action.subscribed"] || (this.text["message.action.subscribed"] = "Thanks for subscribing!"), this.text["message.action.resubscribed"] || (this.text["message.action.resubscribed"] = "You're subscribed to notifications"), this.text["message.action.subscribing"] || (this.text["message.action.subscribing"] = "Click <strong>{{prompt.native.grant}}</strong> to receive notifications"), this.text["message.action.unsubscribed"] || (this.text["message.action.unsubscribed"] = "You won't receive notifications again"), this.text["dialog.main.title"] || (this.text["dialog.main.title"] = "Manage Site Notifications"), this.text["dialog.main.button.subscribe"] || (this.text["dialog.main.button.subscribe"] = "SUBSCRIBE"), this.text["dialog.main.button.unsubscribe"] || (this.text["dialog.main.button.unsubscribe"] = "UNSUBSCRIBE"), this.text["dialog.blocked.title"] || (this.text["dialog.blocked.title"] = "Unblock Notifications"), this.text["dialog.blocked.message"] || (this.text["dialog.blocked.message"] = "Follow these instructions to allow notifications:"), this._launcher = N, this.state = e.STATES.UNINITIALIZED, this._ignoreSubscriptionState = !1, OneSignal.on(e.EVENTS.SUBSCRIBE_CLICK, function() {
                        A.dialog.subscribeButton.disabled = !0, A._ignoreSubscriptionState = !0, OneSignal.setSubscription(!0).then(function() {
                            return A.dialog.subscribeButton.disabled = !1, A.dialog.hide()
                        }).then(function() {
                            return A.message.display(h.default.TYPES.MESSAGE, A.text["message.action.resubscribed"], h.default.TIMEOUT)
                        }).then(function() {
                            return A._ignoreSubscriptionState = !1, A.launcher.clearIfWasInactive(), A.launcher.inactivate()
                        }).then(function() {
                            return A.updateState()
                        })
                    }), OneSignal.on(e.EVENTS.UNSUBSCRIBE_CLICK, function() {
                        A.dialog.unsubscribeButton.disabled = !0, OneSignal.setSubscription(!1).then(function() {
                            return A.dialog.unsubscribeButton.disabled = !1, A.dialog.hide()
                        }).then(function() {
                            return A.launcher.clearIfWasInactive(), A.launcher.activate()
                        }).then(function() {
                            return A.message.display(h.default.TYPES.MESSAGE, A.text["message.action.unsubscribed"], h.default.TIMEOUT)
                        }).then(function() {
                            return A.updateState()
                        })
                    }), OneSignal.on(e.EVENTS.HOVERING, function() {
                        A.hovering = !0, A.launcher.activateIfInactive(), A.message.shown || A.dialog.shown ? A.hovering = !1 : A.message.contentType !== h.default.TYPES.MESSAGE ? new Promise(function(e) {
                            if (A.message.queued.length > 0) return A.message.dequeue().then(function(t) {
                                A.message.content = t, A.message.contentType = h.default.TYPES.QUEUED, e()
                            });
                            A.message.content = c.decodeHtmlEntities(A.message.getTipForState()), A.message.contentType = h.default.TYPES.TIP, e()
                        }).then(function() {
                            return A.message.show()
                        }).then(function() {
                            A.hovering = !1
                        }) : A.hovering = !1
                    }), OneSignal.on(e.EVENTS.HOVERED, function() {
                        A.message.contentType !== h.default.TYPES.MESSAGE && A.dialog.hidden && (A.hovering && (A.hovering = !1, A.message.waitUntilShown().then(function() {
                            return c.delay(h.default.TIMEOUT)
                        }).then(function() {
                            return A.message.hide()
                        }).then(function() {
                            A.launcher.wasInactive && A.dialog.hidden && (A.launcher.inactivate(), A.launcher.wasInactive = null)
                        })), A.message.shown && A.message.hide().then(function() {
                            A.launcher.wasInactive && A.dialog.hidden && (A.launcher.inactivate(), A.launcher.wasInactive = null)
                        }))
                    }), OneSignal.on(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function(t) {
                        return i(A, void 0, void 0, function() {
                            var n, i = this;
                            return r(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 1 != t ? [3, 2] : (this.badge.shown && this.options.prenotify && this.badge.hide(), null !== this.dialog.notificationIcons ? [3, 2] : [4, u.default.getNotificationIcons()]);
                                    case 1:
                                        n = r.sent(), this.dialog.notificationIcons = n, r.label = 2;
                                    case 2:
                                        return OneSignal.getNotificationPermission(function(n) {
                                            i.setState(t ? e.STATES.SUBSCRIBED : "denied" === n ? e.STATES.BLOCKED : e.STATES.UNSUBSCRIBED, i._ignoreSubscriptionState)
                                        }), [2]
                                }
                            })
                        })
                    }), OneSignal.on(e.EVENTS.STATE_CHANGED, function(t) {
                        A.launcher.element && (t.to === e.STATES.SUBSCRIBED ? A.launcher.inactivate() : (t.to === e.STATES.UNSUBSCRIBED || e.STATES.BLOCKED) && A.launcher.activate())
                    }), OneSignal.on(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, function() {
                        A.updateState()
                    }), this.updateState()
                }
            }
            return Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        STATE_CHANGED: "notifyButtonStateChange",
                        LAUNCHER_CLICK: "notifyButtonLauncherClick",
                        BELL_CLICK: "notifyButtonButtonClick",
                        SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
                        UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
                        HOVERING: "notifyButtonHovering",
                        HOVERED: "notifyButtonHover"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "STATES", {
                get: function() {
                    return {
                        UNINITIALIZED: "uninitialized",
                        SUBSCRIBED: "subscribed",
                        UNSUBSCRIBED: "unsubscribed",
                        BLOCKED: "blocked"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "TEXT_SUBS", {
                get: function() {
                    return {
                        "prompt.native.grant": {
                            default: "Allow",
                            chrome: "Allow",
                            firefox: "Always Receive Notifications",
                            safari: "Allow"
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.showDialogProcedure = function() {
                var e = this;
                this.dialog.shown || this.dialog.show().then(function() {
                    c.once(document, "click", function(t, n) {
                        e.dialog.element.contains(t.target) || (n(), e.dialog.shown && e.dialog.hide().then(function() {
                            e.launcher.inactivateIfWasInactive()
                        }))
                    }, !0)
                })
            }, e.prototype.create = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n, i, o = this;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return this.options.enable ? [4, OneSignal.context.dynamicResourceLoader.loadSdkStylesheet()] : [2];
                            case 1:
                                return 0 !== r.sent() ? (g.default.debug("Not showing notify button because styles failed to load."), [2]) : (this.container && c.removeDomElement("#onesignal-bell-container"), c.addDomElement("body", "beforeend", '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'), c.addDomElement(this.container, "beforeend", '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-button"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-badge"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-message"></div>'), c.addDomElement(this.message.selector, "beforeend", '<div class="onesignal-bell-launcher-message-body"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog"></div>'), c.addDomElement(this.dialog.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog-body"></div>'), c.addDomElement(this.button.selector, "beforeEnd", '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>'), [4, OneSignal.isPushNotificationsEnabled()]);
                            case 2:
                                return e = r.sent(), [4, OneSignal.getSubscription()];
                            case 3:
                                return t = r.sent(), [4, u.default.wasHttpsNativePromptDismissed()];
                            case 4:
                                return n = r.sent(), i = e ? "small" : this.options.size, [4, this.launcher.resize(i)];
                            case 5:
                                if (r.sent(), "bottom-left" === this.options.position) c.addCssClass(this.container, "onesignal-bell-container-bottom-left"), c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-bottom-left");
                                else {
                                    if ("bottom-right" !== this.options.position) throw new Error("Invalid OneSignal notify button position " + this.options.position);
                                    c.addCssClass(this.container, "onesignal-bell-container-bottom-right"), c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-bottom-right")
                                }
                                if ("default" === this.options.theme) c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-theme-default");
                                else {
                                    if ("inverse" !== this.options.theme) throw new Error("Invalid OneSignal notify button theme " + this.options.theme);
                                    c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-theme-inverse")
                                }
                                return this.applyOffsetIfSpecified(), this.setCustomColorsIfSpecified(), this.patchSafariSvgFilterBug(), g.default.info("Showing the notify button."), [4, (e ? this.launcher.inactivate() : c.nothing()).then(function() {
                                    return OneSignal.getSubscription()
                                }).then(function(t) {
                                    return !e && t || null !== o.dialog.notificationIcons ? c.nothing() : u.default.getNotificationIcons().then(function(e) {
                                        o.dialog.notificationIcons = e
                                    })
                                }).then(function() {
                                    return c.delay(o.options.showLauncherAfter)
                                }).then(function() {
                                    return c.isUsingSubscriptionWorkaround() && t && !0 !== n && !e && !0 === OneSignal.config.userConfig.autoRegister && !u.default.isHttpPromptAlreadyShown() ? (g.default.debug("Not showing notify button because popover will be shown."), c.nothing()) : o.launcher.show()
                                }).then(function() {
                                    return c.delay(o.options.showBadgeAfter)
                                }).then(function() {
                                    return o.options.prenotify && !e && OneSignal._isNewVisitor ? o.message.enqueue(o.text["message.prenotify"]).then(function() {
                                        return o.badge.show()
                                    }) : c.nothing()
                                }).then(function() {
                                    return o.initialized = !0
                                })];
                            case 6:
                                return r.sent(), [2]
                        }
                    })
                })
            }, e.prototype.patchSafariSvgFilterBug = function() {
                if (!(s.default.safari && Number(s.default.version) >= 9.1)) {
                    var e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));",
                        t = "drop-shadow(0 2px 4px rgba(34,36,38,0));",
                        n = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
                    this.graphic.setAttribute("style", "filter: " + e + "; -webkit-filter: " + e + ";"), this.badge.element.setAttribute("style", "filter: " + t + "; -webkit-filter: " + t + ";"), this.dialog.element.setAttribute("style", "filter: " + n + "; -webkit-filter: " + n + ";")
                }
                s.default.safari && this.badge.element.setAttribute("style", "display: none;")
            }, e.prototype.applyOffsetIfSpecified = function() {
                var e = this.options.offset;
                e && (this.launcher.element.style.cssText = "", e.bottom && (this.launcher.element.style.cssText += "bottom: " + e.bottom + ";"), "bottom-right" === this.options.position ? e.right && (this.launcher.element.style.cssText += "right: " + e.right + ";") : "bottom-left" === this.options.position && e.left && (this.launcher.element.style.cssText += "left: " + e.left + ";"))
            }, e.prototype.setCustomColorsIfSpecified = function() {
                var e = this.dialog.element.querySelector("button.action"),
                    t = this.button.element.querySelector(".pulse-ring");
                this.graphic.querySelector(".background").style.cssText = "";
                for (var n = this.graphic.querySelectorAll(".foreground"), i = 0; i < n.length; i++) {
                    n[i].style.cssText = ""
                }
                if (this.graphic.querySelector(".stroke").style.cssText = "", this.badge.element.style.cssText = "", e && (e.style.cssText = "", e.style.cssText = ""), t && (t.style.cssText = ""), this.options.colors) {
                    var r = this.options.colors;
                    if (r["circle.background"] && (this.graphic.querySelector(".background").style.cssText += "fill: " + r["circle.background"]), r["circle.foreground"]) {
                        var o = this.graphic.querySelectorAll(".foreground");
                        for (i = 0; i < o.length; i++) {
                            o[i].style.cssText += "fill: " + r["circle.foreground"]
                        }
                        this.graphic.querySelector(".stroke").style.cssText += "stroke: " + r["circle.foreground"]
                    }
                    r["badge.background"] && (this.badge.element.style.cssText += "background: " + r["badge.background"]), r["badge.bordercolor"] && (this.badge.element.style.cssText += "border-color: " + r["badge.bordercolor"]), r["badge.foreground"] && (this.badge.element.style.cssText += "color: " + r["badge.foreground"]), e && (r["dialog.button.background"] && (this.dialog.element.querySelector("button.action").style.cssText += "background: " + r["dialog.button.background"]), r["dialog.button.foreground"] && (this.dialog.element.querySelector("button.action").style.cssText += "color: " + r["dialog.button.foreground"]), r["dialog.button.background.hovering"] && this.addCssToHead("onesignal-background-hover-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: " + r["dialog.button.background.hovering"] + " !important; }"), r["dialog.button.background.active"] && this.addCssToHead("onesignal-background-active-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: " + r["dialog.button.background.active"] + " !important; }")), t && r["pulse.color"] && (this.button.element.querySelector(".pulse-ring").style.cssText = "border-color: " + r["pulse.color"])
                }
            }, e.prototype.addCssToHead = function(e, t) {
                if (!document.getElementById(e)) {
                    var n = document.createElement("style");
                    n.id = e, n.type = "text/css", n.appendChild(document.createTextNode(t)), document.head.appendChild(n)
                }
            }, e.prototype.updateState = function() {
                var t = this;
                Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getNotificationPermission()]).then(function(n) {
                    var i = n[0],
                        r = n[1];
                    t.setState(i ? e.STATES.SUBSCRIBED : e.STATES.UNSUBSCRIBED), "denied" === r && t.setState(e.STATES.BLOCKED)
                })
            }, e.prototype.setState = function(t, n) {
                void 0 === n && (n = !1);
                var i = this.state;
                this.state = t, i === t || n || a.default.trigger(e.EVENTS.STATE_CHANGED, {
                    from: i,
                    to: t
                })
            }, Object.defineProperty(e.prototype, "container", {
                get: function() {
                    return document.querySelector("#onesignal-bell-container")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "graphic", {
                get: function() {
                    return this.button.element.querySelector("svg")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "launcher", {
                get: function() {
                    return this._launcher || (this._launcher = new p.default(this)), this._launcher
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "button", {
                get: function() {
                    return this._button || (this._button = new d.default(this)), this._button
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "badge", {
                get: function() {
                    return this._badge || (this._badge = new l.default), this._badge
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message", {
                get: function() {
                    return this._message || (this._message = new h.default(this)), this._message
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dialog", {
                get: function() {
                    return this._dialog || (this._dialog = new f.default(this)), this._dialog
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "subscribed", {
                get: function() {
                    return this.state === e.STATES.SUBSCRIBED
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "unsubscribed", {
                get: function() {
                    return this.state === e.STATES.UNSUBSCRIBED
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "blocked", {
                get: function() {
                    return this.state === e.STATES.BLOCKED
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.default = b
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(0)),
        u = s(n(4)),
        c = function() {
            function e() {
                this.cache = {}
            }
            return e.prototype.getCache = function() {
                return i({}, this.cache)
            }, e.prototype.loadSdkStylesheet = function() {
                return r(this, void 0, void 0, function() {
                    var e;
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = a.default.getOneSignalApiUrl().origin, [4, this.loadIfNew(0, new URL(e + "/sdks/OneSignalSDKStyles.css?v=" + u.default.getSdkStylesVersionHash()))];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                })
            }, e.prototype.loadFetchPolyfill = function() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.loadIfNew(1, new URL("https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }, e.prototype.loadIfNew = function(t, n) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return this.cache[n.toString()] || (this.cache[n.toString()] = e.load(t, n)), [4, this.cache[n.toString()]];
                            case 1:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.load = function(e, t) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, new Promise(function(n, i) {
                                    switch (e) {
                                        case 1:
                                            (r = document.createElement("script")).setAttribute("type", "text/javascript"), r.setAttribute("async", "async"), r.setAttribute("src", t.toString());
                                            break;
                                        case 0:
                                            var r;
                                            (r = document.createElement("link")).setAttribute("rel", "stylesheet"), r.setAttribute("href", t.toString())
                                    }
                                    r.onerror = i, r.onload = n, document.querySelector("head").appendChild(r)
                                })];
                            case 1:
                                return n.sent(), [2, 0];
                            case 2:
                                return n.sent(), [2, 1];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.DynamicResourceLoader = c
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(11)),
        a = n(11),
        u = o(n(0)),
        c = n(3),
        l = n(1),
        d = o(n(58)),
        f = n(12),
        p = n(16),
        h = o(n(2)),
        g = function() {
            function e() {}
            return e.registerForPush = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n, i, o, g, b;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = OneSignal.context, [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                if (r.sent() && !t.sessionManager.isFirstPageView()) return h.default.debug("Not registering for push because the user is subscribed and this is not the first page view."), [2, null];
                                if ("undefined" != typeof OneSignal) {
                                    if (OneSignal._isRegisteringForPush) return [2, null];
                                    OneSignal._isRegisteringForPush = !0
                                }
                                switch (u.default.getWindowEnv()) {
                                    case c.WindowEnvironmentKind.Host:
                                    case c.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                        return [3, 2];
                                    case c.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                        return [3, 7]
                                }
                                return [3, 19];
                            case 2:
                                return r.trys.push([2, 5, , 6]), [4, t.subscriptionManager.subscribe(0)];
                            case 3:
                                return n = r.sent(), [4, t.subscriptionManager.registerSubscription(n)];
                            case 4:
                                return e = r.sent(), t.sessionManager.incrementPageViewCount(), l.triggerNotificationPermissionChanged(), d.default.checkAndTriggerSubscriptionChanged(), [3, 6];
                            case 5:
                                return i = r.sent(), h.default.info(i), [3, 6];
                            case 6:
                                return [3, 20];
                            case 7:
                                return o = opener || parent, g = void 0, [4, t.permissionManager.updateStoredPermission()];
                            case 8:
                                r.sent(), r.label = 9;
                            case 9:
                                return r.trys.push([9, 12, , 18]), [4, t.subscriptionManager.subscribe(1)];
                            case 10:
                                return g = r.sent(), [4, t.permissionManager.updateStoredPermission()];
                            case 11:
                                return r.sent(), [3, 18];
                            case 12:
                                return b = r.sent(), [4, t.permissionManager.updateStoredPermission()];
                            case 13:
                                if (r.sent(), !(b instanceof s.default)) return [3, 17];
                                switch (b.reason) {
                                    case a.PushPermissionNotGrantedErrorReason.Blocked:
                                        return [3, 14];
                                    case a.PushPermissionNotGrantedErrorReason.Dismissed:
                                        return [3, 16]
                                }
                                return [3, 17];
                            case 14:
                                return [4, t.permissionManager.updateStoredPermission()];
                            case 15:
                                return r.sent(), OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                    permission: p.NotificationPermission.Denied,
                                    forceUpdatePermission: !1
                                }), [3, 17];
                            case 16:
                                return OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                    permission: p.NotificationPermission.Default,
                                    forceUpdatePermission: !0
                                }), [3, 17];
                            case 17:
                                return o ? (window.close(), [2, null]) : [3, 18];
                            case 18:
                                return OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, {
                                    rawPushSubscription: g.serialize()
                                }, function(e) {
                                    !0 === e.data.progress ? (h.default.debug("Got message from host page that remote reg. is in progress, closing popup."), o && window.close()) : h.default.debug("Got message from host page that remote reg. could not be finished.")
                                }), [3, 20];
                            case 19:
                                throw "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), new f.InvalidStateError(f.InvalidStateReason.UnsupportedEnvironment);
                            case 20:
                                return "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), [2, e]
                        }
                    })
                })
            }, e
        }();
    t.default = g
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.put = function(t, n) {
            return void 0 === e.store[t] && (e.store[t] = [null, null]), e.store[t].push(n), e.store[t].length == e.LIMIT + 1 && e.store[t].shift(), e.store[t]
        }, e.get = function(t) {
            return void 0 === e.store[t] && (e.store[t] = [null, null]), e.store[t]
        }, e.getFirst = function(t) {
            return e.get(t)[0]
        }, e.getLast = function(t) {
            return e.get(t)[1]
        }, e.remove = function(t) {
            delete e.store[t]
        }, e.isEmpty = function(t) {
            var n = e.get(t);
            return null === n[0] && null === n[1]
        }, e
    }();
    t.default = i, i.store = {}, i.LIMIT = 2
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.PermissionPromptType || (t.PermissionPromptType = {}))[i.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest", i[i.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage", i[i.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage", i[i.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage", i[i.SubscriptionBell = "subscription bell"] = "SubscriptionBell"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.serialize = function() {
            return {
                emailAddress: this.emailAddress,
                emailAuthHash: this.emailAuthHash,
                emailId: this.emailId
            }
        }, e.deserialize = function(t) {
            var n = new e;
            return n.emailId = t.emailId, n.emailAddress = t.emailAddress, n.emailAuthHash = t.emailAuthHash, n
        }, e
    }();
    t.EmailProfile = i
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(20)),
        a = n(1),
        u = o(n(2)),
        c = function() {
            function e(e) {
                this.databaseName = e, this.emitter = new s.default
            }
            return e.prototype.open = function(e) {
                var t = this;
                return new Promise(function(n) {
                    try {
                        var i = indexedDB.open(e, 1)
                    } catch (e) {}
                    if (!i) return null;
                    i.onerror = t.onDatabaseOpenError, i.onblocked = t.onDatabaseOpenBlocked, i.onupgradeneeded = t.onDatabaseUpgradeNeeded, i.onsuccess = function() {
                        t.database = i.result, t.database.onerror = t.onDatabaseError, t.database.onversionchange = t.onDatabaseVersionChange, n(t.database)
                    }
                })
            }, e.prototype.ensureDatabaseOpen = function() {
                return i(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.openLock || (this.openLock = this.open(this.databaseName)), [4, this.openLock];
                            case 1:
                                return e.sent(), [2, this.database]
                        }
                    })
                })
            }, e.prototype.onDatabaseOpenError = function(e) {
                e.preventDefault();
                var t = e.target.error;
                a.contains(t.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || a.contains(t.message, "A mutation operation was attempted on a database that did not allow mutations") ? u.default.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6") : u.default.warn("OneSignal: Fatal error opening IndexedDb database:", t)
            }, e.prototype.onDatabaseError = function(e) {
                u.default.debug("IndexedDb: Generic database error", e.target.errorCode)
            }, e.prototype.onDatabaseOpenBlocked = function() {
                u.default.debug("IndexedDb: Blocked event")
            }, e.prototype.onDatabaseVersionChange = function(e) {
                u.default.debug("IndexedDb: versionchange event")
            }, e.prototype.onDatabaseUpgradeNeeded = function(e) {
                u.default.debug("IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).");
                var t = e.target.result;
                t.createObjectStore("Ids", {
                    keyPath: "type"
                }), t.createObjectStore("NotificationOpened", {
                    keyPath: "url"
                }), t.createObjectStore("Options", {
                    keyPath: "key"
                }), "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0)
            }, e.prototype.get = function(e, t) {
                return i(this, void 0, void 0, function() {
                    var n = this;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.ensureDatabaseOpen()];
                            case 1:
                                return i.sent(), t ? [4, new Promise(function(i, r) {
                                    var o = n.database.transaction(e).objectStore(e).get(t);
                                    o.onsuccess = function() {
                                        i(o.result)
                                    }, o.onerror = function() {
                                        r(o.error)
                                    }
                                })] : [3, 3];
                            case 2:
                                return [2, i.sent()];
                            case 3:
                                return [4, new Promise(function(t, i) {
                                    var r = {},
                                        o = n.database.transaction(e).objectStore(e).openCursor();
                                    o.onsuccess = function(e) {
                                        var n = e.target.result;
                                        if (n) {
                                            var i = n.key;
                                            r[i] = n.value, n.continue()
                                        } else t(r)
                                    }, o.onerror = function() {
                                        i(o.error)
                                    }
                                })];
                            case 4:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.put = function(e, t) {
                return i(this, void 0, void 0, function() {
                    var n = this;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.ensureDatabaseOpen()];
                            case 1:
                                return i.sent(), [4, new Promise(function(i, r) {
                                    try {
                                        var o = n.database.transaction([e], "readwrite").objectStore(e).put(t);
                                        o.onsuccess = function() {
                                            i(t)
                                        }, o.onerror = function(e) {
                                            u.default.error("Database PUT Transaction Error:", e), r(e)
                                        }
                                    } catch (e) {
                                        u.default.error("Database PUT Error:", e), r(e)
                                    }
                                })];
                            case 2:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.remove = function(e, t) {
                var n = this;
                if (t) var i = "delete";
                else i = "clear";
                return new Promise(function(r, o) {
                    try {
                        var s = n.database.transaction([e], "readwrite").objectStore(e)[i](t);
                        s.onsuccess = function() {
                            r(t)
                        }, s.onerror = function(e) {
                            u.default.error("Database REMOVE Transaction Error:", e), o(e)
                        }
                    } catch (e) {
                        u.default.error("Database REMOVE Error:", e), o(e)
                    }
                })
            }, e
        }();
    t.default = c
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.BuildEnvironmentKind || (t.BuildEnvironmentKind = {})).Development = "Development", i.Staging = "Staging", i.Production = "Production"
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var i = this && this.__assign || Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            },
            r = this && this.__awaiter || function(e, t, n, i) {
                return new(n || (n = Promise))(function(r, o) {
                    function s(e) {
                        try {
                            u(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        e.done ? r(e.value) : new n(function(t) {
                            t(e.value)
                        }).then(s, a)
                    }
                    u((i = i.apply(e, t || [])).next())
                })
            },
            o = this && this.__generator || function(e, t) {
                var n, i, r, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                                switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, i = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < r[1]) {
                                            s.label = r[1], r = o;
                                            break
                                        }
                                        if (r && s.label < r[2]) {
                                            s.label = r[2], s.ops.push(o);
                                            break
                                        }
                                        r[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e], i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = s(n(7)),
            u = s(n(4)),
            c = n(15),
            l = s(n(0)),
            d = s(n(30)),
            f = s(n(10)),
            p = s(n(8)),
            h = n(1),
            g = s(n(26)),
            b = n(28),
            m = n(14),
            v = n(21),
            S = s(n(2)),
            y = function() {
                function e() {}
                return Object.defineProperty(e, "VERSION", {
                    get: function() {
                        return u.default.version()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "environment", {
                    get: function() {
                        return u.default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "log", {
                    get: function() {
                        return S.default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "database", {
                    get: function() {
                        return p.default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "sdkEnvironment", {
                    get: function() {
                        return l.default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "browser", {
                    get: function() {
                        return a.default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "workerMessenger", {
                    get: function() {
                        return self.workerMessenger || (self.workerMessenger = new c.WorkerMessenger(null)), self.workerMessenger
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.run = function() {
                    self.addEventListener("push", e.onPushReceived), self.addEventListener("notificationclose", e.onNotificationClosed), self.addEventListener("notificationclick", function(t) {
                        return t.waitUntil(e.onNotificationClicked(t))
                    }), self.addEventListener("install", e.onServiceWorkerInstalled), self.addEventListener("activate", e.onServiceWorkerActivated), self.addEventListener("pushsubscriptionchange", function(t) {
                        t.waitUntil(e.onPushSubscriptionChange(t))
                    }), S.default.debug("Setting up message listeners."), e.workerMessenger.listen(), e.setupMessageListeners()
                }, e.getAppId = function() {
                    return r(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return self.location.search ? [2, self.location.search.match(/appId=([0-9a-z-]+)&?/i)[1]] : [3, 1];
                                case 1:
                                    return [4, p.default.getAppConfig()];
                                case 2:
                                    return [2, e.sent().appId]
                            }
                        })
                    })
                }, e.setupMessageListeners = function() {
                    var t = this;
                    e.workerMessenger.on(c.WorkerMessengerCommand.WorkerVersion, function(t) {
                        S.default.debug("[Service Worker] Received worker version message."), e.workerMessenger.broadcast(c.WorkerMessengerCommand.WorkerVersion, u.default.version())
                    }), e.workerMessenger.on(c.WorkerMessengerCommand.Subscribe, function(n) {
                        return r(t, void 0, void 0, function() {
                            var t, i, r, s;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = n, S.default.debug("[Service Worker] Received subscribe message."), [4, (i = new d.default(t)).subscriptionManager.subscribe(0)];
                                    case 1:
                                        return r = o.sent(), [4, i.subscriptionManager.registerSubscription(r)];
                                    case 2:
                                        return s = o.sent(), e.workerMessenger.broadcast(c.WorkerMessengerCommand.Subscribe, s.serialize()), [2]
                                }
                            })
                        })
                    }), e.workerMessenger.on(c.WorkerMessengerCommand.SubscribeNew, function(n) {
                        return r(t, void 0, void 0, function() {
                            var t, i, r, s;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = n, S.default.debug("[Service Worker] Received subscribe new message."), [4, (i = new d.default(t)).subscriptionManager.subscribe(1)];
                                    case 1:
                                        return r = o.sent(), [4, i.subscriptionManager.registerSubscription(r)];
                                    case 2:
                                        return s = o.sent(), e.workerMessenger.broadcast(c.WorkerMessengerCommand.SubscribeNew, s.serialize()), [2]
                                }
                            })
                        })
                    }), e.workerMessenger.on(c.WorkerMessengerCommand.AmpSubscriptionState, function(n) {
                        return r(t, void 0, void 0, function() {
                            var t, n, i, r;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return S.default.debug("[Service Worker] Received AMP subscription state message."), [4, self.registration.pushManager.getSubscription()];
                                    case 1:
                                        return (t = o.sent()) ? [3, 2] : (e.workerMessenger.broadcast(c.WorkerMessengerCommand.AmpSubscriptionState, !1), [3, 5]);
                                    case 2:
                                        return [4, self.registration.pushManager.permissionState(t.options)];
                                    case 3:
                                        return n = o.sent(), [4, p.default.getSubscription()];
                                    case 4:
                                        i = o.sent().optedOut, r = !!t && "granted" === n && !0 !== i, e.workerMessenger.broadcast(c.WorkerMessengerCommand.AmpSubscriptionState, r), o.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }), e.workerMessenger.on(c.WorkerMessengerCommand.AmpSubscribe, function() {
                        return r(t, void 0, void 0, function() {
                            var t, n, i, r, s;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return S.default.debug("[Service Worker] Received AMP subscribe message."), [4, e.getAppId()];
                                    case 1:
                                        return t = o.sent(), [4, (new g.default).getAppConfig({
                                            appId: t
                                        })];
                                    case 2:
                                        return n = o.sent(), [4, (i = new d.default(n)).subscriptionManager.subscribe(0)];
                                    case 3:
                                        return r = o.sent(), [4, i.subscriptionManager.registerSubscription(r)];
                                    case 4:
                                        return s = o.sent(), e.workerMessenger.broadcast(c.WorkerMessengerCommand.AmpSubscribe, s.deviceId), [2]
                                }
                            })
                        })
                    }), e.workerMessenger.on(c.WorkerMessengerCommand.AmpUnsubscribe, function() {
                        return r(t, void 0, void 0, function() {
                            var t, n;
                            return o(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return S.default.debug("[Service Worker] Received AMP unsubscribe message."), [4, e.getAppId()];
                                    case 1:
                                        return t = i.sent(), [4, (new g.default).getAppConfig({
                                            appId: t
                                        })];
                                    case 2:
                                        return n = i.sent(), [4, new d.default(n).subscriptionManager.unsubscribe(1)];
                                    case 3:
                                        return i.sent(), e.workerMessenger.broadcast(c.WorkerMessengerCommand.AmpUnsubscribe, null), [2]
                                }
                            })
                        })
                    })
                }, e.onPushReceived = function(t) {
                    S.default.debug("Called %conPushReceived(" + JSON.stringify(t, null, 4) + "):", h.getConsoleStyle("code"), t), t.waitUntil(e.parseOrFetchNotifications(t).then(function(t) {
                        if (!t || 0 == t.length) return S.default.debug("Because no notifications were retrieved, we'll display the last known notification, so long as it isn't the welcome notification."), e.displayBackupNotification();
                        for (var n = [], i = 0, r = t; i < r.length; i++) {
                            var o = r[i];
                            S.default.debug("Raw Notification from OneSignal:", o);
                            var s = e.buildStructuredNotificationObject(o);
                            n.push(function(t) {
                                return e.displayNotification(t).then(function() {
                                    return e.updateBackupNotification(t).catch(function(e) {
                                        return S.default.error(e)
                                    })
                                }).then(function() {
                                    return e.workerMessenger.broadcast(c.WorkerMessengerCommand.NotificationDisplayed, t).catch(function(e) {
                                        return S.default.error(e)
                                    })
                                }).then(function() {
                                    return e.executeWebhooks("notification.displayed", t).catch(function(e) {
                                        return S.default.error(e)
                                    })
                                })
                            }.bind(null, s))
                        }
                        return n.reduce(function(e, t) {
                            return e.then(t)
                        }, Promise.resolve())
                    }).catch(function(t) {
                        return S.default.debug("Failed to display a notification:", t), e.UNSUBSCRIBED_FROM_NOTIFICATIONS ? void S.default.debug("Because we have just unsubscribed from notifications, we will not show anything.") : (S.default.debug("Because a notification failed to display, we'll display the last known notification, so long as it isn't the welcome notification."), e.displayBackupNotification())
                    }))
                }, e.executeWebhooks = function(e, t) {
                    return r(this, void 0, void 0, function() {
                        var n, i, r, s, a;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, p.default.getSubscription()];
                                case 1:
                                    return n = o.sent().deviceId, [4, p.default.get("Options", "webhooks.cors")];
                                case 2:
                                    return i = o.sent(), [4, p.default.get("Options", "webhooks." + e)];
                                case 3:
                                    return (r = o.sent()) ? (s = {
                                        event: e,
                                        id: t.id,
                                        userId: n,
                                        action: t.action,
                                        buttons: t.buttons,
                                        heading: t.heading,
                                        content: t.content,
                                        url: t.url,
                                        icon: t.icon,
                                        data: t.data
                                    }, a = {
                                        method: "post",
                                        mode: "no-cors",
                                        body: JSON.stringify(s)
                                    }, i && (a.mode = "cors", a.headers = {
                                        "X-OneSignal-Event": e,
                                        "Content-Type": "application/json"
                                    }), S.default.debug("Executing " + e + " webhook " + (i ? "with" : "without") + " CORS %cPOST " + r, h.getConsoleStyle("code"), ":", s), [4, fetch(r, a)]) : [3, 5];
                                case 4:
                                    return [2, o.sent()];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.getActiveClients = function() {
                    return r(this, void 0, void 0, function() {
                        var e, t, n, i, r;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, self.clients.matchAll({
                                        type: "window",
                                        includeUncontrolled: !0
                                    })];
                                case 1:
                                    for (e = o.sent(), t = [], n = 0, i = e; n < i.length; n++) {
                                        if ((r = i[n]).frameType && "nested" === r.frameType) {
                                            if (!h.contains(r.url, l.default.getOneSignalApiUrl().host) && !h.contains(r.url, ".os.tc")) continue;
                                            r.isSubdomainIframe = !0
                                        }
                                        t.push(r)
                                    }
                                    return [2, t]
                            }
                        })
                    })
                }, e.buildStructuredNotificationObject = function(e) {
                    var t = {
                        id: e.custom.i,
                        heading: e.title,
                        content: e.alert,
                        data: e.custom.a,
                        url: e.custom.u,
                        icon: e.icon,
                        image: e.image,
                        tag: e.tag,
                        badge: e.badge,
                        vibrate: e.vibrate
                    };
                    if (e.o) {
                        t.buttons = [];
                        for (var n = 0, i = e.o; n < i.length; n++) {
                            var r = i[n];
                            t.buttons.push({
                                action: r.i,
                                title: r.n,
                                icon: r.p,
                                url: r.u
                            })
                        }
                    }
                    return h.trimUndefined(t)
                }, e.ensureImageResourceHttps = function(e) {
                    if (!e) return null;
                    try {
                        var t = new URL(e);
                        return "localhost" === t.hostname || -1 !== t.hostname.indexOf("192.168") || "127.0.0.1" === t.hostname || "https:" === t.protocol ? e : "i0.wp.com" === t.hostname || "i1.wp.com" === t.hostname || "i2.wp.com" === t.hostname || "i3.wp.com" === t.hostname ? "https://" + t.hostname + t.pathname : "https://i0.wp.com/" + (t.host + t.pathname)
                    } catch (e) {}
                }, e.ensureNotificationResourcesHttps = function(t) {
                    if (t && (t.icon && (t.icon = e.ensureImageResourceHttps(t.icon)), t.image && (t.image = e.ensureImageResourceHttps(t.image)), t.buttons && t.buttons.length > 0))
                        for (var n = 0, i = t.buttons; n < i.length; n++) {
                            var r = i[n];
                            r.icon && (r.icon = e.ensureImageResourceHttps(r.icon))
                        }
                }, e.displayNotification = function(t, n) {
                    return r(this, void 0, void 0, function() {
                        var r, s, a, u, c, l;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return S.default.debug("Called %cdisplayNotification(" + JSON.stringify(t, null, 4) + "):", h.getConsoleStyle("code"), t), [4, e._getTitle()];
                                case 1:
                                    return r = o.sent(), [4, p.default.get("Options", "defaultIcon")];
                                case 2:
                                    return s = o.sent(), [4, p.default.get("Options", "persistNotification")];
                                case 3:
                                    return a = o.sent(), [4, e.getAppId()];
                                case 4:
                                    return u = o.sent(), t.heading = t.heading ? t.heading : r, t.icon = t.icon ? t.icon : s || void 0, (c = {}).tag = t.tag || u, c.persistNotification = "force" === a || a, n || (n = {}), t = i({}, t, n), e.ensureNotificationResourcesHttps(t), l = {
                                        body: t.content,
                                        icon: t.icon,
                                        image: t.image,
                                        data: t,
                                        actions: t.buttons,
                                        tag: c.tag,
                                        requireInteraction: c.persistNotification,
                                        renotify: !0,
                                        badge: t.badge,
                                        vibrate: t.vibrate
                                    }, l = e.filterNotificationOptions(l, "force" === a), [2, self.registration.showNotification(t.heading, l)]
                            }
                        })
                    })
                }, e.filterNotificationOptions = function(e, t) {
                    if ("object" != typeof e) return e;
                    var n = i({}, e);
                    if ("" === a.default.name && "" === a.default.version) var r = a.default._detect(navigator.userAgent);
                    else r = a.default;
                    return r.chrome && r.mac && n && (n.requireInteraction = !1), t && (n.requireInteraction = !0), n
                }, e.updateBackupNotification = function(e) {
                    return r(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e.data && e.data.__isOneSignalWelcomeNotification ? [2] : [4, p.default.put("Ids", {
                                        type: "backupNotification",
                                        id: e
                                    })];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, e.displayBackupNotification = function() {
                    return p.default.get("Ids", "backupNotification").then(function(t) {
                        var n = {
                            persistNotification: !1,
                            data: {
                                __isOneSignalBackupNotification: !0
                            }
                        };
                        return t ? e.displayNotification(t, n) : e.displayNotification({
                            content: "You have new updates."
                        }, n)
                    })
                }, e.shouldOpenNotificationUrl = function(e) {
                    return "javascript:void(0);" !== e && "do_not_open" !== e && !h.contains(e, "_osp=do_not_open")
                }, e.onNotificationClosed = function(t) {
                    S.default.debug("Called %conNotificationClosed(" + JSON.stringify(t, null, 4) + "):", h.getConsoleStyle("code"), t);
                    var n = t.notification.data;
                    e.workerMessenger.broadcast(c.WorkerMessengerCommand.NotificationDismissed, n).catch(function(e) {
                        return S.default.error(e)
                    }), t.waitUntil(e.executeWebhooks("notification.dismissed", n))
                }, e.getNotificationUrlToOpen = function(e) {
                    return r(this, void 0, void 0, function() {
                        var t, n, i, r, s;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return t = self.registration.scope, [4, p.default.getAppState()];
                                case 1:
                                    if ((n = o.sent().defaultNotificationUrl) && (t = n), e.action)
                                        for (i = 0, r = e.buttons; i < r.length; i++)(s = r[i]).action === e.action && s.url && "" !== s.url && (t = s.url);
                                    else e.url && "" !== e.url && (t = e.url);
                                    return [2, t]
                            }
                        })
                    })
                }, e.onNotificationClicked = function(t) {
                    return r(this, void 0, void 0, function() {
                        var n, i, r, s, a, u, l, d, g, b, m, v, y, w, O, _, E, P, I, M, C, k;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return S.default.debug("Called %conNotificationClicked(" + JSON.stringify(t, null, 4) + "):", h.getConsoleStyle("code"), t), t.notification.close(), n = t.notification.data, t.action && (n.action = t.action), i = "exact", r = "navigate", [4, p.default.get("Options", "notificationClickHandlerMatch")];
                                case 1:
                                    return (s = o.sent()) && (i = s), [4, this.database.get("Options", "notificationClickHandlerAction")];
                                case 2:
                                    return (a = o.sent()) && (r = a), [4, e.getActiveClients()];
                                case 3:
                                    return u = o.sent(), [4, e.getNotificationUrlToOpen(n)];
                                case 4:
                                    l = o.sent(), d = e.shouldOpenNotificationUrl(l), g = !1, b = 0, m = u, o.label = 5;
                                case 5:
                                    return b < m.length ? (v = m[b], y = v.url, v.isSubdomainIframe ? [4, p.default.get("Options", "lastKnownHostUrl")] : [3, 8]) : [3, 37];
                                case 6:
                                    return w = o.sent(), y = w, w ? [3, 8] : [4, p.default.get("Options", "defaultUrl")];
                                case 7:
                                    y = o.sent(), o.label = 8;
                                case 8:
                                    O = "";
                                    try {
                                        O = new URL(y).origin
                                    } catch (e) {
                                        S.default.error("Failed to get the HTTP site's actual origin:", e)
                                    }
                                    _ = null;
                                    try {
                                        _ = new URL(l).origin
                                    } catch (e) {}
                                    if (!("exact" === i && y === l || "origin" === i && O === _)) return [3, 36];
                                    if (!(v.isSubdomainIframe && y === l || !v.isSubdomainIframe && v.url === l || "focus" === r && O === _)) return [3, 13];
                                    e.workerMessenger.unicast(c.WorkerMessengerCommand.NotificationClicked, n, v), o.label = 9;
                                case 9:
                                    return o.trys.push([9, 11, , 12]), [4, v.focus()];
                                case 10:
                                    return o.sent(), [3, 12];
                                case 11:
                                    return E = o.sent(), S.default.error("Failed to focus:", v, E), [3, 12];
                                case 12:
                                    return [3, 35];
                                case 13:
                                    if (!v.isSubdomainIframe) return [3, 21];
                                    o.label = 14;
                                case 14:
                                    return o.trys.push([14, 16, , 17]), S.default.debug("Client is subdomain iFrame. Attempting to focus() client."), [4, v.focus()];
                                case 15:
                                    return o.sent(), [3, 17];
                                case 16:
                                    return P = o.sent(), S.default.error("Failed to focus:", v, P), [3, 17];
                                case 17:
                                    return d ? (S.default.debug("Redirecting HTTP site to " + l + "."), [4, p.default.put("NotificationOpened", {
                                        url: l,
                                        data: n,
                                        timestamp: Date.now()
                                    })]) : [3, 19];
                                case 18:
                                    return o.sent(), e.workerMessenger.unicast(c.WorkerMessengerCommand.RedirectPage, l, v), [3, 20];
                                case 19:
                                    S.default.debug("Not navigating because link is special."), o.label = 20;
                                case 20:
                                    return [3, 35];
                                case 21:
                                    if (!v.navigate) return [3, 32];
                                    o.label = 22;
                                case 22:
                                    return o.trys.push([22, 24, , 25]), S.default.debug("Client is standard HTTPS site. Attempting to focus() client."), [4, v.focus()];
                                case 23:
                                    return o.sent(), [3, 25];
                                case 24:
                                    return I = o.sent(), S.default.error("Failed to focus:", v, I), [3, 25];
                                case 25:
                                    return o.trys.push([25, 30, , 31]), d ? (S.default.debug("Redirecting HTTPS site to (" + l + ")."), [4, p.default.put("NotificationOpened", {
                                        url: l,
                                        data: n,
                                        timestamp: Date.now()
                                    })]) : [3, 28];
                                case 26:
                                    return o.sent(), [4, v.navigate(l)];
                                case 27:
                                    return o.sent(), [3, 29];
                                case 28:
                                    S.default.debug("Not navigating because link is special."), o.label = 29;
                                case 29:
                                    return [3, 31];
                                case 30:
                                    return M = o.sent(), S.default.error("Failed to navigate:", v, l, M), [3, 31];
                                case 31:
                                    return [3, 35];
                                case 32:
                                    return [4, p.default.put("NotificationOpened", {
                                        url: l,
                                        data: n,
                                        timestamp: Date.now()
                                    })];
                                case 33:
                                    return o.sent(), [4, e.openUrl(l)];
                                case 34:
                                    o.sent(), o.label = 35;
                                case 35:
                                    return g = !0, [3, 37];
                                case 36:
                                    return b++, [3, 5];
                                case 37:
                                    return !d || g ? [3, 40] : [4, p.default.put("NotificationOpened", {
                                        url: l,
                                        data: n,
                                        timestamp: Date.now()
                                    })];
                                case 38:
                                    return o.sent(), [4, e.openUrl(l)];
                                case 39:
                                    o.sent(), o.label = 40;
                                case 40:
                                    return [4, p.default.getAppConfig()];
                                case 41:
                                    return C = o.sent().appId, [4, p.default.getSubscription()];
                                case 42:
                                    return k = o.sent().deviceId, C && k ? [4, f.default.put("notifications/" + n.id, {
                                        app_id: C,
                                        player_id: k,
                                        opened: !0
                                    })] : [3, 44];
                                case 43:
                                    o.sent(), o.label = 44;
                                case 44:
                                    return [4, e.executeWebhooks("notification.clicked", n)];
                                case 45:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.openUrl = function(e) {
                    return r(this, void 0, void 0, function() {
                        var t;
                        return o(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    S.default.debug("Opening notification URL:", e), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, self.clients.openWindow(e)];
                                case 2:
                                    return [2, n.sent()];
                                case 3:
                                    return t = n.sent(), S.default.warn("Failed to open the URL '" + e + "':", t), [2, void 0];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.onServiceWorkerInstalled = function(e) {
                    e.waitUntil(self.skipWaiting())
                }, e.onServiceWorkerActivated = function(e) {
                    S.default.info("%cOneSignal Service Worker activated (version " + u.default.version() + ", " + l.default.getWindowEnv().toString() + " environment).", h.getConsoleStyle("bold")), e.waitUntil(self.clients.claim())
                }, e.onPushSubscriptionChange = function(t) {
                    return r(this, void 0, void 0, function() {
                        var n, i, r, s, a, u, c, l, y;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return S.default.debug("Called %conPushSubscriptionChange(" + JSON.stringify(t, null, 4) + "):", h.getConsoleStyle("code"), t), [4, e.getAppId()];
                                case 1:
                                    return (n = o.sent()) ? [4, (new g.default).getAppConfig({
                                        appId: n
                                    })] : [2];
                                case 2:
                                    return (i = o.sent()) ? (r = new d.default(i), [4, p.default.getSubscription()]) : [2];
                                case 3:
                                    return a = o.sent().deviceId, (s = !!a) || !t.oldSubscription ? [3, 7] : [4, f.default.getUserIdFromSubscriptionIdentifier(n, v.PushDeviceRecord.prototype.getDeliveryPlatform(), t.oldSubscription.endpoint)];
                                case 4:
                                    return a = o.sent(), [4, p.default.getSubscription()];
                                case 5:
                                    return (u = o.sent()).deviceId = a, [4, p.default.setSubscription(u)];
                                case 6:
                                    o.sent(), o.label = 7;
                                case 7:
                                    return s = !!a, (l = t.newSubscription) ? (c = b.RawPushSubscription.setFromW3cSubscription(l), [3, 11]) : [3, 8];
                                case 8:
                                    return o.trys.push([8, 10, , 11]), [4, r.subscriptionManager.subscribe(1)];
                                case 9:
                                    return c = o.sent(), [3, 11];
                                case 10:
                                    return o.sent(), [3, 11];
                                case 11:
                                    return s || !!c ? [3, 14] : [4, p.default.remove("Ids", "userId")];
                                case 12:
                                    return o.sent(), [4, p.default.remove("Ids", "registrationId")];
                                case 13:
                                    return o.sent(), [3, 17];
                                case 14:
                                    return y = null, [4, navigator.permissions.query({
                                        name: "push",
                                        userVisibleOnly: !0
                                    })];
                                case 15:
                                    return "granted" !== o.sent() ? y = m.SubscriptionStateKind.PermissionRevoked : c || (y = m.SubscriptionStateKind.PushSubscriptionRevoked), [4, r.subscriptionManager.registerSubscription(c, y)];
                                case 16:
                                    o.sent(), o.label = 17;
                                case 17:
                                    return [2]
                            }
                        })
                    })
                }, e._getTitle = function() {
                    return new Promise(function(e) {
                        Promise.all([p.default.get("Options", "defaultTitle"), p.default.get("Options", "pageTitle")]).then(function(t) {
                            var n = t[0],
                                i = t[1];
                            e(null !== n ? n : null != i ? i : "")
                        })
                    })
                }, e.parseOrFetchNotifications = function(t) {
                    return t.data ? e.isValidPushPayload(t.data) ? (S.default.debug("Received a valid encrypted push payload."), Promise.resolve([t.data.json()])) : Promise.reject("Unexpected push message payload received: " + t.data.text()) : e.retrieveNotifications()
                }, e.isValidPushPayload = function(e) {
                    try {
                        var t = e.json();
                        return !!(t && t.custom && t.custom.i && h.isValidUuid(t.custom.i)) || (S.default.debug("isValidPushPayload: Valid JSON but missing notification UUID:", t), !1)
                    } catch (e) {
                        return S.default.debug("isValidPushPayload: Parsing to JSON failed with:", e), !1
                    }
                }, e.retrieveNotifications = function() {
                    return new Promise(function(t) {
                        var n = [];
                        p.default.get("Ids", "userId").then(function(t) {
                            return t ? (S.default.debug("Legacy push signal received, retrieving contents from players/" + t + "/chromeweb_notification"), f.default.get("players/" + t + "/chromeweb_notification")) : (S.default.debug("Tried to get notification contents, but IndexedDB is missing user ID info."), Promise.all([e.getAppId(), self.registration.pushManager.getSubscription().then(function(e) {
                                return e.endpoint
                            })]).then(function(e) {
                                var t = e[0],
                                    n = e[1],
                                    i = v.PushDeviceRecord.prototype.getDeliveryPlatform();
                                return f.default.getUserIdFromSubscriptionIdentifier(t, i, n).then(function(e) {
                                    return e ? (S.default.debug("Recovered OneSignal user ID:", e), Promise.all([p.default.put("Ids", {
                                        type: "userId",
                                        id: e
                                    }), p.default.put("Ids", {
                                        type: "registrationId",
                                        id: n.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "")
                                    })]).then(function() {
                                        return S.default.debug("Attempting to retrieve the notification again now with a recovered user ID."), f.default.get("players/" + e + "/chromeweb_notification")
                                    })) : Promise.reject("Recovered user ID was null. Unsubscribing from push notifications.")
                                })
                            }).catch(function(t) {
                                return S.default.debug("Unsuccessfully attempted to recover OneSignal user ID:", t), self.registration.pushManager.getSubscription().then(function(e) {
                                    return e.unsubscribe()
                                }).then(function(t) {
                                    S.default.debug("Unsubscribed from push notifications result:", t), e.UNSUBSCRIBED_FROM_NOTIFICATIONS = !0
                                })
                            }))
                        }).then(function(e) {
                            for (var i = 0; i < e.length; i++) n.push(JSON.parse(e[i]));
                            0 == n.length && S.default.warn("OneSignal Worker: Received a GCM push signal, but there were no messages to retrieve. Are you using the wrong API URL?", l.default.getOneSignalApiUrl().toString()), t(n)
                        })
                    })
                }, e
            }();
        t.ServiceWorker = y, "undefined" == typeof self && void 0 !== e ? e.OneSignalWorker = y : self.OneSignalWorker = y, "undefined" != typeof self && y.run()
    }).call(this, n(34))
}, function(e, t, n) {
    "use strict";
    var i, r, o;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.ConfigIntegrationKind || (t.ConfigIntegrationKind = {})).TypicalSite = "typical", i.WordPress = "wordpress", i.Shopify = "shopify", i.Blogger = "blogger", i.Magento = "magento", i.Drupal = "drupal", i.SquareSpace = "squarespace", i.Joomla = "joomla", i.Weebly = "weebly", i.Wix = "wix", i.Custom = "custom", (r = t.NotificationClickMatchBehavior || (t.NotificationClickMatchBehavior = {})).Exact = "exact", r.Origin = "origin", (o = t.NotificationClickActionBehavior || (t.NotificationClickActionBehavior = {})).Navigate = "navigate", o.Focus = "focus"
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = o(n(7)),
        u = n(13),
        c = o(n(8)),
        l = n(16),
        d = o(n(0)),
        f = function() {
            function e() {}
            return Object.defineProperty(e, "STORED_PERMISSION_KEY", {
                get: function() {
                    return "storedNotificationPermission"
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getNotificationPermission = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.getReportedNotificationPermission(e)];
                            case 1:
                                return t = n.sent(), [4, this.isPermissionEnvironmentAmbiguous(t)];
                            case 2:
                                return n.sent() ? [2, this.getInterpretedAmbiguousPermission(t)] : [2, t]
                        }
                    })
                })
            }, e.prototype.getReportedNotificationPermission = function(e) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return a.default.safari ? [2, this.getSafariNotificationPermission(e)] : [3, 1];
                            case 1:
                                return s.isUsingSubscriptionWorkaround() ? [4, s.awaitOneSignalInitAndSupported()] : [3, 3];
                            case 2:
                                return t.sent(), [2, this.getOneSignalSubdomainNotificationPermission(e)];
                            case 3:
                                return [2, this.getW3cNotificationPermission()]
                        }
                    })
                })
            }, e.prototype.getSafariNotificationPermission = function(e) {
                if (e) return window.safari.pushNotification.permission(e).permission;
                throw new u.InvalidArgumentError("safariWebId", u.InvalidArgumentReason.Empty)
            }, e.prototype.getW3cNotificationPermission = function() {
                return window.Notification.permission
            }, e.prototype.getOneSignalSubdomainNotificationPermission = function(e) {
                return new Promise(function(t) {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {
                        safariWebId: e
                    }, function(e) {
                        var n = e.data;
                        t(n)
                    })
                })
            }, e.prototype.isPermissionEnvironmentAmbiguous = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, i;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = s.redetectBrowserUserAgent(), (n = !t.safari && !t.firefox && e === l.NotificationPermission.Denied) ? (i = this.isCurrentFrameContextCrossOrigin()) ? [3, 2] : [4, d.default.isFrameContextInsecure()] : [3, 3];
                            case 1:
                                i = r.sent(), r.label = 2;
                            case 2:
                                n = i || s.isUsingSubscriptionWorkaround() || d.default.isInsecureOrigin(), r.label = 3;
                            case 3:
                                return [2, n]
                        }
                    })
                })
            }, e.prototype.isCurrentFrameContextCrossOrigin = function() {
                var e;
                try {
                    e = window.top.location.origin
                } catch (e) {
                    return !0
                }
                return window.top !== window && e !== window.location.origin
            }, e.prototype.getInterpretedAmbiguousPermission = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                switch (e) {
                                    case l.NotificationPermission.Denied:
                                        return [3, 1]
                                }
                                return [3, 3];
                            case 1:
                                return [4, this.getStoredPermission()];
                            case 2:
                                return (t = n.sent()) ? [2, t] : [2, l.NotificationPermission.Default];
                            case 3:
                                return [2, e]
                        }
                    })
                })
            }, e.prototype.getStoredPermission = function() {
                return i(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, c.default.get("Options", e.STORED_PERMISSION_KEY)];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                })
            }, e.prototype.setStoredPermission = function(t) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, c.default.put("Options", {
                                    key: e.STORED_PERMISSION_KEY,
                                    value: t
                                })];
                            case 1:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.prototype.updateStoredPermission = function() {
                return i(this, void 0, void 0, function() {
                    var e;
                    return r(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.getNotificationPermission(null)];
                            case 1:
                                return e = t.sent(), [4, this.setStoredPermission(e)];
                            case 2:
                                return [2, t.sent()]
                        }
                    })
                })
            }, e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0)),
        o = n(3),
        s = i(n(2)),
        a = function() {
            function e() {}
            return e.prototype.getPageViewCount = function() {
                try {
                    var t = sessionStorage.getItem(e.SESSION_STORAGE_KEY_NAME),
                        n = parseInt(t);
                    return isNaN(n) ? 0 : n
                } catch (e) {
                    return 0
                }
            }, e.prototype.setPageViewCount = function(t) {
                try {
                    sessionStorage.setItem(e.SESSION_STORAGE_KEY_NAME, t.toString()), r.default.getWindowEnv() === o.WindowEnvironmentKind.OneSignalSubscriptionPopup && OneSignal.subscriptionPopup && OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT)
                } catch (e) {}
            }, e.prototype.incrementPageViewCount = function() {
                if (!this.incrementedPageViewCount) {
                    var e = this.getPageViewCount() + 1;
                    this.setPageViewCount(e), s.default.debug("Incremented page view count to " + e + "."), this.incrementedPageViewCount = !0
                }
            }, e.prototype.simulatePageNavigationOrRefresh = function() {
                this.incrementedPageViewCount = !1
            }, e.prototype.isFirstPageView = function() {
                return 1 === this.getPageViewCount()
            }, e
        }();
    t.SessionManager = a, a.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count"
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0)),
        o = function() {
            function e(e, t) {
                this.context = e, this.isFeatureEnabled = t
            }
            return Object.defineProperty(e.prototype, "PUBLISHER_ID", {
                get: function() {
                    try {
                        return "os!" + this.context.appConfig.appId.replace(/-/g, "").substr(0, 15).toLowerCase()
                    } catch (e) {
                        return "os!os"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getFrameOrigin = function() {
                return !!this.context.appConfig.subdomain ? new URL("https://" + this.context.appConfig.subdomain + ".os.tc") : new URL(r.default.getOneSignalApiUrl().origin)
            }, e.prototype.install = function() {
                if (window.top === window) {
                    var e = this.getFrameOrigin();
                    this.isFeatureEnabled ? (e.pathname = "/webPushAnalytics", e.search = "sync=true&appId=" + this.PUBLISHER_ID) : e.pathname = "/webPushAnalytics";
                    var t = document.createElement("iframe");
                    t.style.display = "none", t.src = e.href;
                    var n = {
                        promise: void 0,
                        resolver: void 0,
                        rejector: void 0
                    };
                    return n.promise = new Promise(function(e, t) {
                        n.resolver = e, n.rejector = t
                    }), document.body.appendChild(t), t.onload = n.resolver, t.onerror = n.rejector, n.promise
                }
            }, e
        }();
    t.default = o
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(7)),
        a = n(12),
        u = o(n(11)),
        c = n(11),
        l = n(19),
        d = o(n(29)),
        f = n(29),
        p = o(n(5)),
        h = n(16),
        g = n(28),
        b = n(14),
        m = n(3),
        v = o(n(10)),
        S = o(n(8)),
        y = o(n(0)),
        w = o(n(9)),
        O = n(27),
        _ = n(21),
        E = n(18),
        P = n(17),
        I = o(n(2)),
        M = n(1),
        C = function() {
            function e(e, t) {
                this.context = e, this.config = t
            }
            return e.isSafari = function() {
                return s.default.safari
            }, e.prototype.subscribe = function(t) {
                return i(this, void 0, void 0, function() {
                    var n, i;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                switch (n = y.default.getWindowEnv()) {
                                    case m.WindowEnvironmentKind.CustomIframe:
                                    case m.WindowEnvironmentKind.Unknown:
                                    case m.WindowEnvironmentKind.OneSignalProxyFrame:
                                        throw new a.InvalidStateError(a.InvalidStateReason.UnsupportedEnvironment)
                                }
                                switch (n) {
                                    case m.WindowEnvironmentKind.ServiceWorker:
                                        return [3, 1];
                                    case m.WindowEnvironmentKind.Host:
                                    case m.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                    case m.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                        return [3, 3]
                                }
                                return [3, 9];
                            case 1:
                                return [4, this.subscribeFcmFromWorker(t)];
                            case 2:
                                return i = r.sent(), [3, 9];
                            case 3:
                                return [4, OneSignal.getNotificationPermission()];
                            case 4:
                                if (r.sent() === h.NotificationPermission.Denied) throw new u.default(c.PushPermissionNotGrantedErrorReason.Blocked);
                                return e.isSafari() ? [4, this.subscribeSafari()] : [3, 6];
                            case 5:
                                return i = r.sent(), [3, 8];
                            case 6:
                                return [4, this.subscribeFcmFromPage(t)];
                            case 7:
                                i = r.sent(), r.label = 8;
                            case 8:
                                return [3, 9];
                            case 9:
                                return [2, i]
                        }
                    })
                })
            }, e.prototype.registerSubscription = function(t, n) {
                return i(this, void 0, void 0, function() {
                    var i, o, s, a, u;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t && (t = g.RawPushSubscription.deserialize(t)), (i = _.PushDeviceRecord.createFromPushSubscription(this.config.appId, t, n)).appId = this.config.appId, i.subscriptionState = b.SubscriptionStateKind.Subscribed, [4, this.isAlreadyRegisteredWithOneSignal()];
                            case 1:
                                return r.sent() ? [4, S.default.getSubscription()] : [3, 6];
                            case 2:
                                return s = r.sent().deviceId, t && !t.isNewSubscription() ? [3, 4] : [4, v.default.updateUserSession(s, i)];
                            case 3:
                                return o = r.sent(), I.default.info("Updated the subscriber's OneSignal session:", i), [3, 5];
                            case 4:
                                o = s, I.default.debug("The existing push subscription was resubscribed, but not registering with OneSignal because the new subscription is identical."), r.label = 5;
                            case 5:
                                return [3, 8];
                            case 6:
                                return [4, v.default.createUser(i)];
                            case 7:
                                a = r.sent(), o = a, I.default.info("Subscribed to web push and registered with OneSignal:", i), r.label = 8;
                            case 8:
                                return [4, this.associateSubscriptionWithEmail(o)];
                            case 9:
                                return r.sent(), [4, S.default.getSubscription()];
                            case 10:
                                return (u = r.sent()).deviceId = o, u.optedOut = !1, t ? e.isSafari() ? u.subscriptionToken = t.safariDeviceToken : u.subscriptionToken = t.w3cEndpoint.toString() : u.subscriptionToken = null, [4, S.default.setSubscription(u)];
                            case 11:
                                return r.sent(), y.default.getWindowEnv() !== m.WindowEnvironmentKind.ServiceWorker && p.default.trigger(OneSignal.EVENTS.REGISTERED), "undefined" != typeof OneSignal && (OneSignal._sessionInitAlreadyRunning = !1), [2, u]
                        }
                    })
                })
            }, e.prototype.requestPresubscribeNotificationPermission = function() {
                return i(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        return [2, e.requestNotificationPermission()]
                    })
                })
            }, e.prototype.unsubscribe = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (0 !== e) return [3, 1];
                                throw new w.default;
                            case 1:
                                return 1 !== e ? [3, 7] : y.default.getWindowEnv() !== m.WindowEnvironmentKind.ServiceWorker ? [3, 5] : [4, S.default.getSubscription()];
                            case 2:
                                return t = n.sent().deviceId, [4, v.default.updatePlayer(this.context.appConfig.appId, t, {
                                    notification_types: b.SubscriptionStateKind.MutedByApi
                                })];
                            case 3:
                                return n.sent(), [4, S.default.put("Options", {
                                    key: "optedOut",
                                    value: !0
                                })];
                            case 4:
                                return n.sent(), [3, 6];
                            case 5:
                                throw new w.default;
                            case 6:
                                return [3, 8];
                            case 7:
                                throw new w.default;
                            case 8:
                                return [2]
                        }
                    })
                })
            }, e.requestNotificationPermission = function() {
                return new Promise(function(e) {
                    return window.Notification.requestPermission(e)
                })
            }, e.prototype.associateSubscriptionWithEmail = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, S.default.getEmailProfile()];
                            case 1:
                                return (t = n.sent()).emailId ? [4, v.default.updatePlayer(this.config.appId, e, {
                                    parent_player_id: t.emailId,
                                    email: t.emailAddress
                                })] : [2];
                            case 2:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.prototype.isAlreadyRegisteredWithOneSignal = function() {
                return i(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, S.default.getSubscription()];
                            case 1:
                                return [2, !!e.sent().deviceId]
                        }
                    })
                })
            }, e.prototype.subscribeSafariPromptPermission = function() {
                var e = this;
                return new Promise(function(t) {
                    window.safari.pushNotification.requestPermission(y.default.getOneSignalApiUrl().toString() + "/safari", e.config.safariWebId, {
                        app_id: e.config.appId
                    }, function(e) {
                        e.deviceToken ? t(e.deviceToken.toLowerCase()) : t(null)
                    })
                })
            }, e.prototype.subscribeSafari = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (e = new g.RawPushSubscription, !this.config.safariWebId) throw new l.SdkInitError(l.SdkInitErrorKind.MissingSafariWebId);
                                return t = window.safari.pushNotification.permission(this.config.safariWebId).deviceToken, e.existingSafariDeviceToken = t, t || p.default.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED), [4, this.subscribeSafariPromptPermission()];
                            case 1:
                                if (n = i.sent(), M.triggerNotificationPermissionChanged(), !n) throw new d.default(f.SubscriptionErrorReason.InvalidSafariSetup);
                                return e.setFromSafariSubscription(n), [2, e]
                        }
                    })
                })
            }, e.prototype.subscribeFcmFromPage = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return y.default.getWindowEnv() === m.WindowEnvironmentKind.ServiceWorker || window.Notification.permission !== h.NotificationPermission.Default ? [3, 2] : (p.default.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED), [4, this.requestPresubscribeNotificationPermission()]);
                            case 1:
                                switch ((t = i.sent()) === h.NotificationPermission.Default && M.triggerNotificationPermissionChanged(!0), t) {
                                    case h.NotificationPermission.Default:
                                        throw I.default.debug("Exiting subscription and not registering worker because the permission was dismissed."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new u.default(c.PushPermissionNotGrantedErrorReason.Dismissed);
                                    case h.NotificationPermission.Denied:
                                        throw I.default.debug("Exiting subscription and not registering worker because the permission was blocked."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new u.default(c.PushPermissionNotGrantedErrorReason.Blocked)
                                }
                                i.label = 2;
                            case 2:
                                return [4, this.context.serviceWorkerManager.shouldInstallWorker()];
                            case 3:
                                return i.sent() ? [4, this.context.serviceWorkerManager.installWorker()] : [3, 5];
                            case 4:
                                i.sent(), i.label = 5;
                            case 5:
                                return I.default.debug("Waiting for the service worker to activate..."), [4, navigator.serviceWorker.ready];
                            case 6:
                                return n = i.sent(), I.default.debug("Service worker is ready to continue subscribing."), [4, this.subscribeFcmVapidOrLegacyKey(n.pushManager, e)];
                            case 7:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.subscribeFcmFromWorker = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!self.registration.active && !s.default.firefox) throw new a.InvalidStateError(a.InvalidStateReason.ServiceWorkerNotActivated);
                                return [4, self.registration.pushManager.permissionState({
                                    userVisibleOnly: !0
                                })];
                            case 1:
                                if ("denied" === (t = n.sent())) throw new u.default(c.PushPermissionNotGrantedErrorReason.Blocked);
                                if ("prompt" === t) throw new u.default(c.PushPermissionNotGrantedErrorReason.Default);
                                return [4, this.subscribeFcmVapidOrLegacyKey(self.registration.pushManager, e)];
                            case 2:
                                return [2, n.sent()]
                        }
                    })
                })
            }, e.prototype.getVapidKeyForBrowser = function() {
                var e = void 0;
                return (e = s.default.firefox ? this.config.onesignalVapidPublicKey : this.config.vapidPublicKey) ? O.base64ToUint8Array(e).buffer : void 0
            }, e.prototype.subscribeFcmVapidOrLegacyKey = function(e, t) {
                return i(this, void 0, void 0, function() {
                    var n, i, o, s, a, u;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = {
                                    userVisibleOnly: !0,
                                    applicationServerKey: this.getVapidKeyForBrowser() ? this.getVapidKeyForBrowser() : void 0
                                }, [4, e.getSubscription()];
                            case 1:
                                switch (o = r.sent(), s = !o, t) {
                                    case 0:
                                        return [3, 2];
                                    case 1:
                                        return [3, 6]
                                }
                                return [3, 9];
                            case 2:
                                return o && o.options ? (I.default.debug("[Subscription Manager] An existing push subscription exists and options is not null. Using existing options to resubscribe."), n = o.options, s = !1, [3, 5]) : [3, 3];
                            case 3:
                                return !o || o.options ? [3, 5] : (I.default.debug("[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."), [4, o.unsubscribe()]);
                            case 4:
                                r.sent(), s = !1, r.label = 5;
                            case 5:
                                return [3, 9];
                            case 6:
                                return o ? (I.default.debug("[Subscription Manager] Unsubscribing existing push subscription."), [4, o.unsubscribe()]) : [3, 8];
                            case 7:
                                r.sent(), r.label = 8;
                            case 8:
                                return s = !0, [3, 9];
                            case 9:
                                return I.default.debug("[Subscription Manager] Subscribing to web push with these options:", n), [4, e.subscribe(n)];
                            case 10:
                                return i = r.sent(), s ? [4, S.default.getSubscription()] : [3, 13];
                            case 11:
                                return (a = r.sent()).createdAt = (new Date).getTime(), a.expirationTime = i.expirationTime, [4, S.default.setSubscription(a)];
                            case 12:
                                r.sent(), r.label = 13;
                            case 13:
                                return u = g.RawPushSubscription.setFromW3cSubscription(i), o && (u.existingW3cPushSubscription = g.RawPushSubscription.setFromW3cSubscription(o)), [2, u]
                        }
                    })
                })
            }, e.prototype.isSubscriptionExpiring = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n, i;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, y.default.getIntegration()];
                            case 1:
                                switch (e = r.sent(), t = y.default.getWindowEnv(), e) {
                                    case P.IntegrationKind.Secure:
                                        return [3, 2];
                                    case P.IntegrationKind.SecureProxy:
                                        return [3, 4];
                                    case P.IntegrationKind.InsecureProxy:
                                        return [3, 10]
                                }
                                return [3, 12];
                            case 2:
                                return [4, this.isSubscriptionExpiringForSecureIntegration()];
                            case 3:
                                return [2, r.sent()];
                            case 4:
                                if (t !== m.WindowEnvironmentKind.Host) return [3, 8];
                                if (n = OneSignal.proxyFrameHost) return [3, 5];
                                throw new a.InvalidStateError(a.InvalidStateReason.NoProxyFrame);
                            case 5:
                                return [4, n.runCommand(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE)];
                            case 6:
                                return [2, r.sent()];
                            case 7:
                                return [3, 10];
                            case 8:
                                return [4, this.isSubscriptionExpiringForSecureIntegration()];
                            case 9:
                                return [2, r.sent()];
                            case 10:
                                return [4, S.default.getSubscription()];
                            case 11:
                                return (i = r.sent().expirationTime) ? [2, (new Date).getTime() >= i] : [2, !1];
                            case 12:
                                return [2]
                        }
                    })
                })
            }, e.prototype.isSubscriptionExpiringForSecureIntegration = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n, i, o;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.context.serviceWorkerManager.getActiveState()];
                            case 1:
                                return (e = r.sent()) !== E.ServiceWorkerActiveState.WorkerA && e !== E.ServiceWorkerActiveState.WorkerB ? [2, !1] : [4, navigator.serviceWorker.getRegistration()];
                            case 2:
                                return [4, r.sent().pushManager.getSubscription()];
                            case 3:
                                return (t = r.sent()) && t.expirationTime ? [4, S.default.getSubscription()] : [2, !1];
                            case 4:
                                return (n = r.sent().createdAt) || (i = 31536e6, n = (new Date).getTime() + i), o = n + (t.expirationTime - n) / 2, [2, t.expirationTime && ((new Date).getTime() >= t.expirationTime || (new Date).getTime() >= o)]
                        }
                    })
                })
            }, e.prototype.getSubscriptionState = function() {
                return i(this, void 0, void 0, function() {
                    var t, n, i, o;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (e.isSafari()) return [2, this.getSubscriptionStateForSecure()];
                                switch (t = y.default.getWindowEnv(), t) {
                                    case m.WindowEnvironmentKind.ServiceWorker:
                                        return [3, 1]
                                }
                                return [3, 4];
                            case 1:
                                return [4, self.registration.pushManager.getSubscription()];
                            case 2:
                                return n = r.sent(), [4, S.default.getSubscription()];
                            case 3:
                                return i = r.sent().optedOut, [2, {
                                    subscribed: !!n,
                                    optedOut: i
                                }];
                            case 4:
                                return [4, y.default.getIntegration()];
                            case 5:
                                switch (o = r.sent(), o) {
                                    case P.IntegrationKind.Secure:
                                        return [3, 6];
                                    case P.IntegrationKind.SecureProxy:
                                        return [3, 7];
                                    case P.IntegrationKind.InsecureProxy:
                                        return [3, 11]
                                }
                                return [3, 13];
                            case 6:
                                return [2, this.getSubscriptionStateForSecure()];
                            case 7:
                                switch (t) {
                                    case m.WindowEnvironmentKind.OneSignalProxyFrame:
                                    case m.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                    case m.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                        return [3, 8]
                                }
                                return [3, 9];
                            case 8:
                                return [2, this.getSubscriptionStateForSecure()];
                            case 9:
                                return [4, OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE)];
                            case 10:
                                return [2, r.sent()];
                            case 11:
                                return [4, this.getSubscriptionStateForInsecure()];
                            case 12:
                                return [2, r.sent()];
                            case 13:
                                throw new a.InvalidStateError(a.InvalidStateReason.UnsupportedEnvironment)
                        }
                    })
                })
            }, e.prototype.getSubscriptionStateForSecure = function() {
                return i(this, void 0, void 0, function() {
                    var t, n, i, o, s, a, u, c, l;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, S.default.getSubscription()];
                            case 1:
                                return t = r.sent(), n = t.deviceId, t.subscriptionToken, i = t.optedOut, e.isSafari() ? (o = window.safari.pushNotification.permission(this.config.safariWebId), [2, {
                                    subscribed: !("granted" !== o.permission || !o.deviceToken || !n),
                                    optedOut: i
                                }]) : [4, this.context.serviceWorkerManager.getActiveState()];
                            case 2:
                                return s = r.sent(), [4, navigator.serviceWorker.getRegistration()];
                            case 3:
                                return a = r.sent(), [4, this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId)];
                            case 4:
                                return u = r.sent(), c = s === E.ServiceWorkerActiveState.WorkerA || s === E.ServiceWorkerActiveState.WorkerB, a ? [4, a.pushManager.getSubscription()] : [2, {
                                    subscribed: !1,
                                    optedOut: i
                                }];
                            case 5:
                                return l = r.sent(), [2, {
                                    subscribed: !!(l && n && u === h.NotificationPermission.Granted && c),
                                    optedOut: i
                                }]
                        }
                    })
                })
            }, e.prototype.getSubscriptionStateForInsecure = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n, i, o;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, S.default.getSubscription()];
                            case 1:
                                return e = r.sent(), t = e.deviceId, n = e.subscriptionToken, i = e.optedOut, [4, this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId)];
                            case 2:
                                return o = r.sent(), [2, {
                                    subscribed: !(!t || !n || o !== h.NotificationPermission.Granted),
                                    optedOut: i
                                }]
                        }
                    })
                })
            }, e
        }();
    t.SubscriptionManager = C
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(39)),
        u = s(n(30)),
        c = s(n(26)),
        l = function() {
            function e(e) {
                this.options = {
                    appId: e.appId,
                    subdomain: e.subdomainName,
                    origin: e.origin,
                    metrics: {
                        enable: !1,
                        mixpanelReportingToken: null
                    }
                }
            }
            return e.prototype.initialize = function() {
                return r(this, void 0, void 0, function() {
                    var e, t, n = this;
                    return o(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return (window.opener || window.parent) == window ? (document.write("<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and must be opened as a result of a subscription call.</span>"), [2, Promise.resolve()]) : ((e = i({}, this.options)).appId = e.appId, e.subdomainName = e.subdomain, e.origin = e.origin, OneSignal.config = e || {}, [4, (new c.default).getAppConfig(e)]);
                            case 1:
                                return t = r.sent(), OneSignal.context = new u.default(t), OneSignal.context.workerMessenger.listen(!0), OneSignal.initialized = !0, this.loadPromise = {}, this.loadPromise.promise = new Promise(function(e, t) {
                                    n.loadPromise.resolver = e, n.loadPromise.rejector = t
                                }), this.establishCrossOriginMessaging(), [2, this.loadPromise.promise]
                        }
                    })
                })
            }, e.prototype.establishCrossOriginMessaging = function() {}, e.prototype.dispose = function() {
                this.messenger.destroy()
            }, e.prototype.finishInitialization = function() {
                this.loadPromise.resolver()
            }, e.prototype.subscribe = function() {
                return r(this, void 0, void 0, function() {
                    var e, t;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return e = n.sent(), t = opener || parent, e ? t && window.close() : a.default.registerForPush(), [2]
                        }
                    })
                })
            }, e
        }();
    t.default = l
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = i(n(5)),
        s = i(n(2)),
        a = function() {
            function e(e, t, n, i, r, o, s) {
                void 0 === i && (i = "shown"), void 0 === r && (r = ["opacity", "transform"]), void 0 === s && (s = 500), this.selector = e, this.showClass = t, this.hideClass = n, this.state = i, this.targetTransitionEvents = r, this.nestedContentSelector = o, this.transitionCheckTimeout = s
            }
            return e.prototype.show = function() {
                var t = this;
                return this.hidden ? new Promise(function(n) {
                    if (t.state = "showing", o.default.trigger(e.EVENTS.SHOWING, t), t.hideClass && r.removeCssClass(t.element, t.hideClass), t.showClass && r.addCssClass(t.element, t.showClass), 0 == t.targetTransitionEvents.length) return n(t);
                    var i = setTimeout(function() {
                        s.default.debug("Element did not completely show (state: " + t.state + ").")
                    }, t.transitionCheckTimeout);
                    r.once(t.element, "transitionend", function(s, a) {
                        if (s.target === t.element && r.contains(t.targetTransitionEvents, s.propertyName)) return clearTimeout(i), a(), t.state = "shown", o.default.trigger(e.EVENTS.SHOWN, t), n(t)
                    }, !0)
                }) : Promise.resolve(this)
            }, e.prototype.hide = function() {
                var t = this;
                return this.shown ? new Promise(function(n) {
                    if (t.state = "hiding", o.default.trigger(e.EVENTS.HIDING, t), t.showClass && r.removeCssClass(t.element, t.showClass), t.hideClass && r.addCssClass(t.element, t.hideClass), 0 == t.targetTransitionEvents.length) return n(t);
                    r.once(t.element, "transitionend", function(i, a) {
                        var u = setTimeout(function() {
                            s.default.debug("Element did not completely hide (state: " + t.state + ").")
                        }, t.transitionCheckTimeout);
                        if (i.target === t.element && r.contains(t.targetTransitionEvents, i.propertyName)) return clearTimeout(u), a(), t.state = "hidden", o.default.trigger(e.EVENTS.HIDDEN, t), n(t)
                    }, !0)
                }) : Promise.resolve(this)
            }, e.prototype.waitUntilShown = function() {
                var t = this;
                return "shown" === this.state ? Promise.resolve(this) : new Promise(function(n) {
                    OneSignal.once(e.EVENTS.SHOWN, function(e) {
                        if (e === t) return n(t)
                    }, !0)
                })
            }, e.prototype.waitUntilHidden = function() {
                var t = this;
                return "hidden" === this.state ? Promise.resolve(this) : new Promise(function(n) {
                    OneSignal.once(e.EVENTS.HIDDEN, function(e) {
                        if (e === t) return n(t)
                    }, !0)
                })
            }, Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        SHOWING: "animatedElementShowing",
                        SHOWN: "animatedElementShown",
                        HIDING: "animatedElementHiding",
                        HIDDEN: "animatedElementHidden"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "content", {
                get: function() {
                    return this.nestedContentSelector ? this.element.querySelector(this.nestedContentSelector).innerHTML : this.element.innerHTML
                },
                set: function(e) {
                    this.nestedContentSelector ? this.element.querySelector(this.nestedContentSelector).innerHTML = e : this.element.innerHTML = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "element", {
                get: function() {
                    return document.querySelector(this.selector)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "showing", {
                get: function() {
                    return "showing" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shown", {
                get: function() {
                    return "shown" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hiding", {
                get: function() {
                    return "hiding" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hidden", {
                get: function() {
                    return "hidden" === this.state
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.default = a
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(5)),
        u = n(1),
        c = s(n(52)),
        l = s(n(2)),
        d = function(e) {
            function t(t, n, i, r, o, s, a, u, c) {
                void 0 === s && (s = "shown"), void 0 === a && (a = "active"), void 0 === u && (u = ["opacity", "transform"]);
                var l = e.call(this, t, n, i, s, u) || this;
                return l.selector = t, l.showClass = n, l.hideClass = i, l.activeClass = r, l.inactiveClass = o, l.state = s, l.activeState = a, l.targetTransitionEvents = u, l.nestedContentSelector = c, l
            }
            return r(t, e), t.prototype.activate = function() {
                var e = this;
                return this.inactive && this.shown ? new Promise(function(n) {
                    if (e.activeState = "activating", a.default.trigger(t.EVENTS.ACTIVATING, e), e.inactiveClass && u.removeCssClass(e.element, e.inactiveClass), e.activeClass && u.addCssClass(e.element, e.activeClass), !e.shown) return l.default.debug("Ending activate() transition (alternative)."), e.activeState = "active", a.default.trigger(t.EVENTS.ACTIVE, e), n(e);
                    if (0 == e.targetTransitionEvents.length) return n(e);
                    var i = setTimeout(function() {
                        l.default.debug("Element did not completely activate (state: " + e.state + ", activeState: " + e.activeState + ").")
                    }, e.transitionCheckTimeout);
                    u.once(e.element, "transitionend", function(r, o) {
                        if (r.target === e.element && u.contains(e.targetTransitionEvents, r.propertyName)) return clearTimeout(i), o(), e.activeState = "active", a.default.trigger(t.EVENTS.ACTIVE, e), n(e)
                    }, !0)
                }) : Promise.resolve(this)
            }, t.prototype.inactivate = function() {
                var e = this;
                return this.active ? new Promise(function(n) {
                    if (e.activeState = "inactivating", a.default.trigger(t.EVENTS.INACTIVATING, e), e.activeClass && u.removeCssClass(e.element, e.activeClass), e.inactiveClass && u.addCssClass(e.element, e.inactiveClass), !e.shown) return e.activeState = "inactive", a.default.trigger(t.EVENTS.INACTIVE, e), n(e);
                    if (0 == e.targetTransitionEvents.length) return n(e);
                    var i = setTimeout(function() {
                        l.default.debug("Element did not completely inactivate (state: " + e.state + ", activeState: " + e.activeState + ").")
                    }, e.transitionCheckTimeout);
                    u.once(e.element, "transitionend", function(r, o) {
                        if (r.target === e.element && u.contains(e.targetTransitionEvents, r.propertyName)) return clearTimeout(i), o(), e.activeState = "inactive", a.default.trigger(t.EVENTS.INACTIVE, e), n(e)
                    }, !0)
                }) : Promise.resolve(this)
            }, t.prototype.waitUntilActive = function() {
                var e = this;
                return this.active ? Promise.resolve(this) : new Promise(function(n) {
                    OneSignal.once(t.EVENTS.ACTIVE, function(t) {
                        if (t === e) return n(e)
                    }, !0)
                })
            }, t.prototype.waitUntilInactive = function() {
                var e = this;
                return this.inactive ? Promise.resolve(this) : new Promise(function(n) {
                    OneSignal.once(t.EVENTS.INACTIVE, function(t) {
                        if (t === e) return n(e)
                    }, !0)
                })
            }, Object.defineProperty(t, "EVENTS", {
                get: function() {
                    return o({}, c.default.EVENTS, {
                        ACTIVATING: "activeAnimatedElementActivating",
                        ACTIVE: "activeAnimatedElementActive",
                        INACTIVATING: "activeAnimatedElementInactivating",
                        INACTIVE: "activeAnimatedElementInactive"
                    })
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "activating", {
                get: function() {
                    return "activating" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "active", {
                get: function() {
                    return "active" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "inactivating", {
                get: function() {
                    return "inactivating" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "inactive", {
                get: function() {
                    return "inactive" === this.activeState
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(c.default);
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.isLocalStorageSupported = function() {
            if ("undefined" == typeof localStorage) return !1;
            try {
                return localStorage.getItem("test"), !0
            } catch (e) {
                return !1
            }
        }, e.setItem = function(t, n, i) {
            if (e.isLocalStorageSupported()) {
                var r = void 0 !== i ? 60 * i * 1e3 : 0,
                    o = {
                        value: JSON.stringify(n),
                        timestamp: void 0 !== i ? (new Date).getTime() + r : void 0
                    };
                localStorage.setItem(t, JSON.stringify(o))
            }
        }, e.getItem = function(t) {
            if (!e.isLocalStorageSupported()) return null;
            var n, i = localStorage.getItem(t);
            try {
                n = JSON.parse(i)
            } catch (e) {
                return null
            }
            if (null === n) return null;
            if (n.timestamp && (new Date).getTime() >= n.timestamp) return localStorage.removeItem(t), null;
            var r = n.value;
            try {
                r = JSON.parse(n.value)
            } catch (e) {
                return r
            }
            return r
        }, e.removeItem = function(t) {
            if (!e.isLocalStorageSupported()) return null;
            localStorage.removeItem(t)
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), (i = t.DevicePlatformKind || (t.DevicePlatformKind = {})).Mobile = "mobile", i.Tablet = "tablet", i.Desktop = "desktop"
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6));
    (s = t.OneSignalApiErrorKind || (t.OneSignalApiErrorKind = {}))[s.MissingAppId = 0] = "MissingAppId";
    var u = function(e) {
        function n(n) {
            var i = this;
            switch (n) {
                case t.OneSignalApiErrorKind.MissingAppId:
                    i = e.call(this, "The API call is missing an app ID.") || this
            }
            return i
        }
        return r(n, e), n
    }(a.default);
    t.OneSignalApiError = u
}, function(e, t) {
    e.exports = function(e, t, r) {
        "function" == typeof t && (r = t, t = {});
        t || (t = {});
        var o, s, a = t.prefix || "__jp",
            u = t.name || a + n++,
            c = t.param || "callback",
            l = null != t.timeout ? t.timeout : 6e4,
            d = encodeURIComponent,
            f = document.getElementsByTagName("script")[0] || document.head;
        l && (s = setTimeout(function() {
            p(), r && r(new Error("Timeout"))
        }, l));

        function p() {
            o.parentNode && o.parentNode.removeChild(o), window[u] = i, s && clearTimeout(s)
        }
        return window[u] = function(e) {
                p(), r && r(null, e)
            }, e = (e += (~e.indexOf("?") ? "&" : "?") + c + "=" + d(u)).replace("?&", "?"), (o = document.createElement("script")).src = e, f.parentNode.insertBefore(o, f),
            function() {
                window[u] && p()
            }
    };
    var n = 0;

    function i() {}
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(5)),
        a = o(n(40)),
        u = o(n(10)),
        c = o(n(8)),
        l = n(1),
        d = o(n(2)),
        f = function() {
            function e() {}
            return e.onNotificationPermissionChange = function() {
                e.checkAndTriggerSubscriptionChanged()
            }, e.onInternalSubscriptionSet = function(e) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        return a.default.put("subscription.optedOut", e), [2]
                    })
                })
            }, e.checkAndTriggerSubscriptionChanged = function() {
                return i(this, void 0, void 0, function() {
                    var t, n, i;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return l.logMethodCall("checkAndTriggerSubscriptionChanged"), [4, OneSignal.context.subscriptionManager.getSubscriptionState()];
                            case 1:
                                return t = r.sent(), [4, c.default.getAppState()];
                            case 2:
                                return n = r.sent(), i = n.lastKnownPushEnabled, null === i || t.subscribed !== i ? (d.default.info("The user's subscription state changed from " + (null === i ? "(not stored)" : i) + " âŸ¶ " + t.subscribed), n.lastKnownPushEnabled = t.subscribed, [4, c.default.setAppState(n)]) : [2];
                            case 3:
                                return r.sent(), e.triggerSubscriptionChanged(t.subscribed), [2]
                        }
                    })
                })
            }, e._onSubscriptionChanged = function(t) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        return e.onSubscriptionChanged_showWelcomeNotification(t), e.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(t), [2]
                    })
                })
            }, e.onSubscriptionChanged_showWelcomeNotification = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, i, o, a, f, p, h;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return OneSignal.__doNotShowWelcomeNotification ? (d.default.debug("Not showing welcome notification because user has previously subscribed."), [2]) : !0 !== e ? [3, 3] : [4, c.default.getSubscription()];
                            case 1:
                                return t = r.sent().deviceId, [4, c.default.getAppConfig()];
                            case 2:
                                n = r.sent().appId, i = OneSignal.config.userConfig.welcomeNotification, o = void 0 !== i && !0 === i.disable, a = void 0 !== i && void 0 !== i.title && null !== i.title ? i.title : "", f = void 0 !== i && void 0 !== i.message && null !== i.message && i.message.length > 0 ? i.message : "Thanks for subscribing!", p = new URL(location.href).origin + "?_osp=do_not_open", h = i && i.url && i.url.length > 0 ? i.url : p, a = l.decodeHtmlEntities(a), f = l.decodeHtmlEntities(f), o || (d.default.debug("Sending welcome notification."), u.default.sendNotification(n, [t], {
                                    en: a
                                }, {
                                    en: f
                                }, h, null, {
                                    __isOneSignalWelcomeNotification: !0
                                }, void 0), s.default.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                                    title: a,
                                    message: f,
                                    url: h
                                })), r.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate = function(e) {
                return i(this, void 0, void 0, function() {
                    var e;
                    return r(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return (e = OneSignal.config.userConfig.notifyButton.displayPredicate) && "function" == typeof e && OneSignal.notifyButton ? [4, e()] : [3, 2];
                            case 1:
                                !1 !== t.sent() ? (d.default.debug("Showing notify button because display predicate returned true."), OneSignal.notifyButton.launcher.show()) : (d.default.debug("Hiding notify button because display predicate returned false."), OneSignal.notifyButton.launcher.hide()), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, e.triggerSubscriptionChanged = function(e) {
                s.default.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e)
            }, e.fireStoredNotificationClicks = function(e) {
                return void 0 === e && (e = document.URL), i(this, void 0, void 0, function() {
                    function t(e) {
                        return i(this, void 0, void 0, function() {
                            var t, n, i;
                            return r(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, c.default.getAppState()];
                                    case 1:
                                        return (t = r.sent()).clickedNotifications[e.url] = null, [4, c.default.setAppState(t)];
                                    case 2:
                                        return r.sent(), n = e.data, (i = e.timestamp) && (Date.now() - i) / 1e3 / 60 > 5 ? [2] : (s.default.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, n), [2])
                                }
                            })
                        })
                    }
                    var n, o, a, u, l, d;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, c.default.getAppState()];
                            case 1:
                                return n = i.sent(), [4, c.default.get("Options", "notificationClickHandlerMatch")];
                            case 2:
                                if ("origin" !== i.sent()) return [3, 7];
                                o = 0, a = Object.keys(n.clickedNotifications), i.label = 3;
                            case 3:
                                return o < a.length ? (u = a[o], new URL(u).origin !== location.origin ? [3, 5] : [4, t(n.clickedNotifications[u])]) : [3, 6];
                            case 4:
                                i.sent(), i.label = 5;
                            case 5:
                                return o++, [3, 3];
                            case 6:
                                return [3, 11];
                            case 7:
                                return (l = n.clickedNotifications[e]) ? [4, t(l)] : [3, 9];
                            case 8:
                                return i.sent(), [3, 11];
                            case 9:
                                return l || !e.endsWith("/") ? [3, 11] : (d = e.substring(0, e.length - 1), (l = n.clickedNotifications[d]) ? [4, t(l)] : [3, 11]);
                            case 10:
                                i.sent(), i.label = 11;
                            case 11:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        return function() {}
    }();
    t.ServiceWorkerState = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        return function() {}
    }();
    t.AppState = i
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var TimeoutError = function(e) {
        function TimeoutError(t) {
            void 0 === t && (t = "The asynchronous operation has timed out.");
            var n = e.call(this, t) || this;
            return n.message = t, n
        }
        return r(TimeoutError, e), TimeoutError
    }(o(n(6)).default);
    t.default = TimeoutError
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(0)),
        a = o(n(8)),
        u = o(n(54)),
        c = o(n(2)),
        l = n(1),
        d = function() {
            function e() {}
            return e.markHttpsNativePromptDismissed = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return l.isUsingSubscriptionWorkaround() ? [4, new Promise(function(e, t) {
                                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, {}, function(n) {
                                        n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t()
                                    })
                                })] : [3, 2];
                            case 1:
                                i.sent(), i.label = 2;
                            case 2:
                                return [4, a.default.get("Options", "promptDismissCount")];
                            case 3:
                                return (e = i.sent()) || (e = 0), l.isUsingSubscriptionWorkaround() || (e += 1), t = 3, 2 == e ? t = 7 : e > 2 && (t = 30), c.default.debug("(" + s.default.getWindowEnv().toString() + ") OneSignal: User dismissed the native notification prompt; reprompt after " + t + " days."), [4, a.default.put("Options", {
                                    key: "promptDismissCount",
                                    value: e
                                })];
                            case 4:
                                return i.sent(), n = 24 * t * 60, [2, u.default.setItem("onesignal-notification-prompt", "dismissed", n)]
                        }
                    })
                })
            }, e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = o(n(52)),
        u = o(n(37)),
        c = o(n(2)),
        l = function(e) {
            function t(t) {
                var n = e.call(this, ".onesignal-bell-launcher-message", "onesignal-bell-launcher-message-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-message-body") || this;
                return n.bell = t, n.contentType = "", n.queued = [], n
            }
            return r(t, e), Object.defineProperty(t, "TIMEOUT", {
                get: function() {
                    return 2500
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "TYPES", {
                get: function() {
                    return {
                        TIP: "tip",
                        MESSAGE: "message",
                        QUEUED: "queued"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.display = function(e, t, n) {
                var i = this;
                return void 0 === n && (n = 0), c.default.debug("Calling %cdisplay(" + e + ", " + t + ", " + n + ").", s.getConsoleStyle("code")), (this.shown ? this.hide() : s.nothing()).then(function() {
                    i.content = s.decodeHtmlEntities(t), i.contentType = e
                }).then(function() {
                    return i.show()
                }).then(function() {
                    return s.delay(n)
                }).then(function() {
                    return i.hide()
                }).then(function() {
                    i.content = i.getTipForState(), i.contentType = "tip"
                })
            }, t.prototype.getTipForState = function() {
                return this.bell.state === u.default.STATES.UNSUBSCRIBED ? this.bell.text["tip.state.unsubscribed"] : this.bell.state === u.default.STATES.SUBSCRIBED ? this.bell.text["tip.state.subscribed"] : this.bell.state === u.default.STATES.BLOCKED ? this.bell.text["tip.state.blocked"] : void 0
            }, t.prototype.enqueue = function(e) {
                var t = this;
                return this.queued.push(s.decodeHtmlEntities(e)), new Promise(function(e) {
                    t.bell.badge.shown ? t.bell.badge.hide().then(function() {
                        return t.bell.badge.increment()
                    }).then(function() {
                        return t.bell.badge.show()
                    }).then(e) : (t.bell.badge.increment(), t.bell.initialized ? t.bell.badge.show().then(e) : e())
                })
            }, t.prototype.dequeue = function(e) {
                var t = this,
                    n = this.queued.pop(e);
                return new Promise(function(e) {
                    t.bell.badge.shown ? t.bell.badge.hide().then(function() {
                        return t.bell.badge.decrement()
                    }).then(function(e) {
                        return e > 0 ? t.bell.badge.show() : Promise.resolve(t)
                    }).then(e(n)) : (t.bell.badge.decrement(), e(n))
                })
            }, t
        }(a.default);
    t.default = l
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(7)),
        u = s(n(68)),
        c = n(12),
        l = s(n(67)),
        d = s(n(5)),
        f = s(n(40)),
        p = n(16),
        h = s(n(0)),
        g = n(3),
        b = s(n(82)),
        m = s(n(8)),
        v = n(1),
        S = s(n(23)),
        y = s(n(39)),
        w = n(19),
        O = s(n(10)),
        _ = n(15),
        E = n(38),
        P = s(n(11)),
        I = n(21),
        M = n(33),
        C = n(17),
        k = n(25),
        T = s(n(2)),
        N = s(n(4)),
        A = s(n(37)),
        x = function() {
            function e() {}
            return e.storeInitialValues = function() {
                return r(this, void 0, void 0, function() {
                    var e, t, n;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return e = i.sent(), [4, OneSignal.getNotificationPermission()];
                            case 2:
                                return t = i.sent(), [4, OneSignal.isOptedOut()];
                            case 3:
                                return n = i.sent(), f.default.put("subscription.optedOut", n), [4, m.default.put("Options", {
                                    key: "isPushEnabled",
                                    value: e
                                })];
                            case 4:
                                return i.sent(), [4, m.default.put("Options", {
                                    key: "notificationPermission",
                                    value: t
                                })];
                            case 5:
                                return i.sent(), [2]
                        }
                    })
                })
            }, e.processExpiringSubscriptions = function() {
                return r(this, void 0, void 0, function() {
                    var e, t, n, i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return e = OneSignal.context, T.default.debug("Checking subscription expiration..."), [4, e.subscriptionManager.isSubscriptionExpiring()];
                            case 1:
                                return o.sent() ? [4, h.default.getIntegration()] : (T.default.debug("Subscription is not considered expired."), [2]);
                            case 2:
                                switch (t = o.sent(), n = h.default.getWindowEnv(), T.default.debug("Subscription is considered expiring. Current Integration:", t), t) {
                                    case C.IntegrationKind.Secure:
                                        return [3, 3];
                                    case C.IntegrationKind.SecureProxy:
                                        return [3, 6];
                                    case C.IntegrationKind.InsecureProxy:
                                        return [3, 11]
                                }
                                return [3, 13];
                            case 3:
                                return [4, e.subscriptionManager.subscribe(1)];
                            case 4:
                                return i = o.sent(), [4, e.subscriptionManager.registerSubscription(i)];
                            case 5:
                                return o.sent(), [3, 13];
                            case 6:
                                return n !== g.WindowEnvironmentKind.OneSignalProxyFrame ? [3, 8] : [4, new Promise(function(t) {
                                    e.workerMessenger.once(_.WorkerMessengerCommand.SubscribeNew, function(e) {
                                        t(k.Subscription.deserialize(e))
                                    }), e.workerMessenger.unicast(_.WorkerMessengerCommand.SubscribeNew, e.appConfig)
                                })];
                            case 7:
                                return r = o.sent(), T.default.debug("Finished registering brand new subscription:", r), [3, 10];
                            case 8:
                                return [4, OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS)];
                            case 9:
                                o.sent(), o.label = 10;
                            case 10:
                                return [3, 13];
                            case 11:
                                return [4, m.default.remove("Ids", "registrationId")];
                            case 12:
                                return o.sent(), T.default.debug("Unsubscribed expiring HTTP subscription by removing registration ID."), [3, 13];
                            case 13:
                                return [2]
                        }
                    })
                })
            }, e.onSdkInitialized = function() {
                return r(this, void 0, void 0, function() {
                    var t, n, i, r;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return t = OneSignal.context, [4, e.storeInitialValues()];
                            case 1:
                                return o.sent(), [4, e.installNativePromptPermissionChangedHook()];
                            case 2:
                                return o.sent(), [4, t.permissionManager.getNotificationPermission(t.appConfig.safariWebId)];
                            case 3:
                                return o.sent() === p.NotificationPermission.Granted && (OneSignal.__doNotShowWelcomeNotification = !0), (n = navigator.serviceWorker && "https:" === window.location.protocol) ? [4, h.default.isFrameContextInsecure()] : [3, 5];
                            case 4:
                                n = !o.sent(), o.label = 5;
                            case 5:
                                if (!n) return [3, 9];
                                o.label = 6;
                            case 6:
                                return o.trys.push([6, 8, , 9]), [4, navigator.serviceWorker.getRegistration()];
                            case 7:
                                return (i = o.sent()) && i.active && t.serviceWorkerManager.establishServiceWorkerChannel(), [3, 9];
                            case 8:
                                return o.sent(), [3, 9];
                            case 9:
                                return [4, e.processExpiringSubscriptions()];
                            case 10:
                                return o.sent(), [4, e.showNotifyButton()];
                            case 11:
                                return o.sent(), a.default.safari && !1 === OneSignal.config.userConfig.autoRegister ? [4, OneSignal.isPushNotificationsEnabled()] : [3, 13];
                            case 12:
                                o.sent() && e.sessionInit({
                                    __sdkCall: !0
                                }), o.label = 13;
                            case 13:
                                return v.isUsingSubscriptionWorkaround() && t.sessionManager.isFirstPageView() ? (T.default.debug("(" + h.default.getWindowEnv().toString() + ") Updating session info for HTTP site."), [4, OneSignal.isPushNotificationsEnabled()]) : [3, 17];
                            case 14:
                                return o.sent() ? (OneSignal.context, [4, m.default.getSubscription()]) : [3, 17];
                            case 15:
                                return r = o.sent().deviceId, [4, O.default.updateUserSession(r, new I.PushDeviceRecord(null))];
                            case 16:
                                o.sent(), o.label = 17;
                            case 17:
                                return [4, e.updateEmailSessionCount()];
                            case 18:
                                return o.sent(), t.cookieSyncer.install(), [4, e.showPromptsFromWebConfigEditor()];
                            case 19:
                                return o.sent(), d.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC), [2]
                        }
                    })
                })
            }, e.showNotifyButton = function() {
                return r(this, void 0, void 0, function() {
                    var e;
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return !N.default.isBrowser() || OneSignal.notifyButton ? [3, 3] : (OneSignal.config.userConfig.notifyButton = OneSignal.config.userConfig.notifyButton || {}, OneSignal.config.userConfig.bell && (OneSignal.config.userConfig.bell = i({}, OneSignal.config.userConfig.bell, OneSignal.config.userConfig.notifyButton), OneSignal.config.userConfig.notifyButton = i({}, OneSignal.config.userConfig.notifyButton, OneSignal.config.userConfig.bell)), (e = OneSignal.config.userConfig.notifyButton.displayPredicate) && "function" == typeof e ? [4, Promise.resolve(OneSignal.config.userConfig.notifyButton.displayPredicate())] : [3, 2]);
                            case 1:
                                return !1 !== t.sent() ? (OneSignal.notifyButton = new A.default(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create()) : T.default.debug("Notify button display predicate returned false so not showing the notify button."), [3, 3];
                            case 2:
                                OneSignal.notifyButton = new A.default(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create(), t.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.updateEmailSessionCount = function() {
                return r(this, void 0, void 0, function() {
                    var e;
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return OneSignal.context.sessionManager.isFirstPageView() ? [4, m.default.getEmailProfile()] : [3, 2];
                            case 1:
                                (e = t.sent()).emailId && O.default.updateUserSession(e.emailId, new M.EmailDeviceRecord(null, e.emailAuthHash)), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, e.showPromptsFromWebConfigEditor = function() {
                return r(this, void 0, void 0, function() {
                    var e, t;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return e = OneSignal.config, [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return (t = !n.sent() && e.userConfig.promptOptions && e.userConfig.promptOptions.slidedown && e.userConfig.promptOptions.slidedown.autoPrompt) ? [4, OneSignal.isOptedOut()] : [3, 3];
                            case 2:
                                t = !n.sent(), n.label = 3;
                            case 3:
                                return t && OneSignal.showHttpPrompt(), [2]
                        }
                    })
                })
            }, e.installNativePromptPermissionChangedHook = function() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return !navigator.permissions || a.default.firefox && Number(a.default.version) <= 45 ? [3, 2] : (OneSignal._usingNativePermissionHook = !0, [4, navigator.permissions.query({
                                    name: "notifications"
                                })]);
                            case 1:
                                e.sent().onchange = function() {
                                    v.triggerNotificationPermissionChanged()
                                }, e.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, e.saveInitOptions = function() {
                var e = [];
                !1 === OneSignal.config.userConfig.persistNotification ? e.push(m.default.put("Options", {
                    key: "persistNotification",
                    value: !1
                })) : !0 === OneSignal.config.userConfig.persistNotification ? e.push(m.default.put("Options", {
                    key: "persistNotification",
                    value: "force"
                })) : e.push(m.default.put("Options", {
                    key: "persistNotification",
                    value: !0
                }));
                var t = OneSignal.config.userConfig.webhooks;
                return ["notification.displayed", "notification.clicked", "notification.dismissed"].forEach(function(n) {
                    t && t[n] ? e.push(m.default.put("Options", {
                        key: "webhooks." + n,
                        value: t[n]
                    })) : e.push(m.default.put("Options", {
                        key: "webhooks." + n,
                        value: !1
                    }))
                }), t && t.cors ? e.push(m.default.put("Options", {
                    key: "webhooks.cors",
                    value: !0
                })) : e.push(m.default.put("Options", {
                    key: "webhooks.cors",
                    value: !1
                })), OneSignal.config.userConfig.notificationClickHandlerMatch ? e.push(m.default.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: OneSignal.config.userConfig.notificationClickHandlerMatch
                })) : e.push(m.default.put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: "exact"
                })), OneSignal.config.userConfig.notificationClickHandlerAction ? e.push(m.default.put("Options", {
                    key: "notificationClickHandlerAction",
                    value: OneSignal.config.userConfig.notificationClickHandlerAction
                })) : e.push(m.default.put("Options", {
                    key: "notificationClickHandlerAction",
                    value: "navigate"
                })), Promise.all(e)
            }, e.internalInit = function() {
                return r(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return T.default.debug("Called %cinternalInit()", v.getConsoleStyle("code")), (t = OneSignal.context).serviceWorkerManager.updateWorker(), t.sessionManager.incrementPageViewCount(), !sessionStorage.getItem("ONE_SIGNAL_SESSION") || v.isUsingSubscriptionWorkaround() || "denied" != window.Notification.permission && sessionStorage.getItem("ONE_SIGNAL_NOTIFICATION_PERMISSION") != window.Notification.permission ? (sessionStorage.setItem("ONE_SIGNAL_NOTIFICATION_PERMISSION", window.Notification.permission), a.default.safari && !1 === OneSignal.config.userConfig.autoRegister ? (T.default.debug("On Safari and autoregister is false, skipping sessionInit()."), v.isUsingSubscriptionWorkaround() || d.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED), [2]) : !1 !== OneSignal.config.userConfig.autoRegister || OneSignal.config.subdomain ? [3, 2] : (T.default.debug("Skipping internal init. Not auto-registering and no subdomain."), d.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED), [4, OneSignal.isPushNotificationsEnabled()])) : (d.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED), [2]);
                            case 1:
                                return n.sent() && !v.isUsingSubscriptionWorkaround() && (T.default.info("Because the user is already subscribed and has enabled notifications, we will re-register their GCM token."), y.default.registerForPush()), [2];
                            case 2:
                                return "visible" !== document.visibilityState ? (v.once(document, "visibilitychange", function(t, n) {
                                    "visible" === document.visibilityState && (n(), e.sessionInit({
                                        __sdkCall: !0
                                    }))
                                }, !0), [2]) : (e.sessionInit({
                                    __sdkCall: !0
                                }), [2])
                        }
                    })
                })
            }, e.initSaveState = function(e) {
                return r(this, void 0, void 0, function() {
                    var t, n, i;
                    return o(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, S.default.getAppId()];
                            case 1:
                                return t = r.sent(), [4, m.default.put("Ids", {
                                    type: "appId",
                                    id: t
                                })];
                            case 2:
                                return r.sent(), n = e || document.title || "Notification", [4, m.default.put("Options", {
                                    key: "pageTitle",
                                    value: n
                                })];
                            case 3:
                                return r.sent(), T.default.info("OneSignal: Set pageTitle to be '" + n + "'."), i = OneSignal.config, [4, m.default.put("Options", {
                                    key: "emailAuthRequired",
                                    value: !!i.emailAuthRequired
                                })];
                            case 4:
                                return r.sent(), [2]
                        }
                    })
                })
            }, e.sessionInit = function(e) {
                var t = OneSignal.context.appConfig;
                T.default.debug("Called %csessionInit(" + JSON.stringify(e) + ")", v.getConsoleStyle("code")), OneSignal._sessionInitAlreadyRunning ? T.default.debug("Returning from sessionInit because it has already been called.") : (OneSignal._sessionInitAlreadyRunning = !0, e.modalPrompt && e.fromRegisterFor ? (OneSignal.subscriptionModalHost = new b.default(t.appId, e), OneSignal.subscriptionModalHost.load()) : v.isUsingSubscriptionWorkaround() ? (!0 !== OneSignal.config.userConfig.autoRegister && T.default.debug("OneSignal: Not automatically showing popover because autoRegister is not specifically true."), S.default.isHttpPromptAlreadyShown() && T.default.debug("OneSignal: Not automatically showing popover because it was previously shown in the same session."), !0 !== OneSignal.config.userConfig.autoRegister || S.default.isHttpPromptAlreadyShown() || OneSignal.showHttpPrompt().catch(function(e) {
                    e instanceof c.InvalidStateError && e.reason === c.InvalidStateReason[c.InvalidStateReason.RedundantPermissionMessage] || e instanceof l.default || e instanceof u.default || e instanceof P.default ? T.default.debug("[Prompt Not Showing]", e) : T.default.info(e)
                }), OneSignal._sessionInitAlreadyRunning = !1) : e.__sdkCall && S.default.wasHttpsNativePromptDismissed() ? (T.default.debug("OneSignal: Not automatically showing native HTTPS prompt because the user previously dismissed it."), OneSignal._sessionInitAlreadyRunning = !1) : v.isUsingSubscriptionWorkaround() ? y.default.registerForPush() : OneSignal.isOptedOut().then(function(t) {
                    t ? OneSignal._sessionInitAlreadyRunning = !1 : (!e || e && !e.fromRegisterFor) && a.default.chrome && Number(a.default.version) >= 63 && (a.default.tablet || a.default.mobile) ? OneSignal.showHttpPrompt() : y.default.registerForPush()
                }), d.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED))
            }, e.ponyfillSafariFetch = function() {
                return r(this, void 0, void 0, function() {
                    var e;
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!a.default.safari || void 0 !== window.fetch) return [3, 4];
                                T.default.debug("Loading fetch polyfill for Safari.."), t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, (new E.DynamicResourceLoader).loadFetchPolyfill()];
                            case 2:
                                return t.sent(), T.default.debug("Done loading fetch polyfill."), [3, 4];
                            case 3:
                                return e = t.sent(), T.default.debug("Error loading fetch polyfill:", e), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.errorIfInitAlreadyCalled = function() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        if (OneSignal._initCalled) throw new w.SdkInitError(w.SdkInitErrorKind.MultipleInitialization);
                        return OneSignal._initCalled = !0, [2]
                    })
                })
            }, e
        }();
    t.default = x
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3),
        o = i(n(0)),
        s = function() {
            function e() {}
            return e.promiseStub = function() {
                return {
                    then: e.promiseStub,
                    catch: e.promiseStub
                }
            }, e.ensureBackwardsCompatibility = function(t) {
                e.environmentPolyfill(t), e.postmams(t), t.syncHashedEmail = e.promiseStub
            }, e.environmentPolyfill = function(e) {
                e.environment = {}, e.environment.getEnv = function() {
                    return ""
                }, e.environment.isPopup = function() {
                    return o.default.getWindowEnv() === r.WindowEnvironmentKind.OneSignalSubscriptionPopup
                }, e.environment.isIframe = function() {
                    return o.default.getWindowEnv() === r.WindowEnvironmentKind.OneSignalProxyFrame
                }
            }, e.postmams = function(e) {
                var t = function() {
                        this.messenger.message.apply(this.messenger, arguments)
                    },
                    n = function() {
                        this.messenger.postMessage.apply(this.messenger, arguments)
                    };

                function i(e) {
                    e.message = t, e.postMessage = n
                }
                e.proxyFrame && (e.iframePostmam = e.proxyFrame, i(e.iframePostmam)), e.subscriptionPopup && (e.popupPostmam = e.subscriptionPopup, i(e.popupPostmam)), e.subscriptionModal && (e.modalPostmam = e.subscriptionModal, i(e.modalPostmam))
            }, e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var PermissionMessageDismissedError = function(e) {
        function PermissionMessageDismissedError() {
            return e.call(this, "The permission message was previously dismissed.") || this
        }
        return r(PermissionMessageDismissedError, e), PermissionMessageDismissedError
    }(o(n(6)).default);
    t.default = PermissionMessageDismissedError
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var AlreadySubscribedError = function(e) {
        function AlreadySubscribedError() {
            return e.call(this, "This operation can only be performed when the user is not subscribed.") || this
        }
        return r(AlreadySubscribedError, e), AlreadySubscribedError
    }(o(n(6)).default);
    t.default = AlreadySubscribedError
}, , function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6)),
        u = n(36);
    (s = t.DeprecatedApiReason || (t.DeprecatedApiReason = {}))[s.HttpPermissionRequest = 0] = "HttpPermissionRequest", s[s.SyncHashedEmail = 1] = "SyncHashedEmail";
    var c = function(e) {
        function n(n) {
            var i = this;
            switch (n) {
                case t.DeprecatedApiReason.HttpPermissionRequest:
                    (i = e.call(this, "The HTTP permission request has been deprecated. Please remove any custom popups from your code.") || this).reportUsage(u.ApiUsageMetricKind.HttpPermissionRequest);
                    break;
                case t.DeprecatedApiReason.SyncHashedEmail:
                    (i = e.call(this, "API syncHashedEmail() has been deprecated and will be removed in a future SDK release. Please remove any usages from your code.") || this).reportUsage(u.ApiUsageMetricKind.SyncHashedEmail)
            }
            return i
        }
        return r(n, e), n.prototype.reportUsage = function(e) {
            "undefined" != typeof OneSignal && OneSignal.context && OneSignal.context.metricsManager && OneSignal.context.metricsManager.reportEvent(new u.ApiUsageMetricEvent(e))
        }, n
    }(a.default);
    t.DeprecatedApiError = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.isValidUrl = function(e, t) {
            if (t && t.allowNull && null === e) return !0;
            if (t && t.allowEmpty && (null === e || void 0 === e)) return !0;
            try {
                var n = new URL(e);
                return !t || !t.requireHttps || "https:" === n.protocol
            } catch (e) {
                return !1
            }
        }, e.isValidBoolean = function(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!0 === e || !1 === e)
        }, e.isValidArray = function(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!(!t || !t.allowEmpty || null !== e && void 0 !== e) || e instanceof Array)
        }, e
    }();
    t.ValidatorUtils = i
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(7)),
        u = s(n(5)),
        c = s(n(23)),
        l = n(1),
        d = function() {
            function e(e) {
                this.options = e ? i({}, e) : {}, this.options.actionMessage && "string" == typeof this.options.actionMessage || (this.options.actionMessage = "We'd like to show you notifications for the latest news and updates."), this.options.acceptButtonText && "string" == typeof this.options.acceptButtonText || (this.options.acceptButtonText = "Allow"), this.options.cancelButtonText && "string" == typeof this.options.cancelButtonText || (this.options.cancelButtonText = "No Thanks"), this.options.actionMessage = this.options.actionMessage.substring(0, 90), this.options.acceptButtonText = this.options.acceptButtonText.substring(0, 15), this.options.cancelButtonText = this.options.cancelButtonText.substring(0, 15), this.notificationIcons = null
            }
            return Object.defineProperty(e, "EVENTS", {
                get: function() {
                    return {
                        ALLOW_CLICK: "popoverAllowClick",
                        CANCEL_CLICK: "popoverCancelClick",
                        SHOWN: "popoverShown",
                        CLOSED: "popoverClosed"
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.create = function() {
                return r(this, void 0, void 0, function() {
                    var t, n, i;
                    return o(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return null !== this.notificationIcons ? [3, 2] : [4, c.default.getNotificationIcons()];
                            case 1:
                                t = r.sent(), this.notificationIcons = t, this.container && l.removeDomElement("#onesignal-popover-container"), n = this.getPlatformNotificationIcon(), i = '<div id="normal-popover"><div class="popover-body"><div class="popover-body-icon"><img class="' + ("default-icon" === n ? "default-icon" : "") + '" src="' + ("default-icon" === n ? "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2239.5%22%20height%3D%2240.5%22%20viewBox%3D%220%200%2079%2081%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOneSignal-Bell%3C%2Ftitle%3E%3Cg%20fill%3D%22%23BBB%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M39.96%2067.12H4.12s-3.2-.32-3.2-3.36%202.72-3.2%202.72-3.2%2010.72-5.12%2010.72-8.8c0-3.68-1.76-6.24-1.76-21.28%200-15.04%209.6-26.56%2021.12-26.56%200%200%201.6-3.84%206.24-3.84%204.48%200%206.08%203.84%206.08%203.84%2011.52%200%2021.12%2011.52%2021.12%2026.56s-1.6%2017.6-1.6%2021.28c0%203.68%2010.72%208.8%2010.72%208.8s2.72.16%202.72%203.2c0%202.88-3.36%203.36-3.36%203.36H39.96zM27%2070.8h24s-1.655%2010.08-11.917%2010.08S27%2070.8%2027%2070.8z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" : n) + '"></div><div class="popover-body-message">' + this.options.actionMessage + '</div><div class="clearfix"></div></div><div class="popover-footer"><button id="onesignal-popover-allow-button" class="align-right primary popover-button">' + this.options.acceptButtonText + '</button><button id="onesignal-popover-cancel-button" class="align-right secondary popover-button">' + this.options.cancelButtonText + '</button><div class="clearfix"></div></div></div>', l.addDomElement("body", "beforeend", '<div id="onesignal-popover-container" class="onesignal-popover-container onesignal-reset"></div>'), l.addDomElement(this.container, "beforeend", '<div id="onesignal-popover-dialog" class="onesignal-popover-dialog">' + i + "</div>"), l.addCssClass(this.container, a.default.mobile ? "slide-up" : "slide-down"), this.allowButton.addEventListener("click", this.onPopoverAllowed.bind(this)), this.cancelButton.addEventListener("click", this.onPopoverCanceled.bind(this)), u.default.trigger(e.EVENTS.SHOWN), r.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, e.prototype.onPopoverAllowed = function(t) {
                u.default.trigger(e.EVENTS.ALLOW_CLICK)
            }, e.prototype.onPopoverCanceled = function(t) {
                u.default.trigger(e.EVENTS.CANCEL_CLICK), this.close()
            }, e.prototype.close = function() {
                var t = this;
                l.addCssClass(this.container, "close-popover"), l.once(this.dialog, "animationend", function(n, i) {
                    n.target !== t.dialog || "slideDownExit" !== n.animationName && "slideUpExit" !== n.animationName || (l.removeDomElement("#onesignal-popover-container"), i(), u.default.trigger(e.EVENTS.CLOSED))
                }, !0)
            }, e.prototype.getPlatformNotificationIcon = function() {
                return this.notificationIcons ? l.isChromeLikeBrowser() || a.default.firefox || a.default.msedge ? this.notificationIcons.chrome ? this.notificationIcons.chrome : this.notificationIcons.firefox ? this.notificationIcons.firefox : "default-icon" : a.default.safari ? this.notificationIcons.safari ? this.notificationIcons.safari : this.notificationIcons.chrome ? this.notificationIcons.chrome : "default-icon" : void 0 : "default-icon"
            }, Object.defineProperty(e.prototype, "container", {
                get: function() {
                    return document.querySelector("#onesignal-popover-container")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "dialog", {
                get: function() {
                    return document.querySelector("#onesignal-popover-dialog")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "allowButton", {
                get: function() {
                    return document.querySelector("#onesignal-popover-allow-button")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cancelButton", {
                get: function() {
                    return document.querySelector("#onesignal-popover-cancel-button")
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    var i = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        r = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = s(n(5)),
        u = s(n(58)),
        c = s(n(23)),
        l = s(n(0)),
        d = s(n(22)),
        f = s(n(2)),
        p = function() {
            function e(e, t) {
                this.url = e, this.url.pathname = "subscribe", this.options = t || {
                    autoAccept: !1
                }
            }
            return e.prototype.load = function() {
                var e = this,
                    t = i({}, c.default.getPromptOptionsPostHash(), {
                        promptType: "popup",
                        parentHostname: encodeURIComponent(location.hostname)
                    });
                return this.options.autoAccept && (t.autoAccept = !0), f.default.info("Opening a popup to " + this.url.toString() + " with POST data:", t), this.popupWindow = this.openWindowViaPost(this.url.toString(), t, null), this.establishCrossOriginMessaging(), this.loadPromise = {}, this.loadPromise.promise = new Promise(function(t, n) {
                    e.loadPromise.resolver = t, e.loadPromise.rejector = n
                }), this.loadPromise.promise
            }, e.prototype.openWindowViaPost = function(e, t, n) {
                var i = document.createElement("form");
                i.action = e, i.method = "POST", i.target = "onesignal-http-popup";
                var r = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                    o = void 0 != window.screenTop ? window.screenTop : screen.top,
                    s = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                    a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                    u = OneSignal._windowWidth,
                    c = OneSignal._windowHeight,
                    l = s / 2 - u / 2 + r,
                    d = a / 2 - c / 2 + o;
                n && (n.childWidth && (u = n.childWidth), n.childHeight && (c = n.childHeight), n.left && (l = n.left), n.top && (d = n.top));
                var f = window.open("about:blank", "onesignal-http-popup", "'scrollbars=yes, width=" + u + ", height=" + c + ", top=" + d + ", left=" + l);
                if (t)
                    for (var p in t) {
                        var h = document.createElement("textarea");
                        h.name = p, h.value = "object" == typeof t[p] ? JSON.stringify(t[p]) : t[p], i.appendChild(h)
                    }
                return i.style.display = "none", document.body.appendChild(i), i.submit(), document.body.removeChild(i), f
            }, e.prototype.establishCrossOriginMessaging = function() {
                this.messenger = new d.default(this.popupWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, this.onBeginMessagePortCommunications.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_LOADED, this.onPopupLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED, this.onPopupAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED, this.onPopupRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onPopupClosing.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT, this.onSetSessionCount.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT, this.onWindowTimeout.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, this.onFinishingRegistrationRemotely.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)), this.messenger.startPostMessageReceive()
            }, e.prototype.dispose = function() {
                this.messenger.destroy()
            }, e.prototype.onBeginMessagePortCommunications = function(e) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return f.default.debug("(" + l.default.getWindowEnv().toString() + ") Successfully established cross-origin messaging with the popup window."), this.messenger.connect(), [2, !1]
                    })
                })
            }, e.prototype.onPopupLoaded = function(e) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return this.loadPromise.resolver(), a.default.trigger("popupLoad"), [2]
                    })
                })
            }, e.prototype.onPopupAccepted = function(e) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return c.default.triggerCustomPromptClicked("granted"), [2]
                    })
                })
            }, e.prototype.onPopupRejected = function(e) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return c.default.triggerCustomPromptClicked("denied"), [2]
                    })
                })
            }, e.prototype.onPopupClosing = function(e) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return f.default.info("Popup window is closing, running cleanup events."), a.default.trigger(OneSignal.EVENTS.POPUP_CLOSING), this.dispose(), [2]
                    })
                })
            }, e.prototype.onSetSessionCount = function(e) {
                return r(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(n) {
                        return f.default.debug(l.default.getWindowEnv().toString() + " Marking current session as a continuing browsing session."), t = e.data.sessionCount, OneSignal.context.sessionManager.setPageViewCount(t), [2]
                    })
                })
            }, e.prototype.onWindowTimeout = function(e) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return f.default.debug(l.default.getWindowEnv().toString() + " Popup window timed out and was closed."), a.default.trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT), [2]
                    })
                })
            }, e.prototype.onFinishingRegistrationRemotely = function(e) {
                return r(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return f.default.debug(location.origin, l.default.getWindowEnv().toString() + " Finishing HTTP popup registration inside the iFrame, sent from popup."), e.reply({
                                    progress: !0
                                }), t = e.data.rawPushSubscription, [4, c.default.getAppId()];
                            case 1:
                                return n.sent(), this.messenger.stopPostMessageReceive(), [4, OneSignal.context.subscriptionManager.registerSubscription(t)];
                            case 2:
                                return n.sent(), [4, u.default.checkAndTriggerSubscriptionChanged()];
                            case 3:
                                return n.sent(), [4, c.default.checkAndTriggerNotificationPermissionChanged()];
                            case 4:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.prototype.onRemoteRetriggerEvent = function(e) {
                var t = e.data,
                    n = t.eventName,
                    i = t.eventData;
                return a.default.trigger(n, i, e.source), !1
            }, e.prototype.message = function() {
                this.messenger.message.apply(this.messenger, arguments)
            }, e
        }();
    t.default = p
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(4)),
        a = o(n(5)),
        u = o(n(22)),
        c = n(1),
        l = o(n(2)),
        d = function() {
            function e(e) {
                this.url = e, this.url.pathname = "webPushIframe"
            }
            return Object.defineProperty(e, "LOAD_TIMEOUT_MS", {
                get: function() {
                    return 15e3
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.load = function() {
                return i(this, void 0, void 0, function() {
                    var t, n = this;
                    return r(this, function(i) {
                        return l.default.debug("Opening an iFrame to", this.url.toString()), this.removeFrame(), (t = document.createElement("iframe")).style.display = "none", t.src = this.url.toString(), t.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation", this.loadPromise = {}, this.loadPromise.promise = new Promise(function(e, t) {
                            n.loadPromise.resolver = e, n.loadPromise.rejector = t
                        }), document.body.appendChild(t), t.onload = this.onFrameLoad.bind(this), this.element = t, c.timeoutPromise(this.loadPromise.promise, e.LOAD_TIMEOUT_MS).catch(function() {
                            window === window.top && l.default.warn("OneSignal: Loading the required iFrame " + n.url.toString() + " timed out. Check that the Site URL onesignal.com dashboard web config is " + location.origin + ". Only the Site URL specified there is allowed to use load the iFrame.")
                        }), [2, this.loadPromise.promise]
                    })
                })
            }, e.prototype.removeFrame = function() {
                if (s.default.isBrowser()) {
                    var e = document.querySelector("iFrame[src='" + this.url.toString() + "'");
                    e && e.remove()
                }
            }, e.prototype.onFrameLoad = function(e) {
                this.establishCrossOriginMessaging()
            }, e.prototype.establishCrossOriginMessaging = function() {
                this.messenger && this.messenger.destroy(), this.messenger = new u.default(this.element.contentWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, this.onRemoteNotificationPermissionChanged.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL, this.onRequestHostUrl.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, this.onServiceWorkerCommandRedirect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, this.onGetEventListenerCount.bind(this)), this.messenger.connect()
            }, e.prototype.dispose = function() {
                this.messenger && this.messenger.destroy(), this.removeFrame()
            }, e.prototype.onMessengerConnect = function(e) {
                return i(this, void 0, void 0, function() {
                    var e = this;
                    return r(this, function(t) {
                        return l.default.debug("Successfully established cross-origin communication for iFrame at " + this.url.toString()), this.messenger.message(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, {
                            hostInitOptions: JSON.parse(JSON.stringify(OneSignal.config)),
                            pageUrl: window.location.href,
                            pageTitle: document.title
                        }, function(t) {
                            return t.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE && e.loadPromise.resolver(), !1
                        }), [2]
                    })
                })
            }, e.prototype.onRemoteRetriggerEvent = function(e) {
                var t = e.data,
                    n = t.eventName,
                    i = t.eventData;
                return a.default.trigger(n, i, e.source), !1
            }, e.prototype.onRemoteNotificationPermissionChanged = function(e) {
                var t = e.data.forceUpdatePermission;
                return c.triggerNotificationPermissionChanged(t), !1
            }, e.prototype.onRequestHostUrl = function(e) {
                return e.reply(location.href), !1
            }, e.prototype.onServiceWorkerCommandRedirect = function(e) {
                var t = e.data;
                return t && t.startsWith("http") && (window.location.href = t), !1
            }, e.prototype.onGetEventListenerCount = function(e) {
                var t = e.data;
                l.default.debug("(Reposted from iFrame -> Host) Getting event listener count for ", t);
                var n = OneSignal.getListeners(t).length;
                return e.reply(n), !1
            }, e.prototype.isSubscribed = function() {
                var e = this;
                return new Promise(function(t) {
                    e.messenger.message(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, null, function(e) {
                        t(e.data)
                    })
                })
            }, e.prototype.unsubscribeFromPush = function() {
                var e = this;
                return new Promise(function(t) {
                    e.messenger.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, null, function(e) {
                        t()
                    })
                })
            }, e.prototype.getProxyServiceWorkerActiveState = function() {
                var e = this;
                return new Promise(function(t, n) {
                    e.message(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, null, function(e) {
                        t(e.data)
                    })
                })
            }, e.prototype.runCommand = function(e) {
                return i(this, void 0, void 0, function() {
                    var t = this;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, new Promise(function(n, i) {
                                    t.message(e, null, function(e) {
                                        n(e.data)
                                    })
                                })];
                            case 1:
                                return [2, n.sent()]
                        }
                    })
                })
            }, e.prototype.message = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.messenger.message.apply(this.messenger, arguments)
            }, e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(44),
        a = o(n(74)),
        u = n(1),
        c = o(n(0)),
        l = function() {
            function e() {}
            return e.discoverAltOrigin = function(t) {
                return i(this, void 0, void 0, function() {
                    var n, i, o, s, c, l, d, f, p, h;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                n = e.getOneSignalProxyIframeUrls(t), i = [], s = 0, c = n, r.label = 1;
                            case 1:
                                return s < c.length ? (l = c[s], [4, (h = new a.default(l)).load()]) : [3, 4];
                            case 2:
                                r.sent(), i.push(h), r.label = 3;
                            case 3:
                                return s++, [3, 1];
                            case 4:
                                return [4, e.removeDuplicatedAltOriginSubscription(i)];
                            case 5:
                                return (d = r.sent()) ? (o = d[0], [3, 10]) : [3, 6];
                            case 6:
                                f = 0, p = i, r.label = 7;
                            case 7:
                                return f < p.length ? [4, (h = p[f]).isSubscribed()] : [3, 10];
                            case 8:
                                if (r.sent()) o = h;
                                else {
                                    if (!u.contains(h.url.host, ".os.tc")) return h.dispose(), [3, 9];
                                    o ? h.dispose() : o = h
                                }
                                r.label = 9;
                            case 9:
                                return f++, [3, 7];
                            case 10:
                                return [2, o]
                        }
                    })
                })
            }, e.removeDuplicatedAltOriginSubscription = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, i, o, a, l, d;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = [], n = 0, i = e, r.label = 1;
                            case 1:
                                return n < i.length ? [4, (o = i[n]).isSubscribed()] : [3, 4];
                            case 2:
                                r.sent() && t.push(o), r.label = 3;
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return t.length < 2 ? [2, null] : (c.default.getBuildEnv() == s.BuildEnvironmentKind.Development ? a = ".localhost:3001" : c.default.getBuildEnv() == s.BuildEnvironmentKind.Production && (a = ".onesignal.com"), (l = t.find(function(e) {
                                    return u.contains(e.url.host, a)
                                })) ? [3, 5] : [2, null]);
                            case 5:
                                return [4, l.unsubscribeFromPush()];
                            case 6:
                                return r.sent(), l.dispose(), d = e.indexOf(l), e.splice(d, 1), [2, e]
                        }
                    })
                })
            }, e.getCanonicalSubscriptionUrls = function(e, t) {
                void 0 === t && (t = c.default.getBuildEnv());
                var n = [];
                if (e.httpUseOneSignalCom) {
                    var i = c.default.getOneSignalApiUrl(t);
                    i.host = [e.subdomain, i.host].join("."), n.push(i)
                }
                var r = c.default.getOneSignalApiUrl(t);
                r.host = [e.subdomain, "os.tc"].join("."), n.push(r);
                for (var o = 0, s = n; o < s.length; o++) {
                    s[o].pathname = ""
                }
                return n
            }, e.getOneSignalProxyIframeUrls = function(t) {
                for (var n = e.getCanonicalSubscriptionUrls(t), i = 0, r = n; i < r.length; i++) {
                    r[i].pathname = "webPushIframe"
                }
                return n
            }, e.getOneSignalSubscriptionPopupUrls = function(t) {
                for (var n = e.getCanonicalSubscriptionUrls(t), i = 0, r = n; i < r.length; i++) {
                    r[i].pathname = "subscribe"
                }
                return n
            }, e
        }();
    t.default = l
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(0)),
        a = o(n(22)),
        u = o(n(51)),
        c = o(n(2)),
        l = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return r(t, e), t.prototype.establishCrossOriginMessaging = function() {
                this.messenger = new a.default(window.opener, this.options.origin, this.options.origin), this.messenger.once(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnected.bind(this)), this.messenger.postMessage(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, null), this.messenger.listen()
            }, t.prototype.onMessengerConnected = function(e) {
                c.default.debug("(" + s.default.getWindowEnv().toString() + ") The host page is now ready to receive commands from the HTTP popup."), this.finishInitialization()
            }, t
        }(u.default);
    t.default = l
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(22)),
        a = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return r(t, e), t.prototype.establishCrossOriginMessaging = function() {
                this.messenger && this.messenger.destroy(), this.messenger = new s.default(window.parent, this.options.origin, this.options.origin)
            }, t
        }(o(n(51)).default);
    t.default = a
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        s = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(12),
        c = n(1),
        l = a(n(53)),
        d = a(n(2)),
        f = function(e) {
            function t(t) {
                var n = e.call(this, ".onesignal-bell-launcher", "onesignal-bell-launcher-active", null, null, "onesignal-bell-launcher-inactive", "hidden", "active") || this;
                return n.bell = t, n.wasInactive = !1, n
            }
            return r(t, e), t.prototype.resize = function(e) {
                return o(this, void 0, void 0, function() {
                    var t = this;
                    return s(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this.element) throw new u.InvalidStateError(u.InvalidStateReason.MissingDomElement);
                                if ("small" === e && c.hasCssClass(this.element, "onesignal-bell-launcher-sm") || "medium" === e && c.hasCssClass(this.element, "onesignal-bell-launcher-md") || "large" === e && c.hasCssClass(this.element, "onesignal-bell-launcher-lg")) return [2, Promise.resolve(this)];
                                if (c.removeCssClass(this.element, "onesignal-bell-launcher-sm"), c.removeCssClass(this.element, "onesignal-bell-launcher-md"), c.removeCssClass(this.element, "onesignal-bell-launcher-lg"), "small" === e) c.addCssClass(this.element, "onesignal-bell-launcher-sm");
                                else if ("medium" === e) c.addCssClass(this.element, "onesignal-bell-launcher-md");
                                else {
                                    if ("large" !== e) throw new Error("Invalid OneSignal bell size " + e);
                                    c.addCssClass(this.element, "onesignal-bell-launcher-lg")
                                }
                                return this.shown ? [3, 1] : [2, this];
                            case 1:
                                return [4, new Promise(function(e) {
                                    if (0 == t.targetTransitionEvents.length) return e(t);
                                    var n = setTimeout(function() {
                                        d.default.debug("Launcher did not completely resize (state: " + t.state + ", activeState: " + t.activeState + ").")
                                    }, t.transitionCheckTimeout);
                                    c.once(t.element, "transitionend", function(i, r) {
                                        if (i.target === t.element && c.contains(t.targetTransitionEvents, i.propertyName)) return clearTimeout(n), r(), e(t)
                                    }, !0)
                                })];
                            case 2:
                                return [2, n.sent()]
                        }
                    })
                })
            }, t.prototype.activateIfInactive = function() {
                return this.inactive ? (this.wasInactive = !0, this.activate()) : c.nothing()
            }, t.prototype.inactivateIfWasInactive = function() {
                return this.wasInactive ? (this.wasInactive = !1, this.inactivate()) : c.nothing()
            }, t.prototype.clearIfWasInactive = function() {
                this.wasInactive = !1
            }, t.prototype.inactivate = function() {
                var t = this;
                return this.bell.message.hide().then(function() {
                    return t.bell.badge.content.length > 0 ? t.bell.badge.hide().then(function() {
                        return Promise.all([e.prototype.inactivate.call(t), t.resize("small")])
                    }).then(function() {
                        return t.bell.badge.show()
                    }) : Promise.all([e.prototype.inactivate.call(t), t.resize("small")])
                })
            }, t.prototype.activate = function() {
                var t = this;
                return this.bell.badge.content.length > 0 ? this.bell.badge.hide().then(function() {
                    return Promise.all([e.prototype.activate.call(t), t.resize(t.bell.options.size)])
                }) : Promise.all([e.prototype.activate.call(this), this.resize(this.bell.options.size)])
            }, t
        }(l.default);
    t.default = f
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(7)),
        a = o(n(5)),
        u = o(n(0)),
        c = n(1),
        l = o(n(52)),
        d = o(n(37)),
        f = function(e) {
            function t(t) {
                var n = e.call(this, ".onesignal-bell-launcher-dialog", "onesignal-bell-launcher-dialog-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-dialog-body") || this;
                return n.bell = t, n.subscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button", n.unsubscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button", n.notificationIcons = null, n
            }
            return r(t, e), t.prototype.getPlatformNotificationIcon = function() {
                return this.notificationIcons ? c.isChromeLikeBrowser() || s.default.firefox || s.default.msedge ? this.notificationIcons.chrome || this.notificationIcons.safari : s.default.safari ? this.notificationIcons.safari || this.notificationIcons.chrome : void 0 : null
            }, t.prototype.show = function() {
                var t = this;
                return this.updateBellLauncherDialogBody().then(function() {
                    return e.prototype.show.call(t)
                })
            }, Object.defineProperty(t.prototype, "subscribeButtonSelectorId", {
                get: function() {
                    return "subscribe-button"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "unsubscribeButtonSelectorId", {
                get: function() {
                    return "unsubscribe-button"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "subscribeButton", {
                get: function() {
                    return this.element.querySelector("#" + this.subscribeButtonSelectorId)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "unsubscribeButton", {
                get: function() {
                    return this.element.querySelector("#" + this.unsubscribeButtonSelectorId)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.updateBellLauncherDialogBody = function() {
                var e = this;
                return OneSignal.getSubscription().then(function(t) {
                    c.clearDomElementChildren(document.querySelector(e.nestedContentSelector));
                    var n = "Nothing to show.",
                        i = "";
                    if (e.bell.options.showCredit && (i = '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'), e.bell.state === d.default.STATES.SUBSCRIBED && !0 === t || e.bell.state === d.default.STATES.UNSUBSCRIBED && !1 === t) {
                        var r = "";
                        r = (l = e.getPlatformNotificationIcon()) ? '<div class="push-notification-icon"><img src="' + l + '"></div>' : '<div class="push-notification-icon push-notification-icon-default"></div>';
                        var o = "";
                        o = e.bell.state !== d.default.STATES.SUBSCRIBED ? '<button type="button" class="action" id="' + e.subscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.subscribe"] + "</button>" : '<button type="button" class="action" id="' + e.unsubscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.unsubscribe"] + "</button>", n = "<h1>" + e.bell.text["dialog.main.title"] + '</h1><div class="divider"></div><div class="push-notification">' + r + '<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">' + o + "</div>" + i
                    } else if (e.bell.state === d.default.STATES.BLOCKED) {
                        var l = null;
                        s.default.chrome ? s.default.mobile || s.default.tablet || (l = u.default.getOneSignalApiUrl().origin + "/bell/chrome-unblock.jpg") : s.default.firefox ? l = u.default.getOneSignalApiUrl().origin + "/bell/firefox-unblock.jpg" : s.default.safari && (l = u.default.getOneSignalApiUrl().origin + "/bell/safari-unblock.jpg");
                        var f = "";
                        l && (f = '<a href="' + l + '" target="_blank"><img src="' + l + '"></a></div>'), (s.default.mobile || s.default.tablet) && s.default.chrome && (f = "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>â‹®</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"), n = "<h1>" + e.bell.text["dialog.blocked.title"] + '</h1><div class="divider"></div><div class="instructions"><p>' + e.bell.text["dialog.blocked.message"] + "</p>" + f + "</div>" + i
                    }
                    c.addDomElement(document.querySelector(e.nestedContentSelector), "beforeend", n), e.subscribeButton && e.subscribeButton.addEventListener("click", function() {
                        OneSignal.__doNotShowWelcomeNotification = !1, a.default.trigger(d.default.EVENTS.SUBSCRIBE_CLICK)
                    }), e.unsubscribeButton && e.unsubscribeButton.addEventListener("click", function() {
                        return a.default.trigger(d.default.EVENTS.UNSUBSCRIBE_CLICK)
                    }), e.bell.setCustomColorsIfSpecified()
                })
            }, t
        }(l.default);
    t.default = f
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(1),
        a = o(n(5)),
        u = o(n(53)),
        c = o(n(37)),
        l = o(n(40)),
        d = o(n(64)),
        f = function(e) {
            function t(t) {
                var n = e.call(this, ".onesignal-bell-launcher-button", null, null, "onesignal-bell-launcher-button-active", null, "shown", "") || this;
                return n.bell = t, n.events = {
                    mouse: "bell.launcher.button.mouse"
                }, n.element.addEventListener("touchstart", function() {
                    n.onHovering(), n.onTap()
                }, {
                    passive: !0
                }), n.element.addEventListener("mouseenter", function() {
                    n.onHovering()
                }), n.element.addEventListener("mouseleave", function() {
                    n.onHovered()
                }), n.element.addEventListener("touchmove", function() {
                    n.onHovered()
                }, {
                    passive: !0
                }), n.element.addEventListener("mousedown", function() {
                    n.onTap()
                }), n.element.addEventListener("mouseup", function() {
                    n.onEndTap()
                }), n.element.addEventListener("click", function() {
                    n.onHovered(), n.onClick()
                }), n
            }
            return r(t, e), t.prototype.onHovering = function() {
                (l.default.isEmpty(this.events.mouse) || "out" === l.default.getLast(this.events.mouse)) && a.default.trigger(c.default.EVENTS.HOVERING), l.default.put(this.events.mouse, "over")
            }, t.prototype.onHovered = function() {
                l.default.put(this.events.mouse, "out"), a.default.trigger(c.default.EVENTS.HOVERED)
            }, t.prototype.onTap = function() {
                this.pulse(), this.activate(), this.bell.badge.activate()
            }, t.prototype.onEndTap = function() {
                this.inactivate(), this.bell.badge.inactivate()
            }, t.prototype.onClick = function() {
                var e = this;
                if (a.default.trigger(c.default.EVENTS.BELL_CLICK), a.default.trigger(c.default.EVENTS.LAUNCHER_CLICK), !this.bell.message.shown || this.bell.message.contentType != d.default.TYPES.MESSAGE) {
                    var t = l.default.getLast("subscription.optedOut");
                    return this.bell.unsubscribed ? t ? this.bell.launcher.activateIfInactive().then(function() {
                        e.bell.showDialogProcedure()
                    }) : (OneSignal.registerForPushNotifications(), this.bell._ignoreSubscriptionState = !0, OneSignal.once(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function() {
                        e.bell.message.display(d.default.TYPES.MESSAGE, e.bell.text["message.action.subscribed"], d.default.TIMEOUT).then(function() {
                            e.bell._ignoreSubscriptionState = !1, e.bell.launcher.inactivate()
                        })
                    })) : this.bell.subscribed ? this.bell.launcher.activateIfInactive().then(function() {
                        e.bell.showDialogProcedure()
                    }) : this.bell.blocked && (s.isUsingSubscriptionWorkaround() ? OneSignal.registerForPushNotifications() : this.bell.launcher.activateIfInactive().then(function() {
                        e.bell.showDialogProcedure()
                    })), this.bell.message.hide()
                }
            }, t.prototype.pulse = function() {
                s.removeDomElement(".pulse-ring"), s.addDomElement(this.element, "beforeend", '<div class="pulse-ring"></div>'), this.bell.setCustomColorsIfSpecified()
            }, t
        }(u.default);
    t.default = f
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e) {
        function t() {
            return e.call(this, ".onesignal-bell-launcher-badge", "onesignal-bell-launcher-badge-opened", null, "onesignal-bell-launcher-badge-active", null, "hidden") || this
        }
        return r(t, e), t.prototype.increment = function() {
            if (!isNaN(this.content)) {
                var e = +this.content;
                e += 1, this.content = e.toString()
            }
        }, t.prototype.show = function() {
            var t = e.prototype.show.call(this);
            return OneSignal.notifyButton.setCustomColorsIfSpecified(), t
        }, t.prototype.decrement = function() {
            if (!isNaN(this.content)) {
                var e = +this.content;
                e -= 1, this.content = e > 0 ? e.toString() : ""
            }
        }, t
    }(o(n(53)).default);
    t.default = s
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(5)),
        a = o(n(23)),
        u = o(n(39)),
        c = o(n(0)),
        l = o(n(22)),
        d = o(n(2)),
        f = function() {
            function e(e, t) {
                this.appId = e, this.registrationOptions = t
            }
            return e.prototype.load = function() {
                return i(this, void 0, void 0, function() {
                    var e, t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return e = n.sent(), [4, OneSignal.getNotificationPermission()];
                            case 2:
                                return t = n.sent(), this.url = c.default.getOneSignalApiUrl(), this.url.pathname = "webPushModal", this.url.search = a.default.getPromptOptionsQueryString() + "&id=" + this.appId + "&httpsPrompt=true&pushEnabled=" + e + "&permissionBlocked=" + ("denied" === t) + "&promptType=modal", d.default.info("Loading iFrame for HTTPS subscription modal at " + this.url.toString()), this.modal = this.createHiddenSubscriptionDomModal(this.url.toString()), this.establishCrossOriginMessaging(), [2]
                        }
                    })
                })
            }, e.prototype.createHiddenSubscriptionDomModal = function(e) {
                var t = document.createElement("div");
                t.setAttribute("id", "OneSignal-iframe-modal"), t.setAttribute("style", "display:none !important"), t.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex; align-items: center; justify-content: center;"></div>', document.body.appendChild(t);
                var n = document.createElement("style");
                n.innerHTML = "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }", document.getElementsByTagName("head")[0].appendChild(n);
                var i = document.createElement("iframe");
                return i.className = "OneSignal-permission-iframe", i.setAttribute("frameborder", "0"), i.width = OneSignal._windowWidth.toString(), i.height = OneSignal._windowHeight.toString(), i.src = e, document.getElementById("notif-permission").appendChild(i), i
            }, e.prototype.removeFrame = function() {
                var e = document.querySelector("#OneSignal-iframe-modal");
                e && e.remove()
            }, e.prototype.showSubscriptionDomModal = function() {
                document.getElementById("OneSignal-iframe-modal").setAttribute("style", "")
            }, e.prototype.establishCrossOriginMessaging = function() {
                this.messenger = new l.default(this.modal, this.url.origin, this.url.origin), this.messenger.startPostMessageReceive(), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_LOADED, this.onModalLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, this.onModalAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, this.onModalRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onModalClosing.bind(this))
            }, e.prototype.onModalLoaded = function(e) {
                this.showSubscriptionDomModal(), s.default.trigger("modalLoaded")
            }, e.prototype.onModalAccepted = function(e) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return d.default.debug("User accepted the HTTPS modal prompt.", location.origin), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), a.default.triggerCustomPromptClicked("granted"), d.default.debug("Calling setSubscription(true)"), [4, u.default.registerForPush()];
                            case 1:
                                return e.sent(), [4, OneSignal.setSubscription(!0)];
                            case 2:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype.onModalRejected = function(e) {
                d.default.debug("User rejected the HTTPS modal prompt."), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), a.default.triggerCustomPromptClicked("denied")
            }, e.prototype.onModalClosing = function(e) {
                d.default.info("Detected modal is closing."), this.dispose()
            }, e.prototype.dispose = function() {
                this.messenger && this.messenger.destroy(), this.removeFrame()
            }, e.prototype.message = function() {
                this.messenger.message.apply(this.messenger, arguments)
            }, e
        }();
    t.default = f
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        s = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        a = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        u = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = u(n(5)),
        l = u(n(65)),
        d = u(n(63)),
        f = u(n(0)),
        p = u(n(22)),
        h = u(n(8)),
        g = n(1),
        b = u(n(51)),
        m = u(n(2)),
        v = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.initialize = function() {
                var t = e.prototype.initialize.call(this);
                return c.default.trigger("httpInitialize"), t
            }, t.prototype.establishCrossOriginMessaging = function() {
                this.messenger && this.messenger.destroy(), this.messenger = new p.default(window, this.options.origin, this.options.origin), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, this.onProxyFrameInitializing.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, this.onRemoteNotificationPermission.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, this.onRemoteDatabaseGet.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, this.onRemoteDatabasePut.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, this.onRemoteDatabaseRemove.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, this.onUnsubscribeFromPush.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, this.onMarkPromptDismissed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, this.onIsSubscribed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, this.onUnsubscribeProxyFrame.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, this.onServiceWorkerState.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION, this.onWorkerVersion.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE, this.onSubscriptionExpirationState.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS, this.onProcessExpiringSubscriptions.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE, this.onGetSubscriptionState.bind(this)), this.messenger.listen()
            }, t.prototype.retriggerRemoteEvent = function(e, t) {
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                    eventName: e,
                    eventData: t
                })
            }, t.prototype.onMessengerConnect = function(e) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(e) {
                        return m.default.debug("(" + f.default.getWindowEnv().toString() + ") Successfully established cross-origin communication."), this.finishInitialization(), [2, !1]
                    })
                })
            }, t.prototype.onProxyFrameInitializing = function(e) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return m.default.info("(" + f.default.getWindowEnv().toString() + ") The iFrame has just received initOptions from the host page!"), OneSignal.config = o({}, e.data.hostInitOptions, OneSignal.config, {
                                    pageUrl: e.data.pageUrl,
                                    pageTitle: e.data.pageTitle
                                }), l.default.installNativePromptPermissionChangedHook(), [4, h.default.get("Options", "defaultUrl")];
                            case 1:
                                return t.sent() ? [3, 3] : [4, h.default.put("Options", {
                                    key: "defaultUrl",
                                    value: new URL(OneSignal.config.pageUrl).origin
                                })];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [4, h.default.put("Options", {
                                    key: "lastKnownHostUrl",
                                    value: OneSignal.config.pageUrl
                                })];
                            case 4:
                                return t.sent(), [4, l.default.initSaveState(OneSignal.config.pageTitle)];
                            case 5:
                                return t.sent(), [4, l.default.storeInitialValues()];
                            case 6:
                                return t.sent(), [4, l.default.saveInitOptions()];
                            case 7:
                                if (t.sent(), navigator.serviceWorker && "https:" === window.location.protocol) try {
                                    OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel()
                                } catch (e) {
                                    m.default.error("Error interacting with Service Worker inside an HTTP-hosted iFrame:", e)
                                }
                                return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2]
                        }
                    })
                })
            }, t.prototype.onRemoteNotificationPermission = function(e) {
                return s(this, void 0, void 0, function() {
                    var t, n;
                    return a(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, (t = OneSignal.context).permissionManager.getReportedNotificationPermission(t.appConfig.safariWebId)];
                            case 1:
                                return n = i.sent(), e.reply(n), [2, !1]
                        }
                    })
                })
            }, t.prototype.onRemoteDatabaseGet = function(e) {
                return s(this, void 0, void 0, function() {
                    var t, n, i, r, o, s, u, c;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                for (t = e.data, n = [], i = 0, r = t; i < r.length; i++) o = r[i], s = o.table, u = o.key, n.push(h.default.get(s, u));
                                return [4, Promise.all(n)];
                            case 1:
                                return c = a.sent(), e.reply(c), [2, !1]
                        }
                    })
                })
            }, t.prototype.onRemoteDatabasePut = function(e) {
                return s(this, void 0, void 0, function() {
                    var t, n, i, r, o, s, u;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                for (t = e.data, n = [], i = 0, r = t; i < r.length; i++) o = r[i], s = o.table, u = o.keypath, n.push(h.default.put(s, u));
                                return [4, Promise.all(n)];
                            case 1:
                                return a.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t.prototype.onRemoteDatabaseRemove = function(e) {
                return s(this, void 0, void 0, function() {
                    var t, n, i, r, o, s, u;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                for (t = e.data, n = [], i = 0, r = t; i < r.length; i++) o = r[i], s = o.table, u = o.keypath, n.push(h.default.remove(s, u));
                                return [4, Promise.all(n)];
                            case 1:
                                return a.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t.prototype.onUnsubscribeFromPush = function(e) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                m.default.debug("(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push."), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, g.unsubscribeFromPush()];
                            case 2:
                                return n.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [3, 4];
                            case 3:
                                return t = n.sent(), m.default.debug("Failed to unsubscribe from push remotely:", t), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.onMarkPromptDismissed = function(e) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return m.default.debug("(Reposted from iFrame -> Host) Marking prompt as dismissed."), [4, d.default.markHttpsNativePromptDismissed()];
                            case 1:
                                return t.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t.prototype.onIsSubscribed = function(e) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t.prototype.onUnsubscribeProxyFrame = function(e) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return t.sent() ? [4, OneSignal.setSubscription(!1)] : [3, 4];
                            case 2:
                                return t.sent(), [4, OneSignal.database.rebuild()];
                            case 3:
                                t.sent(), t.label = 4;
                            case 4:
                                return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t.prototype.onServiceWorkerState = function(e) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.context.serviceWorkerManager.getActiveState()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t.prototype.onWorkerVersion = function(e) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.context.serviceWorkerManager.getWorkerVersion()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t.prototype.onSubscriptionExpirationState = function(e) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.context.subscriptionManager.isSubscriptionExpiring()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t.prototype.onProcessExpiringSubscriptions = function(e) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return OneSignal.context, [4, l.default.processExpiringSubscriptions()];
                            case 1:
                                return t.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t.prototype.onGetSubscriptionState = function(e) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.context.subscriptionManager.getSubscriptionState()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t
        }(b.default);
    t.default = v
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(5)),
        a = o(n(66)),
        u = o(n(0)),
        c = n(3),
        l = o(n(83)),
        d = o(n(77)),
        f = o(n(76)),
        p = n(1),
        h = o(n(2)),
        g = function() {
            function e() {}
            return e.initHttp = function(e) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        switch (t.label) {
                            case 0:
                                switch (h.default.debug("Called %cinitHttp(" + JSON.stringify(e, null, 4) + ")", p.getConsoleStyle("code")), u.default.getWindowEnv()) {
                                    case c.WindowEnvironmentKind.OneSignalProxyFrame:
                                        return [3, 1];
                                    case c.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                        return [3, 3];
                                    case c.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                        return [3, 5]
                                }
                                return [3, 6];
                            case 1:
                                return OneSignal.proxyFrame = new l.default(e), [4, OneSignal.proxyFrame.initialize()];
                            case 2:
                                return t.sent(), a.default.ensureBackwardsCompatibility(OneSignal), [3, 7];
                            case 3:
                                return OneSignal.subscriptionPopup = new f.default(e), [4, OneSignal.subscriptionPopup.initialize()];
                            case 4:
                                return t.sent(), a.default.ensureBackwardsCompatibility(OneSignal), s.default.trigger("httpInitialize"), [3, 7];
                            case 5:
                                return OneSignal.subscriptionModal = new d.default(e), OneSignal.subscriptionModal.establishCrossOriginMessaging(), OneSignal.subscriptionModal.initialize(), a.default.ensureBackwardsCompatibility(OneSignal), s.default.trigger("httpInitialize"), [3, 7];
                            case 6:
                                return h.default.error("Unsupported HTTP initialization branch."), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.default = g
}, function(e, t, n) {
    "use strict";
    var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a = o(n(6));
    (s = t.NotSubscribedReason || (t.NotSubscribedReason = {}))[s.Unknown = 0] = "Unknown", s[s.NoDeviceId = 1] = "NoDeviceId", s[s.NoEmailSet = 2] = "NoEmailSet", s[s.OptedOut = 3] = "OptedOut";
    var NotSubscribedError = function(e) {
        function NotSubscribedError(n) {
            var i = this;
            switch (n) {
                case t.NotSubscribedReason.Unknown || t.NotSubscribedReason.NoDeviceId:
                    i = e.call(this, "This operation can only be performed after the user is subscribed.") || this;
                    break;
                case t.NotSubscribedReason.NoEmailSet:
                    i = e.call(this, "No email is currently set.") || this;
                    break;
                case t.NotSubscribedReason.OptedOut:
                    i = e.call(this, "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.") || this
            }
            return i.reason = t.NotSubscribedReason[n], i
        }
        return r(NotSubscribedError, e), NotSubscribedError
    }(a.default);
    t.NotSubscribedError = NotSubscribedError
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, t, n, i) {
            return new(n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(s, a)
                }
                u((i = i.apply(e, t || [])).next())
            })
        },
        r = this && this.__generator || function(e, t) {
            var n, i, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, i && (r = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(r = r.call(i, o[1])).done) return r;
                            switch (i = 0, r && (o = [0, r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, i = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1], r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2], s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (e) {
                            o = [6, e], i = 0
                        } finally {
                            n = r = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(7)),
        a = o(n(4)),
        u = o(n(68)),
        c = n(13),
        l = n(12),
        d = n(85),
        f = o(n(67)),
        p = o(n(11)),
        h = n(11),
        g = n(19),
        b = o(n(5)),
        m = o(n(58)),
        v = o(n(84)),
        S = o(n(65)),
        y = o(n(23)),
        w = o(n(39)),
        O = o(n(63)),
        _ = o(n(40)),
        E = o(n(75)),
        P = o(n(66)),
        I = o(n(0)),
        M = o(n(30)),
        C = n(16),
        k = n(41),
        T = n(3),
        N = o(n(73)),
        A = o(n(10)),
        x = o(n(72)),
        R = o(n(8)),
        D = o(n(43)),
        W = n(1),
        U = n(71),
        B = n(24),
        L = n(70),
        j = o(n(26)),
        H = o(n(54)),
        K = n(42),
        F = n(33),
        V = o(n(20)),
        G = o(n(2)),
        z = function() {
            function e() {}
            return e.setDefaultNotificationUrl = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!U.ValidatorUtils.isValidUrl(e, {
                                        allowNull: !0
                                    })) throw new c.InvalidArgumentError("url", c.InvalidArgumentReason.Malformed);
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), W.logMethodCall("setDefaultNotificationUrl", e), [4, R.default.getAppState()];
                            case 2:
                                return (t = n.sent()).defaultNotificationUrl = e, [4, R.default.setAppState(t)];
                            case 3:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.setDefaultTitle = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), W.logMethodCall("setDefaultTitle", e), [4, R.default.getAppState()];
                            case 2:
                                return (t = n.sent()).defaultNotificationTitle = e, [4, R.default.setAppState(t)];
                            case 3:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.setEmail = function(e, t) {
                return i(this, void 0, void 0, function() {
                    var n, i, o, s, a, u, l;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e) throw new c.InvalidArgumentError("email", c.InvalidArgumentReason.Empty);
                                if (!W.isValidEmail(e)) throw new c.InvalidArgumentError("email", c.InvalidArgumentReason.Malformed);
                                if (t && t.emailAuthHash && 64 !== t.emailAuthHash.length) throw new c.InvalidArgumentError("options.emailAuthHash", c.InvalidArgumentReason.Malformed);
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return r.sent(), W.logMethodCall("setEmail", e, t), [4, R.default.getAppConfig()];
                            case 2:
                                return n = r.sent(), [4, R.default.getSubscription()];
                            case 3:
                                return i = r.sent().deviceId, [4, R.default.getEmailProfile()];
                            case 4:
                                if (o = r.sent(), n.emailAuthRequired && (!t || !t.emailAuthHash)) throw new c.InvalidArgumentError("options.emailAuthHash", c.InvalidArgumentReason.Empty);
                                return (s = new K.EmailProfile).emailId = o.emailId, s.emailAddress = e, t && t.emailAuthHash && (s.emailAuthHash = t.emailAuthHash), (a = !!o.emailId) && n.emailAuthRequired ? (u = s, [4, A.default.updateEmailRecord(n, s, i)]) : [3, 6];
                            case 5:
                                return u.emailId = r.sent(), [3, 8];
                            case 6:
                                return l = s, [4, A.default.createEmailRecord(n, s, i)];
                            case 7:
                                l.emailId = r.sent(), r.label = 8;
                            case 8:
                                return !i || a && o.emailId === s.emailId && o.emailAddress && s.emailAddress === o.emailAddress ? [3, 10] : [4, A.default.updatePlayer(n.appId, i, {
                                    parent_player_id: s.emailId,
                                    email: s.emailAddress
                                })];
                            case 9:
                                r.sent(), r.label = 10;
                            case 10:
                                return [4, R.default.setEmailProfile(s)];
                            case 11:
                                return r.sent(), [2]
                        }
                    })
                })
            }, e.logoutEmail = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), [4, R.default.getAppConfig()];
                            case 2:
                                return e = i.sent(), [4, R.default.getEmailProfile()];
                            case 3:
                                return t = i.sent(), [4, R.default.getSubscription()];
                            case 4:
                                return n = i.sent().deviceId, t.emailId ? n ? [4, A.default.logoutEmail(e, t, n)] : (G.default.warn(new d.NotSubscribedError(d.NotSubscribedReason.NoDeviceId)), [2]) : (G.default.warn(new d.NotSubscribedError(d.NotSubscribedReason.NoEmailSet)), [2]);
                            case 5:
                                return i.sent() ? [4, R.default.setEmailProfile(new K.EmailProfile)] : (G.default.warn("Failed to logout email."), [2]);
                            case 6:
                                return i.sent(), [2]
                        }
                    })
                })
            }, e.isPushNotificationsSupported = function() {
                return W.logMethodCall("isPushNotificationsSupported"), !0
            }, e.init = function(t) {
                return i(this, void 0, void 0, function() {
                    function n() {
                        return i(this, void 0, void 0, function() {
                            var t;
                            return r(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (e.__initAlreadyCalled) return [2];
                                        if (e.__initAlreadyCalled = !0, y.default.fixWordpressManifestIfMisplaced(), e.on(e.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, m.default.onNotificationPermissionChange), e.on(e.EVENTS.SUBSCRIPTION_CHANGED, m.default._onSubscriptionChanged), e.on(e.EVENTS.SDK_INITIALIZED, S.default.onSdkInitialized), !W.isUsingSubscriptionWorkaround()) return [3, 2];
                                        if (e.appConfig = o, !o.subdomain) throw new g.SdkInitError(g.SdkInitErrorKind.MissingSubdomain);
                                        return t = e, [4, E.default.discoverAltOrigin(o)];
                                    case 1:
                                        t.proxyFrameHost = n.sent(), n.label = 2;
                                    case 2:
                                        return window.addEventListener("focus", function() {
                                            y.default.checkAndTriggerNotificationPermissionChanged()
                                        }), S.default.initSaveState(document.title).then(function() {
                                            return S.default.saveInitOptions()
                                        }).then(function() {
                                            I.default.getWindowEnv() === T.WindowEnvironmentKind.CustomIframe ? b.default.trigger(e.EVENTS.SDK_INITIALIZED) : S.default.internalInit()
                                        }), [2]
                                }
                            })
                        })
                    }
                    var o;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return W.logMethodCall("init"), S.default.ponyfillSafariFetch(), S.default.errorIfInitAlreadyCalled(), [4, (new j.default).getAppConfig(t)];
                            case 1:
                                return o = i.sent(), G.default.debug("OneSignal: Final web app config: %c" + JSON.stringify(o, null, 4), W.getConsoleStyle("code")), e.context = new M.default(o), e.config = e.context.appConfig, e.context.workerMessenger.listen(), s.default.safari && !e.config.safariWebId ? (G.default.warn(new g.SdkInitError(g.SdkInitErrorKind.MissingSafariWebId)), [2]) : ("complete" === document.readyState || "interactive" === document.readyState ? n() : (G.default.debug("OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."), window.addEventListener("DOMContentLoaded", function() {
                                    n()
                                }), document.onreadystatechange = function() {
                                    "complete" !== document.readyState && "interactive" !== document.readyState || n()
                                }), [2])
                        }
                    })
                })
            }, e.showHttpPermissionRequest = function(t) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        return G.default.debug("Called showHttpPermissionRequest(), redirecting to HTTP prompt."), e.showHttpPrompt().catch(function(e) {
                            return G.default.info(e)
                        }), [2]
                    })
                })
            }, e.showHttpPrompt = function(t) {
                return i(this, void 0, void 0, function() {
                    var n, i, o;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t || (t = {}), [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (r.sent(), e.__isPopoverShowing) throw new l.InvalidStateError(l.InvalidStateReason.RedundantPermissionMessage, {
                                    permissionPromptType: k.PermissionPromptType.SlidedownPermissionMessage
                                });
                                return [4, e.getNotificationPermission()];
                            case 2:
                                return n = r.sent(), [4, e.isPushNotificationsEnabled()];
                            case 3:
                                return i = r.sent(), [4, e.getSubscription()];
                            case 4:
                                return o = r.sent(), [4, y.default.wasHttpsNativePromptDismissed()];
                            case 5:
                                if (r.sent() && !t.force) return G.default.info(new f.default), [2];
                                if (n === C.NotificationPermission.Denied) return G.default.info(new p.default(h.PushPermissionNotGrantedErrorReason.Blocked)), [2];
                                if (i) throw new u.default;
                                if (!o) throw new d.NotSubscribedError(d.NotSubscribedReason.OptedOut);
                                return y.default.markHttpPopoverShown(), [4, e.context.dynamicResourceLoader.loadSdkStylesheet()];
                            case 6:
                                return 0 !== r.sent() ? (G.default.debug("Not showing slidedown permission message because styles failed to load."), [2]) : (e.popover = new x.default(y.default.getSlidedownPermissionMessageOptions()), e.popover.create(), G.default.debug("Showing the HTTP popover."), e.notifyButton && e.notifyButton.options.enable && "hidden" !== e.notifyButton.launcher.state && e.notifyButton.launcher.waitUntilShown().then(function() {
                                    e.notifyButton.launcher.hide()
                                }), e.once(x.default.EVENTS.SHOWN, function() {
                                    e.__isPopoverShowing = !0
                                }), e.once(x.default.EVENTS.CLOSED, function() {
                                    e.__isPopoverShowing = !1, e.notifyButton && e.notifyButton.options.enable && e.notifyButton.launcher.show()
                                }), e.once(x.default.EVENTS.ALLOW_CLICK, function() {
                                    e.popover.close(), G.default.debug("Setting flag to not show the popover to the user again."), O.default.markHttpsNativePromptDismissed(), e._sessionInitAlreadyRunning = !1, e.registerForPushNotifications({
                                        autoAccept: !0
                                    })
                                }), e.once(x.default.EVENTS.CANCEL_CLICK, function() {
                                    G.default.debug("Setting flag to not show the popover to the user again."), O.default.markHttpsNativePromptDismissed(), e._sessionInitAlreadyRunning = !1
                                }), [2])
                        }
                    })
                })
            }, e.registerForPushNotifications = function(t) {
                function n() {
                    t && t.httpPermissionRequest && W.isUsingSubscriptionWorkaround() ? G.default.error(new L.DeprecatedApiError(L.DeprecatedApiReason.HttpPermissionRequest)) : W.isUsingSubscriptionWorkaround() ? (e.subscriptionPopupHost = new N.default(e.proxyFrameHost.url, t), e.subscriptionPopupHost.load()) : (t || (t = {}), t.fromRegisterFor = !0, S.default.sessionInit(t))
                }
                if (e.initialized) return n();
                e.once(e.EVENTS.SDK_INITIALIZED, function() {
                    return n()
                })
            }, e.getNotificationPermission = function(t) {
                return i(this, void 0, void 0, function() {
                    var n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), [4, e.context.permissionManager.getNotificationPermission(e.config.safariWebId)];
                            case 2:
                                return n = i.sent(), t && t(n), [2, n]
                        }
                    })
                })
            }, e.getTags = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, i;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return r.sent(), W.logMethodCall("getTags", e), [4, R.default.getAppConfig()];
                            case 2:
                                return t = r.sent().appId, [4, R.default.getSubscription()];
                            case 3:
                                return (n = r.sent().deviceId) ? [4, A.default.getPlayer(t, n)] : (G.default.info(new d.NotSubscribedError(d.NotSubscribedReason.NoDeviceId)), [2, null]);
                            case 4:
                                return i = r.sent().tags, W.executeCallback(e, i), [2, i]
                        }
                    })
                })
            }, e.sendTag = function(t, n, o) {
                return i(this, void 0, void 0, function() {
                    var i;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return (i = {})[t] = n, [4, e.sendTags(i, o)];
                            case 1:
                                return [2, r.sent()]
                        }
                    })
                })
            }, e.sendTags = function(t, n) {
                return i(this, void 0, void 0, function() {
                    var i, o, s;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return r.sent(), W.logMethodCall("sendTags", t, n), t && 0 !== Object.keys(t).length ? (Object.keys(t).forEach(function(e) {
                                    !1 === t[e] && (t[e] = "false")
                                }), [4, R.default.getAppConfig()]) : (G.default.info(new c.InvalidArgumentError("tags", c.InvalidArgumentReason.Empty)), [2, null]);
                            case 2:
                                return i = r.sent().appId, [4, R.default.getEmailProfile()];
                            case 3:
                                return (o = r.sent()).emailId ? [4, A.default.updatePlayer(i, o.emailId, {
                                    tags: t,
                                    email_auth_hash: o.emailAuthHash
                                })] : [3, 5];
                            case 4:
                                r.sent(), r.label = 5;
                            case 5:
                                return [4, R.default.getSubscription()];
                            case 6:
                                return r.sent().deviceId ? [3, 8] : [4, W.awaitSdkEvent(e.EVENTS.REGISTERED)];
                            case 7:
                                r.sent(), r.label = 8;
                            case 8:
                                return [4, R.default.getSubscription()];
                            case 9:
                                return s = r.sent().deviceId, [4, A.default.updatePlayer(i, s, {
                                    tags: t
                                })];
                            case 10:
                                return r.sent(), W.executeCallback(n, t), [2, t]
                        }
                    })
                })
            }, e.deleteTag = function(t) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, e.deleteTags([t])];
                            case 1:
                                return [2, n.sent()]
                        }
                    })
                })
            }, e.deleteTags = function(t, n) {
                return i(this, void 0, void 0, function() {
                    var i, o, s, a, u, l;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (r.sent(), W.logMethodCall("deleteTags", t, n), !U.ValidatorUtils.isValidArray(t)) throw new c.InvalidArgumentError("tags", c.InvalidArgumentReason.Malformed);
                                for (0 === t.length && G.default.info(new c.InvalidArgumentError("tags", c.InvalidArgumentReason.Empty)), i = {}, o = 0, s = t; o < s.length; o++) a = s[o], i[a] = "";
                                return [4, e.sendTags(i)];
                            case 2:
                                return u = r.sent(), l = Object.keys(u), W.executeCallback(n, l), [2, l]
                        }
                    })
                })
            }, e.addListenerForNotificationOpened = function(t) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), W.logMethodCall("addListenerForNotificationOpened", t), e.once(e.EVENTS.NOTIFICATION_CLICKED, function(e) {
                                    W.executeCallback(t, e)
                                }), m.default.fireStoredNotificationClicks(e.config.pageUrl || e.config.userConfig.pageUrl), [2]
                        }
                    })
                })
            }, e.getIdsAvailable = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, i, o;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return r.sent(), W.logMethodCall("getIdsAvailable", e), [4, R.default.getSubscription()];
                            case 2:
                                return t = r.sent(), n = t.deviceId, i = t.subscriptionToken, o = {
                                    userId: n,
                                    registrationId: i
                                }, W.executeCallback(e, o), [2, o]
                        }
                    })
                })
            }, e.isPushNotificationsEnabled = function(t) {
                return i(this, void 0, void 0, function() {
                    var n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), W.logMethodCall("isPushNotificationsEnabled", t), [4, e.context.subscriptionManager.getSubscriptionState()];
                            case 2:
                                return n = i.sent(), W.executeCallback(t, n.subscribed && !n.optedOut), [2, n.subscribed && !n.optedOut]
                        }
                    })
                })
            }, e.setSubscription = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, i, o;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return r.sent(), W.logMethodCall("setSubscription", e), [4, R.default.getAppConfig()];
                            case 2:
                                return t = r.sent(), n = t.appId, [4, R.default.getSubscription()];
                            case 3:
                                if (i = r.sent(), o = i.deviceId, !t.appId) throw new l.InvalidStateError(l.InvalidStateReason.MissingAppId);
                                if (!U.ValidatorUtils.isValidBoolean(e)) throw new c.InvalidArgumentError("newSubscription", c.InvalidArgumentReason.Malformed);
                                return o ? (i.optedOut = !e, [4, A.default.updatePlayer(n, o, {
                                    notification_types: y.default.getNotificationTypeFromOptIn(e)
                                })]) : (G.default.info(new d.NotSubscribedError(d.NotSubscribedReason.NoDeviceId)), [2]);
                            case 4:
                                return r.sent(), [4, R.default.setSubscription(i)];
                            case 5:
                                return r.sent(), m.default.onInternalSubscriptionSet(i.optedOut), m.default.checkAndTriggerSubscriptionChanged(), [2]
                        }
                    })
                })
            }, e.isOptedOut = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), W.logMethodCall("isOptedOut", e), [4, R.default.getSubscription()];
                            case 2:
                                return t = n.sent().optedOut, W.executeCallback(e, t), [2, t]
                        }
                    })
                })
            }, e.optOut = function(t, n) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (i.sent(), W.logMethodCall("optOut", t, n), !U.ValidatorUtils.isValidBoolean(t)) throw new c.InvalidArgumentError("doOptOut", c.InvalidArgumentReason.Malformed);
                                return [4, e.setSubscription(!t)];
                            case 2:
                                return i.sent(), W.executeCallback(n), [2]
                        }
                    })
                })
            }, e.getEmailId = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), W.logMethodCall("getEmailId", e), [4, R.default.getEmailProfile()];
                            case 2:
                                return t = i.sent(), n = t.emailId, W.executeCallback(e, n), [2, n]
                        }
                    })
                })
            }, e.getUserId = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), W.logMethodCall("getUserId", e), [4, R.default.getSubscription()];
                            case 2:
                                return t = i.sent(), n = t.deviceId, W.executeCallback(e, n), [2, n]
                        }
                    })
                })
            }, e.getRegistrationId = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), W.logMethodCall("getRegistrationId", e), [4, R.default.getSubscription()];
                            case 2:
                                return t = i.sent(), n = t.subscriptionToken, W.executeCallback(e, n), [2, n]
                        }
                    })
                })
            }, e.getSubscription = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), W.logMethodCall("getSubscription", e), [4, R.default.getSubscription()];
                            case 2:
                                return t = i.sent(), n = !t.optedOut, W.executeCallback(e, n), [2, n]
                        }
                    })
                })
            }, e.sendSelfNotification = function(t, n, o, s, a, u) {
                return void 0 === t && (t = "OneSignal Test Message"), void 0 === n && (n = "This is an example notification."), void 0 === o && (o = new URL(location.href).origin + "?_osp=do_not_open"), i(this, void 0, void 0, function() {
                    var i, f;
                    return r(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, W.awaitOneSignalInitAndSupported()];
                            case 1:
                                return r.sent(), W.logMethodCall("sendSelfNotification", t, n, o, s, a, u), [4, R.default.getAppConfig()];
                            case 2:
                                return i = r.sent(), [4, R.default.getSubscription()];
                            case 3:
                                if (f = r.sent(), !i.appId) throw new l.InvalidStateError(l.InvalidStateReason.MissingAppId);
                                return [4, e.isPushNotificationsEnabled()];
                            case 4:
                                if (!r.sent()) throw new d.NotSubscribedError(d.NotSubscribedReason.NoDeviceId);
                                if (!U.ValidatorUtils.isValidUrl(o)) throw new c.InvalidArgumentError("url", c.InvalidArgumentReason.Malformed);
                                if (!U.ValidatorUtils.isValidUrl(s, {
                                        allowEmpty: !0,
                                        requireHttps: !0
                                    })) throw new c.InvalidArgumentError("icon", c.InvalidArgumentReason.Malformed);
                                return [4, A.default.sendNotification(i.appId, [f.deviceId], {
                                    en: t
                                }, {
                                    en: n
                                }, o, s, a, u)];
                            case 5:
                                return [2, r.sent()]
                        }
                    })
                })
            }, e.push = function(t) {
                "function" == typeof t ? t() : e[t.shift()].apply(null, t)
            }, e.on = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        return [2, e.emitter.on.apply(e.emitter, t)]
                    })
                })
            }, e.off = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        return [2, e.emitter.off.apply(e.emitter, t)]
                    })
                })
            }, e.once = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        return [2, e.emitter.once.apply(e.emitter, t)]
                    })
                })
            }, e.emit = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return i(this, void 0, void 0, function() {
                    return r(this, function(n) {
                        return [2, e.emitter.emit.apply(e.emitter, t)]
                    })
                })
            }, e
        }();
    t.default = z, z.VERSION = a.default.version(), z._VERSION = a.default.version(), z.sdkEnvironment = I.default, z._notificationOpenedCallbacks = [], z._idsAvailable_callback = [], z._defaultLaunchURL = null, z.config = null, z.__isPopoverShowing = !1, z._sessionInitAlreadyRunning = !1, z._isNotificationEnabledCallback = [], z._subscriptionSet = !0, z.modalUrl = null, z._windowWidth = 650, z._windowHeight = 568, z._isNewVisitor = !1, z._channel = null, z.timedLocalStorage = H.default, z.initialized = !1, z.notifyButton = null, z.store = _.default, z.environment = a.default, z.database = R.default, z.event = b.default, z.browser = s.default, z.popover = null, z.log = G.default, z.api = A.default, z.indexedDb = D.default, z.mainHelper = y.default, z.subscriptionHelper = w.default, z.httpHelper = v.default, z.eventHelper = m.default, z.initHelper = S.default, z.testHelper = O.default, z.appConfig = null, z.emitter = new V.default, z.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js", z.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js", z.SERVICE_WORKER_PARAM = {
        scope: "/"
    }, z._LOGGING = !1, z.LOGGING = !1, z._usingNativePermissionHook = !1, z._initCalled = !1, z.__initAlreadyCalled = !1, z.checkAndWipeUserSubscription = function() {}, z.DeviceRecord = B.DeviceRecord, z.EmailDeviceRecord = F.EmailDeviceRecord, z.notificationPermission = C.NotificationPermission, z._initHttp = v.default.initHttp, z._initPopup = function() {
        return z.subscriptionPopup.subscribe()
    }, z.POSTMAM_COMMANDS = {
        CONNECTED: "connect",
        REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission",
        REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet",
        REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut",
        REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove",
        REMOTE_OPERATION_COMPLETE: "postman.operationComplete",
        REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent",
        MODAL_LOADED: "postmam.modalPrompt.loaded",
        MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted",
        MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled",
        POPUP_LOADED: "postmam.popup.loaded",
        POPUP_ACCEPTED: "postmam.popup.accepted",
        POPUP_REJECTED: "postmam.popup.canceled",
        POPUP_CLOSING: "postman.popup.closing",
        REMOTE_NOTIFICATION_PERMISSION_CHANGED: "postmam.remoteNotificationPermissionChanged",
        IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize",
        UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush",
        SET_SESSION_COUNT: "postmam.setSessionCount",
        REQUEST_HOST_URL: "postmam.requestHostUrl",
        WINDOW_TIMEOUT: "postmam.windowTimeout",
        FINISH_REMOTE_REGISTRATION: "postmam.finishRemoteRegistration",
        FINISH_REMOTE_REGISTRATION_IN_PROGRESS: "postmam.finishRemoteRegistrationInProgress",
        POPUP_BEGIN_MESSAGEPORT_COMMS: "postmam.beginMessagePortComms",
        SERVICEWORKER_COMMAND_REDIRECT: "postmam.command.redirect",
        MARK_PROMPT_DISMISSED: "postmam.markPromptDismissed",
        IS_SUBSCRIBED: "postmam.isSubscribed",
        UNSUBSCRIBE_PROXY_FRAME: "postman.unsubscribeProxyFrame",
        GET_EVENT_LISTENER_COUNT: "postmam.getEventListenerCount",
        SERVICE_WORKER_STATE: "postmam.serviceWorkerState",
        GET_WORKER_VERSION: "postmam.getWorkerVersion",
        SUBSCRIPTION_EXPIRATION_STATE: "postmam.subscriptionExpirationState",
        PROCESS_EXPIRING_SUBSCRIPTIONS: "postmam.processExpiringSubscriptions",
        GET_SUBSCRIPTION_STATE: "postmam.getSubscriptionState"
    }, z.EVENTS = {
        CUSTOM_PROMPT_CLICKED: "customPromptClick",
        NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange",
        SUBSCRIPTION_CHANGED: "subscriptionChange",
        WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
        NOTIFICATION_DISPLAYED: "notificationDisplay",
        NOTIFICATION_DISMISSED: "notificationDismiss",
        NOTIFICATION_CLICKED: "notificationClick",
        SDK_INITIALIZED: "initializeInternal",
        SDK_INITIALIZED_PUBLIC: "initialize",
        REGISTERED: "register",
        POPUP_CLOSING: "popupClose",
        PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay",
        TEST_INIT_OPTION_DISABLED: "testInitOptionDisabled",
        TEST_WOULD_DISPLAY: "testWouldDisplay",
        POPUP_WINDOW_TIMEOUT: "popupWindowTimeout"
    }, z.NOTIFICATION_TYPES = {
        SUBSCRIBED: 1,
        UNSUBSCRIBED: -2
    }, P.default.ensureBackwardsCompatibility(z), G.default.info("%cOneSignal Web SDK loaded (version " + z._VERSION + ", " + I.default.getWindowEnv().toString() + " environment).", W.getConsoleStyle("bold")), G.default.debug("Current Page URL: " + ("undefined" == typeof location ? "NodeJS" : location.href)), G.default.debug("Browser Environment: " + s.default.name + " " + s.default.version)
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(4)),
        o = function() {
            function e() {}
            return e.promiseStub = function() {
                return {
                    then: e.promiseStub,
                    catch: e.promiseStub
                }
            }, Object.defineProperty(e, "log", {
                get: function() {
                    return {
                        setLevel: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.isPushNotificationsSupported = function() {
                return !1
            }, e.push = function(e) {
                if ("function" == typeof e) e();
                else {
                    var t = e.shift();
                    OneSignal[t].apply(null, e)
                }
            }, e.VERSION = function() {
                return r.default.version()
            }, e
        }();
    t.default = o;
    var s = o;
    s.init = s.showHttpPrompt = s.registerForPushNotifications = s.showHttpPermissionRequest = s.getNotificationPermission = s.on = s.off = s.once = s.config = s.SERVICE_WORKER_PATH = s.SERVICE_WORKER_UPDATER_PATH = s.checkAndWipeUserSubscription = s.subscriptionBell = s.notifyButton = function() {}, s.setDefaultNotificationUrl = s.setDefaultTitle = s.syncHashedEmail = s.getTags = s.sendTag = s.sendTags = s.deleteTag = s.deleteTags = s.addListenerForNotificationOpened = s.getIdsAvailable = s.isPushNotificationsEnabled = s.setSubscription = s.getUserId = s.getRegistrationId = s.getSubscription = s.sendSelfNotification = s.setEmail = s.logoutEmail = s.promiseStub
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(87)),
        o = i(n(2)),
        s = n(1);
    t.oneSignalSdkInit = function() {
        if (s.incrementSdkLoadCount(), s.getSdkLoadCount() > 1) o.default.warn("OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."), o.default.debug("OneSignal: Exiting from SDK initialization to prevent double-initialization errors. Occurred " + s.getSdkLoadCount() + " times.");
        else {
            if ("undefined" != typeof OneSignal) var e = OneSignal;
            if (s.isPushNotificationsSupported() ? window.OneSignal = n(86).default : (o.default.debug("OneSignal: Push notifications are not supported. A stubbed version of the SDK will be initialized."), window.OneSignal = r.default), e)
                for (var t = 0; t < e.length; t++) OneSignal.push(e[t])
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(88),
        o = i(n(0)),
        s = n(3);
    o.default.getWindowEnv() === s.WindowEnvironmentKind.ServiceWorker ? self.OneSignal = n(45) : r.oneSignalSdkInit()
}]);
//# sourceMappingURL=OneSignalSDK.js.map