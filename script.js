// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
