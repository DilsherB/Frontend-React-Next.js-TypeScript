"use client";
import { useState } from "react";
import { Button } from "./Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    counter >= 20
      ? alert("Value cann't be greater than 20")
      : setCounter((pre) => pre + 1);
  };
  const decrease = () => {
    if (counter <= 0) {
      alert("Value cann't be less than 0");
      return;
    }
    setCounter((pre) => pre - 1);
  };
  return (
    <>
      <div className="text-center">Value: {counter}</div>
      <div className="flex justify-center gap-10">
        <Button onClick={increase}>Increase by 1</Button>
        <Button onClick={decrease}>Decrease by 1</Button>
      </div>
    </>
  );
}
