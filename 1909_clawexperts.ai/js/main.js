/* Claw Experts AI — shared behavior */
(function () {
  "use strict";

  // year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // cookie consent → gate GA4
  var KEY = "cx_cookie_consent";
  var banner = document.getElementById("cookie-banner");
  var snippet = document.getElementById("ga4-snippet");

  function consent() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  //-------------------------------------------------------
  function applyConsent(val) {
    if (snippet && val === "accepted") {
      var gaUrl = snippet.getAttribute("data-src");

      if (gaUrl && !snippet.hasAttribute("src")) {
        snippet.src = gaUrl;
      }
    }

    if (banner) {
      banner.classList.toggle(
        "hidden",
        val === "accepted" || val === "declined"
      );
    }
  }

  //----------------------------------------------------------------
  applyConsent(consent());

  if (banner) {
    banner.querySelectorAll("[data-consent]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var v = btn.getAttribute("data-consent");
        try { localStorage.setItem(KEY, v); } catch (e) { }
        applyConsent(v);
      });
    });
  }

  // lang redirect (root only)
  var lr = document.getElementById("lang-redirect");
  if (lr) {
    var nav = (navigator.language || "en").toLowerCase();
    window.location.replace(nav.indexOf("fr") === 0 ? "/fr/" : "/en/");
  }

  // contact form → mailto
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector("#cf-name") || {}).value || "";
      var email = (form.querySelector("#cf-email") || {}).value || "";
      var topic = (form.querySelector("#cf-topic") || {}).value || "";
      var msg = (form.querySelector("#cf-msg") || {}).value || "";
      if (!name.trim() || !email.trim() || !msg.trim()) {
        form.reportValidity();
        return;
      }
      var subject = (form.getAttribute("data-mailto-subject") || "Contact — clawexperts.ai") + " — " + topic;
      var body = "Name: " + name + "\nEmail: " + email + "\nTopic: " + topic + "\n\n" + msg;
      window.location.href = "mailto:hello@clawexperts.ai?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
