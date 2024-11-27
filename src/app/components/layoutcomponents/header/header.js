import DesktopHeader from "./headercomponents/desktopheader";
import MobileHeader from "./headercomponents/mobileheader";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header-main-wrapper">
        <DesktopHeader />
      </div>

      <div className="header-mobile-wrapper">
        <MobileHeader />
      </div>
    </>
  );
}
