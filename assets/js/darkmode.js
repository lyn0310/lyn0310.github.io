// 저장된 값 확인
let darkMode = localStorage.getItem("dark-mode");

if (darkMode === "enabled") {
    document.body.classList.add("dark");
}

document.getElementById("dark-mode-toggle").onclick = function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
};
