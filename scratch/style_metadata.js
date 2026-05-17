const fs = require('fs');

let html = fs.readFileSync('projects.html', 'utf8');

const regex = /<p class="project-meta" style=".*?">Type: (.*?) &nbsp;\|&nbsp; Location: (.*?) &nbsp;\|&nbsp; Status: (.*?)<\/p>/g;

html = html.replace(regex, (match, pType, pLoc, pStatus) => {
    let statusBg = 'rgba(34, 197, 94, 0.1)';
    let statusColor = '#16a34a';
    let statusBorder = 'rgba(34, 197, 94, 0.2)';
    let statusIcon = '<polyline points="20 6 9 17 4 12"></polyline>'; // Checkmark
    
    if (pStatus.toLowerCase() === 'ongoing') {
        statusBg = 'rgba(59, 130, 246, 0.1)'; // Blue
        statusColor = '#2563eb';
        statusBorder = 'rgba(59, 130, 246, 0.2)';
        statusIcon = '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>'; // Clock
    }

    return `<div class="project-badges" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 2rem;">
                <span style="display: inline-flex; align-items: center; gap: 6px; background: #f8fafc; color: var(--blue-dark, #0f172a); padding: 6px 14px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #e2e8f0; letter-spacing: 0.3px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green, #22c55e)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    ${pType}
                </span>
                <span style="display: inline-flex; align-items: center; gap: 6px; background: #f8fafc; color: var(--blue-dark, #0f172a); padding: 6px 14px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; border: 1px solid #e2e8f0; letter-spacing: 0.3px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green, #22c55e)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${pLoc}
                </span>
                <span style="display: inline-flex; align-items: center; gap: 6px; background: ${statusBg}; color: ${statusColor}; padding: 6px 14px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; border: 1px solid ${statusBorder}; letter-spacing: 0.5px; text-transform: uppercase;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${statusIcon}</svg>
                    ${pStatus}
                </span>
            </div>`;
});

fs.writeFileSync('projects.html', html);
console.log("Replaced successfully!");
