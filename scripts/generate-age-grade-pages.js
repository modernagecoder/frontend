#!/usr/bin/env node
/*
 * generate-age-grade-pages.js
 *
 * Renders unique HTML pages for age-wise, grade-wise and board-specific
 * coding-class landing pages. Reads config from
 *   scripts/age-grade-pages-config.js
 * and emits files to src/pages/<slug>.html
 *
 * Every page shares the site nav + footer + callback modal + shared
 * stylesheet (/css/age-wise-pages.css). Per-page data injects unique
 * content, colors, keywords, structured data and copy — so each page
 * reads as uniquely written, not templated.
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'age-grade-pages-config.js');
const OUT_DIR = path.resolve(__dirname, '..', 'src', 'pages');
const SITE = 'https://learn.modernagecoders.com';

if (!fs.existsSync(CONFIG_PATH)) {
    console.error('Missing config file:', CONFIG_PATH);
    process.exit(1);
}
const pages = require(CONFIG_PATH);

/* ----------------------- shared chunks ----------------------- */

const NAV = `<!-- BEGIN_INLINED_NAV -->
<style>
    .callback-nav-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 25px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3); }
    .callback-nav-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4); }
    .callback-nav-btn svg { flex-shrink: 0; }
    @media (max-width: 768px) { .callback-nav-btn span { display: none; } .callback-nav-btn { padding: 10px; } }
</style>
<header>
    <nav>
        <div class="navbar">
            <div class="nav-container">
                <a href="/" class="logo">
                    <img style="border-radius: 10px;" src="/images/logo.svg" alt="Modern Age Coders Logo" class="logo-img" width="40" height="40" fetchpriority="high">
                    <span class="logo-text">Modern Age Coders</span>
                </a>
                <ul class="nav-menu" id="navMenu">
                    <li class="nav-item dropdown">
                        <a href="/courses" class="nav-link">Courses
                            <svg style="width: 14px; height: 14px; margin-left: 4px; opacity: 0.7;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        </a>
                        <div class="dropdown-content">
                            <a href="/courses" class="dropdown-item" style="font-weight: bold; border-bottom: 1px solid rgba(168, 85, 247, 0.3); margin-bottom: 0.5rem; padding-bottom: 0.75rem;">View All Courses</a>
                            <a href="/courses/coding/kids" class="dropdown-item">For Kids (Ages 6-12)</a>
                            <a href="/courses/coding/teens" class="dropdown-item">For Teens (Ages 13-18)</a>
                            <a href="/courses/coding/college" class="dropdown-item">For College Students</a>
                            <a href="/courses/coding/college" class="dropdown-item">For Professionals</a>
                            <a href="/courses/coding/corporate" class="dropdown-item">Customized Training</a>
                            <a href="/courses/coding/girls" class="dropdown-item highlight">Special For Girls</a>
                            <a href="/summer-coding-camp" class="dropdown-item highlight">Summer Coding Camp</a>
                            <a href="/schools" class="dropdown-item">Schools Program</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="/coding-challenges" class="nav-link">Practice
                            <svg style="width: 14px; height: 14px; margin-left: 4px; opacity: 0.7;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        </a>
                        <div class="dropdown-content">
                            <a href="/coding-challenges" class="dropdown-item" style="font-weight: bold;">Coding Challenges</a>
                            <a href="/maths-challenges" class="dropdown-item" style="font-weight: bold;">Maths Challenges</a>
                            <a href="/mistakes-students-make" class="dropdown-item">Mistakes Students Make</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="/student-labs" class="nav-link">Tools
                            <svg style="width: 14px; height: 14px; margin-left: 4px; opacity: 0.7;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                        </a>
                        <div class="dropdown-content">
                            <a href="/beat-the-babu" class="dropdown-item">Beat the Babu</a>
                            <a href="/aura" class="dropdown-item">Aura</a>
                            <a href="https://mind.modernagecoders.com" class="dropdown-item">Beautiful Mind</a>
                            <a href="https://zap.modernagecoders.com" class="dropdown-item">Zap</a>
                            <a href="https://envision.modernagecoders.com" class="dropdown-item">Envision</a>
                            <a href="https://misti.modernagecoders.com" class="dropdown-item">Misti AI</a>
                            <a href="https://deep64.modernagecoders.com" class="dropdown-item">Deep 64</a>
                            <div style="border-top: 1px solid rgba(168, 85, 247, 0.25); margin: 0.5rem 0; padding-top: 0.25rem;"></div>
                            <a href="https://dashboard.modernagecoders.com/attendance" class="dropdown-item" target="_blank" rel="noopener" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05)); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; font-weight: 600; border-radius: 6px; margin-bottom: 4px;">Mark Attendance</a>
                            <a href="https://dashboard.modernagecoders.com/recording" class="dropdown-item" target="_blank" rel="noopener" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05)); border: 1px solid rgba(59, 130, 246, 0.3); color: #3b82f6; font-weight: 600; border-radius: 6px;">Class Recordings</a>
                        </div>
                    </li>
                    <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
                    <li class="nav-item">
                        <button type="button" class="callback-nav-btn" onclick="openCallbackModal()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>Callback</span>
                        </button>
                    </li>
                    <li class="nav-item" style="margin-left: 10px;"><a href="https://dashboard.modernagecoders.com" target="_blank" class="cta-button" style="padding: 0.6rem 2rem !important;">Login</a></li>
                </ul>
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </nav>
</header>
<!-- END_INLINED_NAV -->`;

