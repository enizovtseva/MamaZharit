
function initMap( address ) {
  var uluru = {lat: 55.731835, lng: 37.6366621 };
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: uluru});
  
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
        console.log(results[0].geometry.location)
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        icon: "images/ic-map.svg"
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
$(document).ready(function(){
  var map = document.getElementById('map');
  if(!map) { initMap('ул. Бахрушина, 32, стр. 2, Москва'); }
})