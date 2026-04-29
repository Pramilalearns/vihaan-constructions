const fs = require('fs');
const path = require('path');
const dir = 'c:\\Users\\Pramila S\\.gemini\\antigravity\\playground\\celestial-oort';
const files = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html'];

const navHTML = `    <nav id="navbar">
        <a href="index.html" class="logo">
            <img src="assets/logo/main-logo.png" alt="Vihaan Constructions" class="nav-logo">
        </a>
        <ul class="nav-links" style="margin-right: auto; margin-left: 2rem;">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li class="dropdown">
                <a href="services.html" style="display:flex; align-items:center; gap:5px;">Services 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="services.html#residential">Residential</a></li>
                    <li><a href="services.html#commercial">Commercial</a></li>
                    <li><a href="services.html#interior">Interior Design</a></li>
                    <li><a href="services.html#renovation">Renovation</a></li>
                </ul>
            </li>
            <li><a href="projects.html">Projects</a></li>
        </ul>
        <div class="nav-actions" style="display: flex; align-items: center; gap: 1.5rem;">
            <a href="tel:+918148410102" class="nav-phone" style="font-weight: 700; color: var(--blue-dark); text-decoration: none; display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 81484 10102
            </a>
            <a href="contact.html" class="btn-action btn-primary nav-cta" style="padding: 0.6rem 1.5rem !important;">Get a Quote</a>
        </div>
        <div class="hamburger"><span></span><span></span><span></span></div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="services.html">Services</a>
        <a href="projects.html">Projects</a>
        <a href="tel:+918148410102">Call: +91 81484 10102</a>
        <a href="contact.html">Get a Quote</a>
    </div>`;

// Keep footer exactly as it is since we fixed the CSS for it.
// Wait, we need to re-insert the footer exactly as it is but we don't have to change it.
// I will just change the nav part.

for (let f of files) {
  const filePath = path.join(dir, f);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace nav
  content = content.replace(/<nav id="navbar">[\s\S]*?<\/nav>/, '---NAV---');
  content = content.replace(/<div class="mobile-menu" id="mobileMenu">[\s\S]*?<\/div>/, '');
  content = content.replace('---NAV---', navHTML);
  
  fs.writeFileSync(filePath, content);
  console.log('Updated nav in ' + f);
}
