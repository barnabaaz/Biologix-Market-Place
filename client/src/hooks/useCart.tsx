import React from "react";
import { Cart } from "../packageType";

export interface UseCart {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addItem: () => void;
  deleteItem: () => void;
  addQuantity: () => void;
  removeQuantity: () => void;
}
const useCart = (): UseCart => {
  const [cart, setCart] = React.useState<Cart[]>([]);
  // add new item to cart
  const addItem = () => {};
  // remove item from cart
  const deleteItem = () => {};
  // add a quantity to to the a cart item
  const addQuantity = () => {};
  // remove quantity from a cart item
  const removeQuantity = () => {};

  return {
    cart,
    setCart,
    addItem,
    deleteItem,
    addQuantity,
    removeQuantity,
  };
};

export default useCart;
