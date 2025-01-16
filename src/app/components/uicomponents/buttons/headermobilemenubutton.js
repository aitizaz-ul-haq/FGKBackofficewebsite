"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styling/headermobilemenubutton.css";

export default function HeaderMobileMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Disable/Enable body scroll when menu state changes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubMenu(null);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  const handleSubMenuToggle = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
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
          <button
            className="mobile-menu-close-button"
            onClick={handleMobileMenuToggle}
          >
            &times;
          </button>
          <Image
            src="/fgk_circular_logo.png"
            alt="Mobile Menu Icon"
            width={70}
            height={70}
            className="mobile-menu-logo"
          />
          <ul>
            <li>
              <button
                onClick={() => handleSubMenuToggle("services")}
                className="submenu-toggle"
              >
                Services
              </button>
              <ul
                className={`submenu ${
                  activeSubMenu === "services" ? "active" : ""
                }`}
              >
                <li>
                  <Link href="/services" onClick={handleMenuItemClick}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/operationssupport"
                    onClick={handleMenuItemClick}
                  >
                    Operations Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/datamanagement"
                    onClick={handleMenuItemClick}
                  >
                    Data Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/projectmanagement"
                    onClick={handleMenuItemClick}
                  >
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/accountingandreporting"
                    onClick={handleMenuItemClick}
                  >
                    Accounting & Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/webdevelopment"
                    onClick={handleMenuItemClick}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/humanresources"
                    onClick={handleMenuItemClick}
                  >
                    Human Resources
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => handleSubMenuToggle("industries")}
                className="submenu-toggle"
              >
                Industries
              </button>
              <ul
                className={`submenu ${
                  activeSubMenu === "industries" ? "active" : ""
                }`}
              >
                <li>
                  <Link
                    href="/industries/technology"
                    onClick={handleMenuItemClick}
                  >
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/healthcare"
                    onClick={handleMenuItemClick}
                  >
                    Accountancy & Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/finance"
                    onClick={handleMenuItemClick}
                  >
                    Tech Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/education"
                    onClick={handleMenuItemClick}
                  >
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link href="/industries/retail" onClick={handleMenuItemClick}>
                    Insurance
                  </Link>
                </li>
              </ul>
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
