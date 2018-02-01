$(document).ready(function() {
  $('textarea').on("keyup", function(event) {
    let char = $(this).val();
    let count = char.length;
    var myCounter = 140 - count;
    let countr = $(this).parent().children('#count').text(myCounter);
    if (myCounter < 0) {
      $('#count').addClass('negative');
    } else {
      $('#count').removeClass('negative');
    }
  });
});
