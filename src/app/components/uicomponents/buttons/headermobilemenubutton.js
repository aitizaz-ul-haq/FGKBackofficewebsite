"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styling/headermobilemenubutton.css";

export default function HeaderMobileMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <>
      <button
        className="header-mobile-menu-button"
        onClick={handleMobileMenuToggle}
      >
        <Image
          src="/mobile-menu-icon.png"
          alt="Mobile Menu Icon"
          width={50}
          height={50}
        />
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          {/* Close button */}
          <button
            className="mobile-menu-close-button"
            onClick={handleMobileMenuToggle}
          >
            &times;
          </button>
          <ul>
            <li>
              <Link href="/home">Services</Link>
            </li>
            <li>
              <Link href="/about">Industries</Link>
            </li>
            <li>
              <Link href="/services">Team</Link>
            </li>
            <li>
              <Link href="/contact">About</Link>
            </li>
            <li>
              <Link href="/contact">Careers</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
