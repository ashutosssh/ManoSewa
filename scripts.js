function showResult() {
    const feeling = document.querySelector('input[name="feeling"]:checked');
    const stress = document.querySelector('input[name="stress"]:checked');
    const help = document.querySelector('input[name="help"]:checked');
    const overwhelmed = document.querySelector('input[name="overwhelmed"]:checked');
    const selfCare = document.querySelector('input[name="self_care"]:checked');
    const relationships = document.querySelector('input[name="relationships"]:checked');
    const anxiety = document.querySelector('input[name="anxiety"]:checked');
    const hobbies = document.querySelector('input[name="hobbies"]:checked');
    const motivation = document.querySelector('input[name="motivation"]:checked');
    const sleep = document.querySelector('input[name="sleep"]:checked');

    let resultMessage = "";

    if (feeling && feeling.value === "good") {
        resultMessage += "That's great! Keep up the positive energy!<br>";
    } else if (feeling && feeling.value === "okay") {
        resultMessage += "It's okay to feel 'okay'. Take care of yourself.<br>";
    } else if (feeling && feeling.value === "bad") {
        resultMessage += "Don't worry. Reach out to someone if you're feeling low.<br>";
    }

    if (stress && stress.value === "exercise") {
        resultMessage += "Exercising is a healthy way to manage stress!<br>";
    } else if (stress && stress.value === "meditate") {
        resultMessage += "Meditation is a wonderful practice for mental clarity!<br>";
    } else if (stress && stress.value === "avoid") {
        resultMessage += "Avoiding stress can help in the short term, but consider healthy coping mechanisms.<br>";
    } else if (stress && stress.value === "talk") {
        resultMessage += "Talking to someone is a great way to release stress!<br>";
    }

    if (help && help.value === "yes") {
        resultMessage += "It's great that you feel comfortable reaching out for help!<br>";
    } else if (help && help.value === "sometimes") {
        resultMessage += "It's okay to feel unsure about reaching out. Take your time!<br>";
    } else if (help && help.value === "no") {
        resultMessage += "Consider talking to someone you trust; it's important to share your feelings.<br>";
    }

    // Add additional responses for the rest of the questions
    resultMessage += "Thank you for participating in the quiz!";

    document.getElementById("quiz-result").innerHTML = resultMessage;
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle Book Appointment button click
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('book-btn')) {
            const id = e.target.getAttribute('data-id');
            const bookingForm = document.getElementById(`booking-form-${id}`);

            // Toggle the booking form visibility
            if (bookingForm.style.display === 'block') {
                bookingForm.style.display = 'none';
            } else {
                bookingForm.style.display = 'block';
            }
        }
    });

    // Function to handle form submission
    document.querySelectorAll('.appointment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide the form and show the success message
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'block';
        });
    });
}); // Add closing }); here