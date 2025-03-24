"use client";

import { usePoints } from "@/contexts/PointsContext";
import { cn } from "@/lib/utils";

export default function PointsCounter() {
  const { points } = usePoints();

  return (
    <div className="app__points-counter">
      <div className="fixed top-12 right-4 z-50">
        <div
          className={cn(
            "flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 backdrop-blur transition-colors",
            points === 100 && "border-green-500 text-green-500"
          )}
        >
          <span className="relative flex h-3 w-3">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                points === 100 ? "bg-green-500" : "bg-primary"
              )}
            ></span>
            <span
              className={cn(
                "relative inline-flex h-3 w-3 rounded-full",
                points === 100 ? "bg-green-500" : "bg-primary"
              )}
            ></span>
          </span>
          <span className="text-sm font-medium">{points}/100 Points</span>
        </div>
        {points === 100 && (
          <div className="absolute inset-0 bg-green-500 opacity-50 animate-pulse"></div>
        )}
      </div>
    </div>
  );
}
