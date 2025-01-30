// Funzione per aprire e chiudere il menu mobile
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

// Aggiunge l'evento click per chiudere il menu quando si clicca fuori
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("overlay").addEventListener("click", toggleMenu);
});
