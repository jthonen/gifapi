$(document).ready(function(){

    var animalarray = ["cat", "dog", "bird", "fish", "crab", "falcon", "bat", "zebra", "horse", "sheep", "cow", "donkey", "rhino"];
   
    buttonrun();

    function buttonrun() {
        $(".buttons").empty();
            for ( i = 0; i < animalarray.length; i++ ) {
                $(".buttons").append("<button type='button' class='btn btn-dark animal-button' value="+animalarray[i]+">" + animalarray[i] + "</button>")
                console.log(animalarray[i]);
                
        };
        animalclick();
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
            $(".form-control").val('');
            buttonrun();
            
        };
    });

    function animalclick() {
        $(".animal-button").on('click', function(){
            $(".gifs").empty();
            var topic = $(this).val();       
            var key = 'kgTj93hZlAWO49nWmnAqGsfHU2TN3xMw';
            var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + key + "&limit=10" ;
        
            $.ajax({
                url: queryurl,
                method: "GET"
            }).then(function(response) {
                console.log(response.data)
                console.log(response.data[0].embed_url);
                console.log(response.data[0].rating);
                var giflist = response.data;
                
                for (var i = 0 ; i < giflist.length ; i++) {
                    
                    var gif = giflist[i].images.fixed_height_still.url;
                    var rating = giflist[i].rating;
                    var gifstill = giflist[i].images.fixed_height_still.url;
                    var gifmove = giflist[i].images.fixed_height.url;
                    var giftag = $("<img src=" + gif + " data-still=" + gifstill + " data-animate=" + gifmove + " data-state='still'>"+"<p>Rating: "+rating+"</p>");
                    
                    $(giftag).addClass('animal-gif');
                    $(".gifs").append(giftag);

                };

                $(".animal-gif").on('click', function() {
                    var state = $(this).attr('data-state');
                    console.log(state);

                    if ( state === 'still') {
                        console.log('is still');
                        $(this).attr('src', $(this).attr('data-animate'));
                        $(this).attr('data-state', 'animate');
                    }
                    else {
                        console.log('is not still');
                        $(this).attr('src', $(this).attr('data-still'));
                        $(this).attr('data-state', 'still');
                    }
                })

            });
        })
    }
});