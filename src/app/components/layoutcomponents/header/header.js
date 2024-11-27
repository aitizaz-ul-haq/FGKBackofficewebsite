import DesktopHeader from "./headercomponents/desktopheader";
import MobileHeader from "./headercomponents/mobileheader";
import "./header.css";

export default function Header() {
  return (
    <>
      <div class="header-main-wrapper">
        <DesktopHeader />
      </div>

      <div class="header-mobile-wrapper">
        <MobileHeader />
      </div>
    </>
  );
}
