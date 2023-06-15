(function(x, st) {
typeof exports == "object" &&typeof module < "u"
    ? module.exports = st(require("react"), require("react-dom"))
: typeof define == "function" && define.amd
    ? define([ "react", "react-dom" ], st)
    : (x = typeof globalThis < "u" ? globalThis : x || self,
       x.CRender = st(x.React, x.ReactDOM))
})(this, function(x, st) {
"use strict";
function oi(e) {
  const t = Object.create(null, {[Symbol.toStringTag] : {value : "Module"}});
  if (e) {
    for (const r in e)
      if (r !== "default") {
        const n = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(t, r,
                              n.get ? n : {enumerable : !0, get : () => e[r]})
      }
  }
  return t.default = e, Object.freeze(t)
}
const ai = oi(st);
var tr = {exports : {}},
    ct = {}; /**
              * @license React
              * react-jsx-runtime.production.min.js
              *
              * Copyright (c) Facebook, Inc. and its affiliates.
              *
              * This source code is licensed under the MIT license found in the
              * LICENSE file in the root directory of this source tree.
              */
var yn;
function ii() {
  if (yn)
    return ct;
  yn = 1;
  var e = x, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"),
      n = Object.prototype.hasOwnProperty,
      o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
      a = {key : !0, ref : !0, __self : !0, __source : !0};
  function i(s, u, f) {
    var l, p = {}, d = null, v = null;
    f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key),
        u.ref !== void 0 && (v = u.ref);
    for (l in u)
      n.call(u, l) && !a.hasOwnProperty(l) && (p[l] = u[l]);
    if (s && s.defaultProps)
      for (l in u = s.defaultProps, u)
        p[l] === void 0 && (p[l] = u[l]);
    return { $$typeof: t, type: s, key: d, ref: v, props: p, _owner: o.current }
  }
  return ct.Fragment = r, ct.jsx = i, ct.jsxs = i, ct
}
var ut = {}; /**
              * @license React
              * react-jsx-runtime.development.js
              *
              * Copyright (c) Facebook, Inc. and its affiliates.
              *
              * This source code is licensed under the MIT license found in the
              * LICENSE file in the root directory of this source tree.
              */
var gn;
function si() {
  return gn || (gn = 1, "{}".NODE_ENV !== "production" && function() {
           var e = x, t = Symbol.for("react.element"),
               r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"),
               o = Symbol.for("react.strict_mode"),
               a = Symbol.for("react.profiler"),
               i = Symbol.for("react.provider"),
               s = Symbol.for("react.context"),
               u = Symbol.for("react.forward_ref"),
               f = Symbol.for("react.suspense"),
               l = Symbol.for("react.suspense_list"),
               p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"),
               v = Symbol.for("react.offscreen"), g = Symbol.iterator,
               E = "@@iterator";
           function w(c) {
             if (c === null || typeof c != "object")
               return null;
             var h = g && c[g] || c[E];
             return typeof h == "function" ? h : null
           }
           var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
           function O(c) {
             {
               for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0),
                        S = 1;
                    S < h; S++)
                 m[S - 1] = arguments[S];
               U("error", c, m)
             }
           }
           function U(c, h, m) {
             {
               var S = j.ReactDebugCurrentFrame, M = S.getStackAddendum();
               M !== "" && (h += "%s", m = m.concat([ M ]));
               var T = m.map(function(R) { return String(R) });
               T.unshift("Warning: " + h),
                   Function.prototype.apply.call(console[c], console, T)
             }
           }
           var I = !1, Y = !1, q = !1, ce = !1, A = !1, L;
           L = Symbol.for("react.module.reference");
           function H(c) {
             return !!(typeof c == "string" || typeof c == "function" ||
                       c === n || c === a || A || c === o || c === f ||
                       c === l || ce || c === v || I || Y || q ||
                       typeof c == "object" && c !== null &&
                           (c.$$typeof === d || c.$$typeof === p ||
                            c.$$typeof === i || c.$$typeof === s ||
                            c.$$typeof === u || c.$$typeof === L ||
                            c.getModuleId !== void 0))
           }
           function he(c, h, m) {
             var S = c.displayName;
             if (S)
               return S;
             var M = h.displayName || h.name || "";
             return M !== "" ? m + "(" + M + ")" : m
           }
           function Ie(c) { return c.displayName || "Context" }
           function ue(c) {
             if (c == null)
               return null;
             if (typeof c.tag == "number" &&
                     O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),
                 typeof c == "function")
               return c.displayName || c.name || null;
             if (typeof c == "string")
               return c;
             switch (c) {
             case n:
               return "Fragment";
             case r:
               return "Portal";
             case a:
               return "Profiler";
             case o:
               return "StrictMode";
             case f:
               return "Suspense";
             case l:
               return "SuspenseList"
             }
             if (typeof c == "object")
               switch (c.$$typeof) {
               case s:
                 var h = c;
                 return Ie(h) + ".Consumer";
               case i:
                 var m = c;
                 return Ie(m._context) + ".Provider";
               case u:
                 return he(c, c.render, "ForwardRef");
               case p:
                 var S = c.displayName || null;
                 return S !== null ? S : ue(c.type) || "Memo";
               case d: {
                 var M = c, T = M._payload, R = M._init;
                 try {
                   return ue(R(T))
                 } catch {
                   return null
                 }
               }
               }
             return null
           }
           var be = Object.assign, _e = 0, Se, ee, Jt, nt, qt, Fe, ot;
           function te() {}
           te.__reactDisabledLog = !0;
           function Oe() {
             {
               if (_e === 0) {
                 Se = console.log, ee = console.info, Jt = console.warn,
                 nt = console.error, qt = console.group,
                 Fe = console.groupCollapsed, ot = console.groupEnd;
                 var c = {
                   configurable : !0,
                   enumerable : !0,
                   value : te,
                   writable : !0
                 };
                 Object.defineProperties(console, {
                   info : c,
                   log : c,
                   warn : c,
                   error : c,
                   group : c,
                   groupCollapsed : c,
                   groupEnd : c
                 })
               }
               _e++
             }
           }
           function Nt() {
             {
               if (_e--, _e === 0) {
                 var c = {configurable : !0, enumerable : !0, writable : !0};
                 Object.defineProperties(console, {
                   log : be({}, c, {value : Se}),
                   info : be({}, c, {value : ee}),
                   warn : be({}, c, {value : Jt}),
                   error : be({}, c, {value : nt}),
                   group : be({}, c, {value : qt}),
                   groupCollapsed : be({}, c, {value : Fe}),
                   groupEnd : be({}, c, {value : ot})
                 })
               }
               _e < 0 &&
                   O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")
             }
           }
           var Rt = j.ReactCurrentDispatcher, ln;
           function Qt(c, h, m) {
             {
               if (ln === void 0)
                 try {
                   throw Error()
                 } catch (M) {
                   var S = M.stack.trim().match(/\n( *(at )?)/);
                   ln = S && S[1] || ""
                 }
               return `
` + ln + c
             }
           }
           var fn = !1, Xt;
           {
             var km = typeof WeakMap == "function" ? WeakMap : Map;
             Xt = new km
           }
           function Ga(c, h) {
             if (!c || fn)
               return "";
             {
               var m = Xt.get(c);
               if (m !== void 0)
                 return m
             }
             var S;
             fn = !0;
             var M = Error.prepareStackTrace;
             Error.prepareStackTrace = void 0;
             var T;
             T = Rt.current, Rt.current = null, Oe();
             try {
               if (h) {
                 var R = function() { throw Error() };
                 if (Object.defineProperty(
                         R.prototype, "props",
                         {set : function() { throw Error() }}),
                     typeof Reflect == "object" && Reflect.construct) {
                   try {
                     Reflect.construct(R, [])
                   } catch (je) {
                     S = je
                   }
                   Reflect.construct(c, [], R)
                 } else {
                   try {
                     R.call()
                   } catch (je) {
                     S = je
                   }
                   c.call(R.prototype)
                 }
               } else {
                 try {
                   throw Error()
                 } catch (je) {
                   S = je
                 }
                 c()
               }
             } catch (je) {
               if (je && S && typeof je.stack == "string") {
                 for (var N = je.stack.split(`
`),
                          Q = S.stack.split(`
`),
                          z = N.length - 1, W = Q.length - 1;
                      z >= 1 && W >= 0 && N[z] !== Q[W];)
                   W--;
                 for (; z >= 1 && W >= 0; z--, W--)
                   if (N[z] !== Q[W]) {
                     if (z !== 1 || W !== 1)
                       do
                         if (z--, W--, W < 0 || N[z] !== Q[W]) {
                           var oe = `
` + N[z].replace(" at new ", " at ");
                           return c.displayName && oe.includes("<anonymous>") &&
                                      (oe = oe.replace("<anonymous>",
                                                       c.displayName)),
                                  typeof c == "function" && Xt.set(c, oe), oe
                         }
                       while (z >= 1 && W >= 0);
                     break
                   }
               }
             } finally {
               fn = !1, Rt.current = T, Nt(), Error.prepareStackTrace = M
             }
             var it = c ? c.displayName || c.name : "", ni = it ? Qt(it) : "";
             return typeof c == "function" && Xt.set(c, ni), ni
           }
           function Im(c, h, m) { return Ga(c, !1) }
           function Fm(c) {
             var h = c.prototype;
             return !!(h && h.isReactComponent)
           }
           function Kt(c, h, m) {
             if (c == null)
               return "";
             if (typeof c == "function")
               return Ga(c, Fm(c));
             if (typeof c == "string")
               return Qt(c);
             switch (c) {
             case f:
               return Qt("Suspense");
             case l:
               return Qt("SuspenseList")
             }
             if (typeof c == "object")
               switch (c.$$typeof) {
               case u:
                 return Im(c.render);
               case p:
                 return Kt(c.type, h, m);
               case d: {
                 var S = c, M = S._payload, T = S._init;
                 try {
                   return Kt(T(M), h, m)
                 } catch {
                 }
               }
               }
             return ""
           }
           var Zt = Object.prototype.hasOwnProperty, Wa = {},
               Ha = j.ReactDebugCurrentFrame;
           function er(c) {
             if (c) {
               var h = c._owner, m = Kt(c.type, c._source, h ? h.type : null);
               Ha.setExtraStackFrame(m)
             } else
               Ha.setExtraStackFrame(null)
           }
           function Lm(c, h, m, S, M) {
             {
               var T = Function.call.bind(Zt);
               for (var R in c)
                 if (T(c, R)) {
                   var N = void 0;
                   try {
                     if (typeof c[R] != "function") {
                       var Q = Error(
                           (S || "React class") + ": " + m + " type `" + R +
                           "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                           typeof c[R] +
                           "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                       throw Q.name = "Invariant Violation", Q
                     }
                     N = c[R](h, R, S, m, null,
                              "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                   } catch (z) {
                     N = z
                   }
                   N && !(N instanceof Error) &&
                       (er(M),
                        O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                          S || "React class", m, R, typeof N),
                        er(null)),
                       N instanceof Error && !(N.message in Wa) &&
                           (Wa[N.message] = !0, er(M),
                            O("Failed %s type: %s", m, N.message), er(null))
                 }
             }
           }
           var Bm = Array.isArray;
           function dn(c) { return Bm(c) }
           function Um(c) {
             {
               var h = typeof Symbol == "function" && Symbol.toStringTag,
                   m = h && c[Symbol.toStringTag] || c.constructor.name ||
                       "Object";
               return m
             }
           }
           function Vm(c) {
             try {
               return Ya(c), !1
             } catch {
               return !0
             }
           }
           function Ya(c) { return "" + c }
           function Ja(c) {
             if (Vm(c))
               return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                        Um(c)),
                      Ya(c)
           }
           var Mt = j.ReactCurrentOwner,
               zm = {key : !0, ref : !0, __self : !0, __source : !0}, qa, Qa,
               pn;
           pn = {};
           function Gm(c) {
             if (Zt.call(c, "ref")) {
               var h = Object.getOwnPropertyDescriptor(c, "ref").get;
               if (h && h.isReactWarning)
                 return !1
             }
             return c.ref !== void 0
           }
           function Wm(c) {
             if (Zt.call(c, "key")) {
               var h = Object.getOwnPropertyDescriptor(c, "key").get;
               if (h && h.isReactWarning)
                 return !1
             }
             return c.key !== void 0
           }
           function Hm(c, h) {
             if (typeof c.ref == "string" && Mt.current && h &&
                 Mt.current.stateNode !== h) {
               var m = ue(Mt.current.type);
               pn[m] ||
                   (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                      ue(Mt.current.type), c.ref),
                    pn[m] = !0)
             }
           }
           function Ym(c, h) {
             {
               var m = function() {
                 qa ||
                     (qa = !0,
                      O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                        h))
               };
               m.isReactWarning = !0,
               Object.defineProperty(c, "key", {get : m, configurable : !0})
             }
           }
           function Jm(c, h) {
             {
               var m = function() {
                 Qa ||
                     (Qa = !0,
                      O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                        h))
               };
               m.isReactWarning = !0,
               Object.defineProperty(c, "ref", {get : m, configurable : !0})
             }
           }
           var qm = function(c, h, m, S, M, T, R) {
             var N = {
               $$typeof : t,
               type : c,
               key : h,
               ref : m,
               props : R,
               _owner : T
             };
             return N._store = {},
                    Object.defineProperty(N._store, "validated", {
                      configurable : !1,
                      enumerable : !1,
                      writable : !0,
                      value : !1
                    }),
                    Object.defineProperty(N, "_self", {
                      configurable : !1,
                      enumerable : !1,
                      writable : !1,
                      value : S
                    }),
                    Object.defineProperty(N, "_source", {
                      configurable : !1,
                      enumerable : !1,
                      writable : !1,
                      value : M
                    }),
                    Object.freeze && (Object.freeze(N.props), Object.freeze(N)),
                    N
           };
           function Qm(c, h, m, S, M) {
             {
               var T, R = {}, N = null, Q = null;
               m !== void 0 && (Ja(m), N = "" + m),
                   Wm(h) && (Ja(h.key), N = "" + h.key),
                   Gm(h) && (Q = h.ref, Hm(h, M));
               for (T in h)
                 Zt.call(h, T) && !zm.hasOwnProperty(T) && (R[T] = h[T]);
               if (c && c.defaultProps) {
                 var z = c.defaultProps;
                 for (T in z)
                   R[T] === void 0 && (R[T] = z[T])
               }
               if (N || Q) {
                 var W = typeof c == "function"
                             ? c.displayName || c.name || "Unknown"
                             : c;
                 N && Ym(R, W), Q && Jm(R, W)
               }
               return qm(c, N, Q, M, S, Mt.current, R)
             }
           }
           var hn = j.ReactCurrentOwner, Xa = j.ReactDebugCurrentFrame;
           function at(c) {
             if (c) {
               var h = c._owner, m = Kt(c.type, c._source, h ? h.type : null);
               Xa.setExtraStackFrame(m)
             } else
               Xa.setExtraStackFrame(null)
           }
           var vn;
           vn = !1;
           function mn(c) {
             return typeof c == "object" && c !== null && c.$$typeof === t
           }
           function Ka() {
             {
               if (hn.current) {
                 var c = ue(hn.current.type);
                 if (c)
                   return `

Check the render method of \`` +
                          c + "`."
               }
               return ""
             }
           }
           function Xm(c) {
             {
               if (c !== void 0) {
                 var h = c.fileName.replace(/^.*[\\\/]/, ""), m = c.lineNumber;
                 return `

Check your code at ` + h +
                        ":" + m + "."
               }
               return ""
             }
           }
           var Za = {};
           function Km(c) {
             {
               var h = Ka();
               if (!h) {
                 var m = typeof c == "string" ? c : c.displayName || c.name;
                 m && (h = `

Check the top-level render call using <` +
                           m + ">.")
               }
               return h
             }
           }
           function ei(c, h) {
             {
               if (!c._store || c._store.validated || c.key != null)
                 return;
               c._store.validated = !0;
               var m = Km(h);
               if (Za[m])
                 return;
               Za[m] = !0;
               var S = "";
               c && c._owner && c._owner !== hn.current &&
                   (S = " It was passed a child from " + ue(c._owner.type) +
                        "."),
                   at(c),
                   O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                     m, S),
                   at(null)
             }
           }
           function ti(c, h) {
             {
               if (typeof c != "object")
                 return;
               if (dn(c))
                 for (var m = 0; m < c.length; m++) {
                   var S = c[m];
                   mn(S) && ei(S, h)
                 }
               else if (mn(c))
                 c._store && (c._store.validated = !0);
               else if (c) {
                 var M = w(c);
                 if (typeof M == "function" && M !== c.entries)
                   for (var T = M.call(c), R; !(R = T.next()).done;)
                     mn(R.value) && ei(R.value, h)
               }
             }
           }
           function Zm(c) {
             {
               var h = c.type;
               if (h == null || typeof h == "string")
                 return;
               var m;
               if (typeof h == "function")
                 m = h.propTypes;
               else if (typeof h == "object" &&
                        (h.$$typeof === u || h.$$typeof === p))
                 m = h.propTypes;
               else
                 return;
               if (m) {
                 var S = ue(h);
                 Lm(m, c.props, "prop", S, c)
               } else if (h.PropTypes !== void 0 && !vn) {
                 vn = !0;
                 var M = ue(h);
                 O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                   M || "Unknown")
               }
               typeof h.getDefaultProps == "function" &&
                   !h.getDefaultProps.isReactClassApproved &&
                   O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")
             }
           }
           function ey(c) {
             {
               for (var h = Object.keys(c.props), m = 0; m < h.length; m++) {
                 var S = h[m];
                 if (S !== "children" && S !== "key") {
                   at(c),
                       O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                         S),
                       at(null);
                   break
                 }
               }
               c.ref !== null &&
                   (at(c),
                    O("Invalid attribute `ref` supplied to `React.Fragment`."),
                    at(null))
             }
           }
           function ri(c, h, m, S, M, T) {
             {
               var R = H(c);
               if (!R) {
                 var N = "";
                 (c === void 0 || typeof c == "object" && c !== null &&
                                      Object.keys(c).length === 0) &&
                     (N +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                 var Q = Xm(M);
                 Q ? N += Q : N += Ka();
                 var z;
                 c === null
                     ? z = "null"
                 : dn(c) ? z = "array"
                 : c !== void 0 && c.$$typeof === t
                     ? (z = "<" + (ue(c.type) || "Unknown") + " />",
                        N = " Did you accidentally export a JSX literal instead of a component?")
                     : z = typeof c,
                       O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                         z, N)
               }
               var W = Qm(c, h, m, M, T);
               if (W == null)
                 return W;
               if (R) {
                 var oe = h.children;
                 if (oe !== void 0)
                   if (S)
                     if (dn(oe)) {
                       for (var it = 0; it < oe.length; it++)
                         ti(oe[it], c);
                       Object.freeze && Object.freeze(oe)
                     } else
                       O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                   else
                     ti(oe, c)
               }
               return c === n ? ey(W) : Zm(W), W
             }
           }
           function ty(c, h, m) { return ri(c, h, m, !0) }
           function ry(c, h, m) { return ri(c, h, m, !1) }
           var ny = ry, oy = ty;
           ut.Fragment = n, ut.jsx = ny, ut.jsxs = oy
         }()), ut
}
"{}".NODE_ENV === "production" ? tr.exports = ii() : tr.exports = si();
var bn = tr.exports;
const Le = bn.jsx, _n = bn.jsxs;
var ci = Object.defineProperty,
    ui = (e, t, r) =>
        t in e
            ? ci(e, t,
                 {enumerable : !0, configurable : !0, writable : !0, value : r})
            : e[t] = r,
    _ = (e, t, r) => (ui(e, typeof t != "symbol" ? t + "" : t, r), r);
