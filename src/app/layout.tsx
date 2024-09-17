import React from "react";
import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

const poppins = Nunito({ weight: [ '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dimarak | Software Solutions',
  description: 'Dimarak creates software solutions for businesses and individuals. We are a team of software engineers, designers, and product managers who are passionate about building digital products that people love to use.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${poppins.className}  dark:bg-dark  dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="pt-[30px]"> 

            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


