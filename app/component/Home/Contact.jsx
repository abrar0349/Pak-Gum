import "./Contact.css";
import Image from '@/app/Images/Contact.jpg' // Apni zaroorat ke mutabiq image path adjust kar lein

export default function Contact() {
  return (
    <main className="pg-section">
      <section className="pg-contact">

        {/* Left Side: Contact Image or Info Card */}
        <div className="pg-contact-img-box">
          <img
            src={Image.src}
            alt="Contact Pakistan Gum Industries"
          />

          <div className="pg-quick-badge">
            <span className="pg-year-icon">✉</span>
            <div>
              <small>Get in touch with</small>
              <strong>PGI Support</strong>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Text & Details */}
        <div className="pg-contact-text">
          <span className="pg-label">GET IN TOUCH</span>

          <h2>We are here for your inquiries.</h2>

          <p className="pg-description">
            Pakistan Gum Industries (Pvt.) Ltd. is dedicated to providing high-quality guar products and excellent customer service. Reach out to us through the details below for business inquiries or support.
          </p>

          <div className="pg-contact-info-list">
            
            {/* Address */}
            <div className="pg-info-item">
              <span className="pg-icon">📍</span>
              <div>
                <strong>Head Office Address</strong>
                <small>B/30, Estate Avenue, S.I.T.E., Karachi-75700, Pakistan</small>
              </div>
            </div>

            {/* Phone */}
            <div className="pg-info-item">
              <span className="pg-icon">📞</span>
              <div>
                <strong>Phone Numbers</strong>
                <small>+92-21-37130671-4, 32570172-3, +92-21-32574311-2</small>
              </div>
            </div>

            {/* Email & Fax */}
            <div className="pg-info-item">
              <span className="pg-icon">✉</span>
              <div>
                <strong>Email & Fax</strong>
                <small>Email: inquiries@pakgum.com<br />Fax: +92-21-32561325, 32561315</small>
              </div>
            </div>

          </div>

          <a href="mailto:inquiries@pakgum.com" className="pg-button">
            Send an Email <span>→</span>
          </a>
        </div>

      </section>
    </main>
  );
}