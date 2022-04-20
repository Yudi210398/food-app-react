import { useRef, useState } from "react";
import Inputs from "../../inputs/input.js";
import classes from "./formItemFood.module.css";

const FormItemFood = (props) => {
  const [jumlahValid, setErrorHandle] = useState(true);
  const refHarga = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const hargaInput = +refHarga.current.value;

    if (hargaInput.length === 0 || hargaInput.length < 1 || hargaInput > 5) {
      setErrorHandle(false);
      return;
    }

    props.onCart(hargaInput);
  };

  return (
    <form className={classes.form} onSubmit={submitForm}>
      <Inputs
        ref={refHarga}
        label="Quantity"
        input={{
          id: `harga`,
          type: "number",
          max: 5,
          min: 1,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Tambah</button>
      {!jumlahValid && <p>Salah Input</p>}
    </form>
  );
};

export default FormItemFood;
