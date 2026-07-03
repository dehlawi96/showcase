document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navListAll = document.getElementById("nav-list-all");

    if (!menuToggle || !navListAll) return;

    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        navListAll.classList.toggle("active");
    });

    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");

    function handleLayoutChange(e) {
        if (e.matches && navListAll.classList.contains("active")) {
            navListAll.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    }

    desktopMediaQuery.addEventListener("change", handleLayoutChange);
});