import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Planets() {

  const [ planets, setPlanets ] = useState([]);

  const getPlanets = async () => {
    const request = await fetch('https://swapi.dev/api/planets/');
    const data = await request.json();

    setPlanets(data.results);
  }

  const getPlanetId = (url) => {
    const idRegExp = /\/([1-9, 10]*)\/$/;
    const id = url.match(idRegExp)[1];
    return id;
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return  (
    <>
      <h1>Planets</h1>

      <ul className="planet__items">
        {planets.map((item) => (
          <li className="planet__item" key={item.name}>
            <Link to={`/planets/${getPlanetId(item.url)}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}