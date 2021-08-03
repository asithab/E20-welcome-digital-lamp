let map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 7.8731, lng: 80.7718 },
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        mapId: "e73be1757f1fdda8"
    });

    var stud;
    $.getJSON("stu.json", function (json) {
        stud = json; // this will show the info it in firebug console
    })

    // jquery on button click
    $("#student").click(function () {
        map.panTo(new google.maps.LatLng('7.8731', '80.7718'))
        map.setZoom(8);
        // iterate over stud 
        for (var i = 0; i < stud.length; i++) {
            // var name = stud[i].Name;
            var lat = stud[i].Latitude;
            var lon = stud[i].Longitude;
            setTimeout(placeMarker, i * 500, new google.maps.LatLng(lat, lon), map)

        }
    })

    $("#india").click(function () {
        map.setZoom(5);
        placeMarkerAndPanTo(new google.maps.LatLng("28.6527881", "77.2113932"), map);
    })



}


function placeMarker(latLng, map) {
    var icon = {
        url: "img/oil-lamp.png", // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(20, 40) // anchor
    };


    new google.maps.Marker({
        position: latLng,
        map: map,
        icon: icon,
    });
}

function placeMarkerAndPanTo(latLng, map) {
    var icon = {
        url: "img/oil-lamp.png", // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(20, 40) // anchor
    };

    map.panTo(latLng);
    new google.maps.Marker({
        position: latLng,
        map: map,
        icon: icon,
    });
}