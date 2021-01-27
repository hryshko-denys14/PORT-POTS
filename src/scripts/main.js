/* eslint-disable max-len */
'use strict';

const burgerButton = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.header__mob-menu');
const closeButton = document.querySelector('.mob-menu__close-btn');

const materialsButtons = document.getElementsByClassName('materials__circle');
const materialsCloses = document.getElementsByClassName('materials__close');
const materialsTexts = document.getElementsByClassName('materials__hidden-text');

burgerButton.onclick = () => {
  mobileMenu.style.transform = 'translateX(0)';
};

closeButton.onclick = () => {
  mobileMenu.style.transform = 'translateX(500%)';
};

for (let i = 0; i < materialsButtons.length; i++) {
  materialsButtons[i].onclick = () => {
    materialsTexts[i].style.display = 'block';
    materialsCloses[i].style.display = 'block';
    materialsButtons[i].style.display = 'none';
  };
}

for (let i = 0; i < materialsCloses.length; i++) {
  materialsCloses[i].onclick = () => {
    materialsTexts[i].style.display = 'none';
    materialsCloses[i].style.display = 'none';
    materialsButtons[i].style.display = 'block';
  };
}

// slider
const text = {
  first: 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ',
  second: 'second second second second second second second second second second second second second second second second second second second second second second second second',
  third: 'third third third third third third third third third third third third third third third third third third third third third third third third third third third third third',
  fourth: 'fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth fourth',
  fifth: 'test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11 test11',
};

const sliderButtons = document.getElementsByClassName('slider__btn');
const textContent = document.querySelector('.slider__text');

// eslint-disable-next-line no-unused-vars
function changeText(id) {
  for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].id === id
      ? sliderButtons[i].classList.add('slider__btn--active')
      : sliderButtons[i].classList.remove('slider__btn--active');

    textContent.innerText = text[id];
  }
}
