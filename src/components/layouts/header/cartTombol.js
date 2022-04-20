import CartIcon from "../../cart/cartSvg.js";
import classes from "./cartTombol.module.css";
import { useContext } from "react";
import CartConteks from "../../../store/conteksFood.js";

const Tombol = (props) => {
  const ctx = useContext(CartConteks);

  const numberKeranjang = ctx.items.reduce(
    (currItem, item) => currItem + item.jumlah,
    0
  );
  return (
    <button className={classes.button} onClick={props.clickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Keranjang</span>
      <span className={classes.badge}>{numberKeranjang}</span>
    </button>
  );
};

export default Tombol;
