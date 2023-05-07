import React, { useMemo } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import { addProduct } from "@/store/features/cart";
const CartCounter = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  // count cart
  const countCart = useMemo(() => {
    let counter: number = 0;
    cart.products.forEach((product) => {
      counter += product.quantity;
    });
    return counter;
  }, [cart]);
  // total price
  const totalPrice = useMemo(() => {
    let total: number = 0;
    cart.products.forEach((product) => {
      total += product?.price * product?.quantity;
    });
    return total.toFixed(2);
  }, [cart]);
  return (
    <>
      {cart.products.length > 0 ? <h1>{countCart}</h1> : null}
      <h2>{totalPrice} $</h2>
    </>
  );
};

export default CartCounter;
