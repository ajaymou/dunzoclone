import React from "react";
import ReactDOM from "react-dom";
import styles from "./SignUp.module.css";
import Signup from "../../assets/signup.png";

const BackDrop = () => {
  return <div className={styles.backdrop} />;
};

const SignUpModal = (props) => {
  return (
    <div className={styles.modal}>
      <img src={Signup} alt="" />
      <button onClick={props.onClick}>X</button>
      <h3>Sign in or Sign up</h3>
      <p>Get started with Dunzo</p>
      <label>Enter your phone number</label>
      <input type="number" placeholder="+91 Mobile Number" />
      <input type="checkbox" />
      <label className={styles.terms}>I accept Terms and Condition</label>
      <button className={styles.btn}>SEND OTP</button>
    </div>
  );
};

const SignUp = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <SignUpModal onClick={props.onClick} />,
        document.getElementById("signupmodal")
      )}
    </>
  );
};

export default SignUp;
