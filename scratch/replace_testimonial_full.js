const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const target = `                <p class="testimonial-text">“From the beginning, I was impressed with the quality of work and attention to detail. The craftsmanship reflects the high standards of your team. The transparent process and fair pricing made the entire experience smooth and stress-free.”</p>
                <h4 class="client-name">— Michael Brijith Rayappan</h4>`;

const fullText = `I hope this message finds you well. I wanted to take a moment to express my appreciation for the excellent work done on our home. From the beginning, I was impressed with the quality of work and attention to detail that went into every aspect of the build. The craftsmanship is evident, and it truly reflects the high standards of your team. I also appreciated the transparency in the process and the clear, open communication throughout the project. It was reassuring to be kept informed at each stage, which made the experience smooth and stress-free. In terms of pricing, I found your services to be fair and competitive, offering great value for the quality delivered. Additionally, the project was completed within the expected delivery timeline, which I greatly appreciate. Overall, I am extremely satisfied with the results and the entire experience. It has been a pleasure working with your team, and I would not hesitate to recommend your services to others.`;

const replacement = `                <p class="testimonial-text" style="font-size: 0.85rem; line-height: 1.6; text-align: justify; margin-bottom: 1.5rem;">“${fullText}”</p>
                <h4 class="client-name">— Michael Brijith Rayappan</h4>`;

if (content.includes(target)) {
    fs.writeFileSync('index.html', content.replace(target, replacement));
    console.log('Success with exact match!');
} else {
    console.log('Target not found! Trying regex.');
    const regex = /<p class="testimonial-text">“From the beginning, I was impressed with the quality of work and attention to detail\. The craftsmanship reflects the high standards of your team\. The transparent process and fair pricing made the entire experience smooth and stress-free\.”<\/p>\s*<h4 class="client-name">— Michael Brijith Rayappan<\/h4>/;
    if(regex.test(content)) {
        fs.writeFileSync('index.html', content.replace(regex, replacement));
        console.log('Regex success!');
    } else {
        console.log('Still not found.');
    }
}
