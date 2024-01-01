import { StoreItem } from "./StoreItem";
import { storeItems } from "../data/items";

export function StoreList() {
  return (
    <>
      <h2>Store</h2>
      <ul>
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
}
