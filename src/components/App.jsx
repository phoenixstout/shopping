import ProductClass from "./ProductClass";
import Router from "./Router";
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

function App() {
  const [products, setProducts] = useState([]);
  const [totalInCart, setTotalInCart] = useState(0)
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

  useEffect(()=> {
    for(let product of products) {
        console.log(product.data)
        setTotalInCart(totalInCart => totalInCart+product.data.num_in_cart)
    }
  }, [products])


  return (
    <>
      <CartContext.Provider value={{ products, setProducts, totalInCart }}>
        <Router />
        <button onClick={()=> console.log(products)}>Show products</button>
      </CartContext.Provider>

      <div>App</div>
    </>
  );
}

export default App;
