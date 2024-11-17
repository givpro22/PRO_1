"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protectorMiddleware = void 0;
var protectorMiddleware = exports.protectorMiddleware = function protectorMiddleware(req, res, next) {
  if (req.session.loggedIn) {
    return next(); // 로그인 상태면 요청 계속 진행
  } else {
    return res.status(403).render("notlogin"); // 로그인 안 되어 있으면 "notlogin.ejs" 렌더링
  }
};