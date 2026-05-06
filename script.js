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
