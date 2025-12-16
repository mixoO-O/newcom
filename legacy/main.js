document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  // Mobile Menu Toggle (Basic implementation)
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      // Toggle logic would go here. For now standard nav is hidden on mobile in CSS.
      // We can add a class to body or nav to show it.
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
      nav.style.position = 'absolute';
      nav.style.top = '70px';
      nav.style.left = '0';
      nav.style.width = '100%';
      nav.style.background = 'white';
      nav.style.padding = '20px';
      nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
      nav.querySelector('ul').style.flexDirection = 'column';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
