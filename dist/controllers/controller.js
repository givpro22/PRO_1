"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postlogin = exports.postjoin = exports.postUpload = exports.postEdit = exports.home = exports.getlogin = exports.getjoin = exports.getEdit = exports.coffee = exports.Food = exports.CarShare = exports.Bar = void 0;
var _User = _interopRequireDefault(require("../models/User"));
var _Image = _interopRequireDefault(require("../models/Image"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var home = exports.home = function home(req, res) {
  return res.render("index");
};
var coffee = exports.coffee = function coffee(req, res) {
  return res.render("coffee");
};
var Food = exports.Food = function Food(req, res) {
  return res.render("Food");
};
var Bar = exports.Bar = function Bar(req, res) {
  return res.render("Bar");
};
var getEdit = exports.getEdit = function getEdit(req, res) {
  return res.render("edit-profile");
};
var CarShare = exports.CarShare = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var images, imagesByMarker;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Image["default"].find({}).sort({
            createdAt: "desc"
          });
        case 2:
          _context.t0 = _context.sent;
          if (_context.t0) {
            _context.next = 5;
            break;
          }
          _context.t0 = [];
        case 5:
          images = _context.t0;
          // 이미지를 마커 ID별로 그룹화
          imagesByMarker = images.reduce(function (acc, image) {
            var markerId = image.marker || 0; // 마커 ID가 없는 경우 기본값 0
            if (!acc[markerId]) acc[markerId] = [];
            acc[markerId].push(image);
            return acc;
          }, {});
          return _context.abrupt("return", res.render("CarShare", {
            imagesByMarker: JSON.stringify(imagesByMarker)
          }));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function CarShare(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var postUpload = exports.postUpload = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var file, _req$body, rating, marker;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          file = req.file, _req$body = req.body, rating = _req$body.rating, marker = _req$body.marker;
          _context2.prev = 1;
          _context2.next = 4;
          return _Image["default"].create({
            fileUrl: file ? file.location : null,
            createUser: req.session.user.username,
            createuserCountry: req.session.user.location,
            marker: Number(marker) || 0,
            // 전달받은 마커 ID 저장
            meta: {
              rating: Number(rating) || 0 // 별점 없으면 0으로 처리
            }
          });
        case 4:
          return _context2.abrupt("return", res.redirect("/carshare"));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(400).render("CarShare", {
            errorMessage: "Failed to upload image."
          }));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return function postUpload(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var postEdit = exports.postEdit = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$session$user, _id, avatarUrl, _req$body2, name, email, username, location, file, updatedUser;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$session$user = req.session.user, _id = _req$session$user._id, avatarUrl = _req$session$user.avatarUrl, _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, username = _req$body2.username, location = _req$body2.location, file = req.file;
          _context3.next = 3;
          return _User["default"].findByIdAndUpdate(_id, {
            avatarUrl: file ? file.location : avatarUrl,
            name: name,
            email: email,
            username: username,
            location: location
          }, {
            "new": true
          });
        case 3:
          updatedUser = _context3.sent;
          req.session.user = updatedUser;
          return _context3.abrupt("return", res.redirect("/edit"));
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function postEdit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getjoin = exports.getjoin = function getjoin(req, res) {
  return res.render("join", {
    errorMessage: null
  });
};
var postjoin = exports.postjoin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body3, name, email, username, password, password2, location, usernameExists, emailExists;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body3 = req.body, name = _req$body3.name, email = _req$body3.email, username = _req$body3.username, password = _req$body3.password, password2 = _req$body3.password2, location = _req$body3.location; // 각각 중복 여부 확인
          _context4.next = 3;
          return _User["default"].exists({
            username: username
          });
        case 3:
          usernameExists = _context4.sent;
          _context4.next = 6;
          return _User["default"].exists({
            email: email
          });
        case 6:
          emailExists = _context4.sent;
          if (!(password !== password2)) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(400).render("join", {
            errorMessage: "비번이 다름."
          }));
        case 9:
          if (!(usernameExists && emailExists)) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return", res.status(400).render("join", {
            errorMessage: "이미 있는 아이디와 이메일입니다."
          }));
        case 11:
          if (!usernameExists) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(400).render("join", {
            errorMessage: "이미 있는 아이디입니다."
          }));
        case 13:
          if (!emailExists) {
            _context4.next = 15;
            break;
          }
          return _context4.abrupt("return", res.status(400).render("join", {
            errorMessage: "이미 있는 이메일입니다."
          }));
        case 15:
          _context4.prev = 15;
          _context4.next = 18;
          return _User["default"].create({
            email: email,
            username: username,
            password: password,
            name: name,
            location: location
          });
        case 18:
          return _context4.abrupt("return", res.redirect("/"));
        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4["catch"](15);
          return _context4.abrupt("return", res.status(400).render("join", {
            errorMessage: _context4.t0._message
          }));
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[15, 21]]);
  }));
  return function postjoin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getlogin = exports.getlogin = function getlogin(req, res) {
  return res.render("login", {
    errorMessage: null
  });
};
var postlogin = exports.postlogin = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body4, username, password, user, ok;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body4 = req.body, username = _req$body4.username, password = _req$body4.password;
          _context5.next = 3;
          return _User["default"].findOne({
            username: username
          });
        case 3:
          user = _context5.sent;
          if (user) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).render("login", {
            errorMessage: "Username not found."
          }));
        case 6:
          _context5.next = 8;
          return _bcrypt["default"].compare(password, user.password);
        case 8:
          ok = _context5.sent;
          if (ok) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(400).render("login", {
            errorMessage: "Incorrect password."
          }));
        case 11:
          req.session.loggedIn = true;
          req.session.user = user;
          console.log("로그인 완료!!");
          return _context5.abrupt("return", res.redirect("/"));
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function postlogin(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();