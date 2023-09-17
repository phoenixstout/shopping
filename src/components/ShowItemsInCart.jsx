import { CartContext } from "./CartContext";
import { useContext, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";

export default function ShowItemsInCart() {
  const { products, setProducts, totalInCart } = useContext(CartContext);
  const [productTotal, setProductTotal] = useState(0)
  const rowData = products.filter((product) => {
    return product.quantity > 0;
  });
  
  
  useEffect(()=>{
    let tempProductTotal = 0;
    for (let product of products) {
      tempProductTotal += product.total;
    }
    tempProductTotal = Number(tempProductTotal.toFixed(2))
    setProductTotal(tempProductTotal)
  }, [products])
  
  if (totalInCart == 0) return <div>Nothing Here</div>;

  function handleDelete(product) {
    let temp = [...products];
    for (let productInd of temp) {
      if (productInd.id == product.id) {
        productInd.quantity = 0;
        productInd.total = 0
      }
      setProducts(temp);
    }
  }

  return (
    <>
      <table className="cartTable">
        <tbody>
          <tr className="cartRow">
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
          {rowData.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.total}</td>
                <td>
                  <button onClick={() => handleDelete(product)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="checkout">
        <i className="checkout-text">Your total is ${productTotal}</i>
        <button>Checkout</button>
      </div>
    </>
  );
}
