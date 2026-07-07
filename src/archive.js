/**
 * UI & Accessibility Interactions Archive Engine — Muhammad Soheb Portfolio
 * Handles high-fidelity project sorting, viewport mutations, and mobile layout intercept routines.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
                    FILTER SYSTEM
       ========================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
            button.classList.add('filter-btn--active');

            const filterValue = button.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                // Fallback to an empty string to prevent .includes() from crashing on null values
                const categories = card.getAttribute('data-category') || ''; 
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================
            CASE STUDY DATA STORAGE DIRECTORY
       ========================================== */
    const projectDatabase = {
        "ancient-drawing": {
            index: "001",
            title: "Ancient Drawing",
            category: "Graphic Layout",
            stack: "InDesign / Illustrator",
            intent: "A deep dive into deliberate typographic arrangements, balancing classical illustrative elements with stark grid boundaries.",
            primaryMedia: '<img src="resource/Poster/Ancient-drawing-poster.webp" alt="Ancient Drawing Poster">',
            iterations: [
                "resource/Poster/Ancient-drawing-poster.webp" // Cleaned up duplicate image tracking here
            ]
        },
        "ethereal": {
            index: "002",
            title: "Ethereal",
            category: "Motion Art Systems",
            stack: "After Effects / Premiere",
            intent: "Exploration of kinetic energy loops. Built with intentional easing parameters to generate weightless, fluid background transitions.",
            primaryMedia: '<img src="resource/Poster/Ethereal-poster.webp" alt="Ethereal Visual Layout">',
            iterations: []
        },
        "kobe-mosque": {
            index: "003",
            title: "Kobe Mosque, Japan",
            category: "Editorial Design",
            stack: "Illustrator / Typography Systems",
            intent: "Minimalist layout celebrating architectural structure through structural geometric type layouts and stark white-space framing.",
            primaryMedia: '<img src="resource/Poster/Kobe-Mosque-Japan.webp" alt="Kobe Mosque Layout">',
            iterations: []
        },
        "look-up": {
            index: "004",
            title: "Look Up at Sky",
            category: "Minimal Brutalism",
            stack: "Print Media / Layout",
            intent: "High contrast typographical hierarchy highlighting scale relationships between human orientation indicators and void spaces.",
            primaryMedia: '<img src="resource/Poster/look-up-at-sky.webp" alt="Look Up At Sky Layout">',
            iterations: []
        },
        "roman-brutalism": {
            index: "005",
            title: "Roman Brutalism",
            category: "Graphic Structural Layout",
            stack: "Photoshop / InDesign",
            intent: "Juxtaposing historical classical art figures into heavy, industrial, unyielding typographic blocks to evoke a tangible feeling of weight.",
            primaryMedia: '<img src="resource/Poster/roman-brutalism.webp" alt="Roman Brutalism Poster">',
            iterations: []
        },
        "sekiro-brutalism": {
            index: "006",
            title: "Sekiro Brutalism",
            category: "Motion / Visual Identity",
            stack: "After Effects / Vector Systems",
            intent: "A fast, mechanical tribute to gaming mechanics through brutal typographic motion loops, high contrast framing, and sharp cuts.",
            primaryMedia: '<img src="resource/Poster/sekiro-brutalism.webp" alt="Sekiro Brutalism Project Frame">',
            iterations: []
        }
    };

    /* ==========================================
        DRAWER CONTROLLER ENGINE (OPEN / CLOSE)
       ========================================== */
    const drawer = document.getElementById('case-study-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    
    // Target fields inside template drawer
    const caseIndex = document.getElementById('case-index');
    const caseTitle = document.getElementById('case-title');
    const caseCategory = document.getElementById('case-category');
    const caseStack = document.getElementById('case-stack');
    const caseIntentText = document.getElementById('case-intent-text');
    const casePrimaryMedia = document.getElementById('case-primary-media');
    const caseProcessGrid = document.getElementById('case-process-grid');

    let previousActiveElement = null;

    const openCaseStudy = (projectId) => {
        const data = projectDatabase[projectId];
        if (!data) return;

        // Defensive checks to verify inner template regions exist before mapping text
        if (caseIndex) caseIndex.textContent = data.index;
        if (caseTitle) caseTitle.textContent = data.title;
        if (caseCategory) caseCategory.textContent = data.category;
        if (caseStack) caseStack.textContent = data.stack;
        if (caseIntentText) caseIntentText.textContent = data.intent;
        if (casePrimaryMedia) casePrimaryMedia.innerHTML = data.primaryMedia;

        if (caseProcessGrid) {
            caseProcessGrid.innerHTML = '';
            if (data.iterations && data.iterations.length > 0) {
                data.iterations.forEach(imgUrl => {
                    const imgEl = document.createElement('img');
                    imgEl.src = imgUrl;
                    imgEl.alt = `${data.title} Process Variation Frame`;
                    imgEl.loading = "lazy";
                    caseProcessGrid.appendChild(imgEl);
                });
            } else {
                caseProcessGrid.innerHTML = '<p style="color:#666; font-size:0.9rem; font-family:monospace;">Process documentation pending deployment.</p>';
            }
        }

        previousActiveElement = document.activeElement; // Track keyboard focus point
        
        if (drawer) {
            drawer.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        }
        
        if (drawerCloseBtn) drawerCloseBtn.focus();
    };

    const closeCaseStudy = () => {
        if (drawer) {
            drawer.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Release background lock
        }
        if (previousActiveElement) previousActiveElement.focus();
    };

    // Card Selection Integration Handling Logic (Clicks and Keypress Triggers)
    portfolioCards.forEach(card => {
        const handleActivation = (e) => {
            const projectId = card.getAttribute('data-project');
            if (projectId) {
                openCaseStudy(projectId);
            }
        };

        // Trigger on click
        card.addEventListener('click', handleActivation);

        // Trigger on Enter or Spacebar keyboard navigation
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Stop spacebar from shifting layout scroll positions
                handleActivation(e);
            }
        });
    });

    // Encapsulated Event Bindings behind layout condition gates
    if (drawer && drawerCloseBtn && drawerOverlay) {
        // Close Interaction Bindings
        drawerCloseBtn.addEventListener('click', closeCaseStudy);
        drawerOverlay.addEventListener('click', closeCaseStudy);

        // Keyboard Intercept Event Handlers (Esc clears panel)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') {
                closeCaseStudy();
            }
        });
    }
});