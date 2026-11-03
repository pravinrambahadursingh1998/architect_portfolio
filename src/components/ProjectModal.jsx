import { useEffect, useState } from 'react';
import { X, MapPin, Calendar, Maximize2, Award, Check, ArrowRight, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose, onSelectForInquiry }) {
  const images = project?.gallery && project.gallery.length > 0
    ? project.gallery
    : (project?.image ? [project.image] : []);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, images.length]);

  if (!project) return null;

  const currentImage = images[activeImageIndex] || project.image;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

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
            <div className="modal-main-image-wrap">
              <img 
                key={currentImage}
                src={currentImage} 
                alt={`${project.title} - View ${activeImageIndex + 1}`} 
                className="modal-main-image" 
              />

              {/* Prev / Next Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="modal-gallery-nav modal-nav-prev"
                    onClick={handlePrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    className="modal-gallery-nav modal-nav-next"
                    onClick={handleNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Image Counter Badge */}
              {images.length > 1 && (
                <div className="modal-gallery-counter">
                  <Layers size={13} />
                  <span>{activeImageIndex + 1} / {images.length} Perspectives</span>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="modal-thumbnails-strip">
                {images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`modal-thumb-item ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(idx);
                    }}
                    aria-label={`Switch to image ${idx + 1}`}
                  >
                    <img src={imgSrc} alt="" />
                    <span className="thumb-idx">{idx + 1}</span>
                  </button>
                ))}
              </div>
            )}

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
