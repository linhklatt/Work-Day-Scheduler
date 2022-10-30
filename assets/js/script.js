// Display current date with time
function displayDayTime() {
  var todayDate = moment().format("dddd, MMMM Do YYYY h:mm:ss A");
  $("#current-day").html(todayDate);
}
setInterval(displayDayTime, 1000);
