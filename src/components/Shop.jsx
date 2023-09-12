import "../stylesheets/Shop.css";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Product from "./Product";

const rawUrls = ["https://fakestoreapi.com/products/1"];

function Shop() {
  const { items, setItems } = useContext(CartContext);


  return (
    <>
      <Navbar />
      <h1>Da shop</h1>
      {
        rawUrls.map((rawUrl, index) => {
          return(<Product rawUrl={rawUrl} key={index}/>)
        })
      }
    </>
  );
}

export default Shop;
