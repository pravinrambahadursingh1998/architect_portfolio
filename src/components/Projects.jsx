import { useState } from 'react';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, MapPin, Maximize2, Sparkles, Filter } from 'lucide-react';
import './Projects.css';

export default function Projects({ onSelectProjectForInquiry }) {
  const [filter, setFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = PROJECT_CATEGORIES;

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header-row">
          <div>
            <div className="section-label">Selected Works</div>
            <h2 className="section-title">
              Curated <span className="gold-gradient-text italic-serif">Living Sanctuaries</span>
            </h2>
            <p className="section-desc">
              Explore our portfolio of award-winning architectural interiors. Each commission is an
              unrepeatable exploration of form, acoustic harmony, and artisan materiality.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-pill-container">
            <span className="filter-icon-label"><Filter size={14} /> Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`filter-btn-${cat.id}`}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card ${idx === 0 && filter === 'all' ? 'featured-card' : ''}`}
              onClick={() => setActiveModalProject(project)}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                  loading="lazy"
                />
                <div className="project-card-overlay" />

                {/* Top Badge */}
                <div className="project-category-badge">
                  {project.categoryLabel}
                </div>

                {/* Hover Reveal Button */}
                <div className="project-view-action">
                  <span className="view-text">Explore Case Study</span>
                  <div className="view-icon-circle">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="project-card-info">
                <div className="project-meta-line">
                  <span className="project-loc">
                    <MapPin size={13} />
                    {project.location}
                  </span>
                  <span className="project-sqft">
                    <Maximize2 size={13} />
                    {project.area}
                  </span>
                  <span className="project-year-badge">{project.year}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-excerpt">{project.excerpt}</p>

                <div className="project-card-materials-preview">
                  {project.materials.slice(0, 3).map((m, i) => (
                    <span key={i} className="mini-mat-tag">{m}</span>
                  ))}
                  {project.materials.length > 3 && (
                    <span className="mini-mat-tag">+{project.materials.length - 3}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="portfolio-custom-cta">
          <div className="cta-inner">
            <div className="cta-text">
              <Sparkles size={24} className="cta-sparkle" />
              <div>
                <h4>Have a unique architectural estate or penthouse in mind?</h4>
                <p>We accept a limited number of private residential and commercial commissions annually.</p>
              </div>
            </div>
            <a href="#contact" className="btn-primary" id="portfolio-inquire-btn">
              Commission Studio Mithun
            </a>
          </div>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onSelectForInquiry={onSelectProjectForInquiry}
        />
      )}
    </section>
  );
}
