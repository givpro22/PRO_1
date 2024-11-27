const mapOptions = {
    center: new naver.maps.LatLng(35.174444, 126.908611),
    zoom: 15,
    logoControl: false,
};

const map = new naver.maps.Map('map', mapOptions);

export { map };
