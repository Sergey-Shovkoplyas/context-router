import React from "react";

export default function Product({ name, cost}) {

  return  (
    <li className="product">
      {name}: {cost}
    </li>
  );
}