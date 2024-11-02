"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var surveySchema = new _mongoose["default"].Schema({
  name: String,
  emailAdress: String,
  phoneNumber: String,
  Suggestions: String,
  date: Date
});
var Survey = _mongoose["default"].model("survey", surveySchema);
var _default = exports["default"] = Survey;