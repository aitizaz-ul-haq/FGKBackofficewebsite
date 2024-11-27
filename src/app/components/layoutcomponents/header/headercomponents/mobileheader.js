import HeaderMobileMenuRightSection from "./headermobilemenurightsection";
import HeaderLeftSection from "./headerleftsection";

export default function MobileHeader() {
  return (
    <div className="header-mobile-container">
      <HeaderLeftSection />
      <HeaderMobileMenuRightSection />
    </div>
  );
}
