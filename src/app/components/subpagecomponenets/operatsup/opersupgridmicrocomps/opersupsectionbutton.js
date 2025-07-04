import Link from "next/link";

export default function OpersupSectionButton() {
  return (
    <Link
      href="/contact"
      className="general-linkage"
      title="Talk to our Operations experts"
    >
      <button className="operatsup-grid-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
