const toggoleBtn = document.querySelector('.nav__tooglebtn')
const menu = document.querySelector('.nav__menu')
const icons = document.querySelector('.nav__sns')

toggoleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    icons.classList.toggle('active')
})