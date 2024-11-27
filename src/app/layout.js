import { Inter, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/layoutcomponents/header/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoSerif.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
