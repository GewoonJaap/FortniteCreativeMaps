console.log("Get Maps.js loaded!");
var i;

$.getJSON( "https://gewoonjaap.github.io/FortniteCreativeMaps/assets/json/maps.json", function( json ) {
    console.log(json.maps.length)
for (i = 0, l = json.maps.length; i < l; i++) {

    console.log(json.maps[i].SAC);
    console.log(json.maps[i].Author);
    console.log(json.maps[i].IMGUrl);
    console.log(json.maps[i].MapCode);
    //Create div
    var mapdiv = document.createElement("div");             
    mapdiv.setAttribute('class', 'mapcard' );
    mapdiv.setAttribute('id', 'mapcard' + json.maps[i].Author );
    document.getElementById('cards').appendChild(mapdiv);
    var CardTitleP = document.createElement("P");   
    CardTitleP.innerHTML = json.maps[i].Author;          
    CardTitleP.setAttribute('class', 'cardtitle' );
    document.getElementById('mapcard' + json.maps[i].Author).appendChild(CardTitleP);   
}
});