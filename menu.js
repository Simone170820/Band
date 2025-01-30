// Funzione per aprire e chiudere il menu mobile
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

// Aggiunge l'evento click per chiudere il menu quando si clicca fuori
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("overlay").addEventListener("click", toggleMenu);
});

document.addEventListener("DOMContentLoaded", function () {
    let menu = document.getElementById("mobile-menu");
    let overlay = document.getElementById("overlay");
    let menuButton = document.querySelector(".menu-btn");

    function toggleMenu() {
        menu.classList.toggle("open");
        overlay.classList.toggle("open");
    }

    // Click sull'icona del menu
    menuButton.addEventListener("click", toggleMenu);

    // Click sull'overlay per chiudere il menu
    overlay.addEventListener("click", toggleMenu);

    // Swipe per chiudere il menu
    let touchStartX = 0;
    let touchEndX = 0;

    menu.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
    });

    menu.addEventListener("touchmove", function (event) {
        touchEndX = event.touches[0].clientX;
    });

    menu.addEventListener("touchend", function () {
        if (touchStartX - touchEndX > 50) { // Swipe sinistra
            toggleMenu();
        }
    });
});


