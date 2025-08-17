import dayjs from "dayjs";
import { closeScheduleForm } from "./form/close.js";
import { openScheduleForm } from "./form/open.js";

const schedulesListDateInput = document.getElementById("schedules-date");
const newScheduleButton = document.getElementById("new-schedule");
const cancelScheduleButton = document.getElementById("cancel-schedule");

document.addEventListener("DOMContentLoaded", function () {
    const inputTodayDate = dayjs(new Date()).format("YYYY-MM-DD");

    // Show actual date & define minimum date
    schedulesListDateInput.value = inputTodayDate;
    schedulesListDateInput.min = inputTodayDate;

    newScheduleButton.onclick = () => {
        openScheduleForm();
    };

    cancelScheduleButton.onclick = () => {
        closeScheduleForm();
    };
});
