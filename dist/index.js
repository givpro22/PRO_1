"use strict";

var _express = _interopRequireDefault(require("express"));
var _rootRouter = _interopRequireDefault(require("./routers/rootRouter"));
var _path = _interopRequireDefault(require("path"));
require("./db");
require("./models/Survey");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var PORT = 3000;

// 현재 디렉토리 경로
var _dirname = _path["default"].resolve();
app.set('view engine', 'ejs'); //set up
app.set('views', process.cwd() + "/src/views");

// 정적 파일 경로 설정
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/images", _express["default"]["static"](_path["default"].join(_dirname, "images")));
app.use(_express["default"]["static"](_path["default"].join(_dirname, "views")));

// 라우터 설정
app.use("/", _rootRouter["default"]);
var handleListening = function handleListening() {
  return console.log("\u2705 \uC11C\uBC84 \uC5F0\uACB0 \uC644\uB8CC http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
app.listen(PORT, handleListening);