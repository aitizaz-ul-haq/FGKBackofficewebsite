import Link from "next/link";

export default function DataMagButton() {
  return (
    <Link
      href="/contact"
      className="general-linkage"
      title="Connect with our team now"
    >
      <button className="datamag-grid-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
