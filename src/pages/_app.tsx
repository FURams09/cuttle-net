import type { Metadata } from "next";
import Head from 'next/head'
import { AppProps } from "next/app";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import { NavMenu } from "@/app/components/layouts/NavMenu";
import { Footer } from '@/app/components/layouts/Footer';
import { MainContent } from "@/app/components/Content";

import '@/app/globals.css'


const geistSans = localFont({
    src: "../app/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "../app/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });

export default function MyApp({ Component, pageProps} : AppProps) {
    return (
            <>
                <Head>
                    <title>CuttleNet HQ</title>
                </Head>
                <NextUIProvider>
                    <NavMenu />
                    <MainContent>
                        <Component {...pageProps} />
                    </MainContent>
                    <Footer />
                </NextUIProvider>
            </>
    )
           
}