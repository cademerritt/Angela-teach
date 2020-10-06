$(document).keypress(()=>{
    $("h1").text("WELCOME");
});

var RN = Math.floor((Math.random()*4)+1) ;
console.log(RN);


if(RN == 1){
    var green = new Audio('sounds/green.mp3');
      green.play();
};






$( ".green" ).click(function () {
    $( ".green" ).animate({ opacity: 0.25,}, 60, function() {
        var green = new Audio('sounds/green.mp3');
      green.play();
     $( ".green" ).animate({ opacity: 1,}, 60, function() {
    });
    });
  });


$( ".red" ).click(function() {
    $( ".red" ).animate({ opacity: 0.25,}, 60, function() {
        var red = new Audio('sounds/red.mp3');
        red.play();
         $( ".red" ).animate({ opacity: 1,}, 60, function() {
    });
    });
  });
 

$( ".yellow" ).click(function() {
    $( ".yellow" ).animate({ opacity: 0.25,}, 60, function() {
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
         $( ".yellow" ).animate({ opacity: 1,}, 60, function() {
    });
    });
  });
 

$( ".blue" ).click(function() {
    $( ".blue" ).animate({ opacity: 0.25,}, 60, function() {
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
        $( ".blue" ).animate({ opacity: 1,}, 60, function() {
    });
    });
  });
 