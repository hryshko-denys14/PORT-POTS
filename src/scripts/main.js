'use strict';

const burgerButton = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.header__mob-menu');
const closeButton = document.querySelector('.mob-menu__close-btn');

burgerButton.onclick = () => {
  mobileMenu.style.transform = 'translateX(0)';
};

closeButton.onclick = () => {
  mobileMenu.style.transform = 'translateX(500%)';
};
