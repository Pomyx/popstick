const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Köszönjük! A feliratkozási rendszer hamarosan aktiválva lesz.");
  });
}
