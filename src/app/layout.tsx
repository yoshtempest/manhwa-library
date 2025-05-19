import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider"
import Header from "@/components/Header";
import "./globals.css";


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
  description: "A library for descriptions and notes of manhwas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en-us" 
      suppressHydrationWarning // ⚠️ Suprime avisos de hydration
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          <ThemeProvider>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
