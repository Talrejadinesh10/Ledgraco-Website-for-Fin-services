/* ── Ledgraco shared components ── */

const NAV_HTML = `
<nav>
  <a href="/index.html" class="nav-logo">Ledgraco<span>.</span></a>
  <ul class="nav-links" id="navLinks">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/cpa-firms.html">For CPA Firms</a></li>
    <li><a href="/services.html">Services</a></li>
    <li><a href="/about.html">About</a></li>
    <li><a href="/contact.html">Contact</a></li>
    <li><a href="/contact.html" class="nav-cta">Book a Call</a></li>
  </ul>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-brand">Ledgraco<span>.</span></div>
      <p class="footer-tagline">CA-led offshore accounting and audit support for CPA firms and international businesses. Headquartered in India. Serving clients in the US, UK, Australia, and Canada.</p>
      <div style="margin-top:16px; display:flex; gap:12px; flex-wrap:wrap;">
        <span style="background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.6); font-size:0.75rem; padding:5px 10px; border-radius:2px;">CA (ICAI)</span>
        <span style="background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.6); font-size:0.75rem; padding:5px 10px; border-radius:2px;">QuickBooks ProAdvisor L1 &amp; L2</span>
        <span style="background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.6); font-size:0.75rem; padding:5px 10px; border-radius:2px;">Xero Advisor Certified</span>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="/cpa-firms.html">CPA Firm Offshore Support</a></li>
        <li><a href="/services.html#audit">Audit Support</a></li>
        <li><a href="/services.html#bookkeeping">Bookkeeping</a></li>
        <li><a href="/services.html#reporting">Financial Reporting</a></li>
        <li><a href="/services.html#reconciliation">Reconciliations</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="/about.html">About Ledgraco</a></li>
        <li><a href="/about.html#founder">Meet the Founder</a></li>
        <li><a href="/contact.html">Contact Us</a></li>
        <li><a href="/privacy.html">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:dinesh@ledgraco.com">dinesh@ledgraco.com</a></li>
        <li><a href="tel:+918878900171">+91 88789 00171</a></li>
        <li><a href="https://linkedin.com/in/ca-dinesh-talreja-590598106" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="/contact.html">Book a Discovery Call</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Ledgraco. All rights reserved.</span>
    <span>
      <a href="/privacy.html">Privacy Policy</a> &nbsp;·&nbsp;
      <a href="/terms.html">Terms of Use</a>
    </span>
  </div>
</footer>`;

// Inject nav and footer
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Mobile toggle
  document.addEventListener('click', e => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && toggle.contains(e.target)) {
      links.classList.toggle('open');
    } else if (links && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path || 
        (path.includes(a.getAttribute('href')) && a.getAttribute('href') !== '/index.html')) {
      a.classList.add('active');
    }
  });
});
