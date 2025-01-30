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

        // Swipe da sinistra a destra per APRIRE il menu
        if (swipeDistance > 50 && touchStartX < 50) {
            toggleMenu(true);
        }

        // Swipe da destra a sinistra per CHIUDERE il menu
        if (swipeDistance < -50 && menu.classList.contains("open")) {
            toggleMenu(false);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;
    const carousel = document.querySelector(".carousel-images");

    function showImage(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index === 0) ? totalImages - 1 : index - 1;
        showImage(index);
    });

    document.querySelector(".next").addEventListener("click", function () {
        index = (index === totalImages - 1) ? 0 : index + 1;
        showImage(index);
    });

    // Swipe su mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) { // Swipe sinistra
            index = (index === totalImages - 1) ? 0 : index + 1;
        } else if (touchEndX - touchStartX > 50) { // Swipe destra
            index = (index === 0) ? totalImages - 1 : index - 1;
        }
        showImage(index);
    });

    // Scorrimento automatico
    setInterval(() => {
        index = (index + 1) % totalImages;
        showImage(index);
    }, 3000);
});
