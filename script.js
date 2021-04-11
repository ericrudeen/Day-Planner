/*Variables for today function*/


/* Jumbotron day of the week and date and determining the past/present/future of the hour blocks*/
function today() {
    var showToday = $("#currentDay");
    var hourBlocksEl = $(".time-block");
    var todayDate = moment().format("dddd, MMMM Do YYYY");
    showToday.text("Today's Date: " + todayDate);   
    hourBlocksEl.each(function() {
        var current = moment().hours();
        if(current === $(this).data().time) {
            $(this).children("textarea").addClass("present");
        } else if(current > $(this).data().time) {
            $(this).children("textarea").addClass("past");
        } else {
            $(this).children("textarea").addClass("future")
        }
    })
}
today();

/* Reset the interval every 10 seconds*/
setInterval(today, 10000);

/*Saving data to local storage*/
$(".saveBtn").on("click", function() {
    var save = $(this).siblings("textarea").val();
    var time = $(this).parent(".time-block").data("time");
    localStorage.setItem(time, save);
})

/*Saving data to local storage*/
$("textarea").each(function () {
    var getTime = $(this).parent(".time-block").data("time");
    $(this).val(localStorage.getItem(getTime));
})

