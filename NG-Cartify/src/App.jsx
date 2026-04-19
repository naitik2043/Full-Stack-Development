import { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

import Laptop from "./assets/Laptop.png";
import Phone from "./assets/Phone.png";
import Charger from "./assets/Charger.png";

import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 80000,
      image: Laptop,
    },

    {
      id: 2,
      name: "Mobile",
      price: 30000,
      image: Phone,
    },

    {
      id: 3,
      name: "Charger",
      price: 1000,
      image: Charger,
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function changeQty(id, type) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: type === "inc" ? item.qty + 1 : item.qty - 1,
              }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  }

  const totalAmt = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <Navbar cartCount={cart.length} setSearch={setSearch} />

      <div className="container">
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
          cart={cart}
        />

        <Cart
          cart={cart}
          totalAmt={totalAmt}
          removeFromCart={removeFromCart}
          changeQty={changeQty}
        />
      </div>

      <Footer />
    </div>
  );
}
