

var start_scanner = function(){       //scanner starten
  $('.camera').html5_qrcode(function(data) {
    //$(".result").text(data)  //text ausgeben
    if(blocks[currentBlockIndex].name == data) { //prüfen ob das passende gescannt wurde
        $('.result').css ("background", "green") //bg=grün // sucht nach html element, bei result->wird css element auf () gesetzt
    } else {
        // bg=rot
    }
    }, function() {
    }, function() {
  });
}; //"kamera"" ende

var blocks;
var currentBlockIndex;
var tetrisBlocks = {
  "struktur1": [{name: "4gelb", count: 1},{name: "4rot", count: 1}],
  "struktur2": [{name: "4gelb", count: 1},{name: "4gruen", count: 1},{name: "4blau", count: 1}, {name: "8rot", count: 2}]
};
$('.scanner .confirm-button').on('click', function() { // auf confirm klicken
   currentBlockIndex++; // schrittnummer wird um 1 erhöht
});

$(document).ready(function(){ // wenn html geladen, dann function
$('.auswahl img').on('click', function() {  //wenn auf eins der bilder geklickt wird
  $('.auswahl').css('display', 'none'); //auswahlbildschirm wird ausgeblendet
  $('.scanner').css('display', 'block'); // scanner wird eingeblendet (breitseitig)
  start_scanner();   //wenn scanner aktiv sein soll
  var blockName = $(this).data('block'); //welcher wurde angeklickt
  blocks = tetrisBlocks[blockName];  //array wird in blocks geschrieben
  currentBlockIndex = 0;  //index=0 setzen
});
});





