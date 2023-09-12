import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import { useContext } from "react";
import ShowItemInCart from "./ShowItemInCart";

export default function Cart() {
    const {items, setItems} = useContext(CartContext)
  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      <div className="cartWrapper">
        {items.map(item => {
            return <ShowItemInCart item={item}  key={item.id}/>
        })}
      </div>
    </>
  );
}
