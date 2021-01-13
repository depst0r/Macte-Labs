window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.buttons-menu')


     burgerMenu = () => {
        burger.addEventListener('click', () => {
            menu.classList.toggle('hide')
        })
    }
burgerMenu()
});