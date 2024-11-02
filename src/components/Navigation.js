import React, { useState } from "react";
import styles from "./Navigation.module.css";

const RandomText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);

  const handleMouseEnter = () => {
    const originalText = text.split("");
    const randomChars =
      "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω0123456789";
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            return randomChars[Math.floor(Math.random() * randomChars.length)];
          })
          .join("")
      );

      if (iterations >= originalText.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 50);
  };

  return (
    <span className={className} onMouseEnter={handleMouseEnter}>
      {displayText}
    </span>
  );
};

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <b className={styles.rohit}>ROHIT</b>
        <div className={styles.x}>
          <div className={styles.imageFill}>
            <img className={styles.component1Icon} alt="" src="X.svg" />
          </div>
        </div>
      </div>
      <div className={styles.navigationlinks}>
        <div className={styles.link}>
          <div className={styles.div}>01</div>
          <RandomText text="Case Studies" className={styles.caseStudies} />
        </div>
        <div className={styles.link1}>
          <div className={styles.div}>02</div>
          <RandomText text="About" className={styles.caseStudies} />
        </div>
        <div className={styles.link2}>
          <div className={styles.div}>03</div>
          <RandomText text="Contact" className={styles.caseStudies} />
        </div>
        <div className={styles.link3}>
          <div className={styles.div}>04</div>
          <RandomText text="Resume" className={styles.caseStudies} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
