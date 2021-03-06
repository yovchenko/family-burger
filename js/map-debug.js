function initMap() {
    var e = new google.maps.LatLng(50.7467787, 33.4862403),
        t = document.getElementById("map"),
        l = {
            center: e,
            zoom: 16,
            panControl: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#ebe3cd"
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#523735"
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#f5f1e6"
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#c9b2a6"
                }]
            }, {
                featureType: "administrative.land_parcel",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#dcd2be"
                }]
            }, {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#ae9e90"
                }]
            }, {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{
                    color: "#dfd2ae"
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#dfd2ae"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#93817c"
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#a5b076"
                }]
            }, {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#447530"
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f1e6"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#fdfcf8"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#f8c967"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#e9bc62"
                }]
            }, {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [{
                    color: "#e98d58"
                }]
            }, {
                featureType: "road.highway.controlled_access",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#db8555"
                }]
            }, {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#806b63"
                }]
            }, {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{
                    color: "#dfd2ae"
                }]
            }, {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#8f7d77"
                }]
            }, {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#ebe3cd"
                }]
            }, {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{
                    color: "#dfd2ae"
                }]
            }, {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#b9d3c2"
                }]
            }, {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#92998d"
                }]
            }]
        },
        r = new google.maps.Map(t, l),
        o = {
            url: "svg/marker.svg",
            scaledSize: new google.maps.Size(50, 50)
        },
        a = new google.maps.Marker({
            position: e,
            map: r,
            icon: o,
            optimized: !1
        }),
        s = new google.maps.InfoWindow({
            content: '<div class="info-window"><h3>Family Burger</h3><div class="info-content"><h4>Ласкаво просимо!</h4></div></div>',
            maxWidth: 400
        });
    a.addListener("click", function () {
        s.open(r, a)
    })
}
$(".modal-fullscreen").on("shown.bs.modal", function () {
    initMap()
});