/* Mobile navigation toggle and behavior handlers */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list-all');

    if (!menuToggle || !navList) return;

    const toggleNavigation = (shouldOpen) => {
        menuToggle.setAttribute('aria-expanded', shouldOpen);
        if (shouldOpen) {
            navList.classList.add('active');
        } else {
            navList.classList.remove('active');
        }
    };

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        toggleNavigation(!isExpanded);
    });

    // Close menu when clicking links (anchor jumps)
    navList.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            toggleNavigation(false);
        }
    });

    // Close menu on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            toggleNavigation(false);
            menuToggle.focus();
        }
    });

    // Reset menu aria-state if resizing up to desktop layout
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
    const handleViewportChange = (e) => {
        if (e.matches) {
            toggleNavigation(false);
        }
    };
    
    desktopMediaQuery.addEventListener('change', handleViewportChange);
    handleViewportChange(desktopMediaQuery);
});