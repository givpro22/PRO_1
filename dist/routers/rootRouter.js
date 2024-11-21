"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _surveyController = require("../controllers/surveyController");
var _controller = require("../controllers/controller");
var _etcController = require("../controllers/etcController");
var _middlewares = require("../middlewares");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var rootRouter = _express["default"].Router();
rootRouter.get("/", _controller.home);
rootRouter.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.error("로그아웃 중 오류 발생:", err);
      return res.status(500).send("로그아웃에 실패했습니다.");
    }
    res.redirect('/'); // 로그아웃 후 홈 페이지로 리다이렉트
  });
});
rootRouter.get("/join", _controller.getjoin);
rootRouter.post("/join", _controller.postjoin);
rootRouter.get("/edit", _controller.getEdit);
rootRouter.post("/edit", _middlewares.avataruploadFiles.single("avatar"), _controller.postEdit);
rootRouter.get("/login", _controller.getlogin);
rootRouter.post("/login", _controller.postlogin);
rootRouter.get("/coffee", _controller.coffee);
rootRouter.post("/coffee", _surveyController.postCoffee);
rootRouter.get("/food", _controller.Food);
rootRouter.post("/food", _surveyController.postFood);
rootRouter.get("/bar", _controller.Bar);
rootRouter.post("/bar", _surveyController.postBar);
rootRouter.get("/carshare", _etcController.protectorMiddleware, _controller.CarShare);
rootRouter.post("/carshare", _etcController.protectorMiddleware, _middlewares.imageuploadFiles.single("image"), _controller.postUpload);
rootRouter.get("/CNU_report", _surveyController.Report);
rootRouter.get("/random", _surveyController.Random);
var _default = exports["default"] = rootRouter;