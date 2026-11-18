"use client";

import { ReactNode, useContext, useState, createContext } from "react";

interface ThemeContextType {
  color: string;
  fColor: string;
  setColor: (color: string) => void;
  setFColor: (fColor: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState("olive");
  const [fColor, setFColor] = useState("white")
  return (
    <ThemeContext.Provider value={{ color, setColor, fColor, setFColor }}>
      <div className="min-h-screen duration-200" style={{ backgroundColor: color, color: fColor }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }
  return context;
}
