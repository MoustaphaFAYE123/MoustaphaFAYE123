/ Fonction pour activer le défilement fluide vers les sections
function smoothScroll(target) {
    const targetSection = document.querySelector(target);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Ecouter les clics sur les liens de navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
