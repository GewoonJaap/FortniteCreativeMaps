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
   

    // Add Author


    var CardTitleP = document.createElement("P");   
    CardTitleP.innerHTML = json.maps[i].Author;          
    CardTitleP.setAttribute('class', 'cardtitle' );
    document.getElementById('mapcard' + json.maps[i].MapCode).appendChild(CardTitleP);   
   
   
    //Add image

    var CardImage = document.createElement("P");   
    CardImage.innerHTML = "<a href='" +json.maps[i].IMGUrl + "' data-lightbox='" + json.maps[i].MapCode + "'><img src='" +json.maps[i].IMGUrl + "' class='cardimg'></img></a>"         
    CardImage.setAttribute('class', 'cardimagecode' );
    document.getElementById('mapcard' + json.maps[i].MapCode).appendChild(CardImage);   


    //Add Map Code
    var CardMapCode = document.createElement("P");   
    CardMapCode.innerHTML = "<a href='https://fortnite.com/fn/" + json.maps[i].MapCode + "'>Map Code: " + json.maps[i].MapCode + "</a>";          
    CardMapCode.setAttribute('class', 'cardmapcode' );
    document.getElementById('mapcard' + json.maps[i].MapCode).appendChild(CardMapCode);   



        //Add SAC
        var CardMapCode = document.createElement("P");   
        CardMapCode.innerHTML = "Support-a-Creator: " + json.maps[i].SAC;          
        CardMapCode.setAttribute('class', 'cardmapcode' );
        document.getElementById('mapcard' + json.maps[i].MapCode).appendChild(CardMapCode);   
}
});