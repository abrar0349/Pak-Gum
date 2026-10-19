"use client";

import React from "react";
import './DoubleCard.css'

export default function DoubleCard({ firstImage, secondImage , banner}) {
  return (
    <div className="lab-outer-box">
      
      <div className="lab-images-grid">

        <div className="lab-image-item">
          <img
            src={firstImage}
            alt="Production Support Laboratory 1"
          />
        </div>

        <div className="lab-image-item">
          <img
            src={secondImage}
            alt="Production Support Laboratory 2"
          />
        </div>

      </div>

      {banner && <div className="lab-banner-title">
        {/* {banner && {banner}} */}
        {banner}
      </div>}

    </div>
  );
}