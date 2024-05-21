// Selezione di tutti i link con href che inizia con #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Aggiunta di un listener di evento per il click su ogni link
    anchor.addEventListener('click', function(e) {
        // Prevenire il comportamento predefinito del link
        e.preventDefault();

        // Recupero dell'elemento di destinazione basato sull'attributo href del link
        const target = document.querySelector(this.getAttribute('href'));

        // Controllo se l'elemento di destinazione esiste
        if (target) {
            // Scorrimento fluido verso l'elemento di destinazione
            target.scrollIntoView({
                behavior: 'smooth' // Scorrimento fluido
            });
        }
    });
});
