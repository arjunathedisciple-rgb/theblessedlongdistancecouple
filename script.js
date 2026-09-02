```javascript
/* ============================================================
   SAILesh & BHUMIKA
   Relationship Memory Website
============================================================ */


/* ============================================================
   CONFIGURATION
============================================================ */

/*
    IMPORTANT:

    Change this to the date you want the counter to begin from.

    Example:
    "2026-01-01"

    The counter will calculate the number of days between
    that date and today.
*/

const STORY_START_DATE = "2026-01-01";


/* ============================================================
   DAYS COUNTER
============================================================ */

function updateDaysCounter() {

    const counter = document.getElementById("daysTogether");

    if (!counter) {
        return;
    }

    const start = new Date(STORY_START_DATE);
    const today = new Date();

    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const difference =
        today.getTime() - start.getTime();

    const days =
        Math.max(
            0,
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            )
        );

    animateNumber(counter, days);
}


/* ============================================================
   NUMBER ANIMATION
============================================================ */

function animateNumber(element, target) {

    let current = 0;

    const duration = 1300;

    const startTime = performance.now();


    function update(time) {

        const progress =
            Math.min(
                (time - startTime) / duration,
                1
            );

        const eased =
            1 - Math.pow(1 - progress, 3);

        current =
            Math.floor(target * eased);

        element.textContent =
            current.toLocaleString();


        if (progress < 1) {
            requestAnimationFrame(update);
        }

    }

    requestAnimationFrame(update);
}


/* ============================================================
   FLOATING HEARTS
============================================================ */

const heartsContainer =
    document.getElementById("backgroundHearts");


function createFloatingHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";


    const symbols = [
        "♥",
        "♡",
        "✦",
        "·"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (8 + Math.random() * 15) + "px";


    heart.style.animationDuration =
        (8 + Math.random() * 10) + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    heartsContainer.appendChild(heart);


    setTimeout(
        () => heart.remove(),
        20000
    );
}


setInterval(
    createFloatingHeart,
    900
);


/* ============================================================
   MEMORY IMAGE MODAL
============================================================ */

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");


document
    .querySelectorAll(".memory-card img")
    .forEach(image => {

        image.addEventListener(
            "click",
            function () {

                /*
                    Don't open placeholder images.
                */

                if (
                    this.naturalWidth === 0
                ) {
                    return;
                }


                modalImage.src =
                    this.src;


                imageModal.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";
            }
        );

    });


function closeModal() {

    imageModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";
}


modalClose.addEventListener(
    "click",
    closeModal
);


imageModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === imageModal
        ) {
            closeModal();
        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* ============================================================
   GIFT BUTTONS
============================================================ */

document
    .querySelectorAll(".gift-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                this.classList.toggle(
                    "active"
                );


                if (
                    this.classList.contains(
                        "active"
                    )
                ) {

                    this.textContent =
                        "♥ Added to wishlist";

                } else {

                    this.textContent =
                        "♡ Add to wishlist";

                }

            }
        );

    });


/* ============================================================
   SIMPLE REVEAL ANIMATION
============================================================ */

const revealElements =
    document.querySelectorAll(
        ".timeline-item, .memory-card, .gift-card, .date-card, .dream-card, .letter-paper"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* ============================================================
   MUSIC BUTTON
============================================================ */

/*
    When you have your own music file, place it here:

    C:\MBA\assets\music\our-song.mp3

    Then uncomment the Audio line below.
*/


// const backgroundMusic =
//     new Audio("assets/music/our-song.mp3");

// backgroundMusic.loop = true;
// backgroundMusic.volume = 0.35;


const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    function() {

        /*
            Uncomment the following section when
            you add your own music file.
        */


        /*
        if (!musicPlaying) {

            backgroundMusic.play();

            musicPlaying = true;

            this.textContent = "❚❚";

        } else {

            backgroundMusic.pause();

            musicPlaying = false;

            this.textContent = "♫";

        }
        */


        /*
            Temporary behaviour until music
            is added.
        */

        this.classList.toggle(
            "active"
        );

    }
);


/* ============================================================
   INITIALIZE
============================================================ */

updateDaysCounter();


/* ============================================================
   CONSOLE MESSAGE
============================================================ */

console.log(
    "♥ Sailesh & Bhumika — memory website loaded."
);
```
