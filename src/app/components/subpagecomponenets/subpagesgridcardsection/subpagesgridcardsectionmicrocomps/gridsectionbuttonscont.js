import Link from "next/link";

export default function GridSectionButtonsCont() {
  return (
    <div className="subpagesgridcardsection-button-container">
      <Link
        href="/contact"
        className="general-linkage"
        title="Talk to our Professional Team"
      >
        <button className="subpagesgridcardsection-button font-inter">
          Hire A Professional
        </button>
      </Link>
    </div>
  );
}
