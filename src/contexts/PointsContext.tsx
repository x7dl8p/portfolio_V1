"use client";

import { createContext, useContext, useState } from "react";

interface PointsContextType {
  points: number;
  addPoints: (value: number) => void;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export function PointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(0);

  const addPoints = (value: number) => {
    setPoints((prev) => Math.min(prev + value, 100));
  };

  return (
    <PointsContext.Provider value={{ points, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error("usePoints must be used within a PointsProvider");
  }
  return context;
}
