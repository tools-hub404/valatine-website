// Get elements
const loadingText = document.getElementById("loading-text");
const timerElement = document.getElementById("time");

let timeLeft = 10; // 10-second timer

// Function to update the timer
function updateTimer() {
    timerElement.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval); // Stop the timer
        loadingText.textContent = "Your Valentine Gift is Here! 🎁💖";
        timerElement.textContent = "0"; // Ensure it shows 0 at the end
    }
}

// Start the timer
const timerInterval = setInterval(updateTimer, 1000); // Update every second
