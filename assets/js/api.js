var jsonstring;

$.getJSON( "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game", function( json ) {
    jsonstring = json;
    console.log(jsonstring);

});