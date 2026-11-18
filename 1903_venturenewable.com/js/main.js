/* VREW — venturenewable.com | vanilla JS, no dependencies */
(function () {
  "use strict";

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Contact form: validate, then hand off to the user's mail client (mailto)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cf-name");
      var email = document.getElementById("cf-email");
      var msg = document.getElementById("cf-msg");
      var type = document.getElementById("cf-type");

      var problems = [];
      if (!name.value.trim()) problems.push("name");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) problems.push("email");
      if (!msg.value.trim()) problems.push("message");

      if (problems.length) {
        problems.forEach(function (id) {
          var el = document.getElementById("cf-" + id);
          if (el) { el.style.outline = "2px solid #f59e0b"; setTimeout(function () { el.style.outline = ""; }, 2500); }
        });
        return;
      }

      var body =
        "Name: " + name.value.trim() + "\n" +
        "Email: " + email.value + "\n" +
        "Type: " + (type ? type.value : "") + "\n\n" +
        msg.value.trim();

      if (window.gtag) {
        gtag("event", "generate_lead", { form: "contact", lead_type: type ? type.value : "unknown" });
      }
      window.location.href = "mailto:contact@vrew.com" +
        "?subject=" + encodeURIComponent("Website enquiry — " + (type ? type.value : "General")) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
