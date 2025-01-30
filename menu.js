// Funzione per aprire e chiudere il menu mobile
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

// Aggiunge l'evento click per chiudere il menu quando si clicca fuori
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("overlay").addEventListener("click", toggleMenu);
});

    let touchStartX = 0;
    let touchEndX = 0;

    document.getElementById("mobile-menu").addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX; // Registra la posizione iniziale del tocco
    });

    document.getElementById("mobile-menu").addEventListener("touchmove", function (event) {
        touchEndX = event.touches[0].clientX; // Registra la posizione mentre si muove il dito
    });

    document.getElementById("mobile-menu").addEventListener("touchend", function () {
        if (touchStartX - touchEndX > 50) { // Se lo swipe è di almeno 50px verso sinistra
            document.getElementById("mobile-menu").style.display = "none"; // Chiude il menu
        }
    });

