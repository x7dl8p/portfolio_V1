import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import PointsCounter from "@/components/PointsCounter";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ted Thoughts",
  description: "My personal site to showcase my developer work and opinions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col font-sans antialiased")}>
        <Header />
        <div className="mx-auto flex w-full max-w-[52rem] flex-col px-8">
          <Providers>
            <PointsCounter />
            <main className="grow">{children}</main>
          </Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
