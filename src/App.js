import { useState } from "react";
import CountDisplay from "./components/CountDisplay";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // function useState(initialVal) {

  //   let state = initialVal || undefined;

  //   function setState(newVal) {
  //     state = newVal
  //   }

  //   return [state, setState];
  // }

  return (
    <div className="App">
      <h1>State Demo</h1>
      <CountDisplay count={count} setCount={setCount} />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count === 3 && <p>The number is three</p>}
      {/* {count === 5 ? <p>The number is 5</p> : <p>This number isn't 5</p>} */}
      <p>{count === 5 ? "The number is 5" : "This number isn't 5"}</p>
    </div>
  );
}

export default App;
