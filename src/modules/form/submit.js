import dayjs from "dayjs";
import { closeScheduleForm } from "./close.js";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesLoad } from "../schedules/load.js";
import { availableHours } from "../../utils/available-hours.js";

const form = document.querySelector("form");
const tutorName = document.getElementById("tutor-name");
const petName = document.getElementById("pet-name");
const phoneNumber = document.getElementById("phone");
const descriptionText = document.getElementById("description");
const selectedDate = document.getElementById("form-date");
const selectedTime = document.getElementById("form-time");
const formDateInput = document.getElementById("form-date");
const formTimeInput = document.getElementById("form-time");

const todayDate = dayjs(new Date()).format("YYYY-MM-DD");
const nowHour = dayjs(new Date()).format("HH:mm");

// Show actual date & define minimum date
formDateInput.value = todayDate;
formDateInput.min = todayDate;

// Show actual time & define minimum & maximum time
formTimeInput.value = nowHour;
formTimeInput.min = nowHour;
formTimeInput.max = availableHours.closeHour;

formDateInput.onchange = () => {
    formTimeInput.value = availableHours.openHour;
    formDateInput.value == todayDate
        ? (formTimeInput.min = nowHour)
        : (formTimeInput.min = availableHours.openHour);
};

form.onsubmit = (event) => {
    event.preventDefault();

    try {
        // Get tutor name
        const tutor = tutorName.value.trim();

        if (!tutor) {
            alert("Por favor, insira o nome do tutor válido.");
        }

        // Get pet name
        const pet = petName.value.trim();

        if (!pet) {
            alert("Por favor, insira o nome do pet válido.");
        }

        // Get phone
        const phone = phoneNumber.value.trim();

        if (!phone) {
            alert("Por favor, insira um número de telefone válido.");
        }

        // Get description
        const description = descriptionText.value.trim();

        if (!description) {
            alert("Por favor, insira uma descrição válida.");
        }

        // Get date
        const date = selectedDate.value;

        if (!date) {
            alert("Por favor, insira uma data válida.");
        }

        // Get hour
        const time = selectedTime.value;

        // Insert hour into date
        const [hour, minute] = time.split(":");
        const when = dayjs(date).add(hour, "hour").add(minute, "minute");

        // Generate ID
        const id = new Date().getTime();

        // clear inputs
        tutorName.value = "";
        petName.value = "";
        phoneNumber.value = "";
        descriptionText.value = "";

        closeScheduleForm();

        scheduleNew({ id, tutor, pet, phone, description, when });

        schedulesLoad();
    } catch (error) {
        alert("Não foi possível realizar um novo agendamento.");
        console.log(error);
    }
};
