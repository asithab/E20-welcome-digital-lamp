function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 7.8731, lng: 80.7718 },
        disableDefaultUI: true,
        draggable: false,
        mapId: "e73be1757f1fdda8"
    });

    var slbounds = new google.maps.LatLngBounds();
    slbounds.extend(new google.maps.LatLng(9.953036, 82.268190));
    slbounds.extend(new google.maps.LatLng(5.790138, 78.785327));
    map.fitBounds(slbounds);

    var perabounds = new google.maps.LatLngBounds();
    perabounds.extend(new google.maps.LatLng(7.270087123946833, 80.608981946666));
    perabounds.extend(new google.maps.LatLng(7.251604257035574, 80.58989448263566));

    var stud;
    $.getJSON("stu.json", function (json) {
        stud = json; // this will show the info it in firebug console
    })

    // jquery on button click
    $("#student").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(slbounds);
        // iterate over stud 
        for (var i = 0; i < stud.length; i++) {
            // var name = stud[i].Name;
            var lat = stud[i].Latitude;
            var lon = stud[i].Longitude;
            setTimeout(placeMarker, i * 500, new google.maps.LatLng(lat, lon), map)

        }
    })

    $("#vc").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(perabounds);
        placeMarker(new google.maps.LatLng(7.254017744015974, 80.59674509791466), map);
    })

    $("#ar").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(perabounds);
        placeMarker(new google.maps.LatLng(7.263288799395109, 80.59717486015069), map);
    })

    $("#ab").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(perabounds);
        placeMarker(new google.maps.LatLng(7.2623481038585735, 80.59876801096193), map);
    })

    $("#co").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(perabounds);
        placeMarker(new google.maps.LatLng(7.263750656694353, 80.59690434620175), map);
    })

    $("#agdean").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(perabounds);
        placeMarker(new google.maps.LatLng(7.262360, 80.598332), map);
    })

    $("#deans").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(perabounds);
        placeMarker(new google.maps.LatLng(7.262360, 80.598332), map);
        placeMarker(new google.maps.LatLng(7.2640113257763295, 80.59897901185354), map);
        placeMarker(new google.maps.LatLng(7.259764416540214, 80.5991103385456), map);
        placeMarker(new google.maps.LatLng(7.253653010403313, 80.59208965397332), map);
        placeMarker(new google.maps.LatLng(7.266467160619582, 80.5993644105187), map);
        placeMarker(new google.maps.LatLng(7.254932480063095, 80.59733625362125), map);
        placeMarker(new google.maps.LatLng(7.260117551945774, 80.59535707875777), map);
        placeMarker(new google.maps.LatLng(7.268390657877636, 80.60673782293601), map);
        placeMarker(new google.maps.LatLng(7.256974294284219, 80.59561192848471), map);
    })

    $("#dh").click(function () {
        $(this).prop('disabled', true);
        map.fitBounds(perabounds);
        placeMarker(new google.maps.LatLng(7.2643327275129, 80.59680694773525), map);
        placeMarker(new google.maps.LatLng(7.26388573308274, 80.59561604697777), map);
        placeMarker(new google.maps.LatLng(7.262480890551459, 80.59553021629253), map);
        placeMarker(new google.maps.LatLng(7.262097750917425, 80.59676403239264), map);
        placeMarker(new google.maps.LatLng(7.261139900403967, 80.5976652545875), map);
        placeMarker(new google.maps.LatLng(7.260980258453375, 80.59475774012553), map);
        placeMarker(new google.maps.LatLng(7.260778045234578, 80.59688204958482), map);
        placeMarker(new google.maps.LatLng(7.260437475397385, 80.59650654033697), map);
    })


    $("#india").click(function () {
        $(this).prop('disabled', true);
        map.setZoom(5);
        placeMarkerAndPanTo(new google.maps.LatLng("28.6527881", "77.2113932"), map);
    })

    $("#nepal").click(function () {
        $(this).prop('disabled', true);
        map.setZoom(5);
        placeMarkerAndPanTo(new google.maps.LatLng("27.649505", "85.405770"), map);
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