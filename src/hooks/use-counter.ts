import { useState } from "react";

export const useCounter = (from?: number) => {
  const [count, setCount] = useState<number>(from || 0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const incrementBy = (n: number) => setCount(c => c + n);
  const decrementBy = (n: number) => setCount(c => c - n);
  const reset = () => setCount(0);

  return [
    count,
    { increment, decrement, incrementBy, decrementBy, reset }
  ] as const;
};
