import HeaderLeftSection from "./headerleftsection";
import HeaderRightSection from "./headerrightsection";

export default function DesktopHeader({ isScrolled }) {
  return (
    <div
      className={`header-main-container ${
        isScrolled ? "desktop-header-scrolled" : ""
      }`}
    >
      <HeaderLeftSection />
      <HeaderRightSection />
    </div>
  );
}
