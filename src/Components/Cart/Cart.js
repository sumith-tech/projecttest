import React, { useContext } from "react";
import CartItems from "./CartItems";
import classes from './Cart.module.css'
import Modal from "../../UI/Modal";
import CartContext from "../../Store/cart-context";
import { Button, Table } from "react-bootstrap";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const hasitem = cartctx.items.length > 0;
  let totalamount = 0;
  cartctx.items.forEach((item) => {
    totalamount += Number(item.quantity) * item.price;
  });
  

  const CartItem = cartctx.items.map((item, i) => (
    <CartItems
      key={i}
      dltid={item.dltid}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
    />
    
  ));

  return (
    <Modal>
      <div className={classes.Cart}>
        <section id="cart" className={classes.title}>
          <h2>Cart</h2>
          <button onClick={props.onClose} className={classes.btn}>
            X
          </button>
          <Table>
            <tr className={classes.row}>
              <th className={classes.item}>ITEM</th>
              <th className={classes.price}>PRICE</th>
              <th className={classes.qty}>QUANTITY</th>
            </tr>
            <tbody>{CartItem}</tbody>
          </Table>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalamount}</span>
          </div>
          <div className={classes.actions}>
            {hasitem && <Button>Purchase</Button>}
          </div>
        </section>
      </div>
    </Modal>
  );
};
export default Cart;
