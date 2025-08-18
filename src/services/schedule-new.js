import { apiConfig } from "./api-config.js";

export async function scheduleNew({
    id,
    tutor,
    pet,
    phone,
    description,
    when,
}) {
    try {
        // Create new schedule and send to the API
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, tutor, pet, phone, description, when }),
        });

        alert("Agendamento realizado com sucesso!");
    } catch (error) {
        alert("Não foi possível criar um novo agendamento.");
        console.log(error);
    }
}
