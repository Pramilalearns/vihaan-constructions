const fs = require('fs');

// Read the template file to extract Nav and Footer
const templateContent = fs.readFileSync('projects.html', 'utf8');

const navMatch = templateContent.match(/<!-- Navigation \(Global\) -->[\s\S]*?<\/div>\s*<\/div>/); // Wait, better to use specific markers
// Let's just slice it.
const navStartIndex = templateContent.indexOf('<!-- Navigation (Global) -->');
const navEndIndex = templateContent.indexOf('<header class="projects-header">');
const navHtml = templateContent.substring(navStartIndex, navEndIndex);

const footerStartIndex = templateContent.indexOf('<!-- Footer (Global) -->');
const footerEndIndex = templateContent.indexOf('</body>');
const footerHtml = templateContent.substring(footerStartIndex, footerEndIndex);

const filesToUpdate = ['thank-you.html', 'quote-success.html'];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Remove the standalone <style> block completely.
    // It starts at <style> and ends at </style>
    content = content.replace(/<style>[\s\S]*?<\/style>/, `
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
    <style>
        .success-section {
            padding: 160px 5% 100px;
            background: #f8fafc;
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .success-card {
            background: #fff;
            padding: 4rem 2rem;
            border-radius: var(--radius-xl, 24px);
            box-shadow: 0 25px 50px rgba(0,45,98,0.1);
            max-width: 650px;
            width: 100%;
            border: 1px solid rgba(0,45,98,0.05);
            animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            text-align: center;
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .icon-box {
            width: 80px;
            height: 80px;
            background: rgba(126, 217, 87, 0.1);
            color: #7ED957;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
        }

        .success-card h1 {
            color: var(--blue-dark, #002d62);
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            font-weight: 900;
            line-height: 1.1;
        }

        .success-card p {
            color: #64748b;
            font-size: 1.2rem;
            line-height: 1.7;
            margin-bottom: 3.5rem;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 500;
        }

        .cta-container {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;
        }

        .success-card .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1.2rem 2.5rem;
            text-decoration: none;
            font-weight: 800;
            border-radius: 12px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            width: 100%;
            max-width: 380px;
            font-size: 1.1rem;
        }

        .success-card .btn-primary {
            background: var(--blue-dark, #002d62);
            color: #fff;
            box-shadow: 0 10px 25px rgba(0,45,98,0.2);
        }

        .success-card .btn-primary:hover {
            transform: translateY(-4px);
            background: var(--blue-primary, #004AAD);
            box-shadow: 0 15px 35px rgba(0,45,98,0.3);
        }

        .success-card .btn-secondary {
            background: #f1f5f9;
            color: var(--blue-dark, #002d62);
        }

        .success-card .btn-secondary:hover {
            background: #e2e8f0;
            transform: translateY(-2px);
        }

        @media (max-width: 600px) {
            .success-card { padding: 3rem 1.5rem; }
            .success-card h1 { font-size: 2.1rem; }
            .success-card p { font-size: 1.1rem; margin-bottom: 2.5rem; }
            .success-card .btn { padding: 1.1rem 1.5rem; font-size: 1.05rem; }
        }
    </style>`);

    // 2. Remove the old footer-nav from the card.
    content = content.replace(/<div class="footer-nav">[\s\S]*?<\/div>/, '');

    // 3. Re-structure the body.
    // Extract the success-card block
    const cardMatch = content.match(/<div class="success-card">[\s\S]*?<\/div>\s*<!-- WhatsApp/);
    if (cardMatch) {
        let cardHtml = cardMatch[0].replace('<!-- WhatsApp', '');
        
        // Wrap it in the section
        let newBodyContent = navHtml + '\\n    <section class="success-section">\\n        ' + cardHtml.trim() + '\\n    </section>\\n\\n' + footerHtml;

        // Replace the body content
        content = content.replace(/<body>[\s\S]*?<\/body>/, '<body>\\n    <!-- Google Tag Manager (noscript) -->\\n    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSRQCXN9"\\n    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\\n    <!-- End Google Tag Manager (noscript) -->\\n\\n' + newBodyContent + '\\n</body>');
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});
