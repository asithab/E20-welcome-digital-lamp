/*
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./styles.css";
import $ from 'jquery';
import { Tween, update, Easing } from "@tweenjs/tween.js";
import stud from "./stu.json";
import lamppng from './flame.gif';

let map;

let cameraOptions = {
  tilt: 0,
  heading: 0,
  zoom: 2,
  center: { lat: 7.254017744015974, lng: 80.59674509791466 },
};
const mapOptions = {
  ...cameraOptions,
  disableDefaultUI: true,
  draggable: false,
  mapId: "b90210099f2eead9",
  isFractionalZoomEnabled: true,
};

function initMap() {
  map = new google.maps.Map(
    document.getElementById("map"),
    mapOptions
  );

  var slbounds = new google.maps.LatLngBounds();
  slbounds.extend(new google.maps.LatLng(9.953036, 82.268190));
  slbounds.extend(new google.maps.LatLng(5.790138, 78.785327));
  // map.fitBounds(slbounds);

  var perabounds = new google.maps.LatLngBounds();
  perabounds.extend(new google.maps.LatLng(7.270087123946833, 80.608981946666));
  perabounds.extend(new google.maps.LatLng(7.251604257035574, 80.58989448263566));


  $("#vc").on('click', function () {
    $(this).prop('disabled', true);
    tween({ lat: 7.254017744015974, lng: 80.59674509791466 }, 15.6, 6)
  })

  $("#agdean").on('click', function () {
    $(this).prop('disabled', true);
    // map.fitBounds(perabounds);
    // placeMarker(new google.maps.LatLng(7.262360, 80.598332), map);
    tween({ lat: 7.254415575487817, lng: 80.5925329129287 }, 15.6, 2)

  })

  $("#deans").on('click', function () {
    $(this).prop('disabled', true);
    // map.fitBounds(perabounds);
    placeMarker(new google.maps.LatLng(7.254198843667386, 80.59112119182112), map);
    placeMarker(new google.maps.LatLng(7.2541154852471195, 80.59132286626506), map);
    placeMarker(new google.maps.LatLng(7.253765379713443, 80.59281861839096), map);
    placeMarker(new google.maps.LatLng(7.255065770322962, 80.59146571899618), map);
    placeMarker(new google.maps.LatLng(7.255149128567229, 80.5922304012628), map);
    placeMarker(new google.maps.LatLng(7.253115182999913, 80.5915497500145), map);
    placeMarker(new google.maps.LatLng(7.253773715562658, 80.59139009107972), map);
    placeMarker(new google.maps.LatLng(7.255149128567229, 80.59225561056829), map);
    
  })

  $("#dh").on('click', function () {
    $(this).prop('disabled', true);
    // map.fitBounds(perabounds);
    placeMarker(new google.maps.LatLng(7.254198843667386, 80.59112119182112), map);
    placeMarker(new google.maps.LatLng(7.2541154852471195, 80.59132286626506), map);
    placeMarker(new google.maps.LatLng(7.253765379713443, 80.59281861839096), map);
    placeMarker(new google.maps.LatLng(7.255065770322962, 80.59146571899618), map);
    placeMarker(new google.maps.LatLng(7.255149128567229, 80.5922304012628), map);
    placeMarker(new google.maps.LatLng(7.253115182999913, 80.5915497500145), map);
    placeMarker(new google.maps.LatLng(7.253773715562658, 80.59139009107972), map);
    placeMarker(new google.maps.LatLng(7.255149128567229, 80.59225561056829), map);
  })

  $("#ar").on('click', function () {
    $(this).prop('disabled', true);
    // map.fitBounds(perabounds);
    placeMarker(new google.maps.LatLng(7.263288799395109, 80.59717486015069), map);

  })

  $("#ab").on("click", function () {
    $(this).prop('disabled', true);
    // map.fitBounds(perabounds);
    placeMarker(new google.maps.LatLng(7.2623481038585735, 80.59876801096193), map);
    // tween({ lat: 7.2623481038585735, lng: 80.59876801096193 }, 16, 2)

  })

  $("#co").on("click", function () {
    $(this).prop('disabled', true);
    // map.fitBounds(perabounds);
    placeMarker(new google.maps.LatLng(7.263750656694353, 80.59690434620175), map);
  })


  

  

  $("#student").on("click", function () {
    $(this).prop('disabled', true);

    tween({ lat: 7.8731, lng: 80.7718 }, 7.7, 3, false)
    // map.fitBounds(slbounds);

    // iterate over stud 
    for (var i = 0; i < stud.length; i++) {
      // var name = stud[i].Name;
      var lat = stud[i].geometry.coordinates[1];
      var lon = stud[i].geometry.coordinates[2];
      setTimeout(placeMarker, i * 500, new google.maps.LatLng(lat, lon), map)

    }
  })
}
function placeMarker(latLng, map) {
  var icon = {
    url: lamppng, // url
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
    url: lamppng, // url
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

function tween(loc, zooml, ts = 5, lamp = true, easing = Easing.Quadratic.Out) {

  function animate(time) {
    requestAnimationFrame(animate);
    update(time);
  }
  requestAnimationFrame(animate);

  new Tween(cameraOptions) // Create a new tween that modifies 'cameraOptions'.
    .to({ center: loc, tilt: 0, heading: 0, zoom: zooml }, ts * 1000) // Move to destination in 15 second.
    .easing(easing) // Use an easing function to make the animation smooth.
    .onUpdate(() => {
      map.moveCamera(cameraOptions)
    })
    .onComplete(() => {
      cameraOptions = {
        ...cameraOptions,
        center: loc
      };
    })
    .start(); // Start the tween immediately.

  // Setup the animation loop.
  if (lamp) {
    setTimeout(placeMarker, (ts - 1) * 1000, loc, map);
  }
}

export { initMap };
