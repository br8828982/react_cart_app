import { CartList } from "./CartList";
import { CartInfo } from "./CartInfo";
import { StoreList } from "./StoreList";

export function CartApp() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <StoreList />
      <CartList />
      <CartInfo />
    </>
  );
}
