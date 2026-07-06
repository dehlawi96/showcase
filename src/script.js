/**
 * UI & Accessibility Engine — Muhammad Soheb Portfolio
 * Handles mobile navigation toggles and state mutations for WCAG compliance.
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list-all');

    // Safe initialization guard clause
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

    // Main interaction pointer execution loop
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        toggleNavigation(!isExpanded);
    });

    // Close layout surface on link selections (Ensures smooth internal hash jumps)
    navList.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            toggleNavigation(false);
        }
    });

    // Escape keyboard intercept handler to instantly drop active layout overlays
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            toggleNavigation(false);
            menuToggle.focus(); // Retain visual tab context on triggering element
        }
    });
});