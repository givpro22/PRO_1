const feedbackToggleBtn = document.getElementById('feedback-toggle-btn');
const feedbackFormContainer = document.getElementById('feedback-form-container');

// 버튼 클릭 시 피드백 창 열기/닫기
feedbackToggleBtn.addEventListener('click', () => {
    feedbackFormContainer.classList.toggle('open');
});
