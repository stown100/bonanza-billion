const burger = document.querySelector('.burger')
const burgerBlock = document.querySelector('.burger__block');
const closeIcon = document.querySelector('.burger__close');

const buttonTop = document.querySelector('.preview-text__button');
const buttonBottom = document.querySelector('.welcome-section__button')
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.button__close');

buttonTop.addEventListener('click', () => {
    popup.classList.add('popup_opened');
})

buttonBottom.addEventListener('click', () => {
    popup.classList.add('popup_opened');
})

popupCloseButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

closeIcon.addEventListener('click', () => {
    burgerBlock.classList.remove('burger__block_visible');
})

burger.addEventListener('click', () => {
    burgerBlock.classList.toggle('burger__block_visible');
})