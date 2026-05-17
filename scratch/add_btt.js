const fs = require('fs');

const files = ['index.html', 'projects.html', 'get-a-quote.html', 'thank-you.html', 'quote-success.html'];

const buttonHtml = `
    <!-- Back to Top Button -->
    <button id="backToTopBtn" class="back-to-top" aria-label="Back to top">
        <svg viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
</body>`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if it already has the button
    if (content.includes('id="backToTopBtn"')) {
        return;
    }
    
    // Replace </body> with buttonHtml
    content = content.replace(/<\/body>/i, buttonHtml);
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
