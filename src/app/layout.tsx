import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/Header/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manhwa Library",
  description: "A library for manhwas: descriptions and notes",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en-us" 
      suppressHydrationWarning // ⚠️ Suprime avisos de hydration (explicado abaixo)
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
      </body>
    </html>
  );
}
