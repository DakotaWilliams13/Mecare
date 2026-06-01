const menu = document.querySelector('.dropdown');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
});