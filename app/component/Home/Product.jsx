import "./Product.css";
import GuarSeedImage from "@/app/Images/Guar.jpg";
import GuarSplitsImage from "@/app/Images/Split.jpg";
import GuarMealImage from "@/app/Images/Meal.jpg";
import GuarPowderImage from "@/app/Images/Powder.jpg";

const products = [
  {
    name: "Guar Seed",
    description: "Quality guar seeds for industrial processing.",
    image: GuarSeedImage,
  },
  {
    name: "Guar Splits",
    description: "Carefully processed premium guar splits.",
    image: GuarSplitsImage,
  },
  {
    name: "Guar Gum Powder",
    description: "Fine guar gum powder for multiple applications.",
    image: GuarPowderImage,
  },
  {
    name: "Guar Meal",
    description: "Quality guar meal produced with care.",
    image: GuarMealImage,
  },
];

export default function Products() {
  return (
    <main className="pg-section">
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
                <img src={product.image.src || product.image} alt={product.name} />
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
    </main>
  );
}