"use client";
import React from 'react';
import './QualitySection.css'; // Pure CSS file import

export default function QualitySection() {
  return (
    <div className="quality-container">
      {/* Main Heading */}
      <h1 className="quality-main-heading">
        Quality Control at all Stages of the Process
      </h1>

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
        <h2 className="quality-sub-heading">Production Support Laboratory</h2>
        
        <ul className="quality-bullet-list">
          <li>Production Support Laboratory running 24/7 continuously monitors in-process material</li>
          <li>ASTM class (certified) sieves used in our particle size testing machines</li>
          <li>Brookfield viscometers (Digital and Analogue)</li>
        </ul>

        {/* Lab Images Box with Green Border and Banner */}
        <div className="lab-outer-box">
          <div className="lab-images-grid">
            <div className="lab-image-item">
              <img 
                src="http://www.pakgum.com/IMG/PSL.png" 
                alt="Production Support Laboratory 1" 
              />
            </div>
            <div className="lab-image-item">
              <img 
                src="http://www.pakgum.com/IMG/PSL.jpg" 
                alt="Production Support Laboratory 2" 
              />
            </div>
          </div>
          <div className="lab-banner-title">
            24/7 Production Support Laboratory
          </div>
        </div>

      </div>

      {/* 	World class laboratories and test equipment */}
        <div className="quality-section-block">

        <h2 className="quality-sub-heading">World class laboratories and test equipment</h2>
        
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

      </div>
    </div>
  );
}