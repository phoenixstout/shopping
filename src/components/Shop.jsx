import "../stylesheets/Shop.css";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Product from "./Product";



function Shop() {
  const { products, setProducts } = useContext(CartContext);
  if(!products) return

  return (
    <>
      <Navbar />
      <h1>Shop</h1>
      <div className="productsWrapper">
        {products.map((product, index) => {
          return <Product data={product} key={index} />;
        })}
      </div>
    </>
  );
}

export default Shop;
