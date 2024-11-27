import HeaderRightSection from "./headercomponents/headerrightsection";
import HeaderLeftSection from "./headercomponents/headerleftsection";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header-main-container">
        <HeaderLeftSection />
        <HeaderRightSection />
      </div>
    </>
  );
}
