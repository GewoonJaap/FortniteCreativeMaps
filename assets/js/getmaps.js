console.log("Get Maps.js loaded!");

$.getJSON( "./assets/json/maps.json", function( json ) {
    console.log( "JSON Data received, name is " + json);
});