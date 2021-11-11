import { useState } from 'react'

export const useProducts = () => {

  const [counter, setCounter] = useState(0);

  const increaseBy = (amount: number) => {
    setCounter((prev) => Math.max(prev + amount, 0));
  };
  return {
    counter,
    increaseBy,
  }
}