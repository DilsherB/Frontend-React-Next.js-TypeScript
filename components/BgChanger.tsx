"use client";

import React, { useState } from "react";
import { Button } from "./Button";

function ThemeChanger() {
  const [color, setColor] = useState("olive");
  const setColorFun = (e: React.MouseEvent<HTMLButtonElement>) => {
    setColor(e.currentTarget.id || "olive");
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          id="btn container"
          className="flex justify-between px-4 py-1 h-10 border-slate-300 fixed bottom-6 inset-0 rounded-2xl bg-transparent"
        >
          <Button id="blue" onClick={setColorFun}>
            Blue
          </Button>
          <Button id="red" variant="danger" onClick={setColorFun}>
            Red
          </Button>
          <Button id="black" variant="ghost" onClick={setColorFun}>
            Black
          </Button>
          <Button id="green" variant="secondary" onClick={setColorFun}>
            Green
          </Button>
          <Button id="white" variant="white" onClick={setColorFun}>
            White
          </Button>
        </div>
      </div>
    </>
  );
}

export default ThemeChanger;
