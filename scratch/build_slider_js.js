const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

const sliderLogic = `

    // ----------------------------------------------------
    // Testimonial Slider Auto-Scroll & Navigation
    // ----------------------------------------------------
    const testimonialWrapper = document.getElementById('testimonialWrapper');
    const testimonialTrack = document.getElementById('testimonialTrack');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    if (testimonialWrapper && testimonialTrack) {
        let isPaused = false;
        let animationId;
        const scrollSpeed = 0.5; // Pixels per frame - nice and slow

        let halfScrollWidth = testimonialTrack.scrollWidth / 2;
        
        // Ensure accurate half width after fonts/images load
        setTimeout(() => {
            halfScrollWidth = testimonialTrack.scrollWidth / 2;
        }, 500);

        window.addEventListener('resize', () => {
            halfScrollWidth = testimonialTrack.scrollWidth / 2;
        });

        const slide = () => {
            if (!isPaused) {
                testimonialWrapper.scrollLeft += scrollSpeed;
                
                // Infinite loop: reset when halfway
                if (testimonialWrapper.scrollLeft >= halfScrollWidth) {
                    testimonialWrapper.scrollLeft -= halfScrollWidth;
                }
            }
            animationId = requestAnimationFrame(slide);
        };

        animationId = requestAnimationFrame(slide);

        // Pause on Hover
        testimonialWrapper.addEventListener('mouseenter', () => isPaused = true);
        testimonialWrapper.addEventListener('mouseleave', () => isPaused = false);
        
        // Manual Navigation
        const getScrollAmount = () => window.innerWidth < 768 ? 320 + 32 : 450 + 32; 

        if (prevArrow) {
            prevArrow.addEventListener('mouseenter', () => isPaused = true);
            prevArrow.addEventListener('mouseleave', () => isPaused = false);
            prevArrow.addEventListener('click', () => {
                testimonialWrapper.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
                // If scrolling left past start, jump to middle
                if (testimonialWrapper.scrollLeft <= 0) {
                    testimonialWrapper.scrollLeft += halfScrollWidth;
                }
            });
        }
        
        if (nextArrow) {
            nextArrow.addEventListener('mouseenter', () => isPaused = true);
            nextArrow.addEventListener('mouseleave', () => isPaused = false);
            nextArrow.addEventListener('click', () => {
                testimonialWrapper.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
            });
        }
    }
});`;

// Replace the final "});" with our logic + "});"
mainJs = mainJs.replace(/}\);\s*$/, sliderLogic);

fs.writeFileSync('main.js', mainJs);
console.log('main.js updated successfully.');
