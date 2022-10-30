// Display current date and time
function displayDayTime() {
  var todayDate = moment().format("dddd, MMMM Do YYYY h:mm:ss A");
  $("#currentDay").html(todayDate);
}
setInterval(displayDayTime, 1000);

// click button function to save in the local storage
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});
// retrieves items from locale storage
$("#hour-9 .time-block").val(localStorage.getItem("9"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
