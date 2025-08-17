import dayjs from "dayjs";

const formSectionBg = document.querySelector(".blur-bg");

export function openScheduleForm() {
    formSectionBg.classList.remove("invisible");
    formSectionBg.classList.add("visible");
}
