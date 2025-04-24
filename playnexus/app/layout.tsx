import type React from "react";
import "@/app/globals.css";
import { Mona_Sans as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "./Components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Playnexus - The Ultimate Streaming Platform",
  description: "Connect with streamers and viewers in real-time on Playnexus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
