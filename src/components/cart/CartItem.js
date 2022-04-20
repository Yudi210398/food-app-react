import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.nama}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>
            {"Rp" + new Intl.NumberFormat("id-ID").format(props.harga)}
          </span>
          <span className={classes.amount}>x {props.jumlah}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onKurang}>-</button>
        <button onClick={props.onTambah}>+</button>
        <button onClick={props.onHapusan}>x</button>
      </div>
    </li>
  );
};

export default CartItem;
