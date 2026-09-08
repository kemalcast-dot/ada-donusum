// Smooth in-page navigation
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const target = document.querySelector(a.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
}));

// GA4 contact conversion events
document.querySelectorAll('a[href^="tel:"]').forEach(a => a.addEventListener('click', () => {
  if (typeof gtag === 'function') {
    gtag('event', 'phone_click', {
      event_category: 'contact',
      event_label: '0530 760 76 02',
      page_location: window.location.href
    });
  }
}));

document.querySelectorAll('a[href*="wa.me/"], a[href*="whatsapp.com/"]').forEach(a => a.addEventListener('click', () => {
  if (typeof gtag === 'function') {
    gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      page_location: window.location.href
    });
  }
}));
