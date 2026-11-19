"use client";

import React, { useState } from "react";
import { Button } from "./Button";

function BgChanger() {
  const [color, setColor] = useState("olive");
  const changeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
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
          <Button size="sm" id="blue" onClick={changeColor}>
            Blue
          </Button>
          <Button id="red" variant="danger" onClick={changeColor}>
            Red
          </Button>
          <Button id="black" variant="ghost" onClick={changeColor}>
            Black
          </Button>
          <Button id="green" variant="secondary" onClick={changeColor}>
            Green
          </Button>
          <Button id="white" variant="white" onClick={changeColor}>
            White
          </Button>
        </div>
      </div>
    </>
  );
}

export default BgChanger;
