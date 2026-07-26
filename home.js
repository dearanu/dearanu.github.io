// ================================================
// My Love One ❤️
// home.js - Complete Script (Clean Audio)
// ================================================

const loveCounter = document.getElementById("loveCounter");
const ageCounter = document.getElementById("ageCounter");

// 🛠️ SET YOUR SPECIAL DATES HERE:
const birthDate = new Date("2000-07-26T00:00:00"); // 🎂 Her Birth Date
const loveDate = new Date("2025-08-22T00:00:00");  // ❤️ Anniversary Date

// ================================================
// ⏳ Special Milestones & Counters
// ================================================
function calculateCalendarDifference(startDate, endDate) {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days };
}

function updateCounters(){
    const now = new Date();

    // 1. Calculate Age (Accurate Calendar Breakdown)
    if (now - birthDate >= 0) {
        const age = calculateCalendarDifference(birthDate, now);
        if (ageCounter) {
            ageCounter.innerHTML = `🎉 ${age.years} Years &nbsp;${age.months} Months &nbsp;${age.days} Days`;
        }
    }

    // 2. Calculate Love Timer (Ticking Live Every Second)
    if (!loveCounter) return;
    const diff = now - loveDate;

    if(diff < 0){
        loveCounter.innerHTML = "Our journey begins soon ❤️";
        return;
    }

    const totalSeconds = Math.floor(diff/1000);
    const years = Math.floor(totalSeconds/(365*24*60*60));
    const months = Math.floor((totalSeconds%(365*24*60*60))/(30*24*60*60));
    const days = Math.floor((totalSeconds%(30*24*60*60))/(24*60*60));
    const hours = Math.floor((totalSeconds%(24*60*60))/(60*60));
    const minutes = Math.floor((totalSeconds%(60*60))/60);
    const seconds = totalSeconds%60;

    loveCounter.innerHTML =
    `
    ❤️ ${years} Years
    ${months} Months
    ${days} Days
    <br><br>
    ${String(hours).padStart(2,"0")} :
    ${String(minutes).padStart(2,"0")} :
    ${String(seconds).padStart(2,"0")}
    `;
}

// Run immediately and update every second
updateCounters();
setInterval(updateCounters, 1000);

// ================================================
// 🎵 Dual Audio Controller (Standard Playback)
// ================================================
const playBtn = document.getElementById("playMusic");
const welcomeOverlay = document.getElementById("welcomeOverlay");

// 1. Background Ambiance Audio (Plays once on Welcome Tap)
const birthdayMusic = new Audio("HAPPY BIRTHDAY INSTRUMENTAL.mp3");
birthdayMusic.loop = false; // Plays exactly 1 time

// 2. Dedicated Section Audio ("Our Song" - Agar Tum Saath Ho)
const sectionMusic = document.getElementById("song");

// 🎂 Tap to Unlock Audio (Bypasses Browser Autoplay Restrictions)
if (welcomeOverlay) {
    welcomeOverlay.addEventListener("click", () => {
        // Fade out overlay
        welcomeOverlay.classList.add("hidden");

        // Play Happy Birthday Instrumental
        birthdayMusic.play().catch(err => {
            console.log("Audio playback error:", err);
        });
    });
} else {
    // Fallback if no overlay
    if (sessionStorage.getItem("autoplayMusic") === "true") {
        birthdayMusic.play().catch(() => {
            const handleGesture = () => {
                if (birthdayMusic.paused && (!sectionMusic || sectionMusic.paused)) {
                    birthdayMusic.play();
                }
                document.removeEventListener("click", handleGesture);
                document.removeEventListener("touchstart", handleGesture);
            };
            document.addEventListener("click", handleGesture);
            document.addEventListener("touchstart", handleGesture);
        });
    }
}

// 🎼 "Our Song" Toggle Player
if (playBtn && sectionMusic) {
    playBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (sectionMusic.paused) {
            // Stop background instrumental if still playing so tracks don't overlap
            if (!birthdayMusic.paused) {
                birthdayMusic.pause();
            }

            sectionMusic.play();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause Music 🎵';
        } else {
            sectionMusic.pause();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i> Play Music 🎵';
        }
    });
}

// Reset button icon when section song finishes
if (sectionMusic && playBtn) {
    sectionMusic.addEventListener("ended", () => {
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i> Play Music 🎵';
    });
}

// ================================================
// ❤️ Butterfly Transition to Surprise Page
// ================================================
const surprise = document.getElementById("surprise");

if (surprise) {
    surprise.addEventListener("click", (e) => {
        e.preventDefault();

        // Create transition container
        const container = document.createElement("div");
        container.className = "butterfly-transition-layer";
        document.body.appendChild(container);

        // Spawn drifting butterflies
        const emojis = ["🦋", "✨", "🦋", "🌸"];
        for (let i = 0; i < 15; i++) {
            const butterfly = document.createElement("span");
            butterfly.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            butterfly.className = "transition-butterfly";
            butterfly.style.left = Math.random() * 100 + "vw";
            butterfly.style.fontSize = Math.random() * 15 + 22 + "px";
            butterfly.style.animationDelay = Math.random() * 0.6 + "s";
            container.appendChild(butterfly);
        }

        // Smooth page fade out
        document.body.style.transition = "opacity 1.5s ease";
        setTimeout(() => {
            document.body.style.opacity = "0";
        }, 400);

        // Redirect after butterfly animation completes
        setTimeout(() => {
            window.location.href = "surprise.html";
        }, 2000);
    });
}

// ================================================
// ✨ Smooth Scroll & Section Fade-in Animations
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = ".8s ease";
    observer.observe(section);
});
