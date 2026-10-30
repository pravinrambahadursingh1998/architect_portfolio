import { useState } from 'react';
import { TESTIMONIALS, PRESS_LOGOS } from '../data/portfolioData';
import { Quote, Calculator, Clock, Sparkles, Check, ArrowRight, Star } from 'lucide-react';
import './EstimatorAndReviews.css';

export default function EstimatorAndReviews({ onEstimateApply }) {
  const [projectType, setProjectType] = useState('residence');
  const [areaSqFt, setAreaSqFt] = useState(3500);
  const [finishLevel, setFinishLevel] = useState('bespoke');

  // Interactive estimates calculations
  const calculateTimelineMonths = () => {
    let base = finishLevel === 'bespoke' ? 7 : finishLevel === 'couture' ? 10 : 5;
    if (areaSqFt > 5000) base += 3;
    if (areaSqFt > 10000) base += 4;
    return `${base} – ${base + 3} Months`;
  };

  const getTierDescription = () => {
    if (finishLevel === 'couture') {
      return 'Full architectural demolition, rare book-matched stone slabs, bespoke master artisan millwork, and museum-grade lighting controls.';
    } else if (finishLevel === 'bespoke') {
      return 'Complete interior spatial redesign, tailored walnut cabinetry, fluted stone accents, and smart architectural ambient lighting.';
    } else {
      return 'Spatial flow enhancement, curated luxury furnishings, lighting overhaul, and signature surface wall finishes.';
    }
  };

  const handleApplyToContact = () => {
    const summary = `${projectType.toUpperCase()} (~${areaSqFt.toLocaleString()} sq.ft. / ${finishLevel.toUpperCase()} Tier)`;
    onEstimateApply(summary);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding estimator-reviews-section">
      <div className="container">
        {/* Press Badges Strip */}
        <div className="press-strip">
          <span className="press-label">FEATURED & ACCLAIMED BY</span>
          <div className="press-logos">
            {PRESS_LOGOS.map((press, i) => (
              <span key={i} className="press-item">{press}</span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-wrap">
          <div className="section-header-centered">
            <div className="section-label">Client Accolades</div>
            <h2 className="section-title">
              Endorsements of <span className="gold-gradient-text italic-serif">Excellence</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="test-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="star-filled" />
                  ))}
                </div>
                <Quote size={28} className="quote-icon" />
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author-block">
                  <strong>{t.author}</strong>
                  <span>{t.role} — <em>{t.location}</em></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scope & Timeline Estimator */}
        <div className="estimator-box" id="project-estimator">
          <div className="estimator-left">
            <div className="estimator-badge">
              <Calculator size={15} />
              <span>Interactive Spatial Planning Calculator</span>
            </div>
            <h3>Estimate Your Project Horizon</h3>
            <p>
              Adjust your spatial requirements below to discover anticipated timeline horizons and 
              architectural craftsmanship tiers.
            </p>

            {/* Controls */}
            <div className="estimator-controls">
              {/* Type */}
              <div className="control-group">
                <label className="control-label">Project Typology</label>
                <div className="type-buttons">
                  <button
                    type="button"
                    className={`type-btn ${projectType === 'residence' ? 'active' : ''}`}
                    onClick={() => setProjectType('residence')}
                  >
                    Private Villa / Estate
                  </button>
                  <button
                    type="button"
                    className={`type-btn ${projectType === 'penthouse' ? 'active' : ''}`}
                    onClick={() => setProjectType('penthouse')}
                  >
                    Urban Penthouse
                  </button>
                  <button
                    type="button"
                    className={`type-btn ${projectType === 'commercial' ? 'active' : ''}`}
                    onClick={() => setProjectType('commercial')}
                  >
                    Boutique Commercial
                  </button>
                </div>
              </div>

              {/* Area Slider */}
              <div className="control-group">
                <div className="slider-label-row">
                  <label className="control-label">Total Footprint</label>
                  <span className="slider-value">{areaSqFt.toLocaleString()} sq.ft.</span>
                </div>
                <input
                  type="range"
                  min="1200"
                  max="15000"
                  step="200"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="range-slider"
                  id="area-range-slider"
                />
                <div className="slider-ticks">
                  <span>1,200 sq.ft.</span>
                  <span>7,500 sq.ft.</span>
                  <span>15,000+ sq.ft.</span>
                </div>
              </div>

              {/* Finish Level */}
              <div className="control-group">
                <label className="control-label">Craftsmanship Specification</label>
                <div className="finish-buttons">
                  <button
                    type="button"
                    className={`finish-btn ${finishLevel === 'curated' ? 'active' : ''}`}
                    onClick={() => setFinishLevel('curated')}
                  >
                    Signature
                  </button>
                  <button
                    type="button"
                    className={`finish-btn ${finishLevel === 'bespoke' ? 'active' : ''}`}
                    onClick={() => setFinishLevel('bespoke')}
                  >
                    Bespoke Luxury
                  </button>
                  <button
                    type="button"
                    className={`finish-btn ${finishLevel === 'couture' ? 'active' : ''}`}
                    onClick={() => setFinishLevel('couture')}
                  >
                    Haute Architecture
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Estimator Summary Output Card */}
          <div className="estimator-output-card">
            <div className="output-header">
              <span className="output-tag">Anticipated Scope</span>
              <div className="output-timeline-badge">
                <Clock size={16} />
                <span>{calculateTimelineMonths()}</span>
              </div>
            </div>

            <div className="output-tier-title">
              {finishLevel === 'couture' 
                ? 'Haute Architecture & Quarry Selection' 
                : finishLevel === 'bespoke'
                ? 'Bespoke Turnkey Interior Architecture'
                : 'Signature Spatial Refinement'}
            </div>

            <p className="output-tier-desc">{getTierDescription()}</p>

            <div className="output-includes-list">
              <div className="include-item">
                <Check size={14} className="include-check" />
                <span>Dedicated Principal Partner Overseeing</span>
              </div>
              <div className="include-item">
                <Check size={14} className="include-check" />
                <span>Photorealistic 3D Spatial Walkthroughs</span>
              </div>
              <div className="include-item">
                <Check size={14} className="include-check" />
                <span>Custom Millwork & Lighting Engineering</span>
              </div>
              <div className="include-item">
                <Check size={14} className="include-check" />
                <span>Turnkey White-Glove Installation</span>
              </div>
            </div>

            <button
              type="button"
              id="apply-estimator-to-contact-btn"
              className="btn-primary apply-estimate-btn"
              onClick={handleApplyToContact}
            >
              <span>Transfer to Consultation Form</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
