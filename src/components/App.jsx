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
        <button onClick={()=> console.table(products)}>Show products</button>
      </CartContext.Provider>
    </>
  );
}

export default App;
