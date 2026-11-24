// Montana Cabinet Painting site behavior
(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Before/after slider
  document.querySelectorAll("[data-ba]").forEach(function (ba) {
    var range = ba.querySelector(".ba-range");
    var set = function () { ba.style.setProperty("--pos", range.value + "%"); };
    range.addEventListener("input", set);
    set();
  });

  // Desktop browsers usually can't send texts: show the phone number with a copy button instead
  var isTouch = window.matchMedia("(pointer: coarse)").matches;
  if (!isTouch) {
    var fallback = document.querySelector(".sms-fallback");
    if (fallback) fallback.hidden = false;
    document.querySelectorAll("a.js-sms").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var contact = document.getElementById("contact");
        if (contact) contact.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
  var copyBtn = document.querySelector(".copy-phone");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var number = "(406) 555-0100";
      var done = function () { copyBtn.textContent = "Copied"; setTimeout(function () { copyBtn.textContent = "Copy number"; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(number).then(done, function () {});
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
