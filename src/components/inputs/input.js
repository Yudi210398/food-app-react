import { forwardRef } from "react";
import classes from "./input.module.css";
const Inputs = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Inputs;
