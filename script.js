const form = document.querySelector("#sib-form");

if (form) {
  form.addEventListener("submit", function () {
    const submitButton = form.querySelector(".popstick-submit-btn");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "FELDOLGOZÁS...";
    }
  });
}


(function () {
  const backToTopButton = document.createElement('button');
  backToTopButton.type = 'button';
  backToTopButton.className = 'back-to-top';
  backToTopButton.setAttribute('aria-label', 'Vissza az oldal tetejére');
  backToTopButton.textContent = '↑';

  const toggleBackToTop = () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('is-visible');
      return;
    }

    backToTopButton.classList.remove('is-visible');
  };

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.body.appendChild(backToTopButton);
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
})();
