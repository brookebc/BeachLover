var meLayer = L.mapbox.featureLayer().addTo(map);


$(function(){

    console.log('findme.js loaded');
    memap.init();
    
});

var memap = {

    init: function() {
        
        this.initEvents();
    },
    initEvents: function() {
        $('.findme').on('click', '#geolocate', this.locateMe);

    },
    addLayer: function(event) {
        event.preventDefault();

    },
    locateMe: function(event){
        event.preventDefault();
        console.log('i heard ya');

        if (!navigator.geolocation) {
            geolocate.innerHTML = 'Geolocation is not available';
        } else {
            console.log('im gonna find ya');
            map.locate();
        }
     
        map.on('locationfound', function(e) {
            // map.fitBounds(e.bounds);

            meLayer.setGeoJSON({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [e.latlng.lng, e.latlng.lat]
                },
                properties: {
                    'title': 'Here I am!',
                    'marker-color': '#ff8888',
                    'marker-symbol': 'star',
                    'popupContent':'Here I am!'
                }
            });

            // And hide the geolocation button
            geolocate.parentNode.removeChild(geolocate);
            console.log(e.latlng.lng, e.latlng.lat);
        });

        // If the user chooses not to allow their location
        // to be shared, display an error message.
        map.on('locationerror', function() {
            geolocate.innerHTML = 'Position could not be found';
        });
    }
};





       
     

