let cross = document.querySelector('.cross')
let headerTop = document.querySelector('.header__top')
let bottomIcon = document.querySelector('.bottom__icon')
let scroll = document.querySelector('body')
let test = document.querySelector('.menu__list')

cross.addEventListener('click', () => {
   headerTop.classList.toggle('close')
})
bottomIcon.addEventListener('click', (e) => {
   bottomIcon.classList.toggle('_active')
   scroll.classList.toggle('lock-scroll')
   test.classList.toggle('active')

})
