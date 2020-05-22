//define functions here

function getIt (){
  //The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
  
  $("p").click(function(){
  alert("Hey!");
    
  });
}

function frameIt (){
  //The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
  
 
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
  
  
  
}

function pressIt (){
  //The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.

$(#).on('keydown', function(key) {
  if (key.which == 83){
    alert('G was pressed');
  }
});
  
}

function submitIt (){
  //The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
  
  
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
    return;
  }

});
  
  
}

$(document).ready(function(){

// call functions here

});
