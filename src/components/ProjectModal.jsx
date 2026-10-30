import { useEffect } from 'react';
import { X, MapPin, Calendar, Maximize2, Award, Check, ArrowRight } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose, onSelectForInquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Layout */}
        <div className="modal-grid">
          {/* Visual Column */}
          <div className="modal-image-col">
            <img 
              src={project.image} 
              alt={project.title} 
              className="modal-main-image" 
            />
            {project.awards && (
              <div className="modal-award-badge">
                <Award size={16} />
                <span>{project.awards}</span>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="modal-details-col">
            <div className="modal-header-meta">
              <span className="modal-category-tag">{project.categoryLabel}</span>
              <span className="modal-year">{project.year}</span>
            </div>

            <h2 className="modal-title">{project.title}</h2>

            <div className="modal-specs-strip">
              <div className="spec-badge">
                <MapPin size={15} />
                <span>{project.location}</span>
              </div>
              <div className="spec-badge">
                <Maximize2 size={15} />
                <span>{project.area}</span>
              </div>
              <div className="spec-badge">
                <Calendar size={15} />
                <span>Completed {project.year}</span>
              </div>
            </div>

            <p className="modal-description">{project.description}</p>

            {/* Architectural Materials Used */}
            <div className="modal-section-group">
              <h4 className="group-heading">Curated Material Palette</h4>
              <div className="modal-materials-tags">
                {project.materials.map((mat, i) => (
                  <span key={i} className="mat-tag">{mat}</span>
                ))}
              </div>
            </div>

            {/* Salient Features */}
            <div className="modal-section-group">
              <h4 className="group-heading">Architectural Engineering</h4>
              <div className="modal-features-list">
                {project.features.map((feat, i) => (
                  <div key={i} className="feature-item">
                    <Check size={14} className="feature-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="modal-cta-box">
              <button
                type="button"
                className="btn-primary modal-action-btn"
                onClick={() => {
                  onSelectForInquiry(project.title);
                  onClose();
                }}
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
