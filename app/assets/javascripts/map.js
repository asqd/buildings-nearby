//YAMaps
// window.onload = function() {
//     var map = new YMaps.Map(document.getElementById("YMapsID"));
//     map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 10);

//     YMaps.jQuery(function() {


//         // Create new placemark
//         var placeMark;
//         // Enable scroll zoom
//         map.enableScrollZoom();

//         YMaps.Events.observe(map, map.Events.Click, function(map, mEvent) {
//             // Get current geopoint

//             var geoPoint = mEvent.getGeoPoint();

//             console.log(geoPoint);
//             if (placeMark) {
//                 pervPoint = geoPoint;
//                 placeMark.setGeoPoint(geoPoint);
//             } else {
//                 placeMark = new YMaps.Placemark(
//                     geoPoint, {
//                         hasBalloon: false
//                     }
//                 );

//                 // Add plcaemark on map
//                 map.addOverlay(placeMark);

//             }

//         });

//     });

// };

// Google Maps
$(document).ready(function() {
    initialize();
});

function initialize() {
    //(долгота, широта)
    var coordinate = new google.maps.LatLng(55.753559, 37.609218);

    var mapOptions = {
        zoom: 10, //масштаб
        center: coordinate, //позиционируем карту на заданые координаты
        mapTypeId: google.maps.MapTypeId.TERRAIN //задаем тип карты
    };

    //инициализация карты
    map = new google.maps.Map(document.getElementById("maps"), mapOptions);

    // Marker
    var marker;
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    // Marker function
    function placeMarker(location) {
        if (marker) {
            marker.setPosition(location);
            console.log(marker.position);
        } else {
            marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }


    }
}