import Router from "./Router";
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

function App() {
  const [products, setProducts] = useState([]);
  const [totalInCart, setTotalInCart] = useState(0)
  const rawUrls = [
    "https://fakestoreapi.com/products/1",
    "https://fakestoreapi.com/products/2",
    "https://fakestoreapi.com/products/3",
    "https://fakestoreapi.com/products/4",
    "https://fakestoreapi.com/products/5",
    "https://fakestoreapi.com/products/6",
    "https://fakestoreapi.com/products/7",
    "https://fakestoreapi.com/products/8",
    "https://fakestoreapi.com/products/9",
    "https://fakestoreapi.com/products/10",
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
          products.push({...item, quantity:0, total:0});
        }
        setProducts(products);
      });
    }
  }, []);

  useEffect(()=> {
    let temp_total = 0
    for(let product of products) {
        temp_total+=product.quantity
    }

    setTotalInCart(temp_total)
  }, [products])


  return (
    <>
      <CartContext.Provider value={{ products, setProducts, totalInCart }}>
        <Router />
      </CartContext.Provider>
    </>
  );
}

export default App;
