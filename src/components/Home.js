import React, {useContext} from "react";
import {TestContext} from "../context/TestContext";

export default function Home() {
  const contextValue = useContext(TestContext);

  console.log('contextValue', contextValue)

  return  (
    <>
      <h1>Home</h1>

      <h2>TestProvider:</h2>
      <p>{contextValue}</p>
    </>
  );
}