const CALLBACK_MODAL = `<div id="callbackModalOverlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:99999; align-items:center; justify-content:center;">
    <div style="background:#fff; border-radius:20px; padding:40px; max-width:400px; width:90%; text-align:center; position:relative; box-shadow:0 25px 50px rgba(0,0,0,0.25);">
        <button type="button" onclick="closeCallbackModal()" style="position:absolute; top:15px; right:15px; width:32px; height:32px; border:none; background:#f3f4f6; border-radius:50%; font-size:20px; cursor:pointer; color:#666;">&times;</button>
        <div style="width:80px; height:80px; background:linear-gradient(135deg,#fef3c7,#fde68a); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <h3 style="font-size:24px; font-weight:700; color:#1f2937; margin:0 0 8px;">Request a Callback</h3>
        <p style="font-size:15px; color:#6b7280; margin:0 0 25px;">Enter your number, we'll call you right back.</p>
        <form id="callbackForm" onsubmit="submitCallback(event)" style="display:flex; flex-direction:column; gap:15px;">
            <div style="display:flex; align-items:center; background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                <span style="padding:14px 12px; background:#f3f4f6; color:#6b7280; font-weight:600; border-right:2px solid #e5e7eb;">+91</span>
                <input type="tel" id="callbackPhoneInput" placeholder="Enter phone number" maxlength="10" required style="flex:1; padding:14px 15px; border:none; background:transparent; font-size:16px; color:#1f2937; outline:none;">
            </div>
            <button type="submit" id="callbackSubmitBtn" style="padding:14px 24px; background:linear-gradient(135deg,#f59e0b,#d97706); color:#fff; border:none; border-radius:12px; font-size:16px; font-weight:600; cursor:pointer;">Call Me Back</button>
        </form>
        <div id="callbackSuccessMsg" style="display:none; padding:20px 0;">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" style="margin-bottom:15px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <h4 style="font-size:20px; font-weight:700; color:#10b981; margin:0 0 8px;">We'll call you soon.</h4>
            <p style="font-size:14px; color:#6b7280; margin:0;">Expect a call within 3 hours.</p>
        </div>
    </div>
</div>`;

