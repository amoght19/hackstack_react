import React from "react";
import styles from "../styles/Footer.module.css";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.column}>
          <p className={styles.heading}>Comapany</p>
          <p className={styles.text}>About us</p>
          <p className={styles.text}>Careers</p>
        </div>
        <div className={styles.column}>
          <p className={styles.heading}>View Website In</p>
          <p className={styles.text}>&#x2713;&nbsp;&nbsp;&nbsp;&nbsp;English</p>
        </div>
        <div className={styles.column}>
          <p className={styles.heading}>Need Help?</p>
          <p className={styles.text}>Visit Help Center</p>
        </div>
        <div className={styles.column}>
          <p className={styles.heading}>Connect with us</p>
          <p className={styles.text}>
            <img src={facebook} className={styles.icon1} alt={"facebook"} />
            <img src={twitter} className={styles.icon} alt="twitter" />
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2023 STAR. All Rights Reserved.</p>
        <div className={styles.last}>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
