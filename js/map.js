function initialize() {
    var e = new google.maps.LatLng(55.910709, 37.192545),
        r = new google.maps.MarkerImage("/img/icons/marker.png", new google.maps.Size(29, 43), new google.maps.Point(0, 0), new google.maps.Point(14, 43)),
        t = {
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: e,
            styles: [{elementType: "geometry", stylers: [{color: "#ebe3cd"}]}, {
                elementType: "labels.text.fill",
                stylers: [{color: "#523735"}]
            }, {elementType: "labels.text.stroke", stylers: [{color: "#f5f1e6"}]}, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{color: "#c9b2a6"}]
            }, {
                featureType: "administrative.land_parcel",
                elementType: "geometry.stroke",
                stylers: [{color: "#dcd2be"}]
            }, {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{color: "#ae9e90"}]
            }, {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{color: "#dfd2ae"}]
            }, {featureType: "poi", elementType: "geometry", stylers: [{color: "#dfd2ae"}]}, {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{color: "#93817c"}]
            }, {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{color: "#a5b076"}]
            }, {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{color: "#447530"}]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{color: "#f5f1e6"}]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{color: "#fdfcf8"}]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{color: "#f8c967"}]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{color: "#e9bc62"}]
            }, {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [{color: "#e98d58"}]
            }, {
                featureType: "road.highway.controlled_access",
                elementType: "geometry.stroke",
                stylers: [{color: "#db8555"}]
            }, {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{color: "#806b63"}]
            }, {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{color: "#dfd2ae"}]
            }, {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [{color: "#8f7d77"}]
            }, {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [{color: "#ebe3cd"}]
            }, {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{color: "#dfd2ae"}]
            }, {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{color: "#b9d3c2"}]
            }, {featureType: "water", elementType: "labels.text.fill", stylers: [{color: "#92998d"}]}]
        }, a = new google.maps.Map(document.getElementById("gmap111"), t),
        o = [{coords: [55.967783, 37.208363], content: $("#info-window-1")}],
        l = [{coords: [55.867923, 37.124503], content: $("#info-window-2")}],
        z = [{coords: [55.663313, 37.236933], content: $("#info-window-3")}];
    $.each(o, function (e, t) {
        var o = new google.maps.Marker({position: new google.maps.LatLng(t.coords[0], t.coords[1], t.coords[2]), icon: r, map: a}),
            l = new google.maps.InfoWindow({content: t.content.html()});
        o.addListener("click", function () {
            l.open(a, o)
        })
    }),
    $.each(l, function (e, t) {
        var o = new google.maps.Marker({position: new google.maps.LatLng(t.coords[0], t.coords[1], t.coords[2]), icon: r, map: a}),
            l = new google.maps.InfoWindow({content: t.content.html()});
        o.addListener("click", function () {
            l.open(a, o)
        })
    }),
    $.each(z, function (e, t) {
        var o = new google.maps.Marker({position: new google.maps.LatLng(t.coords[0], t.coords[1], t.coords[2]), icon: r, map: a}),
            l = new google.maps.InfoWindow({content: t.content.html()});
        o.addListener("click", function () {
            l.open(a, o)
        })
    })

}

$(window).load(function () {
    setTimeout(function () {
        initialize()
    }, 3e3)
});