import { useCartContext } from "../hooks/useCartContext";
import { CartItem } from "./CartItem";

export function CartList() {
  const { totalQuantity, cartItems } = useCartContext();

  if (totalQuantity === 0) {
    return <p>The cart is empty</p>;
  }

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