const li = e =>
          () => { console.warn(`${e} need to be implement getComponent`) },
      fi = [ "customPageRootRender" ],
      jn =
          [
            "pageRender", "render", "convertModelToComponent", "getComponent",
            "getContext", "getUtils", "getDataLink", "createDataLink",
            "transformProps", "transformData", "transformGlobalData",
            "errorCatch", "clear"
          ],
      En = e => [...jn, ...fi].reduce((t, r) => {
        var n;
        return e != null && e[r]
                   ? t[r] = (n = e[r]) == null ? void 0 : n.bind(e)
                   : jn.includes(r) && (t[r] = li),
                     t
      }, {});
var di = Object.defineProperty,
    pi = (e, t, r) =>
        t in e
            ? di(e, t,
                 {enumerable : !0, configurable : !0, writable : !0, value : r})
            : e[t] = r,
    C = (e, t, r) => (pi(e, typeof t != "symbol" ? t + "" : t, r), r),
    hi = typeof global == "object" && global && global.Object === Object &&
         global;
const wn = hi;
var vi = typeof self == "object" && self && self.Object === Object && self,
    mi = wn || vi || Function("return this")();
const le = mi;
var yi = le.Symbol;
const re = yi;
var Sn = Object.prototype, gi = Sn.hasOwnProperty, bi = Sn.toString,
    lt = re ? re.toStringTag : void 0;
function _i(e) {
  var t = gi.call(e, lt), r = e[lt];
  try {
    e[lt] = void 0;
    var n = !0
  } catch {
  }
  var o = bi.call(e);
  return n && (t ? e[lt] = r : delete e[lt]), o
}
var ji = Object.prototype, Ei = ji.toString;
function wi(e) { return Ei.call(e) }
var Si = "[object Null]", Oi = "[object Undefined]",
    On = re ? re.toStringTag : void 0;
function Ce(e) {
  return e == null               ? e === void 0 ? Oi : Si
         : On && On in Object(e) ? _i(e)
                                 : wi(e)
}
function fe(e) { return e != null && typeof e == "object" }
var Ci = "[object Symbol]";
function rr(e) { return typeof e == "symbol" || fe(e) && Ce(e) == Ci }
function nr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;)
    o[r] = t(e[r], r, e);
  return o
}
var xi = Array.isArray;
const V = xi;
var Ni = 1 / 0, Cn = re ? re.prototype : void 0, xn = Cn ? Cn.toString : void 0;
function Nn(e) {
  if (typeof e == "string")
    return e;
  if (V(e))
    return nr(e, Nn) + "";
  if (rr(e))
    return xn ? xn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ni ? "-0" : t
}
function ae(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function")
}
function or(e) { return e }
var Ri = "[object AsyncFunction]", Mi = "[object Function]",
    $i = "[object GeneratorFunction]", Ai = "[object Proxy]";
function ar(e) {
  if (!ae(e))
    return !1;
  var t = Ce(e);
  return t == Mi || t == $i || t == Ri || t == Ai
}
var Ti = le["__core-js_shared__"];
const ir = Ti;
var Rn = function() {
  var e = /[^.]+$/.exec(ir && ir.keys && ir.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : ""
}();
function Pi(e) { return !!Rn && Rn in e }
var Di = Function.prototype, ki = Di.toString;
function xe(e) {
  if (e != null) {
    try {
      return ki.call(e)
    } catch {
    }
    try {
      return e + ""
    } catch {
    }
  }
  return ""
}
var Ii = /[\\^$.*+?()[\]{}|]/g, Fi = /^\[object .+?Constructor\]$/,
    Li = Function.prototype, Bi = Object.prototype, Ui = Li.toString,
    Vi = Bi.hasOwnProperty,
    zi = RegExp(
        "^" +
        Ui.call(Vi)
            .replace(Ii, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                     "$1.*?") +
        "$");
function Gi(e) {
  if (!ae(e) || Pi(e))
    return !1;
  var t = ar(e) ? zi : Fi;
  return t.test(xe(e))
}
function Wi(e, t) { return e == null ? void 0 : e[t] }
function Ne(e, t) {
  var r = Wi(e, t);
  return Gi(r) ? r : void 0
}
var Hi = Ne(le, "WeakMap");
const sr = Hi;
var Mn = Object.create, Yi = function() {
  function e() {}
  return function(t) {
    if (!ae(t))
      return {};
    if (Mn)
      return Mn(t);
    e.prototype = t;
    var r = new e;
    return e.prototype = void 0, r
  }
}();
const Ji = Yi;
function qi(e, t, r) {
  switch (r.length) {
  case 0:
    return e.call(t);
  case 1:
    return e.call(t, r[0]);
  case 2:
    return e.call(t, r[0], r[1]);
  case 3:
    return e.call(t, r[0], r[1], r[2])
  }
  return e.apply(t, r)
}
function Qi() {}
function $n(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n;)
    t[r] = e[r];
  return t
}
var Xi = 800, Ki = 16, Zi = Date.now;
function es(e) {
  var t = 0, r = 0;
  return function() {
    var n = Zi(), o = Ki - (n - r);
    if (r = n, o > 0) {
      if (++t >= Xi)
        return arguments[0]
    } else
      t = 0;
    return e.apply(void 0, arguments)
  }
}
function ts(e) {
  return function() { return e }
}
var rs = function() {
  try {
    var e = Ne(Object, "defineProperty");
    return e({}, "", {}), e
  } catch {
  }
}();
const $t = rs;
var ns = $t ? function(e, t) {
  return $t(e, "toString",
            {configurable : !0, enumerable : !1, value : ts(t), writable : !0})
} : or, os = es(ns);
const An = os;
function as (e, t) {
  for (var r = -1, n = e == null ? 0 : e.length;
       ++r < n && t(e[r], r, e) !== !1;)
    ;
  return e
}
function is(e, t, r, n) {
  for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o;)
    if (t(e[a], a, e))
      return a;
  return -1
}
function ss(e) { return e !== e }
function cs(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o;)
    if (e[n] === t)
      return n;
  return -1
}
function us(e, t, r) { return t === t ? cs(e, t, r) : is(e, ss, r) }
function ls(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && us(e, t, 0) > -1
}
var fs = 9007199254740991, ds = /^(?:0|[1-9]\d*)$/;
function At(e, t) {
  var r = typeof e;
  return t = t ?? fs, !!t && (r == "number" || r != "symbol" && ds.test(e)) &&
                          e > -1 && e % 1 == 0 && e < t
}
function cr(e, t, r) {
  t == "__proto__" && $t
      ? $t(e, t, {configurable : !0, enumerable : !0, value : r, writable : !0})
      : e[t] = r
}
function ft(e, t) { return e === t || e !== e && t !== t }
var ps = Object.prototype, hs = ps.hasOwnProperty;
function ur(e, t, r) {
  var n = e[t];
  (!(hs.call(e, t) && ft(n, r)) || r === void 0 && !(t in e)) && cr(e, t, r)
}
function Be(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = t.length; ++a < i;) {
    var s = t[a], u = n ? n(r[s], e[s], s, r, e) : void 0;
    u === void 0 && (u = e[s]), o ? cr(r, s, u) : ur(r, s, u)
  }
  return r
}
var Tn = Math.max;
function Pn(e, t, r) {
  return t = Tn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = Tn(n.length - t, 0), i = Array(a);
         ++o < a;)
      i[o] = n[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t;)
      s[o] = n[o];
    return s[t] = r(i), qi(e, this, s)
  }
}
function Dn(e, t) { return An(Pn(e, t, or), e + "") }
var vs = 9007199254740991;
function lr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vs
}
function Tt(e) { return e != null && lr(e.length) && !ar(e) }
function ms(e, t, r) {
  if (!ae(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Tt(r) && At(t, r.length) : n == "string" && t in r)
             ? ft(r[t], e)
             : !1
}
function ys(e) {
  return Dn(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0,
        i = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0,
        i && ms(r[0], r[1], i) && (a = o < 3 ? void 0 : a, o = 1),
        t = Object(t);
         ++n < o;) {
      var s = r[n];
      s && e(t, s, n, a)
    }
    return t
  })
}
var gs = Object.prototype;
function fr(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || gs;
  return e === r
}
function bs(e, t) {
  for (var r = -1, n = Array(e); ++r < e;)
    n[r] = t(r);
  return n
}
var _s = "[object Arguments]";
function kn(e) { return fe(e) && Ce(e) == _s }
var In = Object.prototype, js = In.hasOwnProperty, Es = In.propertyIsEnumerable,
    ws = kn(function() { return arguments }()) ? kn : function(e) {
      return fe(e) && js.call(e, "callee") && !Es.call(e, "callee")
    };
const dt = ws;
function Ss() { return !1 }
var Fn = typeof exports == "object" && exports && !exports.nodeType && exports,
    Ln =
        Fn && typeof module == "object" && module && !module.nodeType && module,
    Os = Ln && Ln.exports === Fn, Bn = Os ? le.Buffer : void 0,
    Cs = Bn ? Bn.isBuffer : void 0, xs = Cs || Ss;
const pt = xs;
var Ns = "[object Arguments]", Rs = "[object Array]", Ms = "[object Boolean]",
    $s = "[object Date]", As = "[object Error]", Ts = "[object Function]",
    Ps = "[object Map]", Ds = "[object Number]", ks = "[object Object]",
    Is = "[object RegExp]", Fs = "[object Set]", Ls = "[object String]",
    Bs = "[object WeakMap]", Us = "[object ArrayBuffer]",
    Vs = "[object DataView]", zs = "[object Float32Array]",
    Gs = "[object Float64Array]", Ws = "[object Int8Array]",
    Hs = "[object Int16Array]", Ys = "[object Int32Array]",
    Js = "[object Uint8Array]", qs = "[object Uint8ClampedArray]",
    Qs = "[object Uint16Array]", Xs = "[object Uint32Array]", D = {};
D[zs] = D[Gs] = D[Ws] = D[Hs] = D[Ys] = D[Js] = D[qs] = D[Qs] = D[Xs] = !0,
        D[Ns] = D[Rs] = D[Us] = D[Ms] = D[Vs] = D[$s] = D[As] = D[Ts] = D[Ps] =
            D[Ds] = D[ks] = D[Is] = D[Fs] = D[Ls] = D[Bs] = !1;
function Ks(e) { return fe(e) && lr(e.length) && !!D[Ce(e)] }
function dr(e) {
  return function(t) { return e(t) }
}
var Un = typeof exports == "object" && exports && !exports.nodeType && exports,
    ht =
        Un && typeof module == "object" && module && !module.nodeType && module,
    Zs = ht && ht.exports === Un, pr = Zs && wn.process, ec = function() {
      try {
        var e = ht && ht.require && ht.require("util").types;
        return e || pr && pr.binding && pr.binding("util")
      } catch {
      }
    }();
const Ue = ec;
var Vn = Ue && Ue.isTypedArray, tc = Vn ? dr(Vn) : Ks;
const hr = tc;
var rc = Object.prototype, nc = rc.hasOwnProperty;
function zn(e, t) {
  var r = V(e), n = !r && dt(e), o = !r && !n && pt(e),
      a = !r && !n && !o && hr(e), i = r || n || o || a,
      s = i ? bs(e.length, String) : [], u = s.length;
  for (var f in e)
    (t || nc.call(e, f)) &&
        !(i &&
          (f == "length" || o && (f == "offset" || f == "parent") ||
           a && (f == "buffer" || f == "byteLength" || f == "byteOffset") ||
           At(f, u))) &&
        s.push(f);
  return s
}
function Gn(e, t) {
  return function(r) { return e(t(r)) }
}
var oc = Gn(Object.keys, Object);
const ac = oc;
var ic = Object.prototype, sc = ic.hasOwnProperty;
function cc(e) {
  if (!fr(e))
    return ac(e);
  var t = [];
  for (var r in Object(e))
    sc.call(e, r) && r != "constructor" && t.push(r);
  return t
}
function Pt(e) { return Tt(e) ? zn(e) : cc(e) }
function uc(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t
}
var lc = Object.prototype, fc = lc.hasOwnProperty;
function dc(e) {
  if (!ae(e))
    return uc(e);
  var t = fr(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !fc.call(e, n)) || r.push(n);
  return r
}
function vt(e) { return Tt(e) ? zn(e, !0) : dc(e) }
var pc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hc = /^\w*$/;
function vr(e, t) {
  if (V(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || rr(e)
             ? !0
             : hc.test(e) || !pc.test(e) || t != null && e in Object(t)
}
var vc = Ne(Object, "create");
const mt = vc;
function mc() { this.__data__ = mt ? mt(null) : {}, this.size = 0 }
function yc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t
}
var gc = "__lodash_hash_undefined__", bc = Object.prototype,
    _c = bc.hasOwnProperty;
function jc(e) {
  var t = this.__data__;
  if (mt) {
    var r = t[e];
    return r === gc ? void 0 : r
  }
  return _c.call(t, e) ? t[e] : void 0
}
var Ec = Object.prototype, wc = Ec.hasOwnProperty;
function Sc(e) {
  var t = this.__data__;
  return mt ? t[e] !== void 0 : wc.call(t, e)
}
var Oc = "__lodash_hash_undefined__";
function Cc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = mt && t === void 0 ? Oc : t,
                                           this
}
function Re(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
Re.prototype.clear = mc, Re.prototype.delete = yc, Re.prototype.get = jc,
                         Re.prototype.has = Sc, Re.prototype.set = Cc;
function xc() { this.__data__ = [], this.size = 0 }
function Dt(e, t) {
  for (var r = e.length; r--;)
    if (ft(e[r][0], t))
      return r;
  return -1
}
var Nc = Array.prototype, Rc = Nc.splice;
function Mc(e) {
  var t = this.__data__, r = Dt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Rc.call(t, r, 1), --this.size, !0
}
function $c(e) {
  var t = this.__data__, r = Dt(t, e);
  return r < 0 ? void 0 : t[r][1]
}
function Ac(e) { return Dt(this.__data__, e) > -1 }
function Tc(e, t) {
  var r = this.__data__, n = Dt(r, e);
  return n < 0 ? (++this.size, r.push([ e, t ])) : r[n][1] = t, this
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
ve.prototype.clear = xc, ve.prototype.delete = Mc, ve.prototype.get = $c,
                         ve.prototype.has = Ac, ve.prototype.set = Tc;
var Pc = Ne(le, "Map");
const yt = Pc;
function Dc() {
  this.size = 0, this.__data__ = {
    hash : new Re,
    map : new (yt || ve),
    string : new Re
  }
}
function kc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
             ? e !== "__proto__"
             : e === null
}
function kt(e, t) {
  var r = e.__data__;
  return kc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
}
function Ic(e) {
  var t = kt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t
}
function Fc(e) { return kt(this, e).get(e) }
function Lc(e) { return kt(this, e).has(e) }
function Bc(e, t) {
  var r = kt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this
}
function me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
me.prototype.clear = Dc, me.prototype.delete = Ic, me.prototype.get = Fc,
                         me.prototype.has = Lc, me.prototype.set = Bc;
var Uc = "Expected a function";
function mr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Uc);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, n);
    return r.cache = a.set(o, i) || a, i
  };
  return r.cache = new (mr.Cache || me), r
}
mr.Cache = me;
var Vc = 500;
function zc(e) {
  var t = mr(e, function(n) { return r.size === Vc && r.clear(), n }),
      r = t.cache;
  return t
}
var Gc =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Wc = /\\(\\)?/g,
    Hc = zc(function(e) {
      var t = [];
      return e.charCodeAt(0) === 46 && t.push(""),
             e.replace(
                 Gc, function(r, n, o,
                              a) { t.push(o ? a.replace(Wc, "$1") : n || r) }),
             t
    });
const Yc = Hc;
function Jc(e) { return e == null ? "" : Nn(e) }
function Ve(e, t) { return V(e) ? e : vr(e, t) ? [ e ] : Yc(Jc(e)) }
var qc = 1 / 0;
function ze(e) {
  if (typeof e == "string" || rr(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -qc ? "-0" : t
}
function It(e, t) {
  t = Ve(t, e);
  for (var r = 0, n = t.length; e != null && r < n;)
    e = e[ze(t[r++])];
  return r && r == n ? e : void 0
}
function Wn(e, t, r) {
  var n = e == null ? void 0 : It(e, t);
  return n === void 0 ? r : n
}
function yr(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n;)
    e[o + r] = t[r];
  return e
}
var Hn = re ? re.isConcatSpreadable : void 0;
function Qc(e) { return V(e) || dt(e) || !!(Hn && e && e[Hn]) }
function gr(e, t, r, n, o) {
  var a = -1, i = e.length;
  for (r || (r = Qc), o || (o = []); ++a < i;) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? gr(s, t - 1, r, n, o) : yr(o, s)
                  : n || (o[o.length] = s)
  }
  return o
}
function Xc(e) {
  var t = e == null ? 0 : e.length;
  return t ? gr(e, 1) : []
}
function Kc(e) { return An(Pn(e, void 0, Xc), e + "") }
var Zc = Gn(Object.getPrototypeOf, Object);
const br = Zc;
var eu = "[object Object]", tu = Function.prototype, ru = Object.prototype,
    Yn = tu.toString, nu = ru.hasOwnProperty, ou = Yn.call(Object);
function X(e) {
  if (!fe(e) || Ce(e) != eu)
    return !1;
  var t = br(e);
  if (t === null)
    return !0;
  var r = nu.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Yn.call(r) == ou
}
function au(e, t, r) {
  var n = -1, o = e.length;
  t<0 && (t = -t > o ? 0 : o + t), r = r>o ? o : r,
      r<0 && (r += o), o = t>r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++n < o;)
    a[n] = e[n + t];
  return a
}
function iu() { this.__data__ = new ve, this.size = 0 }
function su(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r
}
function cu(e) { return this.__data__.get(e) }
function uu(e) { return this.__data__.has(e) }
var lu = 200;
function fu(e, t) {
  var r = this.__data__;
  if (r instanceof ve) {
    var n = r.__data__;
    if (!yt || n.length < lu - 1)
      return n.push([ e, t ]), this.size = ++r.size, this;
    r = this.__data__ = new me(n)
  }
  return r.set(e, t), this.size = r.size, this
}
function ie(e) {
  var t = this.__data__ = new ve(e);
  this.size = t.size
}
ie.prototype.clear = iu, ie.prototype.delete = su, ie.prototype.get = cu,
                         ie.prototype.has = uu, ie.prototype.set = fu;
function du(e, t) { return e && Be(t, Pt(t), e) }
function pu(e, t) { return e && Be(t, vt(t), e) }
var Jn = typeof exports == "object" && exports && !exports.nodeType && exports,
    qn =
        Jn && typeof module == "object" && module && !module.nodeType && module,
    hu = qn && qn.exports === Jn, Qn = hu ? le.Buffer : void 0,
    Xn = Qn ? Qn.allocUnsafe : void 0;
