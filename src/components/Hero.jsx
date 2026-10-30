import { ArrowDown, Award, Sparkles, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background with Ambient Overlay */}
      <div className="hero-bg-container">
        <img
          src="/images/hero.jpg"
          alt="Luxury architectural living room designed by Studio Mithun"
          className="hero-bg-image"
        />
        <div className="hero-overlay" />
        <div className="hero-radial-glow" />
      </div>

      <div className="container hero-content">
        {/* Editorial Badge */}
        <div className="hero-badge">
          <Award size={15} className="hero-badge-icon" />
          <span>Architectural Digest Excellence 2025 Nominee</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          Harmonizing <span className="gold-gradient-text italic-serif">Pure Light,</span>
          <br />Form & Tactile Materiality.
        </h1>

        {/* Hero Description */}
        <p className="hero-subtitle">
          Studio Mithun is an internationally acclaimed interior architecture practice.
          We sculpt bespoke private estates and boutique commercial sanctuaries that cultivate serenity,
          balance, and timeless elegance.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="btn-primary"
            id="hero-view-projects-btn"
          >
            <span>Explore Portfolio</span>
            <ArrowRight size={17} />
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-outline"
            id="hero-book-consult-btn"
          >
            <Sparkles size={16} />
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Quick Architectural Metrics Bar */}
        <div className="hero-metrics-bar">
          <div className="metric-item">
            <span className="metric-number">14<span className="metric-plus">+</span></span>
            <span className="metric-label">Years of Practice</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-number">180<span className="metric-plus">+</span></span>
            <span className="metric-label">Bespoke Residences</span>
          </div>
          {/* <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-number">28</span>
            <span className="metric-label">Design Awards</span>
          </div> */}
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-number">100<span className="metric-plus">%</span></span>
            <span className="metric-label">Artisan Sourced</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-cue">
          <a href="#expertise" aria-label="Scroll to Expertise">
            <span className="scroll-text">DISCOVER MORE</span>
            <div className="scroll-arrow-box">
              <ArrowDown size={14} className="bounce-arrow" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
