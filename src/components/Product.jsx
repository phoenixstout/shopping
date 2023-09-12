import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product({ rawUrl }) {
  const { items, setItems } = useContext(CartContext);

  const [data, setData] = useState();

  function handleAdd() {
    setItems((items) => [...items, data]);
  }

  useEffect(() => {
    fetch(rawUrl)
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  if(!data) {
    return (
        <div className="productWrapper">
            <div>Loading</div>
        </div>
    )
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
