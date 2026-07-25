// ================================================
// My Love One ❤️
// script.js
// ================================================

// 👁️ Smooth Password Toggle
const togglePassword = document.querySelector(".togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    // Toggle the input type between password and text
    password.type = password.type === "password" ? "text" : "password";
    
    // Toggle the FontAwesome eye icons
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});

// Create hidden audio instance for smooth unlock on click
const bgMusic = new Audio("HAPPY BIRTHDAY INSTRUMENTAL.mp3");
bgMusic.loop = true;

// 🔐 Form Validation & Animation Trigger
const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const button = form.querySelector("button");
const loginBox = document.querySelector(".login-box");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = password.value.trim();

    message.style.opacity = "0";

    setTimeout(() => {
        if (email === "anu@dearanu.com" && pass === "anumanish") {
            // Start playing song immediately on login click!
            bgMusic.play().then(() => {
                sessionStorage.setItem("autoplayMusic", "true");
            }).catch(err => {
                console.log("Audio play deferred to home page", err);
            });

            // 1. Setup Success Message Style
            message.style.color = "#16a34a";
            message.innerHTML = "❤️ Welcome Back ❤️";
            message.style.opacity = "1";

            // 2. Disable Button and Add Loading Spinner Icon
            button.disabled = true;
            button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

            // 3. Trigger CSS Success Animation
            loginBox.classList.add("success");

            // 4. Redirect to home.html
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1800);

        } else {
            message.style.color = "#ff1744";
            message.innerHTML = "Incorrect email or password";
            message.style.opacity = "1";

            loginBox.classList.add("shake");

            setTimeout(() => {
                loginBox.classList.remove("shake");
            }, 500);
        }
    }, 250);
});
