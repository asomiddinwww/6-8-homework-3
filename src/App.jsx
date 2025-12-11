import React, { createContext, useState } from "react";
import Conmonent1 from "./components/Conmonent1";

export const Context = createContext();
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider
      value={{
        count,
        setCount,
      }}
    >
      <div className="border p-5">
        <h2>Count: {count}</h2>
        <Conmonent1 />
      </div>
    </Context.Provider>
  );
};

export default App;
