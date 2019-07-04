$("button").click(gather)
$(document).ready(centerme);
$(window).resize(centerme);



function add() {
    var x = Number(document.getElementById('finance').value);
    var y = Number(document.getElementById('income').value);

    document.getElementById('result').innerHTML = x+y;
    return false;
}

document.getElementById('button').addEventListener('click', add);



function gather() {
  finance = document.getElementById("finance").value;
  finance = finance.replace(/\D/g,'');

  income = document.getElementById("income").value;
  income = income.replace(/\D/g,'');

  rent = document.getElementById("rent").value;
  rent = rent.replace(/\D/g,'');


  food = document.getElementById("food").value;
  food = food.replace(/\D/g,'');

  utilities = document.getElementById("utilities").value;
  utilities = utilities.replace(/\D/g,'');

  phone = document.getElementById("social").value;
  phone = phone.replace(/\D/g,'');

  social = document.getElementById("social").value;
  social = social.replace(/\D/g,'');

  result = finance - income - rent - food - utilities - phone - social;
  savings = income * 0.20;

  $(".results-data").empty();

  if (result === 0) {
    $(".results-data").append('<p class="text-danger convert-emoji"> You didn\'t enter anything. Try again.</p>');
  }
  else if (result < 0) {
    $(".results-data").append('<p class="text-danger"> After your expenses you have £' + result + ' left in your budget. You may want to review your budget plans.</p>');
  }
    else {
      $(".results-data").append(
      '<p class="text-sucess"> After your expenses you have £' + result + ' left in your budget.</p>','<p class="text-sucess">If you can you should try to save $' + savings + ' for emergencies.</p>');
  }

}


//Collapsable content

function incomeShowHide() {
  var x = document.getElementById("box-income");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function socialShowHide() {
  var x = document.getElementById("box-social");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function utilitiesShowHide() {
  var x = document.getElementById("box-utilities");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function livingCostsShowHide() {
  var x = document.getElementById("box-livingCosts");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

