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
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/main-hero.webp"
          type="image/webp"
        />
        {/* <link
          rel="preload"
          as="image"
          href="/images/services_1920px_hero_background.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/Operations-Support-1920px-hero-section-3x-compressed.webp"
          type="image/webp"
        />

        <link
          rel="preload"
          as="image"
          href="/images/Operations-Support-1024px-hero-section.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/Data-Management-1920px-hero-section-3x-min.webp"
          type="image/webp"
        />

        <link
          rel="preload"
          as="image"
          href="/images/Data-Management-1024px-hero-section.webp"
          type="image/webp"
        />

        <link
          rel="preload"
          as="image"
          href="/images/Project-Management-Support-1920px-hero-section.webp"
          type="image/webp"
        />

        <link
          rel="preload"
          as="image"
          href="/images/Project-Management-Support-1024px-hero-section.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/Accounting-Reporting-1920px-hero-section.webp"
          type="image/webp"
        />

        <link
          rel="preload"
          as="image"
          href="/images/Accounting-Reporting-1024px-hero-section.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/Web-Development-Support-1920px-hero-section.webp"
          type="image/webp"
        />

        <link
          rel="preload"
          as="image"
          href="/images/Web_Development_Support_1024px_hero_section.webp"
          type="image/webp"
        /> */}

        {/* <link
          rel="preload"
          as="image"
          href="/images/homepage-clients-section-background_revisited.png"
          type="image/png"
        />

        <link
          rel="preload"
          as="image"
          href="/images/homepage-expertise-section-background_revisited.png"
          type="image/png"
        /> */}
{/* 
        <link
          rel="preload"
          as="image"
          href="/images/homepage-industries-section-background_revisited.png"
          type="image/png"
        /> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${robotoSerif.variable}`}>
        <img
          src="/images/main-hero.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        {/* <img
          src="/images/services_1920px_hero_background.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/Operations-Support-1920px-hero-section-3x-compressed.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />

        <img
          src="/images/Data-Management-1024px-hero-section.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/Data-Management-1920px-hero-section-3x-min.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/Project-Management-Support-1920px-hero-section.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />

        <img
          src="/images/Project-Management-Support-1024px-hero-section.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/Accounting-Reporting-1920px-hero-section.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />

        <img
          src="/images/Accounting-Reporting-1024px-hero-section.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/Web-Development-Support-1920px-hero-section.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />

        <img
          src="/images/Web_Development_Support_1024px_hero_section.webp"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />

        <img
          src="/images/homepage-clients-section-background_revisited.png"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/homepage-expertise-section-background_revisited.png"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        />
        <img
          src="/images/homepage-industries-section-background_revisited.png"
          alt=""
          width="1"
          height="1"
          style={{ display: "none" }}
        /> */}
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
