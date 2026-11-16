"use client";
import { useState, useEffect } from "react";

export default function EmployeeTimer() {
  const [counter, setCounter] = useState(0);
    useEffect(()=> {
      console.log("Effect executed");
      const interval = setInterval(() => {
        setCounter((preCount) => preCount + 1);
      }, 1000);
      return () => {
        console.log("Effect cleaned up");
        clearInterval(interval);}
    }, [])
  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
}
