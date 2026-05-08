const fs = require('fs');

// 1. Restore index.html
let html = fs.readFileSync('index.html', 'utf8');

// The exact first 3 cards:
const card1 = `<div class="testimonial-card glass-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                                <p class="testimonial-text" style="font-size: 0.85rem; line-height: 1.6; text-align: justify; margin-bottom: 1.5rem;">“I hope this message finds you well. I wanted to take a moment to express my appreciation for the excellent work done on our home. From the beginning, I was impressed with the quality of work and attention to detail that went into every aspect of the build. The craftsmanship is evident, and it truly reflects the high standards of your team. I also appreciated the transparency in the process and the clear, open communication throughout the project. It was reassuring to be kept informed at each stage, which made the experience smooth and stress-free. In terms of pricing, I found your services to be fair and competitive, offering great value for the quality delivered. Additionally, the project was completed within the expected delivery timeline, which I greatly appreciate. Overall, I am extremely satisfied with the results and the entire experience. It has been a pleasure working with your team, and I would not hesitate to recommend your services to others.”</p>
                <h4 class="client-name">— Michael Brijith Rayappan</h4>
            </div>`;

const card2 = `<div class="testimonial-card glass-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text" style="font-size: 0.85rem; line-height: 1.6; text-align: justify; margin-bottom: 1.5rem;">“Working with Mr. Vijay on our home construction was a very positive experience. He was easy to communicate with, regularly updated us on the project, and maintained complete transparency throughout the process. The quality of the materials used was exactly as promised, and everything stayed within the agreed budget without any hidden costs. His attention to detail, commitment to quality, and sincere involvement in the project gave us a lot of confidence and peace of mind. We truly appreciated his professionalism and dedication, and would confidently recommend him to anyone looking for a trustworthy and hardworking engineer.”</p>
                <h4 class="client-name">— Raj</h4>
            </div>`;

const card3 = `<div class="testimonial-card glass-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">“The biggest advantage was the speed of construction. We could clearly see organized execution and regular updates throughout the project.”</p>
                <h4 class="client-name">— Anjali & Vikram</h4>
            </div>`;

const gridHtml = `<div class="testimonials-grid reveal">
            ${card1}
            ${card2}
            ${card3}
        </div>
        <div class="text-center reveal" style="margin-top: 3rem; text-align: center;">
            <a href="#testimonials" class="btn-action btn-secondary">Read More</a>
        </div>`;

// Replace the slider block
const sliderRegex = /<div class="slider-container reveal"[\s\S]*?<!-- Right Arrow -->\s*<button class="slider-arrow next-arrow" aria-label="Next Testimonial">\s*<svg.*?<\/svg>\s*<\/button>\s*<\/div>/;
html = html.replace(sliderRegex, gridHtml);
fs.writeFileSync('index.html', html);


// 2. Restore style.css
let css = fs.readFileSync('style.css', 'utf8');
const cssSliderRegex = /\/\* Testimonial Slider \*\/[\s\S]*?\}\s*\}\s*/;
const originalCss = `.testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.testimonial-card { padding: 3rem 2rem; border-radius: var(--radius-card); text-align: center; }

/* Mobile fallback */
@media (max-width: 1100px) {
    .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
    .portfolio-grid, .testimonials-grid { grid-template-columns: 1fr; }
}`;
css = css.replace(cssSliderRegex, originalCss);
// Ensure we re-inject the 1100px media query properly if it doesn't match the old layout exactly, but this handles it safely.
fs.writeFileSync('style.css', css);


// 3. Restore main.js
let js = fs.readFileSync('main.js', 'utf8');
const jsSliderRegex = /\/\* ----------------------------------------------------\s*\/\s*\/\s*Testimonial Slider Auto-Scroll & Navigation[\s\S]*/;
js = js.replace(jsSliderRegex, '});');
// Wait, my comment used // not /* */
const jsSliderRegex2 = /\/\/ ----------------------------------------------------\s*\n\s*\/\/ Testimonial Slider Auto-Scroll & Navigation[\s\S]*/;
js = js.replace(jsSliderRegex2, '});');
fs.writeFileSync('main.js', js);

console.log("Restoration complete");
