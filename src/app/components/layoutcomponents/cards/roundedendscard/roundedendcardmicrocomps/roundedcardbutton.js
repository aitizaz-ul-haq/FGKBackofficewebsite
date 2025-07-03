import Link from "next/link";

export default function RoundedCardButton({
  roundedcardtext,
  roundedcardhint,
  roundedcardlink
}) {
  return (
    <Link
      href={roundedcardlink}
      className="buttonforcardlinkage"
      title={roundedcardhint}
    >
      <button className="right-roundedcard-arrowhead-button font-inter text-light">
        {roundedcardtext}
      </button>
    </Link>
  );
}
