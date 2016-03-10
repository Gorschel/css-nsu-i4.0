$('.auswahl').css('display', 'block'); 
$('.scanner').css('display', 'none');

$(document).ready(function(){       //kamera
    $('.camera').html5_qrcode(function(data) {
        
  if(blocks[currentBlockIndex].name == data) { //prüfen ob das passende gescannt wurde
    // grün
  } else {
    // rot
  }

}, function() {
}, function() {

});
});                  //kamera ende

var blocks;
var currentBlockIndex;
var tetrisBlocks = {
  "struktur1": [{name: "4gelb", count: 1},{name: "4rot", count: 1}],
  "struktur2": [{name: "4gelb", count: 1},{name: "4gruen", count: 1},{name: "4blau", count: 1}, {name: "8rot", count: 2}]
};


$('.auswahl img').on('click', function() {  //wenn auf eins der bilder geklickt wird
  $('.auswahl').css('display', 'none'); //auswahlbildschirm wird ausgeblendet
  $('.scanner').css('display', 'block'); // scanner wird eingeblendet (breitseitig)
  var blockName = $(this).data('block'); //welcher wurde angeklickt
  blocks = tetrisBlocks[blockName];  //array wird in blocks geschrieben
  currentBlockIndex = 0;  //index=0
});


$('.scanner .confirm-button').on('click', function() {
   currentBlockIndex++; // schrittnummer wird um 1 erhöht
});

//scan 
//
//
//
//
//
//
//
//
//
//