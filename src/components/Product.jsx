import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product({ data }) {
  const { items, setItems} = useContext(CartContext);


  function handleAdd() {
    setItems((items) => [...items, data]);
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
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}
