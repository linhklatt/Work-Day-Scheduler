// Display current date and time
function displayDayTime() {
  var todayDate = moment().format("dddd, MMMM Do YYYY h:mm:ss A");
  $("#currentDay").html(todayDate);
}
setInterval(displayDayTime, 1000);
