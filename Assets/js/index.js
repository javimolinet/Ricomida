$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
// para cambiar el color a innerHeight. y prep al hacer doble click
  $("#ingredientes").dblclick(function(){
    $("#ingredientes").css('color','red')
  })

  $("#prep").dblclick(function(){
    $("#prep").css('color','red')
  })
  // hacer esto con las otras tarjetas
  $("#tarj").click(function(){
    $("#cont").toggle('slow');

  })
  $("#tarj1").click(function(){
    $("#cont1").toggle('slow');

  })
  $("#tarj2").click(function(){
    $("#cont2").toggle('slow');

  })
  