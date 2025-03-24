'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 rounded-full backdrop-blur-sm transition-all duration-300 ease-out ${
        resolvedTheme === 'light'
          ? 'bg-black/70'
          : 'bg-white/70'
      } hidden md:block`}
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
      }}
    />
  );
}