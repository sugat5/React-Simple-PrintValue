import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={() => setResult(data)}> Prinnt Name</button>
      <h2>{result}</h2>
    </div>
  );
}
