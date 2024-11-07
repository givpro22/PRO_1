"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _surveyController = require("../controllers/surveyController");
var _controller = require("../controllers/controller");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var rootRouter = _express["default"].Router();
rootRouter.get("/", _controller.home);
rootRouter.get("/coffee", _controller.coffee);
rootRouter.post("/coffee", _surveyController.postCoffee);
rootRouter.get("/food", _controller.Food);
rootRouter.post("/food", _surveyController.postFood);
rootRouter.get("/bar", _controller.Bar);
rootRouter.post("/bar", _surveyController.postBar);
rootRouter.get("/carshare", _controller.CarShare);
rootRouter.post("/carshare", _surveyController.postCarShare);
rootRouter.get("/CNU_report", _surveyController.Report);
rootRouter.get("/random", _surveyController.Random);
var _default = exports["default"] = rootRouter;