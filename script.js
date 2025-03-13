let waterIntake = parseInt(localStorage.getItem("waterIntake")) || 0;
const button = document.getElementById("log-water");
const progressText = document.getElementById("progress-text");

button.addEventListener("click", () => {
    waterIntake += 8;  // Ensures 8 is treated as a number
    progressText.innerText = waterIntake + "oz logged today";
    new Audio("ding.mp3").play();
    localStorage.setItem("waterIntake", waterIntake); // Save to local storage
});

window.onload = () => {
    waterIntake = parseInt(localStorage.getItem("waterIntake")) || 0;
    progressText.innerText = waterIntake + "oz logged today";
};
