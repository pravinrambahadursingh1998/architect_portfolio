import { useState } from 'react';
import { EXPERTISE_DATA, PROCESS_STEPS } from '../data/portfolioData';
import { 
  Building2, 
  Home, 
  Sparkles, 
  Lightbulb, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Hammer,
  ArrowRight
} from 'lucide-react';
import './Expertise.css';

export default function Expertise() {
  const [activeTab, setActiveTab] = useState('disciplines');
  const [selectedExpertise, setSelectedExpertise] = useState(EXPERTISE_DATA[0].id);

  const getIcon = (id) => {
    switch (id) {
      case 'residential':
        return <Home size={26} className="expertise-card-icon" />;
      case 'commercial':
        return <Building2 size={26} className="expertise-card-icon" />;
      case 'craftsmanship':
        return <Hammer size={26} className="expertise-card-icon" />;
      case 'lighting':
        return <Lightbulb size={26} className="expertise-card-icon" />;
      case 'turnkey':
        return <ShieldCheck size={26} className="expertise-card-icon" />;
      default:
        return <Sparkles size={26} className="expertise-card-icon" />;
    }
  };

  return (
    <section id="expertise" className="section-padding expertise-section">
      <div className="container">
        {/* Section Header */}
        <div className="expertise-header">
          <div className="section-label">Expertise & Disciplines</div>
          <h2 className="section-title">
            Architectural Precision Meets <span className="gold-gradient-text italic-serif">Sensory Warmth</span>
          </h2>
          <p className="section-desc">
            We don't merely decorate rooms — we sculpt the spatial volumes, acoustics, light play, 
            and material chemistry to create harmonious environments tailored to how you live and think.
          </p>

          {/* Sub-navigation Tabs */}
          <div className="expertise-tab-nav">
            <button
              type="button"
              id="expertise-tab-disciplines"
              className={`expertise-tab-btn ${activeTab === 'disciplines' ? 'active' : ''}`}
              onClick={() => setActiveTab('disciplines')}
            >
              <Layers size={16} />
              <span>Core Disciplines</span>
            </button>
            <button
              type="button"
              id="expertise-tab-process"
              className={`expertise-tab-btn ${activeTab === 'process' ? 'active' : ''}`}
              onClick={() => setActiveTab('process')}
            >
              <Compass size={16} />
              <span>The 4-Step Process</span>
            </button>
            <button
              type="button"
              id="expertise-tab-materials"
              className={`expertise-tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
              onClick={() => setActiveTab('materials')}
            >
              <Sparkles size={16} />
              <span>Material Philosophy</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Core Disciplines */}
        {activeTab === 'disciplines' && (
          <div className="disciplines-grid">
            {EXPERTISE_DATA.map((item) => (
              <div 
                key={item.id} 
                className={`expertise-card ${selectedExpertise === item.id ? 'highlighted' : ''}`}
                onClick={() => setSelectedExpertise(item.id)}
              >
                <div className="card-top-row">
                  <span className="card-number">{item.number}</span>
                  <div className="icon-wrapper">
                    {getIcon(item.id)}
                  </div>
                </div>

                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>

                <div className="card-highlights">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="highlight-pill">
                      <CheckCircle2 size={13} className="pill-check" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <span className="card-stat">{item.stats}</span>
                  <a href="#contact" className="card-action-link">
                    <span>Inquire</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: The 4-Step Process */}
        {activeTab === 'process' && (
          <div className="process-container">
            <div className="process-timeline">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.step} className="process-card">
                  <div className="process-step-header">
                    <span className="process-badge">Phase {step.step}</span>
                    <span className="process-step-index">0{idx + 1}</span>
                  </div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                  <div className="process-card-accent" />
                </div>
              ))}
            </div>
            
            <div className="process-banner">
              <div className="banner-content">
                <h4>Experience our seamless white-glove turnkey delivery</h4>
                <p>From architectural permits to the final art placement, your dedicated partner oversees every micron.</p>
              </div>
              <a href="#contact" className="btn-primary">Start Your Journey</a>
            </div>
          </div>
        )}

        {/* Tab 3: Material Philosophy */}
        {activeTab === 'materials' && (
          <div className="materials-showcase">
            <div className="materials-text-col">
              <span className="sub-tag">TACTILE LUXURY</span>
              <h3>Materials That Age Gracefully With Time</h3>
              <p>
                We reject artificial veneers and synthetic imitations. Studio Mithun sources raw Roman Travertine, 
                quarter-sawn American Walnut, hand-cast bronze, and unbleached Belgian linens. 
                These elements develop an irreplaceable natural patina that deepens with character every decade.
              </p>
              <div className="material-palette-list">
                <div className="palette-item">
                  <span className="palette-color-swatch swatch-travertine" />
                  <div>
                    <strong>Roman Silver Travertine</strong>
                    <span>Vein-cut, unfilled tactile matte finish</span>
                  </div>
                </div>
                <div className="palette-item">
                  <span className="palette-color-swatch swatch-walnut" />
                  <div>
                    <strong>Smoked European Oak</strong>
                    <span>Organic oil treated, open-grain warmth</span>
                  </div>
                </div>
                <div className="palette-item">
                  <span className="palette-color-swatch swatch-brass" />
                  <div>
                    <strong>Antiqued Brushed Brass</strong>
                    <span>Living wax patina, non-lacquered</span>
                  </div>
                </div>
                <div className="palette-item">
                  <span className="palette-color-swatch swatch-linen" />
                  <div>
                    <strong>Woven Natural Bouclé & Linen</strong>
                    <span>Tactile comfort, acoustic dampening</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="materials-visual-col">
              <div className="material-image-frame">
                <img 
                  src="/images/dining.jpg" 
                  alt="Materials and craftsmanship in kitchen design"
                  className="material-showcase-img"
                />
                <div className="material-floating-caption">
                  <strong>Calacatta Viola & Dark Oak Island</strong>
                  <span>Handcrafted in London Atelier</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
