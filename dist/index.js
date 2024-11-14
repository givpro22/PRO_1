"use strict";

var _express = _interopRequireDefault(require("express"));
var _rootRouter = _interopRequireDefault(require("./routers/rootRouter"));
var _path = _interopRequireDefault(require("path"));
require("./db");
require("./models/Survey");
require("./models/User");
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var PORT = 3000;

// 현재 디렉토리 경로
var _dirname = _path["default"].resolve();
app.set('view engine', 'ejs'); //set up
app.set('views', process.cwd() + "/src/views");

// 정적 파일 경로 설정
app.use(_express["default"]["static"](_path["default"].join(_dirname, "src", "public")));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: _connectMongo["default"].create({
    mongoUrl: process.env.DB_URL
  })
}));
app.use(function (req, res, next) {
  res.locals.loggedIn = req.session.loggedIn || false;
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
});

// 라우터 설정
app.use("/", _rootRouter["default"]);
var handleListening = function handleListening() {
  return console.log("\u2705 \uC11C\uBC84 \uC5F0\uACB0 \uC644\uB8CC http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
app.listen(PORT, handleListening);