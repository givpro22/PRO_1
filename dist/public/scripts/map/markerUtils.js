"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMarker = exports.addInfoWindowToMarker = void 0;
var _imageSlider = require("./imageSlider.js");
var markerIdCounter = 0; // 고유 마커 ID를 위한 카운터

var createMarker = exports.createMarker = function createMarker(position, map) {
  var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  markerIdCounter += 1; // 마커마다 고유 번호 생성
  var marker = new naver.maps.Marker({
    position: position,
    map: map,
    icon: icon,
    id: markerIdCounter // 마커 고유 번호 부여
  });
  return marker;
};
var createInfoWindowContent = function createInfoWindowContent(images, markerId) {
  var container = document.createElement('div');
  container.className = 'info-window';

  // 이미지 슬라이더 추가
  var slider = (0, _imageSlider.createImageSlider)(images);
  container.appendChild(slider);

  // 별점 UI 추가
  var ratingContainer = document.createElement('div');
  ratingContainer.className = 'rating-container';
  var ratingInput = document.createElement('input');
  ratingInput.type = 'hidden';
  ratingInput.name = 'rating';
  ratingInput.value = '0'; // 기본 별점 값
  var _loop = function _loop(i) {
    var star = document.createElement('span');
    star.className = 'star';
    star.textContent = '★';
    star.dataset.value = i;

    // 별점 클릭 이벤트
    star.addEventListener('click', function () {
      ratingInput.value = i; // 클릭한 별점 값 저장
      Array.from(ratingContainer.children).forEach(function (s) {
        s.classList.toggle('selected', s.dataset.value <= i); // 클릭한 별점 이하에 대해 선택된 스타일 적용
      });
    });
    ratingContainer.appendChild(star);
  };
  for (var i = 1; i <= 5; i++) {
    _loop(i);
  }
  container.appendChild(ratingContainer);

  // 업로드 폼 생성
  var form = document.createElement('form');
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
  form.appendChild(ratingInput); // 폼에 숨겨진 별점 값 추가

  // 숨겨진 마커 ID 필드 추가
  var markerInput = document.createElement('input');
  markerInput.type = 'hidden';
  markerInput.name = 'marker';
  markerInput.value = markerId; // 마커 ID 값 추가
  form.appendChild(markerInput);

  // 파일 업로드 input
  var inputFile = document.createElement('input');
  inputFile.type = 'file';
  inputFile.id = 'image';
  inputFile.name = 'image';
  inputFile.accept = 'image/*';
  inputFile.required = true;

  // 미리보기 컨테이너
  var previewContainer = document.createElement('div');
  previewContainer.className = 'preview-container';
  var previewImage = document.createElement('img');
  previewImage.style.display = 'none'; // 기본적으로 숨김
  previewContainer.appendChild(previewImage);

  // 파일 변경 시 미리보기 업데이트
  inputFile.addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (event) {
        previewImage.src = event.target.result;
        previewImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.style.display = 'none';
    }
  });
  form.appendChild(previewContainer);
  form.appendChild(inputFile);

  // 업로드 버튼
  var submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Upload Image';
  form.appendChild(submitButton);
  container.appendChild(form);
  return container;
};
var addInfoWindowToMarker = exports.addInfoWindowToMarker = function addInfoWindowToMarker(marker, map, images) {
  var infoWindow = new naver.maps.InfoWindow({
    content: createInfoWindowContent(images, marker.id)
  });
  var isOpen = false;
  naver.maps.Event.addListener(marker, 'click', function () {
    if (isOpen) {
      infoWindow.close();
    } else {
      infoWindow.open(map, marker);
    }
    isOpen = !isOpen;
  });
};