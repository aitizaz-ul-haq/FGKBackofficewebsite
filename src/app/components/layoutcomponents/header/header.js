"use client";

import { useState, useEffect } from "react";
import DesktopHeader from "./headercomponents/desktopheader";
import MobileHeader from "./headercomponents/mobileheader";
import "./header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header-main-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <DesktopHeader isScrolled={isScrolled} />
      </div>

      <div className={`header-mobile-wrapper ${isScrolled ? "scrolled" : ""}`}>
        <MobileHeader isScrolled={isScrolled} />
      </div>
    </>
  );
}
