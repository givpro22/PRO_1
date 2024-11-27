const feedbackToggleBtn = document.getElementById('feedback-toggle-btn');
const feedbackFormContainer = document.getElementById('feedback-form-container');

// 버튼 클릭 시 피드백 창 열기/닫기
feedbackToggleBtn.addEventListener('click', () => {
    feedbackFormContainer.classList.toggle('open');
});

    const mapOptions = {
        center: new naver.maps.LatLng(35.174444, 126.908611),
        zoom: 15,
        logoControl: false
    };
    const map = new naver.maps.Map('map', mapOptions);

    const mapElement = document.getElementById('map');
    const images = JSON.parse(mapElement.getAttribute('data-images')) || [];

    const createMarker = (position, icon) => {
        return new naver.maps.Marker({
            position,
            map,
            icon
        });
    };

    const createInfoWindowContent = () => {
        const container = document.createElement('div');
        container.className = 'info-window';
    
        // 이미지 슬라이더 생성
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'image-slider';
    
        let currentIndex = 0;
    
        const title = document.createElement('div');
        title.className = 'image-info';
    
        // 사용자 정보
        const userInfo = document.createElement('p');
        userInfo.className = 'user-info';
        userInfo.innerHTML = `<strong>Uploaded by:</strong> ${
            images.length > 0 ? images[currentIndex].createUser : "Unknown"
        }`;
    
        // 국가 정보
        const countryInfo = document.createElement('p');
        countryInfo.className = 'country-info';
        countryInfo.innerHTML = `<strong>Country:</strong> ${
            images.length > 0 ? images[currentIndex].createuserCountry : "Unknown"
        }`;
    
        // 업로드 날짜
        const dateInfo = document.createElement('p');
        dateInfo.className = 'date-info';
        dateInfo.innerHTML = `<strong>Uploaded on:</strong> ${
            images.length > 0
                ? new Date(images[currentIndex].createdAt).toLocaleDateString()
                : "Unknown"
        }`;
    
        title.appendChild(userInfo);
        title.appendChild(countryInfo);
        title.appendChild(dateInfo);
    
        container.appendChild(title);
    
        // 별점 표시 추가
        const ratingDisplay = document.createElement('div');
        ratingDisplay.className = 'rating-display';
        container.appendChild(ratingDisplay);
    
        const updateSlider = () => {
            const mainImage = sliderContainer.querySelector('.main-image img');
            const leftImage = sliderContainer.querySelector('.left-image img');
            const rightImage = sliderContainer.querySelector('.right-image img');
        
            if (images.length === 0) {
                // 이미지가 없을 때 기본값 설정
                mainImage.src = '/images/club_logo.png';
                leftImage.src = '/images/club_logo.png';
                rightImage.src = '/images/club_logo.png';
                userInfo.innerHTML = `<strong>Uploaded by:</strong> Unknown`;
                countryInfo.innerHTML = `<strong>Country:</strong> Unknown`;
                dateInfo.innerHTML = `<strong>Uploaded on:</strong> Unknown`;
                ratingDisplay.innerHTML = "No rating yet";
                return;
            }
        
            // 이미지가 있는 경우 업데이트
            mainImage.src = images[currentIndex].fileUrl || '/images/club_logo.png';
            leftImage.src = images[(currentIndex - 1 + images.length) % images.length].fileUrl || '/images/club_logo.png';
            rightImage.src = images[(currentIndex + 1) % images.length].fileUrl || '/images/club_logo.png';
        
            // 정보 업데이트
            userInfo.innerHTML = `<strong>Uploaded by:</strong> ${images[currentIndex].createUser || "Unknown"}`;
            countryInfo.innerHTML = `<strong>Country:</strong> ${images[currentIndex].createuserCountry || "Unknown"}`;
            dateInfo.innerHTML = `<strong>Uploaded on:</strong> ${
                images[currentIndex].createdAt
                    ? new Date(images[currentIndex].createdAt).toLocaleDateString()
                    : "Unknown"
            }`;
        
            // 별점 업데이트
            const rating = images[currentIndex]?.meta?.rating || 0;
            ratingDisplay.innerHTML = "⭐".repeat(rating) || "No rating yet";
        };
    
        const leftDiv = document.createElement('div');
        leftDiv.className = 'left-image';
        const leftImg = document.createElement('img');
        leftDiv.appendChild(leftImg);
        sliderContainer.appendChild(leftDiv);
    
        const mainDiv = document.createElement('div');
        mainDiv.className = 'main-image';
        const mainImg = document.createElement('img');
        mainDiv.appendChild(mainImg);
        sliderContainer.appendChild(mainDiv);
    
        const rightDiv = document.createElement('div');
        rightDiv.className = 'right-image';
        const rightImg = document.createElement('img');
        rightDiv.appendChild(rightImg);
        sliderContainer.appendChild(rightDiv);
    
        leftDiv.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });
    
        rightDiv.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });
    
        updateSlider();
        container.appendChild(sliderContainer);
    
        // 별점 UI
        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating-container';
    
        const ratingInput = document.createElement('input');
        ratingInput.type = 'hidden';
        ratingInput.name = 'rating';
        ratingInput.value = '0';
    
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = '★';
            star.dataset.value = i;
    
            star.addEventListener('click', () => {
                ratingInput.value = i;
                Array.from(ratingContainer.children).forEach((s) => {
                    s.classList.toggle('selected', s.dataset.value <= i);
                });
            });
    
            ratingContainer.appendChild(star);
        }
    
        container.appendChild(ratingContainer);
    
        // 이미지 업로드
        const form = document.createElement('form');
        form.method = 'POST';
        form.enctype = 'multipart/form-data';

        form.appendChild(ratingInput);
    
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.id="image",
        inputFile.name="image" 
        inputFile.accept = 'image/*';
        inputFile.required = true;
    
        const previewContainer = document.createElement('div');
        previewContainer.className = 'preview-container';
    
        const previewImage = document.createElement('img');
        previewContainer.appendChild(previewImage);
    
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
    
        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Upload Image';
    
        form.appendChild(submitButton);
        container.appendChild(form);
    
        return container;
    };
    
    

    const addInfoWindowToMarker = (marker) => {
        const infoWindow = new naver.maps.InfoWindow({
            content: createInfoWindowContent()
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

    const mainMarker = createMarker(new naver.maps.LatLng(35.174444, 126.908611));
    const mainMarker_1 = createMarker(new naver.maps.LatLng(35.173444, 126.908511)); // 두 번째 마커 추가
    
    addInfoWindowToMarker(mainMarker); // 첫 번째 마커에 InfoWindow 연결
    addInfoWindowToMarker(mainMarker_1); // 두 번째 마커에 InfoWindow 연결