MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibXItY2F0bG93IiwiYSI6ImNra3d4Z2ZmMzBwMWkyb280NHFvNHllbG8ifQ.fllRF-GqWWziXYOBBAMKeA";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [18.45216, -33.99669],
  zoom: 13,
});

map.addControl(new mapboxgl.NavigationControl());

map.addControl(
  new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  }),
  "top-left"
);
