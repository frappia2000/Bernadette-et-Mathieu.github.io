// Attendre que la page soit complètement chargée
document.addEventListener("DOMContentLoaded", () => {
    
    // CONFIGURATION DU COMPTE À REBOURS
    const targetDate = new Date("2026-09-05T16:00:00").getTime();

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownFunction);
            const countdownEl = document.querySelector(".countdown");
            if (countdownEl) {
                countdownEl.innerHTML = "<h3>C'est le grand jour !</h3>";
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
});

// GESTION DE LA MUSIQUE LOCALE (DadjuHeritage.mp3)
let isPlaying = false;

function toggleMusic() {
    const audio = document.getElementById('wedding-audio');
    const btn = document.querySelector('.music-btn');
    
    // Sécurité au cas où la balise audio n'est pas trouvée
    if (!audio) {
        console.log("⚠️ Balise audio manquante dans le HTML.");
        return;
    }

    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            btn.innerHTML = "⏸️"; // Devient pause pendant l'écoute
        }).catch(error => {
            console.log("Lecture bloquée par le navigateur :", error);
        });
    } else {
        audio.pause();
        isPlaying = false;
        btn.innerHTML = "🎵"; // Redevient une note de musique
    }
}