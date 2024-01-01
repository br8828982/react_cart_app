import { CartItemType } from "../types/CartTypes";
import { useCartContext } from "../hooks/useCartContext";

export function CartItem({ id, quantity }: CartItemType) {
  const { getItemById, removeFromCart } = useCartContext();
  
  const item = getItemById(id);

  if (item === null) return null;

  return (
    <li>
      {item.name} - ${item.price} {quantity > 1 && `x ${quantity}`} = $
      {item.price * quantity}
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </li>
  );
}
