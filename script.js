mapboxgl.accessToken =
    "pk.eyJ1IjoiZGlrc2hhbnQwOSIsImEiOiJjbDRxcHJidzcwdGlhM3BwYWJ5N3cxYjJsIn0.BdhlcBssxiCvs_1EN1K17w";


const successLocation = (position) => {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

const setupMap = (center) => {
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 6
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav);


    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiZGlrc2hhbnQwOSIsImEiOiJjbDRxcHJidzcwdGlhM3BwYWJ5N3cxYjJsIn0.BdhlcBssxiCvs_1EN1K17w',
        unit: 'metric',
        profile: 'mapbox/cycling'
    });

    map.addControl(directions, 'top-left');
}

const errorLocation = () => {
    setupMap([-2.24, 53.48])
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})