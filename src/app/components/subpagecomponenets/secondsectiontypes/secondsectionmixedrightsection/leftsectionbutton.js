import Link from "next/link";

export default function LeftSectionButton() {
  return (
    <Link href="/contact" className="general-linkage" title="Come talk to us">
      <button className="secondsectionmixed-leftsection-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
