/* ==========================================================
   CloudLab AWS — simulated terminal widget
   Markup contract:
   <div class="terminal" data-terminal>
     <div class="terminal-titlebar">...</div>
     <script type="application/json" data-terminal-lines>
       [{"cmd":"...","output":"..."}]
     </script>
     <div class="terminal-body" data-terminal-body></div>
   </div>
   ========================================================== */
(function () {
  function buildLine(line) {
    var wrap = document.createElement("div");
    wrap.className = "term-line";

    var row = document.createElement("div");
    row.className = "term-cmd-row";
    var prompt = document.createElement("span");
    prompt.className = "term-prompt";
    prompt.textContent = "$";
    var cmd = document.createElement("span");
    cmd.className = "term-cmd";
    cmd.textContent = line.cmd;
    row.appendChild(prompt);
    row.appendChild(cmd);
    wrap.appendChild(row);

    if (line.output) {
      var out = document.createElement("pre");
      out.className = "term-output";
      out.textContent = line.output;
      wrap.appendChild(out);
    }
    return wrap;
  }

  function initTerminal(el) {
    var dataEl = el.querySelector("[data-terminal-lines]");
    var body = el.querySelector("[data-terminal-body]");
    if (!dataEl || !body) return;
    var lines;
    try { lines = JSON.parse(dataEl.textContent); } catch (e) { lines = []; }

    var revealed = 1;

    function render() {
      body.innerHTML = "";
      for (var i = 0; i < Math.min(revealed, lines.length); i++) {
        body.appendChild(buildLine(lines[i]));
      }
      if (revealed < lines.length) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "term-run-btn";
        btn.textContent = "run next command →";
        btn.addEventListener("click", function () {
          revealed++;
          render();
        });
        body.appendChild(btn);
      } else {
        var cursor = document.createElement("span");
        cursor.className = "term-cursor";
        cursor.textContent = "\u258C";
        body.appendChild(cursor);
      }
    }
    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-terminal]").forEach(initTerminal);
  });
})();
