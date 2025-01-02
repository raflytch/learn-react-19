import { useState } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [showCounter, setShowCounter] = useState(true);

  const handleCounterInvisible = (event) => {
    setShowCounter(event.target.checked);
  };

  return (
    <div>
      {showCounter ? (
        <Counter name="A" key={1} />
      ) : (
        <Counter name="B" key={2} />
      )}

      {/* {showCounter ? (
        <>
          <div>
            <Counter name="A" />
          </div>
        </>
      ) : (
        <>
          <section>
            <Counter name="B" />
          </section>
        </>
      )} */}

      {/* {showCounter && <Counter name="C" key={1} />}
      {!showCounter && <Counter name="D" key={2} />} */}
      <label htmlFor="checkbox">Tambahkan Counter ke-2</label>
      <input
        type="checkbox"
        checked={showCounter}
        onChange={handleCounterInvisible}
      />
    </div>
  );
};

export default CounterApp;
