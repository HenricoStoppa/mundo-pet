const newScheduleButton = document.getElementById("new-schedule");
const formSectionBg = document.querySelector(".blur-bg");

export function openScheduleForm() {
    newScheduleButton.onclick = () => {
        formSectionBg.classList.remove("invisible");
        formSectionBg.classList.add("visible");
    };
}

openScheduleForm();
