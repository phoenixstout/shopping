import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";

const rawUrls = ["https://fakestoreapi.com/products/1"];

export default function Router() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length == 0) {
      const promises = [];
      for (let rawUrl of rawUrls) {
        promises.push(fetch(rawUrl).then((r) => r.json()));
      }

      Promise.all(promises).then((r) => {
        setProducts(r);
      });
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <CartContext.Provider value={{ items, setItems }}>
          <Shop data={products} />
        </CartContext.Provider>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/Cart",
      element: (
        <CartContext.Provider value={{ items, setItems }}>
          <Cart />
        </CartContext.Provider>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
