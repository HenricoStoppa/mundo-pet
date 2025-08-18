import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("schedules-date");

export async function schedulesLoad() {
    // Get input date
    const date = selectedDate.value;

    // Fetch schedules by selected day
    const dailySchedules = await scheduleFetchByDay({ date });

    // Show schedules
    schedulesShow({ dailySchedules });
}
