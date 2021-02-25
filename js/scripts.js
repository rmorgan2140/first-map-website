mapboxgl.accessToken = 'pk.eyJ1Ijoicm01MDI2IiwiYSI6ImNramJxOGd6NTFiZjYycHFzanY0eTUwZ2sifQ.T4sUXGotNvdmqtESra1iwA';

var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-77.6, 40.9],
  zoom: 6.5
});

$.getJSON('./data/penncities.json', function(cityRows) {
  console.log(cityRows)

  cityRows.forEach(function(cityRow) {
    console.log(cityRow.name, cityRow.population, cityRow.skyline, cityRow.funfact, cityRow.bonus)

    var html = `
      <div class="popup">
        <a>
        <img class="flag" src=${cityRow.flagImage}>
        </a>
        <div class="cityname">${cityRow.name}</div>
        <div class="citypop"> Population ${cityRow.population}</div>
        <div><i>${cityRow.funfact}</i></div>
        <a>
        <img class="skyline" src=${cityRow.skyline}>
        </a>
        <a>
        <img class="bonus" src=${cityRow.bonus}>
        </a>
      </div>
    `

  var el =
    document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url("img/keystone.png")';
      el.style.width = '40px';
      el.style.height = '40px';

    new mapboxgl.Marker(el)
      .setLngLat([cityRow.longitude, cityRow.latitude])
      .setPopup(new mapboxgl.Popup().setHTML(html))
      .addTo(map);

  })
})
