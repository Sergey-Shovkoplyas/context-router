import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Product from "./Product";
import AddProduct from "./AddProduct";


export default function Shop() {

  const [ products, setProducts ] = useContext(ShopContext);

  return  (
    <>
      <h1>Shop</h1>

      <AddProduct />

      <ul className="products__items">
        {products.map((item) => (
          <Product name={item.name} cost={item.cost} key={item.id} />
        ))}
      </ul>
    </>
  );
}