import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";

export default function Product({ data }) {
  const { items, setItems } = useContext(CartContext);
  const [numToAdd, setNumToAdd] = useState(0);

  function handleAdd() {
    setItems((items) => [...items, data]);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleNum(up) {
    if(up) setNumToAdd(numToAdd=>numToAdd+1)
    if(!up) {
      if(numToAdd == 0) return
      setNumToAdd(numToAdd => numToAdd-1)
    }
  }

  if (!data) {
    return (
      <div className="productWrapper">
        <div>Loading</div>
      </div>
    );
  }

  return (
    <>
      <div className="productWrapper">
        {data && <img className="productImg" src={data.image} />}
        <div className="numInput">
          <div>{numToAdd}</div>
          <div className="increaseDecrease">
            <button onClick={()=> handleNum(true)}>+</button>
            <button onClick={()=> handleNum(false)}>-</button>
          </div>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
