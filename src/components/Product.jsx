import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";

export default function Product({ data }) {
  const { products, setProducts } = useContext(CartContext);
  const [numToAdd, setNumToAdd] = useState(0);
  
  function handleAdd() {
    let temp = [...products];
    for(let product of temp) {
      if(product.data.id == data.data.id) {
        product.data.num_in_cart += numToAdd
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
        {data && <img className="productImg" src={data.data.image} />}
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
