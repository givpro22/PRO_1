"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodSurvey = exports.CoffeeSurvey = exports.CarShareSurvey = exports.BarSurvey = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var surveySchema = new _mongoose["default"].Schema({
  name: String,
  emailAdress: String,
  phoneNumber: String,
  Suggestions: String,
  date: {
    type: Date,
    "default": Date.now
  }
});
var CoffeeSurvey = exports.CoffeeSurvey = _mongoose["default"].model("coffeesurvey", surveySchema);
var FoodSurvey = exports.FoodSurvey = _mongoose["default"].model("FoodSurvey", surveySchema);
var BarSurvey = exports.BarSurvey = _mongoose["default"].model("BarSurvey", surveySchema);
var CarShareSurvey = exports.CarShareSurvey = _mongoose["default"].model("CarShareSurvey", surveySchema);