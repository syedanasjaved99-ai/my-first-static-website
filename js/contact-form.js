/**
 * @module contact-form — placeholder; replace with fetch() to your API.
 */
(function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-form-status");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (status) {
      status.textContent = "Inquiry captured locally — connect endpoint: " + (form.getAttribute("data-api-endpoint") || "/api/contact");
    }
  });
})();
