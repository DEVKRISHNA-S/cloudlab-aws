/* ==========================================================
   CloudLab AWS — mini challenge quiz widget
   Markup contract:
   <div class="quiz" data-quiz>
     <script type="application/json" data-quiz-data>
       {"question":"...","options":["..."],"correct":1,"explanation":"..."}
     </script>
   </div>
   ========================================================== */
(function () {
  function initQuiz(el) {
    var dataEl = el.querySelector("[data-quiz-data]");
    if (!dataEl) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); } catch (e) { return; }

    var selected = null;
    var submitted = false;

    var questionEl = document.createElement("p");
    questionEl.className = "quiz-question";
    questionEl.textContent = data.question;

    var optionsWrap = document.createElement("div");
    optionsWrap.className = "quiz-options";

    var optionButtons = data.options.map(function (opt, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option";
      btn.textContent = opt;
      btn.addEventListener("click", function () {
        if (submitted) return;
        selected = i;
        optionButtons.forEach(function (b, j) { b.classList.toggle("selected", j === i); });
      });
      optionsWrap.appendChild(btn);
      return btn;
    });

    var actionWrap = document.createElement("div");

    var submitBtn = document.createElement("button");
    submitBtn.type = "button";
    submitBtn.className = "btn btn-primary btn-sm";
    submitBtn.textContent = "Check answer";
    submitBtn.addEventListener("click", function () {
      if (selected === null || submitted) return;
      submitted = true;
      var correct = selected === data.correct;
      optionButtons.forEach(function (b, i) {
        b.disabled = true;
        b.classList.remove("selected");
        if (i === data.correct) b.classList.add("correct");
        else if (i === selected) b.classList.add("incorrect");
      });
      var feedback = document.createElement("div");
      feedback.className = "quiz-feedback " + (correct ? "correct" : "incorrect");
      feedback.innerHTML = "<strong>" + (correct ? "Correct. " : "Not quite. ") + "</strong><span class=\"exp\"></span>";
      feedback.querySelector(".exp").textContent = data.explanation;
      actionWrap.innerHTML = "";
      actionWrap.appendChild(feedback);
    });
    actionWrap.appendChild(submitBtn);

    var badge = document.createElement("span");
    badge.className = "badge badge-amber";
    badge.textContent = "Mini Challenge";
    var badgeWrap = document.createElement("div");
    badgeWrap.appendChild(badge);

    el.innerHTML = "";
    el.appendChild(badgeWrap);
    el.appendChild(questionEl);
    el.appendChild(optionsWrap);
    el.appendChild(actionWrap);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-quiz]").forEach(initQuiz);
  });
})();
