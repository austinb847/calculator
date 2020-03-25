// Business (or back-end) logic:
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


// Front-end logic

$(document).ready(function() {
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());

  alert(add(number1, number2));
});




