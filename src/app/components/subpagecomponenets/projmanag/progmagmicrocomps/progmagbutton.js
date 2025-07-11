import Link from "next/link";

export default function ProgMagButton() {
  return (
    <button className="progmag-grid-text-button font-inter">
      <Link
        href="/contact"
        className="general-linkage"
        title="Connect with our project managers"
      >
        Hire A Professional
      </Link>
    </button>
  );
}
