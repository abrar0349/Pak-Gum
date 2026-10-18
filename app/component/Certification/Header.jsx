
"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

function Header({ obj }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.intro}>
      <div className={styles.logoWrapper}>
        <Image
          src={obj.logo}
          alt="FSSC 22000 certification logo"
          className={styles.fsscLogo}
          width={490}
          height={100}
          priority
        />
      </div>

      <div
        className={`${styles.description} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        <p>{obj.desc1}</p>
        <p>{obj.desc2}</p>
        
      </div>

      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Less" : "More"}
      </button>
      
    </div>
  );
}

export default Header;
