$(document).ready(function() {
  var display = document.getElementById('display');
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var new_operation = true;

  $('#display').click(function() {
    if(new_operation) {
      new_operation = false;
      display.value = "";
    }
  });

  $('#' + numbers.join(',#')).click(function(){
    if(new_operation) {
      new_operation = false;
      display.value = this.id;
    } else {
      display.value += this.id;
    }
  });

  $('#add').click(function() {
    display.value += "+";
    new_operation = false;
  });

  $('#subtract').click(function() {
    display.value += "-";
    new_operation = false;
  });

  $('#multiply').click(function() {
    display.value += "*";
    new_operation = false;
  });

  $('#divide').click(function() {
    display.value += "/";
    new_operation = false;
  });

  $('#sine').click(function() {
    new_operation = true;
    try {
      display.value = Math.sin(eval(display.value));
    } catch(err) {
      display.value = "NaN";
    }
  });

  $('#cosine').click(function() {
    new_operation = true;
    try {
      display.value = Math.cos(eval(display.value));
    } catch(err) {
      display.value = "NaN";
    }
  });

  $('#tangent').click(function() {
    new_operation = true;
    try {
      display.value = Math.tan(eval(display.value));
    } catch(err) {
      display.value = "NaN";
    }
  });

  $('#plusmn').click(function() {
    var sign = display.value.substring(0, 1);
    if(sign == "-") {
      display.value = display.value.substring(1);
    } else {
      display.value = "-" + display.value;
    }
    new_operation = false;
  });

  $('#point').click(function() {
    display.value += ".";
    new_operation = false;
  });

  $('#delete').click(function() {
    display.value = "";
    new_operation = true;
  });

  $('#equal').click(function() {
    new_operation = true;
    try {
      display.value = eval(display.value);
    } catch(err) {
      display.value = "NaN";
    }
  });
});
