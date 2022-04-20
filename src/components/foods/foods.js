import DataFood from "./dataFood.js";
import FoodRingkasan from "./foodsRingkasan.js";
import { Fragment } from "react";

const Foods = () => {
  return (
    <Fragment>
      <FoodRingkasan />
      <DataFood />
    </Fragment>
  );
};

export default Foods;
