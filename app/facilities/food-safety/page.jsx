"use client";
import React from 'react';
import './Food-safety.css';
import Heading from '../Component/Heading';
import { Card } from '../Component/Card';
import CardGrid from '../Component/CardGrid';

// Images Import
import vacuum_cleaner from '../../Images/facilities/vacuum_cleaner.jpg';
import FOOD1 from '../../Images/facilities/FOOD1.jpg';
import FOOD2 from '../../Images/facilities/FOOD2.jpg';
import FOOD3 from '../../Images/facilities/FOOD3.jpg';


const certificationsList = [
  "ISO 9001:2000 certified Quality Management System",
  "FSSC 22000 Certified Food Safety Program",
  "Kosher Certification by Orthodox Union",
  "Food Safety and Quality Assurance",
  "Regular Internal Audit programs and GMPs (Good Manufacturing Practices) ensure sustainability, continuity and improvement in our systems"
];


function Page() {

   const handlingData = [
      { id: 1, imageSrc: FOOD1.src, altText: "Splits passing through magnets", title: "Splits passing through magnets" },
      { id: 2, imageSrc: FOOD2.src, altText: "Before storage", title: "Product condition before storage" },
      { id: 3, imageSrc: FOOD3.src, altText: "Safety screens and magnets Prior to packaging", title: "Safety screens & magnets Prior to packaging" },
    ];
  

  return (

    <div className="food-safety-wrapper">
      
      {/* 1. TOP SECTION: Text + Single Image Side-by-Side */}
      <div className="top-hero-section">
        {/* Left Side: Text Details */}
        <div className="text-section">
          
          <Heading Content="Food Safety and Quality Assurance" />
          
          <p className="description">
            In our quest for continuous improvement, we have established strict quality assurance 
            and quality control measures throughout the life cycle of our products. We conduct 
            inspection and tests from raw material, through production stages, and finally on our 
            finished products prior to dispatch.
          </p>

          <p className="description">
            This helps us prevent defects from the beginning, thus enabling us to meet the 
            requirements of our valued customers. Our production support laboratories and final 
            inspection laboratories use inspection techniques based on those provided by internationally 
            recognized organizations like the <strong>FDA</strong>, <strong>AOAC</strong>, and <strong>ISO</strong>.
          </p>

        </div>

        {/* Right Side: Single Main Image Card */}
        <div className="single-card-section">
          <Card
            key={1}
            imageSrc={vacuum_cleaner.src || vacuum_cleaner}
            altText="Centralized Vacuum Cleaning System"
            title="Centralized Vacuum Cleaning System"
          />
        </div>

      </div>

      {/* 2. MIDDLE SECTION: Certifications List (Separated Below Text) */}
      <div className="highlights-section">
        <h3 className="highlights-title">Key Standards & Certifications:</h3>
        <ul className="certifications-list">
          {certificationsList.map((item, index) => (
            <li key={index}>
              <span className="bullet-icon">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <CardGrid arr={handlingData} />

    </div>
  );
}

export default Page;