const bubble = document.getElementById('bubble');
const instructions = document.getElementById('instructions'); 
let breathingInterval;

function startBreathingExercise() {
    
    bubble.style.width = "100px";
    bubble.style.height = "100px";
    bubble.style.transition = "width 4s ease-in-out, height 4s ease-in-out";

    
    instructions.textContent = "Inhale...";
    bubble.style.width = "200px"; 
    bubble.style.height = "200px";

    clearTimeout(breathingInterval);
    breathingInterval = setTimeout(() => {
        
        instructions.textContent = "Hold...";
    }, 4000); 

    setTimeout(() => {
        
        instructions.textContent = "Exhale...";
        bubble.style.width = "100px"; 
        bubble.style.height = "100px";
    }, 8000); 

    setTimeout(() => {
        startBreathingExercise(); 
    }, 12000); 
}

window.onload = startBreathingExercise;
