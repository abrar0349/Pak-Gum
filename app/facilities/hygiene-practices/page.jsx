import React from 'react'
import './hygiene-practices.css'
import BulletList from '../Component/BulletList'
import DoubleCard from '../Component/DoubleCard'
import Heading from '../Component/Heading'

// images
import open_mouth from '../../Images/facilities/open_mouth.jpg';
import FOOD3 from '../../Images/facilities/FOOD3.1.jpg'
import HYG1 from '../../Images/facilities/HYG1.png'
import HYG2 from '../../Images/facilities/hyg2.png'

function page() {
  
  const safetyPoints = [
  "A dedicated plant to remove contaminants from the raw material (guar seed).",
  "Magnets and safety screening at all stages of production including Cleaning, Dehusking and Grinding.",
  "Safety screens and magnets before packaging.",
  "Daily plant Sanitation Program and regular microbiological swab tests ensure that the plant remains clean.",
  "Regular cleaning of food contact surfaces with air.",
  "Centralized vacuum cleaning system."
];

const loadingPoints = [
  "Clean dressed / uniformed workers load the containers.",
  "A plastic lining is placed on the container floor to keep the bags clean.",
  "Containers are loaded and sealed on our premises."
];

  return (
    <div className='hygiene-container'>
        <Heading Content="Hygiene Practices" />
        <BulletList items = {safetyPoints}/>
        <DoubleCard
              firstImage= {open_mouth.src}
              secondImage= {FOOD3.src}
        />

        <BulletList items = {loadingPoints} />
        <DoubleCard
              firstImage= {HYG1.src}
              secondImage= {HYG2.src}
              banner="Containers loaded on site under our supervision"
        />
        
    </div>
  )
}

export default page
