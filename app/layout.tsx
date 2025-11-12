import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import { Meow_Script } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Light to ExtraBold
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Light to ExtraBold
});

export const meowScript = Meow_Script({
  variable: "--font-meow",
  subsets: ["latin"],
  weight: "400", // Meow Script only has one weight
});

export const metadata: Metadata = {
  title: "Expense Scout",
  description: "Expense Scout an Expense Tracker App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable} ${meowScript.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
