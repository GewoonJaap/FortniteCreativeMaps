var jsonstring;
var url = 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game'


$.ajaxSetup({
    headers : {
      'Authorization' : 'Basic faskd52352rwfsdfs',
      'Target-URL' : url
    }
  });

  $.getJSON( "https://rhetorical-clam.glitch.me/", function( json ) {
    jsonstring = json;
    console.log(json);

});