function Kn(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Xn ? Xn(r) : new e.constructor(r);
  return e.copy(n), n
}
function vu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n;) {
    var i = e[r];
    t(i, r, e) && (a[o++] = i)
  }
  return a
}
function Zn() { return [] }
var mu = Object.prototype, yu = mu.propertyIsEnumerable,
    eo = Object.getOwnPropertySymbols, gu = eo ? function(e) {
      return e == null ? []
                       : (e = Object(e),
                          vu(eo(e), function(t) { return yu.call(e, t) }))
    } : Zn;
const _r = gu;
function bu(e, t) { return Be(e, _r(e), t) }
var _u = Object.getOwnPropertySymbols, ju = _u ? function(e) {
  for (var t = []; e;)
    yr(t, _r(e)), e = br(e);
  return t
} : Zn;
const to = ju;
function Eu(e, t) { return Be(e, to(e), t) }
function ro(e, t, r) {
  var n = t(e);
  return V(e) ? n : yr(n, r(e))
}
function jr(e) { return ro(e, Pt, _r) }
function Er(e) { return ro(e, vt, to) }
var wu = Ne(le, "DataView");
const wr = wu;
var Su = Ne(le, "Promise");
const Sr = Su;
var Ou = Ne(le, "Set");
const Ge = Ou;
var no = "[object Map]", Cu = "[object Object]", oo = "[object Promise]",
    ao = "[object Set]", io = "[object WeakMap]", so = "[object DataView]",
    xu = xe(wr), Nu = xe(yt), Ru = xe(Sr), Mu = xe(Ge), $u = xe(sr), Me = Ce;
(wr && Me(new wr(new ArrayBuffer(1))) != so || yt && Me(new yt) != no ||
 Sr && Me(Sr.resolve()) != oo || Ge && Me(new Ge) != ao ||
 sr && Me(new sr) != io) &&
    (Me = function(e) {
      var t = Ce(e), r = t == Cu ? e.constructor : void 0, n = r ? xe(r) : "";
      if (n)
        switch (n) {
        case xu:
          return so;
        case Nu:
          return no;
        case Ru:
          return oo;
        case Mu:
          return ao;
        case $u:
          return io
        }
      return t
    });
const gt = Me;
var Au = Object.prototype, Tu = Au.hasOwnProperty;
function Pu(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Tu.call(e, "index") &&
             (r.index = e.index, r.input = e.input),
         r
}
var Du = le.Uint8Array;
const Ft = Du;
function Or(e) {
  var t = new e.constructor(e.byteLength);
  return new Ft(t).set(new Ft(e)), t
}
function ku(e, t) {
  var r = t ? Or(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength)
}
var Iu = /\w*$/;
function Fu(e) {
  var t = new e.constructor(e.source, Iu.exec(e));
  return t.lastIndex = e.lastIndex, t
}
var co = re ? re.prototype : void 0, uo = co ? co.valueOf : void 0;
function Lu(e) { return uo ? Object(uo.call(e)) : {} }
function lo(e, t) {
  var r = t ? Or(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length)
}
var Bu = "[object Boolean]", Uu = "[object Date]", Vu = "[object Map]",
    zu = "[object Number]", Gu = "[object RegExp]", Wu = "[object Set]",
    Hu = "[object String]", Yu = "[object Symbol]", Ju = "[object ArrayBuffer]",
    qu = "[object DataView]", Qu = "[object Float32Array]",
    Xu = "[object Float64Array]", Ku = "[object Int8Array]",
    Zu = "[object Int16Array]", el = "[object Int32Array]",
    tl = "[object Uint8Array]", rl = "[object Uint8ClampedArray]",
    nl = "[object Uint16Array]", ol = "[object Uint32Array]";
function al(e, t, r) {
  var n = e.constructor;
  switch (t) {
  case Ju:
    return Or(e);
  case Bu:
  case Uu:
    return new n(+e);
  case qu:
    return ku(e, r);
  case Qu:
  case Xu:
  case Ku:
  case Zu:
  case el:
  case tl:
  case rl:
  case nl:
  case ol:
    return lo(e, r);
  case Vu:
    return new n;
  case zu:
  case Hu:
    return new n(e);
  case Gu:
    return Fu(e);
  case Wu:
    return new n;
  case Yu:
    return Lu(e)
  }
}
function fo(e) {
  return typeof e.constructor == "function" && !fr(e) ? Ji(br(e)) : {}
}
var il = "[object Map]";
function sl(e) { return fe(e) && gt(e) == il }
var po = Ue && Ue.isMap, cl = po ? dr(po) : sl;
const ul = cl;
var ll = "[object Set]";
function fl(e) { return fe(e) && gt(e) == ll }
var ho = Ue && Ue.isSet, dl = ho ? dr(ho) : fl;
const pl = dl;
var hl = 1, vl = 2, ml = 4, vo = "[object Arguments]", yl = "[object Array]",
    gl = "[object Boolean]", bl = "[object Date]", _l = "[object Error]",
    mo = "[object Function]", jl = "[object GeneratorFunction]",
    El = "[object Map]", wl = "[object Number]", yo = "[object Object]",
    Sl = "[object RegExp]", Ol = "[object Set]", Cl = "[object String]",
    xl = "[object Symbol]", Nl = "[object WeakMap]",
    Rl = "[object ArrayBuffer]", Ml = "[object DataView]",
    $l = "[object Float32Array]", Al = "[object Float64Array]",
    Tl = "[object Int8Array]", Pl = "[object Int16Array]",
    Dl = "[object Int32Array]", kl = "[object Uint8Array]",
    Il = "[object Uint8ClampedArray]", Fl = "[object Uint16Array]",
    Ll = "[object Uint32Array]", P = {};
P[vo] = P[yl] = P[Rl] = P[Ml] = P[gl] = P[bl] = P[$l] = P[Al] = P[Tl] = P[Pl] =
    P[Dl] = P[El] = P[wl] = P[yo] = P[Sl] = P[Ol] = P[Cl] = P[xl] = P[kl] =
        P[Il] = P[Fl] = P[Ll] = !0,
        P[_l] = P[mo] = P[Nl] = !1;
function bt(e, t, r, n, o, a) {
  var i, s = t & hl, u = t & vl, f = t & ml;
  if (r && (i = o ? r(e, n, o, a) : r(e)), i !== void 0)
    return i;
  if (!ae(e))
    return e;
  var l = V(e);
  if (l) {
    if (i = Pu(e), !s)
      return $n(e, i)
  } else {
    var p = gt(e), d = p == mo || p == jl;
    if (pt(e))
      return Kn(e, s);
    if (p == yo || p == vo || d && !o) {
      if (i = u || d ? {} : fo(e), !s)
        return u ? Eu(e, pu(i, e)) : bu(e, du(i, e))
    } else {
      if (!P[p])
        return o ? e : {};
      i = al(e, p, s)
    }
  }
  a || (a = new ie);
  var v = a.get(e);
  if (v)
    return v;
  a.set(e, i),
      pl(e) ? e.forEach(function(w) { i.add(bt(w, t, r, w, e, a)) })
            : ul(e) &&
                  e.forEach(function(w, j) { i.set(j, bt(w, t, r, j, e, a)) });
  var g = f ? u ? Er : jr : u ? vt : Pt, E = l ? void 0 : g(e);
  return as (E || e,
             function(
                 w,
                 j) { E && (j = w, w = e[j]), ur(i, j, bt(w, t, r, j, e, a)) }),
         i
}
var Bl = 1, Ul = 4;
function go(e) { return bt(e, Bl | Ul) }
var Vl = "__lodash_hash_undefined__";
function zl(e) { return this.__data__.set(e, Vl), this }
function Gl(e) { return this.__data__.has(e) }
function _t(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new me; ++t < r;)
    this.add(e[t])
}
_t.prototype.add = _t.prototype.push = zl, _t.prototype.has = Gl;
function Wl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
    if (t(e[r], r, e))
      return !0;
  return !1
}
function bo(e, t) { return e.has(t) }
var Hl = 1, Yl = 2;
function _o(e, t, r, n, o, a) {
  var i = r & Hl, s = e.length, u = t.length;
  if (s != u && !(i && u > s))
    return !1;
  var f = a.get(e), l = a.get(t);
  if (f && l)
    return f == t && l == e;
  var p = -1, d = !0, v = r & Yl ? new _t : void 0;
  for (a.set(e, t), a.set(t, e); ++p < s;) {
    var g = e[p], E = t[p];
    if (n)
      var w = i ? n(E, g, p, t, e, a) : n(g, E, p, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      d = !1;
      break
    }
    if (v) {
      if (!Wl(t, function(j, O) {
            if (!bo(v, O) && (g === j || o(g, j, r, n, a)))
              return v.push(O)
          })) {
        d = !1;
        break
      }
    } else if (!(g === E || o(g, E, r, n, a))) {
      d = !1;
      break
    }
  }
  return a.delete(e), a.delete(t), d
}
function Jl(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) { r[++t] = [ o, n ] }), r
}
function Cr(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) { r[++t] = n }), r
}
var ql = 1, Ql = 2, Xl = "[object Boolean]", Kl = "[object Date]",
    Zl = "[object Error]", ef = "[object Map]", tf = "[object Number]",
    rf = "[object RegExp]", nf = "[object Set]", of = "[object String]",
    af = "[object Symbol]", sf = "[object ArrayBuffer]",
    cf = "[object DataView]", jo = re ? re.prototype : void 0,
    xr = jo ? jo.valueOf : void 0;
function uf(e, t, r, n, o, a, i) {
  switch (r) {
  case cf:
    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
      return !1;
    e = e.buffer, t = t.buffer;
  case sf:
    return !(e.byteLength != t.byteLength || !a(new Ft(e), new Ft(t)));
  case Xl:
  case Kl:
  case tf:
    return ft(+e, +t);
  case Zl:
    return e.name == t.name && e.message == t.message;
  case rf:
  case of:
    return e == t + "";
  case ef:
    var s = Jl;
  case nf:
    var u = n & ql;
    if (s || (s = Cr), e.size != t.size && !u)
      return !1;
    var f = i.get(e);
    if (f)
      return f == t;
    n |= Ql, i.set(e, t);
    var l = _o(s(e), s(t), n, o, a, i);
    return i.delete(e), l;
  case af:
    if (xr)
      return xr.call(e) == xr.call(t)
  }
  return !1
}
var lf = 1, ff = Object.prototype, df = ff.hasOwnProperty;
function pf(e, t, r, n, o, a) {
  var i = r & lf, s = jr(e), u = s.length, f = jr(t), l = f.length;
  if (u != l && !i)
    return !1;
  for (var p = u; p--;) {
    var d = s[p];
    if (!(i ? d in t : df.call(t, d)))
      return !1
  }
  var v = a.get(e), g = a.get(t);
  if (v && g)
    return v == t && g == e;
  var E = !0;
  a.set(e, t), a.set(t, e);
  for (var w = i; ++p < u;) {
    d = s[p];
    var j = e[d], O = t[d];
    if (n)
      var U = i ? n(O, j, d, t, e, a) : n(j, O, d, e, t, a);
    if (!(U === void 0 ? j === O || o(j, O, r, n, a) : U)) {
      E = !1;
      break
    }
    w || (w = d == "constructor")
  }
  if (E && !w) {
    var I = e.constructor, Y = t.constructor;
    I != Y && "constructor" in e && "constructor" in t &&
        !(typeof I == "function" && I instanceof I && typeof Y == "function" &&
          Y instanceof Y) &&
        (E = !1)
  }
  return a.delete(e), a.delete(t), E
}
var hf = 1, Eo = "[object Arguments]", wo = "[object Array]",
    Lt = "[object Object]", vf = Object.prototype, So = vf.hasOwnProperty;
function mf(e, t, r, n, o, a) {
  var i = V(e), s = V(t), u = i ? wo : gt(e), f = s ? wo : gt(t);
  u = u == Eo ? Lt : u, f = f == Eo ? Lt : f;
  var l = u == Lt, p = f == Lt, d = u == f;
  if (d && pt(e)) {
    if (!pt(t))
      return !1;
    i = !0, l = !1
  }
  if (d && !l)
    return a || (a = new ie),
           i || hr(e) ? _o(e, t, r, n, o, a) : uf(e, t, u, r, n, o, a);
  if (!(r & hf)) {
    var v = l && So.call(e, "__wrapped__"), g = p && So.call(t, "__wrapped__");
    if (v || g) {
      var E = v ? e.value() : e, w = g ? t.value() : t;
      return a || (a = new ie), o(E, w, r, n, a)
    }
  }
  return d ? (a || (a = new ie), pf(e, t, r, n, o, a)) : !1
}
function Nr(e, t, r, n, o) {
  return e === t                                      ? !0
         : e == null || t == null || !fe(e) && !fe(t) ? e !== e && t !== t
                                                      : mf(e, t, r, n, Nr, o)
}
var yf = 1, gf = 2;
function bf(e, t, r, n) {
  var o = r.length, a = o, i = !n;
  if (e == null)
    return !a;
  for (e = Object(e); o--;) {
    var s = r[o];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1
  }
  for (; ++o < a;) {
    s = r[o];
    var u = s[0], f = e[u], l = s[1];
    if (i && s[2]) {
      if (f === void 0 && !(u in e))
        return !1
    } else {
      var p = new ie;
      if (n)
        var d = n(f, l, u, e, t, p);
      if (!(d === void 0 ? Nr(l, f, yf | gf, n, p) : d))
        return !1
    }
  }
  return !0
}
function Oo(e) { return e === e && !ae(e) }
function _f(e) {
  for (var t = Pt(e), r = t.length; r--;) {
    var n = t[r], o = e[n];
    t[r] = [ n, o, Oo(o) ]
  }
  return t
}
function Co(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
  }
}
function jf(e) {
  var t = _f(e);
  return t.length == 1 && t[0][2]
             ? Co(t[0][0], t[0][1])
             : function(r) { return r === e || bf(r, e, t) }
}
function Ef(e, t) { return e != null && t in Object(e) }
function wf(e, t, r) {
  t = Ve(t, e);
  for (var n = -1, o = t.length, a = !1; ++n < o;) {
    var i = ze(t[n]);
    if (!(a = e != null && r(e, i)))
      break;
    e = e[i]
  }
  return a || ++n != o ? a
                       : (o = e == null ? 0 : e.length,
                          !!o && lr(o) && At(i, o) && (V(e) || dt(e)))
}
function Sf(e, t) { return e != null && wf(e, t, Ef) }
var Of = 1, Cf = 2;
function xf(e, t) {
  return vr(e) && Oo(t) ? Co(ze(e), t) : function(r) {
    var n = Wn(r, e);
    return n === void 0 && n === t ? Sf(r, e) : Nr(t, n, Of | Cf)
  }
}
function Nf(e) {
  return function(t) { return t == null ? void 0 : t[e] }
}
function Rf(e) {
  return function(t) { return It(t, e) }
}
function Mf(e) { return vr(e) ? Nf(ze(e)) : Rf(e) }
function Rr(e) {
  return typeof e == "function" ? e
         : e == null            ? or
         : typeof e == "object" ? V(e) ? xf(e[0], e[1]) : jf(e)
                                : Mf(e)
}
function $f(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), i = n(t), s = i.length; s--;) {
      var u = i[e ? s : ++o];
      if (r(a[u], u, a) === !1)
        break
    }
    return t
  }
}
var Af = $f();
const Tf = Af;
function Mr(e, t, r) {
  (r !== void 0 && !ft(e[t], r) || r === void 0 && !(t in e)) && cr(e, t, r)
}
function $r(e) { return fe(e) && Tt(e) }
function Ar(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t]
}
function Pf(e) { return Be(e, vt(e)) }
function Df(e, t, r, n, o, a, i) {
  var s = Ar(e, r), u = Ar(t, r), f = i.get(u);
  if (f) {
    Mr(e, r, f);
    return
  }
  var l = a ? a(s, u, r + "", e, t, i) : void 0, p = l === void 0;
  if (p) {
    var d = V(u), v = !d && pt(u), g = !d && !v && hr(u);
    l = u, d || v || g ? V(s)    ? l = s
                         : $r(s) ? l = $n(s)
                         : v     ? (p = !1, l = Kn(u, !0))
                         : g     ? (p = !1, l = lo(u, !0))
                                 : l = []
           : X(u) || dt(u)
               ? (l = s, dt(s) ? l = Pf(s) : (!ae(s) || ar(s)) && (l = fo(u)))
               : p = !1
  }
  p && (i.set(u, l), o(l, u, n, a, i), i.delete(u)), Mr(e, r, l)
}
function xo(e, t, r, n, o) {
  e !== t && Tf(t, function(a, i) {
    if (o || (o = new ie), ae(a))
      Df(e, t, i, r, xo, n, o);
    else {
      var s = n ? n(Ar(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), Mr(e, i, s)
    }
  }, vt)
}
function kf(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o;)
    if (r(t, e[n]))
      return !0;
  return !1
}
function No(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0
}
function If(e, t) { return t.length < 2 ? e : It(e, au(t, 0, -1)) }
var Ff = ys(function(e, t, r) { xo(e, t, r) });
const Ro = Ff;
var Lf = "Expected a function";
function Bf(e) {
  if (typeof e != "function")
    throw new TypeError(Lf);
  return function() {
    var t = arguments;
    switch (t.length) {
    case 0:
      return !e.call(this);
    case 1:
      return !e.call(this, t[0]);
    case 2:
      return !e.call(this, t[0], t[1]);
    case 3:
      return !e.call(this, t[0], t[1], t[2])
    }
    return !e.apply(this, t)
  }
}
function Uf(e, t) {
  return t = Ve(t, e), e = If(e, t), e == null || delete e[ze(No(t))]
}
function Vf(e) { return X(e) ? void 0 : e }
var zf = 1, Gf = 2, Wf = 4,
    Hf = Kc(function(e, t) {
      var r = {};
      if (e == null)
        return r;
      var n = !1;
      t = nr(t,
             function(a) { return a = Ve(a, e), n || (n = a.length > 1), a }),
      Be(e, Er(e), r), n && (r = bt(r, zf | Gf | Wf, Vf));
      for (var o = t.length; o--;)
        Uf(r, t[o]);
      return r
    });
const Mo = Hf;
function Yf(e, t, r, n) {
  if (!ae(e))
    return e;
  t = Ve(t, e);
  for (var o = -1, a = t.length, i = a - 1, s = e; s != null && ++o < a;) {
    var u = ze(t[o]), f = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != i) {
      var l = s[u];
      f = n ? n(l, u, s) : void 0, f === void 0 && (f = ae(l)          ? l
                                                        : At(t[o + 1]) ? []
                                                                       : {})
    }
    ur(s, u, f), s = s[u]
  }
  return e
}
function Jf(e, t, r) {
  for (var n = -1, o = t.length, a = {}; ++n < o;) {
    var i = t[n], s = It(e, i);
    r(s, i) && Yf(a, Ve(i, e), s)
  }
  return a
}
function qf(e, t) {
  if (e == null)
    return {};
  var r = nr(Er(e), function(n) { return [ n ] });
  return t = Rr(t), Jf(e, r, function(n, o) { return t(n, o[0]) })
}
function Qf(e, t) { return qf(e, Bf(Rr(t))) }
var Xf = 1 / 0, Kf = Ge && 1 / Cr(new Ge([, -0 ]))[1] == Xf
                         ? function(e) { return new Ge(e) }
                         : Qi;