const FLOATING = `<a href="https://misti.modernagecoders.com" target="_blank" rel="noopener noreferrer" class="misti-chat-btn" aria-label="Chat with Misti AI" style="position: fixed !important; bottom: 92px !important; right: 24px !important; z-index: 2147483646 !important; display: flex !important; flex-direction: row !important; align-items: center !important; gap: 10px !important; text-decoration: none !important;">
    <span class="misti-label" style="background: linear-gradient(135deg, #a855f7, #8b5cf6); color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; white-space: nowrap; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: 0.3px;">Ask Misti AI</span>
    <div class="misti-icon" style="width: 52px; height: 52px; min-width: 52px; min-height: 52px; background: linear-gradient(135deg, #a855f7, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); transition: transform 0.2s, box-shadow 0.2s; flex-shrink: 0;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="min-width: 26px; min-height: 26px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    </div>
</a>
<a href="https://wa.me/919123366161?text=Hi%2C%20I%27m%20interested%20in%20coding%20classes." target="_blank" rel="noopener noreferrer" class="wa-float-btn" aria-label="Chat on WhatsApp" style="position: fixed !important; bottom: 24px !important; right: 24px !important; z-index: 2147483645 !important; display: flex !important; flex-direction: row !important; align-items: center !important; gap: 10px !important; text-decoration: none !important;">
    <span class="wa-label" style="background: #25D366; color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; white-space: nowrap; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: 0.3px;">Chat with us</span>
    <div class="wa-icon" style="width: 52px; height: 52px; min-width: 52px; min-height: 52px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); transition: transform 0.2s, box-shadow 0.2s; flex-shrink: 0;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" style="min-width: 26px; min-height: 26px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </div>
</a>
<style>
    .misti-chat-btn:hover .misti-icon, .misti-chat-btn:hover .misti-label { transform: scale(1.04); box-shadow: 0 6px 20px rgba(168,85,247,.5); }
    .wa-float-btn:hover .wa-icon, .wa-float-btn:hover .wa-label { transform: scale(1.04); box-shadow: 0 6px 20px rgba(37,211,102,.5); }
    @media (max-width: 768px) {
        .misti-label, .wa-label { display: none !important; visibility: hidden !important; }
        .misti-chat-btn { bottom: 88px !important; right: 16px !important; }
        .wa-float-btn { bottom: 20px !important; right: 16px !important; }
    }
</style>`;

const FOOTER = (slug, relatedFooterLinks) => `<footer class="site-footer">
    <div class="footer-container">
        <div class="footer-grid">
            <div class="footer-column">
                <a href="/" class="logo">
                    <img src="/images/logo.svg" alt="Modern Age Coders Logo" class="logo-img" width="40" height="40" loading="lazy" decoding="async">
                    <span class="logo-text">Modern Age Coders</span>
                </a>
                <p class="footer-tagline">Forging the next generation of innovators.</p>
                <div class="social-links">
                    <a href="https://instagram.com/modern_age_coders" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    <a href="https://www.youtube.com/@ModernAgeCoders" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
                    <a href="https://www.linkedin.com/in/shivam-khemka-modern-age-coders" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                </div>
            </div>
            <div class="footer-column">
                <h3 class="footer-heading">Related pages</h3>
                <ul class="footer-links">${relatedFooterLinks.map(l => `\n                    <li><a href="${l.href}">${l.label}</a></li>`).join('')}
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-heading">Explore</h3>
                <ul class="footer-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/success-stories">Success Stories</a></li>
                    <li><a href="/free-resources">Free Resources</a></li>
                    <li><a href="/student-labs">Student Labs</a></li>
                    <li><a href="/love">Wall of Love</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-heading">Contact &amp; Legal</h3>
                <ul class="footer-links">
                    <li><a href="tel:+919123366161">+91 9123366161</a></li>
                    <li><a href="mailto:contact@modernagecoders.com">contact@modernagecoders.com</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/cancellation">Cancellation Policy</a></li>
                    <li><a href="/refund">Refund Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom"><p id="copyright"></p></div>
    </div>
</footer>`;

/* ----------------------- helpers ----------------------- */

