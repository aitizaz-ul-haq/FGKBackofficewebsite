import Link from "next/link";

export default function ThirdProcessButton() {
  return (
    <Link
      href="/contact"
      className="general-linkage"
      title="learn more about our process"
    >
      <button className="thirdprocesssection-bottom-button font-inter">
        Hire A Professional
      </button>
    </Link>
  );
}
