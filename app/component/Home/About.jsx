import "./About.css";
import Image from '@/app/Images/About.jpg'

export default function About() {
  return (
    <main className="pg-section">
      <section className="pg-about">

        <div className="pg-factory">
          <img
            src={Image.src}
            alt="Pakistan Gum Industries factory"
          />

          <div className="pg-year">
            <span className="pg-year-icon">▦</span>
            <div>
              <small>Our journey since</small>
              <strong>1962</strong>
            </div>
          </div>
        </div>

        <div className="pg-about-text">
          <span className="pg-label">ABOUT OUR COMPANY</span>

          <h2>Quality, experience and trust.</h2>

          <p className="pg-description">
            Pakistan Gum Industries (Pvt.) Ltd. commenced
            operations in 1962 as a manufacturer of guar
            products. Initially producing Guar Splits, the
            company expanded into Guar Gum manufacturing
            and textile printing thickeners. Today, PGI
            products are exported and used globally.
          </p>

          <div className="pg-features">
            <div className="pg-feature">
              <span className="pg-icon">✓</span>
              <div>
                <strong>Since 1962</strong>
                <small>Industry experience</small>
              </div>
            </div>

            <div className="pg-feature">
              <span className="pg-icon">◇</span>
              <div>
                <strong>Quality Focus</strong>
                <small>Quality production</small>
              </div>
            </div>

            <div className="pg-feature">
              <span className="pg-icon">◎</span>
              <div>
                <strong>Global Reach</strong>
                <small>Export experience</small>
              </div>
            </div>
          </div>

          <a href="/about" className="pg-button">
            Discover Our Company <span>→</span>
          </a>
        </div>
        
      </section>
    </main>
  );
}