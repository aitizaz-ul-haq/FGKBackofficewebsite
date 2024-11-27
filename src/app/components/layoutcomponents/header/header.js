import HeaderRightSection from "./headercomponents/headerrightsection";
import HeaderLeftSection from "./headercomponents/headerleftsection";
import HeaderMobileMenuRightSection from "./headercomponents/headermobilemenurightsection";
import "./header.css";

export default function Header() {
  return (
    <>
      <div class="header-main-wrapper">
        <div className="header-main-container">
          <HeaderLeftSection />
          <HeaderRightSection />
        </div>
      </div>

      <div class="header-mobile-wrapper">
        <div className="header-mobile-container">
          <HeaderLeftSection />
          <HeaderMobileMenuRightSection />
        </div>
      </div>
    </>
  );
}
