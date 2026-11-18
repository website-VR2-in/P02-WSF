/* 1905 · hcea.asia — main.js */
(function () {
  "use strict";

  /* footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* cookie consent (PAPD / GDPR) — gates GA4 */
  var KEY = "hcea_cookie_consent";
  var banner = document.getElementById("cookie-banner");
  var snippet = document.getElementById("ga4-snippet");
  var consent = null;
  try { consent = localStorage.getItem(KEY); } catch (e) {}

  function applyConsent(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (snippet) {
      if (value === "accept") { snippet.removeAttribute("disabled"); }
      else { snippet.setAttribute("disabled", ""); }
    }
    if (banner) banner.classList.add("hidden");
  }

  if (banner) {
    if (consent) { applyConsent(consent); }
    banner.querySelectorAll("[data-consent]").forEach(function (btn) {
      btn.addEventListener("click", function () { applyConsent(btn.getAttribute("data-consent")); });
    });
  } else if (consent === "accept" && snippet) {
    snippet.removeAttribute("disabled");
  }

  /* language auto-redirect (root index only) */
  var langRedirect = document.getElementById("lang-redirect");
  if (langRedirect) {
    var nav = (navigator.language || "fr").toLowerCase();
    window.location.replace(nav.indexOf("en") === 0 ? "/en/" : "/fr/");
  }

  /* contact form → mailto (no third-party server) */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var topic = (document.getElementById("cf-topic") || {}).value || "";
      var msg = document.getElementById("cf-msg").value.trim();
      var subject = form.getAttribute("data-mailto-subject") || "Contact — hcea.asia";
      var body =
        "Nom: " + name + "\n" +
        "Email: " + email + "\n" +
        "Sujet: " + topic + "\n\n" +
        msg;
      window.location.href = "mailto:contact@hcea.asia?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
