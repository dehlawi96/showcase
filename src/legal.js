/**
 * Isolated Interaction Scripts for Legal Modules
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu State Synchronization
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list-all');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('active');
        });
    }

    // 2. Soft Changelog Expand Engine
    const trigger = document.getElementById('changelog-trigger');
    const container = document.getElementById('changelog-display-box');

    if (trigger && container) {
        trigger.addEventListener('click', () => {
            const isHidden = container.hasAttribute('hidden');
            
            if (isHidden) {
                container.removeAttribute('hidden');
                trigger.setAttribute('aria-expanded', 'true');
                trigger.textContent = 'close';
            } else {
                container.setAttribute('hidden', '');
                trigger.setAttribute('aria-expanded', 'false');
                trigger.textContent = 'changelog';
            }
        });
    }
});