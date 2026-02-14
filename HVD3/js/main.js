const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

/* MOVE NO BUTTON */
function moveButton() {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

/* YES BUTTON */
yesBtn.addEventListener("click", (e) => {
    document.getElementById("result").style.display = "block";
    music.play();
    confettiBurst(e.clientX, e.clientY);

    setTimeout(() => {
        document.getElementById("page2").style.display = "flex";
    }, 1200);
});

/* PAGE NAV */
function goPage(num) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById("page" + num).style.display = "flex";
}

/* CONFETTI */
function confettiBurst(x, y) {
    for (let i = 0; i < 30; i++) {
        const c = document.createElement("div");
        c.style.position = "fixed";
        c.style.width = "6px";
        c.style.height = "6px";
        c.style.borderRadius = "50%";
        c.style.background = `hsl(${Math.random()*360},100%,60%)`;
        c.style.left = x + "px";
        c.style.top = y + "px";
        c.style.zIndex = 999;

        document.body.appendChild(c);

        c.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`, opacity: 0 }
        ], { duration: 1000 });

        setTimeout(() => c.remove(), 1000);
    }
}

/* FLOATING BUBBLES */
function startFalling() {
    setInterval(() => {
        const img = document.createElement("img");
        img.src = "images/me.jpg";
        img.className = "fall-img";

        const size = Math.random() * 15 + 35; // smaller
        img.style.width = size + "px";
        img.style.height = size + "px";
        img.style.left = Math.random() * 100 + "vw";
        img.style.animation = `bubbleFall ${Math.random()*3+5}s linear forwards`;

        document.body.appendChild(img);
        setTimeout(() => img.remove(), 8000);
    }, 500);
}

startFalling();