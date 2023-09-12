import "../stylesheets/Shop.css";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";

function Shop() {
  const {items, setItems} = useContext(CartContext)

  function handleClick() {
    setItems(items => [...items, 1])
  }

  return (
    <>
      <Navbar />
      <h1>Da shop</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default Shop;
