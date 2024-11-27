import { Inter, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/layoutcomponents/header/header";
import Footer from "./components/layoutcomponents/footer/footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"], // Include necessary subsets
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Full range of weights
  style: ["normal", "italic"], // Include both styles
  display: "swap", // Optimizes font loading
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin", "latin-ext"], // Include necessary subsets
  variable: "--font-roboto-serif", // CSS variable for font
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Full range of weights
  style: ["normal", "italic"], // Include both styles
  display: "swap", // Optimizes font loading
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
