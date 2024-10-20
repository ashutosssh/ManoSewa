const bubble = document.getElementById('bubble');
const instructions = document.getElementById('instructions'); // Updated to use an element with this ID
let breathingInterval;

function startBreathingExercise() {
    // Reset bubble size
    bubble.style.width = "100px";
    bubble.style.height = "100px";
    bubble.style.transition = "width 4s ease-in-out, height 4s ease-in-out";

    // Inhale
    instructions.textContent = "Inhale...";
    bubble.style.width = "200px"; // Expand on inhale
    bubble.style.height = "200px";

    clearTimeout(breathingInterval);
    breathingInterval = setTimeout(() => {
        // Hold
        instructions.textContent = "Hold...";
    }, 4000); // Hold for 4 seconds

    setTimeout(() => {
        // Exhale
        instructions.textContent = "Exhale...";
        bubble.style.width = "100px"; // Contract on exhale
        bubble.style.height = "100px";
    }, 8000); // Exhale after 4 seconds

    setTimeout(() => {
        startBreathingExercise(); // Repeat
    }, 12000); // Total cycle time: 12 seconds
}

// Start breathing exercise on load
window.onload = startBreathingExercise;
