import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <p className="counter__items counter__items--heading">Counter</p>
      <p className="counter__items counter__items--value">{counter}</p>
      <div className="counter__button-container">
        <button
          className="counter__button counter__button--decrement"
          onClick={handleDecrement}
        >
          &minus;
        </button>

        <button
          className="counter__button counter__button--increment"
          onClick={handleIncrement}
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

export default Counter;
