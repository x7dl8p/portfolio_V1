"use client";

import { Button } from "@/components/ui/Button";
import { FileDown } from "lucide-react";
import Link from "next/link";

export default function ResumeButton() {
  return (
    <Link href="/resume.pdf" target="_blank">
      <Button variant="outline" className="px-4 py-2">
        <span className="font-semibold">Resume</span>
        <FileDown className="ml-2 size-5" />
      </Button>
    </Link>
  );
}
