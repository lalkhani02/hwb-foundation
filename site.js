(() => {
  const config = window.HWB_CONFIG || {};
  if (config.draftMode === false) document.querySelectorAll('.draft-banner').forEach(el => el.remove());
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const closeMenu = () => { menu?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('is-open'); };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu?.focus(); } });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  if (config.logoUrl) {
    document.querySelectorAll('.brand-logo').forEach(img => { img.src = config.logoUrl; });
  }
  const email = String(config.contactEmail || '').trim();
  if (/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
    document.querySelectorAll('[data-contact]').forEach(el => {
      const a = document.createElement('a');
      a.href = 'mailto:' + encodeURIComponent(email).replace('%40', '@');
      a.textContent = email;
      el.replaceChildren(a);
    });
  }
  try {
    const url = new URL(config.donationUrl);
    if (url.protocol === 'https:') {
      const status = document.querySelector('[data-giving-status]');
      if (status) status.textContent = 'Secure online giving';
      document.querySelectorAll('[data-checkout]').forEach(el => { el.href = url.href; el.hidden = false; });
      document.querySelectorAll('[data-donation-pending]').forEach(el => { el.hidden = true; });
      const state = document.querySelector('[data-donation-state]');
      if (state) state.textContent = 'You will continue to our secure donation provider to complete your gift.';
    }
  } catch { /* No provider configured: keep the explicit unavailable state. */ }
})();
