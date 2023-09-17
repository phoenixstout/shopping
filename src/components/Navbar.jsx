import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import Icon from "@mdi/react";
import { mdiHome, mdiCartOutline } from "@mdi/js";

export default function Navbar() {
  const { products, setProducts, totalInCart } = useContext(CartContext);

  return (
    <div className="navbar">
      <Link to={"/"}>
        <Icon path={mdiHome} size={1.25} aria-label="Cart" />
      </Link>
      <div className="cart-wrapper">
        <Link to={"/Cart"}>
          <Icon path={mdiCartOutline} size={1.25} aria-label="Home" />
        </Link>
        <div className="total-in-cart">{totalInCart}</div>
      </div>
    </div>
  );
}
