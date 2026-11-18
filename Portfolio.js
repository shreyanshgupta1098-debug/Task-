let themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerText = "🌙 Dark Mode";
    } else {
        themeBtn.innerText = "☀ Light Mode";
    }
});