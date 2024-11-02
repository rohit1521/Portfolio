import styles from "./LandingSection.module.css";
import LandingSectionImage from "../assets/LandingSection.png";

const LandingSection = () => {
  return (
    <div
      className={styles.landingSection}
      style={{ backgroundImage: `url(${LandingSectionImage})` }}
    >
      <div className={styles.header}>
        <div className={styles.headingGroup1}>
          <div className={styles.headingPrimary}>CREATING</div>
          <div className={styles.headingSecondary}>TAILORMADE</div>
        </div>
        <div className={styles.headingGroup2}>
          <div className={styles.headingPrimary}>DIGITAL</div>
          <div className={styles.headingSecondary}>EXPERIENCE</div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            I’m a Product Designer with 5 years
          </p>
          <p className={styles.descriptionText}>
            experience working at Microsoft. I've
          </p>
          <p className={styles.descriptionText}>
            previously worked at Disney+ & Dunzo
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
