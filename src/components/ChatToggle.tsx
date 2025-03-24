"use client";

import { Bot, BotOff } from "lucide-react";
import { Button } from "./ui/Button";

export default function ChatToggle() {

  return (
    <Button size="icon" variant="ghost">
      <BotOff className="size-5" />
      <span className="sr-only">Chat Toggle</span>
    </Button>
  );
}
