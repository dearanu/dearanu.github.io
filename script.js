// Smooth Password Toggle
const togglePassword = document.querySelector(".togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});

// Login
const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const button = form.querySelector("button");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = password.value.trim();

    message.style.opacity = "0";

    setTimeout(()=>{

        if(email==="love@example.com" && pass==="123456"){

            message.style.color="#16a34a";
            message.innerHTML="❤️ Welcome Back ❤️";
            message.style.opacity="1";

            button.disabled=true;
            button.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

            document.querySelector(".login-box").classList.add("success");

            setTimeout(()=>{
                window.location.href="home.html";
            },1800);

        }else{

            message.style.color="#ff1744";
            message.innerHTML="Incorrect email or password";
            message.style.opacity="1";

            document.querySelector(".login-box").classList.add("shake");

            setTimeout(()=>{
                document.querySelector(".login-box").classList.remove("shake");
            },500);

        }

    },250);

});