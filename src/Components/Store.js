import React, { useContext } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import classes from "./Store.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../Store/cart-context";
const product = [
  {
    code: 1,
    name: "US Polo",
    description: "100% Cotton",
    price: 1200,
    L: 10,
    M: 20,
    S: 15,
  },
  {
    code: 2,
    name: "Louis Viston",
    description: "100% Cotton",
    price: 1500,
    L: 11,
    M: 21,
    S: 16,
  },
  {
    code: 3,
    name: "Armani",
    description: "100% Cotton",
    price: 1700,
    L: 8,
    M: 12,
    S: 9,
  },
];

const Store = (props) => {
  const cartctx = useContext(CartContext);
  let numberOfCartitems = 0;
  cartctx.items.forEach((item) => {
    numberOfCartitems = numberOfCartitems + +item.quantity;
  });

  const productlist = product.map((item, i) => (
    <ProductItem
      key={i}
      code={item.code}
      name={item.name}
      description={item.description}
      price={item.price}
      L={item.L}
      M={item.M}
      S={item.S}
      item={item}
    />
  ));
  return (
    <section>
      <div className={classes.containor}>
        <h2>Tees</h2>
        <Button onClick={props.onclick}>
          Cart<span>{numberOfCartitems}</span>
        </Button>
        <div className={classes.cards}>{productlist}</div>
      </div>
    </section>
  );
};
export default Store;
