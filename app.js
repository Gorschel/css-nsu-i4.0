var strukturName;
var SR;                                                             //Schritt bzw schrittnummer
var srcSwap;                                                        //ist imer noch sw :(   
var strukturen = {                                                  //Aufbau
    "struktur1": [{name: "8gelb"},
                  {name: "8rot"}],
    "struktur2": [{name: "4gelb"},
                  {name: "4gruen", imgName: 'pics/struktur2_1.jpg'},
                  {name: "4blau", imgName: 'pics/struktur2_2.jpg'}, 
                  {name: "8rot", imgName: 'pics/struktur2_3.jpg'},
                  {name: "8rot"}]
    };

    $(document).ready(function(){                                       //document ready
        $('.auswahl img').on('click', function() {                          // wenn auf eins der bilder geklickt wird
            $('.auswahl').css('display', 'none');                   
            $('.scanner').css('display', 'block');                  
            start_scanner();                                          
            strukturName = $(this).data('struktur-name');                   // welches wurde angeklickt
            if($(this).attr('src')=='pics/struktur1_sw.jpg') 
                srcSwap = 'pics/struktur1.jpg'
            if($(this).attr('src')=='pics/struktur2_sw.jpg') 
                srcSwap = 'pics/struktur2.jpg'
            SR = 0;
    });  

    $('#confirm-button').on('click', function(){
        $('.scanner').css('display', 'none');
        $('.bauschritte').css('display', 'block')
        $('.bauschritte img').attr('src', strukturen[strukturName][SR].imgName);    // img setzen
        SR++;
        if (strukturen[strukturName].length == SR){                     //if(endbedingung) dann ende
            $('.scanner').css('display', 'none');
            $('.bauschritte').css('display', 'none');
            $('.end').css('display', 'block');
            $('.end img').attr('src', srcSwap)
        };
        if (SR==1){                                                     //ausnahmen für erstes bauteil
            $('.bauschritte').css('display', 'none');
            $('.scanner').css('display', 'block');
            $('.result').css ("background", "transparent")
            $('#confirm-button').css('display', 'none')
        }; 
    });  
    
    $('#angebaut-button').on('click', function(){
        $('.bauschritte').css('display', 'none');
        $('.scanner').css('display', 'block');
        $('.result').css ("background", "transparent")
        $('#confirm-button').css('display', 'none')
    })
    
    $('#restart').on('click', function(){
        location.reload();
    })
        
    var start_scanner = function(){                             
        $('.camera').html5_qrcode(function(data) {
            if(strukturen[strukturName][SR].name == data) {             //abgleich scan mit strukturreihenfolge
                $('.result').css ("background", "green")
                $('#confirm-button').css('display', 'block')                    
            } else {
                $('.result').css ("background", "red")
                setTimeout(function(){
                   $('.result').css ("background", "transparent")
                },1000)
                $('#confirm-button').css('display', 'none')                      
            }
            }, function() {
            }, function() {
        });
    };   
});