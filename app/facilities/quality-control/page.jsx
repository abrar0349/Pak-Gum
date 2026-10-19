"use client";
import React from 'react';
import Heading from '../Component/Heading'
import CardGrid from '../Component/CardGrid';
import Main_heading from '../Component/Main_heading'
import BulletList from '../Component/BulletList'
import DoubleCard from '../Component/DoubleCard'

import './QualitySection.css'; 

// images imported
import physic from '../../Images/facilities/Physical.jpg'
import chemical from '../../Images/facilities/chemical.png'
import Micro from '../../Images/facilities/Micro.jpg'
import Sample_Storage from '../../Images/facilities/Sample_Storage.jpg'
import Calibration from '../../Images/facilities/IMG_4105.jpg'



export default function QualitySection() {

    const LabData = [
      { id: 1, imageSrc: physic.src, altText: "Physical Lab", title: "Physical Lab" },
      { id: 2, imageSrc: Micro.src, altText: "Micro Lab", title: "Micro Lab" },
      { id: 3, imageSrc: chemical.src, altText: "Chemical Lab", title: "Chemical Lab" },
    ];

    const ChemicalLabData = [
           { id: 2, imageSrc: Calibration.src, altText: "Calibration", title: "Calibration" },
           { id: 3, imageSrc: Sample_Storage.src, altText: "Sample Storage", title: "Sample Storage" },
    ]

  return (

    <div className="quality-container">
      
      {/* Main Heading */}
      <Main_heading Content="Quality Control at all Stages of the Process" />

      {/* Raw Material Inspection Section */}
      <div className="quality-section-block">

        <h2 className="quality-sub-heading">Raw material Inspection</h2>
        
        <ul className="quality-bullet-list">
          <li>Annual surveys of guar growing areas, and daily contact with traders</li>
          <li>Supplier evaluation and monitoring</li>
          <li>Inspected at unloading (100% sampling)</li>
          <li>All inspection/rejection is recorded and is the basis of supplier performance</li>
        </ul>

        {/* Single Image Banner for Sampling Process Flow */}
        <div className="quality-image-wrapper">
          <img 
            src="http://www.pakgum.com/IMG/Sampling.jpg" 
            alt="Quality Control Process - Sampling & Inspection" 
            className="quality-process-img"
          />
        </div>

      </div>

      {/* Production Support Laboratory Section */}
      <div className="quality-section-block">

        <Heading Content="Production Support Laboratory" />

        <BulletList items={[
          "Production Support Laboratory running 24/7 continuously monitors in-process material",
          "ASTM class (certified) sieves used in our particle size testing machines",
          "Brookfield viscometers (Digital and Analogue)"
        ]} />

       
        <DoubleCard
          firstImage="http://www.pakgum.com/IMG/Physical.jpg"
          secondImage="http://www.pakgum.com/IMG/Micro.jpg"
          banner="Quality Control Laboratories for Final Inspection"
      />

      </div>

   

      {/* 	World class laboratories and test equipment */}
      <div className="quality-section-block">

        <Heading Content="World class laboratories and test equipment" />
        
        <ul className="quality-bullet-list">
          <li>Our measuring and test equipment is calibrated at regular pre-defined intervals traceable to international standards</li>
          <li>In-house calibration facility as well as external calibration minimizes downtime</li>
          <li>Production Support Laboratory running 24/7 continuously monitors in-process material</li>
          <li>Quality Control laboratories for final inspection
            <ul className="quality-sub-bullet-list">
              <li>Isolated from production</li>
              <li>Microbiology laboratory (Following FDA/AOAC and customer specified methods)</li>
              <li>Physical laboratory (Following FCC/FAO/ISO and customer specified methods)</li>
              <li>Chemical Laboratory (Following FCC/FAO/ISO and customer specified methods)</li>
            </ul>
          </li>
          <li>Our products conform to the US Food Chemical Codex requirements and those of the Food and Agriculture Organization of the United Nations</li>
        </ul>

        <CardGrid arr={LabData} />
        <CardGrid arr={ChemicalLabData} />

      </div>

    </div>

  );
}