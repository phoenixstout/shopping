import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import { useState } from "react";

export default function Router() {
  const [items, setItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <CartContext.Provider value={{ items, setItems }}>
          <Shop />
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
