(() => {
  const links = [...document.querySelectorAll('#navigation a')];
  const sections = [...document.querySelectorAll('.section-anchor')];
  let scheduled = false;

  function updateNavigation() {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 48) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
      current = sections[sections.length - 1];
    }
    for (const link of links) {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    scheduled = false;
  }

  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
