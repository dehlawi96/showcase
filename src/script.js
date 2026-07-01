document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navListAll = document.getElementById("nav-list-all");
    
    const sliderTrack = document.getElementById("slider-track");
    const prevBtn = document.getElementById("slide-prev");
    const nextBtn = document.getElementById("slide-next");

    if (menuToggle && navListAll) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isExpanded);
            navListAll.classList.toggle("active");
        });
    }

    if (sliderTrack && prevBtn && nextBtn) {
        const getScrollStep = () => {
            return window.innerWidth >= 768 ? sliderTrack.offsetWidth : sliderTrack.querySelector(".portfolio-item").offsetWidth + 20;
        };

        nextBtn.addEventListener("click", () => {
            sliderTrack.scrollBy({ left: getScrollStep(), behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            sliderTrack.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
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