import React, { useState, createContext } from "react";

export const ShopContext = createContext();

export const ShopProvider = props => {
  const [ products, setProducts ] = useState([
    {
      id: 1,
      name: 'Shirt',
      cost: '100$'
    },
    {
      id: 2,
      name: 'Panties',
      cost: '120$'
    },
    {
      id: 3,
      name: 'Tie',
      cost: '35$'
    }
  ]);

  return (
    <ShopContext.Provider value={[ products, setProducts ]}>
      {props.children}
    </ShopContext.Provider>
  )
}
