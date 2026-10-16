import "./Certifications.css";
// Apni zaroorat ke mutabiq images import kar lein (ya placeholders use karein)
import IsoImage from '@/app/Images/iso-9001.jpg';
import FsscImage from '@/app/Images/fssc-22000.jpg';
import StarImage from '@/app/Images/C3.png';
import HalalImage from '@/app/Images/halal-m.jpg';

export default function Certifications() {
  return (
    <main className="pg-section">
      <section className="pg-certifications-container">

        {/* Section Header */}
        <div className="pg-cert-header">
          <span className="pg-label">OUR CERTIFICATIONS</span>
          <h2>Globally recognized quality standards.</h2>
          <p className="pg-description">
            Pakistan Gum Industries (Pvt.) Ltd. maintains strict quality control and international compliance. Our facilities are certified by leading global auditing bodies to ensure premium guar products worldwide.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="pg-cert-grid">
          
          {/* Card 1: ISO 9001 */}
          <div className="pg-cert-card">
            <div className="pg-cert-img-box">
              <img src={IsoImage.src} alt="ISO 9001 SGS Certification" />
            </div>
            <div className="pg-cert-info">
              <strong>ISO 9001:2015</strong>
              <small>Quality Management System certified by SGS</small>
            </div>
          </div>

          {/* Card 2: FSSC 22000 */}
          <div className="pg-cert-card">
            <div className="pg-cert-img-box">
              <img src={FsscImage.src} alt="FSSC 22000 SGS Certification" />
            </div>
            <div className="pg-cert-info">
              <strong>FSSC 22000</strong>
              <small>Food Safety System Certification</small>
            </div>
          </div>

          {/* Card 3: Star Certification */}
          <div className="pg-cert-card">
            <div className="pg-cert-img-box">
              <img src={StarImage.src} alt="Quality Star Certification" />
            </div>
            <div className="pg-cert-info">
              <strong>Certified Compliance</strong>
              <small>Verified international standard mark</small>
            </div>
          </div>

          {/* Card 4: M / Halal Certification */}
          <div className="pg-cert-card">
            <div className="pg-cert-img-box">
              <img src={HalalImage.src} alt="Halal & Quality M Logo Certification" />
            </div>
            <div className="pg-cert-info">
              <strong>Halal / M Verified</strong>
              <small>Compliant with dietary and safety standards</small>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="pg-cert-footer">
          <a href="/certifications" className="pg-button">
            View Quality Policies <span>→</span>
          </a>
        </div>

      </section>
    </main>
  );
}