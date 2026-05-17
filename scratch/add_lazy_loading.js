const fs = require('fs');
const path = require('path');

const files = ['index.html', 'projects.html', 'get-a-quote.html', 'thank-you.html', 'quote-success.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Use regex to find all <img ...> tags
    content = content.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
        // Skip if already has loading="lazy"
        if (attrs.includes('loading="lazy"')) return match;
        
        // Skip LCP/critical images
        if (
            attrs.includes('nav-logo') ||
            attrs.includes('footer-logo') ||
            attrs.includes('hero-img') ||
            attrs.includes('founder.png') ||
            attrs.includes('family-home.png') ||
            attrs.includes('whatsapp') ||
            attrs.includes('hero')
        ) {
            return match;
        }

        // Add loading="lazy" decoding="async"
        return `<img ${attrs} loading="lazy" decoding="async">`;
    });

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
