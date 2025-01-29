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
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
});

