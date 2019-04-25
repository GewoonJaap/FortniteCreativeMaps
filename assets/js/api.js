console.log("!!!! api.js Loaded !!!!");
var jsonstring;
var url = 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game';
var BattleRoyaleImage;
var STWImage;
var CreativeImage;


$.ajaxSetup({
    headers : {
      'Authorization' : 'Basic faskd52352rwfsdfs',
      'Target-URL' : url
    }
  });

  $.getJSON( "https://rhetorical-clam.glitch.me/", function( json ) {
    jsonstring = json;
    colorLog('[Yarr] Setting up the background', 'success');
    colorLog('[Yarr] Background BattleRoyale: ' + jsonstring.subgameselectdata.battleRoyale.message.image, 'success');
    colorLog('[Yarr] Background Creative: ' + jsonstring.subgameselectdata.creative.message.image, 'success');
    colorLog('[Yarr] Background Save the World: ' + jsonstring.subgameselectdata.saveTheWorld.message.image, 'success');
    BattleRoyaleImage = jsonstring.subgameselectdata.battleRoyale.message.image;
    CreativeImage = jsonstring.subgameselectdata.creative.message.image;
    STWImage = jsonstring.subgameselectdata.saveTheWorld.message.image;
    if(BattleRoyaleImage == 'https://cdn2.unrealengine.com/Fortnite/fortnite-game/subgameselect/08BR_LTM_Endgame_SubgameSelect_v2-1920x1080-1db25cf643f699644238c7a9877eef1710c50e7d.jpg'){
        BattleRoyaleImage = 'assets/images/backgrounds/Endgame_Loadingscreen.png';
    }
    document.getElementById('dailynewsbrdiv').style.backgroundImage = 'url(' + BattleRoyaleImage +')';
    document.getElementById('dailynewscreativediv').style.backgroundImage = 'url(' + CreativeImage +')';
    document.getElementById('dailynewsstwdiv').style.backgroundImage = 'url(' + STWImage +')';
    document.getElementById('update').innerHTML = 'Updated on: ' + jsonstring.subgameselectdata.lastModified;
    DailyNewsLoop(); 
    CreativeNewsLoop();
    STWNewsLoop();

});


function DailyNewsLoop(){
    for (i = 0; i < jsonstring.battleroyalenews.news.messages.length; i++) { 
        console.log(jsonstring.battleroyalenews.news.messages[i].image)
        AddDailyNews(i);



    }
}

function STWNewsLoop(){
    for (i = 0; i < jsonstring.savetheworldnews.news.messages.length; i++) { 
        console.log(jsonstring.savetheworldnews.news.messages[i].image)
        AddSTWNews(i);



    }
}
function CreativeNewsLoop(){
    for (i = 0; i < jsonstring.creativeAds.ad_info.ads.length; i++) { 
        AddCreativeNews(i);


    }
}

function AddDailyNews(arrayid){
//Create CARD
var mapdiv = document.createElement("div");             
mapdiv.setAttribute('class', 'dailynewscard' );
mapdiv.setAttribute('id', 'dailynewscard' + arrayid );
document.getElementById('dailynewsbrdiv').appendChild(mapdiv);

// Add Card Title
var CardTitleP = document.createElement("P");   
CardTitleP.innerHTML = jsonstring.battleroyalenews.news.messages[arrayid].title;          
CardTitleP.setAttribute('class', 'newstexthead' );
document.getElementById('dailynewscard' + arrayid).appendChild(CardTitleP);   


//Add image

var CardImage = document.createElement("P");   
CardImage.innerHTML = "<a href='" + jsonstring.battleroyalenews.news.messages[arrayid].image + "' data-lightbox='" + jsonstring.battleroyalenews.news.messages[arrayid].body + "'><img alt='Loading...' src='" +jsonstring.battleroyalenews.news.messages[arrayid].image + "' class='dailynewsimg'></img></a>"         
//CardImage.setAttribute('class', 'dailynewsimg' );
document.getElementById('dailynewscard' + arrayid).appendChild(CardImage);   


//Add Map Code
var CardMapCode = document.createElement("P");   
CardMapCode.innerHTML = jsonstring.battleroyalenews.news.messages[arrayid].body;          
CardMapCode.setAttribute('class', 'newstextnormal' );
document.getElementById('dailynewscard' + arrayid).appendChild(CardMapCode);   
 

}


function AddCreativeNews(arrayid){
   //Create CARD
var mapdiv = document.createElement("div");             
mapdiv.setAttribute('class', 'dailynewscard' );
mapdiv.setAttribute('id', 'dailynewscreativecard' + arrayid );
document.getElementById('dailynewscreativediv').appendChild(mapdiv);

// Add Card Title
var CardTitleP = document.createElement("P");   
CardTitleP.innerHTML = jsonstring.creativeAds.ad_info.ads[arrayid].header;          
CardTitleP.setAttribute('class', 'newstexthead' );
document.getElementById('dailynewscreativecard' + arrayid).appendChild(CardTitleP);   


//Add image

var CardImage = document.createElement("P");   
CardImage.innerHTML = "<a href='" + jsonstring.creativeAds.ad_info.ads[arrayid].image + "' data-lightbox='" + jsonstring.creativeAds.ad_info.ads[arrayid].image + "'><img alt='Loading...' src='" +jsonstring.creativeAds.ad_info.ads[arrayid].image + "' class='dailynewsimg'></img></a>"         
//CardImage.setAttribute('class', 'dailynewsimg' );
document.getElementById('dailynewscreativecard' + arrayid).appendChild(CardImage);   


//Add Map Code
var CardMapCode = document.createElement("P");   
CardMapCode.innerHTML = jsonstring.creativeAds.ad_info.ads[arrayid].description;          
CardMapCode.setAttribute('class', 'newstextnormal' );
document.getElementById('dailynewscreativecard' + arrayid).appendChild(CardMapCode);   
 

} 

function AddSTWNews(arrayid){
    //Create CARD
 var mapdiv = document.createElement("div");             
 mapdiv.setAttribute('class', 'dailynewscard' );
 mapdiv.setAttribute('id', 'dailynewsstwcard' + arrayid );
 document.getElementById('dailynewsstwdiv').appendChild(mapdiv);
 
 // Add Card Title
 var CardTitleP = document.createElement("P");   
 CardTitleP.innerHTML = jsonstring.savetheworldnews.news.messages[arrayid].title;          
 CardTitleP.setAttribute('class', 'newstexthead' );
 document.getElementById('dailynewsstwcard' + arrayid).appendChild(CardTitleP);   
 
 
 //Add image
 
 var CardImage = document.createElement("P");   
 CardImage.innerHTML = "<a href='" + jsonstring.savetheworldnews.news.messages[arrayid].image + "' data-lightbox='" + jsonstring.savetheworldnews.news.messages[arrayid].image + "'><img alt='Loading...' src='" +jsonstring.savetheworldnews.news.messages[arrayid].image + "' class='dailynewsimg'></img></a>"         
 //CardImage.setAttribute('class', 'dailynewsimg' );
 document.getElementById('dailynewsstwcard' + arrayid).appendChild(CardImage);   
 
 
 //Add Map Code
 var CardMapCode = document.createElement("P");   
 CardMapCode.innerHTML = jsonstring.savetheworldnews.news.messages[arrayid].body;          
 CardMapCode.setAttribute('class', 'newstextnormal' );
 document.getElementById('dailynewsstwcard' + arrayid).appendChild(CardMapCode);   
  
 
 } 


