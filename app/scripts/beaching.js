var map = L.mapbox.map('map', 'brookebc.if5olg5a', {
                    scrollWheelZoom: false
                }).setView([32.907, -79.802], 9);

$(function(){

	console.log('main.js loaded');
	beachmap.init();
	
});

var beachmap = {

	init: function() {
		// this.initStyling();
		this.initEvents();
	},
	initEvents: function() {
		$('.findbeaches').on('click', '.beachme', this.addBeaches);
		
	},
	addBeaches: function(event) {
		event.preventDefault();
		console.log('gotta love the beach');

		// L.geoJson(beachPoints).addTo(map);
		L.mapbox.featureLayer(beachPoints).addTo(map);
	}

};


	

