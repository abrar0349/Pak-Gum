
import {
  Award,
  ShieldCheck,
  WineOff,
  MoonStar,
  HeartPulse,
  UserRound,
  Leaf,
  Handshake,
  UserRoundX,
  BadgeCheck,
  CheckCircle,
} from "lucide-react";

import styles from "./PolicyCard.module.css";

const policyIcons = {
  "quality-policy": Award,
  "food-safety-policy": ShieldCheck,
  "no-glass-policy": WineOff,
  "halal-policy": MoonStar,
  "health-safety-policy": HeartPulse,
  "child-labor-policy": UserRound,
  "environment-policy": Leaf,
  "supplier-code": Handshake,
  "harassment-policy": UserRoundX,
};

export default function PolicyCard({ policy }) {
  const Icon = policyIcons[policy.id] || ShieldCheck;

  return (
    <article className={styles.policyCard} id={policy.id}>
      <div className={styles.cardBanner}>
        <div className={styles.cardBannerLeft}>
          <div className={styles.policyIcon}>
            <Icon size={26} strokeWidth={2} aria-hidden="true" />
          </div>

          <div className={styles.headerText}>
            <h2>{policy.title}</h2>
            {policy.category && (
              <span className={styles.categoryTag}>
                {policy.category}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        {policy.intro && (
          <p className={styles.policyIntro}>{policy.intro}</p>
        )}

        <ul className={styles.policyBullets}>
          {policy.bullets.map((bullet, index) => (
            <li key={`${policy.id}-bullet-${index}`}>
              {bullet}
            </li>
          ))}
        </ul>

        {policy.highlight && (
          <div className={styles.highlightCallout}>
            <CheckCircle size={22} aria-hidden="true" />
            <p>
              <strong>{policy.highlight.title}:</strong>{" "}
              {policy.highlight.text}
            </p>
          </div>
        )}

        {policy.standards?.length > 0 && (
          <div className={styles.standardsFlex}>
            {policy.standards.map((standard) => (
              <span className={styles.stdBadge} key={standard}>
                <BadgeCheck size={16} aria-hidden="true" />
                {standard}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
