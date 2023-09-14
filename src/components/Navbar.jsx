import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const { products, setProducts, totalInCart } = useContext(CartContext);


  return (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/Cart"}>Cart</Link>
      <div>{totalInCart}</div>
    </nav>
  );
}
