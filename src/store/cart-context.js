import { createContext } from "react";

export const CartContext = createContext({
  bestSellers: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  removeProduct: (id) => {},
  addProductToDetail: (item) => {},
});
