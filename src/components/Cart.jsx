import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import { useContext } from "react";
import ShowItemInCart from "./ShowItemInCart";

export default function Cart() {
    const {products, setProducts} = useContext(CartContext)
  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      <div className="cartWrapper">
        {products.map(product => {
            return <ShowItemInCart item={product}  key={product.data.id}/>
        })}
      </div>
    </>
  );
}
