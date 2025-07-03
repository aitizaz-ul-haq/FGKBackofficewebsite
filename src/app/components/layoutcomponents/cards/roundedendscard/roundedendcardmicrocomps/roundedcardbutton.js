import Link from "next/link";

export default function RoundedCardButton({
  roundedcardtext,
  roundedcardhint,
}) {
  return (
    <Link
      href="/contact"
      className="buttonforcardlinkage"
      title={roundedcardhint}
    >
      <button className="right-roundedcard-arrowhead-button font-inter text-light">
        {roundedcardtext}
      </button>
    </Link>
  );
}
