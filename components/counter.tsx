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
      <div className="flex text-center justify-center m-4">
        <div className="w-20 border border-slate-400 px-2 rounded-md">Value: {counter}</div>
      </div>
      <div className="flex justify-center gap-10">
        <Button size="sm" onClick={increase}>Increase by 1</Button>
        <Button size="sm" onClick={decrease}>Decrease by 1</Button>
      </div>
    </>
  );
}
