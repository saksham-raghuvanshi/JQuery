
$(document).ready(function(){
$("p.event1").click(function(){
    $("p.event1").hide();
});

$("p.event2").dblclick(function(){
    $("p.event2").hide();
});

$("p.event3").mouseenter(function () { 
   $("p.event3").html("You entered!");
});

$("p.event4").mouseleave(function () {  
    $("p.event4").html("You Leave!");
 });

 $("p.event5").mouseup(function () {  
    $("p.event5").html("You UP!");
 });

 $("p.event6").mousedown(function () {  
    $("p.event6").html("You Down!");
 });

 $("p.event7").hover(function () {  
    $("p.event7").html("Hover!");
 });

 $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });

  $("input").blur(function(){
    $(this).css("background-color", "Green");
  });

  $("p.event10").on("click", function(){
    $("p.event10").hide();
  });

});