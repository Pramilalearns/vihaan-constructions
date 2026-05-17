const fs = require('fs');

let html = fs.readFileSync('projects.html', 'utf8');

const metadataMap = {
    "RP Residency": "Type: Full Construction & Interior Design &nbsp;|&nbsp; Location: Chennai &nbsp;|&nbsp; Status: Completed",
    "Gnaneshwar Villa": "Type: Premium Wood Work & Interiors &nbsp;|&nbsp; Location: Bangalore &nbsp;|&nbsp; Status: Completed",
    "Brijith Residency": "Type: Full Construction &nbsp;|&nbsp; Location: Tenkasi &nbsp;|&nbsp; Status: Completed",
    "Vihaan Homes": "Type: Community Development &nbsp;|&nbsp; Location: Hosur &nbsp;|&nbsp; Status: Ongoing",
    "Anil Residency": "Type: Interior Design &nbsp;|&nbsp; Location: Trivandrum &nbsp;|&nbsp; Status: Completed",
    "Adhira Beauty Parlour": "Type: Commercial Interior &nbsp;|&nbsp; Location: Nagercoil &nbsp;|&nbsp; Status: Completed"
};

for (const [project, meta] of Object.entries(metadataMap)) {
    const h2Tag = `<h2>${project}</h2>`;
    const metaTag = `\n            <p class="project-meta" style="font-size: 0.85rem; font-weight: 700; color: var(--green, #22c55e); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 1.5rem;">${meta}</p>`;
    
    // Check if we already have a short description for Gnaneshwar, Vihaan, Adhira
    // we should replace it or insert it. The user said: "right after the project name we need to mention the project type, location, status. After that the engineers message content."
    // For Gnaneshwar, Vihaan, Adhira, the engineer message is just the short description for now. I'll just insert this tag above the existing <p>.
    
    html = html.replace(h2Tag, h2Tag + metaTag);
}

fs.writeFileSync('projects.html', html);
console.log("Metadata added successfully.");
