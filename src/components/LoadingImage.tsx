"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LoadingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  threshold?: number; // Optional delay in milliseconds
}

export default function LoadingImage({
  src,
  alt,
  width,
  height,
  className,
  threshold = 0,
}: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), threshold);
    return () => clearTimeout(timer);
  }, [threshold]);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="loader" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
