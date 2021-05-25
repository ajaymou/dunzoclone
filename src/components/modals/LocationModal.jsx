import React from "react";
import ReactDOM from "react-dom";
import styles from "./LocationModal.module.css";
import locationimg from "../../assets/location.png";

const BackDrop = () => {
  return <div className={styles.backdrop} />;
};

const AddLocation = (props) => {
  return (
    <div className={styles.modal}>
      <h3>Add your Location</h3>
      <button onClick={props.onClick}>X</button>
      <input type="text" placeholder="Search for an area, location name" />

      <img src={locationimg} alt="" />
    </div>
  );
};

const LocationModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <AddLocation onClick={props.onClick} />,
        document.getElementById("addLocation")
      )}
    </>
  );
};

export default LocationModal;
