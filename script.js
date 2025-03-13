let waterIntake = parseInt(localStorage.getItem("waterIntake")) || 0;
const button = document.getElementById("log-water");
const progressText = document.getElementById("progress-text");
const visualizationContainer = document.getElementById("visualization-container");

const totalDailyGoal = 64; // Adjust this if your daily goal is different (e.g., 64oz)
const glassSize = 8; // Each glass represents 8oz
const maxGlasses = totalDailyGoal / glassSize;

// Function to update the visual indicators
function updateVisualization() {
    visualizationContainer.innerHTML = ""; // Clear previous visuals
    let glassesConsumed = waterIntake / glassSize;

    for (let i = 0; i < glassesConsumed; i++) {
        let glassIcon = document.createElement("img");
        glassIcon.src = "filled-glass.png"; // Use an image for a filled glass
        glassIcon.alt = "Glass of water";
        glassIcon.classList.add("glass-icon"); // Add styling
        visualizationContainer.appendChild(glassIcon);
    }

    for (let i = glassesConsumed; i < maxGlasses; i++) {
        let emptyGlassIcon = document.createElement("img");
        emptyGlassIcon.src = "empty-glass.png"; // Use an image for an empty glass
        emptyGlassIcon.alt = "Empty glass";
        emptyGlassIcon.classList.add("glass-icon");
        visualizationContainer.appendChild(emptyGlassIcon);
    }
}

// Event listener for logging water
button.addEventListener("click", () => {
    if (waterIntake < totalDailyGoal) { // Prevent overfilling
        waterIntake += glassSize;
        progressText.innerText = `${waterIntake}oz logged today`;
        new Audio("ding.mp3").play();
        localStorage.setItem("waterIntake", waterIntake);
        updateVisualization();
    }
});

// Load stored progress on page load
window.onload = () => {
    waterIntake = parseInt(localStorage.getItem("waterIntake")) || 0;
    progressText.innerText = `${waterIntake}oz logged today`;
    updateVisualization();
};
