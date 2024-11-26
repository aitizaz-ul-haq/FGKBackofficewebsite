import "./header.css";
import Image from "next/image";
import Link from "next/link";
import HeaderContactButton from "../../uicomponents/buttons/headercontactbutton";

export default function Header() {
  return (
    <>
      <div className="header-main-container">
        <div className="header-left-logosection">
          <Link href="/">
            <Image
              src="/fgk_letter_logo.png" // The path relative to the "public" folder
              alt="FGK logo"
              width={205} // Width of the image
              height={35} // Height of the image
            />
          </Link>
        </div>
        <div className="header-right-buttongroupsection">
          <button className="header-nobackground-button">Services</button>
          <button className="header-nobackground-button">Industries</button>
          <button className="header-nobackground-button">Team</button>
          <button className="header-nobackground-button">About</button>
          <button className="header-nobackground-button">Careers</button>
          <HeaderContactButton name="Contact Us" link="/contact" />
        </div>
      </div>
    </>
  );
}
