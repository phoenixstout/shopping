import "../stylesheets/Shop.css";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Product from "./Product";



function Shop({data}) {
  const { items, setItems } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <h1>Da shop</h1>
      <div className="productsWrapper">
        {data.map((rawUrl, index) => {
          return <Product data={data[0]} key={index} />;
        })}
      </div>
    </>
  );
}

export default Shop;
