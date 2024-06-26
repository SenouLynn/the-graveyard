import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import "./index.css";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/api/hello-world")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log("Response", data);

  return (
    <>
      <div className="">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-blue-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
