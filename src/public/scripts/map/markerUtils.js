import { createImageSlider } from './imageSlider.js';

const createMarker = (position, map, icon = null) => {
    return new naver.maps.Marker({
        position,
        map,
        icon,
    });
};

const createInfoWindowContent = (images) => {
    const container = document.createElement('div');
    container.className = 'info-window';

    // 이미지 슬라이더 추가
    const slider = createImageSlider(images);
    container.appendChild(slider);

    // 별점 UI 추가
    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating-container';

    const ratingInput = document.createElement('input');
    ratingInput.type = 'hidden';
    ratingInput.name = 'rating';
    ratingInput.value = '0'; // 기본 별점 값

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.textContent = '★';
        star.dataset.value = i;

        // 별점 클릭 이벤트
        star.addEventListener('click', () => {
            ratingInput.value = i; // 클릭한 별점 값 저장
            Array.from(ratingContainer.children).forEach((s) => {
                s.classList.toggle('selected', s.dataset.value <= i); // 클릭한 별점 이하에 대해 선택된 스타일 적용
            });
        });

        ratingContainer.appendChild(star);
    }

    container.appendChild(ratingContainer);

    // 업로드 폼 생성
    const form = document.createElement('form');
    form.method = 'POST';
    form.enctype = 'multipart/form-data';

    form.appendChild(ratingInput); // 폼에 숨겨진 별점 값 추가

    // 파일 업로드 input
    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.id = 'image';
    inputFile.name = 'image';
    inputFile.accept = 'image/*';
    inputFile.required = true;

    // 미리보기 컨테이너
    const previewContainer = document.createElement('div');
    previewContainer.className = 'preview-container';

    const previewImage = document.createElement('img');
    previewImage.style.display = 'none'; // 기본적으로 숨김
    previewContainer.appendChild(previewImage);

    // 파일 변경 시 미리보기 업데이트
    inputFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
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
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Upload Image';
    form.appendChild(submitButton);

    container.appendChild(form);

    return container;
};

const addInfoWindowToMarker = (marker, map, images) => {
    const infoWindow = new naver.maps.InfoWindow({
        content: createInfoWindowContent(images),
    });

    let isOpen = false;
    naver.maps.Event.addListener(marker, 'click', () => {
        if (isOpen) {
            infoWindow.close();
        } else {
            infoWindow.open(map, marker);
        }
        isOpen = !isOpen;
    });
};

export { createMarker, addInfoWindowToMarker };
