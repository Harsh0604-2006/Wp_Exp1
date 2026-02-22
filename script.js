
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    alert(
        "Latitude: " + lat +
        "\nLongitude: " + lng
    );
}

function error() {
  alert("Sorry, no position available.");
}

function myMap() {
    var myCenter = new google.maps.LatLng(18.99786116064052, 72.83552307514019);
var mapProp= {
  center:myCenter,
  zoom:18,
  disableDefaultUI: true
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position: myCenter,
    map: map,
     icon: {
      url: "assets/marker.svg",
     
    }


});
var infowindow = new google.maps.InfoWindow({
  content:"Welcome to Ramashrey!"
});


google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});
marker.setMap(map); 
}

