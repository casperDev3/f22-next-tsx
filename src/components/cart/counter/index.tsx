import React, { useMemo } from "react";
// redux
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

const CartCounter = () => {
  const cart = useSelector((state: RootState) => state.cart);
  // watch the cart state and return the total count of products
  const cartCount = useMemo(() => {
    return cart?.products.length;
  }, [cart]);
  return <div>{cartCount}</div>;
};

export default CartCounter;
