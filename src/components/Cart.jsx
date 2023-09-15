import Navbar from "./Navbar";
import ShowItemsInCart from "./ShowItemsInCart";
import "../stylesheets/cart.css";

export default function Cart() {

  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      <div className="cartWrapper">
        <ShowItemsInCart />
      </div>
    </>
  );
}
