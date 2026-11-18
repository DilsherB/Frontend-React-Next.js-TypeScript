"use client";

import { Button } from "../components/Button";
import { useTheme } from "./ThemeProvider";

function ThemeChanger () {
  const {setColor} = useTheme();
  
  return (
    <div className="flex fixed bottom-0 left-0 right-0 justify-center m-6 px-6 bg-transparent border border-slate-100 rounded-4xl">
      <div className="flex gap-20 px-4 py-2 rounded-2xl" >
        
          <Button onClick={() => setColor("blue")}>
            Blue
          </Button>
          <Button onClick={() => setColor("red")}>
            Red
          </Button>
          <Button  onClick={() => setColor("black")}>
            Black
          </Button>
          <Button  onClick={() => setColor("green")}>
            Green
          </Button>
          <Button onClick={() => setColor("white")}>
            White
          </Button>
        </div>
      </div>
  );
}

export default ThemeChanger;
