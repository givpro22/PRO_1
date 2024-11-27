import { map } from './map.js';
import { createMarker, addInfoWindowToMarker } from './markerUtils.js';

const imagesByMarker = JSON.parse(document.getElementById('map').getAttribute('data-images-by-marker')) || {};

// 마커 생성 및 InfoWindow 추가
const markers = [
    createMarker(new naver.maps.LatLng(35.174444, 126.908611), map),
    createMarker(new naver.maps.LatLng(35.173444, 126.908511), map),
    createMarker(new naver.maps.LatLng(35.175000, 126.909000), map),
];

markers.forEach((marker) => {
    // 마커 ID에 해당하는 이미지 배열 가져오기
    const markerImages = imagesByMarker[marker.id] || [];
    addInfoWindowToMarker(marker, map, markerImages);
});