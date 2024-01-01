import { CartApp } from "./components/CartApp";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <CartApp />
      </CartProvider>
    </div>
  );
}

export default App;
