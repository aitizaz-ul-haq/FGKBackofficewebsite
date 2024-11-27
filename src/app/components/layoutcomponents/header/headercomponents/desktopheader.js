import HeaderLeftSection from "./headerleftsection";
import HeaderRightSection from "./headerrightsection";

export default function DesktopHeader() {
  return (
    <div className="header-main-container">
      <HeaderLeftSection />
      <HeaderRightSection />
    </div>
  );
}
