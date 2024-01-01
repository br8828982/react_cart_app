import { useCartContext } from "../hooks/useCartContext";
import { CartItemControlsProps } from "../types/CartTypes";

export function CartItemControls({ id }: CartItemControlsProps) {
  const { getItemQuantity, increaseQuantity, decreaseQuantity } =
    useCartContext();
  const quantity = getItemQuantity(id);

  if (quantity < 1) {
    return <button onClick={() => increaseQuantity(id)}>Add to Cart</button>;
  }

  return (
    <>
      <button onClick={() => decreaseQuantity(id)}>-1</button>
      <strong>{quantity}</strong>
      <button onClick={() => increaseQuantity(id)}>+1</button>
    </>
  );
}
