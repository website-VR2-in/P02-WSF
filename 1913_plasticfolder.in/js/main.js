/* 1913 plasticfolder.in v2 — main.js */
(function () {
  "use strict";

  // year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // cookie-gated GA4
  var KEY = "pf_cookie_consent";
  var banner = document.getElementById("cookie-banner");
  var ga = document.getElementById("ga4-snippet");
  function applyConsent(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    if (v === "accepted" && ga) {
      var src = ga.getAttribute("data-src");
      if (src) { ga.removeAttribute("disabled"); ga.src = src; }
    }
    if (banner) banner.classList.remove("show");
  }
  var consented = false;
  try { consented = localStorage.getItem(KEY) === "accepted"; } catch (e) {}
  if (consented) {
    if (ga) { var s = ga.getAttribute("data-src"); if (s) { ga.removeAttribute("disabled"); ga.src = s; } }
  } else if (banner) {
    banner.classList.add("show");
    banner.querySelectorAll("[data-consent]").forEach(function (b) {
      b.addEventListener("click", function () { applyConsent(b.getAttribute("data-consent")); });
    });
  }

  // mailto contact form
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var f = new FormData(form);
      var to = (form.getAttribute("data-mailto") || "info@plasticfolder.in").trim();
      var subject = (form.getAttribute("data-mailto-subject") || "Quote request — plasticfolder.in").trim();
      var lines = [];
      f.forEach(function (v, k) { if (String(v).trim()) lines.push(k + ": " + String(v).trim()); });
      var body = lines.join("\n");
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
