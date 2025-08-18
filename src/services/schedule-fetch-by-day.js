import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {
        // Fetch schedules
        const response = await fetch(`${apiConfig.baseURL}/schedules`);

        const data = await response.json();

        // Filter schedule by day
        const dailySchedule = data.filter((schedule) =>
            dayjs(date).isSame(schedule.when, "day")
        );

        return dailySchedule;
    } catch (error) {
        alert("Não foi possível carregar os agendamentos do dia selecionado.");
        console.log(error);
    }
}
