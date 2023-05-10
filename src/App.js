import logo from './logo.svg';
import './App.css';
import React from "react";
import pokemon from "./pokemon.json"

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}>
      <h1 className={"title"}>Pokemon Search</h1>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
        {pokemon.map((pokemon) => (
            <tr key={pokemon.id}>
                <th>{pokemon.name.english}</th>
                <th>{pokemon.type.join(", ")}</th>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
