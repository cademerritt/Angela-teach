






var db = document.querySelectorAll(".drum").length
for(i=0; i<db; i++){
document.querySelectorAll(".drum")[i].addEventListener( "click", function () {
  
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        ba(buttonInnerHTML);
    });
}

 document.addEventListener( "keypress", function(e){ 
   
        makesound(e.key);
        ba(e.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
         break;
        
        
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
         break;
        
        
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
         break;
        
        
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
         break;
        
        
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
         break;
        
        
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
         break;
        
        
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
         break;
        
        
       
    
        default:console.log(key)
          
    }
}

  function ba(ck){

    var ab= document.querySelector("."+ ck);
    ab.classList.add("pressed");
    setTimeout(myTimeout1, 100) 
    function myTimeout1() {
        ab.classList.remove("pressed");
      }
    
  }

  