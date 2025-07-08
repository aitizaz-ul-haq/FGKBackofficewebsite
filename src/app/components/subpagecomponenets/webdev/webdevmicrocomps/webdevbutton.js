import Link from "next/link";

export default function WebDevButton() {
  return (
    <Link
      href="/contact"
      className="general-linkage"
      title="Talk to our Web Professionals"
    >
      <button className="webdev-grid-text-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
