let themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerText = "☀ Light Mode";

    } else {

        themeBtn.innerText = "🌙 Dark Mode";

    }

});