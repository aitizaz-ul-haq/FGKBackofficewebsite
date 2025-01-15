"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styling/headermobilemenubutton.css";

export default function HeaderMobileMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

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
                  <Link
                    href="/services"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/operationssupport"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Operations Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/datamanagement"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Data Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/projectmanagement"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/accountingandreporting"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Accounting & Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/webdevelopment"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/humanresources"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Human Resorces
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
                    className="submenu-item"
                  >
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/healthcare"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Accountancy & Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/finance"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Tech Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/education"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/retail"
                    onClick={handleMenuItemClick}
                    className="submenu-item"
                  >
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
