/* =====================================================
   OPEN INVITATION
===================================================== */

const openButton =
    document.getElementById("openInvitation");

const cover =
    document.getElementById("cover");

const invitation =
    document.getElementById("invitation");



openButton.addEventListener(
    "click",
    function () {

        openButton.classList.add("open");


        setTimeout(
            function () {

                /*
                 * Hide the envelope
                 */

                cover.style.display = "none";


                /*
                 * Show invitation
                 */

                invitation.classList.remove("hidden");


                /*
                 * Start at very top
                 */

                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "instant"
                });


                document.documentElement.scrollTop = 0;

                document.body.scrollTop = 0;


            },
            850
        );

    }
);



/* =====================================================
   HOME BUTTON
===================================================== */

function goHome(event) {

    /*
     * Prevent the "#" link
     * from doing its own navigation.
     */

    event.preventDefault();

    event.stopPropagation();



    /*
     * Find the Home section.
     */

    const home =
        document.getElementById("home");


    if (!home) {

        return;

    }



    /*
     * Scroll directly to the
     * Home section.
     */

    home.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });



    /*
     * Extra fallback for browsers
     * that handle scroll differently.
     */

    setTimeout(
        function () {

            if (
                window.scrollY > 20
            ) {

                window.scrollTo({
                    top: home.offsetTop,
                    left: 0,
                    behavior: "smooth"
                });

            }

        },
        150
    );



    /*
     * Remove # from URL.
     */

    if (
        window.history &&
        window.history.replaceState
    ) {

        window.history.replaceState(
            null,
            "",
            window.location.pathname
        );

    }

}



/* =====================================================
   COUNTDOWN
===================================================== */

/*
 * CHANGE YOUR BIRTHDAY DATE HERE.
 *
 * Format:
 *
 * "Month Day, Year HH:MM:SS"
 */

const birthday =
    new Date(
        "September 12, 2026 15:00:00"
    ).getTime();



function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        birthday - now;



    /*
     * Birthday has arrived.
     */

    if (difference <= 0) {

        document.getElementById(
            "days"
        ).textContent = "00";

        document.getElementById(
            "hours"
        ).textContent = "00";

        document.getElementById(
            "minutes"
        ).textContent = "00";

        document.getElementById(
            "seconds"
        ).textContent = "00";

        return;

    }



    /*
     * Calculate days.
     */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );



    /*
     * Calculate hours.
     */

    const hours =
        Math.floor(
            difference /
            (1000 * 60 * 60)
        ) % 24;



    /*
     * Calculate minutes.
     */

    const minutes =
        Math.floor(
            difference /
            (1000 * 60)
        ) % 60;



    /*
     * Calculate seconds.
     */

    const seconds =
        Math.floor(
            difference /
            1000
        ) % 60;



    /*
     * Display countdown.
     */

    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(
            2,
            "0"
        );


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(
            2,
            "0"
        );


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(
            2,
            "0"
        );


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(
            2,
            "0"
        );

}



/*
 * Start countdown.
 */

updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =====================================================
   RSVP
===================================================== */

const rsvpForm =
    document.getElementById(
        "rsvpForm"
    );


rsvpForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const formData =
            new FormData(
                rsvpForm
            );


        const name =
            formData.get("name");


        document.getElementById(
            "success"
        ).textContent =

            "Thank you, " +
            name +
            "! We can't wait to celebrate with you. ♡";


        rsvpForm.reset();

    }
);
