import dayjs from "dayjs";
import { closeScheduleForm } from "./close";

const form = document.querySelector("form");
const tutorName = document.getElementById("tutor-name");
const petName = document.getElementById("pet-name");
const phoneNumber = document.getElementById("phone");
const descriptionText = document.getElementById("description");
const selectedDate = document.getElementById("form-date");
const selectedTime = document.getElementById("form-time");
const formDateInput = document.getElementById("form-date");
const formTimeInput = document.getElementById("form-time");

const inputTodayDate = dayjs(new Date()).format("YYYY-MM-DD");
const inputTodayHour = dayjs(new Date()).format("HH:mm");

// Show actual date & define minimum date
formDateInput.value = inputTodayDate;
formDateInput.min = inputTodayDate;

// Show actual time & define minimum time
formTimeInput.value = inputTodayHour;
formTimeInput.min = inputTodayHour;

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
        const openingHour = "08:00";
        const closingHour = "23:00";

        if (!time || time < openingHour || time > closingHour) {
            alert(
                `Por favor, insira um horário válido. (${openingHour} - ${closingHour})`
            );
        }

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

        console.log({ id, tutor, pet, phone, description, date, time });
    } catch (error) {
        alert("Não foi possível realizar um novo agendamento.");
        console.log(error);
    }
};
