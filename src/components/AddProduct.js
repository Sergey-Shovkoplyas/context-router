import React, {useState, useContext} from "react";
import {ShopContext} from "../context/ShopContext";

const AddProduct = () => {
  const [name, setName] = useState();
  const [cost, setCost] = useState();

  const [products, setProducts] = useContext(ShopContext);

  const updateName = e => {
    setName(e.target.value)
  }

  const updateCost = e => {
    setCost(e.target.value)
  }

  const addProduct = e => {
    e.preventDefault();

    setProducts(prevProducts => [...prevProducts, {name: name, cost: cost}]);
  }

  return (
    <>
      <h3>Add new product</h3>
      <form onSubmit={addProduct}>
        <input type="text" placeholder='name' name='name' value={name} onChange={updateName}/>
        <input type="text" placeholder='cost' name='cost' value={cost} onChange={updateCost}/>
        <button>Add</button>
      </form>
    </>
  )
}

export default AddProduct;