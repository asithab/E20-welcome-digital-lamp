function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 7.8731, lng: 80.7718 },
        disableDefaultUI: true,
        scrollwheel: false,

    });

    var x = 0;

    // create array of tuples

    var markers = [
        [8.8731, 80.7718],
        [7.8731, 80.7718],
        [9.8731, 76.7718],
        [9.8731, -61.7718],
        [-10.8731, -40.7718]
    ];

    map.addListener("click", (e) => {
        // if x is less markers length
        if (x < markers.length) {
            placeMarkerAndPanTo(new google.maps.LatLng(markers[x][0], markers[x][1]), map);
            x++;
        }
    });
}

function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
        position: latLng,
        map: map,
    });
    map.panTo(latLng);
}