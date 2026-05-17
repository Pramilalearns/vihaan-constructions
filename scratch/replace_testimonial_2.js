const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="testimonial-card glass-card">\s*<div class="stars">⭐⭐⭐⭐⭐<\/div>\s*<p class="testimonial-text">“We were looking for an affordable yet quality construction company, and Vihaan delivered exactly that\. The finishing and planning were excellent\.”<\/p>\s*<h4 class="client-name">— Karthik S\.<\/h4>/;

const newTestimonial = `<div class="testimonial-card glass-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text" style="font-size: 0.85rem; line-height: 1.6; text-align: justify; margin-bottom: 1.5rem;">“Working with Mr. Vijay on our home construction was a very positive experience. He was easy to communicate with, regularly updated us on the project, and maintained complete transparency throughout the process. The quality of the materials used was exactly as promised, and everything stayed within the agreed budget without any hidden costs. His attention to detail, commitment to quality, and sincere involvement in the project gave us a lot of confidence and peace of mind. We truly appreciated his professionalism and dedication, and would confidently recommend him to anyone looking for a trustworthy and hardworking engineer.”</p>
                <h4 class="client-name">— Happy Client</h4>`;

html = html.replace(regex, newTestimonial);

fs.writeFileSync('index.html', html);
console.log('Testimonial replaced!');
