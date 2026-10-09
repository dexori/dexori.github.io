(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#navigation');
  const links = [...navigation.querySelectorAll('a')];

  function closeNavigation() {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });

  function markActive(id) {
    links.forEach(link => {
      const active = link.hash === `#${id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  links.forEach(link => link.addEventListener('click', closeNavigation));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.sidebar')) closeNavigation();
  });
  const desktop = window.matchMedia('(min-width: 571px)');
  desktop.addEventListener('change', closeNavigation);

  // A single scroll update chooses the section below the fixed navigation.
  const sections = [...document.querySelectorAll('.section-anchor')];
  let scheduled = false;
  function updateSection() {
    const offset = window.innerWidth <= 820 ? 140 : 100;
    let current = sections[0];
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= offset) current = section;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
      current = sections[sections.length - 1];
    }
    markActive(current.id);
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateSection);
    }
  }, { passive: true });
  window.addEventListener('resize', updateSection);
  updateSection();
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
