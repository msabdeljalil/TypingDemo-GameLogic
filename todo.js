$(document).ready(function(){
  var typos = 0;
  var counter = 0;
  var totalChars = $("#base").text().length


  var spanify = function(text){
    var spanedText = ''
    for(var i = 0; i < text.length; i++){
      spanedText = spanedText + '<span>'+text[i]+'</span>'
    }
    return spanedText
  };




  var updateIncorrect = function(){
    $("#incorrect").html(typos);
  };//incorrect

  var isComplete = function(){
    if (counter === totalChars){
      $(document).off('keypress');
      alert("Send Data to Rails")
    }
  }; //isComplete


  var getChars = function(){
    var chars = [];
    $.each($("#base span"), function(i,e){
      chars.push(e.innerHTML)
    })
    return chars
  }//getChars

  var newCheck = function(keypress){
    characters = getChars()
    if (keypress === characters[counter] ){
        $("body").css("background-color", "green");
        counter++
    } else {
      $("body").css("background-color", "red")
      typos++;
      updateIncorrect();
    }
  }; //newCheck

  var listen = function(){
    $(document).keypress(function(event){
      newCheck(event.key);
      isComplete()
    });
  }; //listen

  listen();
});//doc ready
