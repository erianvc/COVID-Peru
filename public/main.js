const IMG = 'images/covid.png'

let map = L.map('map').setView([-9,-75.0282], 5)

const circleMarkerOpts = {
    radius: 6,
    fillColor: '#013825',
    color: '#013825',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.6
}

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

L.circleMarker([-12.022867,-77.110848], circleMarkerOpts).addTo(map).bindPopup('10 casos confirmados en Lima')
L.circleMarker([-9.926930,-76.242220], circleMarkerOpts).addTo(map).bindPopup('2 casos confirmados en Huánuco')
L.circleMarker([-13.4179319,-76.1396996], circleMarkerOpts).addTo(map).bindPopup('2 casos confirmados en Chincha')
L.circleMarker([-16.342461,-71.569104], circleMarkerOpts).addTo(map).bindPopup('1 caso confirmado en Arequipa')
