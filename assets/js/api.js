var jsonstring;


(function() {
    var api = "https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game?format=json";
    var request = $.getJSON( api, {
        secret : 'secret', 
        appId : 'app', 
        emailId : 'abc@gmail.com',
        async: false,
        dataType : 'json',
      },
      function(data, result){
        console.log(JSON.stringify(data));
      });

    request.complete(function(d, status){
        console.log('Complete the request and got the data - ' + JSON.stringify(d) + '/' + status, filename);
    });

    request.error(function(err){
        console.log('Error happened - ', filename);
        console.log(err);
    });

    request.success(function( data, status, jqXHR ) {
        console.log(data);
    });


    })();