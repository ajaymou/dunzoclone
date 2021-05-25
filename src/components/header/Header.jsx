import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";
import Cart from "../../assets/cart.png";
import Location from "../../assets/location-pin.svg";
import Arrow from "../../assets/arrow.svg";
import SignUp from "../modals/SignUp";
import LocationModal from "../modals/LocationModal";
import Dot from "../../assets/dot.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [signUp, setSignUp] = useState(false);
  const [addLocation, setAddLocation] = useState(false);
  const [isDisplay, setIs1Display] = useState(false);

  const handelSignUp = () => {
    setSignUp(true);
  };

  const handelClose = () => {
    setSignUp(false);
  };

  const handelLocation = () => {
    setAddLocation(true);
  };

  const handelLocationClose = () => {
    setAddLocation(false);
  };

  const handleDisplay = () => {
    setIs1Display((preValue) => !preValue);
  };

  return (
    <nav className={styles.navBar}>
      {signUp ? <SignUp onClick={handelClose} /> : ""}
      {addLocation ? <LocationModal onClick={handelLocationClose} /> : ""}
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="dunzo" />
      </Link>

      <img
        src={Location}
        alt="location"
        className={styles.svg}
        onClick={handelLocation}
      />
      <p onClick={handelLocation}>Set Location.</p>
      <img
        src={Arrow}
        alt=""
        className={styles["svg-arrow"]}
        onClick={handelLocation}
      />
      <img src={Dot} alt="" className={styles.dot} onClick={handleDisplay} />
      <button className={styles.btn} onClick={handelSignUp}>
        Sign in
      </button>
      <img className={styles.cart} src={Cart} alt="cart" />

      {/* <Link
        to="/partner"
        className={`${styles.links} ${isDisplay ? styles.show : ""}`}
        onClick={handleDisplay}
      >
        Need Delivery Partners?
      </Link> */}
      <Link
        to="/partner"
        className={`${styles.links} ${isDisplay ? styles.show : ""}`}
        onClick={handleDisplay}
      >
        Dunzo for Partners
      </Link>
    </nav>
  );
};

export default Header;
