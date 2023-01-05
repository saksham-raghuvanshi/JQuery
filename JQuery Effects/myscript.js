$(document).ready(function () {


    $("#hide").click(function (){
      $("p.effect1").hide(1000);              //$(selector).hide(speed,callback);
    });

    $("#show").click(function (){
        $("p.effect1").show(1000);            //$(selector).hide(speed,callback);
      });

      $("#togggle").click(function(){
        $("#effect2").toggle();              //$(selector).toggle(speed,callback);
      });

   

     $(".fade1").click(function () { 
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
        
     });

     $("#flip").click(function () { 
        $("#panel").slideToggle("slow");   
     });

     $("#ani").click(function(){
        $("#div4").animate({
            left:'250px',
            bottom:'250px',
            opacity:'0.5',
            height:'150px',
            width:'150px'
        });
     });


     

});

    




    