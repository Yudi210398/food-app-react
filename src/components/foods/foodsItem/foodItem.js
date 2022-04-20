import classes from "./foodItem.module.css";
import FormItemFood from "./formItemFood.js";
import CartConteks from "../../../store/conteksFood.js";
import { useContext } from "react";
const ItemFoods = (props) => {
  const harga = `Rp` + new Intl.NumberFormat("id-ID").format(props.harga);
  const dataCtx = useContext(CartConteks);
  const keranjangUpdate = (data) => {
    dataCtx.tambahItem({
      id: props.id,
      nama: props.nama,
      jumlah: data,
      harga: props.harga,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.nama}</h3>
        <div className={classes.description}>{props.deskripsi}</div>
        <div className={classes.price}>{harga}</div>
      </div>
      <div>
        <FormItemFood onCart={keranjangUpdate} />
      </div>
    </li>
  );
};

export default ItemFoods;
