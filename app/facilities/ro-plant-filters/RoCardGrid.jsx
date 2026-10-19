"use client"
import './RoCardGrid.css';

// images imported
import RO1 from '../../Images/facilities/Store_in_faci/RO1.png'
import RO2 from '../../Images/facilities/Store_in_faci/RO2.png'
import RO3 from '../../Images/facilities/Store_in_faci/RO3.png'


// Exact array according to machines shown in the image
export const LabData = [
  { 
    id: 1, 
    imageSrc: RO1.src, // ya aapka image path
    altText: "RO Water Treatment Plant", 
    title: "RO Water Treatment Plant",
    subtitle: "Purification & RO System"
  },
  { 
    id: 2, 
    imageSrc: RO2.src, 
    altText: "Micro Water Filtration Canisters", 
    title: "Micro Water Filtration Canisters",
    subtitle: "High-Density Filter Units"
  },
  { 
    id: 3, 
    imageSrc: RO3.src, 
    altText: "Industrial Air Filtration System", 
    title: "Industrial Air Filtration System",
    subtitle: "Drying & Transport Dust Filter"
  },
];

export default function CardGrid({ arr = LabData }) {
  return (
    <div className="card-grid-container">
      {arr.map((item) => (
        <div key={item.id} className="modern-card">
          {/* Image Section */}
          <div className="card-image-wrapper">
            <img
              src={item.imageSrc}
              alt={item.altText}
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x450/004d1a/ffffff?text=${encodeURIComponent(item.title)}`;
              }}
            />
            <div className="card-overlay" />
          </div>

          {/* Content & Title Section */}
          <div className="card-content">
            {item.subtitle && <span className="card-badge">{item.subtitle}</span>}
            <h3 className="card-title">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}