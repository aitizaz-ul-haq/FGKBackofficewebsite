import Link from "next/link";

export default function AccButton() {
  return (
    <Link
      href="/contact"
      className="general-linkage"
      title="Talk to our Accountants now"
    >
      <button className="accandre-grid-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
