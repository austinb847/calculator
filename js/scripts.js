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
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);

    $("#addOutput").text(result);

    $("#addPanel").animate({
      bottom: "+=50",
      height: "toggle"
    }, 1500, function() {
      // Animation complete.
    });
  });

  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);

    $("#subOutput").text(result);

    $("#subPanel").animate({
      bottom: "+=50",
      height: "toggle"
    }, 1500, function() {
      // Animation complete.
    });
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);

    $("#multiplyOutput").text(result);
    
    $("#multiplyPanel").animate({
      bottom: "+=50",
      height: "toggle"
    }, 1500, function() {
      // Animation complete.
    });
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);

    $("#divideOutput").text(result);
    
    $("#dividePanel").animate({
      bottom: "+=50",
      height: "toggle"
    }, 1500, function() {
      // Animation complete.
    });
  });
});

