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
        // iterate over stud 
        for (var i = 0; i < stud.length; i++) {
            var name = stud[i].Name;
            var lat = stud[i].Latitude;
            var lon = stud[i].Longitude;
            setTimeout(placeMarker, i * 1000, new google.maps.LatLng(lat, lon), map)

        }
    })

    var x = 0;

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


function placeMarker(latLng, map) {
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

function placeMarkerAndPanTo(latLng, name, map) {
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