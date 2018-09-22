$(document).ready(function(){

    var animalarray = ["cat", "dog", "bird", "fish", "crab", "falcon", "bat", "zebra", "horse", "sheep", "cow", "donkey", "rhino"];
   // var button = $("<button type='button' class='btn btn-dark'>");

    buttonrun();

    function buttonrun() {
        $(".buttons").empty();
            for ( i = 0; i < animalarray.length; i++ ) {
                $(".buttons").append("<button type='button' class='btn btn-dark animal-button' value="+animalarray[i]+">" + animalarray[i] + "</button>")
                console.log(animalarray[i]);
        };
    };

    $(".submit").on("click", function(event) {
        if ($(".form-control").val() === "") {
            console.log("Why you do that?");
            console.log("Please stop!")
            return false ;      
        }
        else {
            event.preventDefault();
            var value = $(".form-control").val();
            console.log(value);
            animalarray.push(value);
            buttonrun();
            $(".form-control").val('');
        };
    });

    $(".animal-button").on('click', function(){

        var topic = $(this).val();       
        var key = 'kgTj93hZlAWO49nWmnAqGsfHU2TN3xMw';
        var queryurl = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + key + "&limit=10" ;
    
        $.ajax({
            url: queryurl,
            method: "GET"
        }).then(function(response) {
            console.log(response.data)
            console.log(response.data[0].embed_url);
            var giflist = response.data;
            
            for (var i = 0 ; i < giflist.length ; i++) {
                
                var gif = giflist[i].images.fixed_height_still.url;
                var gifstill = giflist[i].images.fixed_height_still.url;
                var gifmove = giflist[i].images.fixed_height_small.url;
                var giftag = $("<img src=" + gif + " data-still=" + gifstill + " data-animate=" + gifmove + " data-state='still'>");
                
                $(giftag).addClass('gif');
                $(".gifs").append(giftag);

                
            };
        });
    })

    $(".gifs").on('click', function(){
        var state = $(this).attr('data-state');
        console.log(state);

        if(state === 'still') {
            console.log('is still');
            $(this).attr('data-state', 'animate');
            gif = gifmove;
        }
        else {
            console.log('is not still');
            $(this).attr('data-state', 'still');
            gif = gifstill;
        }
    })


    
});