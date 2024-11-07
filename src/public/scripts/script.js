const images = {
    campus: {
        coffee: ["chonnam_logo.png", "club_logo.png"],
        dessert: ["dessert_campus1.jpg", "dessert_campus2.jpg"],
        atmosphere: ["atmosphere_campus1.jpg", "atmosphere_campus2.jpg"]
    },
    downtown: {
        coffee: ["coffee_downtown1.jpg", "coffee_downtown2.jpg"],
        dessert: ["dessert_downtown1.jpg", "dessert_downtown2.jpg"],
        atmosphere: ["atmosphere_downtown1.jpg", "atmosphere_downtown2.jpg"]
    }
};

function displayImage() {
    const location = document.getElementById("location").value;
    const category = document.getElementById("category").value;
    
    let filteredImages = images[location]?.[category] || [];

    if (filteredImages.length > 0) {
        const randomImage = filteredImages[Math.floor(Math.random() * filteredImages.length)];
        document.getElementById("image-display").innerHTML = `<img src="/images/${randomImage}" alt="${category}" class="img-fluid rounded">`;
    } else {
        document.getElementById("image-display").innerHTML = "<p>No image matches the selected filters.</p>";
    }

    // Show the map container
    document.getElementById('map').style.display = "block";

    // Initialize the Naver map
    var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 13
    };
    
    var map = new naver.maps.Map('map', mapOptions);
    
    // 마커 위치 설정
    var markerPosition = new naver.maps.LatLng(37.3595704, 127.105399);
    
    // 마커 생성
    var marker = new naver.maps.Marker({
        position: markerPosition,
        map: map
    });
    
    // InfoWindow 생성 (주소 텍스트 포함)
    var infoWindow = new naver.maps.InfoWindow({
        content: `<div style="padding:10px;">주소: 경기도 성남시 분당구 정자동<br>
                  <a href="#" id="directions-link" target="_blank" style="color:blue;">길찾기</a></div>`,
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#333",
        anchorSize: new naver.maps.Size(10, 10)
    });
    
    // InfoWindow를 마커에 표시
    infoWindow.open(map, marker);
    
    // 길찾기 링크 설정 (전남대학교 -> 목적지)
    document.getElementById("directions-link").addEventListener("click", function() {
        var startLat = 35.179982; // 전남대학교 위도
        var startLng = 126.909153; // 전남대학교 경도
        var destLat = markerPosition.lat(); // 목적지 위도
        var destLng = markerPosition.lng(); // 목적지 경도
        var url = `https://map.naver.com/v5/directions/${startLng},${startLat},전남대학교/${destLng},${destLat},목적지/dm`;
    
        window.open(url, '_blank');
    });
}
