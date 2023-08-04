import React, { useContext, useRef } from "react";
import classes from "./Product.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../Store/cart-context";
const ProductItem = (props) => {
  const qtyref = useRef();
  const cartctx = useContext(CartContext);
  const addtocartHandler = () => {
    const quantity = qtyref.current.value;
    cartctx.addItem({...props.item,quantity});
  };
  return (
    <div key={props.i} className={classes.card}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <span>${props.price}</span>
      <div>
        <h4>Available Quantity</h4>
        <span>L-{props.L}</span>
        <span>M-{props.M}</span>
        <span>S-{props.S}</span>
      </div>
      <input type="number" ref={qtyref}></input>
      <Button onClick={addtocartHandler} variant="primary">
        Add
      </Button>
    </div>
  );
};
export default ProductItem;
