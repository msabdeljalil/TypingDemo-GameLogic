$(document).ready(function(){
  key = {
    'Backspace': 8,
    'Tab': 9,
    'Enter': 13,
    'Shift': 16,
    'Ctrl': 17,
    'Alt': 18,
    'Pause': 19,
    'Capslock': 20,
    'Esc': 27,
    'Pageup': 33,
    'Pagedown': 34,
    'End': 35,
    'Home': 36,
    'Leftarrow': 37,
    'Uparrow': 38,
    'Rightarrow': 39,
    'Downarrow': 40,
    'Insert': 45,
    'Delete': 46,
    '48': '0',
    '49': '1',
    '50': '2',
    '51': '3',
    '52': '4',
    '53': '5',
    '54': '6',
    '55': '7',
    '56': '8',
    '57': '9',
    '65': 'a',
    '66': 'b',
    '67': 'c',
    '68': 'd',
    '69': 'e',
    '70': 'f',
    '71': 'g',
    '72': 'h',
    '73': 'i',
    '74': 'j',
    '75': 'k',
    '76': 'l',
    '77': 'm',
    '78': 'n',
    '79': 'o',
    '80': 'p',
    '81': 'q',
    '82': 'r',
    '83': 's',
    '84': 't',
    '85': 'u',
    '86': 'v',
    '87': 'w',
    '88': 'x',
    '89': 'y',
    '90': 'z',
    '0numpad': 96,
    '1numpad': 97,
    '2numpad': 98,
    '3numpad': 99,
    '4numpad': 100,
    '5numpad': 101,
    '6numpad': 102,
    '7numpad': 103,
    '8numpad': 104,
    '9numpad': 105,
    'Multiply': 106,
    'Plus': 107,
    'Minut': 109,
    'Dot': 110,
    'Slash1': 111,
    'F1': 112,
    'F2': 113,
    'F3': 114,
    'F4': 115,
    'F5': 116,
    'F6': 117,
    'F7': 118,
    'F8': 119,
    'F9': 120,
    'F10': 121,
    'F11': 122,
    'F12': 123,
    'equal': 187,
    'Coma': 188,
    'Slash': 191,
    'Backslash': 220
}

  var incorrectWords = 0;

  var baseText = $("#base").text()
  var getUserInput = function(){
    return $("#typed").text()
  }//get user input

  var allDone = function(){
    var input = getUserInput();
    if (baseText.length === input.length){
      alert("Send Data to Rails")
      $(document).off('keyup');
      $('input').hide()
      totalCharacters();
    } else {
      return false
    }
  };//allDone

  var spanify = function(text){
    var spanedText = ''
    for(var i = 0; i < text.length; i++){
      spanedText = spanedText + '<span>'+text[i]+'</span>'
    }
    return spanedText
  };

  var checkPresentText = function(){
    $.each($("#base span"), function(i,e){ console.log(e.text) })
  }//checkPresentText

  var totalCharacters = function(){
    $("#game").append("<h1>This many total chars:"+baseText.length+"</h1>");
  };

  var listen = function(e){
    $(document).on('keyup', function(e){
      newCheck();
    });
  }//listen

  var updateIncorrect = function(){
    $("#incorrect").html(incorrectWords);
  };//incorrect

  var newCheck = function(){
    var lastIndex = $('#typed').text().length -1
    // console.log("This is the length" + lastIndex)
    var userInput = getUserInput();
    
    // console.log("base letter "+ baseText[lastIndex])
    // console.log("user letter"+ userInput[lastIndex ])
    if (baseText[lastIndex] === userInput[lastIndex]){
        $("body").css("background-color", "green");
        allDone()
    } else {
      $("body").css("background-color", "red")
      incorrectWords++;
      updateIncorrect();
      console.log(incorrectWords);
      allDone()
      // updateIncorrect()
    }
  };//check

  listen();
});//doc ready