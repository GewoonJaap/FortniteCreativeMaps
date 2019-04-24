var jsonstring;
var url = 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game'

    $.getJSON( url+"?callback=?", function( data ){
        console.log( data ); // Logs "jQuery Howto"
      });