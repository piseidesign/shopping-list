$(document).ready(function() {
  $('#btn-add').click(function() {

    var itemAdd = $('#item').val();
    $('#list-items table tbody ').append("<tr><td class='text-center'><i class='fa fa-square-o btn-check'> </i></td> " + "<td>" + itemAdd + "</td>" + "<td class='text-center'> <i class='fa fa-trash'> </i> </td></tr>");
    //clear input field
    $('#item').val('');

    $('.btn-check').click(function(){
      if ($(this).hasClass("fa-square-o")) {
        $(this).removeClass("fa-square-o").addClass("fa-check-square-o");
      } else {
        $(this).removeClass("fa-check-square-o").addClass("fa-square-o");
      };
    });
    $('.fa-trash').click(function() {
      $(this).closest("tr").fadeOut();
    });
  });
  $(document).keyup(function(e) {
    if (e.keyCode == 13) {
      $('#btn-add').click();
    };
  });
})
