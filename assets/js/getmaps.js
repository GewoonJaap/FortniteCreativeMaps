console.log("Get Maps.js loaded!");
var i;

$.getJSON( "https://gewoonjaap.github.io/FortniteCreativeMaps/assets/json/maps.json", function( json ) {
    console.log(json.maps.length)
for (i = 0, l = json.maps.length; i < l; i++) {

    console.log(json.maps[i].SAC);
    console.log(json.maps[i].Author);
    console.log(json.maps[i].IMGUrl);
    console.log(json.maps[i].MapCode);
    //Create card div
    var mapdiv = document.createElement("div");             
    mapdiv.setAttribute('class', 'mapcard' );
    mapdiv.setAttribute('id', 'mapcard' + json.maps[i].MapCode );
    document.getElementById('cards').appendChild(mapdiv);
    //Card Title

    var CardImage = document.createElement("P");   
    CardImage.innerHTML = "<a href='" +json.maps[i].IMGUrl + "' data-lightbox='" + json.maps[i].MapCode + "'><img src='" +json.maps[i].IMGUrl + "' class='cardimg'></img></a>"         
    CardImage.setAttribute('class', 'cardimagecode' );
    document.getElementById('mapcard' + json.maps[i].MapCode).appendChild(CardImage);   
//Add Image
    var CardTitleP = document.createElement("P");   
    CardTitleP.innerHTML = json.maps[i].Author;          
    CardTitleP.setAttribute('class', 'cardtitle' );
    document.getElementById('mapcard' + json.maps[i].MapCode).appendChild(CardTitleP);   
}
});