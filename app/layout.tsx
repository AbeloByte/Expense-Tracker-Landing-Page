import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
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
    <html>
      <body
        lang="en"
        className={`${urbanist.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
