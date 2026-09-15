/* ==========================================================
   CloudLab AWS — mobile nav toggle
   ========================================================== */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-nav-toggle]");
    var mobile = document.querySelector("[data-nav-mobile]");
    if (!toggle || !mobile) return;
    toggle.addEventListener("click", function () {
      mobile.classList.toggle("open");
    });
  });
})();
