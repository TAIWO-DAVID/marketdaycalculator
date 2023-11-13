
var displayLastMarket = document.getElementById("displayLastMarket");
var displayNextMarket = document.getElementById("displayNextMarket");
var nextMarketDay = document.getElementById("nextMarketDay");

// console.log("Selected market interval is ", marketInterval);

// Weekdays index
weekDaysArray = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday",
};

displayNextMarket.addEventListener("click", marketDayCalculation);
// displayNextMarket.addEventListener("change", marketDayCalculation);

//if marketDayCalculation() is used above instead of marketDayCalculation, the function will be invoked automatically even without invoking it.

function marketDayCalculation() {
  var lastMarketDay = document.getElementById("lastMarketDay");
  var marketInterval = document.getElementById("marketInterval").value;


  var lastMarketDayNumber = lastMarketDay.value;
  var selectedLastMarketDay = lastMarketDay.options[lastMarketDay.selectedIndex].innerText;
  let dayIndex = Number(lastMarketDayNumber) + Number(marketInterval) + 1;



  dayIndex = dayIndex % 7;
  weekDaysArray[dayIndex];
  displayLastMarket.innerText =
    "The last market day selected is " + selectedLastMarketDay;
  console.log("The next market day is ", weekDaysArray[dayIndex]);
  nextMarketDay.innerText = weekDaysArray[dayIndex];
}
