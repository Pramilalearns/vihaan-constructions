const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Replace .testimonials-grid with our new slider system
const regex = /\.testimonials-grid \{ display: grid; grid-template-columns: repeat\(3, 1fr\); gap: 2rem; \}\s*\.testimonial-card \{ padding: 3rem 2rem; border-radius: var\(--radius-card\); text-align: center; \}/;

const newStyles = `/* Testimonial Slider */
.slider-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.testimonials-wrapper {
    flex: 1;
    overflow-x: hidden;
    scroll-behavior: auto; /* Handled by JS */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.testimonials-wrapper::-webkit-scrollbar {
    display: none;
}

.testimonials-track {
    display: flex;
    gap: 2rem;
    width: max-content;
}

.testimonial-card { 
    padding: 3rem 2rem; 
    border-radius: var(--radius-card); 
    text-align: center;
    flex: 0 0 auto;
    width: 450px; /* Fixed width on desktop */
}

.slider-arrow {
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--blue-dark);
    transition: transform 0.3s, background 0.3s;
}
.slider-arrow:hover {
    transform: scale(1.1);
    background: #f8fafc;
}

@media (max-width: 768px) {
    .testimonial-card { width: 320px; padding: 2rem 1.5rem; }
    .slider-container { gap: 0.5rem; padding: 0 !important; }
    .slider-arrow { width: 40px; height: 40px; }
}`;

css = css.replace(regex, newStyles);

// We should also remove the `.testimonials-grid` occurrences from media queries.
css = css.replace('.testimonials-grid { grid-template-columns: repeat(2, 1fr); }', '');
css = css.replace('.portfolio-grid, .testimonials-grid { grid-template-columns: 1fr; }', '.portfolio-grid { grid-template-columns: 1fr; }');

fs.writeFileSync('style.css', css);
console.log('CSS updated successfully.');
