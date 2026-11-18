"use client";

import { Button } from "../components/Button";
import { useTheme } from "./ThemeProvider";

function ThemeChanger () {
  const {setColor, setFColor} = useTheme();
  
  return (
    <div className="flex fixed bottom-0 left-0 right-0 justify-center m-6 px-6 bg-transparent border border-slate-100 rounded-4xl">
      <div className="flex gap-20 px-4 py-2 rounded-2xl" >
        
          <Button onClick={() => {setColor("blue"); setFColor("white")}}>
            Blue
          </Button>
          <Button onClick={() => {setColor("red"); setFColor("white")}}>
            Red
          </Button>
          <Button  onClick={() => {setColor("black"); ; setFColor("white")}}>
            Black
          </Button>
          <Button  onClick={() => {setColor("green"); ; setFColor("black")}}>
            Green
          </Button>
          <Button onClick={() => {setColor("white"); ; setFColor("black")}}>
            White
          </Button>
        </div>
      </div>
  );
}

export default ThemeChanger;
