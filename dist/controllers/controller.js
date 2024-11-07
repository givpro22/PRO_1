"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = exports.coffee = exports.Food = exports.CarShare = exports.Bar = void 0;
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
var CarShare = exports.CarShare = function CarShare(req, res) {
  return res.render("CarShare");
};