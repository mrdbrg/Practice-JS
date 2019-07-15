// const mapElement = document.getElementById("map");

function initMap() {

  const mapOptions = {
    zoom: 11,
    center: {lat: -22.9068, lng: -43.1729}
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const arrayMarkers = [
    {
      coords: {lat: -22.9694, lng: -43.1868},
      imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      // content: '<h3>Copacabana</h3>'
    },
    {
      coords: {lat: -22.9847, lng: -43.1986},
      imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      // content: '<h3>Ipanema</h3>'
    },
    {
      coords: {lat: -23.0004, lng: -43.3659}
      // imageIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // content: '<h3>Barra da Tijuca</h3>'
    }
  ]

  // Create Markers
  arrayMarkers.forEach((marker) => {
    addMarkers(marker)
  })
  
  // Add Markers
  function addMarkers(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    })

    //Check icon
    if (props.imageIcon) {
      marker.setIcon(props.imageIcon)
    }

    // Check content
    // if (props.content) {
    //   const infoWindow = google.maps.InfoWindow({
    //     content: props.content
    //   })

    //   marker.addEventListener('click', function() {
    //     infoWindow.open(map, marker);
    //   });
    // }

  }
}