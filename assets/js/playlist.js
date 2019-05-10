console.log("!!!! playlist.js Loaded !!!!");
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
    colorLog('[Yarr] Setting up the background', 'success');
    document.getElementById('body').style.backgroundImage = 'url(' + jsonstring.subgameselectdata.battleRoyale.message.image +')';
    document.getElementById('playlists').innerHTML = 'Total playlists available: ' + jsonstring.playlistinformation.playlist_info.playlists.length;
    document.getElementById('update').innerHTML = 'Updated on: ' + jsonstring.playlistinformation.lastModified;
    PlayListLoop();

});


function PlayListLoop(){
    for (i = 0; i < jsonstring.playlistinformation.playlist_info.playlists.length; i++) { 
        console.log(jsonstring.playlistinformation.playlist_info.playlists[i].image);
        AddPlayList(i);



    }
}


function AddPlayList(arrayid){

//Create CARD
var mapdiv = document.createElement("div");             
mapdiv.setAttribute('class', 'dailynewscard' );
mapdiv.setAttribute('id', 'dailynewscard' + arrayid );
document.getElementById('dailynewsbrdiv').appendChild(mapdiv);

// Add Card Title
var CardTitleP = document.createElement("P");   
CardTitleP.innerHTML = jsonstring.playlistinformation.playlist_info.playlists[arrayid].playlist_name;          
CardTitleP.setAttribute('class', 'newstexthead' );
document.getElementById('dailynewscard' + arrayid).appendChild(CardTitleP);   


//Add image

var CardImage = document.createElement("P");   
CardImage.innerHTML = "<a href='" + jsonstring.playlistinformation.playlist_info.playlists[arrayid].image + "' data-lightbox='" + jsonstring.playlistinformation.playlist_info.playlists[arrayid].playlist_name + "'><img alt='Loading...' src='" +jsonstring.playlistinformation.playlist_info.playlists[arrayid].image + "' class='dailynewsimg'></img></a>"         
CardImage.setAttribute('class', 'dailynewsimg2' );
document.getElementById('dailynewscard' + arrayid).appendChild(CardImage);   


//Add Map Code
var CardMapCode = document.createElement("P");   
CardMapCode.innerHTML = jsonstring.playlistinformation.playlist_info.playlists[arrayid].playlist_name;          
CardMapCode.setAttribute('class', 'newstextnormal' );
document.getElementById('dailynewscard' + arrayid).appendChild(CardMapCode);   


}