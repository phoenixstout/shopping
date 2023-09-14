import ProductClass from "./ProductClass";
import Router from "./Router";
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

function App() {
  const [products, setProducts] = useState([]);
  const rawUrls = [
    "https://fakestoreapi.com/products/1",
    "https://fakestoreapi.com/products/2",
  ];

  useEffect(() => {
    if (products.length == 0) {
      const promises = [];
      for (let rawUrl of rawUrls) {
        promises.push(fetch(rawUrl).then((r) => r.json()));
      }

      const products = [];
      Promise.all(promises).then((r) => {
        for (let item of r) {
          products.push(new ProductClass(item));
        }
        setProducts(products);
      });
    }
  }, []);

  let totalInCart = 0
  return (
    <>
      <CartContext.Provider value={{ products, setProducts, totalInCart }}>
        <Router />
      </CartContext.Provider>

      <div>App</div>
    </>
  );
}

export default App;
