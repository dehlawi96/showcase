document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navListAll = document.getElementById("nav-list-all");

    if (menuToggle && navListAll) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isExpanded);
            navListAll.classList.toggle("active");
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            if (navListAll && navListAll.classList.contains("active")) {
                navListAll.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        }
    });
});