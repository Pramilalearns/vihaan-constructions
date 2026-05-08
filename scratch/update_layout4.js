const fs = require('fs');
const path = require('path');
const dir = 'c:\\Users\\Pramila S\\.gemini\\antigravity\\playground\\celestial-oort';
const files = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html'];

const navHTML = `    <nav id="navbar" style="position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 5%; height: 90px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0, 45, 98, 0.1);">
        <a href="index.html" class="logo" style="justify-self: start;">
            <img src="assets/logo/main-logo.png" alt="Vihaan Constructions" class="nav-logo">
        </a>
        <ul class="nav-links" style="justify-self: center; display: flex; gap: 2.5rem; list-style: none; margin: 0; padding: 0;">
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
        <div class="nav-actions" style="justify-self: end; display: flex; align-items: center; gap: 1.5rem;">
            <a href="tel:+918148410102" class="nav-phone" style="font-weight: 700; color: var(--blue-dark); text-decoration: none; display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 81484 10102
            </a>
            <a href="contact.html" class="btn-action btn-primary nav-cta" style="padding: 0.6rem 1.5rem !important;">Get a Quote</a>
        </div>
        <div class="hamburger"><span></span><span></span><span></span></div>
    </nav>`;

const footerHTML = `    <footer style="background: var(--blue-dark); color: #fff; border-top: none;">
        <div class="footer-top" style="display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 4rem; padding: 5rem 5%; max-width: 1400px; margin: 0 auto;">
            <div class="footer-brand">
                <a href="index.html" class="logo">
                    <img src="assets/logo/main-logo.png" alt="Vihaan Constructions" class="footer-logo" style="filter: brightness(0) invert(1);">
                </a>
                <p class="footer-desc" style="color: rgba(255,255,255,0.7); font-size: 1rem; line-height: 1.6; margin-top: 1rem; max-width: 300px;">To make quality home construction accessible for all without compromising on strength, safety, or design.</p>
            </div>
            <div class="footer-col">
                <h4 style="color: #fff; margin-bottom: 1.5rem; font-size: 1.2rem;">Pages</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.8rem;"><a href="index.html" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Home</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="about.html" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">About Us</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="services.html" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Services</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="projects.html" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Projects</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="contact.html" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Contact</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 style="color: #fff; margin-bottom: 1.5rem; font-size: 1.2rem;">Services</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.8rem;"><a href="services.html#residential" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Residential</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="services.html#commercial" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Commercial</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="services.html#interior" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Interior Design</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="services.html#renovation" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">Renovation</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 style="color: #fff; margin-bottom: 1.5rem; font-size: 1.2rem;">Contact</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.8rem;"><a href="tel:+918148410102" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">+91 81484 10102</a></li>
                    <li style="margin-bottom: 0.8rem;"><a href="mailto:hello@vihaanconstructions.in" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s; font-weight: 500;">hello@vihaanconstructions.in</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 5%; border-top: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: rgba(255,255,255,0.6); font-size: 0.9rem;">
            <div class="footer-copy">© 2026 Vihaan Constructions. All rights reserved.</div>
            <div class="footer-tagline" style="font-weight: 600; color: #fff;">Built with purpose. Delivered with pride.</div>
        </div>
    </footer>`;

for (let f of files) {
  const filePath = path.join(dir, f);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace nav
  content = content.replace(/<nav id="navbar"[\s\S]*?<\/nav>/, '---NAV---');
  content = content.replace('---NAV---', navHTML);
  
  // Replace footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/, '---FOOTER---');
  content = content.replace('---FOOTER---', footerHTML);
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + f);
}
