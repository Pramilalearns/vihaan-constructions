const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. Founder Quote
html = html.replace(
    '<p style="font-size: 1.35rem; color: var(--blue-dark); font-style: italic; font-weight: 600; line-height: 1.6; margin-bottom: 2rem; position: relative; z-index: 1;">To me, creating a space is about more than just materials. It is about a process built on clear communication and quality that lasts from the initial vision to the final walkthrough.</p>',
    '<p style="font-size: 1.35rem; color: var(--blue-dark); font-style: italic; font-weight: 600; line-height: 1.6; margin-bottom: 2rem; position: relative; z-index: 1;">For me, every project starts with the people who will live or work in it. A space should not just look good when it is completed, it should feel right in daily life and work well for years to come.</p>'
);

// 2. Remove font-bold
html = html.replace(
    '<p class="font-bold" style="font-size: 1.15rem; color: var(--blue-dark); line-height: 1.6; margin-bottom: 3rem;">For us, it’s never just about bricks and concrete. It’s about understanding what you need, how you live, and what kind of space will actually make your day-to-day life better. That’s why we focus on clear communication, honest pricing, and doing things the right way from start to finish.</p>',
    '<p class="text-muted" style="font-size: 1.15rem; line-height: 1.6; margin-bottom: 3rem;">For us, it’s never just about bricks and concrete. It’s about understanding what you need, how you live, and what kind of space will actually make your day-to-day life better. That’s why we focus on clear communication, honest pricing, and doing things the right way from start to finish.</p>'
);

// 3. Capabilities
html = html.replace(
    '<h2 class="section-title" style="font-size: 4rem; max-width: 800px;">Precision Construction & <span style="color: var(--blue-primary);">Modern Engineering</span></h2>\n            <p style="font-size: 1.2rem; color: var(--blue-dark); opacity: 0.85; font-weight: 500; max-width: 600px;">We blend traditional craftsmanship with advanced engineering to build structures that stand the test of time.</p>',
    '<h2 class="section-title" style="font-size: 4rem; max-width: 800px;">Our Construction & <span style="color: var(--blue-primary);">Design Services</span></h2>\n            <p style="font-size: 1.2rem; color: var(--blue-dark); opacity: 0.85; font-weight: 500; max-width: 600px;">End-to-end construction and design services built around your needs, budget, and vision.</p>'
);
html = html.replace('<span class="tech-num">01 / CORE</span>\n                    <h3 class="svc-title">Residential Buildings</h3>\n                    <p class="svc-desc">From luxury independent villas to modern high-end apartments, we specialize in creating spaces that redefine modern living.</p>', '<span class="tech-num">01</span>\n                    <h3 class="svc-title">Residential Construction</h3>\n                    <p class="svc-desc">We build custom homes tailored to your lifestyle, budget, and long-term needs, taking care of everything from foundation to final finishing.</p>');
html = html.replace('<span class="tech-num">02 / STRUCTURE</span>\n                    <h3 class="svc-title">Commercial Complexes</h3>\n                    <p class="svc-desc">Optimized commercial spaces designed for high-traffic functionality and structural durability for growing businesses.</p>', '<span class="tech-num">02</span>\n                    <h3 class="svc-title">Commercial Construction</h3>\n                    <p class="svc-desc">Reliable and scalable construction solutions for offices, retail spaces, and other commercial buildings built for long-term performance.</p>');
html = html.replace('<span class="tech-num">03 / INFRA</span>\n                    <h3 class="svc-title">Institutional Buildings</h3>\n                    <p class="svc-desc">Specialized infrastructure for educational and public institutions focusing on safety, space, and long-term sustainability.</p>', '<span class="tech-num">03</span>\n                    <h3 class="svc-title">Institutional Construction</h3>\n                    <p class="svc-desc">Structured and dependable construction for schools, offices, and community spaces with careful planning and execution.</p>');
html = html.replace('<span class="tech-num">04 / LIFESTYLE</span>\n                    <h3 class="svc-title">Bespoke Farm Houses</h3>\n                    <p class="svc-desc">Combining rustic charm with modern amenities, our farm houses are designed for tranquility and nature integration.</p>', '<span class="tech-num">04</span>\n                    <h3 class="svc-title">Farmhouse Construction</h3>\n                    <p class="svc-desc">Peaceful, nature-connected farmhouse spaces designed with a balance of modern comfort and natural surroundings.</p>');
html = html.replace('<span class="tech-num">05 / FINISH</span>\n                    <h3 class="svc-title">Interior Solutions</h3>\n                    <p class="svc-desc">High-end interior design and execution that transforms bare shells into immersive, functional living environments.</p>', '<span class="tech-num">05</span>\n                    <h3 class="svc-title">Interior Design & Execution</h3>\n                    <p class="svc-desc">Thoughtfully designed interiors that combine function and aesthetics, handled from concept to complete setup.</p>');

