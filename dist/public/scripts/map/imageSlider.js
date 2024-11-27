"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImageSlider = void 0;
var createImageSlider = exports.createImageSlider = function createImageSlider(images) {
  var container = document.createElement('div');
  container.className = 'image-slider';
  var currentIndex = 0;
  var title = document.createElement('div');
  title.className = 'image-info';
  var userInfo = document.createElement('p');
  var countryInfo = document.createElement('p');
  var dateInfo = document.createElement('p');
  title.append(userInfo, countryInfo, dateInfo);
  container.appendChild(title);
  var ratingDisplay = document.createElement('div');
  ratingDisplay.className = 'rating-display';
  container.appendChild(ratingDisplay);
  var updateSlider = function updateSlider() {
    if (images.length > 0) {
      var _images$currentIndex$;
      userInfo.innerHTML = "<strong>Uploaded by:</strong> ".concat(images[currentIndex].createUser || "Unknown");
      countryInfo.innerHTML = "<strong>Country:</strong> ".concat(images[currentIndex].createuserCountry || "Unknown");
      dateInfo.innerHTML = "<strong>Uploaded on:</strong> ".concat(new Date(images[currentIndex].createdAt).toLocaleDateString() || "Unknown");
      ratingDisplay.innerHTML = "⭐".repeat(((_images$currentIndex$ = images[currentIndex].meta) === null || _images$currentIndex$ === void 0 ? void 0 : _images$currentIndex$.rating) || 0) || "No rating yet";
    } else {
      userInfo.innerHTML = "<strong>Uploaded by:</strong> Unknown";
      countryInfo.innerHTML = "<strong>Country:</strong> Unknown";
      dateInfo.innerHTML = "<strong>Uploaded on:</strong> Unknown";
      ratingDisplay.innerHTML = "No rating yet";
    }
  };
  var leftDiv = document.createElement('div');
  leftDiv.className = 'left-image';
  var mainDiv = document.createElement('div');
  mainDiv.className = 'main-image';
  var rightDiv = document.createElement('div');
  rightDiv.className = 'right-image';
  var leftImg = document.createElement('img');
  var mainImg = document.createElement('img');
  var rightImg = document.createElement('img');
  leftDiv.appendChild(leftImg);
  mainDiv.appendChild(mainImg);
  rightDiv.appendChild(rightImg);
  container.append(leftDiv, mainDiv, rightDiv);
  var updateImages = function updateImages() {
    if (images.length > 0) {
      mainImg.src = images[currentIndex].fileUrl || '/images/club_logo.png';
      leftImg.src = images[(currentIndex - 1 + images.length) % images.length].fileUrl || '/images/club_logo.png';
      rightImg.src = images[(currentIndex + 1) % images.length].fileUrl || '/images/club_logo.png';
    }
  };
  leftDiv.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImages();
    updateSlider();
  });
  rightDiv.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
    updateSlider();
  });
  updateImages();
  updateSlider();
  return container;
};