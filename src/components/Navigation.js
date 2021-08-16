import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {ShopContext} from "../context/ShopContext";



const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: gray;
  color: white;
  list-style: none; 
  li {
    margin: 0 20px;
    font-size: 20px;  
  }
  a {
    color: white;
  }
`

export default function Nav() {
  const [ products, setProducts ] = useContext(ShopContext);

  return  (
    <List>
      <Link to={'/'}>
        <li>Home</li>
      </Link>
      <Link to={'/about'}>
        <li>About</li>
      </Link>
      <Link to={'/planets'}>
        <li>Planets</li>
      </Link>
      <Link to={'/shop'}>
        <li>Shop ({products.length})</li>
      </Link>
    </List>
  );
}