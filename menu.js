// Funzione per aprire e chiudere il menu mobile
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

// Aggiunge l'evento click per chiudere il menu quando si clicca fuori
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("overlay").addEventListener("click", toggleMenu);
});

    let menu = document.getElementById("mobile-menu");
    let menuToggle = document.getElementById("menu-toggle");

    // Funzione per aprire/chiudere il menu con il bottone
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open"); // Aggiunge/rimuove la classe "open"
    });

    // Variabili per il rilevamento dello swipe
    let touchStartX = 0;
    let touchEndX = 0;

    // Registra il punto di inizio del tocco
    menu.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
    });

    // Registra il punto di fine del tocco
    menu.addEventListener("touchmove", function (event) {
        touchEndX = event.touches[0].clientX;
    });

    // Controlla la direzione dello swipe alla fine del tocco
    menu.addEventListener("touchend", function () {
        if (touchStartX - touchEndX > 50) { 
            // Swipe verso sinistra → chiude il menu
            menu.classList.remove("open");
        }
    });

    document.addEventListener("click", function (event) {
        // Chiude il menu se si clicca fuori dal menu
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove("open");
        }
    });



