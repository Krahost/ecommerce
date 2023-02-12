import React, { useContext } from "react";
import { Product } from "../shop/products";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>GHC {price}</p>
        <div className="countHandler">
          <button onClick={() => addToCart(id)}>+</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => removeFromCart(id)}>
            - {cartItemAmount < 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
