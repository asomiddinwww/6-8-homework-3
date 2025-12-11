import { useContext } from "react";
import { Context } from "../App";

const Component3 = () => {
  const { setCount } = useContext(Context); 
  return (
    <div className="border p-5">
      Component3
      <div className="p-5 flex items-center gap-2">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="p-1 pl-3 pr-3 flex items-center justify-center w-10 h-10 text-center text-white text-2xl bg-green-500"
        >
          +
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="p-1 pl-3 pr-3 flex items-center justify-center w-10 h-10 text-center text-white text-2xl bg-red-500"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Component3;
