import './CardGrid.css';
import { Card } from './Card';




function CardGrid({ arr }) {
  return (
        <div className="handling-grid">
          {arr.map((item) => (
            <Card
              key={item.id}
              imageSrc={item.imageSrc}
              altText={item.altText}
              title={item.title}
            />
          ))}
        </div>
  )
}

export default CardGrid
