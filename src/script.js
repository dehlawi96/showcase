document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById("dynamic-title");
    const numberElement = document.getElementById("dynamic-number");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetItem = entry.target;
                const innerImg = targetItem.querySelector("img, video");
                
                if (innerImg) {
                    titleElement.textContent = innerImg.getAttribute("alt");
                }
                
                numberElement.textContent = targetItem.getAttribute("data-num");
            }
        });
    }, observerOptions);

    portfolioItems.forEach(item => observer.observe(item));
});