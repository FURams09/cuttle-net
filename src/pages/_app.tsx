import Head from 'next/head'
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { NavMenu } from "@/app/components/layouts/NavMenu";
import { Footer } from '@/app/components/layouts/Footer';
import { MainContent } from "@/app/components/Content";

import '@/app/globals.css'

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