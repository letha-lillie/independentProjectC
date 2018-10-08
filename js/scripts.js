var pingPong = function(number) {
  $('ul li').remove();

  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      $('ul').append('<li>' + 'PING-PONG!' + '</li>');

    } else if (index % 3 === 0) {
      $('ul').append('<li>' + 'Ping!' + '</li>');

    } else if (index % 5 === 0) {
      $('ul').append('<li>' + 'Pong!' + '</li>');

    } else {

      $('ul').append('<li>' + index + '</li>');
    }
  }
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = pingPong(number);
  });
  $("#result").show();
});
