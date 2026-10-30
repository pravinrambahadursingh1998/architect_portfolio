import { useState, useEffect } from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle,
  Inbox
} from 'lucide-react';
import './Contact.css';

export const ENQUIRY_EMAIL = 'pravinrambahadursingh1998@gmail.com';
export const STUDIO_PHONE = '+919820144810';

export const generateMailtoLink = (email, data) => {
  const subject = encodeURIComponent(
    `Design Consultation Inquiry: ${data.projectType || 'Interior Architecture'} - ${data.name || 'Patron'}`
  );
  const body = encodeURIComponent(
`Studio Mithun Architectural Consultation Brief:

Patron Name: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
Phone / WhatsApp: ${data.phone || 'N/A'}
Project Typology: ${data.projectType || 'N/A'}
Target Investment: ${data.budget || 'N/A'}
Spatial Footprint / Scope: ${data.scope || 'N/A'}

Spatial Vision & Notes:
${data.message || 'No additional notes provided.'}

--------------------------------------------------
Sent via Studio Mithun Architectural Interiors Web Portal
Direct Routing: ${email}`
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
};

export const generateGmailLink = (email, data) => {
  const subject = encodeURIComponent(
    `Design Consultation Inquiry: ${data.projectType || 'Interior Architecture'} - ${data.name || 'Patron'}`
  );
  const body = encodeURIComponent(
`Studio Mithun Architectural Consultation Brief:

Patron Name: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
Phone / WhatsApp: ${data.phone || 'N/A'}
Project Typology: ${data.projectType || 'N/A'}
Target Investment: ${data.budget || 'N/A'}
Spatial Footprint / Scope: ${data.scope || 'N/A'}

Spatial Vision & Notes:
${data.message || 'No additional notes provided.'}

--------------------------------------------------
Sent via Studio Mithun Architectural Interiors Web Portal
To: ${email}`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
};

export const generateWhatsAppLink = (phone, data) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(
`*Studio Mithun Architectural Inquiry*
Patron: ${data.name || 'N/A'}
Email: ${data.email || 'N/A'}
Phone: ${data.phone || 'N/A'}
Typology: ${data.projectType || 'N/A'}
Budget: ${data.budget || 'N/A'}
Scope: ${data.scope || 'N/A'}

Notes: ${data.message || 'N/A'}`
  );
  return `https://wa.me/${cleanPhone}?text=${text}`;
};

export default function Contact({ prefilledProject, prefilledScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Private Residence',
    budget: '$150k – $300k',
    scope: prefilledScope || (prefilledProject ? `Interested in similar design as ${prefilledProject}` : ''),
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({ ...prev, scope: prefilledScope }));
    } else if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        scope: `Interested in similar design as ${prefilledProject}`
      }));
    }
  }, [prefilledProject, prefilledScope]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(key);
      setTimeout(() => setCopiedText(null), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Prepare FormSubmit body
    const formBody = new URLSearchParams();
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('phone', formData.phone || 'Not provided');
    formBody.append('projectType', formData.projectType);
    formBody.append('budget', formData.budget);
    formBody.append('scope', formData.scope || 'Not specified');
    formBody.append('message', formData.message || 'No additional notes');
    formBody.append('_subject', `New Interior Brief: ${formData.projectType} (${formData.name})`);
    formBody.append('_replyto', formData.email);
    formBody.append('_captcha', 'false');
    formBody.append('_template', 'table');

    // 2. Background attempt to FormSubmit
    try {
      await fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: formBody.toString()
      });
    } catch (err) {
      console.warn('FormSubmit background notification attempt:', err);
    }

    // 3. Automatically launch Gmail compose or mailto so it sends immediately
    const gmailUrl = generateGmailLink(ENQUIRY_EMAIL, formData);
    try {
      const opened = window.open(gmailUrl, '_blank');
      if (!opened) {
        window.location.href = generateMailtoLink(ENQUIRY_EMAIL, formData);
      }
    } catch {
      window.location.href = generateMailtoLink(ENQUIRY_EMAIL, formData);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const copyBriefText = () => {
    const brief = `Studio Mithun Architectural Consultation Brief:
Patron: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Project Typology: ${formData.projectType}
Target Investment: ${formData.budget}
Spatial Scope: ${formData.scope || 'N/A'}
Spatial Vision: ${formData.message || 'N/A'}

Direct Recipient: ${ENQUIRY_EMAIL}`;
    copyToClipboard(brief, 'brief');
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="section-label">Initiate Consultation</div>
          <h2 className="section-title">
            Begin Your <span className="gold-gradient-text italic-serif">Architectural Journey</span>
          </h2>
          <p className="section-desc">
            We invite prospective patrons to discuss new architectural commissions and bespoke interior transformations.
            Our principals review all confidential inquiries directly at <strong className="gold-text-highlight">{ENQUIRY_EMAIL}</strong>.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form Column */}
          <div className="contact-form-card">
            {isSuccess ? (
              <div className="submission-success-state">
                <div className="success-icon-box">
                  <CheckCircle size={44} className="success-icon" />
                </div>
                <h3>Inquiry Prepared & Routed</h3>
                <p>
                  Thank you, <strong>{formData.name || 'valued patron'}</strong>. Your brief regarding{' '}
                  <strong>{formData.projectType}</strong> is routed directly to{' '}
                  <span className="gold-text-highlight">{ENQUIRY_EMAIL}</span>.
                </p>

                {/* Instant Send Action Hub */}
                <div className="instant-send-hub">
                  <div className="hub-header">
                    <Inbox size={18} className="hub-icon" />
                    <strong>Send / Confirm Your Brief Instantly:</strong>
                  </div>
                  
                  <div className="hub-buttons-grid">
                    <a
                      href={generateGmailLink(ENQUIRY_EMAIL, formData)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary hub-btn hub-btn-gmail"
                    >
                      <Mail size={16} />
                      <span>Send via Gmail (Web)</span>
                      <ExternalLink size={13} />
                    </a>

                    <a
                      href={generateMailtoLink(ENQUIRY_EMAIL, formData)}
                      className="btn-outline hub-btn hub-btn-mail"
                    >
                      <Mail size={16} />
                      <span>Send via Default Mail App</span>
                    </a>

                    <a
                      href={generateWhatsAppLink(STUDIO_PHONE, formData)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline hub-btn hub-btn-whatsapp"
                    >
                      <MessageSquare size={16} />
                      <span>Send via WhatsApp</span>
                      <ExternalLink size={13} />
                    </a>

                    <button
                      type="button"
                      className="btn-outline hub-btn hub-btn-copy"
                      onClick={copyBriefText}
                    >
                      {copiedText === 'brief' ? <Check size={16} /> : <Copy size={16} />}
                      <span>{copiedText === 'brief' ? 'Brief Copied!' : 'Copy Full Brief Text'}</span>
                    </button>
                  </div>
                </div>

                {/* FormSubmit Activation Notice for Pravin */}
                <div className="activation-notice-card">
                  <AlertCircle size={20} className="activation-alert-icon" />
                  <div>
                    <strong>For Site Owner ({ENQUIRY_EMAIL}):</strong>
                    <p>
                      If you haven't done so yet, please check your <strong>Gmail Inbox & Spam folder</strong> for 
                      an email from <em>FormSubmit (support@formsubmit.co)</em> and click <strong>"Activate Form"</strong>. 
                      Once confirmed, web submissions will automatically forward to your inbox without needing an email app!
                    </p>
                  </div>
                </div>

                {/* Transmitted Brief Summary */}
                <div className="inquiry-summary-preview">
                  <div className="summary-preview-title">
                    <ShieldCheck size={16} className="summary-shield-icon" />
                    <span>Transmitted Brief Details</span>
                  </div>
                  <div className="summary-preview-grid">
                    <div className="summary-row">
                      <span className="summary-label">Patron:</span>
                      <span className="summary-val">{formData.name} ({formData.email})</span>
                    </div>
                    {formData.phone && (
                      <div className="summary-row">
                        <span className="summary-label">Phone:</span>
                        <span className="summary-val">{formData.phone}</span>
                      </div>
                    )}
                    <div className="summary-row">
                      <span className="summary-label">Typology:</span>
                      <span className="summary-val">{formData.projectType}</span>
                    </div>
                    <div className="summary-row">
                      <span className="summary-label">Investment:</span>
                      <span className="summary-val">{formData.budget}</span>
                    </div>
                    {formData.scope && (
                      <div className="summary-row">
                        <span className="summary-label">Scope:</span>
                        <span className="summary-val">{formData.scope}</span>
                      </div>
                    )}
                    {formData.message && (
                      <div className="summary-row">
                        <span className="summary-label">Notes:</span>
                        <span className="summary-val">"{formData.message}"</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-outline reset-form-btn"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: 'Private Residence',
                      budget: '$150k – $300k',
                      scope: '',
                      message: ''
                    });
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form" id="consultation-form">
                <div className="form-row-2">
                  <div className="input-group">
                    <label htmlFor="name" className="input-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Lord Alexander Wright"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email" className="input-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. alexander@residence.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="input-group">
                    <label htmlFor="phone" className="input-label">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 98201 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="projectType" className="input-label">Project Typology</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Private Residence">Private Residence / Villa</option>
                      <option value="Urban Penthouse">Urban Penthouse</option>
                      <option value="Kitchen & Culinary Suite">Kitchen & Dining Sanctuary</option>
                      <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                      <option value="Boutique Commercial / Office">Boutique Commercial / Office</option>
                      <option value="Custom Millwork & Art Curation">Custom Millwork & Art Curation</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="input-group">
                    <label htmlFor="budget" className="input-label">Target Investment Tier</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="$75k – $150k">$75k – $150k</option>
                      <option value="$150k – $300k">$150k – $300k</option>
                      <option value="$300k – $600k">$300k – $600k</option>
                      <option value="$600k+">$600k+ (Haute Architecture)</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="scope" className="input-label">Spatial Footprint / Scope</label>
                    <input
                      type="text"
                      id="scope"
                      name="scope"
                      placeholder="e.g. 4,500 sq.ft. / 4 Bedroom Villa"
                      value={formData.scope}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="message" className="input-label">Spatial Vision & Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about the property, architectural goals, timeline, and preferred materiality..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <div className="form-submit-footer">
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="btn-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Opening Secure Mail Dispatch...</span>
                    ) : (
                      <>
                        <span>Transmit Private Brief</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <div className="form-routing-notice">
                    <Mail size={14} className="notice-icon" />
                    <span>
                      Every enquiry is securely dispatched to <strong>{ENQUIRY_EMAIL}</strong>
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Studio Details Column */}
          <div className="contact-details-col">
            {/* Atelier Visiting Card */}
            <div className="atelier-visiting-card">
              <div className="card-glint" />
              <div className="card-top">
                <span className="card-brand">STUDIO MITHUN</span>
                <span className="card-badge">BY APPOINTMENT</span>
              </div>
              <h4 className="card-tagline">Principal Architectural Atelier</h4>

              <div className="contact-info-list">
                <div className="info-row">
                  <div className="info-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong>Studio Atelier</strong>
                    <p>104 Atelier Boulevard, Design District, CA 90210</p>
                    <button
                      type="button"
                      className="copy-snippet-btn"
                      onClick={() => copyToClipboard('104 Atelier Boulevard, Design District, CA 90210', 'address')}
                    >
                      {copiedText === 'address' ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copiedText === 'address' ? 'Copied' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong>Direct Inquiries to Pravin</strong>
                    <p className="email-display-row">
                      <a 
                        href={`mailto:${ENQUIRY_EMAIL}`} 
                        className="atelier-email-link"
                        title="Click to compose email"
                      >
                        {ENQUIRY_EMAIL}
                      </a>
                    </p>
                    <div className="card-action-links">
                      <a 
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${ENQUIRY_EMAIL}&su=Interior%20Design%20Consultation`}
                        target="_blank"
                        rel="noreferrer"
                        className="quick-link-btn"
                      >
                        <ExternalLink size={11} />
                        <span>Open in Gmail</span>
                      </a>
                      <button
                        type="button"
                        className="copy-snippet-btn"
                        onClick={() => copyToClipboard(ENQUIRY_EMAIL, 'email')}
                      >
                        {copiedText === 'email' ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedText === 'email' ? 'Copied' : 'Copy Email'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong>Direct Concierge</strong>
                    <p>+91 98201 44810 / +1 (555) 742-8900</p>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong>Studio Hours</strong>
                    <p>Mon – Fri: 9:00 AM – 6:30 PM (IST / PST)</p>
                    <span>Saturday: Private Client Walkthroughs Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp / Chat Note */}
            <div className="direct-chat-prompt">
              <MessageSquare size={22} className="chat-prompt-icon" />
              <div>
                <h5>Prefer Instant Discretion?</h5>
                <p>Connect with our client liaison directly via encrypted WhatsApp concierge.</p>
                <a 
                  href="https://wa.me/919820144810" 
                  target="_blank" 
                  rel="noreferrer"
                  className="chat-link"
                >
                  Open WhatsApp Concierge &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
