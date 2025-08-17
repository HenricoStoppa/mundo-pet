const formSectionBg = document.querySelector(".blur-bg");

export function closeScheduleForm() {
    formSectionBg.classList.add("invisible");
    formSectionBg.classList.remove("visible");
}
