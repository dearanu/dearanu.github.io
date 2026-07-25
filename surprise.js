// ================================================
// My Love One ❤️ - Surprise Page Logic with Smooth Butterflies
// ================================================

document.addEventListener("DOMContentLoaded", () => {
    const backBtn = document.querySelector(".back-btn");

    if (backBtn) {
        backBtn.addEventListener("click", (e) => {
            e.preventDefault();

            // Create container for transition butterflies
            const container = document.createElement("div");
            container.className = "butterfly-transition-layer";
            document.body.appendChild(container);

            // Generate butterflies floating up from the bottom
            const emojis = ["🦋", "✨", "🦋", "🌸"];
            for (let i = 0; i < 15; i++) {
                const butterfly = document.createElement("span");
                butterfly.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
                butterfly.className = "transition-butterfly";
                
                // Stagger positions, sizes, and delays for natural flight
                butterfly.style.left = Math.random() * 100 + "vw";
                butterfly.style.fontSize = Math.random() * 15 + 22 + "px";
                butterfly.style.animationDelay = Math.random() * 0.6 + "s";
                
                container.appendChild(butterfly);
            }

            // Smoothly fade out surprise card and background
            document.body.style.transition = "opacity 1.5s ease";
            setTimeout(() => {
                document.body.style.opacity = "0";
            }, 400);

            // Redirect back to home.html after butterflies complete their slow glide
            setTimeout(() => {
                window.location.href = "home.html";
            }, 2000);
        });
    }
});
