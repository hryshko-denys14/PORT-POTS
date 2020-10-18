'use strict';

const burgerButton = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.header__mob-menu');
const closeButton = document.querySelector('.mob-menu__close-btn');

const materialsButton = document.querySelector('.materials__circle');
const materialsClose = document.querySelector('.materials__close');
const materialsText = document.querySelector('.materials__hidden-text');

burgerButton.onclick = () => {
  mobileMenu.style.transform = 'translateX(0)';
};

closeButton.onclick = () => {
  mobileMenu.style.transform = 'translateX(500%)';
};

materialsButton.onclick = () => {
  materialsText.style.display = 'block';
  materialsClose.style.display = 'block';
  materialsButton.style.display = 'none';
};

materialsClose.onclick = () => {
  materialsText.style.display = 'none';
  materialsClose.style.display = 'none';
  materialsButton.style.display = 'block';
};
