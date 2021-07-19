var day = (moment().format("DDDDYYYY"));
var dayIncrement = 0;
var hour = moment().hours();

function displayDay() {
    $(document).ready(function () {
        // dispplay current day
        var dayFormat = (moment().add(dayIncrement, 'd')).format("MMMM Do, dddd YYYY");
        $("#currentDay").text(dayFormat);
        var taskDayFormat = (moment().add(dayIncrement, 'd')).format("DDDDYYYY");
        var taskArr = JSON.parse(localStorage.getItem(taskDayFormat));
        if (taskArr) {
            arrOne = taskArr;
        } else {
            var arrOne = [];
        };
        $('body').append(
            $('<div>').prop({ id: "container", className: "container" })
        );
        //setup container 
        var hourEl = document.getElementById("container");
        //remove any existing tasks
        while (hourEl.hasChildNodes()) {
            hourEl.removeChild(hourEl.firstChild);
        };
        //setup time-blocks hour info
        for (let i = 0; i < 9; i++) {
            integerId = (i + 9);
            strId = ('#' + integerId);
            tempusId = (i + 9);
            if (tempusId > 12) {
                tempusId = (tempusId - 12) + "PM";
            } else if (tempusId == 12) {
                tempusId = tempusId + "PM"
            } else {
                tempusId = tempusId + "AM";
            };
            var timeBlock = $("<div>")
                .addClass("row time-block")
                .attr("id", integerId);
            //color logic
            if (dayIncrement < 0) {
                timeBlock.addClass("past")
            } else if (dayIncrement == 0) {
                if (hour < integerId) {
                    timeBlock.addClass("future")
                } else if (hour == integerId) {
                    timeBlock.addClass("present")
                } else if (hour > integerId) {
                    timeBlock.addClass("past")
                }
            } else if (dayIncrement > 0) {
                timeBlock.addClass("future")
            }
            // time block generate hour textarea and save button 
            $('#container').append(timeBlock);
            var taskHour = $("<div>").addClass("col-1 hour").text(tempusId);
            var taskText = $("<textarea>").addClass("col-10 task").attr("id", i);
            var taskSave = $("<button>").addClass("col-1 saveBtn").append('<i class="fas fa-save">');

            $(strId).append(taskHour, taskText, taskSave);
        };
        // save button
        $(".saveBtn").click(function () {
            var time = $(this).parent().attr("id");
            var task = $(this).siblings(".task").val();
            arrOne[time - 9] = task;
            //save data as key,value: dayyear, array of tasks per hour
            localStorage.setItem(taskDayFormat, JSON.stringify(arrOne));
        });

        function displayTasks() {
            var taskDayFormat = (moment().add(dayIncrement, 'd')).format("DDDDYYYY");
            var taskArr = JSON.parse(localStorage.getItem(taskDayFormat));
            if (taskArr) {
                for (let i = 0; i < taskArr.length; i++) {
                    var taskId = ('#' + i);
                    var taskText = taskArr[i];
                    $(taskId).text(taskText);
                };
            };
        };

        // call function displayTasks
        displayTasks();
    });
};
// call displayDay function
displayDay();


