// ================= ELEMENT SELECTION =================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");


// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================= ACTIVE NAVIGATION =================

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }

            });

        }

    });

}, {
    threshold: 0,
    rootMargin: "-30% 0px -60% 0px"
});


sections.forEach(section => {
    sectionObserver.observe(section);
});


// ================= BACK TO TOP BUTTON =================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.classList.add("back-to-top");
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);


// Show button while scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }

});


// Scroll to top

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= DYNAMIC COPYRIGHT YEAR =================

const footerText = document.querySelector(".footer p:last-child");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Advit Tripathi. All Rights Reserved.`;

}


// ================= CONSOLE MESSAGE =================

console.log("Advit's Portfolio Loaded Successfully!");
