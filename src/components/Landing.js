import styles from "./LandingSection.module.css";
import LandingSectionImage from "../assets/LandingSection.png";
import Badge from "../assets/Badge.svg";

const LandingSection = () => {
  return (
    <div
      className={styles.landingSection}
      style={{ backgroundImage: `url(${LandingSectionImage})` }}
    >
      <div className={styles.header}>
        <div className={styles.headingGroup1}>
          <div className={styles.heading1}>CREATING</div>
          <div className={styles.heading2}>TAILORMADE</div>
        </div>
        <div className={styles.headingGroup2}>
          <div className={styles.heading3}>DIGITAL</div>
          <div className={styles.heading4}>EXPERIENCE</div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            I’m a Product Designer with 5 years
          </p>
          <p className={styles.descriptionText}>
            experience, currently working at Microsoft.
          </p>
          <p className={styles.descriptionText}>
            I've previously worked at Disney+ & Dunzo
          </p>
        </div>
        <div className={styles.badge}>
          <img src={Badge} alt="Badge" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
