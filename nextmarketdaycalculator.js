var displayLastMarket = document.getElementById("displayLastMarket");
var displayNextMarket = document.getElementById("displayNextMarket");
var nextMarketDay = document.getElementById("nextMarketDay");

// Weekdays index
var weekDaysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

displayNextMarket.addEventListener("click", marketDayCalculation);
// displayNextMarket.addEventListener("change", marketDayCalculation);

//if marketDayCalculation() is used above instead of marketDayCalculation, the function will be invoked automatically even without invoking it.

function marketDayCalculation() {
  var lastMarketDay = document.getElementById("lastMarketDay");
  var marketInterval = document.getElementById("marketInterval").value;

  var lastMarketDayNumber = lastMarketDay.value;
  var selectedLastMarketDay =
    lastMarketDay.options[lastMarketDay.selectedIndex].innerText;
  let dayIndex = (Number(lastMarketDayNumber) + Number(marketInterval)) % 7;

  displayLastMarket.innerText =
    "The last market day selected is " + selectedLastMarketDay;
  console.log("The next market day is ", weekDaysArray[dayIndex]);
  nextMarketDay.innerText = weekDaysArray[dayIndex];
}
