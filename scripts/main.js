/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import * as mobMobile from './mob-mobile.js';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const burgerButton = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.header__mob-menu');
const closeButton = document.querySelector('.mob-menu__close-btn');
const mobileMenuButtons = document.querySelectorAll('.mob-menu__link');

const materialsButtons = document.querySelectorAll('.materials__circle');
const materialsCloses = document.querySelectorAll('.materials__close');
const materialsTexts = document.querySelectorAll('.materials__hidden-text');

// mobile

burgerButton.addEventListener('click', () => mobMobile.openMobileMenu(mobileMenu));

closeButton.addEventListener('click', () => mobMobile.closeMobileMenu(mobileMenu));

mobileMenuButtons.forEach(mobButton => mobButton.addEventListener('click', () => mobMobile.closeMobileMenu(mobileMenu)));

document.addEventListener('click', (ev) => mobMobile.handleOutsideClick(ev, mobileMenu));

// materials
materialsButtons.forEach((materialsButton, index) => {
  materialsButton.addEventListener('click', () => {
    materialsTexts[index].style.display = 'block';
    materialsCloses[index].style.display = 'block';
    materialsButtons[index].style.display = 'none';
  });
});

materialsCloses.forEach((materialsClose, index) => {
  materialsClose.addEventListener('click', () => {
    materialsTexts[index].style.display = 'none';
    materialsCloses[index].style.display = 'none';
    materialsButtons[index].style.display = 'block';
  });
});
