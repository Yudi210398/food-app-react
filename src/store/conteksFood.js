import { createContext } from "react";

const CartConteks = createContext({
  items: [],
  totalHarga: 0,
  tambahItem: (item) => {},
  removeItem: (item) => {},
  hapusItem: (item) => {},
});

export default CartConteks;
