import { useState } from "react";

const Counter = ({ name }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>
        Counter {name} {counter}
      </h1>
      <button onClick={handleClick}>Menambahkan Counter</button>
    </div>
  );
};

export default Counter;
