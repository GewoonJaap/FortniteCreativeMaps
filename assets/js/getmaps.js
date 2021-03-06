console.log("Get Maps.js loaded!");
var i = 0;
var jsonstring;
var jsonstringparse;
var MapsToGet = 3;
var listElm;
var mapsadded = 0;



$.getJSON( "https://gewoonjaap.github.io/FortniteCreativeMaps/assets/json/maps.json", function( json ) {
    jsonstring = json;
    ForEachLoopAddNew(jsonstring);
    colorLog('"Total maps: ' + json.maps.length + '"', 'info');
    document.getElementById('maps').innerText = 'Total maps available: ' + json.maps.length;

});

function ForEachLoopAddNew(json){
    for (i, l = json.maps.length; i < l && i < MapsToGet; i++) {
        AddCreativeMapDelay(i)
        colorLog(json.maps[i].SAC, 'success');
        colorLog(json.maps[i].Author, 'success');
        colorLog(json.maps[i].IMGUrl, 'success');
        colorLog(json.maps[i].MapCode, 'success');
    
    
    
    
    
    }

}


function AddCreativeMapDelay(url){
    
    jsonstringparse = jsonstring;
    console.log("Found a map: " + jsonstringparse.maps[url].MapCode)
    var min = 1,
       max = 2;
       id = url;
   var rand = Math.floor(Math.random() * (max - min + 1) + min);
   setTimeout(function(){ AddCreativeMap(url); }, rand * 1000);
   
   }

   //Add map to site

   function AddCreativeMap(arrayid){

      
//Check for duplicate map
       if(document.getElementById("mapcard" + jsonstring.maps[arrayid].MapCode)){
           colorLog('[John Wick] Found a duplicate map with id: ' + jsonstring.maps[arrayid].MapCode + ', ignoring.', 'warning');
           mapsadded++;
       }

       else{
 //Create CARD
    var mapdiv = document.createElement("div");             
    mapdiv.setAttribute('class', 'mapcard' );
    mapdiv.setAttribute('id', 'mapcard' + jsonstring.maps[arrayid].MapCode );
    document.getElementById('cards').appendChild(mapdiv);

// Add Card Title
       console.log(jsonstring.maps[arrayid].Author)
    var CardTitleP = document.createElement("P");   
    CardTitleP.innerHTML = jsonstring.maps[arrayid].Author + " | " + jsonstring.maps[arrayid].MapName;          
    CardTitleP.setAttribute('class', 'cardtitle' );
    document.getElementById('mapcard' + jsonstring.maps[arrayid].MapCode).appendChild(CardTitleP);   
   
   
    //Add image

    var CardImage = document.createElement("P");   
    CardImage.innerHTML = "<a href='" +jsonstringparse.maps[arrayid].IMGUrl + "' data-lightbox='" + jsonstringparse.maps[arrayid].MapCode + "'><img alt='Loading...' src='" +jsonstringparse.maps[arrayid].IMGUrl + "' class='cardimg'></img></a>"         
    CardImage.setAttribute('class', 'cardimagecode' );
    document.getElementById('mapcard' + jsonstringparse.maps[arrayid].MapCode).appendChild(CardImage);   


    //Add Map Code
    var CardMapCode = document.createElement("P");   
    CardMapCode.innerHTML = "<p onmouseover='CopyToClipBoard(" + jsonstringparse.maps[arrayid].MapCode + ")' ><a href='https://fortnite.com/fn/" + jsonstringparse.maps[arrayid].MapCode + "'>Map Code: " + jsonstringparse.maps[arrayid].MapCode + "</a></p>";          
    CardMapCode.setAttribute('class', 'cardmapcode' );
    document.getElementById('mapcard' + jsonstringparse.maps[arrayid].MapCode).appendChild(CardMapCode);   



        //Add SAC
        var CardMapCode = document.createElement("P");   
        CardMapCode.innerHTML = "Support-a-Creator: " + jsonstringparse.maps[arrayid].SAC;          
        CardMapCode.setAttribute('class', 'cardmapcode' );
        document.getElementById('mapcard' + jsonstringparse.maps[arrayid].MapCode).appendChild(CardMapCode);   


        //Add map to var

        mapsadded++;



for (i2 = 0, l2 = jsonstringparse.maps[arrayid].IMG2.length; i2 < l2; i2++) {
    console.log(jsonstringparse.maps[arrayid].IMG2[i2]);
    if(jsonstringparse.maps[arrayid].IMG2[i2] == jsonstringparse.maps[arrayid].IMGUrl){
        colorLog('[John Wick] Found a duplicate image, skipping....', 'warning');
    }
    else{

        //Add image

        var CardImage = document.createElement("P");   
        CardImage.innerHTML = "<a href='" +jsonstringparse.maps[arrayid].IMG2[i2] + "' data-lightbox='" + jsonstringparse.maps[arrayid].MapCode + "'></a>"         
        CardImage.setAttribute('class', 'cardimagecode' );
        document.getElementById('mapcard' + jsonstringparse.maps[arrayid].MapCode).appendChild(CardImage);   

    }
    }
}
   }



   function CopyToClipBoard(elementid){
      /* Get the text field */

   }


   // End of page

   function AutomaticAdder(){
       document.getElementById('loader').style.visibility = 'visible';
       MapsToGet = MapsToGet +6;
       ForEachLoopAddNew(jsonstring);
       loopchecker();
   }

   function loopchecker(){
    if(mapsadded == MapsToGet || mapsadded == jsonstring.maps.length){
        document.getElementById('loader').style.visibility = 'hidden';
    }
    else{
        loopchecker()
    }

   }