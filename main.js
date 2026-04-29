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
});
