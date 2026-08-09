/* =====================================================
   OPEN INVITATION
===================================================== */

const openButton =
    document.getElementById("openInvitation");

const cover =
    document.getElementById("cover");

const invitation =
    document.getElementById("invitation");


openButton.addEventListener("click", function () {

    cover.style.display = "none";

    invitation.classList.remove("hidden");

    window.scrollTo(0, 0);

});



/* =====================================================
   HOME BUTTONS
===================================================== */

const homeButtons =
    document.querySelectorAll(".home-button");


homeButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        /*
         * This is intentionally using window.scrollTo
         * instead of href="#home".
         */

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

    });

});



/* =====================================================
   COUNTDOWN
===================================================== */

/*
 * CHANGE THIS DATE
 */

const birthdayDate =
    new Date(
        "September 12, 2026 15:00:00"
    ).getTime();



function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        birthdayDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";

        document.getElementById("hours").textContent = "00";

        document.getElementById("minutes").textContent = "00";

        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        ) % 24;


    const minutes =
        Math.floor(
            difference /
            (1000 * 60)
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



/* =====================================================
   RSVP
===================================================== */

const rsvpForm =
    document.getElementById("rsvpForm");


rsvpForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        rsvpForm.querySelector(
            "input"
        ).value;


    document.getElementById("success").textContent =
        "Thank you, " +
        name +
        "! We can't wait to celebrate with you. ♡";


    rsvpForm.reset();

});
