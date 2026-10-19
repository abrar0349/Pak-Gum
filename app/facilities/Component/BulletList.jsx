"use client";

import React from "react";
import './BulletList.css'

export default function QualityBulletList({ items }) {
  return (
    <ul className="quality-bullet-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
