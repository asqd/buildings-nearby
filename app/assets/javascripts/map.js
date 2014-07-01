    YMaps.jQuery(function() {

        // Create new placemark
        var placeMark;
        // Enable scroll zoom
        map.enableScrollZoom();

        YMaps.Events.observe(map, map.Events.Click, function(map, mEvent) {
            // Get current geopoint
            var geoPoint = mEvent.getGeoPoint();

            if (placeMark) {
                placeMark.setGeoPoint(geoPoint);
                console.log(geoPoint);
            } else {
                placeMark = new YMaps.Placemark(
                    geoPoint, {
                        hasBalloon: false
                    }
                );

                // Add plcaemark on map
                map.addOverlay(placeMark);

            }

        });
    });