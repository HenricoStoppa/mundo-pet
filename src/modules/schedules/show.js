import dayjs from "dayjs";

const periodMorning = document.getElementById("morning-period");
const periodAfternoon = document.getElementById("afternoon-period");
const periodNight = document.getElementById("night-period");

export function schedulesShow({ dailySchedules }) {
    try {
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        // Sort daily schedules by hour
        dailySchedules.sort((a, b) => {
            if (a.when < b.when) {
                return -1;
            } else {
                return true;
            }
        });

        // Render schedule by period
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li");
            const div = document.createElement("div");
            const time = document.createElement("strong");
            const tutor = document.createElement("span");
            const description = document.createElement("span");

            // Add id
            item.setAttribute("data-id", schedule.id);

            time.textContent = dayjs(schedule.when).format("HH:mm");

            tutor.innerHTML = `<strong>${schedule.pet}</strong> / ${schedule.tutor}`;

            div.append(time, tutor);

            description.textContent = schedule.description;

            // Create remove schedule option
            const removeSchedule = document.createElement("span");
            removeSchedule.classList.add("remove-schedule");
            removeSchedule.textContent = "Remover agendamento";

            // Adds time, pet, tutor, description and option to remove into item
            item.append(div, description, removeSchedule);

            // Get hour
            const hour = dayjs(schedule.when).hour();

            // Render schedule
            if (hour <= 12) {
                periodMorning.appendChild(item);
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item);
            } else {
                periodNight.appendChild(item);
            }
        });
    } catch (error) {
        alert("Não foi possível exibir os agendamentos do dia.");
        console.log(error);
    }
}
