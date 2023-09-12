import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import { useContext } from "react";

export default function Cart() {
    const {items, setItems} = useContext(CartContext)
  return (
    <>
      <Navbar />
      <h1>Cart</h1>
    </>
  );
}
