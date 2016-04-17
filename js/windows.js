$(document).ready(function () {
    $('.window').draggable({ cursor: "move", handle: "div.header", snap: "#desktop", zIndex:2});
    $(".window").resizable({containment: '#desktop'});

    $('#init').click(function(){
      $('#menu').toggle();
    });

    $('#desktop').droppable();
    $('.icon').draggable({ cursor: "move", snap: "#desktop", revert: 'invalid', zIndex:2});
    $('#recycle_bin').droppable({
        drop: function(event, ui){
            $( "#dialog" ).dialog({
              resizable: false,
              height:140,
              modal: true,
              title: "Do you want to delete it?",
              buttons: {
                "Yes": function() {
                  $( this ).dialog( "close" );
                  ui.draggable.toggle( "scale" );
                  $('#recycle_bin').effect( "shake" );
                },
                Cancel: function() {
                  $( this ).dialog( "close" );
                }
              }
            });
        }
    });

});
