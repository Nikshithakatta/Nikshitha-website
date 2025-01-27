// Animated counter function
function animateCounter(id, targetValue) {
    let currentValue = 0;
    const counterElement = document.getElementById(id);
    const interval = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++;
            counterElement.innerText = currentValue;
        } else {
            clearInterval(interval);
        }
    }, 30); // Adjust speed by changing the delay
}

// Initialize counters when the About section is in view
window.addEventListener("scroll", function() {
    const aboutSection = document.getElementById("about");
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        animateCounter("years-experience", 5); // Example: 5 years of experience
        animateCounter("projects-completed", 50); // Example: 50 projects completed
        animateCounter("clients-worked", 30); // Example: 30 clients worked with
    }
});
// Simple form validation and alert on form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}!`);
        // Here you can add code to actually send the form data (e.g., using fetch or Ajax)
    } else {
        alert('Please fill in all fields.');
    }
});
