"use strict";

var feedbackToggleBtn = document.getElementById('feedback-toggle-btn');
var feedbackFormContainer = document.getElementById('feedback-form-container');

// 버튼 클릭 시 피드백 창 열기/닫기
feedbackToggleBtn.addEventListener('click', function () {
  feedbackFormContainer.classList.toggle('open');
});
var mapOptions = {
  center: new naver.maps.LatLng(35.174444, 126.908611),
  zoom: 15,
  logoControl: false
};
var map = new naver.maps.Map('map', mapOptions);
var mapElement = document.getElementById('map');
var images = JSON.parse(mapElement.getAttribute('data-images')) || [];
var createMarker = function createMarker(position, icon) {
  return new naver.maps.Marker({
    position: position,
    map: map,
    icon: icon
  });
};
var createInfoWindowContent = function createInfoWindowContent() {
  var container = document.createElement('div');
  container.className = 'info-window';

  // 이미지 슬라이더 생성
  var sliderContainer = document.createElement('div');
  sliderContainer.className = 'image-slider';
  var currentIndex = 0;
  var title = document.createElement('div');
  title.className = 'image-info';

  // 사용자 정보
  var userInfo = document.createElement('p');
  userInfo.className = 'user-info';
  userInfo.innerHTML = "<strong>Uploaded by:</strong> ".concat(images.length > 0 ? images[currentIndex].createUser : "Unknown");

  // 국가 정보
  var countryInfo = document.createElement('p');
  countryInfo.className = 'country-info';
  countryInfo.innerHTML = "<strong>Country:</strong> ".concat(images.length > 0 ? images[currentIndex].createuserCountry : "Unknown");

  // 업로드 날짜
  var dateInfo = document.createElement('p');
  dateInfo.className = 'date-info';
  dateInfo.innerHTML = "<strong>Uploaded on:</strong> ".concat(images.length > 0 ? new Date(images[currentIndex].createdAt).toLocaleDateString() : "Unknown");
  title.appendChild(userInfo);
  title.appendChild(countryInfo);
  title.appendChild(dateInfo);
  container.appendChild(title);

  // 별점 표시 추가
  var ratingDisplay = document.createElement('div');
  ratingDisplay.className = 'rating-display';
  container.appendChild(ratingDisplay);
  var updateSlider = function updateSlider() {
    var _images$currentIndex;
    var mainImage = sliderContainer.querySelector('.main-image img');
    var leftImage = sliderContainer.querySelector('.left-image img');
    var rightImage = sliderContainer.querySelector('.right-image img');
    if (images.length === 0) {
      // 이미지가 없을 때 기본값 설정
      mainImage.src = '/images/club_logo.png';
      leftImage.src = '/images/club_logo.png';
      rightImage.src = '/images/club_logo.png';
      userInfo.innerHTML = "<strong>Uploaded by:</strong> Unknown";
      countryInfo.innerHTML = "<strong>Country:</strong> Unknown";
      dateInfo.innerHTML = "<strong>Uploaded on:</strong> Unknown";
      ratingDisplay.innerHTML = "No rating yet";
      return;
    }

    // 이미지가 있는 경우 업데이트
    mainImage.src = images[currentIndex].fileUrl || '/images/club_logo.png';
    leftImage.src = images[(currentIndex - 1 + images.length) % images.length].fileUrl || '/images/club_logo.png';
    rightImage.src = images[(currentIndex + 1) % images.length].fileUrl || '/images/club_logo.png';

    // 정보 업데이트
    userInfo.innerHTML = "<strong>Uploaded by:</strong> ".concat(images[currentIndex].createUser || "Unknown");
    countryInfo.innerHTML = "<strong>Country:</strong> ".concat(images[currentIndex].createuserCountry || "Unknown");
    dateInfo.innerHTML = "<strong>Uploaded on:</strong> ".concat(images[currentIndex].createdAt ? new Date(images[currentIndex].createdAt).toLocaleDateString() : "Unknown");

    // 별점 업데이트
    var rating = ((_images$currentIndex = images[currentIndex]) === null || _images$currentIndex === void 0 || (_images$currentIndex = _images$currentIndex.meta) === null || _images$currentIndex === void 0 ? void 0 : _images$currentIndex.rating) || 0;
    ratingDisplay.innerHTML = "⭐".repeat(rating) || "No rating yet";
  };
  var leftDiv = document.createElement('div');
  leftDiv.className = 'left-image';
  var leftImg = document.createElement('img');
  leftDiv.appendChild(leftImg);
  sliderContainer.appendChild(leftDiv);
  var mainDiv = document.createElement('div');
  mainDiv.className = 'main-image';
  var mainImg = document.createElement('img');
  mainDiv.appendChild(mainImg);
  sliderContainer.appendChild(mainDiv);
  var rightDiv = document.createElement('div');
  rightDiv.className = 'right-image';
  var rightImg = document.createElement('img');
  rightDiv.appendChild(rightImg);
  sliderContainer.appendChild(rightDiv);
  leftDiv.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });
  rightDiv.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });
  updateSlider();
  container.appendChild(sliderContainer);

  // 별점 UI
  var ratingContainer = document.createElement('div');
  ratingContainer.className = 'rating-container';
  var ratingInput = document.createElement('input');
  ratingInput.type = 'hidden';
  ratingInput.name = 'rating';
  ratingInput.value = '0';
  var _loop = function _loop(i) {
    var star = document.createElement('span');
    star.className = 'star';
    star.textContent = '★';
    star.dataset.value = i;
    star.addEventListener('click', function () {
      ratingInput.value = i;
      Array.from(ratingContainer.children).forEach(function (s) {
        s.classList.toggle('selected', s.dataset.value <= i);
      });
    });
    ratingContainer.appendChild(star);
  };
  for (var i = 1; i <= 5; i++) {
    _loop(i);
  }
  container.appendChild(ratingContainer);

  // 이미지 업로드
  var form = document.createElement('form');
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
  form.appendChild(ratingInput);
  var inputFile = document.createElement('input');
  inputFile.type = 'file';
  inputFile.id = "image", inputFile.name = "image";
  inputFile.accept = 'image/*';
  inputFile.required = true;
  var previewContainer = document.createElement('div');
  previewContainer.className = 'preview-container';
  var previewImage = document.createElement('img');
  previewContainer.appendChild(previewImage);
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
  var submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Upload Image';
  form.appendChild(submitButton);
  container.appendChild(form);
  return container;
};
var addInfoWindowToMarker = function addInfoWindowToMarker(marker) {
  var infoWindow = new naver.maps.InfoWindow({
    content: createInfoWindowContent()
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
var mainMarker = createMarker(new naver.maps.LatLng(35.174444, 126.908611));
var mainMarker_1 = createMarker(new naver.maps.LatLng(35.173444, 126.908511)); // 두 번째 마커 추가

addInfoWindowToMarker(mainMarker); // 첫 번째 마커에 InfoWindow 연결
addInfoWindowToMarker(mainMarker_1); // 두 번째 마커에 InfoWindow 연결