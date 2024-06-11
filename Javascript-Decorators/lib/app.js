var _initProto, _initClass, _classDecs, _dec, _initProto2, _initClass2, _classDecs2, _dec2;
function _applyDecs(e, t, r, n, o, a) { function i(e, t, r) { return function (n, o) { return r && r(n), e[t].call(n, o); }; } function c(e, t) { for (var r = 0; r < e.length; r++) e[r].call(t); return t; } function s(e, t, r, n) { if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined")); return e; } function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) { function m(e) { if (!h(e)) throw new TypeError("Attempted to access private element on non-instance"); } var y, v = t[0], g = t[3], b = !u; if (!b) { r || Array.isArray(v) || (v = [v]); var w = {}, S = [], A = 3 === o ? "get" : 4 === o || d ? "set" : "value"; f ? (p || d ? w = { get: _setFunctionName(function () { return g(this); }, n, "get"), set: function (e) { t[4](this, e); } } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n)); } for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) { var D = v[j], E = r ? v[j - 1] : void 0, I = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o], name: n, metadata: a, addInitializer: function (e, t) { if (e.v) throw new Error("attempted to call addInitializer after decoration was finished"); s(t, "An initializer", "be", !0), c.push(t); }.bind(null, I) }; try { if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else { var k, F; O.static = l, O.private = f, f ? 2 === o ? k = function (e) { return m(e), w.value; } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function (e) { return e[n]; }, (o < 2 || 4 === o) && (F = function (e, t) { e[n] = t; })); var N = O.access = { has: f ? h.bind() : function (e) { return n in e; } }; if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? { get: w.get, set: w.set } : w[A], O), d) { if ("object" == typeof P && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P); } } finally { I.v = !0; } } return (p || d) && u.push(function (e, t) { for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t); return t; }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P; } function u(e, t) { return Object.defineProperty(e, Symbol.metadata || Symbol.for("Symbol.metadata"), { configurable: !0, enumerable: !0, value: t }); } if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol.for("Symbol.metadata")]; var f = Object.create(null == l ? null : l), p = function (e, t, r, n) { var o, a, i = [], s = function (t) { return _checkInRHS(t) === e; }, u = new Map(); function l(e) { e && i.push(c.bind(null, e)); } for (var f = 0; f < t.length; f++) { var p = t[f]; if (Array.isArray(p)) { var d = p[1], h = p[2], m = p.length > 3, y = 16 & d, v = !!(8 & d), g = 0 == (d &= 7), b = h + "/" + v; if (!g && !m) { var w = u.get(b); if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h); u.set(b, !(d > 2) || d); } applyDec(v ? e : e.prototype, p, y, m ? "#" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r); } } return l(o), l(a), i; }(e, t, o, f); return r.length || u(e, f), { e: p, get c() { var t = []; return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)]; } }; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _setFunctionName(e, t, n) { "symbol" == typeof t && (t = (t = t.description) ? "[" + t + "]" : ""); try { Object.defineProperty(e, "name", { configurable: !0, value: n ? n + " " + t : t }); } catch (e) {} return e; }
function _checkInRHS(e) { if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null")); return e; }
// // function sleep(ms) {
// //   return new Promise((resolve) => setTimeout(resolve, ms));
// // }

// // // Decorator function
// // function retry(retryOptions) {
// //   return function (target, context) {
// //     console.log("Applying retry decorator");

// //     const resultMethod = async function (...args) {
// //       console.log('@retry - Running the retry decorator');
// //       let lastError;

// //       for (let attemptNum = 1; attemptNum <= retryOptions.maxRetryAttempts; attemptNum++) {
// //         try {
// //           console.log(`@retry - Attempt #${attemptNum}`);
// //           return await target.apply(this, args);

// //         }
// //         catch (err) {
// //           lastError = err;
// //           if (attemptNum < retryOptions.maxRetryAttempts) {
// //             console.log('@retry - Retrying..');
// //             await sleep(retryOptions.delay);
// //           }
// //         }
// //       }

// //       throw lastError;
// //     }
// //     return resultMethod;
// //   }
// // }

// // function log(target, context) {
// //   const resultMethod = async function(...args) {
// //     console.log(`@log - Running the ${context.name} method`);
// //     try {
// //       return await target.apply(this, args);
// //     }
// //     finally {
// //       console.log(`@log - Method ${context.name} finished`);
// //     }
// //   }
// //   return resultMethod;
// // }

// // class Metric {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   time() {
// //     const metricThis = this;
// //     return function (target, context) {
// //       const resultMethod = async function(...args) {
// //         const start = Date.now();

// //         try {
// //           return await target.apply(this, args);
// //         }
// //         finally {
// //           const end = Date.now();
// //           const timeMs = end - start;

// //           console.log(`@time - Metric ${metricThis.name} value ${timeMs} to execute`);
// //         }
// //       }

// //       return resultMethod;
// //     }
// //   }
// // }

// // function createMetric(name) {
// //   return new Metric(name);
// // }

// // function logAndRetry(target, context) {
// //   const retryDecorator = retry({delay: 2000, maxRetryAttempts: 3});
// //   const targetWithRetry = retryDecorator(target, context);
// //   return log(targetWithRetry, context); 
// // }
// // const weatherTiming = createMetric('weather.timing');

// // class WeatherAPI {
// //   apiVersion = 'v1'

// //   @logAndRetry
// //   @weatherTiming.time()
// //   async getWeather(city) {
// //     console.log(`Getting weather for ${city}`)

// //     if (Math.random() < 0.75) throw new Error('Something went wrong')
// //     return {
// //       apiVersion: this.apiVersion,
// //       temperature: 20,
// //       humidity: 80,
// //       city: city,
// //     }
// //   }
// // }

// // async function main() {
// //   const weatherAPI = new WeatherAPI()
// //   console.log(await weatherAPI.getWeather('London'))
// //   console.log(await weatherAPI.getWeather('Dublin'))
// // }

// // main().catch(console.error)

// // -----------------------------------------------------------------------------------------------------

// import express from 'express';

// const app = express();

// const port = 3000;

// app.get('/api/forecast', (req, res) => {
//   res.json({
//     apiVersion: 'v1',
//     temperature: 28,
//     humidity: 80,
//     city: 'Kanpur'
//   });
// });

// app.get('/api/cities', (req, res) => {
//   res.json({
//     cities: ['Kanpur', 'Lucknow']
//   });
// });

// app.listen(port, function () {
//   console.log(`Server listening on port ${port}`);
// })

// ----------------------------------------------------------------------------------------------------------------

import { Controller, Get, startApp } from './framework.js';
_classDecs = [Controller('/api')];
_dec = Get('/forecast');
let _WeatherController;
class WeatherController {
  static {
    ({
      e: [_initProto],
      c: [_WeatherController, _initClass]
    } = _applyDecs(this, [[_dec, 2, "getForecast"]], _classDecs));
  }
  constructor() {
    _initProto(this);
  }
  getForecast() {
    return {
      apiVersion: 'v1',
      temperature: 28,
      humidity: 80,
      city: 'Kanpur'
    };
  }
  static {
    _initClass();
  }
}
_classDecs2 = [Controller('/api')];
_dec2 = Get('/cities');
let _CitiesController;
class CitiesController {
  static {
    ({
      e: [_initProto2],
      c: [_CitiesController, _initClass2]
    } = _applyDecs(this, [[_dec2, 2, "getCities"]], _classDecs2));
  }
  constructor() {
    _initProto2(this);
  }
  getCities() {
    return {
      cities: ['Kanpur, Lucknow']
    };
  }
  static {
    _initClass2();
  }
}
startApp();