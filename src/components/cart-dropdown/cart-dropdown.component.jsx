import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import Image from "../../assets/shopping-cart.png";

import {
  CartDropDownContainer,
  CartItems,
  ShoppingCartContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length === 0 ? (
          <ShoppingCartContainer>
            <EmptyMessage>Your cart is empty!</EmptyMessage>
            <img
              src={Image}
              alt="shopping-cart-icon"
              style={{ width: "100px" }}
            />
          </ShoppingCartContainer>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
