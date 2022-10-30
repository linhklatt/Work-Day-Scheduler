// Display current date and time
function displayDayTime() {
  var todayDate = moment().format("dddd, MMMM Do YYYY h:mm:ss A");
  $("#currentDay").html(todayDate);
}
setInterval(displayDayTime, 1000);

// click button function to save in the local storage
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();

  localStorage.setItem(time, text);
});
// retrieves items from locale storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
