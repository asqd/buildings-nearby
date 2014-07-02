$(document).ready(function() {
    initialize();
});

function initialize() {

    this.moscow = new google.maps.LatLng(55.400002, 37.900002);
    this.leningrad = new google.maps.LatLng(59.966667, 30.299999);
    //(долгота, широта)
    var coordinate = new google.maps.LatLng(55.753559, 37.609218);

    var mapOptions = {
        zoom: 12, //масштаб
        center: coordinate, //позиционируем карту на заданые координаты
        mapTypeId: google.maps.MapTypeId.ROADMAP //задаем тип карты
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

        } else {
            marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }
        console.log(marker.position);
        document.getElementById('latitude').value = location.lat();
        document.getElementById('longitude').value = location.lng();
    }

    $('#maps').click(function() {
        $('#buildings').submit();
    });
}