import React from "react";
import styles from "./Download.module.css";
import app from "../../assets/app.png";
import appstore from "../../assets/appstore.jpg";
import playstore from "../../assets/playstore.jpg";
const Download = () => {
  return (
    <div className={styles.download_section}>
      <img src={app} alt="app" className={styles.mobile} />
      <p>
        All this from the convenience of your phone. <br />
        Download the Dunzo mobile app.
      </p>
      <div className={styles.dbtn}>
        <a href="https://play.google.com/store/apps/details?id=com.dunzo.user&hl=en_IN&gl=US">
          <img src={playstore} alt="playstore" className={styles.logo} />
        </a>
        <a href="https://apps.apple.com/in/app/dunzoit/id1032391728">
          <img src={appstore} alt="appstore" className={styles.logo} />
        </a>
      </div>
    </div>
  );
};

export default Download;
