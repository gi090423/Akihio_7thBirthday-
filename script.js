const openButton = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");



/* =========================================
   OPEN INVITATION
========================================= */

openButton.addEventListener("click", function () {

  openButton.classList.add("open");

  setTimeout(function () {

    cover.style.display = "none";

    invitation.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

  }, 850);


  /* Start music if available */

  if (music.src) {

    music.play().catch(function () {});

  }

});



/* =========================================
   HOME BUTTON
========================================= */

document.addEventListener("click", function (event) {

  const homeButton =
    event.target.closest(".home-btn") ||
    event.target.closest(".footer-home");


  if (!homeButton) {
    return;
  }


  /*
    IMPORTANT:

    Stop the browser from doing its normal
    anchor navigation.

    Instead, we manually scroll to #home.
  */

  event.preventDefault();


  const homeSection =
    document.getElementById("home");


  if (!homeSection) {
    return;
  }


  /*
    Scroll directly to the home section.
  */

  homeSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });


  /*
    Update the URL without causing
    another jump.
  */

  history.replaceState(
    null,
    "",
    "#home"
  );

});



/* =========================================
   MUSIC BUTTON
========================================= */

musicBtn.addEventListener("click", function () {

  /*
    If you haven't added music yet,
    show a reminder.
  */

  if (!music.src) {

    alert(
      "Add music.mp3 beside index.html, then uncomment the source line in index.html."
    );

    return;

  }


  if (music.paused) {

    music.play();

    musicBtn.textContent = "❚❚";

  } else {

    music.pause();

    musicBtn.textContent = "♫";

  }

});



/* =========================================
   COUNTDOWN
========================================= */

/*
   CHANGE YOUR PARTY DATE HERE.
*/

const birthday =
  new Date(
    "September 12, 2026 15:00:00"
  ).getTime();



function updateCountdown() {

  const now = Date.now();

  const difference =
    birthday - now;


  if (difference <= 0) {

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;

  }


  const days =
    Math.floor(
      difference / 86400000
    );


  const hours =
    Math.floor(
      difference / 3600000
    ) % 24;


  const minutes =
    Math.floor(
      difference / 60000
    ) % 60;


  const seconds =
    Math.floor(
      difference / 1000
    ) % 60;


  document.getElementById("days").textContent =
    String(days).padStart(2, "0");


  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");


  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");


  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);



/* =========================================
   RSVP
========================================= */

document
  .getElementById("rsvpForm")
  .addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const formData =
        new FormData(this);


      const name =
        formData.get("name");


      document.getElementById(
        "success"
      ).textContent =
        `Thank you, ${name}! We can't wait to celebrate with you. ♡`;


      this.reset();

    }
  );
