// ================================
// My Love One ❤️
// home.js
// ================================

// ❤️ Love Counter
const loveCounter = document.getElementById("loveCounter");

// Change this to your anniversary date
const loveDate = new Date("2025-01-01T00:00:00");

function updateCounter(){

    const now = new Date();

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

updateCounter();
setInterval(updateCounter,1000);

// ================================
// 🎵 Music Player
// ================================

const music = document.getElementById("song");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        playBtn.innerHTML=
        '<i class="fa-solid fa-pause"></i> Pause Music';

    }else{

        music.pause();

        playBtn.innerHTML=
        '<i class="fa-solid fa-play"></i> Play Music';

    }

});

// ================================
// ❤️ Surprise Messages
// ================================

const surprise=document.getElementById("surprise");

const message=document.getElementById("message");

const quotes=[

"❤️ I Love You Forever ❤️",

"💖 You Are My Happiness 💖",

"🌹 Every Moment With You Is Special 🌹",

"🥰 You Complete My World 🥰",

"💕 You Are My Favourite Person 💕",

"💍 Forever Starts With You 💍",

"💘 My Heart Belongs To You 💘",

"✨ Thank You For Being In My Life ✨"

];

surprise.addEventListener("click",()=>{

    const random=Math.floor(Math.random()*quotes.length);

    message.style.opacity="0";

    setTimeout(()=>{

        message.innerHTML=quotes[random];

        message.style.opacity="1";

    },300);

});

// ================================
// ✨ Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ================================
// ❤️ Fade Sections on Scroll
// ================================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition=".8s ease";

    observer.observe(section);

});