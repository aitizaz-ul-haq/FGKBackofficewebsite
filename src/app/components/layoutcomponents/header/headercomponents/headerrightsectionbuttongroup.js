import Link from "next/link";
import headerButtons from "../headerdata/headerButtons.json";
import HeaderContactButton from "@/app/components/uicomponents/buttons/headercontactbutton";

export default function HeaderRightSectionButtonSection() {
  return (
    <>
      {headerButtons.map((button, index) => (
        <Link
          style={{ textDecoration: "none" }}
          key={index}
          href={button.link}
          passHref
        >
          <div className="header-nobackground-button font-inter text-light">
            {button.name}
          </div>
        </Link>
      ))}
      <HeaderContactButton name="Contact" link="/" />
    </>
  );
}
