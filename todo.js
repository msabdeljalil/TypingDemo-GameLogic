$(document).ready(function(){
  var typos = 0;
  var counter = 0;
  var totalChars = $("#base span").length
  var totalKeypress = 0
  var startTime = new Date();
  var endTime;
  var CPS;
  var showCursor = function(){
    var next = (counter + 1)
    $("#base span:nth-child("+counter+")").removeClass('cursor')
    $("#base span:nth-child("+next+")").addClass('cursor')
  };
  showCursor();

  var spannify = function(text){
    var spannedText = ''
    for(var i = 0; i < text.length; i++){
      spannedText = spannedText + '<span class="untyped">'+text[i]+'</span>'
    }
    return spannedText
  };

  var sendData = function(){
    console.log("Total Keypress: " + totalKeypress)
    console.log("Total totalChars: " + totalChars)
    console.log("Total typos: " + typos)
    console.log("Total time: " + ((endTime - startTime)/1000))
    console.log("Total CPS(chars per second): " + (totalKeypress / ((endTime - startTime)/1000)))
  };


  var updateIncorrect = function(){
    $("#incorrect").html(typos);
  };//incorrect

  var addClassTyped = function(){
    $("#base span:nth-child("+counter+")").removeClass('untyped')
    $("#base span:nth-child("+counter+")").addClass('typed')
    showCursor();
  }

  var isComplete = function(){
    if (counter === totalChars){
      $(document).off('keypress');
      alert("Send Data to Rails")
      endTime = new Date();
      sendData();
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
        addClassTyped();
    } else {
      $("body").css("background-color", "red")
      typos++;
      updateIncorrect();
    }
  }; //newCheck

  var listen = function(){
    $(document).keypress(function(event){
      totalKeypress++;
      showCursor();
      newCheck( String.fromCharCode(event.which) );      
      // newCheck(event.key); // Firefox is awesome!!
      isComplete()
    });
  }; //listen

  listen();
});//doc ready
