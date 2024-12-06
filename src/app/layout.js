"use client";

import { Inter, Roboto_Serif } from "next/font/google";

import "./globals.css";
import Header from "./components/layoutcomponents/header/header";
import Footer from "./components/layoutcomponents/footer/footer";

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
      <body className={`${inter.variable} ${robotoSerif.variable}`}>
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
