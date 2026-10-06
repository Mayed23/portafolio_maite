const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("activo");

    if (nav.classList.contains("activo")) {
        menuToggle.textContent = "×";
        menuToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menú");
    }

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("activo");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

});