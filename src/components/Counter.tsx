import { useState } from "react";

interface CounterProps {
  title: string;
}

const Counter = ({ title }: CounterProps) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 data-testid="header">{title}</h1>
      <h2 data-testid="counter">{count}</h2>
      <button type="button" onClick={handleClick} data-testid="button">
        Click
      </button>
    </div>
  );
};

export default Counter;
