import { useReducer } from "react";
import CartConteks from "./conteksFood.js";

const stateAwal = {
  items: [],
  totalHarga: 0,
};

const reducer = (state, action) => {
  const reducerCodeFungsiDRY = (state, aksi) => {
    const updateItems = state.items.filter((item) => item.id !== aksi.item);
    const updatedTotalHarga = updateItems
      .map((data) => data.jumlah * data.harga)
      .reduce((a, b) => a + b, 0);
    console.log(updateItems, updatedTotalHarga);
    return {
      items: updateItems,
      totalHarga: updatedTotalHarga,
    };
  };

  if (action.type === "add") {
    console.log(state.totalHarga, action.item.harga, action.item.jumlah);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        jumlah: existingCartItem.jumlah + action.item.jumlah,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;

      // ! coba code
      let dataIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let dataIndexSalah = state.items.filter(
        (item) => item.id !== action.item.id
      );

      const data = state.items[dataIndex];

      data.jumlah = data.jumlah + action.item.jumlah;

      dataIndexSalah.push(data);
      console.log(updateItem);
      console.log(data);
      // console.log(data.jumlah + action.item.jumlah);
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updateTotalHarga =
      state.totalHarga + action.item.harga * action.item.jumlah;

    return {
      items: updatedItems,
      totalHarga: updateTotalHarga,
    };
  }

  if (action.type === "remove") {
    let updateItems;
    let updatedTotalHarga;
    const adaKeranjangItemIndex = state.items.findIndex(
      (item) => item.id === action.item
    );

    const dataAda = state.items[adaKeranjangItemIndex];
    console.log(dataAda.jumlah);
    if (dataAda.jumlah === 1) {
      updateItems = state.items.filter((item) => item.id !== action.item);
      updatedTotalHarga = updateItems
        .map((data) => data.jumlah * data.harga)
        .reduce((a, b) => a + b, 0);
    } else {
      let updateItem = { ...dataAda, jumlah: dataAda.jumlah - 1 };
      updateItems = [...state.items];
      updateItems[adaKeranjangItemIndex] = updateItem;

      updatedTotalHarga = state.totalHarga - dataAda.harga;
      console.log(state.totalHarga, dataAda.harga);
    }
    return {
      items: updateItems,
      totalHarga: updatedTotalHarga,
    };
  }

  if (action.type === "hapus") {
    const updateItems = state.items.filter((item) => item.id !== action.item);

    const updatedTotalHarga = updateItems
      .map((data) => data.jumlah * data.harga)
      .reduce((a, b) => a + b, 0);

    return {
      items: updateItems,
      totalHarga: updatedTotalHarga,
    };
  }
};

const ContekProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, stateAwal);
  const itemTambah = (item) => {
    dispatch({ type: `add`, item });
  };

  const itemRomove = (item) => {
    dispatch({ type: `remove`, item });
  };

  const itemHapus = (item) => {
    dispatch({ type: `hapus`, item });
  };

  console.log(state);
  const cartConteks = {
    items: state.items,
    totalHarga: state.totalHarga,
    tambahItem: itemTambah,
    removeItem: itemRomove,
    hapusItem: itemHapus,
  };

  console.log(cartConteks.items);

  return (
    <CartConteks.Provider value={cartConteks}>
      {props.children}
    </CartConteks.Provider>
  );
};

export default ContekProvider;
