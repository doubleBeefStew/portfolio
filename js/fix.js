const navItems = document.querySelectorAll('.navbar-nav .nav-item');

const toggler = document.getElementsByClassName('navbar-toggler');
const ftcoNav = document.getElementsById('ftco-nav');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        ftcoNav.classList.toggle('active');
        ftcoNav.classList.toggle('show');
    });
});