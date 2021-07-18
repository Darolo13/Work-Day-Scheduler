// display current date to the header
var currentDateHeader = moment().format("dddd, MMMM Do");
var currentDayEl = $("#currentDay").text(currentDateHeader);
console.log(currentDayEl);
