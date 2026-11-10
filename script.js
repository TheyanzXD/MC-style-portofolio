(() => {
  'use strict';

  const homeView = document.getElementById('home-view');
  const profileView = document.getElementById('profile-view');
  const openButton = document.getElementById('open-profile');
  const backButton = document.getElementById('back-home');
  const footerBack = document.getElementById('footer-back');
  const flash = document.getElementById('transition-flash');
  const profileLinks = [...document.querySelectorAll('.section-nav__link')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let isTransitioning = false;

  document.getElementById('current-year').textContent = String(new Date().getFullYear());

  function playFlash() {
    if (reduceMotion || !flash) return;
    flash.classList.remove('play');
    // Reflow restarts the short transition animation.
    void flash.offsetWidth;
    flash.classList.add('play');
  }

  function openProfile() {
    if (isTransitioning || profileView.classList.contains('is-active')) return;
    isTransitioning = true;
    playFlash();
    homeView.classList.add('is-leaving');

    window.setTimeout(() => {
      homeView.hidden = true;
      homeView.setAttribute('aria-hidden', 'true');
      profileView.hidden = false;
      profileView.removeAttribute('inert');
      profileView.setAttribute('aria-hidden', 'false');
      profileView.classList.add('is-active');
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      isTransitioning = false;
      backButton.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 260);
  }

  function goHome() {
    if (isTransitioning || !profileView.classList.contains('is-active')) return;
    isTransitioning = true;
    playFlash();
    profileView.classList.remove('is-active');
    profileView.hidden = true;
    profileView.setAttribute('aria-hidden', 'true');
    profileView.setAttribute('inert', '');
    homeView.hidden = false;
    homeView.classList.remove('is-leaving');
    homeView.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    isTransitioning = false;
    openButton.focus({ preventScroll: true });
  }

  openButton.addEventListener('click', openProfile);
  backButton.addEventListener('click', goHome);
  footerBack.addEventListener('click', goHome);

  // Keep the landing-page action keyboard-friendly.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && homeView.classList.contains('is-active') && !event.target.closest('a, button')) {
      openProfile();
    }
    if (event.key === 'Escape' && profileView.classList.contains('is-active')) {
      goHome();
    }
  });

  // Smooth in-page navigation and active section indication.
  profileLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      profileLinks.forEach((item) => item.classList.toggle('is-current', item === link));
    });
  });

  if ('IntersectionObserver' in window) {
    const sections = ['about', 'education', 'major', 'interests', 'projects', 'future']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const current = `#${visible.target.id}`;
      profileLinks.forEach((link) => link.classList.toggle('is-current', link.getAttribute('href') === current));
    }, { rootMargin: '-22% 0px -60% 0px', threshold: [0, .15, .4] });
    sections.forEach((section) => observer.observe(section));
  }
})();
