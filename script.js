const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', toggleNavbar);

closeBtn.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    if (navbar.classList.contains('show-nav')) {
        navbar.classList.remove('show-nav');
        menu.style.display = 'block';
        closeBtn.style.display = 'none';
    } else {
        navbar.classList.add('show-nav');
        menu.style.display = 'none';
        closeBtn.style.display = 'block';
    }
}
