
import "./ProductsAbout.css";
import GuarSeedImage from "@/app/images/Guar.jpg"

const products = [
  {
    name: "Guar Seed",
    description: "Quality guar seeds for industrial processing.",
    image: GuarSeedImage,
  },
  {
    name: "Guar Splits",
    description: "Carefully processed premium guar splits.",
    image: "/images/guar-splits.jpg",
  },
  {
    name: "Guar Gum Powder",
    description: "Fine guar gum powder for multiple applications.",
    image: "/images/guar-powder.jpg",
  },
  {
    name: "Guar Meal",
    description: "Quality guar meal produced with care.",
    image: "/images/guar-meal.jpg",
  },
];

export default function ProductsAbout() {
  return (
    <main className="pg-section">
      {/* PRODUCTS */}
      <section className="pg-products">
        <div className="pg-heading">
          <span className="pg-label">OUR PRODUCTS</span>
          <h2>Quality Guar Products</h2>
          <p>
            Delivering quality, consistency and experience
            through our range of guar products.
          </p>
        </div>

        <div className="pg-grid">
          {products.map((product, index) => (
            <article
              className="pg-card"
              key={product.name}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="pg-image-wrap">
                <img src={product.image.src} alt={product.name} />
                <span className="pg-image-caption">
                  Explore Product ↗
                </span>
              </div>

              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="pg-underline" />
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="pg-about">
        <div className="pg-factory">
          <img
            src="/images/factory.jpg"
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
