import './ProcessSection.css';

function ProcessSection({  processImage, altText }) {
  return (
    // <section className="process-section">
      <div className="process-image-wrapper">
        <img 
          src={processImage} 
          alt={altText ||  "Process Diagram"} 
          className="process-image"
        />
      </div>
    // </section>
  );
}

export default ProcessSection;