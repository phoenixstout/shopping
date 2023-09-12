import "../stylesheets/Shop.css";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Product from "./Product";

const rawUrls = [
  "https://fakestoreapi.com/products/1",
  "https://fakestoreapi.com/products/2",
  "https://fakestoreapi.com/products/3",
  "https://fakestoreapi.com/products/4",
  "https://fakestoreapi.com/products/5",
  "https://fakestoreapi.com/products/6",
  "https://fakestoreapi.com/products/7",
  "https://fakestoreapi.com/products/8",
  "https://fakestoreapi.com/products/9",
  "https://fakestoreapi.com/products/10"
];

function Shop() {
  const { items, setItems } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <h1>Da shop</h1>
      <div className="productsWrapper">
        {rawUrls.map((rawUrl, index) => {
          return <Product rawUrl={rawUrl} key={index} />;
        })}
      </div>
    </>
  );
}

export default Shop;
