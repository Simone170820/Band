document.addEventListener("DOMContentLoaded", function () {
    let menu = document.getElementById("mobile-menu");
    let overlay = document.getElementById("overlay");
    let menuButton = document.querySelector(".menu-btn");
    let touchStartX = 0;
    let touchEndX = 0;

    function toggleMenu(forceOpen = null) {
        if (forceOpen === true) {
            menu.classList.add("open");
            overlay.classList.add("show");
        } else if (forceOpen === false) {
            menu.classList.remove("open");
            overlay.classList.remove("show");
        } else {
            menu.classList.toggle("open");
            overlay.classList.toggle("show");
        }
    }

    // Click sul bottone menu
    menuButton.addEventListener("click", () => toggleMenu());

    // Click sull'overlay per chiudere il menu
    overlay.addEventListener("click", () => toggleMenu(false));

    // Swipe per aprire e chiudere il menu
    document.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
    });

    document.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].clientX;
        let swipeDistance = touchEndX - touchStartX;

        // **DEBUG: Logga i dati dello swipe**
        console.log("Swipe rilevato:", swipeDistance, "px");

        // **Swipe da sinistra a destra per APRIRE il menu**
        if (swipeDistance > 50 && touchStartX < 50) {
            console.log("Apro il menu con swipe da sinistra");
            toggleMenu(true);
        }

        // **Swipe da destra a sinistra per CHIUDERE il menu**
        if (swipeDistance < -50 && menu.classList.contains("open")) {
            console.log("Chiudo il menu con swipe da destra");
            toggleMenu(false);
        }
    });
});
