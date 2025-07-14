import Link from "next/link";

export default function ProgMagButton() {
  return (
    <Link
      href="/contact"
      className="general-linkage"
      title="Connect with our project managers"
    >
      <button className="progmag-grid-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
