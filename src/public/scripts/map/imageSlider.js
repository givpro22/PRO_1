const createImageSlider = (images) => {
    const container = document.createElement('div');
    container.className = 'image-slider';

    let currentIndex = 0;

    const title = document.createElement('div');
    title.className = 'image-info';

    const userInfo = document.createElement('p');
    const countryInfo = document.createElement('p');
    const dateInfo = document.createElement('p');

    title.append(userInfo, countryInfo, dateInfo);
    container.appendChild(title);

    const ratingDisplay = document.createElement('div');
    ratingDisplay.className = 'rating-display';
    container.appendChild(ratingDisplay);

    const updateSlider = () => {
        if (images.length > 0) {
            userInfo.innerHTML = `<strong>Uploaded by:</strong> ${images[currentIndex].createUser || "Unknown"}`;
            countryInfo.innerHTML = `<strong>Country:</strong> ${images[currentIndex].createuserCountry || "Unknown"}`;
            dateInfo.innerHTML = `<strong>Uploaded on:</strong> ${
                new Date(images[currentIndex].createdAt).toLocaleDateString() || "Unknown"
            }`;
            ratingDisplay.innerHTML = "⭐".repeat(images[currentIndex].meta?.rating || 0) || "No rating yet";
        } else {
            userInfo.innerHTML = `<strong>Uploaded by:</strong> Unknown`;
            countryInfo.innerHTML = `<strong>Country:</strong> Unknown`;
            dateInfo.innerHTML = `<strong>Uploaded on:</strong> Unknown`;
            ratingDisplay.innerHTML = "No rating yet";
        }
    };

    const leftDiv = document.createElement('div');
    leftDiv.className = 'left-image';
    const mainDiv = document.createElement('div');
    mainDiv.className = 'main-image';
    const rightDiv = document.createElement('div');
    rightDiv.className = 'right-image';

    const leftImg = document.createElement('img');
    const mainImg = document.createElement('img');
    const rightImg = document.createElement('img');

    leftDiv.appendChild(leftImg);
    mainDiv.appendChild(mainImg);
    rightDiv.appendChild(rightImg);

    container.append(leftDiv, mainDiv, rightDiv);

    const updateImages = () => {
        if (images.length > 0) {
            mainImg.src = images[currentIndex].fileUrl || '/images/club_logo.png';
            leftImg.src = images[(currentIndex - 1 + images.length) % images.length].fileUrl || '/images/club_logo.png';
            rightImg.src = images[(currentIndex + 1) % images.length].fileUrl || '/images/club_logo.png';
        }
    };

    leftDiv.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages();
        updateSlider();
    });

    rightDiv.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
        updateSlider();
    });

    updateImages();
    updateSlider();
    return container;
};

export { createImageSlider };
