"use strict";

var _map = require("./map.js");
var _markerUtils = require("./markerUtils.js");
var imagesByMarker = JSON.parse(document.getElementById('map').getAttribute('data-images-by-marker')) || {};

// 마커 생성 및 InfoWindow 추가
var markers = [
  (0, _markerUtils.createMarker)(new naver.maps.LatLng(35.174444, 126.908611), _map.map), 
  (0, _markerUtils.createMarker)(new naver.maps.LatLng(35.173444, 126.908511), _map.map), 
  (0, _markerUtils.createMarker)(new naver.maps.LatLng(35.175000, 126.909000), _map.map)];
markers.forEach(function (marker) {
  // 마커 ID에 해당하는 이미지 배열 가져오기
  var markerImages = imagesByMarker[marker.id] || [];
  (0, _markerUtils.addInfoWindowToMarker)(marker, _map.map, markerImages);
});