const customCard = `            <!-- 06 Custom -->
            <div class="tech-card" style="background: var(--blue-dark); color: white;">
                <div class="tech-marker marker-tl" style="border-color: var(--green-action);"></div>
                <div class="tech-marker marker-br" style="border-color: var(--green-action);"></div>
                
                <div class="tech-content" style="padding: 4rem 2rem; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                    <span class="tech-num" style="color: var(--green-action);">06 / PROJECT</span>
                    <h3 class="svc-title" style="color: white; font-size: 2.5rem;">Have a Custom Project?</h3>
                    <p class="svc-desc" style="color: rgba(255,255,255,0.7);">Our engineering team is ready to tackle unique structural challenges. Let's discuss your specific needs.</p>
                    <a href="#enquiry" class="btn-action btn-primary" style="align-self: flex-start; margin-top: 1rem;">Get Consultation</a>
                    <div class="tech-line"></div>
                </div>
            </div>`;
const newCard = `            <!-- 06 Renovation -->
            <div class="tech-card">
                <div class="tech-marker marker-tl"></div>
                <div class="tech-marker marker-br"></div>
                <div class="tech-coords">RENO: 2026</div>
                
                <div class="tech-img-wrapper">
                    <img src="assets/images/renovation.png" alt="Renovation & Remodeling" class="tech-img">
                </div>
                
                <div class="tech-content">
                    <span class="tech-num">06</span>
                    <h3 class="svc-title">Renovation & Remodeling</h3>
                    <p class="svc-desc">We help you upgrade, redesign, or expand your existing space with practical planning and quality execution.</p>
                    <div class="tech-line"></div>
                </div>
            </div>`;
html = html.replace(customCard, newCard);

html = html.replace('</div>\n    </section>', `</div>\n\n        <!-- Custom Requirement CTA -->\n        <div class="services-footer reveal" style="margin-top: 6rem; text-align: center; padding: 2rem 0;">\n            <p style="font-size: 1.2rem; font-weight: 600; color: var(--blue-dark); margin-bottom: 1.5rem;">Your Requirement not listed here? or Not sure which service fits your requirement?</p>\n            <a href="#enquiry" class="btn-action btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; font-weight: 700; border-radius: 50px; padding: 1rem 2rem; text-decoration: none; transition: transform 0.3s, background 0.3s;">Talk to our Engineer &rarr;</a>\n        </div>\n    </section>`);

// 5. Portfolio
html = html.replace('<h2 class="section-title" style="font-size: 3.5rem;">Beautiful Homes We\'ve Built</h2>\n            <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 700px; margin: 1.5rem auto 0; font-weight: 500;">Explore some of the independent houses and residential projects completed by Vihaan Constructions.</p>', '<h2 class="section-title" style="font-size: 3.5rem;">Our Construction Projects</h2>\n            <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 700px; margin: 1.5rem auto 0; font-weight: 500;">From homes and villas to commercial and institutional buildings, explore our completed work across Tamil Nadu and Bangalore.</p>');

// 6. Why Choose Us
html = html.replace('<div class="section-tag" style="color: var(--green-action);">The Vihaan Edge</div>\n            <h2 class="section-title text-white">Why We Stand Different</h2>\n            <p class="text-white" style="opacity: 0.7; max-width: 600px; margin: 0 auto;">Engineering excellence combined with radical transparency and a customer-first mindset.</p>', '<div class="section-tag" style="color: var(--green-action);">Why We Stand Apart</div>\n            <h2 class="section-title text-white">Our Approach to Better Building</h2>\n            <p class="text-white" style="opacity: 0.7; max-width: 600px; margin: 0 auto;">Engineering quality combined with honest transparency and a genuine customer-first approach.</p>');
html = html.replace('<p class="usp-desc">Watch your home take shape in real-time with 24/7 CCTV access provided for every project site. Absolute transparency from foundation to finish.</p>', '<p class="usp-desc">Watch your space come to life with 24/7 CCTV access for your project site. Full transparency from foundation to finish.</p>');
html = html.replace('<p class="usp-desc">From Precast to RCC frame structures, we tailor modern engineering methods to match your specific timeline and budget goals perfectly.</p>', '<p class="usp-desc">We work with Precast and RCC frame structures, choosing the right method based on your timeline, budget, and project needs.</p>');
html = html.replace('<p class="usp-desc">Optimized structural planning and project management ensure on-time handover without ever compromising on quality or safety.</p>', '<p class="usp-desc">Efficient planning and execution help us deliver on time without compromising on quality or safety.</p>');
html = html.replace('<p class="usp-desc">Detailed cost breakdowns and zero hidden charges. Premium quality homes starting from ₹1775 per sq. ft. No surprises, just honesty.</p>', '<p class="usp-desc">Clear cost breakdowns with no hidden charges. Quality homes starting from ₹1,775 per sq. ft. with complete honesty.</p>');
html = html.replace('<h3 class="usp-title">ISO Certified Build</h3>\n                <p class="usp-desc">We use strictly premium, ISO-certified materials and follow rigorous multi-point quality check protocols to ensure long-term structural integrity.</p>', '<h3 class="usp-title">ISO-Grade Materials</h3>\n                <p class="usp-desc">We use premium, ISO-certified materials and follow strict quality checks to ensure long-lasting strength and durability.</p>');
html = html.replace('<p class="usp-desc">Free 2D elevation designs and expert technical consultations from our dedicated team of civil engineers at every stage.</p>', '<p class="usp-desc">Free 2D elevation design and technical support from experienced civil engineers at every stage of your project.</p>');

