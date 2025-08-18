import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesLoad } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("remove-schedule")) {
            // Gets id of item to be removed
            const item = event.target.closest("li");
            const { id } = item.dataset;

            if (id) {
                // User confirm
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                );

                if (isConfirm) {
                    // Send delete request to API
                    await scheduleCancel({ id });

                    // Refresh schedule list
                    schedulesLoad();
                }
            }
        }
    });
});
