function initMap() {

  var lat = 52.402478;
  var lng = 16.909748;
  var wspolrzedne = new google.maps.LatLng(lat, lng);

  var loaded = false;

  var mapa;
  var marker;
  var opcjeMarkera;

  var style =

[
      {
        "featureType": "landscape",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#20b5e4"
          }
    ]
  }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1eb5e4"
          }
    ]
  }, {
        "featureType": "road",
        "stylers": [
          {
            "color": "#0fa2cf"
          }
    ]
  }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          }
    ]
  }, {
        "featureType": "transit",
        "stylers": [
          {
            "color": "#008bb5"
          }
    ]
  }, {
        "featureType": "water",
        "stylers": [
          {
            "color": "#5ad8ff"
          }
    ]
  }, {
        "featureType": "administrative.country",
        "stylers": [
          {
            "color": "#808080"
          },
          {
            "visibility": "simplified"
          }
    ]
  }, {
        "featureType": "administrative.province",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "invert_lightness": true
          },
          {
            "weight": 0.5
          }
    ]
  }, {
        "featureType": "administrative.locality",
        "stylers": [
          {
            "visibility": "on"
          }
    ]
  }
]

  var opcjeMapy = {
    zoom: 15,
    center: wspolrzedne,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    navigationControl: false,
    styles: style
  };


  mapa = new google.maps.Map(document.getElementById("mapa"), opcjeMapy);
  loaded = true;
}
