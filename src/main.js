import './styles/style.scss';
import './styles/typography.scss';
import './styles/utilities.scss';

import './styles/navbar.scss';
import './styles/header.scss';
import './styles/footer.scss';

import './styles/benefits.scss';
import './styles/about.scss';
import './styles/pricing.scss';
import './styles/conversion.scss';
import './styles/testimonials.scss';
import './styles/articles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const openNavBtn = document.querySelector('.nav__toggle-open');
  const popupContainer = document.querySelector('.popup-container');

  openNavBtn.addEventListener('click', () => {
    if (popupContainer) {
      popupContainer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  const closeNavBtn = popupContainer.querySelector('.nav__toggle-close');

  closeNavBtn.addEventListener('click', () => {
    popupContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  const navLinks = popupContainer.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      popupContainer.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
      popupContainer.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});