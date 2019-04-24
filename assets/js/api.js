var jsonstring;
var url = 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game'

GetData();

function GetData(){
    $.getJSON( "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game?callback=?", function( json ){
        console.log('hey');
        console.log(json.lastModified); // Logs "jQuery Howto"
      });

    }