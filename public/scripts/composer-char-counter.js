
// Function for counting characters, adding the class of negative
// if count is too high which prompts CSS style to turn the counter red.
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
