document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menuBtn');

    menuBtn.addEventListener("click", function() {
        // Faire défiler la page vers le haut
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Attendre un court délai avant d'ouvrir le menu (pour laisser le temps au scroll d'atteindre le haut)
        setTimeout(function() {
            const navbarToggle = document.querySelector('#Menu .navbar-toggler');
            navbarToggle.click(); // Simuler le clic sur le bouton du menu pour l'ouvrir
        },500); // Modifier la valeur du délai si nécessaire
    });
});