/**
 * UI & Accessibility Interactions Archive Engine — Muhammad Soheb Portfolio
 * Handles high-fidelity project sorting, viewport mutations, and mobile layout intercept routines.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================\
       1. Dynamic Sorting / Index Filtering Logic
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    if (filterButtons.length && portfolioCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
                button.classList.add('filter-btn--active');

                const filterValue = button.getAttribute('data-filter');

                portfolioCards.forEach(card => {
                    const categories = card.getAttribute('data-category') || '';
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ==========================================================================\
       2. Isolated Portfolio Case Study Local Database Registry (Raw Content Core)
       ========================================================================== */
    const projectDatabase = {
        'ancient-drawing': {
            index: '001',
            title: 'Ancient Drawing',
            discipline: 'Graphic Design',
            timeline: 'Spring 2025',
            description: '<p>A deep exploration into ancient illustrative aesthetics translated into modern programmatic vector grids. This project interrogates how high-contrast linework can preserve raw textural historical context when constrained into systematic layouts.</p>',
            hasVideo: false,
            mediaAsset: 'resource/Poster/Ancient-drawing-poster.webp',
            mediaAlt: 'Detailed breakdown framework displaying line layouts for the Ancient Drawing compilation.'
        },
        'ethereal': {
            index: '002',
            title: 'Ethereal',
            discipline: 'Motion System',
            timeline: 'Winter 2025',
            description: '<p>An experimentation in breaking standard static layout loops. Type elements transition fluidly across calculated mathematical waves, blending temporal kinetic animation parameters with deliberate editorial asymmetry.</p>',
            hasVideo: true,
            mediaAsset: 'resource/Video/Ethereal-render', // Shared root name for handling dual extension pipelines
            mediaAlt: 'Fluid morphing simulation representing modern typographic transformations.'
        },
        'gothic-fluidity': {
            index: '003',
            title: 'Gothic Fluidity',
            discipline: 'Graphic Design',
            timeline: 'Autumn 2025',
            description: '<p>Juxtaposing historical blackletter typographical geometry against fluid, unpredictable organic liquified elements. Designed to bridge historical print paradigms with contemporary radical layout architectures.</p>',
            hasVideo: false,
            mediaAsset: 'resource/Poster/Gothic-fluidity-poster.webp',
            mediaAlt: 'Gothic fluid specimen layout sheet visualizing dynamic type treatments.'
        },
        'helvetica': {
            index: '004',
            title: 'Helvetica',
            discipline: 'Motion System',
            timeline: 'Summer 2025',
            description: '<p>A strict modern tribute to Swiss visual principles. Utilizing rigid spatial grids, this kinetic system scales, shifts, and stacks pure linguistic messages into a shifting rhythm purely driven by structured audio pacing.</p>',
            hasVideo: true,
            mediaAsset: 'resource/Video/Helvetica-render',
            mediaAlt: 'Swiss modern alignment kinetic animation sequences.'
        },
        'klimt': {
            index: '005',
            title: 'Klimt Editorial',
            discipline: 'Graphic Design',
            timeline: 'Mid 2025',
            description: '<p>An analytical multi-page structural catalog designed for an exhibition presenting Secessionist visual patterns. The grid scales around historical structural thresholds, leveraging dense negative typography blocks.</p>',
            hasVideo: false,
            mediaAsset: 'resource/Poster/Klimt-poster.webp',
            mediaAlt: 'Editorial structural spreads showing internal design system frameworks.'
        },
        'schizophrenia': {
            index: '006',
            title: 'Schizophrenia',
            discipline: 'Motion System',
            timeline: 'Early 2025',
            description: '<p>A kinetic visual system exploring psychological distress metaphors. This configuration works with chaotic typographic fractures, rapid focal-length fluctuations, and sharp temporal shifts to deliver a visceral sensory experience.</p>',
            hasVideo: true,
            mediaAsset: 'resource/Video/Schizophrenia-render',
            mediaAlt: 'Kinetic abstraction sequences utilizing fast typography distortions.'
        }
    };

    /* ==========================================================================\
       3. High-Fidelity Slide-Out Core Drawer Controller Engine
       ========================================================================== */
    const drawer = document.getElementById('project-case-drawer');
    const drawerOverlay = drawer ? drawer.querySelector('.drawer__overlay') : null;
    const drawerWrapper = drawer ? drawer.querySelector('.drawer__wrapper') : null;
    const drawerCloseBtn = document.getElementById('close-case-drawer');
    const contentRoot = document.getElementById('drawer-dynamic-content-root');
    let historicalActiveElement = null; // Tracking pointer to restore system keyboard focus loop safely

    if (!drawer || !contentRoot) return; // Fail gracefully if script runs on unmatched structural environment

    // Interactive Core Action Matrix
    const toggleDrawerVisibility = (projectKey = null, makeVisible = false) => {
        if (makeVisible && projectKey && projectDatabase[projectKey]) {
            historicalActiveElement = document.activeElement; // Lock current focused component
            
            // Re-render payload injection
            const records = projectDatabase[projectKey];
            let visualMediaBlock = '';

            if (records.hasVideo) {
                // Generates standardized modern web fallback container systems safely
                visualMediaBlock = `
                    <div class="case-section__media-wrapper">
                        <video autoplay loop muted playsinline aria-label="${records.mediaAlt}">
                            <source src="${records.mediaAsset}.mp4" type="video/mp4">
                            <source src="${records.mediaAsset}.webm" type="video/webm">
                            Your browser loop system doesn't support direct inline tracking parameters for integrated video.
                        </video>
                    </div>
                `;
            } else {
                visualMediaBlock = `
                    <div class="case-section__media-wrapper">
                        <img src="${records.mediaAsset}" alt="${records.mediaAlt}" loading="lazy">
                    </div>
                `;
            }

            contentRoot.innerHTML = `
                <div class="case-content">
                    <header class="case-header">
                        <span class="case-header__index">${records.index}</span>
                        <h2 class="case-header__title" id="drawer-heading-title">${records.title}</h2>
                        <div class="case-header__specs">
                            <span>Discipline: ${records.discipline}</span>
                            <span>Timeline: ${records.timeline}</span>
                        </div>
                    </header>
                    <section class="case-section" aria-label="Project analysis body">
                        <div class="case-section__body">
                            ${records.description}
                        </div>
                        ${visualMediaBlock}
                    </section>
                </div>
            `;

            // State Transformations
            document.body.style.overflow = 'hidden'; // Lock background structural layout canvas
            drawer.setAttribute('aria-hidden', 'false');
            
            // Shift systemic keyboard lock context directly down into drawer interaction path safely
            setTimeout(() => {
                drawerCloseBtn.focus();
            }, 50);

        } else {
            // Destruction / Hiding Loop
            document.body.style.overflow = '';
            drawer.setAttribute('aria-hidden', 'true');
            
            // Clear content payload safely after translation completes
            setTimeout(() => {
                contentRoot.innerHTML = '<div class="drawer__loading-placeholder">Initializing content presentation subsystem...</div>';
                if (historicalActiveElement && typeof historicalActiveElement.focus === 'function') {
                    historicalActiveElement.focus();
                }
            }, 400);
        }
    };

    // Global Registration Mapping Hook for Cards
    portfolioCards.forEach(card => {
        const handleCardActivation = (e) => {
            // Prevent default loop to isolate tap conflicts on mobile displays
            e.preventDefault();
            const referenceKey = card.getAttribute('data-project');
            if (referenceKey) toggleDrawerVisibility(referenceKey, true);
        };

        card.addEventListener('click', handleCardActivation);
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handleCardActivation(e);
            }
        });
    });

    // Dismiss Actions: Input Events
    drawerCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDrawerVisibility(null, false);
    });

    drawerOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDrawerVisibility(null, false);
    });

    // Escape Key Intercept Routine Handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') {
            toggleDrawerVisibility(null, false);
        }
    });

    // Viewport Scaler Watcher: Closes structural panel dynamically if layout transforms past critical thresholds
    const globalResizeWatcher = window.matchMedia('(min-width: 768px)');
    const clearLayoutOverflows = (e) => {
        if (drawer.getAttribute('aria-hidden') === 'false') {
            toggleDrawerVisibility(null, false);
        }
    };
    
    // Register structural listeners across active viewport transformation routines safely
    if (typeof globalResizeWatcher.addEventListener === 'function') {
        globalResizeWatcher.addEventListener('change', clearLayoutOverflows);
    } else {
        globalResizeWatcher.addListener(clearLayoutOverflows);
    }

    /* ==========================================================================\
       4. Independent Navigation Menu Mechanics Interface (Header Subsystem)
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list-all');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('active');
        });
    }
});