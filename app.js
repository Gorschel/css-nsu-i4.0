var start_scanner = function(){                             
  $('.camera').html5_qrcode(function(data) {
    $('.scr').text("letzte: "+data);                        
    
    if(blocks[currentBlockIndex].name == data) {            //prüfen ob das passende gescannt wurde
        $('.result').css ("background", "green")
        $('#confirm-button').css('display', 'block')                    
    } else {
        $('.result').css ("background", "red")                      
    }
    }, function() {
    }, function() {
  });
};                                                          

var blocks;                                                 // ?
var currentBlockIndex;                                      // schrittnummer
var blockstructure = {                                      
  "struktur1": [{name: "4gelb", count: 1},
                {name: "4rot", count: 1}],
  "struktur2": [{name: "4gelb", count: 1},
                {name: "4gruen", count: 1},
                {name: "4blau", count: 1}, 
                {name: "8rot", count: 2}]
};

$(document).ready(function(){                               
  $('.auswahl img').on('click', function() {                 // wenn auf eins der bilder geklickt wird
    $('.auswahl').css('display', 'none');                   
    $('.scanner').css('display', 'block');                  
  start_scanner();                                          
  var blockName = $(this).data('block');                    // welcher wurde angeklickt
    blocks = blockstructure[blockName];                     // array wird in blocks geschrieben
    currentBlockIndex = 0;                                  
  $('#confirm-button').on('click', function(){
    $('.scanner').css('display', 'none')
    if $('#confirm-button').css('display', 'none')
    currentBlockIndex++                                  
  });    
});
});