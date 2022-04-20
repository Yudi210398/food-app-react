import { Fragment, useState } from "react";
import CartModal from "./components/cart/cart.js";
import Foods from "./components/foods/foods.js";
import Header from "./components/layouts/header/header.js";
import ContekProvider from "./store/contekProviderFoods.js";

function App() {
  const [modalState, efectModal] = useState(false);

  const showModal = () => {
    efectModal(true);
  };

  const hideModal = () => {
    efectModal(false);
  };

  return (
    <ContekProvider>
      {modalState && <CartModal hideModal={hideModal} />}
      <Header click={showModal} />
      <main>
        <Foods />
      </main>
    </ContekProvider>
  );
}

export default App;
