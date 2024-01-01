import { StoreItemType } from "../types/StoreTypes";
import { CartItemControls } from "./CartItemControls";

export function StoreItem({ id, name, price }: StoreItemType) {
  return (
    <li>
      {name} - ${price} <CartItemControls id={id} />
    </li>
  );
}
