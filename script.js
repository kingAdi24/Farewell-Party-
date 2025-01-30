// Countdown Timer for the Farewell Event
function countdown() {
    const eventDate = new Date("February 8, 2025 09:00:00").getTime();
    const timer = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Farewell Party Started!";
        }
    }, 1000);
}

countdown();

// RSVP Form Submission Alert
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for confirming your presence!");
});