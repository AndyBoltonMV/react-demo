import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function submitHandler(event) {
    event.preventDefault();
    const obj = {
      username,
      email,
      password,
    };
    console.log(obj);
    setUsername();
    setEmail();
    setPassword();
  }

  return (
    <div
      className="App"
      // onContextMenu={(e) => {
      //   e.preventDefault();
      //   console.log("look here");
      // }}
    >
      <h1>Event Demo</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
