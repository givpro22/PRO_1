"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupFeedbackToggle = void 0;
var setupFeedbackToggle = exports.setupFeedbackToggle = function setupFeedbackToggle() {
  var feedbackToggleBtn = document.getElementById('feedback-toggle-btn');
  var feedbackFormContainer = document.getElementById('feedback-form-container');

  // 버튼 클릭 시 피드백 창 열기/닫기
  feedbackToggleBtn.addEventListener('click', function () {
    feedbackFormContainer.classList.toggle('open');
  });
};