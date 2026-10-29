import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  CheckCircle2,
  ShieldCheck,
  CalendarCheck,
  Phone,
  Sparkles,
} from "lucide-react";
import "./ServiceModal.css";

function ServiceModal({ service, onClose }) {
  // Close on Escape key and prevent background body scrolling
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  const Icon = service.icon;

  const modalContent = (
    <div
      className="service-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="service-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="service-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="service-modal-header">
          {Icon && (
            <div className="service-modal-icon-badge">
              <Icon size={26} />
            </div>
          )}
          <div>
            {service.tagline && (
              <span className="service-modal-tagline">
                {service.tagline}
              </span>
            )}
            <h2 id="modal-service-title" className="service-modal-title">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="service-modal-body">
          {/* Main Description */}
          <p className="service-modal-lead">
            {service.detailedDescription || service.description}
          </p>

          {/* Key Features & Highlights */}
          {service.features && service.features.length > 0 && (
            <div className="service-modal-section">
              <h3 className="service-modal-section-title">
                <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                Key Features & Highlights
              </h3>
              <ul className="service-modal-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="service-modal-bullet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="service-modal-section">
              <h3 className="service-modal-section-title">
                <ShieldCheck size={18} className="text-amber-500 shrink-0" />
                Why Choose This Service
              </h3>
              <ul className="service-modal-list">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="service-modal-bullet" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suitable Use Cases */}
          {service.useCases && (
            <div className="service-modal-info-box">
              <span className="service-modal-info-label">
                <Sparkles size={16} className="text-amber-600 shrink-0" />
                Ideal For:
              </span>
              <p className="service-modal-info-text">{service.useCases}</p>
            </div>
          )}

          {/* Booking & Tariff Details */}
          {service.bookingDetails && (
            <div className="service-modal-info-box booking-box">
              <span className="service-modal-info-label">
                <CalendarCheck size={16} className="text-amber-600 shrink-0" />
                Booking & Rates:
              </span>
              <p className="service-modal-info-text">{service.bookingDetails}</p>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="service-modal-footer">
          <button
            type="button"
            className="service-modal-btn service-modal-btn-secondary"
            onClick={onClose}
          >
            Close
          </button>

          <a
            href="tel:+91 7358559444"
            className="service-modal-btn service-modal-btn-call"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="service-modal-btn service-modal-btn-primary"
          >
            <CalendarCheck size={17} />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default ServiceModal;
