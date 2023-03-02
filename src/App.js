import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { Landing } from "./components/Landing";
import { Pokemon } from "./components/Pokemon";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState();
  const [isHome, setIsHome] = useState(false);
  const [selected, setSelected] = useState();
  const [firstTen, setFirstTen] = useState([]);

  async function grabTen() {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const data = await res.json();
      setFirstTen(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    grabTen();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
      const data = await res.json();
      //set data to a state value
      setSelected(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function apiCall(username, email, pass) {
    try {
      const obj = {
        username: username,
        email: email,
        password: pass,
      };
      const res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      const data = await res.json();
      //handle data
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      {/* {isHome ? <Home /> : <Landing />}
      <button onClick={() => setIsHome(!isHome)}>Change Page</button> */}
      <h1>useEffect Demo</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setPokemon(e.target.value)}
          placeholder="Pokemon Name"
        />
        <button type="submit">Search</button>
      </form>
      {selected && (
        <Pokemon name={selected.name} image={selected.sprites.front_shiny} />
      )}
      {firstTen.map((item, i) => (
        <Pokemon key={i} name={item.name} />
      ))}
    </div>
  );
}

export default App;
