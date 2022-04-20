import { useContext } from "react";
import CartConteks from "../../store/conteksFood.js";
import Modal from "../modal/modal.js";
import classes from "./cart.module.css";
import CartItem from "./CartItem.js";
const CartModal = (props) => {
  const dataConteks = useContext(CartConteks);
  const tombolOrder = dataConteks.items.length > 0;

  const onKurangFungsi = (id) => {
    dataConteks.removeItem(id);
  };

  const onTambahFungsi = (item) => {
    dataConteks.tambahItem({ ...item, jumlah: 1 });
  };

  const onHapusFungsi = (id) => {
    dataConteks.hapusItem(id);
  };

  const cart = (
    <ul className={classes["cart-items"]}>
      {dataConteks.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            nama={item.nama}
            jumlah={item.jumlah}
            harga={item.harga}
            onKurang={() => onKurangFungsi(item.id)}
            onTambah={() => onTambahFungsi(item)}
            onHapusan={() => onHapusFungsi(item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal closeModal={props.hideModal}>
      {cart}
      <div className={classes.total}>
        <span>
          {!tombolOrder && `BELUM ADA MAKANAN DIKERANJANG...  ):`}
          {tombolOrder && `Total Harga`}
        </span>
        <span className={classes.color}>
          {tombolOrder &&
            `Rp${new Intl.NumberFormat("id-ID").format(
              dataConteks.totalHarga
            )}`}
        </span>
      </div>
      <div>
        <br />
        <button onClick={props.hideModal} className="btn btn-danger">
          Close
        </button>
        {tombolOrder && <button className="btn btn-success">Order</button>}
      </div>
    </Modal>
  );
};

export default CartModal;
