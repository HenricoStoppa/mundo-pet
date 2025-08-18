import { schedulesLoad } from "./load.js";

const selectedDate = document.getElementById("schedules-date");

// Refresh schedules when date input changes
selectedDate.onchange = () => schedulesLoad();
