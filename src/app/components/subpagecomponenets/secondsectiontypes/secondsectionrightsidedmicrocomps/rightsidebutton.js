import Link from "next/link";

export default function RightSideButton() {
  return (
    <Link href="/contact" className="general-linkage" title="Discuss with us">
      <button className="secondsectionrightsided-leftsection-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
