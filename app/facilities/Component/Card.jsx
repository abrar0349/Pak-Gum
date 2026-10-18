import './Card.css';


const Card = ({ imageSrc, altText, title }) => {
  return (
    <div className="card-item">
      <div className="card-image-wrapper">
        <img
          src={imageSrc}
          alt={altText}
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/400x300/e2e8f0/006600?text=${encodeURIComponent(altText)}`;
          }}
        />
      </div>
      {title && <div className="card-title">{title}</div>}
    </div>
  );
};

export {Card}