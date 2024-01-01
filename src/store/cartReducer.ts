import { CartAction, CartActionTypes } from "../types/CartTypes";
import { CartItemType } from "../types/CartTypes";

export const initialState: CartItemType[] = [];

export const cartReducer = (state: CartItemType[], action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.INCREASE_QUANTITY: {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (!existingItem) {
        return [...state, { id: action.payload.id, quantity: 1 }];
      }

      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    case CartActionTypes.DECREASE_QUANTITY: {
      const lastItem =
        state.find((item) => item.id === action.payload.id)?.quantity === 1;

      if (lastItem) {
        return state.filter((item) => item.id !== action.payload.id);
      }

      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return state.filter((item) => item.id !== action.payload.id);
    }
    default:
      return state;
  }
};
