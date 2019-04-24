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
    console.log(jsonstring.battleroyalenews.news);
    console.log(jsonstring.battleroyalenews.news.messages.length)
    DailyNewsLoop(); 

});


function DailyNewsLoop(){
    for (i = 0; i < jsonstring.battleroyalenews.news.messages.length; i++) { 
        console.log(jsonstring.battleroyalenews.news.messages[i].image)
        AddDailyNews(i);


    }
}

function AddDailyNews(arrayid){
//Create CARD
var mapdiv = document.createElement("div");             
mapdiv.setAttribute('class', 'dailynewscard' );
mapdiv.setAttribute('id', 'dailynewscard' + arrayid );
document.getElementById('dailynewsdiv').appendChild(mapdiv);

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

