import React from "react";
import styles from "./dunzopartner.module.css";
import bike from "../assets/bike.png";

function Dunzopartner() {
  return (
    <>
      <div className={styles.partner}>
        <h1>
          Become a delivery <br /> superhero and <br /> start earning
        </h1>
        <p>
          With Dunzo, you can have flexible working hours and <br/> help us 
          make deliveries in your city.
        </p>
       
        <a href="https://play.google.com/store/apps/details?id=runner.dunzo.com.dunzo_runner">
          <button>BECOME A DUNZO PARTNER</button>
        </a>
         <img src={bike} alt="bike" />
      </div>
    </>
  );
}

export default Dunzopartner;
