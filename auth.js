document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenire il comportamento predefinito del form

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Visualizza lo spinner di caricamento
    document.getElementById("spinner").style.display = "block";

    // Simula una chiamata di autenticazione (puoi sostituirla con una chiamata API)
    setTimeout(function() {
        // Nasconde lo spinner
        document.getElementById("spinner").style.display = "none";

        // Controllo di esempio per email e password
        if (email === "user@example.com" && password === "password123") {
            // Successo: reindirizza o mostra il messaggio di successo
            alert("Login effettuato con successo!");
        } else {
            // Errore: mostra il messaggio di errore
            var errorMessage = document.getElementById("error-message");
            errorMessage.textContent = "Credenziali errate. Riprova.";
            errorMessage.style.display = "block";
        }
    }, 2000);  // Simulazione di un ritardo di 2 secondi
});
