import React, { Fragment } from "react";
import classes from "./header.module.css";
import imagesFood from "../../../images/food.jpg";
import Tombol from "./cartTombol.js";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.judul}>Makan Enak</h1>
        <Tombol clickCart={props.click} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imagesFood} alt="food-images" />
      </div>
    </Fragment>
  );
};

export default Header;
