mapboxgl.accessToken = mapToken;  // mapToken must be defined before including this script

const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat(listing.geometry.coordinates)//listing.geometry.coordinates
        .setPopup(
            new mapboxgl.Popup({offset : 25}).setHTML(
            `<h4>${listing.location}</h4>
            <h3>Welcome to WanderLust</h3>`))
        .addTo(map);

