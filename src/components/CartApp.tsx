import { CartList } from "./CartList";
import { CartInfo } from "./CartInfo";
import { StoreList } from "./StoreList";

export function CartApp() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <h2>Store</h2>
      <StoreList />
      <h2>Cart</h2>
      <CartList />
      <CartInfo />
    </>
  );
}
