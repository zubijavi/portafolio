function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

// Cerrar el menú al hacer clic en un enlace
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('open'); // Cierra el menú
    });
});
