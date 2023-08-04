import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from './CartItem.module.css'
const CartItems = (props) => {
  return (
    <tr key={props.id}>
      <Row>
        <Col>
          <div>
            <span style={{ padding: "0px" }}>{props.name}</span>
          </div>
        </Col>
        <Col>
          <span className={classes.price}>{props.price}</span>
        </Col>
        <Col>
          <span className={classes.quantity}>{props.quantity}</span>
        </Col>
      </Row>
    </tr>
  );
};
export default CartItems;
