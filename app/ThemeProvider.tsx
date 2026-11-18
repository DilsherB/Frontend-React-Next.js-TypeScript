"use client";

import { ReactNode, useContext, useState, createContext } from "react";

interface ThemeContextType {
  color: string;
  setColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState("olive");
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <div className="min-h-screen duration-200" style={{ background: color }}>
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
