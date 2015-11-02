// Logging utility functions
var PL  = document.getElementById("pLog");
var tr1 = document.getElementById("tr1");

function mylog(z)     { PL.innerHTML += (z + "<br>"); }
function mylogNoBr(z) { PL.innerHTML += z; }
function clearLog()   { PL.innerHTML = ""; }

// Donut shop object constructor
function makeShop(loc, min, max, avg) {
  this.location    = loc;
  this.minCR = min; // Minimum customers/hour
  this.maxCR = max; // Maximum customers/hour
  this.donutsPerCust = avg;

  // Generate pseudo-random integer on [min, max]
  this.randIntFullRange = function() {
    return Math.floor(Math.random() * (this.maxCR - this.minCR + 1)) + this.minCR;
  }
  this.donutsThisHour = function() {
    return this.donutsPerCust * this.randIntFullRange();
  }
}

var PDX = new makeShop("Portland", 8, 43, 4.50); // Instantiate object
// @HW ... but there's competition in other cities that needs analysis.
/*
  Vancouver 9 23 6.33
  Salem     2 28 1.25
  Eugene    8 58 3.75
  Medford   4 37 2.00
*/

// For Portland:
var pdx_6am = PDX.donutsThisHour(); // Geneate random donut total for 6 am
var pdx_7am = PDX.donutsThisHour(); // Geneate random donut total for 7 am
  // @HW ... but donut shops are sweat shops open 12 hours per day!
var pdx_total = pdx_6am + pdx_7am;

tr1.innerHTML="<td>"+pdx_6am+"</td> <td>"+pdx_7am+"</td> <td>"+pdx_total+"</td>";
// @HW ... and gain, there's data for other cities.
