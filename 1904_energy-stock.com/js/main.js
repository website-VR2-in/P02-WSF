/* ENERGY STOCK ALLIANCE — energy-stock.com | vanilla JS */
(function () {
  "use strict";

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // ---- GDPR cookie consent (GA4 loads only after acceptance) ----
  var banner = document.getElementById("cookie-banner");
  var gaSnippet = document.getElementById("ga4-snippet");
  function loadGA4() {
    if (gaSnippet) gaSnippet.disabled = false;
  }
  function consent(accepted) {
    try { localStorage.setItem("esa_cookie_consent", accepted ? "accepted" : "declined"); } catch (e) {}
    if (banner) banner.classList.remove("show");
    if (accepted) loadGA4();
  }
  var stored = null;
  try { stored = localStorage.getItem("esa_cookie_consent"); } catch (e) {}
  if (stored === "accepted") { loadGA4(); }
  else if (banner) {
    banner.classList.add("show");
    var acc = banner.querySelector("[data-consent='accept']");
    var dec = banner.querySelector("[data-consent='decline']");
    if (acc) acc.addEventListener("click", function () { consent(true); });
    if (dec) dec.addEventListener("click", function () { consent(false); });
  }

  // ---- Language redirect on the root page ----
  var langRedirect = document.getElementById("lang-redirect");
  if (langRedirect) {
    var nav = navigator.language || "fr";
    var target = nav.toLowerCase().indexOf("en") === 0 ? "/en/" : "/fr/";
    window.location.replace(target);
  }

  // ---- Contact form: validate then mailto handoff ----
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cf-name");
      var email = document.getElementById("cf-email");
      var msg = document.getElementById("cf-msg");
      var problems = [];
      if (!name.value.trim()) problems.push(name);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) problems.push(email);
      if (!msg.value.trim()) problems.push(msg);
      if (problems.length) {
        problems.forEach(function (el) { el.style.outline = "2px solid #f59e0b"; setTimeout(function () { el.style.outline = ""; }, 2500); });
        return;
      }
      var subject = form.getAttribute("data-mailto-subject") || "Contact — energy-stock.com";
      window.location.href = "mailto:contact@energy-stock.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("Nom/Name: " + name.value.trim() + "\nEmail: " + email.value + "\n\n" + msg.value.trim());
    });
  }
})();
