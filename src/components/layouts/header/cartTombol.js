import CartIcon from "../../cart/cartSvg.js";
import classes from "./cartTombol.module.css";
import { useContext, useState, useEffect } from "react";
import CartConteks from "../../../store/conteksFood.js";

const Tombol = (props) => {
  const ctx = useContext(CartConteks);
  const [state, setState] = useState(false);
  const { items } = ctx;
  const numberKeranjang = items.reduce(
    (currItem, item) => currItem + item.jumlah,
    0
  );

  const classesCart = `${classes.button}  ${state ? classes.bump : ``}`;

  useEffect(() => {
    if (items.length === 0) return;
    setState(true);

    const timer = setTimeout(() => {
      setState(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={classesCart} onClick={props.clickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Keranjang</span>
      <span className={classes.badge}>{numberKeranjang}</span>
    </button>
  );
};

export default Tombol;