// 7. FAQs
const oldFaqs = `                <div class="faq-item">
                    <h4 class="faq-q">What construction methods do you offer? <span class="faq-icon">+</span></h4>
                    <p class="faq-a">We provide multiple construction solutions including precast construction, RCC frame structures, and traditional brick wall construction based on project requirements and customer preferences.</p>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">What is precast construction? <span class="faq-icon">+</span></h4>
                    <p class="faq-a">Precast construction involves manufacturing structural components in a controlled environment and assembling them at the construction site. This helps improve speed, quality, and efficiency.</p>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">How long does it take to complete a home? <span class="faq-icon">+</span></h4>
                    <p class="faq-a">Project timelines depend on the size and design of the home, but precast methods help reduce overall construction time significantly.</p>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">What is the starting price? <span class="faq-icon">+</span></h4>
                    <p class="faq-a">Our construction solutions start from ₹1775 per sq. ft.</p>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">Do you provide end-to-end construction? <span class="faq-icon">+</span></h4>
                    <p class="faq-a">Yes. We handle planning, construction, execution, finishing, and handover.</p>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">Can you customize house designs? <span class="faq-icon">+</span></h4>
                    <p class="faq-a">Absolutely. We create layouts and designs based on your requirements, lifestyle, and budget.</p>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">Which areas do you serve? <span class="faq-icon">+</span></h4>
                    <p class="faq-a">We offer services across Tamil Nadu. We are available in Bangalore and Hyderabad too. Please contact us to know the locations currently covered by our services.</p>
                </div>`;
const newFaqs = `                <div class="faq-item">
                    <h4 class="faq-q">What types of construction projects do you handle? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>We handle residential homes, commercial buildings, institutional spaces, farmhouse projects, interiors, and renovation work across Tamil Nadu and Bangalore.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">How is the project cost calculated? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>The cost is based on your project type, design requirements, materials used, and overall built-up area. We provide a clear estimate with detailed breakdowns before starting.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">Do you provide customized home designs? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>Yes, every project is designed based on your needs, lifestyle, budget, and space requirements. We also provide free 2D elevation designs.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">Can I track my project while it is being built? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>Yes, we provide 24/7 CCTV access so you can monitor your site anytime. We believe in complete transparency throughout the construction process.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">What materials do you use for construction? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>We use quality-tested, ISO-grade materials and follow strict quality checks at every stage to ensure durability and long-term safety.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">How long does a typical project take? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>Minimum 5 Months. Project timelines vary depending on size and complexity. We plan each project carefully to ensure timely delivery without compromising quality.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">Do you handle approvals and permits? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>Yes, we assist with the required approvals and documentation needed for your construction project.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">How do I get started with you? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>You can simply reach out to us with your requirements. We will understand your needs, discuss possibilities, and guide you through the next steps.</p></div>
                </div>
                <div class="faq-item">
                    <h4 class="faq-q">Which areas do you serve? <span class="faq-icon">+</span></h4>
                    <div class="faq-a"><p>We serve across Tamil Nadu and Bangalore City</p></div>
                </div>`;
html = html.replace(oldFaqs, newFaqs);

