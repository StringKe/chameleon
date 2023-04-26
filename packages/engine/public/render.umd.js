(function (x, ot) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = ot(require('react'), require('react-dom')))
    : typeof define == 'function' && define.amd
    ? define(['react', 'react-dom'], ot)
    : ((x = typeof globalThis < 'u' ? globalThis : x || self), (x.CRender = ot(x.React, x.ReactDOM)));
})(this, function (x, ot) {
  'use strict';
  function ei(e) {
    const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const r in e)
        if (r !== 'default') {
          const n = Object.getOwnPropertyDescriptor(e, r);
          Object.defineProperty(t, r, n.get ? n : { enumerable: !0, get: () => e[r] });
        }
    }
    return (t.default = e), Object.freeze(t);
  }
  const ti = ei(ot);
  var xt = {},
    ri = {
      get exports() {
        return xt;
      },
      set exports(e) {
        xt = e;
      },
    },
    at = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var mn;
  function ni() {
    if (mn) return at;
    mn = 1;
    var e = x,
      t = Symbol.for('react.element'),
      r = Symbol.for('react.fragment'),
      n = Object.prototype.hasOwnProperty,
      o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      a = { key: !0, ref: !0, __self: !0, __source: !0 };
    function i(s, u, l) {
      var f,
        p = {},
        d = null,
        v = null;
      l !== void 0 && (d = '' + l), u.key !== void 0 && (d = '' + u.key), u.ref !== void 0 && (v = u.ref);
      for (f in u) n.call(u, f) && !a.hasOwnProperty(f) && (p[f] = u[f]);
      if (s && s.defaultProps) for (f in ((u = s.defaultProps), u)) p[f] === void 0 && (p[f] = u[f]);
      return { $$typeof: t, type: s, key: d, ref: v, props: p, _owner: o.current };
    }
    return (at.Fragment = r), (at.jsx = i), (at.jsxs = i), at;
  }
  var it = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var gn;
  function oi() {
    return (
      gn ||
        ((gn = 1),
        {}.NODE_ENV !== 'production' &&
          (function () {
            var e = x,
              t = Symbol.for('react.element'),
              r = Symbol.for('react.portal'),
              n = Symbol.for('react.fragment'),
              o = Symbol.for('react.strict_mode'),
              a = Symbol.for('react.profiler'),
              i = Symbol.for('react.provider'),
              s = Symbol.for('react.context'),
              u = Symbol.for('react.forward_ref'),
              l = Symbol.for('react.suspense'),
              f = Symbol.for('react.suspense_list'),
              p = Symbol.for('react.memo'),
              d = Symbol.for('react.lazy'),
              v = Symbol.for('react.offscreen'),
              b = Symbol.iterator,
              _ = '@@iterator';
            function E(c) {
              if (c === null || typeof c != 'object') return null;
              var h = (b && c[b]) || c[_];
              return typeof h == 'function' ? h : null;
            }
            var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function C(c) {
              {
                for (var h = arguments.length, y = new Array(h > 1 ? h - 1 : 0), w = 1; w < h; w++)
                  y[w - 1] = arguments[w];
                W('error', c, y);
              }
            }
            function W(c, h, y) {
              {
                var w = O.ReactDebugCurrentFrame,
                  A = w.getStackAddendum();
                A !== '' && ((h += '%s'), (y = y.concat([A])));
                var $ = y.map(function (T) {
                  return String(T);
                });
                $.unshift('Warning: ' + h), Function.prototype.apply.call(console[c], console, $);
              }
            }
            var D = !1,
              B = !1,
              Z = !1,
              Y = !1,
              N = !1,
              ae;
            ae = Symbol.for('react.module.reference');
            function le(c) {
              return !!(
                typeof c == 'string' ||
                typeof c == 'function' ||
                c === n ||
                c === a ||
                N ||
                c === o ||
                c === l ||
                c === f ||
                Y ||
                c === v ||
                D ||
                B ||
                Z ||
                (typeof c == 'object' &&
                  c !== null &&
                  (c.$$typeof === d ||
                    c.$$typeof === p ||
                    c.$$typeof === i ||
                    c.$$typeof === s ||
                    c.$$typeof === u ||
                    c.$$typeof === ae ||
                    c.getModuleId !== void 0))
              );
            }
            function St(c, h, y) {
              var w = c.displayName;
              if (w) return w;
              var A = h.displayName || h.name || '';
              return A !== '' ? y + '(' + A + ')' : y;
            }
            function Ht(c) {
              return c.displayName || 'Context';
            }
            function ee(c) {
              if (c == null) return null;
              if (
                (typeof c.tag == 'number' &&
                  C(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                  ),
                typeof c == 'function')
              )
                return c.displayName || c.name || null;
              if (typeof c == 'string') return c;
              switch (c) {
                case n:
                  return 'Fragment';
                case r:
                  return 'Portal';
                case a:
                  return 'Profiler';
                case o:
                  return 'StrictMode';
                case l:
                  return 'Suspense';
                case f:
                  return 'SuspenseList';
              }
              if (typeof c == 'object')
                switch (c.$$typeof) {
                  case s:
                    var h = c;
                    return Ht(h) + '.Consumer';
                  case i:
                    var y = c;
                    return Ht(y._context) + '.Provider';
                  case u:
                    return St(c, c.render, 'ForwardRef');
                  case p:
                    var w = c.displayName || null;
                    return w !== null ? w : ee(c.type) || 'Memo';
                  case d: {
                    var A = c,
                      $ = A._payload,
                      T = A._init;
                    try {
                      return ee(T($));
                    } catch {
                      return null;
                    }
                  }
                }
              return null;
            }
            var te = Object.assign,
              H = 0,
              Yt,
              Ze,
              Jt,
              Pe,
              et,
              re,
              be;
            function tt() {}
            tt.__reactDisabledLog = !0;
            function cn() {
              {
                if (H === 0) {
                  (Yt = console.log),
                    (Ze = console.info),
                    (Jt = console.warn),
                    (Pe = console.error),
                    (et = console.group),
                    (re = console.groupCollapsed),
                    (be = console.groupEnd);
                  var c = {
                    configurable: !0,
                    enumerable: !0,
                    value: tt,
                    writable: !0,
                  };
                  Object.defineProperties(console, {
                    info: c,
                    log: c,
                    warn: c,
                    error: c,
                    group: c,
                    groupCollapsed: c,
                    groupEnd: c,
                  });
                }
                H++;
              }
            }
            function Ay() {
              {
                if ((H--, H === 0)) {
                  var c = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: te({}, c, { value: Yt }),
                    info: te({}, c, { value: Ze }),
                    warn: te({}, c, { value: Jt }),
                    error: te({}, c, { value: Pe }),
                    group: te({}, c, { value: et }),
                    groupCollapsed: te({}, c, { value: re }),
                    groupEnd: te({}, c, { value: be }),
                  });
                }
                H < 0 && C('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
              }
            }
            var un = O.ReactCurrentDispatcher,
              ln;
            function Qt(c, h, y) {
              {
                if (ln === void 0)
                  try {
                    throw Error();
                  } catch (A) {
                    var w = A.stack.trim().match(/\n( *(at )?)/);
                    ln = (w && w[1]) || '';
                  }
                return (
                  `
` +
                  ln +
                  c
                );
              }
            }
            var fn = !1,
              qt;
            {
              var My = typeof WeakMap == 'function' ? WeakMap : Map;
              qt = new My();
            }
            function Ba(c, h) {
              if (!c || fn) return '';
              {
                var y = qt.get(c);
                if (y !== void 0) return y;
              }
              var w;
              fn = !0;
              var A = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              var $;
              ($ = un.current), (un.current = null), cn();
              try {
                if (h) {
                  var T = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(T.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(T, []);
                    } catch (_e) {
                      w = _e;
                    }
                    Reflect.construct(c, [], T);
                  } else {
                    try {
                      T.call();
                    } catch (_e) {
                      w = _e;
                    }
                    c.call(T.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (_e) {
                    w = _e;
                  }
                  c();
                }
              } catch (_e) {
                if (_e && w && typeof _e.stack == 'string') {
                  for (
                    var R = _e.stack.split(`
`),
                      J = w.stack.split(`
`),
                      U = R.length - 1,
                      G = J.length - 1;
                    U >= 1 && G >= 0 && R[U] !== J[G];

                  )
                    G--;
                  for (; U >= 1 && G >= 0; U--, G--)
                    if (R[U] !== J[G]) {
                      if (U !== 1 || G !== 1)
                        do
                          if ((U--, G--, G < 0 || R[U] !== J[G])) {
                            var ie =
                              `
` + R[U].replace(' at new ', ' at ');
                            return (
                              c.displayName &&
                                ie.includes('<anonymous>') &&
                                (ie = ie.replace('<anonymous>', c.displayName)),
                              typeof c == 'function' && qt.set(c, ie),
                              ie
                            );
                          }
                        while (U >= 1 && G >= 0);
                      break;
                    }
                }
              } finally {
                (fn = !1), (un.current = $), Ay(), (Error.prepareStackTrace = A);
              }
              var nt = c ? c.displayName || c.name : '',
                Za = nt ? Qt(nt) : '';
              return typeof c == 'function' && qt.set(c, Za), Za;
            }
            function $y(c, h, y) {
              return Ba(c, !1);
            }
            function Py(c) {
              var h = c.prototype;
              return !!(h && h.isReactComponent);
            }
            function Xt(c, h, y) {
              if (c == null) return '';
              if (typeof c == 'function') return Ba(c, Py(c));
              if (typeof c == 'string') return Qt(c);
              switch (c) {
                case l:
                  return Qt('Suspense');
                case f:
                  return Qt('SuspenseList');
              }
              if (typeof c == 'object')
                switch (c.$$typeof) {
                  case u:
                    return $y(c.render);
                  case p:
                    return Xt(c.type, h, y);
                  case d: {
                    var w = c,
                      A = w._payload,
                      $ = w._init;
                    try {
                      return Xt($(A), h, y);
                    } catch {}
                  }
                }
              return '';
            }
            var Kt = Object.prototype.hasOwnProperty,
              Ua = {},
              za = O.ReactDebugCurrentFrame;
            function Zt(c) {
              if (c) {
                var h = c._owner,
                  y = Xt(c.type, c._source, h ? h.type : null);
                za.setExtraStackFrame(y);
              } else za.setExtraStackFrame(null);
            }
            function Dy(c, h, y, w, A) {
              {
                var $ = Function.call.bind(Kt);
                for (var T in c)
                  if ($(c, T)) {
                    var R = void 0;
                    try {
                      if (typeof c[T] != 'function') {
                        var J = Error(
                          (w || 'React class') +
                            ': ' +
                            y +
                            ' type `' +
                            T +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof c[T] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        throw ((J.name = 'Invariant Violation'), J);
                      }
                      R = c[T](h, T, w, y, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                    } catch (U) {
                      R = U;
                    }
                    R &&
                      !(R instanceof Error) &&
                      (Zt(A),
                      C(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        w || 'React class',
                        y,
                        T,
                        typeof R
                      ),
                      Zt(null)),
                      R instanceof Error &&
                        !(R.message in Ua) &&
                        ((Ua[R.message] = !0), Zt(A), C('Failed %s type: %s', y, R.message), Zt(null));
                  }
              }
            }
            var ky = Array.isArray;
            function dn(c) {
              return ky(c);
            }
            function Iy(c) {
              {
                var h = typeof Symbol == 'function' && Symbol.toStringTag,
                  y = (h && c[Symbol.toStringTag]) || c.constructor.name || 'Object';
                return y;
              }
            }
            function Fy(c) {
              try {
                return Va(c), !1;
              } catch {
                return !0;
              }
            }
            function Va(c) {
              return '' + c;
            }
            function Ga(c) {
              if (Fy(c))
                return (
                  C(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    Iy(c)
                  ),
                  Va(c)
                );
            }
            var Ot = O.ReactCurrentOwner,
              Ly = { key: !0, ref: !0, __self: !0, __source: !0 },
              Wa,
              Ha,
              pn;
            pn = {};
            function By(c) {
              if (Kt.call(c, 'ref')) {
                var h = Object.getOwnPropertyDescriptor(c, 'ref').get;
                if (h && h.isReactWarning) return !1;
              }
              return c.ref !== void 0;
            }
            function Uy(c) {
              if (Kt.call(c, 'key')) {
                var h = Object.getOwnPropertyDescriptor(c, 'key').get;
                if (h && h.isReactWarning) return !1;
              }
              return c.key !== void 0;
            }
            function zy(c, h) {
              if (typeof c.ref == 'string' && Ot.current && h && Ot.current.stateNode !== h) {
                var y = ee(Ot.current.type);
                pn[y] ||
                  (C(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    ee(Ot.current.type),
                    c.ref
                  ),
                  (pn[y] = !0));
              }
            }
            function Vy(c, h) {
              {
                var y = function () {
                  Wa ||
                    ((Wa = !0),
                    C(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      h
                    ));
                };
                (y.isReactWarning = !0), Object.defineProperty(c, 'key', { get: y, configurable: !0 });
              }
            }
            function Gy(c, h) {
              {
                var y = function () {
                  Ha ||
                    ((Ha = !0),
                    C(
                      '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      h
                    ));
                };
                (y.isReactWarning = !0), Object.defineProperty(c, 'ref', { get: y, configurable: !0 });
              }
            }
            var Wy = function (c, h, y, w, A, $, T) {
              var R = {
                $$typeof: t,
                type: c,
                key: h,
                ref: y,
                props: T,
                _owner: $,
              };
              return (
                (R._store = {}),
                Object.defineProperty(R._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(R, '_self', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: w,
                }),
                Object.defineProperty(R, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: A,
                }),
                Object.freeze && (Object.freeze(R.props), Object.freeze(R)),
                R
              );
            };
            function Hy(c, h, y, w, A) {
              {
                var $,
                  T = {},
                  R = null,
                  J = null;
                y !== void 0 && (Ga(y), (R = '' + y)),
                  Uy(h) && (Ga(h.key), (R = '' + h.key)),
                  By(h) && ((J = h.ref), zy(h, A));
                for ($ in h) Kt.call(h, $) && !Ly.hasOwnProperty($) && (T[$] = h[$]);
                if (c && c.defaultProps) {
                  var U = c.defaultProps;
                  for ($ in U) T[$] === void 0 && (T[$] = U[$]);
                }
                if (R || J) {
                  var G = typeof c == 'function' ? c.displayName || c.name || 'Unknown' : c;
                  R && Vy(T, G), J && Gy(T, G);
                }
                return Wy(c, R, J, A, w, Ot.current, T);
              }
            }
            var hn = O.ReactCurrentOwner,
              Ya = O.ReactDebugCurrentFrame;
            function rt(c) {
              if (c) {
                var h = c._owner,
                  y = Xt(c.type, c._source, h ? h.type : null);
                Ya.setExtraStackFrame(y);
              } else Ya.setExtraStackFrame(null);
            }
            var vn;
            vn = !1;
            function yn(c) {
              return typeof c == 'object' && c !== null && c.$$typeof === t;
            }
            function Ja() {
              {
                if (hn.current) {
                  var c = ee(hn.current.type);
                  if (c)
                    return (
                      `

Check the render method of \`` +
                      c +
                      '`.'
                    );
                }
                return '';
              }
            }
            function Yy(c) {
              {
                if (c !== void 0) {
                  var h = c.fileName.replace(/^.*[\\\/]/, ''),
                    y = c.lineNumber;
                  return (
                    `

Check your code at ` +
                    h +
                    ':' +
                    y +
                    '.'
                  );
                }
                return '';
              }
            }
            var Qa = {};
            function Jy(c) {
              {
                var h = Ja();
                if (!h) {
                  var y = typeof c == 'string' ? c : c.displayName || c.name;
                  y &&
                    (h =
                      `

Check the top-level render call using <` +
                      y +
                      '>.');
                }
                return h;
              }
            }
            function qa(c, h) {
              {
                if (!c._store || c._store.validated || c.key != null) return;
                c._store.validated = !0;
                var y = Jy(h);
                if (Qa[y]) return;
                Qa[y] = !0;
                var w = '';
                c &&
                  c._owner &&
                  c._owner !== hn.current &&
                  (w = ' It was passed a child from ' + ee(c._owner.type) + '.'),
                  rt(c),
                  C(
                    'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                    y,
                    w
                  ),
                  rt(null);
              }
            }
            function Xa(c, h) {
              {
                if (typeof c != 'object') return;
                if (dn(c))
                  for (var y = 0; y < c.length; y++) {
                    var w = c[y];
                    yn(w) && qa(w, h);
                  }
                else if (yn(c)) c._store && (c._store.validated = !0);
                else if (c) {
                  var A = E(c);
                  if (typeof A == 'function' && A !== c.entries)
                    for (var $ = A.call(c), T; !(T = $.next()).done; ) yn(T.value) && qa(T.value, h);
                }
              }
            }
            function Qy(c) {
              {
                var h = c.type;
                if (h == null || typeof h == 'string') return;
                var y;
                if (typeof h == 'function') y = h.propTypes;
                else if (typeof h == 'object' && (h.$$typeof === u || h.$$typeof === p)) y = h.propTypes;
                else return;
                if (y) {
                  var w = ee(h);
                  Dy(y, c.props, 'prop', w, c);
                } else if (h.PropTypes !== void 0 && !vn) {
                  vn = !0;
                  var A = ee(h);
                  C(
                    'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                    A || 'Unknown'
                  );
                }
                typeof h.getDefaultProps == 'function' &&
                  !h.getDefaultProps.isReactClassApproved &&
                  C(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  );
              }
            }
            function qy(c) {
              {
                for (var h = Object.keys(c.props), y = 0; y < h.length; y++) {
                  var w = h[y];
                  if (w !== 'children' && w !== 'key') {
                    rt(c),
                      C(
                        'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                        w
                      ),
                      rt(null);
                    break;
                  }
                }
                c.ref !== null && (rt(c), C('Invalid attribute `ref` supplied to `React.Fragment`.'), rt(null));
              }
            }
            function Ka(c, h, y, w, A, $) {
              {
                var T = le(c);
                if (!T) {
                  var R = '';
                  (c === void 0 || (typeof c == 'object' && c !== null && Object.keys(c).length === 0)) &&
                    (R +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                  var J = Yy(A);
                  J ? (R += J) : (R += Ja());
                  var U;
                  c === null
                    ? (U = 'null')
                    : dn(c)
                    ? (U = 'array')
                    : c !== void 0 && c.$$typeof === t
                    ? ((U = '<' + (ee(c.type) || 'Unknown') + ' />'),
                      (R = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (U = typeof c),
                    C(
                      'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                      U,
                      R
                    );
                }
                var G = Hy(c, h, y, A, $);
                if (G == null) return G;
                if (T) {
                  var ie = h.children;
                  if (ie !== void 0)
                    if (w)
                      if (dn(ie)) {
                        for (var nt = 0; nt < ie.length; nt++) Xa(ie[nt], c);
                        Object.freeze && Object.freeze(ie);
                      } else
                        C(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                        );
                    else Xa(ie, c);
                }
                return c === n ? qy(G) : Qy(G), G;
              }
            }
            function Xy(c, h, y) {
              return Ka(c, h, y, !0);
            }
            function Ky(c, h, y) {
              return Ka(c, h, y, !1);
            }
            var Zy = Ky,
              em = Xy;
            (it.Fragment = n), (it.jsx = Zy), (it.jsxs = em);
          })()),
      it
    );
  }
  (function (e) {
    ({}).NODE_ENV === 'production' ? (e.exports = ni()) : (e.exports = oi());
  })(ri);
  const De = xt.jsx,
    bn = xt.jsxs;
  var ai = Object.defineProperty,
    ii = (e, t, r) => (t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    j = (e, t, r) => (ii(e, typeof t != 'symbol' ? t + '' : t, r), r);
  const si = (e) => () => {
      console.warn(`${e} need to be implement getComponent`);
    },
    ci = ['customPageRootRender'],
    _n = [
      'pageRender',
      'render',
      'convertModelToComponent',
      'getComponent',
      'getContext',
      'getUtils',
      'getDataLink',
      'createDataLink',
      'transformProps',
      'transformData',
      'transformGlobalData',
      'errorCatch',
      'clear',
    ],
    jn = (e) =>
      [..._n, ...ci].reduce((t, r) => {
        var n;
        return e != null && e[r] ? (t[r] = (n = e[r]) == null ? void 0 : n.bind(e)) : _n.includes(r) && (t[r] = si), t;
      }, {});
  var ui = Object.defineProperty,
    li = (e, t, r) => (t in e ? ui(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    S = (e, t, r) => (li(e, typeof t != 'symbol' ? t + '' : t, r), r),
    fi = typeof global == 'object' && global && global.Object === Object && global;
  const En = fi;
  var di = typeof self == 'object' && self && self.Object === Object && self,
    pi = En || di || Function('return this')();
  const fe = pi;
  var hi = fe.Symbol;
  const ne = hi;
  var wn = Object.prototype,
    vi = wn.hasOwnProperty,
    yi = wn.toString,
    st = ne ? ne.toStringTag : void 0;
  function mi(e) {
    var t = vi.call(e, st),
      r = e[st];
    try {
      e[st] = void 0;
      var n = !0;
    } catch {}
    var o = yi.call(e);
    return n && (t ? (e[st] = r) : delete e[st]), o;
  }
  var gi = Object.prototype,
    bi = gi.toString;
  function _i(e) {
    return bi.call(e);
  }
  var ji = '[object Null]',
    Ei = '[object Undefined]',
    Cn = ne ? ne.toStringTag : void 0;
  function we(e) {
    return e == null ? (e === void 0 ? Ei : ji) : Cn && Cn in Object(e) ? mi(e) : _i(e);
  }
  function de(e) {
    return e != null && typeof e == 'object';
  }
  var wi = '[object Symbol]';
  function er(e) {
    return typeof e == 'symbol' || (de(e) && we(e) == wi);
  }
  function tr(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
    return o;
  }
  var Ci = Array.isArray;
  const L = Ci;
  var Si = 1 / 0,
    Sn = ne ? ne.prototype : void 0,
    On = Sn ? Sn.toString : void 0;
  function xn(e) {
    if (typeof e == 'string') return e;
    if (L(e)) return tr(e, xn) + '';
    if (er(e)) return On ? On.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Si ? '-0' : t;
  }
  function se(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  function rr(e) {
    return e;
  }
  var Oi = '[object AsyncFunction]',
    xi = '[object Function]',
    Ri = '[object GeneratorFunction]',
    Ni = '[object Proxy]';
  function nr(e) {
    if (!se(e)) return !1;
    var t = we(e);
    return t == xi || t == Ri || t == Oi || t == Ni;
  }
  var Ti = fe['__core-js_shared__'];
  const or = Ti;
  var Rn = (function () {
    var e = /[^.]+$/.exec((or && or.keys && or.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
  function Ai(e) {
    return !!Rn && Rn in e;
  }
  var Mi = Function.prototype,
    $i = Mi.toString;
  function Ce(e) {
    if (e != null) {
      try {
        return $i.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var Pi = /[\\^$.*+?()[\]{}|]/g,
    Di = /^\[object .+?Constructor\]$/,
    ki = Function.prototype,
    Ii = Object.prototype,
    Fi = ki.toString,
    Li = Ii.hasOwnProperty,
    Bi = RegExp(
      '^' +
        Fi.call(Li)
          .replace(Pi, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    );
  function Ui(e) {
    if (!se(e) || Ai(e)) return !1;
    var t = nr(e) ? Bi : Di;
    return t.test(Ce(e));
  }
  function zi(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Se(e, t) {
    var r = zi(e, t);
    return Ui(r) ? r : void 0;
  }
  var Vi = Se(fe, 'WeakMap');
  const ar = Vi;
  var Nn = Object.create,
    Gi = (function () {
      function e() {}
      return function (t) {
        if (!se(t)) return {};
        if (Nn) return Nn(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  const Wi = Gi;
  function Hi(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  function Yi() {}
  function Tn(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  var Ji = 800,
    Qi = 16,
    qi = Date.now;
  function Xi(e) {
    var t = 0,
      r = 0;
    return function () {
      var n = qi(),
        o = Qi - (n - r);
      if (((r = n), o > 0)) {
        if (++t >= Ji) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  function Ki(e) {
    return function () {
      return e;
    };
  }
  var Zi = (function () {
    try {
      var e = Se(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })();
  const Rt = Zi;
  var es = Rt
      ? function (e, t) {
          return Rt(e, 'toString', { configurable: !0, enumerable: !1, value: Ki(t), writable: !0 });
        }
      : rr,
    ts = Xi(es);
  const An = ts;
  function rs(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
    return e;
  }
  function ns(e, t, r, n) {
    for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; ) if (t(e[a], a, e)) return a;
    return -1;
  }
  function os(e) {
    return e !== e;
  }
  function as(e, t, r) {
    for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n;
    return -1;
  }
  function is(e, t, r) {
    return t === t ? as(e, t, r) : ns(e, os, r);
  }
  function ss(e, t) {
    var r = e == null ? 0 : e.length;
    return !!r && is(e, t, 0) > -1;
  }
  var cs = 9007199254740991,
    us = /^(?:0|[1-9]\d*)$/;
  function Nt(e, t) {
    var r = typeof e;
    return (t = t ?? cs), !!t && (r == 'number' || (r != 'symbol' && us.test(e))) && e > -1 && e % 1 == 0 && e < t;
  }
  function ir(e, t, r) {
    t == '__proto__' && Rt ? Rt(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
  }
  function ct(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var ls = Object.prototype,
    fs = ls.hasOwnProperty;
  function sr(e, t, r) {
    var n = e[t];
    (!(fs.call(e, t) && ct(n, r)) || (r === void 0 && !(t in e))) && ir(e, t, r);
  }
  function ke(e, t, r, n) {
    var o = !r;
    r || (r = {});
    for (var a = -1, i = t.length; ++a < i; ) {
      var s = t[a],
        u = n ? n(r[s], e[s], s, r, e) : void 0;
      u === void 0 && (u = e[s]), o ? ir(r, s, u) : sr(r, s, u);
    }
    return r;
  }
  var Mn = Math.max;
  function $n(e, t, r) {
    return (
      (t = Mn(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (var n = arguments, o = -1, a = Mn(n.length - t, 0), i = Array(a); ++o < a; ) i[o] = n[t + o];
        o = -1;
        for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
        return (s[t] = r(i)), Hi(e, this, s);
      }
    );
  }
  function Pn(e, t) {
    return An($n(e, t, rr), e + '');
  }
  var ds = 9007199254740991;
  function cr(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= ds;
  }
  function Tt(e) {
    return e != null && cr(e.length) && !nr(e);
  }
  function ps(e, t, r) {
    if (!se(r)) return !1;
    var n = typeof t;
    return (n == 'number' ? Tt(r) && Nt(t, r.length) : n == 'string' && t in r) ? ct(r[t], e) : !1;
  }
  function hs(e) {
    return Pn(function (t, r) {
      var n = -1,
        o = r.length,
        a = o > 1 ? r[o - 1] : void 0,
        i = o > 2 ? r[2] : void 0;
      for (
        a = e.length > 3 && typeof a == 'function' ? (o--, a) : void 0,
          i && ps(r[0], r[1], i) && ((a = o < 3 ? void 0 : a), (o = 1)),
          t = Object(t);
        ++n < o;

      ) {
        var s = r[n];
        s && e(t, s, n, a);
      }
      return t;
    });
  }
  var vs = Object.prototype;
  function ur(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || vs;
    return e === r;
  }
  function ys(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var ms = '[object Arguments]';
  function Dn(e) {
    return de(e) && we(e) == ms;
  }
  var kn = Object.prototype,
    gs = kn.hasOwnProperty,
    bs = kn.propertyIsEnumerable,
    _s = Dn(
      (function () {
        return arguments;
      })()
    )
      ? Dn
      : function (e) {
          return de(e) && gs.call(e, 'callee') && !bs.call(e, 'callee');
        };
  const ut = _s;
  function js() {
    return !1;
  }
  var In = typeof exports == 'object' && exports && !exports.nodeType && exports,
    Fn = In && typeof module == 'object' && module && !module.nodeType && module,
    Es = Fn && Fn.exports === In,
    Ln = Es ? fe.Buffer : void 0,
    ws = Ln ? Ln.isBuffer : void 0,
    Cs = ws || js;
  const lt = Cs;
  var Ss = '[object Arguments]',
    Os = '[object Array]',
    xs = '[object Boolean]',
    Rs = '[object Date]',
    Ns = '[object Error]',
    Ts = '[object Function]',
    As = '[object Map]',
    Ms = '[object Number]',
    $s = '[object Object]',
    Ps = '[object RegExp]',
    Ds = '[object Set]',
    ks = '[object String]',
    Is = '[object WeakMap]',
    Fs = '[object ArrayBuffer]',
    Ls = '[object DataView]',
    Bs = '[object Float32Array]',
    Us = '[object Float64Array]',
    zs = '[object Int8Array]',
    Vs = '[object Int16Array]',
    Gs = '[object Int32Array]',
    Ws = '[object Uint8Array]',
    Hs = '[object Uint8ClampedArray]',
    Ys = '[object Uint16Array]',
    Js = '[object Uint32Array]',
    k = {};
  (k[Bs] = k[Us] = k[zs] = k[Vs] = k[Gs] = k[Ws] = k[Hs] = k[Ys] = k[Js] = !0),
    (k[Ss] =
      k[Os] =
      k[Fs] =
      k[xs] =
      k[Ls] =
      k[Rs] =
      k[Ns] =
      k[Ts] =
      k[As] =
      k[Ms] =
      k[$s] =
      k[Ps] =
      k[Ds] =
      k[ks] =
      k[Is] =
        !1);
  function Qs(e) {
    return de(e) && cr(e.length) && !!k[we(e)];
  }
  function lr(e) {
    return function (t) {
      return e(t);
    };
  }
  var Bn = typeof exports == 'object' && exports && !exports.nodeType && exports,
    ft = Bn && typeof module == 'object' && module && !module.nodeType && module,
    qs = ft && ft.exports === Bn,
    fr = qs && En.process,
    Xs = (function () {
      try {
        var e = ft && ft.require && ft.require('util').types;
        return e || (fr && fr.binding && fr.binding('util'));
      } catch {}
    })();
  const Ie = Xs;
  var Un = Ie && Ie.isTypedArray,
    Ks = Un ? lr(Un) : Qs;
  const dr = Ks;
  var Zs = Object.prototype,
    ec = Zs.hasOwnProperty;
  function zn(e, t) {
    var r = L(e),
      n = !r && ut(e),
      o = !r && !n && lt(e),
      a = !r && !n && !o && dr(e),
      i = r || n || o || a,
      s = i ? ys(e.length, String) : [],
      u = s.length;
    for (var l in e)
      (t || ec.call(e, l)) &&
        !(
          i &&
          (l == 'length' ||
            (o && (l == 'offset' || l == 'parent')) ||
            (a && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
            Nt(l, u))
        ) &&
        s.push(l);
    return s;
  }
  function Vn(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var tc = Vn(Object.keys, Object);
  const rc = tc;
  var nc = Object.prototype,
    oc = nc.hasOwnProperty;
  function ac(e) {
    if (!ur(e)) return rc(e);
    var t = [];
    for (var r in Object(e)) oc.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  function At(e) {
    return Tt(e) ? zn(e) : ac(e);
  }
  function ic(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var sc = Object.prototype,
    cc = sc.hasOwnProperty;
  function uc(e) {
    if (!se(e)) return ic(e);
    var t = ur(e),
      r = [];
    for (var n in e) (n == 'constructor' && (t || !cc.call(e, n))) || r.push(n);
    return r;
  }
  function dt(e) {
    return Tt(e) ? zn(e, !0) : uc(e);
  }
  var lc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    fc = /^\w*$/;
  function pr(e, t) {
    if (L(e)) return !1;
    var r = typeof e;
    return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || er(e)
      ? !0
      : fc.test(e) || !lc.test(e) || (t != null && e in Object(t));
  }
  var dc = Se(Object, 'create');
  const pt = dc;
  function pc() {
    (this.__data__ = pt ? pt(null) : {}), (this.size = 0);
  }
  function hc(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var vc = '__lodash_hash_undefined__',
    yc = Object.prototype,
    mc = yc.hasOwnProperty;
  function gc(e) {
    var t = this.__data__;
    if (pt) {
      var r = t[e];
      return r === vc ? void 0 : r;
    }
    return mc.call(t, e) ? t[e] : void 0;
  }
  var bc = Object.prototype,
    _c = bc.hasOwnProperty;
  function jc(e) {
    var t = this.__data__;
    return pt ? t[e] !== void 0 : _c.call(t, e);
  }
  var Ec = '__lodash_hash_undefined__';
  function wc(e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = pt && t === void 0 ? Ec : t), this;
  }
  function Oe(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (Oe.prototype.clear = pc),
    (Oe.prototype.delete = hc),
    (Oe.prototype.get = gc),
    (Oe.prototype.has = jc),
    (Oe.prototype.set = wc);
  function Cc() {
    (this.__data__ = []), (this.size = 0);
  }
  function Mt(e, t) {
    for (var r = e.length; r--; ) if (ct(e[r][0], t)) return r;
    return -1;
  }
  var Sc = Array.prototype,
    Oc = Sc.splice;
  function xc(e) {
    var t = this.__data__,
      r = Mt(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : Oc.call(t, r, 1), --this.size, !0;
  }
  function Rc(e) {
    var t = this.__data__,
      r = Mt(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function Nc(e) {
    return Mt(this.__data__, e) > -1;
  }
  function Tc(e, t) {
    var r = this.__data__,
      n = Mt(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  function ve(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (ve.prototype.clear = Cc),
    (ve.prototype.delete = xc),
    (ve.prototype.get = Rc),
    (ve.prototype.has = Nc),
    (ve.prototype.set = Tc);
  var Ac = Se(fe, 'Map');
  const ht = Ac;
  function Mc() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Oe(),
        map: new (ht || ve)(),
        string: new Oe(),
      });
  }
  function $c(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
  }
  function $t(e, t) {
    var r = e.__data__;
    return $c(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  function Pc(e) {
    var t = $t(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Dc(e) {
    return $t(this, e).get(e);
  }
  function kc(e) {
    return $t(this, e).has(e);
  }
  function Ic(e, t) {
    var r = $t(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  function ye(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (ye.prototype.clear = Mc),
    (ye.prototype.delete = Pc),
    (ye.prototype.get = Dc),
    (ye.prototype.has = kc),
    (ye.prototype.set = Ic);
  var Fc = 'Expected a function';
  function hr(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(Fc);
    var r = function () {
      var n = arguments,
        o = t ? t.apply(this, n) : n[0],
        a = r.cache;
      if (a.has(o)) return a.get(o);
      var i = e.apply(this, n);
      return (r.cache = a.set(o, i) || a), i;
    };
    return (r.cache = new (hr.Cache || ye)()), r;
  }
  hr.Cache = ye;
  var Lc = 500;
  function Bc(e) {
    var t = hr(e, function (n) {
        return r.size === Lc && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var Uc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    zc = /\\(\\)?/g,
    Vc = Bc(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Uc, function (r, n, o, a) {
          t.push(o ? a.replace(zc, '$1') : n || r);
        }),
        t
      );
    });
  const Gc = Vc;
  function Wc(e) {
    return e == null ? '' : xn(e);
  }
  function Fe(e, t) {
    return L(e) ? e : pr(e, t) ? [e] : Gc(Wc(e));
  }
  var Hc = 1 / 0;
  function Le(e) {
    if (typeof e == 'string' || er(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Hc ? '-0' : t;
  }
  function Pt(e, t) {
    t = Fe(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[Le(t[r++])];
    return r && r == n ? e : void 0;
  }
  function Gn(e, t, r) {
    var n = e == null ? void 0 : Pt(e, t);
    return n === void 0 ? r : n;
  }
  function vr(e, t) {
    for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
    return e;
  }
  var Wn = ne ? ne.isConcatSpreadable : void 0;
  function Yc(e) {
    return L(e) || ut(e) || !!(Wn && e && e[Wn]);
  }
  function yr(e, t, r, n, o) {
    var a = -1,
      i = e.length;
    for (r || (r = Yc), o || (o = []); ++a < i; ) {
      var s = e[a];
      t > 0 && r(s) ? (t > 1 ? yr(s, t - 1, r, n, o) : vr(o, s)) : n || (o[o.length] = s);
    }
    return o;
  }
  function Jc(e) {
    var t = e == null ? 0 : e.length;
    return t ? yr(e, 1) : [];
  }
  function Qc(e) {
    return An($n(e, void 0, Jc), e + '');
  }
  var qc = Vn(Object.getPrototypeOf, Object);
  const mr = qc;
  var Xc = '[object Object]',
    Kc = Function.prototype,
    Zc = Object.prototype,
    Hn = Kc.toString,
    eu = Zc.hasOwnProperty,
    tu = Hn.call(Object);
  function Q(e) {
    if (!de(e) || we(e) != Xc) return !1;
    var t = mr(e);
    if (t === null) return !0;
    var r = eu.call(t, 'constructor') && t.constructor;
    return typeof r == 'function' && r instanceof r && Hn.call(r) == tu;
  }
  function ru(e, t, r) {
    var n = -1,
      o = e.length;
    t < 0 && (t = -t > o ? 0 : o + t),
      (r = r > o ? o : r),
      r < 0 && (r += o),
      (o = t > r ? 0 : (r - t) >>> 0),
      (t >>>= 0);
    for (var a = Array(o); ++n < o; ) a[n] = e[n + t];
    return a;
  }
  function nu() {
    (this.__data__ = new ve()), (this.size = 0);
  }
  function ou(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  function au(e) {
    return this.__data__.get(e);
  }
  function iu(e) {
    return this.__data__.has(e);
  }
  var su = 200;
  function cu(e, t) {
    var r = this.__data__;
    if (r instanceof ve) {
      var n = r.__data__;
      if (!ht || n.length < su - 1) return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new ye(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  function ce(e) {
    var t = (this.__data__ = new ve(e));
    this.size = t.size;
  }
  (ce.prototype.clear = nu),
    (ce.prototype.delete = ou),
    (ce.prototype.get = au),
    (ce.prototype.has = iu),
    (ce.prototype.set = cu);
  function uu(e, t) {
    return e && ke(t, At(t), e);
  }
  function lu(e, t) {
    return e && ke(t, dt(t), e);
  }
  var Yn = typeof exports == 'object' && exports && !exports.nodeType && exports,
    Jn = Yn && typeof module == 'object' && module && !module.nodeType && module,
    fu = Jn && Jn.exports === Yn,
    Qn = fu ? fe.Buffer : void 0,
    qn = Qn ? Qn.allocUnsafe : void 0;
  function Xn(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = qn ? qn(r) : new e.constructor(r);
    return e.copy(n), n;
  }
  function du(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
      var i = e[r];
      t(i, r, e) && (a[o++] = i);
    }
    return a;
  }
  function Kn() {
    return [];
  }
  var pu = Object.prototype,
    hu = pu.propertyIsEnumerable,
    Zn = Object.getOwnPropertySymbols,
    vu = Zn
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              du(Zn(e), function (t) {
                return hu.call(e, t);
              }));
        }
      : Kn;
  const gr = vu;
  function yu(e, t) {
    return ke(e, gr(e), t);
  }
  var mu = Object.getOwnPropertySymbols,
    gu = mu
      ? function (e) {
          for (var t = []; e; ) vr(t, gr(e)), (e = mr(e));
          return t;
        }
      : Kn;
  const eo = gu;
  function bu(e, t) {
    return ke(e, eo(e), t);
  }
  function to(e, t, r) {
    var n = t(e);
    return L(e) ? n : vr(n, r(e));
  }
  function br(e) {
    return to(e, At, gr);
  }
  function _r(e) {
    return to(e, dt, eo);
  }
  var _u = Se(fe, 'DataView');
  const jr = _u;
  var ju = Se(fe, 'Promise');
  const Er = ju;
  var Eu = Se(fe, 'Set');
  const Be = Eu;
  var ro = '[object Map]',
    wu = '[object Object]',
    no = '[object Promise]',
    oo = '[object Set]',
    ao = '[object WeakMap]',
    io = '[object DataView]',
    Cu = Ce(jr),
    Su = Ce(ht),
    Ou = Ce(Er),
    xu = Ce(Be),
    Ru = Ce(ar),
    xe = we;
  ((jr && xe(new jr(new ArrayBuffer(1))) != io) ||
    (ht && xe(new ht()) != ro) ||
    (Er && xe(Er.resolve()) != no) ||
    (Be && xe(new Be()) != oo) ||
    (ar && xe(new ar()) != ao)) &&
    (xe = function (e) {
      var t = we(e),
        r = t == wu ? e.constructor : void 0,
        n = r ? Ce(r) : '';
      if (n)
        switch (n) {
          case Cu:
            return io;
          case Su:
            return ro;
          case Ou:
            return no;
          case xu:
            return oo;
          case Ru:
            return ao;
        }
      return t;
    });
  const vt = xe;
  var Nu = Object.prototype,
    Tu = Nu.hasOwnProperty;
  function Au(e) {
    var t = e.length,
      r = new e.constructor(t);
    return t && typeof e[0] == 'string' && Tu.call(e, 'index') && ((r.index = e.index), (r.input = e.input)), r;
  }
  var Mu = fe.Uint8Array;
  const Dt = Mu;
  function wr(e) {
    var t = new e.constructor(e.byteLength);
    return new Dt(t).set(new Dt(e)), t;
  }
  function $u(e, t) {
    var r = t ? wr(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  var Pu = /\w*$/;
  function Du(e) {
    var t = new e.constructor(e.source, Pu.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var so = ne ? ne.prototype : void 0,
    co = so ? so.valueOf : void 0;
  function ku(e) {
    return co ? Object(co.call(e)) : {};
  }
  function uo(e, t) {
    var r = t ? wr(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  var Iu = '[object Boolean]',
    Fu = '[object Date]',
    Lu = '[object Map]',
    Bu = '[object Number]',
    Uu = '[object RegExp]',
    zu = '[object Set]',
    Vu = '[object String]',
    Gu = '[object Symbol]',
    Wu = '[object ArrayBuffer]',
    Hu = '[object DataView]',
    Yu = '[object Float32Array]',
    Ju = '[object Float64Array]',
    Qu = '[object Int8Array]',
    qu = '[object Int16Array]',
    Xu = '[object Int32Array]',
    Ku = '[object Uint8Array]',
    Zu = '[object Uint8ClampedArray]',
    el = '[object Uint16Array]',
    tl = '[object Uint32Array]';
  function rl(e, t, r) {
    var n = e.constructor;
    switch (t) {
      case Wu:
        return wr(e);
      case Iu:
      case Fu:
        return new n(+e);
      case Hu:
        return $u(e, r);
      case Yu:
      case Ju:
      case Qu:
      case qu:
      case Xu:
      case Ku:
      case Zu:
      case el:
      case tl:
        return uo(e, r);
      case Lu:
        return new n();
      case Bu:
      case Vu:
        return new n(e);
      case Uu:
        return Du(e);
      case zu:
        return new n();
      case Gu:
        return ku(e);
    }
  }
  function lo(e) {
    return typeof e.constructor == 'function' && !ur(e) ? Wi(mr(e)) : {};
  }
  var nl = '[object Map]';
  function ol(e) {
    return de(e) && vt(e) == nl;
  }
  var fo = Ie && Ie.isMap,
    al = fo ? lr(fo) : ol;
  const il = al;
  var sl = '[object Set]';
  function cl(e) {
    return de(e) && vt(e) == sl;
  }
  var po = Ie && Ie.isSet,
    ul = po ? lr(po) : cl;
  const ll = ul;
  var fl = 1,
    dl = 2,
    pl = 4,
    ho = '[object Arguments]',
    hl = '[object Array]',
    vl = '[object Boolean]',
    yl = '[object Date]',
    ml = '[object Error]',
    vo = '[object Function]',
    gl = '[object GeneratorFunction]',
    bl = '[object Map]',
    _l = '[object Number]',
    yo = '[object Object]',
    jl = '[object RegExp]',
    El = '[object Set]',
    wl = '[object String]',
    Cl = '[object Symbol]',
    Sl = '[object WeakMap]',
    Ol = '[object ArrayBuffer]',
    xl = '[object DataView]',
    Rl = '[object Float32Array]',
    Nl = '[object Float64Array]',
    Tl = '[object Int8Array]',
    Al = '[object Int16Array]',
    Ml = '[object Int32Array]',
    $l = '[object Uint8Array]',
    Pl = '[object Uint8ClampedArray]',
    Dl = '[object Uint16Array]',
    kl = '[object Uint32Array]',
    P = {};
  (P[ho] =
    P[hl] =
    P[Ol] =
    P[xl] =
    P[vl] =
    P[yl] =
    P[Rl] =
    P[Nl] =
    P[Tl] =
    P[Al] =
    P[Ml] =
    P[bl] =
    P[_l] =
    P[yo] =
    P[jl] =
    P[El] =
    P[wl] =
    P[Cl] =
    P[$l] =
    P[Pl] =
    P[Dl] =
    P[kl] =
      !0),
    (P[ml] = P[vo] = P[Sl] = !1);
  function yt(e, t, r, n, o, a) {
    var i,
      s = t & fl,
      u = t & dl,
      l = t & pl;
    if ((r && (i = o ? r(e, n, o, a) : r(e)), i !== void 0)) return i;
    if (!se(e)) return e;
    var f = L(e);
    if (f) {
      if (((i = Au(e)), !s)) return Tn(e, i);
    } else {
      var p = vt(e),
        d = p == vo || p == gl;
      if (lt(e)) return Xn(e, s);
      if (p == yo || p == ho || (d && !o)) {
        if (((i = u || d ? {} : lo(e)), !s)) return u ? bu(e, lu(i, e)) : yu(e, uu(i, e));
      } else {
        if (!P[p]) return o ? e : {};
        i = rl(e, p, s);
      }
    }
    a || (a = new ce());
    var v = a.get(e);
    if (v) return v;
    a.set(e, i),
      ll(e)
        ? e.forEach(function (E) {
            i.add(yt(E, t, r, E, e, a));
          })
        : il(e) &&
          e.forEach(function (E, O) {
            i.set(O, yt(E, t, r, O, e, a));
          });
    var b = l ? (u ? _r : br) : u ? dt : At,
      _ = f ? void 0 : b(e);
    return (
      rs(_ || e, function (E, O) {
        _ && ((O = E), (E = e[O])), sr(i, O, yt(E, t, r, O, e, a));
      }),
      i
    );
  }
  var Il = 1,
    Fl = 4;
  function mo(e) {
    return yt(e, Il | Fl);
  }
  var Ll = '__lodash_hash_undefined__';
  function Bl(e) {
    return this.__data__.set(e, Ll), this;
  }
  function Ul(e) {
    return this.__data__.has(e);
  }
  function mt(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.__data__ = new ye(); ++t < r; ) this.add(e[t]);
  }
  (mt.prototype.add = mt.prototype.push = Bl), (mt.prototype.has = Ul);
  function zl(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
    return !1;
  }
  function go(e, t) {
    return e.has(t);
  }
  var Vl = 1,
    Gl = 2;
  function bo(e, t, r, n, o, a) {
    var i = r & Vl,
      s = e.length,
      u = t.length;
    if (s != u && !(i && u > s)) return !1;
    var l = a.get(e),
      f = a.get(t);
    if (l && f) return l == t && f == e;
    var p = -1,
      d = !0,
      v = r & Gl ? new mt() : void 0;
    for (a.set(e, t), a.set(t, e); ++p < s; ) {
      var b = e[p],
        _ = t[p];
      if (n) var E = i ? n(_, b, p, t, e, a) : n(b, _, p, e, t, a);
      if (E !== void 0) {
        if (E) continue;
        d = !1;
        break;
      }
      if (v) {
        if (
          !zl(t, function (O, C) {
            if (!go(v, C) && (b === O || o(b, O, r, n, a))) return v.push(C);
          })
        ) {
          d = !1;
          break;
        }
      } else if (!(b === _ || o(b, _, r, n, a))) {
        d = !1;
        break;
      }
    }
    return a.delete(e), a.delete(t), d;
  }
  function Wl(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n, o) {
        r[++t] = [o, n];
      }),
      r
    );
  }
  function Cr(e) {
    var t = -1,
      r = Array(e.size);
    return (
      e.forEach(function (n) {
        r[++t] = n;
      }),
      r
    );
  }
  var Hl = 1,
    Yl = 2,
    Jl = '[object Boolean]',
    Ql = '[object Date]',
    ql = '[object Error]',
    Xl = '[object Map]',
    Kl = '[object Number]',
    Zl = '[object RegExp]',
    ef = '[object Set]',
    tf = '[object String]',
    rf = '[object Symbol]',
    nf = '[object ArrayBuffer]',
    of = '[object DataView]',
    _o = ne ? ne.prototype : void 0,
    Sr = _o ? _o.valueOf : void 0;
  function af(e, t, r, n, o, a, i) {
    switch (r) {
      case of:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        (e = e.buffer), (t = t.buffer);
      case nf:
        return !(e.byteLength != t.byteLength || !a(new Dt(e), new Dt(t)));
      case Jl:
      case Ql:
      case Kl:
        return ct(+e, +t);
      case ql:
        return e.name == t.name && e.message == t.message;
      case Zl:
      case tf:
        return e == t + '';
      case Xl:
        var s = Wl;
      case ef:
        var u = n & Hl;
        if ((s || (s = Cr), e.size != t.size && !u)) return !1;
        var l = i.get(e);
        if (l) return l == t;
        (n |= Yl), i.set(e, t);
        var f = bo(s(e), s(t), n, o, a, i);
        return i.delete(e), f;
      case rf:
        if (Sr) return Sr.call(e) == Sr.call(t);
    }
    return !1;
  }
  var sf = 1,
    cf = Object.prototype,
    uf = cf.hasOwnProperty;
  function lf(e, t, r, n, o, a) {
    var i = r & sf,
      s = br(e),
      u = s.length,
      l = br(t),
      f = l.length;
    if (u != f && !i) return !1;
    for (var p = u; p--; ) {
      var d = s[p];
      if (!(i ? d in t : uf.call(t, d))) return !1;
    }
    var v = a.get(e),
      b = a.get(t);
    if (v && b) return v == t && b == e;
    var _ = !0;
    a.set(e, t), a.set(t, e);
    for (var E = i; ++p < u; ) {
      d = s[p];
      var O = e[d],
        C = t[d];
      if (n) var W = i ? n(C, O, d, t, e, a) : n(O, C, d, e, t, a);
      if (!(W === void 0 ? O === C || o(O, C, r, n, a) : W)) {
        _ = !1;
        break;
      }
      E || (E = d == 'constructor');
    }
    if (_ && !E) {
      var D = e.constructor,
        B = t.constructor;
      D != B &&
        'constructor' in e &&
        'constructor' in t &&
        !(typeof D == 'function' && D instanceof D && typeof B == 'function' && B instanceof B) &&
        (_ = !1);
    }
    return a.delete(e), a.delete(t), _;
  }
  var ff = 1,
    jo = '[object Arguments]',
    Eo = '[object Array]',
    kt = '[object Object]',
    df = Object.prototype,
    wo = df.hasOwnProperty;
  function pf(e, t, r, n, o, a) {
    var i = L(e),
      s = L(t),
      u = i ? Eo : vt(e),
      l = s ? Eo : vt(t);
    (u = u == jo ? kt : u), (l = l == jo ? kt : l);
    var f = u == kt,
      p = l == kt,
      d = u == l;
    if (d && lt(e)) {
      if (!lt(t)) return !1;
      (i = !0), (f = !1);
    }
    if (d && !f) return a || (a = new ce()), i || dr(e) ? bo(e, t, r, n, o, a) : af(e, t, u, r, n, o, a);
    if (!(r & ff)) {
      var v = f && wo.call(e, '__wrapped__'),
        b = p && wo.call(t, '__wrapped__');
      if (v || b) {
        var _ = v ? e.value() : e,
          E = b ? t.value() : t;
        return a || (a = new ce()), o(_, E, r, n, a);
      }
    }
    return d ? (a || (a = new ce()), lf(e, t, r, n, o, a)) : !1;
  }
  function Or(e, t, r, n, o) {
    return e === t ? !0 : e == null || t == null || (!de(e) && !de(t)) ? e !== e && t !== t : pf(e, t, r, n, Or, o);
  }
  var hf = 1,
    vf = 2;
  function yf(e, t, r, n) {
    var o = r.length,
      a = o,
      i = !n;
    if (e == null) return !a;
    for (e = Object(e); o--; ) {
      var s = r[o];
      if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++o < a; ) {
      s = r[o];
      var u = s[0],
        l = e[u],
        f = s[1];
      if (i && s[2]) {
        if (l === void 0 && !(u in e)) return !1;
      } else {
        var p = new ce();
        if (n) var d = n(l, f, u, e, t, p);
        if (!(d === void 0 ? Or(f, l, hf | vf, n, p) : d)) return !1;
      }
    }
    return !0;
  }
  function Co(e) {
    return e === e && !se(e);
  }
  function mf(e) {
    for (var t = At(e), r = t.length; r--; ) {
      var n = t[r],
        o = e[n];
      t[r] = [n, o, Co(o)];
    }
    return t;
  }
  function So(e, t) {
    return function (r) {
      return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
    };
  }
  function gf(e) {
    var t = mf(e);
    return t.length == 1 && t[0][2]
      ? So(t[0][0], t[0][1])
      : function (r) {
          return r === e || yf(r, e, t);
        };
  }
  function bf(e, t) {
    return e != null && t in Object(e);
  }
  function _f(e, t, r) {
    t = Fe(t, e);
    for (var n = -1, o = t.length, a = !1; ++n < o; ) {
      var i = Le(t[n]);
      if (!(a = e != null && r(e, i))) break;
      e = e[i];
    }
    return a || ++n != o ? a : ((o = e == null ? 0 : e.length), !!o && cr(o) && Nt(i, o) && (L(e) || ut(e)));
  }
  function jf(e, t) {
    return e != null && _f(e, t, bf);
  }
  var Ef = 1,
    wf = 2;
  function Cf(e, t) {
    return pr(e) && Co(t)
      ? So(Le(e), t)
      : function (r) {
          var n = Gn(r, e);
          return n === void 0 && n === t ? jf(r, e) : Or(t, n, Ef | wf);
        };
  }
  function Sf(e) {
    return function (t) {
      return t == null ? void 0 : t[e];
    };
  }
  function Of(e) {
    return function (t) {
      return Pt(t, e);
    };
  }
  function xf(e) {
    return pr(e) ? Sf(Le(e)) : Of(e);
  }
  function xr(e) {
    return typeof e == 'function' ? e : e == null ? rr : typeof e == 'object' ? (L(e) ? Cf(e[0], e[1]) : gf(e)) : xf(e);
  }
  function Rf(e) {
    return function (t, r, n) {
      for (var o = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
        var u = i[e ? s : ++o];
        if (r(a[u], u, a) === !1) break;
      }
      return t;
    };
  }
  var Nf = Rf();
  const Tf = Nf;
  function Rr(e, t, r) {
    ((r !== void 0 && !ct(e[t], r)) || (r === void 0 && !(t in e))) && ir(e, t, r);
  }
  function Nr(e) {
    return de(e) && Tt(e);
  }
  function Tr(e, t) {
    if (!(t === 'constructor' && typeof e[t] == 'function') && t != '__proto__') return e[t];
  }
  function Af(e) {
    return ke(e, dt(e));
  }
  function Mf(e, t, r, n, o, a, i) {
    var s = Tr(e, r),
      u = Tr(t, r),
      l = i.get(u);
    if (l) {
      Rr(e, r, l);
      return;
    }
    var f = a ? a(s, u, r + '', e, t, i) : void 0,
      p = f === void 0;
    if (p) {
      var d = L(u),
        v = !d && lt(u),
        b = !d && !v && dr(u);
      (f = u),
        d || v || b
          ? L(s)
            ? (f = s)
            : Nr(s)
            ? (f = Tn(s))
            : v
            ? ((p = !1), (f = Xn(u, !0)))
            : b
            ? ((p = !1), (f = uo(u, !0)))
            : (f = [])
          : Q(u) || ut(u)
          ? ((f = s), ut(s) ? (f = Af(s)) : (!se(s) || nr(s)) && (f = lo(u)))
          : (p = !1);
    }
    p && (i.set(u, f), o(f, u, n, a, i), i.delete(u)), Rr(e, r, f);
  }
  function Oo(e, t, r, n, o) {
    e !== t &&
      Tf(
        t,
        function (a, i) {
          if ((o || (o = new ce()), se(a))) Mf(e, t, i, r, Oo, n, o);
          else {
            var s = n ? n(Tr(e, i), a, i + '', e, t, o) : void 0;
            s === void 0 && (s = a), Rr(e, i, s);
          }
        },
        dt
      );
  }
  function $f(e, t, r) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o; ) if (r(t, e[n])) return !0;
    return !1;
  }
  function xo(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0;
  }
  function Pf(e, t) {
    return t.length < 2 ? e : Pt(e, ru(t, 0, -1));
  }
  var Df = hs(function (e, t, r) {
    Oo(e, t, r);
  });
  const Ro = Df;
  var kf = 'Expected a function';
  function If(e) {
    if (typeof e != 'function') throw new TypeError(kf);
    return function () {
      var t = arguments;
      switch (t.length) {
        case 0:
          return !e.call(this);
        case 1:
          return !e.call(this, t[0]);
        case 2:
          return !e.call(this, t[0], t[1]);
        case 3:
          return !e.call(this, t[0], t[1], t[2]);
      }
      return !e.apply(this, t);
    };
  }
  function Ff(e, t) {
    return (t = Fe(t, e)), (e = Pf(e, t)), e == null || delete e[Le(xo(t))];
  }
  function Lf(e) {
    return Q(e) ? void 0 : e;
  }
  var Bf = 1,
    Uf = 2,
    zf = 4,
    Vf = Qc(function (e, t) {
      var r = {};
      if (e == null) return r;
      var n = !1;
      (t = tr(t, function (a) {
        return (a = Fe(a, e)), n || (n = a.length > 1), a;
      })),
        ke(e, _r(e), r),
        n && (r = yt(r, Bf | Uf | zf, Lf));
      for (var o = t.length; o--; ) Ff(r, t[o]);
      return r;
    });
  const No = Vf;
  function Gf(e, t, r, n) {
    if (!se(e)) return e;
    t = Fe(t, e);
    for (var o = -1, a = t.length, i = a - 1, s = e; s != null && ++o < a; ) {
      var u = Le(t[o]),
        l = r;
      if (u === '__proto__' || u === 'constructor' || u === 'prototype') return e;
      if (o != i) {
        var f = s[u];
        (l = n ? n(f, u, s) : void 0), l === void 0 && (l = se(f) ? f : Nt(t[o + 1]) ? [] : {});
      }
      sr(s, u, l), (s = s[u]);
    }
    return e;
  }
  function Wf(e, t, r) {
    for (var n = -1, o = t.length, a = {}; ++n < o; ) {
      var i = t[n],
        s = Pt(e, i);
      r(s, i) && Gf(a, Fe(i, e), s);
    }
    return a;
  }
  function Hf(e, t) {
    if (e == null) return {};
    var r = tr(_r(e), function (n) {
      return [n];
    });
    return (
      (t = xr(t)),
      Wf(e, r, function (n, o) {
        return t(n, o[0]);
      })
    );
  }
  function Yf(e, t) {
    return Hf(e, If(xr(t)));
  }
  var Jf = 1 / 0,
    Qf =
      Be && 1 / Cr(new Be([, -0]))[1] == Jf
        ? function (e) {
            return new Be(e);
          }
        : Yi;
  const qf = Qf;
  var Xf = 200;
  function Kf(e, t, r) {
    var n = -1,
      o = ss,
      a = e.length,
      i = !0,
      s = [],
      u = s;
    if (r) (i = !1), (o = $f);
    else if (a >= Xf) {
      var l = t ? null : qf(e);
      if (l) return Cr(l);
      (i = !1), (o = go), (u = new mt());
    } else u = t ? [] : s;
    e: for (; ++n < a; ) {
      var f = e[n],
        p = t ? t(f) : f;
      if (((f = r || f !== 0 ? f : 0), i && p === p)) {
        for (var d = u.length; d--; ) if (u[d] === p) continue e;
        t && u.push(p), s.push(f);
      } else o(u, p, r) || (u !== s && u.push(p), s.push(f));
    }
    return s;
  }
  var Zf = Pn(function (e) {
    var t = xo(e);
    return Nr(t) && (t = void 0), Kf(yr(e, 1, Nr, !0), xr(t));
  });
  const ed = Zf;
  class To extends TypeError {
    constructor(t, r) {
      let n;
      const { message: o, ...a } = t,
        { path: i } = t,
        s = i.length === 0 ? o : `At path: ${i.join('.')} -- ${o}`;
      super(s),
        (this.value = void 0),
        (this.key = void 0),
        (this.type = void 0),
        (this.refinement = void 0),
        (this.path = void 0),
        (this.branch = void 0),
        (this.failures = void 0),
        Object.assign(this, a),
        (this.name = this.constructor.name),
        (this.failures = () => n ?? (n = [t, ...r()]));
    }
  }
  function td(e) {
    return ue(e) && typeof e[Symbol.iterator] == 'function';
  }
  function ue(e) {
    return typeof e == 'object' && e != null;
  }
  function K(e) {
    return typeof e == 'symbol' ? e.toString() : typeof e == 'string' ? JSON.stringify(e) : `${e}`;
  }
  function rd(e) {
    const { done: t, value: r } = e.next();
    return t ? void 0 : r;
  }
  function nd(e, t, r, n) {
    if (e === !0) return;
    e === !1 ? (e = {}) : typeof e == 'string' && (e = { message: e });
    const { path: o, branch: a } = t,
      { type: i } = r,
      {
        refinement: s,
        message: u = `Expected a value of type \`${i}\`${s ? ` with refinement \`${s}\`` : ''}, but received: \`${K(
          n
        )}\``,
      } = e;
    return {
      value: n,
      type: i,
      refinement: s,
      key: o[o.length - 1],
      path: o,
      branch: a,
      ...e,
      message: u,
    };
  }
  function* Ao(e, t, r, n) {
    td(e) || (e = [e]);
    for (const o of e) {
      const a = nd(o, t, r, n);
      a && (yield a);
    }
  }
  function* Ar(e, t, r) {
    r === void 0 && (r = {});
    const { path: n = [], branch: o = [e], coerce: a = !1, mask: i = !1 } = r,
      s = { path: n, branch: o };
    if (a && ((e = t.coercer(e, s)), i && t.type !== 'type' && ue(t.schema) && ue(e) && !Array.isArray(e)))
      for (const l in e) t.schema[l] === void 0 && delete e[l];
    let u = 'valid';
    for (const l of t.validator(e, s)) (u = 'not_valid'), yield [l, void 0];
    for (let [l, f, p] of t.entries(e, s)) {
      const d = Ar(f, p, {
        path: l === void 0 ? n : [...n, l],
        branch: l === void 0 ? o : [...o, f],
        coerce: a,
        mask: i,
      });
      for (const v of d)
        v[0]
          ? ((u = v[0].refinement != null ? 'not_refined' : 'not_valid'), yield [v[0], void 0])
          : a &&
            ((f = v[1]),
            l === void 0
              ? (e = f)
              : e instanceof Map
              ? e.set(l, f)
              : e instanceof Set
              ? e.add(f)
              : ue(e) && (f !== void 0 || l in e) && (e[l] = f));
    }
    if (u !== 'not_valid') for (const l of t.refiner(e, s)) (u = 'not_refined'), yield [l, void 0];
    u === 'valid' && (yield [void 0, e]);
  }
  class pe {
    constructor(t) {
      (this.TYPE = void 0),
        (this.type = void 0),
        (this.schema = void 0),
        (this.coercer = void 0),
        (this.validator = void 0),
        (this.refiner = void 0),
        (this.entries = void 0);
      const { type: r, schema: n, validator: o, refiner: a, coercer: i = (u) => u, entries: s = function* () {} } = t;
      (this.type = r),
        (this.schema = n),
        (this.entries = s),
        (this.coercer = i),
        o
          ? (this.validator = (u, l) => {
              const f = o(u, l);
              return Ao(f, l, this, u);
            })
          : (this.validator = () => []),
        a
          ? (this.refiner = (u, l) => {
              const f = a(u, l);
              return Ao(f, l, this, u);
            })
          : (this.refiner = () => []);
    }
    assert(t) {
      return Mo(t, this);
    }
    create(t) {
      return od(t, this);
    }
    is(t) {
      return id(t, this);
    }
    mask(t) {
      return ad(t, this);
    }
    validate(t, r) {
      return r === void 0 && (r = {}), Ue(t, this, r);
    }
  }
  function Mo(e, t) {
    const r = Ue(e, t);
    if (r[0]) throw r[0];
  }
  function od(e, t) {
    const r = Ue(e, t, { coerce: !0 });
    if (r[0]) throw r[0];
    return r[1];
  }
  function ad(e, t) {
    const r = Ue(e, t, { coerce: !0, mask: !0 });
    if (r[0]) throw r[0];
    return r[1];
  }
  function id(e, t) {
    return !Ue(e, t)[0];
  }
  function Ue(e, t, r) {
    r === void 0 && (r = {});
    const n = Ar(e, t, r),
      o = rd(n);
    return o[0]
      ? [
          new To(o[0], function* () {
            for (const a of n) a[0] && (yield a[0]);
          }),
          void 0,
        ]
      : [void 0, o[1]];
  }
  function Mr() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    const n = t[0].type === 'type',
      o = t.map((i) => i.schema),
      a = Object.assign({}, ...o);
    return n ? ko(a) : M(a);
  }
  function je(e, t) {
    return new pe({ type: e, schema: null, validator: t });
  }
  function ze(e) {
    return new pe({
      type: 'dynamic',
      schema: null,
      *entries(t, r) {
        yield* e(t, r).entries(t, r);
      },
      validator(t, r) {
        return e(t, r).validator(t, r);
      },
      coercer(t, r) {
        return e(t, r).coercer(t, r);
      },
      refiner(t, r) {
        return e(t, r).refiner(t, r);
      },
    });
  }
  function $o(e, t) {
    const { schema: r } = e,
      n = { ...r };
    for (const o of t) delete n[o];
    switch (e.type) {
      case 'type':
        return ko(n);
      default:
        return M(n);
    }
  }
  function z() {
    return je('any', () => !0);
  }
  function V(e) {
    return new pe({
      type: 'array',
      schema: e,
      *entries(t) {
        if (e && Array.isArray(t)) for (const [r, n] of t.entries()) yield [r, n, e];
      },
      coercer(t) {
        return Array.isArray(t) ? t.slice() : t;
      },
      validator(t) {
        return Array.isArray(t) || `Expected an array value, but received: ${K(t)}`;
      },
    });
  }
  function Re() {
    return je('boolean', (e) => typeof e == 'boolean');
  }
  function $r(e) {
    const t = {},
      r = e.map((n) => K(n)).join();
    for (const n of e) t[n] = n;
    return new pe({
      type: 'enums',
      schema: t,
      validator(n) {
        return e.includes(n) || `Expected one of \`${r}\`, but received: ${K(n)}`;
      },
    });
  }
  function Po() {
    return je('func', (e) => typeof e == 'function' || `Expected a function, but received: ${K(e)}`);
  }
  function q(e) {
    const t = K(e),
      r = typeof e;
    return new pe({
      type: 'literal',
      schema: r === 'string' || r === 'number' || r === 'boolean' ? e : null,
      validator(n) {
        return n === e || `Expected the literal \`${t}\`, but received: ${K(n)}`;
      },
    });
  }
  function sd() {
    return je('never', () => !1);
  }
  function Do() {
    return je('number', (e) => (typeof e == 'number' && !isNaN(e)) || `Expected a number, but received: ${K(e)}`);
  }
  function M(e) {
    const t = e ? Object.keys(e) : [],
      r = sd();
    return new pe({
      type: 'object',
      schema: e || null,
      *entries(n) {
        if (e && ue(n)) {
          const o = new Set(Object.keys(n));
          for (const a of t) o.delete(a), yield [a, n[a], e[a]];
          for (const a of o) yield [a, n[a], r];
        }
      },
      validator(n) {
        return ue(n) || `Expected an object, but received: ${K(n)}`;
      },
      coercer(n) {
        return ue(n) ? { ...n } : n;
      },
    });
  }
  function g(e) {
    return new pe({
      ...e,
      validator: (t, r) => t === void 0 || e.validator(t, r),
      refiner: (t, r) => t === void 0 || e.refiner(t, r),
    });
  }
  function gt(e, t) {
    return new pe({
      type: 'record',
      schema: null,
      *entries(r) {
        if (ue(r))
          for (const n in r) {
            const o = r[n];
            yield [n, n, e], yield [n, o, t];
          }
      },
      validator(r) {
        return ue(r) || `Expected an object, but received: ${K(r)}`;
      },
    });
  }
  function m() {
    return je('string', (e) => typeof e == 'string' || `Expected a string, but received: ${K(e)}`);
  }
  function ko(e) {
    const t = Object.keys(e);
    return new pe({
      type: 'type',
      schema: e,
      *entries(r) {
        if (ue(r)) for (const n of t) yield [n, r[n], e[n]];
      },
      validator(r) {
        return ue(r) || `Expected an object, but received: ${K(r)}`;
      },
    });
  }
  function X(e) {
    const t = e.map((r) => r.type).join(' | ');
    return new pe({
      type: 'union',
      schema: null,
      coercer(r, n) {
        return (
          e.find((o) => {
            const [a] = o.validate(r, { coerce: !0 });
            return !a;
          }) || cd()
        ).coercer(r, n);
      },
      validator(r, n) {
        const o = [];
        for (const a of e) {
          const [...i] = Ar(r, a, n),
            [s] = i;
          if (s[0]) for (const [u] of i) u && o.push(u);
          else return [];
        }
        return [`Expected the value to satisfy a union of \`${t}\`, but received: ${K(r)}`, ...o];
      },
    });
  }
  function cd() {
    return je('unknown', () => !0);
  }
  const Pr = M({
      package: m(),
      version: m(),
      exportName: m(),
      destructuring: g(Re()),
      subName: g(m()),
      main: g(m()),
    }),
    ud = V(Pr),
    ld = ['CBlock', 'CContainer', 'CImage', 'CCanvas', 'CVideo', 'CAudio', 'CText', 'CNativeTag'];
  var oe = ((e) => ((e.SLOT = 'SLOT'), (e.FUNCTION = 'FUNCTION'), (e.EXPRESSION = 'EXPRESSION'), e))(oe || {}),
    Dr = ((e) => ((e.DESIGN = 'design'), (e.SAVE = 'save'), e))(Dr || {}),
    kr = ((e) => ((e.FUNC = 'FUNC'), (e.COMP = 'COMP'), e))(kr || {});
  const fd = () =>
      je('normalObj', (e) =>
        !Q(e) || [oe.SLOT, oe.EXPRESSION, oe.FUNCTION].includes(e == null ? void 0 : e.type)
          ? !1
          : (Ue(e, gt(m(), Ir)), !0)
      ),
    Ir = X([
      m(),
      Do(),
      Re(),
      M({
        type: q(oe.SLOT),
        renderType: $r([kr.FUNC, kr.COMP]),
        params: g(V(m())),
        value: ze(() => X([Ve, V(Ve)])),
      }),
      M({ type: q(oe.EXPRESSION), value: m() }),
      M({ type: q(oe.FUNCTION), value: m() }),
      fd(),
      V(ze(() => Ir)),
    ]),
    Io = M({ type: q(oe.EXPRESSION), value: m() }),
    Ve = M({
      id: g(m()),
      title: g(m()),
      componentName: m(),
      props: g(gt(m(), Ir)),
      stateName: g(m()),
      state: g(gt(m(), z())),
      children: ze(() => g(V(X([m(), Ve])))),
      configure: g(z()),
      css: g(z()),
      style: g(z()),
      classNames: g(V(z())),
      refId: g(m()),
      extra: g(gt(z(), z())),
      condition: g(X([Re(), Io])),
      tempDevConfig: g(z()),
      loop: g(
        M({
          open: Re(),
          data: X([V(z()), Io]),
          args: g(V(m())),
          forName: g(m()),
          forIndex: g(m()),
          key: g(z()),
          name: g(m()),
        })
      ),
    }),
    It = X([m(), M({ label: m(), tip: g(m()) })]),
    dd = M({
      type: q('shape'),
      value: V(M({ name: m(), title: It, valueType: ze(() => Ft) })),
    }),
    pd = M({ type: q('enums'), value: V(m()) });
  M({ type: q('array'), value: ze(() => Ft) });
  const hd = M({ type: q('array'), value: ze(() => V(Ft)) }),
    Ft = X([
      $r(['array', 'boolean', 'number', 'object', 'string']),
      $r(['component', 'expression', 'function']),
      dd,
      pd,
      hd,
    ]),
    vd = X([
      m(),
      M({
        componentName: m(),
        props: g(z()),
        initialValue: g(z()),
        component: g(z()),
      }),
    ]),
    Fr = M({
      name: m(),
      title: It,
      valueType: Ft,
      description: g(m()),
      defaultValue: z(),
      setters: g(V(vd)),
      condition: g(Po()),
    });
  X([m(), Po()]);
  var Lr = ((e) => ((e.SINGLE = 'single'), (e.GROUP = 'group'), e))(Lr || {});
  X([
    m(),
    M({
      name: m(),
      describe: g(m()),
      params: g(M({ name: m(), description: m() })),
      template: m(),
    }),
  ]);
  const yd = M({
      id: g(m()),
      title: m(),
      snapshot: X([m(), z()]),
      snapshotText: g(m()),
      description: g(m()),
      tags: g(V(m())),
      groupName: g(m()),
      category: g(m()),
      schema: Mr($o(Ve, ['id']), M({ componentName: g(m()) })),
    }),
    md = M({
      componentName: m(),
      title: m(),
      screenshot: g(m()),
      icon: g(m()),
      tags: g(V(m())),
      groupName: g(m()),
      category: g(m()),
      priority: g(Do()),
      npm: g(Pr),
      snippets: V(yd),
      props: V(
        X([
          Fr,
          M({ title: g(It), type: q('single'), content: Fr }),
          M({ title: g(It), type: q('group'), content: V(Fr) }),
        ])
      ),
      fixedProps: g(z()),
      isContainer: g(X([Re(), M({ placeholder: m(), width: m(), height: m() })])),
      isSupportDispatchNativeEvent: g(Re()),
      isLayout: g(Re()),
      rootSelector: g(m()),
      advanceCustom: g(z()),
      extra: g(gt(z(), z())),
    }),
    gd =
      (e) =>
      ({ data: t, message: r, throwError: n }) => {
        const o = e({ data: t, message: r, throwError: n });
        if (o.isValidate) return o;
        if (n)
          throw o.message || r
            ? new Error(`${o.message || r}
 originData: ${JSON.stringify(t)}`)
            : new Error(`${JSON.stringify(t)} 
 data struct format is invalidate`);
        return (
          o.message || r
            ? console.warn(`${o.message || r}
 originData: ${JSON.stringify(t)}`)
            : console.warn(`${JSON.stringify(t)} 
 data struct format is invalidate`),
          o
        );
      },
    Br = (e) => {
      const { data: t, message: r, throwError: n, dataStruct: o } = e;
      return gd(({ data: a }) => {
        try {
          return Mo(a, o), { isValidate: !0 };
        } catch (i) {
          let s = i;
          return (
            i instanceof To &&
              (s = i.failures().map(
                (u) => `【${u.path.join('.')}】: ${u.message}
`
              )),
            {
              isValidate: !1,
              message: s,
              error: i,
            }
          );
        }
      })({ data: t, message: r, throwError: n });
    };
  var Ge = ((e) => ((e.ROOT_CONTAINER = 'RootContainer'), e))(Ge || {});
  const bd = M({ type: q(oe.FUNCTION), value: m() }),
    _d = Mr($o(Ve, ['componentName']), M({ componentName: q('RootContainer') }));
  function jd(e) {
    return {
      all: (e = e || new Map()),
      on: function (t, r) {
        var n = e.get(t);
        n ? n.push(r) : e.set(t, [r]);
      },
      off: function (t, r) {
        var n = e.get(t);
        n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
      },
      emit: function (t, r) {
        var n = e.get(t);
        n &&
          n.slice().map(function (o) {
            o(r);
          }),
          (n = e.get('*')) &&
            n.slice().map(function (o) {
              o(t, r);
            });
      },
    };
  }
  const bt = jd(),
    Ed = (e, t) => {
      const r = { ...e, value: [] },
        n = e.value;
      let o = new Te([]);
      return (
        t && (o = t.materialsMode || new Te([])),
        n &&
          (L(n)
            ? (r.value = n.map((a) => new F(a, { parent: t, materials: o })))
            : Q(n) && r.value.push(new F(n, { parent: t, materials: o }))),
        r
      );
    };
  class We {
    constructor(t, r) {
      S(this, 'nodeType', 'SLOT'),
        S(this, 'rawData'),
        S(this, 'parent'),
        S(this, 'emitter', bt),
        S(this, 'data'),
        S(this, 'id'),
        S(this, 'materialsMode'),
        (this.parent = (r == null ? void 0 : r.parent) || null),
        (this.rawData = t);
      const n = (r == null ? void 0 : r.materials) || new Te([]);
      (this.materialsMode = n), (this.id = he()), (this.data = Ed(t, this));
    }
    get value() {
      return this.data;
    }
    export(t) {
      const r = this.data,
        n = (o) => {
          if (o instanceof F) return o.export(t);
          if (Q(o)) {
            const a = {};
            return (
              Object.keys(o || {}).forEach((i) => {
                a[i] = n(o[i]);
              }),
              a
            );
          }
          return L(o) ? o.map((a) => n(a)) : (t === 'design' && delete o.id, o);
        };
      return n(r);
    }
  }
  const Fo = (e) => {
      let t = [];
      return (
        e.forEach((r) => {
          const n = r;
          n.type
            ? n.type === Lr.SINGLE
              ? t.push(n.content)
              : n.type === Lr.GROUP && (t = [...t, ...Fo(n.content)])
            : t.push(r);
        }),
        t
      );
    },
    Ur = (e, t, r) => {
      if (e.type) return e.type === oe.SLOT ? new We(e, { parent: t, materials: r }) : e;
      if (Q(e)) {
        const n = {};
        return (
          Object.keys(e).forEach((o) => {
            n[o] = zr(e[o], t, r);
          }),
          n
        );
      } else return Array.isArray(e) ? e.map((n) => Ur(n, t, r)) : e;
    },
    zr = (e, t, r) => (Q(e) ? Ur(e, t, r) : L(e) ? e.map((n) => Ur(n, t, r)) : e);
  class Ee {
    constructor(t, r, n) {
      S(this, 'nodeType', 'PROP'),
        S(this, 'rawData'),
        S(this, 'parent'),
        S(this, 'emitter', bt),
        S(this, 'data'),
        S(this, 'name'),
        S(this, 'materialsMode');
      const o = (n == null ? void 0 : n.materials) || new Te([]);
      (this.materialsMode = o),
        (this.parent = n == null ? void 0 : n.parent),
        (this.rawData = r),
        (this.name = t),
        (this.data = zr(r, this, o));
    }
    isIncludeSlot() {
      return !1;
    }
    isIncludeExpression() {
      return !1;
    }
    get value() {
      return this.data;
    }
    updateValue(t) {
      const r = this.data;
      (this.data = zr(t ?? r, this, this.materialsMode)),
        this.emitter.emit('onPropChange', { value: this.data, preValue: r, node: this }),
        this.parent &&
          !(this.parent instanceof We) &&
          this.emitter.emit('onNodeChange', {
            value: this.parent.value,
            preValue: this.parent.value,
            node: this.parent,
          });
    }
    get material() {
      const t = this.parent;
      if (t instanceof F) {
        const r = t.material;
        return Fo((r == null ? void 0 : r.value.props) || []).find((n) => n.name === this.name);
      } else return null;
    }
    export(t) {
      const r = this.data,
        n = (o) => {
          if (o instanceof Ee || o instanceof We || o instanceof F) return o.export(t);
          if (L(o)) return o.map((a) => n(a));
          if (Q(o)) {
            const a = {};
            return (
              Object.keys(o || {}).forEach((i) => {
                a[i] = n(o[i]);
              }),
              a
            );
          }
          return o;
        };
      return n(r);
    }
  }
  const wd = (e) => {
      if (typeof e == 'string') return !0;
      Br({ data: e, dataStruct: Ve, throwError: !1 });
    },
    Lo = (e, t, r = new Te([])) => {
      if (typeof e == 'string') return e;
      const n = {
          ...e,
          id: e.id ?? he(),
          children: [],
          props: {},
          configure: Ro(e.configure || {}, { propsSetter: {}, advanceSetter: {} }),
        },
        o = Object.keys(e.props || {});
      return (
        o.length &&
          o.forEach((a) => {
            var i;
            const s = (i = e.props) == null ? void 0 : i[a];
            if (s instanceof Ee) {
              n.props[a] = s;
              return;
            }
            n.props[a] = new Ee(a, s || '', { parent: t, materials: r });
          }),
        e.children &&
          (Array.isArray(e.children)
            ? (n.children = e.children.map((a) => {
                if (a instanceof F) return a;
                if (Q(a)) {
                  const i = a;
                  return new F(i, { parent: t, materials: r });
                } else return a;
              }))
            : (e.children instanceof F && (n.children = [e.children]),
              (n.children = [new F(e.children, { parent: t, materials: r })]))),
        n
      );
    };
  class F {
    constructor(t, r) {
      S(this, 'nodeType', 'NODE'),
        S(this, 'rawData'),
        S(this, 'data'),
        S(this, 'emitter', bt),
        S(this, 'parent'),
        S(this, 'materialsModel'),
        S(this, 'listenerHandle'),
        S(this, 'onChangeCbQueue'),
        (this.rawData = JSON.parse(JSON.stringify(t))),
        wd(t);
      const n = (r == null ? void 0 : r.materials) || new Te([]);
      (this.parent = (r == null ? void 0 : r.parent) || null),
        (this.materialsModel = n),
        (this.data = Lo(t, this, n)),
        (this.listenerHandle = []),
        (this.onChangeCbQueue = []),
        this.registerListener();
    }
    registerListener() {
      const t = (r) => {
        const { node: n } = r;
        n === this && n.id === this.id && this.onChangeCbQueue.forEach((o) => o(r));
      };
      this.emitter.on('onNodeChange', t),
        this.listenerHandle.push(() => {
          this.emitter.off('onNodeChange', t);
        });
    }
    onChange(t) {
      return (
        this.onChangeCbQueue.push(t),
        () => {
          this.onChangeCbQueue = this.onChangeCbQueue.filter((r) => r !== t);
        }
      );
    }
    destroy() {
      this.listenerHandle.forEach((t) => t());
    }
    get id() {
      return this.data.id;
    }
    get value() {
      return this.data;
    }
    clone(t) {
      const r = { ...this.export('design'), id: t || he() };
      return new F(r, { materials: this.materialsModel });
    }
    updateValue(t) {
      const r = this.data,
        n = { ...this.data, ...t };
      (this.data = Lo(n, this)), this.emitter.emit('onNodeChange', { value: n, preValue: r, node: this });
    }
    contains(t) {
      return Wr(this, t);
    }
    get props() {
      return this.data.props;
    }
    get material() {
      const t = this.materialsModel;
      return t == null ? void 0 : t.findByComponentName(this.data.componentName);
    }
    getPlainProps() {
      const t = this.data,
        r = {};
      return (
        Object.keys(t.props || {}).forEach((n) => {
          r[n] = t.props[n].export('design');
        }),
        r
      );
    }
    getNodeConfig(t) {
      var r;
      return this.data.configure[t] !== void 0
        ? this.data.configure.isContainer
        : (r = this.material) == null
        ? void 0
        : r.value.isContainer;
    }
    isContainer() {
      return this.getNodeConfig('isContainer');
    }
    export(t) {
      var r;
      const n = this.data;
      if (typeof n == 'string') return n;
      const o = {};
      Object.keys(n.props || {}).forEach((f) => {
        o[f] = n.props[f].export(t);
      });
      const a = (r = n.children) == null ? void 0 : r.map((f) => (f instanceof F ? f.export(t) : f)),
        i = n.configure || {},
        s = i.propsSetter || {},
        u = {};
      Object.keys(s).forEach((f) => {
        const p = Gn(s, f, !1);
        p && (u[f] = p);
      }),
        (i.propsSetter = u),
        this.material && this.materialsModel.usedMaterials.push(this.material);
      let l = { ...n, configure: i, props: o, children: a };
      return t === 'design' && delete l.id, (l = Gr(l)), l;
    }
  }
  const Bo = (e, t, r) => {
    const n = {
      ...e,
      id: he(),
      props: {},
      componentName: Ge.ROOT_CONTAINER,
      children: [],
      configure: Ro(e.configure || {}, { propsSetter: {}, advanceSetter: {} }),
    };
    let o = [];
    L(e.children)
      ? (o = e.children.map((i) => (i instanceof F ? i : Q(i) ? new F(i, { parent: t, materials: r }) : i)))
      : e.children instanceof F
      ? o.push(e.children)
      : e.children && Q(e.children) && o.push(new F(e.children, { parent: t, materials: r }));
    const a = Object.keys(e.props || {});
    return (
      a.length &&
        a.forEach((i) => {
          var s;
          const u = (s = e.props) == null ? void 0 : s[i];
          u instanceof Ee ? (n.props[i] = u) : (n.props[i] = new Ee(i, u || '', { parent: t, materials: r }));
        }),
      (n.children = o),
      n
    );
  };
  class _t {
    constructor(t, { parent: r, materials: n }) {
      S(this, 'rawData'),
        S(this, 'data'),
        S(this, 'nodeType', Ge.ROOT_CONTAINER),
        S(this, 'emitter', bt),
        S(this, 'materialsModel'),
        S(this, 'listenerHandle'),
        S(this, 'onChangeCbQueue'),
        S(this, 'parent'),
        (this.materialsModel = n),
        (this.rawData = JSON.parse(JSON.stringify(t))),
        (this.data = Bo(t, this, n)),
        (this.listenerHandle = []),
        (this.onChangeCbQueue = []),
        this.registerListener(),
        (this.parent = r);
    }
    registerListener() {
      const t = (r) => {
        const { node: n } = r;
        n === this && n.id === this.id && this.onChangeCbQueue.forEach((o) => o(r));
      };
      this.emitter.on('onNodeChange', t),
        this.listenerHandle.push(() => {
          this.emitter.off('onNodeChange', t);
        });
    }
    onChange(t) {
      return (
        this.onChangeCbQueue.push(t),
        () => {
          this.onChangeCbQueue = this.onChangeCbQueue.filter((r) => r !== t);
        }
      );
    }
    get id() {
      return this.data.id;
    }
    get value() {
      return this.data;
    }
    get props() {
      return this.data.props;
    }
    get material() {
      const t = this.materialsModel;
      return t == null ? void 0 : t.findByComponentName(this.data.componentName);
    }
    updateValue(t) {
      const r = this.data,
        n = { ...this.data, ...t };
      (this.data = Bo(n, this, this.materialsModel)),
        this.emitter.emit('onNodeChange', { value: this.data, preValue: r, node: this });
    }
    contains(t) {
      return Wr(this, t);
    }
    getMaterialConfig(t) {
      var r;
      return this.data.configure[t] !== void 0
        ? this.data.configure.isContainer
        : (r = this.material) == null
        ? void 0
        : r.value.isContainer;
    }
    isContainer() {
      return this.getMaterialConfig('isContainer');
    }
    export(t = Dr.SAVE) {
      var r;
      const n = this.data,
        o = {};
      Object.keys(n.props || {}).forEach((u) => {
        o[u] = n.props[u].export(t);
      });
      const a =
          ((r = n.children) == null
            ? void 0
            : r.map((u) => {
                var l;
                return (l = u == null ? void 0 : u.export) == null ? void 0 : l.call(u, t);
              })) || [],
        i = { ...n, props: o, children: a.filter((u) => u) };
      let s = No(i, ['id']);
      return (s = Gr(s)), s;
    }
    getPlainProps() {
      const t = this.data,
        r = {};
      return (
        Object.keys(t.props || {}).forEach((n) => {
          r[n] = t.props[n].export('design');
        }),
        r
      );
    }
    destroy() {
      this.listenerHandle.forEach((t) => t());
    }
    clone(t) {
      const r = { ...this.export('design'), id: t || he() };
      return new _t(r, { materials: this.materialsModel, parent: null });
    }
  }
  const Ne = (e) => (e == null ? void 0 : e.type) === oe.EXPRESSION,
    Cd = (e) => (e == null ? void 0 : e.type) === oe.FUNCTION,
    he = () => Math.random().toString(32).slice(3, 9),
    Sd = (e) => (e == null ? void 0 : e.nodeType) === 'NODE',
    Vr = (e) => (e == null ? void 0 : e.nodeType) === 'PROP',
    Od = (e) => (e == null ? void 0 : e.nodeType) === 'SLOT',
    Gr = (e) => Yf(e, (t) => (Q(t) ? !Object.keys(t).length : L(t) ? !t.length : !t));
  function Wr(e, t) {
    const r = [e];
    for (; r.length; ) {
      const n = r.shift();
      if ((n == null ? void 0 : n.id) === t) return n;
      const o = (n == null ? void 0 : n.props) || {},
        a = (s) => {
          if (s instanceof F) {
            r.push(s);
            return;
          }
          if ((s instanceof We && a(s.value.value), s instanceof Ee)) {
            a(s.value);
            return;
          }
          if (Q(s)) {
            const u = s;
            Object.keys(u).forEach((l) => {
              a(u[l]);
            });
            return;
          }
          if (L(s)) {
            s.forEach((u) => {
              a(u);
            });
            return;
          }
        };
      a(o);
      const i = (n == null ? void 0 : n.value.children.filter((s) => s instanceof F)) || [];
      r.push(...i);
    }
    return null;
  }
  const xd = (e) => {
    const t = mo(e),
      r = t.snippets;
    return (
      delete t.snippets,
      (t.snippets = r.map((n) => ({
        ...t,
        ...n,
        id: n.id || `${e.componentName}-${he()}`,
        title: n.title || e.title,
        category: n.category || e.category,
        tags: [...(n.tags || []), ...(e.tags || [])],
        groupName: n.groupName || e.groupName,
        snapshot: n.snapshot || e.icon,
        snapshotText: n.snapshotText,
        schema: {
          ...n.schema,
          componentName: n.schema.componentName || e.componentName,
        },
      }))),
      t
    );
  };
  class Rd {
    constructor(t) {
      S(this, 'rawData'), S(this, 'data'), (this.rawData = t), (this.data = xd(t));
    }
    get value() {
      return this.data;
    }
    get rawValue() {
      return this.rawData;
    }
    get componentName() {
      return this.data.componentName;
    }
    get snippets() {
      return this.data.snippets;
    }
    getSnippetById(t) {
      return this.data.snippets.find((r) => r.id === t);
    }
  }
  const Nd = (e) => {
      if (!L(e)) throw new Error('Materials must be a array');
      return e.map((t) => new Rd(t));
    },
    Td = (e) => {
      e == null ||
        e.forEach((t) => {
          Br({ data: t, dataStruct: md, throwError: !1 });
        });
    };
  class Te {
    constructor(t) {
      S(this, 'rawData'), S(this, 'data'), S(this, 'usedMaterials', []), (this.rawData = t), Td(t), (this.data = Nd(t));
    }
    findByComponentName(t) {
      return this.data.find((r) => r.componentName === t);
    }
    findSnippetById(t) {
      const r = [...this.data];
      let n = null;
      for (; !n && r.length; ) {
        const o = r.pop();
        n = o == null ? void 0 : o.getSnippetById(t);
      }
      return n;
    }
    getAllSnippets() {
      let t = this.data.reduce((a, i) => (a.push(...i.snippets), a), []);
      const r = [],
        n = { default: [] };
      (t = t.sort((a, i) => ((a.category || '') > (i.category || '') ? 1 : -1))),
        t.forEach((a) => {
          const i = a.groupName || 'default';
          r.includes(i) || (r.push(i), (n[i] = [])), n[i].push(a);
        });
      const o = [];
      return (
        r.forEach((a) => {
          const i = ['default'],
            s = { default: [] },
            u = n[a];
          if (u.length !== 0) {
            u.forEach((p) => {
              const d = p.category || 'default';
              i.includes(d) || (i.push(d), (s[d] = [])), s[d].push(p);
            });
            const l = [];
            i.forEach((p) => {
              s[p].length && l.push({ name: p, list: s[p] });
            });
            const f = { name: a, list: l };
            o.push(f);
          }
        }),
        o
      );
    }
    get value() {
      return this.data;
    }
    get rawValue() {
      return this.rawData;
    }
  }
  const Ad = M({
      version: m(),
      name: m(),
      css: g(m()),
      renderType: g(X([q('COMPONENT'), q('PAGE')])),
      methods: g(V(bd)),
      componentsMeta: V(Mr(M({ componentName: m() }), Pr)),
      thirdLibs: g(ud),
      componentsTree: _d,
      assets: g(V(z())),
    }),
    Uo = (e) => (Br({ data: e, dataStruct: Ad, throwError: !1 }), e),
    Hr = (e, t, r) => ({
      ...e,
      componentsTree: new _t(e.componentsTree, { parent: t, materials: r }),
    });
  class Lt {
    constructor(t, r) {
      S(this, 'nodeType', 'PAGE'),
        S(this, 'rawData'),
        S(this, 'emitter', bt),
        S(this, 'data'),
        S(this, 'parent'),
        S(this, 'materialsModel'),
        S(this, 'assetPackagesList'),
        Uo(t),
        (this.assetPackagesList = (r == null ? void 0 : r.assetPackagesList) || []),
        (this.rawData = JSON.parse(JSON.stringify(t))),
        (this.materialsModel = new Te((r == null ? void 0 : r.materials) || [])),
        (this.data = Hr(t, this, this.materialsModel));
    }
    updatePage(t) {
      const r = this.data;
      (this.rawData = JSON.parse(JSON.stringify(t))),
        (this.data = Hr(t, this, this.materialsModel)),
        this.emitter.emit('onPageChange', { value: this.data, preValue: r, node: this });
    }
    reloadPage(t) {
      const r = this.data;
      (this.rawData = JSON.parse(JSON.stringify(t))),
        (this.data = Hr(t, this, this.materialsModel)),
        this.emitter.emit('onReloadPage', { value: this.data, preValue: r, node: this });
    }
    get value() {
      return this.data;
    }
    getNode(t) {
      const r = this.data.componentsTree;
      return Wr(r, t);
    }
    addNode(t, r, n = 'AFTER') {
      var o;
      if (n === 'AFTER' || n === 'BEFORE') {
        const a = r.parent;
        if (a === null && r instanceof _t) return console.warn('Not found parent node'), !1;
        if (a instanceof Ee) return console.warn('CProp can not add node'), !1;
        if (a instanceof We) {
          const s = a.value.value,
            u = s.findIndex((l) => l === r) ?? -1;
          return u >= 0
            ? (n === 'BEFORE' ? s.splice(u, 0, t) : s.splice(u + 1, 0, t),
              (t.parent = a),
              (o = a.parent) == null || o.updateValue(),
              !0)
            : !1;
        }
        if (a instanceof Lt) return !1;
        const i = (a == null ? void 0 : a.value.children.findIndex((s) => s === r)) ?? -1;
        return i >= 0
          ? (n === 'BEFORE'
              ? a == null || a.value.children.splice(i, 0, t)
              : a == null || a.value.children.splice(i + 1, 0, t),
            (t.parent = a),
            a == null || a.updateValue(),
            !0)
          : (console.warn('Not found target node'), !1);
      }
      if (n === 'CHILD_START') return r.value.children.unshift(t), (t.parent = r), r.updateValue(), !0;
      if (n === 'CHILD_END') return r.value.children.push(t), (t.parent = r), r.updateValue(), !0;
      if (Q(n)) {
        const a = n;
        if (a.type === 'CHILD') {
          const i = a.pos,
            s = a.index || 0;
          return (
            i === 'BEFORE'
              ? r == null || r.value.children.splice(s, 0, t)
              : r == null || r.value.children.splice(s + 1, 0, t),
            (t.parent = r),
            r.updateValue(),
            !0
          );
        } else console.warn('Can not parse pos obj');
      }
      return !1;
    }
    createNode(t) {
      return delete t.id, new F(t, { parent: null, materials: this.materialsModel });
    }
    addNodeById(t, r, n = 'AFTER') {
      const o = this.getNode(r);
      return o ? this.addNode(t, o, n) : (console.warn(`Not find a node by ${r}, pls check it`), !1);
    }
    copyNode(t) {
      const r = t.export('design');
      r.id = he();
      const n = new F(r, { parent: t.parent, materials: this.materialsModel });
      return this.addNode(n, t, 'AFTER'), n;
    }
    copyNodeById(t) {
      const r = this.getNode(t);
      return r && r instanceof F ? this.copyNode(r) : !1;
    }
    moveNode(t, r, n) {
      this.deleteNode(t);
      let o = r;
      return ['AFTER', 'BEFORE'].includes(n) && (o = r.parent), (t.parent = o), this.addNode(t, r, n);
    }
    moveNodeById(t, r, n) {
      const o = this.getNode(t),
        a = this.getNode(r);
      return o && a && o instanceof F && a instanceof F ? this.moveNode(o, a, n) : !1;
    }
    deleteNode(t) {
      var r;
      const n = t.parent;
      if (!n) throw new Error('parent node is null or undefined, pls check it');
      if (n instanceof We) {
        const o = n.value.value,
          a = o.findIndex((s) => s === t),
          i = o[a];
        return o.splice(a, 1), (r = n.parent) == null || r.updateValue(), i;
      }
      if (n instanceof F || n instanceof _t) {
        const o = n.value.children,
          a = o.findIndex((s) => s === t),
          i = o[a];
        return o.splice(a, 1), n.updateValue(), i;
      }
    }
    deleteNodeById(t) {
      const r = this.getNode(t);
      if (r) return this.deleteNode(r);
    }
    export(t = Dr.SAVE) {
      var r;
      const n = this.data.componentsTree.export(t),
        o = this.assetPackagesList,
        a = [],
        i = this.materialsModel.usedMaterials
          .map((u) => {
            const l = o.find((f) => {
              var p;
              return f.package === ((p = u.value.npm) == null ? void 0 : p.package);
            });
            return (
              l && a.push(l),
              {
                componentName: u.componentName,
                ...mo(u.value.npm || {}),
              }
            );
          })
          .filter((u) => !!(u.componentName && u.package && u.version));
      this.materialsModel.usedMaterials = [];
      let s = {
        ...this.data,
        componentsTree: Gr(n),
        componentsMeta: i,
        thirdLibs: this.data.thirdLibs,
        assets: [],
      };
      return (
        (r = this.data.thirdLibs) == null ||
          r.forEach((u) => {
            const l = o.find((f) => u.package === f.package);
            l && a.push(l);
          }),
        (s.assets = ed(a, (u) => u.package)),
        (s = No(s, ['id'])),
        JSON.parse(JSON.stringify(s))
      );
    }
  }
  Ge.ROOT_CONTAINER;
  var Md = typeof global == 'object' && global && global.Object === Object && global;
  const zo = Md;
  var $d = typeof self == 'object' && self && self.Object === Object && self,
    Pd = zo || $d || Function('return this')();
  const He = Pd;
  var Dd = He.Symbol;
  const Ye = Dd;
  var Vo = Object.prototype,
    kd = Vo.hasOwnProperty,
    Id = Vo.toString,
    jt = Ye ? Ye.toStringTag : void 0;
  function Fd(e) {
    var t = kd.call(e, jt),
      r = e[jt];
    try {
      e[jt] = void 0;
      var n = !0;
    } catch {}
    var o = Id.call(e);
    return n && (t ? (e[jt] = r) : delete e[jt]), o;
  }
  var Ld = Object.prototype,
    Bd = Ld.toString;
  function Ud(e) {
    return Bd.call(e);
  }
  var zd = '[object Null]',
    Vd = '[object Undefined]',
    Go = Ye ? Ye.toStringTag : void 0;
  function Et(e) {
    return e == null ? (e === void 0 ? Vd : zd) : Go && Go in Object(e) ? Fd(e) : Ud(e);
  }
  function Je(e) {
    return e != null && typeof e == 'object';
  }
  var Gd = '[object Symbol]';
  function Wd(e) {
    return typeof e == 'symbol' || (Je(e) && Et(e) == Gd);
  }
  function Hd(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
    return o;
  }
  var Yd = Array.isArray;
  const Qe = Yd;
  var Jd = 1 / 0,
    Wo = Ye ? Ye.prototype : void 0,
    Ho = Wo ? Wo.toString : void 0;
  function Yo(e) {
    if (typeof e == 'string') return e;
    if (Qe(e)) return Hd(e, Yo) + '';
    if (Wd(e)) return Ho ? Ho.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Jd ? '-0' : t;
  }
  function Ae(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  function Jo(e) {
    return e;
  }
  var Qd = '[object AsyncFunction]',
    qd = '[object Function]',
    Xd = '[object GeneratorFunction]',
    Kd = '[object Proxy]';
  function Yr(e) {
    if (!Ae(e)) return !1;
    var t = Et(e);
    return t == qd || t == Xd || t == Qd || t == Kd;
  }
  var Zd = He['__core-js_shared__'];
  const Jr = Zd;
  var Qo = (function () {
    var e = /[^.]+$/.exec((Jr && Jr.keys && Jr.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
  function ep(e) {
    return !!Qo && Qo in e;
  }
  var tp = Function.prototype,
    rp = tp.toString;
  function np(e) {
    if (e != null) {
      try {
        return rp.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var op = /[\\^$.*+?()[\]{}|]/g,
    ap = /^\[object .+?Constructor\]$/,
    ip = Function.prototype,
    sp = Object.prototype,
    cp = ip.toString,
    up = sp.hasOwnProperty,
    lp = RegExp(
      '^' +
        cp
          .call(up)
          .replace(op, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    );
  function fp(e) {
    if (!Ae(e) || ep(e)) return !1;
    var t = Yr(e) ? lp : ap;
    return t.test(np(e));
  }
  function dp(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Qr(e, t) {
    var r = dp(e, t);
    return fp(r) ? r : void 0;
  }
  var qo = Object.create,
    pp = (function () {
      function e() {}
      return function (t) {
        if (!Ae(t)) return {};
        if (qo) return qo(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  const hp = pp;
  function vp(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  function yp(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  var mp = 800,
    gp = 16,
    bp = Date.now;
  function _p(e) {
    var t = 0,
      r = 0;
    return function () {
      var n = bp(),
        o = gp - (n - r);
      if (((r = n), o > 0)) {
        if (++t >= mp) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  function jp(e) {
    return function () {
      return e;
    };
  }
  var Ep = (function () {
    try {
      var e = Qr(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })();
  const Bt = Ep;
  var wp = Bt
      ? function (e, t) {
          return Bt(e, 'toString', { configurable: !0, enumerable: !1, value: jp(t), writable: !0 });
        }
      : Jo,
    Cp = _p(wp);
  const Sp = Cp;
  var Op = 9007199254740991,
    xp = /^(?:0|[1-9]\d*)$/;
  function Xo(e, t) {
    var r = typeof e;
    return (t = t ?? Op), !!t && (r == 'number' || (r != 'symbol' && xp.test(e))) && e > -1 && e % 1 == 0 && e < t;
  }
  function qr(e, t, r) {
    t == '__proto__' && Bt ? Bt(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
  }
  function Ut(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var Rp = Object.prototype,
    Np = Rp.hasOwnProperty;
  function Tp(e, t, r) {
    var n = e[t];
    (!(Np.call(e, t) && Ut(n, r)) || (r === void 0 && !(t in e))) && qr(e, t, r);
  }
  function Ap(e, t, r, n) {
    var o = !r;
    r || (r = {});
    for (var a = -1, i = t.length; ++a < i; ) {
      var s = t[a],
        u = n ? n(r[s], e[s], s, r, e) : void 0;
      u === void 0 && (u = e[s]), o ? qr(r, s, u) : Tp(r, s, u);
    }
    return r;
  }
  var Ko = Math.max;
  function Mp(e, t, r) {
    return (
      (t = Ko(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (var n = arguments, o = -1, a = Ko(n.length - t, 0), i = Array(a); ++o < a; ) i[o] = n[t + o];
        o = -1;
        for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
        return (s[t] = r(i)), vp(e, this, s);
      }
    );
  }
  function $p(e, t) {
    return Sp(Mp(e, t, Jo), e + '');
  }
  var Pp = 9007199254740991;
  function Zo(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Pp;
  }
  function Xr(e) {
    return e != null && Zo(e.length) && !Yr(e);
  }
  function Dp(e, t, r) {
    if (!Ae(r)) return !1;
    var n = typeof t;
    return (n == 'number' ? Xr(r) && Xo(t, r.length) : n == 'string' && t in r) ? Ut(r[t], e) : !1;
  }
  function kp(e) {
    return $p(function (t, r) {
      var n = -1,
        o = r.length,
        a = o > 1 ? r[o - 1] : void 0,
        i = o > 2 ? r[2] : void 0;
      for (
        a = e.length > 3 && typeof a == 'function' ? (o--, a) : void 0,
          i && Dp(r[0], r[1], i) && ((a = o < 3 ? void 0 : a), (o = 1)),
          t = Object(t);
        ++n < o;

      ) {
        var s = r[n];
        s && e(t, s, n, a);
      }
      return t;
    });
  }
  var Ip = Object.prototype;
  function ea(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || Ip;
    return e === r;
  }
  function Fp(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var Lp = '[object Arguments]';
  function ta(e) {
    return Je(e) && Et(e) == Lp;
  }
  var ra = Object.prototype,
    Bp = ra.hasOwnProperty,
    Up = ra.propertyIsEnumerable,
    zp = ta(
      (function () {
        return arguments;
      })()
    )
      ? ta
      : function (e) {
          return Je(e) && Bp.call(e, 'callee') && !Up.call(e, 'callee');
        };
  const Kr = zp;
  function Vp() {
    return !1;
  }
  var na = typeof exports == 'object' && exports && !exports.nodeType && exports,
    oa = na && typeof module == 'object' && module && !module.nodeType && module,
    Gp = oa && oa.exports === na,
    aa = Gp ? He.Buffer : void 0,
    Wp = aa ? aa.isBuffer : void 0,
    Hp = Wp || Vp;
  const ia = Hp;
  var Yp = '[object Arguments]',
    Jp = '[object Array]',
    Qp = '[object Boolean]',
    qp = '[object Date]',
    Xp = '[object Error]',
    Kp = '[object Function]',
    Zp = '[object Map]',
    eh = '[object Number]',
    th = '[object Object]',
    rh = '[object RegExp]',
    nh = '[object Set]',
    oh = '[object String]',
    ah = '[object WeakMap]',
    ih = '[object ArrayBuffer]',
    sh = '[object DataView]',
    ch = '[object Float32Array]',
    uh = '[object Float64Array]',
    lh = '[object Int8Array]',
    fh = '[object Int16Array]',
    dh = '[object Int32Array]',
    ph = '[object Uint8Array]',
    hh = '[object Uint8ClampedArray]',
    vh = '[object Uint16Array]',
    yh = '[object Uint32Array]',
    I = {};
  (I[ch] = I[uh] = I[lh] = I[fh] = I[dh] = I[ph] = I[hh] = I[vh] = I[yh] = !0),
    (I[Yp] =
      I[Jp] =
      I[ih] =
      I[Qp] =
      I[sh] =
      I[qp] =
      I[Xp] =
      I[Kp] =
      I[Zp] =
      I[eh] =
      I[th] =
      I[rh] =
      I[nh] =
      I[oh] =
      I[ah] =
        !1);
  function mh(e) {
    return Je(e) && Zo(e.length) && !!I[Et(e)];
  }
  function gh(e) {
    return function (t) {
      return e(t);
    };
  }
  var sa = typeof exports == 'object' && exports && !exports.nodeType && exports,
    wt = sa && typeof module == 'object' && module && !module.nodeType && module,
    bh = wt && wt.exports === sa,
    Zr = bh && zo.process,
    _h = (function () {
      try {
        var e = wt && wt.require && wt.require('util').types;
        return e || (Zr && Zr.binding && Zr.binding('util'));
      } catch {}
    })();
  const ca = _h;
  var ua = ca && ca.isTypedArray,
    jh = ua ? gh(ua) : mh;
  const la = jh;
  var Eh = Object.prototype,
    wh = Eh.hasOwnProperty;
  function Ch(e, t) {
    var r = Qe(e),
      n = !r && Kr(e),
      o = !r && !n && ia(e),
      a = !r && !n && !o && la(e),
      i = r || n || o || a,
      s = i ? Fp(e.length, String) : [],
      u = s.length;
    for (var l in e)
      (t || wh.call(e, l)) &&
        !(
          i &&
          (l == 'length' ||
            (o && (l == 'offset' || l == 'parent')) ||
            (a && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
            Xo(l, u))
        ) &&
        s.push(l);
    return s;
  }
  function Sh(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  function Oh(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var xh = Object.prototype,
    Rh = xh.hasOwnProperty;
  function Nh(e) {
    if (!Ae(e)) return Oh(e);
    var t = ea(e),
      r = [];
    for (var n in e) (n == 'constructor' && (t || !Rh.call(e, n))) || r.push(n);
    return r;
  }
  function fa(e) {
    return Xr(e) ? Ch(e, !0) : Nh(e);
  }
  var Th = Qr(Object, 'create');
  const Ct = Th;
  function Ah() {
    (this.__data__ = Ct ? Ct(null) : {}), (this.size = 0);
  }
  function Mh(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var $h = '__lodash_hash_undefined__',
    Ph = Object.prototype,
    Dh = Ph.hasOwnProperty;
  function kh(e) {
    var t = this.__data__;
    if (Ct) {
      var r = t[e];
      return r === $h ? void 0 : r;
    }
    return Dh.call(t, e) ? t[e] : void 0;
  }
  var Ih = Object.prototype,
    Fh = Ih.hasOwnProperty;
  function Lh(e) {
    var t = this.__data__;
    return Ct ? t[e] !== void 0 : Fh.call(t, e);
  }
  var Bh = '__lodash_hash_undefined__';
  function Uh(e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = Ct && t === void 0 ? Bh : t), this;
  }
  function Me(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (Me.prototype.clear = Ah),
    (Me.prototype.delete = Mh),
    (Me.prototype.get = kh),
    (Me.prototype.has = Lh),
    (Me.prototype.set = Uh);
  function zh() {
    (this.__data__ = []), (this.size = 0);
  }
  function zt(e, t) {
    for (var r = e.length; r--; ) if (Ut(e[r][0], t)) return r;
    return -1;
  }
  var Vh = Array.prototype,
    Gh = Vh.splice;
  function Wh(e) {
    var t = this.__data__,
      r = zt(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : Gh.call(t, r, 1), --this.size, !0;
  }
  function Hh(e) {
    var t = this.__data__,
      r = zt(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function Yh(e) {
    return zt(this.__data__, e) > -1;
  }
  function Jh(e, t) {
    var r = this.__data__,
      n = zt(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  function me(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (me.prototype.clear = zh),
    (me.prototype.delete = Wh),
    (me.prototype.get = Hh),
    (me.prototype.has = Yh),
    (me.prototype.set = Jh);
  var Qh = Qr(He, 'Map');
  const da = Qh;
  function qh() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Me(),
        map: new (da || me)(),
        string: new Me(),
      });
  }
  function Xh(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
  }
  function Vt(e, t) {
    var r = e.__data__;
    return Xh(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  function Kh(e) {
    var t = Vt(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Zh(e) {
    return Vt(this, e).get(e);
  }
  function ev(e) {
    return Vt(this, e).has(e);
  }
  function tv(e, t) {
    var r = Vt(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  function qe(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (qe.prototype.clear = qh),
    (qe.prototype.delete = Kh),
    (qe.prototype.get = Zh),
    (qe.prototype.has = ev),
    (qe.prototype.set = tv);
  function pa(e) {
    return e == null ? '' : Yo(e);
  }
  var rv = Sh(Object.getPrototypeOf, Object);
  const ha = rv;
  var nv = '[object Object]',
    ov = Function.prototype,
    av = Object.prototype,
    va = ov.toString,
    iv = av.hasOwnProperty,
    sv = va.call(Object);
  function Xe(e) {
    if (!Je(e) || Et(e) != nv) return !1;
    var t = ha(e);
    if (t === null) return !0;
    var r = iv.call(t, 'constructor') && t.constructor;
    return typeof r == 'function' && r instanceof r && va.call(r) == sv;
  }
  function cv(e, t, r) {
    var n = -1,
      o = e.length;
    t < 0 && (t = -t > o ? 0 : o + t),
      (r = r > o ? o : r),
      r < 0 && (r += o),
      (o = t > r ? 0 : (r - t) >>> 0),
      (t >>>= 0);
    for (var a = Array(o); ++n < o; ) a[n] = e[n + t];
    return a;
  }
  function uv(e, t, r) {
    var n = e.length;
    return (r = r === void 0 ? n : r), !t && r >= n ? e : cv(e, t, r);
  }
  var lv = '\\ud800-\\udfff',
    fv = '\\u0300-\\u036f',
    dv = '\\ufe20-\\ufe2f',
    pv = '\\u20d0-\\u20ff',
    hv = fv + dv + pv,
    vv = '\\ufe0e\\ufe0f',
    yv = '\\u200d',
    mv = RegExp('[' + yv + lv + hv + vv + ']');
  function ya(e) {
    return mv.test(e);
  }
  function gv(e) {
    return e.split('');
  }
  var ma = '\\ud800-\\udfff',
    bv = '\\u0300-\\u036f',
    _v = '\\ufe20-\\ufe2f',
    jv = '\\u20d0-\\u20ff',
    Ev = bv + _v + jv,
    wv = '\\ufe0e\\ufe0f',
    Cv = '[' + ma + ']',
    en = '[' + Ev + ']',
    tn = '\\ud83c[\\udffb-\\udfff]',
    Sv = '(?:' + en + '|' + tn + ')',
    ga = '[^' + ma + ']',
    ba = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    _a = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Ov = '\\u200d',
    ja = Sv + '?',
    Ea = '[' + wv + ']?',
    xv = '(?:' + Ov + '(?:' + [ga, ba, _a].join('|') + ')' + Ea + ja + ')*',
    Rv = Ea + ja + xv,
    Nv = '(?:' + [ga + en + '?', en, ba, _a, Cv].join('|') + ')',
    Tv = RegExp(tn + '(?=' + tn + ')|' + Nv + Rv, 'g');
  function Av(e) {
    return e.match(Tv) || [];
  }
  function Mv(e) {
    return ya(e) ? Av(e) : gv(e);
  }
  function $v(e) {
    return function (t) {
      t = pa(t);
      var r = ya(t) ? Mv(t) : void 0,
        n = r ? r[0] : t.charAt(0),
        o = r ? uv(r, 1).join('') : t.slice(1);
      return n[e]() + o;
    };
  }
  var Pv = $v('toUpperCase');
  const Dv = Pv;
  function kv(e) {
    return Dv(pa(e).toLowerCase());
  }
  function Iv() {
    (this.__data__ = new me()), (this.size = 0);
  }
  function Fv(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  function Lv(e) {
    return this.__data__.get(e);
  }
  function Bv(e) {
    return this.__data__.has(e);
  }
  var Uv = 200;
  function zv(e, t) {
    var r = this.__data__;
    if (r instanceof me) {
      var n = r.__data__;
      if (!da || n.length < Uv - 1) return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new qe(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  function Ke(e) {
    var t = (this.__data__ = new me(e));
    this.size = t.size;
  }
  (Ke.prototype.clear = Iv),
    (Ke.prototype.delete = Fv),
    (Ke.prototype.get = Lv),
    (Ke.prototype.has = Bv),
    (Ke.prototype.set = zv);
  var wa = typeof exports == 'object' && exports && !exports.nodeType && exports,
    Ca = wa && typeof module == 'object' && module && !module.nodeType && module,
    Vv = Ca && Ca.exports === wa,
    Sa = Vv ? He.Buffer : void 0,
    Oa = Sa ? Sa.allocUnsafe : void 0;
  function Gv(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = Oa ? Oa(r) : new e.constructor(r);
    return e.copy(n), n;
  }
  var Wv = He.Uint8Array;
  const xa = Wv;
  function Hv(e) {
    var t = new e.constructor(e.byteLength);
    return new xa(t).set(new xa(e)), t;
  }
  function Yv(e, t) {
    var r = t ? Hv(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  function Jv(e) {
    return typeof e.constructor == 'function' && !ea(e) ? hp(ha(e)) : {};
  }
  function Qv(e) {
    return function (t, r, n) {
      for (var o = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
        var u = i[e ? s : ++o];
        if (r(a[u], u, a) === !1) break;
      }
      return t;
    };
  }
  var qv = Qv();
  const Xv = qv;
  function rn(e, t, r) {
    ((r !== void 0 && !Ut(e[t], r)) || (r === void 0 && !(t in e))) && qr(e, t, r);
  }
  function Kv(e) {
    return Je(e) && Xr(e);
  }
  function nn(e, t) {
    if (!(t === 'constructor' && typeof e[t] == 'function') && t != '__proto__') return e[t];
  }
  function Zv(e) {
    return Ap(e, fa(e));
  }
  function ey(e, t, r, n, o, a, i) {
    var s = nn(e, r),
      u = nn(t, r),
      l = i.get(u);
    if (l) {
      rn(e, r, l);
      return;
    }
    var f = a ? a(s, u, r + '', e, t, i) : void 0,
      p = f === void 0;
    if (p) {
      var d = Qe(u),
        v = !d && ia(u),
        b = !d && !v && la(u);
      (f = u),
        d || v || b
          ? Qe(s)
            ? (f = s)
            : Kv(s)
            ? (f = yp(s))
            : v
            ? ((p = !1), (f = Gv(u, !0)))
            : b
            ? ((p = !1), (f = Yv(u, !0)))
            : (f = [])
          : Xe(u) || Kr(u)
          ? ((f = s), Kr(s) ? (f = Zv(s)) : (!Ae(s) || Yr(s)) && (f = Jv(u)))
          : (p = !1);
    }
    p && (i.set(u, f), o(f, u, n, a, i), i.delete(u)), rn(e, r, f);
  }
  function Ra(e, t, r, n, o) {
    e !== t &&
      Xv(
        t,
        function (a, i) {
          if ((o || (o = new Ke()), Ae(a))) ey(e, t, i, r, Ra, n, o);
          else {
            var s = n ? n(nn(e, i), a, i + '', e, t, o) : void 0;
            s === void 0 && (s = a), rn(e, i, s);
          }
        },
        fa
      );
  }
  var ty = kp(function (e, t, r) {
    Ra(e, t, r);
  });
  const ry = ty,
    ny = function (e) {
      return !(!e || typeof e != 'function' || !e.prototype);
    };
  function Na(e) {
    const t = e.prototype;
    return !!(t && t.isReactComponent);
  }
  function Ta(e) {
    var t, r;
    const n = typeof Symbol == 'function' && Symbol.for ? Symbol.for('react.forward_ref') : 60112;
    return (
      (e == null ? void 0 : e.$$typeof) === n ||
      ((t = e == null ? void 0 : e.prototype) == null ? void 0 : t.isReactComponent) ||
      ((r = e == null ? void 0 : e.prototype) == null ? void 0 : r.setState) ||
      e._forwardRef
    );
  }
  function Aa(e) {
    class t extends x.Component {
      render() {
        return x.createElement(e, this.props);
      }
    }
    return (t.displayName = e.displayName), t;
  }
  const $e = (e, t) => {
      const r = (n) => {
        const o = `
    ${Object.keys(t).map((a) => `const ${a} = $$context['${a}'];`).join(`
`)}
    return ${n};
    `;
        return new Function('$$context', o)(t);
      };
      try {
        return r(e);
      } catch (n) {
        console.warn(n);
        const o = `[${e}] expression run failed`;
        return console.warn(o), null;
      }
    },
    Ma = (e, t, r) =>
      function (...n) {
        try {
          const o = `
        var f = ${e};
        var args = Array.from(arguments);
        var __$$storeManager__ = args.pop();
        var $$context = args.pop();
        $$context.stateManager = __$$storeManager__.getStateSnapshot();
        return f.apply(f, args)
      `;
          new Function(o)(...n, t, r);
        } catch (o) {
          console.warn(o);
        }
      },
    on = (e, t) => {
      const r = {};
      return (
        t.forEach((n, o) => {
          r[n] = e[o];
        }),
        r
      );
    },
    an = (e) => {
      const t = {};
      return (
        Object.keys(e).forEach((r) => {
          let n = r.replace('-webkit', 'Webkit');
          (n = n.replace('-ms', 'ms')), (n = n.replace('-moz', 'Moz')), (n = n.replace('-o', 'O'));
          let o = n.split('-');
          o.length >= 2 && (o = o.map((a, i) => (i !== 0 ? kv(a) : a))), (t[o.join('')] = e[r]);
        }),
        t
      );
    },
    sn = (e) => {
      let t = '';
      return (
        Object.keys(e).forEach((r) => {
          t += `${r}:${e[r]};`;
        }),
        t
      );
    },
    oy = (e, t) => {
      const r = {};
      return (
        e.forEach((n) => {
          if (n.globalName) {
            const o = t[n.globalName];
            o && (r[n.globalName] = o);
          }
        }),
        r
      );
    },
    ay = (e, t = 1) => {
      let r = 0,
        n = e,
        o = {},
        a = {};
      for (; r < t; )
        Object.keys(n).forEach((i) => {
          o = { ...o, ...n[i] };
        }),
          (a = o),
          (n = o),
          (o = {}),
          (r += 1);
      return a;
    },
    Gt = 'DYNAMIC',
    iy = ['$$context', '$$nodeModel'],
    $a = (e) => {
      let t;
      const r = new Set(),
        n = (i, s) => {
          const u = typeof i == 'function' ? i(t) : i;
          if (!Object.is(u, t)) {
            const l = t;
            (t = s ?? typeof u != 'object' ? u : Object.assign({}, t, u)), r.forEach((f) => f(t, l));
          }
        },
        o = () => t,
        a = {
          setState: n,
          getState: o,
          subscribe: (i) => (r.add(i), () => r.delete(i)),
          destroy: () => {
            (({ BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 }) && 'production') !== 'production' &&
              console.warn(
                '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'
              ),
              r.clear();
          },
        };
      return (t = e(n, o, a)), a;
    },
    sy = (e) => (e ? $a(e) : $a);
  var cy = (e) => (
    ({ BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 } && 'production') !== 'production' &&
      console.warn(
        "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."
      ),
    sy(e)
  );
  class uy {
    constructor() {
      j(this, 'storeMap', new Map());
    }
    addStore(t, r) {
      const n = cy(r);
      return this.storeMap.set(t, n), (n.name = t), n;
    }
    setStore(t, r) {
      this.storeMap.set(t, r);
    }
    removeStore(t) {
      this.storeMap.delete(t);
    }
    getStore(t) {
      return this.storeMap.get(t);
    }
    connect(t, r) {
      const n = this.storeMap.get(t);
      return n ? n.subscribe(r) : (console.warn('store not exits'), () => {});
    }
    getStateSnapshot() {
      const t = {};
      return (
        this.storeMap.forEach((r, n) => {
          t[n] = {
            state: r.getState(),
            updateState: (o) => {
              r.setState(o);
            },
          };
        }),
        t
      );
    }
    destroy() {
      this.storeMap.forEach((t) => {
        t.destroy();
      }),
        (this.storeMap = new Map());
    }
  }
  class Pa {
    constructor() {
      j(this, 'renderMode', 'normal'),
        j(this, 'components', {}),
        j(this, 'storeManager', new uy()),
        j(this, 'runtimeComponentCache', new Map()),
        j(this, 'onGetRef'),
        j(this, 'onGetComponent'),
        j(this, 'onComponentMount'),
        j(this, 'onComponentDestroy'),
        j(this, 'processNodeConfigHook');
    }
    getComponent(t) {
      var r;
      const n = t.value.componentName;
      let o = this.components[n] || (() => `Component [${n}] not found`);
      return (
        Ta(o) || ((o = Aa(o)), (this.components[n] = o)),
        this.onGetComponent && (o = (r = this.onGetComponent) == null ? void 0 : r.call(this, o, t)),
        o
      );
    }
    getContext(t = {}, r) {
      let n = t;
      return r && ((n = { ...t }), (n.__proto__ = r || null)), n;
    }
    pageRender(
      t,
      {
        components: r,
        onGetRef: n,
        $$context: o = {},
        onGetComponent: a,
        onComponentMount: i,
        onComponentDestroy: s,
        renderMode: u,
        processNodeConfigHook: l,
      }
    ) {
      (this.renderMode = u),
        (this.components = r),
        (this.onGetRef = n),
        (this.onGetComponent = a),
        (this.onComponentMount = i),
        (this.onComponentDestroy = s),
        (this.processNodeConfigHook = l);
      const f = t.value.componentsTree,
        p = this.getComponent(f),
        d = this.convertModelToComponent(p, t.value.componentsTree),
        v = {},
        b = f.props;
      return (
        Object.keys(b).forEach((_) => {
          v[_] = b[_].value;
        }),
        (v.$$context = o),
        this.render(d, v)
      );
    }
    transformProps(t = {}, { $$context: r }) {
      const n = t,
        o = (i) => {
          if (Array.isArray(i)) return i.map((s) => o(s));
          if (Vr(i)) return o(i.value);
          if (Od(i)) {
            const s = i.value,
              u = s.value;
            if (!u) return console.warn('slot value is null, this maybe cause some error, pls check it', t), () => {};
            const l = (f) => {
              const p = `${f.id}-${Gt}`;
              if (this.runtimeComponentCache.get(f.id))
                return { key: p, component: this.runtimeComponentCache.get(f.id) };
              const d = this.getComponent(f),
                v = this.convertModelToComponent(d, f),
                b = s.params || [];
              return {
                component: (..._) => {
                  const E = on(_, b),
                    O = this.getContext({ params: E }, r);
                  return this.render(v, { $$context: O, key: p });
                },
                key: p,
              };
            };
            if (Array.isArray(u)) {
              const f = u == null ? void 0 : u.map((p) => l(p));
              return (...p) =>
                f.map((d) =>
                  Na(d.component) ? x.createElement(d.component, { $$context: r, key: d.key }) : d.component(...p)
                );
            } else return l(u).component;
          } else {
            if (Ne(i)) return $e(i.value, r || {});
            if (Cd(i)) return Ma(i.value, r, this.storeManager);
            if (Xe(i)) {
              let s = i;
              Vr(i) && (s = i.value);
              const u = s,
                l = {};
              return (
                Object.keys(s).forEach((f) => {
                  l[f] = o(u[f]);
                }),
                l
              );
            } else return i;
          }
        },
        a = {};
      return (
        Object.keys(n).forEach((i) => {
          const s = n[i];
          a[i] = o(s);
        }),
        a
      );
    }
    collectSpecialProps(t = {}, r) {
      const n = [],
        o = (a, i) => {
          let s = i;
          Vr(i) && (s = i.value),
            r(s)
              ? n.push({ keyPath: a, val: s })
              : Qe(s)
              ? s.forEach((u, l) => {
                  o([...a, String(l)], u);
                })
              : Xe(s) &&
                Object.keys(s).forEach((u) => {
                  o([...a, u], s[u]);
                });
        };
      return o(['$root'], t), n;
    }
    convertModelToComponent(t, r) {
      const n = this;
      class o extends x.Component {
        constructor(i) {
          super(i),
            j(this, '_CONDITION', !0),
            j(this, '_DESIGN_BOX', !1),
            j(this, '_NODE_MODEL', r),
            j(this, '_NODE_ID', r.id),
            j(this, 'UNIQUE_ID', `${r.id}_${he()}`),
            j(this, 'targetComponentRef'),
            j(this, 'listenerHandle', []),
            j(this, 'storeState'),
            j(this, 'staticState', {}),
            j(this, 'storeListenDisposeLint', []),
            j(this, 'domHeader'),
            j(this, 'mediaStyleDomMap', {}),
            j(this, 'updateState', (l) => {
              this.storeState.setState(l), this.forceUpdate();
            }),
            j(this, 'getStyleDomById', (l) => {
              const f = this.mediaStyleDomMap;
              let p = f[l];
              return p || ((p = document.createElement('style')), (p.type = 'text/css'), (f[l] = p)), (p.id = l), p;
            }),
            j(this, 'addMediaCSS', () => {
              var l;
              let f = this.domHeader;
              if (
                (f || ((f = (l = document.getElementsByTagName('head')) == null ? void 0 : l[0]), (this.domHeader = f)),
                !this.domHeader)
              )
                return;
              const p = this._NODE_MODEL.value.css;
              p &&
                p.value.forEach((d) => {
                  var v;
                  const b = `${this.UNIQUE_ID}_${d.state}`;
                  let _ = `.${p.class}`;
                  if ((d.state !== 'normal' && (_ = `${_}:${d.state}`), Object.keys(d.style).length !== 0)) {
                    const E = this.getStyleDomById(b);
                    (E.innerText = `${_} { ${sn(d.style)} }`), f == null || f.appendChild(E);
                  }
                  (v = d.media) != null &&
                    v.length &&
                    d.media.forEach((E) => {
                      const O = `${b}_${E.type}_${E.value}`,
                        C = this.getStyleDomById(O);
                      (C.media = `screen and (${E.type}:${E.value}px)`),
                        (C.innerHTML = `${_} { ${sn(E.style)} }`),
                        f == null || f.appendChild(C);
                    });
                });
            }),
            j(this, 'removeMediaCSS', () => {
              const l = this.mediaStyleDomMap;
              Object.keys(l).forEach((f) => {
                var p;
                (p = this.domHeader) == null || p.removeChild(l[f]);
              });
            }),
            j(this, 'rebuildNode', () => {
              this.storeListenDisposeLint.forEach((l) => l()),
                this.removeMediaCSS(),
                this.connectStore(),
                this.addMediaCSS(),
                this.forceUpdate();
            }),
            (this.targetComponentRef = x.createRef()),
            (this.state = r.value.state || {});
          const s = r.value.stateName || r.id,
            u = n.storeManager.getStore(s);
          u
            ? ((this.storeState = u), u.setState({ ...(r.value.state || {}) }))
            : (this.storeState = n.storeManager.addStore(s, () => ({ ...(r.value.state || {}) }))),
            this.storeState.subscribe((l) => {
              this.setState({ ...l });
            }),
            this.connectStore();
        }
        connectStore() {
          const i = n.collectSpecialProps(r.props, (p) => !!Ne(p)),
            s = n.collectSpecialProps({ css: r.value.css, class: r.value.classNames }, (p) => !!Ne(p)),
            u = [...i, ...s]
              .map((p) => {
                const d = p.val,
                  v = /\$\$context.stateManager\.(.+?)\./gim.exec(d.value);
                return v != null && v.length ? v[1] : '';
              })
              .filter(Boolean),
            l = Array.from(new Set(u)),
            f = [];
          l.length &&
            l.forEach((p) => {
              n.storeManager.getStore(p) ||
                (n.storeManager.addStore(p, () => ({})), console.log(n.storeManager, p, 'not exits'));
              const d = n.storeManager.connect(p, () => {
                this.forceUpdate();
              });
              f.push(d);
            }),
            (this.storeListenDisposeLint = f);
        }
        componentDidMount() {
          var i;
          this.addMediaCSS(),
            n.onGetRef && n.onGetRef(this.targetComponentRef, r, this),
            (i = n.onComponentMount) == null || i.call(n, this, r);
          const s = () => {
            n.storeManager.setStore(r.value.stateName || r.id, this.storeState),
              this.storeState.setState({ ...this.state, ...(r.value.state || {}) }),
              this.rebuildNode();
          };
          r.onChange(s);
        }
        componentWillUnmount() {
          var i;
          this.storeListenDisposeLint.forEach((s) => s()),
            this.removeMediaCSS(),
            (i = n.onComponentDestroy) == null || i.call(n, this, r);
        }
        render() {
          var i;
          const { $$context: s, ...u } = this.props,
            l = { key: r.id, ...r.props, ...u },
            f = {
              state: this.state || {},
              updateState: this.updateState,
              staticState: this.staticState,
            };
          r.value.componentName === Ge.ROOT_CONTAINER &&
            ((f.globalState = this.state), (f.updateGlobalState = this.updateState)),
            (f.stateManager = n.storeManager.getStateSnapshot());
          const p = n.getContext(f, s),
            d = r.value.loop;
          let v = [];
          if (d && d.open) {
            this.targetComponentRef.current = [];
            let Y = d.data || [];
            if (Ne(d.data)) {
              const N = d.data;
              Y = $e(N.value, p || {});
            }
            return (
              (v = Y.map((...N) => {
                var ae;
                const le = N[1],
                  St = [d.forName || 'item', d.forIndex || 'index'],
                  Ht = on(N, St);
                let ee = 'loopData';
                d.name && (ee = `${ee}${d.name}`);
                const te = n.getContext({ [ee]: Ht, staticState: this.staticState }, p),
                  H = n.transformProps(l, { $$context: te }),
                  Yt =
                    ((ae = r.value.classNames) == null
                      ? void 0
                      : ae.map((re) => {
                          var be;
                          const tt = re.name;
                          return Ne(re.status) && $e(String(((be = re.status) == null ? void 0 : be.value) || ''), te)
                            ? tt
                            : '';
                        })) || [];
                let Ze = `${H.className ?? ''} ${Yt.join(' ')}`.trim();
                r.value.css && (Ze = `${r.value.css.class} ${Ze}`.trim()), (H.className = Ze);
                const Jt = n.transformProps(r.value.style, { $$context: te });
                r.value.style && (H.style = an(Jt || {}));
                const { children: Pe } = H;
                let et = [];
                if (Pe !== void 0) delete H.children, (et = Array.isArray(Pe) ? Pe : [Pe]);
                else {
                  const re = [];
                  r.value.children.forEach((be, tt) => {
                    const cn = n.buildComponent(be, { $$context: te, idx: tt });
                    re.push(cn);
                  }),
                    (et = re);
                }
                if (((H.key = `${H.key}-${le}`), Ne(d.key))) {
                  const re = d.key,
                    be = $e(re.value, te || {});
                  H.key += `-${be}`;
                }
                return (
                  (H.ref = (re) => {
                    (this.targetComponentRef.current = this.targetComponentRef.current || []),
                      (this.targetComponentRef.current[le] = re);
                  }),
                  n.render(t, H, ...et)
                );
              })),
              v
            );
          }
          const b = n.transformProps(l, { $$context: p }),
            { children: _ } = b;
          let E = [];
          if (_ !== void 0) delete b.children, (E = Array.isArray(_) ? _ : [_]);
          else {
            const Y = [];
            r.value.children.forEach((N, ae) => {
              const le = n.buildComponent(N, { $$context: p, idx: ae });
              Y.push(le);
            }),
              (E = Y);
          }
          b.ref = this.targetComponentRef;
          const O =
            ((i = r.value.classNames) == null
              ? void 0
              : i.map((Y) => {
                  var N;
                  const ae = Y.name;
                  return Ne(Y.status) && $e(((N = Y.status) == null ? void 0 : N.value) || '', p) ? ae : '';
                })) || [];
          let C = `${b.className ?? ''} ${O.join(' ')}`.trim();
          r.value.css && (C = `${r.value.css.class} ${C}`.trim()), (b.className = C);
          const W = n.transformProps(r.value.style, { $$context: p });
          r.value.style && (b.style = an(W || {}));
          let D = r.value.condition ?? !0;
          typeof D != 'boolean' && (D = $e(D.value, p || {}));
          let B = { condition: D, props: b };
          n.processNodeConfigHook && (B = n.processNodeConfigHook(B, r));
          const Z = n.render(t, B.props, ...E);
          return (
            (this._CONDITION = B.condition), B.condition ? Z : De('div', { style: { display: 'none' }, children: Z })
          );
        }
      }
      return j(o, '__CP_TYPE__', Gt), (o.displayName = `${r.value.componentName}Dynamic`), o;
    }
    buildComponent(t, { $$context: r = {} }) {
      const n = this.runtimeComponentCache;
      return typeof t == 'string'
        ? this.render(t)
        : Sd(t)
        ? (({ currentNode: o }) => {
            const a = o.value.id;
            let i = null;
            if (n.get(a)) i = n.get(a);
            else {
              const l = this.getComponent(o);
              i = this.convertModelToComponent(l, o);
            }
            !n.get(a) && this.renderMode !== 'design' && n.set(a, i);
            const s = `${a}-${Gt}`,
              u = { $$context: r, $$nodeModel: t, key: s };
            return this.render(i, u);
          })({ currentNode: t })
        : void 0;
    }
    render(t, r = {}, ...n) {
      return typeof t == 'string' || typeof t == 'number'
        ? String(t)
        : (iy.forEach((o) => {
            o in r && t.__CP_TYPE__ !== Gt && delete r[o];
          }),
          x.createElement(t, r, ...n));
    }
    clear() {
      this.runtimeComponentCache.clear(), this.storeManager.destroy();
    }
  }
  const ly = jn(new Pa()),
    fy = [
      'a',
      'abbr',
      'acronym',
      'address',
      'applet',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'base',
      'basefont',
      'bdi',
      'bdo',
      'bgsound',
      'big',
      'blink',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'center',
      'cite',
      'code',
      'col',
      'colgroup',
      'command',
      'content',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'element',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'font',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'iframe',
      'image',
      'img',
      'input',
      'ins',
      'isindex',
      'kbd',
      'keygen',
      'label',
      'legend',
      'li',
      'link',
      'listing',
      'main',
      'map',
      'mark',
      'marquee',
      'math',
      'menu',
      'menuitem',
      'meta',
      'meter',
      'multicol',
      'nav',
      'nextid',
      'nobr',
      'noembed',
      'noframes',
      'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'plaintext',
      'pre',
      'progress',
      'q',
      'rb',
      'rbc',
      'rp',
      'rt',
      'rtc',
      'ruby',
      's',
      'samp',
      'script',
      'search',
      'section',
      'select',
      'shadow',
      'slot',
      'small',
      'source',
      'spacer',
      'span',
      'strike',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'svg',
      'table',
      'tbody',
      'td',
      'template',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'track',
      'tt',
      'u',
      'ul',
      'var',
      'video',
      'wbr',
      'xmp',
    ],
    ge = (e) => {
      const t = {};
      return (
        e.forEach((r) => {
          t[r.key] = r.value;
        }),
        t
      );
    },
    dy = [...fy, ...ld],
    py = dy.reduce(
      (e, t) => (
        (e[t] = ({ children: r, $$attributes: n = [], ...o }) => {
          let a = r;
          return Array.isArray(r) || (a = [r]), x.createElement(t, { ...o, ...ge(n) }, ...a);
        }),
        e
      ),
      {}
    ),
    hy = ({ children: e, width: t, height: r, $$attributes: n = [], ...o }) => {
      let a = e;
      Array.isArray(e) || (a = [e]), (a = a.filter((l) => l !== void 0));
      const { style: i = {}, ...s } = ge(n),
        u = { height: r, width: t, ...i, ...(o.style || {}) };
      return x.createElement('div', { ...o, ...s, style: u }, ...a);
    },
    vy = ({ children: e, $$attributes: t = [], ...r }) => {
      let n = e;
      return Array.isArray(e) || (n = [e]), x.createElement('canvas', { ...r, ...ge(t) }, ...n);
    },
    yy = ({ children: e, $$attributes: t = [], ...r }) => {
      let n = e;
      return Array.isArray(e) || (n = [e]), x.createElement('img', { ...r, ...ge(t) }, ...n);
    },
    my = ({ children: e, $$attributes: t = [], ...r }) => {
      let n = e;
      return Array.isArray(e) || (n = [e]), x.createElement('video', { ...r, ...ge(t) }, ...n);
    },
    gy = ({ children: e, $$attributes: t = [], ...r }) => {
      let n = e;
      return Array.isArray(e) || (n = [e]), x.createElement('video', { ...r, ...ge(t) }, ...n);
    },
    by = ({ $$attributes: e = [], content: t, ...r }) => De('span', { ...r, ...ge(e), children: t }),
    _y = ({ children: e, $$attributes: t = [], afterMount: r, beforeDestroy: n, ...o }) => {
      let a = e;
      return (
        Array.isArray(e) || (a = [e]),
        x.useEffect(
          () => (
            r == null || r(o),
            () => {
              n == null || n(o);
            }
          ),
          []
        ),
        x.createElement('div', { ...o, ...ge(t) }, ...a)
      );
    },
    jy = ({ children: e, $$attributes: t = [], htmlTag: r = 'div', ...n }) => {
      let o = e;
      return Array.isArray(e) || (o = [e]), x.createElement(r, { ...n, ...ge(t) }, ...o);
    },
    Ey = {
      RootContainer: ({ children: e }) => e,
      ...py,
      CContainer: _y,
      CVideo: my,
      CAudio: gy,
      CBlock: hy,
      CImage: yy,
      CText: by,
      CCanvas: vy,
      CNativeTag: jy,
    };
  class wy {
    constructor() {
      j(this, 'refMap', new Map());
    }
    get(t) {
      return this.refMap.get(t);
    }
    add(t, r) {
      this.refMap.set(t, r);
    }
    remove(t) {
      this.refMap.delete(t);
    }
    destroy() {
      this.refMap.clear();
    }
  }
  class Da extends x.Component {
    constructor(t) {
      super(t),
        j(this, 'refManager'),
        j(this, 'dynamicComponentInstanceMap', new Map()),
        j(this, 'onGetRef', (r, n, o) => {
          var a, i;
          (i = (a = this.props).onGetRef) == null || i.call(a, r, n, o),
            this.dynamicComponentInstanceMap.set(n.id, o),
            this.refManager.add(n.value.refId || n.id, r);
        }),
        j(this, 'rerender', (r) => {
          if ((this.props.adapter.clear(), (r == null ? void 0 : r.nodeType) === 'PAGE' && r))
            this.setState({ pageModel: r });
          else if (Xe(r) && Uo(r)) {
            const n = r;
            this.setState({
              pageModel: new Lt(n, { materials: this.state.pageModel.materialsModel.rawValue }),
            });
          }
        }),
        (this.state = { pageModel: t.pageModel || new Lt(t.page) }),
        (this.refManager = new wy());
    }
    getPageModel() {
      return this.state.pageModel;
    }
    componentDidMount() {
      const { render: t } = this.props;
      t && (t.ref.current = this);
    }
    componentWillUnmount() {
      this.refManager.destroy();
    }
    render() {
      const { props: t } = this,
        { adapter: r, onGetComponent: n, onComponentDestroy: o, onComponentMount: a } = t,
        { pageModel: i } = this.state;
      if (!i) return console.warn('pageModel is null'), null;
      const s = { ...Ey, ...t.components };
      return r.pageRender(i, {
        libs: {},
        components: s,
        onGetRef: this.onGetRef,
        onGetComponent: n,
        onComponentMount: a,
        onComponentDestroy: o,
        $$context: { refs: this.refManager },
        renderMode: t.renderMode,
        processNodeConfigHook: t.processNodeConfigHook,
      });
    }
  }
  const Cy = () => {
    const e = x.useRef(null);
    return {
      ref: e,
      rerender: function (...t) {
        e.current && e.current.rerender(...t);
      },
    };
  };
  class Sy extends x.Component {
    constructor(t) {
      super(t),
        j(this, 'onDoubleClick', () => {
          this.setState({ hasError: !1, error: null });
        }),
        (this.state = {
          hasError: !1,
          error: '',
        });
    }
    static getDerivedStateFromError(t) {
      return { hasError: !0, error: t };
    }
    componentDidCatch(t, r) {
      var n, o;
      (o = (n = this.props).onError) == null || o.call(n, r);
    }
    render() {
      if (this.state.hasError) {
        const { onDoubleClick: t } = this,
          r = this.props.node.value;
        console.error(this.props.node, this.props.children);
        const n = bn('div', {
          style: {
            backgroundColor: 'rgb(255 206 215 / 13%)',
            padding: '5px',
            color: '#ff0000b0',
            textAlign: 'center',
            fontSize: '12px',
          },
          children: [
            'Render error, node id: ',
            r.id,
            ', node name：',
            r.title,
            ' component name：',
            r.title || r.componentName,
            bn('p', { children: ['msg: ', String(this.state.error)] }),
            De('button', {
              onDoubleClick: t,
              style: {
                border: '1px solid rgba(100,100,100,0.1)',
                backgroundColor: '#fff',
                padding: '5px 10px',
                borderRadius: '2px',
                color: 'gray',
                cursor: 'pointer',
                marginTop: '5px',
              },
              children: 'double click to refresh',
            }),
            De('div', { style: { display: 'none' } }),
          ],
        });
        return x.createElement(this.props.targetComponent, { onlyRenderChild: !0 }, n);
      }
      return this.props.children;
    }
  }
  class ka {
    constructor() {
      j(this, 'instanceMap', new Map());
    }
    get(t) {
      return this.instanceMap.get(t);
    }
    add(t, r) {
      const n = this.instanceMap.get(t);
      n ? n.push(r) : this.instanceMap.set(t, [r]);
    }
    remove(t, r) {
      const n = this.instanceMap.get(t);
      if (r !== void 0 && Array.isArray(n)) {
        const o = n.filter((a) => a !== r);
        this.instanceMap.set(t, o);
      } else this.instanceMap.delete(t);
    }
    destroy() {
      this.instanceMap.clear();
    }
  }
  const Ia = (e) => {
    const { node: t } = e,
      r = x.useMemo(() => {
        const s = t.isContainer();
        return Xe(s)
          ? s
          : {
              placeholder: 'Drag the component to place it',
              width: '100%',
              height: '100%',
              style: {},
            };
      }, [e.node]),
      { placeholder: n, height: o, width: a, style: i } = r;
    return De('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(200,200,200,0.1)',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius: '2px',
        fontSize: '14px',
        color: 'gray',
        cursor: 'default',
        minWidth: '300px',
        minHeight: '50px',
        width: a,
        height: o,
        ...i,
      },
      children: n,
    });
  };
  class Oy extends x.Component {
    constructor(t) {
      super(t),
        j(this, 'instanceManager', new ka()),
        j(this, 'renderRef'),
        j(this, 'dropPlaceholder', Ia),
        j(this, 'onGetComponent', (r, n) => {
          const o = this;
          class a extends x.Component {
            constructor() {
              super(...arguments),
                j(this, '_DESIGN_BOX', !0),
                j(this, '_NODE_MODEL', n),
                j(this, '_NODE_ID', n.id),
                j(this, '_UNIQUE_ID', `${n.id}_${he()}`),
                j(this, '_STATUS');
            }
            componentDidMount() {
              o.instanceManager.add(n.id, this);
            }
            componentWillUnmount() {
              (this._STATUS = 'DESTROY'), o.instanceManager.remove(n.id, this);
            }
            render() {
              const { children: s = [], onlyRenderChild: u, ...l } = this.props;
              let f = s;
              return (
                Qe(s) || (f = [s]),
                !f.filter(Boolean).length &&
                  (n.isContainer() || n.value.componentName === Ge.ROOT_CONTAINER) &&
                  f.push(x.createElement(o.dropPlaceholder, { node: n })),
                u ? f : x.createElement(r, l, ...f)
              );
            }
          }
          return x.forwardRef(function (i, s) {
            return x.createElement(Sy, { node: n, targetComponent: a }, x.createElement(a, { ref: s, ...i }));
          });
        }),
        (this.renderRef = x.createRef()),
        t.dropPlaceholder && (this.dropPlaceholder = t.dropPlaceholder);
    }
    componentDidMount() {
      var t, r;
      (r = (t = this.props).onMount) == null || r.call(t, this);
    }
    getPageModel() {
      var t;
      return (t = this.renderRef.current) == null ? void 0 : t.state.pageModel;
    }
    rerender(t) {
      var r;
      return (r = this.renderRef.current) == null ? void 0 : r.rerender(t);
    }
    getInstancesById(t, r) {
      let n = [...(this.instanceManager.get(t) || [])];
      return r !== void 0 && (n = n.filter((o) => r === (o == null ? void 0 : o._UNIQUE_ID))), n;
    }
    getInstanceByDom(t) {
      const r = Fa(t);
      if (!r) return null;
      const n = La(r);
      return (n == null ? void 0 : n.stateNode) || null;
    }
    getDomsById(t, r) {
      const n = this.getInstancesById(t),
        o = [];
      return (
        n == null ||
          n.forEach((a) => {
            if ((a == null ? void 0 : a._STATUS) === 'DESTROY') return;
            const i = ti.findDOMNode(a);
            if (i && !(i instanceof Text))
              if (r) {
                const s = Array.from(i.querySelectorAll(r));
                o.push(...s);
              } else o.push(i);
          }),
        o
      );
    }
    getDomRectById(t, r) {
      return this.getDomsById(t, r)
        .map((n) => (n == null ? void 0 : n.getBoundingClientRect()))
        .filter(Boolean);
    }
    render() {
      const { props: t, onGetComponent: r } = this,
        { render: n, ...o } = t;
      return (
        n && (n.ref.current = this),
        De(Da, {
          onGetComponent: r,
          ...o,
          processNodeConfigHook: (a, i) => {
            var s, u;
            if (i.nodeType !== 'NODE') return a;
            const { props: l, condition: f } = a;
            let p = { ...l };
            const d = ((s = i.value.configure) == null ? void 0 : s.devState) || {},
              v = (u = i.material) == null ? void 0 : u.value.fixedProps;
            if (v !== void 0) {
              if (Xe(v)) p = { ...p, ...v };
              else if (typeof v == 'function') {
                const _ = v(p);
                p = { ...p, ..._ };
              }
            }
            let b = f;
            return (
              d.condition === !1 && (b = d.condition),
              {
                props: ry(p, d.props || {}),
                condition: b,
              }
            );
          },
          ref: this.renderRef,
        })
      );
    }
  }
  const Fa = (e) => {
      if (!e) return null;
      const t =
        Object.keys(e).find((r) => r.startsWith('__reactInternalInstance$') || r.startsWith('__reactFiber$')) || '';
      return t ? e[t] : Fa(e.parentElement);
    },
    La = (e) => {
      var t;
      return e ? ((t = e == null ? void 0 : e.stateNode) != null && t._DESIGN_BOX ? e : La(e.return)) : null;
    },
    xy = () => {
      const e = x.useRef(null);
      return {
        ref: e,
        rerender: function (...t) {
          e.current && e.current.rerender(...t);
        },
        getInstancesById(t, r) {
          var n;
          return ((n = e.current) == null ? void 0 : n.getInstancesById(t, r)) || [];
        },
        getInstanceByDom(t) {
          var r;
          return ((r = e.current) == null ? void 0 : r.getInstanceByDom(t)) || null;
        },
        getDomsById(t, r) {
          var n;
          return ((n = e.current) == null ? void 0 : n.getDomsById(t, r)) || [];
        },
        getDomRectById(t, r) {
          var n;
          return ((n = e.current) == null ? void 0 : n.getDomRectById(t, r)) || [];
        },
      };
    };
  var Ry =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {},
    Wt = {},
    Ny = {
      get exports() {
        return Wt;
      },
      set exports(e) {
        Wt = e;
      },
    };
  (function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(Ry, function () {
      var r = function () {},
        n = {},
        o = {},
        a = {};
      function i(d, v) {
        d = d.push ? d : [d];
        var b = [],
          _ = d.length,
          E = _,
          O,
          C,
          W,
          D;
        for (
          O = function (B, Z) {
            Z.length && b.push(B), E--, E || v(b);
          };
          _--;

        ) {
          if (((C = d[_]), (W = o[C]), W)) {
            O(C, W);
            continue;
          }
          (D = a[C] = a[C] || []), D.push(O);
        }
      }
      function s(d, v) {
        if (d) {
          var b = a[d];
          if (((o[d] = v), !!b)) for (; b.length; ) b[0](d, v), b.splice(0, 1);
        }
      }
      function u(d, v) {
        d.call && (d = { success: d }), v.length ? (d.error || r)(v) : (d.success || r)(d);
      }
      function l(d, v, b, _) {
        var E = document,
          O = b.async,
          C = (b.numRetries || 0) + 1,
          W = b.before || r,
          D = d.replace(/[\?|#].*$/, ''),
          B = d.replace(/^(css|img|module|nomodule)!/, ''),
          Z,
          Y,
          N;
        if (((_ = _ || 0), /(^css!|\.css$)/.test(D)))
          (N = E.createElement('link')),
            (N.rel = 'stylesheet'),
            (N.href = B),
            (Z = 'hideFocus' in N),
            Z && N.relList && ((Z = 0), (N.rel = 'preload'), (N.as = 'style'));
        else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(D)) (N = E.createElement('img')), (N.src = B);
        else if (
          ((N = E.createElement('script')),
          (N.src = B),
          (N.async = O === void 0 ? !0 : O),
          (Y = 'noModule' in N),
          /^module!/.test(D))
        ) {
          if (!Y) return v(d, 'l');
          N.type = 'module';
        } else if (/^nomodule!/.test(D) && Y) return v(d, 'l');
        (N.onload =
          N.onerror =
          N.onbeforeload =
            function (ae) {
              var le = ae.type[0];
              if (Z)
                try {
                  N.sheet.cssText.length || (le = 'e');
                } catch (St) {
                  St.code != 18 && (le = 'e');
                }
              if (le == 'e') {
                if (((_ += 1), _ < C)) return l(d, v, b, _);
              } else if (N.rel == 'preload' && N.as == 'style') return (N.rel = 'stylesheet');
              v(d, le, ae.defaultPrevented);
            }),
          W(d, N) !== !1 && E.head.appendChild(N);
      }
      function f(d, v, b) {
        d = d.push ? d : [d];
        var _ = d.length,
          E = _,
          O = [],
          C,
          W;
        for (
          C = function (D, B, Z) {
            if ((B == 'e' && O.push(D), B == 'b'))
              if (Z) O.push(D);
              else return;
            _--, _ || v(O);
          },
            W = 0;
          W < E;
          W++
        )
          l(d[W], C, b);
      }
      function p(d, v, b) {
        var _, E;
        if ((v && v.trim && (_ = v), (E = (_ ? b : v) || {}), _)) {
          if (_ in n) throw 'LoadJS';
          n[_] = !0;
        }
        function O(C, W) {
          f(
            d,
            function (D) {
              u(E, D), C && u({ success: C, error: W }, D), s(_, D);
            },
            E
          );
        }
        if (E.returnPromise) return new Promise(O);
        O();
      }
      return (
        (p.ready = function (d, v) {
          return (
            i(d, function (b) {
              u(v, b);
            }),
            p
          );
        }),
        (p.done = function (d) {
          s(d, []);
        }),
        (p.reset = function () {
          (n = {}), (o = {}), (a = {});
        }),
        (p.isDefined = function (d) {
          return d in n;
        }),
        p
      );
    });
  })(Ny);
  class Ty {
    constructor(t, r) {
      j(this, 'assets'),
        j(this, 'loadStatus'),
        j(this, 'win', window),
        j(this, '_onSuccessList', []),
        j(this, '_onErrorList', []),
        (this.assets = t),
        (this.loadStatus = 'INIT'),
        r != null && r.window && (this.win = r.window);
    }
    load() {
      const t = this.assets || [],
        r = [];
      for (let n = 0; n < t.length; n++) {
        const o = t[n];
        o.id || (o.id = he()), r.push(o.id);
        const a = o.resources.map((i) => i.src);
        Wt(a, o.id, {
          async: !1,
          before: (i, s) => (this.win.document.body.appendChild(s), !1),
        });
      }
      if (t.length === 0) {
        this._onSuccessList.forEach((n) => n());
        return;
      }
      return new Promise((n, o) => {
        Wt.ready(r, {
          success: () => {
            this._onSuccessList.forEach((a) => a()), n('');
          },
          error: (a) => {
            this._onErrorList.forEach((i) => i(a)), o(a);
          },
        });
      });
    }
    onSuccess(t) {
      return this._onSuccessList.push(t), this;
    }
    onError(t) {
      return this._onErrorList.push(t), this;
    }
  }
  return Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        AssetLoader: Ty,
        ComponentInstanceManager: ka,
        DefaultDropPlaceholder: Ia,
        DefineReactAdapter: Pa,
        DesignRender: Oy,
        ReactAdapter: ly,
        Render: Da,
        canAcceptsRef: Ta,
        collectVariable: oy,
        compWrapper: Aa,
        convertCodeStringToFunction: Ma,
        flatObject: ay,
        formatSourceStylePropertyName: an,
        getAdapter: jn,
        getCSSTextValue: sn,
        getObjFromArrayMap: on,
        isClass: ny,
        runExpression: $e,
        shouldConstruct: Na,
        useDesignRender: xy,
        useRender: Cy,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
});
// # sourceMappingURL=render.umd.js.map
