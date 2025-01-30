// Function to Reveal Countdown and All Content
function revealAll() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("countdown-container").style.display = "block";
    document.getElementById("invitation-content").style.display = "block";  // Show the invitation content immediately
    startCountdown();
    playFireworks();
}

// Function to Start Countdown
function startCountdown() {
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

// Function to Play Fireworks Animation
function playFireworks() {
    let audio = new Audio('firework_sound.mp3');
    audio.play();

    let firework = document.createElement("div");
    firework.innerHTML = "🎆🎇💥";
    firework.style.position = "absolute";
    firework.style.left = Math.random() * window.innerWidth + "px";
    firework.style.top = Math.random() * window.innerHeight + "px";
    firework.style.fontSize = "3em";
    firework.style.animation = "fadeOut 1.5s forwards";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1500);
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

// RSVP Form Submission Alert
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for confirming your presence!");
});
