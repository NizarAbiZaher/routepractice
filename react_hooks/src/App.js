import { useState } from "react";
import { useThing } from "./Hooks";

function App() {
  const counter = useThing();
  return (
    <div className="App">
      <h1>{counter.value}</h1>
      <button onClick={counter.increase}>
        plus
      </button>
      <button onClick={counter.decrease}>
        minus
      </button>      
      <button onClick={counter.zero}>
        zero
      </button>
    </div>
  );
}

export default App;
