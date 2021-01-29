/* eslint-disable max-len */
let isMobileMenuOpen = false;

function closeMobileMenu(element) {
  element.style.transform = 'translateX(500%)';
  isMobileMenuOpen = false;
}

function openMobileMenu(element) {
  element.style.transform = 'translateX(0)';
  isMobileMenuOpen = true;
}

function handleOutsideClick(ev, mobileMenu) {
  const classList = ev.target.classList;

  if (isMobileMenuOpen && !classList.contains('header__mob-menu')
        && !classList.contains('header__burger-btn')) {
    closeMobileMenu(mobileMenu);
  }
}

export {
  openMobileMenu,
  handleOutsideClick,
  closeMobileMenu,
};
