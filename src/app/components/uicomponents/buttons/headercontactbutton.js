import Link from "next/link";
import "../styling/headercontactbutton.css";

export default function HeaderContactButton({ name, link }) {
  return (
    <>
      <Link href={link} title="Connect with us now">
        <button className="header-contact-button font-inter text-bold">
          {name}
        </button>
      </Link>
    </>
  );
}
