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
      <head>
        {/* <!-- Meta Pixel Code --> */}
        <script
                    dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1276073900410008');
                    fbq('track', 'PageView');`}}>
                    
                    </script>
                    <noscript><img height="1" width="1" style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1276073900410008&ev=PageView&noscript=1"
                    /></noscript>
{/* <!-- End Meta Pixel Code --> */}
      </head>
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
