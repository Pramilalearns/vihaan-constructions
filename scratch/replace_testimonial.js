const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const target = `                <p class="testimonial-text">“Vihaan Constructions made our home-building journey smooth and stress-free. The team was responsive, transparent, and completed the work faster than we expected.”</p>
                <h4 class="client-name">— Ramesh & Priya</h4>`;

const replacement = `                <p class="testimonial-text">“From the beginning, I was impressed with the quality of work and attention to detail. The craftsmanship reflects the high standards of your team. The transparent process and fair pricing made the entire experience smooth and stress-free.”</p>
                <h4 class="client-name">— Michael Brijith Rayappan</h4>`;

if (content.includes(target)) {
    fs.writeFileSync('index.html', content.replace(target, replacement));
    console.log('Success!');
} else {
    console.log('Target not found! Let me try regex.');
    // more flexible replace
    const regex = /<p class="testimonial-text">“Vihaan Constructions made our home-building journey smooth and stress-free. The team was responsive, transparent, and completed the work faster than we expected.”<\/p>\s*<h4 class="client-name">— Ramesh & Priya<\/h4>/;
    if(regex.test(content)) {
        fs.writeFileSync('index.html', content.replace(regex, replacement));
        console.log('Regex success!');
    } else {
        console.log('Still not found.');
    }
}
