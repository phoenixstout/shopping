import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";

export default function Product({ data }) {
  const { products, setProducts } = useContext(CartContext);
  const [numToAdd, setNumToAdd] = useState(0);
  
  function handleAdd() {
    let temp = [...products];
    for(let product of temp) {
      if(product.id == data.id) {
        product.quantity += numToAdd
        product.total = (product.price*product.quantity)
      }
    }
    setProducts(temp);
  }

  function handleNum(up) {
    if (up) setNumToAdd((numToAdd) => numToAdd + 1);
    if (!up) {
      if (numToAdd == 0) return;
      setNumToAdd((numToAdd) => numToAdd - 1);
    }
  }


  return (
    <>
      <div className="productWrapper">
        {data && <img className="productImg" src={data.image} />}
        <div className="price">${data.price}</div>
        <div className="numInput">
          <div>{numToAdd}</div>
          <div className="increaseDecrease">
            <button onClick={() => handleNum(true)}>+</button>
            <button onClick={() => handleNum(false)}>-</button>
          </div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