function esc(s) {
    if (s == null) return '';
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderCourses(courses) {
    return courses.map(c => `
                    <a class="age-course-card" href="${c.href}">
                        <div class="age-course-thumb">
                            <span class="age-course-pill">${c.pill}</span>
                            <img src="${c.img}" alt="${esc(c.alt)}" loading="lazy" decoding="async">
                        </div>
                        <div class="age-course-body">
                            <h3>${c.title}</h3>
                            <p>${c.desc}</p>
                            <div class="age-course-meta">${c.tags.map(t => `<span>${t}</span>`).join('')}</div>
                            <span class="age-course-view">View course →</span>
                        </div>
                    </a>`).join('\n');
}

function renderWhyCards(whys) {
    return whys.map((w, i) => `
                    <div class="age-why-card">
                        <span class="age-why-index">${String(i + 1).padStart(2, '0')} / ${w.tag}</span>
                        <h3>${w.title}</h3>
                        <p>${w.body}</p>
                    </div>`).join('\n');
}

function renderProjects(projects) {
    const icons = [
        '<path d="M5 3l14 9-14 9V3z"/>',
        '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>',
        '<path d="M3 7h18v12H3z"/><path d="M3 7l2-3h14l2 3"/>',
        '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
        '<path d="M4 4h16v16H4z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
        '<circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/>'
    ];
    return projects.map((p, i) => `
                    <article class="age-shelf-card">
                        <span class="age-shelf-sticker">${p.sticker}</span>
                        <div class="age-shelf-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[i % icons.length]}</svg></div>
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="age-shelf-tags">${p.tags.map(t => `<span class="age-shelf-tag">${t}</span>`).join('')}</div>
                    </article>`).join('\n');
}

function renderRoadmap(stages) {
    return stages.map(s => `
                    <div class="age-step">
                        <div class="age-step-label">${s.label}</div>
                        <h3>${s.title}</h3>
                        <p>${s.body}</p>
                        <ul>${s.tags.map(t => `<li>${t}</li>`).join('')}</ul>
                    </div>`).join('\n');
}

function renderCompareTable(compare) {
    const header = compare.columns.map((c, i) => i === compare.highlight
        ? `<th class="highlight">${c.label}</th>`
        : `<th>${c.link ? `<a href="${c.link}">${c.label}</a>` : c.label}</th>`).join('');
    const rows = compare.rows.map(row => {
        const cells = row.values.map((v, i) => i === compare.highlight
            ? `<td class="highlight">${v}</td>` : `<td>${v}</td>`).join('');
        return `<tr><td><strong>${row.label}</strong></td>${cells}</tr>`;
    }).join('');
    return `<table><thead><tr><th style="width: 22%;">What to expect</th>${header}</tr></thead><tbody>${rows}</tbody></table>`;
}

function renderReviews(reviews) {
    return reviews.map(r => `
                    <article class="age-review">
                        <p>${r.body}</p>
                        <div class="age-review-by">
                            <div class="age-review-avatar">${r.initial}</div>
                            <div>
                                <span class="age-review-name">${r.name}</span>
                                <span class="age-review-meta">${r.meta}</span>
                            </div>
                        </div>
                    </article>`).join('\n');
}

function renderFAQs(faqs) {
    return faqs.map(f => `
                    <details class="age-faq-item">
                        <summary>${f.q}</summary>
                        <div class="age-faq-body">${f.a}</div>
                    </details>`).join('\n');
}

function renderChips(chips) {
    return chips.map(c => `<a class="age-chip" href="${c.href}">${c.small ? `<small>${c.small}</small> ` : ''}${c.label}</a>`).join('');
}

function jsonLd(cfg) {
    const faqMain = cfg.faqs.map(f => ({
        '@type': 'Question',
        name: f.q.replace(/&amp;/g, '&'),
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&') }
    }));
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Course',
                name: cfg.courseName,
                description: cfg.courseDesc,
                provider: { '@type': 'Organization', name: 'Modern Age Coders', sameAs: SITE },
                educationalLevel: cfg.level || 'Beginner',
                courseCode: cfg.courseCode,
                audience: {
                    '@type': 'EducationalAudience',
                    educationalRole: 'student',
                    audienceType: cfg.audienceType
                },
                hasCourseInstance: [
                    { '@type': 'CourseInstance', name: '1-on-1 Live Online (1 hour)', courseMode: 'online', courseWorkload: 'PT1H' },
                    { '@type': 'CourseInstance', name: 'Small Group Live Online (1 hour)', courseMode: 'online', courseWorkload: 'PT1H' }
                ],
                offers: {
                    '@type': 'Offer',
                    price: '1499',
                    priceCurrency: 'INR',
                    availability: 'https://schema.org/InStock',
                    url: SITE + '/pricing'
                }
            },
            { '@type': 'FAQPage', mainEntity: faqMain },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
                    { '@type': 'ListItem', position: 2, name: 'Courses', item: SITE + '/courses' },
                    { '@type': 'ListItem', position: 3, name: cfg.breadcrumbName, item: SITE + '/' + cfg.slug }
                ]
            },
            {
                '@type': 'WebPage',
                name: cfg.breadcrumbName,
                description: cfg.metaDescription,
                url: SITE + '/' + cfg.slug,
                inLanguage: 'en-IN',
                isPartOf: { '@type': 'WebSite', name: 'Modern Age Coders', url: SITE }
            }
        ]
    };
}

