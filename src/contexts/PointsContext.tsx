'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface PointsContextType {
  points: number;
  addPoints: (amount: number, reason: string) => void;
  recordVisit: (page: string, customMessage?: string) => void;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export function PointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(0);
  const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set());

  // Load visited pages from localStorage on mount
  useEffect(() => {
    const savedVisitedPages = localStorage.getItem('visitedPages');
    if (savedVisitedPages) {
      setVisitedPages(new Set(JSON.parse(savedVisitedPages)));
    }
  }, []);

  // Save visited pages to localStorage when updated
  useEffect(() => {
    localStorage.setItem('visitedPages', JSON.stringify(Array.from(visitedPages)));
  }, [visitedPages]);

  // Load points from localStorage on mount
  useEffect(() => {
    const savedPoints = localStorage.getItem('explorationPoints');
    if (savedPoints) {
      setPoints(Number(savedPoints));
    }
  }, []);

  // Save points to localStorage when updated
  useEffect(() => {
    localStorage.setItem('explorationPoints', points.toString());
  }, [points]);

  const addPoints = (amount: number, reason: string) => {
    if (points >= 100) return; // Max points reached
    
    const newPoints = Math.min(points + amount, 100);
    const isMaxPoints = newPoints === 100 && points !== 100;
    setPoints(newPoints);

    toast.custom((t) => (
      <div className="relative rounded-lg border bg-card/60 px-4 py-2 shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {isMaxPoints ? (
            <>
              <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-500">🎉 100/100</span>
              <p className="text-sm font-medium">Congratulations! You have explored everything!</p>
            </>
          ) : (
            <>
              <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">+{amount}</span>
              <p className="text-sm">{reason}</p>
            </>
          )}
        </div>
      </div>
    ), {
      position: 'top-left',
      duration: isMaxPoints ? 5000 : 3000,
    });
  };

  const recordVisit = (page: string, customMessage?: string) => {
    if (!visitedPages.has(page)) {
      setVisitedPages(prev => new Set(prev).add(page));
      addPoints(10, customMessage || `Oh, nice! You are on the ${page} page.`);
    }
  };

  return (
    <PointsContext.Provider value={{ points, addPoints, recordVisit }}>
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(PointsContext);
  if (context === undefined) {
    throw new Error('usePoints must be used within a PointsProvider');
  }
  return context;
}
