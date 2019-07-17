//variables

var finance;
var income;
var incomeOther;
var totalIncome;

var household;
var food;
var clothes;
var equipment;
var travel;
var livingCostsOther;
var totallivingCosts;

var eatingOut;
var events;
var transport;
var socialOther;
var totalSocialCosts;

var rent;
var utilities;
var internet;
var insurance;
var councilTax;
var phone;
var utilitiesOther;
var totalUtilityCosts;

var totalOutgoings;
var total;

var points;

var heights = [];

$(document).ready(function(){
  setHeights();
});

//Calculations to add elements

function add() {
  finance = Number(document.getElementById('finance').value);
  income = Number(document.getElementById('income').value);
  incomeOther = Number(document.getElementById('incomeOther').value);

  household = Number(document.getElementById('household').value);
  food = Number(document.getElementById('food').value);
  clothes = Number(document.getElementById('clothes').value);
  equipment = Number(document.getElementById('equipment').value);
  travel = Number(document.getElementById('travel').value);
  livingCostsOther = Number(document.getElementById('livingCostsOther').value);

  eatingOut = Number(document.getElementById('eatingOut').value);
  events = Number(document.getElementById('events').value);
  transport = Number(document.getElementById('transport').value);
  socialOther = Number(document.getElementById('socialOther').value);

  rent = Number(document.getElementById('rent').value);
  utilities = Number(document.getElementById('utilities').value);
  internet = Number(document.getElementById('internet').value);
  insurance = Number(document.getElementById('insurance').value);
  councilTax = Number(document.getElementById('councilTax').value);
  phone = Number(document.getElementById('phone').value);
  utilitiesOther = Number(document.getElementById('utilitiesOther').value);


  totalIncome = finance + income + incomeOther;

  totalLivingCosts = household + food + clothes + equipment + travel + livingCostsOther;
  totalSocialCosts = eatingOut + events + transport + socialOther;
  totalUtilityCosts = rent + utilities + internet + insurance + councilTax + phone + utilitiesOther;

  totalOutgoings = totalLivingCosts + totalSocialCosts + totalUtilityCosts;
  total = totalIncome - totalOutgoings;

  total = total.toFixed(2); //rounds the total down to 2dp.

  console.log (totalLivingCosts + totalSocialCosts + totalUtilityCosts);
  if (totalOutgoings == 0) {
      $("#result").css("color", "red");
      $(".results").css("display", "block");
      var str = "You have not entered any values for your outgoings. Please try again.";
      document.getElementById("result").innerHTML = str
  } else if (totalIncome == 0) {
      $("#result").css("color", "red");
      $(".results").css("display", "block");
      var str = "You have not entered any values for your income. Please try again.";
      document.getElementById("result").innerHTML = str
  } else if (totalOutgoings > totalIncome) {
      $("#result").css("color", "red");
      $(".results").css("display", "block");
      points = 0;
      var str = "You have a total of £" + total + " remaining. Your outgoings are greater than your income. Have another look at how you can balance your budget.";
      document.getElementById("result").innerHTML = str
  } else if ((totalOutgoings > (totalIncome * 0.8)) && (totalOutgoings < totalIncome))  {
      $("#result").css("color", "orange");
      $(".results").css("display", "block");
      points = 25;
      var str = "You have a total of £" + total+ " remaining. Your outgoings are greater than 80% of your income. Be careful.";
      document.getElementById("result").innerHTML = str
  } else {
      $("#result").css("color", "green");
      $(".results").css("display", "block");
      points = 40;
      var str = "You have a total of £" + total+ " remaining. Your costs are well below your income. Well done.";
      document.getElementById("result").innerHTML = str
  }
}

//submit deepkink into Mendix. Assign points into deeplink.
function submit(){
  window.top.location = "http://localhost:8080/link/completeBudget?points=" + points;
}


document.getElementById('result').innerHTML = total;

//Collapsable content

function setHeights(){
  var x = $("#box-income");
  heights[0] = x.height();
   x = $("#box-social");
  heights[1] = x.height();
   x = $("#box-utilities");
  heights[2] = x.height();
   x = $("#box-livingCosts");
  heights[3] = x.height();
}

function incomeShowHide() {
  var x = $("#box-income");
  if (x.height() == 0) {
    x[0].style.display = "block";
    x.animate({ height: heights[0], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
    });
  }
}

function socialShowHide() {
  var x = $("#box-social");
  if (x.height() == 0) {
    x[0].style.display = "block";
    x.animate({ height: heights[1], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
    });
  }
}

function utilitiesShowHide() {
  var x = $("#box-utilities");
  if (x.height() == 0) {
    x[0].style.display = "block";
    x.animate({ height: heights[2], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
    });
  }
}

function livingCostsShowHide() {
  var x = $("#box-livingCosts");
  if (x.height() == 0) {
    x[0].style.display = "block";
    x.animate({ height: heights[3], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
    });
  }
}
