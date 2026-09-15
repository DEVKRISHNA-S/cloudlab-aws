/* ==========================================================
   CloudLab AWS — progress tracking (localStorage)
   Loaded on every page. Depends on nothing else.
   ========================================================== */
(function () {
  var STORAGE_KEY = "cloudlab_progress_v1";
  var LESSON_IDS = ["iam", "vpc", "ec2", "linux", "s3", "lambda", "apigw", "cloudwatch", "route53",
    "networking", "subnetting", "cloud-fundamentals", "aws-foundations", "databases-cdn", "well-architected", "security-services"];

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
  }

  function overallPct() {
    var p = loadProgress();
    var done = LESSON_IDS.filter(function (id) { return !!p[id]; }).length;
    return Math.round((done / LESSON_IDS.length) * 100);
  }

  function renderNavProgress() {
    var pct = overallPct();
    document.querySelectorAll("[data-nav-progress-pct]").forEach(function (el) { el.textContent = pct + "%"; });
    document.querySelectorAll("[data-nav-progress-bar]").forEach(function (el) { el.style.width = pct + "%"; });
  }

  function renderDashboardCards() {
    var p = loadProgress();
    document.querySelectorAll("[data-lesson-card]").forEach(function (card) {
      var id = card.getAttribute("data-lesson-card");
      var done = !!p[id];
      var badge = card.querySelector("[data-done-badge]");
      var bar = card.querySelector("[data-card-progress-bar]");
      var label = card.querySelector("[data-card-progress-label]");
      var total = card.getAttribute("data-lesson-total") || "1";
      if (badge) badge.style.display = done ? "inline-flex" : "none";
      if (bar) bar.style.width = done ? "100%" : "0%";
      if (label) label.textContent = (done ? total : "0") + "/" + total + " lessons";
    });
    var doneCount = LESSON_IDS.filter(function (id) { return !!p[id]; }).length;
    document.querySelectorAll("[data-done-count]").forEach(function (el) { el.textContent = doneCount; });
  }

  function renderLessonButton() {
    var btn = document.querySelector("[data-mark-complete]");
    if (!btn) return;
    var id = btn.getAttribute("data-mark-complete");
    var p = loadProgress();
    function paint() {
      var done = !!p[id];
      btn.textContent = done ? "✓ Marked complete" : "Mark this lesson complete";
      btn.classList.toggle("btn-done", done);
      btn.classList.toggle("btn-outline", !done);
    }
    paint();
    btn.addEventListener("click", function () {
      p[id] = !p[id];
      saveProgress(p);
      paint();
      renderNavProgress();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderNavProgress();
    renderDashboardCards();
    renderLessonButton();
  });

  window.CloudLabProgress = { loadProgress: loadProgress, saveProgress: saveProgress, LESSON_IDS: LESSON_IDS };
})();
