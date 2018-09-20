$(document).ready(function(){

    var animalarray = ["cat", "dog", "bird", "fish", "crab", "falcon", "bat", "zebra", "horse", "sheep", "cow", "donkey", "rhino"];
    var button = $("<button type='button' class='btn btn-dark'>");

    for ( i = 0; i < animalarray.length; i++ ) {
        $(".buttons").append("<button type='button' class='btn btn-dark'>" + animalarray[i] + "</button>")
        console.log(animalarray[i]);
    };

    $(".submit").on("click", function(){
        animalarray.push($(this).val());
    });

   
    











});