const Zf = Kf;
var ed = 200;
function td(e, t, r) {
  var n = -1, o = ls, a = e.length, i = !0, s = [], u = s;
  if (r)
    i = !1, o = kf;
  else if (a >= ed) {
    var f = t ? null : Zf(e);
    if (f)
      return Cr(f);
    i = !1, o = bo, u = new _t
  } else
    u = t ? [] : s;
  e: for (; ++n < a;) {
    var l = e[n], p = t ? t(l) : l;
    if (l = r || l !== 0 ? l : 0, i && p === p) {
      for (var d = u.length; d--;)
        if (u[d] === p)
          continue e;
      t && u.push(p), s.push(l)
    } else
      o(u, p, r) || (u !== s && u.push(p), s.push(l))
  }
  return s
}
var rd = Dn(function(e) {
  var t = No(e);
  return $r(t) && (t = void 0), td(gr(e, 1, $r, !0), Rr(t))
});
const nd = rd;
class $o extends TypeError {
  constructor(t, r) {
    let n;
    const {message : o, ...a} = t, {path : i} = t,
                        s = i.length === 0 ? o
                                           : `At path: ${i.join(".")} -- ${o}`;
    super(s), this.value = void 0, this.key = void 0, this.type = void 0,
              this.refinement = void 0, this.path = void 0,
              this.branch = void 0, this.failures = void 0,
              Object.assign(this, a), this.name = this.constructor.name,
              this.failures = () => n ?? (n = [ t, ...r() ])
  }
}
function od(e) { return se(e) && typeof e[Symbol.iterator] == "function" }
function se(e) { return typeof e == "object" && e != null }
function Z(e) {
  return typeof e == "symbol"   ? e.toString()
         : typeof e == "string" ? JSON.stringify(e)
                                : `${e}`
}
function ad(e) {
  const {done : t, value : r} = e.next();
  return t ? void 0 : r
}
function id(e, t, r, n) {
  if (e === !0)
    return;
  e === !1 ? e = {} : typeof e == "string" && (e = {message : e});
  const {path : o, branch : a} = t, {type : i} = r, {
    refinement : s,
    message : u = `Expected a value of type \`${i}\`${
        s ? ` with refinement \`${s}\`` : ""}, but received: \`${Z(n)}\``
  } = e;
  return {
    value: n, type: i, refinement: s, key: o[o.length - 1], path: o, branch: a,
        ...e, message: u
  }
}
function* Ao(e, t, r, n) {
  od(e) || (e = [ e ]);
  for (const o of e) {
    const a = id(o, t, r, n);
    a && (yield a)
  }
}
function* Tr(e, t, r) {
  r === void 0 && (r = {});
  const {path : n = [],
         branch : o = [ e ],
         coerce : a = !1,
         mask : i = !1} = r,
                    s = {path : n, branch : o};
  if (a && (e = t.coercer(e, s), i && t.type !== "type" && se(t.schema) &&
                                     se(e) && !Array.isArray(e)))
    for (const f in e)
      t.schema[f] === void 0 && delete e[f];
  let u = "valid";
  for (const f of t.validator(e, s))
    u = "not_valid", yield [f, void 0];
  for (let [f, l, p] of t.entries(e, s)) {
    const d = Tr(l, p, {
      path : f === void 0 ? n : [...n, f ],
      branch : f === void 0 ? o : [...o, l ],
      coerce : a,
      mask : i
    });
    for (const v of d)
      v[0] ? (u = v[0].refinement != null ? "not_refined" : "not_valid",
              yield [v[0], void 0])
           : a && (l = v[1],
                   f === void 0       ? e = l
                   : e instanceof Map ? e.set(f, l)
                   : e instanceof Set
                       ? e.add(l)
                       : se(e) && (l !== void 0 || f in e) && (e[f] = l))
  }
  if (u !== "not_valid")
    for (const f of t.refiner(e, s))
      u = "not_refined", yield [f, void 0];
  u === "valid" && (yield [void 0, e])
}
class de {
  constructor(t) {
    this.TYPE = void 0, this.type = void 0, this.schema = void 0,
    this.coercer = void 0, this.validator = void 0, this.refiner = void 0,
    this.entries = void 0;
    const {
      type : r,
      schema : n,
      validator : o,
      refiner : a,
      coercer : i = u => u,
      entries : s = function*() {}
    } = t;
    this.type = r, this.schema = n, this.entries = s, this.coercer = i,
    o ? this.validator = (u, f) => {
      const l = o(u, f);
      return Ao(l, f, this, u)
    } : this.validator = () => [], a ? this.refiner = (u, f) => {
      const l = a(u, f);
      return Ao(l, f, this, u)
    } : this.refiner = () => []
  }
  assert(t) { return To(t, this) }
  create(t) { return sd(t, this) }
  is(t) { return ud(t, this) }
  mask(t) { return cd(t, this) }
  validate(t, r) { return r === void 0 && (r = {}), We(t, this, r) }
}
function To(e, t) {
  const r = We(e, t);
  if (r[0])
    throw r[0]
}
function sd(e, t) {
  const r = We(e, t, {coerce : !0});
  if (r[0])
    throw r[0];
  return r[1]
}
function cd(e, t) {
  const r = We(e, t, {coerce : !0, mask : !0});
  if (r[0])
    throw r[0];
  return r[1]
}
function ud(e, t) { return !We(e, t)[0] }
function We(e, t, r) {
  r === void 0 && (r = {});
  const n = Tr(e, t, r), o = ad(n);
  return o[0]?[new $o(o[0],function*(){for(const a of n)a[0]&&(yield a[0])}),void 0]:[void 0,o[1]]
}
function Pr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  const n = t[0].type === "type", o = t.map(i => i.schema),
        a = Object.assign({}, ...o);
  return n ? Io(a) : $(a)
}
function Ee(e, t) { return new de({type : e, schema : null, validator : t}) }
function He(e) {
  return new de({
    type : "dynamic",
    schema : null,
    * entries(t, r) { yield* e(t, r).entries(t, r) },
    validator(t, r) { return e(t, r).validator(t, r) },
    coercer(t, r) { return e(t, r).coercer(t, r) },
    refiner(t, r) { return e(t, r).refiner(t, r) }
  })
}
function Po(e, t) {
  const {schema : r} = e, n = {...r};
  for (const o of t)
    delete n[o];
  switch (e.type) {
  case "type":
    return Io(n);
  default:
    return $(n)
  }
}
function G() { return Ee("any", () => !0) }
function B(e) {
  return new de({
    type : "array",
    schema : e,
    *
        entries(t) {
          if (e && Array.isArray(t))
            for (const [r, n] of t.entries())
              yield [r, n, e]
        },
    coercer(t) { return Array.isArray(t) ? t.slice() : t },
    validator(t) {
      return Array.isArray(t) ||
             `Expected an array value, but received: ${Z(t)}`
    }
  })
}
function $e() { return Ee("boolean", e => typeof e == "boolean") }
function Dr(e) {
  const t = {}, r = e.map(n => Z(n)).join();
  for (const n of e)
    t[n] = n;
  return new de({
    type : "enums",
    schema : t,
    validator(n) {
      return e.includes(n) || `Expected one of \`${r}\`, but received: ${Z(n)}`
    }
  })
}
function Do() {
  return Ee("func", e => typeof e == "function" ||
                         `Expected a function, but received: ${Z(e)}`)
}
function K(e) {
  const t = Z(e), r = typeof e;
  return new de({
    type : "literal",
    schema : r === "string" || r === "number" || r === "boolean" ? e : null,
    validator(n) {
      return n === e || `Expected the literal \`${t}\`, but received: ${Z(n)}`
    }
  })
}
function ld() { return Ee("never", () => !1) }
function ko() {
  return Ee("number", e => typeof e == "number" && !isNaN(e) ||
                           `Expected a number, but received: ${Z(e)}`)
}
function $(e) {
  const t = e ? Object.keys(e) : [], r = ld();
  return new de({
    type : "object",
    schema : e || null,
    *
        entries(n) {
          if (e && se(n)) {
            const o = new Set(Object.keys(n));
            for (const a of t)
              o.delete(a), yield [a, n[a], e[a]];
            for (const a of o)
              yield [a, n[a], r]
          }
        },
    validator(
        n) { return se(n) || `Expected an object, but received: ${Z(n)}` },
    coercer(n) { return se(n) ? {...n} : n }
  })
}
function b(e) {
  return new de({
    ...e,
    validator : (t, r) => t === void 0 || e.validator(t, r),
    refiner : (t, r) => t === void 0 || e.refiner(t, r)
  })
}
function jt(e, t) {
  return new de({
    type : "record",
    schema : null,
    *
        entries(r) {
          if (se(r))
            for (const n in r) {
              const o = r[n];
              yield [n, n, e], yield [n, o, t]
            }
        },
    validator(r) { return se(r) || `Expected an object, but received: ${Z(r)}` }
  })
}
function y() {
  return Ee("string", e => typeof e == "string" ||
                           `Expected a string, but received: ${Z(e)}`)
}
function Io(e) {
  const t = Object.keys(e);
  return new de({
    type : "type",
    schema : e,
    *
        entries(r) {
          if (se(r))
            for (const n of t)
              yield [n, r[n], e[n]]
        },
    validator(r) { return se(r) || `Expected an object, but received: ${Z(r)}` }
  })
}
function J(e) {
  const t = e.map(r => r.type).join(" | ");
  return new de({
    type : "union",
    schema : null,
    coercer(r, n) {
      return (e.find(o => {
               const [a] = o.validate(r, {coerce : !0});
               return !a
             }) ||
              fd())
          .coercer(r, n)
    },
    validator(r, n) {
      const o = [];
      for (const a of e) {
        const [...i] = Tr(r, a, n), [ s ] = i;
        if (s[0])
          for (const [u] of i)
            u && o.push(u);
        else
          return []
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${
            Z(r)}`,
        ...o
      ]
    }
  })
}
function fd() { return Ee("unknown", () => !0) }
const kr = $({
  package : y(),
  version : y(),
  name : y(),
  exportName : b(y()),
  destructuring : b($e()),
  subName : b(y()),
  main : b(y()),
  cssPaths : b(B(y()))
}),
      dd = B(kr), pd = [
        "CBlock", "CContainer", "CImage", "CCanvas", "CVideo", "CAudio",
        "CText", "CNativeTag"
      ];
var ne = (e => (e.SLOT = "SLOT", e.FUNCTION = "FUNCTION",
                e.EXPRESSION = "EXPRESSION", e))(ne || {}),
    Ir = (e => (e.DESIGN = "design", e.SAVE = "save", e))(Ir || {}),
    Fr = (e => (e.FUNC = "FUNC", e.COMP = "COMP", e))(Fr || {});
const hd = () =>
          Ee("normalObj",
             e => !X(e) || [ ne.SLOT, ne.EXPRESSION, ne.FUNCTION ].includes(
                               e == null ? void 0 : e.type)
                      ? !1
                      : (We(e, jt(y(), Lr)), !0)),
      Lr = J([
        y(), ko(), $e(), $({
          type : K(ne.SLOT),
          renderType : Dr([ Fr.FUNC, Fr.COMP ]),
          params : b(B(y())),
          value : He(() => J([ Ye, B(Ye) ]))
        }),
        $({type : K(ne.EXPRESSION), value : y()}),
        $({type : K(ne.FUNCTION), value : y()}), hd(), B(He(() => Lr))
      ]),
      Fo = $({type : K(ne.EXPRESSION), value : y()}),
      Ye = $({
        id : b(y()),
        title : b(y()),
        componentName : y(),
        props : b(jt(y(), Lr)),
        nodeName : b(y()),
        state : b(jt(y(), G())),
        children : He(() => b(B(J([ y(), Ye ])))),
        configure : b(G()),
        css : b(G()),
        style : b(G()),
        classNames : b(B(G())),
        refId : b(y()),
        extra : b(jt(G(), G())),
        condition : b(J([ $e(), Fo ])),
        loop : b($({
          open : $e(),
          data : J([ B(G()), Fo ]),
          args : b(B(y())),
          forName : b(y()),
          forIndex : b(y()),
          key : b(G()),
          name : b(y())
        })),
        methods : b(B(G()))
      }),
      Bt = J([ y(), $({label : y(), tip : b(y())}) ]),
      vd = $({
        type : K("shape"),
        value : B($({name : y(), title : Bt, valueType : He(() => Ut)}))
      }),
      md = $({type : K("enums"), value : B(y())});
$({type : K("array"), value : He(() => Ut)});
const yd = $({type : K("array"), value : He(() => B(Ut))}),
      Ut = J([
        Dr([ "array", "boolean", "number", "object", "string" ]),
        Dr([ "component", "expression", "function" ]), vd, md, yd
      ]),
      gd = J([
        y(), $({
          componentName : y(),
          props : b(G()),
          initialValue : b(G()),
          component : b(G())
        })
      ]),
      Br = $({
        name : y(),
        title : Bt,
        valueType : Ut,
        description : b(y()),
        defaultValue : G(),
        setters : b(B(gd)),
        condition : b(Do())
      });
J([ y(), Do() ]);
var Ur = (e => (e.SINGLE = "single", e.GROUP = "group", e))(Ur || {});
J([
  y(), $({
    name : y(),
    describe : b(y()),
    params : b($({name : y(), description : y()})),
    template : y()
  })
]);
const bd = $({
  id : b(y()),
  title : y(),
  snapshot : J([ y(), G() ]),
  snapshotText : b(y()),
  description : b(y()),
  tags : b(B(y())),
  groupName : b(y()),
  category : b(y()),
  schema : Pr(Po(Ye, [ "id" ]), $({componentName : b(y())}))
}),
      _d = $({
        componentName : y(),
        title : y(),
        screenshot : b(y()),
        icon : b(y()),
        tags : b(B(y())),
        groupName : b(y()),
        category : b(y()),
        priority : b(ko()),
        npm : b(kr),
        snippets : B(bd),
        props : B(J([
          Br, $({title : b(Bt), type : K("single"), content : Br}),
          $({title : b(Bt), type : K("group"), content : B(Br)})
        ])),
        fixedProps : b(G()),
        isContainer :
            b(J([ $e(), $({placeholder : y(), width : y(), height : y()}) ])),
        supportDispatchNativeEvent : b(J([ $e(), B(y()) ])),
        isLayout : b($e()),
        rootSelector : b(y()),
        advanceCustom : b(G()),
        extra : b(jt(G(), G()))
      }),
      jd = e => ({data : t, message : r, throwError : n}) => {
        const o = e({data : t, message : r, throwError : n});
        if (o.isValidate)
          return o;
        if (n)
          throw o.message || r ? new Error(`${o.message || r}
 originData: ${JSON.stringify(t)}`)
                               : new Error(`${JSON.stringify(t)} 
 data struct format is invalidate`);
        return o.message || r ? console.warn(`${o.message || r}
 originData: ${JSON.stringify(t)}`)
                              : console.warn(`${JSON.stringify(t)} 
 data struct format is invalidate`),
               o
      }, Vr = e => {
        const {data : t, message : r, throwError : n, dataStruct : o} = e;
        return jd(({data : a}) => {
          try {
            return To(a, o), { isValidate: !0 }
          } catch (i) {
            let s = i;
            return i instanceof $o &&
                       (s = i.failures().map(
                            u => `【${u.path.join(".")}】: ${u.message}
`)),
            {
              isValidate: !1, message: s, error: i
            }
          }
        })({data : t, message : r, throwError : n})
      };
var Je = (e => (e.ROOT_CONTAINER = "RootContainer", e))(Je || {});
const Ed = $({type : K(ne.FUNCTION), value : y()}),
      wd = Pr(Po(Ye, [ "componentName" ]),
              $({componentName : K("RootContainer")}));
function Sd(e) {
  return {
    all: e = e || new Map, on: function(t, r) {
      var n = e.get(t);
      n ? n.push(r) : e.set(t, [ r ])
    }, off: function(t, r) {
      var n = e.get(t);
      n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []))
    }, emit: function(t, r) {
      var n = e.get(t);
      n && n.slice().map(function(o) { o(r) }),
          (n = e.get("*")) && n.slice().map(function(o) { o(t, r) })
    }
  }
}
const Et = Sd(), Od = (e, t) => {
  const r = {...e, value : []}, n = e.value;
  let o = new Te([]);
  return t && (o = t.materialsMode || new Te([])),
         n &&
             (V(n) ? r.value = n.map(a => new F(a, {parent : t, materials : o}))
                   : X(n) &&
                         r.value.push(new F(n, {parent : t, materials : o}))),
         r
};
class qe {
  constructor(t, r) {
    C(this, "nodeType", "SLOT"), C(this, "rawData"), C(this, "parent"),
        C(this, "emitter", Et), C(this, "data"), C(this, "id"),
        C(this, "materialsMode"),
        this.parent = (r == null ? void 0 : r.parent) || null, this.rawData = t;
    const n = (r == null ? void 0 : r.materials) || new Te([]);
    this.materialsMode = n, this.id = pe(), this.data = Od(t, this)
  }
  get value() { return this.data }
  export(t) {
    const r = this.data, n = o => {
      if (o instanceof F)
        return o.export(t);
      if (X(o)) {
        const a = {};
        return Object.keys(o || {}).forEach(i => {a[i] = n(o[i])}), a
      }
      return V(o) ? o.map(a => n(a)) : (t === "design" && delete o.id, o)
    };
    return n(r)
  }
}
const Lo =
          e => {
            let t = [];
            return e.forEach(r => {
              const n = r;
              n.type ? n.type === Ur.SINGLE
                           ? t.push(n.content)
                           : n.type === Ur.GROUP &&
                                 (t = [...t, ...Lo(n.content) ])
                     : t.push(r)
            }),
                   t
          },
      zr =
          (e, t, r) => {
            if (e.type)
              return e.type === ne.SLOT ? new qe(e, {parent : t, materials : r})
                                        : e;
            if (X(e)) {
              const n = {};
              return Object.keys(e).forEach(o => {n[o] = Gr(e[o], t, r)}), n
            } else
              return Array.isArray(e) ? e.map(n => zr(n, t, r)) : e
          },
      Gr = (e, t, r) => X(e)   ? zr(e, t, r)
                        : V(e) ? e.map(n => zr(n, t, r))
                               : e;
class we {
  constructor(t, r, n) {
    C(this, "nodeType", "PROP"), C(this, "rawData"), C(this, "parent"),
        C(this, "emitter", Et), C(this, "data"), C(this, "name"),
        C(this, "materialsMode");
    const o = (n == null ? void 0 : n.materials) || new Te([]);
    this.materialsMode = o, this.parent = n == null ? void 0 : n.parent,
    this.rawData = r, this.name = t, this.data = Gr(r, this, o)
  }
  isIncludeSlot() { return !1 }
  isIncludeExpression() { return !1 }
  get value() { return this.data }
  updateValue(t) {
    const r = this.data;
    this.data = Gr(t ?? r, this, this.materialsMode),
    this.emitter.emit("onPropChange",
                      {value : this.data, preValue : r, node : this}),
    this.parent && !(this.parent instanceof qe) &&
        this.emitter.emit("onNodeChange", {
          value : this.parent.value,
          preValue : this.parent.value,
          node : this.parent
        })
  }
  get material() {
    const t = this.parent;
    if (t instanceof F) {
      const r = t.material;
      return Lo((r == null ? void 0 : r.value.props) || [])
          .find(n => n.name === this.name)
    } else
      return null
  }
  export(t) {
    const r = this.data, n = o => {
      if (o instanceof we || o instanceof qe || o instanceof F)
        return o.export(t);
      if (V(o))
        return o.map(a => n(a));
      if (X(o)) {
        const a = {};
        return Object.keys(o || {}).forEach(i => {a[i] = n(o[i])}), a
      }
      return o
    };
    return n(r)
  }
}
const Cd = e => {
  if (typeof e == "string")
    return !0;
  Vr({data : e, dataStruct : Ye, throwError : !1})
}, Bo = (e, t, r = new Te([])) => {
  if (typeof e == "string")
    return e;
  const n = {
    ...e,
    id : e.id ?? pe(),
    children : [],
    props : {},
    methods : e.methods || [],
    configure : Ro(e.configure || {}, {propsSetter : {}, advanceSetter : {}})
  },
        o = Object.keys(e.props || {});
  return o.length && o.forEach(a => {
    var i;
    const s = (i = e.props) == null ? void 0 : i[a];
    if (s instanceof we) {
      n.props[a] = s;
      return
    }
    n.props[a] = new we(a, s || "", {parent : t, materials : r})
  }),
         e.children &&
             (Array.isArray(e.children)
                  ? n.children = e.children.map(a => {
                      if (a instanceof F)
                        return a;
                      if (X(a)) {
                        const i = a;
                        return new F(i, {parent : t, materials : r})
                      } else
                        return a
                    })
                  : (e.children instanceof F && (n.children = [ e.children ]),
                     n.children =
                         [ new F(e.children, {parent : t, materials : r}) ])),
         n
};
class F {
  constructor(t, r) {
    C(this, "nodeType", "NODE"), C(this, "rawData"), C(this, "data"),
        C(this, "emitter", Et), C(this, "parent"), C(this, "materialsModel"),
        C(this, "listenerHandle"), C(this, "onChangeCbQueue"),
        this.rawData = JSON.parse(JSON.stringify(t)), Cd(t);
    const n = (r == null ? void 0 : r.materials) || new Te([]);
    this.parent = (r == null ? void 0 : r.parent) || null,
    this.materialsModel = n, this.data = Bo(t, this, n),
    this.listenerHandle = [], this.onChangeCbQueue = [], this.registerListener()
  }
  registerListener() {
    const t = r => {
      const {node : n} = r;
      n === this && n.id === this.id && this.onChangeCbQueue.forEach(o => o(r))
    };
    this.emitter.on("onNodeChange", t),
        this.listenerHandle.push(() => {this.emitter.off("onNodeChange", t)})
  }
  onChange(t) {
    return this.onChangeCbQueue.push(t), () => {
      this.onChangeCbQueue = this.onChangeCbQueue.filter(r => r !== t)
    }
  }
  destroy() { this.listenerHandle.forEach(t => t()) }
  get id() { return this.data.id }
  get value() { return this.data }
  clone(t) {
    const r = {...this.export("design"), id : t || pe()};
    return new F(r, {materials : this.materialsModel})
  }
  updateValue(t) {
    const r = this.data, n = {...this.data, ...t};
    this.data = Bo(n, this),
    this.emitter.emit("onNodeChange", {value : n, preValue : r, node : this})
  }
  contains(t) { return Yr(this, t) }
  get props() { return this.data.props }
  get material() {
    const t = this.materialsModel;
    return t == null ? void 0 : t.findByComponentName(this.data.componentName)
  }
  getPlainProps() {
    const t = this.data, r = {};
    return Object.keys(t.props || {})
               .forEach(n => {r[n] = t.props[n].export("design")}),
           r
  }
  getNodeConfig(t) {
    var r;
    return this.data.configure[t] !== void 0 ? this.data.configure.isContainer
           : (r = this.material) == null     ? void 0
                                             : r.value.isContainer
  }
  isContainer() { return this.getNodeConfig("isContainer") }
  export(t) {
    var r;
    const n = this.data;
    if (typeof n == "string")
      return n;
    const o = {};
    Object.keys(n.props || {}).forEach(l => {o[l] = n.props[l].export(t)});
    const a = (r = n.children) == null
                  ? void 0
                  : r.map(l => l instanceof F ? l.export(t) : l),
          i = n.configure || {}, s = i.propsSetter || {}, u = {};
    Object.keys(s).forEach(l => {
      const p = Wn(s, l, !1);
      p && (u[l] = p)
    }),
        i.propsSetter = u,
        this.material && this.materialsModel.usedMaterials.push(this.material);
    let f = {...n, configure : i, props : o, children : a};
    return t === "design" && delete f.id, f = Hr(f), f
  }
}
const Uo = (e, t, r) => {
  const n = {
    ...e,
    id : pe(),
    props : {},
    componentName : Je.ROOT_CONTAINER,
    children : [],
    methods : e.methods || [],
    configure : Ro(e.configure || {}, {propsSetter : {}, advanceSetter : {}})
  };
  let o = [];
  V(e.children)
      ? o = e.children.map(i => i instanceof F ? i
                                : X(i) ? new F(i, {parent : t, materials : r})
                                       : i)
  : e.children instanceof F
      ? o.push(e.children)
      : e.children && X(e.children) &&
            o.push(new F(e.children, {parent : t, materials : r}));
  const a = Object.keys(e.props || {});
  return a.length && a.forEach(i => {
    var s;
    const u = (s = e.props) == null ? void 0 : s[i];
    u instanceof we
        ? n.props[i] = u
        : n.props[i] = new we(i, u || "", {parent : t, materials : r})
  }),
         n.children = o, n
};
class wt {
  constructor(t, {parent : r, materials: n}) {
    C(this, "rawData"), C(this, "data"), C(this, "nodeType", Je.ROOT_CONTAINER),
        C(this, "emitter", Et), C(this, "materialsModel"),
        C(this, "listenerHandle"), C(this, "onChangeCbQueue"),
        C(this, "parent"),
        this.materialsModel = n, this.rawData = JSON.parse(JSON.stringify(t)),
        this.data = Uo(t, this, n), this.listenerHandle = [],
        this.onChangeCbQueue = [], this.registerListener(), this.parent = r
  }
  registerListener() {
    const t = r => {
      const {node : n} = r;
      n === this && n.id === this.id && this.onChangeCbQueue.forEach(o => o(r))
    };
    this.emitter.on("onNodeChange", t),
        this.listenerHandle.push(() => {this.emitter.off("onNodeChange", t)})
  }
  onChange(t) {
    return this.onChangeCbQueue.push(t), () => {
      this.onChangeCbQueue = this.onChangeCbQueue.filter(r => r !== t)
    }
  }
  get id() { return this.data.id }
  get value() { return this.data }
  get props() { return this.data.props }
  get material() {
    const t = this.materialsModel;
    return t == null ? void 0 : t.findByComponentName(this.data.componentName)
  }
  updateValue(t) {
    const r = this.data, n = {...this.data, ...t};
    this.data = Uo(n, this, this.materialsModel),
    this.emitter.emit("onNodeChange",
                      {value : this.data, preValue : r, node : this})
  }
  contains(t) { return Yr(this, t) }
  getMaterialConfig(t) {
    var r;
    return this.data.configure[t] !== void 0 ? this.data.configure.isContainer
           : (r = this.material) == null     ? void 0
                                             : r.value.isContainer
  }
  isContainer() { return this.getMaterialConfig("isContainer") }
  export(t = Ir.SAVE) {
    var r;
    const n = this.data, o = {};
    Object.keys(n.props || {}).forEach(u => {o[u] = n.props[u].export(t)});
    const a = ((r = n.children) == null ? void 0 : r.map(u => {
                var f;
                return (f = u == null ? void 0 : u.export) == null
                           ? void 0
                           : f.call(u, t)
              })) ||
              [],
          i = {...n, props : o, children : a.filter(u => u)};
    let s = Mo(i, [ "id" ]);
    return s = Hr(s), s
  }
  getPlainProps() {
    const t = this.data, r = {};
    return Object.keys(t.props || {})
               .forEach(n => {r[n] = t.props[n].export("design")}),
           r
  }
  destroy() { this.listenerHandle.forEach(t => t()) }
  clone(t) {
    const r = {...this.export("design"), id : t || pe()};
    return new wt(r, {materials : this.materialsModel, parent : null})
  }
}
const Ae = e => (e == null ? void 0 : e.type) === ne.EXPRESSION,
      xd = e => (e == null ? void 0 : e.type) === ne.FUNCTION,
      pe = () => Math.random().toString(32).slice(3, 9),
      Nd = e => (e == null ? void 0 : e.nodeType) === "NODE",
      Wr = e => (e == null ? void 0 : e.nodeType) === "PROP",
      Rd = e => (e == null ? void 0 : e.nodeType) === "SLOT",
      Hr = e => Qf(e, t => X(t)   ? !Object.keys(t).length
                           : V(t) ? !t.length
                                  : !t);
function Md(e, t) {
  const r = [ e ];
  for (; r.length;) {
    const n = r.shift();
    if (n && t(n))
      return n;
    const o = (n == null ? void 0 : n.props) || {}, a = s => {
      if (s instanceof F) {
        r.push(s);
        return
      }
      if (s instanceof qe && a(s.value.value), s instanceof we) {
        a(s.value);
        return
      }
      if (X(s)) {
        const u = s;
        Object.keys(u).forEach(f => {a(u[f])});
        return
      }
      if (V(s)) {
        s.forEach(u => {a(u)});
        return
      }
    };
    a(o);
    const i =
        (n == null ? void 0 : n.value.children.filter(s => s instanceof F)) ||
        [];
    r.push(...i)
  }
}
function Yr(e, t) { return Md(e, r => r.id === t) }
const $d = e => {
  const t = go(e), r = t.snippets;
  return delete t.snippets,
         t.snippets =
             r.map(n => ({
                     ...t,
                     ...n,
                     id : n.id || `${e.componentName}-${pe()}`,
                     title : n.title || e.title,
                     category : n.category || e.category,
                     tags : [...n.tags || [], ...e.tags || [] ],
                     groupName : n.groupName || e.groupName,
                     snapshot : n.snapshot || e.icon,
                     snapshotText : n.snapshotText,
                     schema : {
                       ...n.schema,
                       componentName : n.schema.componentName || e.componentName
                     }
                   })),
         t
};
class Ad {
  constructor(t) {
    C(this, "rawData"), C(this, "data"), this.rawData = t, this.data = $d(t)
  }
  get value() { return this.data }
  get rawValue() { return this.rawData }
  get componentName() { return this.data.componentName }
  get snippets() { return this.data.snippets }
  getSnippetById(t) { return this.data.snippets.find(r => r.id === t) }
}
const Td = e => {
  if (!V(e))
    throw new Error("Materials must be a array");
  return e.map(t => new Ad(t))
}, Pd = e => {
  e == null ||
      e.forEach(t => {Vr({data : t, dataStruct : _d, throwError : !1})})
};
class Te {
  constructor(t) {
    C(this, "rawData"), C(this, "data"), C(this, "usedMaterials", []),
        this.rawData = t, Pd(t), this.data = Td(t)
  }
  findByComponentName(t) { return this.data.find(r => r.componentName === t) }
  findSnippetById(t) {
    const r = [...this.data ];
    let n = null;
    for (; !n && r.length;) {
      const o = r.pop();
      n = o == null ? void 0 : o.getSnippetById(t)
    }
    return n
  }
  getAllSnippets() {
    let t = this.data.reduce((a, i) => (a.push(...i.snippets), a), []);
    const r = [], n = {default : []};
    t = t.sort((a, i) => (a.category || "") > (i.category || "") ? 1 : -1),
    t.forEach(a => {
      const i = a.groupName || "default";
      r.includes(i) || (r.push(i), n[i] = []), n[i].push(a)
    });
    const o = [];
    return r.forEach(a => {
      const i = [ "default" ], s = {default : []}, u = n[a];
      if (u.length !== 0) {
        u.forEach(p => {
          const d = p.category || "default";
          i.includes(d) || (i.push(d), s[d] = []), s[d].push(p)
        });
        const f = [];
        i.forEach(p => {s[p].length && f.push({name : p, list : s[p]})});
        const l = {name : a, list : f};
        o.push(l)
      }
    }),
           o
  }
  get value() { return this.data }
  get rawValue() { return this.rawData }
}
const Dd = $({
  version : y(),
  name : y(),
  css : b(y()),
  renderType : b(J([ K("COMPONENT"), K("PAGE") ])),
  methods : b(B(Ed)),
  componentsMeta : B(Pr($({componentName : y()}), kr)),
  thirdLibs : b(dd),
  componentsTree : wd,
  assets : b(B(G()))
}),
      Vo = e => (Vr({data : e, dataStruct : Dd, throwError : !1}), e),
      Jr = (e, t, r) => ({
        ...e,
        componentsTree : new wt(e.componentsTree, {parent : t, materials : r})
      });
class Vt {
  constructor(t, r) {
    C(this, "nodeType", "PAGE"), C(this, "rawData"), C(this, "emitter", Et),
        C(this, "data"), C(this, "parent"), C(this, "materialsModel"),
        C(this, "assetPackagesList"), Vo(t),
        this.rawData = JSON.parse(JSON.stringify(t)),
        this.materialsModel = new Te((r == null ? void 0 : r.materials) || []),
        this.data = Jr(t, this, this.materialsModel), this.assetPackagesList = [
          ...(r == null ? void 0 : r.assetPackagesList) || [],
          ...this.data.assets || []
        ]
  }
  updatePage(t) {
    const r = this.data;
    this.rawData = JSON.parse(JSON.stringify(t)),
    this.data = Jr(t, this, this.materialsModel),
    this.emitter.emit("onPageChange",
                      {value : this.data, preValue : r, node : this})
  }
  reloadPage(t) {
    const r = this.data;
    this.rawData = JSON.parse(JSON.stringify(t)),
    this.data = Jr(t, this, this.materialsModel),
    this.emitter.emit("onReloadPage",
                      {value : this.data, preValue : r, node : this})
  }
  get value() { return this.data }
  getNode(t) {
    if (!t)
      return;
    const r = this.data.componentsTree;
    return Yr(r, t)
  }
  addNode(t, r, n = "AFTER") {
    var o;
    if (n === "AFTER" || n === "BEFORE") {
      const a = r.parent;
      if (a === null && r instanceof wt)
        return console.warn("Not found parent node"), !1;
      if (a instanceof we)
        return console.warn("CProp can not add node"), !1;
      if (a instanceof qe) {
        const s = a.value.value, u = s.findIndex(f => f === r) ?? -1;
        return u >= 0 ? (n === "BEFORE" ? s.splice(u, 0, t)
                                        : s.splice(u + 1, 0, t),
                         t.parent = a,
                         (o = a.parent) == null || o.updateValue(), !0)
                      : !1
      }
      if (a instanceof Vt)
        return !1;
      const i =
          (a == null ? void 0 : a.value.children.findIndex(s => s === r)) ?? -1;
      return i >= 0 ? (n === "BEFORE"
                           ? a == null || a.value.children.splice(i, 0, t)
                           : a == null || a.value.children.splice(i + 1, 0, t),
                       t.parent = a, a == null || a.updateValue(), !0)
                    : (console.warn("Not found target node"), !1)
    }
    if (n === "CHILD_START")
      return r.value.children.unshift(t), t.parent = r, r.updateValue(), !0;
    if (n === "CHILD_END")
      return r.value.children.push(t), t.parent = r, r.updateValue(), !0;
    if (X(n)) {
      const a = n;
      if (a.type === "CHILD") {
        const i = a.pos, s = a.index || 0;
        return i === "BEFORE"
                   ? r == null || r.value.children.splice(s, 0, t)
                   : r == null || r.value.children.splice(s + 1, 0, t),
               t.parent = r, r.updateValue(), !0
      } else
        console.warn("Can not parse pos obj")
    }
    return !1
  }
  createNode(t) {
    return delete t.id,
           new F(t, {parent : null, materials : this.materialsModel})
  }
  addNodeById(t, r, n = "AFTER") {
    const o = this.getNode(r);
    return o ? this.addNode(t, o, n)
             : (console.warn(`Not find a node by ${r}, pls check it`), !1)
  }
  copyNode(t) {
    const r = t.export("design");
    r.id = pe();
    const n = new F(r, {parent : t.parent, materials : this.materialsModel});
    return this.addNode(n, t, "AFTER"), n
  }
  copyNodeById(t) {
    const r = this.getNode(t);
    return r && r instanceof F ? this.copyNode(r) : !1
  }
  moveNode(t, r, n) {
    this.deleteNode(t);
    let o = r;
    return [ "AFTER", "BEFORE" ].includes(n) && (o = r.parent),
           t.parent = o, this.addNode(t, r, n)
  }
  moveNodeById(t, r, n) {
    const o = this.getNode(t), a = this.getNode(r);
    return o && a && o instanceof F && a instanceof F ? this.moveNode(o, a, n)
                                                      : !1
  }
  deleteNode(t) {
    var r;
    const n = t.parent;
    if (!n)
      throw new Error("parent node is null or undefined, pls check it");
    if (n instanceof qe) {
      const o = n.value.value, a = o.findIndex(s => s === t), i = o[a];
      return o.splice(a, 1), (r = n.parent) == null || r.updateValue(), i
    }
    if (n instanceof F || n instanceof wt) {
      const o = n.value.children, a = o.findIndex(s => s === t), i = o[a];
      return o.splice(a, 1), n.updateValue(), i
    }
  }
  deleteNodeById(t) {
    const r = this.getNode(t);
    if (r)
      return this.deleteNode(r)
  }
  export(t = Ir.SAVE) {
    var r;
    const n = this.data.componentsTree.export(t), o = this.assetPackagesList,
          a = [],
          i = this.materialsModel.usedMaterials
                  .map(u => {
                    const f = o.find(l => {
                      var p;
                      return l.package ===
                             ((p = u.value.npm) == null ? void 0 : p.package)
                    });
                    return f && a.push(f), {
                      componentName: u.componentName, ...go(u.value.npm || {})
                    }
                  })
                  .filter(u => !!(u.componentName && u.package && u.version));
    this.materialsModel.usedMaterials = [];
    let s = {
      ...this.data,
      componentsTree : Hr(n),
      componentsMeta : i,
      thirdLibs : this.data.thirdLibs,
      assets : []
    };
    return (r = this.data.thirdLibs) == null || r.forEach(u => {
      const f = o.find(l => u.package === l.package);
      f && a.push(f)
    }),
           s.assets = nd(a, u => u.package), s = Mo(s, [ "id" ]),
           JSON.parse(JSON.stringify(s))
  }
  getRootNode() { return this.data.componentsTree }
}
Je.ROOT_CONTAINER;
var kd =
    typeof global == "object" && global && global.Object === Object && global;
const zo = kd;
var Id = typeof self == "object" && self && self.Object === Object && self,
    Fd = zo || Id || Function("return this")();
const Qe = Fd;
var Ld = Qe.Symbol;
const Xe = Ld;
var Go = Object.prototype, Bd = Go.hasOwnProperty, Ud = Go.toString,
    St = Xe ? Xe.toStringTag : void 0;
function Vd(e) {
  var t = Bd.call(e, St), r = e[St];
  try {
    e[St] = void 0;
    var n = !0
  } catch {
  }
  var o = Ud.call(e);
  return n && (t ? e[St] = r : delete e[St]), o
}
var zd = Object.prototype, Gd = zd.toString;
function Wd(e) { return Gd.call(e) }
var Hd = "[object Null]", Yd = "[object Undefined]",
    Wo = Xe ? Xe.toStringTag : void 0;
function Ot(e) {
  return e == null               ? e === void 0 ? Yd : Hd
         : Wo && Wo in Object(e) ? Vd(e)
                                 : Wd(e)
}
function Ke(e) { return e != null && typeof e == "object" }
var Jd = "[object Symbol]";
function qd(e) { return typeof e == "symbol" || Ke(e) && Ot(e) == Jd }
function Qd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;)
    o[r] = t(e[r], r, e);
  return o
}
var Xd = Array.isArray;
const Ze = Xd;
var Kd = 1 / 0, Ho = Xe ? Xe.prototype : void 0, Yo = Ho ? Ho.toString : void 0;
function Jo(e) {
  if (typeof e == "string")
    return e;
  if (Ze(e))
    return Qd(e, Jo) + "";
  if (qd(e))
    return Yo ? Yo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Kd ? "-0" : t
}
function Pe(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function")
}
function qo(e) { return e }
var Zd = "[object AsyncFunction]", ep = "[object Function]",
    tp = "[object GeneratorFunction]", rp = "[object Proxy]";
function qr(e) {
  if (!Pe(e))
    return !1;
  var t = Ot(e);
  return t == ep || t == tp || t == Zd || t == rp
}
var np = Qe["__core-js_shared__"];
const Qr = np;
var Qo = function() {
  var e = /[^.]+$/.exec(Qr && Qr.keys && Qr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : ""
}();
function op(e) { return !!Qo && Qo in e }
var ap = Function.prototype, ip = ap.toString;
function sp(e) {
  if (e != null) {
    try {
      return ip.call(e)
    } catch {
    }
    try {
      return e + ""
    } catch {
    }
  }
  return ""
}
var cp = /[\\^$.*+?()[\]{}|]/g, up = /^\[object .+?Constructor\]$/,
    lp = Function.prototype, fp = Object.prototype, dp = lp.toString,
    pp = fp.hasOwnProperty,
    hp = RegExp(
        "^" +
        dp.call(pp)
            .replace(cp, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                     "$1.*?") +
        "$");
function vp(e) {
  if (!Pe(e) || op(e))
    return !1;
  var t = qr(e) ? hp : up;
  return t.test(sp(e))
}
function mp(e, t) { return e == null ? void 0 : e[t] }
function Xr(e, t) {
  var r = mp(e, t);
  return vp(r) ? r : void 0
}
var Xo = Object.create, yp = function() {
  function e() {}
  return function(t) {
    if (!Pe(t))
      return {};
    if (Xo)
      return Xo(t);
    e.prototype = t;
    var r = new e;
    return e.prototype = void 0, r
  }
}();
const gp = yp;
function bp(e, t, r) {
  switch (r.length) {
  case 0:
    return e.call(t);
  case 1:
    return e.call(t, r[0]);
  case 2:
    return e.call(t, r[0], r[1]);
  case 3:
    return e.call(t, r[0], r[1], r[2])
  }
  return e.apply(t, r)
}
function _p(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n;)
    t[r] = e[r];
  return t
}
var jp = 800, Ep = 16, wp = Date.now;
function Sp(e) {
  var t = 0, r = 0;
  return function() {
    var n = wp(), o = Ep - (n - r);
    if (r = n, o > 0) {
      if (++t >= jp)
        return arguments[0]
    } else
      t = 0;
    return e.apply(void 0, arguments)
  }
}
function Op(e) {
  return function() { return e }
}
var Cp = function() {
  try {
    var e = Xr(Object, "defineProperty");
    return e({}, "", {}), e
  } catch {
  }
}();
const zt = Cp;
var xp = zt ? function(e, t) {
  return zt(e, "toString",
            {configurable : !0, enumerable : !1, value : Op(t), writable : !0})
} : qo, Np = Sp(xp);
const Rp = Np;
var Mp = 9007199254740991, $p = /^(?:0|[1-9]\d*)$/;
function Ko(e, t) {
  var r = typeof e;
  return t = t ?? Mp, !!t && (r == "number" || r != "symbol" && $p.test(e)) &&
                          e > -1 && e % 1 == 0 && e < t
}
function Kr(e, t, r) {
  t == "__proto__" && zt
      ? zt(e, t, {configurable : !0, enumerable : !0, value : r, writable : !0})
      : e[t] = r
}
function Gt(e, t) { return e === t || e !== e && t !== t }
var Ap = Object.prototype, Tp = Ap.hasOwnProperty;
function Pp(e, t, r) {
  var n = e[t];
  (!(Tp.call(e, t) && Gt(n, r)) || r === void 0 && !(t in e)) && Kr(e, t, r)
}
function Dp(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = t.length; ++a < i;) {
    var s = t[a], u = n ? n(r[s], e[s], s, r, e) : void 0;
    u === void 0 && (u = e[s]), o ? Kr(r, s, u) : Pp(r, s, u)
  }
  return r
}
var Zo = Math.max;
function kp(e, t, r) {
  return t = Zo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = Zo(n.length - t, 0), i = Array(a);
         ++o < a;)
      i[o] = n[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t;)
      s[o] = n[o];
    return s[t] = r(i), bp(e, this, s)
  }
}
function Ip(e, t) { return Rp(kp(e, t, qo), e + "") }
var Fp = 9007199254740991;
function ea(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fp
}
function Zr(e) { return e != null && ea(e.length) && !qr(e) }
function Lp(e, t, r) {
  if (!Pe(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Zr(r) && Ko(t, r.length) : n == "string" && t in r)
             ? Gt(r[t], e)
             : !1
}
function Bp(e) {
  return Ip(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0,
        i = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0,
        i && Lp(r[0], r[1], i) && (a = o < 3 ? void 0 : a, o = 1),
        t = Object(t);
         ++n < o;) {
      var s = r[n];
      s && e(t, s, n, a)
    }
    return t
  })
}
var Up = Object.prototype;
function ta(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Up;
  return e === r
}
function Vp(e, t) {
  for (var r = -1, n = Array(e); ++r < e;)
    n[r] = t(r);
  return n
}
var zp = "[object Arguments]";
function ra(e) { return Ke(e) && Ot(e) == zp }
var na = Object.prototype, Gp = na.hasOwnProperty, Wp = na.propertyIsEnumerable,
    Hp = ra(function() { return arguments }()) ? ra : function(e) {
      return Ke(e) && Gp.call(e, "callee") && !Wp.call(e, "callee")
    };
const en = Hp;
function Yp() { return !1 }
var oa = typeof exports == "object" && exports && !exports.nodeType && exports,
    aa =
        oa && typeof module == "object" && module && !module.nodeType && module,
    Jp = aa && aa.exports === oa, ia = Jp ? Qe.Buffer : void 0,
    qp = ia ? ia.isBuffer : void 0, Qp = qp || Yp;
const sa = Qp;
var Xp = "[object Arguments]", Kp = "[object Array]", Zp = "[object Boolean]",
    eh = "[object Date]", th = "[object Error]", rh = "[object Function]",
    nh = "[object Map]", oh = "[object Number]", ah = "[object Object]",
    ih = "[object RegExp]", sh = "[object Set]", ch = "[object String]",
    uh = "[object WeakMap]", lh = "[object ArrayBuffer]",
    fh = "[object DataView]", dh = "[object Float32Array]",
    ph = "[object Float64Array]", hh = "[object Int8Array]",
    vh = "[object Int16Array]", mh = "[object Int32Array]",
    yh = "[object Uint8Array]", gh = "[object Uint8ClampedArray]",
    bh = "[object Uint16Array]", _h = "[object Uint32Array]", k = {};
k[dh] = k[ph] = k[hh] = k[vh] = k[mh] = k[yh] = k[gh] = k[bh] = k[_h] = !0,
        k[Xp] = k[Kp] = k[lh] = k[Zp] = k[fh] = k[eh] = k[th] = k[rh] = k[nh] =
            k[oh] = k[ah] = k[ih] = k[sh] = k[ch] = k[uh] = !1;
function jh(e) { return Ke(e) && ea(e.length) && !!k[Ot(e)] }
function Eh(e) {
  return function(t) { return e(t) }
}
var ca = typeof exports == "object" && exports && !exports.nodeType && exports,
    Ct =
        ca && typeof module == "object" && module && !module.nodeType && module,
    wh = Ct && Ct.exports === ca, tn = wh && zo.process, Sh = function() {
      try {
        var e = Ct && Ct.require && Ct.require("util").types;
        return e || tn && tn.binding && tn.binding("util")
      } catch {
      }
    }();
const ua = Sh;
var la = ua && ua.isTypedArray, Oh = la ? Eh(la) : jh;
const fa = Oh;
var Ch = Object.prototype, xh = Ch.hasOwnProperty;
function Nh(e, t) {
  var r = Ze(e), n = !r && en(e), o = !r && !n && sa(e),
      a = !r && !n && !o && fa(e), i = r || n || o || a,
      s = i ? Vp(e.length, String) : [], u = s.length;
  for (var f in e)
    (t || xh.call(e, f)) &&
        !(i &&
          (f == "length" || o && (f == "offset" || f == "parent") ||
           a && (f == "buffer" || f == "byteLength" || f == "byteOffset") ||
           Ko(f, u))) &&
        s.push(f);
  return s
}
function Rh(e, t) {
  return function(r) { return e(t(r)) }
}
function Mh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t
}
var $h = Object.prototype, Ah = $h.hasOwnProperty;
function Th(e) {
  if (!Pe(e))
    return Mh(e);
  var t = ta(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ah.call(e, n)) || r.push(n);
  return r
}
function da(e) { return Zr(e) ? Nh(e, !0) : Th(e) }
var Ph = Xr(Object, "create");
const xt = Ph;
function Dh() { this.__data__ = xt ? xt(null) : {}, this.size = 0 }
function kh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t
}
var Ih = "__lodash_hash_undefined__", Fh = Object.prototype,
    Lh = Fh.hasOwnProperty;
function Bh(e) {
  var t = this.__data__;
  if (xt) {
    var r = t[e];
    return r === Ih ? void 0 : r
  }
  return Lh.call(t, e) ? t[e] : void 0
}
var Uh = Object.prototype, Vh = Uh.hasOwnProperty;
function zh(e) {
  var t = this.__data__;
  return xt ? t[e] !== void 0 : Vh.call(t, e)
}
var Gh = "__lodash_hash_undefined__";
function Wh(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = xt && t === void 0 ? Gh : t,
                                           this
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
De.prototype.clear = Dh, De.prototype.delete = kh, De.prototype.get = Bh,
                         De.prototype.has = zh, De.prototype.set = Wh;
function Hh() { this.__data__ = [], this.size = 0 }
function Wt(e, t) {
  for (var r = e.length; r--;)
    if (Gt(e[r][0], t))
      return r;
  return -1
}
var Yh = Array.prototype, Jh = Yh.splice;
function qh(e) {
  var t = this.__data__, r = Wt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Jh.call(t, r, 1), --this.size, !0
}
function Qh(e) {
  var t = this.__data__, r = Wt(t, e);
  return r < 0 ? void 0 : t[r][1]
}
function Xh(e) { return Wt(this.__data__, e) > -1 }
function Kh(e, t) {
  var r = this.__data__, n = Wt(r, e);
  return n < 0 ? (++this.size, r.push([ e, t ])) : r[n][1] = t, this
}
function ye(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
ye.prototype.clear = Hh, ye.prototype.delete = qh, ye.prototype.get = Qh,
                         ye.prototype.has = Xh, ye.prototype.set = Kh;
var Zh = Xr(Qe, "Map");
const pa = Zh;
function ev() {
  this.size = 0, this.__data__ = {
    hash : new De,
    map : new (pa || ye),
    string : new De
  }
}
function tv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
             ? e !== "__proto__"
             : e === null
}
function Ht(e, t) {
  var r = e.__data__;
  return tv(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
}
function rv(e) {
  var t = Ht(this, e).delete(e);
  return this.size -= t ? 1 : 0, t
}
function nv(e) { return Ht(this, e).get(e) }
function ov(e) { return Ht(this, e).has(e) }
function av(e, t) {
  var r = Ht(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this
}
function et(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
et.prototype.clear = ev, et.prototype.delete = rv, et.prototype.get = nv,
                         et.prototype.has = ov, et.prototype.set = av;
function ha(e) { return e == null ? "" : Jo(e) }
var iv = Rh(Object.getPrototypeOf, Object);
const va = iv;
var sv = "[object Object]", cv = Function.prototype, uv = Object.prototype,
    ma = cv.toString, lv = uv.hasOwnProperty, fv = ma.call(Object);
function tt(e) {
  if (!Ke(e) || Ot(e) != sv)
    return !1;
  var t = va(e);
  if (t === null)
    return !0;
  var r = lv.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ma.call(r) == fv
}
function dv(e, t, r) {
  var n = -1, o = e.length;
  t<0 && (t = -t > o ? 0 : o + t), r = r>o ? o : r,
      r<0 && (r += o), o = t>r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++n < o;)
    a[n] = e[n + t];
  return a
}
function pv(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : dv(e, t, r)
}
var hv = "\\ud800-\\udfff", vv = "\\u0300-\\u036f", mv = "\\ufe20-\\ufe2f",
    yv = "\\u20d0-\\u20ff", gv = vv + mv + yv, bv = "\\ufe0e\\ufe0f",
    _v = "\\u200d", jv = RegExp("[" + _v + hv + gv + bv + "]");
function ya(e) { return jv.test(e) }
function Ev(e) { return e.split("") }
var ga = "\\ud800-\\udfff", wv = "\\u0300-\\u036f", Sv = "\\ufe20-\\ufe2f",
    Ov = "\\u20d0-\\u20ff", Cv = wv + Sv + Ov, xv = "\\ufe0e\\ufe0f",
    Nv = "[" + ga + "]", rn = "[" + Cv + "]", nn = "\\ud83c[\\udffb-\\udfff]",
    Rv = "(?:" + rn + "|" + nn + ")", ba = "[^" + ga + "]",
    _a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    ja = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mv = "\\u200d", Ea = Rv + "?",
    wa = "[" + xv + "]?",
    $v = "(?:" + Mv + "(?:" + [ ba, _a, ja ].join("|") + ")" + wa + Ea + ")*",
    Av = wa + Ea + $v,
    Tv = "(?:" + [ ba + rn + "?", rn, _a, ja, Nv ].join("|") + ")",
    Pv = RegExp(nn + "(?=" + nn + ")|" + Tv + Av, "g");
function Dv(e) { return e.match(Pv) || [] }
function kv(e) { return ya(e) ? Dv(e) : Ev(e) }
function Iv(e) {
  return function(t) {
    t = ha(t);
    var r = ya(t) ? kv(t) : void 0, n = r ? r[0] : t.charAt(0),
        o = r ? pv(r, 1).join("") : t.slice(1);
    return n[e]() + o
  }
}
var Fv = Iv("toUpperCase");
const Lv = Fv;
function Bv(e) { return Lv(ha(e).toLowerCase()) }
function Uv() { this.__data__ = new ye, this.size = 0 }
function Vv(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r
}
function zv(e) { return this.__data__.get(e) }
function Gv(e) { return this.__data__.has(e) }
var Wv = 200;
function Hv(e, t) {
  var r = this.__data__;
  if (r instanceof ye) {
    var n = r.__data__;
    if (!pa || n.length < Wv - 1)
      return n.push([ e, t ]), this.size = ++r.size, this;
    r = this.__data__ = new et(n)
  }
  return r.set(e, t), this.size = r.size, this
}
function rt(e) {
  var t = this.__data__ = new ye(e);
  this.size = t.size
}
rt.prototype.clear = Uv, rt.prototype.delete = Vv, rt.prototype.get = zv,
                         rt.prototype.has = Gv, rt.prototype.set = Hv;
var Sa = typeof exports == "object" && exports && !exports.nodeType && exports,
    Oa =
        Sa && typeof module == "object" && module && !module.nodeType && module,
    Yv = Oa && Oa.exports === Sa, Ca = Yv ? Qe.Buffer : void 0,
    xa = Ca ? Ca.allocUnsafe : void 0;
function Jv(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = xa ? xa(r) : new e.constructor(r);
  return e.copy(n), n
}
var qv = Qe.Uint8Array;
const Na = qv;
function Qv(e) {
  var t = new e.constructor(e.byteLength);
  return new Na(t).set(new Na(e)), t
}
function Xv(e, t) {
  var r = t ? Qv(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length)
}
function Kv(e) {
  return typeof e.constructor == "function" && !ta(e) ? gp(va(e)) : {}
}
function Zv(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), i = n(t), s = i.length; s--;) {
      var u = i[e ? s : ++o];
      if (r(a[u], u, a) === !1)
        break
    }
    return t
  }
}
var em = Zv();
const tm = em;
function on(e, t, r) {
  (r !== void 0 && !Gt(e[t], r) || r === void 0 && !(t in e)) && Kr(e, t, r)
}
function rm(e) { return Ke(e) && Zr(e) }
function an(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t]
}
function nm(e) { return Dp(e, da(e)) }
function om(e, t, r, n, o, a, i) {
  var s = an(e, r), u = an(t, r), f = i.get(u);
  if (f) {
    on(e, r, f);
    return
  }
  var l = a ? a(s, u, r + "", e, t, i) : void 0, p = l === void 0;
  if (p) {
    var d = Ze(u), v = !d && sa(u), g = !d && !v && fa(u);
    l = u, d || v || g ? Ze(s)   ? l = s
                         : rm(s) ? l = _p(s)
                         : v     ? (p = !1, l = Jv(u, !0))
                         : g     ? (p = !1, l = Xv(u, !0))
                                 : l = []
           : tt(u) || en(u)
               ? (l = s, en(s) ? l = nm(s) : (!Pe(s) || qr(s)) && (l = Kv(u)))
               : p = !1
  }
  p && (i.set(u, l), o(l, u, n, a, i), i.delete(u)), on(e, r, l)
}
function Ra(e, t, r, n, o) {
  e !== t && tm(t, function(a, i) {
    if (o || (o = new rt), Pe(a))
      om(e, t, i, r, Ra, n, o);
    else {
      var s = n ? n(an(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), on(e, i, s)
    }
  }, da)
}
var am = Bp(function(e, t, r) { Ra(e, t, r) });
const im = am,
      sm = function(
          e) { return !(!e || typeof e != "function" || !e.prototype) };
function Ma(e) {
  const t = e.prototype;
  return !!(t && t.isReactComponent)
}
function $a(e) {
  var t, r;
  const n = typeof Symbol == "function" && Symbol.for
                ? Symbol.for("react.forward_ref")
                : 60112;
  return (e == null ? void 0 : e.$$typeof) === n ||
         ((t = e == null ? void 0 : e.prototype) == null
              ? void 0
              : t.isReactComponent) ||
         ((r = e == null ? void 0 : e.prototype) == null ? void 0
                                                         : r.setState) ||
         e._forwardRef
}
function Aa(e) {
  class t extends x.Component {
    render() { return x.createElement(e, this.props) }
  }
  return t.displayName = e.displayName, t
}
const ke = (e, t) => {
  const r = n => {
    const o = `
    ${Object.keys(t).map(a => `const ${a} = $$context['${a}'];`).join(`
`)}
    return ${n};
    `;
    return new Function("$$context", o)(t)
  };
  try {
    return r(e)
  } catch (n) {
    console.warn(n);
    const o = `[${e}] expression run failed`;
    return console.warn(o), null
  }
}, Ta = (e, t, r) => function(...n) {
  try {
    const o = `
        var args = Array.from(arguments);
        function runTimeFunc() {
          var f = ${e};
          var __$$storeManager__ = args.pop();
          var $$context = args.pop();
          $$context.stateManager = __$$storeManager__.getStateSnapshot();
          return f.apply(f, args)
        }
        return runTimeFunc();
      `;
    new Function(o)(...n, t, r)
  } catch (o) {
    console.warn(o)
  }
}, sn = (e, t) => {
  const r = {};
  return t.forEach((n, o) => {r[n] = e[o]}), r
}, cn = e => {
  const t = {};
  return Object.keys(e).forEach(r => {
    let n = r.replace("-webkit", "Webkit");
    n = n.replace("-ms", "ms"), n = n.replace("-moz", "Moz"),
    n = n.replace("-o", "O");
    let o = n.split("-");
    o.length >= 2 && (o = o.map((a, i) => i !== 0 ? Bv(a) : a)),
        t[o.join("")] = e[r]
  }),
         t
}, un = e => {
  let t = "";
  return Object.keys(e).forEach(r => {t += `${r}:${e[r]};`}), t
}, cm = (e, t) => {
  const r = {};
  return e.forEach(n => {
    if (n.globalName) {
      const o = t[n.globalName];
      o && (r[n.globalName] = o)
    }
  }),
         r
}, um = (e, t = 1) => {
  let r = 0, n = e, o = {}, a = {};
  for (; r < t;)
    Object.keys(n).forEach(i => {o = { ...o, ...n[i] }}), a = o, n = o, o = {},
                                                          r += 1;
  return a
}, Pa = (e, t) => {
  const r = [];
  return t.forEach(n => {
    const o = n.exec(e);
    o != null && o.length && r.push(o[1])
  }),
         r
}, Yt = "DYNAMIC", lm = [ "$$context", "$$nodeModel" ], Da = e => {
  let t;
  const r = new Set, n = (i, s) => {
    const u = typeof i == "function" ? i(t) : i;
    if (!Object.is(u, t)) {
      const f = t;
      t = s ?? typeof u != "object" ? u : Object.assign({}, t, u),
      r.forEach(l => l(t, f))
    }
  }, o = () => t, a = {
    setState : n,
    getState : o,
    subscribe : i => (r.add(i), () => r.delete(i)),
    destroy : () => {
      ({BASE_URL : "/", MODE : "production", DEV : !1, PROD : !0, SSR : !1} &&
       "production") !== "production" &&
          console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),
          r.clear()
    }
  };
  return t = e(n, o, a), a
}, fm = e => e ? Da(e) : Da;
class dm {
  constructor() { _(this, "storeMap", new Map) }
  addStore(t, r) {
    const n = fm(r);
    return this.storeMap.set(t, n), n.name = t, n
  }
  setStore(t, r) { this.storeMap.set(t, r) }
  removeStore(t) { this.storeMap.delete(t) }
  getStore(t) { return this.storeMap.get(t) }
  getState(t) {
    var r;
    return (r = this.storeMap.get(t)) == null ? void 0 : r.getState()
  }
  getStateObj(t) {
    return {
      state: this.getState(t), updateState: r => { this.setState(t, r) }
    }
  }
  setState(t, r) {
    var n;
    return (n = this.storeMap.get(t)) == null ? void 0 : n.setState(r)
  }
  connect(t, r) {
    const n = this.storeMap.get(t);
    return n ? n.subscribe(r) : (console.warn("store not exits"), () => {})
  }
  getStateSnapshot() {
    const t = {};
    return this.storeMap.forEach((r, n) => {t[n] = this.getStateObj(n)}), t
  }
  destroy() { this.storeMap = new Map }
}
class pm {
  constructor() { _(this, "varSpace", new Map) }
  get(t) { return this.varSpace.get(t) }
  add(t, r) { this.varSpace.set(t, r) }
  remove(t) { this.varSpace.delete(t) }
  destroy() { this.varSpace.clear() }
  getStateSnapshot() {
    const t = {};
    return this.varSpace.forEach((r, n) => {t[n] = r}), t
  }
}
class ka {
  constructor() {
    _(this, "renderMode", "normal"), _(this, "components", {}),
        _(this, "storeManager", new dm), _(this, "variableManager", new pm),
        _(this, "runtimeComponentCache", new Map), _(this, "onGetRef"),
        _(this, "onGetComponent"), _(this, "onComponentMount"),
        _(this, "onComponentDestroy"), _(this, "processNodeConfigHook")
  }
  getComponent(t) {
    var r;
    const n = t.value.componentName;
    let o = this.components[n] || (() => `Component [${n}] not found`);
    return $a(o) || (o = Aa(o), this.components[n] = o),
           this.onGetComponent &&
               (o = (r = this.onGetComponent) == null ? void 0
                                                      : r.call(this, o, t)),
           o
  }
  getContext(t = {}, r) {
    let n = t;
    return r && (n = {...t}, n.__proto__ = r || null), n
  }
  pageRender(t, {
    components : r,
    onGetRef: n,
    $$context: o = {},
    onGetComponent: a,
    onComponentMount: i,
    onComponentDestroy: s,
    renderMode: u,
    processNodeConfigHook: f
  }) {
    this.renderMode = u, this.components = r, this.onGetRef = n,
    this.onGetComponent = a, this.onComponentMount = i,
    this.onComponentDestroy = s, this.processNodeConfigHook = f;
    const l = t.value.componentsTree, p = this.getComponent(l),
          d = this.convertModelToComponent(p, t.value.componentsTree), v = {},
          g = l.props;
    return Object.keys(g).forEach(E => {v[E] = g[E].value}), v.$$context = o,
                                                             this.render(d, v)
  }
  transformProps(t = {}, {$$context : r}) {
    const n = t, o = i => {
      if (Array.isArray(i))
        return i.map(s => o(s));
      if (Wr(i))
        return o(i.value);
      if (Rd(i)) {
        const s = i.value, u = s.value;
        if (!u)
          return console.warn(
                     "slot value is null, this maybe cause some error, pls check it",
                     t),
                 () => {};
        const f = l => {
          const p = `${l.id}-${Yt}`;
          if (this.runtimeComponentCache.get(l.id))
            return {key : p, component : this.runtimeComponentCache.get(l.id)};
          const d = this.getComponent(l),
                v = this.convertModelToComponent(d, l), g = s.params || [];
          return {
            component: (...E) => {
              const w = sn(E, g), j = this.getContext({params : w}, r);
              return this.render(v, {$$context : j, key : p})
            }, key: p
          }
        };
        if (Array.isArray(u)) {
          const l = u == null ? void 0 : u.map(p => f(p));
          return (...p) => l.map(
                     d => Ma(d.component)
                              ? x.createElement(d.component,
                                                {$$context : r, key : d.key})
                              : d.component(...p))
        } else
          return f(u).component
      } else {
        if (Ae(i))
          return ke(i.value, r || {});
        if (xd(i))
          return Ta(i.value, r, this.storeManager);
        if (tt(i)) {
          let s = i;
          Wr(i) && (s = i.value);
          const u = s, f = {};
          return Object.keys(s).forEach(l => {f[l] = o(u[l])}), f
        } else
          return i
      }
    }, a = {};
    return Object.keys(n).forEach(i => {
      const s = n[i];
      a[i] = o(s)
    }),
           a
  }
  collectSpecialProps(t = {}, r) {
    const n = [], o = (a, i) => {
      let s = i;
      Wr(i) && (s = i.value),
          r(s)    ? n.push({keyPath : a, val : s})
          : Ze(s) ? s.forEach((u, f) => {o([...a, String(f) ], u)})
                  : tt(s) && Object.keys(s).forEach(u => {o([...a, u ], s[u])})
    };
    return o([ "$root" ], t), n
  }
  convertModelToComponent(t, r) {
    const n = this;
    class o extends x.Component {
      constructor(i) {
        super(i), _(this, "_CONDITION", !0), _(this, "_DESIGN_BOX", !1),
            _(this, "_NODE_MODEL", r), _(this, "_NODE_ID", r.id),
            _(this, "UNIQUE_ID", `${r.id}_${pe()}`),
            _(this, "targetComponentRef"), _(this, "listenerHandle", []),
            _(this, "storeState"), _(this, "storeListenDisposeList", []),
            _(this, "domHeader"), _(this, "mediaStyleDomMap", {}),
            _(this, "variableSpace"), _(this, "nodeName"),
            _(this, "updateState",
              l => {this.storeState.setState(l), this.forceUpdate()}),
            _(this, "getStyleDomById",
              l => {
                const p = this.mediaStyleDomMap;
                let d = p[l];
                return d || (d = document.createElement("style"), p[l] = d),
                       d.id = l, d
              }),
            _(this, "addMediaCSS",
              () => {
                var l;
                let p = this.domHeader;
                if (p ||
                        (p = (l = document.getElementsByTagName("head")) == null
                                 ? void 0
                                 : l[0],
                         this.domHeader = p),
                    !this.domHeader)
                  return;
                const d = this._NODE_MODEL.value.css;
                d && d.value.forEach(v => {
                  var g;
                  const E = `${this.UNIQUE_ID}_${v.state}`;
                  let w = `.${d.class}`;
                  if (v.state !== "normal" && (w = `${w}:${v.state}`),
                      Object.keys(v.style).length !== 0) {
                    const j = this.getStyleDomById(E);
                    j.innerText = `${w} { ${un(v.style)} }`,
                    p == null || p.appendChild(j)
                  }
                  (g = v.media) != null && g.length && v.media.forEach(j => {
                    const O = `${E}_${j.type}_${j.value}`,
                          U = this.getStyleDomById(O);
                    U.media = `screen and (${j.type}:${j.value}px)`,
                    U.innerHTML = `${w} { ${un(j.style)} }`,
                    p == null || p.appendChild(U)
                  })
                })
              }),
            _(this, "removeMediaCSS",
              () => {
                const l = this.mediaStyleDomMap;
                Object.keys(l).forEach(p => {
                  var d;
                  (d = this.domHeader) == null || d.removeChild(l[p])
                }),
                    this.mediaStyleDomMap = {}
              }),
            _(this, "rebuildNode", () => {
              this.storeListenDisposeList.forEach(l => l()),
              this.removeMediaCSS(),
              this.connectStore(),
              this.addMediaCSS(),
              this.forceUpdate()
            }),
            this.targetComponentRef = x.createRef(),
            this.state = r.value.state || {};
        const s = r.value.nodeName || r.id;
        this.nodeName = s;
        const u = n.storeManager.getStore(s);
        u ? (this.storeState = u, u.setState({...r.value.state || {}}))
          : this.storeState =
                n.storeManager.addStore(s, () => ({...r.value.state || {}})),
            this.storeState.subscribe(l => {this.setState({...l})}),
            this.connectStore();
        const f = n.variableManager.get(s);
        f ? this.variableSpace = f
          : (this.variableSpace = {staticVar : {}, methods : {}},
             n.variableManager.add(s, this.variableSpace))
      }
      connectStore() {
        const i = n.collectSpecialProps(r.props, p => !!Ae(p)),
              s = n.collectSpecialProps(
                  {css : r.value.css, class : r.value.classNames},
                  p => !!Ae(p));
        let u = [];
        [...i, ...s]
            .map(p => {
              const d = p.val,
                    v =
                        [
                          /\$\$context.stateManager\.(.+?)\./gim,
                          /\$\$context.stateManager\["(.+?)"\]/gim,
                          /\$\$context.stateManager\['(.+?)'\]/gim,
                          /getStateObj\('(.+?)'\)/gim,
                          /getStateObj\("(.+?)"\)/gim,
                          /getStateById\('(.+?)'\)/gim,
                          /getStateById\("(.+?)"\)/gim
                        ],
                    g = Pa(d.value, v);
              u = [...u, ...g ]
            })
            .filter(Boolean);
        const f = Array.from(new Set(u)), l = [];
        f.length && f.forEach(p => {
          n.storeManager.getStore(p) ||
              (n.storeManager.addStore(p, () => ({})),
               console.warn(n.storeManager, p, "not exits"));
          const d = n.storeManager.connect(p, () => {this.forceUpdate()});
          l.push(d)
        }),
            this.storeListenDisposeList = l
      }
      componentDidMount() {
        var i;
        this.addMediaCSS(),
            n.onGetRef && n.onGetRef(this.targetComponentRef, r, this),
            (i = n.onComponentMount) == null || i.call(n, this, r);
        const s = () => {
          n.storeManager.setStore(r.value.nodeName || r.id, this.storeState),
              this.storeState.setState({...this.state, ...r.value.state || {}}),
              this.rebuildNode()
        };
        r.onChange(s)
      }
      componentWillUnmount() {
        var i;
        this.storeListenDisposeList.forEach(s => s()), this.removeMediaCSS(),
            (i = n.onComponentDestroy) == null || i.call(n, this, r)
      }
      render() {
        var i;
        const {$$context : s,
               ...u} = this.props,
               f = r.value.nodeName || r.id, l = {key : r.id, ...r.props, ...u},
               p = {
                 state : this.state || {},
                 staticVar : this.variableSpace.staticVar,
                 updateState : this.updateState,
                 storeManager : n.storeManager,
                 getState : () => n.storeManager.getStateObj(f),
                 getStateObj : () => n.storeManager.getStateObj(f),
                 getStateObjById : L => n.storeManager.getStateObj(L),
                 stateManager : n.storeManager.getStateSnapshot(),
                 getMethods : () => n.variableManager.get(f).methods,
                 getMethodsById : L => n.variableManager.get(L).methods,
                 getStaticVar : () => n.variableManager.get(f).staticVar,
                 getStaticVarById : L => n.variableManager.get(L).staticVar
               };
        r.value.componentName === Je.ROOT_CONTAINER &&
            (p.globalState = this.state,
             p.updateGlobalState = this.updateState);
        const d = n.getContext(p, s),
              v = n.transformProps({methods : r.value.methods}, {
                     $$context : d
                   }).methods.reduce((L, H) => (L[H.name] = H.define, L), {});
        d.methods = v, this.variableSpace.methods =
                           Object.assign(this.variableSpace.methods, v);
        const g = r.value.loop;
        let E = [];
        if (g && g.open) {
          this.targetComponentRef.current = [];
          let L = g.data || [];
          if (Ae(g.data)) {
            const H = g.data;
            L = ke(H.value, d || {})
          }
          return E = L.map((...H) => {
            var he;
            const Ie = H[1],
                  ue = [ g.forName || "item", g.forIndex || "index" ],
                  be = sn(H, ue);
            let _e = "loopData";
            g.name && (_e = `${_e}${g.name}`);
            const Se = n.getContext({[_e] : be}, d),
                  ee = n.transformProps(l, {$$context : Se}),
                  Jt = ((he = r.value.classNames) == null
                            ? void 0
                            : he.map(te => {
                                var Oe;
                                const Nt = te.name;
                                return Ae(te.status) &&
                                               ke(String(
                                                      ((Oe = te.status) == null
                                                           ? void 0
                                                           : Oe.value) ||
                                                      ""),
                                                  Se)
                                           ? Nt
                                           : ""
                              })) ||
                       [];
            let nt = `${ee.className ?? ""} ${Jt.join(" ")}`.trim();
            r.value.css && (nt = `${r.value.css.class} ${nt}`.trim()),
                ee.className = nt;
            const qt = n.transformProps(r.value.style, {$$context : Se});
            r.value.style && (ee.style = cn(qt || {}));
            const {children : Fe} = ee;
            let ot = [];
            if (Fe !== void 0)
              delete ee.children, ot = Array.isArray(Fe) ? Fe : [ Fe ];
            else {
              const te = [];
              r.value.children.forEach((Oe, Nt) => {
                const Rt = n.buildComponent(Oe, {$$context : Se, idx : Nt});
                te.push(Rt)
              }),
                  ot = te
            }
            if (ee.key = `${ee.key}-${Ie}`, Ae(g.key)) {
              const te = g.key, Oe = ke(te.value, Se || {});
              ee.key += `-${Oe}`
            }
            return ee.ref = te => {
              this.targetComponentRef.current =
                  this.targetComponentRef.current || [],
              this.targetComponentRef.current[Ie] = te
            }, n.render(t, ee, ...ot)
          }),
                 E
        }
        const w = n.transformProps(l, {$$context : d}), {children : j} = w;
        let O = [];
        if (j !== void 0)
          delete w.children, O = Array.isArray(j) ? j : [ j ];
        else {
          const L = [];
          r.value.children.forEach((H, he) => {
            const Ie = n.buildComponent(H, {$$context : d, idx : he});
            L.push(Ie)
          }),
              O = L
        }
        w.ref = this.targetComponentRef;
        const U =
            ((i = r.value.classNames) == null ? void 0 : i.map(L => {
              var H;
              const he = L.name;
              return Ae(L.status) &&
                             ke(((H = L.status) == null ? void 0 : H.value) ||
                                    "",
                                d)
                         ? he
                         : ""
            })) ||
            [];
        let I = `${w.className ?? ""} ${U.join(" ")}`.trim();
        r.value.css && (I = `${r.value.css.class} ${I}`.trim()),
            w.className = I;
        const Y = n.transformProps(r.value.style, {$$context : d});
        r.value.style && (w.style = cn(Y || {}));
        let q = r.value.condition ?? !0;
        typeof q != "boolean" && (q = ke(q.value, d || {}));
        let ce = {condition : q, props : w};
        n.processNodeConfigHook && (ce = n.processNodeConfigHook(ce, r));
        const A = n.render(t, ce.props, ...O);
        return this._CONDITION = ce.condition,
               ce.condition
                   ? A
                   : Le("div", {style : {display : "none"}, children : A})
      }
    }
    return _(o, "__CP_TYPE__", Yt),
           o.displayName = `${r.value.componentName}Dynamic`, o
  }
  buildComponent(t, {$$context : r = {}}) {
    const n = this.runtimeComponentCache;
    return typeof t == "string" ? this.render(t)
           : Nd(t)              ? (({currentNode : o}) => {
               const a = o.value.id;
               let i = null;
               if (n.get(a))
                 i = n.get(a);
               else {
                 const f = this.getComponent(o);
                 i = this.convertModelToComponent(f, o)
               }
               !n.get(a) && this.renderMode !== "design" && n.set(a, i);
               const s = `${a}-${Yt}`,
                     u = {$$context : r, $$nodeModel : t, key : s};
               return this.render(i, u)
             })({currentNode : t})
                                : void 0
  }
  render(t, r = {}, ...n) {
    return typeof t == "string" || typeof t == "number"
               ? String(t)
               : (lm.forEach(
                      o => {o in r && t.__CP_TYPE__ !== Yt && delete r[o]}),
                  x.createElement(t, r, ...n))
  }
  clear() { this.runtimeComponentCache.clear(), this.storeManager.destroy() }
}
const
    hm = En(new ka),
    vm =
        [
          "a",          "abbr",      "acronym",    "address",  "applet",
          "area",       "article",   "aside",      "audio",    "b",
          "base",       "basefont",  "bdi",        "bdo",      "bgsound",
          "big",        "blink",     "blockquote", "body",     "br",
          "button",     "canvas",    "caption",    "center",   "cite",
          "code",       "col",       "colgroup",   "command",  "content",
          "data",       "datalist",  "dd",         "del",      "details",
          "dfn",        "dialog",    "dir",        "div",      "dl",
          "dt",         "element",   "em",         "embed",    "fieldset",
          "figcaption", "figure",    "font",       "footer",   "form",
          "frame",      "frameset",  "h1",         "h2",       "h3",
          "h4",         "h5",        "h6",         "head",     "header",
          "hgroup",     "hr",        "html",       "i",        "iframe",
          "image",      "img",       "input",      "ins",      "isindex",
          "kbd",        "keygen",    "label",      "legend",   "li",
          "link",       "listing",   "main",       "map",      "mark",
          "marquee",    "math",      "menu",       "menuitem", "meta",
          "meter",      "multicol",  "nav",        "nextid",   "nobr",
          "noembed",    "noframes",  "noscript",   "object",   "ol",
          "optgroup",   "option",    "output",     "p",        "param",
          "picture",    "plaintext", "pre",        "progress", "q",
          "rb",         "rbc",       "rp",         "rt",       "rtc",
          "ruby",       "s",         "samp",       "script",   "search",
          "section",    "select",    "shadow",     "slot",     "small",
          "source",     "spacer",    "span",       "strike",   "strong",
          "style",      "sub",       "summary",    "sup",      "svg",
          "table",      "tbody",     "td",         "template", "textarea",
          "tfoot",      "th",        "thead",      "time",     "title",
          "tr",         "track",     "tt",         "u",        "ul",
          "var",        "video",     "wbr",        "xmp"
        ],
    ge =
        e => {
          const t = {};
          return e.forEach(r => {t[r.key] = r.value}), t
        },
    mm = [...vm, ...pd ],
    ym = mm.reduce((e, t) =>
                       (e[t] =
                            ({children : r, $$attributes : n = [], ...o}) => {
                              let a = r;
                              return Array.isArray(r) || (a = [ r ]),
                                     x.createElement(t, {...o, ...ge(n)}, ...a)
                            },
                        e),
                   {}),
    gm =
        ({
          children : e,
          width : t,
          height : r,
          $$attributes : n = [],
          ...o
        }) => {
          let a = e;
          Array.isArray(e) || (a = [ e ]), a = a.filter(f => f !== void 0);
          const {style : i = {},
                 ...s} = ge(n),
                 u = {height : r, width : t, ...i, ...o.style || {}};
          return x.createElement("div", {...o, ...s, style : u}, ...a)
        },
    bm =
        ({children : e, $$attributes : t = [], ...r}) => {
          let n = e;
          return Array.isArray(e) || (n = [ e ]),
                 x.createElement("canvas", {...r, ...ge(t)}, ...n)
        },
    _m =
        ({children : e, $$attributes : t = [], ...r}) => {
          let n = e;
          return Array.isArray(e) || (n = [ e ]),
                 x.createElement("img", {...r, ...ge(t)}, ...n)
        },
    jm =
        ({children : e, $$attributes : t = [], ...r}) => {
          let n = e;
          return Array.isArray(e) || (n = [ e ]),
                 x.createElement("video", {...r, ...ge(t)}, ...n)
        },
    Em =
        ({children : e, $$attributes : t = [], ...r}) => {
          let n = e;
          return Array.isArray(e) || (n = [ e ]),
                 x.createElement("audio", {...r, ...ge(t)}, ...n)
        },
    wm = ({$$attributes : e = [], content : t, ...r}) =>
        Le("span", {...r, ...ge(e), children : t}),
    Sm =
        ({
          children : e,
          $$attributes : t = [],
          afterMount : r,
          beforeDestroy : n,
          ...o
        }) => {
          let a = e;
          return Array.isArray(e) || (a = [ e ]),
                 x.useEffect(
                     () => (r == null || r(o), () => {n == null || n(o)}), []),
                 x.createElement("div", {...o, ...ge(t)}, ...a)
        },
    Om = ({children : e, $$attributes : t = [], htmlTag : r = "div", ...n}) => {
      let o = e;
      Array.isArray(e) || (o = [ e ]);
      const {style : a = {}, ...i} = ge(t), s = {...a, ...n.style || {}};
      return x.createElement(r, {...n, ...i, style : s}, ...o)
    }, Cm = {
      RootContainer : ({children : e}) => e,
      ...ym,
      CContainer : Sm,
      CVideo : jm,
      CAudio : Em,
      CBlock : gm,
      CImage : _m,
      CText : wm,
      CCanvas : bm,
      CNativeTag : Om
    };
class xm {
  constructor() { _(this, "refMap", new Map) }
  get(t) { return this.refMap.get(t) }
  add(t, r) { this.refMap.set(t, r) }
  remove(t) { this.refMap.delete(t) }
  destroy() { this.refMap.clear() }
}
class Ia extends x.Component {
  constructor(t) {
    super(t), _(this, "refManager"),
        _(this, "dynamicComponentInstanceMap", new Map),
        _(this, "onGetRef",
          (r, n, o) => {
            var a, i;
            (i = (a = this.props).onGetRef) == null || i.call(a, r, n, o),
                this.dynamicComponentInstanceMap.set(n.id, o),
                this.refManager.add(n.value.refId || n.id, r)
          }),
        _(this, "rerender",
          r => {
            if (this.props.adapter.clear(),
                (r == null ? void 0 : r.nodeType) === "PAGE" && r)
              this.setState({pageModel : r});
            else if (tt(r) && Vo(r)) {
              const n = r;
              this.setState({
                pageModel : new Vt(
                    n,
                    {materials : this.state.pageModel.materialsModel.rawValue})
              })
            }
          }),
        this.state = {pageModel : t.pageModel || new Vt(t.page)},
        this.refManager = new xm
  }
  getPageModel() { return this.state.pageModel }
  componentDidMount() {
    const {render : t} = this.props;
    t && (t.ref.current = this)
  }
  componentWillUnmount() { this.refManager.destroy() }
  render() {
    const {props : t} = this, {
      adapter : r,
      onGetComponent : n,
      onComponentDestroy : o,
      onComponentMount : a
    } = t,
                   {pageModel : i} = this.state;
    if (!i)
      return console.warn("pageModel is null"), null;
    const s = {...Cm, ...t.components}, u = this.props.$$context ?? {};
    return u.refs = this.refManager, r.pageRender(i, {
      libs : {},
      components : s,
      onGetRef : this.onGetRef,
      onGetComponent : n,
      onComponentMount : a,
      onComponentDestroy : o,
      $$context : u,
      renderMode : t.renderMode,
      processNodeConfigHook : t.processNodeConfigHook
    })
  }
}
const Nm = () => {
  const e = x.useRef(null);
  return {
    ref: e, rerender: function(...t) { e.current && e.current.rerender(...t) }
  }
};
class Rm extends x.Component {
  constructor(t) {
    super(t),
        _(this, "onDoubleClick",
          () => {this.setState({hasError : !1, error : null})}),
        this.state = {
          hasError : !1,
          error : ""
        }
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t }
  }
  componentDidCatch(t, r) {
    var n, o;
    (o = (n = this.props).onError) == null || o.call(n, r)
  }
  render() {
    if (this.state.hasError) {
      const {onDoubleClick : t} = this, r = this.props.node.value;
      console.error(this.props.node, this.props.children);
      const n = _n("div", {
        style : {
          backgroundColor : "rgb(255 206 215 / 13%)",
          padding : "5px",
          color : "#ff0000b0",
          textAlign : "center",
          fontSize : "12px"
        },
        children : [
          "Render error, node id: ", r.id, ", node name：", r.title,
          " component name：", r.title || r.componentName,
          _n("p", {children : [ "msg: ", String(this.state.error) ]}),
          Le("button", {
            onDoubleClick : t,
            style : {
              border : "1px solid rgba(100,100,100,0.1)",
              backgroundColor : "#fff",
              padding : "5px 10px",
              borderRadius : "2px",
              color : "gray",
              cursor : "pointer",
              marginTop : "5px"
            },
            children : "double click to refresh"
          }),
          Le("div", {style : {display : "none"}})
        ]
      });
      return x.createElement(this.props.targetComponent, {onlyRenderChild : !0},
                             n)
    }
    return this.props.children
  }
}
class Fa {
  constructor() { _(this, "instanceMap", new Map) }
  get(t) { return this.instanceMap.get(t) }
  add(t, r) {
    const n = this.instanceMap.get(t);
    n ? n.push(r) : this.instanceMap.set(t, [ r ])
  }
  remove(t, r) {
    const n = this.instanceMap.get(t);
    if (r !== void 0 && Array.isArray(n)) {
      const o = n.filter(a => a !== r);
      this.instanceMap.set(t, o)
    } else
      this.instanceMap.delete(t)
  }
  destroy() { this.instanceMap.clear() }
}
const La = e => {
  const {node : t} = e, r = x.useMemo(() => {
    const s = t.isContainer();
    return tt(s) ? s : {
      placeholder : "Drag the component to place it",
      width : "100%",
      height : "100%",
      style : {}
    }
  }, [ e.node ]), {placeholder : n, height : o, width : a, style : i} = r;
  return Le("div", {
    style : {
      display : "flex",
      alignItems : "center",
      justifyContent : "center",
      backgroundColor : "rgba(200,200,200,0.1)",
      border : "1px solid rgba(0,0,0,0.1)",
      borderRadius : "2px",
      fontSize : "14px",
      color : "gray",
      cursor : "default",
      minWidth : "300px",
      minHeight : "50px",
      width : a,
      height : o,
      ...i
    },
    children : n
  })
};
class Mm extends x.Component {
  constructor(t) {
    super(t), _(this, "instanceManager", new Fa), _(this, "renderRef"),
        _(this, "dropPlaceholder", La),
        _(this, "onGetComponent",
          (r, n) => {
            const o = this;
            class a extends x.Component {
              constructor() {
                super(...arguments), _(this, "_DESIGN_BOX", !0),
                    _(this, "_NODE_MODEL", n), _(this, "_NODE_ID", n.id),
                    _(this, "_UNIQUE_ID", `${n.id}_${pe()}`), _(this, "_STATUS")
              }
              componentDidMount() { o.instanceManager.add(n.id, this) }
              componentWillUnmount() {
                this._STATUS = "DESTROY", o.instanceManager.remove(n.id, this)
              }
              render() {
                const {children : s = [], onlyRenderChild : u, ...f} =
                    this.props;
                let l = s;
                return Ze(s) || (l = [ s ]),
                       !l.filter(Boolean).length &&
                           (n.isContainer() ||
                            n.value.componentName === Je.ROOT_CONTAINER) &&
                           l.push(
                               x.createElement(o.dropPlaceholder, {node : n})),
                       u ? l : x.createElement(r, f, ...l)
              }
            }
            return x.forwardRef(function(i, s) {
              return x.createElement(Rm, {node : n, targetComponent : a},
                                     x.createElement(a, {ref : s, ...i}))
            })
          }),
        this.renderRef = x.createRef(),
        t.dropPlaceholder && (this.dropPlaceholder = t.dropPlaceholder)
  }
  componentDidMount() {
    var t, r;
    (r = (t = this.props).onMount) == null || r.call(t, this)
  }
  getPageModel() {
    var t;
    return (t = this.renderRef.current) == null ? void 0 : t.state.pageModel
  }
  rerender(t) {
    var r;
    return (r = this.renderRef.current) == null ? void 0 : r.rerender(t)
  }
  getInstancesById(t, r) {
    let n = [...this.instanceManager.get(t) || [] ];
    return r !== void 0 &&
               (n = n.filter(o => r === (o == null ? void 0 : o._UNIQUE_ID))),
           n
  }
  getInstanceByDom(t) {
    const r = Ba(t);
    if (!r)
      return null;
    const n = Ua(r);
    return (n == null ? void 0 : n.stateNode) || null
  }
  getDomsById(t, r) {
    const n = this.getInstancesById(t), o = [];
    return n == null || n.forEach(a => {
      if ((a == null ? void 0 : a._STATUS) === "DESTROY")
        return;
      const i = ai.findDOMNode(a);
      if (i && !(i instanceof Text))
        if (r) {
          const s = Array.from(i.querySelectorAll(r));
          o.push(...s)
        } else
          o.push(i)
    }),
           o
  }
  getDomRectById(t, r) {
    return this.getDomsById(t, r)
        .map(n => n == null ? void 0 : n.getBoundingClientRect())
        .filter(Boolean)
  }
  render() {
    const {props : t, onGetComponent : r} = this, {render : n, ...o} = t;
    return n && (n.ref.current = this), Le(Ia, {
             onGetComponent : r,
             ...o,
             processNodeConfigHook : (a, i) => {
               var s, u;
               if (i.nodeType !== "NODE")
                 return a;
               const {props : f, condition : l} = a;
               let p = {...f};
               const d = ((s = i.value.configure) == null ? void 0
                                                          : s.devState) ||
                         {},
                     v = (u = i.material) == null ? void 0 : u.value.fixedProps;
               if (v !== void 0) {
                 if (tt(v))
                   p = {...p, ...v};
                 else if (typeof v == "function") {
                   const E = v(p);
                   p = {...p, ...E }
                 }
               }
               let g = l;
               return d.condition === !1 && (g = d.condition), {
                 props: im(p, d.props || {}), condition: g
               }
             },
             ref : this.renderRef
           })
  }
}
const Ba = e => {
  if (!e)
    return null;
  const t = Object.keys(e).find(r => r.startsWith("__reactInternalInstance$") ||
                                     r.startsWith("__reactFiber$")) ||
            "";
  return t ? e[t] : Ba(e.parentElement)
}, Ua = e => {
  var t;
  return e ? (t = e == null ? void 0 : e.stateNode) != null && t._DESIGN_BOX
                 ? e
                 : Ua(e.return)
           : null
}, $m = () => {
  const e = x.useRef(null);
  return {
    ref: e, rerender: function(...t) { e.current && e.current.rerender(...t) },
        getInstancesById(t, r) {
      var n;
      return ((n = e.current) == null ? void 0 : n.getInstancesById(t, r)) || []
    }
    , getInstanceByDom(t) {
      var r;
      return ((r = e.current) == null ? void 0 : r.getInstanceByDom(t)) || null
    }
    , getDomsById(t, r) {
      var n;
      return ((n = e.current) == null ? void 0 : n.getDomsById(t, r)) || []
    }
    , getDomRectById(t, r) {
      var n;
      return ((n = e.current) == null ? void 0 : n.getDomRectById(t, r)) || []
    }
  }
};
var Am = typeof globalThis < "u" ? globalThis
         : typeof window < "u"   ? window
         : typeof global < "u"   ? global
         : typeof self < "u"     ? self
                                 : {};
function Tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
             ? e.default
             : e
}
var Va = {exports : {}};
(function(e, t) {
(function(r, n) { e.exports = n() })(Am, function() {
var r = function() {}, n = {}, o = {}, a = {};
function i(d, v) {
  d = d.push ? d : [ d ];
  var g = [], E = d.length, w = E, j, O, U, I;
  for (j = function(Y, q) { q.length && g.push(Y), w--, w || v(g) }; E--;) {
    if (O = d[E], U = o[O], U) {
      j(O, U);
      continue
    }
    I = a[O] = a[O] || [], I.push(j)
  }
}
function s(d, v) {
  if (d) {
    var g = a[d];
    if (o[d] = v, !!g)
      for (; g.length;)
        g[0](d, v), g.splice(0, 1)
  }
}
function u(d, v) {
  d.call && (d = {success : d}),
      v.length ? (d.error || r)(v) : (d.success || r)(d)
}
function f(d, v, g, E) {
  var w = document, j = g.async, O = (g.numRetries || 0) + 1, U = g.before || r,
      I = d.replace(/[\?|#].*$/, ""),
      Y = d.replace(/^(css|img|module|nomodule)!/, ""), q, ce, A;
  if (E = E || 0, /(^css!|\.css$)/.test(I))
    A = w.createElement("link"), A.rel = "stylesheet", A.href = Y,
    q = "hideFocus" in A,
    q && A.relList && (q = 0, A.rel = "preload", A.as = "style");
  else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(I))
    A = w.createElement("img"), A.src = Y;
  else if (A = w.createElement("script"), A.src = Y,
           A.async = j === void 0 ? !0 : j, ce = "noModule" in A,
           /^module!/.test(I)) {
    if (!ce)
      return v(d, "l");
    A.type = "module"
  } else if (/^nomodule!/.test(I) && ce)
    return v(d, "l");
  A.onload = A.onerror = A.onbeforeload = function(L) {
    var H = L.type[0];
    if (q)
      try {
        A.sheet.cssText.length || (H = "e")
      } catch (he) {
        he.code != 18 && (H = "e")
      }
    if (H == "e") {
      if (E += 1, E < O)
        return f(d, v, g, E)
    } else if (A.rel == "preload" && A.as == "style")
      return A.rel = "stylesheet";
    v(d, H, L.defaultPrevented)
  }, U(d, A) !== !1 && w.head.appendChild(A)
}
function l(d, v, g) {
  d = d.push ? d : [ d ];
  var E = d.length, w = E, j = [], O, U;
  for (O = function(I, Y, q) {
         if (Y == "e" && j.push(I), Y == "b")
           if (q)
             j.push(I);
           else
             return;
         E--, E || v(j)
       }, U = 0; U < w; U++)
    f(d[U], O, g)
}
function p(d, v, g) {
  var E, w;
  if (v && v.trim && (E = v), w = (E ? g : v) || {}, E) {
    if (E in n)
      throw "LoadJS";
    n[E] = !0
  }
  function j(O, U) {
    l(d, function(I) { u(w, I), O && u({success : O, error : U}, I), s(E, I) },
      w)
  }
  if (w.returnPromise)
    return new Promise(j);
  j()
}
return p.ready = function(d, v) { return i(d, function(g) { u(v, g) }), p },
       p.done = function(d) { s(d, []) },
       p.reset = function() { n = {}, o = {}, a = {} },
       p.isDefined = function(d) { return d in n }, p
})
})(Va);
var Pm = Va.exports;
const za = Tm(Pm);
class Dm {
  constructor(t, r) {
    _(this, "assets"), _(this, "loadStatus"), _(this, "win", window),
        _(this, "_onSuccessList", []), _(this, "_onErrorList", []),
        this.assets = t, this.loadStatus = "INIT",
        r != null && r.window && (this.win = r.window)
  }
  load() {
    const t = this.assets || [], r = [];
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      o.id || (o.id = pe()), r.push(o.id);
      const a = o.resources.map(i => i.src);
      za(a, o.id, {
        async : !1,
        before : (i, s) => (this.win.document.body.appendChild(s), !1)
      })
    }
    if (t.length === 0) {
      this._onSuccessList.forEach(n => n());
      return
    }
    return new Promise(
        (n, o) => {za.ready(r, {
          success : () => {this._onSuccessList.forEach(a => a()), n("")},
          error : a => { this._onErrorList.forEach(i => i(a)), o(a) }
        })})
  }
  onSuccess(t) { return this._onSuccessList.push(t), this }
  onError(t) { return this._onErrorList.push(t), this }
}
return Object.freeze(Object.defineProperty({
  __proto__ : null,
  AssetLoader : Dm,
  ComponentInstanceManager : Fa,
  DefaultDropPlaceholder : La,
  DefineReactAdapter : ka,
  DesignRender : Mm,
  ReactAdapter : hm,
  Render : Ia,
  canAcceptsRef : $a,
  collectVariable : cm,
  compWrapper : Aa,
  convertCodeStringToFunction : Ta,
  flatObject : um,
  formatSourceStylePropertyName : cn,
  getAdapter : En,
  getCSSTextValue : un,
  getMatchVal : Pa,
  getObjFromArrayMap : sn,
  isClass : sm,
  runExpression : ke,
  shouldConstruct : Ma,
  useDesignRender : $m,
  useRender : Nm
},
                                           Symbol.toStringTag,
                                           {value : "Module"}))
});
// # sourceMappingURL=render.umd.js.map
