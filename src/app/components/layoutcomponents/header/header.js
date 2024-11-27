import HeaderRightSection from "./headercomponents/headerrightsection";
import HeaderLeftSection from "./headercomponents/headerleftsection";
import HeaderMobileMenuRightSection from "./headercomponents/headermobilemenurightsection";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header-main-container">
        <HeaderLeftSection />
        <HeaderRightSection />
      </div>

      <div className="header-mobile-container">
        <HeaderLeftSection />
        <HeaderMobileMenuRightSection />
      </div>
    </>
  );
}
