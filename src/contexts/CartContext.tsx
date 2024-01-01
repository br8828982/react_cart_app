import { createContext, ReactNode, useReducer } from "react";
import {
  CartActionTypes,
  CartContextType,
  CartItemType,
} from "../types/CartTypes";
import { cartReducer, initialState } from "../store/cartReducer";
import { storeItems } from "../data/items";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  const getItemById = (id: CartItemType["id"]) => {
    return storeItems.find((item) => item.id === id) || null;
  };

  const getItemQuantity = (id: CartItemType["id"]) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id: CartItemType["id"]) => {
    dispatch({ type: CartActionTypes.INCREASE_QUANTITY, payload: { id } });
  };

  const decreaseQuantity = (id: CartItemType["id"]) => {
    dispatch({ type: CartActionTypes.DECREASE_QUANTITY, payload: { id } });
  };

  const removeFromCart = (id: CartItemType["id"]) => {
    dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: { id } });
  };

  const getTotalQuantity = () => {
    return cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      const item = getItemById(cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  };

  const value: CartContextType = {
    getItemById,
    cartItems,
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalQuantity: getTotalQuantity(),
    totalPrice: getTotalPrice(),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
