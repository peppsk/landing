// Esempio di script JavaScript per l'animazione della barra di navigazione
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.transition = 'color 0.3s';
            link.style.color = '#ffd700'; // Colore al passaggio del mouse
        });
        link.addEventListener('mouseout', function() {
            link.style.transition = 'color 0.3s';
            link.style.color = '#fff'; // Colore originale
        });
    });
});
