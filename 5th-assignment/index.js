
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const navMenu = document.getElementById("nav");
const shadow = document.getElementById("shadow");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const navLinks = document.querySelectorAll('.header__nav-link');


// onClick display none the nav
closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("open-menu");
    shadow.classList.remove("open-menu")
})

// onClick display the nav
openBtn.addEventListener("click", () => {
    navMenu.classList.add("open-menu");
    shadow.classList.add("open-menu");
})

// onClick display add the active class to nav item remove for the reset
// and close the nav menu
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        link.classList.add("active");
        navMenu.classList.remove("open-menu");
        shadow.classList.remove("open-menu");
    });
});

// Toggle Dark Mode
dark.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    dark.style.display = "none";
    light.style.display = "block";
})

light.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    light.style.display = "none";
    dark.style.display = "block";
})

