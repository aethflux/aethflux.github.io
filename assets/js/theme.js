(function () {
  var key = "theme";
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function preferred() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function current() {
    var set = root.getAttribute("data-theme");
    return set === "light" || set === "dark" ? set : preferred();
  }

  function paint() {
    var mode = current();
    var meta = document.getElementById("theme-color");
    if (meta) meta.setAttribute("content", mode === "dark" ? "#0b1828" : "#f4f1ea");
    var next = mode === "dark" ? "light" : "dark";
    btn.setAttribute("aria-label", "Switch to " + next + " color theme");
    btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
  }

  paint();

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(key, next);
    } catch (e) {}
    paint();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (!root.getAttribute("data-theme")) paint();
  });
})();
