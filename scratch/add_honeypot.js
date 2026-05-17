const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

const targetFormHtml = `<form id="callbackForm" action="https://script.google.com/macros/s/AKfycbxhy-CxPOQTWmqEFVYiyxgpNrP6tKMWW4bA2Skb_9mEYPCLGk6Cdwm5kjwMpWd805obng/exec" method="POST" target="hidden_iframe_callback">`;
const replacementFormHtml = targetFormHtml + `\n                        <!-- Anti-spam Honeypot -->\n                        <input type="text" name="bot_check" id="bot_check_callback" style="display:none !important" tabindex="-1" autocomplete="off">`;

html = html.replace(targetFormHtml, replacementFormHtml);

const targetJsHtml = `callbackForm.addEventListener('submit', function() {
                                submittedCallback = true;
                                const submitBtn = this.querySelector('.btn-submit');
                                submitBtn.innerText = 'Requesting...';
                                submitBtn.disabled = true;
                                submitBtn.style.opacity = '0.7';
                            });`;

const replacementJsHtml = `callbackForm.addEventListener('submit', function(e) {
                                const botCheck = document.getElementById('bot_check_callback');
                                if (botCheck && botCheck.value) {
                                    e.preventDefault();
                                    const submitBtn = this.querySelector('.btn-submit');
                                    submitBtn.innerText = 'Requesting...';
                                    submitBtn.disabled = true;
                                    submitBtn.style.opacity = '0.7';
                                    setTimeout(() => { window.location.href = 'thank-you.html'; }, 800);
                                    return false;
                                }
                                submittedCallback = true;
                                const submitBtn = this.querySelector('.btn-submit');
                                submitBtn.innerText = 'Requesting...';
                                submitBtn.disabled = true;
                                submitBtn.style.opacity = '0.7';
                            });`;

html = html.replace(targetJsHtml, replacementJsHtml);
fs.writeFileSync('index.html', html);


// 2. Update get-a-quote.html
let quoteHtml = fs.readFileSync('get-a-quote.html', 'utf8');

const targetQuoteForm = `<form id="detailedQuoteFormV3">`;
const replacementQuoteForm = targetQuoteForm + `\n                <!-- Anti-spam Honeypot -->\n                <input type="text" name="bot_check" id="bot_check_quote" style="display:none !important" tabindex="-1" autocomplete="off">`;

quoteHtml = quoteHtml.replace(targetQuoteForm, replacementQuoteForm);

// The JS for get-a-quote.html
const targetQuoteJs = `detailedQuoteFormV3.addEventListener('submit', function() {
                submittedDetailedQuote = true;
                const submitBtn = this.querySelector('.btn-submit');
                submitBtn.innerText = 'Submitting...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
            });`;

const replacementQuoteJs = `detailedQuoteFormV3.addEventListener('submit', function(e) {
                const botCheck = document.getElementById('bot_check_quote');
                if (botCheck && botCheck.value) {
                    e.preventDefault();
                    const submitBtn = this.querySelector('.btn-submit');
                    submitBtn.innerText = 'Submitting...';
                    submitBtn.disabled = true;
                    submitBtn.style.opacity = '0.7';
                    setTimeout(() => { window.location.href = 'quote-success.html'; }, 800);
                    return false;
                }
                submittedDetailedQuote = true;
                const submitBtn = this.querySelector('.btn-submit');
                submitBtn.innerText = 'Submitting...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
            });`;

quoteHtml = quoteHtml.replace(targetQuoteJs, replacementQuoteJs);
fs.writeFileSync('get-a-quote.html', quoteHtml);

console.log("Anti-spam measures added successfully.");
