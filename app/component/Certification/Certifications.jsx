
import Image from "next/image";
import styles from "./Certifications.module.css";
import Content from "./Content";
import Header from "./Header";
import FSSCLogo from "@/app/Images/certification_logo.jpg";
import Image1 from "@/app/Images/SGS1.jpg";
import Image2 from "@/app/Images/SGS2.jpg";

const certificates1 = [
  {
    title: "FSSC 22000",
    category: "Food Safety Management",
    image: Image1,
    description:
      "Food Safety System Certification for food safety management.",
  },
  {
    title: "ISO 9001",
    category: "Quality Management",
    image: Image2,
    description:
      "Quality management system and process certification.",
  },
  // {
  //   title: "ISO 9001",
  //   category: "Quality Management",
  //   image: Image2,
  //   description:
  //     "Quality management system and process certification.",
  // },
];
const detail1 = {
  logo: FSSCLogo.src,
  desc1: "Pakistan Gum Industries (Pvt.) Ltd. is committed to maintaining internationally recognized quality and food safety standards. Our certification systems support consistent processes, product quality, and customer confidence. We focus on food safety management, quality assurance, and continuous improvement to meet the requirements of our customers and business partners.",
  desc2: "We focus on food safety management, quality assurance, and continuous improvement to meet the requirements of our customers and business partners.",
}

export default function Certifications() {
  return (
    <section
      className={styles.certifications}
      id="certifications"
    >
      <div className={styles.container}>

        <div className={styles.sectionTitle}>
          <span className={styles.eyebrow}>
            QUALITY & COMPLIANCE
          </span>

          <h2>Certifications</h2>
        </div>

       
        <Header obj = {detail1} />
       <Content certificates={certificates1} />

        <div className={styles.footerNote}>
          <span className={styles.check}>✓</span>
          <p>
            Our commitment to quality, safety, and
            continuous improvement.
          </p>
        </div>

      </div>

    </section>
  );
}
