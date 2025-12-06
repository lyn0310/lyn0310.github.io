document.addEventListener("DOMContentLoaded", function () {

    let darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "enabled") {
        document.body.classList.add("dark");
    }

    const btn = document.getElementById("dark-mode-toggle");
    if (!btn) return;

    btn.onclick = function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    };
});
