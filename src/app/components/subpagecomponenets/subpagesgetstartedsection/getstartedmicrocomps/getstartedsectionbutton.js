import Link from "next/link";

export default function GetStartedSectionButton() {
  return (
    <Link
      href="/contact"
      className="general-linkage"
      title="lets start talking"
    >
      <button className="subpagesgetstartedsection-button">
        Hire A Professional
      </button>
    </Link>
  );
}
