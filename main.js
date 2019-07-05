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

var total;


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

  total = totalIncome - (totalLivingCosts + totalSocialCosts + totalUtilityCosts);

console.log (totalLivingCosts + totalSocialCosts + totalUtilityCosts)

  if (totalLivingCosts + totalSocialCosts + totalUtilityCosts > (totalIncome * 0.8)) {
      $("#result").css("color", "red");
      var str = "Ooppps. Your costs are very high !";
      document.getElementById("result").innerHTML = str
  } else {
      $("#result").css("color", "green");
      var str = "Yes. Your costs are low !";
      document.getElementById("result").innerHTML = str
  }
}


document.getElementById('result').innerHTML = total;

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

