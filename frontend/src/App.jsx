import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    axios("/api/jokes")
      .then((resolve) => setJoke(resolve.data))
      .catch((rej) => console.log(rej));
  }, []);

  return (
    <>
      <h1>{joke.length}</h1>
      {joke.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
