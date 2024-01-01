import { useCartContext } from "../hooks/useCartContext";
import { CartItem } from "./CartItem";

export function CartList() {
  const { cartItems } = useCartContext();

  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
}
