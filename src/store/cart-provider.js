import React, { useReducer } from "react";
import { bestSellers } from "../looping/looping";

//import { bestSellers } from "../looping/organic";
import { CartContext } from "./cart-context";

const defaultCartState = {
  bestSellers: [],
  totalAmount: bestSellers.curPrice,
};

const cartReducer = (state, action) => {
  // console.log(state, action);
  if (action.type === "ADD") {
    const existingCartItemIndex = state.bestSellers.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCardItem = state.bestSellers[existingCartItemIndex];
    let updatedItems;

    if (existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        quantity: +existingCardItem.quantity + 1,
      };
      updatedItems = [...state.bestSellers];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.bestSellers.concat(action.item);
    }

    return {
      bestSellers: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.bestSellers.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.bestSellers[existingCartItemIndex];

    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.bestSellers.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems = [...state.bestSellers];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { bestSellers: updatedItems };
  }

  if (action.type === "REMOVEPRODUCT") {
    let indexis = state.bestSellers.filter((item) => item.id !== action.id);

    return {
      bestSellers: [...indexis],
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (bestSellers) => {
    dispatchCartAction({ type: "ADD", item: bestSellers });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const removeProductFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVEPRODUCT", id: id });
  };

  const abc = {
    bestSellers: cartState.bestSellers,

    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeProduct: removeProductFromCartHandler,
  };

  return (
    <>
      <div>
        <CartContext.Provider value={abc}>
          {props.children}
        </CartContext.Provider>
      </div>
    </>
  );
};

export default CartProvider;
