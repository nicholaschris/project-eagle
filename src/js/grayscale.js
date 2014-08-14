//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Google Map Skin - Get more at http://snazzymaps.com/
// var myOptions = {
//     zoom: 15,
//     center: new google.maps.LatLng(52.3271365, 5.1185531), //(53.385873, -1.471471), 
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     disableDefaultUI: true,
//     styles: [{
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 17
//         }]
//     }, {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 20
//         }]
//     }, {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 17
//         }]
//     }, {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 29
//         }, {
//             "weight": 0.2
//         }]
//     }, {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 18
//         }]
//     }, {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 16
//         }]
//     }, {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 21
//         }]
//     }, {
//         "elementType": "labels.text.stroke",
//         "stylers": [{
//             "visibility": "on"
//         }, {
//             "color": "#000000"
//         }, {
//             "lightness": 16
//         }]
//     }, {
//         "elementType": "labels.text.fill",
//         "stylers": [{
//             "saturation": 36
//         }, {
//             "color": "#000000"
//         }, {
//             "lightness": 40
//         }]
//     }, {
//         "elementType": "labels.icon",
//         "stylers": [{
//             "visibility": "off"
//         }]
//     }, {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 19
//         }]
//     }, {
//         "featureType": "administrative",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 20
//         }]
//     }, {
//         "featureType": "administrative",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 17
//         }, {
//             "weight": 1.2
//         }]
//     }]
// };

// var map = new google.maps.Map(document.getElementById('map'), myOptions);

function initialize() {
  var myLatlng = new google.maps.LatLng(52.2804418,5.1644963,17);
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

