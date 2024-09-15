import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

import { NavMenu } from '@/app/components/layouts/NavMenu';
import { Footer } from "./components/layouts/Footer";
import { MainContent } from "./components/Content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CuttleNet HQ",
  description: "Home of CuttleNet Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <NavMenu />
          <MainContent>
            {children}
          </MainContent>
          <Footer />
        </NextUIProvider>
      </body>
    </html >
  );
}
