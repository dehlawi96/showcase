/**
 * UI & Accessibility Interactions — Muhammad Soheb Portfolio
 * Handles mobile navigation visibility toggles and state mutations.
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list-all');

    if (!menuToggle || !navList) return;

    /**
     * Updates navigation visibility and toggles associated aria states
     * @param {boolean} shouldOpen - Explicit state flag
     */
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

    // Close mobile layout menu on link selections (Ensures smooth internal anchor jumps)
    navList.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            toggleNavigation(false);
        }
    });

    // Escape keyboard intercept handler to instantly drop active layout overlays
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            toggleNavigation(false);
            menuToggle.focus();
        }
    });

    // Media Query Listener: Resolves state issue when window resizes to desktop widths
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
    const handleViewportChange = (e) => {
        if (e.matches) {
            // Force state to false on desktop so aria-expanded doesn't sit frozen as true
            toggleNavigation(false);
        }
    };
    
    desktopMediaQuery.addEventListener('change', handleViewportChange);
    handleViewportChange(desktopMediaQuery); // Run initial verification check
});