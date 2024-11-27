import Link from "next/link";
import headerButtons from "../headerdata/headerButtons.json";

export default function HeaderRightSectionButtonSection() {
  return (
    <>
      {headerButtons.map((button, index) => (
        <Link key={index} href={button.link} passHref>
          <button className="header-nobackground-button font-inter text-light">
            {button.name}
          </button>
        </Link>
      ))}
    </>
  );
}
