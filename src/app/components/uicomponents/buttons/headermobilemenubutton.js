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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
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
              <Link href="/services" onClick={handleMenuItemClick}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/industries" onClick={handleMenuItemClick}>
                Industries
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={handleMenuItemClick}>
                Team
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleMenuItemClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" onClick={handleMenuItemClick}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
