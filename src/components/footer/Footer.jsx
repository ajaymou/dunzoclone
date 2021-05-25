import React from "react";
import styles from "./Footer.module.css";
import dunzo from "../../assets/dunzo.png";
import Driver from "../../assets/driver.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <h3>You can’t stop time, but you can save it!</h3>
        <p>
          Living in the city, there is never enough time to shop for groceries,
          pick-up supplies, grab food and wade through traffic on the way back
          home. How about we take care of all of the above for you? What if we
          can give you all that time back? Send packages across the city and get
          everything from food, groceries, medicines and pet supplies delivered
          right to your doorstep. From any store to your door, just make a list
          and we’ll make it disappear. Just Dunzo It!
        </p>
      </div>
      <hr />
      <div className={styles.links_section}>
        <div className={styles.div1}>
          <img src={dunzo} alt="dunzo" className={styles.dunzo} />
        </div>
        <div className={styles.links1}>
          <p>DUNZO</p>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Contact</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Dunzo fro partner</li>
            <li>Dunzo fro business</li>
          </ul>
        </div>

        <div className={styles.links1}>
          <p>SERVICEABLE CITIES</p>
          <ul>
            <li>Bangalore</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Gurgaon</li>
            <li>Delhi</li>
            <li>Hyderabad</li>
            <li>Chennai</li>
          </ul>
        </div>

        <div className={styles.links1}>
          <p>GET IN TOUCH</p>
          <ul>
            <li>Email</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className={styles.links1}>
          <img src={Driver} className={styles.driver} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
