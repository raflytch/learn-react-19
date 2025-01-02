import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
          setCounter((counter) => counter + 1);
          setCounter((counter) => counter + 1);

          console.log(counter);
        }}
      >
        Increment +3
      </button>

      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
