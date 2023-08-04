import React, { useEffect, useState } from "react";
import axios from "axios";
const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
});
export default CartContext;

export const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    updateCart();
  }, []);
  const updateCart = () => {
    axios
      .get("https://crudcrud.com/api/fe84e354ab404558b7e37d4f56ab953e/cart")
      .then((res) => {
        let finalObj = [];
        for (let i = 0; i < res.data.length; i++) {
          let obj = {
            id: res.data[i]._id,
            name: res.data[i].item.name,
            price: res.data[i].item.price,
            quantity: res.data[i].item.quantity,
          };
          finalObj = [...finalObj, obj];
        }
        setItem(finalObj);
      });
  };

  const additemHandler = (item) => {
    axios
      .post("https://crudcrud.com/api/fe84e354ab404558b7e37d4f56ab953e/cart", {
        item,
      })
      .then((res) => {
        console.log(res.data);
      });
    setItem([...items, item]);
    updateCart();
  };

  const cartcontext = {
    items: items,
    addItem: additemHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {console.log(items)}
      {props.children}
    </CartContext.Provider>
  );
};
