const fs = require('fs');
const path = require('path');
const dir = 'c:\\Users\\Pramila S\\.gemini\\antigravity\\playground\\celestial-oort';
const files = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html'];

const navHTML = `    <nav id="navbar">
        <a href="index.html" class="logo">
            <img src="assets/logo/main-logo.png" alt="Vihaan Constructions" class="nav-logo">
        </a>
        <ul class="nav-links">
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
            <li><a href="contact.html" class="btn-action btn-primary" style="padding: 0.6rem 1.5rem !important;">Get a Quote</a></li>
        </ul>
        <div class="hamburger"><span></span><span></span><span></span></div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="services.html">Services</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Get a Quote</a>
    </div>`;

const footerHTML = `    <footer>
        <div class="footer-top">
            <div class="footer-brand">
                <a href="index.html" class="logo">
                    <img src="assets/logo/main-logo.png" alt="Vihaan Constructions" class="footer-logo">
                </a>
                <p class="footer-desc">To make quality home construction accessible for all without compromising on strength, safety, or design.</p>
            </div>
            <div class="footer-col">
                <h4>Pages</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Services</h4>
                <ul>
                    <li><a href="services.html#residential">Residential</a></li>
                    <li><a href="services.html#commercial">Commercial</a></li>
                    <li><a href="services.html#interior">Interior Design</a></li>
                    <li><a href="services.html#renovation">Renovation</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                    <li><a href="mailto:hello@vihaanconstructions.in">hello@vihaanconstructions.in</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-copy">© 2026 Vihaan Constructions. All rights reserved.</div>
            <div class="footer-tagline">Built with purpose. Delivered with pride.</div>
        </div>
    </footer>`;

for (let f of files) {
  const filePath = path.join(dir, f);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace nav
  content = content.replace(/<nav id="navbar">[\s\S]*?<\/nav>/, '---NAV---');
  content = content.replace(/<div class="mobile-menu" id="mobileMenu">[\s\S]*?<\/div>/, '');
  content = content.replace('---NAV---', navHTML);
  
  // Replace footer. Note that index.html had <footer class="site-footer"> while others had <footer>
  content = content.replace(/<footer[\s\S]*?<\/footer>/, footerHTML);
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + f);
}