/* ----------------------- main template ----------------------- */

function render(cfg) {
    const related = cfg.relatedChips || [];
    const cityChips = cfg.cityChips || [
        { href: '/best-coding-class-in-delhi', label: 'Delhi' },
        { href: '/best-coding-class-in-mumbai', label: 'Mumbai' },
        { href: '/best-coding-class-in-bengaluru', label: 'Bengaluru' },
        { href: '/best-coding-class-in-hyderabad', label: 'Hyderabad' },
        { href: '/best-coding-class-in-chennai', label: 'Chennai' },
        { href: '/best-coding-class-in-pune', label: 'Pune' },
        { href: '/best-coding-class-in-kolkata', label: 'Kolkata' },
        { href: '/best-coding-class-in-ahmedabad', label: 'Ahmedabad' }
    ];
    const footerLinks = cfg.footerLinks || related.slice(0, 10).map(c => ({ href: c.href, label: c.label }));

    const accent = cfg.accent || '#14b8a6';
    const accent2 = cfg.accent2 || '#a855f7';

    const title = `${cfg.pageTitle} | Modern Age Coders`;
    const canon = `${SITE}/${cfg.slug}`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N8BM164YJP');
        gtag('config', 'AW-16910316353');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>

    <meta name="description" content="${esc(cfg.metaDescription)}">
    <!-- meta keywords intentionally not emitted: Google has ignored it since 2009 and
         Bing treats it as a SPAM SIGNAL — and Bing is the index ChatGPT/Copilot answer from.
         See scripts/strip-meta-keywords.py. -->
    <meta name="author" content="Modern Age Coders">
    <link rel="canonical" href="${canon}">
    <link rel="alternate" hreflang="en" href="${canon}" />
    <link rel="alternate" hreflang="en-in" href="${canon}" />
    <link rel="alternate" hreflang="x-default" href="${canon}" />

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <meta name="theme-color" content="${accent}">

    <meta property="og:type" content="website">
    <meta property="og:url" content="${canon}">
    <meta property="og:title" content="${esc(cfg.ogTitle || cfg.pageTitle)}">
    <meta property="og:description" content="${esc(cfg.ogDescription || cfg.metaDescription)}">
    <meta property="og:image" content="${SITE}/images/og-modern-age-coders.png">
    <meta property="og:site_name" content="Modern Age Coders">
    <meta property="og:locale" content="en_IN">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(cfg.ogTitle || cfg.pageTitle)}">
    <meta name="twitter:description" content="${esc(cfg.ogDescription || cfg.metaDescription)}">
    <meta name="twitter:image" content="${SITE}/images/og-modern-age-coders.png">

    <meta name="google-site-verification" content="fpweGaVH4rJIwjSfE5wSdzUGWTYsLz2KFENZxOoX91k" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

    <script type="application/ld+json">${JSON.stringify(jsonLd(cfg), null, 2)}</script>

    <style>
        select.input-field, select {
            background-color: #1e1e32 !important;
            color: #ffffff !important;
            border: 1px solid rgba(168, 85, 247, 0.5) !important;
            padding: 12px 16px !important;
            border-radius: 8px !important;
            font-size: 15px !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
        }
        body.age-page { --age-accent: ${accent}; --age-accent-2: ${accent2}; }
    </style>

    <script src="/js/meta-pixel.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <link rel="stylesheet" href="/css/age-wise-pages.css">

    <script src="/js/ux-enhancements.js" defer></script>
    <script src="/js/hover-prefetch.js" defer></script>
    <script>if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}</script>
