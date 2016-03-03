$('.camera').html5_qrcode(function(data) {
  var color = 'red';
  if(data == '8gelb'){color = 'yellow';}
  if(data == '4blau'){color='blue';}
  if (data=='4gruen'){color='green';}
  $('.result').css('background',color).text(data);

}, function() {
}, function() {

});
