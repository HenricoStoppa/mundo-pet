const cancelScheduleButton = document.getElementById("cancel-schedule");
const formSectionBg = document.querySelector(".blur-bg");

export function closeScheduleForm() {
    cancelScheduleButton.onclick = () => {
        formSectionBg.classList.add("invisible");
        formSectionBg.classList.remove("visible");
    };
}

closeScheduleForm();
