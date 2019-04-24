var jsonstring;
var url = 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game'

GetData();

function GetData(){
    $.getJSON( "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game?callback=?", function( data ){
        console.log('hey');
        console.log(data); // Logs "jQuery Howto"
      });

    }