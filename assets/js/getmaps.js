console.log("Get Maps.js loaded!");
var i = 0;
var jsonstring;
var jsonstringparse;
var MapsToGet = 3;

$.getJSON( "https://gewoonjaap.github.io/FortniteCreativeMaps/assets/json/maps.json", function( json ) {
    jsonstring = json;
    ForEachLoopAddNew(jsonstring);
    console.log(json.maps.length)

});

function ForEachLoopAddNew(json){
    for (i, l = json.maps.length; i < l && i < MapsToGet; i++) {
        AddCreativeMapDelay(i)
    
        console.log(json.maps[i].SAC);
        console.log(json.maps[i].Author);
        console.log(json.maps[i].IMGUrl);
        console.log(json.maps[i].MapCode);
    
    
    
    
    
    }

}


function AddCreativeMapDelay(url){
    
    jsonstringparse = jsonstring;
    console.log(jsonstringparse.maps[url].Author + " lol2")
    var min = 1,
       max = 2;
       id = url;
   var rand = Math.floor(Math.random() * (max - min + 1) + min);
   setTimeout(function(){ AddCreativeMap(url); }, rand * 1000);
   
   }

   //Add map to site

   function AddCreativeMap(arrayid){
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
    CardImage.innerHTML = "<a href='" +jsonstringparse.maps[arrayid].IMGUrl + "' data-lightbox='" + jsonstringparse.maps[arrayid].MapCode + "'><img src='" +jsonstringparse.maps[arrayid].IMGUrl + "' class='cardimg'></img></a>"         
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



for (i2 = 0, l2 = jsonstringparse.maps[arrayid].IMG2.length; i2 < l2; i2++) {
    console.log(jsonstringparse.maps[arrayid].IMG2[i2]);

        //Add image

        var CardImage = document.createElement("P");   
        CardImage.innerHTML = "<a href='" +jsonstringparse.maps[arrayid].IMG2[i2] + "' data-lightbox='" + jsonstringparse.maps[arrayid].MapCode + "'></a>"         
        CardImage.setAttribute('class', 'cardimagecode' );
        document.getElementById('mapcard' + jsonstringparse.maps[arrayid].MapCode).appendChild(CardImage);   
    }
   }



   function CopyToClipBoard(elementid){
      /* Get the text field */

   }


   // End of page


   $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height()){
        console.log('Reached end of page');
       MapsToGet + 4;
       ForEachLoopAddNew(jsonstring);
    }
  });