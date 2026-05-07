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
  let backToTopButton = document.querySelector('.back-to-top');

  if (!backToTopButton) {
    backToTopButton = document.createElement('button');
    backToTopButton.type = 'button';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Vissza az oldal tetejére');
    backToTopButton.textContent = '↑';
    document.body.appendChild(backToTopButton);
  }

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

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
})();