</head>
<body class="age-page ${cfg.bodyClass || ''}">
    <a href="#main" class="skip-link">Skip to main content</a>
    ${NAV}
    <main id="main">

        <!-- ===== HERO ===== -->
        <section class="age-section age-hero">
            <div class="age-wrap">
                <div class="age-hero-grid">
                    <div>
                        <span class="age-eyebrow">${cfg.eyebrow}</span>
                        <h1>${cfg.h1Before}<span class="age-hl">${cfg.h1Highlight}</span>${cfg.h1After || ''}</h1>
                        <p class="age-hero-sub">${cfg.heroSub}</p>
                        <div class="age-cta-row">
                            <a href="/book-demo" class="age-btn age-btn-primary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                                ${cfg.ctaPrimary || 'Book a free demo class'}
                            </a>
                            <a href="#curriculum" class="age-btn age-btn-ghost">${cfg.ctaSecondary || 'See the curriculum'}</a>
                        </div>
                        <div class="age-trust">
                            ${cfg.trust.map(t => `<div class="age-trust-item"><strong>${t.big}</strong><span>${t.sub}</span></div>`).join('\n                            ')}
                        </div>
                    </div>
                    <div>
                        <div class="age-badge-wrap">
                            <div class="age-badge-rings"></div>
                            <div class="age-badge-rings"></div>
                            <div class="age-badge-rings"></div>
                            <div class="age-badge-core">
                                <div>
                                    <div class="num" style="font-size: ${cfg.badgeFontSize || 'clamp(60px, 9vw, 120px)'};">${cfg.badge}</div>
                                    <div class="lbl">${cfg.badgeLabel}</div>
                                </div>
                            </div>
                            <span class="age-badge-chip c1">${cfg.chips[0]}</span>
                            <span class="age-badge-chip c2">${cfg.chips[1]}</span>
                            <span class="age-badge-chip c3">${cfg.chips[2]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== COURSES (2nd section) ===== -->
        <section class="age-section">
            <div class="age-wrap">
                <span class="age-eyebrow">${cfg.coursesEyebrow || 'Courses matched for this level'}</span>
                <h2 class="age-h2">${cfg.coursesHeading}</h2>
                <p class="age-lede">${cfg.coursesLede}</p>
                <div class="age-courses">${renderCourses(cfg.courses)}
                </div>
                <div class="age-skip">
                    <div class="age-skip-badge">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
                    </div>
                    <div class="age-skip-body">
                        <h3>${cfg.skipHeading}</h3>
                        <p>${cfg.skipBody}</p>
                    </div>
                    <a href="/book-demo" class="age-btn age-btn-primary" style="white-space:nowrap;">${cfg.skipCTA || 'Level-check demo'}</a>
                </div>
                <p style="text-align:center; margin-top: 32px; color: var(--age-ink-dim); font-size: 14.5px;">
                    Looking for more? Browse the full <a href="/courses" style="color:var(--age-accent);font-weight:600;text-decoration:none;">courses catalogue →</a>
                </p>
            </div>
        </section>

        <!-- ===== WHY ===== -->
        <section class="age-section">
            <div class="age-wrap">
                <span class="age-eyebrow">${cfg.whyEyebrow || 'Why this level, specifically'}</span>
                <h2 class="age-h2">${cfg.whyHeading}</h2>
                <p class="age-lede">${cfg.whyLede}</p>
                <div class="age-why-grid">${renderWhyCards(cfg.whys)}
                </div>
            </div>
        </section>

        <!-- ===== PROJECT SHELF ===== -->
        <section class="age-section">
            <div class="age-wrap">
                <span class="age-eyebrow">${cfg.projectsEyebrow || 'Projects, not lectures'}</span>
                <h2 class="age-h2">${cfg.projectsHeading}</h2>
                <p class="age-lede">${cfg.projectsLede}</p>
                <div class="age-shelf">${renderProjects(cfg.projects)}
                </div>
            </div>
        </section>

        <!-- ===== CURRICULUM ===== -->
        <section class="age-section" id="curriculum">
            <div class="age-wrap">
                <span class="age-eyebrow">${cfg.roadmapEyebrow || 'The curriculum path'}</span>
                <h2 class="age-h2">${cfg.roadmapHeading}</h2>
                <p class="age-lede">${cfg.roadmapLede}</p>
                <div class="age-timeline">${renderRoadmap(cfg.roadmap)}
                </div>
            </div>
        </section>

        <!-- ===== CLASS FORMAT ===== -->
        <section class="age-section">
            <div class="age-wrap">
                <span class="age-eyebrow">Two formats, same 1 hour live class</span>
                <h2 class="age-h2">Pick the class format that fits your child.</h2>
                <p class="age-lede">Same curriculum. Same teachers. Same recordings. The difference is whether your child learns best with one teacher's full attention, or alongside 4 to 6 classmates at their level.</p>
                <div class="age-format-grid">
                    <article class="age-format-card primary">
                        <span class="age-format-tag">Option A</span>
                        <h3>Live 1-on-1 Online Class</h3>
                        <p>One teacher, one learner, the full 1 hour. The teacher adapts pace in real time — slowing down on tricky concepts, speeding up where your child is already fluent. Best for focused learners, specific exam prep, or fastest progress.</p>
                        <ul class="age-format-list">
                            <li>1 teacher, 1 student, 1 hour per session</li>
                            <li>Pace fully adjusted to your child</li>
                            <li>Focused help on school projects and exams</li>
                            <li>Flexible timing — you pick the slots</li>
                            <li>Every class recorded and shared with parents</li>
                        </ul>
                        <div class="age-format-price"><strong>&#8377;2,499</strong><span>/ month &middot; 8 sessions</span></div>
                    </article>
                    <article class="age-format-card">
                        <span class="age-format-tag">Option B</span>
                        <h3>Live Small-Group Online Class</h3>
                        <p>4 to 6 students at a similar level, one teacher, 1 hour per session. Learners move faster when they see peers solve problems in different ways. Supportive, never pressured. Best if your child enjoys learning with others.</p>
                        <ul class="age-format-list">
                            <li>Small groups of 4 to 6 similar-level learners</li>
                            <li>1 hour live session, 2 sessions per week</li>
                            <li>Peer project reviews — students present to each other</li>
                            <li>Fixed schedule, same classmates each week</li>
                            <li>Class recording and parent progress report</li>
                        </ul>
                        <div class="age-format-price"><strong>&#8377;1,499</strong><span>/ month &middot; 8 sessions</span></div>
                    </article>
                </div>
            </div>
        </section>

        <!-- ===== COMPARE ===== -->
        <section class="age-section">
            <div class="age-wrap">
                <span class="age-eyebrow">${cfg.compareEyebrow || 'Level comparison'}</span>
                <h2 class="age-h2">${cfg.compareHeading}</h2>
                <p class="age-lede">${cfg.compareLede}</p>
                <div class="age-compare">${renderCompareTable(cfg.compare)}</div>
            </div>
        </section>

        <!-- ===== TESTIMONIALS ===== -->
        <section class="age-section">
            <div class="age-wrap">
                <span class="age-eyebrow">${cfg.reviewsEyebrow || 'Words from parents and students'}</span>
                <h2 class="age-h2">${cfg.reviewsHeading}</h2>
                <p class="age-lede">${cfg.reviewsLede}</p>
                <div class="age-reviews">${renderReviews(cfg.reviews)}
                </div>
            </div>
        </section>

        <!-- ===== FAQ ===== -->
        <section class="age-section">
            <div class="age-wrap">
                <span class="age-eyebrow">Common questions from parents</span>
                <h2 class="age-h2">${cfg.faqHeading || 'Before you book the demo — answered honestly.'}</h2>
                <p class="age-lede">${cfg.faqLede || "Short, plain answers. If your question isn't here, tap the callback button at the top and a human will get back to you the same day."}</p>
                <div class="age-faq">${renderFAQs(cfg.faqs)}
                </div>
            </div>
        </section>

        <!-- ===== FORM + RELATED ===== -->
        <section class="age-section" id="contact">
            <div class="age-wrap">
                <div class="age-form-wrap">
                    <div class="age-form-box">
                        <span class="age-eyebrow">Book a free 1 hour demo class</span>
                        <h3>Try one session. Decide after.</h3>
                        <p>Fill the form. Our counsellor calls you within 3 hours, understands your child's pace, and schedules a real demo with a real teacher. No card, no commitment.</p>
                        <form id="ageLeadForm" onsubmit="return submitAgeLeadForm(event)">
                            <div class="age-form-row two">
                                <input class="age-input" type="text" name="parent_name" placeholder="Parent's name" required>
                                <input class="age-input" type="tel" name="phone" placeholder="Phone (+91)" maxlength="10" required>
                            </div>
                            <div class="age-form-row two">
                                <input class="age-input" type="email" name="email" placeholder="Email" required>
                                <select class="age-select" name="format" required>
                                    <option value="">Preferred format</option>
                                    <option value="1on1">1-on-1 live class</option>
                                    <option value="group">Small group (4–6)</option>
                                    <option value="unsure">Not sure yet</option>
                                </select>
                            </div>
                            <div class="age-form-row">
                                <input class="age-input" type="text" name="child_name" placeholder="Child's name (optional)">
                            </div>
                            <button type="submit" class="age-form-submit">Request my free demo</button>
                            <p class="age-form-note">We call you back within 3 hours. By submitting, you agree to our privacy policy.</p>
                        </form>
                    </div>
                    <div class="age-related">
                        <h3>${cfg.relatedHeading || 'Related pages'}</h3>
                        <div class="age-chip-row">${renderChips(related)}</div>
                        <h3 style="margin-top: 28px;">Coding classes near your city</h3>
                        <div class="age-chip-row">${renderChips(cityChips)}</div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    ${CALLBACK_MODAL}
    ${FOOTER(cfg.slug, footerLinks)}
    ${FLOATING}
    <script src="/js/callback-modal.js" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var c = document.getElementById('copyright');
            if (c) c.textContent = '\\u00A9 ' + new Date().getFullYear() + ' Modern Age Coders. All rights reserved.';
        });
        (function(){
            var btn=document.getElementById('mobileMenuBtn');
            var menu=document.getElementById('navMenu');
            if(btn&&menu){btn.addEventListener('click',function(){menu.classList.toggle('active');btn.classList.toggle('active');});}
        })();
        function submitAgeLeadForm(e){
            e.preventDefault();
            var f=e.target;
            var data={name:f.parent_name.value,phone:f.phone.value,email:f.email.value,format:f.format.value,child_name:f.child_name.value,source:'${cfg.slug}',page:window.location.pathname};
            var api=(location.hostname==='localhost'||location.hostname==='127.0.0.1')?'http://localhost:5000':'https://backend-modernagecoders.vercel.app';
            fetch(api+'/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).catch(function(){});
            if(typeof gtag==='function'){gtag('event','generate_lead',{event_category:'age_grade_page',event_label:'${cfg.slug}',value:1});}
            f.innerHTML='<div style="padding:28px 8px;text-align:center;color:#f1f5f9;"><strong style="color:var(--age-accent);font-size:18px;">Request received.</strong><br><span style="color:#94a3b8;font-size:14px;">Our counsellor will call you within 3 hours.</span></div>';
            return false;
        }
    </script>
</body>
</html>
`;
}

/* ----------------------- run ----------------------- */

if (!fs.existsSync(OUT_DIR)) {
    console.error('Output dir missing:', OUT_DIR);
    process.exit(1);
}

let count = 0;
for (const cfg of pages) {
    const outPath = path.join(OUT_DIR, `${cfg.slug}.html`);
    if (cfg.slug === 'coding-for-10-year-olds' && !process.argv.includes('--force-10')) {
        console.log(`skip ${cfg.slug} (pilot, preserved)`);
        continue;
    }
    const html = render(cfg);
    fs.writeFileSync(outPath, html, 'utf8');
    console.log(`wrote ${outPath}`);
    count++;
}
console.log(`\nDone. Generated ${count} pages.`);
