import { useCartContext } from "../hooks/useCartContext";

export function CartInfo() {
  const { totalQuantity, totalPrice } = useCartContext();

  return (
    <>
      <h4>Total Quantity: {totalQuantity}</h4>
      <h4>Total: ${totalPrice}</h4>
    </>
  );
}
