import React, { useState } from "react";
import Store from "./Components/Store";
import { CartProvider } from "./Store/cart-context";
import Cart from "./Components/Cart/Cart";
function App() {
  const [showcart, setshowcart] = useState(false);

  const showcartHandler = () => {
    setshowcart(true);
  };
  const hidecartHandler = () => {
    setshowcart(false);
  };

  return (
    <CartProvider>
      {showcart && <Cart onClose={hidecartHandler} />}
      <Store onclick={showcartHandler} />
    </CartProvider>
  );
}

export default App;
