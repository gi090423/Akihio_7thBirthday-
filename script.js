const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const invitation = document.getElementById("invitation");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

function launchConfetti() {
  const container = document.getElementById("confetti");
  const pieces = 90;
  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.setProperty("--x", (Math.random() * 220 - 110) + "px");
    piece.style.animationDuration = (2.2 + Math.random() * 2.2) + "s";
    piece.style.animationDelay = Math.random() * .7 + "s";
    piece.style.background = ["#f7a8c4", "#f6c27a", "#b8a2e8", "#8ed6c1", "#f28d8d"][Math.floor(Math.random() * 5)];
    piece.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

function openInvitation() {
  cover.classList.add("opening");
  setTimeout(() => {
    cover.classList.add("hidden");
    invitation.classList.remove("hidden");
    musicBtn.style.display = "grid";
    launchConfetti();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1050);
}

openBtn.addEventListener("click", openInvitation);
envelope.addEventListener("click", openInvitation);

// Music: browsers generally require a user gesture before audio can play.
musicBtn.addEventListener("click", async () => {
  if (!music.src && !music.querySelector("source")) {
    alert("Add your own music.mp3 file to this folder and uncomment the music source in index.html.");
    return;
  }
  if (music.paused) {
    await music.play();
    musicBtn.textContent = "Ⅱ";
  } else {
    music.pause();
    musicBtn.textContent = "♫";
  }
});

// Countdown — change this date/time to the actual party date.
const eventDate = new Date("September 12, 2026 15:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = eventDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
