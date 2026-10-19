"use client";
import React from 'react';
import './HandlingSection.css'; 
import { Card } from '../Component/Card';
import Heading from '../Component/Heading'
import h1 from '../../Images/facilities/h1.jpg'
import h2 from '../../Images/facilities/h2.jpg'
import h3 from '../../Images/facilities/h3.jpg'
import h4 from '../../Images/facilities/h4.jpg'
import h5 from '../../Images/facilities/h5.jpg'
import h6 from '../../Images/facilities/h6.jpg'
import CardGrid from '../Component/CardGrid';
import Main_heading from '../Component/Main_heading'



// Main Component
export default function HandlingSection() {

  const handlingData = [
    { id: 1, imageSrc: h1.src, altText: "Open Mouth", title: "Open Mouth" },
    { id: 2, imageSrc: h2.src, altText: "Valve Type", title: "Valve Type" },
    { id: 3, imageSrc: h3.src, altText: "Bulk Bags", title: "Bulk Bags" },
  ];

  const packagingData = [
    { id: 1, imageSrc: h4.src, altText: "Guar Seed Warehouse", title: "Guar Seed Warehouse" },
    { id: 2, imageSrc: h5.src, altText: "Guar Seed", title: "Guar Seed" },
    { id: 3, imageSrc: h6.src, altText: "Guar (Gum Powder)", title: "Guar (Gum Powder)" },
  ];

  return (

    <div className="handling-container">
      {/* Main Heading */}
      <Main_heading Content="Handling, Packaging and Storage" />

      {/* Handling Section */}
      <div className="handling-section-block">

        <Heading Content="Handling" />
        <CardGrid arr={handlingData} />

      </div>

      {/* Packaging Types Section */}
      <div className="handling-section-block">

        <Heading Content="Packaging Types" />
        <CardGrid arr={packagingData} />

      </div>
      
    </div>

  );
}