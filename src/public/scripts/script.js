const images = {
    campus: {
        coffee: [["chonnam_logo.png", 4], ["club_logo.png", 5]],
        dessert: [["dessert_campus1.jpg", 3], ["dessert_campus2.jpg", 4]],
        atmosphere: [["atmosphere_campus1.jpg", 5], ["atmosphere_campus2.jpg", 2]]
    },
    downtown: {
        coffee: [["coffee_downtown1.jpg", 4], ["coffee_downtown2.jpg", 3]],
        dessert: [["dessert_downtown1.jpg", 5], ["dessert_downtown2.jpg", 4]],
        atmosphere: [["atmosphere_downtown1.jpg", 3], ["atmosphere_downtown2.jpg", 4]]
    }
};

function displayImage() {
    const location = document.getElementById("location").value;
    const category = document.getElementById("category").value;
    
    let filteredImages = images[location]?.[category] || [];

    if (filteredImages.length > 0) {
        // Randomly select an image and its rating
        const [randomImage, rating] = filteredImages[Math.floor(Math.random() * filteredImages.length)];
        
        // Display image and rating
        document.getElementById("image-display").innerHTML = `
            <img src="/images/${randomImage}" alt="${category}" class="img-fluid rounded">
            <div class="mt-2">${generateStars(rating)}</div>
        `;
    } else {
        document.getElementById("image-display").innerHTML = "<p>No image matches the selected filters.</p>";
    }

    // Show map
    document.getElementById('map').style.display = "block";

    // Initialize Naver map
    var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 13
    };
    
    var map = new naver.maps.Map('map', mapOptions);
    
    // Set marker position
    var markerPosition = new naver.maps.LatLng(37.3595704, 127.105399);
    
    // Create marker
    var marker = new naver.maps.Marker({
        position: markerPosition,
        map: map
    });
    
    // Create InfoWindow
    var infoWindow = new naver.maps.InfoWindow({
        content: `<div style="padding:10px;">Address: Seongnam-si, Bundang-gu, Jeongja-dong<br></div>`,
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#333",
        anchorSize: new naver.maps.Size(10, 10)
    });
    
    // Display InfoWindow on marker
    infoWindow.open(map, marker);
}

// Function to generate styled star ratings with "Rating" label
function generateStars(rating) {
    let stars = `
        <div style="border: 1px solid #ccc; padding: 10px; border-radius: 8px; display: inline-block; text-align: center;">
            <div style="font-size: 1.2em; font-weight: bold; margin-bottom: 5px;">Rating</div>
            <div style="display: flex; justify-content: center; align-items: center; gap: 5px;">`;
    
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += `<span style="font-size: 1.8em; color: gold;">&#9733;</span>`;  // Larger, gold stars for filled
        } else {
            stars += `<span style="font-size: 1.8em; color: gray;">&#9734;</span>`;  // Larger, gray stars for empty
        }
    }
    
    stars += `</div></div>`;
    return stars;
}
