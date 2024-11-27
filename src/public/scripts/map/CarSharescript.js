import { map } from './map.js';
import { createMarker, addInfoWindowToMarker } from './markerUtils.js';

const feedbackToggleBtn = document.getElementById('feedback-toggle-btn');
const feedbackFormContainer = document.getElementById('feedback-form-container');

// 버튼 클릭 시 피드백 창 열기/닫기
feedbackToggleBtn.addEventListener('click', () => {
    feedbackFormContainer.classList.toggle('open');
});


const images = JSON.parse(document.getElementById('map').getAttribute('data-images')) || [];

const mainMarker = createMarker(new naver.maps.LatLng(35.174444, 126.908611), map);
addInfoWindowToMarker(mainMarker, map, images);

const secondMarker = createMarker(new naver.maps.LatLng(35.173444, 126.908511), map);
addInfoWindowToMarker(secondMarker, map, images);
