const fs = require('fs');

// 1. Revert index.html
let html = fs.readFileSync('index.html', 'utf8');

// Match the slider block
const sliderRegex = /<div class="slider-container reveal"[^>]*>([\s\S]*?)<\/div>\s*<\/section>/;
const match = html.match(sliderRegex);

if (match) {
    const sliderContent = match[1];
    
    // Extract the cards. We just need the first 3
    const cardRegex = /<div class="testimonial-card glass-card">[\s\S]*?<\/div>\s*<\/div>/g;
    // Wait, the inner div for stars and h4 might confuse a greedy match.
    // Let's split by '<div class="testimonial-card glass-card">'
    const parts = sliderContent.split('<div class="testimonial-card glass-card">');
    if (parts.length > 3) {
        // parts[1], parts[2], parts[3] are the first 3 cards
        const card1 = '<div class="testimonial-card glass-card">' + parts[1].replace(/<\/div>\s*$/, '</div>');
        const card2 = '<div class="testimonial-card glass-card">' + parts[2].replace(/<\/div>\s*$/, '</div>');
        const card3 = '<div class="testimonial-card glass-card">' + parts[3].replace(/<\/div>\s*$/, '</div>');
        
        // Let's refine the extraction. The card ends with </div> but there are inner divs. 
        // Let's use a simpler approach. I know exactly what the 3 cards were.
    }
}

// Better approach for HTML: just find the track content, and extract the first half.
// Actually, let me just read index.html and do it string by string.