// 8. Enquiry Pane
html = html.replace('<div class="section-tag" style="background: transparent; color: var(--green-action); width: fit-content; font-weight: 800; padding: 0; margin-bottom: 1rem;">Plan Your Future</div>', '<div class="section-tag" style="background: transparent; color: var(--green-action); width: fit-content; font-weight: 800; padding: 0; margin-bottom: 1rem;">Let’s Start Building Your Space</div>');
html = html.replace('<h3>Your Dream Home, <br>Expertly Built.</h3>', '<h3>Built for the Way <br>You Live and Work</h3>');
html = html.replace('<p>From modern independent villas to premium residential spaces, we bring high-quality engineering and trust to every family home.</p>', '<p>Tell us what you’re planning, and we’ll help you turn it into a well-built space with the right design, materials, and execution, handled with care from start to finish.</p>');
html = html.replace('<a href="tel:+919876543210" style="color: inherit; text-decoration: none;">+91 98765 43210</a>', '<a href="tel:+918148410102" style="color: inherit; text-decoration: none;">+91 81484 10102</a>');
html = html.replace('<a href="mailto:projects@vihaanconstructions.com" style="color: inherit; text-decoration: none;">projects@vihaanconstructions.com</a>', '<a href="mailto:vihaanconstructions.india@gmail.com" style="color: inherit; text-decoration: none;">vihaanconstructions.india@gmail.com</a>');

// 9. FORM FIX
// Since I want to use Formspree, the user explicitly said they had Formspree earlier, OR maybe they want Apps Script.
// Let's configure it exactly how I had it for Apps Script, EXCEPT maybe the URL is different?
// Let's ask the user. BUT I MUST restore all the html first!
const oldForm = `<form action="#" method="POST">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="input-group">
                                <input type="text" class="form-input" placeholder="Full Name *" required>
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                            </div>
                            <div class="input-group">
                                <input type="email" class="form-input" placeholder="Email Address" required>
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="input-group">
                                <input type="tel" class="form-input" placeholder="Phone Number *" required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number">
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-input" placeholder="Project Location *" required>
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                            </div>
                        </div>
                        <div class="input-group">
                            <select class="form-input placeholder-selected" style="appearance: none;" onchange="this.value === '' ? this.classList.add('placeholder-selected') : this.classList.remove('placeholder-selected')">
                                <option value="" selected>Service Type</option>
                                <option value="residential">Residential Construction</option>
                                <option value="commercial">Commercial Projects</option>
                                <option value="interior">Interior Design</option>
                                <option value="renovation">Renovation & Expansion</option>
                                <option value="other">Other Services</option>
                            </select>
                            <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div>
                        </div>
                        <div class="input-group">
                            <textarea class="form-input" placeholder="Tell us about your project goals and requirements..." required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Request Call Back</button>
                    </form>`;

const newForm = `<form id="callbackForm" action="#" method="POST" target="hidden_iframe_callback">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="input-group">
                                <input type="text" name="name" class="form-input" placeholder="Full Name *" required>
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                            </div>
                            <div class="input-group">
                                <input type="email" name="email" class="form-input" placeholder="Email Address" required>
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="input-group">
                                <input type="tel" name="phone" class="form-input" placeholder="Phone Number *" required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number">
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                            </div>
                            <div class="input-group">
                                <input type="text" name="location" class="form-input" placeholder="Project Location *" required>
                                <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                            </div>
                        </div>
                        <div class="input-group">
                            <select name="service" class="form-input placeholder-selected" style="appearance: none;" onchange="this.value === '' ? this.classList.add('placeholder-selected') : this.classList.remove('placeholder-selected')">
                                <option value="" selected>Service Type</option>
                                <option value="residential">Residential Construction</option>
                                <option value="commercial">Commercial Projects</option>
                                <option value="interior">Interior Design</option>
                                <option value="renovation">Renovation & Expansion</option>
                                <option value="other">Other Services</option>
                            </select>
                            <div class="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div>
                        </div>
                        <div class="input-group">
                            <textarea name="message" class="form-input" placeholder="Tell us about your project goals and requirements..." required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Request Call Back</button>
                    </form>
                    <iframe name="hidden_iframe_callback" id="hidden_iframe_callback" style="display:none;" onload="if(submittedCallback) {window.location.href='thank-you.html';}"></iframe>
                    <script>
                        var submittedCallback = false;
                        const callbackForm = document.getElementById('callbackForm');
                        if (callbackForm) {
                            callbackForm.addEventListener('submit', function() {
                                submittedCallback = true;
                                const submitBtn = this.querySelector('.btn-submit');
                                submitBtn.innerText = 'Requesting...';
                                submitBtn.disabled = true;
                                submitBtn.style.opacity = '0.7';
                            });
                        }
                    </script>`;
html = html.replace(oldForm, newForm);

fs.writeFileSync('index.html', html);
console.log('Restoration complete!');
