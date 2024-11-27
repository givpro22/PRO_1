"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = void 0;
var mapOptions = {
  center: new naver.maps.LatLng(35.174444, 126.908611),
  zoom: 15,
  logoControl: false
};
var map = exports.map = new naver.maps.Map('map', mapOptions);