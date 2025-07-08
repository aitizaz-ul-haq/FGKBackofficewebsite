import Link from "next/link";

export default function TopBottomButton() {
  return (
    <Link href="/contact" className="general-linkage" title="Find out More">
      <button className="secondsectiontypetopandbottom-leftsection-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
