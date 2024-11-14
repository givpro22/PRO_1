"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var images = {
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
  var _images$location;
  var location = document.getElementById("location").value;
  var category = document.getElementById("category").value;
  var filteredImages = ((_images$location = images[location]) === null || _images$location === void 0 ? void 0 : _images$location[category]) || [];
  if (filteredImages.length > 0) {
    // Randomly select an image and its rating
    var _filteredImages$Math$ = _slicedToArray(filteredImages[Math.floor(Math.random() * filteredImages.length)], 2),
      randomImage = _filteredImages$Math$[0],
      rating = _filteredImages$Math$[1];

    // Display image and rating
    document.getElementById("image-display").innerHTML = "\n            <img src=\"/images/".concat(randomImage, "\" alt=\"").concat(category, "\" class=\"img-fluid rounded\">\n            <div class=\"mt-2\">").concat(generateStars(rating), "</div>\n        ");
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
    content: "<div style=\"padding:10px;\">Address: Seongnam-si, Bundang-gu, Jeongja-dong<br></div>",
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
  var stars = "\n        <div style=\"border: 1px solid #ccc; padding: 10px; border-radius: 8px; display: inline-block; text-align: center;\">\n            <div style=\"font-size: 1.2em; font-weight: bold; margin-bottom: 5px;\">Rating</div>\n            <div style=\"display: flex; justify-content: center; align-items: center; gap: 5px;\">";
  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      stars += "<span style=\"font-size: 1.8em; color: gold;\">&#9733;</span>"; // Larger, gold stars for filled
    } else {
      stars += "<span style=\"font-size: 1.8em; color: gray;\">&#9734;</span>"; // Larger, gray stars for empty
    }
  }
  stars += "</div></div>";
  return stars;
}