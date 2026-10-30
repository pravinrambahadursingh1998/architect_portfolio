import { ArrowUp, Compass, Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';
import './Footer.css';

const ENQUIRY_EMAIL = 'pravinrambahadursingh1998@gmail.com';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Footer Banner */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <Compass size={24} className="footer-logo-icon" />
              <span className="footer-logo-title">STUDIO MITHUN</span>
            </div>
            <p className="footer-desc">
              Bespoke interior architecture, residential sanctuaries, and boutique commercial
              atmospheres sculpted with timeless precision, noble stone, and ambient light.
            </p>
            <div className="footer-direct-enquiry">
              <span className="footer-enquiry-label">Private Inquiries & Briefs:</span>
              <a href={`mailto:${ENQUIRY_EMAIL}`} className="footer-email-link" title="Send direct inquiry">
                <Mail size={14} className="footer-email-icon" />
                <span>{ENQUIRY_EMAIL}</span>
              </a>
            </div>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-col-title">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#projects">Selected Works</a></li>
              <li><a href="#team">The Team</a></li>
              <li><a href="#contact">Private Consultation</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-col-title">Typologies</h5>
            <ul className="footer-links">
              <li><a href="#projects">Private Estates</a></li>
              <li><a href="#projects">Urban Penthouses</a></li>
              <li><a href="#projects">Culinary & Dining Suites</a></li>
              <li><a href="#projects">Executive Workspaces</a></li>
              <li><a href="#expertise">Artisan Millwork</a></li>
            </ul>
          </div>

          <div className="footer-newsletter-col">
            <h5 className="footer-col-title">The Architectural Journal</h5>
            <p className="newsletter-text">
              Quarterly private dispatches on architectural trends, quarry discoveries, and spatial philosophy.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to our journal.'); }} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter private email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit">Join</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Studio Mithun Architectural Interiors. All Rights Reserved.
          </p>

          <div className="legal-links">
            <a href="#privacy">Privacy Protocol</a>
            <span className="dot-sep">&bull;</span>
            <a href="#terms">Terms of Engagement</a>
            <span className="dot-sep">&bull;</span>
            <a href="#atelier">Global Ateliers</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
