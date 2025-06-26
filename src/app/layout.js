"use client";

import { Inter, Roboto_Serif } from "next/font/google";

import "./globals.css";
import Header from "./components/layoutcomponents/header/header";
import Footer from "./components/layoutcomponents/footer/footer";
// import Head from "next/head";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/Operations-Support-1920px-hero-section-3x-compressed.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/images/Data-Management-1920px-hero-section-3x-min.png"
          type="image/png"
        />
      </head>
      <body className={`${inter.variable} ${robotoSerif.variable}`}>
         <img
          src="/images/Operations-Support-1920px-hero-section-3x-compressed.png"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/Data-Management-1920px-hero-section-3x-min.png"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
