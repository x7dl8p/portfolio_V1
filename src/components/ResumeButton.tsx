"use client";

import { Button } from "@/components/ui/Button";
import { FileDown } from "lucide-react";
import Link from "next/link";
import { usePoints } from "@/contexts/PointsContext";

export default function ResumeButton() {
  const { addPoints } = usePoints();
  
  const handleClick = () => {
    addPoints(5, "You downloaded my resume! Hope you like what you see.");
  };

  return (
    <Link href="/resume.pdf" target="_blank" onClick={handleClick}>
      <Button variant="outline" className="px-4 py-2">
        <span className="font-semibold">Resume</span>
        <FileDown className="ml-2 size-5" />
      </Button>
    </Link>
  );
}
