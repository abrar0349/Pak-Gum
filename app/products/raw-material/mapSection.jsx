import './mapSection.css';

function MapSection({ title, imageSrc, altText }) {
  return (
    <div className="map-card-container">
      {/* Green Header Box */}
      <div className="map-card-header">
        <h2>{title}</h2>
      </div>

      {/* Image Content Area */}
      <div className="map-card-body">
        <img 
          src={imageSrc} 
          alt={altText || "Growing Areas Map"} 
          className="map-image"
        />
      </div>
    </div>
  );
}

export default MapSection;