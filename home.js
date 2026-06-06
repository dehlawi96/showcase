function customizeNavbar() {
    
    let width = window.innerWidth;
    
    let menuButton = document.getElementById("menu-toggle");
    let navList = document.getElementById("nav-list-all");

    if (width <= 768) {
        menuButton.style.display = "block";
        navList.style.display = "none"; 
    } else {
        menuButton.style.display = "none";
        navList.style.display = "flex";
    }
}

customizeNavbar();

window.addEventListener("resize", customizeNavbar);