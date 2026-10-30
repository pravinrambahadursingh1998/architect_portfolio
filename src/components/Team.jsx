import { TEAM_MEMBERS } from '../data/portfolioData';
import { ArrowUpRight, Award, Compass, HeartHandshake } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './Icons';
import './Team.css';

export default function Team() {
  return (
    <section id="team" className="section-padding team-section">
      <div className="container">
        {/* Section Header */}
        <div className="team-header">
          <div className="section-label">The Visionaries</div>
          <h2 className="section-title">
            The Minds Behind <span className="gold-gradient-text italic-serif">Studio Mithun</span>
          </h2>
          <p className="section-desc">
            We are architects, interior sculptors, and material alchemists united by a shared obsession 
            with proportion, light, and timeless artisan craft.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-image-frame">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-photo"
                  loading="lazy"
                />
                <div className="team-photo-overlay" />
                <div className="team-specialty-badge">
                  {member.specialty}
                </div>
              </div>

              <div className="team-info">
                <div className="team-name-row">
                  <div>
                    <h3 className="team-member-name">{member.name}</h3>
                    <span className="team-member-role">{member.role}</span>
                  </div>
                  <div className="team-social-links">
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`${member.name} Instagram`}
                      className="team-social-btn"
                    >
                      <InstagramIcon size={16} />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`${member.name} LinkedIn`}
                      className="team-social-btn"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>

                <p className="team-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy Values */}
        <div className="studio-values-bar">
          <div className="value-card">
            <div className="value-icon-box">
              <Award size={22} />
            </div>
            <h4>Architectural Rigor</h4>
            <p>Every interior line is mathematically aligned with the building’s structural bone structure.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-box">
              <Compass size={22} />
            </div>
            <h4>Rare Material Ethics</h4>
            <p>We source directly from heritage quarries and sustainable European timber forests.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-box">
              <HeartHandshake size={22} />
            </div>
            <h4>Direct Principal Attention</h4>
            <p>Mithun and our partners personally supervise every phase of client commissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
