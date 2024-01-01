import { StoreItem } from "./StoreItem";
import { storeItems } from "../data/items";

export function StoreList() {
  return (
    <ul>
      {storeItems.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
