import { Link } from "react-router-dom";
import '../stylesheets/navbar.css'
import { useEffect } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function Navbar() {
    const {items, setItems} = useContext(CartContext)
   
  return (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={'/Cart'}>Cart</Link>
      <div>{items && items.length}</div>
    </nav>
  );
}
