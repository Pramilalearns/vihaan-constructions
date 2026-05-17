const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Match the grid and the read more button
const regex = /<div class="testimonials-grid reveal">([\s\S]*?)<\/div>\s*<div class="text-center reveal" style="margin-top: 3rem; text-align: center;">\s*<a href="#testimonials" class="btn-action btn-secondary">Read More<\/a>\s*<\/div>/;

const match = html.match(regex);

if (match) {
    const cardsHtml = match[1].trim(); // This contains the 3 cards
    
    // We duplicate the cards for infinite scrolling effect
    const trackHtml = cardsHtml + '\n' + cardsHtml;

    const newHtml = `<div class="slider-container reveal" style="position: relative; max-width: 1400px; margin: 0 auto;">
            <!-- Left Arrow -->
            <button class="slider-arrow prev-arrow" aria-label="Previous Testimonial">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            
            <div class="testimonials-wrapper" id="testimonialWrapper">
                <div class="testimonials-track" id="testimonialTrack">
                    ${trackHtml}
                </div>
            </div>

            <!-- Right Arrow -->
            <button class="slider-arrow next-arrow" aria-label="Next Testimonial">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>`;

    html = html.replace(regex, newHtml);
    fs.writeFileSync('index.html', html);
    console.log("HTML replaced successfully.");
} else {
    console.log("Could not match the grid layout in index.html");
}
