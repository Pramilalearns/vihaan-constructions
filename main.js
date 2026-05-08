document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Navbar Scroll Effect
    // ----------------------------------------------------
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ----------------------------------------------------
    // Intersection Observer for Cinematic Scroll Reveals
    // ----------------------------------------------------
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
    // ----------------------------------------------------
    // Hash Handling for Deep Links (Fixes revealed sections)
    // ----------------------------------------------------
    const handleHash = () => {
        const hash = window.location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target && target.classList.contains('reveal')) {
                target.classList.add('visible');
                // Give it a moment to render then scroll
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    };

    // Run on load and hash change
    window.addEventListener('load', handleHash);
    window.addEventListener('hashchange', handleHash);

    // ----------------------------------------------------
    // Mobile Menu Toggle
    // ----------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // ----------------------------------------------------
    // Active Page Highlighting (Header + Footer)
    // ----------------------------------------------------
    let rawPage = window.location.pathname.split('/').pop() || '';
    // Normalize: strip .html extension and handle root/empty as 'index'
    let currentPage = rawPage.replace(/\.html$/, '');
    if (!currentPage || currentPage === '/' || currentPage === '') {
        currentPage = 'index';
    }

    function markActiveLinks(selector) {
        document.querySelectorAll(selector).forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            // Extract just the filename, strip hash fragments and .html
            const hrefFile = href.split('#')[0].split('/').pop() || '';
            const hrefPage = hrefFile.replace(/\.html$/, '') || 'index';
            
            if (currentPage === 'index') {
                // On homepage, only mark the "Home" link (no hash-based section links)
                if ((hrefPage === 'index' || href === './') && !href.includes('#')) {
                    link.classList.add('active');
                }
            } else if (hrefPage === currentPage && !href.includes('#')) {
                link.classList.add('active');
            }
        });
    }

    markActiveLinks('.nav-links a');
    markActiveLinks('.mobile-menu a');
    markActiveLinks('.footer-col ul a');

    // ----------------------------------------------------
    // Back to Top Button
    // ----------------------------------------------------
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
