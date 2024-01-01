import { StoreItemType } from "./StoreTypes";

export interface CartItemType {
  id: number;
  quantity: number;
}

export interface CartItemControlsProps {
  id: CartItemType["id"];
}

export interface CartContextType {
  cartItems: CartItemType[];
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: CartItemType["id"]) => void;
  decreaseQuantity: (id: CartItemType["id"]) => void;
  removeFromCart: (id: CartItemType["id"]) => void;
  totalQuantity: number;
  totalPrice: number;
  getItemById: (id: CartItemType["id"]) => StoreItemType | null;
}

export enum CartActionTypes {
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

type PayloadType = {
  id: CartItemType["id"];
};

interface IncreaseQuantityAction {
  type: CartActionTypes.INCREASE_QUANTITY;
  payload: PayloadType;
}

interface DecreaseQuantityAction {
  type: CartActionTypes.DECREASE_QUANTITY;
  payload: PayloadType;
}

interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: PayloadType;
}
export type CartAction =
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | RemoveFromCartAction;
