var day = (moment().format("DDDDYYYY"));
var dayIncrement = 0;
var hour = moment().hours();

function displayDay() {
    $(document).ready(function () {
        // display current date to the header
        var currentDateHeader = (moment().add(dayIncrement, 'd')).format("dddd, MMMM Do");
        $("#currentDay").text(currentDateHeader);
        var taskDateFormat = (moment().add(dayIncrement, 'd')).format("DDDDYYYY");
        var taskArr = JSON.parse(localStorage.getItem(taskDateFormat));
        if (taskArr) {
            arrOne = taskArr;
        } else {
            var arrOne = [];
        };
        $('body').append($('<div>').prop({ id: "container", className: "container" })
        );
        // container
        var hourEl = document.getElementById("container");
        while (hourEl.hasChildNodes()) {
            hourEl.removeChild(hourEl.firstChild);
        };
    })
};
// call the function
displayDay();