import { CartAction, CartActionTypes } from "../types/CartTypes";
import { CartItemType } from "../types/CartTypes";

export const initialState: CartItemType[] = [];

const getItemInCartById = (state: CartItemType[], id: CartItemType["id"]) => {
  return state.find((item) => item.id === id) || null;
};

const updateQuantity = (
  state: CartItemType[],
  id: CartItemType["id"],
  ve: number
) => {
  return state.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + ve } : item
  );
};

const removeFromCart = (state: CartItemType[], id: CartItemType["id"]) => {
  return state.filter((item) => item.id !== id);
};

const increaseQuantity = (state: CartItemType[], id: CartItemType["id"]) => {
  const existingItem = getItemInCartById(state, id);

  if (!existingItem) {
    return [...state, { id, quantity: 1 }];
  }

  return updateQuantity(state, id, 1);
};

const decreaseQuantity = (state: CartItemType[], id: CartItemType["id"]) => {
  const item = getItemInCartById(state, id);

  const lastItem = item?.quantity === 1;

  if (lastItem) {
    return removeFromCart(state, id);
  }

  return updateQuantity(state, id, -1);
};

export const cartReducer = (state: CartItemType[], action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.INCREASE_QUANTITY:
      return increaseQuantity(state, action.payload.id);

    case CartActionTypes.DECREASE_QUANTITY:
      return decreaseQuantity(state, action.payload.id);

    case CartActionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload.id);

    default:
      return state;
  }
};
