import React from "react";
import { useState, useEffect } from "react";

export default function PlannetDetail({ match }) {
  const itemId = match.params.id;
  const [ planet, setPlanet ] = useState([]);

  const getPlanet = async () => {
    const request = await fetch(`https://swapi.dev/api/planets/${itemId}/`);
    const data = await request.json();
    setPlanet(data);
  }

  useEffect(() => {
    getPlanet();
  }, []);
  return  (
    <>
      <h1>{planet.name}</h1>
      <ul>
        <li>Climate: {planet.climate}</li>
        <li>Rotation period: {planet.rotation_period}</li>
      </ul>
      <img className="planet__preview"  src={`https://starwars-visualguide.com/assets/img/planets/${itemId}.jpg`} alt="planet"/>

    </>
  );
}